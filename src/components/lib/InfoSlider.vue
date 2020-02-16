<template>
  <div>
    <ul class="info-slider" style="text-align: center;padding-left: 0;">
      <li v-for="image in selectedProduct.images" style="display: inline-flex;" class=" slide-item">
        <img :src="makeImagePath(image)" :alt="image" style="width: 78px;">
      </li>
    </ul>
  </div>
</template>

<script>
  import {imagePath} from "../../mixins/imagePath";

  export default {
    name: "InfoSlider",
    mixins: [ imagePath ],
    props:['selectedProduct'],
    mounted() {
      $('.info-slider').find('img[src="'+ this.selectedImageUrl +'"]').addClass('selected');
      $('.info-slider').on('click', 'img', function(){
        updateSlider($(this));
      });
      function updateSlider(image) {
        let sliderContainer = image.parents('.info-slider'),
            selectedImageUrl = image.attr('src');

        sliderContainer.find('.selected').removeClass('selected');
        image.addClass('selected');
        $('.main-img').attr('src',selectedImageUrl);
      }
    },
    computed:{
      selectedImageUrl(){
        return this.makeImagePath(this.selectedProduct);
      }
    }
  }
</script>

<style scoped>

</style>