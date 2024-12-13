<template>
  <div class="freq-calculator">
    <div class="vx-row mt-2" style="align-items: end">
      <div class="vx-col w-1/2">
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
            v-model="formData.repeat"
            class="w-full"
            :reduce="(option) => option.value"
          />
          <p class="text-danger text-sm" v-if="!formData.repeat && showErrors">
            Frequency is required
          </p>
        </div>
      </div>
      <div class="vx-col w-1/2"  v-show="formData.repeat === 'weekly'">
        <div>
          <label class="text-sm opacity-75" for="quoteValidUntil">
            <span>Quote Valid Until</span>
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 4px; margin-left: 1rem"
              @click="formData.endDate = null"
            >
              Clear
            </vs-button>
          </label>
          <flat-pickr
            class="w-full"
            :config="{ dateFormat: 'Y-m-d' }"
            v-model="formData.endDate"
          />
        </div>
      </div>
    </div>
    <div class="vx-row mt-2" v-if="formData.repeat === 'once'">
      <div class="vx-col w-full">
        <label class="text-base opacity-75 mb-2">
          Date Range
          <field-required-sign />
        </label>
        <flat-pickr
          class="w-full"
          v-model="onceTimeRange"
          :config="flat_pikr_config"
        />
        <p
          class="text-danger text-sm"
          v-if="
            (!onceTimeRange || !onceTimeRange.toString().includes('to')) &&
            showErrors
          "
        >
          Select a valid date range
        </p>
      </div>
    </div>
    <div class="vx-row mt-2" v-if="formData.repeat === 'weekly'">
      <div class="vx-col w-full">
        <label class="text-base opacity-75 mb-2">
          Days of the Week
          <field-required-sign />
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
            Select at least one weekday
          </p>
        </div>
      </div>
    </div>
    <div class="mt-3 vx-row">
      <div class="vx-col w-1/3">
        <label class="text-base opacity-75 mb-2">
          Equipment Type
          <field-required-sign />
        </label>
        <div class="equipment-type-selector">
          <vs-select
            multiple
            class="w-full"
            autocomplete
            data-vv-validate-on="change"
            :value="equipmentTypes"
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
            v-if="(formData.equipmentTypes || []).length == 0 && showErrors"
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
            @click="formData.startTime ? (formData.startTime = null) : ''"
          >
            Clear
          </vs-button>
        </label>
        <flat-pickr
          v-model="formData.startTime"
          :config="configTimeFlatPickr"
          class="w-full"
        />
        <p
          class="text-danger text-sm"
          v-if="
            (!formData.startTime || formData.startTime === null) &&
            formData.endTime &&
            formData.endTime !== null &&
            showErrors
          "
        >
          Start Time is required when End Time presents
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
            @click="formData.endTime ? (formData.endTime = null) : ''"
          >
            Clear
          </vs-button>
        </label>
        <flat-pickr
          v-model="formData.endTime"
          :config="configTimeFlatPickr"
          class="w-full"
        />
        <p
          class="text-danger text-sm"
          v-if="
            formData.startTime &&
            formData.startTime !== null &&
            (!formData.endTime || formData.endTime === null) &&
            showErrors
          "
        >
          End Time is required when Start Time presents
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
    frequencyData: {
      type: Object,
      default: () => ({}),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    showErrors: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
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
      equipmentTypeOptions: config.marketplace.equipmentTypes,
      formData: {
        repeat: '',
        startTime: null,
        endTime: null,
        equipmentTypes: [],
        weeklyDays: [],
        startDate: null,
        endDate: null,
      },
      equipmentTypes: [], // to ensure reactivity vs-select is not working wth object reactivity
    };
  },
  computed: {
    selectedDays() {
      return (this.weeklySelectedDays || []).map((day) => day.value);
    },
  },
  watch: {
    onceTimeRange: {
      handler(val) {
        if (
          typeof this.onceTimeRange === 'string' &&
          this.onceTimeRange.split(' to ').length
        ) {
          let [startDate, endDate] = this.onceTimeRange.split(' to ');
          this.formData.startDate = startDate;
          this.formData.endDate = endDate;
        }
      },
    },
    frequencyData: {
      handler(val) {
        this.formData = val;
        if (this.formData.equipmentTypes.length) {
          this.equipmentTypes = this.formData.equipmentTypes;
        }
        if (this.formData.weeklyDays) {
          const weekToNumber = {
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6,
            sunday: 7,
          };
          this.weeklySelectedDays = (
            (this.formData || {}).weeklyDays || []
          ).map((day) => {
            return this.weekDays.find(
              (weekDay) => weekDay.value === weekToNumber[day]
            );
          });
        }
      },
      immediate: true,
    },
    'formData.weeklyDays': {
      handler() {
        const weekToNumber = {
          monday: 1,
          tuesday: 2,
          wednesday: 3,
          thursday: 4,
          friday: 5,
          saturday: 6,
          sunday: 7,
        };
      },
      immediate: true,
    },
    'formData.repeat': {
      handler(val) {
        if (val) {
          if (val === 'once') {
            const { startDate, endDate } = this.formData || {};
            this.weeklySelectedDays = null;
            this.onceTimeRange =
              startDate && endDate ? `${startDate} to ${endDate}` : null;
          } else if (val === 'weekly') {
            this.onceTimeRange = null;
            delete this.formData.startDate;
          }
        }
      },
      immediate: true,
    },
  },
  methods: {
    onSelectedDaysChange(val) {
      this.formData.weeklyDays = val.map((day) => {
        return this.weekDays.find((weekDay) => weekDay.value === day);
      });
      this.weeklySelectedDays = this.formData.weeklyDays;
    },
    onSelectedEquipmentTypesChange(val) {
      this.formData.equipmentTypes = this.equipmentTypes;
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
