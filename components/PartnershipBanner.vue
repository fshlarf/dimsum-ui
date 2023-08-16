<template>
  <div
    class="bg-banner rounded-[15px] max-w-[1120px] text-white 2xl:mx-auto lg:mx-[160px] md:mx-10 mx-5 mt-[52px] md:h-[308px] h-[250px] -mb-[70px] relative z-10"
  >
    <div class="md:pt-[50px] pt-[40px] grid justify-center">
      <div class="relative">
        <h1 class="md:text-[50px] text-[20px] font-bold text-center">
          Yuk, Gabung Menjadi Mitra.
        </h1>
        <div class="absolute bottom-0 lg:right-0 right-2">
          <img src="/icons/underline.svg" alt="" class="w-[61px] md:w-auto" />
        </div>
      </div>
      <p
        class="text-p md:w-[640px] w-[289px] md:text-sm text-xs md:leading-6 leading-[18px] text-center mx-auto mt-3 tracking-[-0.24px] md:tracking-normal"
      >
        Dengan bergabung menjadi Mitra di Produsen Dimsum Medan, kamu akan
        mendapat berbagai keuntungan. Jadi tunggu apalagi? Yuk bergabung
        sekarang!
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=6281375126758"
        target="_blank"
      >
        <div
          class="rounded-lg bg-[#B71A1B] p-3 md:w-[175px] w-[144px] mx-auto mt-6 cursor-pointer"
        >
          <p class="text-p md:text-sm text-xs font-semibold text-center">
            Gabung Kemitraan
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<style>
.bg-banner {
  @media only screen and (min-width: 360px) {
    background-image: url('../static/images/banner-desktop.png');
  }
  @media only screen and (max-width: 360px) {
    background-image: url('../static/images/banner-mobile.png');
  }
}
</style>
