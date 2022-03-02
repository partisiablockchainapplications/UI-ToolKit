<template>
  <q-page padding>
    <div class="text-h6">Install a Compatible Wallet</div>
    <div class="text-body1">The following is a list of supported wallets</div>
    <q-list>
      <q-item clickable v-ripple @click="onWalletPartisia">
        <q-item-section avatar>
          <q-icon size="xs" name="las la-asterisk" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Partisia Wallet Browser Extension</q-item-label>
          <q-item-label caption>Supported on Chrome and Firefox Browsers</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="text-h6 q-pt-md">Install Library into dApp</div>
    <div class="text-body1">
      Install the PartisiaSdk library to your client using <b>npm</b>. The library source code can be found on
      <q-btn dense size="md" icon="lab la-gitlab" no-caps flat label="GitLab" @click="onGitLab" />
    </div>
    <div>
      <pre class="prettyprint break-line"><code class="language-bash">{{codeInstall}}</code></pre>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
export default {
  setup() {
    return {
      codeInstall: `npm i git+https://gitlab.com/partisiaapplications/partisia-sdk.git`,
      onGitLab: () => {
        openURL('https://gitlab.com/partisiaapplications/partisia-sdk')
      },
      onWalletPartisia: () => {
        openURL('https://gitlab.com/partisiaapplications/partisia-wallet-extension')
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
