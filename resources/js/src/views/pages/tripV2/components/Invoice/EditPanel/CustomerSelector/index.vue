<template>
  <vx-card class="mt-2">
    <header>
      <div class="vx-row flex justify-between items-end">
        <div class="vx-col">
          <h5 class="font-bold">Customer</h5>
        </div>
        <div class="vx-col flex">
          <vs-button
            v-if="!showNewCustomerBlock"
            color="primary"
            type="border"
            icon-pack="feather"
            icon="icon-plus"
            size="small"
            @click.stop="showNewCustomerBlock = true"
          >
            Add Customer
          </vs-button>
        </div>
      </div>
      <vs-divider />
    </header>
    <div class="vx-row mx-auto my-2" v-if="showNewCustomerBlock">
      <CreateCustomerMiniForm
        @customerAdded="newSelectCustomer"
        @cancel="showNewCustomerBlock = false"
      />
    </div>
    <section v-else>
      <div class="vx-row my-2 mx-auto">
        <div class="vx-col w-1/2">
          <v-select
            :options="customerOptions"
            label="company_name"
            :clearable="true"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
            @input="onCustomerChanged"
            v-model="customerInfo.selectedCustomer"
            placeholder="Select Customer"
          />
        </div>
        <div class="vx-col w-1/2">
          <div
            class="container m-auto"
            v-if="customerInfo.selectedCustomer && !showNewCustomerBlock"
          >
            <!-- <div class="vx-row"><strong> Customer Info: </strong></div> -->
            <div
              class="vx-row"
              v-if="customerInfo.selectedCustomer.company_name"
            >
              <span
                class="vx-col overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {{ customerInfo.selectedCustomer.company_name }}
              </span>
            </div>
            <div
              class="vx-row"
              v-if="customerInfo.selectedCustomer.billing_email"
            >
              <span
                class="vx-col overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {{ customerInfo.selectedCustomer.billing_email }}
              </span>
            </div>
            <!-- <div class="vx-row" v-if="customerInfo.selectedCustomer.billing_address">
              <span class="vx-col">
                {{ customerInfo.selectedCustomer.billing_address }}
              </span>
            </div> -->
          </div>
        </div>
      </div>
      <div class="vx-row mt-4 mb-2 mx-auto">
        <div class="vx-col w-1/2">
          <vs-input
            v-model="customerInfo.invoiceNumber"
            label="Invoice number"
            class="w-full"
          />
        </div>
        <div class="vx-col w-1/2">
          <label for="dueDate" class="vs-input--label">Due date</label>
          <flat-pickr
            name="dueDate"
            label="Due date"
            placeholder="Select date"
            class="w-full"
            v-model="customerInfo.dueDate"
          />
          <vs-icon
            class="clear-date-icon"
            icon="close"
            size="small"
            @click.native.stop="customerInfo.dueDate = null"
          />
        </div>
        <div class="vx-col w-1/2">
          <vs-input
            name="shippingAddress"
            placeholder="Address"
            v-model="customerInfo.shippingAddress"
            label="Shipping address"
            class="w-full"
          />
        </div>
      </div>
    </section>
  </vx-card>
</template>

