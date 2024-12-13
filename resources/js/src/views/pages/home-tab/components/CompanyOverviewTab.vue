<template>
  <div>
    <div class="vx-row xl:flex-row flex-col-reverse">
      <div class="vx-col flex-1 sm:w-full mt-8 xl:mt-0 xl:w-1/3 xl:flex-none">
        <vx-card class="h-full">
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Cost Breakdown</h4>
            <v-select
              class="w-48"
              :options="[
                { label: 'Weekly', value: 'weekly' },
                { label: 'Monthly', value: 'monthly' },
                { label: 'Annual', value: 'annual' },
              ]"
              :reduce="(option) => option.value"
              :clearable="false"
              placeholder="Seleted dates"
              v-model="expensesRangeValue"
              @input="onInput"
            />
          </div>
          <PieChart
            ref="expenseChart"
            :chartOptions="expenseChart.chartOptions"
            :chartData="expenseChart.chartData"
          />
        </vx-card>
      </div>

      <div class="vx-col flex-1 xl:mt-0 lg:mt-8">
        <div class="vx-row h-full">
          <div class="cost-operation-card vx-col w-full h-1/2 md:w-1/2">
            <vx-card
              class="info-group-card h-full"
              v-if="
                rawResponse &&
                rawResponse.totalValues &&
                rawResponse.totalValues.expense !== undefined
              "
            >
              <h4 class="card-heading">Cost of Operation</h4>
              <div
                class="flex justify-between items-stretch gap-6 overflow-y-auto"
              >
                <vx-card class="info-card" style="background-color: #e7f1fe">
                  <div
                    class="flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full"
                    style="background-color: #cfe2fc"
                  >
                    <img
                      src="@assets/images/dashboard/Group_2075.svg"
                      alt="annual"
                    />
                  </div>
                  <p class="title">Annual</p>
                  <p
                    v-if="rawResponse && rawResponse.totalValues"
                    class="dataset"
                    style="color: #1877f2"
                  >
                    ${{
                      getAnnualValue(rawResponse.totalValues.expense)
                        | formatNumberWithCommas
                    }}
                  </p>
                </vx-card>
                <vx-card class="info-card" style="background-color: #ccfdf3">
                  <div
                    class="flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full"
                    style="background-color: #67f5ef"
                  >
                    <img
                      src="@assets/images/dashboard/calendar.svg"
                      alt="monthly"
                    />
                  </div>
                  <p class="title">Monthly</p>
                  <p
                    class="dataset"
                    v-if="rawResponse && rawResponse.totalValues"
                    style="color: #025481"
                  >
                    ${{
                      getMonthlyValue(rawResponse.totalValues.expense)
                        | formatNumberWithCommas
                    }}
                  </p>
                </vx-card>
                <vx-card class="info-card" style="background-color: #e3fad6">
                  <div
                    class="flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full"
                    style="background-color: #c2f6ae"
                  >
                    <img
                      src="@assets/images/dashboard/credit.svg"
                      alt="weekly"
                    />
                  </div>
                  <p class="title">Weekly</p>
                  <p
                    class="dataset"
                    v-if="rawResponse && rawResponse.totalValues"
                    style="color: #074119"
                  >
                    ${{
                      getWeeklyValue(rawResponse.totalValues.expense)
                        | formatNumberWithCommas
                    }}
                  </p>
                </vx-card>
              </div>
            </vx-card>
          </div>

          <div
            v-if="
              rawResponse &&
              rawResponse.totalValues &&
              rawResponse.totalValues.revenue !== undefined
            "
            class="total-revenue-card vx-col w-full mt-8 h-1/2 md:mt-0 md:w-1/2"
          >
            <vx-card class="info-group-card h-full">
              <h4 class="card-heading">Total Revenue</h4>

              <div
                class="flex justify-between items-stretch gap-6 overflow-y-auto"
              >
                <vx-card class="info-card" style="background-color: #e7f1fe">
                  <div
                    class="flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full"
                    style="background-color: #cfe2fc"
                  >
                    <img
                      src="@assets/images/dashboard/Group_2075.svg"
                      alt="annual"
                    />
                  </div>
                  <p class="title">Annual</p>
                  <p class="dataset" style="color: #1877f2">
                    ${{
                      getAnnualValue(rawResponse.totalValues.revenue)
                        | formatNumberWithCommas
                    }}
                  </p>
                </vx-card>
                <vx-card class="info-card" style="background-color: #ccfdf3">
                  <div
                    class="flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full"
                    style="background-color: #67f5ef"
                  >
                    <img
                      src="@assets/images/dashboard/calendar.svg"
                      alt="monthly"
                    />
                  </div>
                  <p class="title">Monthly</p>
                  <p class="dataset" style="color: #025481">
                    ${{
                      getMonthlyValue(rawResponse.totalValues.revenue)
                        | formatNumberWithCommas
                    }}
                  </p>
                </vx-card>
                <vx-card class="info-card" style="background-color: #e3fad6">
                  <div
                    class="flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full"
                    style="background-color: #c2f6ae"
                  >
                    <img
                      src="@assets/images/dashboard/credit.svg"
                      alt="weekly"
                    />
                  </div>
                  <p class="title">Weekly</p>
                  <p class="dataset" style="color: #074119">
                    ${{
                      getWeeklyValue(rawResponse.totalValues.revenue)
                        | formatNumberWithCommas
                    }}
                  </p>
                </vx-card>
              </div>
            </vx-card>
          </div>

          <div
            v-if="
              rawResponse &&
              rawResponse.totalValues &&
              rawResponse.totalValues.profit !== undefined
            "
            class="total-profit-card vx-col w-full mt-8 h-{50%}"
          >
            <vx-card class="info-group-card h-full">
              <h4 class="card-heading">Total Profit</h4>

              <div
                class="flex justify-start items-stretch gap-6 overflow-y-auto"
              >
                <vx-card
                  class="info-card items-start lg:w-1/3 xl:w-1/3"
                  style="background-color: #e7f1fe"
                >
                  <div
                    class="flex justify-center items-center w-16 h-16 p-4 rounded-full"
                    style="background-color: #cfe2fc"
                  >
                    <img src="@assets/images/dashboard/flag.svg" alt="annual" />
                  </div>
                  <p class="title text-left">Annual</p>
                  <p class="dataset" style="color: #0b5ac1">
                    ${{
                      getAnnualValue(rawResponse.totalValues.profit)
                        | formatNumberWithCommas
                    }}
                  </p>
                </vx-card>
                <vx-card
                  class="info-card items-start lg:w-1/3 xl:w-1/3"
                  style="background-color: #e7f1fe"
                >
                  <div
                    class="flex justify-center items-center w-16 h-16 p-4 rounded-full"
                    style="background-color: #cfe2fc"
                  >
                    <img
                      src="@assets/images/dashboard/chart.png"
                      alt="monthly"
                    />
                  </div>
                  <p class="title text-left">Monthly</p>
                  <p class="dataset" style="color: #0b5ac1">
                    ${{
                      getMonthlyValue(rawResponse.totalValues.profit)
                        | formatNumberWithCommas
                    }}
                  </p>
                </vx-card>
                <vx-card
                  class="info-card items-start lg:w-1/3 xl:w-1/3"
                  style="background-color: #e7f1fe"
                >
                  <div
                    class="flex justify-center items-center w-16 h-16 p-4 rounded-full"
                    style="background-color: #cfe2fc"
                  >
                    <img
                      src="@assets/images/dashboard/credit_blue.svg"
                      alt="weekly"
                    />
                  </div>
                  <p class="title text-left">Weekly</p>
                  <p class="dataset" style="color: #0b5ac1">
                    ${{
                      getWeeklyValue(rawResponse.totalValues.profit)
                        | formatNumberWithCommas
                    }}
                  </p>
                </vx-card>
              </div>
            </vx-card>
          </div>
        </div>
        <vx-card> </vx-card>
      </div>
    </div>
    <div class="vx-row mt-8">
      <div class="vx-col w-1/2">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">TOP 10 DRIVER BY REVENUE</h4>
            <v-select
              style="width: 160px"
              v-model="driverRevenueBy"
              :options="driverRevenueFilterOptions"
              :reduce="(option) => option.value"
              :clearable="false"
              v-on:input="onDriverRevenueByChange"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
            />
          </div>
          <vs-divider />
          <BarChart
            ref="driverChart"
            :chartOptions="driverChart.chartOptions"
            :chartData="driverChart.chartData"
            :chartPlugins="chartPlugins()"
          />
        </vx-card>
      </div>
      <div class="vx-col w-1/2">
        <vx-card>
          <h4 class="card-heading py-2">TOP 10 TRUCKS BY REVENUE</h4>
          <vs-divider />
          <PieChart
            ref="truckChart"
            :chartOptions="truckChart.chartOptions"
            :chartData="truckChart.chartData"
          />
        </vx-card>
      </div>
    </div>
    <div class="vx-row mt-8">
      <div class="vx-col w-1/2">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">TOTAL REVENUE</h4>
            <v-select
              style="width: 160px"
              v-model="totalRevenueBy"
              :options="chartFilterOptions"
              :reduce="(option) => option.value"
              :clearable="false"
              v-on:input="onTotalRevenueByChange"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
            />
          </div>
          <vs-divider />
          <LineChart
            ref="totalRevenueChart"
            :chartOptions="revenueChart.chartOptions"
            :chartData="revenueChart.chartData"
            :chartPlugins="lineChartPlugins"
          />
        </vx-card>
      </div>
      <div class="vx-col w-1/2">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">TOTAL MILES</h4>
            <v-select
              style="width: 160px"
              v-model="totalMilesBy"
              :options="chartFilterOptions"
              :reduce="(option) => option.value"
              :clearable="false"
              v-on:input="onTotalMilesByChange"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
            />
          </div>
          <vs-divider />
          <BarChart
            ref="milesChart"
            :chartOptions="milesChart.chartOptions"
            :chartData="milesChart.chartData"
            :chartPlugins="chartPlugins(false)"
          />
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import BarChart from '@/components/charts/BarChart.vue';
import PieChart from '@/components/charts/PieChart.vue';
import LineChart from '@/components/charts/LineChart.vue';

