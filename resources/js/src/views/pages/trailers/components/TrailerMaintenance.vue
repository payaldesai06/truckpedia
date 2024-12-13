<template>
  <div>
    <div class="mt-4" v-if="isMaintenanceFormVisible">
      <maintenance-form
        :trailerData="trailerDataWithType"
        :issueId="selectedIssueId"
        @closeMaintenanceForm="switchToMaintenanceForm($event)"
      />
    </div>
    <vx-card class="mt-4" v-else>
      <div class="vx-row m-0 flex justify-between items-center w-full">
        <div class="vx-col pl-0">
          <h3 class="title" v-text="'Trailer Maintenances'" />
        </div>
        <div class="vx-col pr-0">
          <vs-button
            color="primary"
            icon="add"
            @click.stop="switchToMaintenanceForm()"
          >
            NEW
          </vs-button>
        </div>
      </div>
      <vs-divider />
      <div class="vx-row">
        <div class="vx-col w-full mt-4">
          <DataTable
            :value="maintenances"
            responsiveLayout="scroll"
            :lazy="true"
            :paginator="true"
            :rows="defaultPageSize"
            :rowHover="true"
            :totalRecords="totalRecords"
            :scrollable="true"
            @sort="onSort($event)"
            @page="onPage($event)"
            :rowsPerPageOptions="[10, 25, 50]"
            :currentPageReportTemplate="`Displaying {first} to {last} of {totalRecords} records`"
          >
            <Column header="Actions">
              <template #body="{ data: { id } }">
                <vs-icon
                  class="cursor-pointer"
                  size="small"
                  icon="edit"
                  @click.stop="editIssue(id)"
                />
                <!-- <vs-icon
                  class="cursor-pointer"
                  size="small"
                  icon="delete"
                  @click.stop="
                    {
                    }
                  "
                /> -->
              </template>
            </Column>
            <Column field="issueNumber" header="Issue Number" />
            <Column field="priority" header="Priority">
              <template #body="{ data: { priority } }">
                <span v-text="getPriorityLabel(priority)" />
              </template>
            </Column>
            <Column field="status" header="Status">
              <template #body="{ data: { status } }">
                <span v-text="maintenanceStatus[status] || ''" />
              </template>
            </Column>
            <Column field="serviceType" header="Service Type" />
            <Column field="serviceLocation" header="Service Location" />
            <Column field="finalCost" header="Final Cost" />
            <Column field="notes" header="Notes" />
            <template #empty><b>No records found</b></template>
            <template #footer v-if="footerText">
              <div class="vx-row flex justify-between items-center">
                <div class="vx-col">{{ footerText }}</div>
                <div class="vx-col">
                  <!-- <vs-pagination :total="totalPage" v-model="currentPage" /> -->
                </div>
              </div>
            </template>
          </DataTable>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
import config from '@/config/constants'

export default {
  name: "TrailerMaintenanceList",
  components: {
    MaintenanceForm: () =>
      import('@/views/pages/maintenance-v2/MaintenanceForm.vue'),
  },
  props: {
    trailerData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      maintenances: [],
      totalPage: 1,
      totalRecords: 0,
      paginationMetaData: null,
      defaultPageSize: 10,
      isMaintenanceFormVisible: false,
      selectedIssueId: null,
      prioritiesList: config.PRIORITIES_LIST,
      maintenanceStatus: config.maintenanceStatus,
    };
  },
  computed: {
    trailerId () {
      return this.$route.params.id || null
    },
    footerText () {
      const { from, to, total } = this.paginationMetaData || {}
      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`
      }
      return '';
    },
    trailerDataWithType() {
      return {
        ...this.trailerData,
        type: 'trailer',
      };
    },
  },
  created() {
    this.init();
  },
  methods: {
    async getMaintenanceIssueList(pageSize = 10, currentPage = 1) {
      try {
        if (!this.trailerId) throw new Error({ message: "Required id missing" });
        this.$vs.loading();
        let { data, meta, links } =await this.$store.dispatch(
          "trailersV2/getMaintenanceIssueList",
          {
            id: this.trailerId,
            pageSize,
            page: currentPage,
          }
        );
        this.maintenances = data || [];
        this.totalPage = (meta || {}).last_page || 1;
        this.totalRecords = (meta || {}).total || 0;
        this.paginationMetaData = meta;
        return data;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async init() {
      try {
        await this.getMaintenanceIssueList();
      } catch (error) {
      }
    },
    onSort(event) {
    },
    onPage({ page, rows }) {
      this.getMaintenanceIssueList(rows, page + 1);
    },
    switchToMaintenanceForm(event) {
      this.isMaintenanceFormVisible = !this.isMaintenanceFormVisible;
      if (event && event.updateList) {
        this.getMaintenanceIssueList();
      }

      if (!this.isMaintenanceFormVisible) {
        this.selectedIssueId = null;
      }
    },
    editIssue(id) {
      this.selectedIssueId = id;
      this.switchToMaintenanceForm();
    },
    getPriorityLabel (priority) {
      const priorityItem = this.prioritiesList.find(
        (item) => item.value === priority
      )

      return priorityItem ? priorityItem.label : ''
    },
  },
};
</script>
