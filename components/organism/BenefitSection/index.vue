<template>
  <div id="partner-benefit" class="benefit py-8 mt-[52px]">
    <div class="max-w-[1120px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5">
      <div class="md:flex flex-nowrap gap-[68px] items-center">
        <div class="md:hidden text-center">
          <h1 class="text-[20px] mt-4 font-bold">
            <span class="text-[#F6B205]">Benefit </span>Kemitraan
          </h1>
          <div class="text-p text-xs text-[#555] mt-1">
            Berikut ini benefit yang akan kamu dapatkan apabila bergabung
            menjadi mitra di Produsen Dimsum Medan.
          </div>
        </div>
        <div class="md:w-[483px] w-[318px] mx-auto text-center">
          <img src="images/poster-benefit.png" alt="" />
        </div>
        <div class="md:w-[565px]">
          <div class="md:block hidden">
            <h1 class="text-[30px] mt-4 font-bold">
              <span class="text-[#F6B205]">Benefit </span>Kemitraan
            </h1>
            <div class="text-p text-sm text-[#555] mt-1">
              Berikut ini benefit yang akan kamu dapatkan apabila bergabung
              menjadi mitra di Produsen Dimsum Medan.
            </div>
          </div>
          <div class="md:mt-5 space-y-[16px] pb-[16px]">
            <div
              class="box-benefit flex items-center gap-5 md:p-5 p-3 rounded-xl md:rounded-[20px]"
            >
              <img
                src="images/benefit/icon/checkbox.svg"
                alt="check-box"
                class="md:w-auto w-[36px]"
              />
              <div class="text-p md:text-[#555] text-[#2D2D2D]">
                <p class="font-medium md:text-base text-sm">Modal Terjangkau</p>
                <p class="md:text-sm text-xs">
                  Cukup mulai dari Rp450.000 aja kamu bisa jadi mitra resmi.
                </p>
              </div>
            </div>
            <div
              class="box-benefit flex items-center gap-5 md:p-5 p-3 rounded-xl md:rounded-[20px]"
            >
              <img
                src="images/benefit/icon/checkbox.svg"
                alt="check-box"
                class="md:w-auto w-[36px]"
              />
              <div class="text-p md:text-[#555] text-[#2D2D2D]">
                <p class="font-medium md:text-base text-sm">Mudah Dijalankan</p>
                <p class="md:text-sm text-xs">
                  Berbisnis tanpa beban, karena bukan bisnis musiman dan akan
                  selalu ada peminatnya.
                </p>
              </div>
            </div>
            <div
              class="box-benefit flex items-center gap-5 md:p-5 p-3 rounded-xl md:rounded-[20px]"
            >
              <img
                src="images/benefit/icon/checkbox.svg"
                alt="check-box"
                class="md:w-auto w-[36px]"
              />
              <div class="text-p md:text-[#555] text-[#2D2D2D]">
                <p class="font-medium md:text-base text-sm">
                  Jualan Dari Mana Aja
                </p>
                <p class="md:text-sm text-xs">
                  Tidak perlu sewa tempat dan toko kamu bisa memulai dari rumah.
                </p>
              </div>
            </div>
            <div
              class="box-benefit flex items-center gap-5 md:p-5 p-3 rounded-xl md:rounded-[20px]"
            >
              <img
                src="images/benefit/icon/checkbox.svg"
                alt="check-box"
                class="md:w-auto w-[36px]"
              />
              <div class="text-p md:text-[#555] text-[#2D2D2D]">
                <p class="font-medium md:text-base text-sm">Garansi Produk</p>
                <p class="md:text-sm text-xs">
                  Garansi produk apabila tidak laku lebih dari 2 bulan, SO tidak
                  perlu takut dan khawatir untuk memulai usaha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex lg:flex-nowrap flex-wrap lg:justify-between justify-center mt-8 py-1"
      >
        <div class="lg:w-[332px]">
          <h1
            class="md:text-[30px] text-[20px] md:mt-4 font-bold lg:text-left text-center"
          >
            <span class="text-[#F6B205]">Service </span>Excellent
          </h1>
          <div
            class="text-p md:text-sm text-xs text-[#555] mt-1 mr-2 lg:leading-7 leading-5 lg:text-left text-center"
          >
            Berikut ini pelayanan yang akan kamu dapatkan apabila bergabung
            menjadi mitra di Produsen Dimsum Medan.
          </div>
        </div>
        <div
          class="md:flex flex-nowrap gap-4 items-center lg:justify-start justify-center"
        >
          <div v-for="(dataService, id) in servicExcelent" :key="id">
            <div
              class="box-service p-4 md:mx-0 mx-5 lg:mt-0 mt-4 lg:w-[230px] md:w-[250px] w-[281px] md:h-[184px] h-[135px] grid justify-items-start items-center"
            >
              <div>
                <img
                  :src="`images/benefit/icon/${dataService.icon}.svg`"
                  alt="service"
                />
                <div class="text-p text-sm text-[#555]">
                  {{ dataService.label }}
                </div>
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
      servicExcelent: [
        {
          icon: 'service',
          label: 'Memberikan pelayanan di atas target dan ekspektasi.',
        },
        {
          icon: 'partner',
          label:
            'Pelayanan yang optimal bagi seluruh mitra kerja dari awal hngga akhir.',
        },
        {
          icon: 'teamwork',
          label:
            'Mengutamakan kepentingan bersama dan saling menjaga kerja sama.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.benefit {
  background: rgba(246, 178, 5, 0.1);
}
.box-benefit {
  border: 1px solid rgba(246, 178, 5, 0.1);
  background: #fff;
}
.box-service {
  border-radius: 12px;
  border: 1px solid rgba(246, 178, 5, 0.25);
  background: #fff;
  @media only screen and (min-width: 1024px) {
    box-shadow: 0px 2px 3px 0px rgba(171, 190, 209, 0.2);
  }
  @media only screen and (max-width: 1024px) {
    box-shadow: none;
  }
}
</style>
