<template>
    <div>
        <TopNav />
        <div class="banner">
            <h1>dz UI</h1>
            <h2>A UI framework written in Vue3 and TypeScript</h2>
            <div class="actions">
                <router-link to="/doc">Get Start</router-link>
                <a href="/">Github</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TopNav from '../components/ui/TopNav.vue'

export default {
    name: 'Home',
    components: { TopNav },
}
</script>

<style lang="scss" scoped>
.banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: lightpink;
    padding: 60px 0;
    > .actions {
        padding: 14px 0;
        a {
            margin: 0 8px;
            background: lightgray;
            border-radius: 1000px;
            padding: 4px 8px;
        }
    }
}
</style>
