import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Helpcenter from '@/views/Helpcenter.vue'
import Privacy from '@/views/Privacy.vue'
import Syarat_ketentuan from '@/views/Syarat_ketentuan.vue'
import Dashboarduser from '@/views/users/Dashboarduser.vue'
import Profileuser from '@/views/users/Profileuser.vue'
import Aqi_mapusers from '@/views/users/Aqi_mapusers.vue'
import History_data from '@/views/users/History_data.vue'
import SavedLocations from '@/views/users/SavedLocations.vue'
import AdminOverview from '@/views/admin/AdminOverview.vue'
import UserManagement from '@/views/admin/UserManagement.vue'
import ApiMonitoring from '@/views/admin/ApiMonitoring.vue'

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

    // for routes user
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
        },
        {
          path: 'aqimap_users',
          name: 'aqi_map_users',
          component: Aqi_mapusers
        },
        {
          path: 'history_data',
          name: 'history_data_users',
          component: History_data
        },
        {
          path: 'saved',
          name: 'saved_location',
          component: SavedLocations
        }
      ]
    },

    // for routes admin
    {
      path:'/admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      children: [
        {
          path :'',
          redirect: '/admin/dashboard'
        },
        {
          path: 'adm-dashboard',
          name: 'admin-db',
          component: AdminOverview
        },
        {
          path: 'adm-user',
          name: 'management-user',
          component: UserManagement
        },
        {
          path: 'adm-api',
          name: 'adm-api-monitoring',
          component: ApiMonitoring
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Selalu paksa scroll ke paling atas tiap ganti halaman
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
