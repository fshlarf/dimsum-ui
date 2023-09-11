<template>
  <div
    id="product"
    class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5"
  >
    <div
      class="flex gap-1 justify-center bg-[#F6B205] bg-opacity-20 rounded-2xl md:w-[174px] w-[148px] py-1"
    >
      <svg
        class="md:w-[22px] w-[18px]"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="fluent:food-24-filled">
          <path
            id="Vector"
            d="M16.4987 2.75C16.7232 2.75003 16.9399 2.83246 17.1077 2.98166C17.2755 3.13085 17.3827 3.33644 17.4089 3.55942L17.4154 3.66667V18.3333C17.4151 18.567 17.3256 18.7917 17.1653 18.9616C17.0049 19.1315 16.7857 19.2337 16.5524 19.2474C16.3192 19.2611 16.0895 19.1852 15.9104 19.0353C15.7312 18.8853 15.616 18.6726 15.5884 18.4406L15.582 18.3333V13.75H14.6654C14.4408 13.75 14.2241 13.6675 14.0564 13.5183C13.8886 13.3691 13.7814 13.1636 13.7551 12.9406L13.7487 12.8333V7.33333C13.7487 5.3075 15.1237 2.75 16.4987 2.75ZM10.9987 2.75C11.2232 2.75003 11.4399 2.83246 11.6077 2.98166C11.7755 3.13085 11.8827 3.33644 11.9089 3.55942L11.9154 3.66667V8.25C11.9153 9.06296 11.6451 9.85286 11.1474 10.4956C10.6496 11.1384 9.95243 11.5976 9.16536 11.8012V18.3333C9.1651 18.567 9.07564 18.7917 8.91525 18.9616C8.75486 19.1315 8.53566 19.2337 8.30242 19.2474C8.06918 19.2611 7.83952 19.1852 7.66035 19.0353C7.48119 18.8853 7.36604 18.6726 7.33845 18.4406L7.33203 18.3333V11.8012C6.5762 11.6058 5.9024 11.1743 5.40865 10.5696C4.91489 9.96493 4.62692 9.21848 4.58661 8.43883L4.58203 8.25V3.66667C4.58229 3.43303 4.67175 3.2083 4.83214 3.03841C4.99253 2.86852 5.21174 2.76628 5.44498 2.75259C5.67821 2.7389 5.90788 2.81479 6.08704 2.96474C6.26621 3.1147 6.38135 3.32741 6.40895 3.55942L6.41536 3.66667V8.25C6.41537 8.57181 6.50009 8.88795 6.661 9.16664C6.8219 9.44533 7.05334 9.67676 7.33203 9.83767V3.66667C7.33229 3.43303 7.42175 3.2083 7.58214 3.03841C7.74253 2.86852 7.96174 2.76628 8.19498 2.75259C8.42821 2.7389 8.65788 2.81479 8.83704 2.96474C9.01621 3.1147 9.13135 3.32741 9.15895 3.55942L9.16536 3.66667L9.16628 9.83767C9.42209 9.6898 9.63837 9.4823 9.7967 9.23283C9.95503 8.98337 10.0507 8.69933 10.0756 8.40492L10.082 8.25V3.66667C10.082 3.42355 10.1786 3.19039 10.3505 3.01849C10.5224 2.84658 10.7556 2.75 10.9987 2.75Z"
            fill="#F6B205"
          />
        </g>
      </svg>
      <h1 class="md:text-sm text-xs text-[#F6B205] font-bold">
        TENTANG PRODUK
      </h1>
    </div>
    <h1 class="md:text-[30px] text-[20px] mt-4 font-bold">
      <span class="text-[#F6B205]">Produk </span>Dimsum Kami
    </h1>
    <div
      class="text-p md:text-sm text-xs text-[#555] lg:mt-0 mt-1 leading-[22px] md:leading-none"
    >
      Berikut Ini Produk Dimsum yang tersedia di Produsen Dimsum Medan dengan
      beragam variant yang menarik dan sudah teruji kehalalannya.
    </div>
    <div>
      <div
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 gap-5 justify-center items-center"
      >
        <CardProduct
          v-for="(product, id) in products"
          :key="id"
          :product="product"
        />
      </div>
    </div>
    <nuxt-link
      v-if="pagination.totalResults > handleLimitByScreen"
      to="/product"
    >
      <ButtonShow
        :btnText="`${!isShow ? 'Tampilkan Semua' : 'Tampilkan Lebih Sedikit'}`"
        :mode="`${!isShow ? 'top' : 'bottom'}`"
      />
    </nuxt-link>
  </div>
</template>

<script>
import ButtonShow from '~/components/atoms/ButtonShow'
import CardProduct from '~/components/product/product-dimsum.vue'

export default {
  components: {
    ButtonShow,
    CardProduct,
  },
  data() {
    return {
      handleLimitByScreen: null,
      isShow: false,
      products: [],
      pagination: {},
      filterProduct: {
        limit: null,
        search: '',
        categoryId: 1,
      },
    }
  },
  beforeMount() {
    this.limitProductByScreenSize()
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    limitProductByScreenSize() {
      let screen = window.innerWidth
      if (screen <= 1400) {
        this.handleLimitByScreen = 6
      } else {
        this.handleLimitByScreen = 8
      }
    },
    async getProducts() {
      try {
        const res = await this.$axios.get('/customer/products', {
          params: (this.filterProduct = {
            ...this.filterProduct,
            limit: this.handleLimitByScreen,
          }),
        })
        this.products = res.data.data
        this.pagination = res.data.pagination
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
