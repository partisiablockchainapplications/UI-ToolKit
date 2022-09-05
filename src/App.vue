<template>
  <Header />
  <section class="min-h-[73vh]">
    <router-view />
  </section>
  <Footer />
</template>
<script>
import { defineComponent } from 'vue'
import './assets/base.css'
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    console.log(process.env.PAYPAL)
  },
})
</script>
