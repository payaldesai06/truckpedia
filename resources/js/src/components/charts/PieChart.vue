<script>
import { Pie } from "vue-chartjs";

export default {
  name: "PieChart",
  extends: Pie,
  components: {
    Pie,
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
  },
  mounted() {
    document.addEventListener('visibilitychange', this.updateChart);
    this.renderPieChart();
  },
  beforeDestroy() {
    document.removeEventListener('visibilitychange', this.updateChart);
  },
  data() {
    return {};
  },
  methods: {
    renderPieChart() {
      if (this.chartData.datasets[0].data.length > 0) {
        this.renderChart(this.chartData, this.chartOptions);
      } else {
        this.renderChart(
          {
            labels: ["No data"],
            datasets: [
              {
                data: [1],
                backgroundColor: ["#f2f2f2"],
              },
            ],
          },
          this.chartOptions
        );
      }
    },
    updateChart() {
      this.$data._chart.destroy();
      this.renderPieChart();
    },
  },
};
</script>

<style lang="scss" scoped></style>
