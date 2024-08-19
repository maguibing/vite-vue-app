import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/main', component: Main },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export { router }
