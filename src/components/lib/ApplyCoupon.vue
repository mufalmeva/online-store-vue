<template>
  <div class="coupon">
    <div class="form-group">
      <label for="coupon__id" class="total-section__item__label">Coupon</label>
      <div class="form-inline">
        <input id="coupon__id" type="text" class="form-control" placeholder="Coupon code here"/>
        <button class="form-control btn__coupon">Apply</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ApplyCoupon"
  }
</script>

<style scoped lang="scss">
  .coupon {
    background-color: #f8f8f8;
    /*display: flex;*/
  }
  .btn__coupon {
    background-color: #2796FF;
    color: #fff;
    &:hover {
      background-color: rgba(21, 106, 168, 0.82);
     }
  }
</style>