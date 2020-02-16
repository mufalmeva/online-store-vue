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

Vue.component('v-select', vSelect );
Vue.component('info-slider', InfoSlider);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount("#app");
