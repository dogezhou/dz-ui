<template>
    <div class="topNav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>学习</li>
            <li>学习</li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TopNav',
}
</script>

<style lang="scss" scoped>
.topNav {
    //position: fixed;
    //width: 100%;
    //top: 0;
    display: flex;
    padding: 18px;
    background-color: lightskyblue;
    align-items: center;
    > .logo {
        max-width: 8em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        > li {
            margin: 0 1em;
        }
    }
}
</style>
