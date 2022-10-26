<template>
  <header style="z-index: 10" class="bg-gray-50 px-5 py-5 lg:px-8 text-white border-b border-white sticky top-0">
    <div class="flex items-center justify-between max-w-7xl m-auto">
      <a href="/">
        <img src="../assets/parti.svg" alt="Logo" class="w-[70px] h-[50px]" />
      </a>
      <div class="flex flex-row">
        <a
          href="#"
          @click="onConnect"
          role="button"
          class="block w-fit bg-peace rounded-[100px] font-display font-bold text-white text-center text-lg lg:text-xl whitespace-nowrap sm:px-4 lg:px-8 py-4 ml-auto web3-button"
        >
          <span class="web3-span text-sm sm:text-lg text-black font-bold px-4 py-4 sm10">
            {{ walletAddress  ? walletAddressAppended : 'CONNECT PARTISIA WALLET'}}
          </span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useStore  } from 'vuex'
import { useQuasar } from 'quasar'
import PartisiaSdk from 'partisia-sdk'

export default {
  data() {
    return {
      displayModal: false,
      web3Enabled: false,
    }
  },
  computed: {
    walletAddress() {
      return this.sdkConnect?.connection?.account?.address
    },
    walletAddressAppended() {
      let first = this.walletAddress.substring(0, 4)
      let last = this.walletAddress.substring(this.walletAddress.length - 6)
      return first + '...' + last
    },
  },
  methods: {
    openDeployContract() {
      window.open('https://mpcexplorer.com/deploy-contract', '_blank')
    },
  },
  setup() {
    const $q = useQuasar()
    const store = useStore()
    const txtChainId = ref('Partisia Blockchain')
    const txtPermissions = ref('sign')

    store.watch(
      (state, getters) => getters.onWalletConnect,
      (newValue, oldValue) => {
        onConnect()
      }
    )
    return {
      txtChainId,
      txtPermissions,
      sdkConnect: computed(() => store.getters.sdkClient),
      onConnect: async () => {
        try {
          const sdk = new PartisiaSdk()
          const permissions = txtPermissions.value
            .split(',')
            .join(' ')
            .split(' ')
            .filter((v) => v.length > 0)
          await sdk.connect({
            chainId: txtChainId.value,
            permissions,
            dappName: 'Partisia UItoolkit',
          })
          await store.dispatch('sdkConnect', { connection: sdk.connection, seed: sdk.seed })
        } catch (error) {
          $q.notify({ type: 'negative', position: 'top', message: error.message })
        }
      },
      onDisconnect: async () => {
        await store.dispatch('sdkClear')
      },
    }
  },
}
</script>
