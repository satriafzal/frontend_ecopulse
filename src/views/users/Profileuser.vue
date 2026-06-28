<script setup>
// Kosongin aja, nggak butuh logic toggle sidebar lagi di sini
</script>

<template>
    <div class="w-full max-w-6xl mx-auto">

        <div class="mb-8">
            <h1 class="text-3xl font-bold text-white mb-2">Pengaturan Profil</h1>
            <p class="text-gray-400 text-sm">Kelola data pribadi, foto profil, dan keamanan akun Anda.</p>
        </div>

        <!-- Grid Layout: Kiri (Foto & Password), Kanan (Data Pribadi) -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <!-- KOLOM KIRI (FOTO PROFIL) -->
            <div class="lg:col-span-1 flex flex-col gap-8">
                <!-- Card Foto Profil -->
                <div
                    class="bg-[#0d0524] rounded-3xl p-8 border border-[#1a123a] shadow-lg flex flex-col items-center text-center">
                    <h3 class="font-semibold text-white w-full text-left mb-6">Foto Profil</h3>

                    <div class="relative w-32 h-32 rounded-full mb-6">
                        <img src="https://ui-avatars.com/api/?name=Satria+Afzal&background=1a103c&color=00ffff&size=200"
                            alt="Profile" class="w-full h-full rounded-full object-cover border-4 border-[#120b33]">
                        <button
                            class="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#06011a] hover:bg-gray-200 transition-colors shadow-lg border-2 border-[#0d0524]">
                            <i class="pi pi-camera text-sm"></i>
                        </button>
                    </div>

                    <p class="text-xs text-gray-400 mb-6 leading-relaxed">Format yang didukung: JPG, PNG, atau GIF.
                        Ukuran maksimal 2MB.</p>

                    <div class="flex gap-3 w-full">
                        <button
                            class="flex-1 py-2.5 bg-[#1a103c] text-white border border-[#261a52] rounded-xl text-sm font-semibold hover:bg-[#261a52] transition-colors">Ubah</button>
                        <button
                            class="flex-1 py-2.5 bg-red-500/10 text-red-500 rounded-xl text-sm font-semibold hover:bg-red-500/20 transition-colors">Hapus</button>
                    </div>
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
                                <input type="text" value="Satria Afzal"
                                    class="bg-[#120b33] border-none text-white text-sm rounded-xl py-3.5 px-4 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-shadow">
                            </div>

                            <div class="flex flex-col gap-2">
                                <label
                                    class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Username</label>
                                <div class="relative">
                                    <i
                                        class="pi pi-at absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
                                    <input type="text" value="satria.afzal"
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
                                <input type="email" value="satria@example.com"
                                    class="w-full bg-[#120b33] border-none text-white text-sm rounded-xl py-3.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-shadow">
                            </div>
                        </div>

                        <div class="flex justify-end mt-4">
                            <button type="button"
                                class="px-8 py-3 bg-white text-[#06011a] font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors shadow-md">
                                Simpan Perubahan
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