<script setup>
</script>

<template>
    <div class="min-h-screen bg-dark-purple pt-32 pb-12 px-6 relative flex items-center justify-center overflow-hidden">

        <div
            class="absolute top-10 left-[-10%] w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[150px] opacity-20">
        </div>
        <div
            class="absolute bottom-10 right-[-10%] w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-20">
        </div>

        <div
            class="w-full max-w-4xl bg-[#0a012a]/60 backdrop-blur-xl border border-dark-border rounded-3xl p-8 md:p-12 z-10 shadow-2xl shadow-neon-purple/5">

            <!-- Header -->
            <div class="border-b border-dark-border pb-8 mb-8 text-center md:text-left">
                <h1 class="text-3xl md:text-5xl font-extrabold mb-4">
                    Kebijakan <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Privasi</span>
                </h1>
                <p class="text-gray-400 text-sm">Pembaruan Terakhir: 28 Juni 2026</p>
            </div>

            <!-- Konten Kebijakan Privasi -->
            <div class="space-y-8 text-gray-300 text-sm md:text-base leading-relaxed">

                <section>
                    <h2 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <i class="pi pi-shield text-neon-cyan"></i> 1. Pendahuluan
                    </h2>
                    <p>
                        Selamat datang di EcoPulse. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi
                        data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
                        dan melindungi informasi saat Anda menggunakan layanan pemantauan kualitas udara (AQI) dan cuaca
                        kami.
                    </p>
                </section>

                <section>
                    <h2 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <i class="pi pi-database text-neon-purple"></i> 2. Data yang Kami Kumpulkan
                    </h2>
                    <ul class="list-disc list-inside space-y-2 ml-2 text-gray-400">
                        <li><strong class="text-gray-300">Informasi Akun:</strong> Nama dan alamat email saat Anda
                            melakukan registrasi.</li>
                        <li><strong class="text-gray-300">Data Lokasi:</strong> Lokasi geografis (GPS) Anda digunakan
                            secara anonim untuk memberikan data AQI yang akurat di wilayah Anda.</li>
                        <li><strong class="text-gray-300">Data Penggunaan:</strong> Interaksi Anda dengan fitur peta
                            interaktif dan preferensi notifikasi kualitas udara.</li>
                    </ul>
                </section>

                <section>
                    <h2 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <i class="pi pi-sync text-neon-cyan"></i> 3. Bagaimana Kami Menggunakan Data Anda
                    </h2>
                    <p>
                        Data yang dikumpulkan secara eksklusif digunakan untuk meningkatkan pengalaman Anda, seperti
                        memberikan peringatan kesehatan jika polusi (PM2.5) mencapai level berbahaya, mempersonalisasi
                        *dashboard* cuaca, dan meningkatkan akurasi sensor IoT kami. Kami <strong
                            class="text-neon-cyan">tidak akan pernah</strong> menjual data Anda kepada pihak ketiga.
                    </p>
                </section>

                <section>
                    <h2 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <i class="pi pi-lock text-neon-purple"></i> 4. Keamanan Informasi
                    </h2>
                    <p>
                        Kami menggunakan protokol keamanan standar industri (termasuk enkripsi *end-to-end* untuk
                        kredensial akun) demi mencegah akses, perubahan, atau penghancuran data yang tidak sah. Namun,
                        perlu diingat bahwa tidak ada transmisi internet yang 100% aman.
                    </p>
                </section>

                <section>
                    <h2 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <i class="pi pi-envelope text-neon-cyan"></i> 5. Hubungi Kami
                    </h2>
                    <p>
                        Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau ingin meminta penghapusan data
                        akun Anda, silakan hubungi kami melalui halaman <router-link to="/pusat-bantuan"
                            class="text-neon-purple hover:text-neon-cyan underline transition-colors">Pusat
                            Bantuan</router-link>.
                    </p>
                </section>

            </div>
        </div>
    </div>
</template>