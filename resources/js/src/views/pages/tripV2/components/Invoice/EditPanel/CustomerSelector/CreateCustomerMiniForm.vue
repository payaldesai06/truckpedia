<template>
  <div class="customer-min-form">
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <div class="vx-row">
          <!-- <div class="vx-col w-full mt-2">
            <label class="text-xs">Customer Type</label>
            <v-select
              :options="customerOptions"
              v-model="customerType"
              :clearable="false"
              :reduce="(option) => option.value"
              class="mb-4 md:mb-0"
            />
          </div> -->
          <div class="vx-col w-full mt-2">
            <label class="text-xs">Company Name</label>
            <vs-input
              v-model="customerName"
              name="customer-name"
              class="w-full"
            />
          </div>
          <div class="vx-col w-full mt-2">
            <label class="text-xs"> Payment Terms (No. of Days) </label>
            <vs-input
              type="number"
              v-model.number="billPaymentTerms"
              class="w-full"
            />
          </div>
          <!-- <div class="vx-col w-full mt-2">
            <label class="text-xs">Email</label>
            <vs-input
              type="email"
              v-model.trim="customerEmail"
              name="company_email"
              class="w-full"
            />
          </div> -->
          <div class="vx-col w-full mt-2">
            <label class="text-xs">Billing Email</label>
            <vs-input v-model.trim="billingEmail" type="email" class="w-full" />
          </div>
        </div>
      </div>
      <div class="vx-col w-1/2 m-auto px-auto">
        <div class="vx-row justify-center">
          <vs-button
            type="line"
            style="border: none"
            @click.stop="validateForm"
          >
            Save Customer
          </vs-button>
        </div>
        <div class="vx-row justify-center">
          <vs-button
            type="line"
            style="border: none"
            @click.stop="toggleAddNewCustomerDialog"
          >
            Add additional options
          </vs-button>
        </div>
        <div class="vx-row justify-center">
          <vs-button
            color="danger"
            type="line"
            @click="$emit('cancel')"
            style="border: none"
          >
            Cancel
          </vs-button>
        </div>
      </div>
      <!-- <div class="vx-col w-full mt-1">
        <vs-checkbox v-model="isCustomerEMailSameAsBillingEmail">
          (Check if same as email)
        </vs-checkbox>
      </div> -->
    </div>
    <!-- Customer Dialog -->
    <customer-dialog
      :toggleDialogForCustomer="isCustomerDialogActive"
      @closePopup="toggleAddNewCustomerDialog"
    />
  </div>
</template>

<script>
import CustomerDialog from '@/views/pages/customers/CustomerDialog.vue';
import { EventBus } from '@/helpers/eventBus';

export default {
  name: 'CreateCustomerMiniForm',
  components: {
    CustomerDialog,
  },

  computed: {
    customerData() {
      return {
        customer_type: 'customer',
        company_name: this.customerName,
        payment_terms_day: this.billPaymentTerms,
        billing_email: this.billingEmail,
      };
    },
  },
  data() {
    return {
      customerType: null,
      customerName: null,
      billPaymentTerms: null,
      billingEmail: null,
      customerEmail: null,
      isCustomerEMailSameAsBillingEmail: false,
      customerOptions: [
        {
          label: 'Broker',
          value: 'broker',
        },
        {
          label: 'Customer',
          value: 'customer',
        },
        {
          label: 'Factoring Companies',
          value: 'factoring_companies',
        },
        {
          label: 'Insurance Company',
          value: 'insurance_company',
        },
      ],
      isCustomerDialogActive: false,
    };
  },
  watch: {
    isCustomerEMailSameAsBillingEmail(val) {
      if (val) {
        this.billingEmail = this.customerEmail;
      } else if (this.billingEmail === this.customerEmail) {
        this.billingEmail = null;
      }
    },
    customerEmail(val) {
      if (this.isCustomerEMailSameAsBillingEmail) {
        this.billingEmail = val;
      }
    },
    billingEmail(val) {
      if (val !== this.customerEmail) {
        this.isCustomerEMailSameAsBillingEmail = false;
      }
    },
  },
  mounted() {
    EventBus.$on('customer-added', this.confirmCustomer);
  },
  methods: {
    toggleAddNewCustomerDialog() {
      this.isCustomerDialogActive = !this.isCustomerDialogActive;
    },
    confirmCustomer(data) {
      const { customer_id: customerId } = data || {};
      if (customerId) {
        this.$emit('customerAdded', customerId);
      }
    },
    validateForm() {
      this.createCustomer();
    },
    async createCustomer() {
      this.$vs.loading();
      try {
        const payload = {
          customer_type: 'customer',
          company_name: this.customerName,
          payment_terms_day: this.billPaymentTerms,
          billing_email: this.billingEmail,
          email: this.billingEmail,
        };
        const {
          payload: { customer_id: customerId },
        } = await this.$store.dispatch('customer/createCustomer', payload);
        this.$emit('customerAdded', customerId);
        this.$vs.notify({
          color: 'primary',
          title: 'Customer Added',
          text: 'Customer added successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text:
            (((error || {}).response || {}).data || {}).message ||
            'Something went wrong',
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .vs-button-linex {
    display: none;
  }
}
</style>
