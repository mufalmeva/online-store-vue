import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";
import Cart from "./views/Cart.vue";
import Profile from "./views/Profile";
import GenderOverview from "./views/GenderOverview.vue";
import PersonalData from "./views/PersonalData";
import WishListPage from "./views/WishListPage";

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
      path: '/:gender/products/:id',
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
      path: '/profile',
      redirect: '/profile/orders',
      meta: {
        contentOnly: true,
        isProfile: true
      }
    },
    {
      path: '/:gender/',
      name: 'gender-overview',
      component: GenderOverview,
    },
    {
      path: '/profile/orders',
      name: 'Profile',
      component: Profile,
      meta: {
        contentOnly: true,
        isProfile: true
      },
    },
    {
      path: '/profile/data',
      name: 'PersonalData',
      component: PersonalData,
      meta: {
        contentOnly: true,
        isProfile: true
      },
    },
    {
      path: '/profile/wishlist',
      name: 'WishListPage',
      component: WishListPage,
      meta: {
        contentOnly: true,
        isProfile: true
      },
    }
  ]
});
