<template>
  <div class="bg-white">
    <div class="top-article flex items-center gap-[16px] p-[16px]">
      <img
        alt="dimsum"
        class="w-[70px] h-[70px] xl:w-[100px] xl:h-[100px] rounded-[5px] object-cover"
        :id="`latest-article-${article.id}`"
      />
      <div class="">
        <p
          class="text-xs md:text-sm lg:text-base text-[#4D4D4D] max-h-[20px] overflow-y-hidden"
        >
          {{ article.title }}
        </p>
        <p class="text-[10px] lg:text-xs text-[#4D4D4D]/60 pt-[4px]">
          {{ convertToFormattedDate(article.createdAt) }}
        </p>
        <p
          class="cursor-pointer font-medium text-[#F6B205] pt-[12px] text-xs md:text-sm"
          @click="goToDetailsProduct(article.id)"
        >
          Read more
        </p>
      </div>
    </div>
  </div>
</template>

<script>
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
              `latest-article-${this.article.id}`
            )
            bannerImage.src = srcImage
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
    goToDetailsProduct(id) {
      this.$router.push(`/article?id=${id}`)
    },
    convertToFormattedDate(isoDate) {
      function getMonthName(month) {
        const monthNames = [
          'Januari',
          'Februai',
          'Maret',
          'April',
          'Mei',
          'Juni',
          'Juli',
          'Agustus',
          'September',
          'Oktober',
          'November',
          'Desember',
        ]
        return monthNames[month]
      }

      const date = new Date(isoDate)
      const day = date.getUTCDate()
      const month = getMonthName(date.getUTCMonth())
      const year = date.getUTCFullYear()

      const formattedDate = `${month}  ${day}, ${year}`

      return formattedDate
    },
  },
}
</script>

<style scoped>
.top-article {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(171, 190, 209, 0.2),
    0px 2px 5px 0px rgba(171, 190, 209, 0.15);
}
</style>
