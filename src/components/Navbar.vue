<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <div class="navbar-nav mr-auto">
        </div>
      </div>
      <div class="mx-auto order-0 flex-col--2" style="color: white!important;text-align: right">
        <router-link :to="{name: 'Login'}" style="color: white!important;">Sign in</router-link>
        /
        <router-link :to="{name: 'Register'}" style="color: white!important;">Register</router-link>
      </div>
    </nav>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <div class="navbar-nav mr-auto nav-items">
          <router-link :to="{name: 'home'}" class="nav-items__item__left">Home</router-link>
          <router-link
                  :to="{ name: 'WomenOverview' }"
                  class="nav-items__item__left"
          >Women</router-link
          >
          <router-link
                  :to="{ name: 'MenOverview' }"
                  class="nav-items__item__left"
          >Men</router-link
          >
        </div>
      </div>
      <div class="mx-auto order-0">
        <!--    Logo area in the centre-->
        <h1 class="logo navbar-brand mx-auto">Vue online store</h1>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <div class="navbar-nav ml-auto nav-items">
          <router-link :to="{name:'WishListPage'}" class="nav-items__item__right js-basket hover-opacity" custom-popup-link="dynamic_basket">
          <span class="d-inline-block">
            <img src="@/assets/img/unlike.png" height="24" width="24" alt="" style="vertical-align: baseline">
          </span>
            <counter-badge :count="wishListCount"></counter-badge>
          </router-link>
          <router-link :to="{name:'Profile', path:'/profile'}" class="nav-items__item__right js-basket hover-opacity" custom-popup-link="dynamic_basket">
            <span class="d-inline-block">
          <svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 55" style="enable-background:new 0 0 55 55; width: 1.8em; display: block;" xml:space="preserve">
          <path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752
              c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348
              c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98
              c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033
              c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55
              c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287
              c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104
              c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1
              c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764
              l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5
              c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957
              c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545
              c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8
              s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545
              c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313
              c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735
              c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167
              c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552
              c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01
              c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53
              c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233
              c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04
              c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816
              c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279
              c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313
              c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221
              c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131
              c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466
              c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545
              c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949
              l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083
              C42.677,47.979,42.567,48.054,42.459,48.132z"></path>
          </svg>
        </span>
          </router-link>
          <router-link :to="{name:'Cart', path:'/cart'}" class="nav-items__item__right js-basket hover-opacity" custom-popup-link="dynamic_basket">
        <span class="d-inline-block">
          <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60; width: 1.6em; display: block;" xml:space="preserve">
            <path d="M11.68,13l-0.833-5h-2.99C7.411,6.28,5.859,5,4,5C1.794,5,0,6.794,0,9s1.794,4,4,4c1.859,0,3.411-1.28,3.858-3h1.294l0.5,3
              H9.614l5.171,26.016c-2.465,0.188-4.518,2.086-4.76,4.474c-0.142,1.405,0.32,2.812,1.268,3.858C12.242,48.397,13.594,49,15,49h2
              c0,3.309,2.691,6,6,6s6-2.691,6-6h11c0,3.309,2.691,6,6,6s6-2.691,6-6h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4.35
              c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4h-11.7c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4H15
              c-0.842,0-1.652-0.362-2.224-0.993c-0.577-0.639-0.848-1.461-0.761-2.316c0.152-1.509,1.546-2.69,3.173-2.69h0.791
              c0.014,0,0.025,0,0.039,0h38.994C57.763,41,60,38.763,60,36.013V13H11.68z M4,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2
              S5.103,11,4,11z M46,45c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S43.794,45,46,45z M23,45c2.206,0,4,1.794,4,4s-1.794,4-4,4
              s-4-1.794-4-4S20.794,45,23,45z M58,36.013C58,37.66,56.66,39,55.013,39H16.821l-4.77-24H58V36.013z"></path>
          </svg>
        </span>
            <counter-badge :count="cartCount"></counter-badge>
          </router-link>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <div class="navbar-nav mr-auto">
        </div>
      </div>
      <div class="mx-auto order-0 flex-col--2 nav-items">
        <input class="search-container" type="text" placeholder="Search..." name="search"/>
        <span class="focus-border"></span>
      </div>
    </nav>
    <hr/>
    <breadcrumb class="wrapper" v-if="showBreadCrumbs" :list="list"></breadcrumb>
  </div>
</template>

<script>
import CounterBadge from "@/components/CounterBadge";
export default {
  components: { CounterBadge },
  name: "Navbar",
  computed: {
    cartCount() {
      return this.$store.state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    wishListCount(){
      return this.$store.state.wish.length;
    },
    list () {
      return this.crumbs.filter((route) => typeof route.to !='undefined' && (route.to.name || route.to.meta.label))
    },
    showBreadCrumbs(){
      return !this.$route.meta.firstPage || this.$route.meta.isCart || this.$route.meta.isProfile;
    },
    crumbs: function() {
      let pathArray = this.$route.path.split("/");
      return pathArray.reduce((breadcrumbArray, path, idx) => {
        if (path.length) {
          if (path==this.$route.params.productId)
            path=(this.$store.getters.product(this.$route.params.productId)).name;
          breadcrumbArray.push({
            path: path,
            to: this.$route.matched[idx - 1],
            label: path || null,
            name: this.$route.matched[idx - 1] ? this.$route.matched[idx - 1].name : null
          });
        }
        return breadcrumbArray;
      }, []);
    }
  },
  mounted() {
    $(document).on('focus', '.search-container', function (e) {
      let container=$('.search-container');
      $('.focus-border').css({
        'top': container.offset().top - (container.closest('.navbar').offset().top-container.height()) +1+'px',
        'left': container.offset().left - container.closest('.navbar').offset().left + 'px',
        'width': container.width() +16+'px'
      });
      $('span[class=focus-border]').addClass('search-onfocus');
    });
    $(document).on('focusout', '.search-container', function (e) {
      $('.focus-border').css({
        'width': 0,
      });
      $('.focus-border').removeClass('search-onfocus');
    });
    $(window).on('scroll',function (){
      let header = document.getElementById("nav");
      let sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  },
};
</script>
<style scoped lang="scss">
  .focus-border{
    left: inherit; width: 0; height: 2px; background-color: #3399FF; transition: 0.4s;}
  .search-container {
    border: 1px solid #d6d6d6;
    height: 2rem;
    padding-left: 1rem;
    width: -webkit-fill-available;
    &:focus {
      outline: none;
      transition: outline 0.6s linear;
    }
  }
  :focus{outline: none;}
  .search-onfocus {
    width: 100%;
    transition: 0.4s;
    position: absolute;
  }
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      border-bottom: 4px solid black;
    }
  }
}
.nav-items {
  justify-content: flex-start;
  min-height: 35px;
}
.nav-brand{
  justify-content: flex-end;
}
.nav-items__item__left {
  margin-left: 2rem;
  position: relative;
}
.nav-items__item__right {
  margin-right: 2rem;
  position: relative;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 2px solid #edeeef;
  z-index: 1;
}
ul {
  padding-left: 0;
  list-style: none;
}
.logo{
  text-align: center;
}
@media (min-width: 768px) {
  .navbar-nav.navbar-center {
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
  }
}
</style>
