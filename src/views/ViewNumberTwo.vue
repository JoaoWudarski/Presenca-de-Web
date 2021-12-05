<template>
  <div class="viewNumberTwo">
    <Category categoryCode=2></Category>
    <Product categoryCode=2></Product>
  </div>
</template>

<script>

  import Category from '@/components/Category'
  import Product from '@/components/Product'

export default {
  name: 'ViewNumberTwo',
  
  components: { Category, Product },
  created() {
      this.$store.dispatch("getProductsApi");
  }
};
</script>