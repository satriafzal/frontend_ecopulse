<template>
    <div class="w-full max-w-7xl mx-auto">

        <!-- Header & Tambah Button -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <div>
                <h1 class="text-3xl font-bold text-white mb-2">Data Pengguna</h1>
                <p class="text-gray-400 text-sm">Kelola akses, tambah pengguna baru, atau perbarui data pengguna</p>
            </div>
            <button @click="openAddModal"
                class="px-6 py-2.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-bold text-[#06011a] hover:scale-105 transition-transform duration-300 flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <i class="pi pi-plus"></i> Tambah Pengguna
            </button>
        </div>

        <!-- Tabel Users -->
        <div class="bg-[#0d0524] rounded-3xl p-6 md:p-8 border border-[#1a123a] shadow-lg overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr class="border-b border-[#1a123a] text-xs text-gray-400 uppercase tracking-wider">
                            <th class="pb-4 font-medium px-4">Nama Lengkap</th>
                            <th class="pb-4 font-medium px-4">Email</th>
                            <th class="pb-4 font-medium px-4">No. HP</th>
                            <th class="pb-4 font-medium px-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <tr v-for="user in users" :key="user.id"
                            class="border-b border-[#1a123a]/50 hover:bg-[#120b33] transition-colors">
                            <td class="py-4 px-4 font-semibold text-white">{{ user.name }}</td>
                            <td class="py-4 px-4 text-gray-400">{{ user.email }}</td>
                            <td class="py-4 px-4 text-gray-400">{{ user.phone_number || '-' }}</td>
                            <td class="py-4 px-4 flex justify-center gap-3">
                                <button @click="openEditModal(user)"
                                    class="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 flex items-center justify-center transition-colors"
                                    title="Edit">
                                    <i class="pi pi-pencil"></i>
                                </button>
                                <button @click="deleteUser(user)"
                                    class="w-8 h-8 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center transition-colors"
                                    title="Hapus">
                                    <i class="pi pi-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr v-if="users.length === 0">
                            <td colspan="4" class="py-8 text-center text-gray-500">Belum ada data pengguna.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Modal Form CRUD -->
        <div v-if="showModal" class="fixed inset-0 z-[60] flex items-center justify-center px-4">

            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeModal"></div>

            <!-- Kotak Modal -->
            <div
                class="relative bg-[#0d0524] border border-[#1a123a] rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl z-10">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-bold text-white">{{ isEditing ? 'Edit Pengguna' : 'Tambah Pengguna Baru' }}
                    </h3>
                    <button @click="closeModal" class="text-gray-400 hover:text-white transition-colors"><i
                            class="pi pi-times"></i></button>
                </div>

                <form @submit.prevent="saveUser" class="flex flex-col gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-400 mb-1">Nama Lengkap</label>
                        <input v-model="form.name" type="text" required
                            class="w-full bg-[#120b33] border border-[#1a123a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
                            placeholder="Masukkan nama...">
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-gray-400 mb-1">Email</label>
                        <input v-model="form.email" type="email" required
                            class="w-full bg-[#120b33] border border-[#1a123a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
                            placeholder="email@contoh.com">
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-gray-400 mb-1">Nomor HP</label>
                        <input v-model="form.phone_number" type="tel"
                            class="w-full bg-[#120b33] border border-[#1a123a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
                            placeholder="08xxxxxxxxxx">
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-gray-400 mb-1">
                            Password <span v-if="isEditing" class="text-gray-500 font-normal">(Kosongkan jika tidak
                                diubah)</span>
                        </label>
                        <input v-model="form.password" type="password" :required="!isEditing"
                            class="w-full bg-[#120b33] border border-[#1a123a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
                            placeholder="Masukkan password...">
                    </div>

                    <div class="mt-4 flex gap-3">
                        <button type="button" @click="closeModal"
                            class="flex-1 py-3 rounded-xl border border-[#1a123a] text-gray-300 font-semibold hover:bg-[#120b33] transition-colors">Batal</button>
                        <button type="submit"
                            class="flex-1 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple font-bold text-[#06011a] hover:scale-[1.02] transition-transform">
                            {{ isEditing ? 'Simpan Perubahan' : 'Buat Akun' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';

const toast = useToast();
const users = ref([]);
const confirm = useConfirm();
const token = localStorage.getItem('access_token');

// State untuk mengatur Modal
const showModal = ref(false)
const isEditing = ref(false)

// State untuk menampung inputan form
const form = ref({
    id: null,
    name: '',
    email: '',
    phone_number: '',
    password: ''
})

// get data user
const fetchUsers = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/users', {
            headers: { Authorization: `Bearer ${token}` }
        })
        // replace data users use new data
        users.value = response.data.data
    } catch (error) {
        console.log(error, "gagal ambil data user!");
        toast.add({ severity: 'error', summary: 'Error', detail: 'Gagal menghapus pengguna', life: 3000 })
    }
}

