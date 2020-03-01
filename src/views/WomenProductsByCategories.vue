<template>
  <gender-overview :gender="gender" :category="category"></gender-overview>
</template>

<script>
  export default {
    name: "womenProductsByCategories",
    data() {
      return {
        gender: 'women'
      }
    },
    computed: {
      category() {
        return this.$route.params.category;
      }
    }
  }
</script>

<style scoped>

</style>