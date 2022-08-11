<template>
  <div id="list-product-one">
    <h2>List product one: </h2>
    <ul>
      <li v-for="product in products" :key="product">
        <span class="Name">Name: {{ product.name }}</span>
        <span class="Price">Price: {{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
