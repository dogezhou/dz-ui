<template>
    <Tabs v-model:selected="currentTab">
        <TabPane name="first" title="Tab1">tab1 content</TabPane>
        <TabPane name="second" title="Tab2">tab2 content</TabPane>
    </Tabs>
</template>

<script lang="ts">
import { ref } from 'vue'
import Tabs from '../Tabs.vue'
import TabPane from '../TabPane.vue'

export default {
    name: 'TabsDemo',
    components: { TabPane, Tabs },
    setup() {
        const currentTab = ref('first')
        return {
            currentTab,
        }
    },
}
</script>

<style lang="scss" scoped></style>
