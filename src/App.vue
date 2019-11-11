<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar v-show="!contentOnly"></Sidebar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default {
  name: 'app',
  components: {Sidebar, Footer, Navbar },
  data: function () {
    return {
      contentOnly: false
    }
  },
  methods: {
    checkLayout(route) {
      this.contentOnly = (route && route.meta && route.meta.contentOnly);
    },
  },
  created() {
    this.checkLayout(this.$router.currentRoute);
    this.$router.beforeEach((to, from, next) => {
      this.checkLayout(to);
      next()
    })
  },
}
</script>

<style lang="scss">
#app {
  font-family: Montserrat,serif;
  font-size: 13px;
  color: #313131;
  background-color: #ffffff;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
  color: #313131!important;
  transition: all .3s ease;
  &:hover {
    color: #42b983;
  }
}
ul li {
  list-style: none;
}
#like-product,#unlike-product {
  margin-left: 15px;
  cursor: pointer;
}
#like-product:hover,#unlike-product:hover {
  height: 26px;
  width: 26px;
}
</style>
