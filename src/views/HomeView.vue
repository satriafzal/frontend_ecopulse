<script setup>
import AboutView from './AboutView.vue';
import Live_preview_status from './Live_preview_status.vue';
</script>

<template>
  <div class="w-full min-h-screen">
    <main class="pt-32 px-10 container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-screen">
      <div class="w-full lg:w-1/2 flex flex-col gap-8 z-10">
        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight">
          Nafas Segar, <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Kota Pintar</span>
        </h1>
        <p class="text-gray-300 text-lg max-w-lg leading-relaxed">
          Sistem pemantauan kualitas udara (AQI) dan cuaca real-time terintegrasi. Pantau lingkunganmu untuk hidup yang lebih sehat.
        </p>
        
        <div class="flex flex-wrap gap-5 mt-2">
          <button class="px-8 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-purple font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.4)]">
            Jelajahi Lebih Lanjut
          </button>
          <button class="px-8 py-3 rounded-full border-2 border-neon-purple text-neon-purple font-bold hover:bg-neon-purple hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(191,0,255,0.3)]">
            Daftar
          </button>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex justify-center relative">
        <div class="w-72 h-72 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan opacity-20 blur-[100px] absolute z-0 animate-pulse"></div>
        
        <div class="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#120b33] to-[#0a012a] rounded-[2rem] border border-dark-border shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-700 flex items-center justify-center">
          <img src="#" alt="EcoPulse Hero" class="w-full h-full object-cover" />
        </div>
        
        <div class="absolute z-20 w-24 h-24 bg-gradient-to-r from-neon-cyan to-blue-500 rounded-full blur-md -bottom-5 -left-5 opacity-60 animate-bounce" style="animation-duration: 3s;"></div>
        <div class="absolute z-20 w-20 h-20 bg-gradient-to-r from-neon-magenta to-neon-purple rounded-2xl blur-md -top-10 right-10 opacity-60 rotate-12"></div>
      </div>
    </main>

    <!-- for about content -->
    <AboutView/>

    <!-- for priview content -->
    <Live_preview_status/>

  </div>
</template>