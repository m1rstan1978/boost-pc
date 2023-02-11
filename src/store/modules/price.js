export default {
  state: {
    price: 0
  },
  getters: {
    getPrice (state) {
      return state.price
    }
  },
  mutations: {
    updatePrice (state, price) {
      state.price = price
    }
  }
}
