<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-dark-purple flex items-center justify-center relative overflow-hidden px-4 pt-28">
    <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

    <div class="w-full max-w-md bg-[#0a012a]/60 backdrop-blur-xl border border-dark-border rounded-3xl p-10 z-10 shadow-2xl shadow-neon-purple/10">
      
      <div class="text-center mb-10">
        <div class="text-3xl font-extrabold tracking-wider mb-2">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">ECO</span>PULSE
        </div>
        <p class="text-gray-400 text-sm">Selamat datang kembali! Silakan masuk ke akun Anda.</p>
      </div>

      <form class="flex flex-col gap-6">
        
        <div class="relative">
          <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input 
            type="email" 
            placeholder="Alamat Email" 
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
          >
        </div>

        <div class="relative">
          <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input 
            type="password" 
            placeholder="Kata Sandi" 
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
          >
        </div>

        <div class="flex items-center justify-between text-xs">
          <label class="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors">
            <input type="checkbox" class="accent-neon-cyan w-4 h-4 rounded border-gray-600 bg-dark-purple">
            Ingat Saya
          </label>
          <a href="#" class="text-neon-cyan hover:underline">Lupa Sandi?</a>
        </div>

        <button 
          type="button" 
          class="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-purple font-bold text-sm hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(0,255,255,0.3)]"
        >
          MASUK
        </button>

      </form>

      <div class="mt-8 text-center text-sm text-gray-400">
        Belum punya akun? 
        <a href="/register" class="text-neon-magenta hover:underline font-semibold ml-1">Daftar Sekarang</a>
      </div>

    </div>
  </div>
</template>