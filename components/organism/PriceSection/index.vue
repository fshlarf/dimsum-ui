<template>
  <div class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5">
    <div class="text-center">
      <h1 class="text-[30px] font-bold md:block hidden">
        <span class="text-[#F6B205]">Daftar Variant &</span> Harga Dimsum
      </h1>
      <h1 class="text-[20px] font-bold md:hidden">
        <span class="text-[#F6B205]">Daftar Variant</span>
        <span class="text-[#B71A1B]">&</span> Harga Dimsum
      </h1>
      <div class="text-p md:text-sm text-xs text-[#555] md:mt-0 mt-3 leading-5">
        Berikut ini beragam variant dimsum beserta harga yang tersedia di
        Produsen Dimsum Medan.
      </div>
    </div>
    <div class="flex mt-5 justify-center md:py-2">
      <div
        class="bg-[#F6B205] md:rounded-[20px] rounded-full md:p-3 flex gap-1 items-center"
      >
        <img
          src="images/price/icon-sumpit.svg"
          alt="icon-sumpit"
          class="pl-2 w-auto"
        />
        <p class="text-p text-white md:text-sm text-xs font-bold md:pr-3 pr-4">
          Aneka Dimsum
        </p>
      </div>
      <div
        class="bg-[#F6B205] bg-opacity-20 md:rounded-[20px] rounded-full md:-ml-6 -ml-9 p-3 md:pl-10 pl-11 md:pr-9 pr-4 flex gap-1 items-center"
      >
        <img src="images/price/icon-food.svg" alt="icon-food" />
        <p class="text-p text-[#F6B205] md:text-sm text-xs font-medium">
          Menu Lainnya
        </p>
      </div>
    </div>
    <div class="flex mt-5 justify-between">
      <div class="flex gap-2 items-center">
        <h1
          class="text-base font-bold text-[#2D2D2D] leading-7 md:block hidden"
        >
          Daftar Variant & Harga Dimsum
        </h1>
        <h1 class="text-sm font-bold text-[#2D2D2D] leading-7 md:hidden">
          Daftar Variant & Harga
        </h1>
        <img
          src="~assets/atoms/info.svg"
          alt="icon-info"
          @click="onClickInfo"
          class="cursor-pointer"
        />
      </div>
      <div class="flex items-center gap-1">
        <div class="text-p md:text-base text-sm text-[#2D2D2D]">Per Box</div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="direction=direction5">
            <path
              id="vector"
              d="M2.81182 5.1137C2.55266 5.3752 2.55274 5.79672 2.81199 6.05813L7.30039 10.5839C7.69157 10.9783 8.32926 10.9783 8.72045 10.5839L13.2088 6.05813C13.4681 5.79672 13.4682 5.3752 13.209 5.1137C12.9467 4.84897 12.5188 4.84891 12.2564 5.11357L8.7205 8.67934C8.3293 9.07384 7.69153 9.07384 7.30034 8.67934L3.76448 5.11357C3.50205 4.84891 3.07418 4.84897 2.81182 5.1137Z"
              fill="#2D2D2D"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="lg:block hidden">
      <div class="grid grid-cols-3 mt-2 gap-5 justify-center">
        <div v-for="(price, id) in displayPriceDesktop" :key="id">
          <div
            class="box-price md:h-[138px] h-[116px] md:w-[330px] w-[320px] flex md:gap-4 gap-3 justify-center items-center"
          >
            <div>
              <img
                :src="`images/price/${price.images}.png`"
                :alt="`dimsum-${price.variant}`"
                class="w-[90px] lg:w-[104px]"
              />
            </div>
            <div class="flex flex-col lg:gap-5 gap-3">
              <div class="flex lg:gap-6 md:gap-1 gap-3">
                <div class="space-y-1">
                  <h2>Variant Dimsum</h2>
                  <h3 class="md:text-sm text-xs">{{ price.variant }}</h3>
                </div>
                <div class="space-y-1">
                  <h2>Isi per box</h2>
                  <h3 class="md:text-sm text-xs">{{ price.pcs }} pcs</h3>
                </div>
              </div>
              <div class="flex lg:gap-6 md:gap-1 gap-3">
                <div class="space-y-1">
                  <h2>Harga Reseller</h2>
                  <h3 class="md:text-sm text-xs">{{ price.reseller }}</h3>
                </div>
                <div class="space-y-1">
                  <h2>Harga Agent</h2>
                  <h3 class="md:text-sm text-xs">{{ price.agent }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:hidden">
      <div class="grid md:grid-cols-2 mt-2 gap-3 justify-center">
        <div v-for="(price, id) in displayPriceMobile" :key="id">
          <div
            class="box-price md:h-[138px] h-[116px] md:w-[330px] w-[320px] flex md:gap-4 gap-3 justify-center items-center"
          >
            <div>
              <img
                :src="`images/price/${price.images}.png`"
                :alt="`dimsum-${price.variant}`"
                class="w-[90px] lg:w-[104px]"
              />
            </div>
            <div class="flex flex-col lg:gap-5 gap-3">
              <div class="flex lg:gap-6 md:gap-1 gap-3">
                <div class="space-y-1">
                  <h2>Variant Dimsum</h2>
                  <h3 class="md:text-sm text-xs">{{ price.variant }}</h3>
                </div>
                <div class="space-y-1">
                  <h2>Isi per box</h2>
                  <h3 class="md:text-sm text-xs">{{ price.pcs }} pcs</h3>
                </div>
              </div>
              <div class="flex lg:gap-6 md:gap-1 gap-3">
                <div class="space-y-1">
                  <h2>Harga Reseller</h2>
                  <h3 class="md:text-sm text-xs">{{ price.reseller }}</h3>
                </div>
                <div class="space-y-1">
                  <h2>Harga Agent</h2>
                  <h3 class="md:text-sm text-xs">{{ price.agent }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ButtonShow
      :btnText="`${!isShow ? 'Tampilkan Semua' : 'Tampilkan Lebih Sedikit'}`"
      :mode="`${!isShow ? 'top' : 'bottom'}`"
      @click-show="toggleShow(), (isShow = !isShow)"
    />
    <ModalInfo :is-show="isShowModalInfo" @onClose="onCloseInfo" />
  </div>
</template>

<script>
import ModalInfo from './views/ModalInfo.vue'
import ButtonShow from '~/components/atoms/ButtonShow'

export default {
  components: {
    ModalInfo,
    ButtonShow,
  },
  data() {
    return {
      isShowModalInfo: false,
      isShow: false,
      displayPriceDesktop: [],
      displayPriceMobile: [],
      dataPrice: [
        {
          id: 1,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 2,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 3,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 4,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 5,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 6,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 7,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 8,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 9,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
        {
          id: 10,
          images: 'dimsum',
          variant: 'Ayam',
          pcs: '20',
          reseller: 'Rp.55.000',
          agent: 'Rp.50.000',
        },
      ],
    }
  },
  mounted() {
    this.displayPriceDesktop = this.dataPrice.slice(0, 9)
    this.displayPriceMobile = this.dataPrice.slice(0, 4)
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
      this.displayPriceDesktop = this.dataPrice
      this.displayPriceMobile = this.dataPrice
    },
    showLess() {
      this.displayPriceDesktop = this.dataPrice.slice(0, 9)
      this.displayPriceMobile = this.dataPrice.slice(0, 4)
    },
  },
}
</script>

<style scoped>
.box-price {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(246, 178, 5, 0.15);
}
h2 {
  color: rgba(85, 85, 85, 0.8);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
}
h3 {
  color: #2d2d2d;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
}
</style>
