<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { watch, onMounted, computed} from 'vue'
import AOS from 'aos'
import Toast from 'primevue/toast'
import ConfirmDialog from 'primevue/confirmdialog'

const route = useRoute();

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
    <Navbar/>
    
    <Toast position="top-center" />
    <ConfirmDialog 
      :pt="{
        root: { class: 'bg-[#121118] border border-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm w-full' },
        header: { class: 'text-white font-bold text-xl pb-1 flex justify-between items-center' },
        content: { class: 'text-gray-200 py-4 flex items-center gap-4' },
        footer: { class: 'flex justify-end gap-3 pt-4' }
      }"
    />

    <RouterView />
    <Footer/>
  </div>
</template>

<style scoped>
</style>
