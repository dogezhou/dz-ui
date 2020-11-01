<template>
    <div class="dz-tabs">
        <div class="dz-tabs-nav">
            <div
                v-for="(p, index) in tabPaneProps"
                :key="index"
                class="dz-tabs-nav-item"
                :class="{ selected: p.name === selected }"
                @click="select(p.name)"
            >
                {{ p.title }}
            </div>
        </div>
        <div class="dz-tabs-content">
            <!--  When using <component :is="vnode"> and passing vnode of the same type, you need to provide keys -->
            <component :is="currentTab" :key="selected" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue'
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
        return {
            defaults,
            tabPaneProps,
            currentTab,
            select,
        }
    },
}
</script>

<style lang="scss" scoped>
$colorBlue: #40a9ff;
$color: #333;
$borderColor: #d9d9d9;

.dz-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $borderColor;
        position: relative;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            &:first-child {
                margin-left: 0;
            }
            &.selected {
                color: $colorBlue;
            }
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>
