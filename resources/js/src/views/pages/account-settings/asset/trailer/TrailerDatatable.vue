<template>
  <div class="vx-row">
    <!-- Sidebar -->
    <trailer-sidebar :isSidebarActive="addNewDataSidebar"
                     @closeSidebar="toggleDataSidebar"
                     @trailer:added="commonApiCall"
                     @trailer:updated="commonApiCall"
                     :data="sidebarData"/>

    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Manage Trailer</h2>

      <vs-button type="filled" color="primary" @click.stop="addNewData">Add New Trailer</vs-button>
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

        <Column field="trailer_number" header="Trailer Number" :sortable="true" :showFilterMenu="false">
          <template #body="slotProps">
            {{ slotProps.data.trailer_number }}
          </template>
          <template #filter>
            <InputText type="text"
                       v-model="filters['trailer_number']"
                       @input="onInputFilter"
                       class="p-column-filter"/>
          </template>
        </Column>

        <Column field="trailer_type" header="Trailer Type" :sortable="true" :showFilterMenu="false">
          <template #body="slotProps">
            {{ slotProps.data.trailer_type }}
          </template>
          <template #filter>
            <InputText type="text"
                       v-model="filters['trailer_type']"
                       @input="onInputFilter"
                       class="p-column-filter"/>
          </template>
        </Column>


        <!--        <Column field="trailer_number" header="Trailer Number" filterMatchMode="startsWith" :sortable="true"></Column>-->
        <!--        <Column field="trailer_type" header="Trailer Type" filterMatchMode="startsWith" :sortable="true"></Column>-->

        <Column header="Action">
          <template #body="slotProps">
            <div class="flex items-center space-x-2">
              <vs-button type="filled"
                         color="#00cfe8"
                         @click="editData(slotProps.data)">Edit
              </vs-button>
              <!-- <vs-button type="filled" color="danger" @click="onConfirmDelete(slotProps.data)">Remove</vs-button> -->

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
import TrailerSidebar from './TrailerSidebar'
import DatatableMixin from '@/mixins/datatableMixin'
import { mapState } from 'vuex'

export default {
  name: 'TrailerDatatable',

  mixins: [DatatableMixin],

  components: {
    TrailerSidebar
  },

  data () {
    return {
      active: 0,
      inactive: 0,
      filters: {
        trailer_number: '',
        trailer_type: ''
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
    ...mapState('trailer', {items: 'trailers'})
  },

  methods: {
    async commonApiCall (filter = {}) {
      this.loading = true

      await this.$store.dispatch('trailer/getTrailerDatatable', {
        eventForServer: this.eventForServer,
        filter
      })
        .then(data => {
          // this.items = this.$store.state.truck.trucks
          // this.totalRecords = this.items.meta.total
          this.active = data.meta.active_trailer
          this.inactive = data.meta.inactive_trailer
        })
        .catch(error => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message
          })
        })
        .finally(() => (this.loading = false))
    },

    /**
     * Active Trailer
     */
    onConfirmActive (trailer) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: 'Confirm',
        text: 'Are you sure. You want to Activate this Trailer?',
        acceptText: 'Yes',
        accept: () => this.activateTrailer(trailer)
      })
    },

    async activateTrailer (trailer) {
      const payload = {
        id: trailer.trailer_id,
        payload: {
          status: 'active'
        }
      }

      this.$vs.loading()

      try {
        await this.$store.dispatch('trailer/changeStatus', payload)

        this.$vs.notify({
          color: 'primary',
          title: 'Trailer',
          text: 'Trailer status changes successfully.'
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
     * Inactive Trailer
     */
    onConfirmInActive (trailer) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm',
        text: 'Are you sure. You want to Deactivate this Trailer?',
        acceptText: 'Yes',
        accept: () => this.inActivateTrailer(trailer)
      })
    },

    async inActivateTrailer (trailer) {
      const payload = {
        id: trailer.trailer_id,
        payload: {
          status: 'inactive'
        }
      }

      this.$vs.loading()

      try {
        await this.$store.dispatch('trailer/changeStatus', payload)

        this.$vs.notify({
          color: 'primary',
          title: 'Trailer',
          text: 'Trailer status changes successfully.'
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

    // onConfirmDelete (trailer) {
    //   this.$vs.dialog({
    //     type: 'confirm',
    //     color: 'danger',
    //     title: 'Confirm',
    //     text: 'Are you sure. You want to delete this Trailer?',
    //     acceptText: 'Yes',
    //     accept: () => this.deleteTrailer(trailer)
    //   })
    // },
    //
    // deleteTrailer (trailer) {
    //   this.$vs.loading()
    //
    //   this.$store.dispatch('trailer/deleteTrailer', trailer.trailer_id)
    //     .then(() => {
    //       this.$vs.notify({
    //         color: 'primary',
    //         title: 'Trailer Deleted',
    //         text: 'Trailer deleted successfully.'
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
    // },

    // sidebar
    addNewData () {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },

    editData (data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },

    toggleDataSidebar (val = false) {
      this.addNewDataSidebar = val
    }
  }
}
</script>

<style scoped>

</style>