<template>
  <div class="gantt__layout">
    <!--Head assembly: optional configuration-->
    <chart-header
      v-show="showHeader"
      :header-data="headerData"
      :showSideBar="showSideBar"
    />
    <!--Gantt chart area component: required-->
    <div id="gantt__area" class="gantt__area" :style="areaStyleObj">
      <template v-if="chartData.length">
        <!--Gantt chart Side data component-->
        <chart-side
          v-slot="{ item }"
          :gantt-data="chartData"
          :first-line-stick="firstLineStick"
          :sideBarHeights="sideBarHeights"
        >
          <slot name="side-box" :item="item" />
        </chart-side>
        <!--Gantt Chart Center Data Component-->
        <chart-container
          id="gantt-container"
          :style="{ overflowX: isHorizontalScrollView ? 'auto' : 'hidden' }"
          v-slot="{ item }"
          :spend-time="spendTime"
          :gantt-data="chartData"
          :first-line-stick="firstLineStick"
          @onClickBar="$emit('onClickBar', $event)"
          @onClickLine="$emit('onClickLine', $event)"
        >
          <slot name="container-box" :item="item" />
        </chart-container>
      </template>
      <!-- No data area-->
      <template v-else>
        <div class="gantt__area--error">No data</div>
      </template>
    </div>
  </div>
</template>

