<template>
  <div
    id="artikel"
    class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5"
  >
    <div class="text-center">
      <h1 class="md:text-[30px] text-[20px] font-bold">
        <span class="text-[#F6B205]">Artikel</span>
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
    <ButtonShow
      v-if="articles.length > limitArticleByScreenSize()"
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
      this.handleLimitByeScreen = true
      this.getArticle()
    },
    showLess() {
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
              limit: this.limitArticleByScreenSize(),
            }),
          })
          this.articles = res.data.data
        }
      } catch (error) {
        console.log(error)
      }
    },

    limitArticleByScreenSize() {
      let screen = window.innerWidth
      let limitArticle = 3
      if (screen <= 767) {
        limitArticle = 3
      } else if (screen < 1023) {
        limitArticle = 6
      } else {
        limitArticle = 6
      }
      return limitArticle
    },
  },
}
</script>
