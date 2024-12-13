<template>
  <vx-card title="Trip Revenue"
           class="h-full w-full vs-con-loading__container"
           id="trip-revenue-card">
    <div class="md:flex md:items-baseline md:justify-between space-x-4">
      <div style="min-width: 12rem;">
        <v-select :options="yearOptions"
                  v-model="selectedYearOption"
                  :clearable="false"
                  class="w-full"/>
      </div>

      <div class="flex items-center mb-3">
      <span class="flex items-center">
        <div class="h-3 w-3 rounded-full mr-1 bg-primary"></div>
        <span>Revenue</span>
      </span>
        <span class="flex items-center ml-4">
        <div class="h-3 w-3 rounded-full mr-1 bg-warning"></div>
        <span>Expense</span>
      </span>
      </div>
    </div>

    <vue-apex-charts type="bar"
                     height="266"
                     :options="chartOptions"
                     :series="tripRevenue"/>
  </vx-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { mapState } from 'vuex'

export default {
  name: 'TripRevenue',

  components: {
    VueApexCharts,
  },

  data () {
    return {
      filters: {
        year: (new Date).getFullYear()
      },

      yearOptions: [],
      selectedYearOption: (new Date).getFullYear(),
      chartOptions: {
        grid: {
          borderColor: '#ebebeb',
          padding: {
            left: 0,
            right: 0
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        chart: {
          stacked: true,
          type: 'bar',
          toolbar: {show: false}
        },
        colors: ['#7367F0', '#FF9F43'],
        plotOptions: {
          bar: {
            columnWidth: '20%'
          }
        },
        xaxis: {
          labels: {
            style: {
              cssClass: 'text-grey fill-current'
            }
          },
          axisTicks: {
            show: false
          },
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisBorder: {
            show: false
          }
        },
        yaxis: {
          tickAmount: 5,
          labels: {
            style: {
              cssClass: 'text-grey fill-current'
            }
          }
        },
        tooltip: {
          x: {show: false}
        }
      }
    }
  },

  created () {
    this.selectedYearOption = (new Date).getFullYear()

    this.yearOptions = [
      this.selectedYearOption - 2,
      this.selectedYearOption - 1,
      this.selectedYearOption
    ]
  },

  mounted () {
    this.getTripRevenue(this.filters)
  },

  watch: {
    selectedYearOption: {
      immediate: false,
      handler (newSelectedYear) {
        console.log('WATCH: ', newSelectedYear)
        this.filters.year = newSelectedYear

        this.getTripRevenue(this.filters)
      }
    }
  },

  computed: {
    ...mapState('dashboard', ['tripRevenue'])
  },

  methods: {
    async getTripRevenue (filter) {
      this.$vs.loading({
        container: '#trip-revenue-card',
        scale: 0.45
      })

      try {
        await this.$store.dispatch('dashboard/getTripRevenue', {
          eventForServer: this.eventForServer ? this.eventForServer : null,
          filter
        })
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.$vs.loading.close('#trip-revenue-card > .con-vs-loading')
      }
    }
  }
}
</script>

<style scoped>

</style>
