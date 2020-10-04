<template>
    <div>
        <TopNav />
        <div class="content">
            <aside>侧边栏</aside>
            <main>内容</main>
        </div>
    </div>
</template>

<script lang="ts">
import TopNav from '../components/ui/TopNav.vue'

export default {
    name: 'Doc',
    components: { TopNav },
}
</script>

<style lang="scss" scoped></style>
