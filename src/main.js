import './index.css'

import { createApp } from 'vue'
import router from './router'

import Home from './pages/Home.vue'

const app = createApp(Home)

app.use(router)
app.mount('#app')