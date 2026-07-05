<script setup>
import { ref } from 'vue'

// Dummy data lokasi yang sedang dipilih di peta
const selectedLocation = ref({
  name: 'Margonda Raya, Depok',
  aqi: 72,
  status: 'Sedang',
  pm25: 22.4,
  pm10: 45.1,
  temp: 28,
  humidity: 65,
  wind: 12
})
</script>

<template>
  <!-- GANTI KUNCI RESPONSIVE: flex-col untuk HP, lg:flex-row untuk Laptop -->
  <div class="w-full h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)] relative rounded-3xl overflow-hidden border border-[#1a123a] shadow-lg flex flex-col lg:flex-row">
    
    <!-- 1. AREA PETA (Di HP posisinya di atas) -->
    <div class="flex-1 min-h-[250px] bg-[#0a041c] relative">
      <!-- Grid pattern as placeholder map -->
      <div class="absolute inset-0 opacity-10" style="background-size: 40px 40px; background-image: linear-gradient(to right, #1a123a 1px, transparent 1px), linear-gradient(to bottom, #1a123a 1px, transparent 1px);"></div>
      
      <!-- Top Bar di Peta (Search & Filter) -->
      <div class="absolute top-4 left-4 right-4 lg:top-6 lg:left-6 lg:right-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 z-10 pointer-events-none">
        
        <!-- Search Box Floating -->
        <div class="bg-[#120b33]/90 backdrop-blur-md border border-[#1a123a] rounded-2xl p-2 flex items-center w-full sm:w-80 pointer-events-auto shadow-xl">
          <i class="pi pi-search text-gray-500 ml-3 mr-3"></i>
          <input type="text" placeholder="Cari stasiun pantau..." class="bg-transparent border-none text-white text-sm focus:outline-none w-full py-1">
        </div>

        <!-- Filter Tools -->
        <div class="flex gap-2 pointer-events-auto self-end sm:self-auto">
          <button class="w-10 h-10 rounded-xl bg-[#120b33]/90 backdrop-blur-md border border-[#1a123a] flex items-center justify-center text-white hover:bg-[#1a103c] transition-colors">
            <i class="pi pi-filter"></i>
          </button>
          <button class="w-10 h-10 rounded-xl bg-[#120b33]/90 backdrop-blur-md border border-[#1a123a] flex items-center justify-center text-white hover:bg-[#1a103c] transition-colors">
            <i class="pi pi-compass"></i>
          </button>
        </div>
      </div>

      <!-- Dummy Map Pins -->
      <div class="absolute top-[40%] left-[35%] flex flex-col items-center animate-bounce">
        <div class="bg-red-500 text-white text-[10px] lg:text-xs font-bold px-2 py-1 rounded-lg mb-1 shadow-[0_0_15px_rgba(239,68,68,0.5)]">152</div>
        <div class="w-3 h-3 bg-red-500 rounded-full border-2 border-[#0a041c]"></div>
      </div>
      
      <div class="absolute top-[60%] left-[55%] flex flex-col items-center z-10 cursor-pointer">
        <div class="bg-yellow-400 text-[#06011a] text-[10px] lg:text-xs font-bold px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg mb-1 shadow-[0_0_20px_rgba(250,204,21,0.6)] border-2 border-white">72</div>
        <div class="w-4 h-4 bg-yellow-400 rounded-full border-2 border-white ring-4 ring-yellow-400/20"></div>
      </div>

      <!-- Legenda AQI (Disembunyikan di HP biar peta gak ketutupan) -->
      <div class="hidden md:block absolute bottom-6 left-6 bg-[#120b33]/90 backdrop-blur-md border border-[#1a123a] rounded-2xl p-4 pointer-events-auto shadow-xl">
        <h4 class="text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wider">Indeks Kualitas (AQI)</h4>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-3 text-sm"><span class="w-3 h-3 rounded-full bg-green-400"></span> <span class="text-gray-300">0 - 50 (Baik)</span></div>
          <div class="flex items-center gap-3 text-sm"><span class="w-3 h-3 rounded-full bg-yellow-400"></span> <span class="text-gray-300">51 - 100 (Sedang)</span></div>
          <div class="flex items-center gap-3 text-sm"><span class="w-3 h-3 rounded-full bg-orange-500"></span> <span class="text-gray-300">101 - 150 (Tidak Sehat)</span></div>
          <div class="flex items-center gap-3 text-sm"><span class="w-3 h-3 rounded-full bg-red-500"></span> <span class="text-gray-300">151+ (Berbahaya)</span></div>
        </div>
      </div>
    </div>

    <!-- 2. SIDE PANEL (Di HP posisinya di bawah, bisa di-scroll) -->
    <!-- Lebarnya jadi w-full di HP, tapi tetap lg:w-96 di Laptop -->
    <div class="w-full lg:w-96 bg-[#0d0524] border-t lg:border-t-0 lg:border-l border-[#1a123a] flex flex-col z-20 h-[50%] lg:h-full overflow-y-auto shrink-0">
      
      <!-- Header Panel -->
      <div class="p-4 lg:p-6 border-b border-[#1a123a] shrink-0">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-bold text-base lg:text-lg text-white leading-tight">{{ selectedLocation.name }}</h3>
          <button class="text-gray-500 hover:text-white"><i class="pi pi-bookmark"></i></button>
        </div>
        <p class="text-[10px] lg:text-xs text-gray-400"><i class="pi pi-clock mr-1"></i> Update terakhir: 10 menit lalu</p>
      </div>

      <!-- Skor AQI -->
      <div class="p-4 lg:p-6 flex flex-col items-center border-b border-[#1a123a] shrink-0">
        <div class="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-8 border-[#1a103c] border-t-yellow-400 flex flex-col items-center justify-center mb-3 lg:mb-4 relative">
          <span class="text-3xl lg:text-4xl font-bold text-white">{{ selectedLocation.aqi }}</span>
        </div>
        <span class="bg-yellow-500/10 text-yellow-400 px-4 py-1.5 rounded-full text-xs lg:text-sm font-bold tracking-wide">
          {{ selectedLocation.status }}
        </span>
      </div>

      <!-- Detail Polutan -->
      <div class="p-4 lg:p-6 flex-1">
        <h4 class="text-[10px] lg:text-xs text-gray-400 font-semibold mb-3 lg:mb-4 uppercase tracking-wider">Detail Polutan</h4>
        <div class="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
          <div class="bg-[#120b33] p-3 rounded-xl border border-[#1a123a]">
            <p class="text-[9px] lg:text-[10px] text-gray-500 font-bold">PM 2.5</p>
            <p class="text-base lg:text-lg font-semibold text-white">{{ selectedLocation.pm25 }} <span class="text-[10px] lg:text-xs font-normal text-gray-500">µg/m³</span></p>
          </div>
          <div class="bg-[#120b33] p-3 rounded-xl border border-[#1a123a]">
            <p class="text-[9px] lg:text-[10px] text-gray-500 font-bold">PM 10</p>
            <p class="text-base lg:text-lg font-semibold text-white">{{ selectedLocation.pm10 }} <span class="text-[10px] lg:text-xs font-normal text-gray-500">µg/m³</span></p>
          </div>
        </div>

        <h4 class="text-[10px] lg:text-xs text-gray-400 font-semibold mb-3 lg:mb-4 uppercase tracking-wider">Kondisi Cuaca</h4>
        <div class="flex justify-between items-center bg-[#120b33] p-3 lg:p-4 rounded-xl border border-[#1a123a]">
          <div class="flex items-center gap-2 lg:gap-3">
            <i class="pi pi-sun text-yellow-400 text-lg lg:text-xl"></i>
            <div>
              <p class="text-sm font-bold text-white">{{ selectedLocation.temp }}°C</p>
              <p class="text-[9px] lg:text-[10px] text-gray-400">Cerah Berawan</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-[9px] lg:text-[10px] text-gray-400">Kelembaban: {{ selectedLocation.humidity }}%</p>
            <p class="text-[9px] lg:text-[10px] text-gray-400">Angin: {{ selectedLocation.wind }} km/j</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>