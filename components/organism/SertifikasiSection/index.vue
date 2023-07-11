<template>
  <div class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5">
    <h1 class="md:text-[30px] text-xl font-bold text-center">
      <span class="text-[#F6B205]">Sertifikasi </span>Produk
    </h1>
    <div
      class="text-p md:text-sm text-xs text-[#555] text-center md:px-0 px-1 xl:mt-0 mt-1 leading-[22px] md:leading-7"
    >
      Berikut ini Sertifikasi Produk kami yang sudah terbukti halal dan
      terdaftar di lembaga pemerintah
    </div>
    <div
      class="mt-5 grid md:grid-cols-3 md:gap-[44px] gap-5 justify-center items-center"
    >
      <div v-for="(sertif, id) in sertifikasi" :key="id">
        <div class="box flex-nowrap items-center justify-center p-6">
          <img
            :src="`/images/sertifikasi/${sertif.icon}.svg`"
            :alt="sertif.label"
            class="mx-auto"
          />
          <h1
            class="md:text-xl text-sm text-[#555] font-bold pt-4 md:leading-9 text-center"
          >
            {{ sertif.label }}
          </h1>
          <div
            class="text-p md:text-sm text-xs text-[#717171] pt-2 text-center leading-5"
          >
            {{ sertif.preview }}
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
      sertifikasi: [
        {
          icon: 'legal',
          label: 'Terdaftar Oleh Pemerintah',
          preview:
            'Terbukti sudah memiliki izin serta merk dagang terdaftar di lembaga pemerintah',
        },
        {
          icon: 'halal',
          label: 'Terbukti Produk Halal',
          preview: 'Seluruh bahan baku sudah melalui proses sertifikasi halal',
        },
        {
          icon: 'aman',
          label: 'Terbukti Produk Aman',
          preview:
            'Memiliki izin edar demi memberikan rasa aman serta nyaman kepada seluruh mitra bisnis.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.box {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.35);
}
</style>
