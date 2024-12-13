<template>
  <div class="content max-width-600px">
    <PaymentPage :invoice="invoice" />
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'InvoicePayment',
  components: {
    PaymentPage: () => import('./tripV2/components/Invoice/PaymentPage.vue'),
  },
  data() {
    return {
      invoice: {},
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      // I had to fix the code by myself by merging 2 APIs into one.
      // Calling 2 APIs one by one does not make sense.
      await this.getPaymentDetailsFromPublicUrl();
    },
    async getPaymentDetailsFromPublicUrl() {
      try {
        const {
          data: { payload },
        } = await this.$store.dispatch(
          'invoiceV2/getPaymentDetailsFromPublicUrl',
          this.$route.fullPath
        );
        this.invoice = payload;
        return;
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-page {
  margin-top: 0px !important;
}

// Utility classes
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}

.max-width-600px {
  width: 100%;
  max-width: 600px;
}
</style>
