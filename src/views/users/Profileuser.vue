<template>
    <div class="w-full max-w-6xl mx-auto">

        <div class="mb-8" data-aos="fade-right">
            <h1 class="text-3xl font-bold text-white mb-2">Pengaturan Profil</h1>
            <p class="text-gray-400 text-sm">Kelola data pribadi, foto profil, dan keamanan akun Anda</p>
        </div>

        <!-- Grid Layout: Kiri (Foto & Password), Kanan (Data Pribadi) -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos="fade-up">

            <!-- KOLOM KIRI (FOTO PROFIL) -->
            <div class="lg:col-span-1 flex flex-col gap-8">
                <!-- Card Foto Profil -->
                <div
                    class="bg-[#0d0524] rounded-3xl p-8 border border-[#1a123a] shadow-lg flex flex-col items-center text-center">
                    <h3 class="font-semibold text-white w-full text-left mb-6">Foto Profil</h3>

                    <input type="file" ref="fileInput" class="hidden"
                        accept="image/jpeg, image/png, image/jpg, image/gif" @change="uploadPhoto">

                    <div class="relative w-32 h-32 rounded-full mb-6">
                        <img :src="photoUrl" alt="Profile"
                            class="w-full h-full rounded-full object-cover border-4 border-[#120b33]">

                        <button @click="triggerFileInput"
                            class="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#06011a] hover:bg-gray-200 transition-colors shadow-lg border-2 border-[#0d0524]">
                            <i v-if="isUploadingPhoto" class="pi pi-spin pi-spinner text-sm"></i>
                            <i v-else class="pi pi-camera text-sm"></i>
                        </button>
                    </div>

                    <div class="flex gap-3 w-full">
                        <button @click="triggerFileInput"
                            class="flex-1 py-2.5 bg-[#1a103c] text-white border border-[#261a52] rounded-xl text-sm font-semibold hover:bg-[#261a52] transition-colors">Ubah</button>
                        <button
                            class="flex-1 py-2.5 bg-red-500/10 text-red-500 rounded-xl text-sm font-semibold hover:bg-red-500/20 transition-colors">Hapus</button>
                    </div>

                    <p class="text-xs text-gray-400 mb-6 leading-relaxed">Format yang didukung: JPG, PNG,
                        Ukuran maksimal 2MB</p>
                </div>
            </div>

            <!-- KOLOM KANAN (FORM DATA PRIBADI & PASSWORD) -->
            <div class="lg:col-span-2 flex flex-col gap-8">

                <!-- Card Data Pribadi -->
                <div class="bg-[#0d0524] rounded-3xl p-8 border border-[#1a123a] shadow-lg">
                    <h3 class="font-semibold text-white mb-6">Informasi Personal</h3>

                    <form class="flex flex-col gap-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div class="flex flex-col gap-2">
                                <label class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Nama
                                    Lengkap</label>
                                <input type="text" v-model="fullName"
                                    class="bg-[#120b33] border-none text-white text-sm rounded-xl py-3.5 px-4 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-shadow">
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Nomor
                                    Telepon</label>
                                <div class="relative">
                                    <i
                                        class="pi pi-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
                                    <input type="tel" v-model="phoneNumber"
                                        class="w-full bg-[#120b33] border-none text-white text-sm rounded-xl py-3.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-shadow">
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-2">
                            <label class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Alamat
                                Email</label>
                            <div class="relative">
                                <i
                                    class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
                                <input type="email" v-model="email"
                                    class="w-full bg-[#120b33] border-none text-white text-sm rounded-xl py-3.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-shadow">
                            </div>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button type="button" @click.prevent="updateProfile" :disabled="isUpdating"
                                class="px-8 py-3 bg-white text-[#06011a] font-bold rounded-xl text-sm transition-colors shadow-md flex items-center justify-center gap-2"
                                :class="isUpdating ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-200'">
                                <i v-if="isUpdating" class="pi pi-spin pi-spinner text-sm"></i>

                                <span>{{ isUpdating ? 'Menyimpan...' : 'Simpan Perubahan' }}</span>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Card Ubah Password -->
                <div class="bg-[#0d0524] rounded-3xl p-8 border border-[#1a123a] shadow-lg">
                    <h3 class="font-semibold text-white mb-6">Keamanan & Password</h3>

                    <form class="flex flex-col gap-5">
                        <div class="flex flex-col gap-2">
                            <label class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Password Saat
                                Ini</label>
                            <div class="relative">
                                <i
                                    class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
                                <input type="password" placeholder="••••••••"
                                    class="w-full bg-[#120b33] border-none text-white text-sm rounded-xl py-3.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-shadow">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div class="flex flex-col gap-2">
                                <label class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Password
                                    Baru</label>
                                <div class="relative">
                                    <i
                                        class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
                                    <input type="password" placeholder="Password baru"
                                        class="w-full bg-[#120b33] border-none text-white text-sm rounded-xl py-3.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-shadow">
                                </div>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Konfirmasi
                                    Password Baru</label>
                                <div class="relative">
                                    <i
                                        class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
                                    <input type="password" placeholder="Ulangi password baru"
                                        class="w-full bg-[#120b33] border-none text-white text-sm rounded-xl py-3.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-shadow">
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button type="button"
                                class="px-8 py-3 bg-[#1a103c] text-white font-bold rounded-xl text-sm hover:bg-[#261a52] transition-colors border border-[#261a52]">
                                Perbarui Password
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const fullName = ref('');
const phoneNumber = ref('');
const email = ref('');
const photoUrl = ref('');
const fileInput = ref(null);
const isUploadingPhoto = ref(false);
const isUpdating = ref(false);

