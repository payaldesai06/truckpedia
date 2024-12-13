<template>
  <div>
    <vs-input
      class="w-full"
      :value="dateTime"
      readonly
      :size="smallInput ? 'small' : ''"
      :class="{ 'small-input': smallInput }"
      @click.native="toggleDatePanel"
    />

    <template>
      <OverlayPanel
        class="overlay-panel"
        appendTo="body"
        style="width: 360px; padding: 0"
        ref="overlayPanel"
      >
        <div v-if="!dateTime && warningMessageIfDateTimeNotSelected">
          <span class="text-sm text-danger">
            {{ warningMessageIfDateTimeNotSelected }}
          </span>
        </div>
        <div class="mt-1 flex justify-end">
          <label
            :class="[
              'text-sm',
              {
                'cursor-no-drop disabled': isClearDisabled,
                'cursor-pointer text-primary': date || time,
              },
            ]"
            v-text="'Clear'"
            @click.stop="clearValues"
          />
        </div>
        <div class="w-full flex flex-col gap-2">
          <div class="flex gap-2">
            <input
              ref="hourInput"
              class="w-1/2 custom-input"
              :value="time ? time.split(':')[0] : ''"
              placeholder="HH"
              type="number"
              min="0"
              max="23"
              @blur="timeInput"
              @input="restrictInput"
            />
            <span class="text-2xl">:</span>
            <input
              ref="minuteInput"
              class="w-1/2 custom-input"
              :value="time ? time.split(':')[1] : ''"
              placeholder="mm"
              type="number"
              min="0"
              max="59"
              @blur="timeInput"
              @input="restrictInput"
            />
          </div>
          <flat-pickr
            class="w-full"
            v-model="date"
            :config="configDateFlatPickr"
            placeholder="Select Date"
          />
        </div>
      </OverlayPanel>
    </template>
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import OverlayPanel from "primevue/overlaypanel";

