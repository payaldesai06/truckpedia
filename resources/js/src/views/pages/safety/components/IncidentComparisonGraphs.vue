<template>
  <div>
    <div class="vx-row">
      <div class="w-full vx-col md:w-1/2">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Incidents By Year</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="byYear"
            :chartOptions="graphsValue.incidentsByYearChart.chartOptions"
            :chartData="graphsValue.incidentsByYearChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
      <div class="w-full mt-8 vx-col md:w-1/2 md:mt-0">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">% Year Comparison</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="yearComparison"
            :chartOptions="graphsValue.incidentsByYearComparisonChart.chartOptions"
            :chartData="graphsValue.incidentsByYearComparisonChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
    </div>
    <div class="mt-8 vx-row">
      <div class="w-full vx-col md:w-100">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Incidents Yearly Comparison</h4>
          </div>
          <vs-divider />
          <LineChart
            ref="yearlyComparison"
            :chartOptions="graphsValue.incidentsYearlyComparisonChart.chartOptions"
            :chartData="graphsValue.incidentsYearlyComparisonChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
    </div>
    <div class="mt-8 vx-row">
      <div class="w-full vx-col md:w-1/2">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Bodily Injury by Year</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="bodilyInjuryByYear"
            :chartOptions="graphsValue.incidentsBodilyInjuryByYearChart.chartOptions"
            :chartData="graphsValue.incidentsBodilyInjuryByYearChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
      <div class="w-full mt-8 vx-col md:w-1/2 md:mt-0">
        <vx-card>
          <div class="flex items-center justify-between">
            <h4 class="card-heading">Collisions by Year</h4>
          </div>
          <vs-divider />
          <BarChart
            ref="collisionsByYear"
            :chartOptions="graphsValue.incidentsCollisionsByYearChart.chartOptions"
            :chartData="graphsValue.incidentsCollisionsByYearChart.chartData"
            :chartPlugins="graphsValue.chartPlugins"
          />
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/charts/BarChart.vue';
import LineChart from '@/components/charts/LineChart.vue';

export default {
  name: 'IncidentComparisonGraphs',
  components: {
    BarChart,
    LineChart,
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

