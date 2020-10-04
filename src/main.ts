import { createApp } from 'vue'
import App from './App.vue'
import AutoComplete from './components/AutoComplete.vue'
import './index.css'
import {createRouter, createWebHashHistory} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: AutoComplete
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
