<template>
    <div class="topNav">
        <div class="logo" @click="toggleAside">LOGO</div>
        <ul class="menu">
            <li>学习</li>
            <li>学习</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
    name: 'TopNav',
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value
        }
        return {
            toggleAside,
        }
    },
}
</script>

<style lang="scss" scoped>
.topNav {
    position: relative;
    z-index: 10;
    display: flex;
    padding: 18px;
    background-color: lightskyblue;
    align-items: center;
    > .logo {
        max-width: 8em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        > li {
            margin: 0 1em;
        }
    }
}
</style>
