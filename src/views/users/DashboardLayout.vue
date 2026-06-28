<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const isExpanded = ref(true)
const toggleSidebar = () => { isExpanded.value = !isExpanded.value }
</script>

<template>
    <div class="min-h-screen bg-[#06011a] text-white flex font-sans">

        <aside
            :class="[isExpanded ? 'w-64' : 'w-24', 'bg-[#06011a] border-r border-[#1a123a] flex flex-col justify-between z-20 transition-all duration-300 overflow-hidden py-6']">

            <div>
                <div class="flex items-center mb-10" :class="isExpanded ? 'px-8' : 'justify-center'">
                    <span class="text-xl font-bold" v-if="isExpanded">Vision</span>
                </div>

                <div class="px-4">
                    <button @click="toggleSidebar"
                            class="w-full flex items-center gap-4 px-4 py-3.5 rounded-full bg-[#1a103c] hover:bg-[#261a52] transition-all">
                            <i class="pi" :class="isExpanded ? 'pi-chevron-left' : 'pi-chevron-right'"></i>
                            <span v-if="isExpanded">Tutup Sidebar</span>
                    </button>
                </div>

                <nav class="flex flex-col gap-2 px-4">
                    <RouterLink to="/user/db_user"
                        class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-th-large"></i>
                        <span v-if="isExpanded">Dashboard</span>
                    </RouterLink>
                    <RouterLink to="/user/pf_user"
                        class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-user"></i>
                        <span v-if="isExpanded">Profil</span>
                    </RouterLink>
                </nav>
            </div>
        </aside>

        <main class="flex-1 flex flex-col h-screen overflow-y-auto bg-[#06011a]">
            <div class="px-10 pb-10 mt-8">
                <RouterView />
            </div>
        </main>

    </div>
</template>