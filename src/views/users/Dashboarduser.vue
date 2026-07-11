<template>
    <div class="w-full">
        <!-- Baris 1: Hero & Donut Chart -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6" data-aos="fade-down">

            <!-- Widget Hero (Kiri, 2 Kolom) -->
            <div
                class="lg:col-span-2 bg-[#0d0524] rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-[#1a123a] shadow-lg relative overflow-hidden">
                <!-- Ornamen abstrak -->
                <div
                    class="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-full blur-2xl pointer-events-none">
                </div>

                <div>
                    <p class="text-gray-400 text-xs md:text-sm font-medium mb-1">Dashboard Overview</p>
                    <h1 class="text-3xl md:text-4xl font-bold text-white flex items-center gap-2 md:gap-3">
                        Hello {{ username }} <span class="text-2xl md:text-3xl">👋</span>
                    </h1>
                </div>

                <div class="flex flex-row gap-3 md:gap-6 mt-8 md:mt-12 w-full">

                    <!-- Kotak Status AQI -->
                    <div
                        class="bg-[#1a103c] rounded-2xl p-4 md:p-5 w-1/2 border border-[#261a52] flex flex-col justify-center">
                        <p class="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider mb-1 line-clamp-1">
                            Status AQI</p>
                        <p
                            class="text-xl md:text-2xl font-bold text-white flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                            45 <span class="text-xs md:text-sm font-normal text-green-400">Baik</span>
                        </p>
                    </div>

                    <!-- Kotak Suhu Cuaca -->
                    <div
                        class="bg-[#1a103c] rounded-2xl p-4 md:p-5 w-1/2 border border-[#261a52] flex flex-col justify-center">
                        <div class="flex justify-between items-start mb-1">
                            <p class="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider line-clamp-1">Suhu
                                Cuaca</p>
                            <i class="pi pi-eye text-gray-500 text-xs md:text-sm mt-0.5"></i>
                        </div>
                        <p class="text-xl md:text-2xl font-bold text-white">28°C</p>
                    </div>

                </div>
            </div>

            <!-- Widget Donut Chart (Kanan, 1 Kolom) -->
            <div
                class="bg-[#0d0524] rounded-3xl p-8 flex flex-col items-center justify-center border border-[#1a123a] shadow-lg">
                <h3 class="text-gray-300 font-semibold mb-6">Kualitas Udara</h3>

                <!-- Lingkaran Donut Custom -->
                <div
                    class="relative w-40 h-40 rounded-full border-[12px] border-[#1a103c] border-t-neon-cyan flex items-center justify-center mb-6">
                    <span class="text-3xl font-bold text-white">75%</span>
                </div>

                <p class="text-xs text-gray-400 text-center mb-4">Mendekati batas aman (PM2.5)</p>
                <button
                    class="w-full py-3 bg-white text-[#06011a] font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors">Lihat
                    Detail</button>
            </div>
        </div>

        <!-- Baris 2: Table Data & List -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-aos="fade-up">

            <!-- Widget Table (Kiri, 2 Kolom) -->
            <div class="lg:col-span-2 bg-[#0d0524] rounded-3xl p-8 border border-[#1a123a] shadow-lg">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-semibold text-white">Data Lokasi Terbaru</h3>
                    <i class="pi pi-ellipsis-h text-gray-500 cursor-pointer"></i>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr class="text-gray-500 text-xs uppercase border-b border-[#1a123a]">
                                <th class="pb-3 font-medium">Lokasi</th>
                                <th class="pb-3 font-medium">Tanggal</th>
                                <th class="pb-3 font-medium">AQI</th>
                                <th class="pb-3 font-medium">Status</th>
                                <th class="pb-3 font-medium text-right">Opsi</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm">
                            <tr class="border-b border-[#1a123a]/50">
                                <td class="py-4 text-gray-300">Depok, Jawa Barat</td>
                                <td class="py-4 text-gray-500">12/06/2026</td>
                                <td class="py-4 text-green-400">45</td>
                                <td class="py-4"><span
                                        class="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs">Aman</span>
                                </td>
                                <td class="py-4 text-right"><button
                                        class="text-gray-500 hover:text-white text-xs bg-[#1a103c] px-3 py-1 rounded-md">Detail</button>
                                </td>
                            </tr>
                            <tr class="border-b border-[#1a123a]/50">
                                <td class="py-4 text-gray-300">Sudirman, Jakarta</td>
                                <td class="py-4 text-gray-500">12/06/2026</td>
                                <td class="py-4 text-red-400">152</td>
                                <td class="py-4"><span
                                        class="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-xs">Bahaya</span>
                                </td>
                                <td class="py-4 text-right"><button
                                        class="text-gray-500 hover:text-white text-xs bg-[#1a103c] px-3 py-1 rounded-md">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-4 text-gray-300">Margonda Raya</td>
                                <td class="py-4 text-gray-500">11/06/2026</td>
                                <td class="py-4 text-yellow-400">85</td>
                                <td class="py-4"><span
                                        class="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs">Sedang</span>
                                </td>
                                <td class="py-4 text-right"><button
                                        class="text-gray-500 hover:text-white text-xs bg-[#1a103c] px-3 py-1 rounded-md">Detail</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Widget List History (Kanan, 1 Kolom) -->
            <div class="bg-[#0d0524] rounded-3xl p-8 border border-[#1a123a] shadow-lg">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-semibold text-white">Riwayat Peringatan</h3>
                    <i class="pi pi-ellipsis-h text-gray-500 cursor-pointer"></i>
                </div>

                <div class="flex flex-col gap-5">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-10 h-10 rounded-xl bg-[#1a103c] flex items-center justify-center text-neon-cyan">
                                <i class="pi pi-cloud"></i>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-200">Polusi Meningkat</p>
                                <p class="text-xs text-gray-500">Jakarta Selatan</p>
                            </div>
                        </div>
                        <span class="bg-neon-cyan/10 text-neon-cyan px-2 py-1 rounded text-xs font-bold">PM 2.5</span>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-10 h-10 rounded-xl bg-[#1a103c] flex items-center justify-center text-neon-purple">
                                <i class="pi pi-sun"></i>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-200">Cuaca Panas Ekstrem</p>
                                <p class="text-xs text-gray-500">Depok</p>
                            </div>
                        </div>
                        <span class="bg-neon-purple/10 text-neon-purple px-2 py-1 rounded text-xs font-bold">34°C</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue';
import axios from 'axios';

const route = useRoute()
const router = useRouter()
const toast = useToast()


// for username
const username = ref('user');

// fetch data user
const fetchuserdata = async () => {
    try {
        const token = localStorage.getItem('access_token');

        // check token true or false
        if (token) {
            const response = await axios.get('http://127.0.0.1:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // if laravel return data user, get username user from db
            if (response.data && response.data.name) {
                // get first name
                const firstname = response.data.name;
                username.value = firstname.split(' ')[0];
            }
        }
    } catch (error) {
        console.log('gagal ambil data user', error)
    }
}

// wajib log out jika ingin pindah halaman
onMounted(() => {
    if (route.query.pesan === 'udah_login') {
        toast.add({
            severity: 'info',
            summary: 'Peringatan!',
            detail: 'Harap log out terlebih dahulu!',
            life: 4000
        })

        router.replace('/user/db_user')
    }
})

onMounted(() => {
    fetchuserdata()
})
</script>


