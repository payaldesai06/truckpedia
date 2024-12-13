<template>
  <div class="dashboard">
    <!-- Header Section -->
    <vx-card class="dashboard-header">
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <h3 class="title">Maintenance</h3>
            <div class="vx-col flex">
              <vs-button
              color="primary"
              type="border"
              icon-pack="feather"
              icon="icon-external-link"
              id="button-export-maintenance"
              class="vs-con-loading__container"
              @click.stop="exportMaintenanceExcel"
            >
              Export
            </vs-button>
              <vs-button
                class="ml-4"
                type="filled"
                icon="add"
                @click.stop="redirectToMaintenanceForm"
              >
                NEW
              </vs-button>
            </div>
          </div>
      </div>
    </vx-card>

    <div>
      <IssueList
        header="Reported Open Issues"
        :tableColumns="openIssueTableColumns"
        :tableValues="reportedIssue"
        @delete="openDeleteConfirmation"
        @edit="redirectToMaintenanceEditForm"
      />
      <IssueList
        header="Scheduled"
        :tableColumns="scheduledIssueTableColumns"
        :tableValues="scheduledIssues"
        @delete="openDeleteConfirmation"
        @edit="redirectToMaintenanceEditForm"
      />
      <IssueList
        header="In Service"
        :tableColumns="inServiceIssueTableColumns"
        :tableValues="serviceIssues"
        @delete="openDeleteConfirmation"
        @edit="redirectToMaintenanceEditForm"
      />
      <IssueList
        header="Completed"
        :tableColumns="completedIssueTableColumns"
        :tableValues="completedIssues"
        @delete="openDeleteConfirmation"
        @edit="redirectToMaintenanceEditForm"
      />
    </div>

    <!-- Pagination Section -->
    <div class="mt-5">
      <vs-pagination
        :total="totalPages"
        v-model="currentx"
        class="flex-row-reverse"
      ></vs-pagination>
    </div>
  </div>
</template>
<!-- eslint-disable nonblock-statement-body-position -->
<script>
// Libraries
import { mapGetters } from "vuex";

// Helpers
import {
  openIssueTableColumns,
  scheduledIssueTableColumns,
  inServiceIssueTableColumns,
  completedIssueTableColumns,
} from "./helpers/maintenanceTableColumns";

export default {
  name: "MaintenanceIssueList",
  components: {
    IssueList: () => import("./components/IssueList.vue"),
  },
  computed: {
    ...mapGetters("maintenanceV2", ["getAllIssueList"]),

    scheduledIssues() {
      return this.getAllIssueList.data.filter(
        (issue) => issue.status === "scheduled"
      );
    },
    serviceIssues() {
      return this.getAllIssueList.data.filter(
        (issue) => issue.status === "in_service"
      );
    },
    completedIssues() {
      return this.getAllIssueList.data.filter(
        (issue) => issue.status === "completed"
      );
    },
    reportedIssue() {
      return this.getAllIssueList.data.filter(
        (issue) => issue.status === "reported"
      );
    },
    totalPages() {
      return parseInt(this.getAllIssueList.meta.last_page) || 0; // Number of items per page
    },
  },
  data() {
    return {
      currentx: 1, // Initial page number
      openIssueTableColumns,
      scheduledIssueTableColumns,
      inServiceIssueTableColumns,
      completedIssueTableColumns,
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    currentx: {
      handler(val) {
        const payload = {
          page: val,
          pageSize: 11,
        };
        this.$store.dispatch("maintenanceV2/fetchIssueList", payload);
      },
    },
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();
        if (!this.getAllIssueList) return;
        const payload = {
          page: 1,
          pageSize: 11,
        };
        await this.$store.dispatch("maintenanceV2/fetchIssueList", payload);

        await this.$store.dispatch("companyUserV2/fetchAllUsers");
        await this.$store.dispatch("vehicleV2/fetchAllVehicles");
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async openDeleteConfirmation(id) {
      await this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Delete Issue",
        text: "Are you sure you want to delete this issue?",
        accept: () => this.deleteSelectedIssue(id),
      });
    },
    async deleteSelectedIssue(id) {
      try {
        await this.$store.dispatch("maintenanceV2/deleteIssue", id);
        await this.$store.dispatch("maintenanceV2/fetchIssueList");
        this.init();
        this.$vs.notify({
          time: 8000,
          title: "Success",
          text: "Deleted successfully",
          color: "success",
        });
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: error.response.data.message || error.message,
        });
      }
    },
    redirectToMaintenanceForm() {
      this.$router.push({ name: "maintenance-add" });
    },
    redirectToMaintenanceEditForm(id) {
      this.$router.push({ name: "maintenance-edit", params: { id } });
    },
    async exportMaintenanceExcel() {
      try {
        const payload = {
            toDownload: 1,
        };
        this.$vs.loading({
          container: "#button-export-maintenance",
          scale: 0.45,
        });
        const data =  await this.$store.dispatch("maintenanceV2/fetchIssueList", payload);
        if(data.data.payload.hasOwnProperty("download_url")){
          window.location = data.data.payload.download_url;
        }
        return;
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        }); 
      } finally {
        this.$vs.loading.close("#button-export-maintenance > .con-vs-loading");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  .vx-card {
    border-radius: 25px;
  }

  &-header {
    .title {
      align-self: center;
    }

    ::v-deep {
      .vs-button--text {
        font-size: 0.9rem;
      }
      .vs-button--icon {
        font-size: 1.7rem;
      }
    }
  }
}
</style>
