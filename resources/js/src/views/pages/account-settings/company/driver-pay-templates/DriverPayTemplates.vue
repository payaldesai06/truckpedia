<template>
  <div class="vx-row">
    <!-- Sidebar -->
    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Driver Pay Templates</h2>

      <vs-button type="filled" color="primary" @click.stop="addNewData"
        >Create Driver Pay Template</vs-button
      >
    </div>

    <div class="vx-col w-full">
      <DataTable
        :value="items"
        :paginator="true"
        :rows="5"
        :rowHover="true"
        :totalRecords="totalRecords"
        :filters="filters"
        filterDisplay="row"
        :loading="loading"
        :scrollable="true"
        :style="{ width: '75vw' }"
        @page="onPage($event)"
        :rowsPerPageOptions="[5,10,15]"
      >
        <template #empty> No records found </template>

        <Column
          field="name"
          header="Name"
          :sortable="false"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.name }}
          </template>
        </Column>

        <Column header="Action">
          <template #body="slotProps">
            <div class="flex items-center space-x-2">
                <vs-button
                  type="filled"
                  color="#00cfe8"
                  @click="editData(slotProps.data)"
                >
                  Edit
                </vs-button>
            </div>
          </template>
        </Column>

        <template #footer>
          In total there are {{ items.length }} items.
        </template>
      </DataTable>
    </div>

    <driver-pay-template-sidebar
     ref="sidebarRefs"
      @closeSidebar="togglePopup"
      :isSidebarActive="isSidebarActive"
      :sidebarData="sidebarData"
      @getTemplates="commonApiCall"
    ></driver-pay-template-sidebar>
  </div>
</template>

<script>
import DatatableMixin from "@/mixins/datatableMixin";
import DriverPayTemplateSidebar from "./components/DriverPayTemplateSidebar.vue";
export default {
  name: "DriverPayTemplates",

  mixins: [DatatableMixin],

  components: {
    DriverPayTemplateSidebar,
  },

  data() {
    return {
      addCustomFieldsPopup: false,
      isSidebarActive: false,
      sidebarData: {},
      eventForServer: null,
      items: [],
      driverPayTemplateSidebar: false,
      filters: {
        name: "",
      },
    };
  },

  mounted() {
    this.commonApiCall();
  },

  methods: {
    onPage (event) {
      this.eventForServer = event
      this.commonApiCall()
    },
    async commonApiCall() {
      this.loading = true;
      await this.$store
        .dispatch("driverPayTemplates/getDriverPayTemplates", {
          eventForServer: this.eventForServer,
        })
        .then((data) => {
          this.items = data.templates;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    // Sidebar
    addNewData() {
      this.togglePopup(true);
    },

    editData(data) {
      this.sidebarData = data;
      this.togglePopup(true);
    },

    togglePopup(val = false) {
      if (!val) {
        this.sidebarData = {};
      }
      this.isSidebarActive = val;
    },
  },
};
</script>

<style lang="scss">
#broker-datatable tr > td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<style> .vs-tooltip { z-index: 99999 !important; } </style>
