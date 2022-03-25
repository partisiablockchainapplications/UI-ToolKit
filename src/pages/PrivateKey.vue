<template>
  <q-page padding>
    <div class="text-h6 q-pt-md">Request Private Key</div>
    <div class="text-body1">
      This should only be requested if your DApp needs to do many transactions frequently and you dont want to burden
      the user with Popups and Confirmations. For this work you must have the wallet connected with the 'private_key'
      permission.
    </div>
    <q-card>
      <q-card-section>
        <div>
          <pre
            class="prettyprint break-line"
          ><code class="language-javascript">{{`const res = await sdk.requestKey()`}}</code></pre>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions vertical>
        <q-btn class="q-mt-sm" color="primary" label="Request Key" @click="onRequestKey" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useQuasar, openURL } from 'quasar'
import { useStore, mapGetters } from 'vuex'
import assert from 'assert'
import PartisiaSdk from 'partisia-sdk'
import { PartisiaRpc } from 'partisia-rpc'
import { partisiaCrypto } from 'partisia-crypto'

export default {
  // name: 'PageName',
  computed: {
    ...mapGetters(['sdkClient']),
  },
  setup() {
    const $q = useQuasar()
    const store = useStore()
   
    return {
      partisiaCrypto,
      onRequestKey: async () => {
        try {
          const sdkClient = store.getters.sdkClient
          assert(sdkClient, 'Must connect to a wallet first')
          const sdk = new PartisiaSdk({ seed: sdkClient.seed, connection: sdkClient.connection })
          const res = await sdk.requestKey()
          console.log('wallet key:', JSON.stringify(res, null, 2))
          $q.notify({
            timeout: 0,
            actions: [{ icon: 'close', color: 'white' }],
            type: 'positive',
            html: true,
            position: 'top',
            message: `<pre class="prettyprint break-line"><code class="language-javascript">${JSON.stringify(
              res,
              null,
              2
            )}</code></pre>`,
          })
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
