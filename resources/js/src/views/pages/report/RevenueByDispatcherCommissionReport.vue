<template>
  <report-layout>
    <vx-card title="Revenue by Dispatcher Commission Report" class="w-full">
      <div class="vx-row">
        <div class="vx-col w-full">
          <DataTable
            :value="items.data"
            :lazy="true"
            :paginator="true"
            :selection.sync="selectedLoadsList"
            :rows="rows"
            :rowHover="true"
            filterDisplay="row"
            removableSort
            :totalRecords="totalRecords"
            :filters="filters"
            :loading="loading"
            :scrollable="true"
            @sort="onSort($event)"
            @page="onPage($event)"
            ref="datatable"
            :rowsPerPageOptions="[5, 10, 15]"
          >
            <template #header>
              <div class="w-full flex items-center justify-between">
                <div class="w-1/2 flex items-end space-x-2">
                  <div class="w-1/3">
                    <label class="text-sm opacity-75">Select Dispatcher</label>
                    <v-select
                      :options="dispatcher_options"
                      label="full_name"
                      :reduce="
                        (option) => ({
                          user_id: option.user_id,
                          full_name: option.full_name,
                        })
                      "
                      v-model="selected_dispatcher_option"
                      class="w-full"
                    />
                  </div>

                  <div class="w-1/3">
                    <label class="text-sm opacity-75">Choose Period</label>
                    <flat-pickr
                      v-model="selected_date_range"
                      :config="flat_pikr_config"
                      class="w-full"
                    />
                  </div>

                  <div>
                    <vs-button color="primary" @click="commonApiCall"
                      >Generate Report</vs-button
                    >
                  </div>
                </div>

                <div class="w-1/2 flex items-center justify-end">
                  <vs-button
                    color="primary"
                    type="filled"
                    icon-pack="feather"
                    @click.stop="changeSettings()"
                    class="mr-3"
                    :disabled="!areMultipleLoadsSelected"
                    >Edit Selected
                  </vs-button>
                  <vs-button
                    color="primary"
                    type="border"
                    icon-pack="feather"
                    icon="icon-external-link"
                    id="button-export-loading"
                    class="vs-con-loading__container"
                    @click.stop="exportExcel"
                    >Export
                  </vs-button>
                </div>
              </div>
            </template>

            <template #empty> No records found </template>

            <Column
              :hidden="items.data.length ? false : true"
              selectionMode="multiple"
              :headerStyle="{ width: '3em' }"
            ></Column>
            <Column field="loadUniqueId" header="Load #" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.load_unique_id }}
              </template>
            </Column>

            <Column field="customer" header="Customer" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.customer }}
              </template>
            </Column>

            <!--<Column field="dispatcher" header="Dispatcher" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.dispatcher }}
              </template>
            </Column>-->

            <Column field="shipDate" header="Ship Date" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.ship_date }}
              </template>
            </Column>

            <Column field="deliveryDate" header="Del. Date" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.delivery_date }}
              </template>
            </Column>

            <!--<Column field="type" header="Type" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.type }}
              </template>
            </Column>

            <Column
              field="commission_fractional"
              header="Commission"
              :sortable="true"
            >
              <template #body="slotProps">
                {{ slotProps.data.commission_fractional * 100 }}
                <span>&percnt;</span>
              </template>
            </Column>-->

            <Column field="rates" header="Rates" :sortable="false">
              <template #body="slotProps">
                {{ slotProps.data.rates }}
              </template>
            </Column>

            <Column field="rpm" header="RPM" :sortable="false">
              <template #body="slotProps">
                {{ slotProps.data.rate_per_mile }}
              </template>
            </Column>

            <Column
              field="total_commission"
              header="Commission"
              :sortable="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.total_commission }}
              </template>
            </Column>

            <!--<Column
              field="payment_status"
              header="Payment Status"
              :sortable="true"
            >
              <template #body="slotProps">
                {{ slotProps.data.payment_status }}
              </template>
            </Column>-->

            <Column
              field="dispatcher_paid"
              header="Commission Status"
              :showFilterMenu="false"
              :sortable="false"
            >
              <template #body="slotProps">
                {{ slotProps.data.dispatcher_paid }}
              </template>
              <template #filter>
                <Dropdown
                  v-model="filters['commissionStatus']"
                  @change="onFilterChange($event, 'commissionStatus')"
                  :options="commissionStatusOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="p-column-filter filter-dropdown"
                  :showClear="filters['commissionStatus'] ? true : false"
                  appendTo="body"
                />
              </template>
            </Column>

            <Column field="edit" header="Edit" :sortable="false">
              <template #body="slotProps">
                <vs-button
                  @click="changeSettings(slotProps.data)"
                  radius
                  icon="icon-settings"
                  icon-pack="feather"
                />
              </template>
            </Column>

            <vs-popup
              title="Edit Dispatcher Pay"
              :active.sync="popupActive"
              class="p-12"
            >
              <div class="vx-row">
                <div class="vx-col w-1/3 my-auto">
                  <label class="text-xs">
                    Commission for
                    <span>
                      {{
                        areMultipleLoadsSelected && editAllClicked
                          ? 'these loads'
                          : 'this load'
                      }}</span
                    >
                  </label>
                </div>
                <div class="vx-col w-1/3">
                  <vs-input
                    type="number"
                    :min="-100"
                    :step="0.01"
                    :max="100"
                    v-model="overrideCommission"
                    :danger="handleOverRideValidateNumberOnly"
                    danger-text="it's range between -100 to 100 takes only decimal value"
                    icon-after="true"
                    icon="%"
                    class="w-full"
                  />
                </div>
              </div>
              <br />

              <div class="vx-row">
                <div class="vx-col w-1/3 my-auto">
                  <label class="text-xs"> Other Commission </label>
                </div>

                <div class="vx-col w-1/3">
                  <vs-input
                    type="number"
                    :min="0"
                    v-model="otherCommission"
                    class="w-full"
                  />
                </div>
              </div>

              <br />

              <div class="vx-row">
                <div class="vx-col w-1/3 my-auto">
                  <label class="text-xs"> Commission Status </label>
                </div>
                <div class="vx-col w-1/4">
                  <vs-checkbox v-model="dispatcherPaid">Paid</vs-checkbox>
                </div>
              </div>
              <br />

              <div class="vx-row justify-end">
                <div class="vx-col">
                  <vs-button
                    color="danger"
                    type="border"
                    @click="popupActive = false"
                  >
                    Cancel
                  </vs-button>
                </div>

                <div class="vx-col">
                  <vs-button color="primary" @click="onSave" type="border">
                    Save
                  </vs-button>
                </div>
              </div>
            </vs-popup>

            <template #footer>
              In total there are {{ totalRecords }} items.
            </template>
          </DataTable>
        </div>
      </div>
    </vx-card>
  </report-layout>
