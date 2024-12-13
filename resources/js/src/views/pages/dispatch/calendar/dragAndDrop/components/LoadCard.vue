<template>
  <div
    class="load-parent w-full relative"
    :draggable="isDraggable"
    @dragend.prevent="onDragEnd"
    @dragover.prevent="onDragOver"
  >
    <popper
      trigger="hover"
      append-to-body
      :visible-arrow="false"
      :options="{
        placement: 'top',
        modifiers: { offset: { offset: '0,10px' }, flip: true },
      }"
    >
      <div class="popper" v-show="isTimeLineCard && !isDraggingOver">
        <div class="load-on-hover">
          <div class="load-content">
            <div class="header">
              <h6 class="load-number">Load {{ load.number }}</h6>
              <div class="badge" :class="badgeClass">
                {{ formattedLoadStatus[load.status] }}
              </div>
            </div>
            <div class="text-left p-5">
              <p class="mb-3 value">
                {{
                  load.segmentDrivers
                    .filter((ld) => ld.truck)
                    .map((ld) => ld.truck.number)
                    .join(', ')
                }}
              </p>
              <h6 class="mb-2 label">Stops</h6>
              <div
                v-for="(stop, index) in load.stops"
                :key="`${stop.type}-${stop.id}-${index}`"
                class="mb-3"
                :class="[...[getStopClass(stop.type)]]"
              >
                <label :class="[...[`${getStopClass(stop.type)}-label`]]">{{
                  getStopType(stop.type)
                }}</label>
                <div class="addresses mt-2">
                  <address class="address mb-3 block">
                    {{ formatStopAddress(stop) }}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="load w-full"
        :class="{
          'bg-white mb-3': isDraggable,
          'show-bg border-none': isTimeLineCard,
        }"
        slot="reference"
      >
        <div class="load-content p-3" :class="singleDayLoad">
          <div class="flex justify-between load-title">
            <h6 class="load-number">{{ load.number }}</h6>
            <div class="badge" :class="badgeClass">
              {{ formattedLoadStatus[load.status] }}
            </div>
          </div>
          <p class="load-customer">{{ load.customerName }}</p>
          <div class="locations flex gap-3 items-center">
            <span>{{ load.startCity }}, {{ load.startState }} </span>
            <span class="breaker" v-if="!singleDayLoad">
              <feather-icon icon="TruckIcon" class="truck-icon" />
            </span>
            <span>{{ load.endCity }}, {{ load.endState }} </span>
          </div>
        </div>
      </div>
    </popper>
  </div>
</template>

<script>
import config from '@/config/constants';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import { differenceInDays } from '@/components/ganttChart/unit/GanttUnit';

export default {
  props: {
    load: {
      type: Object,
      default: () => {},
    },
    isDraggable: {
      type: Boolean,
      default: () => false,
    },
    isTimeLineCard: {
      type: Boolean,
      default: () => true,
    },
  },
  inject: ['timeSectionDayJs'],
  components: {
    Popper,
  },
  mounted() {
    // console.log(this.load, 'load');
  },
  data() {
    return {
      formattedLoadStatus: config.status.nodeLoadToLabel,
      isDraggingOver: false,
    };
  },
  computed: {
    badgeClass() {
      if (this.load.status == 'open') {
        return 'warning';
      } else if (this.load.status == 'inTransit') {
        return 'primary';
      } else if (this.load.status == 'assign') {
        return 'info';
      } else {
        return 'success';
      }
    },
    getStopClass() {
      const stopClassDict = {
        shipper: 'pickup',
        leg: 'leg',
        multiPurposeStop: 'terminal',
        receiver: 'delivered',
      };

      return (type) => stopClassDict[type] || '';
    },
    getStopType() {
      return (stop) => {
        return (
          {
            shipper: 'Pickup',
            leg: 'Leg',
            multiPurposeStop: 'Terminal',
            receiver: 'Delivery',
          }[stop] || ''
        );
      };
    },
    formatStopAddress() {
      return (stop) => {
        return `${stop.city}, ${
          stop.state || ''
        } (${this.dateTimeStringGenerator(stop.date, stop.time)})`;
      };
    },
    singleDayLoad() {
      if (
        this.isTimeLineCard &&
        differenceInDays(this.load.startDate, this.load.endDate) < 1
      ) {
        return 'single-day-load';
      }
      return '';
    },
  },
  methods: {
    onDragOver() {
      this.isDraggingOver = true;
    },
    onDragEnd() {
      this.isDraggingOver = false;
      this.$emit('onLoadCardDragEnd', this.load);
    },
    dateTimeStringGenerator(date, time) {
      if (date || time) {
        const datePart = date ? this.$dayjs(date).format('YYYY-MM-DD') : '';
        const combinedDateTime = time ? `${datePart} ${time}` : datePart;
        const dateTime = this.$dayjs(
          combinedDateTime,
          `YYYY-MM-DD${time ? ' HH:mm' : ''}`
        );
        const formattedDateTime = dateTime.isValid()
          ? dateTime.format(`MM/DD/YY${time ? ' hh:mm A' : ''}`)
          : '';
        return formattedDateTime;
      }
    },
  },
};
</script>

