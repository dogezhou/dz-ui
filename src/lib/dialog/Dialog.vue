<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="dz-dialog-overlay" @click="onClickOverlay"></div>
            <div class="dz-dialog-wrapper">
                <div class="dz-dialog">
                    <header>
                        <slot name="title" />
                        <span class="dz-dialog-close" @click="onClose"></span>
                    </header>
                    <main>
                        <slot name="content" />
                    </main>
                    <footer>
                        <Button @click="onConfirm">确定</Button>
                        <Button level="danger" @click="onCancel">取消</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<script lang="ts">
import Button from '../button'
export default {
    name: 'Dialog',
    components: {
        Button,
    },
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true,
        },
        confirm: {
            type: Function,
        },
        cancel: {
            type: Function,
        },
    },
    setup(props, context) {
        const onClose = () => {
            context.emit('update:visible', false)
        }
        const onClickOverlay = () => {
            if (props.closeOnClickOverlay) {
                onClose()
            }
        }
        const onConfirm = () => {
            if (props.confirm?.() !== false) {
                onClose()
            }
        }
        const onCancel = () => {
            if (props.cancel?.() !== false) {
                onClose()
            }
        }
        return {
            onClose,
            onClickOverlay,
            onConfirm,
            onCancel,
        }
    },
}
</script>

<style lang="scss">
$borderColor: rgba(#f0f0f0, 1);
$borderRadius: 2px;
.dz-dialog {
    box-shadow: 0 0 3px rgba(black, 0.1);
    background: white;
    border-radius: $borderRadius;
    min-width: 20em;
    max-width: 80%;

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 12;
    }

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(black, 0.5);
        z-index: 10;
    }

    > header {
        padding: 12px 16px;
        border-bottom: 1px solid $borderColor;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }
    > main {
        padding: 12px 16px;
    }
    > footer {
        border-top: 1px solid $borderColor;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        transition: all 250ms ease-in-out;
        &:hover::before,
        &:hover::after {
            background: black;
        }
        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: rgba(black, 0.5);
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>
