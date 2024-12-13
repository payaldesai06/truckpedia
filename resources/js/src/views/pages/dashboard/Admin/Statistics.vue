<template>
  <vx-card
    title="Statistics"
    id="statistics-card"
    class="h-full w-full vs-con-loading__container"
  >
    <div class="vx-row mb-8">
      <div class="vx-col">
        <flat-pickr
          v-model="selectedDateRange"
          :config="flat_pikr_config"
          ref="flatPicker"
          class="w-full"
        />
      </div>
    </div>

    <div class="vx-row grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
      <div
        v-for="stats in formattedStats"
        :key="stats.title"
        class="vx-col w-full"
      >
        <statistics-card-line
          :icon="stats.icon"
          :statistic="stats.amount"
          :statisticTitle="stats.title"
          :color="stats.color"
          hideChart
          icon-right
          no-shadow
          class="shadow"
        />
      </div>
    </div>
  </vx-card>
</template>

<script>
import { mapState } from "vuex";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine";
import { formatDate } from "@/helpers/helper";

export default {
  name: "Statistics",

  components: {
    StatisticsCardLine,
    
  },

  data() {
    return {
      filters: {
        startDate: "",
        endDate: ""
      },

      selectedDateRange: "",

      // Flate Pikr Config
      flat_pikr_config: {
        mode: "range",
        dateFormat: "Y-m-d",
        defaultDate: [new Date(), new Date().fp_incr(14)]
      }
    };
  },

  async created() {
    // select default date range
    this.selectedDateRange = `${formatDate(new Date())} to ${formatDate(
      new Date().fp_incr(7)
    )}`;
  },

  computed: {
    ...mapState("dashboard", ["tripStats"]),

    formattedStats() {
      return [
        {
          title: "Loads",
          amount: this.tripStats ? this.tripStats.total_loads : 0,
          icon: "ShoppingBagIcon",
          color: "warning"
        },
        {
          title: "Driver Payments",
          amount: `$ ${
            this.tripStats ? this.tripStats.total_driver_payment : 0
          }`,
          icon: "CreditCardIcon",
          color: "info"
        },
        {
          title: "Revenue",
          amount: `$ ${this.tripStats ? this.tripStats.total_revenue : 0}`,
          icon: "ActivityIcon",
          color: "primary"
        },
        {
          title: "RPM",
          amount: `$ ${
            this.tripStats ? this.tripStats.total_rate_per_mile : 0
          }`,
          icon: "DollarSignIcon",
          color: "success"
        }
      ];
    }
  },

  watch: {
    selectedDateRange: {
      immediate: true,
      handler(newSelectedDateRange) {
        const dates = newSelectedDateRange.split(" to ");

        if (dates.length <= 1) return;

        this.filters.startDate = dates[0];
        this.filters.endDate = dates[1];

        // Get Stats
        this.getTripStats(this.filters);
      }
    }
  },

  methods: {
    async getTripStats(filter) {
      this.$vs.loading({
        container: "#statistics-card",
        scale: 0.45
      });

      try {
        await this.$store.dispatch("dashboard/getTripStats", {
          eventForServer: this.eventForServer ? this.eventForServer : null,
          filter
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      } finally {
        this.$vs.loading.close("#statistics-card > .con-vs-loading");
      }
    }
  }
};
</script>

<style scoped></style>
