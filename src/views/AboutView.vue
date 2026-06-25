<template>
  <section class="py-24 px-10 relative z-10 bg-dark-purple" id="about">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30"></div>
      
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-extrabold mb-6">
            Mengapa Memilih <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">EcoPulse?</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Kami menggabungkan data kualitas udara real-time dengan prediksi cuaca akurat untuk memberikan Anda kendali penuh atas lingkungan dan kesehatan Anda.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group p-8 rounded-3xl bg-[#0d0524] border border-dark-border hover:border-neon-cyan transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-neon-cyan opacity-10 rounded-full blur-[50px] group-hover:opacity-30 transition-opacity duration-500"></div>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-cyan to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,255,255,0.4)]">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Live AQI Mapping</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Pantau indeks kualitas udara (AQI) di berbagai titik kota secara real-time. Ketahui polutan spesifik yang mengancam udara Anda saat ini.
            </p>
          </div>

          <div class="group p-8 rounded-3xl bg-[#0d0524] border border-dark-border hover:border-neon-purple transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_0_30px_rgba(191,0,255,0.15)] relative overflow-hidden">
             <div class="absolute top-0 right-0 w-32 h-32 bg-neon-purple opacity-10 rounded-full blur-[50px] group-hover:opacity-30 transition-opacity duration-500"></div>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-pink-600 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(191,0,255,0.4)]">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Peringatan Cuaca</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Sistem peringatan dini untuk kondisi cuaca ekstrem. Persiapkan hari Anda dengan prediksi suhu, kelembapan, dan potensi badai secara akurat.
            </p>
          </div>

          <div class="group p-8 rounded-3xl bg-[#0d0524] border border-dark-border hover:border-neon-magenta transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_0_30px_rgba(241,85,255,0.15)] relative overflow-hidden">
             <div class="absolute top-0 right-0 w-32 h-32 bg-neon-magenta opacity-10 rounded-full blur-[50px] group-hover:opacity-30 transition-opacity duration-500"></div>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-magenta to-red-500 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(241,85,255,0.4)]">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Smart Advisory</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Dapatkan rekomendasi kesehatan cerdas berdasarkan kualitas udara saat itu. Tahu kapan waktu terbaik untuk berolahraga di luar atau memakai masker.
            </p>
          </div>
        </div>
      </div>
    </section>
</template>