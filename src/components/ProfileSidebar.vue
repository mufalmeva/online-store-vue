<template>
  <aside class="col-lg-3 col-md-3">
    <div class="sidebar">
      <div class="sidebar-menu">
        <h4 class="sidebar-menu-title">Profile</h4>
        <router-link class="link"  :to="{name:'Profile', path:'/profile'}">Мои заказы</router-link><br/>
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
  .link {
    margin-bottom: 25px;
  }
  .cat-nav-cnt {
    color: #bbb;
    margin-left: 0;
    font-size: 9px;
  }
  .sidebar-menu {
    margin: 0 10px;
  }
  .sidebar-menu-title {
    margin-bottom: 50px;
  }
  .sidebar-menu.link {
    padding-left: 15px;
  }
</style>