import Vue from "vue";
import Router from "vue-router";
import store from "./store";
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
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import MenProductsByCategories from "./views/MenProductsByCategories";
import WomenProductsByCategories from "./views/WomenProductsByCategories";

Vue.use(Router);

const router =  new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  base: '/',
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
      path: '/women',
      name: 'WomenOverview',
      component: {render (c) { return c('router-view') }},
      children: [
        {
          path:'',
          name: 'WomenOverview',
          component: WomenOverview
        },
        {
          path: ':category',
          name: 'womenProductsByCategories',
          component: {render (c) { return c('router-view') }},
          children: [
            {
              path: '',
              name: 'womenProductsByCategories',
              component: WomenProductsByCategories
            },
            {
              path: ':productId',
              name: 'womenProduct',
              component: Product,
              meta: {
                contentOnly: true
              }
            },
          ]
        }
      ]
    },
    {
      path: '/men',
      name: 'MenOverview',
      component: {render (c) { return c('router-view') }},
      children: [
        {
          path:'',
          name: 'MenOverview',
          component: MenOverview,
        },
        {
          path: ':category',
          name: 'menProductsByCategories',
          component: {render (c) { return c('router-view') }},
          children: [
            {
              path: '',
              name: 'menProductsByCategories',
              component: MenProductsByCategories
            },
            {
              path: ':productId',
              name: 'menProduct',
              component: Product,
              meta: {
                contentOnly: true
              }
            },
          ]
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
      ]
    },
    {
      path: '/wishlist',
      name: 'WishListPage',
      component: WishListPage,
      meta: {
        contentOnly: true,
        isWishlist: true
      },
    },
    {
      path: '/exchange',
      name: 'ReturnAndExchange',
      component: ReturnAndExchange,
      meta: {
        contentOnly: true,
      },
    },
    {
      path: '/oferta',
      name: 'Oferta',
      component: Oferta,
      meta: {
        contentOnly: true,
      },
    },
    {
      path: '/agreement',
      name: 'PersonalAgreement',
      component: PersonalAgreement,
      meta: {
        contentOnly: true,
      },
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
      meta: {
        contentOnly: true,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: {
        contentOnly: true,
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
      meta: {
        contentOnly: true,
      },
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.name === 'MenOverview'
      || to.path === '/men'
      || window.location.pathname.replace(/^\/([^\/]+).*/i,'$1')==='men') {
    store.state.filters['gender'] = 'men';
  }
  if (to.name === 'WomenOverview'
      || to.path === '/women'
      || window.location.pathname.replace(/^\/([^\/]+).*/i,'$1')==='women') {
    store.state.filters['gender'] = 'women';
  }
  next();
});

export default router;