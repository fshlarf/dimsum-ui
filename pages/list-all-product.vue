<template>
  <div
    class="w-full min-h-screen px-[20px] py-[30px] md:px-[40px] md:py-[35px] lg:px-[100px] xl:px-[160px] lg:py-[74px]"
  >
    <nuxt-link to="/">
      <img src="/icons/arrow-back.svg" alt="back" />
    </nuxt-link>
    <header class="mt-[54px] flex items-center justify-between relative">
      <section class="flex items-center gap-[8px] md:gap-[12px]">
        <h1
          class="text-base md:text-lg lg:text-[28px] font-bold whitespace-nowrap"
        >
          <span v-if="filterProduct.categoryId == null">All Product</span>
          <span v-else-if="filterProduct.categoryId == 1">Dimsum</span>
          <span v-else-if="filterProduct.categoryId == 3">Menu Lainnya</span>
        </h1>
        <div
          class="flex justify-center items-center text-center bg-[#F6B205]/[25%] text-[#F6B205] rounded-full w-8 h-8 p-1"
        >
          <p class="text-xs md:text-sm lg:text-[18px]">
            {{ products.list.length }}
          </p>
        </div>
      </section>
      <section class="flex gap-[24px] items-center">
        <div
          class="absolute top-[140%] left-0 right-0 lg:relative border-[1px] border-[#645D5D]/20 rounded-[6px] lg:rounded-[12px] flex items-center gap-[10px] xl:gap-[20px] bg-white lg:w-max pl-[10px] md:pl-[15px] lg:pl-[20px] pr-[10px] md:pr-[20px] justify-between"
        >
          <section>
            <img
              src="/icons/search.svg"
              alt="search"
              class="absolute top-1/2 -translate-y-1/2 w-max h-full py-[12px] lg:py-[10px]"
            />
            <input
              type="text"
              placeholder="Search here"
              class="focus:outline-none pl-[32px] lg:pl-[52px] py-[15px] lg:py-[10px] rounded-[12px] lg:w-[200px] xl:w-[400px] text-xs lg:text-base"
              v-model="filterProduct.search"
              @keyup.enter="onSearchProduct"
            />
          </section>
          <section
            class="flex py-[10px] items-center gap-[4px] cursor-pointer text-xs lg:text-base"
            @click="isShowCategory = !isShowCategory"
          >
            <p class="text-[#A0A3BD]">All product</p>
            <img src="/icons/chevron-down.svg" alt="chevron" />
          </section>
          <div v-show="isShowCategory" class="absolute top-[110%] right-0 z-40">
            <div
              class="bg-white p-[16px] space-y-[8px] rounded-[8px]"
              style="box-shadow: 0px 4px 8px 0px rgba(160, 163, 189, 0.2), border: 1px solid rgba(160, 163, 189, 0.10);"
            >
              <section
                v-for="(category, id) in categories"
                :key="id"
                class="text-sm"
                @click="onSelectCategory(category.value)"
              >
                <p
                  class="py-[8px] px-[16px] rounded-[6px] cursor-pointer"
                  :class="[
                    category.value == filterProduct.categoryId
                      ? 'text-[#F6B205] bg-[#F6B205]/[13%]'
                      : 'text-[#66738F]',
                  ]"
                >
                  {{ category.name }}
                </p>
              </section>
            </div>
          </div>
        </div>
        <div
          class="bg-[#F6B205] rounded-[10px] py-[10px] px-[16px] flex items-center gap-[4px] w-max"
        >
          <img src="/icons/download.svg" alt="download" />
          <p class="text-base text-white whitespace-nowrap">Download Catalog</p>
        </div>
      </section>
    </header>
    <div class="mt-[80px] lg:mt-0 w-full">
      <div
        class="grid grid-rows-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 gap-5 jutify-items-center justify-center items-center mx-auto"
      >
        <CardProduct
          v-for="(product, id) in products.list"
          :key="id"
          :product="product"
          @click="goToDetailsProduct(product.id)"
        />
      </div>
    </div>
    <footer v-if="products.list.length > 0" class="mt-[50px] max-w-max mx-auto">
      <Pagination
        :is-loading="isLoading"
        :pagination="products.pagination"
        :max-displayed-pages="5"
        @onClickPagination="onClickPagination"
      />
    </footer>
  </div>
</template>
<script>
import CardProduct from '~/components/product/product-dimsum.vue'
import Pagination from '~/components/molleculs/pagination.vue'

export default {
  components: {
    CardProduct,
    Pagination,
  },
  data() {
    return {
      isShowCategory: false,
      handleLimitByeScreen: null,
      isShow: false,
      isLoading: true,

      products: {
        list: [],
        pagination: {},
      },
      filterProduct: {
        limit: null,
        search: '',
        categoryId: null,
      },
      categories: [
        {
          name: 'All Product',
          value: null,
        },
        {
          name: 'Dimsum',
          value: 1,
        },
        {
          name: 'Menu Lainnya',
          value: 3,
        },
      ],
    }
  },
  beforeMount() {
    this.limitProductWithScreen()
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    onSelectCategory(category) {
      this.filterProduct = {
        ...this.filterProduct,
        page: 1,
        categoryId: category,
      }
      this.getProducts()
    },
    limitProductWithScreen() {
      let screen = window.innerWidth
      if (screen <= 1400) {
        this.handleLimitByeScreen = 8
      } else {
        this.handleLimitByeScreen = 16
      }
    },
    onSearchProduct() {
      this.filterProduct = {
        ...this.filterProduct,
        page: 1,
      }
      this.getProducts()
    },
    onClickPagination(page) {
      this.filterProduct = {
        ...this.filterProduct,
        page: page,
      }
      this.getProducts()
    },
    async getProducts() {
      this.isLoading = true

      try {
        const res = await this.$axios.get('/customer/products', {
          params: (this.filterProduct = {
            ...this.filterProduct,
            limit: this.handleLimitByeScreen,
          }),
        })
        if (res.data) {
          const { data, pagination } = res.data
          this.products = {
            list: data,
            pagination,
          }
        }
      } catch (error) {
        console.log(error)
      }
      this.isLoading = false
    },
    goToDetailsProduct(id) {
      this.$router.push(`/product-details?productId=${id}`)
    },
  },
}
</script>
