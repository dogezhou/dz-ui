<template>
    <h1>Button demo</h1>
    <Button>按钮</Button>
    <Button type="button">按钮</Button>
    <Button type="link">按钮</Button>
    <Button type="text">按钮</Button>
</template>

<script lang="ts">
import Button from '../index'

export default {
    name: 'ButtonDemo',
    components: {
        Button,
    },
}
</script>

<style lang="scss" scoped></style>
