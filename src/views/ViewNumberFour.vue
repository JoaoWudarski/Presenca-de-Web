<template>
  <div class="viewNumberFour">
    <Category categoryCode=4></Category>
    <Product categoryCode=4></Product>
  </div>
</template>

<script>

  import Category from '@/components/Category'
  import Product from '@/components/Product'

export default {
  name: 'ViewNumberFour',
  
  components: { Category, Product },
  created() {
      this.$store.dispatch("getProductsApi");
  }
};
</script>