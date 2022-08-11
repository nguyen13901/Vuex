<template>
  <div id="app">
    <list-product-one></list-product-one>
    <list-product-two></list-product-two>
  </div>
</template>

<script>
import ListProductOneVue from './components/ListProductOne.vue';
import ListProductTwoVue from './components/ListProductTwo.vue';

export default {
  name: 'App',
  components: {
    'list-product-one': ListProductOneVue,
    'list-product-two': ListProductTwoVue
  },
  data() {
    return {
      products: this.$store.state.products
    }
  }
}
</script>

<style>

</style>
