<script setup lang="ts">
import About from "./pages/about.vue";
import { useUserStore } from "./store/UserStore";

const router = useRouter();
const store = useUserStore();
let user = store.user;

useHead({
    title: "Rasen Movies",
    link: [
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
            rel: "stylesheet",
            integrity:
                "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
            crossorigin: "anonymous",
        },
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css",
            rel: "stylesheet",
            integrity:
                "sha384-xeJqLiuOvjUBq3iGOjvSQSIlwrpqjSHXpduPd6rQpuiM3f5/ijby8pCsnbu5S81n",
            crossorigin: "anonymous",
        },
    ],
    script: [
        {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js",
            integrity:
                "sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK",
            crossorigin: "anonymous",
        },
    ],
});
</script>

<template>
    <NuxtPage />
</template>

<style lang="scss">
@use "./sass/colors" as *;
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");
* {
    font-family: "Ubuntu", sans-serif;
}
body {
    background-color: #0e1233;
    /* width */
    &::-webkit-scrollbar {
        width: 0.5rem;
        height: 1rem;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background-color: $accent;
        border-radius: 1rem;
    }

}
</style>
