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
import Nft from '../assets/a1.png'
import Nft2 from '../assets/a2.png'
import Nft3 from '../assets/a3.png'
import Nft5 from '../assets/a5.png'
import Nft6 from '../assets/a6.png'
import Nft7 from '../assets/a7.png'
import Nft8 from '../assets/a8.png'
import Nft9 from '../assets/a9.png'
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
          image: Nft5,
          active: false,
        },
        {
          id: 5,
          image: Nft6,
          active: false,
        },
        {
          id: 6,
          image: Nft7,
          active: false,
        },
        {
          id: 7,
          image: Nft8,
          active: false,
        },
        {
          id: 8,
          image: Nft9,
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
