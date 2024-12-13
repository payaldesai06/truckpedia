<template>
  <vs-popup title="Mass Invoice" :active.sync="isActive">
    <vs-input
      type="number"
      label="Invoice number"
      v-model.number="massInvoiceNumber"
    />
    <div class="mt-4">
      <vs-button
        color="primary"
        type="filled"
        @click.stop="onSubmit"
        :disabled="isSubmitDisabled"
      >
        Submit
      </vs-button>
      <vs-button color="danger" type="filled" @click.stop="closePopup">
        Cancel
      </vs-button>
    </div>
  </vs-popup>
</template>
<script>
export default {
  name: 'MassInvoicePopup',
  props: {
    isPopupActive: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isActive: {
      get() {
        return this.isPopupActive;
      },
      set(val) {
        if (!val) {
          this.closePopup();
        }
      },
    },
    isSubmitDisabled() {
      return this.massInvoiceNumber == null || this.massInvoiceNumber === '';
    },
  },
  data() {
    return {
      massInvoiceNumber: null,
    };
  },
  methods: {
    clearForm() {
      this.massInvoiceNumber = null;
    },
    closePopup() {
      this.$emit('onClose');
      this.clearForm();
    },
    onSubmit() {
      this.$emit('onSubmit', this.massInvoiceNumber);
    },
  },
};
</script>
