import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CarrosView from '@/views/CarrosView.vue'
import ContatoView from '@/views/ContatoView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/carros',
    name: 'Carros',
    component: CarrosView
  },
  {
    path: '/contato',
    name: 'Contato',
    component: ContatoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router