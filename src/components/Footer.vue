<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="bg-[#03000d] border-t border-dark-border pt-16 pb-8 px-10 relative z-10">
        <div class="container mx-auto">

            <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                <div class="md:col-span-2 flex flex-col gap-4">
                    <div class="text-3xl font-extrabold tracking-wider">
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">ECO</span>PULSE
                    </div>
                    <p class="text-gray-400 text-sm leading-relaxed max-w-sm">
                        Sistem pemantauan kualitas udara dan cuaca cerdas untuk mewujudkan masa depan kota yang lebih
                        sehat, aman, dan berkelanjutan.
                    </p>

                    <div class="flex gap-4 mt-2">
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-[#0a012a] border border-dark-border flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:-translate-y-1 transition-all duration-300">
                            <i class="pi pi-twitter"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-[#0a012a] border border-dark-border flex items-center justify-center text-gray-400 hover:text-neon-purple hover:border-neon-purple hover:-translate-y-1 transition-all duration-300">
                            <i class="pi pi-instagram"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-[#0a012a] border border-dark-border flex items-center justify-center text-gray-400 hover:text-neon-magenta hover:border-neon-magenta hover:-translate-y-1 transition-all duration-300">
                            <i class="pi pi-github"></i>
                        </a>
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <h4 class="text-white font-bold mb-2">Eksplorasi</h4>
                    <a href="#about" class="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Tentang
                        Kami</a>
                    <a href="#live-data" class="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Live
                        Data</a>
                    <a href="#aqi-map" class="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Peta
                        Interaktif</a>
                    <a href="#blog" class="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Artikel
                        Terbaru</a>
                </div>

                <div class="flex flex-col gap-4">
                    <h4 class="text-white font-bold mb-2">Bantuan & Legal</h4>
                    <RouterLink to="/pusat-bantuan" class="text-sm text-gray-400 hover:text-neon-purple transition-colors">Pusat Bantuan</RouterLink>
                    <a href="#" class="text-sm text-gray-400 hover:text-neon-purple transition-colors">Kebijakan
                        Privasi</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-neon-purple transition-colors">Syarat
                        Ketentuan</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-neon-purple transition-colors">Hubungi Kami</a>
                </div>

            </div>

            <div class="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-xs text-gray-500">
                    &copy; 2026 EcoPulse Smart City. All rights reserved.
                </p>
                <p class="text-xs text-gray-500">
                    Didesain dengan <i class="pi pi-heart-fill text-neon-magenta mx-1"></i> untuk lingkungan yang lebih
                    baik.
                </p>
            </div>

        </div>
    </footer>
</template>