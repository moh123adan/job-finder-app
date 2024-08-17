import './assets/main.css';
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { authentication } from './plugins/authantication'
import App from './App.vue'
import router from './routers'

const app = createApp(App)

app.use(createPinia())

authentication.install().then(() => {
    app.use(router)
    app.mount('#app')
})

