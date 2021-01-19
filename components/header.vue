<template>
  <header class="header">
    <b class="header__title">TestList</b>
    <Cart />
  </header>
</template>

<script>
import Cart from '~/components/cart'
export default {
  components: { Cart },
}
</script>

<style lang="sass">
.header
  display: flex
  justify-content: space-between

  padding: 18px 108px 20px 88px

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
  border-radius: 0 0 8px 8px
  &__title
    font-size: 22px
    color: #59606D
</style>
