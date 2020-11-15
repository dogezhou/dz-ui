<template>
    <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import { router } from './router'

export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth
        const asideVisible = ref(width > 500)
        provide('asideVisible', asideVisible)
        router.afterEach(() => {
            if (width <= 500) {
                asideVisible.value = false
            }
        })
    },
}
</script>

<style lang="scss">
@import './styles/variables';

#app {
    height: 100vh;
    background: rgb(240, 252, 255);
    background: linear-gradient(
        90deg,
        rgba(240, 252, 255, 1) 0%,
        rgba(247, 250, 252, 1) 35%,
        rgba(255, 248, 249, 1) 100%
    );
    font-family: 'Noto Serif SC', serif;
    color: $fontColor;
}
</style>
