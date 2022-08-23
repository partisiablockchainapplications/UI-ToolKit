<template>
  <div
    class="flex items-center space-x-4 cursor-pointer"
    @click="triggerModal()"
  >
    <div class="flex-shrink-0">{{ pillar.number }}</div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-gray-900 truncate">
        {{ pillar.name }}
      </p>
    </div>
    <div>
      <p
        class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
      >
        Logo
      </p>
    </div>
  </div>
  <div>
    <PillarDetails v-if="pillarModal" @close="pillarModal = false" :pillarModal="pillarModal" :pillar="pillar" />
  </div>
</template>

<script>
import PillarDetails from "./PillarDetails.vue";

export default {
  props: ["pillar"],
  data() {
    return {
      pillarModal: false,
    };
  },
  methods: {
    triggerModal() {
      this.pillarModal = true;
      console.log(this.pillarModal)
    },
  },
  components: {
    PillarDetails,
  },
};
</script>
