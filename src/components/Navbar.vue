<template>
    <header class="flex justify-between items-center py-6 px-10 border-b border-dark-border backdrop-blur-sm fixed w-full top-0 z-50">
      <router-link to="/" @click="scrolltop()" class="text-3xl font-extrabold tracking-wider">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">ECO</span>PULSE
      </router-link>
      
      <nav v-if="!authpage" class="hidden md:flex gap-8 text-sm font-medium">
        <a href="#about" class="hover:text-neon-cyan transition-colors duration-300">About</a>
        <a href="#live-data" class="hover:text-neon-cyan transition-colors duration-300">Live Data</a>
        <a href="#aqi-map" class="hover:text-neon-cyan transition-colors duration-300">AQI Map</a>
        <a href="#community" class="hover:text-neon-cyan transition-colors duration-300">Community</a>
        <a href="#blog" class="hover:text-neon-cyan transition-colors duration-300">Blog</a>
      </nav>

      <div class="flex gap-6 items-center">

        <template v-if="!authpage">
            <router-link to="/login" class="text-sm font-bold hover:text-neon-cyan transition-colors duration-300">LOGIN</router-link>
            <router-link to="/register" class="px-7 py-2 text-sm bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-bold text-dark-purple hover:scale-105 transition-transform duration-300">REGISTER</router-link>
        </template>

        <template v-else>
            <RouterLink to="/" class="px-6 py-2 text-sm border-2 border-dark-border hover:border-neon-cyan rounded-full font-bold text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2">
                <i class="pi pi-arrow-left text-xs"></i> Kembali
            </RouterLink>
        </template>

      </div>
    </header>
</template>

<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    import { computed } from 'vue';

    const route = useRoute()

    const scrolltop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    const authpage = computed(() => ['/login', '/register'].includes(route.path));

</script>