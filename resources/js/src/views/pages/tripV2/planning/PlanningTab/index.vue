<template>
  <div class="planning-table">
    <div class="planning-page-header flex justify-between mb-3 items-center">
      <div class="flex items-center">
        <h3
          v-text="'Company Drivers'"
          class="ml-2"
          style="min-width: max-content"
        />
        <PlanningTabFilter
          v-if="allDriversList && isDriverGroupBy"
          class="ml-2"
          v-model="planningTabFiltersForDriver"
          :filtersToSupport="['loadDriver', 'driverTag']"
          :floatDirection="'rtl'"
        />
        <PlanningTabFilter
          v-if="selectedGroupBy.value === 'truck'"
          class="ml-2"
          v-model="planningTabFiltersForTruck"
          :filtersToSupport="['truck']"
          :floatDirection="'rtl'"
        />
        <!-- <span style="color: #7e69ff" class="ml-2 mt-1 cursor-pointer">
            Add New
          </span> -->
      </div>
      <div class="flex justify-end items-center">
        <vs-checkbox
          v-if="(planningData || []).length"
          class="calculate-deadhead-checkbox"
          v-model="calculateDeadheadOption"
        >
          Calculate deadhead miles
        </vs-checkbox>
        <div style="min-width: 13.5rem" class="mr-2 flex items-center">
          <div class="m-auto mr-1">
            <vs-dropdown vs-trigger-click class="cursor-pointer">
              <vs-button
                class="btn-drop w-max"
                color="primary"
                icon="expand_more"
                size="small"
                icon-after
                style="min-height: 35px; max-height: 40px"
              >
                <span>Group By</span>
                <span v-if="selectedGroupBy.name">
                  : {{ selectedGroupBy.name }}
                </span>
              </vs-button>
              <vs-dropdown-menu>
                <vs-dropdown-item
                  v-for="item in groupByOptions"
                  :key="item.id"
                  @click="updateGroupBy(item)"
                >
                  {{ item.name }}
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
          <flat-pickr
            v-model="selectedDateRange"
            :config="flat_pikr_config"
            ref="flat-pickr"
            placeholder="Select Date Range"
            class="w-full"
            style="min-width: 14rem; max-height: 40px"
            @on-change="handleFlatPickerInput"
          />
        </div>
      </div>
      <!-- <div style="min-width: 13.5rem" class="mr-2 flex items-center">
        <div class="m-auto mr-1">
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <vs-button
              class="btn-drop w-max"
              color="primary"
              icon="expand_more"
              size="small"
              icon-after
              style="min-height: 35px; max-height: 40px"
            >
              <span>Group By</span>
              <span v-if="selectedGroupBy.name">
                : {{ selectedGroupBy.name }}
              </span>
            </vs-button>
            <vs-dropdown-menu>
              <vs-dropdown-item
                v-for="item in groupByOptions"
                :key="item.id"
                @click="updateGroupBy(item)"
              >
                {{ item.name }}
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <flat-pickr
          v-model="selectedDateRange"
          :config="flat_pikr_config"
          ref="flat-pickr"
          placeholder="Select Date Range"
          class="w-full"
          style="min-width: 14rem; max-height: 40px"
          @on-change="handleFlatPickerInput"
        />
      </div> -->
    </div>
    <div class="trip-card-container">
      <div
        class="overflow-auto"
        v-for="driverData in planningData"
        :key="driverData.id"
      >
        <table class="mt-2">
          <TripCard
            :calculateDeadheadOption="calculateDeadheadOption"
            :driverData="driverData"
            :columns="columns"
            @endTrip="endTrip"
          />
        </table>
      </div>
      <div
        v-if="apiCompleted && (planningData || []).length === 0"
        class="flex items-center justify-center"
      >
        <strong> No trips found </strong>
      </div>
    </div>
    <!-- <vs-button color="#82C661" type="filled" class="mt-5">
        Completed 69 Tasks
      </vs-button> -->
  </div>
</template>

<script>
import { formatDate } from '@/helpers/helper';
import TripCard from '../components/TripCard';
import PlanningTabFilter from '../components/FilterComponent';

import { mapGetters } from 'vuex';

