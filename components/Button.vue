<script setup lang="ts">
const props = defineProps(["text",]);
</script>

<template>
    <button class="btn rounded-pill fw-bold">{{ text }}</button>
</template>

<style lang="scss" scoped>
@use "@/sass/colors" as *;
button {
    background-color: $accent;
    color:white;
    &:hover{
        border-color: $accent;
        color: $accent;
        background: none;
    }
}
</style>
