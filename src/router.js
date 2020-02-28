import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";
import Cart from "./views/Cart.vue";
import Profile from "./views/Profile";
import PersonalData from "./views/PersonalData";
import WishListPage from "./views/WishListPage";
import ReturnAndExchange from "./views/page/ReturnAndExchange";
import Oferta from "./views/page/Oferta";
import PersonalAgreement from "./views/page/PersonalAgreement";
import Contacts from "./views/page/Contacts";
import WomenOverview from "./views/WomenOverview";
import MenOverview from "./views/MenOverview";

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
        contentOnly: true,
        firstPage: true,
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        contentOnly: true,
        isCart: true
      }
    },
    {
      path: 'women',
      name: 'WomenOverview',
      component: {render (c) { return c('router-view') }},
      children: [
        {
          path:'/women',
          name: 'WomenOverview',
          component: WomenOverview
        },
        {
          path: '/women/:productId',
          name: 'womenProduct',
          component: Product,
          meta: {
            contentOnly: true
          }
        },
      ]
    },
    {
      path: 'men',
      name: 'MenOverview',
      component: {render (c) { return c('router-view') }},
      children: [
        {
          path:'/men',
          name: 'MenOverview',
          component: MenOverview
        },
        {
          path: '/men/:productId',
          name: 'menProduct',
          component: Product,
          meta: {
            contentOnly: true
          }
        },
      ]
    },
    {
      path: 'profile',
      redirect:'/profile/orders',
      name: 'Profile',
      component: {render (c) { return c('router-view') }},
      meta: {
        contentOnly: true,
        isProfile: true
      },
      children: [
        {
          path: '/profile/orders',
          name: 'Orders',
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
        },
      ]
    },
    {
      path: '/page/exchange',
      name: 'ReturnAndExchange',
      component: ReturnAndExchange,
      meta: {
        contentOnly: true,
      },
    },
    {
      path: '/page/oferta',
      name: 'Oferta',
      component: Oferta,
      meta: {
        contentOnly: true,
      },
    },
    {
      path: '/page/agreement',
      name: 'PersonalAgreement',
      component: PersonalAgreement,
      meta: {
        contentOnly: true,
      },
    },
    {
      path: '/page/contacts',
      name: 'Contacts',
      component: Contacts,
      meta: {
        contentOnly: true,
      },
    }
  ]
});
