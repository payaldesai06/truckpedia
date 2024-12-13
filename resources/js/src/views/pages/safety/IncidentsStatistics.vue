<template>
  <div>
    <div class="flex items-center justify-between mb-4 vx-row">
      <div class="vx-col">
        <div class="tab-container">
          <span
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab', { active: tab.value === activeTab }]"
            @click.stop="changeTab(tab)"
          >
            {{ tab.label }}
          </span>
        </div>
      </div>
      <div
        class="vx-col"
        v-if="activeTab === 'IncidentTables' || activeTab === 'IncidentGraphs'"
      >
        <flat-pickr
          v-model="selectedDateRange"
          :config="flat_pikr_config"
          ref="flatPicker"
          class="w-full"
          style="min-width: 190px"
          @on-change="onDateChange"
        />
      </div>
      <div class="vx-col" v-else>
        <Calendar
          v-model="startYear"
          view="year"
          :minDate="minYear"
          dateFormat="yy"
        />
        ~
        <Calendar
          v-model="endYear"
          view="year"
          :minDate="minYear"
          dateFormat="yy"
        />
      </div>
    </div>
    <section v-for="tab in tabs" :key="tab.id">
      <component
        v-show="tab.isActive"
        :ref="tab.value"
        :is="tab.value"
        :graphsValue="graphs"
        :tablesValue="tables"
      />
    </section>
  </div>
</template>
<script>
import { commaSeparatedValue } from '@/helpers/helper';
import { cloneDeep } from 'lodash';
import config from '@/config/constants';

import IncidentTables from './components/IncidentTables.vue';
import IncidentGraphs from './components/IncidentGraphs.vue';
import IncidentComparisonTables from './components/IncidentComparisonTables.vue';
import IncidentComparisonGraphs from './components/IncidentComparisonGraphs.vue';
import Calendar from 'primevue/calendar';
import { mapGetters } from 'vuex';

const barChartDefaultProps = {
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
    scales: {
      yAxes: [
        {
          ticks: {
            stepSize: 5,
            beginAtZero: true,
            callback(value) {
              if (value) return `${commaSeparatedValue(value)}`;
              else return `${value}`;
            },
          },
        },
      ],
    },
    // title: {
    //   display: true,
    //   text: "Driver",
    //   position: "bottom",
    // },
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          const label = data.datasets[tooltipItem.datasetIndex].label || '';
          const value = tooltipItem.yLabel;
          return `${label} ${commaSeparatedValue(value)}`;
        },
      },
    },
    layout: {
      padding: {
        top: 15,
      },
    },
  },
};

