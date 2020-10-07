<template>
    <span :class="{ checked: value }" @click="toggle"></span>
</template>

<script lang="ts">
export default {
    name: 'Switch',
    props: {
        value: {
            type: Boolean,
        },
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return {
            toggle,
        }
    },
}
</script>

<style lang="scss" scoped>
$buttonWidth: 44px;
$buttonHeight: 22px;
$toggleDiameter: 18px; // 圆形直径
$buttonToggleOffset: ($buttonHeight - $toggleDiameter) / 2;
$toggleShadowOffset: 2px;
$toggleWider: 22px;
$colorGrey: #e9e9ea;
$colorDarkGrey: #39393d;
$colorGreen: #30d158;

span {
    position: relative;
    display: inline-block;
    width: $buttonWidth;
    height: $buttonHeight;
    background-color: $colorGrey;
    border-radius: $buttonHeight / 2;
    transition: 250ms all ease-in-out;
    cursor: pointer;
    &:active::after {
        width: $toggleWider;
    }
    &::after {
        content: '';
        display: inline-block;
        width: $toggleDiameter;
        height: $toggleDiameter;
        background-color: white;
        border-radius: $toggleDiameter / 2;
        position: absolute;
        top: $buttonToggleOffset;
        transform: translateX($buttonToggleOffset);
        box-shadow: $toggleShadowOffset 0 $toggleShadowOffset * 4
            rgba(black, 0.1);
        transition: 250ms all ease-in-out;
    }
    &.checked {
        background-color: $colorGreen;
        &::after {
            transform: translateX(
                $buttonWidth - $toggleDiameter - $buttonToggleOffset
            );
            box-shadow: ($toggleShadowOffset * -1) 0 $toggleShadowOffset * 4
                rgba(black, 0.1);
        }
        &:active::after {
            transform: translateX(
                $buttonWidth - $toggleWider - $buttonToggleOffset
            );
        }
    }
}
</style>
