<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <h1>Home index</h1>
    <nuxt-link class="abt" to="/about">about</nuxt-link>
    <nuxt-link to="/signup">signup</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
*{
  color:red
}
.abt{
  margin: 1rem;
}
</style>
