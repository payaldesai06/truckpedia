<template>
  <DataTable
    :value="tableData"
    :lazy="true"
    :paginator="true"
    :rows="rows"
    :rowHover="true"
    :totalRecords="totalRecords"
    :rowsPerPageOptions="[10, 25, 50]"
    :loading="loading"
    responsiveLayout="scroll"
    @page="onPage($event)"
  >
    <template #empty> No records found </template>
    <Column field="number" header="Number"> </Column>
    <Column field="date" header="Date">
      <template #body="{ data: { date } }">
        {{ formatDate(date) }}
      </template>
    </Column>
    <Column field="amount" header="Amount">
      <template #body="{ data: { amount } }">
        {{ formatAmountValue(amount) }}
      </template>
    </Column>
    <Column field="account" header="Category">
      <template #body="{ data: { account } }">
        {{ account.name }}
      </template>
    </Column>
    <Column field="payToCustomer" header="Vendor">
      <template #body="{ data: { payToCustomer } }">
        {{ payToCustomer ? payToCustomer.name : '' }}
      </template>
    </Column>
    <Column field="linkedUser" header="Driver">
      <template #body="{ data: { linkedUser } }">
        {{ linkedUser ? linkedUser.name : '' }}
      </template>
    </Column>
    <Column field="linkedTruck" header="Truck">
      <template #body="{ data: { linkedTruck } }">
        {{ linkedTruck ? linkedTruck.number : '' }}
      </template>
    </Column>
    <Column field="linkedTrailer" header="Trailer">
      <template #body="{ data: { linkedTrailer } }">
        {{ linkedTrailer ? linkedTrailer.number : '' }}
      </template>
    </Column>
    <Column field="notes" header="Notes">
      <template #body="{ data: { notes } }">
        <div class="truncate note-section">{{ notes }}</div>
      </template>
    </Column>
    <Column field="action" header="Action" :sortable="false">
      <template #body="slotProps">
        <div class="flex items-center space-x-2">
          <vx-tooltip text="Edit">
            <vs-button
              color="primary"
              type="filled"
              icon-pack="feather"
              icon="icon-edit"
              size="small"
              radius
              @click.stop="editItem(slotProps.data.id)"
            ></vs-button>
          </vx-tooltip>
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script>
import dayjs from 'dayjs';
import { formatAmount } from '@/helpers/helper';
export default {
  name: 'TableList',
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    totalRecords: {
      type: Number,
    },
    rows: {
      type: Number,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    editItem(id) {
      this.$emit('editItem', id);
    },
    onPage({ page, rows }) {
      this.$emit('onPage', { page, rows });
    },
  },
  computed: {
    formatAmountValue() {
      return (amount) => {
        return formatAmount(amount);
      };
    },
    formatDate() {
      return (date) => {
        return dayjs(date).format('MM/DD/YYYY');
      };
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.note-section {
  max-width: 300px;
}
</style>
