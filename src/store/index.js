import Vue from 'vue'
import Vuex from 'vuex'
import  createPersistedState  from  'vuex-persistedstate'




Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu : null,
    rutas : [],
    
  },
  mutations: {
    setMenu(state,menu){
      state.menu = menu;
      },
    
    setRutas(state,rutas)
    {
      for (var data of rutas)
          {
             state.rutas.push(data);
          }
    },

    setSalida(state){
      state.menu = null
       },

   
  },

  getters:{
     getMenu(state){
       return state.menu;
     },
     getRuta(state){
      return state.rutas;
    },
    
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
