export default{
  namespaced: true,
    state:() => ({
        products: [],
      }),
      getters: {
        getProduct: state => state.products,
      },
      mutations: {
        loadData(state,payload) {
          state.products = payload;
        },
        addComment(state, payload) {
            let now_date = new Date().toLocaleString()
            let status = this.state.moduleUsers.logined.user.f_name
            state.products[payload.index].comments.push({ user: status, comment: payload.text, date: now_date })
        },
        clearComments(state, index) {
            state.products[index].comments = []
        },
        removeComment(state, payload) {
            state.products[payload.pindex].comments.splice(payload.cindex, 1)
        },
      },
      
      actions:{}
}