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
  },
}

export const computedPrice = {
  computed: {
    computedPrice() {
      return this.price.toLocaleString() + ' ₽'
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
