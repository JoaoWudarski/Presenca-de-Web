import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    categories:   [{description: 'Celulares', id: '1'},         {description: 'Computadores', id: '1'}, 
                  {description: 'Limpeza', id: '2'},           {description: 'Eletrodomésticos', id: '2'}, 
                  {description: 'Televisões', id: '3'},        {description: 'Móveis', id: '3'},
                  {description: 'Infantil', id: '4'},          {description: 'Estudantil', id: '4'}],

    products:     [],
    },
  
  mutations: {
    reduceQuantity(state, id){
      var ind;
      state.products.find((prod, index) => {
        if (prod.id == id) { ind = index }
      }),
      state.products[ind].quantidade--
      return state.products[ind]
    },
    addQuantity(state, id){
      var ind;
      state.products.find((prod, index) => {
        if (prod.id == id) { ind = index }
      }),
      state.products[ind].quantidade++
      return state.products[ind]
    },
    cathProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    getProductsApi({ commit }) {
      axios.get('https://api-af-web.herokuapp.com/produtos')
          .then(response => {
              commit('cathProducts', response.data)
          }).catch(err => {
            console.log(err);
          })
    }
  },
  modules: {
  },
  getters:{
    getCategories: (state) => (id) => {
      const categories = [];
      state.categories.forEach((c) => {
        if(c.id == id){
          categories.push(c);
        }
      })      
      return categories;
    },
    getProducts: (state) => (categoria) => {
      const products = [];
      state.products.forEach((prod) => {
        if(prod.categoria == categoria){
          products.push(prod);
        }
      })      
      return products;
    }
  }
})