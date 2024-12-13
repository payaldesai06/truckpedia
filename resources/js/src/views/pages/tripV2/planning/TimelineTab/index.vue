<template>
  <div class="planning-timeline">
    <div class="planning-timeline-header flex justify-between">
      <div
        class="flex items-center mb-3"
        v-if="parentKey === 'planningTimeline'"
      >
        <h3 v-text="'Timeline'" class="ml-2" />
      </div>
      <portal-target name="planningTimeline"></portal-target>
      <portal :to="parentKey">
        <!-- parentKey can be planningTimeline/dispatchTimeline -->
        <div class="planning-timeline-controls flex items-center">
          <!-- Timeline filter component -->
          <TimelineTabFilter
            class="mx-2"
            v-model="timelineTabFilters"
            :filtersToSupport="['loadTag', 'loadDispatcher', 'loadStatus']"
          />
          <!-- TimelineFor Selector  -->
          <div class="mr-2 flex items-center">
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
                  <span>Timeline For</span>
                  <span v-if="selectedTimelineFor.name">
                    : {{ selectedTimelineFor.name }}
                  </span>
                </vs-button>
                <vs-dropdown-menu>
                  <vs-dropdown-item
                    v-for="item in timelineForOptions"
                    :key="item.id"
                    @click="updateTimelineFor(item)"
                  >
                    {{ item.name }}
                  </vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>
          </div>
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
      :headerData="sideBlockHeader"
      class="mt-4"
      :gantt-data="timelineData"
      :time-section="dateRange"
      :chart-max-height="ChartHeight"
      :renderPropertyName="timelinePropertiesToRender"
      :sideBarHeights="sideBarHeights"
      @onClickBar="showBarDetails($event)"
      @onClickLine="openDriverTimeOffCalender($event)"
      :barHeight="'20px'"
      :rowHeight="'35px'"
      :blockMinHeight="'75px'"
      :singleRow="showBarsInSingleRow"
      :showSideBar="true"
    >
      <template #container-box="{ item }">
        <vx-tooltip
          :text="item.loadNumber"
          v-if="(item || {}).loadNumber"
          class="w-full"
          position="right"
        >
          <div
            v-if="typeof item === 'object' && item.loadNumber"
            class="gantt_chart_content text-primary"
            vx-tooltip="item.loadNumber"
          >
            <span
              class="text-dark text-sm bar-label-text"
              v-if="item.loadNumber"
            >
              {{ item.loadNumber }}</span
            >
          </div>
        </vx-tooltip>
      </template>
      <template #side-box="{ item }">
        <div class="w-full block truck-info">
          <div class="flex justify-center p-3">
            <!-- justify-between  -->
            <div class="flex items-center">
              <span class="text-primary" v-if="item.assetLabel">
                {{ item.assetLabel }}
              </span>
              <span class="text-primary" v-else-if="item.truckNumber">
                {{ item.truckNumber }}
              </span>
              <span class="text-primary" v-else-if="item.trailerNumber">
                {{ item.trailerNumber }}
              </span>
              <span class="text-primary" v-else-if="item.driverName">
                {{ item.driverName }}
              </span>
            </div>
            <!-- <div class="flex items-center">
              <vs-button
                color="primary"
                size="small"
                icon="add"
                @click="openDriverTimeOffCalender(item)"
                type="filled"
              />
            </div> -->
          </div>
          <div class="driver-info-container">
            <div
              class="flex items-center driver-name-card"
              v-for="(driver, ix) in item.currentAssignedDrivers"
              :key="ix"
              @click.stop="openDriverTimeOffCalender(driver)"
            >
              <span class="text-primary" v-if="driver.driverName">
                {{ driver.driverName }}
              </span>
            </div>
          </div>
        </div>
        <!-- <SideCard :data="item"></SideCard> -->
        <!-- <div
          class="m-auto p-3"
          style="line-height: normal"
          v-if="item.truckNumber"
        >
          {{ item.truckNumber }}
        </div> -->
      </template>
    </GanttChart>
    <DriverTimeOffCalender
      ref="driverTimeOffCalender"
      @refresh="refreshPageContent"
    />
    <ScheduleListDialog
      ref="schedulesListDialog"
      @updateSchedule="openScheduleForm"
      @refresh="refreshPageContent"
    />
  </div>
