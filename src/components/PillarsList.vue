<template>
  <div id="pillars" class="mx-auto max-w-[80%] lg:max-w-[60%] xl:max-w-[40%]">
    <div class="flow-root mt-16">
      <h1 class="text-center pb-12 text-[20px] font-bold">FAQ</h1>
      <ul role="list" class="-my-5 divide-y divide-gray-200">
        <li v-for="pillar in pillars" v-bind:key="pillar.number" class="py-4">
          <PillarListInner :pillar="pillar" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PillarListInner from "./PillarListInner.vue"

export default {
  data() {
    return {
      pillars: [
        {
          number: 1,
          name: "What languages do I need to know to interact with Partisia? ",
          desc: "We use rustwasm for contracts, This Front end is in vue3.js , css, javascript, typescript, html, and scss .The Backend is node.js and quasar tooling (for now) and the smart contracts",
        },
        {
          number: 2,
          name: "Where can I find contract standards? ",
          desc: "https://github.com/partisiablockchainapplications/CoreContracts",
        },
        {
          number: 3,
          name: "How can I learn more about the Partisian Identity KeyPair SDK?",
          desc: "https://partisiablockchain.gitlab.io/partisia-wallet-sdk-docs/",
        },
      ],
    };
  },
  components: {
    PillarListInner
  },
};
</script>
