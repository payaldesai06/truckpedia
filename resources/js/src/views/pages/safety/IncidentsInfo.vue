<template>
  <div class="dashboard incident-dashboard">
    <!-- Header Section -->
    <vx-card>
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <div class="flex">
            <h3 class="self-center">Incidents</h3>
          </div>
        </div>
      </div>
      <vs-divider />
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <div class="flex">
            <vs-chip
              class="cursor-pointer mx-2"
              v-for="{ id, label } in chips"
              :key="id"
              :color="selectedTab === id ? 'primary' : ''"
              @click.native="changeTab(id)"
            >
              {{ label }}
            </vs-chip>
          </div>
          <span class="flex align-items-center gap-3">
            <vs-button
              color="primary"
              icon="format_list_bulleted"
              @click.prevent="redirectToIncidentList"
            >
              Incidents
            </vs-button>
            <vs-button
              v-if="selectedTab === 2 && isEditMode"
              type="border"
              color="primary"
              @click.prevent="shareClick"
            >
              Share
            </vs-button>
          </span>
        </div>
      </div>
    </vx-card>
    <div>
      <div v-show="selectedTab === 1">
        <!-- Truck Summary Card -->
        <incident-summary-card
          :header="incidentInfoHeaderLabel"
          :incidentDetails="incidentDetails"
          :enableSubmit="true"
          :isEdit="isEditMode"
          @submit="submitForm"
        />
      </div>
      <section v-for="tab in chips" :key="tab.id">
        <component
          v-show="selectedTab === tab.id"
          :ref="tab.label"
          :key="tab.id"
          :is="tab.component"
          :isEdit="isEditMode"
          v-model="incidentDetails"
          @saveIncident="submitForm"
          @cancel="redirectToIncidentList"
          @delete="onConfirmDelete"
        />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IncidentsInfo',
  components: {
    IncidentOverviewTab: () => import('./components/IncidentOverviewTab'),
    IncidentSummaryCard: () => import('./components/IncidentSummaryCard'),
    IncidentEmailsTab: () => import('./components/IncidentEmailsTab'),
    IncidentFilesTab: () => import('./components/IncidentFilesTab'),
    IncidentNoteTab: () => import('./components/IncidentNoteTab'),
  },
  computed: {
    chips() {
      const tabs = [
        {
          id: 1,
          label: 'Overview',
          component: 'IncidentOverviewTab',
        },
        {
          id: 2,
          label: 'Emails',
          component: 'IncidentEmailsTab',
        },
        {
          id: 3,
          label: 'Files',
          component: 'IncidentFilesTab',
        },
        {
          id: 4,
          label: 'Notes',
          component: 'IncidentNoteTab',
        },
      ];

      return tabs.filter((tab) => {
        if (!this.isEditMode) {
          return tab.id !== 2;
        }
        return tab;
      });
    },
    incidentInfoHeaderLabel() {
      return this.isEditMode ? 'Update Incident' : 'Create Incident';
    },
    isEditMode() {
      return this.$route.name === 'UpdateSafety';
    },
  },
  data() {
    return {
      selectedTab: 1,
      incidentDetails: {
        tagId: null,
        incidentDate: null,
        incidentTime: null,
        status: null,
        closedDate: null,
        notes: null,
        incidentClaimNumber: null,
        thirdPartyIncidentClaimNumber: null,
        ncicNumber: null,
        savedAddressAffected: null,
        chargeBack: null,
        chargeBackAmount: null,
        estimates: null,
        costIncurred: null,
        costAmount: null,
        dealWithInsuranceCompanyId: null,
        involvedType: null,
        involvedPersonType: null,
        involvedPersonName: null,
        involvedThirdPartyId: null,
        correctiveActionApplied: null,
        dotRecordable: null,
        preventable: null,
        atFault: null,
        truckId: null,
        trailerId: null,
        locationType: null,
        savedAddressId: null,
        incidentType: null,
        description: null,
        files: [],
        notesArray: [],
      },
      truckData: null,
      driversList: [],
      selectedTruckTypes: [],
    };
  },
  created() {
    if (this.isEditMode) {
      this.getIncidentDetails();
    }
  },
  methods: {
    shareClick() {
      const payload = {
        incidentId: this.incidentDetails.incidentId,
        type: 'publicFiles',
      };
      this.$store.dispatch('incidents/shareLink', payload).then(({ data }) => {
        let url = data.payload.link;
        let that = this;
        this.$copyText(url).then(
          function (e) {
            that.$vs.notify({
              title: 'Success',
              text: 'Copied',
              color: 'success',
            });
          },
          function (e) {
            that.$vs.notify({
              title: 'Danger',
              text: 'Can not copy',
              color: 'danger',
            });
          }
        );
      });
    },
    changeTab(id) {
      if (!id) return;
      this.selectedTab = id;
    },
    redirectToIncidentList() {
      let query = {};
      if (this.$route.query && this.$route.query.tab) {
        query = { tab: this.$route.query.tab };
      }

      this.$router.push({ name: 'Safety', query });
    },

    onConfirmDelete() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Accept',
        title: 'Delete Incident',
        text: 'Are you sure you want to delete this incident?',
        accept: () => this.deleteIncident(),
      });
    },

    async deleteIncident() {
      try {
        const incidentId = this.$route.params.id;
        const { data } = await this.$store.dispatch(
          'incidents/deleteIncident',
          incidentId
        );
        if (data && data.message === 'Ok') {
          this.$vs.notify({
            color: 'success',
            title: 'Delete Incident',
            text: 'Incident deleted successfully',
          });
          this.redirectToIncidentList();
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: error.response.data.message || error.message,
        });
      }
    },

    async getIncidentDetails() {
      try {
        this.$vs.loading();
        const incidentId = this.$route.params.id;
        const { data } = await this.$store.dispatch(
          'incidents/getIncidentDetails',
          incidentId
        );

        if (data && data.payload) {
          this.incidentDetails = {
            ...this.incidentDetails,
            ...(data.payload.incident || {}),
          };
        }

        // Add watch on child component: Overview
        if (this.$refs && this.$refs.Overview && this.$refs.Overview[0]) {
          this.$refs.Overview[0].addWatchOnIncidentDate();
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async submitForm() {
      try {
        delete this.incidentDetails.emails;

        if (this.isEditMode) {
          delete this.incidentDetails.files;
          delete this.incidentDetails.notesArray;

          await this.$store.dispatch(
            'incidents/updateIncident',
            this.incidentDetails
          );

          this.$vs.notify({
            time: 8000,
            color: 'success',
            title: 'Success',
            text: 'Incident updated successfully',
          });
        } else {
          if (
            this.incidentDetails.files &&
            this.incidentDetails.files.length > 0
          ) {
            this.incidentDetails.files = this.incidentDetails.files.map(
              (file) => {
                if (file.isPrivate !== 'private') {
                  file.isPrivate = null;
                }
                // Remove file object from the payload
                delete file.file;

                return file;
              }
            );
          }

          if (
            this.incidentDetails.notesArray &&
            this.incidentDetails.notesArray.length > 0
          ) {
            this.incidentDetails.notesArray =
              this.incidentDetails.notesArray.map((note) => {
                return {
                  localDate: note.localDate,
                  localTime: note.localTime,
                  note: note.note,
                };
              });
          }

          await this.$store.dispatch(
            'incidents/createIncident',
            this.incidentDetails
          );

          this.$vs.notify({
            time: 8000,
            color: 'success',
            title: 'Success',
            text: 'Incident created successfully',
          });
        }
        this.redirectToIncidentList();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.incident-dashboard {
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /*!* Firefox *!*/
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
  }
}
</style>
