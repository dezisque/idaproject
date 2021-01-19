<template>
  <div>
    <div class="cart" @click="openSideCart">
      <img src="~/assets/cart.svg" alt="корзина" />
      <b v-if="cartItemsCounter">{{ cartItemsCounter }}</b>
    </div>
    <div v-if="isSideCartVisible" class="blur" @click="closeSideCart" />
    <aside v-if="isSideCartVisible" class="side-cart">
      <div class="side-cart__title">
        <b>Корзина</b>
        <button class="side-cart__close-button" @click="closeSideCart" />
      </div>
      <div v-if="!cartItemsCounter && !ordered" class="side-cart_empty">
        Пока что вы ничего не добавлили в корзину.
        <button class="side-cart__button" @click="closeSideCart">
          Перейти к выбору
        </button>
      </div>
      <div v-if="cartItemsCounter && !ordered" class="side-cart_not-empty">
        <div class="side-cart__subtitle">Товары в корзине</div>
        <CartItem
          v-for="(item, index) in cartItems"
          :key="index"
          :photo="item.photo"
          :name="item.name"
          :price="item.price"
          :product-id="item.id"
          :rating="item.rating"
          :index="index"
        />
        <div class="side-cart__subtitle">Оформить заказ</div>
        <form class="side-cart__order-form">
          <label>
            <input type="text" placeholder="Ваше имя" />
          </label>
          <label>
            <input type="text" placeholder="Телефон" />
          </label>
          <label>
            <input type="text" placeholder="Адрес" />
          </label>
          <button class="side-cart__button" type="button" @click="submitForm">
            Отправить
          </button>
        </form>
      </div>
      <div v-if="ordered" class="side-cart_ordered">
        <img src="~assets/ok-emoji.png" alt="Успешно" />
        <b>Заявка успешно отправлена</b>
        <div class="side-cart__subtitle">
          Вскоре наш менеджер свяжется с Вами
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import CartItem from '~/components/cart-item'
export default {
  components: { CartItem },
  data() {
    return {
      isSideCartVisible: false,
      ordered: false,
    }
  },
  computed: {
    cartItemsCounter() {
      return this.$store.getters['cart/productsCount']
    },
    cartItems() {
      return this.$store.state.cart.products
    },
  },
  methods: {
    openSideCart() {
      this.isSideCartVisible = true
    },
    closeSideCart() {
      this.isSideCartVisible = false
    },
    submitForm() {
      this.ordered = true
      this.$store.commit('cart/cleanCart')
      setTimeout(() => (this.ordered = false), 2000)
    },
  },
}
</script>

<style lang="sass">
.side-cart
  position: fixed
  top: 0
  right: 0
  z-index: 1000

  width: 460px
  box-sizing: border-box

  padding: 52px 48px 0 48px
  background: white
  height: 100vh

  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05)
  border-radius: 8px 0 0 8px

  overflow-y: auto
  &_ordered
    display: flex
    flex-direction: column
    align-items: center
    img
      margin-top: 360px
    b
      font-size: 24px
      margin-top: 24px
      margin-bottom: 2px

  &__order-form
    input
      width: 100%
      height: 50px
      padding: 14px 0 15px 14px
      box-sizing: border-box
      margin-top: 16px
      border-radius: 8px
      border: none
      background-color: #F8F8F8
  &_empty
    font-size: 22px

  &__subtitle
    font-size: 18px
    color: #59606D
    margin-bottom: 16px

  &__close-button
    padding: 0
    width: 14px
    height: 14px

    margin-left: auto

    background-image: url("~assets/close.svg")
    border: none
    background-color: white

    cursor: pointer
  &__title
    font-size: 32px
    margin-bottom: 24px
    display: flex
    align-items: center

  &__button
    width: 100%
    height: 50px

    margin-top: 24px
    margin-bottom: 210px

    background-color: #1F1F1F
    border-radius: 8px
    border: none

    color: white
    font-size: 16px

    cursor: pointer

    &:hover
      background-color: #59606D
.blur
  position: fixed
  opacity: 80%
  background-color: white
  top: 0
  left: 0
  z-index: 900

  width: 100%
  height: 100%

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
