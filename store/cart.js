export const state = () => ({
  products: [],
})

export const mutations = {
  pushProduct(state, product) {
    state.products.push(product)
  },
  removeProduct(state, productIndex) {
    state.products.splice(productIndex, 1)
  },
  cleanCart(state) {
    state.products = []
  },
}

export const getters = {
  productsCount: (state) => state.products.length,
}
