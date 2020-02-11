<template>
  <div class="col-lg-9 col-md-9">
    <h4 style="display: inline-block">{{ pageTitle() }}</h4>
  </div>
</template>

<script>
  export default {
    name: "Oferta",
    data(){
      return {
      }
    },
    methods:{
      pageTitle() {
        return "Политика конфиденциальности и оферта";
      }
    }
  }
</script>

<style scoped>

</style>