<template>
    <button class="dz-button" :class="`dz-type-${type}`">
        <slot />
    </button>
</template>

<script lang="ts">
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'button',
        },
    },
}
</script>

<style lang="scss">
$buttonHeight: 32px;
$borderColor: #d9d9d9;
$color: #333;
$borderRadius: 4px;
$colorBlue: #177ddc;
$colorRed: #d32029;
$colorBlue: #40a9ff;
$colorGrey: grey;

.dz-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: $color;
    height: $buttonHeight;
    padding: 0 12px;
    background: white;
    border: 1px solid $borderColor;
    border-radius: $borderRadius;
    cursor: pointer;
    transition: all 150ms ease-in-out;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    &:hover,
    &:focus {
        color: $colorBlue;
        border-color: $colorBlue;
    }
    &:focus {
        outline: none;
    }
    & + & {
        margin-left: 8px;
    }
}
</style>
