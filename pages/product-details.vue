<template>
  <div
    class="px-[20px] py-[30px] md:px-[30px] md:py-[40px] lg:py-[50px] lg:px-[100px] xl:py-[74px] xl:px-[160px] w-full min-h-screen bg-white"
  >
    <nuxt-link to="/list-all-product">
      <img src="/icons/arrow-back.svg" alt="back" />
    </nuxt-link>
    <div
      class="mt-[24px] lg:mt-[44px] flex lg:flex-row flex-col gap-[24px] w-full"
    >
      <section
        class="w-full h-[228px] md:max-w-[400px] md:h-[280px] lg:max-w-[300px] lg:h-[330px] xl:max-w-[348px] xl:h-[418px] mx-auto"
      >
        <img
          :alt="product.name"
          class="w-full h-full rounded-[10px]"
          :id="`product-image-${this.product.id}`"
        />
      </section>
      <section class="w-full">
        <h1
          class="text-[#2D2D2D] font-bold text-base md:text-lg lg:text-[26px]"
        >
          {{ product.name }}
        </h1>
        <div
          class="bg-white rounded-[10px] p-[12px] mt-[24px] lg:mx-auto w-max"
          style="box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.35)"
        >
          <h2
            class="text-sm lg:text-base font-bold py-[6px] text-center text-[#C5900B] bg-[#F6B205]/[5%] rounded-[10px]"
          >
            Harga Variant
          </h2>
          <section class="lg:space-y-[16px] mt-[22px]">
            <div
              class="text-[#2D2D2D] text-sm lg:text-base flex items-center justify-between w-[200px] md:w-[230px] lg:w-[272px]"
            >
              <p>Isi</p>
              <p class="font-semibold">
                {{ product.quantity }} {{ product.unit }}
              </p>
            </div>
            <div
              class="text-[#2D2D2D] text-sm lg:text-base flex items-center justify-between"
            >
              <p>Harga Reseller</p>
              <p class="font-semibold">{{ toRupiah(product.resellerPrice) }}</p>
            </div>
            <div
              class="text-[#2D2D2D] text-sm lg:text-base flex items-center justify-between"
            >
              <p>Harga Agent</p>
              <p class="font-semibold">{{ toRupiah(product.agentPrice) }}</p>
            </div>
          </section>
        </div>
        <div class="mt-[32px]">
          <h3 class="text-[#2D2D2D] font-bold text-sm lg:text-base">
            Syarat & Ketentuan
          </h3>
          <section class="mt-[16px]">
            <h3
              class="uppercase text-sm lg:text-base font-semibold text-[#C5900B]"
            >
              Per mika
            </h3>
            <div
              class="mt-[12px] space-y-[12px] text-sm font-medium text-[#474747]"
            >
              <p>RESELLER minimal belanja 10 MIKA</p>
              <p>AGENT minimal belanja 100 MIKA</p>
              <p>
                FREE/GRATIS 1 KG saus untuk 25 MIKA, Berlaku kelipatannya. (50
                MIKA FREE 2 KG saus) dan seterusnya.
              </p>
              <p>
                Pengiriman luar kota minimal belanja 1 Styrofoam, Ongkir dan
                Styrofoam ditanggung Pembeli.
              </p>
              <p>Pengiriman dalam kota free delivery untuk AGENT.</p>
            </div>
          </section>
          <section class="mt-[16px]">
            <h3
              class="uppercase text-sm lg:text-base font-semibold text-[#B71A1B]"
            >
              Per box
            </h3>
            <div
              class="mt-[12px] space-y-[12px] text-sm font-medium text-[#474747]"
            >
              <p class="leading-[26px]">
                RESELLER minimal belanja 10 BOX Free Saus 10 Batang dan <br />
                mitra bebas pilih varian dimsum.
              </p>
              <p class="leading-[26px]">
                AGENT minimal belanja 100 BOX Free <br />Saus 100 Batang dan
                mitra bebas pilih varian dimsum.
              </p>
              <p>
                Pengiriman luar kota minimal belanja 1 Styrofoam, Ongkir dan
                Styrofoam ditanggung Pembeli.
              </p>
              <p>Pengiriman dalam kota free delivery untuk AGENT.</p>
            </div>
          </section>
        </div>
        <button
          class="w-full bg-[#F6B205] text-white py-[14px] lg:py-[16px] text-sm lg:text-base font-semibold rounded-[10px] mt-[41px] hover:opacity-80"
        >
          Chat Admin Produsen Dimsum
        </button>
      </section>
    </div>
  </div>
</template>
<script>
import { toRupiah } from '~/helpers/common.js'
export default {
  data() {
    return {
      product: [],
    }
  },
  mounted() {
    this.getProductById()
    this.getProductImage(this.product.fileName)
  },
  watch: {
    product(val) {
      this.getProductImage(val.fileName)
    },
  },
  methods: {
    async getProductById() {
      try {
        const { productId } = this.$route.query
        const response = await this.$axios.get(`/products/${productId}`)
        this.product = response.data.data
      } catch (error) {
        console.log(error)
      }
    },
    async getProductImage(fileName) {
      if (fileName) {
        const url = `bucket/images/products/${fileName}`
        await this.$axios
          .get(url, {
            responseType: 'blob',
          })
          .then((response) => {
            const responseType = response.headers['content-type']
            const responseData = response.data

            // Convert the response data to a Blob
            const blob = new Blob([responseData], { type: responseType })

            // Create a new File object with the Blob
            const imageFile = new File([blob], fileName, {
              type: responseType,
            })

            const srcImage = URL.createObjectURL(imageFile)
            const bannerImage = document.getElementById(
              `product-image-${this.product.id}`
            )
            bannerImage.src = srcImage
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
    toRupiah,
  },
}
</script>