import vSelect from 'vue-select';
import { round, cloneDeep } from 'lodash';
import dayjs from 'dayjs';

import config from '@/config/constants';
import { parseFloatWithTrim, commaSeparatedValue } from '@/helpers/helper';
import commonFunctions from '../mixins/commonFunctions';

const barChartDefaultProps = {
  chartData: {
    labels: [],
    datasets: [
      {
        // label: 'Data One',
        // backgroundColor: '#f87979',
        backgroundColor: config.chartColors,
        data: [],
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback(value) {
              if (value) return `$${commaSeparatedValue(value)}`;
              else return `$${value}`;
            },
          },
        },
      ],
    },
    title: {
      display: true,
      text: 'Driver',
      position: 'bottom',
    },
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          const label = data.datasets[tooltipItem.datasetIndex].label || '';
          const value = tooltipItem.yLabel;
          return `${label} $${commaSeparatedValue(value)}`;
        },
      },
    },
    layout: {
      padding: {
        top: 10,
      },
    },
  },
};

const pieChartDefaultProps = {
  chartData: {
    labels: [],
    datasets: [
      {
        backgroundColor: config.chartColors,
        data: [],
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right',
    },
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          const label = data.labels[tooltipItem.index] || '';
          const value =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

          return `${label}: $${commaSeparatedValue(value)}`;
        },
      },
    },
  },
};

