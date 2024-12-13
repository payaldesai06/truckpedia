<template>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vx-card>
        <h4 class="card-heading py-2">DRIVER</h4>
        <vs-divider />
        <div class="w-full">
          <DataTable
            :key="defaultKey"
            :value="driverValues"
            filterDisplay="row"
            :filters="filter"
            :loading="loading"
            responsiveLayout="scroll"
            :lazy="true"
            :paginator="false"
            :rows="defaultPageSize"
            :rowHover="true"
            :totalRecords="totalRecords"
            :rowsPerPageOptions="[10, 25, 50]"
            :currentPageReportTemplate="`Displaying {first} to {last} of {totalRecords} records`"
            :sortField="sortBy.sortField"
            :sortOrder="sortBy.sortOrder"
            removableSort
            @sort="onSort($event, 'driverValues')"
            :globalFilterFields="['driverName']"
          >
            <Column
              v-for="col in getTableCols"
              :key="col.field"
              :field="col.field"
              :header="col.header"
              :showFilterMenu="false"
              :sortable="col.isSortable"
            >
              <template #body="{ data: { [col.field]: value } }">
                <div v-if="value != null">
                  <span v-if="col.field === 'tags'">{{ tagNames(value) }}</span>
                  <span
                    v-else-if="
                      [
                        'miles',
                        'gallons',
                        'mpg',
                        'totalEngineHours',
                        'runTimeEngineHours',
                        'loadedMiles',
                      ].includes(col.field)
                    "
                  >
                    {{ value | formatNumberWithCommas }}
                  </span>
                  <span
                    v-else-if="
                      [
                        'estimatedFuelCost',
                        'revenue',
                        'driverPay',
                        'fuelExpense',
                        'expense',
                        'profit',
                      ].includes(col.field)
                    "
                  >
                    ${{ value | formatNumberWithCommas }}
                  </span>
                  <span v-else-if="col.field === 'idlePercent'"
                    >{{ value }}%</span
                  >
                  <span v-else>{{ value }}</span>
                </div>
              </template>
              <template
                #filter="{}"
                v-if="col.field === 'driverName' || col.field === 'tags'"
              >
                <InputText
                  v-if="col.field === 'driverName'"
                  class="p-column-filter"
                  v-model="filter.name.value"
                  style="width: 100px"
                  type="text"
                />
                <Dropdown
                  v-else-if="col.field === 'tags'"
                  v-model="filter.tagId.value"
                  :options="defaultTags"
                  dataKey="uniqueId"
                  placeholder="Tag"
                  optionLabel="business_name"
                  optionValue="tag_id"
                  class="p-column-filter"
                  :showClear="true"
                  appendTo="body"
                />
              </template>
            </Column>
            <template #empty><b>No records found</b></template>
          </DataTable>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';
import commonFunctions from '../mixins/commonFunctions';
import { getUniqueIdV4, getApiErrorMsg } from '@/helpers/helper';
import { mapGetters } from 'vuex';

