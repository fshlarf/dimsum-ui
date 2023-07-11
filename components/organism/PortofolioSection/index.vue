<template>
  <div
    class="box max-w-[1120px] mt-[52px] 2xl:mx-auto md:mx-10 lg:mx-[161px] mx-5 lg:rounded-[25px] rounded-xl"
  >
    <div
      class="grid lg:grid-cols-4 grid-cols-2 gap-[30px] lg:h-[148px] h-[172px] lg:items-center items-start justify-center lg:p-0 p-5"
    >
      <div v-for="(porto, id) in portofolio" :key="id">
        <div class="flex md:gap-3 gap-1 items-start md:justify-center">
          <img
            class="lg:w-auto md:w-10 w-7"
            :src="`/images/portofolio/${porto.icon}.svg`"
            :alt="porto.name"
          />
          <div class="text-left text-white">
            <h1
              class="lg:text-[40px] md:text-3xl text-[28px] leading-none font-bold"
            >
              {{ porto.counter }}
            </h1>
            <p class="lg:text-sm text-xs md:tracking-[2.1px] tracking-[0.48px]">
              {{ porto.name }}
            </p>
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
      portofolio: [
        {
          name: 'Penjualan',
          counter: '235K+',
          icon: 'transaction',
        },
        {
          name: 'Mitra',
          counter: '1000+',
          icon: 'mitra',
        },
        {
          name: 'Halal & Sehat',
          counter: '1000+',
          icon: 'safety',
        },
        {
          name: 'Produk',
          counter: '20+',
          icon: 'product',
        },
      ],
    }
  },
}
</script>

<style scoped>
.box {
  background: #b71a1b;
}
p {
  @media only screen and (max-width: 1024px) {
    font-family: Poppins;
  }
  @media only screen and (min-width: 1024px) {
    font-family: 'Roboto', sans-serif;
  }
}
</style>
