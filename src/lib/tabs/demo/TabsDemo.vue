<template>
    <Tabs />
    <TabPane />
</template>

<script lang="ts">
import Tabs from '../Tabs.vue'
import TabPane from '../TabPane.vue'
export default {
    name: 'TabsDemo',
    components: { TabPane, Tabs },
}
</script>

<style lang="scss" scoped></style>
