<template>
    <header v-if="!hideEntireNavbar" class="flex justify-between items-center py-6 px-6 md:px-10 border-b border-dark-border backdrop-blur-md bg-[#06011a]/90 fixed w-full top-0 z-50">
      
      <router-link to="/" @click="scrolltop()" class="text-2xl md:text-3xl font-extrabold tracking-wider z-50">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">ECO</span>PULSE
      </router-link>
      
      <nav v-if="!hideMenu" class="hidden md:flex gap-8 text-sm font-medium">
        <a href="#about" class="hover:text-neon-cyan transition-colors duration-300">About</a>
        <a href="#live-data" class="hover:text-neon-cyan transition-colors duration-300">Live Data</a>
        <a href="#aqi-map" class="hover:text-neon-cyan transition-colors duration-300">AQI Map</a>
        <a href="#community" class="hover:text-neon-cyan transition-colors duration-300">Community</a>
        <a href="#blog" class="hover:text-neon-cyan transition-colors duration-300">Blog</a>
      </nav>

      <div class="hidden md:flex gap-6 items-center">
        <!-- Kalau bukan di halaman hideMenu -->
        <template v-if="!hideMenu">
            <router-link to="/login" class="text-sm font-bold hover:text-neon-cyan transition-colors duration-300">LOGIN</router-link>
            <router-link to="/register" class="px-7 py-2 text-sm bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-bold text-dark-purple hover:scale-105 transition-transform duration-300">REGISTER</router-link>
        </template>

        <!-- Kalau SEDANG di halaman hideMenu -->
        <template v-else>
            <RouterLink to="/" class="px-6 py-2 text-sm border-2 border-dark-border hover:border-neon-cyan rounded-full font-bold text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2">
                <i class="pi pi-arrow-left text-xs"></i> Kembali
            </RouterLink>
        </template>
      </div>

      <!-- HAMBURGER BUTTON (Muncul di HP aja) -->
      <button 
        v-if="!hideMenu" 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="md:hidden text-gray-300 hover:text-white text-2xl z-50 focus:outline-none"
      >
        <i :class="isMobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>

      <!-- KEMBALI BUTTON UNTUK MOBILE (Muncul kalau hideMenu true) -->
      <div v-if="hideMenu" class="md:hidden z-50">
        <RouterLink to="/" class="px-4 py-2 text-xs border border-dark-border rounded-full font-bold text-gray-300 flex items-center gap-2">
          <i class="pi pi-arrow-left"></i> Kembali
        </RouterLink>
      </div>

      <!-- MOBILE MENU DROPDOWN OVERLAY -->
      <transition name="slide-down">
        <div 
          v-if="isMobileMenuOpen && !hideMenu" 
          class="absolute top-full left-0 w-full bg-[#06011a]/95 backdrop-blur-lg border-b border-dark-border flex flex-col p-6 gap-4 md:hidden shadow-2xl"
        >
          <a href="#about" @click="closeMobileMenu" class="text-gray-300 hover:text-neon-cyan py-2 border-b border-dark-border/50">About</a>
          <a href="#live-data" @click="closeMobileMenu" class="text-gray-300 hover:text-neon-cyan py-2 border-b border-dark-border/50">Live Data</a>
          <a href="#aqi-map" @click="closeMobileMenu" class="text-gray-300 hover:text-neon-cyan py-2 border-b border-dark-border/50">AQI Map</a>
          <a href="#community" @click="closeMobileMenu" class="text-gray-300 hover:text-neon-cyan py-2 border-b border-dark-border/50">Community</a>
          <a href="#blog" @click="closeMobileMenu" class="text-gray-300 hover:text-neon-cyan py-2 border-b border-dark-border/50">Blog</a>
          
          <div class="flex flex-col gap-4 mt-4 pt-2">
            <router-link to="/login" @click="closeMobileMenu" class="text-center py-3 text-sm font-bold text-gray-300 border border-dark-border rounded-full">LOGIN</router-link>
            <router-link to="/register" @click="closeMobileMenu" class="text-center px-7 py-3 text-sm bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-bold text-dark-purple">REGISTER</router-link>
          </div>
        </div>
      </transition>
      
    </header>
</template>

<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    import { computed, ref } from 'vue';

    const route = useRoute()
    
    const isMobileMenuOpen = ref(false)

    const scrolltop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
      isMobileMenuOpen.value = false;
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    }

    // for remove navbar in page user or admin
    const hideEntireNavbar = computed(() => {
      return route.path.startsWith('/user') || route.path.startsWith('/admin')
    })

    const hideMenu = computed(() => {
      const exactpath = ['/login', '/register', '/pusat-bantuan', '/privasi', '/syarat_ketentuan'];
      return exactpath.includes(route.path);
    } );
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>