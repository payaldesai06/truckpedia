<script>
import { Bar } from "vue-chartjs";
import datalabels from "chartjs-plugin-datalabels";

export default {
  name: "BarChart",
  extends: Bar,
  components: {
    Bar,
  },
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
    this.renderBarChart();
  },
  beforeDestroy() {
    document.removeEventListener('visibilitychange', this.updateChart);
  },
  data() {
    return {};
  },
  methods: {
    renderBarChart() {
      this.renderChart(this.chartData, {
        ...this.chartOptions,
        plugins: {...this.chartPlugins}
      });
    },
    updateChart() {
      this.$data._chart.destroy();
      this.renderBarChart();
    },
  },
};
</script>

<style lang="scss" scoped></style>
