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
          <p class="text-3xl font-bold text-white">1,284</p>
          <p class="text-xs text-green-400 mt-2"><i class="pi pi-arrow-up text-[10px]"></i> +12% bulan ini</p>
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
          <p class="text-3xl font-bold text-white">Sehat</p>
          <p class="text-xs text-gray-400 mt-2">Ping: 42ms | Rate: 15%</p>
        </div>
        <div class="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center z-10">
          <i class="pi pi-check-circle text-2xl text-green-400"></i>
        </div>
      </div>

      <!-- Total Lokasi Disimpan -->
      <div class="bg-[#0d0524] rounded-3xl p-6 border border-[#1a123a] shadow-lg flex items-center justify-between">
        <div>
          <p class="text-gray-400 text-xs uppercase tracking-wider mb-2">Lokasi Dipantau</p>
          <p class="text-3xl font-bold text-white">3,492</p>
          <p class="text-xs text-gray-400 mt-2">Tersebar di 45 kota</p>
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

  </div>
</template>