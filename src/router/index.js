import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/views/main/index.vue'

const routes = [
  { path: '/', component: Main },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
