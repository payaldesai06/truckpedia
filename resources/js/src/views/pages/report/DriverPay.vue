<template>
  <vx-card title="Driver Pay Report" id="maintenance">
    <div class="vx-row">
      <!-- Sidebar -->
<!--      <sidebar-add-maintenance :isSidebarActive="addNewDataSidebar"-->
<!--                        @closeSidebar="toggleDataSidebar"-->
<!--                        :data="sidebarData"/>-->

<!--      <sidebar-edit-driver :isSidebarActive="addNewDataSidebar"-->
<!--                                 @closeSidebar="toggleDataSidebar"-->
<!--                                 :data="sidebarData"/>-->

      <div class="vx-col w-full mb-4">
<!--        <vs-button type="filled" color="primary" @click.stop="addNewData">Add Maintenance</vs-button>-->
<!--        <div class="w-1/4">-->
<!--          <h2 class="text-base opacity-75 mb-2">Pay Range Filter</h2>-->
<!--          <flat-pickr class="w-full" v-model="filters['pay_range']" :config="flat_pikr_config"/>-->
<!--        </div>-->
      </div>

      <div class="mt-base vx-col w-full">
        <DataTable :value="items"
                   :lazy="true"
                   :paginator="true"
                   :rows="10"
                   :rowHover="true"
                   :totalRecords="totalRecords"
                   :filters="filters"
                   :loading="loading"
                   :scrollable="true"
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
          <Column field="driver_name" header="Driver Name" :sortable="true">
            <template #body="slotProps">
              {{ slotProps.data.driver_name }}
            </template>
            <template #filter>
              <InputText type="text" v-model="filters['driver_name']" class="p-column-filter w-full"/>
            </template>
          </Column>

          <Column field="order_id" header="Order #" :sortable="true">
            <template #body="slotProps">
              {{ slotProps.data.order_id }}
            </template>
            <template #filter>
              <InputText type="text" v-model="filters['order_id']" class="p-column-filter w-full"/>
            </template>
          </Column>

          <Column field="total_amount" header="Total Amount" :sortable="true">
            <template #body="slotProps">
              {{ slotProps.data.total_amount }}
            </template>
            <template #filter>
              <InputText type="text" v-model="filters['total_amount']" class="p-column-filter w-full"/>
            </template>
          </Column>



          <Column field="payment_date" header="Payment Date" :sortable="true">
            <template #body="slotProps">
              {{ slotProps.data.payment_date }}
            </template>
            <template #filter>
              <InputText type="text" v-model="filters['payment_date']" class="p-column-filter w-full"/>
            </template>
          </Column>

          <Column field="total_miles" header="Total Miles" :sortable="true">
            <template #body="slotProps">
              {{ slotProps.data.total_miles }}
            </template>
            <template #filter>
              <InputText type="text" v-model="filters['total_miles']" class="p-column-filter w-full"/>
            </template>
          </Column>



<!--          <Column field="status" header="Status" :sortable="true">-->
<!--            <template #body="slotProps">-->
<!--              {{ slotProps.data.status }}-->
<!--            </template>-->
<!--            <template #filter>-->
<!--              <InputText type="text" v-model="filters['status']" class="p-column-filter w-full"/>-->
<!--            </template>-->
<!--          </Column>-->

<!--          <Column header="Action">-->
<!--            <template #body="slotProps">-->
<!--              <div class="flex items-center space-x-2">-->
<!--                <vs-button type="filled" color="#00cfe8" @click="editData(slotProps.data)">Edit</vs-button>-->
<!--              </div>-->
<!--            </template>-->
<!--          </Column>-->

          <template #footer>
            In total there are {{ items ? items.length : 0 }} items.
          </template>
        </DataTable>
      </div>
    </div>
  </vx-card>
</template>

<script>
// import EditDriver from './EditDriver'
// import AddMaintenance from "./AddMaintenance";

export default {
  name: 'RevenueReport',

  components: {
    // 'SidebarAddMaintenance': AddMaintenance
  },

  data () {
    return {
      items: [
        {
          order_id: 1,
          driver_name: 'Daren Schaefer',
          company_name: 'Egon Service LTD.',
          payment_date: '2021-01-09',
          total_amount: '1478',
          total_miles: '365',
          // checkup_type: 'Periodic Checkup',
          // next_checkup_date: '2021-06-18',
          // cost: '$182',
          // remark: 'The Trailer Jumper was repaired and basic service was included',
          // status: 'approved'
        },
        {
          order_id: 2,
          total_amount: '2154',
          company_name: 'Cage LTD.',
          payment_date: '2020-12-29',
          driver_name: 'Lexi Flatley',
          total_miles: '1423',
          // status: 'approved'
        },
        // {
        //   trip_id: 2,
        //   truck_number: '815',
        //   departure_miles: '178000',
        //   arrival_miles: '179000',
        //   total_miles: '1000',
        //   number_of_stops: '3',
        //   miscellaneous: '0',
        //   gross_pay: '$430',
        //   status: 'approved'
        // }
      ],
      totalRecords: 0,
      eventForServer: null,
      loading: false,
      dynamicSortField: 'trip_id',
      dynamicSortOrder: 1,
      filters: {
        global: '',
        pay_range: '',
        trip_id: '',
        truck_number: '',
        departure_miles: '',
        arrival_miles: '',
        total_miles: '',
        number_of_stops: '',
        miscellaneous: '',
        gross_pay: '',
        status: ''
      },

      // Flat Pikr Config
      flat_pikr_config: {
        mode: 'range',
        defaultDate: []
      },

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    }
  },

  methods: {
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

<style>
#maintenance table tr th.p-sortable-column,
#maintenance tbody.p-datatable-tbody td {
  text-align: center !important;
}
</style>
