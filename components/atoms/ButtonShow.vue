<template>
  <div
    @click="$emit('click-show')"
    class="flex items-center justify-center mt-6 gap-1 cursor-pointer"
  >
    <div class="text-p text-[#0194F3] text-sm">{{ btnText }}</div>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      :class="`${mode === 'bottom' ? 'reverse' : ''}`"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="direction=direction5">
        <path
          id="vector"
          d="M2.81182 5.11395C2.55266 5.37545 2.55274 5.79697 2.81199 6.05838L7.30039 10.5841C7.69157 10.9786 8.32926 10.9786 8.72045 10.5841L13.2088 6.05838C13.4681 5.79697 13.4682 5.37545 13.209 5.11395C12.9467 4.84922 12.5188 4.84916 12.2564 5.11381L8.7205 8.67958C8.3293 9.07409 7.69153 9.07409 7.30034 8.67958L3.76448 5.11381C3.50205 4.84916 3.07418 4.84922 2.81182 5.11395Z"
          fill="#0194F3"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
    addClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.reverse {
  transform: rotate(180deg);
}
</style>
