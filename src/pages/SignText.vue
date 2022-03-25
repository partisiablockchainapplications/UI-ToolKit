<template>
  <q-page padding>
    <div class="text-h6 q-pt-md">Request Signing Raw <b>utf8</b></div>
    <div class="text-body1">
      After sucessfully <router-link to="connect">connecting</router-link> to a wallet, send over a <b>utf8</b> message
      to sign
    </div>
    <q-card>
      <q-card-section>
        <div>
          <pre class="prettyprint break-line"><code class="language-javascript">{{`const res = await sdk.signMessage({
  payload: '${txtMessage}',
  payloadType: 'utf8',
})`}}</code></pre>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions vertical>
        <q-input outlined v-model="txtMessage" label="Text for Wallet to Sign" />
        <q-btn class="q-mt-sm" color="primary" label="Sign Text" @click="onSignUtf8" />
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
    const txtMessage = ref('dApp Message')

    return {
      partisiaCrypto,
      txtMessage,

      onSignUtf8: async () => {
        try {
          const sdkClient = store.getters.sdkClient
          assert(sdkClient, 'Must connect to a wallet first')
          const sdk = new PartisiaSdk({ seed: sdkClient.seed, connection: sdkClient.connection })
          const res = await sdk.signMessage({
            payload: txtMessage.value,
            payloadType: 'utf8',
          })
          console.log('wallet sign:', JSON.stringify(res, null, 2))
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
