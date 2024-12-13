<template>
  <div
    class="block"
    :class="[singleRow ? 'flex' : '']"
    :style="chartBlockStyles"
  >
    <div class="gantt-chart-bg-layer" v-if="!isHorizontalScrollView()">
      <template v-for="(item, index) in headerBottomBar">
        <div class="chart-bg-block" :key="'chart-bg-col' + '-' + index"></div>
      </template>
    </div>
    <div
      class="single-row"
      v-if="singleRow"
      style="display: flex; flex-direction: column"
    >
      <div
        class="single-row-bar-holder flex flex-row mt-3"
        v-for="(chartRow, idx) in chatDataOccupancyMap"
        :key="`single_row_${idx}`"
      >
        <template v-for="(item, index) in [...chartRow]">
          <template v-if="item.isRepeating">
            <div
              v-for="(repeatedItem, ix) in generateRepeatingRecord(item)"
              :key="`${index}-${ix}`"
            >
              <div
                :id="'isRepeating' + '-' + ix"
                :key="'isRepeating' + '-' + ix"
                :style="occupy(repeatedItem, false)"
                class="bar gantt-chat-bar"
                @click="onClickBar(blockData)"
              >
                <slot :repeatedItem="repeatedItem" />
              </div>
            </div>
          </template>
          <div
            v-else
            :id="item.id"
            :key="'bar' + '-' + index"
            :style="occupy(item, true)"
            class="bar gantt-chat-bar"
            @click="onClickBar(isPlanningPage ? blockData : item)"
          >
            <slot :item="item" />
          </div>
        </template>
      </div>
      <div class="single-row-line-holder mt-3">
        <template
          v-for="(item, index) in [
            ...blockData.filter((x) => x.barType === 'line'),
          ]"
        >
          <div class="char-line-block" v-if="item.barType === 'line'">
            <div class="vx-row alignItemCenter">
              <div
                :id="'line' + '-' + index"
                :key="'line' + '-' + index"
                :style="{
                  width: '100%',
                  height: '3px',
                  backgroundColor: item.color || '#B4A7D6',
                }"
                class="bar gantt-chat-bar"
                @click="onClickLine(item)"
              >
                <div
                  v-for="(lineItem, ix) in item.timeOffCalendars || []"
                  :key="'line-off' + '-' + ix"
                >
                  <div
                    :id="'line-off' + '-' + ix"
                    :style="occupy(lineItem, true)"
                    style="height: 3px; position: absolute"
                    @click.stop.prevent="onClickLine({ ...lineItem, ...item })"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div
      v-else
      class="vx-row block-row"
      v-for="(item, index) in [...blockData]"
      :key="index"
    >
      <div class="char-bar-block">
        <template v-if="item.isRepeating">
          <div
            v-for="(repeatedItem, ix) in generateRepeatingRecord(item)"
            :key="ix"
          >
            <div
              :id="'isRepeating' + '-' + ix"
              :key="'isRepeating' + '-' + ix"
              :style="occupy(repeatedItem, false)"
              class="bar gantt-chat-bar"
              @click="onClickBar(repeatedItem)"
            >
              <slot :repeatedItem="repeatedItem" />
            </div>
          </div>
        </template>
        <template v-else-if="!item.barType || item.barType === 'bar'">
          <div
            :id="item.id"
            :key="index"
            :style="occupy(item, true)"
            class="bar gantt-chat-bar"
            @click="onClickBar(item)"
          >
            <slot :item="item" />
          </div>
        </template>
      </div>
      <div class="char-line-block" v-if="item.barType === 'line'">
        <div class="vx-row alignItemCenter">
          <div
            :id="'line' + '-' + index"
            :key="index"
            :style="{
              width: '100%',
              height: '3px',
              backgroundColor: item.color || '#B4A7D6',
            }"
            class="bar gantt-chat-bar"
            @click="onClickLine(item)"
          >
            <div
              v-for="(lineItem, ix) in item.timeOffCalendars || []"
              :key="ix"
            >
              <div
                :id="'line-off' + '-' + ix"
                :key="'line-off' + '-' + ix"
                :style="occupy(lineItem, true)"
                style="height: 3px; position: absolute"
                @click.stop.prevent="onClickLine({ ...lineItem, ...item })"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  handleWeekSet,
  differenceInDays,
  differenceInHours,
} from '../unit/GanttUnit';
import dayjs from 'dayjs';
export default {
  name: 'ChartBlock',
  inject: [
    'baseHour',
    'timeSectionDayJs',
    'renderPropertyName',
    'dateHourModeDayCount',
    'headerBottomBar',
    'singleRow',
    'isHorizontalScrollView',
  ],
  props: {
    block: {
      type: Object | Number,
    },
    spendTime: {
      type: Number,
      required: true,
    },
  },
  computed: {
    differenceInDaysOfChartDuration() {
      const { start, end } = this.timeSectionDayJs;
      return differenceInDays(start, end);
    },
    timeSelectionData() {
      const { start, end } = this.timeSectionDayJs;
      return { start, end };
      // const { startDate, endDate } = handleWeekSet(start, end);
      // return {
      //   start: startDate,
      //   end: endDate,
      // }
    },
    blockData() {
      if ((this.renderPropertyName || []).length) {
        let renderData = [];
        this.renderPropertyName.forEach((element) => {
          renderData = [...renderData, ...(this.block[element] || [])];
        });
        return renderData;
      }
      return [this.block];
    },
    chatDataOccupancyMap() {
      const isOverLapOfTwoDateRanges = (
        startDateOne,
        endDateOne,
        statDateTwo,
        endDateTwo
      ) => {
        const range1Start = new Date(startDateOne);
        const range1End = new Date(endDateOne);

        const range2Start = new Date(statDateTwo);
        const range2End = new Date(endDateTwo);

        if (range1Start < range2End && range2Start < range1End) {
          return true; // overlapping date ranges
        }
        return false;
      };
      const blockData = this.blockData;
      const chatDataOccupancyMap = [];
      blockData.forEach((block) => {
        if (chatDataOccupancyMap.length) {
          let isBlockAssigned = false;
          for (let index = 0; index < chatDataOccupancyMap.length; index++) {
            const rowDateRanges = chatDataOccupancyMap[index];
            const isNonOverLapping = rowDateRanges.every((dateRange) => {
              const { startDate, endDate } = dateRange;
              const { startDate: currStDate, endDate: cuuEndDate } = block;
              return !isOverLapOfTwoDateRanges(
                startDate,
                endDate,
                currStDate,
                cuuEndDate
              );
            });
            if (isNonOverLapping) {
              chatDataOccupancyMap[index].push(block);
              isBlockAssigned = true;
              break;
            }
          }
          if (!isBlockAssigned) {
            chatDataOccupancyMap.push([block]);
          }
        } else {
          // Initial empty state
          chatDataOccupancyMap.push([block]);
        }
      });
      return chatDataOccupancyMap;
    },
    chartBlockStyles() {
      if (this.isHorizontalScrollView()) {
        // Horizontal scroll view for large date range
        return {
          height: '81px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          overflow: 'hidden',
          display: 'flex !important',
          backgroundImage: 'url(' + this.imageUrl + ')',
          // borderBottom: '1px solid #e9ebf0';
        };
      }
      return {
        // Style for chart rendered to available page width
        display: 'grid !important',
        overflow: 'hidden',
        borderBottom: '1px solid #e9ebf0',
        minHeight: 'var(--gantt-block-min-height)',
        position: 'relative',
      };
    },
    isPlanningPage() {
      return this.$route.name === 'planning';
    },
  },
  data() {
    return {
      imageUrl: require('../assets/gantt-bg.png'),
    };
  },
  methods: {
    occupy(bar, forceTimeBinding = false) {
      if (typeof bar === 'number') return {};
      let { endDate, startDate, end, start, color, isRepeating } = bar || {};
      end = endDate || end;
      start = startDate || start;
      if (!end || !start) return {};
      const countDifferenceInDays = differenceInDays(start, end);
      const countDifferenceInHours = differenceInHours(
        start,
        end,
        forceTimeBinding
      );

      /** When is a repeating rendering +1 to the day count is needed for the correct */
      /* When not repeating but is a day based rendering ( || 1) to ensure a Dot is shown when start and end date are the same */
      const during =
        this.differenceInDaysOfChartDuration < this.dateHourModeDayCount
          ? countDifferenceInHours
          : isRepeating
          ? countDifferenceInDays + 1
          : countDifferenceInDays || 1;

      // Difference between chart render start date and block enter start data/time
      let spendTime;
      if (this.differenceInDaysOfChartDuration < this.dateHourModeDayCount) {
        const spendHours = differenceInHours(
          this.timeSelectionData.start,
          start,
          true
        );
        spendTime = spendHours;
      } else {
        const spendDays = differenceInDays(this.timeSelectionData.start, start);
        spendTime = spendDays;
      }

      color = color || '#A6DE96';
      const res = {
        width: this.baseHour() * during + 'px',
        left: spendTime * this.baseHour() + 'px',
        backgroundColor: color,
      };
      if (color) {
        res.backgroundColor = color;
      }
      if (isRepeating || this.singleRow) {
        res.position = 'absolute';
      }
      return res;
    },
    onClickBar(bar) {
      this.$emit('onClickBar', bar);
    },
    onClickLine(data) {
      this.$emit('onClickLine', data);
    },
    generateBarColor() {
      const colors = [
        '#F6E6C2',
        '#B5F1CC',
        '#A7727D',
        '#B99B6B',
        '#F2CD5C',
        '#A084DC',
        '#5B8FB9',
        '#8EA7E9',
        '#E4C988',
        '#DFD3C3',
      ];
      const randomIndex = Math.floor(Math.random() * 10) + 1;
      return colors[randomIndex];
    },
    generateRepeatingRecord(item) {
      const { isRepeating, weeklyDays } = item || {};
      if (!isRepeating) return [];
      const { start, end } = this.timeSelectionData || {};
      let startDay = dayjs(start);
      let endDay = dayjs(end);
      if (item.endDate) {
        endDay = dayjs(item.endDate);
      }
      const recordResponse = [];
      let tempHolder = null;
      while (startDay.isSameOrBefore(endDay, 'day')) {
        const dayOfWeek = dayjs(startDay).day();
        if (weeklyDays.includes(dayOfWeek)) {
          if (tempHolder) {
            tempHolder.endDate = startDay.format('MM/DD/YYYY');
          } else {
            tempHolder = {
              ...item,
              startDate: startDay.format('MM/DD/YYYY'),
              endDate: startDay.format('MM/DD/YYYY'),
            };
          }
        } else {
          if (tempHolder) {
            recordResponse.push(tempHolder);
            tempHolder = null;
          }
        }
        startDay = startDay.add(1, 'day');
      }
      if (tempHolder) {
        recordResponse.push(tempHolder);
      }
      return recordResponse;
    },
  },
};
</script>

