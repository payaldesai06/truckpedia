<template>
  <div class="planning-timeline">
    <div class="planning-timeline-header flex justify-between">
      <portal-target name="planningTimeline"></portal-target>
      <portal :to="parentKey">
        <!-- parentKey can be planningTimeline/dragAndDropTimeline -->
        <div class="planning-timeline-controls flex items-center">
          <!-- Date range selector  -->
          <div style="min-width: 13.5rem" class="mr-2">
            <flat-pickr
              v-model="selectedDateRange"
              :config="flat_pikr_config"
              ref="flat-pickr"
              placeholder="Select Date Range"
              class="w-full"
              @on-change="handleFlatPickerInput"
            />
          </div>
        </div>
      </portal>
    </div>
    <GanttChart
      v-if="dateRange.length > 0"
      :key="chartRenderKey"
      :currentScrollPosition="chartContainerScrollPosition"
      :headerData="['Driver Name']"
      class="mt-4"
      :gantt-data="timelineDataForGantt"
      :time-section="dateRange"
      :chart-max-height="ChartHeight"
      :renderPropertyName="['loads']"
      :sideBarHeights="sideBarHeights"
      @onClickBar="showBarDetails($event)"
      @onClickLine="openDriverTimeOffCalender($event)"
      @onLoadCardClick="showLoadDetails($event)"
      @refreshChart="getAndProcessData()"
      @onLoadAssign="assignLoad"
      @onDriverAssign="assignDriver"
      @onScrollPositionChange="
        (position) => (chartContainerScrollPosition = position)
      "
      :barHeight="'20px'"
      :rowHeight="'35px'"
      :blockMinHeight="'75px'"
      :singleRow="showBarsInSingleRow"
      :showSideBar="true"
      :parentKey="parentKey"
      :groupedUnassignedLoads="groupedUnassignedLoads"
    >
      <template #container-box="{ item }">
        <LoadCard
          :load="item"
          :isDraggable="true"
          @onLoadCardDragEnd="assignLoad"
        />
      </template>
      <template #side-box="{ item }">
        <div class="w-full block truck-info" :class="infoClassList">
          <div
            class="flex p-3"
            :class="item.driverName ? 'justify-start' : 'justify-center'"
          >
            <!-- justify-between  -->
            <div class="flex items-center w-full">
              <span class="font-medium title" v-if="item.assetLabel">
                {{ item.assetLabel }}
              </span>
              <span class="font-medium title" v-else-if="item.truckNumber">
                {{ item.truckNumber }}
              </span>
              <span class="font-medium title" v-else-if="item.trailerNumber">
                {{ item.trailerNumber }}
              </span>
              <template v-else-if="item.driverName">
                <vs-avatar
                  circle
                  :text="getNameLetters(item.driverName)"
                  :style="avatarColors(item.driverId)"
                  size="40px"
                  class="avatar"
                />
                <span class="font-medium title">{{ item.driverName }}</span>
              </template>
            </div>
          </div>
        </div>
      </template>
    </GanttChart>
  </div>
</template>

<script>
import {
  formatDate,
  getRandomColorById,
  getApiErrorMsg,
} from '@/helpers/helper';
import config from '@/config/constants';
import { mapGetters } from 'vuex';
import _ from 'lodash';
import LoadCard from './components/LoadCard.vue';
import globalMixins from '@/mixins/globalMixins';
import { EventBus } from '@/helpers/eventBus';

