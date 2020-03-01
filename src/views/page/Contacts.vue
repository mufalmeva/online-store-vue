<template>
  <div class="wrapper">
    <h4 style="display: inline-block">{{ pageTitle() }}</h4>
  </div>
</template>

<script>
  export default {
    name: "Contacts",
    data(){
      return {
      }
    },
    methods:{
      pageTitle() {
        return "Как связаться с нами?";
      }
    }
  }
</script>

<style scoped>

</style>