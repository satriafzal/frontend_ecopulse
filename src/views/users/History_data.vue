<script setup>
import { ref } from 'vue'

const selectedRange = ref('7 Hari')
const ranges = ['Hari Ini', '7 Hari', '30 Hari', 'Tahun Ini']
</script>

<template>
    <div class="w-full max-w-7xl mx-auto">

        <!-- Header Page -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-8" data-aos="fade-right">
            <div>
                <h1 class="text-3xl font-bold text-white mb-2">Riwayat & Analitik</h1>
                <p class="text-gray-400 text-sm">Pantau tren kualitas udara dan paparan polutan Anda dari waktu ke
                    waktu.</p>
            </div>

            <!-- Filter Rentang Waktu -->
            <div class="bg-[#0d0524] p-1 rounded-xl border border-[#1a123a] flex overflow-x-auto w-full md:w-auto" style="scrollbar-width: none;">
                <button v-for="range in ranges" :key="range" @click="selectedRange = range" :class="[
                    'px-4 py-2 text-sm font-semibold rounded-lg transition-all',
                    selectedRange === range ? 'bg-[#1a103c] text-white shadow-md' : 'text-gray-500 hover:text-gray-300'
                ]">
                    {{ range }}
                </button>
            </div>
        </div>

        <!-- GRID UTAMA -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-aos="fade-up">

            <!-- 1. GRAFIK TREN UTAMA (2 Kolom) -->
            <div class="lg:col-span-2 bg-[#0d0524] rounded-3xl p-8 border border-[#1a123a] shadow-lg flex flex-col">
                <div class="flex justify-between items-center mb-8">
                    <h3 class="font-semibold text-white">Tren Kualitas Udara (AQI)</h3>
                    <div class="flex items-center gap-2 text-xs text-gray-400">
                        <span class="w-2 h-2 rounded-full bg-neon-cyan"></span> AQI Rata-rata
                    </div>
                </div>

                <!-- Placeholder Grafik Garis (CSS Base) -->
                <div
                    class="flex-1 min-h-[250px] relative flex items-end justify-between gap-2 pt-10 border-b border-l border-[#1a123a] pb-2 pl-2">
                    <!-- Grid Lines Background -->
                    <div class="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2 pl-2">
                        <div class="border-t border-[#1a123a]/50 w-full h-0"></div>
                        <div class="border-t border-[#1a123a]/50 w-full h-0"></div>
                        <div class="border-t border-[#1a123a]/50 w-full h-0"></div>
                        <div class="border-t border-[#1a123a]/50 w-full h-0"></div>
                    </div>

                    <!-- Batang Data Dummy (Simulasi Garis) -->
                    <div class="w-full bg-neon-cyan/20 rounded-t-sm h-[40%] relative group">
                        <div
                            class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                            45</div>
                    </div>
                    <div class="w-full bg-neon-cyan/40 rounded-t-sm h-[60%] relative group">
                        <div
                            class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                            80</div>
                    </div>
                    <div class="w-full bg-yellow-400/60 rounded-t-sm h-[85%] relative group">
                        <div
                            class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            115</div>
                    </div>
                    <div class="w-full bg-neon-cyan/50 rounded-t-sm h-[70%] relative group">
                        <div
                            class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                            92</div>
                    </div>
                    <div class="w-full bg-neon-cyan/20 rounded-t-sm h-[35%] relative group">
                        <div
                            class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                            40</div>
                    </div>
                    <div class="w-full bg-neon-cyan/30 rounded-t-sm h-[50%] relative group">
                        <div
                            class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                            65</div>
                    </div>
                    <div class="w-full bg-neon-cyan/20 rounded-t-sm h-[45%] relative group">
                        <div
                            class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                            55</div>
                    </div>
                </div>

                <!-- Label Sumbu X -->
                <div class="flex justify-between text-[10px] text-gray-500 mt-3 pl-2">
                    <span>Senin</span><span>Selasa</span><span>Rabu</span><span>Kamis</span><span>Jumat</span><span>Sabtu</span><span>Minggu</span>
                </div>
            </div>

            <!-- 2. KOMPOSISI POLUTAN (1 Kolom) -->
            <div class="bg-[#0d0524] rounded-3xl p-8 border border-[#1a123a] shadow-lg flex flex-col">
                <h3 class="font-semibold text-white mb-6">Komposisi Polutan</h3>

                <div class="flex flex-col gap-6 flex-1 justify-center">
                    <!-- Progress Bar PM2.5 -->
                    <div>
                        <div class="flex justify-between text-xs mb-2">
                            <span class="text-gray-400 font-bold">PM 2.5</span>
                            <span class="text-white">45.2 µg/m³</span>
                        </div>
                        <div class="w-full bg-[#120b33] rounded-full h-2">
                            <div class="bg-gradient-to-r from-neon-cyan to-blue-500 h-2 rounded-full"
                                style="width: 65%"></div>
                        </div>
                    </div>

                    <!-- Progress Bar PM10 -->
                    <div>
                        <div class="flex justify-between text-xs mb-2">
                            <span class="text-gray-400 font-bold">PM 10</span>
                            <span class="text-white">82.1 µg/m³</span>
                        </div>
                        <div class="w-full bg-[#120b33] rounded-full h-2">
                            <div class="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                                style="width: 45%"></div>
                        </div>
                    </div>

                    <!-- Progress Bar CO -->
                    <div>
                        <div class="flex justify-between text-xs mb-2">
                            <span class="text-gray-400 font-bold">Karbondioksida (CO)</span>
                            <span class="text-white">0.5 mg/m³</span>
                        </div>
                        <div class="w-full bg-[#120b33] rounded-full h-2">
                            <div class="bg-green-400 h-2 rounded-full" style="width: 20%"></div>
                        </div>
                    </div>

                    <!-- Progress Bar NO2 -->
                    <div>
                        <div class="flex justify-between text-xs mb-2">
                            <span class="text-gray-400 font-bold">Nitrogen Dioksida (NO2)</span>
                            <span class="text-white">12.4 µg/m³</span>
                        </div>
                        <div class="w-full bg-[#120b33] rounded-full h-2">
                            <div class="bg-green-400 h-2 rounded-full" style="width: 15%"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>