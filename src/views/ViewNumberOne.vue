<template>
  <div class="viewNumberOne">
    <h1>View 1</h1>
    <Category1></Category1>
  </div>
</template>

<script>

  import Category1 from '@/components/Category1'

export default {
  name: 'Home',
  
  components: { Category1 },
};
</script>