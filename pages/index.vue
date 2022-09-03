<script>
import Card1 from '~~/components/Card.vue';
export default {
    data() {
        return {};
    },
    components: { Card1 }
};
</script>

<template>
  <div>
    <h1>Home index</h1>
    <Button text='sign up'/>
    <card/>
  </div>
</template>

<style lang="scss" scoped>
*{
  box-sizing: border-box;
}

h1{
  color: white;
}

</style>
