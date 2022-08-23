<template>
  <main>
    <HeroSection />
    <Pillars />
    <DonateCTA />
    <HowToDonate />
    <MintInfo />
    <NftGrid />
  </main>
</template>


<script>
import HeroSection from "../components/HeroSection.vue";
import Pillars from "../components/PillarsList.vue";
import DonateCTA from "../components/DonateCTA.vue";
import HowToDonate from "../components/HowToDonate.vue";
import MintInfo from "../components/MintInfo.vue";
import NftGrid from "../components/NftGrid.vue";


export default {
  name: 'Home',
  components: {
    HeroSection,
    Pillars,
    DonateCTA,
    HowToDonate,
    MintInfo,
    NftGrid,
    // DonationReceipt,
  }
}

</script>


<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

</style>
