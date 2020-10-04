<template>
    <div>
        <TopNav />
        <div class="banner">
            <h1>dz UI</h1>
            <h2>UI 框架</h2>
            <div class="actions">
                <a href="/">Github</a>
                <a href=""></a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TopNav from '../components/ui/TopNav.vue'

export default {
    name: 'Home',
    components: { TopNav },
}
</script>

<style lang="scss" scoped></style>
