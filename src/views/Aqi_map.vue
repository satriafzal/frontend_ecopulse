<template>
    <section id="aqi-map" class="py-20 px-10 relative z-10 bg-[#06011a]">
        <div
            class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dark-border to-transparent">
        </div>

        <div class="container mx-auto">
            <div class="text-center mb-16">
                <span
                    class="text-xs font-bold tracking-widest text-neon-cyan uppercase bg-neon-cyan/10 px-3 py-1 rounded-full">Interactive
                    Mapping</span>
                <h2 class="text-3xl md:text-5xl font-extrabold mt-4">Peta Geo-Spasial <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">Kualitas
                        Udara</span></h2>
                <p class="text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
                    Eksplorasi kondisi udara di setiap sudut wilayah secara visual. Zona warna mempermudah Anda
                    mengidentifikasi tingkat polusi udara saat ini.
                </p>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 items-stretch">

                <div class="w-full lg:w-1/3 flex flex-col gap-6">
                    <div class="p-6 rounded-3xl bg-dark-purple border border-dark-border backdrop-blur-md">
                        <h3 class="text-base font-bold text-white mb-4 flex items-center gap-2">
                            <i class="pi pi-sliders-h text-neon-cyan"></i> Kontrol Visual
                        </h3>
                        <div class="flex flex-col gap-3">
                            <button
                                class="w-full py-3 px-4 rounded-xl bg-[#120b33] border border-neon-cyan/40 text-left text-sm text-white font-medium flex justify-between items-center">
                                <span>DKI Jakarta</span>
                                <i class="pi pi-chevron-down text-xs text-gray-400"></i>
                            </button>
                            <button
                                class="w-full py-3 px-4 rounded-xl bg-[#0d0524] border border-dark-border text-left text-sm text-gray-400 flex justify-between items-center hover:border-dark-border/80">
                                <span>Semua Parameter (PM2.5)</span>
                                <i class="pi pi-sliders-v text-xs"></i>
                            </button>
                        </div>
                    </div>

                    <div class="p-6 rounded-3xl bg-dark-purple border border-dark-border backdrop-blur-md flex-grow">
                        <h3 class="text-base font-bold text-white mb-4">Indikator Kualitas</h3>
                        <div class="flex flex-col gap-3 text-xs font-medium">
                            <div
                                class="flex items-center gap-3 p-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                                <span class="w-3 h-3 rounded-full bg-green-500"></span>
                                <span>0 - 50 : Baik</span>
                            </div>
                            <div
                                class="flex items-center gap-3 p-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                                <span>51 - 100 : Sedang</span>
                            </div>
                            <div
                                class="flex items-center gap-3 p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                                <span class="w-3 h-3 rounded-full bg-orange-500"></span>
                                <span>101 - 150 : Tidak Sehat (Sensitif)</span>
                            </div>
                            <div
                                class="flex items-center gap-3 p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                                <span>151 - 200 : Tidak Sehat</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="w-full lg:w-2/3 min-h-[350px] rounded-3xl bg-[#0d0524] border border-dark-border relative overflow-hidden flex items-center justify-center group shadow-2xl shadow-neon-cyan/5">
                    <div class="absolute inset-0 bg-gradient-to-tr from-neon-cyan/5 via-transparent to-neon-purple/5">
                    </div>

                    <div class="absolute inset-0 opacity-5 pointer-events-none"
                        style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 20px 20px;">
                    </div>

                    <div class="z-10 text-center flex flex-col items-center gap-4 px-6">
                        <div
                            class="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan text-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] group-hover:scale-110 transition-transform duration-500">
                            <i class="pi pi-map"></i>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-white mb-1">Interactive Map Interface</h4>
                            <p class="text-gray-500 text-xs max-w-sm">
                                Di sini tempat lo nanti nanam Leaflet.js / Google Maps API, atau bisa lo ganti pake tag
                                `<img>` mockup peta Figma lo.
                            </p>
                        </div>
                        <button
                            class="mt-2 px-5 py-2 rounded-xl border border-neon-cyan text-neon-cyan font-bold text-xs hover:bg-neon-cyan hover:text-dark-purple transition-all duration-300">
                            <i class="pi pi-external-link text-[10px] mr-1"></i> Perbesar Peta
                        </button>
                    </div>

                    <i class="pi pi-map-marker absolute top-1/4 left-1/3 text-green-500 text-xl animate-bounce"
                        style="animation-duration: 4s;"></i>
                    <i class="pi pi-map-marker absolute bottom-1/3 right-1/4 text-red-500 text-xl animate-bounce"
                        style="animation-duration: 3s;"></i>
                    <i class="pi pi-map-marker absolute top-1/2 right-1/3 text-yellow-500 text-xl animate-bounce"
                        style="animation-duration: 5s;"></i>
                </div>

            </div>
        </div>
    </section>
</template>