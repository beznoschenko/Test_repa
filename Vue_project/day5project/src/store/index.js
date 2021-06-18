import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    users: [],
    logined: {status: false}
  },
  getters: {
    getProduct: state => state.products,
    getLoginStatus: state => state.logined,
  },
  plugins: [createPersistedState()],
  mutations: {
    loadData(state, payload) {
      state.products = payload;
    },
    addComment(state,payload) {
      let now_date = new Date().toLocaleString()
      state.products[payload.index].comments.push({ user: state.logined.name, comment: payload.text, date: now_date })
    },
    clearComments(state, index){
      state.products[index].comments=[]
    },
    removeComment(state, payload){
      state.products[payload.pindex].comments.splice(payload.cindex, 1)
    },
    registerUser(state, userData){
      state.users.push(userData)
      console.log(state.users)
    },
    login_out(state){
      state.logined.status = !state.logined.status
    },
    login(state, index){
      if (state.logined.status){
        state.logined.name = state.users[index].f_name
        console.log(state.logined.name)
        }
        else{
          delete state.users[index].name
          console.log("Хуета")
        }
    },
    clearAll(state){
      state.products= [];
      state.users=[],
     state.logined= {status: false}
    }
  }
})