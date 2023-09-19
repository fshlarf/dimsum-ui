<template>
  <div class="box-mitra">
    <div class="flex justify-between py-3 lg:px-4 px-3">
      <div class="flex gap-3 items-center">
        <img
          class="w-[42px] h-[42px] rounded-full object-center object-cover"
          :src="partner.profileImage"
          alt="foto mitra"
        />
        <div>
          <h1 class="font-bold lg::text-base text-sm">
            {{ partner.name }}
          </h1>
          <div class="text-p text-xs text-[#555]">
            {{ partner.address }}
          </div>
        </div>
      </div>
      <img
        src="~/assets/atoms/quote.svg"
        alt="icon-kutip"
        class="w-[37px] lg:w-[54px]"
      />
    </div>
    <hr class="md:mx-0 mx-3" />
    <div class="text-p text-xs text-[#555] py-3 md:px-4 px-3">
      <p :id="`testimony-${partner.id}`">
        {{ testimony }}
      </p>
      <p
        v-if="isShowToggle"
        class="text-blue-400 cursor-pointer mt-1"
        @click="isShowMore = !isShowMore"
      >
        <span v-if="!isShowMore">lihat lebih banyak</span>
        <span v-else>lihat lebih sedikit</span>
      </p>
    </div>
    <div class="flex justify-between items-center md:py-3 md:px-4 px-3 pb-3">
      <div class="text-p font-medium">
        <p class="text-xs text-[#555]">Rewards</p>
        <p class="text-sm text-[#F6B205] mt-1">
          {{ partner.rewardName }}
        </p>
      </div>
      <img src="~/assets/atoms/icon-reward.png" alt="icon-reward" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partner: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isShowMore: false,
      isShowToggle: false,
    }
  },
  computed: {
    testimony() {
      const testimonyWords = this.partner.testimony.split(' ')
      let finalTestimony
      if (this.isShowMore) {
        finalTestimony = testimonyWords.join(' ')
      } else {
        if (testimonyWords.length > 42) {
          finalTestimony = testimonyWords.splice(0, 42).join(' ') + '...'
          this.isShowToggle = true
        } else {
          finalTestimony = testimonyWords.join(' ')
          this.isShowToggle = false
        }
      }
      return finalTestimony
    },
  },
}
</script>

<style>
.box-mitra {
  border-radius: 12px;
  background: #fff;
  @media only screen and (min-width: 768px) {
    box-shadow: 0px 2px 5px 0px rgba(171, 190, 209, 0.2),
      0px 0px 5px 0px rgba(171, 190, 209, 0.2);
  }
  @media only screen and (max-width: 768px) {
    border: 1px solid rgba(246, 178, 5, 0.25);
  }
}
</style>
