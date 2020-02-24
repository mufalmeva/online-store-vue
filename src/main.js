window._ = _ = require('lodash');

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// require("expose-loader?$!jquery");
// require("expose-loader?jQuery!jquery");

import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel'
import "@/assets/css/style.css";
import "@/assets/js/velocity.min.js";
import "@/assets/js/main.js";

import vSelect from 'vue-select';
import InfoSlider from "./components/lib/InfoSlider";
import Breadcrumbs from "./components/lib/Breadcrumb";
import ApplyCoupon from "./components/lib/ApplyCoupon"

Vue.component('v-select', vSelect );
Vue.component('info-slider', InfoSlider);
Vue.component('breadcrumb', Breadcrumbs);
Vue.component('coupon', ApplyCoupon);

Vue.config.productionTip = false;

Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
  router,
  store,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount("#app");
