<template>
  <div
    class="box-price md:h-[138px] w-full max-w-[330px] flex md:gap-4 gap-3 items-center mx-auto p-[12px] cursor-pointer"
    @click="$router.push(`/product/detail?id=${product.id}`)"
  >
    <div
      class="w-[90px] h-[90px] lg:w-[104px] lg:h-[101px] overflow-hidden rounded-[8px]"
    >
      <img
        :id="`product-${product.id}`"
        :alt="`dimsum-${product.name}`"
        class="w-full h-full object-cover object-center mx-auto"
      />
    </div>
    <div class="w-[211px] space-y-[10px]">
      <div class="-mb-1">
        <p class="md:text-sm text-xs font-semibold one-line">
          {{ product.name }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-[#555555CC]/80 text-xs">
          Isi per {{ product.packaging }}
        </p>
        <p class="md:text-sm text-xs font-semibold">
          {{ product.quantity }} {{ product.unit }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-[#555555CC]/80 text-xs">Harga Reseller</p>
        <p class="md:text-sm text-xs font-semibold">
          {{ toRupiah(product.resellerPrice) }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-[#555555CC]/80 text-xs">Harga Agent</p>
        <p class="md:text-sm text-xs font-semibold">
          {{ toRupiah(product.agentPrice) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { toRupiah } from '~/helpers/common'

export default {
  props: {
    product: {
      typeof: Object,
      default: () => {},
    },
    category: {
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
    toRupiah,
  },
}
</script>

<style scoped>
.box-price {
  font-family: Poppins;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(246, 178, 5, 0.15);
}
</style>
