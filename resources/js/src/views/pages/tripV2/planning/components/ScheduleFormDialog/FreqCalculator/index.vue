<template>
  <div class="freq-calculator">
    <div class="vx-row mt-2" style="align-items: end">
      <div :class="['vx-col', showDeleteButton && isEdit ? 'w-1/3' : 'w-1/2']">
        <div>
          <label class="text-sm opacity-75" for="frequency">
            Frequency
            <field-required-sign />
          </label>
          <v-select
            name="frequency"
            :options="frequencyOptions"
            label="label"
            :clearable="true"
            v-model="frequentType"
            class="w-full"
            :reduce="(option) => option.value"
            :disabled="isEdit"
          />
          <p class="text-danger text-sm" v-if="!frequentType && showErrors">
            Frequency is required
          </p>
        </div>
      </div>
      <div
        :class="['vx-col', showDeleteButton && isEdit ? 'w-1/2' : 'w-1/2']"
        v-show="frequentType === 'weekly'"
      >
        <div>
          <label class="text-sm opacity-75" for="quoteValidUntil">
            <span>Quote Valid Until</span>
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 4px; margin-left: 1rem"
              @click="quoteValidUntil = null"
            >
              Clear
            </vs-button>
          </label>
          <flat-pickr
            class="w-full"
            :config="{ dateFormat: 'Y-m-d' }"
            v-model="quoteValidUntil"
          />
        </div>
      </div>
      <div
        class="vx-col w-1/6 flex justify-end"
        v-if="showDeleteButton && isEdit"
      >
        <label></label>
        <vs-button
          class="px-3"
          color="danger"
          type="border"
          style="font-size: 11px"
          @click="$emit('delete')"
          v-if="isEdit"
        >
          Delete
        </vs-button>
      </div>
    </div>
    <div class="vx-row mt-2" v-if="frequentType === 'once'">
      <div class="vx-col w-full">
        <label class="text-base opacity-75 mb-2"
          >Date Range <field-required-sign />
        </label>
        <flat-pickr
          class="w-full"
          v-model="onceTimeRange"
          :config="flat_pikr_config"
        />
        <p
          class="text-danger text-sm"
          v-if="!(onceTimeRange || '').includes('to') && showErrors"
        >
          Select a valid date range
        </p>
      </div>
    </div>
    <div class="vx-row mt-2" v-if="frequentType === 'weekly'">
      <div class="vx-col w-full">
        <label class="text-base opacity-75 mb-2"
          >Days of the Week <field-required-sign />
        </label>
        <div class="day-selector">
          <vs-select
            placeholder="Select weekdays"
            multiple
            class="w-full"
            autocomplete
            data-vv-validate-on="change"
            :value="selectedDays"
            @input="onSelectedDaysChange"
          >
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in weekDays"
            />
          </vs-select>
          <p
            class="text-danger text-sm"
            v-if="(weeklySelectedDays || []).length == 0 && showErrors"
          >
            Select at-least one weekday
          </p>
        </div>
      </div>
    </div>
    <div class="mt-3 vx-row">
      <div class="vx-col w-1/3">
        <label class="text-base opacity-75 mb-2"
          >Equipment Type <field-required-sign />
        </label>
        <div class="equipment-type-selector">
          <vs-select
            multiple
            class="w-full"
            autocomplete
            data-vv-validate-on="change"
            :value="selectedEquipmentTypes"
            @input="onSelectedEquipmentTypesChange"
          >
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.title"
              v-for="(item, index) in equipmentTypeOptions"
            />
          </vs-select>
          <p
            class="text-danger text-sm"
            v-if="(equipmentTypes || []).length == 0 && showErrors"
          >
            Equipment Type is required
          </p>
        </div>
      </div>
      <div class="vx-col w-1/3">
        <label class="text-xs">
          <span> Start Time </span>
          <vs-button
            color="warning"
            type="flat"
            size="small"
            style="padding: 4px; margin-left: 1rem"
            @click="startTime = null"
          >
            Clear
          </vs-button>
        </label>
        <flat-pickr
          v-model="startTime"
          :config="configTimeFlatPickr"
          class="w-full"
        />
        <p
          class="text-danger text-sm"
          v-if="startTime === null && endTime !== null && showErrors"
        >
          Start Time is required
        </p>
      </div>
      <div class="vx-col w-1/3">
        <label class="text-xs">
          <span> End Time </span>
          <vs-button
            color="warning"
            type="flat"
            size="small"
            style="padding: 4px; margin-left: 1rem"
            @click="endTime = null"
          >
            Clear
          </vs-button>
        </label>
        <flat-pickr
          v-model="endTime"
          :config="configTimeFlatPickr"
          class="w-full"
        />
        <p
          class="text-danger text-sm"
          v-if="startTime !== null && endTime === null && showErrors"
        >
          End Time is required
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config/constants.js';

