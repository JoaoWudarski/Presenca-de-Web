
<template>
  <v-container fill-height>
    <v-card class="mx-auto" max-width="810" max-height="81vh" color="grey">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(product, i) in getProductsById" :key="i">
            <v-card
              width="380"
              height="20vh"
            >

              <v-img>
                <v-card-title v-text="product.nome"></v-card-title>
                <v-card-subtitle v-text="product.label"></v-card-subtitle>
                <v-card-header-text>Quantidade {{ product.quantidade }}</v-card-header-text>
                <v-card-actions>
                  <v-btn v-if="product.quantidade > 0" outlined rounded text @click="removeProduct(product.id)">Reduzir</v-btn>
                  <v-btn v-else outlined rounded text>Não há items</v-btn>
              </v-card-actions>
              <v-card-actions>
                  <v-btn v-if="product.quantidade < 50" outlined rounded text @click="addProduct(product.id)">aumentar</v-btn>
                  <v-btn v-else outlined rounded text>Limite excedido</v-btn>
              </v-card-actions>
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
      getProductsById () {
        return this.$store.getters.getProducts(this.categoryCode)
      },
    },
    methods: {
    removeProduct (idProduct) {
      this.$store.commit('reduceQuantity', idProduct)
    },
    addProduct (idProduct) {
      this.$store.commit('addQuantity', idProduct)
    },
  },
  };
</script>