<template>
  <div>
    <div class="flex mt-12">
      <div
        :class="[{ 'w-full': shareAuthId, 'lg:w-2/5 w-full': !shareAuthId }]"
      >
        <div class="sm:flex justify-between items-center">
          <div class="flex items-center">
            <div class="input-box">
              <label class="input-label">Date range</label>
              <div>
                <flat-pickr
                  v-model="selectedDateRange"
                  :config="flat_pikr_config"
                  @on-change="handleChangeDate"
                  ref="flat-pickr"
                  placeholder="Select Date Range"
                  class="w-full"
                />
              </div>
            </div>
            <vs-button
              v-if="!shareAuthId"
              color="primary"
              @click="openSearchPopup"
              class="mx-2 mt-5"
              type="border"
              icon="search"
            ></vs-button>
          </div>

          <div class="pt-4 flex justify-end items-center">
            <button
              type="button"
              class="icon-btn cursor-pointer"
              @click="refreshList"
            >
              <refresh-ccw-icon size="1.5x"></refresh-ccw-icon>
            </button>
          </div>
        </div>

        <div
          :class="{
            'load-details-card-shared': shareAuthId,
            'load-details-card': !shareAuthId,
          }"
        >
          <TruckCard
            :data="items"
            v-for="items in schedule"
            @performLoadSearch="performLoadSearch"
            :key="items.truck_id + 'id' + Date.now()"
          />
        </div>

        <vs-popup title="" :active.sync="searchPopup">
          <search-popup @performLoadSearch="performLoadSearch"></search-popup>
        </vs-popup>
      </div>

      <template v-if="!shareAuthId">
        <div class="w-2/3 hidden lg:block" v-if="windowWidth > 991">
          <LoadCard
            :multiTabSearchResults="multiTabSearchResults"
            @closeOneTab="closeOneTab"
            @openSearchPopup="openSearchPopup"
          />
        </div>
      </template>
    </div>

    <transition
      name="slide-fade"
      v-if="windowWidth <= 991 && multiTabSearchResults.length > 0"
    >
      <div class="load-details-mobile" v-if="!shareAuthId">
        <LoadCard
          :multiTabSearchResults="multiTabSearchResults"
          @closeOneTab="closeOneTab"
          @openSearchPopup="openSearchPopup"
        />
        <!-- @openSearchPopup="openSearchPopup"??? -->
      </div>
    </transition>
  </div>
</template>

