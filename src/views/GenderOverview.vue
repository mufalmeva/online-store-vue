<template>
  <div class="gender-page">
    <h4 style="display: inline-block" class="wrapper">{{ pageTitle }}</h4>
    <div class="sortable">
      <v-select style="letter-spacing: 0; float: right; min-width: 192px" :options="options" v-model="selected"></v-select>
      <div class="dropdown">
        <button style="letter-spacing: 0; float: right" class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Color
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <div class="card" style="width: 12rem">
            <div class="card-body">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="red">
                <label class="custom-control-label" for="red">
                  <svg width="18" height="18" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradientred" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="red"></stop><stop offset="100%" stop-color="black" stop-opacity="0"></stop></linearGradient></defs><rect rx="15" ry="15" width="18" height="18" fill="url(#gradientred)"></rect></svg>
                  Red
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="blue">
                <label class="custom-control-label" for="blue">
                  <svg width="18" height="18" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradientblue" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="blue"></stop><stop offset="100%" stop-color="black" stop-opacity="0"></stop></linearGradient></defs><rect rx="15" ry="15" width="18" height="18" fill="url(#gradientblue)"></rect></svg>
                  Blue
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="yellow">
                <label class="custom-control-label" for="yellow">
                  <svg width="18" height="18" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradientyellow" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="yellow"></stop><stop offset="100%" stop-color="black" stop-opacity="0"></stop></linearGradient></defs><rect rx="15" ry="15" width="18" height="18" fill="url(#gradientyellow)"></rect></svg>
                  Yellow
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="green">
                <label class="custom-control-label" for="green">
                  <svg width="18" height="18" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradientgreen" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="green"></stop><stop offset="100%" stop-color="black" stop-opacity="0"></stop></linearGradient></defs><rect rx="15" ry="15" width="18" height="18" fill="url(#gradientgreen)"></rect></svg>
                  Green
                </label>
              </div>
              <input type="submit" class="btn btn-light" value="Apply"/>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button style="letter-spacing: 0; float: right" class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Size
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <div class="card" style="width: 12rem;">
            <div class="card-body">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="34">
                <label class="custom-control-label" for="34">34</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="38">
                <label class="custom-control-label" for="38">38</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="42">
                <label class="custom-control-label" for="42">42</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="44">
                <label class="custom-control-label" for="44">44</label>
              </div>
              <input type="submit" class="btn btn-light" value="Apply"/>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button style="letter-spacing: 0; float: right" class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cost
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <div class="card" style="width: 12rem;">
            <div class="card-body">
              <p class="card-text">
                <label for="from">From</label>
                <input id="from" class="form-control" type="text" style="height: calc(1em + .75rem + 0px)">
                <label for="to">To</label>
                <input id="to" type="text" class="form-control" style="height: calc(1em + .75rem + 0px)">
              </p>
              <input type="submit" class="btn btn-light" value="Apply"/>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button style="letter-spacing: 0; float: right" class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Season
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <div class="card" style="width: 12rem;">
            <div class="card-body">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="summer">
                <label class="custom-control-label" for="summer">Summer</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="winter">
                <label class="custom-control-label" for="winter">Winter</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="automn">
                <label class="custom-control-label" for="automn">Automn</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="spring">
                <label class="custom-control-label" for="spring">Spring</label>
              </div>
              <input type="submit" class="btn btn-light" value="Apply"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="wrapper item-grid cd-container">
        <li v-for="product in productsByGender" :key="product.id" @mouseover="bindEvent()" @mouseout="unbindEvent()" class="item-grid__item cd-item">
          <router-link :to="{ name: 'product', params: { id: product.id}}">
            <img class="product-image" :src="makeImagePath(product)" alt="">
            <p class="product-title">{{ product.name }}</p>
            <p><em>${{ product.price }}</em></p>
          </router-link>
          <span class="cd-trigger" @click="quickViewProduct(product, $event)">Quick View</span>
        </li>
      </ul>
    <div class="cd-quick-view" v-if="selectedProduct">
        <div class="cd-slider-wrapper">
          <ul class="cd-slider">
            <li class="selected">
              <img src="" alt="Product 1" /></li>
          </ul>
          <ul class="cd-slider-navigation">
            <li><a class="cd-next" href="#0">Prev</a></li>
            <li><a class="cd-prev" href="#0">Next</a></li>
          </ul>
        </div>
        <div class="cd-item-info">
          <div class="" >
            <h2>{{ selectedProduct.name }}</h2>
            <button @click="addToCart(selectedProduct)" class="btn btn--grey">Add to Cart</button>
            <p>Price: ${{ selectedProduct.price }}</p>
            <p>Size: {{ selectedProduct.size }}</p>
            <p>Color: {{ selectedProduct.color }}</p>
            <p><em>{{ selectedProduct.quantity }} left in stock</em></p>
            <h3>Details</h3>
            <ul>
              <li>Material: {{ selectedProduct.details.material }}</li>
              <li>Fit: {{ selectedProduct.details.fit }}</li>
              <li>Maintenance: {{ selectedProduct.details.maintenance }}</li>
              <li v-if="selectedProduct.details.additional">Additional: {{ selectedProduct.details.additional }}</li>
            </ul>
          </div>
          <ul class="cd-item-action">
            <li>
            <li>
              <a href="#0">Learn more</a></li>
          </ul>
        </div>
        <a href="#0" class="cd-close">Close</a>
      </div>
      <div class="wrapper random-items-wrapper">
        <h2>Our Recommendations</h2>
        <p>Try these on for size!</p>
        <section class="random-items">
          <router-link :to="{ name: 'product', params: { id: randomTop.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomTop)" alt="">
            <p class="product-title">{{ randomTop.name }}</p>
            <p><em>${{ randomTop.price }}</em></p>
          </router-link>
          <router-link :to="{ name: 'product', params: { id: randomBottom.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomBottom)" alt="">
            <p class="product-title">{{ randomBottom.name }}</p>
            <p><em>${{ randomBottom.price }}</em></p>
          </router-link>
          <router-link :to="{ name: 'product', params: { id: randomFootwear.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomFootwear)" alt="">
            <p class="product-title">{{ randomFootwear.name }}</p>
            <p><em>${{ randomFootwear.price }}</em></p>
          </router-link>
        </section>
        <button class="btn btn--grey" @click="recommendRandomOutfit">Shuffle</button>
      </div>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'
import {viewProduct} from "@/assets/js/main.js"
import { all } from 'q';

export default {
  name: "genderOverview",
  mixins: [ imagePath, viewProduct ],
  created() {
    this.recommendRandomOutfit();
  },
  data () {
    return {
      showLike: false,
      randomTopId: null,
      randomBottomId: null,
      randomFootwearId: null,
      sorting: '',
      selected: {value: 0, label: 'По популярности'},
      options: [
        {label: 'По популярности', value: 0},
        {label: 'По возрастанию цены', value: 1},
        {label: 'По убыванию цены', value: 2},
        {label: 'По новинкам', value: 3},
        {label: 'По скидкам', value: 4}
      ],
      selectedProduct: null
    }
  },
  computed: {
    gender() {
      return this.$route.params.gender
    },
    pageTitle() {
        return `${this.gender[0].toUpperCase()}${this.gender.slice(1)}`
    },
    productsByGender() {
      return this.$store.getters.productsByGender(this.gender)
    },
    randomTop() {
      return this.$store.getters.product(this.randomTopId)
    },
    randomBottom() {
      return this.$store.getters.product(this.randomBottomId)
    },
    randomFootwear() {
      return this.$store.getters.product(this.randomFootwearId)
    }
  },
  methods: {
    randomProductIdByCategory(category) {
      let allProductsInCategory = this.productsByGender.filter(p => p.category === category);
      let randomIndex = Math.floor(Math.random() * allProductsInCategory.length);
      return allProductsInCategory[randomIndex].id;
    },
    recommendRandomOutfit() {
      this.randomTopId = this.randomProductIdByCategory('Shirts')
      this.randomBottomId = this.randomProductIdByCategory('Pants')
      this.randomFootwearId = this.randomProductIdByCategory('Shoes')
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product.id)
    },
    likeProductClick(like){
      this.showLike = !like;
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
.gender-page {
  padding-left: 224px;
}
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
.item-grid {
  list-style: none;
  display: flex;
  align-items: flex-start;
  /*justify-content: center;*/
  flex-wrap: wrap;
}
.item-grid__item {
  box-sizing: border-box;
  text-align: center;
  padding: 1rem;
  flex: 0 0 22.9999%;
  @media only screen and (max-width: 832px) {
    flex: 0 0 50%;
  }
  @media only screen and (max-width: 475px) {
    flex: 0 0 100%;
  }
}
.sortable {
  margin-left: 35px;
  padding: 8px;
  text-align: -webkit-right;
}
.dropdown-menu {
  padding: 0!important;
}
.btn {
  font-size: inherit;
}
</style>
