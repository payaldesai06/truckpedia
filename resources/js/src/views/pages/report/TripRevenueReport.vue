<template>
  <report-layout>
    <vx-card title="Trip Revenue Report" class="w-full">
      <div class="vx-row">
        <div class="vx-col w-full">
          <DataTable :value="items.data"
                     :lazy="true"
                     :paginator="true"
                     :rows="rows"
                     :rowHover="true"
                     :totalRecords="totalRecords"
                     :filters="filters"
                     :loading="loading"
                     :scrollable="true"
                     @sort="onSort($event)"
                     @page="onPage($event)"
                     ref="datatable"
                     :rowsPerPageOptions="rowsPerPageOptions">

            <template #header>
              <div class="w-full flex items-center justify-between">
                <div class="w-1/2 flex items-end space-x-2">
                  <div class="w-1/3">
                    <label class="text-sm opacity-75">Choose Period</label>
                    <flat-pickr v-model="selected_date_range"
                                :config="flat_pikr_config"
                                class="w-full"/>
                  </div>

                  <div>
                    <vs-button color="primary" @click="commonApiCall">Generate Report</vs-button>
                  </div>
                </div>

                <div class="w-1/2 flex items-center justify-end">
                  <vs-button color="primary"
                             type="border"
                             icon-pack="feather"
                             icon="icon-external-link"
                             id="button-export-loading" class="vs-con-loading__container"
                             @click.stop="exportCSV">Export
                  </vs-button>
                </div>
              </div>
            </template>

            <template #empty>
              No records found
            </template>

            <Column field="id" header="Trip #" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.trip_id }}
              </template>
            </Column>

            <Column field="truck_numbers" header="Trucks #" :sortable="false">
              <template #body="slotProps">
                {{ slotProps.data.truck_numbers }}
              </template>
            </Column>

            <Column field="total_miles" header="Trip Miles" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.total_miles }}
              </template>
            </Column>

            <Column field="total_income" header="Trip Revenue" :sortable="true">
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.total_income }}
              </template>
            </Column>

            <Column field="total_expenses" header="Trip Expense" :sortable="true">
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.total_expenses }}
              </template>
            </Column>

            <Column field="driver_pay" header="Driver Pay" :sortable="true">
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.driver_pay }}
              </template>
            </Column>

            <Column field="rate_per_mile" header="Rate/Mile (RPM)" :sortable="true">
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.rate_per_mile }}
              </template>
            </Column>

            <Column field="cost_per_mile" header="Cost/Mile (CPM)" :sortable="true">
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.cost_per_mile }}
              </template>
            </Column>

            <Column field="profit_per_mile" header="Profit/Mile (PPM)" :sortable="true">
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.profit_per_mile }}
              </template>
            </Column>

            <ColumnGroup type="footer">
              <Row>
                <Column footer="Average:" :colspan="6" footerStyle="text-align:right"/>
                <Column :footer="`$ ${items.extras.total_rate_per_mile_avg}`"/>
                <Column :footer="`$ ${items.extras.total_cost_per_mile_avg}`"/>
                <Column :footer="`$ ${items.extras.total_profit_per_mile_avg}`"/>
              </Row>
            </ColumnGroup>

            <template #footer>
              In total there are {{ totalRecords }} items.
            </template>
          </DataTable>
        </div>
      </div>
    </vx-card>
  </report-layout>
</template>

<script>


import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import ReportLayout from './components/ReportLayout'
import DatatableMixin from '@/mixins/datatableMixin'

export default {
  name: 'TripRevenueReport',

  mixins: [DatatableMixin],

  components: {
    
    
    ColumnGroup,
    Row,
    ReportLayout
  },

  data () {
    return {
      items: {
        data: [],
        extras: {
          total_rate_per_mile_avg: '0.00',
          total_cost_per_mile_avg: '0.00',
          total_profit_per_mile_avg: '0.00'
        },
        links: {},
        meta: {}
      },

      selected_date_range: '',

      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range'
      }
    }
  },

  methods: {
    async commonApiCall (filter = {}) {
      const selectedDates = this.selected_date_range.split(' to ')
      if (selectedDates.length < 2) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select report period.'
        })

        return 0
      }

      filter = {
        ...filter,
        startDate: selectedDates[0],
        endDate: selectedDates[1]
      }

      if (filter.hasOwnProperty('toDownload')) {
        this.$vs.loading({
          container: '#button-export-loading',
          scale: 0.45
        })
      } else {
        this.loading = true
      }

      try {
        const payload = {
          eventForServer: this.eventForServer,
          filter
        }

        const data = await this.$store.dispatch('report/getTripRevenueReportDatatable', payload)

        if (filter.hasOwnProperty('toDownload')) {
          window.location = data.download_url
          return 0
        }

        this.items = data
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        if (filter.hasOwnProperty('toDownload')) {
          this.$vs.loading.close('#button-export-loading > .con-vs-loading')
        } else {
          this.loading = false
        }
      }
    },

    exportCSV () {
      this.commonApiCall({toDownload: 1})
    }
  }
}
</script>

<style lang="scss" scoped>
  .p-datatable-scrollable-footer > {
    .p-datatable-scrollable-footer-box {
      padding-right: 0 !important;
    }
  }
</style>
