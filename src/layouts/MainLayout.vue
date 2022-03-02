<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Partisia SDK </q-toolbar-title>

        <div class="text-subtitle2" style="cursor: pointer" @click="onGitLab">
          GitLab
          <q-icon size="lg" name="lab la-gitlab" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer side="left" v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <!-- <q-item-label header class="text-grey-8"> Read More </q-item-label> -->

        <q-list bordered class="rounded-borders">
          <template v-for="(route, i) in aryRoutes" :key="i">
            <q-expansion-item expand-separator :label="route.title">
              <q-list bordered>
                <template v-for="(sub, j) in route.sub" :key="j">
                  <q-item clickable @click="onRouteChange(sub.link)">
                    <!-- tag="a" :href="sub.link" -->
                    <q-item-section>
                      <div class="row items-center no-wrap">
                        <q-icon v-if="routeActive === sub.link" left name="lar la-dot-circle" />
                        <q-icon v-else left name="lar la-circle" />
                        <q-item-label>{{ sub.name }}</q-item-label>
                      </div>
                    </q-item-section>
                  </q-item>
                </template>
              </q-list>
            </q-expansion-item>
          </template>
        </q-list>
      </q-list>
    </q-drawer>
    <q-drawer show-if-above side="right" bordered>
      <template v-if="sdkClient">
        <q-expansion-item
          expand-separator
          label="Connected To"
          :caption="`${sdkClient.connection.account.address.substr(
            0,
            12
          )}...${sdkClient.connection.account.address.substr(30)}`"
        >
          <q-card>
            <q-card-section>
              <div class="text-caption">Connection Details:</div>
              <pre
                class="prettyprint break-line"
              ><code class="language-javascript">{{JSON.stringify(sdkClient, null, 2)}}</code></pre>
            </q-card-section>

            <q-separator />

            <q-card-actions vertical>
              <q-btn color="secondary" label="Disconnect Wallet" @click="onDisconnect" />
            </q-card-actions>
          </q-card>
        </q-expansion-item>
      </template>
    </q-drawer>
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useStore, mapGetters } from 'vuex'
import { useQuasar, openURL } from 'quasar'
export default defineComponent({
  name: 'MainLayout',

  components: {},
  methods: {
    onRouteChange(link) {
      this.$router.push(link)
    },
  },
  computed: {
    ...mapGetters(['sdkClient']),
  },
  setup() {
    const $q = useQuasar()
    const store = useStore()

    // const sdk = ref(store.getters.sdk)
    const leftDrawerOpen = ref(false)
    const routeActive = ref(null)

    const aryRoutes = [
      {
        title: 'Introduction',
        sub: [
          { name: 'Partisia', link: 'partisia' },
          { name: 'Wallets', link: 'wallets' },
          // { name: 'Security Audits', link: 'audit' },
        ],
      },
      {
        title: 'Getting Started',
        sub: [
          { name: 'Installation', link: 'installation' },
          { name: 'Connect Wallet', link: 'connect' },
          { name: 'Contract Interaction', link: 'contract' },
        ],
      },
    ]
    return {
      leftDrawerOpen,
      routeActive,
      aryRoutes,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      onGitLab: () => {
        openURL('https://gitlab.com/partisiaapplications/partisia-sdk')
      },
      onDisconnect: async () => {
        // const sdk = store.
        await store.dispatch('sdkClear')
      },
    }
  },
  mounted() {
    this.routeActive = this.$route.path.substr(1) || 'partisia'
    setTimeout(() => {
      PR.prettyPrint()
    }, 10)
  },
  watch: {
    $route(to, from) {
      this.routeActive = to.path.substr(1)
    },
    sdkClient(v) {
      setTimeout(() => {
        PR.prettyPrint()
      }, 10)
    },
  },
})
</script>

<style lang="scss" scoped>
.route-active {
  background: $green-4;
  border: 1px solid $green-3;
  border-radius: 4px;
}
</style>
