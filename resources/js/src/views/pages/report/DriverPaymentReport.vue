<template>
  <report-layout>
    <vx-card title="Driver Payment Report" class="w-full">
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
                    <label class="text-sm opacity-75">Select Driver</label>
                    <v-select :options="driver_options"
                              label="full_name"
                              :reduce="(option) => option.user_id"
                              v-model="selected_driver_option"
                              class="w-full"/>
                  </div>

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
                  <vs-dropdown>
                    <vs-button class="btn-drop" icon="more_horiz">Export</vs-button>
                    <!-- <a href="#">Hola mundo</a> -->

                    <vs-dropdown-menu>
                      <vs-dropdown-item  @click="exportCSV(true)">
                        Basic
                      </vs-dropdown-item >
                      <vs-dropdown-item divider  @click="exportCSV(false)">
                        Advance
                      </vs-dropdown-item>
                    </vs-dropdown-menu>
                  </vs-dropdown>
<!--                  <vs-button color="primary"-->
<!--                             type="border"-->
<!--                             icon-pack="feather"-->
<!--                             icon="icon-external-link"-->
<!--                             id="button-export-loading" class="vs-con-loading__container"-->
<!--                             @click.stop="exportCSV">Export-->
<!--                  </vs-button>-->
                </div>
              </div>
            </template>

            <template #empty>
              No records found
            </template>

            <Column field="name" header="Driver Name" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.driver_name }}
              </template>
            </Column>

            <Column field="trip_id" header="Trip Number" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.trip_number }}
              </template>
            </Column>

            <Column field="driver_pay_types" header="Driver Pay Type" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.driver_pay_types }}
              </template>
            </Column>

            <Column field="load_payment" header="Amount" :sortable="true">
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.amount }}
              </template>
            </Column>

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


import DatatableMixin from '@/mixins/datatableMixin'
import ReportLayout from './components/ReportLayout'

export default {
  name: 'DriverPaymentReport',

  mixins: [DatatableMixin],

  components: {
    
    
    ReportLayout
  },

  data () {
    return {
      items: {
        data: [],
        links: {},
        meta: {}
      },

      driver_options: [],
      selected_driver_option: '',
      selected_date_range: '',
      driver_pay_types: '',

      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range'
      }
    }
  },

  async created () {
    await this.getAllDrivers()
  },

  methods: {
    async commonApiCall (filter = {}) {
      if (!this.selected_driver_option) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select driver.'
        })

        return 0
      }

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
        driverId: this.selected_driver_option,
        startDate: selectedDates[0],
        endDate: selectedDates[1]
      }

      this.loading = true

      try {
        const payload = {
          eventForServer: this.eventForServer,
          filter
        }

        const data = await this.$store.dispatch('report/getDriverPaymentReportDatatable', payload)

        if (filter.hasOwnProperty('toDownload')) {
          window.location = data.download_url
          this.loading = false
          return 0
        }

        this.items = data
      } catch (error) {
        console.log(error)
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

    async getAllDrivers () {
      this.$vs.loading()

      try {
        const {payload} = await this.$store.dispatch('driver/getAllDrivers')

        this.driver_options = payload.data.map(driver => ({
          ...driver,
          full_name: driver.driver_details.name
        }))
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.$vs.loading.close()
      }
    },

    exportCSV (isBasic) {
      this.commonApiCall({
        toDownload: 1,
        isBasicReport: isBasic
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
