<template>
  <div>
    <div class="vx-row">
      <div class="w-full vx-col md:w-1/2">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Incidents By Day of the Week</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="byWeekDay"
            :chartOptions="graphsValue.incidentsByWeekDayChart.chartOptions"
            :chartData="graphsValue.incidentsByWeekDayChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
      <div class="w-full mt-8 vx-col md:w-1/2 md:mt-0">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Type of Incidents</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="byTypeChart"
            :chartOptions="graphsValue.incidentsByTypeChart.chartOptions"
            :chartData="graphsValue.incidentsByTypeChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
    </div>
    <div class="mt-8 vx-row">
      <div class="w-full vx-col md:w-1/2">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Incidents by Involved</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="byInvolvedChart"
            :chartOptions="graphsValue.incidentsByInvolvedChart.chartOptions"
            :chartData="graphsValue.incidentsByInvolvedChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
      <div class="w-full mt-8 vx-col md:w-1/2 md:mt-0">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Incidents By Site Origin</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="byLocationChart"
            :chartOptions="graphsValue.incidentsByLocationChart.chartOptions"
            :chartData="graphsValue.incidentsByLocationChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
    </div>
    <div class="mt-8 vx-row">
      <div class="w-full vx-col md:w-1/2">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Total by Months</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="byMonthChart"
            :chartOptions="graphsValue.incidentsByMonthChart.chartOptions"
            :chartData="graphsValue.incidentsByMonthChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
      <div class="w-full mt-8 vx-col md:w-1/2 md:mt-0">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Incidents By Tag</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="byTagChart"
            :chartOptions="graphsValue.incidentsByTagChart.chartOptions"
            :chartData="graphsValue.incidentsByTagChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/charts/BarChart.vue';

export default {
  name: 'IncidentGraphs',
  components: {
    BarChart,
  },
  props: {
    graphsValue: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.card-heading {
  color: #828282;
}
</style>
