<script setup lang="ts">
const passwordVisible = ref(false);
// <i class="bi bi-eye"></i>
// <i class="bi bi-eye-slash"></i>

const togglePassword = () => {
    passwordVisible.value = !passwordVisible.value;
};
</script>

<template>
    <main class="container w-100 h-100 mt-3 rounded-4">
        <div class="row">
            <!-- form -->
            <div class="col-6 px-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 py-4">
                            <nuxt-link
                                to="/"
                                class="logo text-decoration-none row mb-5"
                            >
                                <span class="h1 fw-bold">Rasen</span>
                                <span class="h1 fw-bold">Movies</span>
                            </nuxt-link>
                            <div class="row text-light inputGroup">
                                <form action="" method="post">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="email"
                                            class="form-control rounded-pill bg-transparent"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                        />
                                        <label class="px-5" for="floatingInput"
                                            >Username</label
                                        >
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="email"
                                            class="form-control rounded-pill bg-transparent"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                        />
                                        <label class="px-5" for="floatingInput"
                                            >Email</label
                                        >
                                    </div>
                                    <div
                                        class="form-floating passwordContainer"
                                    >
                                        <input
                                            :type="
                                                passwordVisible
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            class="form-control rounded-pill bg-transparent"
                                            id="floatingPassword"
                                            placeholder="Password"
                                        />
                                        <label
                                            class="px-5"
                                            for="floatingPassword"
                                            >Password</label
                                        >
                                        <i
                                            @click="togglePassword"
                                            class="fs-4"
                                            :class="[
                                                'bi',
                                                passwordVisible
                                                    ? 'bi-eye-slash'
                                                    : 'bi-eye',
                                                'eyeIcon',
                                            ]"
                                        ></i>
                                    </div>
                                    <div class="row mt-4 ms-5">
                                        <button
                                            class="btn rounded-pill fs-5 ms-5"
                                        >
                                            sign up
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="row googleLogin ms-4 mt-5">
                                <span class="ms-4">or login with google:</span>
                                <button
                                    class="btn rounded-pill fs-5 ms-4 mt-2 px-5"
                                >
                                    <img
                                        src="@/assets/Google.svg"
                                        alt="google_logo"
                                    /><span>oogle</span>
                                </button>
                            </div>
                            <div class="row back mt-5">
                                <nuxt-link to="/" class="gap-2 d-flex mt-5">
                                    <img
                                        src="@/assets/Back_Arrow.svg"
                                        alt="back"
                                        class="mt-5"
                                    />
                                    <span class="fs-5 mt-5">back</span>
                                </nuxt-link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- image -->
            <div class="col-6 visual">
                <img src="@/assets/Sign_Up.svg" alt="" class="w-100 h-100 ms-3">
            </div>
        </div>
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
    .form-floating {
        .form-control {
            border: 2px solid $accent;
            width: 80%;
            color: $accent;
            padding-inline: 2rem;
            &:focus {
                outline: none;
                box-shadow: none;
            }
        }

        label {
            padding-inline: 1rem;
            color: $accent;
        }
    }

    button {
        background-color: $accent;
        color: white;
        border: 1px solid transparent;
        width: 30%;

        &:hover {
            border-color: $accent;
            color: $accent;
            background: none;
            border: 1px solid $accent;
        }
    }

    .passwordContainer {
        display: grid;
        position: relative;
        .eyeIcon {
            position: absolute;
            color: $accent;
            cursor: pointer;
            margin-left: 40%;
            grid-column: 1;
            justify-self: center;
            align-self: center;
        }
    }
}
.googleLogin {
    display: grid;
    height: fit-content;
    width: fit-content;
    span {
        justify-self: center;
        text-align: center;
        color: white;
    }
    button {
        background-color: #d9d9d9;
        width: 35%;
        justify-self: center;
        display: flex;
        justify-content: space-around;
        span {
            font-size: smaller;
            color: #322e2e;
        }
    }
}
.back {
    a {
        color: white;
    }
}

.visual {
    overflow: hidden;
}
</style>
