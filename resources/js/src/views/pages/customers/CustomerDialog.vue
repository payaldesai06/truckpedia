<template>
  <vs-popup
    class="customerFormPopup"
    :active.sync="toggleDialog"
    :breakpoints="{ '960px': '80vw', '640px': '100vw' }"
    title=""
  >
    <!-- Header Section -->
    <template #header>
      <div class="w-full flex items-center justify-end">
        <vs-icon
          class="cursor-pointer ml-2"
          icon="close"
          size="small"
          @click="closePopup"
        />
      </div>
    </template>
    <div>
      <CustomerDetails
        :toggleCustomerDialog="toggleDialog"
        :defaultValues="defaultValues"
        @closeCustomerPopup="closePopup"
        @getCustomerList="$emit('getCustomerList')"
      />
    </div>
    <!-- Main Content -->
  </vs-popup>
</template>

<script>
import CustomerDetails from './CustomerDetails';
export default {
  name: 'CustomerDialog',
  components: {
    CustomerDetails,
  },
  props: {
    toggleDialogForCustomer: {
      type: Boolean,
      required: false,
    },
    defaultValues: {
      type: Object,
      required: false,
    },
  },
  computed: {
    toggleDialog: {
      get() {
        return this.toggleDialogForCustomer;
      },
      set(val) {
        if (!val) {
          this.closePopup();
        }
      },
    },
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
      // this.toggleDialog = false;
    },
  },
};
</script>

<style lang="scss">
.customerFormPopup.con-vs-popup .vs-popup {
  width: 80%;
}
.customerFormPopup .vs-popup--header {
  background-color: #fff;
}
.customerFormPopup.con-vs-popup {
  z-index: 52034;
}
</style>
