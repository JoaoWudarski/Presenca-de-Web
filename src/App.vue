<template>
  <v-app>
    <v-system-bar app>
      <v-row justify="center">
        <strong> v-system-bar </strong>
      </v-row>
    </v-system-bar>
    
    <v-app-bar app>
      <v-row justify="center">
        <strong> v-app-bar </strong>
      </v-row>
    </v-app-bar>

    <v-card height="86vh">
      <v-navigation-drawer absolute permanent left>
        <v-container fill-height>
          <v-card-text>
            <center>
              <strong> v-navigation-drawer </strong>
            </center>
          </v-card-text>
        </v-container>
      </v-navigation-drawer>

      <v-container fill-height>
        <v-card-text>
          <center>
            <strong> v-content </strong>
          </center>
        </v-card-text>
      </v-container>
    </v-card>

    <v-footer height="35px" padless>
      <v-row class="text-center" justify="center">
        <strong> v-footer </strong>
      </v-row>
    </v-footer>
    
    <v-bottom-navigation horizontal align="center" justify="center">
      <v-card-text>
        <strong> v-bottom-navigation </strong>
      </v-card-text>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [],
    }),
  }
</script>