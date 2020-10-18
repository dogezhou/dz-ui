<template>
    <h1>Button demo</h1>
    <h2>type prop</h2>
    <Button>按钮</Button>
    <Button type="button">按钮</Button>
    <Button type="link"> link 按钮</Button>
    <Button type="text"> text 按钮</Button>
    <h2>size prop</h2>
    <div>
        <Button size="big"> big 按钮</Button>
        <Button size="normal"> normal 按钮</Button>
        <Button size="small"> small 按钮</Button>
    </div>
    <div>
        <Button type="link" size="big"> big link 按钮</Button>
        <Button type="link" size="normal"> normal link 按钮</Button>
        <Button type="link" size="small"> small link 按钮</Button>
    </div>
    <div>
        <Button type="text" size="big"> big text 按钮</Button>
        <Button type="text" size="normal"> normal text 按钮</Button>
        <Button type="text" size="small"> small text 按钮</Button>
    </div>
    <h2>level prop</h2>
    <div>
        <Button level="primary"> primary 按钮</Button>
        <Button> normal 按钮</Button>
        <Button level="danger"> danger 按钮</Button>
    </div>
    <div>
        <Button type="link" level="primary"> primary 按钮</Button>
        <Button type="link"> normal 按钮</Button>
        <Button type="link" level="danger"> danger 按钮</Button>
    </div>
    <div>
        <Button type="text" level="primary"> primary 按钮</Button>
        <Button type="text"> normal 按钮</Button>
        <Button type="text" level="danger"> danger 按钮</Button>
    </div>
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
