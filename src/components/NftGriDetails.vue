<template>
  <div class="relative">
    <div
      class="group block w-full aspect-w-10 aspect-h-7 rounded-md bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
    >
      <img
        :src="nftProp.image"
        alt=""
        class="object-cover pointer-events-none group-hover:opacity-75"
      />
    </div>
    <div class="relative" @mouseenter="nftProp.active = true">
      <div class="mt-8">
        <p
          class="block w-full sm:text-sm rounded-sm py-3 px-3 border border-gray-300 focus:ring-gray-300 focus:border-gray-300"
        >
          {{ number }}
        </p>
      </div>
      <div class="flex absolute top-3 right-3">
        <PlusIcon
          class="h-5 w-5 text-gray-500 cursor-pointer"
          aria-hidden="true"
          @click="nftProp.active && increment(), submitAmount()"
        />
        <MinusIcon
          class="h-5 w-5 text-gray-500 ml-3 cursor-pointer"
          aria-hidden="true"
          @click="decrement(), submitAmount()"
        />
      </div>
    </div>
    <p class="pt-5 text-center font-bold">${{ number * 1000 }}.00</p>
    <div class="flex justify-center">
      <button
        type="button"
        class="mt-5 px-7 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-peace text-center"
        @click="triggerModal()"
      >
        Donate
      </button>
    </div>
  </div>
  <div v-if="donated">
    <SuccessPaymentModal :donated="donated" />
  </div>
</template>

<script>
import { PlusIcon, MinusIcon } from "@heroicons/vue/solid";
import SuccessPaymentModal from "./SuccessPaymentModal.vue";

export default {
  props: ["nft"],
  data() {
    return {
      number: 0,
      donated: false,
      nftProp: this.nft
    };
  },
  methods: {
    increment() {
      this.number++;
    },
    decrement() {
      this.number >= 1 && this.number--;
    },
    triggerModal() {
      this.donated = true;
    },
    submitAmount() {
      localStorage.setItem("amount", JSON.stringify(this.number * 1000));
    },
  },
  components: {
    PlusIcon,
    MinusIcon,
    SuccessPaymentModal,
  },
};
</script>
