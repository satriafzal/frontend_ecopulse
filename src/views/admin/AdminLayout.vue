<template>
    <div class="min-h-screen bg-[#06011a] text-white flex font-sans overflow-hidden relative">

        <!-- OVERLAY UNTUK MOBILE -->
        <div v-if="isExpanded" @click="isExpanded = false" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"></div>

        <!-- SIDEBAR ADMIN -->
        <aside
            :class="[ 
                'bg-[#06011a] border-r border-red-900/30 flex flex-col justify-between z-50 transition-all duration-300 py-6',
                'fixed inset-y-0 left-0 md:relative h-full',
                isExpanded ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-24'
            ]">
            <div>
                <div class="flex items-center mb-10" :class="isExpanded ? 'px-8' : 'justify-center'">
                    <span class="text-xl font-bold flex items-center gap-2" v-if="isExpanded">
                        Eco Pulse <span class="bg-red-500 text-[10px] px-2 py-0.5 rounded-full">ADMIN</span>
                    </span>
                </div>

                <div class="px-4 mb-4">
                    <button @click="toggleSidebar" class="w-full flex items-center justify-center gap-4 px-4 py-3.5 rounded-full bg-[#1a103c] hover:bg-[#261a52] transition-all border border-red-900/50">
                            <i class="pi" :class="isExpanded ? 'pi-chevron-left' : 'pi-chevron-right'"></i>
                            <span v-if="isExpanded" class="whitespace-nowrap">Tutup Sidebar</span>
                    </button>
                </div>

                <!-- MENU ADMIN -->
                <nav class="flex flex-col gap-2 px-4">
                    <RouterLink to="/admin/adm-dashboard" @click="closeOnMobile" class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-desktop"></i>
                        <span v-if="isExpanded">Overview</span>
                    </RouterLink>
                    <RouterLink to="/admin/adm-user" @click="closeOnMobile" class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-users"></i>
                        <span v-if="isExpanded">Data Pengguna</span>
                    </RouterLink>
                    <RouterLink to="/admin/adm-api" @click="closeOnMobile" class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33]">
                        <i class="pi pi-server"></i>
                        <span v-if="isExpanded">Monitoring API</span>
                    </RouterLink>
                    <a href="#" @click.prevent="confirmlogout" class="flex items-center gap-4 px-4 py-3.5 rounded-full hover:bg-[#120b33] mt-4 text-red-400 hover:text-red-300">
                        <i class="pi pi-sign-out"></i>
                        <span v-if="isExpanded">Log Out</span>
                    </a>
                </nav>
            </div>
        </aside>

        <!-- MAIN CONTENT -->
        <main class="flex-1 w-full flex flex-col h-screen overflow-y-auto bg-[#06011a]">
            <header class="md:hidden flex items-center justify-between px-6 py-4 border-b border-[#1a123a] shrink-0 sticky top-0 bg-[#06011a] z-30">
                <span class="font-bold text-lg text-red-400">Admin Panel</span>
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

<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast'

const router = useRouter()
const toast = useToast()
const confirm = useConfirm()

const isExpanded = ref(window.innerWidth > 768)
const toggleSidebar = () => { isExpanded.value = !isExpanded.value }
const closeOnMobile = () => {
    if (window.innerWidth < 768) isExpanded.value = false
}

const confirmlogout = () => {
    confirm.require({
        message: 'Yakin mau log out dari admin?',
        header: 'Konfirmasi Log Out',
        icon: 'pi pi-info-circle text-3xl text-white shrink-0',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true,
            class: 'px-5 py-2.5 rounded-xl bg-transparent border border-gray-700 text-gray-300 text-sm font-medium hover:bg-gray-800/50 transition-colors'
        },
        acceptProps: {
            label: 'Log Out',
            severity: 'danger',
            class: 'px-5 py-2.5 rounded-xl bg-[#ff6b6b] hover:bg-[#ff5252] text-[#06011a] text-sm font-bold shadow-[0_0_15px_rgba(255,107,107,0.3)] transition-all'
        },
        accept: () => {
            localStorage.clear()
            
            closeOnMobile()

            router.push('/') 
            
            toast.add({ 
                severity: 'success', 
                summary: 'Berhasil Logout', 
                life: 4000 
            })
        },
        reject: () => {
        }
    })
}
</script>