# PARTISIA UI TOOLKIT

This UI toolkit serves  as a boiler plate for developers to quikly spin up new project on top of Partisia blockchain.


## Features

- [Coinbase](https://docs.cloud.coinbase.com/wallet-sdk/docs)
- [Paypal](https://developer.paypal.com/)


## Prerequisites

- [Node](https://nodejs.org) v14 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for VUE by following [these instructions](https://vuejs.org/guide/quick-start.html#with-build-tools)
- [Partisia wallet](https://chrome.google.com/webstore/detail/partisia-wallet/gjkdbeaiifkpoencioahhcilildpjhgh/related?hl=en)


# Getting Started

## use node v14.16.0
```bash
nvm use
```

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).


### Add extension into Chrome Browser
```sh
# visit url
chrome://extensions/

# toggle developer mode and click load unpacked
# point to directory 
# ...../partisia-wallet-extension/src-bex
```