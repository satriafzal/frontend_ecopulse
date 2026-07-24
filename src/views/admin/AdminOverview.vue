<template>
  <div class="w-full max-w-7xl mx-auto">
    
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-2">System Overview</h1>
      <p class="text-gray-400 text-sm">Pantau kesehatan sistem, performa API, dan pertumbuhan pengguna</p>
    </div>

    <!-- WIDGET STATISTIK -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      
  <!-- Total Pengguna -->
  <div class="bg-[#0d0524] rounded-3xl p-6 border border-[#1a123a] shadow-lg flex items-center justify-between">
    <div>
      <p class="text-gray-400 text-xs uppercase tracking-wider mb-2">Total Pengguna</p>
      <p class="text-3xl font-bold text-white">{{ overviewStats.users.total }}</p>
      <p class="text-xs text-green-400 mt-2"><i class="pi pi-arrow-up text-[10px]"></i> {{ overviewStats.users.growth }}</p>
    </div>
    <div class="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
      <i class="pi pi-users text-2xl text-blue-400"></i>
    </div>
  </div>

  <!-- Status API Eksternal -->
  <div class="bg-[#0d0524] rounded-3xl p-6 border border-green-900/50 shadow-lg flex items-center justify-between relative overflow-hidden">
    <div class="absolute -right-4 -top-4 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
    <div class="z-10">
      <p class="text-gray-400 text-xs uppercase tracking-wider mb-2">Status API Cuaca</p>
      <p class="text-3xl font-bold text-white">{{ overviewStats.api.status }}</p>
      <p class="text-xs text-gray-400 mt-2">Ping: {{ overviewStats.api.ping }} | Rate: {{ overviewStats.api.rate }}</p>
    </div>
    <div class="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center z-10">
      <i class="pi pi-check-circle text-2xl text-green-400"></i>
    </div>
  </div>

  <!-- Total Lokasi Disimpan -->
  <div class="bg-[#0d0524] rounded-3xl p-6 border border-[#1a123a] shadow-lg flex items-center justify-between">
    <div>
      <p class="text-gray-400 text-xs uppercase tracking-wider mb-2">Lokasi Dipantau</p>
      <p class="text-3xl font-bold text-white">{{ overviewStats.locations.total }}</p>
      <p class="text-xs text-gray-400 mt-2">{{ overviewStats.locations.cities }}</p>
    </div>
    <div class="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
      <i class="pi pi-map-marker text-2xl text-purple-400"></i>
    </div>
  </div>
  
</div>

    <!-- TABEL AKTIVITAS TERBARU -->
    <div class="bg-[#0d0524] rounded-3xl p-6 md:p-8 border border-[#1a123a] shadow-lg">
      <div class="flex justify-between items-center mb-6">
        <h3 class="font-semibold text-white">Log Aktivitas Sistem</h3>
        <button class="text-xs text-gray-400 hover:text-white">Lihat Semua</button>
      </div>
      
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-[#1a123a] text-xs text-gray-400">
              <th class="pb-3 font-medium">Waktu</th>
              <th class="pb-3 font-medium">Tipe Kejadian</th>
              <th class="pb-3 font-medium">Deskripsi</th>
              <th class="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr class="border-b border-[#1a123a]/50 hover:bg-[#120b33] transition-colors">
              <td class="py-4 text-gray-400">10:42 AM</td>
              <td class="py-4 text-white">User Registration</td>
              <td class="py-4 text-gray-400">User baru mendaftar (adly@email.com)</td>
              <td class="py-4"><span class="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">Success</span></td>
            </tr>
            <tr class="border-b border-[#1a123a]/50 hover:bg-[#120b33] transition-colors">
              <td class="py-4 text-gray-400">09:15 AM</td>
              <td class="py-4 text-white">API Sync</td>
              <td class="py-4 text-gray-400">Tarik data AQI dari BMKG Server</td>
              <td class="py-4"><span class="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">Success</span></td>
            </tr>
            <tr class="hover:bg-[#120b33] transition-colors">
              <td class="py-4 text-gray-400">08:02 AM</td>
              <td class="py-4 text-white">API Sync</td>
              <td class="py-4 text-gray-400">Koneksi Timeout (IQAir API Endpoint)</td>
              <td class="py-4"><span class="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-xs font-semibold">Failed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- chart js -->
    <div class="bg-[#110c1f] border border-gray-800 rounded-xl p-5 mb-6 mt-6">
    
    <!-- Bagian Header & Filter -->
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-white font-semibold text-lg">Pertumbuhan Pengguna</h3>
      
      <div class="flex gap-3">
        <!-- Tambahin @change dan ubah value jadi angka -->
        <select v-model="selectedMonth" @change="updateChart" class="bg-[#1a1333] border border-gray-700 text-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-green-500">
          <option value="6">Juni</option>
          <option value="7">Juli</option>
          <option value="8">Agustus</option>
        </select>
        
        <!-- Tambahin @change -->
        <select v-model="selectedYear" @change="updateChart" class="bg-[#1a1333] border border-gray-700 text-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-green-500">
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>
    </div>

    <div class="h-[300px]">
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-full w-full" />
    </div>
    
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'primevue/chart'
import axios from 'axios'

const token = localStorage.getItem('access_token');

// Variabel buat Filter (Default: Bulan Juli (7) Tahun 2026)
const selectedMonth = ref('7')
const selectedYear = ref('2026')

// Struktur awal Grafik (Datanya dikosongin dulu)
const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Pendaftaran User Baru',
      data: [],
      fill: true,
      borderColor: '#10b981', 
      tension: 0.4, 
      backgroundColor: 'rgba(16, 185, 129, 0.1)' 
    }
  ]
})

// Logika nembak API buat Grafik
const updateChart = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/chart-users', {
      params: {
        month: selectedMonth.value,
        year: selectedYear.value
      }, headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    chartData.value = {
      ...chartData.value,
      labels: response.data.labels,
      datasets: [
        {
          ...chartData.value.datasets[0],
          data: response.data.data
        }
      ]
    };
  } catch (error) {
    console.error("Gagal mengambil data grafik:", error);
  }
}

// Desain grafik
const chartOptions = ref({
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
    legend: {
      labels: { color: '#9ca3af' } 
    }
  },
  scales: {
    x: {
      ticks: { color: '#9ca3af' }, 
      grid: { color: 'rgba(255, 255, 255, 0.05)' }
    },
    y: {
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.05)' }
    }
  }
})

const overviewStats = ref({
  users: { total: '...', growth: '...' },
  api: { status: '...', ping: '...', rate: '...' },
  locations: { total: '...', cities: '...' }
});

// Fungsi Kotak Statistik
const fetchSummaryStats = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/dashboard-summary', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    overviewStats.value = response.data;
  } catch (error) {
    console.error("Gagal mengambil data summary:", error);
    overviewStats.value.users.total = '-';
    overviewStats.value.api.status = 'Error';
    overviewStats.value.locations.total = '-';
  }
};

onMounted(() => {
  fetchSummaryStats();
  updateChart(); 
})
</script>