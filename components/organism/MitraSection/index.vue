<template>
  <div
    id="partner"
    class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5"
  >
    <div
      class="flex gap-1 justify-center bg-[#F6B205] bg-opacity-20 rounded-2xl md:w-[137px] w-[119px] py-1"
    >
      <img
        src="~/assets/atoms/kemitraan.svg"
        alt="icon-kemitraan"
        class="md:w-[22px] w-[18px]"
      />
      <h1 class="md:text-sm text-xs text-[#F6B205] font-bold">KEMITRAAN</h1>
    </div>
    <h1 class="md:text-[30px] text-xl mt-4 font-bold leading-none">
      <span class="text-[#F6B205]">Mitra </span>Berprestasi
    </h1>
    <div
      class="text-p md:text-sm text-xs text-[#555] md:leading-7 leading-[22px] md:mt-0 mt-1"
    >
      Berikut ini Daftar Mitra yang Berprestasi selama menjadi mitra di Produsen
      Dimsum Medan.
    </div>
    <template v-if="!isLoading">
      <div class="md:block hidden">
        <div class="grid md:grid-cols-3 lg:gap-6 gap-5 mt-5">
          <div v-for="(mitra, id) in partners.list" :key="id">
            <div class="box-mitra lg:space-y-[16px] space-y-3">
              <div
                class="flex justify-between md:py-3 lg:pt-0 pt-3 lg:px-4 px-3"
              >
                <div class="flex gap-3 items-center">
                  <img
                    class="w-[42px] h-[42px] rounded-full object-center object-cover"
                    :src="mitra.profileImage"
                    alt="foto mitra"
                  />
                  <div>
                    <h1 class="font-bold lg::text-base text-sm">
                      {{ mitra.name }}
                    </h1>
                    <div class="text-p text-xs text-[#555]">
                      {{ mitra.address }}
                    </div>
                  </div>
                </div>
                <img
                  src="~/assets/atoms/quote.svg"
                  alt="icon-kutip"
                  class="w-[37px] lg:w-[54px]"
                />
              </div>
              <hr class="md:mx-0 mx-3" />
              <div class="text-p text-xs text-[#555] md:py-3 md:px-4 px-3">
                {{ mitra.testimony }}
              </div>
              <div
                class="flex justify-between items-center md:py-3 md:px-4 px-3 pb-3"
              >
                <div class="text-p font-medium">
                  <p class="text-xs text-[#555]">Rewards</p>
                  <p class="text-sm text-[#F6B205] mt-1">
                    {{ mitra.rewardName }}
                  </p>
                </div>
                <img src="~/assets/atoms/icon-reward.png" alt="icon-reward" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:hidden">
        <div class="grid gap-5 mt-5">
          <div v-for="(mitra, id) in partners.list" :key="id">
            <div class="box-mitra lg:space-y-[16px] space-y-3">
              <div
                class="flex justify-between md:py-3 lg:pt-0 pt-3 lg:px-4 px-3"
              >
                <div class="flex gap-3 items-center">
                  <img
                    class="w-[36px] h-[36px] rounded-full object-center object-cover"
                    :src="mitra.profileImage"
                    alt="foto mitra"
                  />
                  <div>
                    <h1 class="font-bold lg::text-base text-sm">
                      {{ mitra.name }}
                    </h1>
                    <div class="text-p text-xs text-[#555]">
                      {{ mitra.address }}
                    </div>
                  </div>
                </div>
                <img
                  src="~/assets/atoms/quote.svg"
                  alt="icon-kutip"
                  class="w-[37px] lg:w-[54px]"
                />
              </div>
              <hr class="md:mx-0 mx-3" />
              <div class="text-p text-xs text-[#555] md:py-3 md:px-4 px-3">
                {{ mitra.testimony }}
              </div>
              <div
                class="flex justify-between items-center md:py-3 md:px-4 px-3 pb-3"
              >
                <div class="text-p font-medium">
                  <p class="text-xs text-[#555]">Rewards</p>
                  <p class="text-sm text-[#F6B205] mt-1">
                    {{ mitra.rewardName }}
                  </p>
                </div>
                <img src="~/assets/atoms/icon-reward.png" alt="icon-reward" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtonShow
        v-if="partners.list.length > filterPartner.limit"
        :btnText="`${!isShow ? 'Tampilkan Semua' : 'Tampilkan Lebih Sedikit'}`"
        :mode="`${!isShow ? 'top' : 'bottom'}`"
        @click-show="toggleShow(), (isShow = !isShow)"
      />
    </template>
  </div>
</template>

<script>
import ButtonShow from '~/components/atoms/ButtonShow'

export default {
  components: {
    ButtonShow,
  },
  data() {
    return {
      displayMitraDesktop: [],
      displayMitraMobile: [],
      isShow: false,
      isLoading: true,
      filterPartner: {
        page: 1,
        limit: 10,
      },
      partners: {
        list: [],
        paginatiom: {},
      },
    }
  },
  mounted() {
    this.defineLimitByScreenSize()
    this.getPartners()
  },
  methods: {
    defineLimitByScreenSize() {
      let screen = window.innerWidth
      let limitPartner = 3
      if (screen <= 767) {
        limitPartner = 3
      } else {
        limitPartner = 6
      }
      this.filterPartner.limit = limitPartner
    },
    toggleShow() {
      if (!this.isShow) {
        this.showAll()
      } else {
        this.showLess()
      }
    },
    showAll() {
      this.filterPartner.limit = 999
      this.getPartners()
    },
    showLess() {
      this.defineLimitByScreenSize()
      this.getPartners()
    },
    async getPartners() {
      this.isLoading = true
      try {
        const res = await this.$axios.get('/customer/partners', {
          params: this.filterPartner,
        })
        if (res.data) {
          const { data, pagination } = res.data
          this.partners = {
            list: data,
            pagination,
          }
        }
      } catch (error) {
        console.log(error)
      }
      this.isLoading = false
    },
  },
}
</script>

<style scoped>
.box-mitra {
  border-radius: 12px;
  background: #fff;
  @media only screen and (min-width: 768px) {
    box-shadow: 0px 2px 5px 0px rgba(171, 190, 209, 0.2),
      0px 0px 5px 0px rgba(171, 190, 209, 0.2);
  }
  @media only screen and (max-width: 768px) {
    border: 1px solid rgba(246, 178, 5, 0.25);
  }
}
hr {
  stroke-width: 1px;
  stroke: rgba(171, 190, 209, 0.2);
}
</style>
