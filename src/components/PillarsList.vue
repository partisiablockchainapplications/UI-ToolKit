<template>
  <div id="pillars" class="mx-auto max-w-[80%] lg:max-w-[60%] xl:max-w-[40%]">
    <div class="flow-root mt-16">
      <h1 class="text-center pb-12 text-[20px] font-bold">Pillars to PEACE</h1>
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
          name: "Pillar 1",
          desc: "Pillar 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.",
        },
        {
          number: 2,
          name: "Pillar 2",
          desc: "Pillar 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.",
        },
        {
          number: 3,
          name: "Pillar 3",
          desc: "Pillar 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.",
        },
        {
          number: 4,
          name: "Pillar 4",
          desc: "Pillar 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.",
        },
        {
          number: 5,
          name: "Pillar 5",
          desc: "Pillar 5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.",
        },
        {
          number: 6,
          name: "Pillar 6",
          desc: "Pillar 6 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.",
        },
      ],
    };
  },
  components: {
    PillarListInner
  },
};
</script>
