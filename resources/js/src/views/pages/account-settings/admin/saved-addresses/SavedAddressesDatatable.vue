<template>
  <div class="vx-row">
    <!-- Sidebar -->
    <saved-addresses-sidebar
      v-if="addNewDataSidebar"
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      @address-updated="commonApiCall"
      :data="sidebarData"
      :customerOptions="customerOptions"
    />

    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Saved Addresses</h2>

      <vs-button type="filled" color="primary" @click.stop="addNewData"
        >Add Address</vs-button
      >
    </div>

    <div class="vx-col w-full" id="broker-datatable">
      <DataTable
        :value="items.data"
        :lazy="true"
        :paginator="true"
        :rows="rows"
        :rowHover="true"
        :totalRecords="totalRecords"
        :filters="filters"
        filterDisplay="row"
        :loading="loading"
        :scrollable="true"
        :style="{ width: '75vw' }"
        @sort="onSort($event)"
        @page="onPage($event)"
        :rowsPerPageOptions="[5, 10, 15]"
      >
        <template #empty> No records found </template>

        <Column
          field="name"
          header="Name"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.name }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['name']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="address"
          header="Address"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.address }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['address']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="city"
          header="City"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.city }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['city']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="state"
          header="State"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.state }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['state']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="zip_code"
          header="Zip Code"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.zip_code }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['zip_code']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="contact"
          header="Contact"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.contact }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['contact']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="phone"
          header="Phone"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.phone }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['phone']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="email"
          header="Email"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.email }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['email']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column header="Action">
          <template #body="slotProps">
            <div class="flex items-center space-x-2">
              <vs-button
                type="filled"
                color="#00cfe8"
                @click="editData(slotProps.data)"
              >
                Edit
              </vs-button>
            </div>
          </template>
        </Column>

        <Column header="">
          <template #body="slotProps">
            <div class="flex items-center space-x-2">
              <vs-button
                type="filled"
                color="#FF0000"
                @click="onConfirmDelete(slotProps.data)"
              >
                Delete
              </vs-button>
            </div>
          </template>
        </Column>

        <template #footer>
          In total there are {{ totalRecords }} items.
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import DatatableMixin from '@/mixins/datatableMixin';
import SavedAddressesSidebar from './SavedAddressesSidebar';
import { mapState } from 'vuex';

export default {
  name: 'SavedAddressesDatatable',

  mixins: [DatatableMixin],

  components: {
    SavedAddressesSidebar,
  },

  data() {
    return {
      active: 0,
      inactive: 0,
      filters: {
        name: '',
        contact: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
      },
      customerOptions: [],

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
    };
  },

  mounted() {
    this.commonApiCall();
  },

  computed: {
    ...mapState('saved-addresses', { items: 'addresses' }),
  },

  methods: {
    /**
     * Active User
     */
    onConfirmDelete(address) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: 'Confirm',
        text: 'Are you sure. You want to Delete this Address?',
        acceptText: 'Yes',
        accept: () => this.deleteAddress(address),
      });
    },

    async getCustomerOptions() {
      try {
        const {
          payload: { data },
        } = await this.$store.dispatch('customer/getAllCustomers');

        if (data && data.length) {
          data.forEach((item) => {
            const selectedCompanyObj = {
              billing_email: item.billing_email,
              billing_address: item.billing_address,
              billing_city: item.billing_city,
              billing_state: item.billing_state,
              billing_zip_code: item.billing_zip_code,
              customer_id: item.customer_id,
            };
            if (item.billToCodes.length) {
              item.billToCodes.forEach((code) => {
                const selectedCompany = {};
                selectedCompany.company_name = `${item.company_name} - ${code}`;
                selectedCompany.bill_to_code = code;
                this.customerOptions.push({
                  ...selectedCompanyObj,
                  ...selectedCompany,
                });
              });
            } else {
              const selectedCompany = {};
              selectedCompany.company_name = item.company_name;
              selectedCompany.bill_to_code = null;
              this.customerOptions.push({
                ...selectedCompanyObj,
                ...selectedCompany,
              });
            }
          });
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },

    async commonApiCall(filter = {}) {
      this.loading = true;

      await this.$store
        .dispatch('saved-addresses/getSavedAddressesDatatable', {
          eventForServer: this.eventForServer,
          filter,
        })
        .then((data) => {
          this.active = data.meta.active_shipper;
          this.inactive = data.meta.inactive_shipper;
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => (this.loading = false));
    },

    async deleteAddress(data) {
      this.loading = true;
      await this.$store
        .dispatch('saved-addresses/deleteAddress', data.id)
        .then(() => {
          this.$vs.notify({
            color: 'primary',
            title: 'Address Deleted',
            text: 'Address deleted successfully.',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => (this.loading = false));
    },

    // sidebar
    async addNewData() {
      this.sidebarData = {};
      if (!this.customerOptions.length) {
        await this.getCustomerOptions();
      }
      this.toggleDataSidebar(true);
    },

    async editData(data) {
      this.sidebarData = data;
      if (!this.customerOptions.length) {
        await this.getCustomerOptions();
      }
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },
  },
};
</script>

<style scoped></style>
