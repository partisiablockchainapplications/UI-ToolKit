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

    <q-separator class="q-mt-lg" color="grey" inset />
    <q-separator class="q-mt-xs" color="grey" inset />
    <q-separator class="q-mt-xs" color="grey" inset />

    <div class="text-h6 q-pt-md">Request Contract Interaction</div>
    <div class="text-body1">
      You will have to build a serialized payload of the contract interaction and send it over as <b>hex</b>. Below is
      an example of a transfering <b>{{ txtAmount }}</b> token of symbol <b>{{ txtSymbol }}</b> to address
      <b>{{ txtTo }}</b
      >.
    </div>
    <q-card>
      <q-card-section>
        <div>
          <pre
            class="prettyprint break-line"
          ><code class="language-javascript">{{`import { partisiaCrypto } from 'partisia-crypto'
import { PartisiaRpc } from 'partisia-rpc'

const rpc = PartisiaRpc({
  baseURL: 'https://betareader.partisiablockchain.com/shards/Shard0',
})
const nonce = await rpc.getNonce(sdk.connection.account.address)
const contract = '02000000000000000000000000000000000000b008'
const payload = {
  invocationType: ${partisiaCrypto.transaction.CONSTANTS.TokenInvocation.TRANSFER},
  symbol: '${txtSymbol}',
  amount: '${txtAmount}',
  from: '${sdkClient?.connection?.account?.address || '<connected address>'}',
  to: '${txtTo}',
}
const serialized = partisiaCrypto.transaction.serializedTransaction(
  { nonce, validTo: Date.now() + 120 * 1000 }, // two minutes
  { contract },
  payload,
  partisiaCrypto.abi_system.Payload_TokenTransfer
)
const res = await sdk.signMessage({
  payload: serialized.toString('hex'),
  payloadType: 'hex',
  dontBroadcast: false,
})`}}</code></pre>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions vertical>
        <q-input class="q-mb-sm" outlined v-model="baseURL" label="Base URL" />
        <br/>
        <q-input type="number" outlined v-model="txtSymbol" label="Symbol" />
        <q-input class="q-mt-sm" type="number" outlined v-model="txtAmount" label="Amount" />
        <q-input class="q-mt-sm" outlined v-model="txtTo" label="To" />
        <q-btn class="q-mt-sm" color="primary" label="Transfer" @click="onTransfer" />
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
    const txtTo = ref('00ffffffffffffffffffffffffffffffffffffffff')
    const txtSymbol = ref('1234')
    const txtAmount = ref('1')
    const baseURL = ref('https://betareader.partisiablockchain.com/shards/Shard0')
    return {
      partisiaCrypto,
      txtSymbol,
      txtAmount,
      txtTo,
      txtMessage,
      baseURL,
      onTransfer: async () => {
        try {
          const sdkClient = store.getters.sdkClient
          assert(sdkClient, 'Must connect to a wallet first')
          const sdk = new PartisiaSdk({ seed: sdkClient.seed, connection: sdkClient.connection })
          // Payload_TokenTransfer
          const rpc = PartisiaRpc({
            baseURL: baseURL.value,
          })
          const nonce = await rpc.getNonce(sdk.connection.account.address)
          console.log('nonce', nonce)
          const contract = '02000000000000000000000000000000000000b008'
          const payload = {
            invocationType: partisiaCrypto.transaction.CONSTANTS.TokenInvocation.TRANSFER,
            symbol: txtSymbol.value,
            amount: txtAmount.value,
            from: sdk.connection.account.address,
            to: txtTo.value,
          }
          console.log('payload', payload)
          console.log(
            { nonce, validTo: Date.now() + 120 * 1000 }, // two minutes
          )
          const serialized = partisiaCrypto.transaction.serializedTransaction(
            { nonce, validTo: Date.now() + 120 * 1000 }, // two minutes
            { contract },
            payload,
            partisiaCrypto.abi_system.Payload_TokenTransfer
          )
          console.log('serialized', serialized)
          const res = await sdk.signMessage({
            payload: serialized.toString('hex'),
            payloadType: 'hex',
            dontBroadcast: false,
          })
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
