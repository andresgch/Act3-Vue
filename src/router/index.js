import { createRouter, createWebHistory } from 'vue-router'

// Importa las vistas
import HomeView from '@/views/HomeView.vue'
import CoworkingView from '@/views/CoworkingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/coworking',
    name: 'coworking',
    component: CoworkingView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router