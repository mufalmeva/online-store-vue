<template>
  <div class="wrapper container-fluid">
    <h4 style="display: inline-block">Cart</h4>
    <div class="flex-col">
      <div class="cart-list" style="label-align: center" v-if="!cartItemsCount">
        Your cart is currently empty <br/>
        <button class="btn btn--grey"> Go back to catalogue</button>
      </div>
      <div v-else class="cart-list flex-col--2">
        <ul>
          <li class="flex-col cart-list__head">
            <div style="font-weight: bold; font-size: 14px; width: 58.33333%;">Items</div>
            <div style="width: 16.66667%;text-align: center;">Quantity</div>
            <div style="width: 25%;text-align: center;">Price</div>
          </li>
          <li class="cart-list__item" v-for="item in cartItems" :key="item.product.id">
            <div class="flex-col row">
              <div class="flex-col" style="width: 58.33333%;">
                <img :src="makeImagePath(item.product)" class="thumbnail" alt="">
                <div class="cart-list__item__details">
                  <p>{{ item.product.name }}</p>
                  <p>Size: {{ item.product.size }}</p>
                  <p>Color: {{ item.product.color }}</p>
                </div>
              </div>
              <div style="width: 16.66667%;text-align: center;">
                <button class="cart-button__round" @click="cartProductDecrement(item.product)"><i class="fa fa-minus"></i></button>
                <span style="margin: 0 9px;">{{item.quantity}}</span>
                <button class="cart-button__round" @click="cartProductIncrement(item.product)"><i class="fa fa-plus"></i></button>
              </div>
              <div style="width: 25%;text-align: center;">
                <p>${{ item.product.price }}</p>
              </div>
            </div>
            <div class="row">
              <button
                      @click="removeAllFromCart(item.product.id)"
                      class="btn cart-list__btn-remove">
                Remove
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex-col--2">
        <section class="total-section" v-if="cartItemsCount">
          <div class="total-section__item" style="background-color: #E5E5E5">
            <div class="form-group" style="margin-top: 1rem; margin-left: 2rem;">
              <label class="total-section__item__label">{{ cartItemsCount }} товаров на сумму {{ itemsSubtotal }}</label>
            </div>
          </div>
          <ul class="total-section-list">
            <li class="total-section__item">
              <coupon></coupon>
            </li>
            <li class="total-section__item">
              <div class="flex-col">
                <label class="total-section__item__label">Способы оплаты</label>
                <div class="form-group">
                  <div class="form-check">
                    <input id="master_card" type="radio" class="form-check-input" name="payment" value="master_card" checked/>
                    <label for="master_card" class="form-check-label">Онлайн-оплата картой</label>
                  </div>
                  <div class="form-check">
                    <input id="paypal" type="radio" class="form-check-input" name="payment" value="paypal"/>
                    <label class="form-check-label" for="paypal">Онлай-оплата Paypal</label>
                  </div>
                </div>
              </div>
            </li>
            <li class="total-section__item">
              <label class="total-section__item__label">Доставка</label>
              <div class="form-group">
                <v-select v-model="selectedShippingOption" :options="shippingOptionsArray" style="min-width: 240px"></v-select>
                <p style="word-wrap: break-spaces">Shipping options will be updated during checkout.</p>
              </div>
            </li>
          </ul>
          <ul class="total-section-list" style="background-color: #E5E5E5">
            <li class="total-section__item">
              <label class="total-section__item__label sp-6">Subtotal</label>
              <p>{{ subtotal }}</p>
            </li>
            <li class="total-section__item">
              <label class="total-section__item__label sp-6">Tax ({{ salesTaxPercentage }})</label>
              <p>{{ salesTaxApplied }}</p>
            </li>
            <li class="total-section__item">
              <label class="total-section__item__label sp-6">Discount ({{ salesTaxPercentage }})</label>
              <p>{{ salesTaxApplied }}</p>
            </li>
            <li class="total-section__item">
              <label class="total-section__item__label sp-6">Total</label>
              <p>{{ total }}</p>
            </li>
          </ul>
          <button
                  :disabled="!this.selectedShippingOption.value"
                  class="btn btn--grey total-section__checkout-button">
            Proceed to checkout
          </button>
        </section>
      </div>
      </div>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
export default {
  name: 'cart',
  mixins: [imagePath],
  data() {
    return {
      salesTax: 0.06,
      selectedShippingOption: {
        label: 'Please select an option',
        value: null,
      },
      shippingOptionsArray: [
        {
          label: 'One day',
          value: 20,
        },
        {
          label: 'Two days',
          value: 15,
        },
        {
          label: 'Three to five days',
          value: 10,
        },
        {
          label: 'One week or more',
          value: 5,
        },
        {
          label: 'Free shipping',
          value: 0,
        },
      ],
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    itemsSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.quantity*item.product.price, 0);
    },
    subtotal() {
      if (this.selectedShippingOption && this.cartItemsCount > 0) {
        return this.selectedShippingOption.value ? Number(this.itemsSubtotal) + Number(this.selectedShippingOption.value) : Number(this.itemsSubtotal);
      }
      return '0';
    },
    salesTaxPercentage() {
      return `${this.salesTax * 100}%`;
    },
    salesTaxApplied() {
      if (this.selectedShippingOption && this.cartItemsCount > 0) {
        return this.selectedShippingOption.value ? (this.subtotal * this.salesTax).toFixed(2) : 0;
      }
      return '0';
    },
    total() {
      if (this.cartItemsCount > 0) {
        return Number(this.subtotal) + Number(this.salesTaxApplied);
      }
      return 0;
    }
  },
  methods: {
    removeAllFromCart(itemId) {
      this.$store.dispatch('removeAllFromCart', itemId);
    },
    cartProductIncrement(product){
      this.$store.dispatch('addToCart', product.id);
    },
    cartProductDecrement(product){
      this.$store.dispatch('removeFromCart', product.id);
    },
  },
  watch: {
    selectedShippingOption(newVal){
      if (!newVal)
        this.selectedShippingOption = {
          label: 'Please select an option',
          value: null,
        };
    }
  }
};
</script>

<style lang="scss">
.cart-list {
  width: 70%!important;
  margin-right: 1rem;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__head {
  width: 100%;
  border-bottom: 5px solid #2c3e50;
}
.cart-list__item__details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-list__btn-remove {
  margin-top: .5rem;
  &:hover {
    color: red!important;
  }
}
.thumbnail {
  max-width: 50px;
  margin-top: .5rem;
}
.total-section {
  background: #FAFAFA;
  padding: 0 1rem 1rem;
}
.total-section-list {
  margin: 0;
}
.total-section__item {
  display: flex;
  /*justify-content: space-between;*/
  align-items: center;
}
.total-section__item__label {
  font-weight: bold;
  margin-right: 1rem;
  white-space: nowrap;
}
.total-section__checkout-button {
  width: 100%;
}
.cart-button__round {
  min-width: 24px;
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 50%;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.16);
  border: none;
  position: relative;
  outline: 0!important;
  user-select: none;
  &:hover {
    background-color: rgba(27, 44, 212, 0.6);
    color: #bbbbbb;
  }
}
.cart-button__round__trash {
  min-width: 24px;
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 50%;
  display: inline-block;
  background-color: #4c4c4c;
  color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.16);
  border: none;
  position: relative;
  outline: 0!important;
  user-select: none;
  &:hover {
    background-color: rgba(247, 117, 109, 0.6);
    color: #bbbbbb;
  }
}
</style>