<template>
  <section id="donate" class="mx-auto max-w-7xl px-10 mt-16 mb-10">
    <div>
      <div class="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="nft in nftdetails" v-bind:key="nft.id">
          <NftGridDetails :nft="nft" />
        </div>
      </div>
      <div class="my-4 text-center">
        <span class="my-4 text-align italic">
          *THIS IS A BETA TOOL KIT. ANY AND ALL PROJECTS THAT ARE BUILT OUT OF IT SHOULD BE FULLY AUDITED AND TESTED
          PRIOR TO DEPLOYMENT TO MAINNET. USE AT YOUR OWN RISK AND ENJOY THE BOOTSTRAP BOOST ;) *
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import Nft from '../assets/nft-1.webp'
import Nft2 from '../assets/nft-2.webp'
import Nft3 from '../assets/nft-3.webp'
import NftGridDetails from './NftGriDetails.vue'

export default {
  name: 'NftGrid',
  data() {
    return {
      nftdetails: [
        {
          id: 1,
          image: Nft,
          active: false,
        },
        {
          id: 2,
          image: Nft2,
          active: false,
        },
        {
          id: 3,
          image: Nft3,
          active: false,
        },
        {
          id: 4,
          image: Nft,
          active: false,
        },
        {
          id: 5,
          image: Nft,
          active: false,
        },
        {
          id: 6,
          image: Nft2,
          active: false,
        },
        {
          id: 7,
          image: Nft3,
          active: false,
        },
        {
          id: 8,
          image: Nft,
          active: false,
        },
      ],
    }
  },
  components: {
    NftGridDetails,
  },
}
</script>
