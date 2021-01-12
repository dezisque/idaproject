<template>
  <header class="header">
    <b class="header__title">TestList</b>
    <Cart />
  </header>
</template>

<script>
export default {}
</script>

<style lang="sass">
.header
  display: flex
  justify-content: space-between

  padding: 18px 108px 20px 88px

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05)
  border-radius: 0px 0px 8px 8px
  &__title
    font-size: 22px
    color: #59606D
</style>
