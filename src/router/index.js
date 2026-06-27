import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Helpcenter from '@/views/Helpcenter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login-page',
      component: Login
    },
    {
      path: '/register',
      name: 'register-page',
      component: Register
    },
    {
      path: '/pusat-bantuan',
      name: 'pusatbantuan',
      component: Helpcenter
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Selalu paksa scroll ke paling atas tiap ganti halaman
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
