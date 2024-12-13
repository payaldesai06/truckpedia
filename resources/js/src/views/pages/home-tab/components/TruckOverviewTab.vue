<template>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vx-card>
        <h4 class="card-heading py-2">TRUCK</h4>
        <vs-divider />
        <div class="w-full">
          <DataTable
            :key="defaultKey"
            :value="truckValues"
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
            @sort="onSort($event, 'truckValues')"
            :globalFilterFields="['truckNumber']"
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
                      ['estimatedFuelCost', 'revenue', 'ratePerMile'].includes(
                        col.field
                      )
                    "
                  >
                    ${{ value | formatNumberWithCommas }}
                  </span>
                  <span v-else-if="col.field === 'idlePercent'">
                    {{ value }}%
                  </span>
                  <span v-else>{{ value }}</span>
                </div>
              </template>
              <template
                #filter="{}"
                v-if="col.field === 'truckNumber' || col.field === 'tags'"
              >
                <InputText
                  v-if="col.field === 'truckNumber'"
                  class="p-column-filter"
                  v-model="filter.number.value"
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
  name: 'TruckOverviewTab',
  mixins: [commonFunctions],
  computed: {
    ...mapGetters('samsara', ['connectionStatus']),
    isTruckFuelEnergyReportFieldHidden() {
      return Object.keys(this.trucksFuelEnergyReports).length === 0;
    },
    getTableCols() {
      const truckFuelEnergyReportFields = [
        'miles',
        'gallons',
        'mpg',
        'estimatedFuelCost',
        'totalEngineHours',
        'runTimeEngineHours',
        'idlePercent',
      ];
      if (this.isTruckFuelEnergyReportFieldHidden) {
        this.defaultKey = getUniqueIdV4();
        return this.tableCols
          .filter((col) => !truckFuelEnergyReportFields.includes(col.field))
          .map((col) => {
            if (col.field === 'loadedMiles') {
              col.header = 'Loaded Miles';
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
      truckValues: [],
      loading: true,
      defaultPageSize: 25,
      totalRecords: 0,
      filter: {
        number: { value: null },
        tagId: { value: null },
      },
      trucksFuelEnergyReports: {},
      sortBy: {
        sortField: 'revenue',
        sortOrder: -1,
      },
      defaultKey: 0,
      tableCols: [
        {
          field: 'truckNumber',
          header: 'Truck Number',
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
          field: 'ratePerMile',
          header: 'Rate Per Mile',
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
        this.filterTruckValues();
        this.defaultSort();
      },
      immediate: true,
      deep: true,
    },
    getTableCols: {
      handler() {
        this.$nextTick(() => {
          this.filterTruckValues();
          this.defaultSort();
        });
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    filterTruckValues() {
      if (this.rawResponse.truckValues && this.rawResponse.truckValues.length) {
        const truckValues = cloneDeep(this.rawResponse.truckValues);
        if (this.filter.number.value || this.filter.tagId.value) {
          this.truckValues = truckValues.filter((truck) => {
            const isNumberMatched =
              !this.filter.number.value ||
              truck.truckNumber
                .toLowerCase()
                .includes(this.filter.number.value.toLowerCase());
            const isTagMatched =
              !this.filter.tagId.value ||
              truck.tags.find((tag) => tag.tagId === this.filter.tagId.value);

            return isNumberMatched && isTagMatched;
          });
        } else {
          this.truckValues = truckValues;
        }
      }

      if (Object.keys(this.trucksFuelEnergyReports).length) {
        this.initFuelEnergyReportFields();
      }
    },
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
        this.getTrucksFuelEnergyReports().catch(() => {}),
        this.$store.dispatch('homeTab/getTruckOverview', payload),
      ])
        .then(([_, data]) => {
          if (data.payload) {
            this.rawResponse = { ...data.payload };
            this.$emit('update:totalValues', data.payload.totalValues);
            this.truckValues = cloneDeep(data.payload.truckValues);
            if (Object.keys(this.trucksFuelEnergyReports).length) {
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
    async getTrucksFuelEnergyReports() {
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
        'samsara/getTrucksFuelEnergyReports',
        payload
      );
      if (status === 200 && reports) {
        this.trucksFuelEnergyReports = (reports || []).reduce((acc, report) => {
          if (report && report.truck && report.truck.number) {
            acc[report.truck.number.toLowerCase().trim()] = report;
          }
          return acc;
        }, {});
      }
    },
    defaultSort() {
      this.onSort({ ...this.sortBy }, 'truckValues');
    },
    initFuelEnergyReportFields() {
      this.truckValues.forEach((truck) => {
        const truckReport =
          this.trucksFuelEnergyReports[
            truck.truckNumber.toLowerCase().trim()
          ] || {};
        truck.miles = truckReport.miles || 0;
        truck.gallons = truckReport.gallons || 0;
        truck.mpg = truckReport.mpg || 0;
        truck.estimatedFuelCost = truckReport.estimatedFuelCost || 0;
        truck.totalEngineHours = (truckReport.engineHours || {}).totalTime || 0;
        truck.runTimeEngineHours = (truckReport.engineHours || {}).runTime || 0;
        truck.idlePercent = (truckReport.engineHours || {}).idlePercent || 0;
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
