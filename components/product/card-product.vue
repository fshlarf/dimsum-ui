<template>
  <div
    class="box-price md:h-[138px] h-[116px] w-full max-w-[330px] flex md:gap-4 gap-3 justify-center items-center mx-auto"
  >
    <div>
      <img
        :id="`product-${product.id}`"
        :alt="`dimsum-${product.name}`"
        class="w-[90px] h-[90px] lg:w-[104px] lg:h-[101px]"
      />
    </div>
    <div class="flex flex-col lg:gap-5 gap-3">
      <div class="flex lg:gap-6 md:gap-1 gap-3">
        <div class="space-y-1">
          <h2 v-if="product.categoryId === 1">Variant Dimsum</h2>
          <h2 v-else-if="product.categoryId === 2">Variant Saus</h2>
          <h2 v-else>Variant Menu</h2>
          <h3 class="md:text-sm text-xs">{{ product.name }}</h3>
        </div>
        <div class="space-y-1">
          <h2 v-if="product.categoryId === 1">Isi per box</h2>
          <h2 v-else>Isi</h2>
          <h3 class="md:text-sm text-xs">
            {{ product.quantity }} {{ product.unit }}
          </h3>
        </div>
      </div>
      <div class="flex lg:gap-6 md:gap-1 gap-3">
        <div class="space-y-1">
          <h2>Harga Reseller</h2>
          <h3 class="md:text-sm text-xs">{{ product.resellerPrice }}</h3>
        </div>
        <div class="space-y-1">
          <h2>Harga Agent</h2>
          <h3 class="md:text-sm text-xs">{{ product.agentPrice }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      typeof: Object,
      default: () => {},
    },
  },
  watch: {
    product(val) {
      this.getProductImage(val.fileName)
    },
  },
  mounted() {
    this.getProductImage(this.product.fileName)
  },
  methods: {
    async getProductImage(fileName) {
      if (fileName) {
        const url = `bucket/images/products/${fileName}`
        await this.$axios
          .get(url, {
            responseType: 'blob',
          })
          .then((response) => {
            const responseType = response.headers['content-type']
            const responseData = response.data

            // Convert the response data to a Blob
            const blob = new Blob([responseData], { type: responseType })

            // Create a new File object with the Blob
            const imageFile = new File([blob], fileName, {
              type: responseType,
            })

            const srcImage = URL.createObjectURL(imageFile)
            const bannerImage = document.getElementById(
              `product-${this.product.id}`
            )
            bannerImage.src = srcImage
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
  },
}
</script>

<style scoped>
.box-price {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(246, 178, 5, 0.15);
}
h2 {
  color: rgba(85, 85, 85, 0.8);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
}
h3 {
  color: #2d2d2d;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
}
</style>
