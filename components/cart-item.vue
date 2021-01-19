<template>
  <div class="cart-item">
    <img
      :src="generatePhotoLink(photo)"
      class="cart-item__image"
      alt="Изображение товара"
    />
    <div class="cart-item__specifications">
      <div class="cart-item__name">{{ name }}</div>
      <b class="cart-item__price">{{ computedPrice }}</b>

      <div class="cart-item__rate">
        <img src="~/assets/star.svg" alt="Звезда" />
        <b>{{ rating }}</b>
      </div>
    </div>
    <button class="cart-item__delete-button" @click="deleteItem" />
  </div>
</template>

<script>
import {
  computedPrice,
  generatePhotoLink,
  productPropsSchema,
} from '~/assets/ustils/mixins/product'

export default {
  mixins: [productPropsSchema, computedPrice, generatePhotoLink],
  methods: {
    deleteItem() {
      this.$store.commit('cart/removeProduct', this.index)
    },
  },
}
</script>

<style lang="sass" scoped>
.cart-item
  display: flex
  padding: 12px 22px 15px 25px
  align-items: center

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
  border-radius: 8px
  margin-bottom: 12px
  &__delete-button
    margin-left: auto
    width: 20px
    height: 22px

    border: none
    background: url("~assets/trash.svg") white

    cursor: pointer
  &__name
    color: #59606D
  &__price
    display: block
    margin-top: 6px
  &__specifications
    font-size: 14px
    width: 170px
    margin-left: 34px
  &__image
    width: 70px
    height: 90px
    object-fit: cover

  &__rate
    color: #F2C94C
    font-size: 10px

    display: flex
    width: 34px
    height: 20px

    margin-top: 16px
    b
      margin-top: 3px
</style>
