<template>
    <slot />
</template>

<script lang="ts">
export default {
    name: 'TabPane',
    props: {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped></style>