// fetching data when open page
onMounted(() => {
    fetchUsers();
})

const deleteUser = (user) => {
    confirm.require({
        message: `Yakin ingin menghapus ${user.name}? Tindakan ini tidak bisa dibatalkan!`,
        header: 'Konfirmasi Hapus Pengguna',
        icon: 'pi pi-exclamation-triangle',
        rejectLabel: 'Batal',
        acceptLabel: 'Hapus',
        rejectClass: 'p-button-secondary p-button-outlined text-gray-400 border-[#1a123a] hover:bg-white/5',
        acceptClass: 'p-button-danger bg-red-500 hover:bg-red-600 border-none',
        accept: async () => {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/admin/users/${user.id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                
                users.value = users.value.filter(u => u.id !== user.id)
                toast.add({ severity: 'success', summary: 'Berhasil', detail: `Pengguna ${user.name} berhasil di hapus`, life: 3000 })
                
            } catch (error) {
                console.error('Error delete data:', error)
                toast.add({ severity: 'error', summary: 'Error', detail: 'Gagal menghapus pengguna', life: 3000 })
            }
        },
        reject: () => {
        }
    })
}

// create new user
const saveUser = async () => {
    try {
        if (isEditing.value) {
            alert('fitur belom rilis');
        } else {
            const response = await axios.post('http://127.0.0.1:8000/api/admin/users', {
                name: form.value.name,
                email: form.value.email,
                phone_number: form.value.phone_number,
                password: form.value.password
            }, {
                headers: {Authorization : `Bearer ${token}`}
            });
            
            const newUser = response.data.data || response.data.user || response.data;

            if (newUser && newUser.id) {
                users.value.unshift(newUser);
            } else {
                console.error("Format data dari Laravel gak sesuai, gagal nambah baris otomatis!");
            }

            toast.add({ severity: 'success', summary: 'Berhasil', detail: 'Akun baru berhasil dibuat!', life: 3000 });
            

            closeModal();
        }
    } catch (error) {
        console.log("gagal save user", error);
        if (error.response && error.response.status === 422) {
            const errorMessages = error.response.data.errors;
            for (const field in errorMessages) {
                toast.add({ severity: 'warn', summary: 'Input Tidak Valid!', detail: errorMessages[field][0], life: 4000 });
            }
        } else {
            toast.add({ severity: 'error', summary: 'Gagal', detail: 'Terjadi kesalahan sistem, coba lagi nanti!', life: 3000 });
        }
    }
}

// Fungsi buka modal untuk Tambah User Baru
const openAddModal = () => {
    isEditing.value = false
    form.value = { id: null, name: '', email: '', phone_number: '', password: '' }
    showModal.value = true
}

// Fungsi buka modal untuk Edit User
const openEditModal = (user) => {
    isEditing.value = true
    form.value = { ...user, password: '' }
    showModal.value = true
}

// Fungsi tutup modal
const closeModal = () => {
    showModal.value = false
    form.value = { id: null, name: '', email: '', phone_number: '', password: '' };
}
</script>