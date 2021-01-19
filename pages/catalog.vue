<template>
  <div class="container">
    <div class="catalog">
      <h1 class="catalog__header">Каталог</h1>
      <nav class="catalog__navbar">
        <ul class="catalog__categories">
          <li v-for="category in categories" :key="category.id">
            <nuxt-link
              :to="`/catalog/${category.id.toString()}`"
              class="catalog__link"
              active-class="catalog__link-active"
            >
              {{ category.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <SortSelector />
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import SortSelector from '~/components/sort-selector'
export default {
  components: { SortSelector },
  async asyncData({ $axios, redirect }) {
    const categories = await $axios.$get(
      'https://frontend-test.idaproject.com/api/product-category'
    )
    redirect(`/catalog/${categories[0].id.toString()}`)
    return { categories }
  },
}
</script>

<style lang="sass" scoped>
.container
  display: flex
  padding-right: 88px

.catalog
  padding-top: 32px
  padding-left: 88px

  min-width: 248px
  height: 100%

  &__header
    color: #1F1F1F
    margin: 0

  &__navbar
    margin-top: 24px

  &__categories
    li
      margin-top: 16px

  &__link
    color: #959DAD
    text-decoration: none

    &-active
      text-decoration: underline
      color: #1F1F1F
    &:hover
      color: #59606D
</style>
