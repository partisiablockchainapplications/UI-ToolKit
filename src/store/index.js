import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const defaultStateChain = () => {
  return {
    loadError: null,
    status: [],
    onWalletConnect: 0,
  }
}

export default store(function (/* { ssrContext } */) {
  const keyStorage = 'vuex'
  const persistedState = createPersistedState({
    key: keyStorage,
    paths: ['sdkClint'],
  })

  const Store = createStore({
    plugins: [persistedState],
    modules: {
      sdkClint: {
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
      },
      chain: {
        state: defaultStateChain(),
        mutations: {
          RESET_STATE_CHAIN: (state) => {
            Object.assign(state, defaultStateChain())
          },
          LOAD_ERROR: (state, payload) => {
            state.loadError = payload
          },
          SET_STATUS: (state, payload) => {
            state.status = payload
          },
          NEW_TRANSACTION: (state, payload) => {
          },
          SET_WALLET_CONNECT: (state, payload) => {
            state.onWalletConnect = payload
          },
        },
        actions: {
          resetCart: ({ commit }) => {
            commit('RESET_STATE_CHAIN')
          },
          loadError: ({ commit }, payload) => {
            commit('LOAD_ERROR', payload)
          },
          setStatus: (context, payload) => {
            context.commit('SET_STATUS', payload)
          },
          wsMessage: (context, { data_type, payload }) => {
            if (data_type === 'Block') {
              context.commit('NEW_BLOCK', payload)
            } else if (data_type === 'Transaction') {
              context.commit('NEW_TRANSACTION', payload)
            }
          },
          triggerWalletConnect: (context) => {
            context.commit('SET_WALLET_CONNECT', Date.now())
          },
        },
        getters: {
          onWalletConnect: (state) => {
            return state.onWalletConnect
          },
          loadError: (state) => {
            return state.loadError
          },
          status: (state, getters) => {
            return state.status
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
