<template>
  <div
    id="quality-assurance"
    class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5"
  >
    <div class="grid md:grid-cols-2 items-center justify-center">
      <div class="order-2 md:order-1 mt-5 md:mt-0">
        <h1
          class="md:text-[30px] text-[20px] font-bold md:text-left text-center"
        >
          <span class="text-[#F6B205]">Quality</span> Assurance
        </h1>
        <div
          class="text-p md:text-sm text-xs md:pr-[80px] md:leading-7 leading-5 lg:mt-0 mt-1 md:text-left text-center text-[#555]"
        >
          Berikut Ini Quality Assurance produk yang sudah terbukti halal dan
          terdaftar dilembaga pemerintah.
        </div>
        <div class="mt-5 space-y-3 lg:w-[503px] md:w-[300px]">
          <div class="box flex md:items-center items-start md:gap-3 gap-2 p-3">
            <img
              src="~/assets/atoms/checkbox.svg"
              alt="check-box"
              class="md:w-6 w-[18px]"
            />
            <div
              class="text-p md:text-sm text-xs text-[#555] md:pr-0 pr-[18px]"
            >
              Memiliki standar alur proses yang jelas, terencana dan terukur.
            </div>
          </div>
          <div class="box flex md:items-center items-start md:gap-3 gap-2 p-3">
            <img
              src="~/assets/atoms/checkbox.svg"
              alt="check-box"
              class="md:w-6 w-[18px]"
            />
            <div
              class="text-p md:text-sm text-xs text-[#555] md:pr-0 pr-[18px]"
            >
              Produk bergaransi tanpa perlu khawatir atas kualitas serta cita
              rasa.
            </div>
          </div>
          <div class="box flex md:items-center items-start md:gap-3 gap-2 p-3">
            <img
              src="~/assets/atoms/checkbox.svg"
              alt="check-box"
              class="md:w-6 w-[18px]"
            />
            <div
              class="text-p md:text-sm text-xs text-[#555] md:pr-0 pr-[18px]"
            >
              Jaminan mutu, kualitas dan kuantitas 100%
            </div>
          </div>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <img src="images/poster-quality.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.box {
  border-radius: 12px;
  border: 1px solid rgba(217, 217, 217, 0.5);
}
</style>
