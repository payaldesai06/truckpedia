<template>
  <div>
    <vx-card>
      <div class="vx-row">
        <div class="vx-col w-full">
          <h3 v-text="'Driver Pay Manager'" />
        </div>
      </div>
      <div class="vx-row mt-5">
        <div class="vx-col w-full">
          <DataTable
            :value="items"
            :lazy="true"
            :paginator="true"
            :rows="rows"
            :rowHover="true"
            :totalRecords="totalRecords"
            :filters="filters"
            filterDisplay="row"
            :loading="loading"
            responsiveLayout="scroll"
            @sort="onSort($event)"
            @page="onPage($event)"
            :rowsPerPageOptions="[10, 25, 50]"
            removableSort
          >
            <Column
              field="tripNumber"
              header="Trip #"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.tripNumber }}
              </template>
              <template #filter>
                <InputText
                  type="text"
                  v-model.number="filters['tripNumber'].value"
                  @input="onFilter"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>
            <Column
              field="tripStartDate"
              header="Trip StartDate"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.tripStartDate }}
              </template>
              <template #filter>
                <div class="clearable-date-picker p-column-filter w-full">
                  <flat-pickr
                    v-model="filters['tripStartDate'].value"
                    class="date-picker"
                    @on-change="onFilter"
                  />
                  <vs-icon
                    v-if="filters['tripStartDate'].value"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="filters['tripStartDate'].value = ''"
                  />
                </div>
              </template>
            </Column>
            <Column
              field="tripEndDate"
              header="Trip EndDate"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.tripEndDate }}
              </template>
              <template #filter>
                <div class="clearable-date-picker p-column-filter w-full">
                  <flat-pickr
                    v-model="filters['tripEndDate'].value"
                    class="date-picker"
                    @on-change="onFilter"
                  />
                  <vs-icon
                    v-if="filters['tripEndDate'].value"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="filters['tripEndDate'].value = ''"
                  />
                </div>
              </template>
            </Column>
            <Column
              field="accountPayableName"
              header="Account Payable"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                <span>{{ slotProps.data.accountPayableName }}</span>
              </template>
              <template #filter>
                <InputText
                  type="text"
                  v-model="filters['accountPayableName'].value"
                  @input="onFilter"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>
            <Column
              field="totalLoadedDistance"
              header="Total Miles"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{
                  slotProps.data.totalLoadedDistance
                    ? parseFloat(slotProps.data.totalLoadedDistance).toFixed(2)
                    : ''
                }}
              </template>
              <template #filter>
                <!-- <InputText
                type="text"
                v-model="filters['totalLoadedDistance']"
                @input="onFilter"
                class="p-column-filter w-full"
              /> -->
              </template>
            </Column>
            <Column
              field="totalPayment"
              header="Amount"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{
                  slotProps.data.totalPayment
                    ? `$${slotProps.data.totalPayment}`
                    : ''
                }}
              </template>
            </Column>
            <Column
              field="status"
              header="Status"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ sentenceCase(slotProps.data.status) }}
              </template>
              <template #filter="{}">
                <Dropdown
                  v-model="filters['status'].value"
                  @change="onFilter()"
                  :options="statuses"
                  placeholder="Any"
                  class="p-column-filter"
                  :showClear="true"
                >
                  <template #value="slotProps">
                    <span v-if="slotProps.value">{{
                      sentenceCase(slotProps.value)
                    }}</span>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <span>{{ sentenceCase(slotProps.option) }}</span>
                  </template>
                </Dropdown>
              </template>
            </Column>
            <Column
              field="createdDate"
              header="Request Date"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.createdDate }}
              </template>
              <template #filter>
                <div class="clearable-date-picker p-column-filter w-full">
                  <flat-pickr
                    v-model="filters['createdDate'].value"
                    class="date-picker"
                    @on-change="onFilter"
                  />
                  <vs-icon
                    v-if="filters['createdDate'].value"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="filters['createdDate'].value = ''"
                  />
                </div>
              </template>
            </Column>
            <Column
              field="approvedDate"
              header="Approved Date"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.approvedDate }}
              </template>
              <template #filter>
                <div class="clearable-date-picker p-column-filter w-full">
                  <flat-pickr
                    v-model="filters['approvedDate'].value"
                    class="date-picker"
                    @on-change="onFilter"
                  />
                  <vs-icon
                    v-if="filters['approvedDate'].value"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="filters['approvedDate'].value = ''"
                  />
                </div>
              </template>
            </Column>
            <Column
              field="approvedByUserName"
              header="Approved By"
              :sortable="true"
              :showFilterMenu="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.approvedByUserName }}
              </template>
              <template #filter>
                <InputText
                  type="text"
                  v-model="filters['approvedByUserName'].value"
                  @input="onFilter"
                  class="p-column-filter w-full"
                />
              </template>
            </Column>
            <Column header="Action">
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
                      @click.stop="editData(slotProps.data.tripId)"
                    ></vs-button>
                  </vx-tooltip>
                  <vx-tooltip text="Delete">
                    <vs-button
                      color="danger"
                      type="filled"
                      icon-pack="feather"
                      icon="icon-trash"
                      size="small"
                      radius
                      @click.stop="deleteData(slotProps.data.tripId)"
                    ></vs-button>
                  </vx-tooltip>
                  <vx-tooltip
                    text="Mark as Paid"
                    v-if="slotProps.data.status === 'approved'"
                  >
                    <vs-button
                      color="success"
                      type="filled"
                      icon="done"
                      size="small"
                      radius
                      @click.stop="
                        onConfirmChangeTripStatus(slotProps.data.tripId, 'paid')
                      "
                    ></vs-button>
                  </vx-tooltip>
                  <vx-tooltip
                    text="Invoice"
                    v-if="
                      ['approved', 'paid'].includes(slotProps.data.status) &&
                      slotProps.data.url
                    "
                  >
                    <vs-icon
                      @click="downloadFile(slotProps.data.url)"
                      size="small"
                      icon="attachment"
                      class="papper-clip-vertical"
                      style="cursor: pointer"
                    ></vs-icon>
                  </vx-tooltip>
                </div>
              </template>
            </Column>
            <template #empty><b>No records found</b></template>
            <template #footer v-if="footerText">
              {{ footerText }}
            </template>
          </DataTable>
        </div>
      </div>
    </vx-card>

    <LoadSideBar
      :isSidebarActive="sidebar.isActive"
      :recordId="sidebar.recordID"
      @closeSidebar="closeSidebar"
    />
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'DriversPayTab',
  components: {
    LoadSideBar: () => import('./LoadSideBar'),
  },
  computed: {
    footerText() {
      const { from, to, total } = this.metaData || {};

      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`;
      }

      return null;
    },
  },
  data() {
    return {
      items: [],
      totalRecords: 0,
      loading: false,
      rows: 25,
      filters: {
        status: { value: null },
        driverName: { value: null },
        tripNumber: { value: null },
        createdDate: { value: null },
        tripEndDate: { value: null },
        approvedDate: { value: null },
        tripStartDate: { value: null },
        approvedByUserName: { value: null },
        accountPayableName: { value: null },
      },
      metaData: null,
      statuses: ['created', 'approved', 'paid'],
      sidebar: {
        isActive: false,
        recordID: null,
      },
      sortBy: {
        field: null,
        order: null,
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    downloadFile(url) {
      const link = document.createElement('a');
      link.target = '_blank';
      link.href = url;
      link.download = url;
      link.click();
      link.remove();
    },
    async fetchTrips(pageSize = 25, currentPage = 1) {
      try {
        const {
          status,
          data: { result, payload },
        } = await this.$store.dispatch('tripV2/fetchTrips', {
          page: currentPage,
          pageSize,
          filters: Object.keys(this.filters).reduce((acc, key) => {
            if (this.filters[key].value) {
              acc[key] = this.filters[key].value;
            }

            return acc;
          }, {}),
          sortBy: this.sortBy.field && this.sortBy.order ? this.sortBy : {},
        });

        if (status === 200 && result) {
          this.items = payload && payload.trips ? payload.trips : [];
          this.totalRecords = payload && payload.meta ? payload.meta.total : 0;
          this.metaData = payload && payload.meta ? payload.meta : null;
        }
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      } finally {
      }
    },
    async init() {
      this.loading = true;

      try {
        await this.fetchTrips();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },
    onSort({ sortField, sortOrder }) {
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? 'asc' : 'desc',
      };

      this.onFilter();
    },
    onPage({ page, rows }) {
      this.fetchTrips(rows, page + 1);
    },
    async onFilter() {
      try {
        this.loading = true;
        await this.fetchTrips();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },
    sentenceCase(str) {
      return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    },
    editData(tripId) {
      if (tripId) {
        this.sidebar.isActive = true;
        this.sidebar.recordID = tripId;
      }
    },
    deleteData(id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Accept',
        title: 'Delete Trip',
        text: 'Are you sure you want to delete this trip?',
        accept: async () => {
          try {
            const response = await this.$store.dispatch('tripV2/deleteTrip', {
              tripId: id,
            });
            this.fetchTrips();
          } catch (error) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              time: 8000,
              text: error.response.data.message || error.message,
            });
          }
        },
      });
    },
    async closeSidebar(fetchTrip = null) {
      if (fetchTrip) {
        try {
          await this.fetchTrips();
        } catch (error) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        } finally {
        }
      }

      this.sidebar.isActive = false;
      this.sidebar.recordID = null;
    },

    onConfirmChangeTripStatus(tripId, status) {
      // Change title/text if we need to support other status.
      const options = {
        title: 'Driver Paid',
        text: `Are you sure you want to mark this trip as paid?`,
        accept: () => this.changeTripStatus(tripId, status),
      };
      this.onConfirm(options);
    },
    // Confirm Dialog
    onConfirm(options) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        ...options,
      });
    },
    async changeTripStatus(tripId, status) {
      try {
        const {
          status: responseStatus,
          data: { result },
        } = await this.$store.dispatch('tripV2/changeStatus', {
          tripId,
          status,
        });

        if (responseStatus === 200 && result) {
          await this.fetchTrips();
          await this.$vs.notify({
            time: 8000,
            color: 'success',
            title: 'Success',
            text: 'Trip status changed successfully',
          });
        }
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
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

  .p-column-filter-clear-button {
    display: none;
  }
}

.clearable-date-picker {
  position: relative;
  .close-icon {
    position: absolute;
    right: 10%;
    top: 25%;
    cursor: pointer;
  }
}
</style>