export default {
  name: 'TripPlanningTab',
  components: {
    TripCard,
    PlanningTabFilter,
  },
  provide() {
    return {
      allDispatchers: () => [],
      allTags: () => this.allDriverTags || [],
      allDrivers: () => this.allDriversList || [],
      loadStatuses: () => [],
    };
  },
  async created() {
    // checking if already tags are available or not.
    if (this.allTags.length) {
      this.allDriverTags = this.allTags;
    } else {
      this.getAllDriverTags();
    }
    this.configDateFlatPickr();
    await this.getLoadsForPlanning();

    if (!this.pcmiler.getKeyApiCalled) {
      await this.getPcmilerApiKey();
    }
  },
  data() {
    return {
      planningData: [],
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        defaultDate: [
          new Date().setDate(new Date().getDate() - 8),
          new Date().setDate(new Date().getDate() + 8),
        ],
      },
      skip_days: 60,
      apiCompleted: false,
      groupByOptions: [
        { id: 1, name: 'Driver', value: 'companyDriver' },
        { id: 2, name: 'Owner Operator', value: 'ownerOperator' },
        { id: 3, name: 'Truck', value: 'truck' },
      ],
      selectedGroupBy: { id: 1, name: 'Driver', value: 'companyDriver' },
      allDriverTags: null,
      selectedFiltersForDriver: null,
      selectedFiltersForTruck: null,
      planningTabFiltersForDriver: null,
      planningTabFiltersForTruck: null,
      calculateDeadheadOption: false,
      cachedSelectedFilters: null,
    };
  },
  computed: {
    ...mapGetters('pcmiler', ['pcmiler']),
    ...mapGetters('tag', ['allTags']),
    ...mapGetters('load', ['allDriverTruckTrailerForLoadDriver']),

    columns() {
      const basicColumnsToRender = [
        { field: 'loadNumber', header: 'LoadNumber', expander: true },
        { field: 'loadStatus', header: 'Status' },
        { field: 'loadStartDate', header: 'Start Date' },
        { field: 'loadEndDate', header: 'End Date' },
        { field: 'loadRate', header: 'Rate' },
        { field: 'totalLoadedDistance', header: 'Loaded Distance', edit: true },
        { field: 'emptyDistance', header: 'Empty Distance', edit: true },
        { field: 'stops', header: 'Stops' },
      ];
      const additionalColumnsForGroupByDriver = [
        /**
         * These values are to be inserted as 2nd and 3rd columns
         * Only when selectedGroupBy is of type 'companyDriver'
         * the field names, '' and '' used below are not assigned from backEnd
         * they are created in front end for ease of rendering in sub components
         * they are initialized in 'formatForDriverGroupBy' method
         */
        { field: 'loadDriverAssignedTruck', header: 'Truck' },
        { field: 'loadDriverAssignedTrailer', header: 'Trailer' },
      ];
      if (this.isDriverGroupBy) {
        basicColumnsToRender.splice(1, 0, ...additionalColumnsForGroupByDriver);
      }
      return basicColumnsToRender;
    },
    isDriverGroupBy() {
      const { value } = this.selectedGroupBy || {};
      return value === 'companyDriver'; // See groupByOptions id:1
    },
    allDriversList() {
      return this.allDriverTruckTrailerForLoadDriver.drivers;
    },
  },
  watch: {
    planningTabFiltersForDriver: {
      handler(val) {
        const { driverIds, driverTagIds } = val || {};
        this.selectedFiltersForDriver = {
          driverIds: driverIds || [],
          driverTagIds: driverTagIds || [],
        };
      },
    },
    planningTabFiltersForTruck: {
      handler(val) {
        const { truckIds } = val || {};
        this.selectedFiltersForTruck = {
          truckIds: truckIds || [],
        };
      },
    },
    selectedFiltersForDriver: {
      handler(val) {
        if (val.driverIds || val.driverTagIds) {
          this.getLoadsForPlanning();
        }
      },
    },
    selectedFiltersForTruck: {
      handler(val) {
        if (val.truckIds) {
          this.getLoadsForPlanning();
        }
      },
    },
    planningData: {
      handler(val) {
        if (!val.length) {
          this.calculateDeadheadOption = false;
        }
      },
    },
  },
  methods: {
    configDateFlatPickr() {
      const defaultDate = this.flat_pikr_config.defaultDate;
      this.selectedDateRange = `${formatDate(defaultDate[0])} to ${formatDate(
        defaultDate[1]
      )}`;
    },
    handleFlatPickerInput(selectedDates, dateStr, instance) {
      this.selectedDateRange = dateStr;
      const selectedDateFormat = dateStr.split(' to ');
      if ((selectedDates || []).length >= 2) {
        if (
          new Date(selectedDates[0]).getTime() ===
          new Date(selectedDates[1]).getTime()
        ) {
          const selectDate = new Date(selectedDates[0]);
          this.$set(
            this.flat_pikr_config,
            'minDate',
            selectDate.setDate(selectDate.getDate() - this.skip_days)
          );
          this.$set(
            this.flat_pikr_config,
            'maxDate',
            selectDate.setDate(selectDate.getDate() + this.skip_days * 2)
          );
        } else {
          this.$set(this.flat_pikr_config, 'minDate', '');
          this.$set(this.flat_pikr_config, 'maxDate', '');
        }
      } else {
        const selectDate = new Date(selectedDateFormat[0]);
        selectDate.setHours(selectDate.getHours() + 12);

        selectDate.setDate(selectDate.getDate() - this.skip_days);
        this.$set(
          this.flat_pikr_config,
          'minDate',
          selectDate.toISOString().slice(0, 10)
        );

        selectDate.setDate(selectDate.getDate() + this.skip_days * 2);
        this.$set(
          this.flat_pikr_config,
          'maxDate',
          selectDate.toISOString().slice(0, 10)
        );
      }
      this.getLoadsForPlanning();
    },
    getLoadsForPlanning() {
      let filters = {};

      if (this.selectedGroupBy.value !== 'ownerOperator') {
        if (this.isDriverGroupBy && this.selectedFiltersForDriver) {
          // Driver and Driver tags filter condition is active
          if (
            this.selectedFiltersForDriver.driverTagIds &&
            this.selectedFiltersForDriver.driverTagIds.length
          ) {
            filters.driverTagIds = this.selectedFiltersForDriver.driverTagIds;
          }
          if (
            this.selectedFiltersForDriver.driverIds &&
            this.selectedFiltersForDriver.driverIds.length
          ) {
            filters.driverIds = this.selectedFiltersForDriver.driverIds;
          }
        } else if (
          this.selectedFiltersForTruck &&
          this.selectedGroupBy.value === 'truck'
        ) {
          if (
            this.selectedFiltersForTruck.truckIds &&
            this.selectedFiltersForTruck.truckIds.length
          ) {
            filters.truckIds = this.selectedFiltersForTruck.truckIds;
          }
        }
      }

      // If driverIds, driverTagIds and truckIds are empty, set filters to null
      if (!Object.keys(filters).length) {
        filters = null;
      }
      const selectedDateRange = this.selectedDateRange.split(' to ');
      if ((selectedDateRange || []).length < 2) {
        return;
      }
      const startDate = selectedDateRange[0];
      const endDate = selectedDateRange[1];
      const payload = {
        startDate,
        endDate,
      };

      if (this.selectedGroupBy.value) {
        payload.type = this.selectedGroupBy.value;
      }

      if (filters) {
        payload.filters = filters;
      }

      this.$vs.loading();
      this.$store
        .dispatch('tripV2/getLoadsForPlanning', payload)
        .then((item) => {
          this.planningData = this.formatPlanningPayload(item.payload.loads);
          this.apiCompleted = true;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    async endTrip(driverLoadData) {
      const toastSuccess = async () => {
        await this.$vs.notify({
          time: 2000,
          color: 'success',
          title: 'Trip Created',
          text: 'Trip created successfully',
        });
      };
      try {
        let stopDates = [];
        (driverLoadData || []).children.forEach((load) => {
          ((load || {}).stops || []).forEach((stop) => {
            stopDates.push(stop.date);
          });
        });
        stopDates = stopDates.filter((item) => item).sort();
        if (stopDates.length < 1) {
          throw new Error(
            'To create a trip, at least one stop should have an associated date.'
          );
        }
        const payload = {
          type: this.selectedGroupBy.value,
          loads: driverLoadData.children.map((x) => ({
            loadId: x.loadId,
            loadedDistance: x.totalLoadedDistance,
            emptyDistance: x.emptyDistance,
          })),
          stopsStartDate: stopDates[0],
          stopsEndDate: stopDates[stopDates.length - 1],
          totalLoadedDistance: driverLoadData.totalLoadedDistance,
          totalEmptyDistance: driverLoadData.totalEmptyDistance,
        };

        if (
          this.selectedGroupBy.value === null ||
          this.selectedGroupBy.value === 'companyDriver'
        ) {
          payload.driverUserId = driverLoadData.id;
        } else if (this.selectedGroupBy.value === 'ownerOperator') {
          payload.ownerOperatorTagId = driverLoadData.id;
        } else if (this.selectedGroupBy.value === 'truck') {
          payload.truckId = driverLoadData.id;
        }

        await this.$store.dispatch('tripV2/createTrip', payload);
        this.getLoadsForPlanning();
        toastSuccess();
      } catch (error) {
        console.error(error);
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text:
            (((error || {}).response || {}).data || {}).message ||
            error.message ||
            'Error creating trip',
        });
      }
    },
    formatPlanningPayload(planningPayload) {
      const { value } = this.selectedGroupBy || {};
      switch (value) {
        case 'companyDriver':
          return this.formatForDriverGroupBy(planningPayload);
        case 'ownerOperator':
          return this.formatForOwnerOperatorGroupBy(planningPayload);
        case 'truck':
          return this.formatForTruckGroupBy(planningPayload);
        default: // value == null
          return this.formatForDriverGroupBy(planningPayload);
      }
    },
    formatForDriverGroupBy(planningPayload) {
      const driverGroupByMap = {};
      (planningPayload || []).forEach((element) => {
        /**
         * For Each load check for 'additionalAssetsInfo' property
         * present only when grouped by driver,
         * identifies the trucks and Trailers assigned to the driver.
         * Used direct arrays, in stead of creating concatenated strings,
         * as we might later need to add hyper links to Trucks and Trailer,
         * in which case their ids will be needed
         */
        const { additionalAssetsInfo } = element || {};
        const { trucks, trailers } = additionalAssetsInfo || {};
        element.loadDriverAssignedTruck = trucks || [];
        element.loadDriverAssignedTrailer = trailers || [];
        element.emptyDistance = element.emptyDistance || 0;

        if (driverGroupByMap[element.driverUserId]) {
          driverGroupByMap[element.driverUserId].children.push(element);
        } else {
          driverGroupByMap[element.driverUserId] = {
            id: element.driverUserId,
            name: element.driverName,
            children: [element],
          };
        }
      });

      return Object.keys(driverGroupByMap).map((key) => {
        const loadRateTotal = driverGroupByMap[key].children.reduce(function (
          accum,
          val
        ) {
          return accum + Number(val.loadRate);
        },
        0);

        if ((driverGroupByMap[key].children || []).length > 1)
          driverGroupByMap[key].children = driverGroupByMap[key].children.sort(
            (a, b) => {
              const aDate = new Date(
                `${a.loadStartDate} ${a.loadStartTime || '00:00:00'}`
              ).getTime();
              const bDate = new Date(
                `${b.loadStartDate} ${b.loadStartTime || '00:00:00'}`
              ).getTime();
              return aDate - bDate;
            }
          );

        return {
          ...driverGroupByMap[key],
          count: driverGroupByMap[key].children.length,
          loadRateTotal,
        };
      });
    },
    formatForTruckGroupBy(planningPayload) {
      const truckGroupByMap = {};
      (planningPayload || []).forEach((element) => {
        element.emptyDistance = element.emptyDistance || 0;
        if (truckGroupByMap[element.truckId]) {
          truckGroupByMap[element.truckId].children.push(element);
        } else {
          truckGroupByMap[element.truckId] = {
            id: element.truckId,
            name: element.truckNumber,
            children: [element],
          };
        }
      });

      return Object.keys(truckGroupByMap).map((key) => {
        const loadRateTotal = truckGroupByMap[key].children.reduce(function (
          accum,
          val
        ) {
          return accum + Number(val.loadRate);
        },
        0);

        if ((truckGroupByMap[key].children || []).length > 1)
          truckGroupByMap[key].children = truckGroupByMap[key].children.sort(
            (a, b) => {
              const aDate = new Date(
                `${a.loadStartDate} ${a.loadStartTime || '00:00:00'}`
              ).getTime();
              const bDate = new Date(
                `${b.loadStartDate} ${b.loadStartTime || '00:00:00'}`
              ).getTime();
              return aDate - bDate;
            }
          );

        return {
          ...truckGroupByMap[key],
          count: truckGroupByMap[key].children.length,
          loadRateTotal,
        };
      });
    },
    formatForOwnerOperatorGroupBy(planningPayload) {
      const ownerTagGroupMap = {};
      (planningPayload || []).forEach((element) => {
        element.emptyDistance = element.emptyDistance || 0;
        if (ownerTagGroupMap[element.ownerOperatorTagId]) {
          ownerTagGroupMap[element.ownerOperatorTagId].children.push(element);
        } else {
          ownerTagGroupMap[element.ownerOperatorTagId] = {
            id: element.ownerOperatorTagId,
            name: element.ownerOperatorTagName,
            children: [element],
          };
        }
      });

      return Object.keys(ownerTagGroupMap).map((key) => {
        const loadRateTotal = ownerTagGroupMap[key].children.reduce(function (
          accum,
          val
        ) {
          return accum + Number(val.loadRate);
        },
        0);

        if ((ownerTagGroupMap[key].children || []).length > 1)
          ownerTagGroupMap[key].children = ownerTagGroupMap[key].children.sort(
            (a, b) => {
              const aDate = new Date(
                `${a.loadStartDate} ${a.loadStartTime || '00:00:00'}`
              ).getTime();
              const bDate = new Date(
                `${b.loadStartDate} ${b.loadStartTime || '00:00:00'}`
              ).getTime();
              return aDate - bDate;
            }
          );

        return {
          ...ownerTagGroupMap[key],
          count: ownerTagGroupMap[key].children.length,
          loadRateTotal,
        };
      });
    },
    updateGroupBy(groupBy) {
      this.selectedGroupBy = groupBy;
      this.getLoadsForPlanning();
    },
    async getPcmilerApiKey() {
      try {
        await this.$store.dispatch('pcmiler/getPcmiler');
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
    async getAllDriverTags() {
      try {
        const { payload } = await this.$store.dispatch('tag/getAllTags');
        const { data: allTags } = payload || {};
        if (allTags) {
          this.allDriverTags = allTags;
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss">
.planning-table {
  background: #f7f8f9;
  /* height: 100vh; */
  padding-top: 5px;
  table {
    width: 100%;
  }
  .trip-card-container {
    overflow-y: auto;
    height: calc(100vh - 120px);
    /* scroll bar */
    &::-webkit-scrollbar-thumb:horizontal {
      /*The style of the horizontal scrollbar*/
      width: 4px;
      background-color: #cccccc;
      -webkit-border-radius: 6px;
    }
    &::-webkit-scrollbar-track-piece {
      background-color: #fff; /*The background color of the scrollbar*/
      -webkit-border-radius: 0; /*Fillet width of the scrollbar*/
    }
    &::-webkit-scrollbar {
      width: 10px; /*the width of the scrollbar*/
      height: 8px; /*the height of the scroll bar*/
    }
    &::-webkit-scrollbar-thumb:vertical {
      /*The style of the vertical scrollbar*/
      height: 50px;
      background-color: #999;
      -webkit-border-radius: 4px;
      outline: 2px solid #fff;
      outline-offset: -2px;
      border: 2px solid #fff;
    }
    &::-webkit-scrollbar-thumb:hover {
      /*The hover style of the scroll bar*/
      height: 50px;
      background-color: #9f9f9f;
      -webkit-border-radius: 4px;
    }
  }

  .multiselect__placeholder {
    margin-bottom: 0 !important;
  }
  // Utility classes
  .w-max {
    width: max-content;
  }
}
</style>
