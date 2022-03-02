<template>
  <q-page padding>
    <div class="text-h6">Partisia Wallet Browser Extension</div>
    <div class="text-body1">Supported on Chrome and Firefox Browsers</div>
    <q-list>
      <q-item clickable v-ripple @click="onWalletChrome">
        <q-item-section avatar>
          <q-icon color="primary" size="lg" name="lab la-chrome" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle2">Chrome</q-item-label>
        </q-item-section>
      </q-item>
      <!-- <q-item clickable v-ripple @click="onWalletFirefox">
        <q-item-section avatar>
          <q-icon color="negative" size="lg" name="lab la-firefox" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle2">Firefox</q-item-label>
        </q-item-section>
      </q-item> -->
    </q-list>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
export default {
  // name: 'PageName',
  setup() {
    return {
      onWalletFirefox: () => {
        openURL('https://addons.mozilla.org/en-US/firefox/addon/partisia-wallet/')
      },
      onWalletChrome: () => {
        openURL('https://chrome.google.com/webstore/detail/partisia-wallet/gjkdbeaiifkpoencioahhcilildpjhgh')
      },
    }
  },
}
</script>
