<template>
  <div class="bg-white box-article overflow-hidden">
    <div class="w-full h-[149px] overflow-hidden lg:h-[194px] bg-white">
      <img
        :id="`article-${article.id}`"
        alt="article"
        class="w-full h-full mx-auto object-cover object-center"
      />
    </div>
    <div class="p-5 grid justify-items-start items-center w-full">
      <div class="w-full overflow-hidden">
        <section class="h-[120px]">
          <h1
            class="font-bold text-sm md:text-base lg:text-lg leading-7 truncate"
          >
            {{ article.title }}
          </h1>
          <h1
            class="text-xs lg:text-sm leading-[23px] overflow-y-hidden h-[80%]"
          >
            {{ article.content }}
          </h1>
        </section>
        <div class="flex justify-between items-center mt-[22px]">
          <section class="flex gap-[8px] text-xs">
            <img src="images/artikel/icon-date.svg" alt="icon-date" />
            <p>{{ convertToFormattedDate(article.createdAt) }}</p>
          </section>
          <!-- <div class="grid grid-cols-2 gap-3 items-center">
            <div class="flex gap-1 items-center">
              <img src="images/artikel/icon-eye.svg" alt="icon-eye" />
              <h1 class="text-xs">100x dilihat</h1>
            </div>
            <div class="flex gap-1 items-center">
              <img src="images/artikel/icon-date.svg" alt="icon-date" />
              <h1 class="text-xs">12 Nov 2023</h1>
            </div>
          </div> -->
          <div @click="goToDetailsArticle(article.id)" class="cursor-pointer">
            <h1 class="text-[#F6B205] text-xs font-semibold">Read More</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { convertToFormattedDate } from '~/helpers/common.js'
export default {
  props: {
    article: {
      typeof: Object,
      default: () => {},
    },
  },
  watch: {
    article(val) {
      this.getArticleImage(val.fileName)
    },
  },
  mounted() {
    this.getArticleImage(this.article.fileName)
  },
  methods: {
    convertToFormattedDate,
    async getArticleImage(fileName) {
      if (fileName) {
        const url = `bucket/images/articles/${fileName}`
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
            let imageFile = new File([blob], fileName, {
              type: responseType,
            })

            const srcImage = URL.createObjectURL(imageFile)
            const bannerImage = document.getElementById(
              `article-${this.article.id}`
            )
            bannerImage.src = srcImage
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
    goToDetailsArticle(id) {
      this.$router.push(`/article?id=${id}`)
    },
  },
}
</script>

<style scoped>
.box-article {
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(171, 190, 209, 0.3),
    0px 4px 20px 0px rgba(0, 0, 0, 0.05);
}
</style>
