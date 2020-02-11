<template>
  <div class="col-lg-9 col-md-9">
    <h4 style="display: inline-block">{{ pageTitle() }}</h4>
  </div>
</template>

<script>
  export default {
    name: "PersonalAgreement",
    data(){
      return {
      }
    },
    methods:{
      pageTitle() {
        return "Пользовательское соглашение";
      }
    }
  }
</script>

<style scoped>

</style>