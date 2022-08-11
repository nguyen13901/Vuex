<template>
  <div>
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOneVue from './components/ProductListOne.vue';
import ProductListTwoVue from './components/ProductListTwo.vue';

export default {
  name: 'App',
  components: {
    'product-list-one': ProductListOneVue,
    'product-list-two': ProductListTwoVue
  },
  data() {
    return {
      products: this.$store.state.products
      // products: []
    }
  }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
