<script setup lang="ts">
const creds = ref();
onMounted(async () => {});

const signIn = async () => {
    creds.value = await signInUser("Youssef9@gmail.com", "123456");
    console.log('creds', creds)
};
const signOut = async () => {
    creds.value = await signOutUser();
    console.log('creds', creds)
};
</script>

<template>
    <h1>signup</h1>
    <button @click="signIn">sign in</button>
    <button @click="signOut">sign out</button>
    <pre>
        {{creds}}
    </pre>
</template>

<style lang="scss" scoped>
button {
    color: red !important;
}
pre{
    background-color: #aaa;
    color: black;
    overflow: scroll;
}
</style>