// State untuk nyimpen data asli (patokan perbandingan)
const originalData = ref({
    fullName: '',
    phoneNumber: '',
    email: ''
});

// Fungsi narik data dari Laravel
const fetchProfileData = async () => {
    try {
        const token = localStorage.getItem('access_token');
        if (token) {
            const response = await axios.get('http://127.0.0.1:8000/api/user', {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.data) {
                const fetchedName = response.data.name;
                const fetchedEmail = response.data.email;
                const fetchedPhone = response.data.phone_number || '';

                // Masukin ke state form
                fullName.value = fetchedName;
                email.value = fetchedEmail;
                phoneNumber.value = fetchedPhone;

                // Masukin ke state original
                originalData.value = {
                    fullName: fetchedName,
                    email: fetchedEmail,
                    phoneNumber: fetchedPhone
                };

                // check photo profile
                if (response.data.avatar_url) {
                    photoUrl.value = `http://127.0.0.1:8000/storage/${response.data.avatar_url}`;
                } else {
                    const formattedName = response.data.name.replace(' ', '+');
                    photoUrl.value = `https://ui-avatars.com/api/?name=${formattedName}&background=1a103c&color=00ffff&size=200`;
                }
            }
        }
    } catch (error) {
        console.error('Gagal narik data:', error);
    }
};

const triggerFileInput = () => {
    fileInput.value.click();
};

// for update photo profile
const uploadPhoto = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validasi ukuran di frontend (Max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Ukuran foto maksimal 2MB!', life: 3000 });
        return;
    }

    const formData = new FormData();
    formData.append('photo', file);

    isUploadingPhoto.value = true;

    try {
        const token = localStorage.getItem('access_token');
        // PAKE POST UNTUK FILE
        const response = await axios.post('http://127.0.0.1:8000/api/user/photo', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });

        photoUrl.value = response.data.photo_url;
        toast.add({ severity: 'success', summary: 'Berhasil', detail: 'Foto profil berhasil diperbarui!', life: 3000 });
    } catch (error) {
        console.error(error);
        toast.add({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengupload foto', life: 3000 });
    } finally {
        isUploadingPhoto.value = false;
        event.target.value = ''; // Reset memori file input
    }
};

// Fungsi klik tombol simpan
const updateProfile = async () => {
    // Cek apakah ada data yang diubah
    const isChanged =
        fullName.value !== originalData.value.fullName ||
        phoneNumber.value !== originalData.value.phoneNumber ||
        email.value !== originalData.value.email;

    if (!isChanged) {
        toast.add({ severity: 'info', summary: 'Info', detail: 'Tidak ada data yang diupdate', life: 4000 });
        return;
    }

    isUpdating.value = true;

    try {
        const token = localStorage.getItem('access_token');

        const response = await axios.put('http://127.0.0.1:8000/api/user', {
            name: fullName.value,
            email: email.value,
            phone_number: phoneNumber.value
        },
            {
                headers: { Authorization: `Bearer ${token}` }
            });

        // 4. Kalau sukses, perbarui data patokan & munculin notif
        originalData.value = {
            fullName: fullName.value,
            phoneNumber: phoneNumber.value,
            email: email.value
        };

        toast.add({ severity: 'success', summary: 'Berhasil', detail: 'Data berhasil diupdate', life: 3000 });

        // Perbarui state original biar gak notif sukses terus kalau diklik dobel
        originalData.value = {
            fullName: fullName.value,
            phoneNumber: phoneNumber.value,
            email: email.value
        };
    } catch (error) {
        console.error('Gagal update data:', error);

        if (error.response && error.response.status === 422) {
            toast.add({ severity: 'error', summary: 'Validasi Gagal', detail: 'Cek kembali isian form Anda (Email/No HP mungkin sudah terpakai)', life: 5000 });
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Terjadi kesalahan pada server', life: 4000 });
        }
    } finally {
        isUpdating.value = false;
    }



};

onMounted(() => {
    fetchProfileData();
});
</script>