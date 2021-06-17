<template>
  <q-page padding>
    <div class="text-h6 q-pt-md">Connect dApp to a Wallet</div>
    <div class="text-body1">Import the library and use it in an Web dApp</div>
    <q-card>
      <q-card-section>
        <div>
          <pre class="prettyprint break-line"><code class="language-javascript">{{codeDapp}}</code></pre>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions vertical>
        <q-btn color="primary" label="Connect to Wallet" @click="onConnect" />
      </q-card-actions>
    </q-card>
    <div class="text-body1 q-pt-md">
      Once connected, <b>sdk</b> will provide an output like the below. The account <b>address</b> and <b>pub</b> are
      the on chain address and publicKey of the connected account. They can be used to assist in signing contract
      interactions in the next step <router-link to="contract">contract</router-link>.
    </div>
    <div class="text-body1">
      The <b>seed</b> is the dApp&apos;s seed for generating a keypair used for wallet communication
    </div>
    <div class="text-body1">The popupWindow <b>box</b> is the wallets publicKey used for dApp communication</div>
    <div>
      <pre class="prettyprint break-line"><code class="language-json">{{`{
  "connection": {
    "account": {
      "address": "00cb7d60b722e85f7530e67652ef41ad84b9c8cd17",
      "pub": "02156ef2d8e1d406549822aa790d838d6c550f79a3c397d9912129b122203a75a3"
    },
    "popupWindow": {
      "tabId": 237,
      "box": "02408b13a15b07e479f4933f8b006907426238f048957187fd6eb077c25d044358"
    }
  },
  "seed": "62825305f0d64932fee23549d8dbd230d4d4d011ee2596f4f07e6af3c61ac8cb"
}`}}</code></pre>
    </div>
  </q-page>
</template>

<script>
import { useQuasar, openURL } from 'quasar'
import { useStore, mapGetters } from 'vuex'
import PartisiaSdk from 'partisia-sdk'
export default {
  // name: 'PageName',
  computed: {
    ...mapGetters(['sdkClient']),
  },
  setup() {
    const $q = useQuasar()
    const store = useStore()
    return {
      codeDapp: `// import the library
import PartisiaSdk from 'partisia-sdk'

// use the library
const sdk = new PartisiaSdk()
await sdk.connect({
  chainId: 'PARTISIA beta net (0.9)',
  permissions: ['sign'],
  dappName: 'Ex dApp Name',
})

// Save a reference to sdk to use it other parts or your application
`,

      onConnect: async () => {
        try {
          const sdk = new PartisiaSdk()
          await sdk.connect({
            chainId: 'PARTISIA beta net (0.9)',
            permissions: ['sign'],
            dappName: 'Ex dApp Name',
          })
          await store.dispatch('sdkConnect', { connection: sdk.connection, seed: sdk.seed })
        } catch (error) {
          $q.notify({ type: 'negative', position: 'top', message: error.message })
        }
      },
    }
  },
  mounted() {
    setTimeout(() => {
      PR.prettyPrint()
    }, 10)
  },
}
</script>
