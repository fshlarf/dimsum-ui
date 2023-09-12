<template>
  <div class="box-price w-full max-w-[330px] mx-auto p-[12px] animate-pulse">
    <div class="bg-white flex md:gap-4 gap-3 items-center">
      <div
        class="w-[90px] h-[90px] lg:w-[104px] lg:h-[101px] rounded-[8px] bg-slate-200"
      ></div>
      <div class="w-[211px] space-y-[10px]">
        <div class="">
          <div class="h-3 w-[100px] bg-slate-200"></div>
        </div>
        <div class="flex justify-between items-center">
          <div class="h-3 w-[50px] bg-slate-200"></div>
          <div class="h-3 w-[100px] bg-slate-200"></div>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-[#555555CC]/80 text-xs">Harga Reseller</p>
          <div class="h-3 w-[50px] bg-slate-200"></div>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-[#555555CC]/80 text-xs">Harga Agent</p>
          <div class="h-3 w-[70px] bg-slate-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-price {
  font-family: Poppins;
  border-radius: 10px;
  box-shadow: 0px 2px 3px 0px rgba(246, 178, 5, 0.15);
}
</style>