<style scoped lang="scss">
.vx-row {
  margin: 0 !important;
  min-height: var(--gantt-row-height);
}

.bar {
  color: #303133;
  position: relative;
  height: var(--gantt-bar-height);
  user-select: none;
  border: none;
  border-radius: 15px;
  box-shadow: none;
  cursor: pointer;
  background-color: rgb(166, 222, 150);
  display: flex;
  justify-content: center;
  width: 0%;
  z-index: 2;
}
.chart-line-label {
  position: absolute;
  left: -250px;
  min-width: 250px;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  z-index: 2;
  .chart-line-label-text {
    font-size: 12px;
    color: #303133;
    line-height: var(--gantt-bar-height);
  }
}
.alignItemCenter {
  align-items: center;
}
.block-row {
  flex-direction: column;
  justify-content: space-between;
  .char-bar-block,
  .char-line-block {
    width: 100%;
  }
  .vx-row {
    min-height: var(--gantt-row-height);
    align-items: center;
  }
}

.gantt-chart-bg-layer {
  display: flex;
  position: absolute;
  // height: -webkit-fill-available;
  align-items: stretch;
  height: 100%;
  width: 100%;

  &:last-child {
    border-right: 1px solid #e9ebf0;
  }
  .chart-bg-block {
    border-left: 1px solid #e9ebf0;
    min-width: var(--gantt-chart-base-hour);
    min-height: var(--gantt-chart-base-hour);
  }
}
.single-row-bar-holder {
  position: relative;
  min-height: 20px;
}
</style>
