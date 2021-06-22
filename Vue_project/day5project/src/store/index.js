import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from "vuex-persistedstate";
import moduleUsers from './modules/users'
import moduleProduct from './modules/products'

Vue.use(Vuex)




export default new Vuex.Store({
  
  modules: {
    moduleProduct ,
    moduleUsers

  },
  state:{},
  getters:{},
  mutation:{},
  actions:{},

  
   //plugins: [createPersistedState()],

  // clearAll(state) {
  //   state.products = [];
  //   state.users = [],
  //     state.logined = { status: false }
  // }


})