<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-dark-purple flex items-center justify-center relative overflow-hidden px-4 py-12 pt-28" data-aos="fade-up">
    <!-- Ornamen Background (Neon Orbs) -->
    <div class="absolute top-[10%] right-[-5%] w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

    <!-- Register Card (Glassmorphism) -->
    <div class="w-full max-w-md bg-[#0a012a]/60 backdrop-blur-xl border border-dark-border rounded-3xl p-10 z-10 shadow-2xl shadow-neon-cyan/10 mt-16 md:mt-0">
      
      <!-- Header -->
      <div class="text-center mb-8">
        <h2 class="text-2xl font-extrabold text-white mb-2">Buat Akun Baru</h2>
        <p class="text-gray-400 text-sm">Bergabunglah dengan komunitas EcoPulse hari ini.</p>
      </div>

      <!-- Form -->
      <form class="flex flex-col gap-5">
        
        <!-- Input Nama -->
        <div class="relative">
          <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input 
            type="text" 
            placeholder="Nama Lengkap" 
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
          >
        </div>

        <!-- Input Email -->
        <div class="relative">
          <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input 
            type="email" 
            placeholder="Alamat Email" 
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
          >
        </div>

        <!-- Input Password -->
        <div class="relative">
          <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input 
            type="password" 
            placeholder="Kata Sandi" 
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
          >
        </div>

        <!-- Input Konfirmasi Password -->
        <div class="relative">
          <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input 
            type="password" 
            placeholder="Konfirmasi Kata Sandi" 
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
          >
        </div>

        <!-- Syarat & Ketentuan -->
        <div class="flex items-start gap-2 text-xs text-gray-400 mt-2">
          <input type="checkbox" class="accent-neon-cyan w-4 h-4 rounded border-gray-600 bg-dark-purple mt-0.5 cursor-pointer">
          <label>
            Saya setuju dengan <RouterLink to="/syarat_ketentuan" class="text-neon-cyan hover:underline">Syarat & Ketentuan</RouterLink> serta <RouterLink to="/privasi" class="text-neon-cyan hover:underline">Kebijakan Privasi</RouterLink> yang berlaku.
          </label>
        </div>

        <!-- Tombol Daftar -->
        <button 
          type="button" 
          class="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-dark-purple font-bold text-sm hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(191,0,255,0.3)]"
        >
          DAFTAR SEKARANG
        </button>

      </form>

      <!-- Footer Form -->
      <div class="mt-8 text-center text-sm text-gray-400">
        Sudah punya akun? 
        <RouterLink to="/login" class="text-neon-cyan hover:underline font-semibold ml-1">Masuk di sini</RouterLink>
      </div>

    </div>
  </div>
</template>