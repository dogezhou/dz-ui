<template>
    <div class="topNav-wrapper">
        <div class="topNav">
            <div class="toggleAside" @click="toggleAside"></div>
            <div class="logo">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-leiyu"></use></svg
                >Dojo Zen
            </div>
            <ul class="menu">
                <li>
                    <a
                        href="https://www.github.com/dogezhou/dz-ui"
                        target="_blank"
                        >GitHub</a
                    >
                </li>
            </ul>
        </div>
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
@import '../../styles/variables';

.topNav-wrapper {
    position: fixed;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
}
.topNav {
    flex: 1;
    max-width: 1280px;
    display: flex;
    padding: 18px;
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
        color: map-get($colors, primary);
        font-family: 'Trade Winds', cursive;
        font-size: 20px;
        > svg {
            font-size: 36px;
            vertical-align: middle;
            margin-right: 8px;
        }
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
