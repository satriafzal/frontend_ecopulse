<script setup>
import AboutView from './AboutView.vue';
import Aqi_map from './Aqi_map.vue';
import Blog from './Blog.vue';
import Community from './Community.vue';
import Live_preview_status from './Live_preview_status.vue';
</script>

<template>
  <div class="w-full min-h-screen">
    <main class="pt-32 px-10 container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-screen">
      <div class="w-full lg:w-1/2 flex flex-col gap-8 z-10">
        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight" data-aos="fade-right">
          Nafas Segar, <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple" data-aos="fade-right">Kota Pintar</span>
        </h1>
        <p class="text-gray-300 text-lg max-w-lg leading-relaxed" data-aos="fade-right">
          Sistem pemantauan kualitas udara (AQI) dan cuaca real-time terintegrasi. Pantau lingkunganmu untuk hidup yang lebih sehat.
        </p>
        
        <div class="flex flex-wrap gap-5 mt-2 pb-8" data-aos="fade-up">
          <router-link to="/login" class="px-8 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-purple font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.4)]">
            Jelajahi Lebih Lanjut
          </router-link>
          <router-link to="/register" class="px-8 py-3 rounded-full border-2 border-neon-purple text-neon-purple font-bold hover:bg-neon-purple hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(191,0,255,0.3)] flex items-center justify-center">
            Daftar
          </router-link>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex justify-center items-center relative min-h-[500px]">
        
        <div class="absolute w-[80%] h-[80%] bg-gradient-to-br from-[#4a00e0] to-[#2b00ff] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-100 shadow-2xl animate-[spin_12s_linear_infinite]"></div>
        
        <div class="absolute w-[70%] h-[75%] bg-gradient-to-tr from-neon-cyan to-blue-600 rounded-[50%_50%_20%_80%/25%_80%_20%_75%] opacity-100 shadow-[0_0_40px_rgba(0,0,0,0.5)] animate-[spin_15s_linear_infinite_reverse]"></div>
        
        <div class="absolute w-[60%] h-[65%] bg-gradient-to-bl from-neon-magenta to-neon-purple rounded-[80%_20%_50%_50%/50%_50%_20%_80%] opacity-100 shadow-[0_0_30px_rgba(0,0,0,0.4)] animate-[spin_10s_linear_infinite]"></div>
        
        <div class="absolute w-[50%] h-[55%] bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-[60%_40%_50%_50%] opacity-100 animate-[spin_14s_linear_infinite]"></div>

      </div>
    </main>

    <!-- for about content -->
    <AboutView/>

    <!-- for priview content -->
    <Live_preview_status/>

    <!-- for aqi-map content -->
    <Aqi_map/>

    <!-- for community content -->
    <Community/>

    <!-- for blog content -->
    <Blog/>

  </div>
</template>