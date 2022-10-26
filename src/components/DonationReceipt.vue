<template>
  <section v-if="fullname">
    <h1 class="text-center font-extrabold text-[23px]">DONATION RECEIPT</h1>

    <div class="mt-[30px]">
      <p>Date: <span class="underline pr-2 pl-2">{{new Date().toDateString()}}</span></p>
    </div>

    <div class="mt-7">
      <p class="pb-2">Empowering PEACE Foundation</p>
      <p class="pb-2">524 Belmont Ave.</p>
      <p class="pb-2">Pueblo, Colorado</p>
      <p>81004</p>
    </div>

    <div class="mt-6">
      <p>
        Thank you <span class="underline pr-2 pl-2">{{fullname}}</span> [Donor&#39;s Name] for your
        contribution of <span class="underline pr-2 pl-2">{{amount.toLocaleString()}}</span> Dollars
        ($<span class="underline pr-2 pl-0">{{amount.toLocaleString()}}</span>) in value described as:
      </p>
    </div>

    <div class="mt-8">
      <div>
        <div class="flex items-center">
          <p class="mr-1"><input type="checkbox" name="money" /></p>
          <p>
            <span class="mr-5"> Monetary Payment made by:</span>
            <span class="mr-4"
              ><input type="checkbox" name="money" /> check</span
            >
            <span class="mr-4"
              ><input type="checkbox" name="money" /> credit</span
            >
            <span class="mr-4"
              ><input type="checkbox" name="money" /> card</span
            >
            <span class="mr-4"
              ><input type="checkbox" name="money" /> cash</span
            >
            <span><input type="checkbox" name="money" /> crypto</span>
          </p>
        </div>
        <div class="flex items-center mt-4">
          <p class="mr-1"><input type="checkbox" name="money" /></p>
          <p>other __________________</p>
        </div>
      </div>
    </div>

    <p class="mt-10 w-full truncate">With transaction hash : <span class="underline pr-2 pl-2">0x58e5a0fc7fbc849eddc100d44e86276168a8c7baaa5604e44ba6f5eb8ba1b7eb</span></p>

    <p class="mt-6">On <span class="underline pr-2 pl-2">Partisia</span> [Chain]</p>

    <p class="mt-6">
      Empowering PEACE Foundation is classified as a 501(c)(3) non-profit
      organization by the standards of the Internal Revenue Service (IRS).
      Therefore, the donation may be tax-deductible to the extent allowed by
      law.
    </p>

    <div class="mt-8 mb-3">
      <p class="pb-2 font-bold">Authorized Signature:</p>
      <p class="pb-2">Owner Me</p>
      <p class="pb-2">By Owner Me</p>
      <p class="pb-2">Title: Treasurer</p>
      <p>Tax ID Number: 88-0883180</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      amount: ""
    };
  },
  mounted() {
    this.fullname = JSON.parse(localStorage.getItem("fullname"));
    this.amount = JSON.parse(localStorage.getItem("amount"));
  },
};
</script>
