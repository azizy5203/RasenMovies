<script setup lang="ts">
const passwordVisible = ref(false);

const togglePassword = () => {
    passwordVisible.value = !passwordVisible.value;
};
</script>

<template>
    <main class="container w-100 w-md-100 h-100 mt-3 rounded-4 gx-0 overflow-hidden">
        <div class="row no-gutters">
            <div class="col-lg-6 content px-5 py-5 py-sm-5">
                <div class="row logo px-3">
                    <span class="h1">Rasen</span>
                    <span class="h1 text-white">Movies</span>
                </div>
                <div class="row signup-controls px-5">
                    <form class="d-grid gap-4">
                        <div class="form-floating">
                            <input
                                type="text"
                                max="2"
                                class="form-control w-100 rounded-pill px-4"
                                id="Username"
                                placeholder="Username"
                            />
                            <label for="Username" class="px-5">Username</label>
                        </div>
                        <div class="form-floating">
                            <input
                                type="email"
                                class="form-control w-100 rounded-pill px-4"
                                id="email"
                                placeholder="email"
                            />
                            <label for="email" class="px-5">Email</label>
                        </div>
                        <div class="form-floating password">
                            <input
                                :type="passwordVisible ? 'text' : 'password'"
                                class="form-control w-100 rounded-pill px-4"
                                id="password"
                                placeholder="Password"
                            />
                            <label for="password" class="px-5">Password</label>
                            <i
                                @click="togglePassword"
                                class="eyeIcon fs-5 me-3"
                                :class="[
                                    'bi',
                                    passwordVisible ? 'bi-eye-slash' : 'bi-eye',
                                ]"
                            ></i>
                        </div>
                        <button
                            type="submit"
                            class="btn rounded-pill px-4 py-2 fs-5"
                        >
                            sign up
                        </button>
                    </form>
                    <div class="google-login mt-4 mb-sm-5">
                        <span class="text-white mb-2"
                            >or login with google :</span
                        >
                        <button
                            class="btn rounded-pill btn-light d-flex gap-1 mb-sm-5"
                        >
                            <img src="@/assets/Google.svg" alt="" /> oogle
                        </button>
                    </div>
                </div>
                <div class="row back mt-sm-5 no-gutters gx-0 w-25">
                    <div class="col-4 w-fit mt-1">
                        <img src="@/assets/Back_Arrow.svg" alt="back" />
                    </div>
                    <span class="col-1 w-fit mt-1">
                        <nuxt-link to="/" class="link-light fw-bold"
                            >back</nuxt-link
                        >
                    </span>
                </div>
            </div>
            <div class="col-lg-6 visual d-none d-lg-block">
                <img
                    src="@/assets/Sign_Up.png"
                    alt="signup image"
                    class="w-100 rounded-end"
                />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "@/sass/colors" as *;
main {
    border: 3px solid $accent;

    .content {
        .logo {
            display: grid;
            grid-template-rows: 40% 60%;
            span {
                font-size: 3rem;
                font-weight: bold;
            }

            :first-child {
                color: $accent;
            }
        }

        .signup-controls {
            display: grid;
            grid-template-rows: repeat(3, auto);
            form {
                input {
                    background: none;
                    border: 2px solid $accent;
                    box-shadow: none;
                    color: white;
                    font-weight: 400;
                }
                label {
                    color: $accent;
                }

                .password {
                    position: relative;
                    .eyeIcon {
                        position: absolute;
                        color: $accent;
                        top: 1rem;
                        right: .5rem;
                        cursor: pointer;
                    }
                }
                button {
                    justify-self: center;
                    color: white;
                    background-color: $accent;
                    font-weight: lighter;
                }
            }
            .google-login {
                justify-self: center;
                text-align: center;
                display: grid;

                button {
                    justify-self: center;
                }
            }
        }
        .back {
            img {
                width: 1.5rem;
                aspect-ratio: 1;
            }
        }
    }
}
</style>
