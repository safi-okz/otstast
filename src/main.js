import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/SCSS/main.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";
import 'boxicons';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
