<template>
  <div>
    <div class="my-5">
      <div class="flex items-center justify-between">
        <div class="flex gap-2 items-center">
          <h6>Status:</h6>
          <div :class="cssForStatusCell[data.status] || ''">
            {{ statusLabel[data.status] }}
          </div>
        </div>
        <div class="flex items-center">
          <flat-pickr
            :value="selectedDateRange"
            :config="flat_pikr_config"
            placeholder="Select Date Range"
            class="w-full"
            style="min-width: 14rem; max-height: 40px"
            @on-change="onDateChange"
          />
        </div>
      </div>
      <div class="flex items-center">
        <div class="percentage-status my-5 mr-5">
          <h6 class="mb-2">{{ leadsCount.sent }}</h6>
          <p>Sent</p>
        </div>
        <div class="percentage-status my-5 mr-5">
          <h6 class="mb-2">
            {{ leadsCount.openedInPercentage }}% | {{ leadsCount.opened }}
          </h6>
          <div>
            <p>Opened</p>
          </div>
        </div>
        <!-- <div class="percentage-status my-5 mr-5">
          <h6 class="mb-2">50%</h6>
          <p>Links Clicked</p>
        </div> -->
        <!-- Commented out the Replied Count-->
        <!-- <div class="percentage-status my-5 mr-5">
          <h6 class="mb-2">
            {{ leadsCount.repliedInPercentage }}% | {{ leadsCount.replied }}
          </h6>
          <p>Replied</p>
        </div> -->
        <!-- <div class="percentage-status my-5 mr-5">
          <h6 class="mb-2">96%</h6>
          <p>Opportunities</p>
        </div> -->
      </div>
    </div>
    <vs-divider />
    <div>
      <line-chart
        v-if="analyticsData.dailyCount && analyticsData.dailyCount.length"
        ref="lineChart"
        :chartOptions="analyticsChart.chartOptions"
        :chartData="analyticsChart.chartData"
        :chartPlugins="chartPlugins"
      />
      <div v-else class="flex">
        <span class="dark-txt m-auto">
          No data available for specified time
        </span>
      </div>
    </div>
    <vs-divider />
    <div>
      <ul class="flex space-x-4 ml-2 mr-4 pb-5" style="margin-bottom: 7px">
        <li
          v-for="item in items"
          :key="item.title"
          @click="changeComponent(item.componentName)"
          class="font-medium text-md cursor-pointer invisible-border"
          :class="{ active: activeComponent == item.componentName }"
        >
          {{ item.title }}
        </li>
      </ul>
      <div class="mx-2">
        <div v-if="activeComponent === 'step-analytics'">
          <div
            class="step-analytics-table"
            v-if="(analyticsData.stepAnalytics || []).length"
          >
            <table class="w-full">
              <tbody>
                <tr>
                  <th colspan="4">Step</th>
                  <th colspan="4">Sent</th>
                  <th colspan="4">Opened</th>
                  <!-- Commented out the Replied Count-->
                  <!-- <th colspan="4">Replied</th> -->
                </tr>
                <tr v-for="item in stepAnalytics" :key="item.idx">
                  <td colspan="4">
                    <span class="dark-txt">
                      {{ item.step }}
                    </span>
                  </td>
                  <td colspan="4">
                    <span class="highlight-txt">
                      {{ item.sent }}
                    </span>
                  </td>
                  <td colspan="4">
                    <span class="highlight-txt">{{ item.opened }}</span> |
                    <span class="dark-txt">{{ item.openedInPercentage }}%</span>
                  </td>
                  <!-- Commented out the Replied Count -->
                  <!-- <td colspan="4">
                    <span class="highlight-txt">{{ item.replied }}</span>
                    |
                    <span class="dark-txt">
                      {{ item.repliedInPercentage }}%
                    </span>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <h4 v-if="data.status === 'draft'">
              Step analytics will appear here once the campaign is published
            </h4>
            <h4 v-else>No data available for specified time</h4>
          </div>
        </div>
        <div v-else-if="activeComponent === 'activity'">
          <div class="w-full" v-if="(analyticsData.activities || []).length">
            <div
              class="shadow-drop py-4 px-3 mb-2 rounded items-center row"
              v-for="(activity, index) in analyticsData.activities"
              :key="index"
            >
              <div class="w-3/12">
                <div class="flex items-center">
                  <div>
                    <div class="flex items-center">
                      <div>
                        <template
                          v-if="activityStatus[activity.status] === 'Opened'"
                        >
                          <!-- <img src="@assets/images/custom/svgIconOpen.svg" /> -->
                        </template>
                        <template
                          v-if="activityStatus[activity.status] === 'Sent'"
                        >
                          <!-- <img src="@assets/images/custom/svgIconSent.svg" /> -->
                        </template>
                        <!-- Commented out the Replied count -->
                        <!-- <template
                          v-if="activityStatus[activity.status] === 'Replied'"
                        >
                          <img src="@assets/images/custom/svgIconReplied.svg" />
                        </template> -->
                      </div>
                      <div>
                        <p class="mb-0 ml-2" style="color: rgb(70, 70, 70)">
                          {{ activityStatus[activity.status] }}
                        </p>
                        <!-- <div class="small">
                          <span
                            style="
                              margin-left: 7px;
                              color: rgba(156, 156, 156, 0.64);
                            "
                          >
                            {{ activity.lead.email }}
                          </span>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-5/12">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <!-- <img src="@assets/images/custom/svgIconSmiley.svg" /> -->
                  </div>
                  <h6 class="mb-0 ml-1 text-dark font-semibold">
                    {{ activity.lead.email }}
                  </h6>
                </div>
              </div>
              <div class="w-2/12">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <!-- <img src="@assets/images/custom/svgIconClock.svg" /> -->
                  </div>
                  <small
                    class="mb-0 ml-1 text-muted text-sm"
                    style="color: rgb(189, 189, 189)"
                  >
                    {{ $dayjs(activity.timestamp).format('MM/DD/YY HH:mm') }}
                  </small>
                </div>
              </div>
              <div class="w-2/12">
                <div class="flex items-center">
                  <span class="mr-1">Step {{ activity.step }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h4 v-if="data.status === 'draft'">
              Your activity stream will appear here once the campaign is
              published
            </h4>
            <h4 v-else>No data available for specified time</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import config from '@/config/constants';
import { cloneDeep } from 'lodash';
import LineChart from '@/components/charts/LineChart.vue';

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
      position: 'bottom',
      display: true,
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
          ticks: { stepSize: 1, beginAtZero: true },
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
    // formatter(value) {
    //   return `${commaSeparatedValue(value)}`;
    // },
  },
};

