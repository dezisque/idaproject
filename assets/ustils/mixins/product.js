export const productPropsSchema = {
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
    index: {
      type: Number,
      default: undefined,
    },
  },
}

export const computedPrice = {
  filters: {
    formatPrice(price) {
      return price.toLocaleString() + ' ₽'
    },
  },
}

export const generatePhotoLink = {
  methods: {
    generatePhotoLink(photo) {
      return `https://frontend-test.idaproject.com${photo}`
    },
  },
}
