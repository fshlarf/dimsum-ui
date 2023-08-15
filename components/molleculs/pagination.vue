<template>
  <div class="flex space-x-2 items-center text-[#A0A3BD66]/40 !font-medium">
    <button
      class="p-1 rounded-full w-8 h-8 flex justify-center items-center"
      :disabled="pagination.currentPage === 1"
      @click="changePage(pagination.currentPage - 1)"
    >
      <img src="/icons/chevron-left.svg" alt="prev page" />
    </button>
    <ul class="flex space-x-2 items-center">
      <li
        class="cursor-pointer p-1 rounded-full w-8 h-8 flex justify-center items-center"
        v-if="this.displayedPages[0] >= 2"
        @click="changePage(1)"
      >
        1
      </li>
      <li
        v-if="showFirstDots"
        class="dots w-8 h-8 flex justify-center items-center"
      >
        ...
      </li>
      <li
        class="cursor-pointer p-1 rounded-[8px] w-8 h-8 flex justify-center items-center"
        v-for="pageNumber in displayedPages"
        :key="pageNumber"
        :class="`${
          pageNumber === pagination.currentPage
            ? 'text-white bg-[#F6B205]'
            : 'not-current-page'
        }`"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </li>
      <li
        v-if="showLastDots"
        class="dots w-8 h-8 flex justify-center items-center"
      >
        ...
      </li>
      <li
        class="cursor-pointer p-1 rounded-[8px] w-8 h-8 flex justify-center items-center"
        v-if="
          this.displayedPages[this.displayedPages.length - 1] <=
          this.pageCount - 1
        "
        @click="changePage(pagination.totalPages)"
      >
        {{ pagination.totalPages }}
      </li>
    </ul>
    <button
      class="p-1 rounded-[8px] w-8 h-8 flex justify-center items-center"
      :disabled="pagination.currentPage === pageCount"
      @click="changePage(pagination.currentPage + 1)"
    >
      <img src="/icons/chevron-right.svg" alt="next page" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Object,
      default: () => ({
        currentPage: null,
        perPage: null,
        totalResults: null,
        totalPages: null,
      }),
    },
    maxDisplayedPages: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.pagination.totalResults / this.pagination.perPage)
    },
    displayedPages() {
      if (this.pageCount <= this.maxDisplayedPages) {
        return Array.from({ length: this.pageCount }, (_, i) => i + 1)
      }
      const halfMax = Math.floor(this.maxDisplayedPages / 2)
      const start = Math.max(1, this.pagination.currentPage - halfMax)
      const end = Math.min(
        this.pageCount,
        this.pagination.currentPage + halfMax
      )
      let pages = Array.from({ length: end - start + 1 }, (_, i) => i + start)
      if (pages[0] > 1) {
        pages = [...pages]
      }
      if (pages[pages.length - 1] < this.pageCount) {
        pages = [...pages]
      }
      return pages
    },
    showFirstDots() {
      return this.displayedPages[0] > 2
    },
    showLastDots() {
      return (
        this.displayedPages[this.displayedPages.length - 1] < this.pageCount - 1
      )
    },
  },
  methods: {
    changePage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.pageCount) {
        this.$emit('onClickPagination', pageNumber)
      }
    },
  },
}
</script>

<style>
.not-current-page {
  border-radius: 8px;
  border: 1px solid #f1f1f1;
  background: #fff;
  color: #4d4d4d;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
