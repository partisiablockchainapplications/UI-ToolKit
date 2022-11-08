<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="mt-12">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-800 sm:text-4xl">
        <span class="leading-3">Extended On Ramp Implementations</span>
      </h2>
      <div class="mt-5">
        <div class="mx-auto max-w-[50%]" id="paypal-button-container"></div>
        <div class="flex justify-center">
          <div class="mr-8">
            <div
              class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 bg-gray-100 border border-gray-100 rounded-md"
            >
              <a
                class="donate-with-crypto w-[150px] h-[50px] flex items-center justify-center "
                href="https://commerce.coinbase.com/checkout/6da189f179bc31"
              >
                <span>Donate with Crypto</span>
              </a>
            </div>
          </div>
          <div>
            <a
              href="http://Opensea.io"
              target="_blank"
              class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 bg-gray-100 border border-gray-100 rounded-md"
            >
              <img src="../assets/nft.svg" alt="Paypal" class="w-[150px] h-[50px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { loadScript } from "@paypal/paypal-js";

export default {
  async mounted() {
    // const paypalSdk = await loadScript({
    //   "client-id":
    //     process.env.PAYPAL,
    //   currency: "USD",
    // });
    // paypalSdk.Buttons().render("#paypal-button-container");
  },
};
</script>
