<template>
  <div class="w-full max-w-7xl mx-auto">

    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-white mb-2">Monitoring API</h1>
        <p class="text-gray-400 text-sm">Pantau status koneksi (Uptime) dan log request ke server cuaca pihak ketiga</p>
      </div>
      <button @click="pingAll" :disabled="isRefreshing"
        class="px-6 py-2.5 bg-[#1a103c] border border-[#261a52] hover:bg-[#261a52] rounded-full font-bold text-white transition-all flex items-center gap-2 text-sm disabled:opacity-50">
        <i class="pi pi-refresh" :class="{ 'animate-spin': isRefreshing }"></i>
        {{ isRefreshing ? 'Mengecek...' : 'Ping Ulang Semua' }}
      </button>
    </div>

    <!-- WIDGET STATUS SERVER -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="service in services" :key="service.id"
        class="bg-[#0d0524] rounded-3xl p-6 border shadow-lg relative overflow-hidden" :class="{
          'border-green-900/50': service.status === 'Healthy',
          'border-yellow-900/50': service.status === 'Warning',
          'border-red-900/50': service.status === 'Down'
        }">

        <!-- Efek Glow di pojok -->
        <div class="absolute -right-4 -top-4 w-20 h-20 rounded-full blur-2xl opacity-20" :class="{
          'bg-green-500': service.status === 'Healthy',
          'bg-yellow-500': service.status === 'Warning',
          'bg-red-500': service.status === 'Down'
        }"></div>

        <div class="flex justify-between items-start mb-4 relative z-10">
          <h3 class="font-bold text-white text-lg">{{ service.name }}</h3>
          <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" :class="{
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
          <p class="text-xs text-gray-400"><i class="pi pi-clock mr-1"></i> Pengecekan terakhir: {{ service.lastCheck }}
          </p>
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
          <tbody class="text-sm font-mono">
            <tr v-for="log in apiLogs" :key="log.id"
              class="border-b border-[#1a123a]/50 hover:bg-[#120b33] transition-colors">
              <td class="py-3 px-4 text-gray-500">{{ log.time }}</td>
              <td class="py-3 px-4">
                <span class="text-blue-400 font-bold">{{ log.method }}</span>
              </td>
              <td class="py-3 px-4 text-gray-300 truncate max-w-[250px]" :title="log.endpoint">
                {{ log.endpoint }}
              </td>
              <td class="py-3 px-4 text-center">
                <!-- Logika warna berdasarkan HTTP Status Code -->
                <span class="px-2 py-1 rounded text-xs font-bold" :class="{
                  'bg-green-500/20 text-green-400': log.status >= 200 && log.status < 300,
                  'bg-yellow-500/20 text-yellow-400': log.status === 429,
                  'bg-red-500/20 text-red-400': log.status >= 500
                }">
                  {{ log.status }}
                </span>
              </td>
              <td class="py-3 px-4 text-right" :class="log.ms > 1000 ? 'text-red-400' : 'text-gray-400'">
                {{ log.latency }} ms
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const isRefreshing = ref(false);
const token = localStorage.getItem('access_token');

// Dummy Data: Status Layanan API Eksternal
const services = ref([
  { id: 1, name: 'IQAir Global API', status: 'Healthy', ping: '45ms', uptime: '99.9%', lastCheck: 'Baru saja' },
  { id: 2, name: 'BMKG Open Data', status: 'Warning', ping: '312ms', uptime: '98.5%', lastCheck: '2 menit lalu' },
  { id: 3, name: 'OpenWeather API', status: 'Down', ping: 'Timeout', uptime: '89.2%', lastCheck: '5 menit lalu' }
])

// Dummy Data: Log Request API Terbaru
const apiLogs = ref([])

