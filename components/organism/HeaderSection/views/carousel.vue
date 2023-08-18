<template>
  <div
    class="image-slider relative"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div
      class="slider-container overflow-hidden relative rounded-[12px] lg:rounded-[30px] w-[320px] h-[260px] md:w-[280px] md:h-[300px] xl:w-[340px] xl:h-[360px] mx-auto"
    >
      <div
        class="slider flex transition-transform ease-in-out duration-500 w-full h-full"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slider-item flex-none !w-full !h-full overflow-hidden"
        >
          <img
            :src="`/images/header/${image}`"
            alt="Slider Image"
            class="image w-full h-full object-cover object-bottom md:object-center"
          />
        </div>
      </div>
      <div
        class="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-black/20 xl:flex items-center justify-center cursor-pointer hidden"
        @click="prevSlide"
      >
        <ChevronLeft color="#fff" />
      </div>
      <div
        class="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-black/20 xl:flex items-center justify-center cursor-pointer hidden"
        @click="nextSlide"
      >
        <ChevronRight color="#fff" />
      </div>
      <div class="w-full absolute z-20 bottom-5 dots flex justify-center">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="dot w-[6px] h-[6px] rounded-full bg-[#BBB6B6] mx-[5px] cursor-pointer"
          :class="{ '!bg-white !w-[26px]': index === currentIndex }"
          @click="goToSlide(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronLeft from '~/components/icons/chevron-left.vue'
import ChevronRight from '~/components/icons/chevron-right.vue'

export default {
  components: {
    ChevronLeft,
    ChevronRight,
  },
  data() {
    return {
      images: [
        'slide-1.jpg',
        'slide-2.jpg',
        'slide-3.jpg',
        'slide-4.jpg',
        'slide-5.jpg',
      ],
      currentIndex: 0,
      touchStartX: 0,
      touchEndX: 0,
    }
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    onTouchStart(event) {
      this.touchStartX = event.touches[0].clientX
    },
    onTouchMove(event) {
      this.touchEndX = event.touches[0].clientX
    },
    onTouchEnd() {
      const touchDiff = this.touchStartX - this.touchEndX
      if (touchDiff > 50) {
        this.nextSlide() // Swipe left
      } else if (touchDiff < -50) {
        this.prevSlide() // Swipe right
      }
    },
  },
}
</script>

<style scoped></style>
