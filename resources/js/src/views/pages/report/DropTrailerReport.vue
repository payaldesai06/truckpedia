<template>
  <report-layout>
    <vx-card title="Drop Trailer Report" class="w-full">
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
                    <vs-button color="primary" @click="commonApiCall">
                      Generate Report
                    </vs-button>
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

            <Column field="load_unique_id" header="Load #" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.load_unique_id }}
              </template>
            </Column>

            <Column field="trailer_number" header="Trailer #" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.drivers.trailer.trailer_number }}
              </template>
            </Column>

            <Column field="driver_names" header="Driver(s)">
              <template #body="slotProps">
                <div class="flex items-center space-x-2">
                  <vs-chip v-for="driver in slotProps.data.drivers.drivers" :key="driver.driver_id"
                           color="primary">
                    {{ driver.driver_details.name }}
                  </vs-chip>
                </div>
              </template>
            </Column>

            <Column field="delivery_date" header="Delivery Date" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.receiver.delivery_date }}
              </template>
            </Column>

            <Column field="receiver_location" header="Delivery Location" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.receiver.city }} <span>,</span> {{ slotProps.data.receiver.state }}
              </template>
            </Column>

            <Column header="Actions" :sortable="false">
              <template #body="{data}">
                <template v-if="!data.drivers.is_trailer_picked_up">
                  <div class="flex items-center">
                    <vx-tooltip text="Mark Trailer as Picked up">
                      <vs-button color="primary"
                                 type="border"
                                 icon-pack="feather"
                                 icon="icon-check-circle"
                                 size="small"
                                 radius
                                 @click.stop="onConfirmMarkTrailerPickedUp(data)"/>
                    </vx-tooltip>
                  </div>
                </template>
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


import ReportLayout from './components/ReportLayout'
import DatatableMixin from '@/mixins/datatableMixin'

export default {
  name: 'DropTrailerReport',

  mixins: [DatatableMixin],

  components: {
    
    
    ReportLayout
  },

  data () {
    return {
      selected_date_range: '',
      items: {
        data: [],
        links: {},
        meta: {}
      },

      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range'
      }
    }
  },

  methods: {
    async commonApiCall (filter = {}) {
      const selectedDates = this.selected_date_range.split(' to ')

      // if (selectedDates.length < 2) {
      //   this.$vs.notify({
      //     color: 'danger',
      //     title: 'Error',
      //     text: 'Please select report period.'
      //   })

      //   return 0
      // }

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
        const data = await this.$store.dispatch('report/getDropTrailerReportDatatable', {
          eventForServer: this.eventForServer,
          filter
        })

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
    },

    onConfirmMarkTrailerPickedUp (load) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        title: 'Trailer Pickup',
        text: 'Are you sure. You want to mark this trailer as picked up.',
        accept: () => this.markTrailerPickedUp(load)
      })
    },

    async markTrailerPickedUp (load) {
      this.$vs.loading()

      try {
        const payload = {
          id: load.drivers.load_driver_id
        }

        await this.$store.dispatch('load/trailerPickedUp', payload)

        this.$vs.notify({
          color: 'primary',
          title: 'Trailer Picked up',
          text: 'Trailer marked as picked up successfully.'
        })
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          text: error.response.data.message,
          color: 'danger'
        })
      } finally {
        this.$vs.loading.close()

        // refresh datatable
        await this.commonApiCall()
      }
    }
  }
}
</script>

<style scoped>

</style>
