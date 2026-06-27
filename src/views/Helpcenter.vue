<script setup>
</script>

<template>
    <div class="min-h-screen bg-dark-purple pt-32 pb-12 px-6 relative flex items-center justify-center overflow-hidden">

        <div
            class="absolute top-[-5%] right-[-5%] w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse">
        </div>
        <div
            class="absolute bottom-[-5%] left-[-10%] w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[120px] opacity-20">
        </div>

        <div
            class="w-full max-w-5xl bg-[#0a012a]/60 backdrop-blur-xl border border-dark-border rounded-3xl p-8 md:p-12 z-10 shadow-2xl shadow-neon-cyan/5 flex flex-col lg:flex-row gap-12 items-center">

            <div class="w-full lg:w-1/2 flex flex-col gap-6">
                <span
                    class="text-xs font-bold tracking-widest text-neon-cyan uppercase bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 rounded-full w-max">
                    Pusat Bantuan
                </span>

                <h1 class="text-3xl md:text-5xl font-extrabold leading-tight">
                    Kami Siap <br> <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Mendengar
                        Anda</span>
                </h1>

                <p class="text-gray-400 text-sm md:text-base leading-relaxed">
                    Punya pertanyaan seputar data kualitas udara EcoPulse? Menemukan <i>bug</i> saat mengeksplorasi
                    peta, atau ingin berkolaborasi? Jangan ragu untuk meninggalkan pesan. Tim kami akan memastikan
                    setiap masukan Anda tersampaikan!
                </p>

                <div class="flex flex-col gap-5 mt-4">
                    <div class="flex items-center gap-4">
                        <div
                            class="w-12 h-12 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                            <i class="pi pi-clock text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-white">Respon Cepat</h4>
                            <p class="text-xs text-gray-500">Kami membalas dalam waktu 1x24 jam.</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <div
                            class="w-12 h-12 rounded-full bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center text-neon-purple">
                            <i class="pi pi-envelope text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-white">Email Langsung</h4>
                            <p class="text-xs text-gray-500">support@ecopulse.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-1/2 bg-[#0d0524] p-8 rounded-3xl border border-dark-border shadow-inner">
                <h3 class="text-xl font-bold text-white mb-6">Kirim Pesan Baru</h3>

                <form action="https://formspree.io/f/mkolbwwo" method="POST" class="flex flex-col gap-5">

                    <div class="relative">
                        <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                        <input type="text" name="name" placeholder="Nama Lengkap" required
                            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors">
                    </div>

                    <div class="relative">
                        <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                        <input type="email" name="email" placeholder="Alamat Email" required
                            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors">
                    </div>

                    <div class="relative">
                        <i class="pi pi-comment absolute left-4 top-4 text-gray-500"></i>
                        <textarea name="message" rows="4" placeholder="Tulis detail pertanyaan atau masukan Anda..."
                            required
                            class="w-full bg-[#120b33] border border-dark-border text-white text-sm rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit"
                        class="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-purple font-bold text-sm hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(0,255,255,0.3)] flex items-center justify-center gap-2">
                        <i class="pi pi-send"></i> KIRIM SEKARANG
                    </button>

                </form>
            </div>

        </div>

    </div>
</template>