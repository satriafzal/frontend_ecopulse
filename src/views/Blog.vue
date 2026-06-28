<template>
    <section id="blog" class="py-24 px-10 relative z-10 bg-[#07021c]">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div class="max-w-xl">
                    <span class="text-xs font-bold tracking-widest text-neon-cyan uppercase mb-3" data-aos="fade-in">Eco Insight</span>
                    <h2 class="text-4xl font-extrabold" data-aos="fade-right">Kabar <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">Lingkungan</span>
                        Terbaru</h2>
                </div>
                <button
                    class="text-sm font-bold text-neon-cyan flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                    Lihat Semua Artikel <i class="pi pi-arrow-right" data-aos="fade-in"></i>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="group cursor-pointer" data-aos="flip-right">
                    <div class="relative w-full h-56 rounded-3xl overflow-hidden border border-dark-border mb-6">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-purple to-transparent z-10"></div>
                            <img 
                                src="/img/img1.jpg" 
                                alt="Thumbnail Artikel 1" 
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            >
                        <span
                            class="absolute top-4 left-4 z-20 bg-neon-cyan/20 backdrop-blur-md border border-neon-cyan/30 text-neon-cyan text-[10px] font-black px-3 py-1 rounded-full uppercase">Kesehatan</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">Dampak PM2.5
                        Terhadap Kesehatan Jangka Panjang</h3>
                    <p class="text-gray-400 text-sm leading-relaxed mb-4">
                        Pelajari mengapa partikel kecil ini menjadi ancaman serius bagi warga perkotaan...
                    </p>
                    <div class="text-[10px] text-gray-500 font-bold flex gap-4 uppercase tracking-tighter">
                        <span>12 Juni 2026</span>
                        <span>•</span>
                        <span>5 Menit Baca</span>
                    </div>
                </div>

                <div class="group cursor-pointer" data-aos="flip-right">
                    <div class="relative w-full h-56 rounded-3xl overflow-hidden border border-dark-border mb-6">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-purple to-transparent z-10"></div>
                            <img 
                                src="/img/img2.jpg" 
                                alt="Thumbnail Artikel 1" 
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                >
                        <span
                            class="absolute top-4 left-4 z-20 bg-neon-purple/20 backdrop-blur-md border border-neon-purple/30 text-neon-purple text-[10px] font-black px-3 py-1 rounded-full uppercase">Lifestyle</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 group-hover:text-neon-purple transition-colors">Cara Efektif
                        Mengurangi Polusi Udara Dari Rumah</h3>
                    <p class="text-gray-400 text-sm leading-relaxed mb-4">
                        Langkah sederhana mulai dari tanaman hingga pengelolaan limbah rumah tangga...
                    </p>
                    <div class="text-[10px] text-gray-500 font-bold flex gap-4 uppercase tracking-tighter">
                        <span>08 Juni 2026</span>
                        <span>•</span>
                        <span>8 Menit Baca</span>
                    </div>
                </div>

                <div class="group cursor-pointer" data-aos="flip-right">
                    <div class="relative w-full h-56 rounded-3xl overflow-hidden border border-dark-border mb-6">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-purple to-transparent z-10"></div>
                            <img 
                                src="/img/img3.jpg" 
                                alt="Thumbnail Artikel 1" 
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            >
                        <span
                            class="absolute top-4 left-4 z-20 bg-neon-magenta/20 backdrop-blur-md border border-neon-magenta/30 text-neon-magenta text-[10px] font-black px-3 py-1 rounded-full uppercase">Teknologi</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 group-hover:text-neon-magenta transition-colors">Masa Depan Smart
                        City Dengan IoT EcoPulse</h3>
                    <p class="text-gray-400 text-sm leading-relaxed mb-4">
                        Bagaimana integrasi sensor masa depan akan mengubah wajah kota kita menjadi hijau...
                    </p>
                    <div class="text-[10px] text-gray-500 font-bold flex gap-4 uppercase tracking-tighter">
                        <span>05 Juni 2026</span>
                        <span>•</span>
                        <span>6 Menit Baca</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>