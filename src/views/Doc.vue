<template>
    <div>
        <TopNav />
        <div class="content">
            <aside v-if="asideVisible">
                <h2>组件总览</h2>
                <ol>
                    <li>
                        <router-link to="/doc/button">Button</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button</router-link>
                    </li>
                </ol>
            </aside>
            <main>内容</main>
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
aside {
    position: fixed;
    left: 0;
    top: 0;
    width: 140px;
    padding: 80px 16px 16px;
    background-color: aquamarine;
    > h2 {
        margin-bottom: 4px;
    }
    > ol {
        > li {
            padding: 4px 0;
        }
    }
}
</style>
