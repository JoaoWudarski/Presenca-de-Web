import { createStore } from 'vuex'

export default createStore({
  state: {
  categories:   [{description: 'Category 1', id: '1'}, {description: 'Category 2', id: '1'}, 
                 {description: 'Category 3', id: '2'}, {description: 'Category 4', id: '2'}, 
                 {description: 'Category 5', id: '3'}, {description: 'Category 6', id: '3'},
                 {description: 'Category 7', id: '4'}, {description: 'Category 8', id: '4'}],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})