<template>
  <div class="col-lg-9 col-md-9">
    <h4 style="display: inline-block">WishList</h4>
    <div class="sortable"></div>
    <ul v-if="wishListCount" class="wrapper item-grid cd-container">
      <li v-for="product in wishList" :key="product.id" class="item-grid__item cd-item">
        <router-link :to="{ name: 'product', params: {gender: gender, id: product.id}}">
          <img class="product-image" :src="makeImagePath(product)" alt="">
          <p class="product-title">{{ product.name }}</p>
          <p><em>${{ product.price }}</em></p>
        </router-link>
      </li>
    </ul>
    <ul v-else>
      <li>
        Your wishList is currently empty <br/>
        <button class="btn btn--grey"> Go back to catalogue</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {imagePath} from "@/mixins/imagePath";

  export default {
    name: "WishListPage",
    mixins: [ imagePath ],
    computed: {
      gender() {
        // return this.$route.params.gender
        return 'women';
      },
      wishList() {
        return this.$store.getters.wishList;
      },
      wishListCount() {
        return this.wishList.length;
      },
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>