<script>
export default {
  name: "CustomerSelector",
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    editInvoiceDetails: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    CreateCustomerMiniForm: () => import("./CreateCustomerMiniForm"),
  },
  async created() {
    await this.getAllCustomers();
  },
  data() {
    return {
      customerInfo: null,
      customerOptions: [],
      showNewCustomerBlock: false,
      editInvoiceDetailsCalled: false,
    };
  },
  watch: {
    value: {
      handler(value) {
        // console.log("value", value);
        this.customerInfo = value;
      },
      immediate: true,
    },
    customerInfo: {
      handler(value) {
        console.log("customerInfo", value);
        this.setDueDate();
        this.$emit("input", value);
      },
      deep: true,
    },
    editInvoiceDetails: {
      handler(value) {
        if (value && !this.editInvoiceDetailsCalled) {
          // It seems that this is only called when loading an existing invoice.
          // console.log("editInvoiceDetails", value);
          const info = this.customerOptions.filter(
            (item) => item.customer_id === value.customerId
          );
          this.customerInfo.selectedCustomer = info[0];
          this.customerInfo.invoiceNumber = value.invoiceNumber;
          this.customerInfo.dueDate = value.dueDate;
          this.customerInfo.shippingAddress = value.shippingAddress;
          // this is to fix the bug when you modify an existing invoice's items, customer is reset.
          this.editInvoiceDetailsCalled = true;
        }
      },
      deep: true,
    },
  },
  methods: {
    onCustomerChanged(value) {
      // Test cases: 1. Open existing invoice w/o customer/shipping address.
      // 2. Change customer for existing invoice.
      // 3. New invoice.
      // console.log("onCustomerChanged", value);
      this.customerInfo.shippingAddress = this.computeShippingAddress(value);
    },

    computeShippingAddress(customer) {
      if (
        customer &&
        (customer.address ||
          customer.city ||
          customer.state ||
          customer.zip_code)
      ) {
        return (
          customer.address +
          ", " +
          customer.city +
          ", " +
          customer.state +
          ", " +
          customer.zip_code
        );
      }
      return null;
    },

    async getAllCustomers() {
      try {
        const customerOptions = [];
        const { payload } = await this.$store.dispatch(
          "customer/getAllCustomers"
        );

        payload.data.forEach((item) => {
          const selectedCompanyObj = {
            billing_contact: item.billing_contact,
            billing_email: item.billing_email,
            billing_address: item.billing_address,
            billing_city: item.billing_city,
            billing_state: item.billing_state,
            billing_zip_code: item.billing_zip_code,
            billing_phone_number: item.billing_phone_number,
            customer_id: item.customer_id,
            payment_terms_day: item.payment_terms_day,
            address: item.address,
            city: item.city,
            state: item.state,
            zip_code: item.zip_code,
            shippingCarrierAcct: item.shippingCarrierAcct,
            salesRep: item.salesRep,
          };
          if (item.billToCodes.length) {
            item.billToCodes.forEach((code) => {
              let selectedCompany = {};
              selectedCompany.company_name = item.company_name + " - " + code;
              selectedCompany.bill_to_code = code;
              customerOptions.push({
                ...selectedCompanyObj,
                ...selectedCompany,
              });
            });
          } else {
            let selectedCompany = {};
            selectedCompany.company_name = item.company_name;
            selectedCompany.bill_to_code = null;
            customerOptions.push({
              ...selectedCompanyObj,
              ...selectedCompany,
            });
          }
        });
        this.customerOptions = customerOptions;
        if (this.editInvoiceDetails.customerId) {
          await this.selectCustomer(this.editInvoiceDetails.customerId);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async newSelectCustomer(customerId) {
      await this.getAllCustomers();
      const customer = this.customerOptions.find(
        (item) => item.customer_id === customerId
      );
      this.customerInfo.selectedCustomer = customer;
      this.onCustomerChanged(customer);
      this.showNewCustomerBlock = false;
    },
    async selectCustomer(customerId) {
      // await this.getAllCustomers();
      this.customerInfo.selectedCustomer = this.customerOptions.find(
        (item) => item.customer_id === customerId
      );
      this.showNewCustomerBlock = false;
    },
    setDueDate() {
      const { payment_terms_day } =
        (this.customerInfo || {}).selectedCustomer || {};
      if (!payment_terms_day) return;
      if (this.customerInfo.dueDate) return;
      let date = new Date();
      date.setDate(date.getDate() + parseInt(payment_terms_day));
      const newDate = date.toISOString().split("T", 1)[0];
      this.customerInfo.dueDate = newDate;
    },
  },
};
</script>

<style lang="scss" scoped>
.clear-date-icon {
  font-size: 1.2rem;
  position: relative;
  bottom: 27px;
  left: 90%;
  z-index: 10000;
  cursor: pointer;
}

// Utility classes
.text-ellipsis {
  text-overflow: ellipsis;
}

.whitespace-nowrap {
  white-space: nowrap;
}
</style>
