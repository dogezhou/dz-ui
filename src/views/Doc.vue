<template>
    <div class="layout">
        <TopNav />
        <div class="content">
            <aside v-if="asideVisible">
                <h2>组件总览</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 开关</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 按钮</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 标签页</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 弹窗</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import TopNav from '../components/ui/TopNav.vue'
import { inject, Ref } from 'vue'

export default {
    name: 'Doc',
    components: { TopNav },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        return {
            asideVisible,
        }
    },
}
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    $asideWidth: 140px;
    > .topNav {
        flex-shrink: 0;
    }
    > .content {
        display: flex;
        flex-grow: 1;
        padding-top: 55px;
        > aside {
            position: fixed;
            height: 100%;
            flex-shrink: 0;
            width: $asideWidth;
            padding: 10px 16px 16px;
            background-color: aquamarine;
            > h2 {
                margin-bottom: 4px;
            }
            > ol {
                > li {
                    padding: 4px 0;
                }
            }
            @media (max-width: 500px) {
                position: fixed;
                left: 0;
                top: 55px;
            }
        }
        > main {
            flex-grow: 1;
            padding: 12px 12px 12px $asideWidth + 12px;
            @media (max-width: 500px) {
                padding-left: 12px;
            }
        }
    }
}
</style>