export default {
  name: 'DragAndDropTimeline',
  components: {
    GanttChart: () => import('./components/ganttChart'),
    LoadCard,
  },
  mixins: [globalMixins],
  props: {
    returnData: {
      type: Object,
      default: () => ({
        loads: false,
      }),
    },
    parentKey: {
      type: String,
      default: 'planningTimeline',
    },
    showBarsInSingleRow: {
      type: Boolean,
      default: true,
    },
    infoClassList: {
      type: Array,
      default: () => [],
    },
  },
  async mounted() {
    EventBus.$on(config.eventBuses.loadChanged, this.getAndProcessData);
    await this.initData();
  },
  watch: {
    timelineDataForGantt: {
      handler() {
        this.chartRenderKey++;
        this.setHeightOfSideBar();
      },
      deep: true,
    },
    loadDriverAssignment() {
      console.log('loadDriverAssignment()');
      const load = this.loadToHaveDriver;
      const driver = this.driverToGetLoad;

      if (load && driver) {
        // Smart. Catched a good corner case. Who thought this?
        let isDriverCurrentlyAssigned = false;
        if ((load.drivers || []).length > 0) {
          isDriverCurrentlyAssigned = load.drivers.some((loadDriver) =>
            (loadDriver.users || []).some((user) => user.id === driver.driverId)
          );
        }
        if (isDriverCurrentlyAssigned) {
          this.clearLoadToAssign();
        } else {
          this.assignDriverToLoad(load, driver);
        }
      } else if (load && !driver) {
        this.clearLoadToAssign();
      }
      // When we drag and drop, assignDriver is triggered before assignLoad. So
      // driver will first be set, then load.
      // Suppose driver A already has load 101. First drag 101 to A, no effect.
      // Then drag load 102 to A but cancel (do not release), loadToHaveDriver will change to 102.
      // Then drag load 101 to A again, this will cause 102 assigned to A.

      // Won't work, no load can be assigned.
      // else if (load || driver) {
      //   this.clearLoadToAssign();
      // }
    },
    windowWidth(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.chartRenderKey++;
      }
    },
  },
  data() {
    return {
      nodeLoads: [],
      timelineDataForGantt: [],
      groupedUnassignedLoads: [],
      loadToHaveDriver: null,
      driverToGetLoad: null,

      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        defaultDate: [
          new Date().setDate(new Date().getDate() - 2),
          new Date().setDate(new Date().getDate() + 6),
        ],
      },
      skip_days: 30,
      ChartHeight: 550,
      chartRenderKey: 0,
      sideBarHeights: [],
      chartContainerScrollPosition: 0,
    };
  },
  computed: {
    ...mapGetters('load', ['allDriverTruckTrailerForLoadDriver']),
    windowWidth() {
      return this.$store.state.windowWidth;
    },
    dateRange() {
      const [startDate, endDate] = this.selectedDateRange.split(' to ') || [];
      if (startDate && endDate) {
        return [startDate, endDate];
      } else if (startDate) {
        return [startDate, startDate];
      }
      return [];
    },

    getNameLetters() {
      return (name) => {
        const [first, second] = name.split(' ');
        return `${first[0]}${second ? second[0] : ''}`.toUpperCase();
      };
    },
    avatarColors() {
      return (id) => {
        const { backgroundColor, color } = getRandomColorById(id);
        return {
          backgroundColor,
          color,
        };
      };
    },

    loadDriverAssignment() {
      return `${JSON.stringify(this.loadToHaveDriver)};${JSON.stringify(
        this.driverToGetLoad
      )}`;
    },
  },
  methods: {
    async initData() {
      try {
        this.configDateFlatPickr();

        const contentArea = (document || {}).getElementById(
          'content-area'
        ).clientHeight;
        this.ChartHeight = contentArea ? contentArea - 150 : this.clientHeight;

        await this.getAndProcessData();
      } catch (error) {
        console.log(error);
      }
    },
    showBarDetails(data) {
      if (this.showBarsInSingleRow && Array.isArray(data)) {
        // If showBarsInSingleRow is true, then show all bars in single row, data will be array of records
      } else {
        // If showBarsInSingleRow is false, then show each bar in different row, data will be single record
        const { loadId } = data || {};
        if (loadId) this.$emit('updateLoad', loadId);
      }
    },

    // I have changed these code a lot. Not fully reviewed.
    // I have changed these code a lot. Not fully reviewed.
    // I have changed these code a lot. Not fully reviewed.

    async assignDriverToLoad(load, driver) {
      console.log('assignDriverToLoad()');
      try {
        let payload = {};
        if (load.status == 'open') {
          payload.status = 'assign'; // Don't forget to change load status as well...
        }
        const emptyUserDriver = load.segmentDrivers.find(
          (ld) => ld.users.length == 0
        );

        if (emptyUserDriver) {
          payload.drivers = [
            {
              id: emptyUserDriver.id,
              userIds: [driver.driverId],
              status: 'assign',
            },
          ];
        } else {
          payload.addDrivers = [{ userIds: [driver.driverId] }];
          if (load.stops[0].type == 'leg') {
            payload.addDrivers[0].fromLeg = 1;
          } else if (load.stops[load.stops.length - 1].type == 'leg') {
            payload.addDrivers[0].toLeg = 1;
          }
        }

        this.clearLoadToAssign(); // Put here otherwise the watch will trigger tons of times.
        this.tempAssignLoad(load, driver); // TODO: Unlike Pipeline, the UI will still take some time to reflect. Why?

        await this.$store.dispatch('load/nodeUpdateLoad', {
          id: load.loadId,
          payload,
        });
        this.$vs.notify({
          color: 'primary',
          title: 'Driver Assigned',
          text: 'Driver assigned successfully.',
        });
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      } finally {
        await this.getAndProcessData();
      }
    },

    /**
     * Move load card to the driver's row in Gantt before query API returns;
     *
     * @param {Object} load
     * @param {Object} driver
     */
    tempAssignLoad(load, driver) {
      console.log('tempAssignLoad()');
      // Directly pushing to driver.loads will not work. I think somewhere somebody might did sth like clone.
      const driverToAssign = this.timelineDataForGantt.find(
        (timelineData) => timelineData.driverId === driver.driverId
      );

      const [calendarStartDate, calendarEndDate] =
        this.selectedDateRange.split(' to ');
      if (
        load.endDate >= calendarStartDate &&
        load.startDate <= (calendarEndDate || calendarStartDate)
      ) {
        load.startDate += ' ' + (load.startTime ? load.startTime : '00:00');
        load.endDate += ' ' + (load.endTime ? load.endTime : '23:59');
        driverToAssign.loads.push(load);
      }

      const group = this.groupedUnassignedLoads.find(
        (g) => g.groupDate == this.getDateForUnassignedList(load.startDate)
      );
      // I don't think it will ever be undefined.
      if (group) {
        group.loads.splice(
          group.loads.findIndex((l) => l.key == load.key),
          1
        );
      }
    },

    // When finishing drag a load to a driver OR when drag a load already belong to the driver inside this driver's row.
    clearLoadToAssign() {
      console.log('clearLoadToAssign()');
      this.loadToHaveDriver = null;
      this.driverToGetLoad = null;
    },

    // When drag a load to a driver, this is triggered first.
    assignDriver(driver) {
      console.log('assignDriver()');
      this.driverToGetLoad = driver;
    },
    // When drag a load to a driver, this is triggered 2nd.
    assignLoad(load) {
      console.log('assignLoad()');
      this.loadToHaveDriver = load;
    },

    async getAndProcessData() {
      console.log('getAndProcessData()');
      this.$vs.loading();
      const [startDate, endDate] = this.selectedDateRange.split(' to ');
      try {
        const stopFields = 'order,date,time,city,state';
        const params = {
          startDate,
          endDate: endDate || startDate,
          fields: [
            'customer:name',
            'shippers:' + stopFields,
            'receivers:' + stopFields,
            'legs:' + stopFields,
            'multiPurposeStops:' + stopFields,
            'drivers:fromLeg,toLeg,status,truck,trailer,users',
            'number',
            'status',
          ],
          mode: ['overlap'],
        };
        const {
          data: { payload },
        } = await this.$store.dispatch('load/nodeGetLoads', params);
        this.nodeLoads = payload;
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      }

      try {
        this.processData(this.nodeLoads, startDate, endDate || startDate);
      } catch (error) {
        console.log(error);
      }
      this.$vs.loading.close();
    },

    // Generate assigned loads and unassigned loads.
    processData(nodeLoads, calendarStartDate, calendarEndDate) {
      // For loads with a leg, they shall split into two loads.
      const unassignedLoads = [];
      const assignedLoads = new Map();

      for (const load of nodeLoads) {
        if (load.status == 'canceled') {
          continue;
        }
        this.categorizeLoad(unassignedLoads, assignedLoads, load);
      }

      this.timelineDataForGantt =
        this.allDriverTruckTrailerForLoadDriver.drivers.map((driver) => {
          return {
            driverId: driver.id,
            driverName: driver.name,
            loads: this.formatLoads(
              assignedLoads.get(driver.id) || [],
              true
            ).filter(
              // A load card may not fit in calendar date range at all, for example
              // 1st stop to leg is out of range, but leg to last stop is in range.
              (l) =>
                l.endDate.slice(0, 10) >= calendarStartDate &&
                l.startDate.slice(0, 10) <= calendarEndDate
            ),
          };
        });

      const grouped = {};
      this.formatLoads(unassignedLoads).forEach((load) => {
        if (!grouped[load.startDate]) {
          grouped[load.startDate] = [];
        }
        grouped[load.startDate].push(load);
      });

      this.groupedUnassignedLoads = Object.keys(grouped)
        .sort((a, b) => (a < b ? -1 : 1))
        .map((date) => {
          return {
            groupDate: this.getDateForUnassignedList(date),
            loads: grouped[date],
          };
        });
    },

    categorizeLoad(unassignedLoads, assignedLoads, load) {
      const stops = this.getStopsHelper(load);
      // Delivered and beyond loads and canceled loads shall never show up in unassigned list.

      if (load.legs.length == 0) {
        this.categorizeLoadHelper(
          unassignedLoads,
          assignedLoads,
          { ...load, stops, segmentDrivers: load.drivers },
          load.drivers
        );
        return;
      }

      const legIndex = stops.findIndex((s) => s.type == 'leg');
      const toLegStops = stops.slice(0, legIndex + 1);
      const fromLegStops = stops.slice(legIndex);
      const toLegDrivers = load.drivers.filter((ld) => ld.toLeg);
      const fromLegDrivers = load.drivers.filter((ld) => ld.fromLeg);

      // Just to prevent bugs in other code.
      if (toLegStops.length >= 2) {
        this.categorizeLoadHelper(
          unassignedLoads,
          assignedLoads,
          { ...load, stops: toLegStops, segmentDrivers: toLegDrivers },
          toLegDrivers
        );
      }
      if (fromLegStops.length >= 2) {
        this.categorizeLoadHelper(
          unassignedLoads,
          assignedLoads,
          { ...load, stops: fromLegStops, segmentDrivers: fromLegDrivers },
          fromLegDrivers
        );
      }
    },

    getStopsHelper(load) {
      const stops = [];
      for (const s of load.shippers) {
        stops.push({ type: 'shipper', ...s });
      }
      for (const s of load.legs) {
        stops.push({ type: 'leg', ...s });
      }
      for (const s of load.receivers) {
        stops.push({ type: 'receiver', ...s });
      }
      for (const s of load.multiPurposeStops) {
        stops.push({ type: 'multiPurposeStop', ...s });
      }
      stops.sort((a, b) => a.order - b.order);
      return stops;
    },

    // Even if a load has drivers (users), it's still possible that it is unassigned load,
    // because the driver may handed over. But for correctness, we shall still assign
    // this load to the handed over driver, because we cannot assign the same load to
    // a driver twice.
    // The drivers here are the load drivers for the particular segment, != load.drivers
    categorizeLoadHelper(unassignedLoads, assignedLoads, load, drivers) {
      // These users are used for determining what loads show up in what user's row.
      // Note, to determine if we can assign one load to one driver, we have to examine
      // all users of this load, no matter status.
      const users = _.flatten(drivers.map((ld) => ld.users));
      const hasNonHandedOverUser = drivers
        .filter((ld) => ld.status != 'handedOver')
        .some((ld) => ld.users.length > 0);

      if (
        !hasNonHandedOverUser &&
        ['open', 'assign', 'inTransit'].includes(load.status)
      ) {
        unassignedLoads.push(load);
      }
      for (const user of users) {
        if (assignedLoads.has(user.id)) {
          assignedLoads.get(user.id).push(load);
        } else {
          assignedLoads.set(user.id, [load]);
        }
      }
    },

    formatLoads(loads = [], applyDefaultTime = false) {
      return loads.map((load) => {
        const firstStop = load.stops[0];
        const lastStop = load.stops[load.stops.length - 1];
        let key = load.id;
        if (firstStop.type == 'leg') {
          key += 'fromLeg';
        }
        if (lastStop.type == 'leg') {
          key += 'toLeg';
        }
        let startDate = firstStop.date;
        let endDate = lastStop.date;
        if (applyDefaultTime) {
          startDate += ' ' + (firstStop.time ? firstStop.time : '00:00');
          endDate += ' ' + (lastStop.time ? lastStop.time : '23:59');
        }
        return {
          key,
          loadId: load.id,
          customerName: load.customer ? load.customer.name : null,
          startDate,
          startTime: firstStop.time,
          startCity: firstStop.city,
          startState: firstStop.state,
          endDate,
          endTime: lastStop.time,
          endCity: lastStop.city,
          endState: lastStop.state,
          ...load,
          // drivers: load.drivers,
        };
      });
    },

    getDateForUnassignedList(date) {
      return this.$dayjs(date).format('MMMM D, YYYY');
    },

    // Although not fully reviewed, at least I have a guess what they are doing.
    // Although not fully reviewed, at least I have a guess what they are doing.
    // Although not fully reviewed, at least I have a guess what they are doing.
    showLoadDetails({ loadId }) {
      if (loadId) {
        this.$emit('updateLoad', loadId);
      }
    },
    configDateFlatPickr() {
      const defaultDate = this.flat_pikr_config.defaultDate;
      this.selectedDateRange = `${formatDate(defaultDate[0])} to ${formatDate(
        defaultDate[1]
      )}`;
    },
    async handleFlatPickerInput(selectedDates, dateStr) {
      this.selectedDateRange = dateStr;
      const selectedDateFormat = dateStr.split(' to ');

      if (selectedDates.length >= 2) {
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
      if (selectedDates.length >= 2) {
        await this.getAndProcessData();
      }
    },
    generateHeightOfGanttChart() {
      console.log('generateHeightOfGanttChart()');
      const heightRes = [];
      const gnatCharContainer = document.getElementById(
        'gantt-chart-container'
      );
      const children = (gnatCharContainer || {}).children || [];
      if (!children.length) return [];
      for (let i = 0; i < children.length; i++) {
        let tableChild = children[i];
        heightRes.push(tableChild.clientHeight);
      }
      return heightRes;
    },
    setHeightOfSideBar() {
      console.log('setHeightOfSideBar()');
      setTimeout(() => {
        const heightRes = this.generateHeightOfGanttChart();
        this.sideBarHeights = heightRes;
        if (!heightRes.length) return;
        const chartSideBlock = document.getElementById('chartSideBlock');
        const children = (chartSideBlock || []).children || [];
        for (let i = 0; i < children.length; i++) {
          let tableChild = children[i];
          tableChild.style.height = `${heightRes[i] + 1}px`;
        }
      }, 600);
    },
  },
  beforeDestroy() {
    EventBus.$off(config.eventBuses.loadChanged);
  },
};
</script>

<style lang="scss">
.planning-timeline {
  padding-top: 5px;
}
.truck-info {
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .avatar {
    font-size: 24px;
    font-weight: 600;
    min-width: 40px;
    cursor: auto;
    .vs-avatar--text {
      color: inherit !important;
    }
  }
}
.driver-info-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .driver-name-card {
    min-height: var(--gantt-row-height);
    justify-content: flex-end;
    padding: 0 10px;
  }
}
.gantt_chart_content {
  display: flex;
  justify-content: center;
  width: 100%;
  .bar-label-text {
    width: 100%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Times New Roman;
    text-align: center;
  }
}
.v-centered-info {
  justify-content: center;
}

.h-centered-info {
  align-items: center;
}
</style>
