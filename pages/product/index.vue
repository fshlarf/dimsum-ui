<template>
  <div class="w-full min-h-screen py-[30px] md:py-[35px] lg:py-[74px]">
    <div
      class="mx-auto max-w-[320px] md:max-w-[624px] lg:max-w-[860px] xl:max-w-[1116px]"
    >
      <nuxt-link to="/">
        <img src="/icons/arrow-back.svg" alt="back" />
      </nuxt-link>
      <header
        class="mt-[32px] lg:mt-[40px] xl:mt-[54px] flex items-center justify-between relative"
      >
        <section class="flex items-center gap-[8px] md:gap-[12px]">
          <h1
            class="text-base md:text-lg lg:text-[28px] font-bold whitespace-nowrap"
          >
            <span>{{ selectedCategory.name }}</span>
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
              <p class="text-[#A0A3BD]">{{ selectedCategory.name }}</p>
              <img src="/icons/chevron-down.svg" alt="chevron" />
            </section>
            <div
              v-show="isShowCategory"
              class="absolute top-[110%] right-0 z-40"
            >
              <div
                class="bg-white p-[16px] space-y-[8px] rounded-[8px]"
                style="box-shadow: 0px 4px 8px 0px rgba(160, 163, 189, 0.2), border: 1px solid rgba(160, 163, 189, 0.10);"
              >
                <section
                  v-for="(category, id) in categories"
                  :key="id"
                  class="text-sm"
                  @click="onSelectCategory(category)"
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
            <img
              class="hidden md:block"
              src="/icons/download.svg"
              alt="download"
            />
            <p class="text-base text-white whitespace-nowrap">
              Download Catalog
            </p>
          </div>
        </section>
      </header>
      <div class="mt-[85px] lg:mt-6 xl:mt-12 w-full">
        <div
          v-if="!isLoading"
          class="flex flex-wrap gap-[12px] lg:gap-[20px] mt-5 justify-left items-center mx-auto"
        >
          <CardProduct
            v-for="(product, id) in products.list"
            :key="id"
            :product="product"
            @click="goToDetailsProduct(product.id)"
          />
        </div>
        <div
          v-else
          class="flex flex-wrap gap-[12px] lg:gap-[20px] mt-5 justify-left items-center mx-auto"
        >
          <CardProductShimmer />
          <CardProductShimmer />
          <CardProductShimmer />
          <CardProductShimmer />
        </div>
      </div>
      <footer
        v-if="!isLoading && products.list.length > 0"
        class="mt-[50px] max-w-max mx-auto"
      >
        <Pagination
          :is-loading="isLoading"
          :pagination="products.pagination"
          :max-displayed-pages="5"
          @onClickPagination="onClickPagination"
        />
      </footer>
    </div>
  </div>
</template>

<script>
import CardProduct from '~/components/organism/ProductSection/views/product-card.vue'
import CardProductShimmer from '~/components/organism/ProductSection/views/product-card-shimmer.vue'
import Pagination from '~/components/molleculs/pagination.vue'

export default {
  components: {
    CardProduct,
    Pagination,
    CardProductShimmer,
  },
  data() {
    return {
      isShowCategory: false,
      handleLimitByScreen: null,
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
      ],
      selectedCategory: {},
    }
  },
  beforeMount() {
    this.limitProductByScreenSize()
  },
  mounted() {
    this.selectedCategory = this.categories[0]
    this.getCategories()
  },
  methods: {
    onSelectCategory(category) {
      this.selectedCategory = category
      this.filterProduct = {
        ...this.filterProduct,
        page: 1,
        categoryId: category.value,
      }
      this.getProducts()
      this.isShowCategory = false
    },
    limitProductByScreenSize() {
      let screen = window.innerWidth
      let limit = 8
      if (screen <= 1400) {
        limit = 8
      } else {
        limit = 16
      }
      this.filterProduct.limit = limit
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
    async getCategories() {
      this.isLoading = true
      try {
        const res = await this.$axios.get('/customer/categories')
        if (res.data) {
          const { data } = res.data
          data.map((category) => {
            this.categories.push({
              name: category.name,
              value: category.id,
            })
          })
          this.getProducts()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getProducts() {
      this.isLoading = true
      try {
        const res = await this.$axios.get('/customer/products', {
          params: this.filterProduct,
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
      this.$router.push(`/product/detail?id=${id}`)
    },
  },
}
</script>