export default {
  name: 'Analytics',
  components: {
    LineChart,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    campaignId: {
      type: Number,
      default: null,
    },
  },
  computed: {
    leadsCount() {
      const { opened, sent } = this.analyticsData.leadsCount || {};
      return {
        sent: sent || 0,
        openedInPercentage: opened ? Math.round((opened / sent) * 100) : 0,
        opened: opened || 0,
        // Commented out the Replied count
        // repliedInPercentage: replied ? Math.round((replied / sent) * 100) : 0,
        // replied: replied || 0,
      };
    },
    stepAnalytics() {
      const { stepAnalytics } = this.analyticsData || {};

      return (stepAnalytics || []).map((item, index) => {
        const { step, sent, opened } = item;

        return {
          idx: index,
          step,
          sent,
          opened,
          openedInPercentage: opened ? Math.round((opened / sent) * 100) : 0,
          // Commented out the Replied count
          // replied,
          // repliedInPercentage: replied ? Math.round((replied / sent) * 100) : 0,
        };
      });
    },
  },
  data() {
    return {
      activeComponent: 'step-analytics',
      content: false,
      items: [
        {
          title: 'Step Analytics',
          componentName: 'step-analytics',
        },
        {
          title: 'Activities',
          componentName: 'activity',
        },
      ],
      statusLabel: {
        draft: 'Draft',
        active: 'Active',
        paused: 'Paused',
        completed: 'Completed',
      },
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        dateFormat: 'Y-m-d',
        maxDate: this.$dayjs().toDate(),
        defaultDate: [
          this.$dayjs().subtract(1, 'month').toDate(),
          this.$dayjs().toDate(),
        ],
      },
      analyticsData: {},
      activityStatus: {
        // Commented out the Replied count
        // replied: 'Replied',
        opened: 'Opened',
        sent: 'Sent',
      },
      analyticsChart: cloneDeep(lineChartDefaultProps),
      chartPlugins,
      cssForStatusCell: {
        active: 'active-status',
        paused: 'paused-status',
        draft: 'draft-status',
        completed: 'completed-status',
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    changeComponent(newComponent) {
      if (newComponent === this.activeComponent) return;
      this.activeComponent = newComponent;
    },
    async init() {
      try {
        this.$vs.loading();
        this.selectedDateRange = this.flat_pikr_config.defaultDate
          .map((date) => this.$dayjs(date).format('YYYY-MM-DD'))
          .join(' to ');
        await this.getAnalytics();
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async getAnalytics() {
      try {
        const [startDate, endDate] = this.selectedDateRange.split(' to ');
        const {
          data: { payload },
        } = await this.$store.dispatch('marketing/getAnalytics', {
          id: this.campaignId,
          startDate: this.$dayjs(startDate).format('YYYY-MM-DD'),
          endDate: this.$dayjs(endDate).format('YYYY-MM-DD'),
          timezone: this.$dayjs.tz.guess(),
        });

        if (payload) {
          this.analyticsData = payload;
          this.initLineChart(payload.dailyCount);
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
    onDateChange(dateArray) {
      if (dateArray.length > 1) {
        const dateString = dateArray
          .map((date) => this.$dayjs(date).format('YYYY-MM-DD'))
          .join(' to ');
        if (dateString === this.selectedDateRange) return;

        this.selectedDateRange = dateString;
        this.getAnalytics();
      }
    },
    initLineChart(dailyCount = []) {
      const chartLabels = [];
      const chartData = [];
      const dailyCountLabels = {
        emailsSent: 'Emails Sent',
        emailsOpened: 'Emails Opened',
        leadsOpened: 'Leads Opened',
        // Commented out the Replied labels
        // emailsReplied: 'Emails Replied',
        // leadsReplied: 'Leads Replied',
      };

      dailyCount.forEach((item) => {
        const { date, ...rest } = item;
        chartLabels.push(this.$dayjs(date).format('MM/DD'));
        Object.entries(rest).forEach(([key, value], index) => {
          if (dailyCountLabels[key]) {
            if (!chartData[index]) {
              chartData[index] = {
                label: dailyCountLabels[Object.keys(rest)[index]],
                data: [],
                borderColor: config.chartColors[index],
                fill: false,
              };
            }
            chartData[index].data.push(value);
          }
        });
      });

      this.analyticsChart.chartData.labels = chartLabels;
      this.analyticsChart.chartData.datasets = chartData;

      if (this.$refs.lineChart) {
        this.$refs.lineChart.updateChart();
      }
    },
  },
};
</script>
<style scoped lang="scss">
.active {
  border-bottom: 2px solid rgba(var(--vs-primary), 1);
  color: rgba(var(--vs-primary), 1) !important;
}

.active-status {
  background: var(--blue-600, #2563eb);
}
.completed-status {
  background: var(--green-600, #16a34a);
}
.draft-status {
  background: var(--gray-600, #4b5563);
}
.paused-status {
  background: var(--red-600, #b7552b);
}

.draft-status,
.active-status,
.paused-status,
.completed-status {
  border-radius: 4px;
  padding: 2px 6px;
  color: #fff;
}

.percentage-status {
  padding: 16px 24px;
  border-radius: 16px;
  background: var(--brand-neutrals-white, #fff);
  box-shadow: 1px 1px 8px 0px #e1e1e1;
  min-width: 135px;

  h6 {
    font-size: 16px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: 500;
  }
}

.step-analytics-table {
  overflow: auto;

  table {
    tbody {
      tr {
        border-bottom: 1px solid #f3f4f6;

        th,
        td {
          width: 200px;
          text-align: left;
        }

        td {
          padding: 15px 0px;
        }

        th {
          padding: 0px 0px;
        }
      }
    }
  }
}

.highlight-txt {
  color: rgba(var(--vs-primary), 1);
  font-weight: 500;
}

.dark-txt {
  color: var(--gray-900, #111827);
  font-weight: 500;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.text-dark {
  color: #3c4858 !important;
}

.text-muted {
  color: #8492a6 !important;
}
</style>
