<template>
  <div class="w-full max-w-7xl mx-auto">
    
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-white mb-2">Monitoring API</h1>
        <p class="text-gray-400 text-sm">Pantau status koneksi (Uptime) dan log request ke server cuaca pihak ketiga.</p>
      </div>
      <button @click="pingAll" :disabled="isRefreshing" class="px-6 py-2.5 bg-[#1a103c] border border-[#261a52] hover:bg-[#261a52] rounded-full font-bold text-white transition-all flex items-center gap-2 text-sm disabled:opacity-50">
        <i class="pi pi-refresh" :class="{'animate-spin': isRefreshing}"></i> 
        {{ isRefreshing ? 'Mengecek...' : 'Ping Ulang Semua' }}
      </button>
    </div>

    <!-- WIDGET STATUS SERVER -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="service in services" :key="service.id" 
           class="bg-[#0d0524] rounded-3xl p-6 border shadow-lg relative overflow-hidden"
           :class="{
             'border-green-900/50': service.status === 'Healthy',
             'border-yellow-900/50': service.status === 'Warning',
             'border-red-900/50': service.status === 'Down'
           }">
        
        <!-- Efek Glow di pojok -->
        <div class="absolute -right-4 -top-4 w-20 h-20 rounded-full blur-2xl opacity-20"
             :class="{
               'bg-green-500': service.status === 'Healthy',
               'bg-yellow-500': service.status === 'Warning',
               'bg-red-500': service.status === 'Down'
             }"></div>

        <div class="flex justify-between items-start mb-4 relative z-10">
          <h3 class="font-bold text-white text-lg">{{ service.name }}</h3>
          <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                :class="{
                  'bg-green-500/10 text-green-400': service.status === 'Healthy',
                  'bg-yellow-500/10 text-yellow-400': service.status === 'Warning',
                  'bg-red-500/10 text-red-400': service.status === 'Down'
                }">
            {{ service.status }}
          </span>
        </div>
        
        <div class="grid grid-cols-2 gap-4 relative z-10">
          <div>
            <p class="text-[10px] text-gray-500 font-semibold uppercase mb-1">Latency (Ping)</p>
            <p class="text-xl font-bold text-white">{{ service.ping }}</p>
          </div>
          <div>
            <p class="text-[10px] text-gray-500 font-semibold uppercase mb-1">Uptime 24h</p>
            <p class="text-xl font-bold text-white">{{ service.uptime }}</p>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t border-[#1a123a] relative z-10">
          <p class="text-xs text-gray-400"><i class="pi pi-clock mr-1"></i> Pengecekan terakhir: {{ service.lastCheck }}</p>
        </div>
      </div>
    </div>

    <!-- TABEL LOG REQUEST -->
    <div class="bg-[#0d0524] rounded-3xl p-6 md:p-8 border border-[#1a123a] shadow-lg">
      <div class="flex justify-between items-center mb-6">
        <h3 class="font-semibold text-white">Log Request (Real-time)</h3>
        <div class="flex items-center gap-2 text-xs text-gray-400">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Live Monitoring
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr class="border-b border-[#1a123a] text-xs text-gray-400 uppercase tracking-wider">
              <th class="pb-4 font-medium px-4">Waktu</th>
              <th class="pb-4 font-medium px-4">Method</th>
              <th class="pb-4 font-medium px-4">Endpoint</th>
              <th class="pb-4 font-medium px-4 text-center">Status</th>
              <th class="pb-4 font-medium px-4 text-right">Waktu Respon</th>
            </tr>
          </thead>
          <tbody class="text-sm font-mono"> <!-- Pake font-mono biar kelihatan kayak log server beneran -->
            <tr v-for="log in apiLogs" :key="log.id" class="border-b border-[#1a123a]/50 hover:bg-[#120b33] transition-colors">
              <td class="py-3 px-4 text-gray-500">{{ log.time }}</td>
              <td class="py-3 px-4">
                <span class="text-blue-400 font-bold">{{ log.method }}</span>
              </td>
              <td class="py-3 px-4 text-gray-300 truncate max-w-[250px]" :title="log.endpoint">
                {{ log.endpoint }}
              </td>
              <td class="py-3 px-4 text-center">
                <!-- Logika warna berdasarkan HTTP Status Code -->
                <span class="px-2 py-1 rounded text-xs font-bold"
                      :class="{
                        'bg-green-500/20 text-green-400': log.status >= 200 && log.status < 300,
                        'bg-yellow-500/20 text-yellow-400': log.status === 429,
                        'bg-red-500/20 text-red-400': log.status >= 500
                      }">
                  {{ log.status }}
                </span>
              </td>
              <td class="py-3 px-4 text-right" :class="log.ms > 1000 ? 'text-red-400' : 'text-gray-400'">
                {{ log.ms }} ms
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// Dummy Data: Status Layanan API Eksternal
const services = ref([
  { id: 1, name: 'IQAir Global API', status: 'Healthy', ping: '45ms', uptime: '99.9%', lastCheck: 'Baru saja' },
  { id: 2, name: 'BMKG Open Data', status: 'Warning', ping: '312ms', uptime: '98.5%', lastCheck: '2 menit lalu' },
  { id: 3, name: 'OpenWeather API', status: 'Down', ping: 'Timeout', uptime: '89.2%', lastCheck: '5 menit lalu' }
])

// Dummy Data: Log Request API Terbaru
const apiLogs = ref([
  { id: 101, time: '13:30:45', method: 'GET', endpoint: 'api.airvisual.com/v2/nearest_city', status: 200, ms: 42 },
  { id: 102, time: '13:28:12', method: 'GET', endpoint: 'api.airvisual.com/v2/city', status: 429, ms: 12 },
  { id: 103, time: '13:25:00', method: 'GET', endpoint: 'data.bmkg.go.id/.../cuaca.xml', status: 500, ms: 1205 },
  { id: 104, time: '13:20:15', method: 'GET', endpoint: 'api.airvisual.com/v2/nearest_city', status: 200, ms: 48 },
  { id: 105, time: '13:15:05', method: 'GET', endpoint: 'api.openweathermap.org/data/2.5/air_pollution', status: 200, ms: 65 },
])

// Fungsi untuk me-refresh ping (simulasi)
const isRefreshing = ref(false)
const pingAll = () => {
  isRefreshing.value = true
  setTimeout(() => {
    isRefreshing.value = false
    alert('Ping selesai! (Ini simulasi nge-ping ulang ke server API)')
  }, 1500)
}
</script>