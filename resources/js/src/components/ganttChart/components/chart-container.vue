<template>
  <div class="container">
    <!--timeline-->
    <time-line :spend-time="spendTime" v-if="spendTime" />
    <!--gray mask-->
    <!-- <time-mask :spend-time="spendTime" /> -->
    <div :style="blockStyle" id="gantt-chart-container">
      <template v-for="(block, index) in ganttData">
        <chart-block
          :key="index"
          v-slot="{ item }"
          :spend-time="spendTime"
          :class="{ sticky: firstLineStick && index === 0 }"
          :style="blockSelected(index)"
          :block="block"
          @click.native="handleHighlight(index)"
          @onClickBar="$emit('onClickBar', $event)"
          @onClickLine="$emit('onClickLine', $event)"
        >
          <slot :item="item" />
        </chart-block>
      </template>
    </div>
  </div>
</template>

<script>
import ChartBlock from './chart-block';
import TimeLine from './time-line';
import TimeMask from './time-mask';
import {
  handleDaySet,
  differenceInDays,
  handleHourSet,
} from '../unit/GanttUnit';
export default {
  name: 'ChartContainer',
  components: { TimeMask, TimeLine, ChartBlock },
  inject: [
    'baseHour',
    'timeSectionDayJs',
    'dateHourModeDayCount',
    'isHorizontalScrollView',
  ],
  props: {
    ganttData: {
      type: Array,
      default: () => [],
    },
    spendTime: {
      type: Number,
      required: true,
      default: 0,
    },
    firstLineStick: {
      // first line sticky
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeIndex: -1,
    };
  },
  computed: {
    differenceInDays() {
      const { start, end } = this.timeSectionDayJs;
      return differenceInDays(start, end);
    },
    blockStyle() {
      let baseLength;
      if (this.differenceInDays < this.dateHourModeDayCount) {
        baseLength = this.hours.length;
      } else {
        baseLength = this.days.length;
      }
      if (this.isHorizontalScrollView()) {
        return {
          width: `${this.baseHour() * baseLength}px`,
        };
      }
      return {};
    },
    days() {
      const { start, end } = this.timeSectionDayJs;
      if (start && end) return handleDaySet(start, end);
      return [];
    },
    hours() {
      const hours = this.days.length * 24;
      return handleHourSet(hours) || [];
    },
  },
  methods: {
    handleHighlight(index) {
      this.activeIndex = index;
    },
    blockSelected(index) {
      return index === this.activeIndex
        ? { backgroundColor: `rgba(0,0,0,0.1)` }
        : {};
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  overflow: overlay;
  padding-left: 0;
  margin-left: 0;
  max-width: fit-content;
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
#gantt-chart-container {
  border-right: 1px solid #e9ebf0;
  width: var(--gantt-chart-container-width);
  min-width: var(--gantt-chart-container-width);
}
</style>
