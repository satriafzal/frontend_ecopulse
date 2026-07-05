<script setup>
import { ref } from 'vue'

const users = ref([
    { id: 1, name: 'Budi Santoso', email: 'budi@example.com', phone_number: '081234567890' },
    { id: 2, name: 'Siti Aminah', email: 'siti@example.com', phone_number: '089876543210' }
])

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
}

// Fungsi Simpan (Create / Update)
const saveUser = () => {
    if (isEditing.value) {
        // Logika UPDATE
        const index = users.value.findIndex(u => u.id === form.value.id)
        if (index !== -1) {
            users.value[index] = { ...form.value }
        }
    } else {
        // Logika CREATE
        const newId = users.value.length ? Math.max(...users.value.map(u => u.id)) + 1 : 1
        users.value.push({ ...form.value, id: newId })
    }
    closeModal()
}

// Fungsi Hapus
const deleteUser = (id) => {
    if (confirm('Yakin ingin menghapus pengguna ini? Tindakan ini tidak bisa dibatalkan.')) {
        users.value = users.value.filter(u => u.id !== id)
    }
}
</script>

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
                                <button @click="deleteUser(user.id)"
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

            <!-- Latar Hitam Transparan (Klik di luar untuk tutup) -->
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