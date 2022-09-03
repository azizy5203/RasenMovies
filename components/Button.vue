<script setup lang="ts">
const props = defineProps(["text"]);
</script>

<template>
    <button class="btn rounded-pill fs-6 btn">{{ text }}</button>
</template>

<style lang="scss" scoped>
@use "@/sass/colors" as *;
button {
    background-color: $accent;
    color:white;
}
</style>
