<template>
    <Modal :is-show="isShow"  @onClose="onClose">
        <template v-slot:body>
            <div class="text-center md:w-[535px] w-[300px]">
                <h1 class="md:text-[20px] text-base font-bold">Informasi Kemitraan</h1>
                <div class="box-modal mt-6 py-1">
                    <p class="text-p md:text-sm text-xs font-medium text-[#555] leading-[26px]">RESELLER minimal belanja 10 MIKA</p>
                    <p class="text-p md:text-sm text-xs font-medium text-[#555] leading-[26px]">AGENT minimal balanja 100 MIKA</p>
                </div>
                <div class="rounded-xl bg-[#871A1B] mt-5 p-4">
                    <p class="text-p md:text-sm text-xs font-semibold text-white">
                        FREE/GRATIS 1 KG saus untuk 25 MIKA, Berlaku kelipatannya. (50 MIKA FREE 2 KG saus) dan seterusnya.
                    </p>
                </div>
                <div class="text-p md:text-sm text-xs font-semibold text-[#555] mt-5">
                    <p>
                        Pengiriman luar kota minimal belanja 1 Styrofoam, Ongkir dan Styrofoam ditanggung Pembeli.
                    </p>
                    <p class="mt-6">Pengiriman dalam kota free delivery untuk AGENT.</p>
                </div>
            </div>
        </template>
    </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal'

export default{
    components:{
        Modal,
    },
    props: {
        isShow: { type: Boolean, default: false },
        isLoading: { type: Boolean, default: false },
    },
    methods:{
        onClose() {
          this.$emit('onClose');
        },
    }
}
</script>

<style scoped>
.box-modal{
    border-radius: 12px;
    border: 1px solid rgba(246, 178, 5, 0.12);
    background: rgba(246, 178, 5, 0.10);
}
</style>