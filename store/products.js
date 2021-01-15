export const state = () => ({
  products: {},
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  sortProductsByPrice(state) {
    state.products = state.products.sort((a, b) => b.price - a.price)
  },
  sortProductsByRating(state) {
    state.products = state.products.sort((a, b) => b.rating - a.rating)
  },
}
