<template>
  <div
    class="rates-estimates-result"
    v-if="updatedPredictions.length && Object.keys(ratePredictions[0]).length"
  >
    <div class="rates-history-chart">
      <div class="mb-5 rate-history-title">Rate History</div>
      <LineChart
        style="height: 250px"
        ref="rateHistoryChart"
        :chartOptions="rateHistoryChart.chartOptions"
        :chartData="rateHistoryChart.chartData"
        :chartPlugins="lineChartPlugins"
      />
    </div>
    <div class="rates-history">
      <div class="last-rates">
        <template v-for="prediction in updatedPredictions">
          <div :class="`last-${prediction.days}days rates-history-card`">
            <p class="history-card-title">Last {{ prediction.days }} days</p>
            <p class="history-value">
              {{ formatAmount(prediction.targetBuyRate * prediction.distance) }}
            </p>
            <div class="history-bound">
              <div>
                <span class="bound-label">LB</span>
                <span class="bound-value">{{
                  formatAmount(prediction.lowBuyRate * prediction.distance)
                }}</span>
              </div>

              <div>
                <span class="bound-label">UB</span>
                <span class="bound-value">{{
                  formatAmount(prediction.highBuyRate * prediction.distance)
                }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="target-rate">
        <div class="rates-history-card target-rate-card">
          <div class="flex justify-between w-full">
            <p class="target-rate-title">Network Rate</p>
            <a href="https://www.greenscreens.ai/" target="_blank">
              <img
                src="../../../../../../assets/images/logo/greenscreensaiLogo.png"
                class="object-contain w-32"
              />
            </a>
          </div>

          <p class="target-rate-value">
            {{
              formatAmount(
                ratePredictions[ratePredictions.length - 1].targetBuyRate *
                  ratePredictions[ratePredictions.length - 1].distance
              )
            }}
          </p>
          <div class="target-rate-level">
            <div class="target-rate-confidence-label">
              <p class="confidence-title">
                Confidence Level
                <feather-icon
                  icon="BarChart2Icon"
                  svgClasses="h-5 w-5"
                  class="chart-icon ml-2"
                />
              </p>
              <p class="confidence-value">{{ confidenceLevel }}</p>
            </div>
            <vs-progress
              class="target-rate-confidence-progress"
              :percent="confidenceLevel"
              color="#167625"
            >
              success
            </vs-progress>
          </div>
          <div>
            <span class="bound-label">Lower Bound</span>
            <span class="bound-value">{{
              formatAmount(
                ratePredictions[ratePredictions.length - 1].lowBuyRate *
                  ratePredictions[ratePredictions.length - 1].distance
              )
            }}</span>
          </div>
          <div>
            <span class="bound-label">Upper Bound</span>
            <span class="bound-value">{{
              formatAmount(
                ratePredictions[ratePredictions.length - 1].highBuyRate *
                  ratePredictions[ratePredictions.length - 1].distance
              )
            }}</span>
          </div>
          <div>
            <span class="bound-label">Fuel</span>
            <span class="bound-value">{{
              formatAmount(
                ratePredictions[ratePredictions.length - 1].fuelRate *
                  ratePredictions[ratePredictions.length - 1].distance
              )
            }}</span>
          </div>
          <div>
            <span class="bound-label">Mileage</span>
            <span class="bound-value"
              >{{
                ratePredictions[ratePredictions.length - 1].distance
              }}
              miles</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatAmount } from '@/helpers/helper';
import LineChart from '@/components/charts/LineChart.vue';
import { cloneDeep, meanBy } from 'lodash';

