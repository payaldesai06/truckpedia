<script>
import { Line } from "vue-chartjs";
import datalabels from "chartjs-plugin-datalabels";

export default {
  name: "LineChart",
  extends: Line,
  props: {
    chartOptions: {
      type: Array | Object,
      default: () => {},
    },
    chartData: {
      type: Array | Object,
      default: () => {},
    },
    chartPlugins: {
      type: Array | Object,
      default: () => {},
    }
  },
  mounted() {
    document.addEventListener('visibilitychange', this.updateChart);
    this.addPlugin(datalabels);
    this.renderLineChart();
  },
  beforeDestroy() {
    document.removeEventListener('visibilitychange', this.updateChart);
  },
  data() {
    return {};
  },
  methods: {
    renderLineChart() {
      this.renderChart(this.chartData, {
        ...this.chartOptions,
        plugins: {...this.chartPlugins}
      });
    },
    updateChart() {
      this.$data._chart.destroy();
      this.renderLineChart();
    },
  },
};
</script>

<style lang="scss" scoped></style>
