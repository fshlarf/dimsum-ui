<template>
  <div>
    <div class="grid grid-cols-4 mt-5 gap-5 justify-center items-center">
      <div
        class="relative cursor-pointer w-[154px] h-[128px] md:w-[200px] md:h-[170px] xl:w-[264px] xl:h-[232px]"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
        @click="$emit('click')"
      >
        <img
          alt="dimsum-image"
          :id="`product-image-${product.id}`"
          class="w-full h-full rounded-[12px]"
        />
        <div
          v-if="isHover"
          class="text-p absolute bottom-0 left-0 w-full text-[#B71A1B] md:text-base text-xs font-medium bg-white bg-opacity-60 md:pl-[21px] pl-[5px] pt-[9px] pb-[9.5px] leading-5 text-center"
        >
          {{ product.name }}
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
  data() {
    return {
      isHover: false,
    }
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
              `product-image-${this.product.id}`
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
