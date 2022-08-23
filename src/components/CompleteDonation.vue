<template>
  <section class="mx-auto max-w-7xl px-10 mt-16 mb-10">
    <div class="mx-auto max-w-full sm:max-w-[65%] lg:max-w-[50%]">
      <h2 class="text-center">
        To Preview and Download your receipt, kindly fill in your fullname
      </h2>
      <div>
        <div class="mt-3">
          <form>
            <input
              type="text"
              class="py-3 px-2 focus:ring-peace focus:border-peace block w-full sm:text-sm border border-gray-400 rounded-sm"
              required
              v-model="fullname"
              placeholder="Enter your full name"
            />
            <div class="flex justify-center mt-5">
              <button
                @click="submitForm()"
                class="bg-peace text-white p-4 rounded-md"
              >
                Compile Receipt
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <section class="mt-[100px]">
      <div ref="document" class="mt-12">
        <DonationReceipt />
      </div>
    </section>

    <div v-if="!fullname" class="flex justify-center mt-5">
      <button @click="exportToPDF" class="bg-peace text-white p-4 rounded-md">
        Download Receipt
      </button>
    </div>
  </section>
</template>

<script>
import html2pdf from "html2pdf.js";
import DonationReceipt from "./DonationReceipt";

export default {
  name: "CompleteDonation",
  data() {
    return {
      fullname: "",
      newFullName: ""
    };
  },
  methods: {
    exportToPDF() {
      html2pdf(this.$refs.document, {
        margin: 1,
        filename: "donation-receipt.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      });
    },
    mounted() {
      this.newFullName = JSON.parse(localStorage.getItem("fullname"));
    },
    submitForm() {
      localStorage.setItem("fullname", JSON.stringify(this.fullname));
    },
  },
  components: {
    DonationReceipt,
  },
};
</script>
