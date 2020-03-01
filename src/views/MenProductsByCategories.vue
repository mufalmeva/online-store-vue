<template>
  <gender-overview :gender="gender" :category="category"></gender-overview>
</template>

<script>
  export default {
    name: "menProductsByCategories",
    data() {
      return {
        gender: 'men'
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