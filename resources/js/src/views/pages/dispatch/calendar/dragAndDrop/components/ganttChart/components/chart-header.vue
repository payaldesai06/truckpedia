<template>
  <div
    class="header"
    :style="{ 'grid-template-columns': showSideBar ? '250px 1fr' : '0px 1fr' }"
  >
    <div class="table-header border-bottom-1">
      <div
        v-for="(item, index) in headerData"
        :key="`${item.label}_${index}_header`"
        class="header-content"
      >
        <div v-if="item == 'Driver Name' && showDriversDropdown">
          <v-select
            v-model="selectedDrivers"
            :options="driverOptions"
            label="fullName"
            multiple
            style="min-width: 160px"
            placeholder="Select drivers"
            :closeOnSelect="false"
            :appendToBody="true"
            :clearable="true"
            :reduce="(option) => option.id"
            @input="handleDriverChange"
          />
        </div>
        <div v-else>{{ item }}</div>
      </div>
    </div>
    <div class="header__container">
      <div class="header__container__main" :style="headerContainerWidth">
        <div
          v-for="(item, index) in headerTopBar"
          class="header-top-bar"
          :style="headerContainerTopBarWidth(item)"
          :key="`${item.label}_${index}_header_top`"
        >
          {{ item.label || item }}
        </div>
      </div>
      <div class="header__container__sub" :style="headerContainerWidth">
        <div
          v-for="(item, index) in headerBottomBar"
          :key="`${item.label}_${index}_header_bottom`"
          class="header__container__hour"
          :class="{ 'is-weekend': item.isWeekend }"
        >
          {{ item.value || item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  handleHourSet,
  handleDaySet,
  handleWeekSet,
  differenceInDays,
} from '@/components/ganttChart/unit/GanttUnit';
export default {
  name: 'ChartHeader',
  inject: [
    'baseHour',
    'baseBlock',
    'timeSectionDayJs',
    'dateHourModeDayCount',
    'allDrivers',
  ],
  props: {
    headerData: {
      type: Array,
      require: true,
      default: () => ['date', 'time'],
    },
    showSideBar: {
      type: Boolean,
      default: true,
    },
    showDriversDropdown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedDrivers: [],
    };
  },
  computed: {
    driverOptions() {
      return this.allDrivers() || [];
    },
    differenceInDays() {
      const { start, end } = this.timeSectionDayJs;
      return differenceInDays(start, end);
    },
    headerTopBar() {
      if (this.differenceInDays < this.dateHourModeDayCount) {
        return this.day;
      }
      return this.weeks;
    },
    headerBottomBar() {
      if (this.differenceInDays < this.dateHourModeDayCount) {
        return this.hour;
      }
      return this.day;
    },
    renderStartDate() {
      const { start, end } = this.timeSectionDayJs;
      // const { startDate: renderStartDate, endDate } = handleWeekSet(start, end);
      return start;
    },
    renderEndDate() {
      const { start, end } = this.timeSectionDayJs;
      // const { endDate: renderEndDate } = handleWeekSet(start, end);
      return end;
    },
    headerSideHeight() {
      return {
        lineHeight: `${this.baseBlock}px`,
      };
    },
    headerContainerWidth() {
      return {
        // width: `${this.baseHour() * this.day.length}px`,
        width: `25px`,
      };
    },
    hour() {
      const hours = this.day.length * 24;
      return handleHourSet(hours);
    },
    weeks() {
      const { start, end } = this.timeSectionDayJs;
      const { data } = handleWeekSet(start, end);
      return data || [];
    },
    day() {
      const start = this.renderStartDate;
      const end = this.renderEndDate;
      if (start && end) return handleDaySet(start, end);
      return [];
    },
  },
  watch: {
    baseHour: {
      handler(val) {
        this.$forceUpdate();
      },
      deep: true,
    },
  },
  methods: {
    headerContainerTopBarWidth(item) {
      if (this.differenceInDays < this.dateHourModeDayCount) {
        return {
          minWidth: `${this.baseHour() * 24}px`,
        };
      }
      if (item && item.length > 0) {
        return {
          minWidth: `${this.baseHour() * item.length}px`,
        };
      }
      return {
        minWidth: `${this.baseHour() * 7 - 2}px`,
      };
    },
    handleDriverChange(drivers) {
      this.$emit('onDriverChange', drivers || []);
    },
  },
};
</script>

<style scoped lang="scss">
$header-background-color: #fafbfc;
$header-side-background-color: #fafbfc;
$header-border-color: #e9ebf0;

.header {
  display: grid;
  grid-template-columns: 250px 1fr;
  .header__side > div {
    display: grid;
    grid-template-columns: 10px 1fr;
    &::before {
      width: 10px;
      top: 8px;
      border-radius: 7px 0 0 7px;
      content: '';
      background-color: $header-side-background-color;
      display: block;
    }
    & > div {
      width: 100%;
      text-align: center;
      background-color: $header-background-color;
      border-bottom: 1px solid $header-border-color;
      border-right: 1px solid $header-border-color;
    }
  }
  .header__container {
    background-color: $header-background-color;
    font-size: 0.8rem;
    font-weight: 500;
    .header__container__main {
      border-left: 1px solid $header-border-color;
    }
    .header__container__main > div {
      border-top: 1px solid $header-border-color;
      border-bottom: 1px solid $header-border-color;
      /* border-left: 1px solid $header-border-color; */
      border-right: 1px solid $header-border-color;
      line-height: 40px !important;
    }
    .header__container__sub {
      font-weight: 500;
      font-size: 0.8rem;
      color: #7c828d;
      line-height: 20px !important;
      border-bottom: 1px solid $header-border-color;
      border-left: 1px solid $header-border-color;
    }
    & > div {
      display: flex;
      & > div {
        text-align: center;
        flex: 1;
        vertical-align: middle;
      }
    }
    overflow: hidden;
    // scroll bar
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
$color_1: #7c828d;
$color_2: #e9ebf0;
.table-header {
  background: #fafbfc;
  border-right: 1px solid $color_2;
  border-top: 1px solid $color_2;
  border-bottom: 1px solid $color_2;
  .header-content {
    display: flex;
    justify-content: center;
    font-weight: 500;
    // font-size: 0.8rem;
    padding: 20px;
    border-left: 1px solid $color_2;
  }
}

.header__container__hour {
  border-right: 1px solid #e9ebf0;
  border-bottom: 1px solid #e9ebf0;
  /* border-left: 1px solid #e9ebf0; */
  width: var(--gantt-chart-base-hour);
  min-width: var(--gantt-chart-base-hour);
}
.is-weekend {
  background-color: var(--surface-300);
}
</style>
