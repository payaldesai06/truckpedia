<template>
  <div class="vx-row">
    <!-- Sidebar -->
    <sidebar-add-factory-company :isSidebarActive="addNewDataSidebar"
                                 @closeSidebar="toggleDataSidebar"
                                 :data="sidebarData"/>

    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Factoring Companies</h2>

      <vs-button type="filled" color="primary" @click.stop="addNewData">Add a Factorying Company</vs-button>
    </div>

    <div class="vx-col w-full space-x-2 mb-8">
      <vs-button type="filled" color="primary">Active<span class="ml-2">(2)</span></vs-button>
      <vs-button type="filled" color="warning">Inactive<span class="ml-2">(0)</span></vs-button>
    </div>

    <div class="vx-col w-full" id="factoring-company-datatable">
      <DataTable :value="items"
                 :lazy="true"
                 :paginator="true"
                 :rows="15"
                 :rowHover="true"
                 :totalRecords="totalRecords"
                 :filters="filters"
                 :loading="loading"
                 :scrollable="true"
                 :style="{width: '75vw'}"
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

        <Column field="company_name" header="Company Name" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.company_name }}
          </template>
          <template #filter>
            <InputText type="text" v-model="filters['company_name']" class="p-column-filter"/>
          </template>
        </Column>

        <Column field="main_contact" header="Main Contact" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.main_contact }}
          </template>
          <template #filter>
            <InputText type="text" v-model="filters['main_contact']" class="p-column-filter"/>
          </template>
        </Column>

        <Column field="phone_number" header="Phone Number" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.phone_number }}
          </template>
          <template #filter>
            <InputText type="text" v-model="filters['phone_number']" class="p-column-filter"/>
          </template>
        </Column>

        <Column field="email" header="Email" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.email }}
          </template>
          <template #filter>
            <InputText type="text" v-model="filters['email']" class="p-column-filter"/>
          </template>
        </Column>

        <Column field="bill_contact" header="Bill Contact" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.bill_contact }}
          </template>
          <template #filter>
            <InputText type="text" v-model="filters['bill_contact']" class="p-column-filter"/>
          </template>
        </Column>

        <Column field="bill_email" header="Bill Email" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.bill_email }}
          </template>
          <template #filter>
            <InputText type="text" v-model="filters['bill_email']" class="p-column-filter"/>
          </template>
        </Column>

        <Column field="payment_terms" header="Payment Term" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.payment_terms }}
          </template>
          <template #filter>
            <InputText type="text" v-model="filters['payment_terms']" class="p-column-filter"/>
          </template>
        </Column>

        <!--        <Column field="company_name" header="Company Name" filterMatchMode="startsWith" :sortable="true"></Column>-->
        <!--        <Column field="main_contact" header="Main Contact" filterMatchMode="startsWith" :sortable="true"></Column>-->
        <!--        <Column field="phone_number" header="Phone Number" filterMatchMode="startsWith" :sortable="true"></Column>-->
        <!--        <Column field="email" header="Email" filterMatchMode="startsWith" :sortable="true"></Column>-->
        <!--        <Column field="bill_contact" header="Bill Contact" filterMatchMode="startsWith" :sortable="true"></Column>-->
        <!--        <Column field="bill_email" header="Bill Email" filterMatchMode="startsWith" :sortable="true"></Column>-->
        <!--        <Column field="payment_terms" header="Payment Term" filterMatchMode="startsWith" :sortable="true"></Column>-->

        <template #footer>
          In total there are {{ items ? items.length : 0 }} items.
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import AddFactoryCompany from './AddFactoryCompany'

export default {
  name: 'FactoringCompanyDatatable',

  components: {
    'SidebarAddFactoryCompany': AddFactoryCompany
  },

  data () {
    return {
      items: [
        {
          id: 1,
          company_name: 'Nalan Transportation Group',
          main_contact: 'Alex McCay',
          phone_number: '123-456-7890',
          email: 'alex@gmail.com',
          bill_contact: 'Emly Robert',
          bill_phone_number: '741-852-9630',
          bill_email: 'emly@gmail.com',
          payment_terms: '30 days net'
        },
        {
          id: 2,
          company_name: 'Lorem Transportation Group',
          main_contact: 'ipsum McCay',
          phone_number: '780-456-8450',
          email: 'group@ipsum.com',
          bill_contact: 'lorem Robert',
          bill_phone_number: '741-852-9630',
          bill_email: 'ipsum@lorem.com',
          payment_terms: '30 days net'
        }
      ],
      totalRecords: 0,
      eventForServer: null,
      loading: false,
      dynamicSortField: 'name',
      dynamicSortOrder: 1,
      filters: {
        global: '',
        company_name: '',
        main_contact: '',
        phone_number: '',
        email: '',
        bill_contact: '',
        bill_phone_number: '',
        bill_email: '',
        payment_terms: ''
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
#factoring-company-datatable tr > td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
