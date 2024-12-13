<template>
  <div class="flex h-full">
    <div class="w-1/2">
      <edit-invoice-panel
        ref="editInvoicPanel"
        v-model="invoice"
        :editInvoiceDetails="editInvoiceDetails"
        @submit="submitInvoice"
        @customFieldsOptions="customFieldsOptions"
        :toggleAddNewInvoicePopup="toggleAddNewInvoicePopup"
      >
      </edit-invoice-panel>
    </div>
    <div class="w-1/2 px-6">
      <preview-invoice
        :invoice="{...invoice, invoiceId}"
        :customFieldsPaymentOptions="customFieldsPaymentOptions"
        :isEditMode="isEditType"
        @payment-success="addNewPayment"
      ></preview-invoice>
    </div>
  </div>
</template>

<script>
import EditInvoicePanel from "./EditInvoicePanel.vue";
import PreviewInvoice from "./PreviewInvoice.vue";

export default {
  name: "AddNewInvoice",
  components: { PreviewInvoice, EditInvoicePanel },
  props: {
    toggleAddNewInvoicePopup: {
      type: Boolean,
    },
    isEditType: {
      type: Boolean,
      default: () => false,
    },
    getInvoiceId: {
      type: Number,
    },
  },
  data() {
    return {
      invoice: {
        customer: null,
        items: [],
        customFields: [],
        notes: null
      },
      invoiceId: null,
      customFieldsPaymentOptions: [],
      isEdit: false,
      editInvoiceDetails: {},
    };
  },
  mounted() {
    if (this.isEditType) {
      this.getInvoices(this.getInvoiceId);
    } else {
      this.resetInvoicesDetails();
    }
  },
  methods: {
    resetInvoicesDetails() {
      this.invoice = {
        customer: null,
        items: [],
        customFields: [],
        notes: null
      };
      this.invoiceId = null;
      this.customFieldsPaymentOptions = [];
      this.editInvoiceDetails = {};
      this.isEdit = false;
      this.$refs.editInvoicPanel.resetEditInvoicesDetails();
    },
    customFieldsOptions(options) {
      this.customFieldsPaymentOptions = options;
      // this.$emit('customFieldsOptions', options);
    },
    generateInvoicePayload() {
      const { customer, dueDate, invoiceNumber, notes, shippingAddress } = this.invoice || {};
      const { customer_id } = customer || {};
      const payload = {
        status: this.invoice.status, // status draft or requested
        customerId: customer_id || null,
        invoiceNumber: invoiceNumber || null,
        dueDate: dueDate || null,
        notes: notes || null,
        items: this.invoice.items,
        additionalCustomPayments: this.invoice.customFields,
        shippingAddress: shippingAddress || null,
      };
      return payload;
    },
    createInvoices() {
      this.$vs.loading();
      const payload = this.generateInvoicePayload();
      payload.additionalCustomPayments.forEach((item) => {
        delete item.isPercentage;
      });
      this.$store
        .dispatch("invoiceV2/createInvoices", payload)
        .then(() => {
          this.$vs.notify({
            color: "primary",
            title: "Create invoice",
            text: "Create invoice successfully.",
          });
          this.$emit("closeInvoicePopup");
          this.$emit("getInvoicesList");
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    editInvoices() {
      this.$vs.loading();
      const payload = this.generateInvoicePayload();
      payload.invoiceId = this.invoiceId;
      (payload.additionalCustomPayments || []).forEach((item) => {
        delete item.isPercentage;
      });
      this.$store
        .dispatch("invoiceV2/editInvoices", payload)
        .then(() => {
          this.$vs.notify({
            color: "primary",
            title: "Edit invoice",
            text: "Edit invoice successfully.",
          });
          this.$emit("closeInvoicePopup");
          this.$emit("getInvoicesList");
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    getInvoices(getInvoices) {
      this.$vs.loading();
      const payload = {
        invoiceId: getInvoices,
      };
      this.invoiceId = getInvoices;
      this.$store
        .dispatch("invoiceV2/getInvoices", payload)
        .then(({ data }) => {
          this.invoice = data.payload;
          this.invoice.customFields = data.payload.additionalCustomPayments;
          this.editInvoiceDetails = data.payload;
          this.isEdit = true;
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    submitInvoice(status) {
      this.$set(this.invoice, "status", status);
      if (!this.isEdit) {
        this.createInvoices();
      } else {
        this.editInvoices();
      }
    },
    addNewPayment(data) {
      if (data && this.invoice.invoicePayments) {
        this.invoice.invoicePayments = [...this.invoice.invoicePayments, data];
      }
    },
  },
};
</script>