export default {
  name: "CustomDateTimeSelector",
  components: {
    OverlayPanel,
  },
  props: {
    dateValue: {
      type: String,
      default: null,
    },
    timeValue: {
      type: String,
      default: null,
    },
    convertToUTC: {
      type: Boolean,
      default: true,
    },
    inputPlaceholder: {
      type: String,
      default: "Select Date",
    },
    setDefaultTime: {
      type: Boolean,
      default: false,
    },
    smallInput: {
      type: Boolean,
      default: false,
    },
    warningMessageIfDateTimeNotSelected: {
      type: String,
      default: null,
    },
  },
  computed: {
    dateTime() {
      let res = "";

      if (this.date) {
        res += this.date;
      }
      if (this.time && this.timeRegex.test(this.time)) {
        const currentDate = this.date
          ? this.date
          : this.$dayjs().format("YYYY-MM-DD");

        res += this.convertToUTC
          ? ` ${this.time} ${this.timeZoneAbbreviated(
              `${currentDate}T${this.time}:00.000Z`
            )}`
          : ` ${this.time}`;
      }

      return res;
    },
    isClearDisabled() {
      return !this.date && !this.time;
    },
  },
  data() {
    return {
      date: null,
      time: null,
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: "Y-m-d",
        inline: true,
      },
      timeRegex: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      localTime: null,
    };
  },
  mounted() {
    this.initDateTimeValues();
  },
  methods: {
    initDateTimeValues() {
      if (this.dateValue && this.timeValue) {
        const dateString = `${this.dateValue}T${this.timeValue}:00.000Z`;

        this.date = this.convertToUTC
          ? this.$dayjs(dateString).format("YYYY-MM-DD")
          : this.dateValue || null;
        this.time = this.convertToUTC
          ? this.$dayjs(dateString).format("HH:mm")
          : this.timeValue || null;
      } else {
        this.date = this.dateValue || null;
        this.time = null;
      }
      this.localTime = this.time;

      this.$nextTick(() => {
        // Add watcher on refs.overlayPanel to emit value on hide
        this.$watch(
          () => this.$refs.overlayPanel.visible,
          (value) => {
            if (!value) {
              this.date = this.date
                ? this.$dayjs(this.date).format("YYYY-MM-DD")
                : null;

              if (this.date && this.time && this.timeRegex.test(this.time)) {
                const dateTime = this.convertLocalToUTC(this.date, this.time);
                const utcDate = dateTime.split("T")[0];
                const utcTime = dateTime.split("T")[1].slice(0, 5);
                if (
                  this.convertToUTC &&
                  utcDate === this.dateValue &&
                  utcTime === this.timeValue
                )
                  return;
                else if (
                  !this.convertToUTC &&
                  this.date === this.dateValue &&
                  this.time === this.timeValue
                )
                  return;

                this.$emit(
                  "input:Date",
                  this.convertToUTC ? utcDate : this.date
                );
                this.$emit(
                  "input:Time",
                  this.convertToUTC ? utcTime : this.time
                );
              } else {
                this.time = this.localTime;
                if (this.date === this.dateValue) return;

                this.$emit("input:Date", this.date);
                this.$emit(
                  "input:Time",
                  this.setDefaultTime && this.date ? "00:00" : null
                );
              }

              this.$emit("update");
            }
          }
        );
      });
    },
    clearValues() {
      if (this.isClearDisabled) return;

      this.date = null;
      this.time = null;
      // this.$emit('input:Date', null)
      // this.$emit('input:Time', null)
      // this.$emit("update");
    },
    /*
     * Params
     * date: yyyy-MM-dd
     * time: HH:mm
     */
    convertLocalToUTC(date, time) {
      return new Date(
        date.split("-")[0],
        date.split("-")[1] - 1,
        date.split("-")[2],
        time.split(":")[0],
        time.split(":")[1]
      ).toISOString();
    },
    timeInput() {
      let hour = (this.$refs.hourInput || {}).value;
      let minute = (this.$refs.minuteInput || {}).value;
      hour =
        hour && hour.length === 1
          ? `0${hour}`
          : Number(hour) > 23
          ? "00"
          : hour;
      minute =
        minute && minute.length === 1
          ? `0${minute}`
          : Number(minute) > 59
          ? "00"
          : minute;
      this.time = `${hour || "00"}:${minute || "00"}`;
      if (this.$refs.hourInput && this.$refs.minuteInput) {
        this.$refs.hourInput.value = this.time.split(":")[0];
        this.$refs.minuteInput.value = this.time.split(":")[1];
      }

      if (!this.date) {
        this.date = this.$dayjs().format("YYYY-MM-DD");
      }
    },
    timeZoneAbbreviated(dateTimeString) {
      if (!this.$dayjs(dateTimeString).isValid()) return "";
      // Reference: https://stackoverflow.com/a/63282162
      const { 1: tz } = new Date(dateTimeString).toString().match(/\((.+)\)/);

      if (tz.includes(" ")) {
        return tz
          .split(" ")
          .map(([first]) => first)
          .join("");
      } else {
        return tz;
      }
    },
    toggleDatePanel(event) {
      this.$refs.overlayPanel.toggle(event);
    },
    restrictInput(event) {
      // Restrict input to two digits
      if (event.target.value.length > 1) {
        event.target.value = event.target.value.slice(0, 2);
      }
    },
  },
  watch: {
    dateValue(newVal, oldVal) {
      if (newVal !== oldVal && !this.$refs.overlayPanel.visible) {
        this.initDateTimeValues();
      }
    },
    timeValue(newVal, oldVal) {
      if (newVal !== oldVal && !this.$refs.overlayPanel.visible) {
        this.initDateTimeValues();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .input-span-placeholder {
  display: flex;
}

::v-deep {
  .vs-input--input:disabled {
    opacity: 1;
    pointer-events: all;
  }
}

.overlay-panel {
  ::v-deep {
    .flatpickr-input {
      display: none;
    }

    .flatpickr-calendar {
      box-shadow: none !important;
      // margin-bottom: 10px !important;
      border: 1px solid #e9ebf0;
    }

    z-index: 111111 !important;
  }
}

// Utility Classes
.border-none {
  border: none;
}
.date-time-dropdown {
  position: absolute;
  top: 40px;
  z-index: 10;
  background: #fff;
  padding: 5px;
  box-shadow: 1px 1px 7px #ccc;
}

.cursor-no-drop {
  cursor: no-drop;
}

.disabled {
  opacity: 0.5;
  color: #000;
}

.custom-input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.7rem !important;
  color: inherit;
  position: relative;
  padding: 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
  transition: all 0.3s ease;
  width: 100%;
}
.small-input {
  width: 105px !important;
}
</style>
