<template>
  <div class="product">
    <div class="product__view">
      <div class="product__rate">
        <img src="~/assets/star.svg" alt="Звезда" />
        <b>{{ rating }}</b>
      </div>
      <img
        :src="`https://frontend-test.idaproject.com${photo}`"
        class="product__image"
      />
      <button class="product__add-to-cart" @click="addProductToCart"></button>
    </div>

    <div class="product__name">{{ name }}</div>
    <b class="product__price">{{ computedPrice }}</b>
  </div>
</template>

<script>
export default {
  props: {
    productId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  computed: {
    computedPrice() {
      return this.price.toLocaleString() + ' ₽'
    },
  },
  methods: {
    addProductToCart() {
      this.$store.commit('cart/pushProduct', {
        id: this.productId,
        name: this.name,
        price: this.price,
        photo: this.photo,
        rating: this.rating,
      })
    },
  },
}
</script>

<style lang="sass">
.product
  box-sizing: border-box
  position: relative

  height: 272px
  width: 264px

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
  border-radius: 8px

  padding: 17px 18px 16px 16px
  margin-bottom: 16px

  &__view
    display: flex
    align-items: center
    justify-content: space-between
    position: relative

  &__rate
    position: absolute
    top: 0
    color: #F2C94C
    font-size: 10px
    line-height: 13px

    display: flex
    width: 34px
    height: 20px

    b
      margin-top: 3px

  &__add-to-cart
    position: absolute
    top: 0
    right: 0

    outline: none
    border: none

    width: 12px
    height: 14px

    background: url('~assets/cart.svg')
    background-size: cover

    &:hover
      background: url('~assets/cart-grey.svg')
      cursor: pointer

  &__image
    width: 142px
    height: 180px

    display: block

    margin-left: auto
    margin-right: auto

    object-fit: cover

  &__name
    color: #59606D
    font-size: 14px

    margin-top: 16px
    margin-bottom: 6px

  &__price
    color: #1F1F1F
    font-size: 14px
</style>
