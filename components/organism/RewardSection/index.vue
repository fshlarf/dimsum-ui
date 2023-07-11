<template>
  <div
    class="max-w-[1120px] 2xl:mx-auto md:mt-[52px] mt-6 lg:mx-[161px] md:mx-10 mx-5"
  >
    <div class="text-center md:pt-0 pt-5">
      <h1 class="md:text-[30px] text-[20px] font-bold">
        <span class="text-[#F6B205]">Reward</span> Kemitraan
      </h1>
      <div class="text-p md:text-sm text-xs text-[#555]">
        Berikut ini Reward Kemitraan apabila bergabung menjadi mitra di Produsen
        Dimsum Medan.
      </div>
    </div>
    <div class="lg:hidden mx-auto max-w-max mt-[33px]">
      <img src="images/reward/coins.png" alt="coins" class="text-center" />
    </div>
    <div
      class="flex md:mt-9 mt-4 lg:gap-[60px] md:gap-8 gap-3 md:items-center lg:items-start justify-center"
    >
      <div class="grid grid-rows-3 gap-8 w-[350px]">
        <div v-for="(reward, id) in dataReward1" :key="id">
          <div
            class="text-p border-[1px] rounded-[10px] border-[#ABBED133] border-opacity-20"
          >
            <div
              class="flex gap-1 rounded-t-[10px] justify-center items-center py-1"
              :class="'bg-' + reward.color"
            >
              <img src="images/reward/icon-reward.svg" alt="icon-reward" />
              <div class="md:text-sm text-xs text-white">
                {{ reward.title }}
              </div>
            </div>
            <div
              class="md:pl-4 pl-3 text-left lg:text-center lg:pl-0 md:text-base text-xs text-[#555] pt-[14px] pb-5"
            >
              {{ reward.preview }}
            </div>
          </div>
        </div>
      </div>
      <div class="lg:block hidden">
        <img src="images/reward/coins.png" alt="coins" class="" />
      </div>
      <div class="grid grid-rows-3 gap-8 w-[350px]">
        <div v-for="(reward, id) in dataReward2" :key="id">
          <div
            class="text-p border-[1px] rounded-[10px] border-[#ABBED133] border-opacity-20"
          >
            <div
              class="flex gap-1 rounded-t-[10px] justify-center items-center py-1"
              :class="`bg-${reward.color}`"
            >
              <img src="images/reward/icon-reward.svg" alt="icon-reward" />
              <div class="md:text-sm text-xs text-white">
                {{ reward.title }}
              </div>
            </div>
            <div
              class="md:pl-4 pl-3 text-left lg:text-center lg:pl-0 md:text-base text-xs text-[#555] pt-3 pb-5"
            >
              {{ reward.preview }}
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
      dataReward1: [
        {
          id: 1,
          title: 'Reward 1/4 Dinar',
          preview: 'Transaksi sebesar Rp70.000.000',
          color: '[#F6B205]',
        },
        {
          id: 2,
          title: 'Reward 1/5 Dinar',
          preview: 'Transaksi sebesar Rp140.000.000',
          color: '[#B71A1B]',
        },
        {
          id: 3,
          title: 'Reward 1 Dinar',
          preview: 'Transaksi sebesar Rp280.000.000',
          color: '[#55230F]',
        },
      ],
      dataReward2: [
        {
          id: 1,
          title: 'Reward 2 Dinar',
          preview: 'Transaksi sebesar Rp560.000.000',
          color: '[#F6B205]',
        },
        {
          id: 2,
          title: 'Reward 3 Dinar',
          preview: 'Transaksi sebesar Rp840.000.000',
          color: '[#B71A1B]',
        },
        {
          id: 3,
          title: 'Reward 4 Dinar',
          preview: 'Transaksi sebesar Rp1.120.000.000',
          color: '[#55230F]',
        },
      ],
    }
  },
}
</script>
