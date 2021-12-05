<template>
  <div class="viewNumberOne">
    <Category categoryCode=1></Category>
    <Product categoryCode=1></Product>
  </div>
</template>

<script>

  import Category from '@/components/Category'
  import Product from '@/components/Product'

export default {
  name: 'ViewNumberOne',
  
  components: { Category, Product },
  created() {
      this.$store.dispatch("getProductsApi");
  }
};
</script>