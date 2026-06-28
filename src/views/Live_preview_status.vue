<template>
    <section class="py-20 px-10 relative z-10 bg-[#07021c]" id="live-data">
      <div class="container mx-auto max-w-5xl">
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span class="text-xs font-bold tracking-widest text-neon-cyan uppercase bg-neon-cyan/10 px-3 py-1 rounded-full" data-aos="fade-in">Live Preview</span>
            <h2 class="text-3xl md:text-4xl font-extrabold mt-3" data-aos="fade-right">Pantauan Udara Terkini</h2>
          </div>
          <div class="flex items-center gap-2 bg-dark-purple border border-dark-border px-4 py-2 rounded-full text-sm text-gray-400">
            <span class="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            Stasiun: DKI Jakarta (Pusat)
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="p-6 rounded-3xl bg-dark-purple/60 border border-dark-border backdrop-blur-md flex flex-col justify-between" data-aos="flip-right">
            <div>
              <p class="text-gray-400 text-sm font-medium">Indeks Kualitas Udara (AQI)</p>
              <div class="flex items-baseline gap-4 mt-4">
                <span class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">152</span>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30">Tidak Sehat</span>
              </div>
            </div>
            <p class="text-xs text-gray-500 mt-6 leading-relaxed">
              *Sensitif terhadap polutan PM2.5. Kelompok sensitif direkomendasikan mengurangi aktivitas luar ruangan.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-dark-purple/60 border border-dark-border backdrop-blur-md flex flex-col gap-4" data-aos="flip-right">
            <p class="text-gray-400 text-sm font-medium">Polutan Utama</p>
            
            <div class="flex flex-col gap-1">
              <div class="flex justify-between text-xs font-bold">
                <span>PM2.5</span>
                <span class="text-neon-cyan">58.2 µg/m³</span>
              </div>
              <div class="w-full h-2 bg-dark-border rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-neon-cyan to-blue-500 rounded-full" style="width: 75%"></div>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <div class="flex justify-between text-xs font-bold">
                <span>PM10</span>
                <span class="text-neon-purple">26.1 µg/m³</span>
              </div>
              <div class="w-full h-2 bg-dark-border rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-neon-purple to-pink-500 rounded-full" style="width: 40%"></div>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <div class="flex justify-between text-xs font-bold">
                <span>O3 (Ozon)</span>
                <span class="text-neon-magenta">18.4 µg/m³</span>
              </div>
              <div class="w-full h-2 bg-dark-border rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-neon-magenta to-red-500 rounded-full" style="width: 25%"></div>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-gradient-to-br from-[#1b0847] to-dark-purple border border-neon-purple/30 shadow-[inset_0_0_20px_rgba(191,0,255,0.15)] flex flex-col justify-between" data-aos="flip-right">
            <div>
              <p class="text-neon-magenta text-xs font-bold tracking-wider uppercase">Smart Advisory</p>
              <h4 class="text-xl font-bold mt-2 mb-3">Tindakan Proteksi</h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Kualitas udara sedang kurang bersahabat. Disarankan untuk memakai **Masker Standar (N95)** jika harus beraktivitas di luar ruangan dalam waktu lama.
              </p>
            </div>
            <div class="pt-4 border-t border-dark-border/60 flex justify-between items-center text-xs text-gray-400">
              <span>Rekomendasi Medis AI</span>
              <svg class="w-5 h-5 text-neon-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
          </div>

        </div>

        <div class="mt-10 text-center" data-aos="fade-in">
          <p class="text-sm text-gray-400">
            Ingin memantau kota lain atau melihat grafik historis lengkap? 
            <a href="#" class="text-neon-cyan hover:underline ml-1 font-semibold">Buka Dashboard Utama →</a>
          </p>
        </div>

      </div>
    </section>
</template>