const lineChartDefaultProps = {
  chartData: {
    datasets: [
      {
        backgroundColor: 'transparent',
        type: 'line',
        borderColor: '#1877F2',
        pointBackgroundColor: '#1877F2',
        pointRadius: '6',
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2.5,
    scales: {
      y: {
        stacked: true,
      },
      yAxes: [
        {
          gridLines: {
            display: true,
            color: '#BDBDBD',
            borderDash: [5, 5],
            drawBorder: true,
          },
        },
      ],
      xAxes: [
        {
          offset: true,
          gridLines: {
            display: true,
            color: '#BDBDBD',
            borderDash: [5, 5],
            drawBorder: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        top: 15,
      },
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
        label: function (tooltipItem, data) {
          return `Network Rate: ${formatAmount(
            data.datasets[0].data[tooltipItem.index]
          )}`;
        },
      },
    },
  },
};

const chartPlugins = {
  datalabels: {
    display: false,
    color: '#000',
    anchor: 'end',
    align: 'end',
    offset: -5,
    font: {
      size: 12,
      family: 'M ontserrat',
    },
  },
};
export default {
  name: 'RateEstimatesResult',
  data() {
    return {
      rateHistoryChart: cloneDeep(lineChartDefaultProps),
      lineChartPlugins: {
        ...cloneDeep(chartPlugins),
      },
    };
  },
  components: {
    LineChart,
  },
  props: {
    ratePredictions: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    updatedPredictions() {
      return this.ratePredictions.length &&
        Object.keys(this.ratePredictions[1]).length
        ? [
            this.getRateObject(this.ratePredictions.slice(-3)),
            this.getRateObject(this.ratePredictions.slice(-7)),
            this.getRateObject(this.ratePredictions.slice(-15)),
            this.getRateObject(this.ratePredictions.slice(-30)),
          ]
        : [];
    },
    confidenceLevel() {
      return this.ratePredictions[this.ratePredictions.length - 1]
        .confidenceLevel < 80
        ? 80
        : this.ratePredictions[this.ratePredictions.length - 1].confidenceLevel;
    },
  },
  methods: {
    formatAmount(amount) {
      return formatAmount(amount);
    },
    generateDateLabels() {
      const labels = [];
      let startDate = this.$dayjs().subtract(1, 'month');

      for (let i = 0; i <= 30; i++) {
        labels.push(`${startDate.format('MM/DD')}`);
        startDate = startDate.add(1, 'day');
      }

      return labels;
    },
    getRateObject(subset) {
      return {
        targetBuyRate: meanBy(subset, 'targetBuyRate'),
        lowBuyRate: meanBy(subset, 'lowBuyRate'),
        highBuyRate: meanBy(subset, 'highBuyRate'),
        days: subset.length,
        distance: subset[0].distance,
      };
    },
  },
  watch: {
    ratePredictions() {
      if (
        this.ratePredictions.length &&
        Object.keys(this.ratePredictions[1]).length
      ) {
        this.rateHistoryChart.chartData.labels = this.generateDateLabels();
        this.rateHistoryChart.chartData.datasets[0].data =
          this.ratePredictions.map(
            (data) => data.targetBuyRate * data.distance
          );
        if (this.$refs.rateHistoryChart) {
          this.$refs.rateHistoryChart.updateChart();
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.rates-estimates-result {
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;

  @media (max-width: 1073px) {
    flex-direction: column;
    .rates-history-chart {
      width: 100%;
      max-width: 100% !important;
    }
    .rates-history {
      width: 100%;
    }
  }

  .rates-history-chart {
    flex: 1;
    max-width: 50%;
    height: 300px;
    background-color: white;
    padding: 7.86px 12.6px;
    .rate-history-title {
      color: var(--Black, #000);
      font-size: 19.755px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .rates-history {
    flex: 1;
    display: flex;
    align-items: stretch;
    gap: 8px;

    .last-rates {
      flex: 3;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
    .target-rate {
      flex: 2;
    }

    .rates-history-card {
      padding: 15px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      border-radius: 3.95px;
      box-shadow: 0px 1.98px 9.88px 0px #0000001a;
      background-color: #ffffff !important;

      .history-card-title {
        font-size: 13.83px;
        line-height: 21.73px;
        align-self: flex-start;
        font-weight: 400;
        color: #71717a;
      }

      .history-bound {
        display: flex;
        gap: 14.82px;
        align-items: center;

        .bound-label {
          font-size: 9.88px;
          font-weight: 400;
          line-height: 21.73px;
          color: #71717a;
        }

        .bound-value {
          font-size: 9.88px;
          font-weight: 600;
          line-height: 21.73px;
          color: #18181a;
        }
      }

      .history-value {
        font-size: 19.75px;
        line-height: 21.73px;
        font-weight: 700;
        color: #18181a;
      }

      &.last-3days {
        border: 1px solid #500079;
      }

      &.last-7days {
        border: 1px solid #6e0093;
      }

      &.last-15days {
        border: 1px solid #b72111;
      }

      &.last-30days {
        border: 0.99px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(
          180deg,
          #1877f2 0%,
          #27b3ed 65%,
          #2fd3eb 100%
        );
      }

      &.target-rate-card {
        align-items: flex-start;
        border: 1px solid #208d28;
        background-color: #f5fff0 !important;
        box-shadow: 0px 7.9px 31.61px 0px #00000014;
        box-shadow: 0px 1.98px 19.75px 0px #0000000a;

        .target-rate-title {
          font-size: 1rem;
          font-weight: 400;
          line-height: 21.73px;
          color: #050505;
        }

        .target-rate-value {
          font-size: 19.75px;
          font-weight: 700;
          line-height: 21.73px;
          color: #050505;
        }

        .target-rate-level {
          width: 100%;
          .target-rate-confidence-label {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .confidence-title {
              display: flex;
              align-items: flex-end;
              font-size: 11.85px;
              line-height: 21.73px;
              color: #141415;

              .chart-icon {
                padding: 5.65px;
                background-color: #e3fad6;
                color: #208d28;
                border-radius: 3.3px;
              }
            }

            .confidence-value {
              font-size: 15.8px;
              font-weight: 600;
              line-height: 21.73px;
              color: #18181a;
            }
          }
        }
      }
      .bound-label {
        font-size: 11.85px;
        line-height: 21.73px;
        color: #71717a;
      }

      .bound-value {
        font-size: 11.85px;
        font-weight: 600 !important;
        line-height: 21.73px;
        color: #18181a;
      }
    }
  }
}
</style>