</template>

<script>
import ReportLayout from './components/ReportLayout';
import { isValidInputValue } from '@/helpers/helper';

export default {
  name: 'RevenueByDispatcherCommissionReport',

  components: {
    ReportLayout,
  },

  data() {
    return {
      changeSettingLoadData: {},
      popupActive: false,
      items: {
        data: [],
        links: {},
        meta: {},
      },
      dispatcherPaid: false,
      overrideCommission: '',
      otherCommission: null,
      sharedCommission: null,
      selectedLoadsList: [],
      validation: {
        min: -100,
        max: 100,
        decimal: 4,
      },
      dispatchers: [],
      dispatcher_options: [],
      selected_dispatcher_option: '',
      selected_date_range: '',
      handleOverRideValidateNumberOnly: false,
      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range',
      },
      filters: {
        load_unique_id: '',
        customer: '',
        dispatcher: '',
        shiping_date: '',
        delivery_date: '',
        payment_status: '',
        rates: '',
        total_commission: '',
        commissionStatus: '',
      },
      editAllClicked: false,
      commissionStatusOptions: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Paid',
          value: 'paid',
        },
      ],
      page: 0,
      rows: 10,
      sortBy: {
        sortField: null,
        sortOrder: null,
      },
      loading: false,
    };
  },

  computed: {
    areMultipleLoadsSelected() {
      return this.selectedLoadsList.length > 1;
    },
    updatedFiltersWithValues() {
      return Object.fromEntries(
        Object.entries(this.filters).filter(([_, v]) => v != '' && v != null)
      );
    },
    totalRecords() {
      return this.items.meta ? this.items.meta.total : 0;
    },
  },

  watch: {
    overrideCommission() {
      if (this.overrideCommission != '' && this.overrideCommission != null) {
        this.formatNumber(this.overrideCommission);
      }
    },
    popupActive(val) {
      if (!val) {
        this.editAllClicked = false;
        this.dispatcherPaid = false;
        this.changeSettingLoadData = {};
        this.overrideCommission = '';
        this.otherCommission = null;
        this.sharedCommission = null;
      }
    },
  },

  async created() {
    await this.getAllDispatchers();
  },

  methods: {
    formatNumber(e) {
      if (e > this.validation.max) {
        this.overrideCommission = this.validation.max;
      } else if (e < this.validation.min) {
        this.overrideCommission = this.validation.min;
      } else if (String(e).includes('.')) {
        if (String(e).split('.')[1].length >= this.validation.decimal) {
          this.overrideCommission = Number(e).toFixed(this.validation.decimal);
        }
      } else {
        this.overrideCommission = e;
      }
    },

    async commonApiCall(filter = {}) {
      if (!this.selected_dispatcher_option) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select dispatcher.',
        });
        return 0;
      }

      const selectedDates = this.selected_date_range.split(' to ');
      if (selectedDates.length < 2) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select report period.',
        });
        return 0;
      }

      const dispatcherIdsPayload =
        this.selected_dispatcher_option.user_id == 'all'
          ? null
          : [this.selected_dispatcher_option.user_id];

      filter = {
        ...filter,
        ...(Object.keys(this.updatedFiltersWithValues).length && {
          internalFilters: this.updatedFiltersWithValues,
        }),
        dispatcherIds: dispatcherIdsPayload,
        startDate: selectedDates[0],
        endDate: selectedDates[1],
      };

      if (filter.hasOwnProperty('toDownload')) {
        this.$vs.loading({
          container: '#button-export-loading',
          scale: 0.45,
        });
      } else {
        this.loading = true;
      }

      try {
        const payload = {
          eventForServer: {
            page: this.page,
            rows: this.rows,
            ...this.sortBy,
          },
          filter,
        };
        const data = await this.$store.dispatch(
          'report/getRevenueByDispatcherCommissionReportDatatable',
          payload
        );
        if (filter.hasOwnProperty('toDownload')) {
          window.location = data.download_url;
          return 0;
        }
        this.items = data;
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        if (filter.hasOwnProperty('toDownload')) {
          this.$vs.loading.close('#button-export-loading > .con-vs-loading');
        } else {
          this.loading = false;
        }
        this.editAllClicked = false;
        this.selectedLoadsList = [];
      }
    },

    numbersOnly(evt, name) {
      var evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
        if (name === 'overrideCommission') {
          this.handleOverRideValidateNumberOnly = true;
        }
      } else {
        if (name === 'overrideCommission') {
          this.handleOverRideValidateNumberOnly = false;
        }
      }
    },

    async onSave() {
      try {
        // Added the validation on commission amount for bulk update
        if (
          isValidInputValue(this.otherCommission) &&
          (this.otherCommission < -999999.99 ||
            this.otherCommission > 999999.99)
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Other Commission Amount Should be between -999,999.99 and 999,999.99',
          });
          return;
        }
        if (this.areMultipleLoadsSelected && this.editAllClicked) {
          const payload = {
            ids: this.selectedLoadsList.map((load) => load.load_id),
            fields: {
              dispatcherPaid: this.dispatcherPaid,
              ...(isValidInputValue(this.overrideCommission) && {
                overrideCommissionFractional: Number(
                  this.overrideCommission / 100
                ),
              }),
              ...(isValidInputValue(this.otherCommission) && {
                otherCommissionAmount: Number(this.otherCommission),
              }),
            },
          };

          await this.$store.dispatch('load/loadsBulkUpdate', payload);
          this.editAllClicked = false;
          this.$vs.notify({
            color: 'primary',
            title: 'Dispatcher Pay',
            text: 'Dispatcher Pay successfully.',
          });
        } else {
          const payload = {
            id: this.changeSettingLoadData.load_id,
            dispatcher_paid: this.dispatcherPaid,
            override_commission:
              this.overrideCommission !== null && this.overrideCommission !== ''
                ? Number(this.overrideCommission / 100)
                : null,
            other_commission: !this.otherCommission
              ? null
              : Number(this.otherCommission),
            shared_dispatcher_commission: null,
          };

          await this.$store.dispatch(
            'report/editRevenueByDispatcherCommissionReport',
            payload
          );
          this.$vs.notify({
            color: 'primary',
            title: 'Dispatcher Pay',
            text: 'Dispatcher Pay successfully.',
          });
        }
        this.commonApiCall();
        this.popupActive = false;
        this.selectedLoadsList = [];
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    changeSettings(loadData) {
      this.popupActive = true;
      this.handleOverRideValidateNumberOnly = false;

      if (!loadData && this.areMultipleLoadsSelected) {
        this.editAllClicked = true;
      } else {
        this.editAllClicked = false;
        this.dispatcherPaid =
          loadData.dispatcher_paid === 'Paid' ? true : false;
        this.changeSettingLoadData = loadData;
        this.overrideCommission =
          loadData.override_commission_fractional !== null &&
          loadData.override_commission_fractional !== ''
            ? loadData.override_commission_fractional * 100
            : '';
        this.otherCommission = loadData.other_commission_amount;
        this.sharedCommission =
          loadData.shared_dispatcher_commission_fractional;
      }
    },

    async getAllDispatchers() {
      this.$vs.loading();

      try {
        const filters = {
          status_with: 'active,inactive',
        };

        const { payload } = await this.$store.dispatch(
          'company-user/getAllDispatchers',
          filters
        );

        const dispatcherOptions = payload.data.map((dispatcher) => ({
          ...dispatcher,
          full_name: `${dispatcher.user_details.first_name} ${dispatcher.user_details.last_name}`,
        }));

        this.dispatchers = dispatcherOptions;

        this.dispatcher_options = [
          { user_id: 'all', full_name: 'Select All' },
          ...dispatcherOptions,
        ];
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    exportExcel() {
      this.commonApiCall({ toDownload: 1 });
    },
    onFilterChange(event, key) {
      if (!event.value) {
        this.filters[key] = '';
      }
      this.commonApiCall();
    },
    onPage({ page, rows }) {
      this.rows = rows;
      this.page = page;
      this.commonApiCall(this.filters);
    },
    onSort({ sortField, sortOrder }) {
      this.sortBy = {
        sortField,
        sortOrder: sortField ? sortOrder : null,
      };
      this.commonApiCall(this.filters);
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .p-column-filter .p-hidden-space {
  display: none;
}
</style>
