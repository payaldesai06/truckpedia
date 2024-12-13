<template>
  <div class="dashboard trailer-dashboard">
    <!-- Header Section -->
    <vx-card>
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <div class="flex">
            <h3 class="self-center">Trailer</h3>
            <div class="flex ml-4">
              <!-- <vs-button color="primary" type="border" icon="arrow_back_ios" /> -->
              <vs-input
                class="w-full mx-2"
                disabled
                :value="trailerInfoHeaderLabel"
              />
              <!-- <vs-button
                color="primary"
                type="border"
                icon="arrow_forward_ios"
              /> -->
            </div>
          </div>
          <!-- <vs-input
            class="w-1/4"
            icon="search"
            icon-after="true"
            placeholder="Search for anything"
          /> -->
        </div>
      </div>
      <vs-divider />
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <div class="flex">
            <vs-chip
              class="cursor-pointer mx-2"
              v-for="{ id, label, isActive } in chips"
              :key="id"
              :color="selectedTab === id ? 'primary' : ''"
              @click.native="changeTab(id)"
            >
              {{ label }}
            </vs-chip>
          </div>
          <span>
            <vs-button
              color="primary"
              icon="format_list_bulleted"
              @click.prevent="$router.push('/trailers')"
            >
              Trailers
            </vs-button>
          </span>
        </div>
      </div>
    </vx-card>
    <div>
      <!-- Trailer Summary Card -->
      <TrailerSummaryCard
        :header="trailerInfoHeaderLabel"
        :isEdit="isUpdateMode"
        :enableSubmit="showSubmitButton"
        @submit="submitForm"
      />
      <section v-for="tab in chips" :key="tab.id">
        <component
          v-show="selectedTab === tab.id"
          :key="tab.id"
          :is="tab.component"
          :trailerData="trailerData"
          :driversList="driversList"
          ref="tabComponents"
          @cancel="redirectToTrailersList"
          @submit="submitForm"
        />
      </section>
    </div>
  </div>
</template>

<script>
// Components
import TrailerSummaryCard from "./components/TrailerSummaryCard.vue";
import TrailerOverview from "./components/TrailerOverview";
import FilesTab from "./components/FilesTab";
import TrailerLogs from "./components/LogsTab";
import TrailerMaintenance from './components/TrailerMaintenance'
import { mapGetters } from "vuex";

