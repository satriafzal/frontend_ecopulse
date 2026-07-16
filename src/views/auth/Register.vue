<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios'
import OtpModal from '../users/OtpModal.vue'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

const router = useRouter()
const toast = useToast()

const form = ref({
  name: '',
  email: '',
  phone_number: '',
  password: '',
  password_confirmation: ''
})

const isLoading = ref(false)
const errorMessage = ref('')
const showOtpModal = ref(false)

const submitRegister = async () => {
  // Cek dulu apakah password dan konfirmasinya sama
  if (form.value.password !== form.value.password_confirmation) {
    errorMessage.value = 'Konfirmasi password tidak cocok!'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    // Tembak API Register Laravel
    const response = await axios.post('http://127.0.0.1:8000/api/register', {
      name: form.value.name,
      email: form.value.email,
      phone_number: form.value.phone_number,
      password: form.value.password,
    })

    // Kalau sukses dapet respon 201 Created
    if (response.status === 201) {
      showOtpModal.value = true // open modal otp
    }
  } catch (error) {
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.message || 'Gagal mendaftar. Pastikan email sudah benar!'
    } else {
      errorMessage.value = 'Terjadi kesalahan pada server!'
    }
  } finally {
    isLoading.value = false
  }
}

//  Fungsi pas OTP dimasukkan di Modal
const submitOtp = async (otpCode) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/verify-otp', {
      email: form.value.email,
      otp_code: otpCode
    })

    if (response.status === 200) {
      // Save token
      localStorage.setItem('access_token', response.data.access_token)

      showOtpModal.value = false // Tutup modalnya

      toast.add({ 
        severity: 'success', 
        summary: 'Berhasil Mendaftar!', 
        life: 4000,
      });

      setTimeout(() => {
        router.push('/user/db_user') 
      }, 2000)
    }
  } catch (error) {
    toast.add({ 
      severity: 'error', 
      summary: 'Verifikasi Gagal', 
      detail: 'Kode OTP salah atau sudah kedaluwarsa!', 
      life: 4000 
    })
  }
}
</script>

<template>
  <div class="min-h-screen bg-dark-purple flex items-center justify-center relative overflow-hidden px-4 py-12 pt-28"
    data-aos="fade-up">
    <div
      class="absolute top-[10%] right-[-5%] w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse">
    </div>
    <div
      class="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[120px] opacity-30">
    </div>

    <div
      class="w-full max-w-md bg-[#0a012a]/60 backdrop-blur-xl border border-dark-border rounded-3xl p-10 z-10 shadow-2xl shadow-neon-cyan/10 mt-16 md:mt-0">

      <div class="text-center mb-8">
        <h2 class="text-2xl font-extrabold text-white mb-2">Buat Akun Baru</h2>
        <p class="text-gray-400 text-sm">Bergabunglah dengan komunitas EcoPulse hari ini.</p>
      </div>

      <form @submit.prevent="submitRegister" class="flex flex-col gap-5">

        <div class="relative">
          <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input v-model="form.name" type="text" placeholder="Nama Lengkap" required
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors">
        </div>

        <div class="relative">
          <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input v-model="form.email" type="email" placeholder="Alamat Email" required
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors">
        </div>

        <div class="relative">
          <i class="pi pi-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input v-model="form.phone_number" type="text" placeholder="No Telpon" required
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors">
        </div>

        <div class="relative">
          <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input v-model="form.password" type="password" placeholder="Kata Sandi" required
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors">
        </div>

        <div class="relative">
          <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input v-model="form.password_confirmation" type="password" placeholder="Konfirmasi Kata Sandi" required
            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors">
        </div>

        <p v-if="errorMessage" class="text-red-500 text-xs mt-[-10px] text-center font-medium">
          {{ errorMessage }}
        </p>

        <div class="flex items-start gap-2 text-xs text-gray-400 mt-2">
          <input type="checkbox" required
            class="accent-neon-cyan w-4 h-4 rounded border-gray-600 bg-dark-purple mt-0.5 cursor-pointer">
          <label>
            Saya setuju dengan <RouterLink to="/syarat_ketentuan" class="text-neon-cyan hover:underline">Syarat &
              Ketentuan</RouterLink> serta <RouterLink to="/privasi" class="text-neon-cyan hover:underline">Kebijakan
              Privasi</RouterLink> yang berlaku.
          </label>
        </div>

        <button type="submit" :disabled="isLoading"
          class="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-dark-purple font-bold text-sm hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(191,0,255,0.3)] disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center gap-2">
          <span v-if="isLoading">
            <i class="pi pi-spin pi-spinner"></i> Mendaftar...
          </span>
          <span v-else>DAFTAR SEKARANG</span>
        </button>

      </form>

      <div class="mt-8 text-center text-sm text-gray-400">
        Sudah punya akun?
        <RouterLink to="/login" class="text-neon-cyan hover:underline font-semibold ml-1">Masuk di sini</RouterLink>
      </div>

    </div>

    <OtpModal :isVisible="showOtpModal" :userEmail="form.email" @close="showOtpModal = false" @verify="submitOtp" />

    <Toast position="top-center" />

  </div>
</template>