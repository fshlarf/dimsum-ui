<template>
  <div
    class="box-price md:h-[138px] w-full max-w-[330px] flex md:gap-4 gap-3 items-center mx-auto p-[12px] cursor-pointer"
    @click="$router.push(`/product/detail?id=${product.productId}`)"
  >
    <div
      class="w-[90px] h-[90px] lg:w-[104px] lg:h-[101px] overflow-hidden rounded-[8px]"
    >
      <img
        :src="product.imageLink"
        :alt="`dimsum-${product.productName}`"
        class="w-full h-full object-cover object-center mx-auto"
      />
    </div>
    <div class="w-[211px] space-y-[10px]">
      <div class="-mb-1">
        <p class="md:text-sm text-xs font-semibold one-line overflow-hidden">
          {{ product.productName }}
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
  methods: {
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
