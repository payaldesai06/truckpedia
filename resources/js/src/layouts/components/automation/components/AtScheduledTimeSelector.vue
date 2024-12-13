<template>
  <div class="automation-at-scheduled-time-selector">
    <div class="mt-5">
      <label class="typo__label">Interval type <field-required-sign /> </label>
      <multiselect
        v-model="intervalType"
        :options="intervalTypeOption"
        :showLabels="false"
        :allowEmpty="false"
        placeholder="Select interval type"
        label="text"
        trackBy="value"
        v-validate="'required'"
        data-vv-as="selected"
        name="intervalType"
      >
      </multiselect>
      <span class="text-danger text-sm">{{
        errors.first("intervalType")
      }}</span>
    </div>
    <div class="interval-options" v-if="intervalType">
      <div class="mt-5">
        <label class="typo__label">Timing <field-required-sign /> </label>
        <div class="flex items-center space-x-2">
          <!-- Every selector  -->
          <div class="flex items-center space-x-2 trigger-selector">
            <span>Every</span>
            <div>
              <vs-input
                v-if="isIntervalDay"
                placeholder="# of"
                type="number"
                :min="renderValues.min"
                :max="renderValues.max"
                inputmode="numeric"
                pattern="[0-9]*"
                data-vv-validate-on="blur"
                v-validate="
                  `required|numeric|min_value:${renderValues.min}|max_value:${renderValues.max}`
                "
                name="everyTime"
                v-model.number="everyTime"
                class="w-full"
              />
              <multiselect
                v-else
                v-model.number="everyTime"
                :options="renderValues.every"
                :showLabels="false"
                :allowEmpty="false"
                placeholder="# of"
                data-vv-validate-on="change"
                v-validate="'required'"
                data-vv-as="selected"
                name="everyTime"
              >
              </multiselect>
              <span class="text-danger text-sm">
                {{ errors.first("everyTime") }}
              </span>
            </div>
          </div>
          <span class="mixer-text"> {{ renderValues.mixer }}</span>
          <!-- Optional values selector selectWeekdays/selectDays  -->
          <div
            class="flex items-center space-x-2 optional-selector"
            v-if="isIntervalWeek || isIntervalMonth || (isIntervalDay && mode === 'maintenance')"
          >
            <template v-if="isIntervalWeek || isIntervalMonth">
              <span class="prefix"> on </span>
              <span
                class="optional-prefix"
                v-if="intervalType && intervalType.value === 'week'"
              >
                the
              </span>
            </template>

            <div class="day-selector">
              <multiselect
                v-if="renderValues.selectDays"
                v-model="selectedDays"
                @select="sortWeek()"
                :multiple="true"
                :options="renderValues.selectDays"
                label="text"
                trackBy="value"
                :showLabels="false"
                :placeholder="
                  isIntervalWeek ? 'Select weekdays' : 'Select days'
                "
                :closeOnSelect="false"
                data-vv-validate-on="change"
                v-validate="'required'"
                data-vv-as="selected"
                name="selectedDays"
              >
              </multiselect>
              <span class="text-danger text-sm">
                {{ errors.first("selectedDays") }}
              </span>
            </div>
            <span v-if="mode === 'maintenance' && isIntervalDay">
              day(s) in advance
            </span>
          </div>
        </div>

        <!-- Time Selector Block -->
        <div class="flex items-center space-x-2 mt-2 time-selector" v-if="mode == 'schedule'">
          <span>at</span>
          <div>
            <multiselect
              v-model="startingTime"
              :options="renderValues.timeRange"
              label="text"
              trackBy="value"
              :showLabels="false"
              :allowEmpty="false"
            >
            </multiselect>
          </div>
        </div>
        <!-- Date Selector Block -->
        <div class="mt-2 date-selector" v-if="mode == 'schedule'">
          <label class="typo__label">Starting</label>
          <div>
            <flat-pickr v-model="startingDate" :config="configTimeFlatPickr" />
          </div>
        </div>
      </div>
      <MaintenanceSelector
        v-if="(isIntervalDay && mode === 'maintenance')"
        ref="maintenanceSelector"
        v-model="maintenanceAssets"
        :assetsList="assetsList"
      />
      <!-- 'At a scheduled time' End -->
    </div>
  </div>
</template>

<script>
import config from "@/config/constants";