</template>

<script>
import { formatDate } from '@/helpers/helper';
import SideCard from './SideCard';
import TimelineTabFilter from '../components/FilterComponent';
import config from '@/config/constants';
import { mapGetters } from 'vuex';

export default {
  name: 'TimelineTab',
  components: {
    GanttChart: () => import('@/components/ganttChart'),
    SideCard,
    DriverTimeOffCalender: () => import('./DriverTimeOffCalender'),
    ScheduleListDialog: () => import('./SchedulesListDialog'),
    TimelineTabFilter,
  },
  props: {
    returnData: {
      type: Object,
      default: () => ({
        loads: false,
        schedules: true,
        timeOffCalendars: true,
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
  },
  provide() {
    return {
      allDispatchers: () => this.allDispatchers,
      allTags: () => this.allTagsList,
      loadStatuses: () => this.loadStatuses,
      allDrivers: () => [],
    };
  },
  async created() {
    this.initializeDataForFilters();
    this.initUserCustomization();
  },
  async mounted() {
    this.$vs.loading();
    this.configDateFlatPickr();
    this.$nextTick(() => {
      const contentArea = (document || {}).getElementById(
        'content-area'
      ).clientHeight;
      this.ChartHeight = contentArea ? contentArea - 150 : this.clientHeight;
    });
    setTimeout(() => {
      this.setHeightOfSideBar();
      this.$vs.loading.close();
    }, 500);
  },
  watch: {
    timelineData: {
      handler() {
        this.chartRenderKey++;
        this.setHeightOfSideBar();
      },
      deep: true,
    },
    timelineTabFilters: {
      handler(val) {
        this.refreshPageContent(true);
      },
    },
  },
  data() {
    return {
      timelineData: [],
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        defaultDate: [
          new Date().setDate(new Date().getDate() - 2),
          new Date().setDate(new Date().getDate() + 6),
        ],
      },
      skip_days: 60,
      ChartHeight: 550,
      chartRenderKey: 0,
      sideBarHeights: [],
      isApiActive: false,
      selectedTimelineFor: { id: 1, name: 'Truck', value: 'truck' },
      timelineTabFilters: { loadStatuses: ['in_transit', 'assign'] },
      allTagsList: [],
      allDispatchers: [],
    };
  },
  computed: {
    ...mapGetters('auth', ['userCustomization']),
    ...mapGetters('tag', ['allTags']),

    dateRange() {
      /* Logic to get the date range (start and end) from the truck timeline data received from back end */
      /*
     const dates = [];
      (this.truckTimeline || []).forEach((truck) => {
        truck.loads.forEach((load) => {
          const { startDate, endDate } = load || {};
          if (startDate) dates.push(startDate);
          if (endDate) dates.push(endDate);
        });
      });
      dates.sort();
      return [dates[0], dates[dates.length - 1]];
      */
      const [startDate, endDate] = this.selectedDateRange.split(' to ') || [];
      if (startDate && endDate) {
        return [startDate, endDate];
      } else if (startDate) {
        return [startDate, startDate];
      }
      return [];
    },
    timelinePropertiesToRender() {
      const propertiesToRenderMap = {
        loads: 'loads',
        schedules: 'schedules',
        timeOffCalendars: 'currentAssignedDrivers',
      };
      return Object.keys(this.returnData)
        .map((renderKey) => {
          if (this.returnData[renderKey]) {
            return propertiesToRenderMap[renderKey];
          }
        })
        .filter(Boolean);
    },
    timelineForOptions() {
      return [
        { id: 1, name: 'Truck', value: 'truck' },
        { id: 2, name: 'Trailer', value: 'trailer' },
        { id: 3, name: 'Driver', value: 'driver' },
      ];
    },
    sideBlockHeader() {
      const timeLineFor = this.selectedTimelineFor.value || null;
      switch (timeLineFor) {
        case 'truck':
          return ['Truck Number'];
        case 'trailer':
          return ['Trailer Number'];
        case 'driver':
          return ['Driver Name'];
        default:
          return ['Truck Number'];
      }
    },
    loadStatuses() {
      return config.status.loadWithLabels;
    },
    loadStatusColorMap() {
      return {
        open: { id: 'open', name: 'Open', color: '#FAAFBE' },
        assign: { id: 'assign', name: 'Dispatched', color: '#FAF884' },
        in_transit: { id: 'in_transit', name: 'In Transit', color: '#00BFFF' },
        delivered: { id: 'delivered', name: 'Delivered', color: '#90EE90' },
        invoice_created: {
          id: 'invoice_created',
          name: 'Invoice Created',
          color: '#90EE90',
        },
        payment_requested: {
          id: 'payment_requested',
          name: 'Payment Requested',
          color: '#90EE90',
        },
        invoice_paid: {
          id: 'invoice_paid',
          name: 'Invoice Paid',
          color: '#90EE90',
        },
      };
    },
    currentUserCustomizations() {
      if (!this.userCustomization || !this.userCustomization.dispatchCalendar) {
        return {
          show: {
            timelineFor: 'truck',
          },
          filters: {},
        };
      }

      const {
        dispatchCalendar: { show, filters },
      } = this.userCustomization || {};

      return {
        show: show || {
          timelineFor: 'truck',
        },
        filters: JSON.parse(JSON.stringify(filters || {})),
      };
    },
    isDispatchRoute() {
      return this.$route.name === 'dispatch';
    },
  },
  methods: {
    configDateFlatPickr() {
      const defaultDate = this.flat_pikr_config.defaultDate;
      this.selectedDateRange = `${formatDate(defaultDate[0])} to ${formatDate(
        defaultDate[1]
      )}`;
      this.setTimeLineData();
    },
    handleFlatPickerInput(selectedDates, dateStr, instance) {
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
        this.setTimeLineData();
      }
    },
    async getTimelineData() {
      this.$vs.loading();
      try {
        // const selectedDateRange = this.selectedDateRange.split(" to ");
        // if (selectedDateRange.length < 2) {
        //   return;
        // }
        // const startDate = selectedDateRange[0];
        // const endDate = selectedDateRange[1];

        const [startDate, endDate] = this.dateRange || [];
        if (!(startDate && endDate)) {
          return;
        }
        const returnData = this.returnData;
        const payload = {
          startDate,
          endDate,
          returnData,
        };
        if (this.selectedTimelineFor.value)
          payload.timelineFor = this.selectedTimelineFor.value;
        if (this.timelineTabFilters) payload.filters = this.timelineTabFilters;

        const { data } = await this.$store.dispatch(
          'planningV2/getTimeline',
          payload
        );
        return (data || {}).payload || {};
      } catch (error) {
        console.log(error);
      } finally {
        this.$vs.loading.close();
      }
    },
    formatTimelineData(timelineData, timelineFor) {
      const keyValues = (type, key) => {
        if (type === 'truck') {
          const keyVal = {
            id: 'truckId',
            assetLabel: 'truckNumber',
          };
          return keyVal[key];
        } else if (type === 'trailer') {
          const keyVal = {
            id: 'trailerId',
            assetLabel: 'trailerNumber',
          };
          return keyVal[key];
        } else if (type === 'driver') {
          const keyVal = {
            id: 'driverId',
            assetLabel: 'driverName',
          };
          return keyVal[key];
        }
      };

      (timelineData || []).forEach((item) => {
        if (item.schedules) {
          if (timelineFor === 'truck' || timelineFor === 'driver') {
            const [startDate] = this.selectedDateRange.split(' to ') || [];

            item.schedules = item.schedules.filter((schedule) => {
              if (
                schedule.frequentType === 'once' ||
                (schedule.frequentType === 'weekly' &&
                  !schedule.quoteValidUntil)
              ) {
                return true;
              } else if (
                schedule.frequentType === 'weekly' &&
                schedule.quoteValidUntil
              ) {
                return (
                  this.$dayjs(schedule.quoteValidUntil).isAfter(startDate) ||
                  this.$dayjs(schedule.quoteValidUntil).isSame(startDate)
                );
              }
            });
          }
          item.schedules = item.schedules.map((schedule) => {
            if (schedule.frequentType === 'weekly') {
              const assetLabelValue =
                timelineFor === 'driver' ? 'trailer' : timelineFor;

              return {
                ...schedule,
                isSchedule: true,
                [keyValues(timelineFor, 'id')]:
                  item[keyValues(timelineFor, 'id')],
                color: '#A6DE96',
                isRepeating: true,
                weeklyDays: schedule.weeklySelectedDays.map((x) =>
                  x === 7 ? 0 : x
                ), // Since Sunday is 0 in JS, but in API it is 7
                //weeklyDays - SHOULD BE OF FORMAT -> [1-Mn, 2-Tu, 3-Wd, 4-Th, 5-Fr, 6-Sa, 0-Su] - JS Format
                assetLabel: item[keyValues(assetLabelValue, 'assetLabel')],
                endDate: schedule.quoteValidUntil || null,
              };
            } else if (schedule.frequentType === 'once') {
              return {
                ...schedule,
                startDate: schedule.onceTimeRange.startDate,
                startDate: this.$dayjs(
                  schedule.onceTimeRange.startDate + ' ' + '00:00'
                ).toDate(),
                endDate: this.$dayjs(
                  schedule.onceTimeRange.endDate + ' ' + '23:59'
                ).toDate(),
                isSchedule: true,
                [keyValues(timelineFor, 'id')]:
                  item[keyValues(timelineFor, 'id')],
                color: '#A6DE96',
                assetLabel: item[keyValues(timelineFor, 'assetLabel')],
              };
            }
          });
        }

        if (item.loads) {
          item.loads = item.loads.map((load) => {
            let { startDate, startTime, endDate, endTime } = load || {};

            if (!startTime) startTime = '00:00';
            if (!endTime) endTime = '23:59';

            startDate = this.$dayjs(startDate + ' ' + startTime).toDate();
            endDate = this.$dayjs(endDate + ' ' + endTime).toDate();

            return {
              ...load,
              color:
                (this.loadStatusColorMap[load.loadStatus] || {}).color ||
                '#96CCDE',
              startDate,
              endDate,
              assetLabel: item[keyValues(timelineFor, 'assetLabel')],
            };
          });
        }

        if (item.currentAssignedDrivers) {
          item.currentAssignedDrivers = item.currentAssignedDrivers.map(
            (driver) => ({
              ...driver,
              color: '#B6D7A8',
              barType: 'line',
              timeOffCalendars: driver.timeOffCalendars.map((timeOff) => {
                const { start, end } = timeOff || {};
                const {
                  date: startDate,
                  time: startTime,
                  timezone: startTimezone,
                } = start || {};
                const {
                  date: endDate,
                  time: endTime,
                  timezone: endTimezone,
                } = end || {};
                let formattedStartDateTime = startTimezone
                  ? new Date(
                      new Date(startDate + ' ' + startTime).toLocaleString(
                        'en',
                        { timeZone: startTimezone }
                      )
                    )
                  : new Date(startDate + ' ' + startTime);
                let formattedEndDateTime = endTimezone
                  ? new Date(
                      new Date(endDate + ' ' + endTime).toLocaleString('en', {
                        timeZone: endTimezone,
                      })
                    )
                  : new Date(endDate + ' ' + endTime);
                return {
                  ...timeOff,
                  startDate: formattedStartDateTime,
                  endDate: formattedEndDateTime,
                  color: '#E06666',
                };
              }),
            })
          );
        }
      });
      return timelineData || [];
    },
    async setTimeLineData(updateUserCustomization = false) {
      if (this.isApiActive) return;
      this.isApiActive = true;
      try {
        if (this.isDispatchRoute && updateUserCustomization) {
          const { show, filters } = this.currentUserCustomizations;
          const payload = {};
          if (
            JSON.stringify(filters) !== JSON.stringify(this.timelineTabFilters)
          ) {
            payload.filters = Object.keys(this.timelineTabFilters).length
              ? JSON.stringify(this.timelineTabFilters)
              : null;
          }
          if (show.timelineFor !== this.selectedTimelineFor.value) {
            payload.show = {
              timelineFor: this.selectedTimelineFor.value,
            };
          }
          // Check if there is any change in the payload, if yes then only call the API
          if (Object.keys(payload).length === 0) return;

          const { status } = await this.$store.dispatch(
            'planningV2/setUserCustomization',
            payload
          );

          if (status === 200) {
            this.$store.commit('auth/setUserCustomization', {
              ...this.userCustomization,
              dispatchCalendar: {
                ...(this.userCustomization.dispatchCalendar || {}),
                filters: this.timelineTabFilters,
                show: {
                  timelineFor: this.selectedTimelineFor.value,
                },
              },
            });
          }
        }

        const { truckTimeline, trailerTimeline, driverTimeline } =
          (await this.getTimelineData()) || {};
        let formattedTimelineData = [];

        const timeLineFor = this.selectedTimelineFor.value || null;
        switch (timeLineFor) {
          case 'truck':
            formattedTimelineData = this.formatTimelineData(
              truckTimeline,
              'truck'
            );
            break;
          case 'trailer':
            formattedTimelineData = this.formatTimelineData(
              trailerTimeline,
              'trailer'
            );
            break;
          case 'driver':
            formattedTimelineData = this.formatTimelineData(
              driverTimeline,
              'driver'
            );
            break;
          default:
            formattedTimelineData = this.formatTimelineData(
              truckTimeline,
              'truck'
            );
            break;
        }
        this.timelineData = formattedTimelineData || [];
        this.setHeightOfSideBar();
      } catch (error) {
        console.log(error);
      } finally {
        this.isApiActive = false;
      }
    },
    refreshPageContent(updateUserCustomization = false) {
      this.setTimeLineData(updateUserCustomization);
    },
    showBarDetails(data) {
      if (this.showBarsInSingleRow && Array.isArray(data)) {
        // If showBarsInSingleRow is true, then show all bars in single row, data will be array of records
        const schedules = data.filter((x) => x.isSchedule);
        this.$emit('updateSchedule', schedules); // Code to open schedule form dialog with scroll of schedules
      } else {
        // If showBarsInSingleRow is false, then show each bar in different row, data will be single record
        const { isSchedule, loadId, isRepeating } = data || {};
        if (isSchedule) {
          this.$emit('updateSchedule', data);
        } else if (!isRepeating && loadId) this.$emit('updateLoad', loadId);
      }
    },
    openDriverTimeOffCalender(data) {
      const { timeOffCalendars } = this.returnData || {};
      if (!timeOffCalendars) return;
      const { start, end, id, userId } = data || {};
      if (start && end && id) {
        this.$refs.driverTimeOffCalender.openTimeOffForm({
          start,
          end,
          id,
          userId,
        });
        return;
      } else {
        // If no start and end date is passed, then open the calender list pop up
        this.$refs.driverTimeOffCalender.open(data);
      }
    },
    generateHeightOfGanttChart() {
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
      /* console.log('heightRes', heightRes); */
      return heightRes;
    },
    setHeightOfSideBar() {
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
    openScheduleForm(data) {
      this.$emit('updateSchedule', data);
    },
    updateTimelineFor(selection) {
      this.selectedTimelineFor = selection;
      this.refreshPageContent(true);
    },
    async initializeDataForFilters() {
      // checking if already tags are available or not.
      if (this.allTags.length) {
        this.allTagsList = this.allTags;
      } else {
        this.getAllTags();
      }
      this.getAllDispatchers();
    },
    async getAllTags() {
      try {
        const {
          payload: { data: allTags },
        } = await this.$store.dispatch('tag/getAllTags');
        if (allTags) {
          this.allTagsList = allTags;
        }
      } catch (e) {
        console.error(e);
      }
    },
    async getAllDispatchers() {
      try {
        const {
          payload: { data: allDispatchers },
        } = await this.$store.dispatch('company-user/getAllDispatchers');
        if (allDispatchers) {
          this.allDispatchers = allDispatchers;
        }
      } catch (e) {
        console.error(e);
      }
    },
    initUserCustomization() {
      if (this.isDispatchRoute) {
        const { show, filters } = this.currentUserCustomizations;

        this.timelineTabFilters = filters || {};
        this.selectedTimelineFor = show.timelineFor
          ? this.timelineForOptions.find((x) => x.value === show.timelineFor)
          : this.timelineForOptions[0];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.planning-timeline {
  padding-top: 5px;
}
.truck-info {
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
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
</style>
