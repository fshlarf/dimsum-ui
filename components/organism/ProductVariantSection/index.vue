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
      class="flex mt-[20px] justify-center items-center md:bg-[#F6B205]/20 rounded-[20px] w-full md:w-max mx-auto"
    >
      <div
        v-for="(category, id) in categories"
        :key="id"
        class="h-full py-[12px] px-[8px] md:p-[12px] rounded-l-[20px] rounded-r-[20px] cursor-pointer transition-all duration-200 ease-linear"
        :class="{
          'bg-[#F6B205]': category.id == filterProduct.categoryId,
        }"
        @click="onSelectCategory(category)"
      >
        <section class="flex items-center md:gap-[4px]">
          <img
            :src="[
              category.id == filterProduct.categoryId
                ? '/images/product/' + category.name + '-active.svg'
                : '/images/product/' + category.name + '.svg',
            ]"
            alt="icon"
            class="hidden md:block"
          />
          <p
            class="text-p md:text-sm text-xs font-bold md:pr-3 whitespace-nowrap"
            :class="[
              category.id == filterProduct.categoryId
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
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-[50px]"
    >
      <CardProduct
        v-for="(product, id) in products"
        :key="id"
        :product="product"
        :category="selectedCategory"
      />
    </div>

    <ButtonShow
      v-if="products.length > limitProductByScreenSize()"
      :btnText="`${!isShow ? 'Tampilkan Semua' : 'Tampilkan Lebih Sedikit'}`"
      :mode="`${!isShow ? 'top' : 'bottom'}`"
      @click-show="toggleShow(), (isShow = !isShow)"
    />
    <ModalInfo :is-show="isShowModalInfo" @onClose="onCloseInfo" />
  </div>
</template>

<script>
import ModalInfo from './views/ModalInfo'
import ButtonShow from '~/components/atoms/ButtonShow'
import CardProduct from '~/components/product/card-product'
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
      handleLimitByScreen: false,
      products: [],
      filterProduct: {
        limit: null,
        search: '',
        categoryId: 1,
        packaging: 'Box',
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
      packagingList: [
        {
          name: 'Per Box',
          value: 'Box',
        },
        {
          name: 'Per Mika',
          value: 'Mika',
        },
        {
          name: 'Kemasan Plastik',
          value: 'Plastik',
        },
      ],
      selectedCategory: {},
    }
  },
  mounted() {
    this.getCategories()
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
      this.handleLimitByScreen = true
      this.getProducts()
    },
    showLess() {
      this.handleLimitByScreen = false

      this.getProducts()
    },
    async getCategories() {
      try {
        const res = await this.$axios.get('/customer/categories')
        this.categories = res.data.data
        this.filterProduct = {
          ...this.filterProduct,
          categoryId: this.categories[0].id,
        }
        this.selectedCategory = this.categories[0]
        this.getProducts()
      } catch (error) {
        console.log(error)
      }
    },
    async getProducts() {
      try {
        if (this.handleLimitByScreen) {
          const res = await this.$axios.get('/customer/products', {
            params: (this.filterProduct = {
              ...this.filterProduct,
              limit: 999999,
            }),
          })
          this.products = res.data.data
        } else {
          const res = await this.$axios.get('/customer/products', {
            params: (this.filterProduct = {
              ...this.filterProduct,
              limit: this.limitProductByScreenSize(),
            }),
          })
          this.products = res.data.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    onSelectCategory(category) {
      this.filterProduct = {
        ...this.filterProduct,
        page: 1,
        categoryId: category.id,
      }
      this.selectedCategory = category
      this.getProducts()
    },
    onSelectPackaging(packaging) {
      this.filterProduct = {
        ...this.filterProduct,
        page: 1,
        packaging: packaging,
      }
      this.getProducts()
    },
    limitProductByScreenSize() {
      let screen = window.innerWidth
      let limitProduct = 3
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
