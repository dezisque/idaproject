<template>
  <div class="sort">
    Сортировать по:
    <span @click="toggleFilterVisibility">{{ sortRule }}</span>
    <ul v-if="isFilterVisible" class="select">
      <li @click="sortByPrice('цене')">По цене</li>
      <li @click="setSortingRule('популярности')">По популярности</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortRule: 'цене',
      isFilterVisible: false,
    }
  },
  methods: {
    toggleFilterVisibility() {
      this.isFilterVisible = !this.isFilterVisible
    },
    setSortingRule(rule) {
      this.isFilterVisible = false
      this.sortRule = rule
    },
    sortByPrice(rule) {
      this.setSortingRule(rule)
      this.$store.commit('products/sortProductsByPrice')
    },
  },
}
</script>

<style lang="sass" scoped>
.sort
  text-align: right
  position: relative

  margin-top: 42px
  margin-bottom: 34px
  span
    color: #59606D
    cursor: pointer
    &::after
      content: url(~assets/select-arrow.svg)
      margin-left: 4px

.select
  width: 160px

  text-align: left
  color: #959DAD

  position: absolute
  right: 0
  top: 15px
  z-index: 5

  padding-top: 8px
  padding-bottom: 8px

  background: white
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
  border-radius: 8px

  li
    font-size: 14px
    padding: 4px 0 4px 12px
    &:hover
      background-color: #F8F8F8
      color: #1F1F1F
      cursor: pointer
</style>
