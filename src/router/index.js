import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Helpcenter from '@/views/Helpcenter.vue'
import Privacy from '@/views/Privacy.vue'
import Syarat_ketentuan from '@/views/Syarat_ketentuan.vue'
import Dashboarduser from '@/views/users/Dashboarduser.vue'
import Profileuser from '@/views/users/Profileuser.vue'

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
    {
      path: '/privasi',
      name: 'kebijakan-privasi',
      component: Privacy
    },
    {
      path: '/syarat_ketentuan',
      name: 'syarat-dan-ketentuan',
      component: Syarat_ketentuan
    },
    {
      path: '/user',
      component: () => import('@/views/users/DashboardLayout.vue'),
      children: [
          {
          path: 'db_user',
          name: 'user-dashboard',
          component: Dashboarduser
        },
        {
          path: 'pf_user',
          name: 'profile-user',
          component: Profileuser
        }
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Selalu paksa scroll ke paling atas tiap ganti halaman
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
