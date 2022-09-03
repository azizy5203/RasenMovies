<script setup></script>

<template>
    <header class="container d-flex justify-content-between p-4">
        <h4 class="logo"><span>Rasen</span>Movies</h4>
        <div class="d-flex gap-5">
            <nuxt-link to="/signup"><Button text="sign up" /></nuxt-link>
        </div>
    </header>
    <h1 class="ind">Home index</h1>

    <div class="container">
        <card v-for="card in 5" />
    </div>
</template>

<style lang="scss" scoped>
@use "@/sass/colors" as *;
* {
    box-sizing: border-box;
}

header {
    .logo {
        color: white;
        span {
            color: $accent;
        }
    }
}
.ind {
    color: white;
    color: $accent;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, auto));
    // grid-template-rows: repeat(3,1fr);
    gap: 1rem;
}
</style>
