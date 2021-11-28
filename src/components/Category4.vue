
<template>
  <v-container fill-height>
    <v-card class="mx-auto" max-width="910" max-height="81vh" color="grey">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(cat, i) in $store.state.categories" :key="i">
            <v-card
              v-if="cat.id == 4"
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
