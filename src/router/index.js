import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/main', component: () => import('@/views/Main.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
