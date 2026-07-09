<template>
    <div v-if="isVisible"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">

        <!-- Modal Box -->
        <div class="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl relative">

            <button @click="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Header -->
            <div class="text-center mb-6">
                <div
                    class="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                    <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                        </path>
                    </svg>
                </div>
                <h2 class="text-2xl font-bold text-white mb-2">Verifikasi Email</h2>
                <p class="text-gray-400 text-sm">
                    Kami telah mengirimkan 7 digit kode OTP ke <br>
                    <span class="text-white font-medium">{{ userEmail }}</span>
                </p>
            </div>

            <!-- Form Input OTP -->
            <form @submit.prevent="verifyOtp">
                <!-- Kotak Input 6 Digit -->
                <div class="flex justify-between gap-2 mb-8">
                    <input v-for="(digit, index) in 7" :key="index" type="text" maxlength="1" v-model="otpDigits[index]"
                        @input="focusNext(index, $event)" @keydown.delete="focusPrev(index, $event)"
                        :ref="el => inputRefs[index] = el"
                        class="w-12 h-14 bg-gray-800 border border-gray-600 rounded-lg text-center text-2xl text-white font-bold focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        required>
                </div>

                <!-- Pesan Error (kalau ada) -->
                <p v-if="errorMessage" class="text-red-400 text-sm text-center mb-4">{{ errorMessage }}</p>

                <!-- Tombol Verifikasi -->
                <button type="submit" :disabled="isLoading || otpString.length < 7"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center">
                    <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    {{ isLoading ? 'Memverifikasi...' : 'Verifikasi Sekarang' }}
                </button>
            </form>

            <div class="text-center mt-6">
                <p class="text-gray-400 text-sm">
                    Tidak menerima email?
                    <button
                        class="text-blue-400 hover:text-blue-300 font-medium underline decoration-transparent hover:decoration-blue-300 transition-all">Kirim
                        Ulang</button>
                </p>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props dari halaman Register (mengirim status tampil dan email user)
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false
    },
    userEmail: {
        type: String,
        default: 'email@contoh.com'
    }
})

// Emits ke halaman bapaknya (Register.vue)
const emit = defineEmits(['close', 'verify'])

// State
const otpDigits = ref(['', '', '', '', '', '',''])
const inputRefs = ref([])
const isLoading = ref(false)
const errorMessage = ref('')

// Gabungin array digit jadi 1 string
const otpString = computed(() => otpDigits.value.join(''))

// Fungsi pindah fokus input (kiri/kanan) otomatis
const focusNext = (index, event) => {
    // Hanya ambil angka
    const val = event.target.value.replace(/[^0-9]/g, '')
    otpDigits.value[index] = val

    if (val && index < 6) {
        inputRefs.value[index + 1].focus()
    }
}

const focusPrev = (index, event) => {
    if (!otpDigits.value[index] && index > 0) {
        inputRefs.value[index - 1].focus()
    }
}

// Fungsi tombol tutup
const closeModal = () => {
    emit('close')
}

// Fungsi pas tombol Verifikasi diklik
const verifyOtp = () => {
    if (otpString.value.length === 7) {
        isLoading.value = true
        errorMessage.value = ''

        emit('verify', otpString.value)

        setTimeout(() => { isLoading.value = false }, 1000)
    }
}
</script>