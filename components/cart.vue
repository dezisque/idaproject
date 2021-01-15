<template>
  <div class="cart">
    <img src="~/assets/cart.svg" alt="корзина" />
    <b v-if="cartItemsCounter">{{ cartItemsCounter }}</b>
  </div>
</template>

<script>
export default {
  computed: {
    cartItemsCounter() {
      return this.$store.getters['cart/productsCount']
    },
  },
}
</script>

<style lang="sass" scoped>
.cart
  position: relative
  img
    cursor: pointer
    width: 24px
    height: 26px
  b
    width: 12px
    height: 12px

    box-sizing: border-box
    padding-top: 1px

    text-align: center

    position: absolute
    top: -3px
    right: -3px

    font-size: 8px
    line-height: 10px

    color: white
    background-color: #959DAD
    border-radius: 50%
</style>
