<template>
  <div
    id="product-variant"
    class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5"
  >
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
          'bg-[#F6B205]': category.id == filterProductVariant.categoryId,
        }"
        @click="onSelectCategory(category)"
      >
        <section class="flex items-center md:gap-[4px]">
          <img
            :src="[
              category.id == filterProductVariant.categoryId
                ? '/images/product/' + category.name + '-active.svg'
                : '/images/product/' + category.name + '.svg',
            ]"
            alt="icon"
            class="hidden md:block"
          />
          <p
            class="text-p md:text-sm text-xs font-bold md:pr-3 whitespace-nowrap"
            :class="[
              category.id == filterProductVariant.categoryId
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
      v-if="!isLoading"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-[20px] lg:mt-[40px]"
    >
      <CardProduct
        v-for="(product, id) in products"
        :key="id"
        :product="product"
        :category="selectedCategory"
      />
    </div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-[20px] lg:mt-[40px]"
    >
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
    </div>

    <ButtonShow
      v-if="!isLoading && pagination.totalResults > filterProductVariant.limit"
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
import CardProduct from './views/variant-card.vue'
import CardShimmer from './views/variant-card-shimmer.vue'
export default {
  components: {
    ModalInfo,
    ButtonShow,
    CardProduct,
    CardShimmer,
  },
  data() {
    return {
      isShowModalInfo: false,
      isShow: false,
      displayPriceDesktop: [],
      displayPriceMobile: [],
      handleLimitByScreen: false,
      products: [],
      pagination: {},
      filterProductVariant: {
        limit: null,
        search: '',
        categoryId: 1,
        packaging: '',
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
          value: 'box',
        },
        {
          name: 'Per Mika',
          value: 'mika',
        },
        {
          name: 'Kemasan Plastik',
          value: 'plastik',
        },
      ],
      selectedCategory: {},
      isLoading: true,
    }
  },
  beforeMount() {
    this.limitVariantByScreenSize()
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
      this.filterProductVariant.limit = 9999
      this.getProducts()
    },
    showLess() {
      this.limitVariantByScreenSize()
      this.getProducts()
    },
    async getCategories() {
      this.isLoading = true
      try {
        const res = await this.$axios.get('/customer/categories')
        this.categories = res.data.data
        this.filterProductVariant = {
          ...this.filterProductVariant,
          categoryId: this.categories[0].id,
        }
        this.selectedCategory = this.categories[0]
        this.getProducts()
      } catch (error) {
        console.log(error)
      }
    },
    async getProducts() {
      this.isLoading = true
      try {
        const res = await this.$axios.get('/customer/product-variants', {
          params: this.filterProductVariant,
        })
        this.products = res.data.data
        this.pagination = res.data.pagination
      } catch (error) {
        console.log(error)
      }
      this.isLoading = false
    },
    onSelectCategory(category) {
      this.filterProductVariant = {
        ...this.filterProductVariant,
        page: 1,
        categoryId: category.id,
      }
      this.selectedCategory = category
      this.getProducts()
    },
    onSelectPackaging(packaging) {
      this.filterProductVariant = {
        ...this.filterProductVariant,
        page: 1,
        packaging: packaging,
      }
      this.getProducts()
    },
    limitVariantByScreenSize() {
      let screen = window.innerWidth
      let limitByScreen = 4
      if (screen <= 767) {
        limitByScreen = 4
      } else if (screen < 1023) {
        limitByScreen = 6
      } else {
        limitByScreen = 9
      }
      this.filterProductVariant.limit = limitByScreen
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
