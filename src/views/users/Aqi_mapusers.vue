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
  <!-- Pembungkus utama, h-full biar menuhin area konten -->
  <div class="w-full h-[calc(100vh-8rem)] relative rounded-3xl overflow-hidden border border-[#1a123a] shadow-lg flex">
    
    <!-- 1. AREA PETA (Bagian Kiri/Belakang) -->
    <!-- Placeholder Map: Nanti div ini diganti sama <l-map> (Leaflet) atau Mapbox GL -->
    <div class="flex-1 bg-[#0a041c] relative">
      <!-- Grid pattern as placeholder map -->
      <div class="absolute inset-0 opacity-10" style="background-size: 40px 40px; background-image: linear-gradient(to right, #1a123a 1px, transparent 1px), linear-gradient(to bottom, #1a123a 1px, transparent 1px);"></div>
      
      <!-- Top Bar di Peta (Search & Filter) -->
      <div class="absolute top-6 left-6 right-6 flex justify-between items-start z-10 pointer-events-none">
        
        <!-- Search Box Floating -->
        <div class="bg-[#120b33]/90 backdrop-blur-md border border-[#1a123a] rounded-2xl p-2 flex items-center w-80 pointer-events-auto shadow-xl">
          <i class="pi pi-search text-gray-500 ml-3 mr-3"></i>
          <input type="text" placeholder="Cari stasiun pantau..." class="bg-transparent border-none text-white text-sm focus:outline-none w-full py-1">
        </div>

        <!-- Filter Tools -->
        <div class="flex gap-2 pointer-events-auto">
          <button class="w-10 h-10 rounded-xl bg-[#120b33]/90 backdrop-blur-md border border-[#1a123a] flex items-center justify-center text-white hover:bg-[#1a103c] transition-colors">
            <i class="pi pi-filter"></i>
          </button>
          <button class="w-10 h-10 rounded-xl bg-[#120b33]/90 backdrop-blur-md border border-[#1a123a] flex items-center justify-center text-white hover:bg-[#1a103c] transition-colors">
            <i class="pi pi-compass"></i>
          </button>
        </div>
      </div>

      <!-- Dummy Map Pins -->
      <!-- Pin Merah -->
      <div class="absolute top-[30%] left-[45%] flex flex-col items-center animate-bounce">
        <div class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg mb-1 shadow-[0_0_15px_rgba(239,68,68,0.5)]">152</div>
        <div class="w-3 h-3 bg-red-500 rounded-full border-2 border-[#0a041c]"></div>
      </div>
      
      <!-- Pin Kuning (Selected) -->
      <div class="absolute top-[50%] left-[60%] flex flex-col items-center z-10 cursor-pointer">
        <div class="bg-yellow-400 text-[#06011a] text-xs font-bold px-3 py-1.5 rounded-lg mb-1 shadow-[0_0_20px_rgba(250,204,21,0.6)] border-2 border-white">72</div>
        <div class="w-4 h-4 bg-yellow-400 rounded-full border-2 border-white ring-4 ring-yellow-400/20"></div>
      </div>

      <!-- Legenda AQI di Pojok Kiri Bawah -->
      <div class="absolute bottom-6 left-6 bg-[#120b33]/90 backdrop-blur-md border border-[#1a123a] rounded-2xl p-4 pointer-events-auto shadow-xl">
        <h4 class="text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wider">Indeks Kualitas (AQI)</h4>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-3 text-sm"><span class="w-3 h-3 rounded-full bg-green-400"></span> <span class="text-gray-300">0 - 50 (Baik)</span></div>
          <div class="flex items-center gap-3 text-sm"><span class="w-3 h-3 rounded-full bg-yellow-400"></span> <span class="text-gray-300">51 - 100 (Sedang)</span></div>
          <div class="flex items-center gap-3 text-sm"><span class="w-3 h-3 rounded-full bg-orange-500"></span> <span class="text-gray-300">101 - 150 (Tidak Sehat)</span></div>
          <div class="flex items-center gap-3 text-sm"><span class="w-3 h-3 rounded-full bg-red-500"></span> <span class="text-gray-300">151+ (Berbahaya)</span></div>
        </div>
      </div>
    </div>

    <!-- 2. SIDE PANEL (Bagian Kanan) - Info Lokasi Terpilih -->
    <div class="w-80 bg-[#0d0524] border-l border-[#1a123a] flex flex-col z-20">
      
      <!-- Header Panel -->
      <div class="p-6 border-b border-[#1a123a]">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-bold text-lg text-white leading-tight">{{ selectedLocation.name }}</h3>
          <button class="text-gray-500 hover:text-white"><i class="pi pi-bookmark"></i></button>
        </div>
        <p class="text-xs text-gray-400"><i class="pi pi-clock mr-1"></i> Update terakhir: 10 menit lalu</p>
      </div>

      <!-- Skor AQI -->
      <div class="p-6 flex flex-col items-center border-b border-[#1a123a]">
        <div class="w-32 h-32 rounded-full border-8 border-[#1a103c] border-t-yellow-400 flex flex-col items-center justify-center mb-4 relative">
          <span class="text-4xl font-bold text-white">{{ selectedLocation.aqi }}</span>
        </div>
        <span class="bg-yellow-500/10 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
          {{ selectedLocation.status }}
        </span>
      </div>

      <!-- Detail Polutan -->
      <div class="p-6 flex-1 overflow-y-auto">
        <h4 class="text-xs text-gray-400 font-semibold mb-4 uppercase tracking-wider">Detail Polutan</h4>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-[#120b33] p-3 rounded-xl border border-[#1a123a]">
            <p class="text-[10px] text-gray-500 font-bold">PM 2.5</p>
            <p class="text-lg font-semibold text-white">{{ selectedLocation.pm25 }} <span class="text-xs font-normal text-gray-500">µg/m³</span></p>
          </div>
          <div class="bg-[#120b33] p-3 rounded-xl border border-[#1a123a]">
            <p class="text-[10px] text-gray-500 font-bold">PM 10</p>
            <p class="text-lg font-semibold text-white">{{ selectedLocation.pm10 }} <span class="text-xs font-normal text-gray-500">µg/m³</span></p>
          </div>
        </div>

        <h4 class="text-xs text-gray-400 font-semibold mb-4 uppercase tracking-wider">Kondisi Cuaca</h4>
        <div class="flex justify-between items-center bg-[#120b33] p-4 rounded-xl border border-[#1a123a]">
          <div class="flex items-center gap-3">
            <i class="pi pi-sun text-yellow-400 text-xl"></i>
            <div>
              <p class="text-sm font-bold text-white">{{ selectedLocation.temp }}°C</p>
              <p class="text-[10px] text-gray-400">Cerah Berawan</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-[10px] text-gray-400">Kelembaban: {{ selectedLocation.humidity }}%</p>
            <p class="text-[10px] text-gray-400">Angin: {{ selectedLocation.wind }} km/j</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>