export default {
  name: "AtScheduledTimeSelector",
  props: {
    value: {
      type: Object,
      default: null,
    },
    timeRange: {
      type: Array,
      default: () => [],
    },
    mode: {
      type: String,
      default: 'schedule'
    },
    assetsList : { // Maintenance mode : List of trucks and tailers
      type: Object,
      default: null,
      /*
        {
          trucksList: [],
          trailerList: []
        }
      */
    }
  },
  components: {    
    MaintenanceSelector: () => import('./MaintenanceSelector.vue')
  },
  data() {
    return {
      intervalTypeMaintenanceOption: [
        {
          value: "day",
          text: "Day",
        },
      ],
      intervalTypeScheduleOption: [
        {
          value: "day",
          text: "Day",
        },
        {
          value: "week",
          text: "Week",
        },
        {
          value: "month",
          text: "Month",
        },
      ],
      weekOnTimeOption: config.weekDays,
      monthOnTimeOption: config.monthDays,
      maintenanceInAdvanceOptions: [
        {
          value: 1,
          text: 1
        },
        {
          value: 7,
          text: 7
        },
        {
          value: 10,
          text: 10
        },
        {
          value: 15,
          text: 15
        },
        {
          value: 20,
          text: 20
        },
        {
          value: 30,
          text: 30
        },
        {
          value: 45,
          text: 45
        },
        {
          value: 60,
          text: 60
        },
        {
          value: 90,
          text: 90
        },
      ],
      configTimeFlatPickr: {
        // minDate: "today",
      },
      existingTriggerValuesUpdateOrNot: false,
      intervalType: (this.value || {}).intervalType || null,
      everyTime: (this.value || {}).everyTime || null,
      startingTime: (this.value || {}).startingTime || {
        text: "12:00 AM",
        value: "00:00",
      },
      startingDate: (this.value || {}).startingDate || "",
      selectedDays: (this.value || {}).selectedDays || [],
      scheduleAutomationId: (this.value || {}).scheduleAutomationId || null,
      maintenanceAssets: (this.value || {}).maintenanceAssets || null,
    };
  },
  watch: {
    intervalType(newVal, oldVal) {
      if ((newVal || {}).value !== (oldVal || {}).value) {
        this.resetFieldValues();
      }
    },
    value(newVal) {
      this.updateFieldValues(newVal);
    },
    intervalValues(newVal) {
      this.$emit("input", newVal);
    },
    validationMessageDictionary(newVal) {
        if (this.mode === 'maintenance') {
          this.$validator.localize('en', newVal);
          this.$validator.validateAll();
        }
    },
  },
  computed: {
    intervalValues() {
      const intervalData = {
        scheduleAutomationId: this.scheduleAutomationId,
        intervalType: this.intervalType,
        everyTime: this.everyTime,
        startingTime: this.startingTime,
        startingDate: this.startingDate,
        selectedDays: this.sortWeek(this.selectedDays),
      };
      if (this.mode === 'maintenance') {
        intervalData.maintenanceAssets = this.maintenanceAssets
      }
      return intervalData;
    },
    renderValues() {
      const presets = {
        day: {
          min: this.mode === 'maintenance' ? Math.max(...[...this.selectedDays.map(x => x.value), 1]) + 1 : 1,
          max: 750,
          mixer: "day(s)",
          selectDays: this.mode === 'maintenance' ? this.maintenanceInAdvanceOptions : null,
          timeRange: this.timeRange,
          startingDate:
            this.startingDate || new Date().toISOString().slice(0, 10),
        },
        week: {
          every: this.generateXNumbers(11),
          mixer: "weeks(s)",
          selectDays: this.weekOnTimeOption,
          timeRange: this.timeRange,
          startingDate:
            this.startingDate || new Date().toISOString().slice(0, 10),
        },
        month: {
          every: this.generateXNumbers(12),
          mixer: "month(s)",
          selectDays: this.monthOnTimeOption,
          timeRange: this.timeRange,
          startingDate:
            this.startingDate || new Date().toISOString().slice(0, 10),
        },
      };
      const { value } = this.intervalType || {};
      return value ? presets[this.intervalType.value] || {} : {};
    },
    isIntervalDay() {
      return (this.intervalType || {}).value === "day";
    },
    isIntervalWeek() {
      return (this.intervalType || {}).value === "week";
    },
    isIntervalMonth() {
      return (this.intervalType || {}).value === "month";
    },
    intervalTypeOption () {
      if (this.mode === 'schedule') {
        return this.intervalTypeScheduleOption;
      } else if (this.mode === 'maintenance') {
        return this.intervalTypeMaintenanceOption;
      }
    },
    validationMessageDictionary() {
      const dict =  {
        custom: {
          intervalType: {
            required: "Interval type is required.",
          },
          everyTime: {
            required: "Frequency of automation required.",
            numeric: "Frequency must be a valid non-decimal number",
            max_value: "Maximum day interval is 750 days",
            min_value: this.mode === 'maintenance' ? `Minimum day interval is ${Math.max(...[...this.selectedDays.map(x => x.value), 1]) + 1} day` : "Minimum day interval is 1 day",
          },
          selectedDays: {
            required: this.mode === 'maintenance' ? "Advance interval is required" : "Day range is required.",
          },
        },
      };
      return dict
    }
  },
  async created() {
    this.$validator.localize('en', this.validationMessageDictionary);
    if (!this.startingDate) {
      this.startingDate = new Date().toISOString().slice(0, 10);
    }
    this.updateFieldValues(this.intervalValues);
  },
  methods: {
    updateFieldValues(intervalValues) {
      const {
        intervalType,
        everyTime,
        startingTime,
        startingDate,
        selectedDays,
      } = intervalValues || {};
      const { value } = intervalType || {};
      this.intervalType =
        this.intervalTypeOption.find((x) => x.value === value) || null;
      this.everyTime = everyTime;
      this.startingTime = startingTime;
      this.startingDate = startingDate;
      this.selectedDays = selectedDays;
    },
    resetScheduleSetting() {
      this.intervalType = null;
      this.resetFieldValues();
    },
    resetFieldValues() {
      this.everyTime = null;
      this.selectedDays = [];
    },
    generateXNumbers(x) {
      const arr = [...Array(x + 1).keys()];
      arr.shift();
      return arr;
    },
    sortWeek(val = []) {
      return val.sort(function (a, b) {
        return a.value - b.value;
      });
    },
    async validate() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        return false;
      }
      const { validate } = (this.$refs || {}).maintenanceSelector || {};
      let maintenanceValidation = true;
      if (validate) {
        maintenanceValidation = await this.$refs.maintenanceSelector.validate();
      } 
      return maintenanceValidation;
    }
  },
};
</script>

<style lang="scss">
.automation-at-scheduled-time-selector {
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /*!* Firefox *!*/
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    opacity: 1;
  }
}
</style>
