<template>
    <div class="topNav">
        <div class="toggleAside" @click="toggleAside"></div>
        <div class="logo">LOGO</div>
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
    position: fixed;
    width: 100%;
    z-index: 10;
    display: flex;
    padding: 18px;
    background-color: lightskyblue;
    align-items: center;
    justify-content: center;
    > .toggleAside {
        display: none;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        background: red;
    }
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
    @media (max-width: 500px) {
        > .toggleAside {
            display: inline-block;
        }
        > .menu {
            display: none;
        }
        > .logo {
            margin: 0 auto;
        }
    }
}
</style>
