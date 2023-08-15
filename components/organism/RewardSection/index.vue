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
      v-if="!isLoading"
      class="flex md:mt-9 mt-4 lg:gap-[60px] md:gap-8 gap-3 md:items-center lg:items-start justify-center"
    >
      <div class="grid grid-rows-3 gap-8 w-[350px]">
        <div v-for="(reward, id) in dataReward1" :key="id">
          <div
            class="text-p border-[1px] rounded-[10px] border-[#ABBED133] border-opacity-20"
          >
            <div
              class="flex gap-1 rounded-t-[10px] justify-center items-center py-1"
              :class="`${
                id == 0
                  ? 'bg-[#F6B205]'
                  : id == 1
                  ? 'bg-[#B71A1B]'
                  : 'bg-[#55230F]'
              }`"
            >
              <img src="images/reward/icon-reward.svg" alt="icon-reward" />
              <div class="md:text-sm text-xs text-white">
                {{ reward.name }}
              </div>
            </div>
            <div
              class="md:pl-4 pl-3 text-left lg:text-center lg:pl-0 md:text-base text-xs text-[#555] pt-[14px] pb-5"
            >
              {{ reward.description }}
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
              :class="`${
                id == 0
                  ? 'bg-[#F6B205]'
                  : id == 1
                  ? 'bg-[#B71A1B]'
                  : 'bg-[#55230F]'
              }`"
            >
              <img src="images/reward/icon-reward.svg" alt="icon-reward" />
              <div class="md:text-sm text-xs text-white">
                {{ reward.name }}
              </div>
            </div>
            <div
              class="md:pl-4 pl-3 text-left lg:text-center lg:pl-0 md:text-base text-xs text-[#555] pt-3 pb-5"
            >
              {{ reward.description }}
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
      dataReward1: [],
      dataReward2: [],
      isLoading: true,
    }
  },
  mounted() {
    this.getRewards()
  },
  methods: {
    async getRewards() {
      this.isLoading = true
      try {
        const getRewards = await this.$axios.get('/customer/rewards')
        if (getRewards.data) {
          const { data } = getRewards.data
          data.map((reward, id) => {
            if ([0, 1, 2].includes(id)) {
              this.dataReward1.push(reward)
            } else {
              this.dataReward2.push(reward)
            }
          })
        }
      } catch (error) {
        console.log(error)
      }
      this.isLoading = false
    },
  },
}
</script>
