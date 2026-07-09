<template>
  <div class="min-h-screen bg-dark-purple flex items-center justify-center relative overflow-hidden px-4 pt-28" data-aos="fade-up">
    
    <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

    <div class="w-full max-w-md bg-[#0a012a]/60 backdrop-blur-xl border border-dark-border rounded-3xl p-10 z-10 shadow-2xl shadow-neon-purple/10">
      
      <div class="text-center mb-10">
        <div class="text-3xl font-extrabold tracking-wider mb-2">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">ECO</span>PULSE
        </div>
        <p class="text-gray-400 text-sm">Selamat datang kembali! Silakan masuk ke akun Anda.</p>
      </div>

      <form @submit.prevent="submitLogin" class="flex flex-col gap-6">
        
        <div class="relative">
          <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input 
            v-model="form.email"
            type="email" 
            placeholder="Alamat Email" 
            required
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
          >
        </div>

        <div class="relative">
          <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input 
            v-model="form.password"
            type="password" 
            placeholder="Kata Sandi" 
            required
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
          >
        </div>

        <div class="flex items-center justify-between text-xs">
          <label class="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors">
            <input type="checkbox" class="accent-neon-cyan w-4 h-4 rounded border-gray-600 bg-dark-purple">
            Ingat Saya
          </label>
          <a href="#" class="text-neon-cyan hover:underline">Lupa Sandi?</a>
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-purple font-bold text-sm hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(0,255,255,0.3)] disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center gap-2"
        >
          <span v-if="isLoading">
              <i class="pi pi-spin pi-spinner"></i> Memproses...
          </span>
          <span v-else>MASUK</span>
        </button>

      </form>

      <div class="mt-8 text-center text-sm text-gray-400">
        Belum punya akun? 
        <RouterLink to="/register" class="text-neon-magenta hover:underline font-semibold ml-1">Daftar Sekarang</RouterLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { useToast } from 'primevue/usetoast'
import { onMounted } from 'vue'

const router = useRouter()
const route = useRoute();
const toast = useToast()

onMounted(() => {
  if (route.query.pesan === 'login_dulu') {
    toast.add({ 
      severity: 'error', 
      summary: 'Akses Ditolak', 
      detail: 'Harap login untuk akses lebih lanjut!', 
      life: 4000 
    })
    
    router.replace('/login')
  }
})

// 1. State form untuk nyimpen inputan user
const form = ref({
  email: '',
  password: ''
})

const isLoading = ref(false)

// 2. Fungsi Login
const submitLogin = async () => {
  isLoading.value = true

  try {
    // Nembak API Login Laravel
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: form.value.email,
      password: form.value.password
    })

    if (response.status === 200) {
      // Simpan Token Sanctum ke localStorage
      localStorage.setItem('access_token', response.data.access_token)
      
      toast.add({ 
        severity: 'success', 
        summary: 'Login Berhasil!', 
        detail: 'Selamat datang kembali di EcoPulse', 
        life: 4000 
      })

      setTimeout(() => {
        router.push('/user/db_user');
      }, 2500)
    }
  } catch (error) {
    if (error.response) {
      // Kalau belum verifikasi OTP (kode 403 dari Laravel)
      if (error.response.status === 403) {
        toast.add({ 
          severity: 'warn', 
          summary: 'Belum Verifikasi', 
          detail: 'Akun lu belum diverifikasi OTP. Silakan daftar ulang atau cek email!', 
          life: 4000 
        })
      } 
      else if (error.response.status === 401) {
        toast.add({ 
          severity: 'error', 
          summary: 'Login Gagal', 
          detail: 'Email atau kata sandi salah!', 
          life: 4000 
        })
      } 
      else if (error.response.status === 429) {
        toast.add({ 
          severity: 'warn',
          summary: 'Terlalu Banyak Percobaan!', 
          detail: 'Sistem mendeteksi spam. Tolong tunggu 1 menit sebelum coba login lagi!', 
          life: 5000 
        })
      }
      else {
        toast.add({ 
          severity: 'error', 
          summary: 'Error Server', 
          detail: 'Terjadi kesalahan pada server!', 
          life: 3000 
        })
      }
    } else {
      toast.add({ 
        severity: 'error', 
        summary: 'Koneksi Terputus', 
        detail: 'Pastikan server backend Laravel sudah jalan!', 
        life: 3000 
      })
    }
  } finally {
    isLoading.value = false
  }
}
</script>