// function for fetch api bmkg untuk ping status api
const pingBMKG = async () => {
  // search potition widget bmkg in array
  const bmkgIndex = services.value.findIndex(s => s.id === 2);

  const endpoint = 'http://localhost:8000/api/ping-bmkg';

  // on stopwatch
  const startTime = performance.now();

  try {
    const response = await axios.get(endpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    // off stopwatch & hitung selisih waktu
    const endTime = performance.now();
    const latency = Math.round(endTime - startTime);

    // updatw widget
    services.value[bmkgIndex].status = 'Healthy';
    services.value[bmkgIndex].ping = `${latency}ms`;
    services.value[bmkgIndex].lastCheck = 'Baru saja';

    // tambah log ke tabel bawah
    apiLogs.value.unshift({
      id: Date.now(),
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      method: 'GET',
      endpoint: 'localhost:8000/api/ping-bmkg',
      status: response.status,
      latency: latency
    });
  } catch (error) {
    // jika server down atau error
    console.log('gagal ambil data', error);
    const endTime = performance.now()
    const latency = Math.round(endTime - startTime)
    const statusCode = error.response ? error.response.status : 500

    // update kotak widget error
    services.value[bmkgIndex].status = 'Down'
    services.value[bmkgIndex].ping = 'Error'
    services.value[bmkgIndex].lastCheck = 'Baru saja'

    // tambah log error ke tabel bawah
    apiLogs.value.unshift({
      id: Date.now(),
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      method: 'GET',
      endpoint: 'localhost:8000/api/ping-bmkg',
      status: statusCode,
      latency: latency
    });
  }
}

// for monitoring api open weather
const pingOpenWeather = async () => {
  const owIndex = 2;

  const startTime = performance.now();

  try {
    // get data api from backend
    const endpoint = 'http://localhost:8000/api/ping-openweather'

    const response = await axios.get(endpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const endTime = performance.now();
    const latency = Math.round(endTime - startTime);

    // update ui kotak open weather api
    services.value[owIndex].status = 'Healthy';
    services.value[owIndex].ping = `${latency}ms`;
    services.value[owIndex].lastCheck = 'Baru saja';

    // update tabel bawah
    apiLogs.value.unshift({
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      method: 'GET',
      endpoint: 'localhost:8000/api/ping-openweather',
      status: response.status,
      latency: latency,
    })
  } catch (error) {
    console.log("gagal mengambil data openweather", error);
    const statusCode = error.response ? error.response.status : 500;

    services.value[owIndex].status = 'Down';
    services.value[owIndex].ping = 'Error';
    services.value[owIndex].lastCheck = 'Baru saja';

    apiLogs.value.unshift({
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      method: 'GET',
      endpoint: 'localhost:8000/api/ping-openweather',
      status: statusCode,
      latency: '-'
    })
  }
}

const pingIqAir = async () => {
  const iqIndex = 0;

  services.value[iqIndex].status = 'Memuat...';

  const startTime = performance.now();

  try {
    const endpoint = 'http://localhost:8000/api/ping-iqair';
    const response = await axios.get(endpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const endTime = performance.now();
    const latency = Math.round(endTime - startTime);

    // update ui
    services.value[iqIndex].status = 'Healthy';
    services.value[iqIndex].ping = `${latency}ms`;
    services.value[iqIndex].lastCheck = `Baru saja`;

    apiLogs.value.unshift({
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      method: 'GET',
      endpoint: endpoint,
      status: response.status,
      latency: latency
    })
  } catch (error) {
    console.log('gagal mengambil data', error);
    const status_code = error.response ? error.response.status : 500;

    // update ui
    services.value[iqIndex].status = 'Down';
    services.value[iqIndex].ping = `Error`;
    services.value[iqIndex].lastCheck = `Baru saja`;

    apiLogs.value.unshift({
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      method: 'GET',
      endpoint: endpoint,
      status: status_code,
      latency: '-'
    })
  }
}

// Fungsi untuk me-refresh ping
const pingAll = async () => {
  isRefreshing.value = true
  const IQAirIndex = 0;
  const bmkgIndex = 1;
  const owIndex = 2;
  services.value[bmkgIndex].ping = 'Memuat...'
  services.value[owIndex].ping = 'Memuat...'
  services.value[IQAirIndex].ping = 'Memuat...'

  // running ping
  await pingIqAir();
  await pingBMKG();
  await pingOpenWeather();

  isRefreshing.value = false;
}

onMounted(() => {
  pingIqAir();
  pingOpenWeather();
  pingBMKG();
})
</script>