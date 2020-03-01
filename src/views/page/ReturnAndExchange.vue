<template>
  <div class="wrapper page-wrapper">
    <h4 style="display: inline-block">{{ pageTitle() }}</h4>
  </div>
</template>

<script>
  export default {
    name: "ReturnAndExchange",
    data(){
      return {
      }
    },
    methods:{
      pageTitle() {
        return "Как вернуть товар?";
      }
    }
  }
</script>

<style scoped>

</style>