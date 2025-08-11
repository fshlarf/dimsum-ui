<template>
  <div
    class="box max-w-[1120px] mt-[52px] 2xl:mx-auto md:mx-10 lg:mx-[161px] mx-5 lg:rounded-[25px] rounded-xl"
  >
    <div
      v-if="!isLoading"
      class="grid lg:grid-cols-4 grid-cols-2 gap-[30px] lg:h-[148px] h-[172px] lg:items-center xl:flex xl:gap-[100px] items-start justify-center lg:p-0 p-5"
    >
      <div v-for="(porto, id) in portofolios" :key="id">
        <div class="flex md:gap-3 gap-1 items-start md:justify-center">
          <img
            class="lg:w-[48px] w-[28px]"
            :id="`portfolio-${porto.id}`"
            :alt="porto.name"
          />
          <div class="text-left text-white">
            <h1
              class="lg:text-[40px] md:text-3xl text-[28px] leading-none font-bold"
            >
              {{ porto.value }}
            </h1>
            <p class="lg:text-sm text-xs md:tracking-[2.1px] tracking-[0.48px]">
              {{ porto.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      portofolios: [],
    }
  },
  mounted() {
    this.getPortfolios()
  },
  methods: {
    async getPortfolios() {
      this.isLoading = true
      try {
        const getPortfolios = await this.$axios.get('/customer/portfolios')
        this.portofolios = getPortfolios.data.data
        this.portofolios.map((porto) => {
          this.getPortfolioIcons(porto)
        })
      } catch (error) {
        console.log(error)
      }
      this.isLoading = false
    },
    async getPortfolioIcons(portfolio) {
      const fileName = portfolio.iconName
      if (fileName) {
        // const url = `bucket/images/portfolio/${fileName}`
        const url = fileName
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
              `portfolio-${portfolio.id}`
            )
            bannerImage.src = srcImage
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
  },
}
</script>

<style scoped>
.box {
  background: #b71a1b;
}
p {
  @media only screen and (max-width: 1024px) {
    font-family: Poppins;
  }
  @media only screen and (min-width: 1024px) {
    font-family: 'Roboto', sans-serif;
  }
}
</style>
