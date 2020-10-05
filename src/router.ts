import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDemo from './components/DocDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: '',
                    component: DocDemo
                },
                {
                    path: 'switch',
                    component: SwitchDemo,
                },
            ],
        },
    ],
})
