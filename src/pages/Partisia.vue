<template>
  <q-page padding>
    <div class="text-h6">Learn about Partisia</div>
    <div class="text-body1">
      Partisia is Web 3.0 Public Blockchain built for trust, transparency, privacy, and speed of light finalization
    </div>
    <div class="text-body2">
      More information on the official
      <a target="_blank" href="https://www.partisiablockchain.com/">Partisia Blockchain</a> website
    </div>
    <q-separator color="grey" class="q-my-lg" />
    <div class="text-h6">Partisia SDK</div>
    <div class="text-body1">
      The partisia-sdk creates a secure end-to-end encrypted channel to a wallet. The most common example of this would
      be communication beween a Website (dApp) and the Partisia Wallet Browser Extension. The dApp must first be granted
      Permission by the Wallet with an initial connection. Once
      permission has been granted the dApp will be allowed to View a Wallets on chain Address and Public Key. The dApp
      will also be able to send requests for message signing and contract interactions.
    </div>
    <div class="text-h6 q-pt-md">Requests</div>
    <div class="text-body1">
      There are two types of requests: request to <router-link exact to="/connect">connect</router-link> and request to <router-link exact to="/contract">sign</router-link>. A connection request is used to grant
      permissions and an signing request is used to sign raw data or contract interactions. All signing requests are
      end-to-end encrypted and requires sending payloads in a specific format. The SDK abstracts much of this and dApp
      only has to worry about one simple async request.
    </div>
    <div class="text-h6 q-pt-md">Errors</div>
    <div class="text-body1">
      Errors from the SDK are intentially generic disclosing the minimum amount of wallet information as possible. For
      example if the user has not yet created an address, the error will simply show that connection to the wallet was
      not possible but will not show the specific reason why.
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
