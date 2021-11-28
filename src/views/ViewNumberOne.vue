<template>
  <div class="viewNumberOne">
    <h1>View 1</h1>
    <Categories></Categories>
  </div>
</template>

<script>

  import Categories from '@/components/Categories'


export default {
  name: 'Home',
  
  components: { Categories },
};
</script>