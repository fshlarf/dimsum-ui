<template>
  <div
    id="production"
    class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 ml-5"
  >
    <div class="text-center">
      <h1
        class="md:text-[30px] text-[20px] font-bold md:leading-none leading-[27px]"
      >
        Proses Produksi, Bahan Baku & Mesin Produksi
      </h1>
      <div
        class="text-p text-xs text-[#555] md:leading-7 leading-5 md:mt-0 mt-1"
      >
        Berikut ini proses produksi bahan dan mesin yang digunakan dalam
        pembuatan produk.
      </div>
    </div>
    <div class="overflow-x-auto hide-scrollbar">
      <div class="mt-9 flex lg:gap-8 gap-4 min-w-[700px]">
        <div
          id="production-process"
          class="bg-[#B71A1B1A] rounded-2xl bg-opacity-10 lg:p-8 p-4 md:!w-[352px] !w-[198px] lg:border-none border-[1px] border-[#B71A1B1A] border-opacity-5"
        >
          <h1 class="md:text-xl text-sm text-[#B71A1B] font-bold">
            Proses Produksi Produk
          </h1>
          <div v-for="(flow, id) in dataFlow.slice(0, 3)" :key="id">
            <div
              class="box-step md:mt-6 mt-4 md:p-5 p-3 h-[140px] md:h-[168px]"
            >
              <img
                :src="`images/production/icon/${flow.icon}.svg`"
                :alt="`${flow.label}`"
                class="mt-1 md:w-11 w-10"
              />
              <div class="text-p md:text-sm text-xs text-[#555] mt-2 mb-5">
                {{ flow.label }}
              </div>
            </div>
          </div>
        </div>
        <div
          id="production-material"
          class="bg-[#F6B2051A] rounded-2xl bg-opacity-10 lg:p-8 p-4 md:!w-[352px] !w-[198px] lg:border-none border-[1px] border-[#F6B2051A] border-opacity-5"
        >
          <h1
            class="md:text-xl text-sm text-[#F6B205] font-bold lg:pr-0 md:pr-6"
          >
            Bahan Baku Produk
          </h1>
          <div v-for="(flow, id) in dataFlow.slice(3, 6)" :key="id">
            <div
              class="box-step md:mt-6 mt-4 md:p-5 p-3 h-[140px] md:h-[168px]"
            >
              <img
                :src="`images/production/icon/${flow.icon}.svg`"
                :alt="`${flow.label}`"
                class="mt-1 md:w-11 w-10"
              />
              <div class="text-p md:text-sm text-xs text-[#555] mt-2 mb-5">
                {{ flow.label }}
              </div>
            </div>
          </div>
        </div>
        <div
          id="production-machine"
          class="bg-[#55230F] rounded-2xl bg-opacity-10 lg:p-8 p-4 md:!w-[352px] !w-[198px] lg:border-none border-[1px] border-[#55230F] border-opacity-5"
        >
          <h1 class="md:text-xl text-sm text-[#55230F] font-bold">
            Mesin Produksi Produk
          </h1>
          <div v-for="(flow, id) in dataFlow.slice(6, 9)" :key="id">
            <div
              class="box-step md:mt-6 mt-4 md:p-5 p-3 h-[140px] md:h-[168px]"
            >
              <img
                :src="`images/production/icon/${flow.icon}.svg`"
                :alt="`${flow.label}`"
                class="mt-1 md:w-11 w-10"
              />
              <div class="text-p md:text-sm text-xs text-[#555] mt-2 mb-5">
                {{ flow.label }}
              </div>
            </div>
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
      dataFlow: [
        {
          id: 1,
          icon: 'ps_chat',
          label: 'Pra produksi proses dealing sampling',
        },
        {
          id: 2,
          icon: 'fluent-product',
          label: 'Proses produksi sesuai jumlah yang telah di sepakati.',
        },
        {
          id: 3,
          icon: 'delivery',
          label:
            'Pengemasan dan pengiriman sesuai jumlah yang telah di sepakati oleh mitra.',
        },
        {
          id: 4,
          icon: 'chili',
          label: 'Cabai gunung pilihan memberikan sensasi pedas yang seatap',
        },
        {
          id: 5,
          icon: 'shrimp',
          label: 'Daging udang segar memberikan gizi yang baik bagi tubuh',
        },
        {
          id: 6,
          icon: 'chicken',
          label:
            'Daging ayam yang fresh menghasilkan dimsum dengan cita rasa yang baik',
        },
        {
          id: 7,
          icon: 'park_list',
          label: 'Hulu ke hilir demi menjaga kualitas produk yang dihasilkan',
        },
        {
          id: 8,
          icon: 'speed',
          label: 'Cepat dan tepat dalam memenuhi target serta kebutuhan mitra',
        },
        {
          id: 9,
          icon: 'ph_gear',
          label: 'Dengan teknologi canggih sehingga memberikan hasil maksimal',
        },
      ],
    }
  },
}
</script>

<style scoped>
.box-step {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(171, 190, 209, 0.2);
}
</style>
