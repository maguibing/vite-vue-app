import 'uno.css'
import '@/styles/reset.scss'
import '@/styles/global.scss'
import { createApp } from 'vue'
import { setupNaiveDiscreteApi } from './utils/naiveTool'
import { pinia } from './store'
import { router } from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
setupNaiveDiscreteApi()
