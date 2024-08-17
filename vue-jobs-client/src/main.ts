import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { authentication } from './plugins/authantication'
import App from './App.vue'
import router from './routers'

// import 'bootstrap/dist/css/bootstrap.css'
// import "bootstrap"

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");