export default {
  name: 'FrequencyCalculator',
  props: {
    formData: {
      type: Object,
      default: () => ({}),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    showDeleteButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      truckIds: null,
      frequentType: null,
      onceTimeRange: null,
      weeklySelectedDays: null,
      frequencyOptions: [
        {
          label: 'Once',
          value: 'once',
        },
        {
          label: 'Weekly',
          value: 'weekly',
        },
      ],
      flat_pikr_config: {
        mode: 'range',
        defaultDate: [],
      },
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
      weekDays: [
        { text: 'Mon', value: 1 },
        { text: 'Tue', value: 2 },
        { text: 'Wed', value: 3 },
        { text: 'Thu', value: 4 },
        { text: 'Fri', value: 5 },
        { text: 'Sat', value: 6 },
        { text: 'Sun', value: 7 },
      ],
      showErrors: false,
      startTime: null,
      endTime: null,
      quoteValidUntil: null,
      equipmentTypeOptions: config.planning.equipmentTypes,
      equipmentTypes: null,
    };
  },
  computed: {
    freqData() {
      const payload = {
        frequentType: this.frequentType,
      };
      if (this.startTime) payload.startTime = this.startTime;
      if (this.endTime) payload.endTime = this.endTime;
      if (this.equipmentTypes) payload.equipmentTypes = this.equipmentTypes;
      if (this.frequentType === 'weekly') {
        payload.weeklySelectedDays = this.weeklySelectedDays.map(
          (day) => day.value
        );
        payload.quoteValidUntil = this.quoteValidUntil;
      } else if (this.frequentType === 'once') {
        const [startDate, endDate] = (this.onceTimeRange || '').split(' to ');
        payload.onceTimeRange = {
          startDate,
          endDate,
        };
      }
      return payload;
    },
    selectedDays() {
      return (this.weeklySelectedDays || []).map((day) => day.value);
    },
    selectedEquipmentTypes() {
      return this.equipmentTypes || [];
    },
  },
  watch: {
    'formData.frequentType': {
      handler() {
        this.frequentType = this.formData.frequentType;
      },
      immediate: true,
    },
    'formData.onceTimeRange': {
      handler() {
        this.onceTimeRange = this.formData.onceTimeRange;
      },
      immediate: true,
    },
    'formData.weeklySelectedDays': {
      handler() {
        this.weeklySelectedDays = (this.formData.weeklySelectedDays || []).map(
          (day) => {
            return this.weekDays.find((weekDay) => weekDay.value === day);
          }
        );
      },
      immediate: true,
    },
    'formData.startTime': {
      handler(val) {
        this.startTime = val;
      },
      immediate: true,
    },
    'formData.endTime': {
      handler(val) {
        this.endTime = val;
      },
      immediate: true,
    },
    'formData.truckIds': {
      handler(val) {
        this.truckIds = val;
      },
      immediate: true,
    },
    'formData.quoteValidUntil': {
      handler(val) {
        this.quoteValidUntil = val;
      },
      immediate: true,
    },
    'formData.equipmentTypes': {
      handler(val) {
        this.equipmentTypes = val;
      },
      immediate: true,
    },
    frequentType: function (val, oldVal) {
      if (oldVal) {
        if (oldVal === 'once') {
          this.onceTimeRange = null;
        } else if (oldVal === 'weekly') {
          this.weeklySelectedDays = null;
        }
      }
    },
  },
  mounted() {
    this.frequentType = this.formData.frequentType || null;
  },
  methods: {
    async validate() {
      this.showErrors = true;
      if ((this.equipmentTypes || []).length === 0) {
        return false;
      }
      if (this.truckIds === null) {
        return false;
      }
      if (
        (this.startTime === null && this.endTime !== null) ||
        (this.startTime !== null && this.endTime === null)
      ) {
        return false;
      }
      if (this.frequentType === 'once') {
        if (
          typeof this.onceTimeRange === 'string' &&
          this.onceTimeRange.includes('to')
        ) {
          return true;
        }
      } else if (this.frequentType === 'weekly') {
        if ((this.weeklySelectedDays || []).length > 0) {
          return true;
        }
      }
      return false;
    },
    onSelectedDaysChange(val) {
      this.weeklySelectedDays = val.map((day) => {
        return this.weekDays.find((weekDay) => weekDay.value === day);
      });
    },
    onSelectedEquipmentTypesChange(val) {
      this.equipmentTypes = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.active-type {
  background: #1877f2;
  span {
    color: #fff;
  }
}
</style>
<style>
.flatpickr-calendar {
  z-index: 100000 !important;
}
</style>
