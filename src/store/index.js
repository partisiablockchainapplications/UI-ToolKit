import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const keyStorage = 'vuex'
  const vuexLocal = new VuexPersistence({
    key: keyStorage,
    storage: window.localStorage,
  })

  const Store = createStore({
    plugins: [vuexLocal.plugin],
    modules: {
      sdk: {
        state: {
          sdk: null,
        },
        mutations: {
          CLEAR: (state) => {
            state.sdk = null
          },
          CONNECT: (state, payload) => {
            state.sdk = payload
          },
        },
        actions: {
          sdkClear: (context) => {
            context.commit('CLEAR')
          },
          sdkConnect: (context, payload) => {
            context.commit('CONNECT', payload)
          }
        },
        getters: {
          sdkClient: (state, getters) => {
            return state.sdk
          },
        },
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
