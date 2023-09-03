<template>
  <div class="bg-[#192136] relative z-0">
    <div
      class="max-w-[1120px] 2xl:mx-auto lg:mx-[160px] md:mx-10 mx-5 pt-[160px] pb-[60px] text-white"
    >
      <div class="md:flex 2xl:gap-[100px] gap-[70px]">
        <div class="lg:w-[416px] w-[316px] space-y-5">
          <img src="~/assets/atoms/logo.png" alt="logo" />
          <p class="text-p md:text-sm text-xs leading-[155%]">
            Produsen Dimsum Medan menyediakan Paket usaha paling terjangkau
            dengan ratusan Mitra yang sudah tersebar di berbagai daerah.
          </p>
        </div>
        <div
          class="grid lg:grid-cols-3 grid-cols-2 2xl:gap-[100px] lg:gap-[70px] gap-16 md:mt-0 mt-10 items-stretch"
        >
          <div class="lg:space-y-8 space-y-4">
            <h2>Tentang Produk</h2>
            <h3
              class="pt-2 md:pt-0"
              role="button"
              @click="scrollToSection('product')"
            >
              Produk
            </h3>
            <h3 role="button" @click="scrollToSection('sertification')">
              Sertifikasi Produk
            </h3>
            <h3 role="button" @click="scrollToSection('quality-assurance')">
              Quality Assurance
            </h3>
            <h3 role="button" @click="scrollToSection('production-process')">
              Proses Produk
            </h3>
            <h3 role="button" @click="scrollToSection('production-material')">
              Bahan Baku
            </h3>
            <h3 role="button" @click="scrollToSection('production-machine')">
              Mesin Produksi
            </h3>
          </div>
          <div class="lg:space-y-8 space-y-4">
            <h2>Kemitraan</h2>
            <h3
              class="pt-2 md:pt-0"
              role="button"
              @click="scrollToSection('partner')"
            >
              Mitra Berprestasi
            </h3>
            <h3 role="button" @click="scrollToSection('partner-benefit')">
              Benefit Kemitraan
            </h3>
            <h3 role="button" @click="scrollToSection('reward')">
              Reward Kemitraan
            </h3>
            <div class="pt-2 space-y-4 lg:hidden">
              <h2>Social Media</h2>
              <div class="grid grid-cols-4">
                <img
                  src="images/social-media/instagram.svg"
                  alt="logo-instagram"
                />
                <img
                  src="images/social-media/facebook.svg"
                  alt="logo-facebook"
                />
                <img src="images/social-media/twitter.svg" alt="logo-twitter" />
                <img src="images/social-media/tiktok.svg" alt="logo-tiktok" />
              </div>
            </div>
          </div>
          <div class="space-y-8 lg:block hidden">
            <h2>Social Media</h2>
            <div class="grid grid-cols-4">
              <img
                src="images/social-media/instagram.svg"
                alt="logo-instagram"
              />
              <img src="images/social-media/facebook.svg" alt="logo-facebook" />
              <img src="images/social-media/twitter.svg" alt="logo-twitter" />
              <img src="images/social-media/tiktok.svg" alt="logo-tiktok" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="max-w-[1120px] xl:mx-auto md:mx-10 mx-5" />
    <div
      class="copy-right max-w-[1120px] xl:mx-auto lg:mx-10 text-white py-6 lg:text-left text-center"
    >
      Copyright @2023 TBM Group
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id)
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    },
  },
}
</script>

<style scoped>
h2 {
  color: #606a83;
  font-family: Poppins;
  font-size: 14px;
}
h3 {
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
}
hr {
  stroke-width: 1px;
  stroke: #fff;
  opacity: 0.10000000149011612;
}
.copy-right {
  font-family: DM Sans;
}
</style>
