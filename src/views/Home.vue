
<template>
    <div class="home wrapper">
<!--    Lenta of Categories-->
      <div class="wrapper lenta">
        <div class="align-content-center">
          <h2 class="hor-line">Find out a category</h2>
        </div>
          <section style="display: -moz-inline-box;" class="lenta-categories slider">
              <div v-for="product in featuredProducts" :key="product.id"  class="lenta-item slide">
                  <img style="width: 98px; text-align: center" class="product-image" :src="makeImagePath(product)" alt="">
                  <p><a href="#0" class="">{{product.category}}</a></p>
              </div>
          </section>
      </div>

      <div class="wrapper random-items-wrapper">
        <h2>Our Recommendations</h2>
        <p>Try these on for size!</p>
        <h4 class="text-left">For women</h4>
        <section class="random-items">
          <router-link :to="{ name: 'product', params: { id: randomWTop.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomWTop)" alt="">
            <p class="product-title">{{ randomWTop.name }}</p>
            <p><em>${{ randomWTop.price }}</em></p>
          </router-link>
          <router-link :to="{ name: 'product', params: { id: randomWBottom.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomWBottom)" alt="">
            <p class="product-title">{{ randomWBottom.name }}</p>
            <p><em>${{ randomWBottom.price }}</em></p>
          </router-link>
          <router-link :to="{ name: 'product', params: { id: randomWFootwear.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomWFootwear)" alt="">
            <p class="product-title">{{ randomWFootwear.name }}</p>
            <p><em>${{ randomWFootwear.price }}</em></p>
          </router-link>
        </section>
        <button class="btn btn--grey" @click="recommendRandomOutfitWomen">Shuffle</button>
        <h4 class="text-left">For men</h4>
        <section class="random-items">
          <router-link :to="{ name: 'product', params: { id: randomMTop.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomMTop)" alt="">
            <p class="product-title">{{ randomMTop.name }}</p>
            <p><em>${{ randomMTop.price }}</em></p>
          </router-link>
          <router-link :to="{ name: 'product', params: { id: randomMBottom.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomMBottom)" alt="">
            <p class="product-title">{{ randomMBottom.name }}</p>
            <p><em>${{ randomMBottom.price }}</em></p>
          </router-link>
          <router-link :to="{ name: 'product', params: { id: randomMFootwear.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomMFootwear)" alt="">
            <p class="product-title">{{ randomMFootwear.name }}</p>
            <p><em>${{ randomMFootwear.price }}</em></p>
          </router-link>
        </section>
        <button class="btn btn--grey" @click="recommendRandomOutfitMen">Shuffle</button>
      </div>
    </div>
</template>
<script>
import { imagePath } from '@/mixins/imagePath.js'
// @ is an alias to /src

export default {
  name: "home",
  mixins: [imagePath],
  data(){
    return {
      randomTopWId: null,
      randomBottomWId: null,
      randomFootwearWId: null,
      randomTopMId: null,
      randomBottomMId: null,
      randomFootwearMId: null,
    }
  },
  created(){
    this.recommendRandomOutfitWomen();
    this.recommendRandomOutfitMen();
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    },
    featuredProducts: function() {
      return this.$store.getters.featuredProducts.slice(0,4);
    },
    categories: function() {
        return this.$store.state.categories;
    },
    randomMTop() {
      return this.$store.getters.product(this.randomTopMId)
    },
    randomMBottom() {
      return this.$store.getters.product(this.randomBottomMId)
    },
    randomMFootwear() {
      return this.$store.getters.product(this.randomFootwearMId)
    },
    randomWTop() {
      return this.$store.getters.product(this.randomTopWId)
    },
    randomWBottom() {
      return this.$store.getters.product(this.randomBottomWId)
    },
    randomWFootwear() {
      return this.$store.getters.product(this.randomFootwearWId)
    },
    productsByMen() {
      return this.$store.getters.productsByGender('men');
    },
    productsByWomen() {
      return this.$store.getters.productsByGender('women');
    },
  },
  mounted() {
    $(document).ready(function(){
      $('.lenta-categories').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    });
  },
  methods: {
    randomProductIdByCategory(category, productsByGender) {
      let allProductsInCategory = productsByGender.filter(p => p.category === category);
      let randomIndex = Math.floor(Math.random() * allProductsInCategory.length);
      return allProductsInCategory[randomIndex].id;
    },
    recommendRandomOutfitMen() {
      this.randomTopMId = this.randomProductIdByCategory('Shirts', this.productsByMen);
      this.randomBottomMId = this.randomProductIdByCategory('Pants', this.productsByMen);
      this.randomFootwearMId = this.randomProductIdByCategory('Shoes', this.productsByMen);
    },
    recommendRandomOutfitWomen() {
      this.randomTopWId = this.randomProductIdByCategory('Shirts', this.productsByWomen);
      this.randomBottomWId = this.randomProductIdByCategory('Pants', this.productsByWomen);
      this.randomFootwearWId = this.randomProductIdByCategory('Shoes', this.productsByWomen);
    },
  }
};
</script>

<style lang="scss">
  .random-items-wrapper {
    background: #fafafa;
    text-align: center;
    padding: 3rem;
  }
  .random-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .random-items__item {
    flex: 0 0 22.9999%;
  }
.wrapper {
  /*max-width: 800px;*/
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
  @media (min-width: 992px){
      max-width: 960px;
    }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 22.9999%;
  text-align: center;
  padding: 2px;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}
.lenta {
  text-align: center;
}
.lenta-item {
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 12%;
  text-align: -webkit-center;
  margin-right: 25px;
}

/* Slider */
.slick-slide {
  margin: 0px 20px;
}
.slick-slider
{
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list
{
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slick-list:focus
{
  outline: none;
}
.slick-list.dragging
{
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track
{
  position: relative;
  top: 0;
  left: 0;
  display: block;
}
.slick-track:before,
.slick-track:after
{
  display: table;
  content: '';
}
.slick-track:after
{
  clear: both;
}
.slick-loading .slick-track
{
  visibility: hidden;
}

.slick-slide
{
  display: none;
  float: left;
  min-height: 1px;
}
[dir='rtl'] .slick-slide
{
  float: right;
}
.slick-slide img
{
  display: block;
}
.slick-slide.slick-loading img
{
  display: none;
}
.slick-slide.dragging img
{
  pointer-events: none;
}
.slick-initialized .slick-slide
{
  display: block;
}
.slick-loading .slick-slide
{
  visibility: hidden;
}
.slick-vertical .slick-slide
{
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}
</style>