<style scoped lang="scss">
$light-blue: rgba(242, 248, 255, 1);
.popper {
  box-shadow: none;
  background-color: #fff;
  border: none;
  max-width: 250px;
}
.load,
.load-on-hover {
  border: 1px solid #6868685e;
  box-shadow: 0px 4px 4px 0px #0000001a;
  border-radius: 4px;
  cursor: pointer;
  &.load-on-hover {
    min-width: 250px;
    background-color: #fff;
    border: none;
  }
  *:not(.load-number) {
    font-size: 0.85rem;
  }
  .load-number {
    color: #1061c9;
  }
  .badge {
    padding: 2px 10px 2px 10px;
    border-radius: 2px;
    font-weight: 500;
    white-space: nowrap;
    margin-left: 8px;
    &.warning {
      color: #fdab3d;
      background-color: rgba(255, 238, 216, 1);
    }
    &.success {
      color: #34d326;
      background-color: rgba(52, 211, 38, 0.2);
    }
    &.primary {
      color: #1877f2;
      background-color: rgba(24, 119, 242, 0.2);
    }
    &.info {
      color: #b412a4;
      background-color: rgba(180, 18, 164, 0.2);
    }
  }
  .locations {
    span {
      white-space: nowrap;
    }
    .breaker {
      width: 100%;
      display: flex;
      align-items: center;
      .truck-icon {
        width: 15px;
      }
      &::before {
        content: '';
        width: 100%;
        margin-right: 3px;
        border-top: 1px solid #686868;
      }
    }
  }
  &.show-bg {
    background-color: $light-blue;
    overflow: hidden;
    border-left: 5px solid #1877f2 !important;
  }
  .load-content {
    min-width: 220px;
    .header {
      background-color: $light-blue;
      padding: 15px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .label {
      font-size: 12px;
      font-weight: 400;
    }
    .value {
      font-size: 14px;
      font-weight: 500;
    }
    .pickup-label,
    .delivered-label,
    .leg-label,
    .terminal-label {
      border-radius: 3px;
      font-size: 10px;
      padding: 0.2rem 0.8rem;
    }
    .pickup-label {
      background-color: #183bff;
      color: #f0f0f0;
    }
    .delivered-label {
      background-color: #00b515;
      color: #f6f6f6;
    }
    .leg-label {
      background-color: #cc0000;
      color: #f6f6f6;
    }
    .terminal-label {
      background-color: #20093f;
      color: #e6e6e6;
    }
    .pickup,
    .delivered,
    .leg,
    .terminal {
      padding-left: 6px;
      border-left-width: 1px;
      border-left-style: solid;
      &.pickup {
        border-left-color: #183bff;
      }
      &.delivered {
        border-left-color: #00b515;
      }
      &.leg {
        border-left-color: #cc0000;
      }
      &.terminal {
        border-left-color: #20093f;
      }
    }
    address {
      font-size: 10px;
      font-style: normal;
    }
  }
  .single-day-load {
    .load-title {
      font-size: 0.5rem !important;
      justify-content: start !important;
      .badge {
        padding: 0;
        font-size: 0.5rem !important;
        margin-left: 0.1875rem;
      }
    }
    .breaker {
      display: block;
    }
    .load-number {
      font-size: 0.75rem !important;
    }
    .load-customer {
      font-size: 0.75rem !important;
    }
    .locations {
      flex-direction: column;
      font-size: 0.5rem;
      gap: 3px !important;
      align-items: flex-start !important;
      .breaker {
        display: block;
      }
      span {
        font-size: 0.75rem !important;
      }
    }
  }
}
</style>
