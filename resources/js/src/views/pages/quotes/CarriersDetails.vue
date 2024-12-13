<template>
  <div>
    <div class="CarrierBtn">
      <vs-button @click="toggleSidebar(true)"> Add Carrier </vs-button>
      <!-- Customer Dialog -->
      <customer-dialog
        v-if="isSidebarActive"
        :toggleDialogForCustomer="isSidebarActive"
        :defaultValues="customerDefaultValues"
        @closePopup="toggleSidebar"
        @getCustomerList="getAllCustomers"
      />
    </div>
    <div>
      <h4 class="font-bold mb-5">{{ listHeading || 'My Carriers' }}</h4>
      <DataTable
        :value="carrierDetails"
        responsiveLayout="scroll"
        :rowHover="false"
        :filters="filters"
        :scrollable="true"
        :selection.sync="selectedCarriers"
      >
        <Column
          header=""
          selectionMode="multiple"
          :headerStyle="{ width: '0.5rem' }"
        ></Column>
        <Column field="companyName" header="Company"></Column>
        <Column field="primaryContact" header="Contact"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="city" header="Location"></Column>
      </DataTable>
    </div>
    <div class="bookNow my-5">
      <a href="javascript:void(0)">Book Now Rate?</a>
      <div class="input-with-currency">
        <div class="icon">$</div>
        <input
          v-model.number="value.bookNowRate"
          class="price"
          type="number"
          inputmode="numeric"
          @blur="validateRate"
        />
      </div>
      <span class="text-danger text-sm" v-if="validationErrors.bookNowRate">
        {{ validationErrors.bookNowRate }}
      </span>
    </div>
    <!-- <div class="my-3">
      <vs-radio v-model="carrierBook" name="hazardous-goods" vs-value="yes"
        >Yes</vs-radio
      >
      <vs-radio v-model="carrierBook" name="hazardous-goods" vs-value="no"
        >No</vs-radio
      >
    </div> -->
    <div class="CarrierBtn flex justify-between">
      <vs-button color="primary" type="filled" @click="backToQuote"
        >Back</vs-button
      >
      <vs-button color="primary" type="filled" @click="redirectToQuotaRequest"
        >Next</vs-button
      >
    </div>
  </div>
</template>

<script>
// TODO: Rename 'CarrierRequest' (including filename) to 'CarrierList', and put into components/.
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'CarrierRequest',
  components: {
    CustomerDialog: () => import('@/views/pages/customers/CustomerDialog'),
  },
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    listHeading: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      carrierDetails: [],
      selectedCarriers: null,
      // carrierBook: '',
      totalRecords: 0,
      filters: {},
      validationErrors: {
        bookNowRate: null,
      },
      isSidebarActive: false,
      customerDefaultValues: {
        type: 'carrier',
      },
    };
  },
  async mounted() {
    await this.getAllCustomers();
  },

  methods: {
    redirectToQuotaRequest() {
      if (!this.selectedCarriers || this.selectedCarriers.length === 0) {
        this.$vs.notify({
          title: 'Error',
          text: 'Please select at least one carrier.',
          color: 'danger',
        });
      } else if (this.validationErrors.bookNowRate) {
        this.$vs.notify({
          title: 'Error',
          text: 'Please enter valid rate.',
          color: 'danger',
        });
      } else {
        // TODO: change event name for this.$emit('showQuotesEmails'.
        this.$emit('processQuotesEmails', this.selectedCarriers);
      }
    },
    backToQuote() {
      // this.$router.push({ name: 'quote' });
      this.$emit('backToQuotes');
    },
    async getAllCustomers() {
      try {
        const { payload } = await this.$store.dispatch('customer/list', {
          filters: {
            status: ['active'],
            type: ['carrier'],
          },
          fieldsToQuery: [
            'email',
            'ccEmails',
            'city',
            'state',
            'primaryContact',
          ],
        });

        this.carrierDetails = payload.customers || [];
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    validateRate() {
      if (this.value.bookNowRate) {
        if (this.value.bookNowRate < 0) {
          this.validationErrors.bookNowRate =
            'Rate must be greater than or equal to 0';
        } else {
          this.validationErrors.bookNowRate = null;
        }
      } else {
        this.validationErrors.bookNowRate = null;
      }
    },
    toggleSidebar(val = false) {
      this.isSidebarActive = val;
    },
  },
};
</script>

<style scoped lang="scss">
.CarrierBtn {
  display: flex;
  justify-content: flex-end;
  margin: 25px 0px;

  button {
    padding: 14px 24px;
    border-radius: 5px;
    color: #fff;
    background-color: #3975eb;
    outline: none;
    border: 1px solid #3975eb;
    cursor: pointer;
  }
}

.bookNow {
  color: #3975eb;
  font-weight: 700;

  .input-with-currency {
    padding: 8px;
    margin: 10px 0px;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    outline: none;
    max-width: 300px;
    display: flex;
    align-items: center;

    .icon {
      background-color: #333;
      padding: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      color: #fff;
    }

    .price {
      height: 100%;
      width: 100%;
      padding: 10px;
      border: none;
      margin-left: 15px;
    }
  }
}
</style>
