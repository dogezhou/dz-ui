<template>
    <div class="switchDemo">
        <Switch :value="checked" @input="checked = $event" />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../index'

export default {
    name: 'SwitchDemo',
    components: {
        Switch,
    },
    setup() {
        const checked = ref(true)
        return {
            checked,
        }
    },
}
</script>

<style lang="scss" scoped></style>
