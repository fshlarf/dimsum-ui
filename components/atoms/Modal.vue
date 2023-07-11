<template>
    <div>
      <div
        v-if="isShow"
        class="z-30 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"
      >
        <div class="z-40 relative p-3 mx-auto my-0 w-full">
          <div
            class="modal-popup bg-white rounded-lg shadow-lg border flex flex-col w-auto"
          >
            <button
              class="absolute -right-3 -top-3"
              @click="onClose"
            >
                <img src="~/assets/atoms/cancel.svg" alt="cancel">
            </button>
            <div class="md:p-8 p-5">
              <slot name="body"></slot>
            </div>
          </div>
        </div>
        <div
          class="z-30 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"
          @click="onClose"
        ></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Modal',
    props: {
      isShow: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        default: null,
      },
      isLoading: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onClose() {
        if (!this.isLoading) this.$emit('onClose');
      },
    },
  };
  </script>
  
  <style>
  .modal-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
  </style>
  