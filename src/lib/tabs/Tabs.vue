<template>
    <div class="dz-tabs">
        <div ref="container" class="dz-tabs-nav">
            <div
                v-for="(p, index) in tabPaneProps"
                :ref="
                    (el) => {
                        if (p.name === selected) {
                            selectedTab = el
                        }
                    }
                "
                :key="index"
                class="dz-tabs-nav-item"
                :class="{ selected: p.name === selected }"
                @click="select(p.name)"
            >
                {{ p.title }}
            </div>
            <div ref="indicator" class="dz-tabs-nav-indicator"></div>
        </div>
        <div class="dz-tabs-content">
            <!--  When using <component :is="vnode"> and passing vnode of the same type, you need to provide keys -->
            <component :is="currentTab" :key="selected" />
        </div>
    </div>
</template>

<script lang="ts">
import { ref, computed, watchEffect, onMounted } from 'vue'
import TabPane from './TabPane.vue'

export default {
    name: 'Tabs',
    props: {
        selected: {
            type: String,
        },
    },
    setup(props, context) {
        const defaults = context.slots.default()
        defaults.forEach((item) => {
            if (item.type !== TabPane) {
                throw new Error('The child component should be TabPane!')
            }
        })
        const tabPaneProps = defaults.map((item) => {
            return {
                title: item.props.title,
                name: item.props.name,
            }
        })
        const currentTab = computed(() => {
            return defaults.find((item) => item.props.name === props.selected)
        })
        const select = (title: string) => {
            context.emit('update:selected', title)
        }

        const selectedTab = ref<HTMLDivElement>(null)
        const indicator = ref<HTMLDivElement>(null)
        const container = ref<HTMLDivElement>(null)
        onMounted(() => {
            watchEffect(() => {
                // FIXME: not call first click
                console.log('watchEffect')
                const { width } = selectedTab.value.getBoundingClientRect()
                indicator.value.style.width = width + 'px'
                const {
                    left: containerLeft,
                } = container.value.getBoundingClientRect()
                const {
                    left: tabLeft,
                } = selectedTab.value.getBoundingClientRect()
                const indicatorLeft = tabLeft - containerLeft
                indicator.value.style.left = indicatorLeft + 'px'
            })
        })

        return {
            defaults,
            tabPaneProps,
            currentTab,
            select,
            selectedTab,
            indicator,
            container,
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.dz-tabs {
    &-nav {
        display: flex;
        position: relative;
        color: $fontColor;
        border-bottom: 1px solid $borderColor;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            &:first-child {
                margin-left: 0;
            }
            &.selected {
                color: map-get($colors, primary);
            }
        }
        &-indicator {
            position: absolute;
            height: 3px;
            background: map-get($colors, primary);
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>
