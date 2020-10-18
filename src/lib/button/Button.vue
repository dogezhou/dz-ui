<template>
    <button class="dz-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="dz-loadingIndicator"></span>
        <slot />
    </button>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'button',
        },
        size: {
            type: String,
            default: 'normal',
        },
        level: {
            type: String,
            default: 'normal',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const classes = computed(() => {
            return {
                [`dz-type-${props.type}`]: props.type,
                [`dz-size-${props.size}`]: props.size,
                [`dz-level-${props.level}`]: props.level,
                ['dz-loading']: props.loading,
            }
        })
        return { classes }
    },
}
</script>

<style lang="scss">
$buttonHeight: 32px;
$borderColor: #d9d9d9;
$color: #333;
$borderRadius: 4px;
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
    // type
    &.dz-type-link {
        border-color: transparent;
        box-shadow: none;
        color: $colorBlue;
        &:hover,
        &:focus {
            color: lighten($colorBlue, 10%);
        }
    }
    &.dz-type-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }
    // size
    &.dz-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }
    &.dz-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
    // level
    &.dz-type-button {
        &.dz-level-primary {
            background: $colorBlue;
            color: white;
            border-color: $colorBlue;
            &:hover,
            &:focus {
                background: darken($colorBlue, 10%);
                border-color: darken($colorBlue, 10%);
            }
        }
        &.dz-level-danger {
            background: $colorRed;
            border-color: $colorRed;
            color: white;
            &:hover,
            &:focus {
                background: darken($colorRed, 10%);
                border-color: darken($colorRed, 10%);
            }
        }
    }
    &.dz-type-link {
        &.dz-level-danger {
            color: $colorRed;
            &:hover,
            &:focus {
                color: darken($colorRed, 10%);
            }
        }
    }
    &.dz-type-text {
        &.dz-level-primary {
            color: $colorBlue;
            &:hover,
            &:focus {
                color: darken($colorBlue, 10%);
            }
        }
        &.dz-level-danger {
            color: $colorRed;
            &:hover,
            &:focus {
                color: darken($colorRed, 10%);
            }
        }
    }
    // disabled
    &.dz-type-button {
        &[disabled] {
            cursor: not-allowed;
            color: $colorGrey;
            &:hover {
                border-color: $colorGrey;
            }
        }
    }
    &.dz-type-link,
    &.dz-type-text {
        &[disabled] {
            cursor: not-allowed;
            color: $colorGrey;
        }
    }
    @keyframes dz-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    > .dz-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $colorBlue $colorBlue $colorBlue transparent;
        border-style: solid;
        border-width: 2px;
        animation: dz-spin 1s infinite linear;
    }
}
</style>
