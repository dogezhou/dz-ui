<template>
    <h1>dialog 示例</h1>
    <h2>visible 示例</h2>
    <Button @click="toggle">open dialog</Button>
    <Dialog
        v-model:visible="x"
        title="警告"
        :close-on-click-overlay="false"
        :confirm="f1"
        :cancel="f2"
    >
        <template #title>
            <div>title</div>
        </template>
        <template #content>
            <div>wow</div>
        </template>
    </Dialog>

    <h2>命令式调用 示例</h2>
    <Button @click="handleShowDialog">toggle</Button>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../Dialog.vue'
import Button from '../../button/Button.vue'
import { openDialog } from '../openDialog'

export default {
    name: 'DialogDemo',
    components: {
        Button,
        Dialog,
    },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }
        const f1 = () => {
            console.log('1')
            return false
        }
        const f2 = () => {
            console.log('2')
        }
        const handleShowDialog = () => {
            openDialog({
                title: '提示',
                content: '内容',
                confirm() {
                    console.log('confirm')
                    return false
                },
                cancel() {
                    console.log('cancel')
                },
                closeOnClickOverlay: false,
            })
        }
        return {
            x,
            toggle,
            f1,
            f2,
            handleShowDialog,
        }
    },
}
</script>

<style lang="scss" scoped></style>
