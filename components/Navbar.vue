<template>
  <div
    class="navbar relative z-50 max-w-[1120px] mt-[30px] 2xl:mx-auto lg:mx-[161px] sm:mx-10 mx-5"
  >
    <div
      v-if="open"
      class="opacity-20 fixed inset-0 z-90 bg-black"
      @click="open = false"
    ></div>
    <div class="flex justify-between items-center">
      <div @click="scrollToSection(0)">
        <img
          src="~/assets/atoms/logo.png"
          alt="logo"
          class="w-[35px] md:w-[45px]"
        />
      </div>
      <div class="lg:hidden">
        <svg
          @click="open = !open"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
        >
          <path
            d="M5 8H25M5 15.5H25M5 23H25"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div
          :class="{ flex: open, hidden: !open }"
          class="bg-white rounded-lg py-5 px-9 absolute top-0 right-0 z-200"
        >
          <div class="flex flex-col md:gap-[52px] gap-5 text-sm cursor-pointer">
            <div v-for="(navbar, id) in navbarLink" :key="id">
              <div
                class="text-[#2D2D2D] text-right"
                @click="scrollToSection(navbar.id)"
              >
                {{ navbar.label }}
              </div>
            </div>
            <div class="flex gap-1">
              <img src="~/assets/atoms/telp.svg" alt="icon-telp" class="" />
              <a
                href="https://api.whatsapp.com/send?phone=6281375126758"
                target="_blank"
                class="text-[#B71A1B]"
              >
                0813 7512 6758
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:block hidden">
        <div
          class="flex md:gap-[52px] gap-5 md:text-sm cursor-pointer items-center"
        >
          <div v-for="(navbar, id) in navbarLink" :key="id">
            <div
              class="text-[#2D2D2D] lg:text-center text-right"
              @click="scrollToSection(navbar.id)"
            >
              {{ navbar.label }}
            </div>
          </div>
          <div class="flex gap-1 items-center">
            <img src="~/assets/atoms/telp.svg" alt="icon-telp" class="" />
            <a
              href="https://api.whatsapp.com/send?phone=6281375126758"
              target="_blank"
              class="text-[#B71A1B] break-keep"
            >
              0813 7512 6758
            </a>
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
      open: false,
      navbarLink: [
        {
          id: 1,
          label: 'Tentang Produk',
          tag: 'tentang',
        },
        {
          id: 2,
          label: 'Kemitraan',
          tag: 'kemitraan',
        },
        {
          id: 3,
          label: 'Artikel',
          tag: 'artikel',
        },
      ],
    }
  },
  methods: {
    scrollToSection(id) {
      if (id === 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      } else if (id === 1) {
        const productSection = document.getElementById('product')
        productSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      } else if (id === 2) {
        const kemitraanSection = document.getElementById('partner')
        kemitraanSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      } else if (id === 3) {
        const artikelSection = document.getElementById('artikel')
        artikelSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
      this.open = false
    },
  },
}
</script>

<style scoped>
.navbar {
  font-family: 'Poppins', sans-serif;
}
</style>
