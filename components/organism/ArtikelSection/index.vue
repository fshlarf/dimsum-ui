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
    <div class="md:block hidden">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
        <div v-for="(art, id) in displayArtikelDesktop" :key="id">
          <img
            :src="`images/artikel/${art.image}.png`"
            alt="dimsum-image"
            class="w-full"
          />
          <div class="box-article p-5 grid justify-items-start items-center">
            <div>
              <h1 class="font-bold text-lg leading-7">
                {{ art.title }}
              </h1>
              <h1 class="text-sm leading-[23px]">
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
    </div>
    <div class="md:hidden">
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
    </div>
    <ButtonShow
      :btnText="`${!isShow ? 'Tampilkan Semua' : 'Tampilkan Lebih Sedikit'}`"
      :mode="`${!isShow ? 'top' : 'bottom'}`"
      @click-show="toggleShow(), (isShow = !isShow)"
    />
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
      displayArtikelDesktop: [],
      displayArtikelMobile: [],
      isShow: false,
      dataArtikel: [
        {
          id: 1,
          image: 'article',
          title: 'Manfaat Dimsum Bagi Tubuh',
          preview:
            'Selain rasanya yang nikmat, dimsum juga memiliki beberapa manfaat. Tak hanya men..',
        },
        {
          id: 2,
          image: 'article',
          title: 'Manfaat Dimsum Bagi Tubuh',
          preview:
            'Selain rasanya yang nikmat, dimsum juga memiliki beberapa manfaat. Tak hanya men..',
        },
        {
          id: 3,
          image: 'article',
          title: 'Manfaat Dimsum Bagi Tubuh',
          preview:
            'Selain rasanya yang nikmat, dimsum juga memiliki beberapa manfaat. Tak hanya men..',
        },
        {
          id: 4,
          image: 'article',
          title: 'Manfaat Dimsum Bagi Tubuh',
          preview:
            'Selain rasanya yang nikmat, dimsum juga memiliki beberapa manfaat. Tak hanya men..',
        },
        {
          id: 5,
          image: 'article',
          title: 'Manfaat Dimsum Bagi Tubuh',
          preview:
            'Selain rasanya yang nikmat, dimsum juga memiliki beberapa manfaat. Tak hanya men..',
        },
        {
          id: 6,
          image: 'article',
          title: 'Manfaat Dimsum Bagi Tubuh',
          preview:
            'Selain rasanya yang nikmat, dimsum juga memiliki beberapa manfaat. Tak hanya men..',
        },
        {
          id: 7,
          image: 'article',
          title: 'Manfaat Dimsum Bagi Tubuh',
          preview:
            'Selain rasanya yang nikmat, dimsum juga memiliki beberapa manfaat. Tak hanya men..',
        },
        {
          id: 8,
          image: 'article',
          title: 'Manfaat Dimsum Bagi Tubuh',
          preview:
            'Selain rasanya yang nikmat, dimsum juga memiliki beberapa manfaat. Tak hanya men..',
        },
      ],
    }
  },
  mounted() {
    this.displayArtikelDesktop = this.dataArtikel.slice(0, 6)
    this.displayArtikelMobile = this.dataArtikel.slice(0, 3)
  },
  methods: {
    toggleShow() {
      if (!this.isShow) {
        this.showAll()
      } else {
        this.showLess()
      }
    },
    showAll() {
      this.displayArtikelDesktop = this.dataArtikel
      this.displayArtikelMobile = this.dataArtikel
    },
    showLess() {
      this.displayArtikelDesktop = this.dataArtikel.slice(0, 6)
      this.displayArtikelMobile = this.dataArtikel.slice(0, 3)
    },
  },
}
</script>

<style scoped>
.box-article {
  border-radius: 0px 0px 15px 15px;
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(171, 190, 209, 0.3),
    0px 4px 20px 0px rgba(0, 0, 0, 0.05);
}
</style>
