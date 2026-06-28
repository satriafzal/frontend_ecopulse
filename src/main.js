import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import './assets/main.css'

// for aos style
import 'aos/dist/aos.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
