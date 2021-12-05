<template>
  <div class="viewNumberThree">
    <Category categoryCode=3></Category>
    <Product categoryCode=3></Product>
  </div>
</template>

<script>

  import Category from '@/components/Category'
  import Product from '@/components/Product'

export default {
  name: 'ViewNumberThree',
  
  components: { Category, Product },
  created() {
      this.$store.dispatch("getProductsApi");
  }
};
</script>