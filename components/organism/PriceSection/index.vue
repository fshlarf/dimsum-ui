<template>
  <div class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5">
    <div class="text-center">
      <h1 class="text-[30px] font-bold md:block hidden">
        <span class="text-[#F6B205]">Daftar Variant &</span> Harga Dimsum
      </h1>
      <h1 class="text-[20px] font-bold md:hidden">
        <span class="text-[#F6B205]">Daftar Variant</span>
        <span class="text-[#B71A1B]">&</span> Harga Dimsum
      </h1>
      <div class="text-p md:text-sm text-xs text-[#555] md:mt-0 mt-3 leading-5">
        Berikut ini beragam variant dimsum beserta harga yang tersedia di
        Produsen Dimsum Medan.
      </div>
    </div>
    <div
      class="flex mt-5 justify-center items-center md:bg-[#F6B205]/20 rounded-[20px] w-full md:w-max mx-auto"
    >
      <div
        v-for="(category, id) in categories"
        :key="id"
        class="h-full py-[12px] px-[8px] md:p-[12px] rounded-l-[20px] rounded-r-[20px] cursor-pointer transition-all duration-200 ease-linear"
        :class="{
          'bg-[#F6B205]': category.value == filterProduct.categoryId,
        }"
        @click="selectCategory(category.value)"
      >
        <section class="flex items-center md:gap-[4px]">
          <img
            :src="[
              category.value == filterProduct.categoryId
                ? category.images + '-active.svg'
                : category.images + '.svg',
            ]"
            alt="icon"
            class="hidden md:block"
          />
          <p
            class="text-p md:text-sm text-xs font-bold md:pr-3 whitespace-nowrap"
            :class="[
              category.value == filterProduct.categoryId
                ? 'text-white'
                : 'text-[#F6B205]',
            ]"
          >
            {{ category.name }}
          </p>
        </section>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-5 justify-center"
    >
      <CardProduct
        v-for="(product, id) in products"
        :key="id"
        :product="product"
      />
    </div>

    <ButtonShow
      :btnText="`${!isShow ? 'Tampilkan Semua' : 'Tampilkan Lebih Sedikit'}`"
      :mode="`${!isShow ? 'top' : 'bottom'}`"
      @click-show="toggleShow(), (isShow = !isShow)"
    />
    <ModalInfo :is-show="isShowModalInfo" @onClose="onCloseInfo" />
  </div>
</template>

<script>
import ModalInfo from './views/ModalInfo.vue'
import ButtonShow from '~/components/atoms/ButtonShow'
import CardProduct from '~/components/product/card-product.vue'
export default {
  components: {
    ModalInfo,
    ButtonShow,
    CardProduct,
  },
  data() {
    return {
      isShowModalInfo: false,
      isShow: false,
      displayPriceDesktop: [],
      displayPriceMobile: [],
      handleLimitByeScreen: false,
      dataPrice: [
        {
          id: 1,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 2,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 3,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 4,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 5,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 6,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 7,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 8,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 9,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 10,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
      ],
      products: [],
      filterProduct: {
        limit: null,
        search: '',
        categoryId: 1,
      },
      categories: [
        {
          name: 'Aneka Dimsum',
          images: '/images/product/dimsum',
          value: 1,
        },
        {
          name: 'Varian Saus',
          images: '/images/product/sauce',
          value: 2,
        },
        {
          name: 'Menu Lainnya',
          images: '/images/product/other-menu',
          value: 3,
        },
      ],
    }
  },
  mounted() {
    // this.displayPriceDesktop = this.dataPrice.slice(0, 9)
    // this.displayPriceMobile = this.dataPrice.slice(0, 4)
    this.getProducts()
  },
  methods: {
    toggleShow() {
      if (!this.isShow) {
        this.showAll()
      } else {
        this.showLess()
      }
    },
    onCloseInfo() {
      this.isShowModalInfo = false
    },
    onClickInfo() {
      this.isShowModalInfo = true
    },
    showAll() {
      // this.displayPriceDesktop = this.dataPrice
      // this.displayPriceMobile = this.dataPrice
      this.handleLimitByeScreen = true
      this.getProducts()
    },
    showLess() {
      // this.displayPriceDesktop = this.dataPrice.slice(0, 9)
      // this.displayPriceMobile = this.dataPrice.slice(0, 4)
      this.handleLimitByeScreen = false

      this.getProducts()
    },
    async getProducts() {
      try {
        if (this.handleLimitByeScreen) {
          const res = await this.$axios.get('/customer/products', {
            params: (this.filterProduct = {
              ...this.filterProduct,
              limit: null,
            }),
          })
          this.products = res.data.data
        } else {
          const res = await this.$axios.get('/customer/products', {
            params: (this.filterProduct = {
              ...this.filterProduct,
              limit: this.limitProductWithScreen(),
            }),
          })
          this.products = res.data.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    selectCategory(category) {
      this.filterProduct = {
        ...this.filterProduct,
        page: 1,
        categoryId: category,
      }
      this.getProducts()
      this.limitProductWithScreen()
    },
    limitProductWithScreen(limitProduct) {
      let screen = window.innerWidth
      if (screen <= 767) {
        limitProduct = 3
      } else if (screen < 1023) {
        limitProduct = 6
      } else {
        limitProduct = 9
      }
      return limitProduct
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
