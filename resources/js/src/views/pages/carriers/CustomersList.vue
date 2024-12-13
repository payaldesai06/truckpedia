<template>
  <vx-card>
    <div class="vx-row m-0 flex justify-between items-center w-full">
      <div class="vx-col pl-0 flex items-center">
        <h3 v-text="'Carriers'" />
      </div>
      <div class="vx-col pr-0 flex">
        <vs-button
          class="ml-4"
          type="filled"
          color="primary"
          @click.stop="redirectToAddCustomer"
        >
          Add New Carrier
        </vs-button>
      </div>
    </div>
    <vs-divider />
    <div class="vx-row">
      <div class="vx-col w-full">
        <DataTable
          :value="customersList"
          :lazy="true"
          :paginator="true"
          :rows="rows"
          :rowHover="true"
          :totalRecords="totalRecords"
          :filters="filters"
          filterDisplay="row"
          :loading="loading"
          @sort="onSort($event)"
          @page="onPage($event)"
          :rowsPerPageOptions="[10, 25, 50]"
          responsiveLayout="scroll"
          removableSort
        >
          <template #empty> No records found </template>

          <Column
            field="companyName"
            header="Company Name"
            :sortable="true"
            :showFilterMenu="false"
            :headerStyle="{ minWidth: '160px' }"
          >
            <template #body="slotProps">
              {{ slotProps.data.companyName }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['companyName']"
                @input="onInputFilter"
                class="p-column-filter"
              />
            </template>
          </Column>

          <Column
            field="primaryContact"
            header="Main Contact"
            :sortable="true"
            :showFilterMenu="false"
            :headerStyle="{ minWidth: '160px' }"
          >
            <template #body="slotProps">
              {{ slotProps.data.primaryContact }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['primaryContact']"
                @input="onInputFilter"
                class="p-column-filter"
              />
            </template>
          </Column>

          <Column
            field="phoneNumber"
            header="Phone Number"
            :sortable="true"
            :showFilterMenu="false"
            :headerStyle="{ minWidth: '160px' }"
          >
            <template #body="slotProps">
              {{ slotProps.data.phoneNumber }}
            </template>
            <template #filter>
              <InputText
                v-model="filters['phoneNumber']"
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

          <Column
            field="billingContact"
            header="Bill Contact"
            :sortable="true"
            :showFilterMenu="false"
            :headerStyle="{ minWidth: '160px' }"
          >
            <template #body="slotProps">
              {{ slotProps.data.billingContact }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['billingContact']"
                @input="onInputFilter"
                class="p-column-filter"
              />
            </template>
          </Column>

          <Column
            field="billingEmail"
            header="Bill Email"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.billingEmail }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['billingEmail']"
                @input="onInputFilter"
                class="p-column-filter"
              />
            </template>
          </Column>

          <!-- <Column
            field="payment_terms_day"
            header="Payment Term"
            :sortable="true"
            :showFilterMenu="false"
            :headerStyle="{ minWidth: '160px' }"
          >
            <template #body="slotProps">
              {{ `${slotProps.data.payment_terms_day} days net` }}
            </template>
            <template #filter>
              <InputText
                type="number"
                v-model="filters['payment_terms_day']"
                @input="onInputFilter"
                class="p-column-filter"
              />
            </template>
          </Column> -->

          <Column header="Action">
            <template #body="{ data }">
              <div class="flex items-center space-x-2">
                <vs-button
                  type="filled"
                  color="#00cfe8"
                  @click="editCustomer(data.id)"
                >
                  Edit
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
  </vx-card>
</template>
<script>
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'CustomersList',
  data() {
    return {
      rows: 10,
      currentPage: 0,
      rowsPerPageOptions: [5, 10, 15],
      loading: false,
      totalRecords: 0,
      sort: {
        field: null,
        order: null,
      },
      filters: {
        type: ['carrier'],
        companyName: '',
        primaryContact: '',
        phoneNumber: '',
        email: '',
        billingContact: '',
        billingEmail: '',
      },
      customersList: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();
        await this.fetchCustomers();
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async fetchCustomers() {
      try {
        this.loading = true;

        const {
          payload: { customers, meta },
        } = await this.$store.dispatch('customer/list', {
          page: this.currentPage + 1,
          pageSize: this.rows,
          sortBy: Object.keys(this.sort).reduce((acc, key) => {
            if (this.sort[key]) {
              acc[key] = this.sort[key];
            }

            return acc;
          }, {}),
          filters: Object.keys(this.filters).reduce((acc, key) => {
            if (this.filters[key]) {
              acc[key] = this.filters[key];
            }

            return acc;
          }, {}),
          fieldsToQuery: [
            'primaryContact',
            'phoneNumber',
            'email',
            'billingContact',
            'billingEmail',
          ],
        });

        this.customersList = customers;
        this.totalRecords = (meta || {}).totalItems || 0;
        this.rows = (meta || {}).perPage ? Number((meta || {}).perPage) : 10;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
    redirectToAddCustomer() {
      this.$router.push({ name: 'carriers-add' }).catch(() => true);
    },
    onSort({ sortField, sortOrder }) {
      this.sort = {
        field: sortField,
        order: sortField ? (sortOrder === 1 ? 'asc' : 'desc') : null,
      };
      this.fetchCustomers();
    },
    onPage({ rows, page }) {
      this.rows = rows;
      this.currentPage = page;
      this.fetchCustomers();
    },
    onInputFilter() {
      this.fetchCustomers();
    },
    editCustomer(id) {
      this.$router
        .push({
          name: 'carriers-edit',
          params: { id },
        })
        .catch(() => true);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .vs-input--icon {
    top: 10px;
  }

  .p-column-filter-clear-button {
    display: none;
  }
}

// Utility

.vx-card {
  box-shadow: none !important;
}
</style>
