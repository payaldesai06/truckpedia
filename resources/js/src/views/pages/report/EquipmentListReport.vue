<template>
  <report-layout>
    <vx-card title="Equipment List Report" class="w-full">
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

            <Column field="number" header="Number" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.number }}
              </template>
            </Column>

            <Column field="type" header="Type" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.type }}
              </template>
            </Column>

            <Column field="licence_plate" header="Licence Plate" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.licence_plate }}
              </template>
            </Column>

            <Column field="licence_plate_expiry" header="Licence Plate Exp." :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.licence_plate_expiry }}
              </template>
            </Column>

            <Column field="inspection_expiry" header="Inspection Exp." :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.inspection_expiry }}
              </template>
            </Column>

            <Column field="status" header="Status" :sortable="true">
              <template #body="{data}">
                {{ data.status }}
              </template>
            </Column>

            <Column field="ownership" header="Ownership" :sortable="true">
              <template #body="slotProps">
                {{ getFormattedOwnership(slotProps.data.ownership) }}
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
import config from '@/config/constants'


import ReportLayout from './components/ReportLayout'
import DatatableMixin from '@/mixins/datatableMixin'

export default {
  name: 'EquipmentListReport',

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

      selected_date_range: '',

      truck_ownership: config.truck_ownership,
      trailer_ownership: config.trailer_ownership,

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

        const data = await this.$store.dispatch('report/getEquipmentListReportDatatable', payload)

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

    // Format Ownership String
    getFormattedOwnership (ownership) {
      return {
        ...this.truck_ownership,
        ...this.trailer_ownership
      }[ownership]
    }
  }
}
</script>

<style scoped>

</style>
