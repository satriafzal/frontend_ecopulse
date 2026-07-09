<script setup>
import { ref } from 'vue'

// Dummy data lokasi favorit
const savedLocations = ref([
    {
        id: 1,
        label: 'Rumah',
        address: 'Margonda Raya, Depok',
        aqi: 72,
        status: 'Sedang',
        temp: 28,
        color: 'yellow' // untuk styling border/badge
    },
    {
        id: 2,
        label: 'Kampus UNM',
        address: 'Jl. Margonda Raya No. 54, Depok',
        aqi: 45,
        status: 'Baik',
        temp: 27,
        color: 'green'
    },
    {
        id: 3,
        label: 'Tempat Nongkrong',
        address: 'Kawasan Sudirman, Jakarta',
        aqi: 152,
        status: 'Berbahaya',
        temp: 32,
        color: 'red'
    }
])
</script>

<template>
    <div class="w-full max-w-7xl mx-auto">

        <!-- Header Page -->
        <div class="flex justify-between items-end mb-8" data-aos="fade-right">
            <div>
                <h1 class="text-3xl font-bold text-white mb-2">Lokasi Favorit</h1>
                <p class="text-gray-400 text-sm">Kelola daftar lokasi yang paling sering Anda pantau.</p>
            </div>

            <!-- Tombol Tambah Lokasi -->
            <button
                class="bg-white text-[#06011a] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-md">
                <i class="pi pi-plus"></i> Tambah Lokasi
            </button>
        </div>

        <!-- GRID CARD LOKASI -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <!-- Card Lokasi di-looping pakai Vue v-for -->
            <div v-for="loc in savedLocations" :key="loc.id"
                class="bg-[#0d0524] rounded-3xl p-6 border border-[#1a123a] shadow-lg flex flex-col relative overflow-hidden group hover:border-gray-600 transition-colors" data-aos="flip-left">
                <!-- Aksen warna di sisi kiri card -->
                <div class="absolute left-0 top-0 bottom-0 w-1.5" :class="{
                    'bg-green-400': loc.color === 'green',
                    'bg-yellow-400': loc.color === 'yellow',
                    'bg-orange-500': loc.color === 'orange',
                    'bg-red-500': loc.color === 'red'
                }"></div>

                <!-- Header Card: Label & Tombol Opsi -->
                <div class="flex justify-between items-start mb-4 pl-2">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <i class="pi pi-map-marker text-gray-500 text-sm"></i>
                            <h3 class="font-bold text-white tracking-wide">{{ loc.label }}</h3>
                        </div>
                        <p class="text-xs text-gray-400 truncate w-48">{{ loc.address }}</p>
                    </div>

                    <button class="text-gray-500 hover:text-white p-1 rounded-md hover:bg-[#1a103c] transition-colors">
                        <i class="pi pi-ellipsis-v"></i>
                    </button>
                </div>

                <!-- Tengah Card: AQI Score yang gede -->
                <div class="flex justify-between items-end my-4 pl-2">
                    <div>
                        <p class="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">Skor AQI</p>
                        <div class="flex items-baseline gap-2">
                            <span class="text-4xl font-black text-white leading-none">{{ loc.aqi }}</span>
                        </div>
                    </div>

                    <span class="px-3 py-1 rounded-full text-xs font-bold" :class="{
                        'bg-green-500/10 text-green-400': loc.color === 'green',
                        'bg-yellow-500/10 text-yellow-400': loc.color === 'yellow',
                        'bg-orange-500/10 text-orange-500': loc.color === 'orange',
                        'bg-red-500/10 text-red-400': loc.color === 'red'
                    }">
                        {{ loc.status }}
                    </span>
                </div>

                <!-- Bawah Card: Cuaca & Aksi -->
                <div class="mt-auto pt-4 border-t border-[#1a123a] flex justify-between items-center pl-2">
                    <div class="flex items-center gap-2 text-sm text-gray-300">
                        <i class="pi pi-sun text-yellow-400"></i> {{ loc.temp }}°C
                    </div>
                    <button class="text-xs font-semibold text-gray-400 hover:text-white transition-colors">
                        Lihat Detail <i class="pi pi-arrow-right ml-1 text-[10px]"></i>
                    </button>
                </div>

            </div>

        </div>
    </div>
</template>