export default {
  name: 'DriverOverviewReport',
  mixins: [commonFunctions],
  computed: {
    ...mapGetters('samsara', ['connectionStatus']),

    isDriverFuelEnergyReportFieldHidden() {
      return Object.keys(this.driversFuelEnergyReports).length === 0;
    },
    getTableCols() {
      const driverFuelEnergyReportFields = [
        'miles',
        'gallons',
        'mpg',
        'estimatedFuelCost',
        'totalEngineHours',
        'runTimeEngineHours',
        'idlePercent',
      ];

      if (this.isDriverFuelEnergyReportFieldHidden) {
        this.defaultKey = getUniqueIdV4();
        return this.tableCols
          .filter((col) => !driverFuelEnergyReportFields.includes(col.field))
          .map((col) => {
            if (col.field === 'loadedMiles') {
              col.header = 'Miles';
            }
            return col;
          });
      }

      this.defaultKey = getUniqueIdV4();
      return this.tableCols.map((col) => {
        if (col.field === 'loadedMiles') {
          col.header = 'Truckpedia Miles';
        }
        return col;
      });
    },
  },
  props: {
    selectedDateRange: {
      type: String,
      default: null,
    },
    selectedTag: {
      type: Object,
      default: () => ({}),
    },
    tagOptions: {
      type: Array,
      default: () => [],
    },
    defaultTags: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rawResponse: {},
      driverValues: [],
      loading: true,
      defaultPageSize: 25,
      totalRecords: 0,
      filter: {
        name: { value: null },
        tagId: { value: null },
      },
      driversFuelEnergyReports: {},
      sortBy: {
        sortField: 'revenue',
        sortOrder: -1,
      },
      defaultKey: 0,
      tableCols: [
        {
          field: 'driverName',
          header: 'Driver Name',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'tags',
          header: 'Tags',
          isSortable: false,
          isHidden: false,
        },
        {
          field: 'miles',
          header: 'Samsara Miles',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'gallons',
          header: 'Gallons',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'mpg',
          header: 'MPG',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'estimatedFuelCost',
          header: 'Est. Fuel Cost',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'totalEngineHours',
          header: 'Total Engine Hours',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'runTimeEngineHours',
          header: 'Runtime Engine Hours',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'idlePercent',
          header: 'Idle %',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'revenue',
          header: 'Revenue',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'expense',
          header: 'Expense',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'profit',
          header: 'Profit',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'loadedMiles',
          header: 'Loaded Miles',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'numberOfLoads',
          header: 'No of Loads',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'driverPay',
          header: 'Driver Pay',
          isSortable: true,
          isHidden: false,
        },
        {
          field: 'fuelExpense',
          header: 'Fuel Expense',
          isSortable: true,
          isHidden: false,
        },
      ],
    };
  },
  created() {
    this.initTab();
  },
  watch: {
    filter: {
      handler() {
        this.filterDriverValues();
        this.defaultSort();
      },
      immediate: true,
      deep: true,
    },
    getTableCols: {
      handler() {
        this.$nextTick(() => {
          this.filterDriverValues();
          this.defaultSort();
        });
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    async initTab() {
      const selectedDates = this.selectedDateRange.split(' to ');

      const payload = {
        startDate: selectedDates[0],
        endDate: selectedDates[1],
      };

      if (this.selectedTag.tag_id != 'parent') {
        payload.tagId = this.selectedTag.tag_id;
      } else {
        payload.parentCompanyOnly = true;
      }

      if (!payload.startDate) return;

      if (this.connectionStatus == null) {
        await this.$store.dispatch('samsara/getConnectionStatus');
      }

      Promise.all([
        this.getDriversFuelEnergyReports().catch(() => {}),
        this.$store.dispatch('homeTab/getDriverOverview', payload),
      ])
        .then(([_, data]) => {
          if (data.payload) {
            this.rawResponse = { ...data.payload };
            this.driverValues = cloneDeep(data.payload.driverValues);
            let payloadTotalValues = data.payload.totalValues;
            if (this.driverValues) {
              const driverTotalValues = {
                revenuePerDriver:
                  this.rawResponse.totalValues.revenue /
                  this.driverValues.length,
                expensePerDriver:
                  this.rawResponse.totalValues.expense /
                  this.driverValues.length,
                profitPerDriver:
                  this.rawResponse.totalValues.profit /
                  this.driverValues.length,
              };
              payloadTotalValues = {
                ...data.payload.totalValues,
                ...driverTotalValues,
              };
            }

            this.$emit('update:totalValues', payloadTotalValues);
            if (Object.keys(this.driversFuelEnergyReports).length) {
              this.initFuelEnergyReportFields();
            }
            this.defaultSort();
          }
        })
        .catch((error) => {
          this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async getDriversFuelEnergyReports() {
      if (this.connectionStatus !== 'Connected') return;
      const selectedDates = this.selectedDateRange.split(' to ');
      const payload = {
        startDate: selectedDates[0],
        endDate: selectedDates[1],
      };

      const {
        status,
        data: {
          payload: { reports },
        },
      } = await this.$store.dispatch(
        'samsara/getDriversFuelEnergyReports',
        payload
      );

      if (status === 200 && reports) {
        this.driversFuelEnergyReports = (reports || []).reduce(
          (acc, report) => {
            if (report && report.driver && report.driver.name) {
              acc[report.driver.name.toLowerCase().trim()] = report;
            }
            return acc;
          },
          {}
        );
      }
    },
    defaultSort() {
      this.onSort({ ...this.sortBy }, 'driverValues');
    },
    filterDriverValues() {
      if (
        this.rawResponse.driverValues &&
        this.rawResponse.driverValues.length
      ) {
        const driverValues = cloneDeep(this.rawResponse.driverValues);
        if (this.filter.name.value || this.filter.tagId.value) {
          this.driverValues = driverValues.filter((driver) => {
            const isNameMatched =
              !this.filter.name.value ||
              driver.driverName
                .toLowerCase()
                .includes(this.filter.name.value.toLowerCase());
            const isTagMatched =
              !this.filter.tagId.value ||
              driver.tags.some((tag) => tag.tagId === this.filter.tagId.value);

            return isNameMatched && isTagMatched;
          });
        } else {
          this.driverValues = driverValues;
        }
      }

      if (Object.keys(this.driversFuelEnergyReports).length) {
        this.initFuelEnergyReportFields();
      }
    },
    initFuelEnergyReportFields() {
      this.driverValues.forEach((driver) => {
        const driverReport =
          this.driversFuelEnergyReports[
            driver.driverName.toLowerCase().trim()
          ] || {};

        driver.miles = driverReport.miles || 0;
        driver.gallons = driverReport.gallons || 0;
        driver.mpg = driverReport.mpg || 0;
        driver.estimatedFuelCost = driverReport.estimatedFuelCost || 0;
        driver.totalEngineHours =
          (driverReport.engineHours || {}).totalTime || 0;
        driver.runTimeEngineHours =
          (driverReport.engineHours || {}).runTime || 0;
        driver.idlePercent = (driverReport.engineHours || {}).idlePercent || 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-heading {
  color: #828282;
}
</style>