export default {
  name: "TrailerDashboard",
  components: {
    TrailerSummaryCard,
    TrailerOverview,
    FilesTab,
    TrailerLogs,
    TrailerMaintenance
  },
  props: ['trailerDetails'],
  computed: {
    ...mapGetters('auth', ['companyFeatureAccess']),
    ...mapGetters("tag", ["allTags"]),
    trailerId() {
      return this.$route.params.id || null;
    },
    trailerInfoHeaderLabel() {
      if (this.isUpdateMode) {
        const { trailerNumber, year, make, vin } = this.trailerData || {};
        return `#${trailerNumber || ""} ${year || ""} ${make || ""} ${
          vin || ""
        }`;
      }
      return "Create a trailer";
    },
    isUpdateMode() {
      return this.$route.name === "UpdateTrailer";
    },
    showSubmitButton() {
      if (this.isUpdateMode) {
        return this.selectedTab === 1; // 1 : OverviewTab,
      }
      return this.selectedTab === 1 || this.selectedTab === 2; // 1 : OverviewTab, 2 : Files Tab
      // Info : Improve the property as need for later cases
    },
    chips() {
      const overViewTab = {
        id: 1,
        label: "Overview",
        component: "TrailerOverview",
      };
      const filesTab = {
        id: 2,
        label: "Files",
        component: "FilesTab",
      };
      const maintenanceTab = {
        id: 3,
        label: 'Maintenance',
        component: 'TrailerMaintenance'
      };
      const logsTab = {
        id: 4,
        label: 'Logs',
        component: 'TrailerLogs'
      }
      let chipsToRender = [overViewTab, filesTab];
      if (this.isUpdateMode) {
        chipsToRender.push(maintenanceTab);
        chipsToRender.push(logsTab);
      }
      if (this.companyFeatureAccess.includes('basic')) {
        chipsToRender = [overViewTab]
      }
      return chipsToRender;
    },
    tabIndex() {
      return this.chips.reduce((result, currentValue, currentIndex) => {
        result[currentValue.label] = currentIndex;
        return result;
      }, {});
    },
  },
  async created() {
    try {
      this.$vs.loading();
      if (this.trailerDetails) {
        this.trailerData = { ...this.trailerDetails };
      }
      const { id } = (this.chips || [])[0] || {};
      this.changeTab(id || null);
      await this.getAllTags();
      if (this.isUpdateMode) {
        try {
          await this.getTrailerDetails();
        } catch (e) {
          this.redirectToTrailersList();
        }
      }
    } catch (e) {
      this.redirectToTrailersList();
    } finally {
      this.$vs.loading.close();
    }
    await this.getAllDrivers();
  },
  data() {
    return {
      selectedTab: null,
      // chipsList: [
      // {
      //   id: 1,
      //   label: 'Overview',
      //   component: 'TrailerOverview'
      // },
      // {
      //   id: 2,
      //   label: 'Files',
      //   component: 'FilesTab'
      // },
      // {
      //   id: 3,
      //   label: 'Tolls',
      //   component: ''
      // },
      // {
      //   id: 4,
      //   label: 'Fuel',
      //   component: ''
      // },
      // {
      //   id: 5,
      //   label: 'Maintenance',
      //   component: 'TrailerMaintenance'
      // },
      // {
      //   id: 6,
      //   label: 'Logs',
      //   component: 'TrailerLogs'
      // },
      // {
      //   id: 7,
      //   label: 'Accidents',
      //   component: ''
      // }
      // ],
      trailerData: null,
      driversList: [],
      dragStartFile: null,
    };
  },
  methods: {
    changeTab(id) {
      if (!id) return;
      this.selectedTab = id;
    },
    async getTrailerDetails() {
      try {
        if (!this.trailerId)
          throw new Error({ message: "Required id missing" });
        let data = await this.$store.dispatch(
          "trailersV2/fetchTrailerInfo",
          this.trailerId
        );
        const { tags: tagsData, interestRate } = data || {}
        const selectedTags = [];
        (tagsData || []).forEach((tag) => {
          const tagInfo = this.allTags.find(x => x.tag_id === tag.id);
          if (tagInfo) {
            selectedTags.push(tagInfo);
          }
        });
        this.trailerData = {
          ...data,
          tags: selectedTags,
          interestRate: interestRate || interestRate === 0 ? parseFloat(interestRate * 100).toFixed(4) : interestRate
        };
        return data;
      } catch (e) {
        throw e;
      }
    },
    async submitForm() {
      const validationState = await this.validateForms();
      const overviewTabIndex = this.tabIndex["Overview"];
      const { trailerPayload } = (this.$refs || {}).tabComponents[overviewTabIndex] || {};
      if (!validationState || !trailerPayload) return;
      if (this.trailerId) {
        // Update flow
        this.updateTrailer({
          ...trailerPayload,
          id: this.trailerId,
        });
      } else {
        // Create flow
        const filesTabIndex = this.tabIndex["Files"];
        const { filesPayload } = (this.$refs || {}).tabComponents[filesTabIndex] || {};
        if (filesPayload && filesPayload.length) {
          trailerPayload.files = filesPayload;
        }
        this.createTrailer(trailerPayload);
      }

      // Reset cache
      this.$store.commit('vehicleV2/setAllVehicles', []);
    },
    async validateForms() {
      const overviewTabIndex = this.tabIndex["Overview"];
      const { validate } = (this.$refs || {}).tabComponents[overviewTabIndex] || {};
      let validationState = true;
      if (validate) {
        validationState = await this.$refs.tabComponents[overviewTabIndex].validate();
      }
      if (!validationState) {
        let text = "Correct all field errors";
        if(this.selectedTab !== 1) text += " in overview form";
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text,
        });
      }
      return validationState;
    },
    async createTrailer(trailerPayload) {
      try {
        await this.$store.dispatch("trailersV2/createTrailer", trailerPayload);
        this.$vs.notify({
          color: "success",
          title: "Success",
          text: "New trailer added",
        });
        this.redirectToTrailersList();
      } catch (e) {
        const { message } = ((e || {}).response || {}).data || {};
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: message || "Trailer creation failed",
        });
      }
    },
    async updateTrailer(trailerPayload) {
      try {
        await this.$store.dispatch("trailersV2/updateTrailer", trailerPayload);
        this.$vs.notify({
          color: "success",
          title: "Updated",
          text: "Trailer data updated",
        });
        this.redirectToTrailersList();
      } catch (e) {
        const { message } = ((e || {}).response || {}).data || {};
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: message || "Trailer update failed",
        });
      }
    },
    redirectToTrailersList() {
      this.$router.push("/trailers");
    },
    async getAllTags() {
      return await this.$store.dispatch("tag/getAllTags");
    },
    async getAllDrivers() {
      try {
        const data = await this.$store.dispatch("driverV2/getAllDrivers") || {};
        this.driversList = data;
        return data;
      } catch (e) {
        throw e;
      }
    }
  },
};
</script>

<style lang="scss">
.trailer-dashboard {
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /*!* Firefox *!*/
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    opacity: 1;
  }
}
</style>
