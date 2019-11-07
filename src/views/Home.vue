
<template>
    <div class="home wrapper">
<!--    Lenta of Categories-->
        <div class="lenta">
            <div style="display: -webkit-inline-box;">
                <div v-for="product in featuredProducts" :key="product.id"  class="lenta-item">
                    <img style="width: 98px; text-align: center" class="product-image" :src="makeImagePath(product)" alt="">
                    <p><a href="#0" class="">{{product.category}}</a></p>
                </div>
            </div>
        </div>
        <!--    Products list -->
        <ul class="featured-items cd-items cd-container">
            <li v-for="product in featuredProducts" :key="product.id" class="featured-items__item cd-item">
                <router-link :to="{ name: 'product', params: { id: product.id}}">
                    <img class="product-image" :src="makeImagePath(product)" alt="" />
                    <p class="product-title">{{ product.name }}</p>
                    <p><em>${{ product.price }}</em></p>
                </router-link>
                <span class="cd-trigger">Quick View</span>
            </li>
            <div class="cd-quick-view">
                <div class="cd-slider-wrapper">
                    <ul class="cd-slider">
                        <li class="selected">
                            <img src="" alt="Product 1" /></li>
                    </ul>
                    <!-- cd-slider -->
                    <ul class="cd-slider-navigation">
                        <li><a class="cd-next" href="#0">Prev</a></li>
                        <li><a class="cd-prev" href="#0">Next</a></li>
                    </ul>
                    <!-- cd-slider-navigation -->
                </div>
                <!-- cd-slider-wrapper -->
                <div class="cd-item-info">
                    <h2>Produt Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis, maxime laborum praesentium.</p>
                    <ul class="cd-item-action">
                        <li>
                            <button class="add-to-cart">Add to cart</button></li>
                        <li>
                            <a href="#0">Learn more</a></li>
                    </ul>
                    <!-- cd-item-action -->
                </div>
                <!-- cd-item-info -->
                <a href="#0" class="cd-close">Close</a>
            </div>
        </ul>
    </div>
</template>
<script>
import { imagePath } from '@/mixins/imagePath.js'
// @ is an alias to /src

export default {
  name: "home",
  mixins: [imagePath],
  computed: {
    products: function() {
      return this.$store.state.products;
    },
    featuredProducts: function() {
      return this.$store.getters.featuredProducts.slice(0,3);
    }
  },
};
</script>

<style lang="scss">
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
</style>
