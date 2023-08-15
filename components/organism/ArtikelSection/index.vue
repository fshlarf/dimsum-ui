<template>
  <div
    id="artikel"
    class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5"
  >
    <div class="text-center">
      <h1 class="md:text-[30px] text-[20px] font-bold">
        <span class="text-[#F6B205]" @click="toggleShow(), (isShow = !isShow)"
          >Artikel</span
        >
        Kami
      </h1>
      <div class="text-p md:text-sm text-xs text-[#555] md:mt-0 mt-1 leading-5">
        Berikut ini beragam topik artikel menarik yang berkaitan dengan Produk
        kami.
      </div>
    </div>
    <div class="">
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
        <CardArticle
          v-for="(article, id) in articles"
          :key="id"
          :article="article"
        />
      </div>
    </div>
    <!-- <div class="md:hidden">
      <div class="grid gap-6 mt-8">
        <div v-for="(art, id) in displayArtikelMobile" :key="id">
          <img
            :src="`images/artikel/${art.image}.png`"
            alt="dimsum-image"
            class="w-full"
          />
          <div class="box-article p-5 grid justify-items-start items-center">
            <div>
              <h1 class="font-bold text-sm leading-7">
                {{ art.title }}
              </h1>
              <h1 class="text-xs leading-[23px]">
                {{ art.preview }}
              </h1>
              <div class="flex justify-between mt-[22px]">
                <div class="grid grid-cols-2 gap-3 items-center">
                  <div class="flex gap-1 items-center">
                    <img src="images/artikel/icon-eye.svg" alt="icon-eye" />
                    <h1 class="text-xs">100x dilihat</h1>
                  </div>
                  <div class="flex gap-1 items-center">
                    <img src="images/artikel/icon-date.svg" alt="icon-date" />
                    <h1 class="text-xs">12 Nov 2023</h1>
                  </div>
                </div>
                <div>
                  <h1 class="text-[#F6B205] text-xs font-semibold">
                    Read More
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <ButtonShow
      :btnText="`${!isShow ? 'Tampilkan Semua' : 'Tampilkan Lebih Sedikit'}`"
      :mode="`${!isShow ? 'top' : 'bottom'}`"
      @click-show="toggleShow(), (isShow = !isShow)"
    />
  </div>
</template>

<script>
import ButtonShow from '~/components/atoms/ButtonShow'
import CardArticle from '~/components/organism/ArtikelSection/card-article.vue'

export default {
  components: {
    ButtonShow,
    CardArticle,
  },
  data() {
    return {
      isShow: false,
      articles: [],
      filterArticle: {
        limit: null,
        search: '',
        categoryId: 1,
      },
      handleLimitByeScreen: false,
    }
  },
  mounted() {
    this.getArticle()
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
      this.getArticle()
    },
    showLess() {
      // this.displayPriceDesktop = this.dataPrice.slice(0, 9)
      // this.displayPriceMobile = this.dataPrice.slice(0, 4)
      this.handleLimitByeScreen = false

      this.getArticle()
    },
    async getArticle() {
      try {
        if (this.handleLimitByeScreen) {
          const res = await this.$axios.get('/customer/articles', {
            params: (this.filterArticle = {
              ...this.filterArticle,
              limit: null,
            }),
          })
          this.articles = res.data.data
        } else {
          const res = await this.$axios.get('/customer/articles', {
            params: (this.filterArticle = {
              ...this.filterArticle,
              limit: this.limitProductWithScreen(),
            }),
          })
          this.articles = res.data.data
        }
      } catch (error) {
        console.log(error)
      }
    },

    limitProductWithScreen(limitProduct) {
      let screen = window.innerWidth
      if (screen <= 767) {
        limitProduct = 3
      } else if (screen < 1023) {
        limitProduct = 6
      } else {
        limitProduct = 6
      }
      return limitProduct
    },
  },
}
</script>
