<template>
    <div class="dz-dialog-overlay">ddd</div>
    <div class="dz-wrapper">
        <header></header>
        <main></main>
        <footer>
            <Button>确定</Button>
            <Button level="danger">取消</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from '../button'
export default {
    name: 'Dialog',
    components: {
        Button,
    },
}
</script>

<style lang="scss" scoped></style>
