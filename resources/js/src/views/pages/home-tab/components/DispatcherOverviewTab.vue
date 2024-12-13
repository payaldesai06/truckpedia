<template>
  <div class="vx-row">
    <div class="vx-col w-full md:w-1/2">
      <vx-card>
        <h4 class="card-heading">DISPATCHER</h4>
        <vs-divider />
        <div class="w-full">
          <DataTable
            :value="dispatcherValues"
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
            sortField="revenue"
            :sortOrder="-1"
            removableSort
            @sort="onSort($event, 'dispatcherValues')"
            :globalFilterFields="['dispatcherName']"
          >
            <Column
              field="dispatcherName"
              header="Dispatcher Name"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { dispatcherName } }">
                <div>
                  <span v-text="dispatcherName" />
                </div>
              </template>
              <template #filter="{}">
                <InputText
                  class="p-column-filter"
                  v-model="filter.name"
                  style="width: 100px"
                  type="text"
                />
              </template>
            </Column>
            <Column
              field="revenue"
              header="Revenue"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { revenue } }">
                <div>
                  <span>${{ revenue | formatNumberWithCommas }}</span>
                </div>
              </template>
            </Column>
            <Column
              field="revenuePercentage"
              header="Revenue Percentage"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { revenuePercentage } }">
                <div>
                  <span> {{ revenuePercentage | formatNumber }}% </span>
                </div>
              </template>
            </Column>
            <Column
              field="numberOfLoads"
              header="No of Loads"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { numberOfLoads } }">
                <div>
                  <span v-text="numberOfLoads" />
                </div>
              </template>
            </Column>
            <Column
              field="ratePerMile"
              header="Rate Per Mile"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { ratePerMile } }">
                <div>
                  <span>${{ ratePerMile | formatNumberWithCommas }}</span>
                </div>
              </template>
            </Column>
            <Column
              field="miles"
              header="Miles"
              :showFilterMenu="false"
              :sortable="true"
            >
              <template #body="{ data: { miles } }">
                <div>
                  <span> {{ miles | formatNumberWithCommas }} </span>
                </div>
              </template>
            </Column>
            <template #empty><b>No records found</b></template>
          </DataTable>
        </div>
      </vx-card>
    </div>
    <div class="vx-col w-full mt-8 md:w-1/2 md:mt-0">
      <vx-card>
        <h4 class="card-heading">CHART</h4>
        <vs-divider />
        <LineChart
          ref="dispatcherOverviewChart"
          :chartOptions="dispatcherOverviewChart.chartOptions"
          :chartData="dispatcherOverviewChart.chartData"
          :chartPlugins="lineChartPlugins"
        />
      </vx-card>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/charts/LineChart.vue';

import { cloneDeep } from 'lodash';
import commonFunctions from '../mixins/commonFunctions';
import { commaSeparatedValue } from '@/helpers/helper';

import config from '@/config/constants';

const lineChartDefaultProps = {
  chartData: {
    labels: [],
    datasets: [
      {
        label: 'Total Revenue',
        borderColor: '#165BAA',
        backgroundColor: 'transparent',
        data: [],
        stack: 'combined',
        type: 'line',
      },
      {
        label: 'Total Distance',
        backgroundColor: config.chartColors,
        data: [],
        stack: 'combined',
        type: 'bar',
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
      },
      yAxes: [
        {
          ticks: {
            callback(value) {
              if (value) return `${commaSeparatedValue(value)}`;
              else return `${value}`;
            },
          },
        },
      ],
      xAxes: [
        {
          offset: true,
        },
      ],
    },
    legend: {
      // display: false,
    },
    layout: {
      padding: {
        top: 15,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const { datasetIndex } = tooltipItem;
          const { datasets } = data;
          const { label, type } = datasets[datasetIndex];
          const value = tooltipItem.value;
          const formattedVal = commaSeparatedValue(value);

          return `${label}: ${
            type === 'line' ? `$${formattedVal}` : formattedVal
          }`;
        },
      },
    },
  },
};

const chartPlugins = {
  datalabels: {
    display: 'auto',
    color: '#000',
    anchor: 'end',
    align: 'end',
    offset: -5,
    font: {
      size: 12,
      family: 'Montserrat',
    },
    formatter(value, { dataset: { type } }) {
      const formattedVal = commaSeparatedValue(value);

      return type === 'line' ? `$${formattedVal}` : formattedVal;
    },
  },
};

export default {
  name: 'DispatcherOverviewTab',
  components: {
    LineChart,
  },
  mixins: [commonFunctions],
  props: {
    selectedDateRange: {
      type: String,
      default: null,
    },
    selectedTag: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      rawResponse: {},
      dispatcherValues: [],
      loading: false,
      defaultPageSize: 25,
      totalRecords: 0,
      dispatcherOverviewChart: cloneDeep(lineChartDefaultProps),
      lineChartPlugins: {
        ...cloneDeep(chartPlugins),
        title: {
          display: true,
          text: (ctx) =>
            'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
        },
      },
      filter: {
        name: '',
      },
    };
  },
  created() {
    this.initTab();
  },
  watch: {
    filter: {
      handler(val) {
        this.filterDispatcherValues(val.name);
        this.defaultSort();
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    filterDispatcherValues(filterText) {
      const clone = cloneDeep(this.rawResponse.dispatcherValues);
      if (filterText) {
        this.dispatcherValues = clone.filter((item) =>
          item.dispatcherName.toLowerCase().includes(filterText)
        );
      } else {
        this.dispatcherValues = clone;
      }
    },
    async initTab() {
      try {
        this.loading = true;
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

        const data = await this.$store.dispatch(
          'homeTab/getDispatcherOverview',
          payload
        );
        if (data.payload) {
          this.rawResponse = { ...data.payload };
          this.$emit('update:totalValues', data.payload.totalValues);
          this.dispatcherValues = cloneDeep(data.payload.dispatcherValues);
          this.defaultSort();
          // Sort dispatchers
          const dispatchers = [...this.dispatcherValues].sort(
            (a, b) => b.revenue - a.revenue
          );

          // Get dispatcher names, revenue and miles
          const { dispatcherNames, dispatcherRevenue, dispatcherMiles } =
            dispatchers.reduce(
              (acc, item) => {
                acc.dispatcherNames.push(item.dispatcherName);
                acc.dispatcherRevenue.push(item.revenue.toFixed(2));
                acc.dispatcherMiles.push(item.miles.toFixed(2));
                return acc;
              },
              {
                dispatcherNames: [],
                dispatcherRevenue: [],
                dispatcherMiles: [],
              }
            );

          this.dispatcherOverviewChart.chartData.labels = dispatcherNames;
          this.dispatcherOverviewChart.chartData.datasets[0].data =
            dispatcherRevenue;
          this.dispatcherOverviewChart.chartData.datasets[1].data =
            dispatcherMiles;

          if (this.$refs.dispatcherOverviewChart) {
            this.$refs.dispatcherOverviewChart.updateChart();
          }
        }
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
    defaultSort() {
      this.onSort({ sortField: 'revenue', sortOrder: -1 }, 'dispatcherValues');
    },
  },
};
</script>

<style lang="scss" scoped>
.card-heading {
  color: #828282;
}
</style>
