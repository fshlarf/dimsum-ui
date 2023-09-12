<template>
  <div>
    <div
      class="relative cursor-pointer w-[154px] h-[128px] md:w-[200px] md:h-[170px] xl:w-[264px] xl:h-[232px] overflow-hidden rounded-[12px]"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      @click="$router.push(`/product/detail?id=${product.id}`)"
    >
      <img
        :src="product.imageLink"
        alt="dimsum-image"
        :id="`product-image-${product.id}`"
        class="w-full h-full object-cover object-center"
      />
      <div
        class="text-p absolute bottom-0 left-0 w-full text-[#B71A1B] md:text-base text-xs font-medium bg-white bg-opacity-60 text-center py-[9px] leading-5"
      >
        {{ product.name }}
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
}
</script>
