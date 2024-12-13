<template>
  <div class="mt-5">
    <div class="flex items-center justify-end gap-4">
      <flat-pickr
        v-if="selectedType !== 'pendingTrailerRecovery'"
        v-model="selectedDateRange"
        :config="flat_pikr_config"
        ref="flat-pickr"
        placeholder="Select Date Range"
        @on-change="changeDateRange"
        style="width: 14rem; max-height: 40px"
      />
      <v-select
        v-model="selectedType"
        :reduce="(type) => type.value"
        :clearable="false"
        :options="types"
        label="title"
        placeholder="Select Type"
        style="width: 250px"
      />
      <vs-button color="primary" @click="toggleAddModal(true, null)">
        Add New
      </vs-button>
    </div>
    <div class="mt-5">
      <List
        :list="list"
        :types="types"
        :total-records="totalRecords"
        :selected-type="selectedType"
        :paginationMetaData="paginationMetaData"
        @refresh="changePaginationData"
        @filtersChanged="onFiltersChanged"
        @itemForEdit="itemForEdit"
      />
    </div>
    <!-- Sidebar for adding accessorial services -->
    <AddAccessorialServices
      :isModalActive="accessorialModal.isActive"
      :isModalData="accessorialModal.data"
      :selected-type="selectedType"
      @refresh="fetchAccessorialServices"
      @onClose="toggleAddModal(false, null)"
    />
  </div>
</template>

<script>
import List from './List.vue';
import { getApiErrorMsg, formatDate } from '@/helpers/helper';
import AddAccessorialServices from './AddAccessorialServices.vue';
export default {
  name: 'AccessorialServiceTab',
  components: {
    List,
    AddAccessorialServices,
  },
  data() {
    return {
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        defaultDate: [
          this.$dayjs().startOf('month').toDate(),
          this.$dayjs().endOf('month').toDate(),
        ],
      },
      types: [
        {
          title: 'Trailer Movement',
          value: 'trailerMovement',
        },
        {
          title: 'Trailer Recovery',
          value: 'trailerRecovery',
        },
        {
          title: 'Hazmat',
          value: 'hazmat',
        },
        {
          title: 'Bobtail',
          value: 'bobtail',
        },
        {
          title: 'Pending Trailer Recovery',
          value: 'pendingTrailerRecovery',
        },
      ],
      selectedType: 'trailerMovement',
      totalRecords: 0,
      paginationMetaData: {},
      list: [],
      accessorialModal: {
        isActive: false,
        data: null,
      },
      pagination: {
        page: 1,
        size: 25,
      },
      filters: {},
    };
  },
  created() {
    this.configDateFlatPickr();
  },
  mounted() {
    this.fetchAccessorialServices();
  },
  methods: {
    configDateFlatPickr() {
      const defaultDate = this.flat_pikr_config.defaultDate;
      this.selectedDateRange = `${formatDate(defaultDate[0])} to ${formatDate(
        defaultDate[1]
      )}`;
    },
    async fetchAccessorialServices() {
      const dateStrings = this.selectedDateRange.split(' to ');
      const startDate = dateStrings[0];
      const endDate = dateStrings[1] ? dateStrings[1] : dateStrings[0];
      if (startDate && endDate) {
        try {
          this.$vs.loading();

          const payload = {
            page: this.pagination.page,
            pageSize: this.pagination.size,
            ...this.filters,
            types: [this.selectedType],
            ...(this.selectedType === 'pendingTrailerRecovery'
              ? {}
              : { startDate, endDate }),
            fields: [
              'type',
              'date',
              'trailerMoves',
              'trailerNumber',
              'reference',
              'city',
              'state',
              'locationName',
              'amount',
              'createdBy',
            ],
          };
          const { data } = await this.$store.dispatch(
            'accounting/getAccesorialServices',
            payload
          );
          this.list = data.payload.accessorialServices;
          this.paginationMetaData = data.payload.meta;
          const { totalItems } = data.payload.meta || {};
          this.totalRecords = totalItems || 0;
        } catch (error) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        } finally {
          this.$vs.loading.close();
        }
      } else {
        this.showDateRangeError();
      }
    },
    toggleAddModal(value, data) {
      this.accessorialModal.isActive = value;
      this.accessorialModal.data = data;
    },
    showDateRangeError() {
      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: 'Please select valid date range',
      });
    },
    async itemForEdit(id) {
      try {
        this.$vs.loading();
        const { data } = await this.$store.dispatch(
          'accounting/getAccesorialServicesById',
          id
        );
        this.toggleAddModal(true, data.payload);
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    changePaginationData(size = 25, page = 1, refresh = false) {
      this.pagination.size = size;
      this.pagination.page = page;
      if (refresh) {
        this.fetchAccessorialServices();
      }
    },
    changeDateRange(selectedDateRange, dateString) {
      const isValidDate = selectedDateRange.length === 2;

      if (isValidDate) {
        this.fetchAccessorialServices();
      }
    },
    onFiltersChanged($event) {
      if ($event.startDate && $event.endDate) {
        this.selectedDateRange = `${$event.startDate} to ${$event.endDate}`;
      }
      this.filters = $event;
      this.fetchAccessorialServices();
    },
  },
  watch: {
    'pagination.page': {
      handler(newValue, oldValue) {
        if (newValue === oldValue) {
          return;
        }

        this.fetchAccessorialServices();
      },
    },
    'pagination.size': {
      handler(newValue, oldValue) {
        if (newValue === oldValue) {
          return;
        }

        this.fetchAccessorialServices();
      },
    },
    selectedType: {
      handler(val, oldVal) {
        if (
          val === 'pendingTrailerRecovery' ||
          oldVal === 'pendingTrailerRecovery'
        ) {
          delete this.filters.startDate;
          delete this.filters.endDate;
          this.configDateFlatPickr();
        }
        this.fetchAccessorialServices();
      },
    },
  },
};
</script>
