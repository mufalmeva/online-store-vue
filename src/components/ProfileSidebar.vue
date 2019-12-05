<template>
  <aside class="col-md-3">
    <div class="sidebar">
      <h4>Profile</h4>
      <div class="sidebar-menu">
        <router-link class="link" to="/profile">Мои заказы</router-link><br/>
        <router-link class="link" to="/profile/data">Мои данные</router-link><br/>
        <router-link class="link" to="/">Подписки</router-link><br/>
        <router-link class="link" to="/">Отзывы и вопросы</router-link><br/>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "ProfileSidebar"
  }
</script>

<style scoped>

</style>