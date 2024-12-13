<template>
  <DataTable
    :value="lanesData"
    :lazy="true"
    :paginator="true"
    :rows="rows"
    :rowHover="true"
    :totalRecords="totalRecords"
    responsiveLayout="scroll"
    @sort="onSort($event)"
    @page="onPage($event)"
    :rowsPerPageOptions="[10, 25, 50]"
    class="lanes-table"
  >
    <Column field="code" header="Code"> </Column>
    <Column field="origin" header="Origin">
      <template #body="{ data: { origin } }">
        {{ `${origin.city}, ${origin.state}` }}
      </template>
    </Column>
    <Column field="destination" header="Destination">
      <template #body="{ data: { destination } }">
        {{ `${destination.city}, ${destination.state}` }}
      </template>
    </Column>
    <Column field="distance" header="Distance"> </Column>
    <Column field="rate" header="Rate">
      <template #body="{ data: { rate } }">
        {{ formattedAmount(rate) }}
      </template>
    </Column>
    <Column field="roundTripDistance" header="Round Trip Distance"> </Column>
    <Column field="roundTripRate" header="Round Trip Rate">
      <template #body="{ data: { roundTripRate } }">
        {{ formattedAmount(roundTripRate) }}
      </template>
    </Column>
    <Column field="notes" header="Notes"> </Column>
    <Column header="Actions" :headerStyle="{ width: '0.5rem' }">
      <template #body="{ data: { id } }">
        <div class="flex items-center gap-2">
          <vs-icon
            class="cursor-pointer"
            size="small"
            icon="edit"
            @click="handleEditLane(id)"
          />
          <vs-icon
            class="cursor-pointer text-danger"
            size="small"
            icon="delete"
            @click="openDeleteConfirmationModal(id)"
          />
        </div>
      </template>
    </Column>

    <template #empty><b>No records found</b></template>
    <template #footer v-if="footerText">
      <div class="vx-row flex justify-between items-center">
        <div class="vx-col">{{ footerText }}</div>
      </div>
    </template>
  </DataTable>
</template>

<script>
import { formatAmount, getApiErrorMsg } from '@/helpers/helper';
export default {
  data() {
    return {
      rows: 25,
    };
  },
  props: {
    lanesData: {
      type: Array,
      default: () => [],
    },
    totalRecords: {
      type: Number,
      default: () => 0,
    },
    paginationMetaData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    formattedAmount() {
      return (amount) => {
        return formatAmount(amount);
      };
    },
    footerText() {
      const { from, to, total } = this.paginationMetaData || {};
      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`;
      }
      return '';
    },
  },
  methods: {
    onSort({ sortField, sortOrder }) {
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? 'asc' : 'desc',
      };
    },
    onPage({ page, rows }) {
      this.$emit('fetchLanes', rows, page + 1);
    },
    openDeleteConfirmationModal(id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm',
        text: 'Are you sure. You want to delete this Lane?',
        acceptText: 'Yes',
        accept: () => this.handleDeleteLane(id),
      });
    },
    async handleDeleteLane(laneId) {
      try {
        const payload = {
          laneId,
          customerId: this.$route.params.id,
        };
        await this.$store.dispatch('customer/deleteCustomerLane', payload);
        this.$vs.notify({
          color: 'primary',
          title: 'Success',
          text: 'Customer Lane Deleted Successfully',
        });
        this.$emit('laneDeleted');
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    handleEditLane(id) {
      this.$emit('getLaneIdToEdit', id);
    },
  },
};
</script>
