<template>
  <report-layout>
    <vx-card title="Equipment Maintenance Report" class="w-full">
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
                     :rowsPerPageOptions="rowsPerPageOptions">

            <template #header>
              <div class="w-full flex items-center justify-between">
                <div class="w-1/2 flex items-end space-x-2">
                  <div class="w-1/3">
                    <label class="text-sm opacity-75">Select Asset Type</label>
                    <v-select :options="unit_options"
                              label="label"
                              :reduce="(option) => option.value"
                              v-model="selected_unit_option"
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

            <Column field="date" header="Date" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.date }}
              </template>
            </Column>

            <Column field="number" header="Equipment #" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.equipmenet_number }}
              </template>
            </Column>

            <Column field="next_checkup_date" header="Next Checkup Date" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.next_checkup_date }}
              </template>
            </Column>

            <Column field="remark" header="Maintenance Task" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.matinenance_task }}
              </template>
            </Column>

            <Column field="cost" header="Amount" :sortable="true">
              <template #body="slotProps">
                <span>&dollar;</span> {{ slotProps.data.amount }}
              </template>
            </Column>

            <Column field="asset_type" header="Asset Type" :sortable="true">
              <template #body="{data}">
                {{ data.asset_type }}
                <!-- <template v-if="data.asset_type == 'truck'">-->
                <!--   <vs-chip transparent color="primary">{{ data.asset_type }}</vs-chip>-->
                <!-- </template>-->

                <!-- <template v-else>-->
                <!--   <vs-chip transparent color="warning">{{ data.asset_type }}</vs-chip>-->
                <!-- </template>-->
              </template>
            </Column>

            <Column field="title" header="Maintenance Type" :sortable="true">
              <template #body="slotProps">
                {{ slotProps.data.maintenance_type }}
                <!-- <vs-chip color="primary">{{ slotProps.data.maintenance_type }}</vs-chip>-->
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
  name: 'EquipmentMaintenanceReport',

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

      unit_options: [
        {label: 'All', value: 'all'},
        {label: 'Truck', value: 'truck'},
        {label: 'Trailer', value: 'trailer'}
      ],
      selected_unit_option: '',
      selected_date_range: '',

      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range'
      }
    }
  },

  methods: {
    async commonApiCall (filter = {}) {
      if (!this.selected_unit_option) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select asset type.'
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
        chooseUnit: this.selected_unit_option,
        startDate: selectedDates[0],
        endDate: selectedDates[1]
      }

      if (filter.hasOwnProperty('toDownload')) {
        this.$vs.loading({
          container: '#button-export-loading',
          scale: 0.450
        })
      } else {
        this.loading = true
      }

      try {
        const payload = {
          eventForServer: this.eventForServer,
          filter
        }

        const data = await this.$store.dispatch('report/getEquipmentMaintenanceReportDatatable', payload)

        if (filter.hasOwnProperty('toDownload')) {
          window.location = data.download_url
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

    exportCSV () {
      this.commonApiCall({toDownload: 1})
    }
  }
}
</script>

<style scoped>

</style>
