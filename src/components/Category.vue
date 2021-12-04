
<template>
  <h1>{{ getCategoryById[0].description }} & {{ getCategoryById[1].description }}</h1>
  <v-container fill-height>
    <v-card class="mx-auto" max-width="810" max-height="81vh" color="grey">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(cat, i) in getCategoryById" :key="i">
            <v-card
              width="380"
              height="20vh"
            >

              <v-img>
                <v-card-title v-text="cat.description"></v-card-title>
              </v-img>
            </v-card>

          </v-col>

        </v-row>
      </v-container>
    </v-card>
  </v-container>
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