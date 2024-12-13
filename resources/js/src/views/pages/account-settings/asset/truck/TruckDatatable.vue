<template>
  <div class="vx-row">
    <!-- Sidebar -->
    <truck-sidebar :isSidebarActive="addNewDataSidebar"
                   @closeSidebar="toggleDataSidebar"
                   @truck:added="commonApiCall"
                   @truck:updated="commonApiCall"
                   :data="sidebarData"/>

    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Manage Trucks</h2>

      <vs-button type="filled" color="primary" @click.stop="addNewData">Add New Truck</vs-button>
    </div>

    <div class="vx-col w-full space-x-2 mb-8">
      <vs-button type="filled" color="primary">
        Active<span class="ml-2">({{ active }})</span>
      </vs-button>
      <vs-button type="filled" color="warning">
        Inactive<span class="ml-2">({{ inactive }})</span>
      </vs-button>
    </div>

    <div class="vx-col w-full">
      <DataTable :value="items.data"
                 :lazy="true"
                 :paginator="true"
                 :rows="rows"
                  filterDisplay="row"
                 :rowHover="true"
                 :totalRecords="totalRecords"
                 :filters="filters"
                 :loading="loading"
                 :scrollable="true"
                 @sort="onSort($event)"
                 @page="onPage($event)"
                 :rowsPerPageOptions="[5, 10, 15]">

        <template #empty>
          No records found
        </template>

        <!--        <template #header>-->

        <!--          <div class="flex items-center justify-between">-->
        <!--            <div class="ml-auto">-->
        <!--              <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>-->
        <!--              <InputText v-model="filters['global']"-->
        <!--                         placeholder="Search" size="50"/>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </template>-->

        <Column field="truck_number" header="Truck Number" :sortable="true" :showFilterMenu="false">
          <template #body="slotProps">
            {{ slotProps.data.truck_number }}
          </template>
          <template #filter>
            <InputText type="text"
                       v-model="filters['truck_number']"
                       @input="onInputFilter"
                       class="p-column-filter"/>
          </template>
        </Column>

        <Column field="truck_type" header="Truck Type" :sortable="true" :showFilterMenu="false">
          <template #body="slotProps">
            {{ slotProps.data.truck_type }}
          </template>
          <template #filter>
            <InputText type="text"
                       v-model="filters['truck_type']"
                       @input="onInputFilter"
                       class="p-column-filter"/>
          </template>
        </Column>

        <!--        <Column field="truck_number" header="Truck Number" filterMatchMode="startsWith" :sortable="true"></Column>-->
        <!--        <Column field="truck_type" header="Truck Type" filterMatchMode="startsWith" :sortable="true"></Column>-->

        <Column header="Action">
          <template #body="slotProps">
            <div class="flex items-center space-x-2">
              <vs-button type="filled" color="#00cfe8"
                         @click="editData(slotProps.data)">Edit
              </vs-button>
<!--              <vs-button type="filled" color="danger"-->
<!--                         @click="onConfirmDelete(slotProps.data)">Remove-->
<!--              </vs-button>-->

              <template v-if="slotProps.data.status">
                <template v-if="slotProps.data.status == 'active'">
                  <vs-button type="filled"
                             color="warning"
                             @click="onConfirmInActive(slotProps.data)">Deactivate
                  </vs-button>
                </template>

                <template v-else>
                  <vs-button type="filled"
                             color="success"
                             @click="onConfirmActive(slotProps.data)">Activate
                  </vs-button>
                </template>
              </template>
            </div>
          </template>
        </Column>

        <template #footer>
          In total there are {{ totalRecords }} items.
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import TruckSidebar from './TruckSideabar'
import DatatableMixin from '@/mixins/datatableMixin'
import { mapState } from 'vuex'

export default {
  name: 'TruckDatatable',

  mixins: [DatatableMixin],

  components: {
    TruckSidebar
  },

  data () {
    return {
      active: 0,
      inactive: 0,
      filters: {
        truck_number: '',
        truck_type: ''
      },

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    }
  },

  mounted () {
    this.commonApiCall()
  },

  computed: {
    ...mapState('truck', { items: 'trucks' })
  },

  methods: {
    async commonApiCall (filter = {}) {
      this.loading = true
      await this.$store.dispatch('truck/getTruckDatatable', {
        eventForServer: this.eventForServer,
        filter
      })
      // this.items = this.$store.state.truck.trucks
      // this.totalRecords = this.items.meta.total
      this.active = this.items.meta.active_truck
      this.inactive = this.items.meta.inactive_truck
      this.loading = false
    },

    /**
     * Active Truck
     */
    onConfirmActive (truck) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: 'Confirm',
        text: 'Are you sure. You want to Activate this Truck?',
        acceptText: 'Yes',
        accept: () => this.activateTruck(truck)
      })
    },

    async activateTruck (truck) {
      const payload = {
        id: truck.truck_id,
        payload: {
          status: 'active'
        }
      }

      this.$vs.loading()

      try {
        await this.$store.dispatch('truck/changeStatus', payload)

        this.$vs.notify({
          color: 'primary',
          title: 'Truck Status',
          text: 'Truck status change successfully.'
        })
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.$vs.loading.close()

        await this.commonApiCall()
      }
    },

    /**
     * Inactive Truck
     */
    onConfirmInActive (truck) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm',
        text: 'Are you sure. You want to Deactivate this Truck?',
        acceptText: 'Yes',
        accept: () => this.inActivateTruck(truck)
      })
    },

    async inActivateTruck (truck) {
      const payload = {
        id: truck.truck_id,
        payload: {
          status: 'inactive'
        }
      }

      this.$vs.loading()

      try {
        await this.$store.dispatch('truck/changeStatus', payload)

        this.$vs.notify({
          color: 'primary',
          title: 'Truck Status',
          text: 'Truck status change successfully.'
        })
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.$vs.loading.close()

        await this.commonApiCall()
      }
    },

    /**
     * Sidebar
     */
    addNewData () {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },

    toggleDataSidebar (val = false) {
      this.addNewDataSidebar = val
    },

    editData (data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data
      this.toggleDataSidebar(true)
    }

    // onConfirmDelete (truck) {
    //   this.$vs.dialog({
    //     type: 'confirm',
    //     color: 'danger',
    //     title: 'Confirm',
    //     text: 'Are you sure. You want to delete this Truck?',
    //     acceptText: 'Yes',
    //     accept: () => this.deleteTruck(truck)
    //   })
    // },
    //
    // deleteTruck (truck) {
    //   this.$vs.loading()
    //
    //   this.$store.dispatch('truck/deleteTruck', truck.truck_id)
    //     .then(() => {
    //       this.$vs.notify({
    //         color: 'primary',
    //         title: 'Truck Deleted',
    //         text: 'Truck deleted successfully.'
    //       })
    //     })
    //     .catch(error => {
    //       this.$vs.notify({
    //         color: 'danger',
    //         title: 'Error',
    //         text: error.response.data.message
    //       })
    //     })
    //     .finally(() => (this.$vs.loading.close()))
    // }
  }
}
</script>

<style scoped>

</style>