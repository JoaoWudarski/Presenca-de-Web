
<template>
  <h1>{{ getCategoryById[0].description }} & {{ getCategoryById[1].description }}</h1>
</template>

<script>

  export default {
    name: "produtos",
    props: {
      categoryCode: String,
    },
    computed: {
      getCategoryById () {
        return this.$store.getters.getCategories(this.categoryCode)
      },
    }
  };
</script>