<template>
  <div
    class="max-w-[1120px] md:mt-[52px] mt-6 2xl:mx-auto lg:mx-[161px] md:mx-10"
  >
    <div class="md:hidden w-full">
      <Carousel :product-list="products" :is-loading="isLoading" />
    </div>
    <div
      class="md:flex md:justify-between flex-nowrap justify-center md:pt-[30px] w-full"
    >
      <div class="lg:w-[514px] md:w-[314px] md:pt-0 pt-3">
        <div class="relative lg:h-[176.2px]">
          <img
            src="~/assets/atoms/Decore-header.svg"
            class="absolute md:bottom-0 md:-left-2 md:transform md:-translate-x-2 md:block hidden"
            alt="decore-dekstop"
          />
          <h1
            class="lg:text-[40px] md:text-2xl text-[22px] font-bold lg:leading-[54px] md:text-left text-center px-5 md:px-0 lg:pb-0 pb-2"
          >
            Penghasilan
            <span class="text-[#F6B205]">Puluhan Juta</span> Perbulan Walau
            Hanya <br /><span class="text-[#F6B205]">Di Rumah Saja</span>
          </h1>
          <img
            src="~/assets/atoms/Decore-mobile.svg"
            class="md:hidden absolute bottom-0 left-[55%] transform -translate-x-[55%]"
            alt="decore-mobile"
          />
        </div>
        <div
          class="text-p text-[#555555] lg:text-base text-xs lg:px-2 md:px-0 px-3 lg:mt-6 mt-3 lg:leading-7 leading-[22px] md:text-left text-center md:mx-0 mx-5"
        >
          Paket usaha paling terjangkau dengan ratusan Mitra yang sudah tersebar
          di berbagai daerah
        </div>
        <div
          class="btn flex gap-3 lg:h-11 h-10 lg:mt-6 mt-5 md:mx-0 mx-auto md:justify-start justify-center font-semibold lg:mb-0 mb-5"
        >
          <a
            href="https://api.whatsapp.com/send?phone=6281375126758"
            target="_blank"
            class="bg-[#F6B205] text-white lg:!text-base !text-sm !rounded-[10px] !px-4 flex items-center justify-center"
          >
            Gabung Mitra
          </a>
          <button
            class="border-[2px] border-[#F6B205] text-[#F6B205] lg:text-base text-sm rounded-[10px] px-4"
            @click="scrollToProductSection"
          >
            Lihat Produk
          </button>
        </div>
      </div>
      <div class="relative md:block hidden">
        <img
          src="~/assets/atoms/Rectangle-header.svg"
          class="lg:w-[338px] w-[250px] mr-[30px]"
          alt="Rectangle-header"
        />
        <div class="absolute -top-[30px] right-0 z-10">
          <Carousel :product-list="products" :is-loading="isLoading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '~/components/organism/HeaderSection/views/carousel.vue'

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      filterProduct: {
        page: 1,
        limit: 5,
        categoryId: 1,
      },
      products: [],
      isLoading: true,
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    scrollToProductSection() {
      const productSection = document.getElementById('product')
      productSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    },
    async getProducts() {
      this.isLoading = true
      try {
        const res = await this.$axios.get('/customer/products/favorited')
        this.products = res.data.data
      } catch (error) {
        console.log(error)
      }
      this.isLoading = false
    },
  },
}
</script>

<style>
h1 {
  font-family: 'Quicksand', sans-serif;
}
.text-p {
  font-family: Poppins;
}
.btn {
  font-family: 'Montserrat', sans-serif;
}
</style>
