import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDemo from './components/DocDemo.vue'
import SwitchDemo from './lib/switch/demo/SwitchDemo.vue'
import ButtonDemo from './lib/button/demo/ButtonDemo.vue'
import TabsDemo from './lib/tabs/demo/TabsDemo.vue'
import DialogDemo from './lib/dialog/demo/DialogDemo.vue'

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
                    component: DocDemo,
                },
                {
                    path: 'switch',
                    component: SwitchDemo,
                },
                {
                    path: 'button',
                    component: ButtonDemo,
                },
                {
                    path: 'tabs',
                    component: TabsDemo,
                },
                {
                    path: 'dialog',
                    component: DialogDemo,
                },
            ],
        },
    ],
})
