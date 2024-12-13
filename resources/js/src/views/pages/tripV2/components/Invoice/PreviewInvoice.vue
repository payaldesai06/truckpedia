<template>
  <vs-tabs alignment="fixed">
    <vs-tab label="Invoice pdf">
      <div>
        <pdf-invoice
          :invoice="invoice"
          :editInvoiceData="editInvoiceData"
          :customFieldsPaymentOptions="customFieldsPaymentOptions"
        ></pdf-invoice>
      </div>
    </vs-tab>
    <vs-tab label="Email">
      <div>
        <email-invoice
          :invoice="invoice"
          :customFieldsPaymentOptions="customFieldsPaymentOptions"
        />
      </div>
    </vs-tab>
    <vs-tab v-if="showPaymentPage()" label="Payment page">
      <div>
        <payment-page
          :invoice="invoice"
          @payment-success="$emit('payment-success', $event)"
        />
      </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '@/config/constants';

export default {
  components: {
    PdfInvoice: () => import('./PdfInvoice.vue'),
    EmailInvoice: () => import('./EmailInvoice.vue'),
    PaymentPage: () => import('./PaymentPage.vue'),
  },
  name: 'PreviewInvoice',
  computed: {
    ...mapGetters('auth', ['user']),
  },
  props: {
    invoice: {
      type: Object,
      default: () => {},
    },
    editInvoiceData: {
      type: Object,
      default: () => {},
    },
    customFieldsPaymentOptions: {
      type: Array,
      default: () => [],
    },
    isEditMode: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {};
  },

  methods: {
    showPaymentPage() {
      if (!this.isEditMode) return false;

      if (this.user && this.user.admin_company_detail_id) {
        return config.useAuthorizeNetForManualInvoice.includes(
          this.user.admin_company_detail_id
        );
      }
      return false;
    },
  },
};
</script>
