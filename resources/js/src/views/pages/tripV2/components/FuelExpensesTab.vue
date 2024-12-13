<template>
  <div>
    <vx-card>
      <div class="vx-row">
        <div class="vx-col w-full">
          <h3 v-text="'Fuel Expenses'" />
        </div>
      </div>
      <DataTable
        :value="items"
        :paginator="true"
        :totalRecords="totalRecords"
        :lazy="true"
        :loading="loading"
        filterDisplay="row"
        responsiveLayout="scroll"
        :rows="rows"
        :rowsPerPageOptions="[10, 25, 50]"
        @page="onPage($event)"
      >
        <Column header="Date">
          <template #body="{ data }">
            {{ data.date }}
          </template>
          <template #filter>
            <div class="clearable-date-picker p-column-filter w-100">
              <flat-pickr
                class="date-filter"
                v-model="selectedDateRange"
                :config="flat_pikr_config"
                ref="flat-pickr"
                @on-change="handleFlatPickerInput"
              />
              <vs-icon
                v-if="filters['startDate'] || filters['endDate']"
                class="close-icon"
                icon="close"
                size="small"
                @click="clearDates"
              />
            </div>
          </template>
        </Column>
        <Column header="Location">
          <template #body="{ data }">
            {{ data.location }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['location']"
              @input="onFilter"
              class="p-column-filter input-filter"
            />
          </template>
        </Column>
        <Column header="Quantity">
          <template #body="{ data }">
            {{ parseFloat(data.quantity) }}
          </template>
        </Column>
        <Column header="Amount">
          <template #body="{ data }">
            {{ formatAmountValue(data.amount) }}
          </template>
        </Column>
        <Column header="Product">
          <template #body="{ data }">
            {{ data.product }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['product']"
              @input="onFilter"
              class="p-column-filter input-filter"
            />
          </template>
        </Column>
        <Column header="Fuel Card">
          <template #body="{ data }">
            {{ data && data.fuelCard ? data.fuelCard.cardNumber : '' }}
          </template>
        </Column>
        <Column header="Driver">
          <template #body="{ data }">
            {{ data.driver && data.driver.name }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['driverName']"
              @input="onFilter"
              class="p-column-filter input-filter"
            />
          </template>
        </Column>
        <Column header="Truck">
          <template #body="{ data }">
            {{ data.truck && data.truck.number }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['truck']"
              @input="onFilter"
              class="p-column-filter input-filter"
            />
          </template>
        </Column>
        <Column header="Trailer">
          <template #body="{ data }">
            {{ data.trailer && data.trailer.number }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['trailer']"
              @input="onFilter"
              class="p-column-filter input-filter"
            />
          </template>
        </Column>
        <template #empty><b>No records found</b></template>
      </DataTable>
    </vx-card>
  </div>
</template>
<script>
import { getApiErrorMsg, formatAmount } from '@/helpers/helper';
import { getObjectDifference } from '../../../../helpers/helper';

export default {
  name: 'FuelExpensesTab',
  data() {
    return {
      loading: false,
      items: [],
      totalRecords: 0,
      rows: 25,
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        defaultDate: [],
        altFormat: 'm/d/y',
        dateFormat: 'Y-m-d',
        altInput: true,
      },
      filters: {
        startDate: '',
        endDate: '',
        linkedUser: '',
        truck: '',
        trailer: '',
        location: '',
        product: '',
        driverName: '',
      },
      originalFilters: {
        startDate: '',
        endDate: '',
        linkedUser: '',
        truck: '',
        trailer: '',
        location: '',
        product: '',
        driverName: '',
      },
      dataFields: [
        'source',
        'date',
        'fuelCard',
        'driver',
        'truck',
        'trailer',
        'location',
        'amount',
        'quantity',
        'product',
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init(pageSize = 25, currentPage = 1) {
      try {
        const parameter = {
          page: currentPage,
          pageSize: pageSize,
          fields: this.dataFields,
        };
        const {
          data: { result, payload },
        } = await this.$store.dispatch('accounting/getFuelExpenses', parameter);
        if (result) {
          this.items =
            payload && payload.fuelExpenses ? payload.fuelExpenses : [];
          this.totalRecords =
            payload && payload.meta ? payload.meta.totalItems : 0;
        }
      } catch (error) {
        this.items = [];
        this.totalRecords = 0;
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async onFilter() {
      try {
        this.$emit('update:loading', true);
        await this.fetchData();
      } catch (error) {
        this.handleError(error);
      } finally {
        this.$emit('update:loading', false);
      }
    },
    async fetchData(pageSize = 25, currentPage = 1) {
      try {
        const filterParams = {
          page: currentPage,
          pageSize: pageSize,
          fields: this.dataFields,
        };
        const payloadFilters = getObjectDifference(
          this.originalFilters,
          this.filters
        );
        const res = await this.$store.dispatch('accounting/getFuelExpenses', {
          ...filterParams,
          ...payloadFilters,
        });
        this.items = res.data.payload.fuelExpenses;
      } catch (error) {
        this.handleError(error);
      }
    },
    async handleError(error) {
      await this.$vs.notify({
        time: 8000,
        color: 'danger',
        title: 'Error',
        text: getApiErrorMsg(error),
      });
    },
    handleFlatPickerInput() {
      if (!this.selectedDateRange) return;
      let [startDate, endDate] = this.selectedDateRange
        .split('to')
        .map((date) => date.trim());
      if (!endDate) {
        endDate = startDate;
      }
      this.filters.startDate = startDate;
      this.filters.endDate = endDate;
      this.onFilter();
    },
    clearDates() {
      this.filters.startDate = '';
      this.filters.endDate = '';
      this.selectedDateRange = '';
      this.onFilter();
    },
    onPage({ page, rows }) {
      this.init(rows, page + 1);
    },
    formatAmountValue(amount) {
      return formatAmount(amount);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .p-sortable-column,
  .p-datatable-tbody > tr > td {
    @apply truncate;
  }

  .p-datatable-table {
    min-height: 175px;
  }

  .p-column-filter-menu-button,
  .p-column-filter-clear-button {
    display: none !important;
  }
}

.clearable-date-picker {
  position: relative;
  .close-icon {
    position: absolute;
    right: 2%;
    top: 25%;
    cursor: pointer;
  }
}
.note-section {
  max-width: 300px;
}
.input-filter {
  width: 75% !important;
}
.date-filter {
  width: 100% !important;
}
</style>