<script>
import { ChevronLeftIcon } from "vue-feather-icons";
import { ChevronRightIcon } from "vue-feather-icons";
import { RefreshCcwIcon } from "vue-feather-icons";
import { formatDate } from "@/helpers/helper";
import LoadCard from "./LoadCard.vue";
import SearchPopup from "./SearchPopup.vue";
import TruckCard from "./TruckCard.vue";

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    RefreshCcwIcon,
    LoadCard,
    SearchPopup,
    TruckCard,
    
  },

  data() {
    return {
      autoRefreshInSeconds: 300000,
      windowWidth: window.innerWidth,
      multiTabSearchResults: [],
      tabTimers: new Map(),
      // Flat Pikr Config
      selectedDateRange: "",
      skip_days: 6,
      shareAuthId: "",
      searchPopup: false,
      flat_pikr_config: {
        mode: "range",
        minDate: "",
        maxDate: "",
        defaultDate: [
          new Date(),
          new Date().setDate(new Date().getDate() + this.skip_days),
        ],
      },
      schedule: [],
    };
  },

  created() {
    const today = new Date().toISOString().split("T", 1)[0];
    const after7Days = new Date(
      new Date(today).setDate(new Date(today).getDate() + this.skip_days)
    )
      .toISOString()
      .split("T", 1)[0];
    this.selectedDateRange = `${today} to ${after7Days}`;
    if (this.$route.name === "share-loads-matching") {
      this.shareAuthId = this.$route.params.id;
      this.getShareAllSchedule();
    } else {
      this.getAllSchedule();
    }
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },

  watch: {},

  methods: {
    openSearchPopup() {
      this.searchPopup = true;
    },

    closeOneTab(searchId) {
      const index = this.multiTabSearchResults.findIndex(
        (e) => e.searchId == searchId
      );
      if (index >= 0) {
        clearInterval(this.tabTimers.get(searchId));
        this.tabTimers.delete(searchId);
        this.multiTabSearchResults.splice(index, 1);
      }
    },

    // From SearchPopup.vue/TruckCard.vue.
    performLoadSearch(searchPayload, searchId) {
      this.searchPopup = false;

      if (!this.multiTabSearchResults.some((tab) => tab.searchId == searchId)) {
        this.multiTabSearchResults.push({
          searchId: searchId,
          searchPayload: searchPayload,
          searchResult: [],
          tabOrigin: this.computeOriginDest(searchPayload.origin),
          tabDestination: this.computeOriginDest(searchPayload.destination),
        });
      } else {
        console.error("some() check failed.");
      }

      this.performLoadSearchHelper(searchPayload, searchId);
      this.tabTimers.set(
        searchId,
        setInterval(() => {
          this.performLoadSearchHelper(searchPayload, searchId, true);
        }, this.autoRefreshInSeconds) // 5 min
      );
    },

    performLoadSearchHelper(searchPayload, searchId, isRefresh = false) {
      if (localStorage.getItem("datConnectionStatus") == "Connected") {
        if (searchPayload.ezpapelEquipmentType == "Load-Out") {
          // No warning when search refreshes.
          if (!isRefresh) {
            this.$vs.notify({
              title: "Warning",
              text: "Load-Out is not supported by DAT.",
              color: "warning",
            });
          }
        } else {
          this.callLoadBoardApi("DAT", searchPayload, searchId, isRefresh);
        }
      }

      if (localStorage.getItem("truckstopConnectionStatus") == "Connected") {
        this.callLoadBoardApi("Truckstop", searchPayload, searchId, isRefresh);
      }

      if (
        searchPayload.ezpapelEquipmentType == "Load-Out" ||
        searchPayload.ezpapelEquipmentType == "Cargo Van"
      ) {
        if (!isRefresh) {
          this.$vs.notify({
            title: "Warning",
            text:
              searchPayload.ezpapelEquipmentType +
              " is not supported by C.H. Robinson.",
            color: "warning",
          });
        }
      } else {
        this.callLoadBoardApi(
          "C.H. Robinson",
          searchPayload,
          searchId,
          isRefresh
        );
      }

      if (
        searchPayload.ezpapelEquipmentType == "Load-Out" ||
        searchPayload.ezpapelEquipmentType == "Step Deck" ||
        searchPayload.ezpapelEquipmentType == "Tanker" ||
        (searchPayload.manualSearchTypes &&
          searchPayload.manualSearchTypes.length > 1) ||
        !searchPayload.origin.city ||
        !searchPayload.destination.city
      ) {
      } else {
        this.callLoadBoardApi("J.B. Hunt", searchPayload, searchId, isRefresh);
      }
    },

    computeOriginDest(originDest) {
      if (Object.hasOwn(originDest, "states")) {
        return originDest.states.toString();
      } else {
        return originDest.city + ", " + originDest.state;
      }
    },

    notifyNewLoads(loadBoard, searchPayload, newLoadsCount) {
      this.$vs.notify({
        time: 8000,
        title: "New " + loadBoard + " loads found",
        text:
          newLoadsCount +
          " new " +
          loadBoard +
          " loads for " +
          this.computeOriginDest(searchPayload.origin) +
          " to " +
          this.computeOriginDest(searchPayload.destination) +
          " route.",
        color: "primary",
        position: "top-right",
      });
    },

    notifyNoLoad(loadBoard, searchPayload) {
      this.$vs.notify({
        time: 5000,
        title: "No load",
        text:
          "No load found on " +
          loadBoard +
          " for " +
          this.computeOriginDest(searchPayload.origin) +
          " to " +
          this.computeOriginDest(searchPayload.destination) +
          " route.",
        color: "warning",
        position: "top-right",
      });
    },

    callLoadBoardApi(loadBoard, searchPayload, searchId, isRefresh) {
      let apiPrefix = "dat";
      if (loadBoard == "Truckstop") {
        apiPrefix = "truckstop";
      } else if (loadBoard == "C.H. Robinson") {
        apiPrefix = "chrobinson";
      } else if (loadBoard == "J.B. Hunt") {
        apiPrefix = "loadboard-crawler";
        // shallow copy is enough
        let searchPayloadCopy = Object.assign({}, searchPayload);
        searchPayloadCopy.whichLoadboardCralwer = "jbhunt";
        searchPayload = searchPayloadCopy;
      }

      this.$store
        .dispatch(apiPrefix + "/searchLoads", searchPayload)
        .then((data) => {
          // be careful about refresh search.
          const found = this.multiTabSearchResults.find(
            (e) => e.searchId == searchId
          );
          if (found) {
            if (
              // apiPrefix != "loadboard-crawler" &&
              !isRefresh &&
              data.payload.length == 0
            ) {
              this.notifyNoLoad(loadBoard, searchPayload);
            }

            const oldLoadIds = new Set(
              found.searchResult
                .filter((load) => load.loadBoard == loadBoard)
                .map((load) => load.id)
            );
            let newLoadsCount = 0;
            data.payload.forEach((load) => {
              if (!oldLoadIds.has(load.id)) {
                newLoadsCount++;
                if (loadBoard == "J.B. Hunt") {
                  let fakeCreatedWhen = new Date();
                  if (isRefresh) {
                    fakeCreatedWhen.setUTCSeconds(
                      fakeCreatedWhen.getUTCSeconds() -
                        this.autoRefreshInSeconds +
                        30
                    );
                  } else {
                    fakeCreatedWhen.setUTCHours(
                      fakeCreatedWhen.getUTCHours() - 2
                    );
                    load.hideCreatedWhen = true;
                  }
                  load.createdWhen = fakeCreatedWhen.toISOString();
                }
              }
            });

            const newSearchResultArray = found.searchResult.filter(
              (load) => load.loadBoard != loadBoard
            );
            newSearchResultArray.push(...data.payload);
            newSearchResultArray.sort((a, b) =>
              a.createdWhen < b.createdWhen ? 1 : -1
            );
            // 1 means be will be ranked before a.;
            found.searchResult = newSearchResultArray;

            if (newLoadsCount > 0) {
              this.notifyNewLoads(loadBoard, searchPayload, newLoadsCount);
            }
          } else {
            console.error("searchId not found");
          }
        })
        .catch((error) => {
          console.error(error);
          if (apiPrefix != "loadboard-crawler") {
            this.$vs.notify({
              title: "Error",
              text: error.response.data.message,
              color: "danger",
            });
          }
        });
    },

    handleChangeDate(selectedDates, dateStr) {
      const selectedDateFormat = dateStr.split(" to ");
      const startDate = new Date(selectedDateFormat[0]);
      const skipDay = 60;

      startDate.setDate(startDate.getDate() - skipDay);
      this.$set(
        this.flat_pikr_config,
        "minDate",
        formatDate(new Date(startDate))
      );

      startDate.setDate(startDate.getDate() + skipDay * 2);
      this.$set(
        this.flat_pikr_config,
        "maxDate",
        formatDate(new Date(startDate))
      );

      if (selectedDates.length >= 2) {
        this.$set(this.flat_pikr_config, "minDate", "");
        this.$set(this.flat_pikr_config, "maxDate", "");
        this.schedule = [];
        this.refreshList();
      }
    },

    async getShareAllSchedule() {
      let selectedDate = this.selectedDateRange.split(" to ");
      if (selectedDate.length <= 1) {
        selectedDate.push(selectedDate[0]);
      } else {
        selectedDate = this.selectedDateRange.split(" to ");
      }
      const filter = {
        company_id: this.shareAuthId,
        startDate: selectedDate[0],
        endDate: selectedDate[1],
      };
      this.$vs.loading();
      try {
        const { payload } = await this.$store.dispatch(
          "loads-matching/getShareAllSchedule",
          filter
        );
        this.schedule = payload;
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },

    async getAllSchedule() {
      let selectedDate = this.selectedDateRange.split(" to ");
      if (selectedDate.length <= 1) {
        selectedDate.push(selectedDate[0]);
      } else {
        selectedDate = this.selectedDateRange.split(" to ");
      }

      const filter = {
        startDate: selectedDate[0],
        endDate: selectedDate[1],
      };
      this.$vs.loading();
      try {
        const { payload } = await this.$store.dispatch(
          "loads-matching/getAllTruckSchedules",
          filter
        );
        this.schedule = payload;
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },

    refreshList() {
      if (this.$route.name === "share-loads-matching") {
        this.getShareAllSchedule();
      } else {
        this.getAllSchedule();
      }
    },
  },

  beforeDestroy() {
    this.tabTimers.forEach((value) => {
      clearInterval(value);
    });
  },
};
</script>

<style lang="scss">
.input-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #d8d6de;
}

.input-box {
  width: 200px;

  @media (max-width: 568px) {
    width: 100%;
  }
}

.icon-btn {
  background: transparent;
  border: none;
  margin-top: 5px;
}

.load-details-card {
  overflow: auto;
  height: 65vh;
}

.load-details-mobile {
  z-index: 50000;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow: auto;
  background: #fff;
}

.slide-fade-enter-active {
  transition: all 0.1s linear;
}

.slide-fade-leave-active {
  transition: all 0.1s linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.load-details-card-shared {
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  }
}
</style>
