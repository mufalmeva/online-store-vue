<template>
  <div class="wrapper">
    <section class="">
      <div class="flex-col ">
        <div class="flex-col--2">
          <img  class="row main-img" :src="selectedImageUrl" alt="">
          <div class="">
            <info-slider :selectedProduct="product"></info-slider>
          </div>
        </div>
        <div class="flex-col--2" >
          <h2>{{ product.name }}</h2>
          <p>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <span style="margin-left: 25px">4.1</span>
          </p>
          <p style="margin-top: 0;font-size: x-large; color: #179a94;">${{ product.price }}</p>
          <p><v-select style="width: 200px" :options="optionsSize" v-model="selectedSize"></v-select></p>
          <p><strong>Color:</strong> {{ product.color|capitalize}}</p>
          <button @click="addToCart" class="btn btn--grey">Add to Cart</button>
          <img v-show="product.liked" @click="addRemoveLike(product.id)" class="like-product" src="@/assets/img/like.png" height="24" width="24" alt=""/>
          <img v-show="!product.liked" @click="addRemoveLike(product.id)" class="unlike-product" src="@/assets/img/unlike.png" height="24" width="24" alt=""/>
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
        <div class="slider" style="">
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
    <div class="product-footer">
      <nav class="wrapper">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><h4>Reviews (2)</h4></a>
          <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><h4>Shipping & Delivery</h4></a>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div class="auth-pages">
            <div class="auth-left">
              <p><strong>2 reviews for {{product.name}}</strong></p>
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-2">
                      <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                      <p class="text-secondary text-center">15 Minutes Ago</p>
                    </div>
                    <div class="col-md-10">
                      <p>
                        <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Eric Watson</strong></a>
                        <span class="float-right"><i class="text-info fa fa-star"></i></span>
                        <span class="float-right"><i class="text-info fa fa-star"></i></span>
                        <span class="float-right"><i class="text-info fa fa-star"></i></span>
                        <span class="float-right"><i class="text-info fa fa-star"></i></span>

                      </p>
                      <div class="clearfix"></div>
                      <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<!--                      <p>-->
<!--                        <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>-->
<!--                      </p>-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-2">
                      <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                      <p class="text-secondary text-center">March 14, 2018</p>
                    </div>
                    <div class="col-md-10">
                      <p>
                        <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Edward Norton</strong></a>
                        <span class="float-right"><i class="text-info fa fa-star"></i></span>
                        <span class="float-right"><i class="text-info fa fa-star"></i></span>
                        <span class="float-right"><i class="text-info fa fa-star"></i></span>
                        <span class="float-right"><i class="text-info fa fa-star"></i></span>
                      </p>
                      <div class="clearfix"></div>
                      <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<!--                      <p>-->
<!--                        <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>-->
<!--                      </p>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="auth-right">
              <h2>Add a review</h2>
              <div class="spacer"></div>
              <p><strong>Your email address will not be published. Required fields are marked *</strong></p>
              <p>Your rating:
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </p>
              <div class="spacer"></div>
              <div class="spacer">Your review *</div>
              <textarea rows="8"></textarea>
              <div class="flex-col">
                <div class="form-group">
                  <label>Name *</label>
                  <input type="text">
                </div>
                <div class="form-group">
                  <label>Email *</label>
                  <input type="email">
                </div>
              </div>
              <div class="spacer"></div>
              <a href="" class="auth-button-hollow">Create Account</a>

            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <p style="margin: 30px auto;">
            Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames.Consequat net
            Vestibulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames.Consequat netus.
            Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac vestibulum amet elit
          </p>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imagePath }  from '@/mixins/imagePath.js'
import {sliderShow} from "@/assets/js/main";
export default {
  name: 'product',
  mixins: [imagePath],
  data() {
    return {
      showLike: false,
      product: this.$store.getters.product(this.$route.params.productId),
      selectedSize: {value: 0, label: 'Small'},
      optionsSize: [
        {label: 'Small', value: 0},
        {label: 'Medium', value: 1},
        {label: 'Big', value: 2},
      ],
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.$route.params.productId)
    },
    addRemoveLike(itemId){
      return this.$store.dispatch('addRemoveLike', itemId)
    }
  },
  mounted() {
    sliderShow();
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
      return this.product.gender;
    },
    productsByGender() {
      return this.$store.getters.productsByGender(this.gender)
    },
    selectedImageUrl(){
      return this.product ? this.makeImagePath(this.product) : '';
    }
  },
  watch: {
    selectedSize(newVal) {
      if (!newVal)
        this.selectedSize = {value: 0, label: 'Small'};
    }
  }
};
</script>

<style lang="scss">
.product-footer {
  left: -10%;
}
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
  background-color: #3EBFA4!important;
  color: #e9ecef!important;
  font-weight: bold!important;
  &:hover, &:focus {
    background-color: #358862!important;
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
</style>
