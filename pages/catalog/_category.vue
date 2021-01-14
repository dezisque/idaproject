<template>
  <div class="products">
    <Product
      v-for="product in products"
      :key="product.id"
      :photo="product.photo"
      :name="product.name"
      :price="product.price"
      :product-id="product.id"
    />
  </div>
</template>

<script>
import Product from '~/components/product'

export default {
  components: { Product },
  watchQuery: true,
  computed: {
    products() {
      return this.$store.state.products.products
    },
  },
  watch: {
    $route() {
      this.getProducts()
    },
  },
  created() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      this.$store.commit(
        'products/setProducts',
        await this.$axios.$get(
          `https://frontend-test.idaproject.com/api/product?category=${this.$route.params.category}`
        )
      )
    },
  },
}
</script>

<style lang="sass" scoped>
.products
  width: auto
  display: flex
  flex-wrap: wrap
  justify-content: space-between
</style>
