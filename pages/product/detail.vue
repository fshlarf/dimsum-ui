<template>
  <div
    class="px-[20px] py-[30px] md:px-[30px] md:py-[40px] lg:py-[50px] lg:px-[100px] xl:py-[74px] xl:px-[160px] min-h-screen bg-white"
  >
    <div class="max-w-5xl mx-auto">
      <nuxt-link to="/product">
        <img src="/icons/arrow-back.svg" alt="back" />
      </nuxt-link>
      <div
        class="mt-[24px] lg:mt-[44px] flex lg:flex-row flex-col gap-[24px] w-full"
      >
        <section
          class="w-full h-[228px] md:max-w-[400px] md:h-[280px] lg:max-w-[300px] lg:h-[330px] xl:max-w-[348px] xl:h-[418px] mx-auto rounded-[10px] overflow-hidden"
        >
          <img
            :src="product.productFileName"
            :alt="product.name"
            class="w-full h-full object-cover object-center"
            :id="`product-image-${this.product.id}`"
          />
        </section>
        <section class="w-full">
          <div class="flex items-center gap-3">
            <h1
              class="text-[#2D2D2D] font-bold text-base md:text-lg lg:text-[26px]"
            >
              {{ product.name }}
            </h1>
            <div
              v-if="product.categoryName == 'Aneka Dimsum'"
              class="text-[#B71A1B] bg-[#B71A1B1A]/10 rounded-[15px] border border-[rgba(183, 26, 27, 0.10] px-3 py-1 text-[12px] lg:text-[14px] font-bold"
            >
              Free Saus
            </div>
          </div>

          <div
            class="mt-[8px] lg:mt-[24px] flex items-start gap-8 overflow-x-auto overscroll-auto lg:overflow-visible lg:overscroll-none py-3 px-1 lg:p-0 hide-scrollbar"
          >
            <div
              v-for="(variant, id) in product.variants"
              :key="id"
              class="bg-white rounded-[10px] p-[12px] w-max"
              style="box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.35)"
            >
              <h2
                class="text-sm lg:text-base font-bold py-[6px] text-center rounded-[10px] uppercase"
                :class="`${
                  id === 0
                    ? 'text-[#C5900B] bg-[#F6B205]/[5%]'
                    : 'text-[#B71A1B] bg-[#F9F7F7]'
                }`"
              >
                HARGA PER {{ variant.packaging }}
              </h2>
              <section class="lg:space-y-[16px] mt-[22px]">
                <div
                  class="text-[#2D2D2D] text-sm lg:text-base grid grid-cols-5 items-center w-[200px] md:w-[230px] lg:w-[272px]"
                >
                  <p class="col-span-3">Isi</p>
                  <p class="col-span-2 font-bold">
                    {{ variant.quantity }} {{ variant.unit }}
                  </p>
                </div>
                <div
                  class="text-[#2D2D2D] text-sm lg:text-base grid grid-cols-5 items-center"
                >
                  <p class="col-span-3">Harga Reseller</p>
                  <p class="col-span-2 font-bold">
                    {{ toRupiah(variant.resellerPrice) }}
                  </p>
                </div>
                <div
                  class="text-[#2D2D2D] text-sm lg:text-base grid grid-cols-5 items-center"
                >
                  <p class="col-span-3">Harga Agent</p>
                  <p class="col-span-2 font-bold">
                    {{ toRupiah(variant.agentPrice) }}
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div class="mt-[20px] lg:mt-[32px]">
            <h3 class="text-[#2D2D2D] font-bold text-sm lg:text-base">
              Syarat & Ketentuan
            </h3>
            <section
              v-for="(variant, id) in product.variants"
              :key="id"
              class="mt-[16px]"
            >
              <hr class="mb-4" v-if="id > 0" />
              <h3
                class="uppercase text-sm lg:text-base font-semibold"
                :class="`${id === 0 ? 'text-[#C5900B]' : 'text-[#B71A1B]'}`"
              >
                Per {{ variant.packaging }}
              </h3>
              <div
                class="mt-[12px] space-y-[12px] text-sm font-medium text-[#474747]"
              >
                <p class="whitespace-pre-line" v-html="variant.description"></p>
              </div>
            </section>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=6281375126758"
            target="_blank"
            class=""
          >
            <button
              class="w-full bg-[#F6B205] text-white py-[14px] lg:py-[16px] text-sm lg:text-base font-semibold rounded-[10px] mt-[41px] hover:opacity-80"
            >
              Chat Admin Produsen Dimsum
            </button>
          </a>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { toRupiah } from '~/helpers/common.js'
export default {
  data() {
    return {
      product: {},
    }
  },
  mounted() {
    this.getProductById()
  },
  methods: {
    async getProductById() {
      try {
        const { id } = this.$route.query
        const response = await this.$axios.get(`/customer/products/${id}`)
        this.product = response.data.data
      } catch (error) {
        console.log(error)
      }
    },
    toRupiah,
  },
}
</script>
