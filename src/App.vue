<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { watch, onMounted, computed} from 'vue'
import AOS from 'aos'

const route = useRoute();

const isUserArea = computed(() => {
  return route.matched.some(record => record.path === '/user')
})

// inisialisasi aos
onMounted(() => {
  AOS.init({
    once: true,      
    offset: 100,     
    duration: 1500,  
    easing: 'ease-out-cubic',
  })
})
</script>

<template>
  <div class="min-h-screen bg-dark-purple text-white font-sans overflow-x-hidden">
    <Navbar v-if="!isUserArea"/>
    <RouterView />
    <Footer v-if="!isUserArea"/>
  </div>
</template>

<style scoped>
</style>
