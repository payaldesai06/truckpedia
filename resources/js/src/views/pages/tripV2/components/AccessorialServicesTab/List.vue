<template>
  <DataTable
    :value="list"
    :lazy="true"
    :paginator="true"
    :rows="rows"
    :rowHover="true"
    :scrollable="true"
    :totalRecords="totalRecords"
    :loading="loading"
    responsiveLayout="scroll"
    columnResizeMode="expand"
    filterDisplay="row"
    @page="onPage($event)"
    :rowsPerPageOptions="[10, 25, 50]"
  >
    <Column field="date" header="Date" :sortable="false">
      <template #body="{ data: { date } }">
        {{ $dayjs(date).format('MM/DD/YYYY') }}
      </template>
    </Column>
    <Column field="locationName" header="Name" :sortable="false"> </Column>
    <Column header="Location" :sortable="false">
      <template #body="{ data: { city, state } }">
        <template>
          {{ city }}{{ city && state ? ',' : '' }} {{ state }}
        </template>
      </template>
      <template #filter>
        <InputText
          type="text"
          v-model="filters['location']"
          @input="debouncedOnInputFilter"
          class="p-column-filter w-3/4"
        />
      </template>
    </Column>
    <Column
      field="trailerMoves"
      header="Moves"
      :sortable="false"
      :hidden="changedSelectedType !== 'trailerMovement' ? true : false"
    >
    </Column>
    <Column
      field="trailerNumber"
      header="Trailer"
      :sortable="false"
      :hidden="changedSelectedType !== 'trailerRecovery' ? true : false"
    >
    </Column>
    <Column
      field="type"
      header="Type"
      :sortable="false"
      :hidden="changedSelectedType !== 'hazmat-and-bobtail' ? true : false"
    >
      <template #body="{ data: { type } }">
        {{ type[0].toUpperCase() + type.substring(1) }}
      </template>
    </Column>
    <Column field="reference" header="Reference" :sortable="false">
      <template #filter>
        <InputText
          type="text"
          v-model="filters['reference']"
          @input="debouncedOnInputFilter"
          class="p-column-filter w-3/4"
        />
      </template>
    </Column>
    <Column field="amount" header="Amount" :sortable="false">
      <template #body="{ data: { amount } }">
        {{ formattedAmount(amount) }}
      </template>
    </Column>

    <Column header="Actions" :headerStyle="{ width: '0.5rem' }">
      <template #body="{ data: { id } }">
        <div class="flex items-center gap-2">
          <vs-icon
            v-if="editableField"
            class="cursor-pointer"
            size="small"
            icon="edit"
            @click.stop="handleEditService(id)"
          />
          <vs-icon
            class="cursor-pointer text-danger"
            size="small"
            icon="delete"
            @click.stop="openDeleteConfirmation(id)"
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
import {
  formatAmount,
  getApiErrorMsg,
  getObjectDifference,
} from '@/helpers/helper';

export default {
  name: 'AccessorialServicesList',
  props: {
    list: {
      required: true,
      type: Array,
    },
    selectedType: {
      required: true,
      type: String,
    },
    totalRecords: {
      required: true,
      type: Number,
    },
    paginationMetaData: {
      required: true,
      type: Object,
    },
    types: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rows: 25,
      loading: false,
      changedSelectedType: '',
      currentPage: 1,
      refresh: false,
      nonEditableFields: ['pendingTrailerRecovery'],
      filters: {
        location: '',
        reference: '',
      },
      originalFilters: {},
      debounceTimeout: null,
    };
  },
  created() {
    this.originalFilters = structuredClone(this.filters);
  },
  computed: {
    editableField() {
      return !this.nonEditableFields.includes(this.selectedType);
    },
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
    handleEditService(id) {
      this.$emit('itemForEdit', id);
    },
    openDeleteConfirmation(id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Accessorial Service',
        text: 'Are you sure to remove this accessorial service?',
        accept: () => this.handleDeleteService(id),
      });
    },
    async handleDeleteService(id) {
      try {
        await this.$store.dispatch('accounting/deleteAccessorialServices', id);
        // if there is only  one element on current page go back to previous page
        if (this.list.length === 1 && this.currentPage > 1) {
          document.querySelector('.p-highlight').previousSibling.click();
        } else {
          // refresh the current page
          this.refresh = true;
          document.querySelector('.p-highlight').click();
        }
        this.$vs.notify({
          color: 'primary',
          title: 'Success',
          text: 'Accessorial Service Deleted Successfully',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async onInputFilter() {
      this.$emit(
        'filtersChanged',
        getObjectDifference(this.originalFilters, this.filters)
      );
    },
    debounce(func, delay) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(func, delay);
    },
    debouncedOnInputFilter(event, inputType = 'text') {
      if (inputType === 'text') {
        this.debounce(() => {
          this.onInputFilter(event);
        }, 800);
      } else {
        this.onInputFilter(event);
      }
    },
    onPage({ page, rows }) {
      this.rows = rows;
      this.currentPage = page + 1;
      this.$emit('refresh', rows, page + 1, this.refresh);
      this.refresh = false;
    },
  },
  watch: {
    list: {
      handler() {
        this.changedSelectedType = this.selectedType;
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .p-column-filter-menu-button,
  .p-column-filter-clear-button {
    display: none !important;
  }
  .p-column-filter {
    width: auto;
  }
}
</style>
