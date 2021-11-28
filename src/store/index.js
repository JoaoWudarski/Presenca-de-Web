import { createStore } from 'vuex'

export default createStore({
  state: {
    categories: [{description: 'Category 1', route: '/'},     {description: 'Category 2', route: '/'}, 
               {description: 'Category 3', route: 'rota1'}, {description: 'Category 4', route: 'rota1'}, 
               {description: 'Category 5', route: 'rota2'}, {description: 'Category 6', route: 'rota2'},
               {description: 'Category 7', route: 'rota3'}, {description: 'Category 8', route: 'rota3'}],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})