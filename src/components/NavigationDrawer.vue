<template>
      <v-navigation-drawer absolute permanent left>
        <v-container fill-height>
          <v-card-text>
            <center>
              <v-toolbar-items>
                <center>
                    <v-btn flat>
                        <router-link to="/viewOne" tag="button">Teste 1</router-link>
                    </v-btn>
                </center>
                <center>
                    <v-btn flat>
                        <router-link to="/viewTwo" tag="button">Teste 2</router-link>
                    </v-btn>
                </center>
                <center>
                    <v-btn flat>
                        <router-link to="/viewThree" tag="button">Teste 3</router-link>
                    </v-btn>
                </center>
                <center>
                    <v-btn flat>
                        <router-link to="/viewFour" tag="button">Teste 4</router-link>
                    </v-btn>
                </center>
            </v-toolbar-items>
            </center>
          </v-card-text>
        </v-container>
      </v-navigation-drawer>
</template>

<script>
    export default{
        
    }

</script>