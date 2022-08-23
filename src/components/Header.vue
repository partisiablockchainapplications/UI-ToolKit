<template>
  <header
    style="z-index: 10"
    class="bg-gray-50 px-5 py-5 lg:px-8 text-white border-b border-white sticky top-0"
  >
    <div class="flex items-center justify-between max-w-7xl m-auto">
      <div>
        <img src="../assets/charity.png" alt="Logo" class="w-[70px] h-[50px]" />
      </div>
      <div class="flex flex-row">
        <a
          href="#"
          @click="connectWallet"
          role="button"
          class="block w-fit bg-peace rounded-[100px] font-display font-bold text-white text-center text-lg lg:text-xl whitespace-nowrap sm:px-4 lg:px-8 py-4 ml-auto web3-button"
        >
          <span class="web3-span text-sm sm:text-lg text-black font-bold px-4 py-4 sm10"
            >CONNECT WALLET FOR PEACE</span
          >
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import PartisiaSdk from "partisia-sdk";

export default {
  data() {
    return {
      displayModal: false,
    };
  },

  methods: {
     async connectWallet() {
      try {
        const sdk = new PartisiaSdk();
        await sdk.connect({
          chainId: "Partisia Blockchain",
          permissions: ["sign"],
          dappName: "PARTISIA UI toolkit",
        });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .donate-button {
    width: 25vw;
  }
}
</style>
