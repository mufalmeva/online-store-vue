export const imagePath = {
  methods: {
    makeImagePath(product) {
      if (typeof product != 'string')
        return require(`../assets/img/products/${product.images[0]}`);
      else
        return require(`../assets/img/products/${product}`);
    }
  }
}