const lineChartDefaultProps = {
  chartData: {
    labels: [],
    datasets: {
      backgroundColor: config.chartColors,
      data: [],
    },
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
    },
    scales: {
      yAxes: [
        {
          ticks: { stepSize: 4 },
        },
      ],
      y: {
        ticks: {
          stepSize: 5,
          color: '#b6baca',
        },
        grid: {
          drawTicks: false,
        },
        border: {
          dash: [5, 10],
        },
      },
      x: {
        ticks: {
          color: '#b6baca',
        },
        grid: {
          display: true,
        },
        border: {
          display: true,
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
    formatter(value) {
      return `${commaSeparatedValue(value)}`;
    },
  },
};

export default {
  name: 'IncidentsStatistics',
  components: {
    IncidentTables,
    IncidentGraphs,
    IncidentComparisonTables,
    IncidentComparisonGraphs,
    Calendar,
  },
  props: {
    allTags: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters('auth', ['user']),
    activeTab() {
      return this.tabs.find((tab) => tab.isActive).value;
    },
  },
  data() {
    return {
      graphs: {
        incidentsByMonthChart: cloneDeep(barChartDefaultProps),
        incidentsByWeekDayChart: cloneDeep(barChartDefaultProps),
        incidentsByLocationChart: cloneDeep(barChartDefaultProps),
        incidentsByTypeChart: cloneDeep(barChartDefaultProps),
        incidentsByInvolvedChart: cloneDeep(barChartDefaultProps),
        incidentsByTagChart: cloneDeep(barChartDefaultProps),
        incidentsByYearChart: cloneDeep(barChartDefaultProps),
        incidentsByYearComparisonChart: cloneDeep(barChartDefaultProps),
        incidentsYearlyComparisonChart: cloneDeep(lineChartDefaultProps),
        incidentsBodilyInjuryByYearChart: cloneDeep(barChartDefaultProps),
        incidentsCollisionsByYearChart: cloneDeep(barChartDefaultProps),
        chartPlugins,
      },
      tables: {
        incidentsByTagMonth: {},
        incidentsByTypeMonth: {},
        incidentsByTypeLocation: {},
        incidentsByPreventable: {},
        incidentsByAtFault: {},
        incidentsComparisonByYear: {},
        incidentsComparisonByMonth: {},
        incidentsComparisonByQuarter: {},
        incidentsComparisonByIncidentType: {},
      },
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        dateFormat: 'Y-m-d',
        defaultDate: [
          this.$dayjs().startOf('year').format('YYYY-MM-DD'),
          this.$dayjs().endOf('year').format('YYYY-MM-DD'),
        ],
      },
      rawResponse: null,
      comparisonResponse: null,
      incidentTypes: config.safetyModule.incidentTypes,
      involvedTypes: config.safetyModule.involvedTypes,
      locationTypes: config.safetyModule.locationTypes,
      yesOrNoOrUnknown: config.safetyModule.yesOrNoOrUnknown,
      tabs: [
        {
          id: 1,
          label: 'Tables',
          value: 'IncidentTables',
          isActive: true,
        },
        {
          id: 2,
          label: 'Graphs',
          value: 'IncidentGraphs',
          isActive: false,
        },
        {
          id: 3,
          label: 'Comparison Tables By Year',
          value: 'IncidentComparisonTables',
          isActive: false,
        },
        {
          id: 4,
          label: 'Comparison Graphs By Year',
          value: 'IncidentComparisonGraphs',
          isActive: false,
        },
      ],
      startYear: (new Date().getFullYear() - 2).toString(),
      endYear: new Date().getFullYear().toString(),
      minYear: new Date(2000, 0, 1),
      months: {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec',
      },
    };
  },
  created() {
    const isoWeek = require('dayjs/plugin/weekOfYear');
    const isoDay = require('dayjs/plugin/weekday');
    this.$dayjs.extend(isoWeek);
    this.$dayjs.extend(isoDay);

    this.selectedDateRange = this.flat_pikr_config.defaultDate.join(' to ');
    this.getIncidentsData();
  },
  methods: {
    async getIncidentsData() {
      try {
        this.$vs.loading();

        const [startDate, endDate] = this.selectedDateRange.split(' to ');
        const { data } = await this.$store.dispatch(
          'incidents/getDataForCharts',
          {
            startDate: this.$dayjs(startDate).format('YYYY-MM-DD'),
            endDate: this.$dayjs(endDate).format('YYYY-MM-DD'),
          }
        );

        if (data.payload) {
          this.rawResponse = { ...data.payload };
          if (this.activeTab === 'IncidentGraphs') {
            this.initGraphsTab();
          }
          if (this.activeTab === 'IncidentTables') {
            this.initTablesTab();
          }
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async getIncidentsYearlyComparisonData() {
      if (
        this.startYear &&
        this.endYear &&
        this.$dayjs(this.startYear).format('YYYY') >
          this.$dayjs(this.endYear).format('YYYY')
      ) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: 'Start year should be less than or equal to End year',
        });
        return;
      }

      try {
        this.$vs.loading();

        const { data } = await this.$store.dispatch(
          'incidents/getYearlyComparisonDataForCharts',
          {
            startYear: this.$dayjs(this.startYear).format('YYYY'),
            endYear: this.$dayjs(this.endYear).format('YYYY'),
          }
        );

        if (data.payload) {
          this.comparisonResponse = { ...data.payload };
          if (this.activeTab === 'IncidentComparisonTables') {
            this.initComparisonTablesTab();
          }
          if (this.activeTab === 'IncidentComparisonGraphs') {
            this.initComparisonGraphsTab();
          }
        }
      } catch (error) {
        console.log(error);
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    initGraphsTab() {
      if (this.rawResponse) {
        this.initIncidentsByWeekDayChart();
        this.initIncidentsByTypeChart();
        this.initIncidentsByInvolvedChart();
        this.initIncidentsByLocationChart();
        this.initIncidentsByMonthChart();
        this.initIncidentsByTagChart();
      }
    },
    initComparisonTablesTab() {
      if (this.comparisonResponse) {
        this.initIncidentsComparisonByYear();
        this.initIncidentsComparisonByMonth();
        this.initIncidentsComparisonByQuarter();
        this.initIncidentsComparisonByIncidentType();
      }
    },
    initTablesTab() {
      if (this.rawResponse) {
        this.initIncidentsByTagMonth();
        this.initIncidentsByTypeLocation();
        this.initIncidentsByTypeMonth();
        this.initIncidentsByPreventable();
        this.initIncidentsByAtFault();
      }
    },
    initComparisonGraphsTab() {
      if (this.comparisonResponse) {
        this.initIncidentsByYearChart();
        this.initIncidentsByYearComparisonChart();
        this.initIncidentsYearlyComparisonsChart();
        this.initIncidentsBodilyInjuryByYearChart();
        this.initIncidentsCollisionsByYearChart();
      }
    },
    initIncidentChart(
      chartType,
      incidentType,
      dataKey,
      chartRef,
      labelCallback = null
    ) {
      const { byYear } = this.comparisonResponse;
      byYear.sort((a, b) => a.year - b.year);

      const [labels, data] = byYear.reduce(
        (prev, curr) => {
          let value = curr[dataKey];
          if (incidentType) {
            const incident = curr.byIncidentType.find(
              (item) => item.incidentType === incidentType
            );
            value = incident ? incident.count : 0;
          }
          const [_labels, _data] = prev;
          return [
            [..._labels, curr.year],
            [..._data, value],
          ];
        },
        [[], []]
      );

      this.graphs[chartType].chartData.labels = labels;
      this.graphs[chartType].chartData.datasets[0].data = data;

      if (labelCallback) {
        this.graphs[chartType].chartOptions.scales.yAxes[0].ticks.callback =
          labelCallback;
      }

      if (
        this.$refs.IncidentComparisonGraphs &&
        this.$refs.IncidentComparisonGraphs[0].$refs[chartRef]
      ) {
        this.$refs.IncidentComparisonGraphs[0].$refs[chartRef].updateChart();
      }
    },
    initIncidentsYearlyComparisonsChart() {
      const { byYear } = this.comparisonResponse;
      byYear.sort((a, b) => a.year - b.year);

      const dataSets = Array.from({ length: byYear.length }).map((item) => ({
        data: [], // Array.from({ length: 12 }).fill(0),
      }));
      const labels = [];
      Object.keys(this.months).forEach((month) => {
        byYear.forEach((year, index) => {
          dataSets[index].label = year.year;
          dataSets[index].borderColor = config.chartColors[index];
          dataSets[index].fill = false;
          year.byMonth.forEach((item) => {
            // Shall not display 0 for months in the future, which are not returned by backend.
            for (let i = 0; i < item.month - dataSets[index].data.length; ++i) {
              dataSets[index].data.push(0);
            }
            dataSets[index].data[item.month - 1] = item.count;
          });
        });
        labels.push(this.months[month]);
      });
      this.graphs.incidentsYearlyComparisonChart.chartData.labels = labels;
      this.graphs.incidentsYearlyComparisonChart.chartData.datasets = dataSets;
      if (
        this.$refs.IncidentComparisonGraphs &&
        this.$refs.IncidentComparisonGraphs[0].$refs.yearlyComparison
      ) {
        this.$refs.IncidentComparisonGraphs[0].$refs.yearlyComparison.updateChart();
      }
    },
    initIncidentsBodilyInjuryByYearChart() {
      this.initIncidentChart(
        'incidentsBodilyInjuryByYearChart',
        'bodilyInjury',
        'count',
        'bodilyInjuryByYear'
      );
    },
    initIncidentsCollisionsByYearChart() {
      this.initIncidentChart(
        'incidentsCollisionsByYearChart',
        'collision',
        'count',
        'collisionsByYear'
      );
    },
    initIncidentsByYearChart() {
      this.initIncidentChart('incidentsByYearChart', null, 'count', 'byYear');
    },
    initIncidentsByYearComparisonChart() {
      const labelCallback = (value) => {
        if (value) return `${commaSeparatedValue(value)}%`;
        else return `${value}`;
      };
      this.initIncidentChart(
        'incidentsByYearComparisonChart',
        null,
        'percentDiffToPreviousYear',
        'yearComparison',
        labelCallback
      );
    },
    initIncidentsByWeekDayChart() {
      const { byDayOfWeek, totalIncidents } = this.rawResponse;
      let labels = [];
      let data = [];

      const days = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ];
      days.forEach((day) => {
        const item = (byDayOfWeek || []).find((item) => item.dayOfWeek === day);
        labels.push(day.charAt(0).toUpperCase() + day.slice(1));
        data.push(item ? item.count : 0);
      });

      this.graphs.incidentsByWeekDayChart.chartData.labels = labels;
      this.graphs.incidentsByWeekDayChart.chartData.datasets[0].data = data;

      if (
        this.$refs.IncidentGraphs &&
        this.$refs.IncidentGraphs[0].$refs.byWeekDay
      ) {
        this.$refs.IncidentGraphs[0].$refs.byWeekDay.updateChart();
      }
    },
    initChart(chartType, typeData, typeProperty, graphType, chartRef) {
      const { totalIncidents } = this.rawResponse;
      let labels = [];
      let data = [];

      const chartData = this.rawResponse[chartType] || [];
      const chartDataMap = new Map(
        chartData.map((item) => [item[typeProperty], item])
      );

      const sortedType = ['byIncidentType', 'byInvolvedType', 'byLocationType'];
      if (sortedType.includes(chartType)) {
        typeData.sort((a, b) => {
          const colA = a['value'].toLowerCase();
          const colB = b['value'].toLowerCase();
          if (colA < colB) return -1;
          if (colA > colB) return 1;
          return 0;
        });
      }

      (typeData || []).forEach((typeItem) => {
        const label =
          chartType === 'byTag' ? typeItem.business_name : typeItem.label;
        const value = chartType === 'byTag' ? typeItem.tag_id : typeItem.value;
        const item = chartDataMap.get(value);

        labels.push(label);
        data.push(item ? item.count : 0);
      });

      // Unspecified
      labels.push('Unspecified');
      data.push(totalIncidents - data.reduce((a, b) => a + b, 0));

      this.graphs[graphType].chartData.labels = labels;
      this.graphs[graphType].chartData.datasets[0].data = data;

      if (
        this.$refs.IncidentGraphs &&
        this.$refs.IncidentGraphs[0].$refs[chartRef]
      ) {
        this.$refs.IncidentGraphs[0].$refs[chartRef].updateChart();
      }
    },
    initIncidentsByTypeChart() {
      this.initChart(
        'byIncidentType',
        this.incidentTypes,
        'incidentType',
        'incidentsByTypeChart',
        'byTypeChart'
      );
    },
    initIncidentsByInvolvedChart() {
      if (
        config.onlyUseSafetyTab.some(
          (item) =>
            item === this.user.admin_company_details.admin_company_detail_id
        )
      ) {
        const index = this.involvedTypes.findIndex(
          (item) => item.value === 'ownerOperator'
        );
        if (index >= 0) {
          // Will remove correct bars without value checking.
          this.involvedTypes.splice(index, 1);
        }
      }
      this.initChart(
        'byInvolvedType',
        this.involvedTypes,
        'involvedType',
        'incidentsByInvolvedChart',
        'byInvolvedChart'
      );
    },
    initIncidentsByLocationChart() {
      if (
        config.onlyUseSafetyTab.some(
          (item) =>
            item === this.user.admin_company_details.admin_company_detail_id
        )
      ) {
        const index = this.locationTypes.findIndex(
          (item) => item.value === 'supplier'
        );
        if (index >= 0) {
          // Will remove correct bars without value checking.
          this.locationTypes.splice(index, 1);
        }
      }
      this.initChart(
        'byLocationType',
        this.locationTypes,
        'locationType',
        'incidentsByLocationChart',
        'byLocationChart'
      );
    },
    initIncidentsByMonthChart() {
      const { byMonth, totalIncidents } = this.rawResponse;
      let labels = [];
      let data = [];

      Object.keys(this.months).forEach((month) => {
        const item = (byMonth || []).find((item) => item.month == month);
        labels.push(this.months[month]);
        data.push(item ? item.count : 0);
      });

      this.graphs.incidentsByMonthChart.chartData.labels = labels;
      this.graphs.incidentsByMonthChart.chartData.datasets[0].data = data;

      if (
        this.$refs.IncidentGraphs &&
        this.$refs.IncidentGraphs[0].$refs.byMonthChart
      ) {
        this.$refs.IncidentGraphs[0].$refs.byMonthChart.updateChart();
      }
    },
    initIncidentsByTagChart() {
      this.initChart(
        'byTag',
        this.allTags,
        'tagId',
        'incidentsByTagChart',
        'byTagChart'
      );
    },
    initIncidentsByTagMonth() {
      const { byTag } = this.rawResponse;
      const tagIds = byTag.map((item) => item.tagId);
      const longestStringLength = this.allTags
        .filter((item) => tagIds.includes(item.tag_id))
        .reduce((acc, item) => {
          return Math.max(acc, item.business_name.length);
        }, 0);

      let tableHeader = [
        config.onlyUseSafetyTab.some(
          (item) =>
            item === this.user.admin_company_details.admin_company_detail_id
        )
          ? 'Site'
          : 'Tag',
        ...Object.values(this.months),
      ];
      tableHeader = tableHeader.map((item, index) => ({
        field: `col+${index}`,
        header: item,
        style: {
          minWidth: index === 0 ? `${longestStringLength * 9}px` : '',
        },
      }));

      tableHeader.push({ field: 'col+total', header: 'Total' });

      const tableData = byTag.map((item) => {
        const row = {};
        row['col+0'] = this.allTags.find(
          (tag) => tag.tag_id === item.tagId
        ).business_name;
        for (let i = 1; i <= 12; i++) {
          row[`col+${i}`] = '';
        }
        const sum = item.byMonth.reduce((acc, monthData) => {
          row[`col+${monthData.month}`] = monthData.count;
          return acc + monthData.count;
        }, 0);

        row['col+total'] = sum;
        return row;
      });
      this.tables.incidentsByTagMonth = {
        tableHeader,
        tableData,
      };
    },
    initIncidentsByTypeMonth() {
      const { byIncidentType } = this.rawResponse;

      let tableHeader = ['Type', ...Object.values(this.months)];
      tableHeader = tableHeader.map((item, index) => ({
        field: `col+${index}`,
        header: item,
        style: {
          minWidth: index === 0 ? '130px' : '',
        },
      }));

      tableHeader.push({ field: 'col+total', header: 'Total' });

      const tableData = byIncidentType.map((item) => {
        const row = {};
        row['col+0'] = this.incidentTypes.find(
          (type) => type.value === item.incidentType
        ).label;
        for (let i = 1; i <= 12; i++) {
          row[`col+${i}`] = '';
        }

        const sum = item.byMonth.reduce((acc, monthData) => {
          row[`col+${monthData.month}`] = monthData.count;
          return acc + monthData.count;
        }, 0);

        row['col+total'] = sum;
        return row;
      });
      this.tables.incidentsByTypeMonth = {
        tableHeader,
        tableData,
      };
    },
    initIncidentsByTypeLocation() {
      const { byIncidentType } = this.rawResponse;
      const tableHeader = [
        {
          field: 'col+0',
          header: 'Type',
          style: {
            minWidth: '130px',
          },
        },
        ...this.locationTypes.map((item) => ({
          field: `col+${item.value}`,
          header: item.label,
        })),
        { field: 'col+total', header: 'Total' },
      ];
      const tableData = byIncidentType.map((item) => {
        const row = {};
        row['col+0'] = this.incidentTypes.find(
          (type) => type.value === item.incidentType
        ).label;

        const sum = item.byLocationType.reduce((acc, item1) => {
          row[`col+${item1.locationType}`] = item1.count;
          return acc + item1.count;
        }, 0);

        row['col+total'] = sum;

        return row;
      });
      const sortedData = tableData.sort((a, b) => {
        const colA = a['col+0'].toLowerCase();
        const colB = b['col+0'].toLowerCase();
        if (colA < colB) return -1;
        if (colA > colB) return 1;
        return 0;
      });
      this.tables.incidentsByTypeLocation = {
        tableHeader,
        tableData: sortedData,
      };
    },
    initIncidentsByPreventable() {
      const { byPreventable } = this.rawResponse;

      const tableHeader = [
        { field: 'col+0', header: 'Preventable' },
        { field: 'col+1', header: 'Yes/No' },
      ];
      const tableData = byPreventable.map((item) => {
        const row = {
          'col+0': this.yesOrNoOrUnknown.find(
            (element) => element.value === item.preventable
          ).label,
          'col+1': item.count,
        };
        return row;
      });
      this.tables.incidentsByPreventable = {
        tableHeader,
        tableData,
      };
    },
    initIncidentsByAtFault() {
      const { byAtFault } = this.rawResponse;
      const tableHeader = [
        { field: 'col+0', header: 'At Fault' },
        { field: 'col+1', header: 'Yes/No' },
      ];
      const tableData = byAtFault.map((item) => {
        const row = {
          'col+0': this.yesOrNoOrUnknown.find(
            (element) => element.value === item.atFault
          ).label,
          'col+1': item.count,
        };
        return row;
      });

      this.tables.incidentsByAtFault = {
        tableHeader,
        tableData,
      };
    },
    initIncidentsComparisonByYear() {
      const { byYear } = this.comparisonResponse;
      const tableHeader = [
        { field: 'col+0', header: 'Year' },
        { field: 'col+1', header: 'Incidents', textRight: true },
        {
          field: 'col+2',
          header: '% Diff',
          textRight: true,
          formatColor: true,
        },
      ];
      const tableData = byYear
        .sort((a, b) => a.year - b.year)
        .map((item) => {
          const row = {
            'col+0': item.year,
            'col+1': item.count,
            'col+2':
              item.percentDiffToPreviousYear === null
                ? ''
                : item.percentDiffToPreviousYear,
          };
          return row;
        });

      this.tables.incidentsComparisonByYear = {
        tableHeader,
        tableData,
      };
    },
    initIncidentsComparisonByMonth() {
      const { byYear } = this.comparisonResponse;
      byYear.sort((a, b) => a.year - b.year);
      const tableHeader_A = byYear.map((item, index) => ({
        field: `col+o+${index + 1}`,
        header: item.year,
        textRight: true,
      }));
      tableHeader_A.unshift({ field: 'col+o+0', header: 'Month' });

      const tableHeader_B = byYear.slice(1).map((item, index) => ({
        field: `col+c+${index + 1}`,
        header: item.year,
        formatColor: true,
        textRight: true,
      }));

      const headerGroup = [
        { header: 'Month', rowspan: 2 },
        { header: 'Incidents', colspan: byYear.length },
        { header: '% Diff', colspan: byYear.length - 1 },
      ];
      const tableHeader = [headerGroup, [...tableHeader_A, ...tableHeader_B]];

      const monthArr = Object.values(this.months);

      const tableData = monthArr.map((item, index) => {
        const row = {};
        row['col+o+0'] = item;
        byYear.map((item1, index1) => {
          const monthData = item1.byMonth.find(
            (element) => element.month === index + 1
          );
          row[`col+o+${index1 + 1}`] = monthData ? monthData.count : '';
        });
        byYear.slice(1).map((item1, index1) => {
          const monthData = item1.byMonth.find(
            (element) => element.month === index + 1
          );
          row[`col+c+${index1 + 1}`] =
            monthData && monthData.percentDiffToPreviousYear !== null
              ? monthData.percentDiffToPreviousYear
              : '';
        });
        return row;
      });
      this.tables.incidentsComparisonByMonth = {
        tableHeader,
        tableData,
      };
    },
    initIncidentsComparisonByQuarter() {
      const { byYear } = this.comparisonResponse;
      byYear.sort((a, b) => a.year - b.year);
      const tableHeader = byYear.map((item, index) => ({
        field: `col+${index + 1}`,
        header: item.year,
        textRight: true,
      }));

      tableHeader.unshift({ field: 'col+0', header: 'Quarter' });

      const quarterArr = ['1st', '2nd', '3rd', '4th'];

      const tableData = quarterArr.map((item, index) => {
        const row = {};
        row['col+0'] = item;
        byYear.map((item1, index1) => {
          const quarterData = item1.byQuarter.find(
            (element) => element.quarter === index + 1
          );
          row[`col+${index1 + 1}`] = quarterData ? quarterData.count : '';
        });
        return row;
      });

      this.tables.incidentsComparisonByQuarter = {
        tableHeader,
        tableData,
      };
    },
    initIncidentsComparisonByIncidentType() {
      const { byYear } = this.comparisonResponse;
      byYear.sort((a, b) => a.year - b.year);
      const tableHeader = byYear.map((item, index) => ({
        field: `col+${index + 1}`,
        header: item.year,
        textRight: true,
      }));

      tableHeader.unshift({ field: 'col+0', header: 'Type' });

      const tableData = this.incidentTypes.map((item, index) => {
        const row = {};
        row['col+0'] = item.label;
        byYear.map((item1, index1) => {
          const data = item1.byIncidentType.find(
            (element) => element.incidentType === item.value
          );
          row[`col+${index1 + 1}`] = data ? data.count : '';
        });
        return row;
      });
      tableData.sort((a, b) => a['col+0'].localeCompare(b['col+0']));
      const cloneTableData = cloneDeep(tableData);
      const footerData = cloneTableData.reduce((acc, obj) => {
        for (let key in obj) {
          acc[key] = acc[key] || 0;
          obj[key] = obj[key] || 0;

          acc[key] += parseInt(obj[key]);
        }
        return acc;
      }, {});

      this.tables.incidentsComparisonByIncidentType = {
        tableHeader,
        tableData,
        footerData,
      };
    },
    onDateChange(dateArray) {
      if (dateArray.length > 1) {
        if (
          this.activeTab === 'IncidentTables' ||
          this.activeTab === 'IncidentGraphs'
        ) {
          this.getIncidentsData();
        }
      }
    },
    changeTab(selectedTab) {
      const sharedDataTabs = ['IncidentTables', 'IncidentGraphs'];
      const sharedComparisonDataTabs = [
        'IncidentComparisonTables',
        'IncidentComparisonGraphs',
      ];
      const prevActiveTab = this.activeTab;

      this.tabs.forEach((tab) => {
        tab.isActive = tab.id === selectedTab.id;
      });

      if (
        sharedDataTabs.includes(prevActiveTab) &&
        sharedComparisonDataTabs.includes(selectedTab.value)
      )
        this.getIncidentsYearlyComparisonData();
      else if (
        sharedDataTabs.includes(selectedTab.value) &&
        sharedComparisonDataTabs.includes(prevActiveTab)
      )
        this.getIncidentsData();

      switch (selectedTab.value) {
        case 'IncidentTables':
          this.initTablesTab();
          break;
        case 'IncidentGraphs':
          this.$nextTick(() => {
            this.initGraphsTab();
          });
          break;
        case 'IncidentComparisonTables':
          this.initComparisonTablesTab();
          break;
        case 'IncidentComparisonGraphs':
          this.$nextTick(() => {
            this.initComparisonGraphsTab();
          });
          break;
        default:
          break;
      }
    },
  },
  watch: {
    startYear(newVal, oldVal) {
      this.getIncidentsYearlyComparisonData();
    },
    endYear(newVal, oldVal) {
      this.getIncidentsYearlyComparisonData();
    },
  },
};
</script>
<style lang="scss" scoped>
$primary: rgba(var(--vs-primary), 1);

.tab-container {
  display: flex;
  // margin-bottom: 20px;
  overflow-x: hidden;
  padding-bottom: 8px;

  &:hover {
    overflow-x: scroll;
    padding-bottom: 0px;
  }

  &::-webkit-scrollbar {
    height: 8px;
    overflow: visible;
  }

  &::-webkit-scrollbar-thumb {
    border-style: solid;
    border-color: transparent;
    border-width: 4px;
    background-color: #dadce0;
    border-radius: 8px;
    box-shadow: none;
  }

  .tab {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;
    &.active {
      font-weight: 600;
      color: $primary;
      border-bottom: 2px solid $primary;
    }
  }
}
</style>
