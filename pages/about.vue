<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  async created() {
    await axios("https://jsonplaceholder.typicode.com/users").then(
      ({ data }) => console.log("data:", data),
      (err) => console.log("err", err)
    );
  },
};
</script>

<template>
  <div>
    <h1>Abouts</h1>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
*{
  color:red
}
</style>