// TODO: I don't want to duplicate entire large object. It should be a few lines to change from $ to %.
const pieChartPercentDefaultProps = {
  chartData: {
    labels: [],
    datasets: [
      {
        backgroundColor: config.chartColors,
        data: [],
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right',
    },
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          const label = data.labels[tooltipItem.index] || '';
          const value =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

          return `${label}: ${commaSeparatedValue(value)}%`;
        },
      },
    },
  },
};

const lineChartDefaultProps = {
  chartData: {
    labels: [],
    datasets: [
      {
        // label: 'Data One',
        borderColor: '#165BAA',
        backgroundColor: 'transparent',
        data: [],
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    layout: {
      padding: {
        top: 15,
      },
    },
    scales: {
      xAxes: [
        {
          offset: true,
        },
      ],
      yAxes: [
        {
          ticks: {
            callback(value) {
              if (value) return `$${commaSeparatedValue(value)}`;
              else return `$${value}`;
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          const label = data.datasets[tooltipItem.datasetIndex].label || '';
          const value = tooltipItem.yLabel;
          return `${label} $${commaSeparatedValue(value)}`;
        },
      },
    },
  },
};

const chartPlugins = (addCurrencyPrefix = true) => {
  return {
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
      formatter(value) {
        if (addCurrencyPrefix === false) {
          return `${commaSeparatedValue(value)}`;
        } else {
          return `$${commaSeparatedValue(value)}`;
        }
      },
    },
  };
};

export default {
  name: 'CompanyOverviewTab',
  mixins: [commonFunctions],
  components: {
    BarChart,
    PieChart,
    LineChart,
    vSelect,
    VueApexCharts,
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
  },
  data() {
    return {
      chartFilterOptions: [
        { label: 'Week', value: 'week' },
        { label: 'Month', value: 'month' },
      ],
      driverRevenueFilterOptions: [
        { label: 'All', value: 'all' },
        { label: 'Solo', value: 'solo' },
        { label: 'Local', value: 'local' },
        { label: 'Team', value: 'team' },
      ],
      donutChartOption: {
        chart: { type: 'donut', width: 350 },
        labels: [
          'Fixed Costs',
          'Equipment',
          'Overhead Expenses',
          'Fuel',
          'Tires',
          'Drivers',
        ],
        legend: {
          position: 'right',
          horizontalAlign: 'bottom',
          formatter: (val) => val,
        },
        responsive: [
          {
            breakpoint: 1560,
            options: {
              chart: {
                width: '100%',
              },
              legend: {
                position: 'bottom',
              },
            },
          },
          {
            breakpoint: 1200,
            options: {
              legend: {
                position: 'right',
              },
            },
          },
        ],
      },
      driverRevenueBy: 'all',
      totalRevenueBy: 'week',
      totalMilesBy: 'week',
      revenueChart: cloneDeep(lineChartDefaultProps),
      truckChart: cloneDeep(pieChartDefaultProps),
      expenseChart: cloneDeep(pieChartDefaultProps),
      driverChart: cloneDeep(barChartDefaultProps),
      milesChart: {
        ...cloneDeep(barChartDefaultProps),
        chartOptions: {
          ...cloneDeep(barChartDefaultProps.chartOptions),
          title: {
            display: false,
          },
          tooltips: {
            callbacks: {
              label(tooltipItem, data) {
                const label =
                  data.datasets[tooltipItem.datasetIndex].label || '';
                const value = tooltipItem.yLabel;
                return `${label}: ${value.toLocaleString()}`;
              },
            },
          },
          scales: {
            xAxes: [
              {
                offset: true,
              },
            ],
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
          },
        },
      },
      rawResponse: {},
      lineChartPlugins: {
        ...cloneDeep(chartPlugins()),
        title: {
          display: true,
          text: (ctx) =>
            'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
        },
      },
      chartPlugins,
      startDate: null,
      endDate: null,
      expensesRangeValue: null,
      expenseChartValues: [],
    };
  },
  created() {
    const isoWeek = require('dayjs/plugin/weekOfYear');
    const isoDay = require('dayjs/plugin/weekday');
    dayjs.extend(isoWeek);
    dayjs.extend(isoDay);

    this.getOverView();
  },
  methods: {
    async getOverView() {
      try {
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
        this.startDate = payload.startDate;
        this.endDate = payload.endDate;

        const data = await this.$store.dispatch('homeTab/getOverview', payload);
        if (data.payload) {
          this.rawResponse = { ...data.payload };
          this.expenseChart.chartData.labels = [
            ...this.getAllExpenseLabels(this.rawResponse.expenseValues),
          ];
          this.expenseChart.chartData.datasets[0].data =
            this.getAllFormattedExpenseValues();
          if (this.$refs.expenseChart) {
            this.$refs.expenseChart.updateChart();
          }
          this.$emit('update:totalValues', data.payload.totalValues);

          // Set chart data
          // 1. Driver chart
          const top10Drivers = (data.payload.topValues.driversByRevenue || [])
            .sort((a, b) => b.revenue - a.revenue)
            .slice(0, 10);

          this.driverChart.chartData.labels = (top10Drivers || []).map(
            (driver) => driver.driverName
          );
          this.driverChart.chartData.datasets[0].data = (
            top10Drivers || []
          ).map((driver) => parseFloatWithTrim(driver.revenue || 0));

          if (this.$refs.driverChart) {
            this.$refs.driverChart.updateChart();
          }

          // 2. Truck chart
          const top10Trucks = (data.payload.topValues.trucksByRevenue || [])
            .sort((a, b) => b.revenue - a.revenue)
            .slice(0, 10);

          this.truckChart.chartData.labels = (top10Trucks || []).map(
            (truck) => truck.truckNumber
          );
          this.truckChart.chartData.datasets[0].data = (top10Trucks || []).map(
            (truck) => parseFloatWithTrim(truck.revenue || 0)
          );

          if (this.$refs.truckChart) {
            this.$refs.truckChart.updateChart();
          }

          // 3. Total revenue chart
          if (this.totalRevenueBy === 'week') {
            const { chartData, chartLabels } = this.formatDataByWeek(
              data.payload.dayValues,
              'revenue'
            );

            this.revenueChart.chartData.labels = chartLabels;
            this.revenueChart.chartData.datasets[0].data = chartData;
          } else {
            const { chartData, chartLabels } = this.groupDataByMonth(
              data.payload.dayValues,
              'revenue'
            );

            this.revenueChart.chartData.labels = chartLabels;
            this.revenueChart.chartData.datasets[0].data = chartData;
          }
          if (this.$refs.totalRevenueChart) {
            this.$refs.totalRevenueChart.updateChart();
          }

          // 4. Total miles chart
          if (this.totalMilesBy === 'week') {
            const { chartData, chartLabels } = this.formatDataByWeek(
              data.payload.dayValues,
              'miles'
            );

            this.milesChart.chartData.labels = chartLabels;
            this.milesChart.chartData.datasets[0].data = chartData;
          } else {
            const { chartData, chartLabels } = this.groupDataByMonth(
              data.payload.dayValues,
              'miles'
            );

            this.milesChart.chartData.labels = chartLabels;
            this.milesChart.chartData.datasets[0].data = chartData;
          }

          if (this.$refs.milesChart) {
            this.$refs.milesChart.updateChart();
          }
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
    initTab() {
      this.getOverView();
    },
    getMonthsBetweenDates(startDate, endDate) {
      // Check if start date is greater than end date
      if (startDate > endDate) {
        return [];
      }

      // Set start date to start of month and end date to end of month
      startDate = dayjs(startDate).startOf('month').toDate();
      endDate = dayjs(endDate).endOf('month').toDate();

      // Get month names from start date to end date
      const months = [];
      while (startDate <= endDate) {
        months.push(dayjs(startDate).format('MMM-YYYY'));
        startDate = dayjs(startDate).add(1, 'month').toDate();
      }

      return months;
    },
    groupDataByMonth(data, key = 'miles') {
      if (!key || !data) {
        return {
          chartData: [],
          chartLabels: [],
        };
      }

      // Get months from selected date range
      const selectedDates = this.selectedDateRange.split(' to ');
      const startDate = dayjs(selectedDates[0]).toDate();
      const endDate = dayjs(selectedDates[1]).toDate();

      // Get months from start date to end date
      const months = this.getMonthsBetweenDates(startDate, endDate);
      const res = (data || []).reduce((acc, curr) => {
        const monthYear = dayjs(curr.date).format('MMM-YYYY');

        if (acc[monthYear]) {
          acc[monthYear] += curr[key];
        } else {
          acc[monthYear] = curr[key];
        }

        return acc;
      }, {});

      return {
        chartData: months.map((month) => parseInt(res[month] || 0)),
        chartLabels: months.map((month) => month.split('-')[0]),
      };
    },
    onTotalMilesByChange() {
      if (this.totalMilesBy === 'week') {
        const { chartData, chartLabels } = this.formatDataByWeek(
          this.rawResponse.dayValues,
          'miles'
        );

        this.milesChart.chartData.labels = chartLabels;
        this.milesChart.chartData.datasets[0].data = chartData;
      } else {
        const { chartData, chartLabels } = this.groupDataByMonth(
          this.rawResponse.dayValues,
          'miles'
        );

        this.milesChart.chartData.labels = chartLabels;
        this.milesChart.chartData.datasets[0].data = chartData;
      }

      if (this.$refs.milesChart) {
        this.$refs.milesChart.updateChart();
      }
    },
    onTotalRevenueByChange() {
      if (this.totalRevenueBy === 'week') {
        const { chartData, chartLabels } = this.formatDataByWeek(
          this.rawResponse.dayValues,
          'revenue'
        );

        this.revenueChart.chartData.labels = chartLabels;
        this.revenueChart.chartData.datasets[0].data = chartData;
      } else {
        const { chartData, chartLabels } = this.groupDataByMonth(
          this.rawResponse.dayValues,
          'revenue'
        );

        this.revenueChart.chartData.labels = chartLabels;
        this.revenueChart.chartData.datasets[0].data = chartData;
      }

      if (this.$refs.totalRevenueChart) {
        this.$refs.totalRevenueChart.updateChart();
      }
    },
    formatDataByWeek(data, key = null) {
      if (!key || !data) {
        return {
          chartData: [],
          chartLabels: [],
        };
      }

      const selectedDateRange = this.selectedDateRange.split(' to ');
      // Get total number of weeks between the selected date range with year and return as labels for the chart in the format of "01/01 - 01/07"
      const labels = {};
      const startDate = dayjs(selectedDateRange[0]).toDate();
      const endDate = dayjs(selectedDateRange[1]).toDate();

      while (startDate <= endDate) {
        const weekNumberAndYear = `${dayjs(startDate).week()}-${dayjs(
          startDate
        ).year()}`;
        const diff = 7 - dayjs(startDate).day();
        const weekStart = dayjs(startDate).format('MM/DD');
        const weekEnd = dayjs(startDate).endOf('week').format('MM/DD');
        labels[weekNumberAndYear] = `${weekStart} - ${weekEnd}`;
        startDate.setDate(startDate.getDate() + diff);

        // If endDate week is not complete, add it to the labels
        if (startDate > endDate) {
          const weekNumberAndYear = `${dayjs(endDate).week()}-${dayjs(
            endDate
          ).year()}`;
          const weekStart = dayjs(endDate).startOf('week').format('MM/DD');
          const weekEnd = dayjs(endDate).format('MM/DD');
          labels[weekNumberAndYear] = `${weekStart} - ${weekEnd}`;
        }
      }

      const formattedData = (data || []).reduce((acc, curr) => {
        const weekNumberAndYear = `${dayjs(curr.date).week()}-${dayjs(
          curr.date
        ).year()}`;

        if (acc[weekNumberAndYear]) {
          acc[weekNumberAndYear] += curr[key];
        } else {
          acc[weekNumberAndYear] = curr[key];
        }

        return acc;
      }, {});

      return {
        chartData: Object.keys(labels).map((weekNumber) =>
          parseInt(formattedData[weekNumber] || 0)
        ),
        chartLabels: Object.values(labels),
      };
    },
    onDriverRevenueByChange() {
      if (
        this.rawResponse &&
        this.rawResponse.topValues &&
        this.rawResponse.topValues.driversByRevenue
      ) {
        const top10Drivers = this.rawResponse.topValues.driversByRevenue
          .sort((a, b) => b.revenue - a.revenue)
          .slice(0, 10);
        const res = top10Drivers
          .filter((driver) => {
            if (this.driverRevenueBy === 'all') {
              return true;
            } else if (
              this.driverRevenueBy === 'solo' &&
              driver.isTeam !== undefined &&
              driver.isLocal !== undefined
            ) {
              return !driver.isTeam && !driver.isLocal;
            } else if (
              this.driverRevenueBy === 'local' &&
              driver.isLocal !== undefined
            ) {
              return driver.isLocal;
            } else if (
              this.driverRevenueBy === 'team' &&
              driver.isTeam !== undefined
            ) {
              return driver.isTeam;
            }
          })
          .map((driver) => {
            return {
              ...driver,
              revenue: parseFloatWithTrim(driver.revenue),
            };
          });
        this.driverChart.chartData.labels = res.map(
          (driver) => driver.driverName
        );
        this.driverChart.chartData.datasets[0].data = res.map(
          (driver) => driver.revenue
        );
        if (this.$refs.driverChart) {
          this.$refs.driverChart.updateChart();
        }
      }
    },

    getTotalDaysBetweenDates(startDate, endDate) {
      // Check if start date is greater than end date
      if (this.$dayjs(startDate).isAfter(endDate)) {
        return [];
      }

      // Get total days between start date and end date
      return this.$dayjs(endDate).diff(startDate, 'days') + 1;
    },
    getPerDayValue(value) {
      return (
        value / this.getTotalDaysBetweenDates(this.startDate, this.endDate)
      );
    },
    getAnnualValue(value) {
      return this.getPerDayValue(value) ? this.getPerDayValue(value) * 365 : 0;
    },
    getWeeklyValue(value) {
      return this.getPerDayValue(value) ? this.getPerDayValue(value) * 7 : 0;
    },
    getMonthlyValue(value) {
      return this.getPerDayValue(value)
        ? this.getPerDayValue(value) * 30.417
        : 0;
    },
    getAllExpenseLabels(expenses) {
      return expenses.map((expense) => expense.category);
    },
    getAllFormattedExpenseValues() {
      if (!this.rawResponse || !this.rawResponse.expenseValues) return [];
      /*return this.rawResponse.expenseValues.map((expense) =>
        round((expense.value / this.rawResponse.totalValues.expense) * 100, 2)
      );*/
      return this.rawResponse.expenseValues.map((expense) =>
        round(expense.value, 2)
      );
    },
    onInput() {
      this.updateChart();
    },
    updateChart() {
      switch (this.expensesRangeValue) {
        case 'weekly':
          /*const weeklyExpense = this.getWeeklyValue(
            this.rawResponse.totalValues.expense
          );
          this.expenseChartValues = this.rawResponse.expenseValues.map(
            (expense) =>
              (this.getWeeklyValue(expense.value) / weeklyExpense) * 100
          );*/
          this.expenseChartValues = this.rawResponse.expenseValues.map(
            (expense) => round(this.getWeeklyValue(expense.value), 2)
          );
          break;
        case 'annual':
          /*const annualExpense = this.getAnnualValue(
            this.rawResponse.totalValues.expense
          );
          this.expenseChartValues = this.rawResponse.expenseValues.map(
            (expense) =>
              (this.getAnnualValue(expense.value) / annualExpense) * 100
          );*/
          this.expenseChartValues = this.rawResponse.expenseValues.map(
            (expense) => round(this.getAnnualValue(expense.value), 2)
          );
          break;
        case 'monthly':
          /*const monthlyExpense = this.getMonthlyValue(
            this.rawResponse.totalValues.expense
          );
          this.expenseChartValues = this.rawResponse.expenseValues.map(
            (expense) =>
              (this.getMonthlyValue(expense.value) / monthlyExpense) * 100
          );*/
          this.expenseChartValues = this.rawResponse.expenseValues.map(
            (expense) => round(this.getMonthlyValue(expense.value), 2)
          );
          break;
        default:
          break;
      }
      this.expenseChart.chartData.datasets[0].data = this.expenseChartValues;

      this.$refs.expenseChart.updateChart();
    },
  },
};
</script>

<style lang="scss" scoped>
.card-heading {
  font-weight: 500;
  color: #000000;
}

@media (max-width: 1560px) {
  .cost-operation-card {
    width: 100% !important;
  }

  .total-revenue-card {
    margin-top: 2rem !important;
    width: 100% !important;
  }
}

::v-deep {
  .vx-card__collapsible-content {
    height: 100%;
    .vx-card__body {
      height: 100%;
    }
  }

  .info-group-card {
    .vx-card__body {
      display: grid;
    }
  }

  .total-profit-card {
    .info-card {
      .vx-card__body {
        align-items: flex-start !important;

        .title {
          text-align: left;
          color: #0f0f10 !important;
        }
      }
    }
  }

  .info-card {
    .vx-card__body {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.info-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin-top: 10px;
  text-align: center;
  box-shadow: none !important;
  .vx-card__body {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 16px;
    font-weight: 400;
    color: #1f1f1f;
  }
  .dataset {
    font-size: 1.2rem;
    font-weight: 700;
    color: #000000;
  }
}
</style>
