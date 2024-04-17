import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../src/views/Home.vue'
import NotFound from '../src/views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/:pathMatch(.*)*', component: NotFound }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
