<template>
        <v-app-bar flat app>
            <v-toobar-tittle>
                <router-link class="font-weight-light" to="/" tag="button">Home</router-link>
            </v-toobar-tittle>

            <v-spacer></v-spacer>

            <v-toolbar-items right>
                <v-btn >
                    <router-link to="/viewOne" tag="button">Teste 1</router-link>
                </v-btn>
                <v-btn >
                    <router-link to="/viewTwo" tag="button">Teste 2</router-link>
                </v-btn>
                <v-btn >
                    <router-link to="/viewThree" tag="button">Teste 3</router-link>
                </v-btn>
                <v-btn>
                    <router-link to="/viewFour" tag="button">Teste 4</router-link>
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
</template>

<script>
    export default{
        
        
        
    }

</script>
