<script setup lang="ts">
import About from "./pages/about.vue";
import { useUserStore } from "./store/UserStore";

const router = useRouter()
const store = useUserStore();
let user = store.user;


</script>

<template>
    <NuxtPage />
</template>

<style lang="scss">
* {
    color: antiquewhite;
}
body {
    background-color: #0e1233;
}
.data {
    text-align: center;
    li {
        margin: 0.5rem;
        font-size: larger;
    }
}
.form {
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    input,
    button {
        color: #0e1233;
        justify-self: center;
    }
}
</style>
