<template>
  <div class="col-lg-9 col-md-9">
    <div class="">
      <h4 style="display: inline-block">{{ pageTitle }}</h4>
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
        <li v-for="product in requestedProducts()" :key="product.id" @mouseover="bindEvent()" @mouseout="unbindEvent()" class="item-grid__item cd-item">
          <router-link :to="{ name: gender+'Product', params: { category:product.category,productId: product.id}}">
            <img class="product-image" :src="makeImagePath(product)" alt="">
            <p class="product-title">{{ product.name }}</p>
            <p><em>${{ product.price }}</em></p>
          </router-link>
          <span class="cd-trigger" @click="quickView(product, $event)">Quick View</span>
        </li>
      </ul>
      <div class="cd-quick-view" v-if="selectedProduct">
        <div class="flex-col">
          <div class="flex-col--2">
            <img class="main-img" src="" alt="Product 1" />
            <div class="cd-item-info" style="position: relative; padding: 0">
              <info-slider :selectedProduct="selectedProduct"></info-slider>
            </div>
            <a href="javascript:void(0)" class="cd-close">Close</a>
          </div>
          <div class="flex-col--2 cd-item-info">
            <div class="" >
              <h2>{{ selectedProduct.name }}</h2>
              <p style="margin-top: 0;font-size: x-large; color: #179a94;">${{selectedProduct.price }}</p>
              <v-select style="width: 200px" :options="optionsSize" v-model="selectedSize"></v-select>
              <p>Color: {{ selectedProduct.color | capitalize}}</p>
              <button @click="addToCart(selectedProduct)" class="btn btn--grey">Add to Cart</button>
              <img v-show="selectedProduct.liked" @click="addRemoveLike(selectedProduct.id)" class="like-product" src="@/assets/img/like.png" height="24" width="24" alt=""/>
              <img v-show="!selectedProduct.liked" @click="addRemoveLike(selectedProduct.id)" class="unlike-product" src="@/assets/img/unlike.png" height="24" width="24" alt=""/>
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
                <a href="javascript:void(0)" class="learn-more" @click="goToProduct(selectedProduct)">Learn more</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper random-items-wrapper">
      <h2>Our Recommendations</h2>
      <p>Try these on for size!</p>
      <section class="random-items">
        <router-link :to="{ name: gender+'Product', params: {category:randomTop.category, productId: randomTop.id}}" class="random-items__item">
          <img class="product-image" :src="makeImagePath(randomTop)" alt="">
          <p class="product-title">{{ randomTop.name }}</p>
          <p><em>${{ randomTop.price }}</em></p>
        </router-link>
        <router-link :to="{ name: gender+'Product', params: {category: randomBottom.category, productId: randomBottom.id}}" class="random-items__item">
          <img class="product-image" :src="makeImagePath(randomBottom)" alt="">
          <p class="product-title">{{ randomBottom.name }}</p>
          <p><em>${{ randomBottom.price }}</em></p>
        </router-link>
        <router-link :to="{ name: gender+'Product', params: {category: randomFootwear.category, productId: randomFootwear.id}}" class="random-items__item">
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
  import {viewProduct} from "@/mixins/viewProduct.js"
  import { all } from 'q';

  export default {
    name: "genderOverview",
    mixins: [ imagePath, viewProduct ],
    props: {
      gender: {type: String, default:()=>''},
      category: {type: String, default:()=>''}
    },
    created() {
      this.recommendRandomOutfit();
    },
    data () {
      return {
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
        selectedSize: {value: 0, label: 'Small'},
        optionsSize: [
          {label: 'Small', value: 0},
          {label: 'Medium', value: 1},
          {label: 'Big', value: 2},
        ],
        selectedProduct: null
      }
    },
    computed: {
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
      requestedProducts() {
        return this.category.length ? this.productsByGender.filter(p => p.category === this.category) : this.productsByGender;
      },
      quickView(product, event){
        this.selectedProduct=product;
        this.$nextTick(()=>{
          this.quickViewProduct(product,event);
        });
      },
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
      addRemoveLike(itemId){
        return this.$store.dispatch('addRemoveLike', itemId)
      },
      goToProduct(selectedProduct){
        $('body').removeClass('overlay-layer');
        this.$router.push('/'+this.gender+'/'+selectedProduct.category+'/'+selectedProduct.id);
      }
    },
    watch: {
      selectedSize(newVal) {
        if (!newVal)
          this.selectedSize = {value: 0, label: 'Small'};
      }
    }
  }
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
    flex: 0 0 24.9999%;
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
    padding: 10px;
    flex: 0 0 24.9999%;
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
