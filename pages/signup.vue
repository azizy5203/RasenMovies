<script setup lang="ts"></script>

<template>
    <main class="container w-100 h-100 mt-5 rounded-4">
        <div class="col-6 py-4 px-5">
            <nuxt-link to="/" class="logo text-decoration-none row p-0">
                <span class="h1 fw-bold">Rasen</span>
                <span class="h1 fw-bold">Movies</span>
            </nuxt-link>
            <div class="row text-light inputGroup">
                <div class="inputContainer">
                    <input
                        type="text"
                        id="username"
                        class="formInput usernam w-75 rounded-pill px-3 py-2"
                        placeholder="Username"
                    />
                    <label for="username" class="m-2 ms-4">username</label>
                </div>
            </div>
            <div class="row text-light">three</div>
            <div class="row text-light">four</div>
        </div>
        <div class="col-6"></div>
    </main>
</template>

<style lang="scss" scoped>
@use "@/sass/colors" as *;
main {
    border: 3px solid $accent;
}
.logo {
    display: grid;
    grid-template-rows: 40% 60%;
    color: white;
    :first-child {
        color: $accent;
    }
}
.inputGroup {
    .inputContainer{
        display: grid;
        .formInput {
            grid-area: 1/1;
            border: none;
            outline: none;
            color: $accent;
            border: 2px solid $accent;
            background-color: transparent;
            &::placeholder {
                color: $accent;
                opacity: 70%;
                font-size: small;
            }
    
           &:not(:placeholder-shown)+label{
            opacity: 1 !important;
            background-color: $primary;
            font-size: smaller;
            width: fit-content;
            height: fit-content;
            transform: translateY(-1.1rem);
           }
        }
    
        label {
            grid-area: 1/1;
            transition: 0.3s;
            opacity: 0;
            color: $accent !important;
        }
    }
}
</style>
