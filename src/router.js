import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";
import Cart from "./views/Cart.vue";
import Profile from "./views/Profile";
import GenderOverview from "./views/GenderOverview.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        contentOnly: true
      }
    },
    {
      path: '/products/:id',
      name: 'product',
      component: Product,
    },
    {
      path: '/cart/',
      name: 'cart',
      component: Cart,
      meta: {
        contentOnly: true
      }
    },
    {
      path: '/profile/',
      name: 'profile',
      component: Profile,
      meta: {
        contentOnly: true
      }
    },
    {
      path: '/:gender/',
      name: 'gender-overview',
      component: GenderOverview,
    }
  ]
});
