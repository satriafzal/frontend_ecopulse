<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-dark-purple text-white font-sans overflow-x-hidden">
    <Navbar/>
    <RouterView />
    <Footer/>
  </div>
</template>

<style scoped>
</style>
