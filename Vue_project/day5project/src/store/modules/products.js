export const moduleProduct =  {
    state:()=>( {
        products: [],
      }),
      getters: {
        getProduct: state => state.products,
      },
      mutations: {
        loadData(state, payload) {
          state.products = payload;
        },
      }
}