<template>
    <div>
        <TopNav />
        <div class="banner">
            <h1 class="title">Dojo Zen</h1>
            <h2 class="sub-title">
                Dojo Zen, 一套基于 Vue3 和 TypeScript 的桌面端组件库
            </h2>
            <div class="actions">
                <router-link to="/doc">开始使用</router-link>
                <a href="https://www.github.com/dogezhou/dz-ui" target="_blank"
                    >GitHub</a
                >
            </div>
            <div class="promotion">
                <div class="promotion-item">
                    <div class="promotion-item-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-Vue"></use>
                        </svg>
                    </div>
                    <div class="promotion-item-content">
                        <div class="promotion-item-title">Vue3</div>
                        <div class="promotion-item-subtitle">
                            All in Vue3 Composition API
                        </div>
                    </div>
                </div>
                <div class="promotion-item">
                    <div class="promotion-item-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-typescript"></use>
                        </svg>
                    </div>
                    <div class="promotion-item-content">
                        <div class="promotion-item-title">TypeScript</div>
                        <div class="promotion-item-subtitle">
                            使用大势所趋的 TS
                        </div>
                    </div>
                </div>
                <div class="promotion-item">
                    <div class="promotion-item-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shandian"></use>
                        </svg>
                    </div>
                    <div class="promotion-item-content">
                        <div class="promotion-item-title">Vite</div>
                        <div class="promotion-item-subtitle">
                            使用面向未来的前端构建工具
                        </div>
                    </div>
                </div>
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
@import '../styles/variables';

.banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 160px 0 80px;

    > .title {
        font-family: 'Trade Winds', cursive;
    }
    > .sub-title {
        padding: 16px 0;
        color: lighten($fontColor, 20);
        font-size: 20px;
        font-weight: normal;
    }
    > .actions {
        padding: 14px 0;

        a {
            background: map-get($colors, primary);
            color: white;
            margin: 0 8px;
            border-radius: 8px;
            padding: 8px 24px;
            transition: all 200ms ease-in-out;
            &:hover {
                text-decoration: none;
                background: lighten(map-get($colors, primary), 8);
            }
        }
    }
    .promotion {
        display: flex;
        padding: 60px 0;
        &-item {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            &-icon {
                font-size: 50px;
                margin-right: 8px;
            }
            &-content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            &-title {
                font-size: 20px;
            }
            &-subtitle {
                font-size: 16px;
            }
        }
    }
}
</style>
