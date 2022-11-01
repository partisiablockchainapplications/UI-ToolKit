<template>
  <footer class="bg-gray-50 mt-16" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="flex flex-col sm:flex-row sm:items-center">
        <div class="space-y-8 sm:w-[60%]" style="width: 60%">
          <div>
            <img src="../assets/parti.svg" alt="Logo" class="w-[70px] h-[50px]" />
          </div>
          <p class="text-gray-500 text-base">Making the world a better place</p>
  
          <div class="flex space-x-6">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:w-[40%]">
          <div class="mr-5">
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.sections" :key="item.name">
                <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-0">
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.social" :key="item.name">
                <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-base text-gray-400 xl:text-center">
          The PARTISIA Foundation
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    let navigation = {
      sections: [
        { name: "Home", href: "/" },
        { name: "FAQ", href: "#" },
        { name: "Donate", href: "#" },
      ],
      social: [
        {
          name: "Facebook",
          href: "#",
        },
        {
          name: "Instagram",
          href: "#",
        },
        {
          name: "Twitter",
          href: "#",
        },
        {
          name: "Discord",
          href: "#",
        },
      ],
    };
    return {
      navigation,
    };
  },
};
</script>
