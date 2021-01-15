export const state = () => ({
  products: [],
})

export const mutations = {
  pushProduct(state, product) {
    state.products.push(product)
  },
  removeProduct(state, productId) {
    state.products = state.product.filter((product) => product.id !== productId)
  },
}

export const getters = {
  productsCount: (state) => state.products.length,
}
