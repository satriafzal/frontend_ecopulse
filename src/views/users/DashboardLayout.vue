<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const isExpanded = ref(window.innerWidth > 768)

const toggleSidebar = () => { 
    isExpanded.value = !isExpanded.value 
}

const closeOnMobile = () => {
    if (window.innerWidth < 768) {
        isExpanded.value = false
    }
}
</script>

<template>
    <div class="min-h-screen bg-[#06011a] text-white flex font-sans overflow-hidden relative">

        <div 
            v-if="isExpanded" 
            @click="isExpanded = false" 
            class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        ></div>

        <aside
            :class="[
                'bg-[#06011a] border-r border-[#1a123a] flex flex-col justify-between z-50 transition-all duration-300 py-6',
                'fixed inset-y-0 left-0 md:relative h-full',
                isExpanded ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-24'
            ]">

            <div>
                <div class="flex items-center mb-10" :class="isExpanded ? 'px-8' : 'justify-center'">
                    <span class="text-xl font-bold" v-if="isExpanded">Eco Pulse</span>
                </div>

                <div class="px-4 mb-4">
                    <button @click="toggleSidebar"
                            class="w-full flex items-center justify-center gap-4 px-4 py-3.5 rounded-full bg-[#1a103c] hover:bg-[#261a52] transition-all">
                            <i class="pi" :class="isExpanded ? 'pi-chevron-left' : 'pi-chevron-right'"></i>
                            <span v-if="isExpanded" class="whitespace-nowrap">Tutup Sidebar</span>
                    </button>
                </div>

                <nav class="flex flex-col gap-2 px-4">
                    <RouterLink to="/user/db_user" @click="closeOnMobile"
                        class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-th-large"></i>
                        <span v-if="isExpanded">Dashboard</span>
                    </RouterLink>
                    <RouterLink to="/user/aqimap_users" @click="closeOnMobile"
                        class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-map"></i>
                        <span v-if="isExpanded">Aqi Map</span>
                    </RouterLink>
                    <RouterLink to="/user/history_data" @click="closeOnMobile"
                        class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-history"></i>
                        <span v-if="isExpanded">History Data</span>
                    </RouterLink>
                    <RouterLink to="/user/saved" @click="closeOnMobile"
                        class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-bookmark"></i>
                        <span v-if="isExpanded">Save Location</span>
                    </RouterLink>
                    <RouterLink to="/user/pf_user" @click="closeOnMobile"
                        class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-user"></i>
                        <span v-if="isExpanded">Profil</span>
                    </RouterLink>
                    <RouterLink to="/" @click="closeOnMobile"
                        class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33] mt-4 text-red-400 hover:text-red-300">
                        <i class="pi pi-sign-out"></i>
                        <span v-if="isExpanded">Log Out</span>
                    </RouterLink>
                </nav>
            </div>
        </aside>

        <main class="flex-1 w-full flex flex-col h-screen overflow-y-auto bg-[#06011a]">
            
            <header class="md:hidden flex items-center justify-between px-6 py-4 border-b border-[#1a123a] shrink-0 sticky top-0 bg-[#06011a] z-30">
                <span class="font-bold text-lg">Eco Pulse</span>
                <button @click="toggleSidebar" class="text-gray-400 hover:text-white p-2">
                    <i class="pi pi-bars text-xl"></i>
                </button>
            </header>

            <div class="px-6 md:px-10 pb-10 mt-6 md:mt-8 w-full">
                <RouterView />
            </div>
        </main>

    </div>
</template>