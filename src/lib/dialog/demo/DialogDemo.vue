<template>
    <h1>dialog 示例</h1>
    <h2>visible 示例</h2>
    <Button @click="toggle">open dialog</Button>
    <Dialog
        v-model:visible="x"
        :close-on-click-overlay="false"
        :confirm="f1"
        :cancel="f2"
    />
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../Dialog.vue'
import Button from '../../button/Button.vue'

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
        return {
            x,
            toggle,
            f1,
            f2,
        }
    },
}
</script>

<style lang="scss" scoped></style>
