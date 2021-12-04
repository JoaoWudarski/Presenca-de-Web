import { createStore } from 'vuex'

export default createStore({
  state: {
  categories:   [{description: 'Celulares', id: '1'},         {description: 'Computadores', id: '1'}, 
                 {description: 'Limpeza', id: '2'},           {description: 'Eletrodomésticos', id: '2'}, 
                 {description: 'Televisões', id: '3'},        {description: 'Móveis', id: '3'},
                 {description: 'Infantil', id: '4'},          {description: 'Estudantil', id: '4'}],
  },
  mutations: {
  },
  actions: {
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
    }
  }
})