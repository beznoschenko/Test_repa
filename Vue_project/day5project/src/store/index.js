import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    users: [],
    logined: { status: false }
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
    addComment(state, payload) {
      let now_date = new Date().toLocaleString()
      state.products[payload.index].comments.push({ user: state.logined.name, comment: payload.text, date: now_date })
    },
    clearComments(state, index) {
      state.products[index].comments = []
    },
    removeComment(state, payload) {
      state.products[payload.pindex].comments.splice(payload.cindex, 1)
    },
    registerUser(state, userData) {
      state.users.push(userData)
      console.log(state.users)
    },
    login_out(state) {
      state.logined.status = !state.logined.status
    },
    login(state, name) {
      state.logined.status = true
      state.logined.name = name
    },
    logout(state) {
      state.logined.status = false;
      delete state.logined.name;

    },
    clearAll(state) {
      state.products = [];
      state.users = [],
        state.logined = { status: false }
    }
  }
})