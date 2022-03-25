<template>
  <q-page padding>
    <div class="text-h6 q-pt-md">Request Contract Interaction</div>
    <div class="text-body1">
      You will have to build a serialized payload of the contract interaction and send it over as <b>hex</b>. Below is
      an example of a staking MPC.
    </div>
    <q-card>
      <q-card-section>
        <div>
          <pre class="prettyprint break-line"><code class="language-javascript">{{codeExHexPayload}}</code></pre>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <div>
          <div class="text-body1">
            If you wanted to specify the entire transaction including building the header and inner properties, you
            could do it like this
          </div>
          <pre class="prettyprint break-line"><code class="language-javascript">{{codeExHex}}</code></pre>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions vertical>
        <q-input class="q-mb-sm" outlined v-model="baseURL" label="Base URL" />
        <br />
        <q-input class="q-mt-sm" type="number" outlined v-model="txtAmount" label="Amount" />
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
    const txtAmount = ref('1')
    const baseURL = ref('https://betareader.partisiablockchain.com/shards/Shard0')

    const codeExHex = `import { partisiaCrypto } from 'partisia-crypto'
import { PartisiaRpc } from 'partisia-rpc'

// sdk using connection from before
const sdk = new PartisiaSdk({ seed: sdkClient.seed, connection: sdkClient.connection })

// new rpc for communicating directly with nodes
const rpc = PartisiaRpc({
  baseURL: '${baseURL.value}',
})

// Paramaters
const nonce = await rpc.getNonce(sdk.connection.account.address)
const contract = '01a4082d9d560749ecd0ffa1dcaaaee2c2cb25d881'
const payload = {
  invocationByte: 0,
  amount: '${txtAmount.value}',
}

// Build the payload buffer
const abi = partisiaCrypto.abi_system.Payload_StakeTokens
const dataPayload = partisiaCrypto.structs.serializeToBuffer(payload, ...abi)

// Turn the payload buffer into a fully serialized transaction
const serialized = partisiaCrypto.transaction.serializedTransaction(
  { nonce, validTo: Date.now() + 120 * 1000 }, // two minutes
  { contract },
  dataPayload,
)

// Sign it from the wallet
const res = await sdk.signMessage({
  payload: serialized.toString('hex'),
  payloadType: 'hex',
  dontBroadcast: false,
})`
    const codeExHexPayload = `import { partisiaCrypto } from 'partisia-crypto'

// sdk using connection from before
const sdk = new PartisiaSdk({ seed: sdkClient.seed, connection: sdkClient.connection })

const abi = partisiaCrypto.abi_system.Payload_StakeTokens
const dataPayload = partisiaCrypto.structs.serializeToBuffer({
  invocationByte: 0,
  amount: '10000',
}, ...abi)


const res = await sdk.signMessage({
  contract: '01a4082d9d560749ecd0ffa1dcaaaee2c2cb25d881',
  payload: dataPayload.toString('hex'),
  payloadType: 'hex_payload',
  dontBroadcast: false,
})
console.log('res', JSON.stringify(res, null, 2))
`
    return {
      partisiaCrypto,
      txtAmount,
      baseURL,
      codeExHex,
      codeExHexPayload,
      onPayloadOnly: async () => {},
      onTransfer: async () => {
        try {
          const sdkClient = store.getters.sdkClient

          const sdk = new PartisiaSdk({ seed: sdkClient.seed, connection: sdkClient.connection })

          const abi = partisiaCrypto.abi_system.Payload_StakeTokens
          const dataPayload = partisiaCrypto.structs.serializeToBuffer(
            {
              invocationByte: 0,
              amount: '10000',
            },
            ...abi
          )
          console.log('dataPayload', dataPayload.toString('hex'))
          const res = await sdk.signMessage({
            contract: '01a4082d9d560749ecd0ffa1dcaaaee2c2cb25d881',
            payload: dataPayload.toString('hex'),
            payloadType: 'hex_payload',
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
    }
  },
  mounted() {
    setTimeout(() => {
      PR.prettyPrint()
    }, 10)
  },
}
</script>
