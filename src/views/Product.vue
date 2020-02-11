<template>
  <div class=" col-lg-9 col-md-9">
    <section class="wrapper">
      <div class="flex-col">
        <div class="flex-col--2">
          <img  class="row" :src="makeImagePath(product)" alt="">
          <div class="row">
            <ul class="" style="text-align: center;">
              <li v-for="image in product.images" style="display: inline-flex;">
                <img :src="makeImagePath(image)" :alt="image" style="width: 78px;">
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-col--2" >
          <h2>{{ product.name }}</h2>
          <button @click="addToCart" class="btn btn--grey">Add to Cart</button>
          <img v-show="product.liked" @click="addRemoveLike(product.id)" class="like-product" src="../assets/img/like.png" height="24" width="24" alt=""/>
          <img v-show="!product.liked" @click="addRemoveLike(product.id)" class="unlike-product" src="../assets/img/unlike.png" height="24" width="24" alt=""/>
          <p>Price: ${{ product.price }}</p>
          <p>Size: {{ product.size }}</p>
          <p>Color: {{ product.color }}</p>
          <p><em>{{ product.quantity }} left in stock</em></p>
          <h3>Details</h3>
          <ul>
            <li>Material: {{ product.details.material }}</li>
            <li>Fit: {{ product.details.fit }}</li>
            <li>Maintenance: {{ product.details.maintenance }}</li>
            <li v-if="product.details.additional">Additional: {{ product.details.additional }}</li>
          </ul>
        </div>
      </div>
    </section>
    <h4>Вам могут понравиться</h4>
    <hr/>
    <div class="wrapper lenta">
      <section class="lenta-products">
        <div class="slider" style="left: -10%">
          <div v-for="product in productsByGender" :key="product.id"  class="item-grid__item cd-item slide-item">
            <img style="width: 98px; text-align: center" class="product-image" :src="makeImagePath(product)" alt="">
            <p class="product-title">{{ product.name }}</p>
            <p><em>${{ product.price }}</em>
              <img v-show="product.liked" @click="addRemoveLike(product.id)" class="like-product" src="../assets/img/like.png" height="24" width="24" alt=""/>
              <img v-show="!product.liked" @click="addRemoveLike(product.id)" class="unlike-product" src="../assets/img/unlike.png" height="24" width="24" alt=""/>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { imagePath }  from '@/mixins/imagePath.js'
export default {
  name: 'product',
  mixins: [imagePath],
  data() {
    return {
      showLike: false,
      product: this.$store.getters.product(this.$route.params.id)
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.$route.params.id)
    },
    addRemoveLike(itemId){
      return this.$store.dispatch('addRemoveLike', itemId)
    }
  },
  mounted() {
    $(document).ready(function(){
      $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-arrow-alt-circle-left"></i> </button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-arrow-alt-circle-right"></i></button>',
        autoplaySpeed: 2000,
        arrows: true,
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
  computed: {
    gender() {
      return this.$route.params.gender
    },
    productsByGender() {
      return this.$store.getters.productsByGender(this.gender)
    },
  }
};
</script>

<style lang="scss">
.flex-col {
  display: flex;
  align-items: flex-start;
}
.flex-col--2 {
  width: 50%;
}
.flex-col--align-center {
  align-items: center;
}
.btn {
  padding: .5rem .75rem;
  border-radius: 3px;
  border: none;
  background-color: transparent;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .15s ease;
}
.btn--grey {
  background-color: lightgreen!important;
  color: #FFF;
  &:hover, &:focus {
    background-color: #42b983!important;
  }
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
.slick-arrow{
  position: absolute;
  top: 50%;
  margin-top: -15px;
}
.slick-prev{
  left: -10px;
  width: 35px;
  height: 35px;
  font-size: 16px;
  border-radius: 100%;
  border: none;
  opacity: 0.7;
  z-index: 1;
}
.slick-prev:focus{
  outline: none;
}
.slick-next{
  right: -10px;
  width: 35px;
  height: 35px;
  font-size: 16px;
  border-radius: 100%;
  border: none;
  opacity: 0.7;
  z-index: 1;
}
.slick-next:focus{
  outline: none;
}
</style>
