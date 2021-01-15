export const state = () => ({
  products: [],
})

export const mutations = {
  pushProduct(state, product) {
    state.products.push(product)
  },
  removeProduct(state, productId) {
    state.products = state.products.filter(
      (product) => product.id !== productId
    )
  },
  cleanCart(state) {
    state.products = []
  },
}

export const getters = {
  productsCount: (state) => state.products.length,
}