<script>
import ChartHeader from './components/chart-header';
import ChartContainer from './components/chart-container';
import ChartSide from './components/chart-side';
import {
  differenceInDays,
  handleDaySet,
  handleHourSet,
} from './unit/GanttUnit';
import isBetween from 'dayjs/plugin/isBetween';
import dayjs from 'dayjs';
dayjs.extend(isBetween);
export default {
  name: 'GanttChart',
  components: { ChartHeader, ChartSide, ChartContainer },
  provide() {
    return {
      timeSectionDayJs: this.timeSectionDayJs,
      baseBlock: this.baseBlock,
      renderPropertyName: this.renderPropertyName,
      dateHourModeDayCount: this.dateHourModeDayCount,
      headerBottomBar: this.headerBottomBar,
      singleRow: this.singleRow,
      baseHour: () => this.baseHour,
      isHorizontalScrollView: () => this.isHorizontalScrollView,
    };
  },
  props: {
    // Gantt chart header configuration
    showHeader: {
      // Gantt chart header display
      type: Boolean,
      default: true,
    },
    showSideBar: {
      // Gantt chart side bar display
      type: Boolean,
      default: true,
    },
    headerData: {
      // Gantt chart header customization
      type: Array,
      default: () => [],
    },
    timeSection: {
      // Gantt chart time interval
      type: Array,
      required: true,
    },
    // Gantt chart content configuration
    firstLineStick: {
      // first line sticky
      type: Boolean,
      default: false,
    },
    chartMaxHeight: {
      // Gantt chart content maximum height
      type: Number,
      default: 500,
    },
    ganttCurrentTime: {
      // Gantt chart timeline time
      type: Number,
      default: 0,
    },
    ganttData: {
      // Gantt chart data
      type: Array,
      required: true,
    },
    // additional configuration
    floatViewRenderFn: {
      // renderTemplate
      type: Function,
      default: () => {
        return (info) => info;
      },
    },
    renderPropertyName: {
      type: Array,
      required: false,
    },
    sideBarHeights: {
      type: Array,
      required: false,
    },
    barHeight: {
      type: String,
      default: '26px',
      required: false,
    },
    rowHeight: {
      type: String,
      default: '46px',
      required: false,
    },
    blockMinHeight: {
      type: String,
      default: '75px',
      required: false,
    },
    dateHourModeDayCount: {
      type: Number,
      default: 3,
      required: false,
    },
    singleRow: {
      type: Boolean,
      required: false,
      default: false,
    },
    showSideBar: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      baseHourVal: 25, // base hour
      baseBlock: 80, // base height
      floatState: true,
    };
  },
  computed: {
    areaStyleObj() {
      // Adaptive height limit
      const realHeight = this.ganttData.length * this.baseBlock;
      // let styleObj = { height: `${realHeight > this.chartMaxHeight ? this.chartMaxHeight : realHeight}px` }
      let styleObj = { height: `${this.chartMaxHeight}px` };
      styleObj.gridTemplateColumns = this.showSideBar ? '200px 1fr' : '0px 1fr';
      return styleObj;
    },
    timeSectionDayJs() {
      // The incoming Gantt chart time interval is converted into a DayJs interval
      const [start, end] = this.timeSection.map((item) => dayjs(item));
      if (start.isValid() && end.isValid()) {
        /** Special case */
        /** For normal mode gantt view, like in New Menu
         * we are setting a default interval of 30 days to the chart
         * to ensure its not too small to be visible and is not ugly in rendering
         */
        const chartIntervalDuration = differenceInDays(start, end);
        const dateHourModeDayCount = this.dateHourModeDayCount; // Will be 0 for Gantt charts to be in normal mode eg(GanttView)
        if (chartIntervalDuration < 30 && dateHourModeDayCount == 0) {
          return {
            start: dayjs(start.subtract(6, 'day')),
            end: dayjs(start.add(30, 'day')),
          };
        }
        /** Special case ends here */
        return { start: dayjs(start), end: dayjs(end) };
      } else {
        console.log(`Incoming time interval ${this.timeSection} is not valid`);
        return {};
      }
    },
    spendTime() {
      // Calculate the difference between the current time and the start time of the Gantt chart
      if (!this.ganttCurrentTime) return 0;
      let time;
      const { start, end } = this.timeSectionDayJs || {};
      if (dayjs(this.ganttCurrentTime).isBetween(start, end, null, '[]')) {
        time = dayjs(dayjs(this.ganttCurrentTime)).diff(start, 'second'); // Delta time
      } else {
        console.error('Wrong time');
        time = 0;
      }
      return time;
    },
    chartData() {
      const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const ganttData = JSON.parse(JSON.stringify(this.ganttData));
      const dataLength = (ganttData || []).length;
      if (dataLength > 10) {
        return ganttData;
      }
      return [...ganttData, ...dummyData.slice(0, 10 - dataLength)];
    },
    chartPropertySync() {
      return {
        barHeight: this.barHeight,
        rowHeight: this.rowHeight,
        blockMinHeight: this.blockMinHeight,
      };
    },
    differenceInDaysOfChartDuration() {
      const { start, end } = this.timeSectionDayJs;
      return differenceInDays(start, end);
    },

    differenceInDays() {
      const { start, end } = this.timeSectionDayJs;
      return differenceInDays(start, end);
    },
    headerBottomBar() {
      if (this.differenceInDays < this.dateHourModeDayCount) {
        return this.hour;
      }
      return this.day;
    },
    hour() {
      const hours = this.day.length * 24;
      return handleHourSet(hours);
    },
    day() {
      const { start, end } = this.timeSectionDayJs;
      if (start && end) return handleDaySet(start, end);
      return [];
    },
    baseHour() {
      return this.baseHourVal;
    },
    isHorizontalScrollView() {
      return this.differenceInDays > 60;
    },
  },
  watch: {
    chartPropertySync: {
      handler() {
        this.initializeChartProperties();
      },
      deep: true,
    },
  },
  mounted() {
    // scroll sync
    this.scrollSync();
    this.initializeChartProperties();
  },
  methods: {
    initializeChartProperties() {
      this.bindPropValues();
      this.setChartWidth();
    },
    bindPropValues() {
      const root = document.documentElement;
      root.style.setProperty('--gantt-bar-height', this.barHeight || '26px'); // bar height
      root.style.setProperty('--gantt-row-height', this.rowHeight || '46px'); // row height
      root.style.setProperty(
        '--gantt-block-min-height',
        this.blockMinHeight || '75px'
      ); // row height
    },
    setChartWidth() {
      const root = document.documentElement;
      const ganttArea = (document || {}).getElementById('gantt__area');
      if (!ganttArea) return;
      let contentWidth = (ganttArea || {}).clientWidth - 15; // 15px is to offset scrollbar overlay
      contentWidth = this.showSideBar ? contentWidth - 250 : contentWidth;
      const hourOffSet =
        this.timeSectionDayJs.end.diff(this.timeSectionDayJs.start, 'hour') +
        24;
      const dayOffSet =
        this.timeSectionDayJs.end.diff(this.timeSectionDayJs.start, 'day') + 1;
      const divideFactor =
        this.differenceInDays < this.dateHourModeDayCount
          ? hourOffSet
          : dayOffSet;
      this.baseHourVal = this.isHorizontalScrollView
        ? this.baseHourVal
        : contentWidth / divideFactor;
      root.style.setProperty(
        '--gantt-chart-base-hour',
        `${this.baseHourVal}px`
      );
      root.style.setProperty(
        '--gantt-chart-container-width',
        `${contentWidth}px`
      );
    },
    scrollSync() {
      // scroll sync
      const header = document.querySelector(
        '.gantt__layout .header__container'
      );
      const side = document.querySelector('.gantt__layout .side');
      const container = document.querySelector('.gantt__layout .container');
      const area = document.querySelector('.gantt__layout');
      let flag = '';
      area.addEventListener(
        'mouseenter',
        (event) => {
          const className = event.target.className;
          if (className.includes('container')) flag = 'container';
          if (className.includes('side')) flag = 'side';
        },
        true
      );
      area.addEventListener(
        'scroll',
        (event) => {
          if (flag === 'container' && event.target.className === 'container') {
            side.scrollTop = event.target.scrollTop;
            header.scrollLeft = event.target.scrollLeft;
          }
          if (flag === 'side') container.scrollTop = event.target.scrollTop;
        },
        true
      );
      // float
      area.addEventListener('mousemove', (event) => {
        this.floatState = event.buttons === 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// Gantt chart global layout
.gantt__layout {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.gantt__area {
  display: grid;
  grid-template-columns: 200px 1fr;
}
.gantt__area--error {
  font-size: 3em;
  text-align: center;
}
#gantt-container {
  width: var(--gantt-chart-container-width);
  min-width: var(--gantt-chart-container-width);
}
</style>
