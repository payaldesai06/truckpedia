<template>
  <div class="vx-row">
    <div class="vx-col w-1/6 md:w-1/3 date-panel">
      <vx-card class="h-full">
        <div class="my-4">
          <div class="mb-2 flex items-center justify-between">
            <label>Start</label>
            <vs-button
              color="warning"
              type="flat"
              size="small"
              @click="clearStartDate"
            >
              Clear
            </vs-button>
          </div>
          <div class="relative">
            <flat-pickr
              class="w-full"
              v-model="startDate"
              :config="configDateFlatPickr"
              placeholder="Now"
              label="Date"
            />

            <span class="icon-append">
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </span>
          </div>
        </div>
        <div class="my-4">
          <div class="mb-2 flex items-center justify-between">
            <label>End</label>
            <vs-button
              color="warning"
              type="flat"
              size="small"
              @click="clearEndDate"
            >
              Clear
            </vs-button>
          </div>
          <div class="relative">
            <flat-pickr
              class="w-full"
              v-model="endDate"
              :config="configDateFlatPickr"
              placeholder="No end date"
              label="Date"
            />

            <span class="icon-append">
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </span>
          </div>
        </div>
      </vx-card>
    </div>
    <div class="vx-col w-5/6 md:w-3/5 h-full">
      <vx-card class="mb-6">
        <div class="vx-row flex justify-between items-end">
          <div class="vx-col">
            <h5 class="font-bold">Days and Times</h5>
          </div>
        </div>
        <div class="w-full flex flex-wrap mt-6">
          <div
            v-for="(day, index) in weekDays"
            :key="day.value"
            class="flex gap-2 items-center w-full p-2"
          >
            <label style="width: 90px" :for="day.text">{{ day.text }}</label>
            <div class="flex gap-2">
              <div class="relative w-1/2">
                <flat-pickr
                  v-model="day.startTime"
                  :config="configTimeFlatPickr"
                  class="w-full"
                  placeholder="Start Time"
                />
                <span class="icon-append">
                  <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                </span>
              </div>
              <div class="relative w-1/2">
                <flat-pickr
                  v-model="day.endTime"
                  :config="configTimeFlatPickr"
                  class="w-full"
                  placeholder="End Time"
                />
                <span class="icon-append">
                  <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                </span>
              </div>
              <vs-button
                color="warning"
                type="flat"
                size="small"
                @click="
                  day.startTime = '';
                  day.endTime = '';
                "
                >Clear</vs-button
              >
            </div>
            <div>
              <vs-button
                :disabled="!(day.startTime && day.endTime)"
                color="primary"
                type="flat"
                size="small"
                @click="applyTimeToEveryday(index)"
              >
                Apply times to everyday
              </vs-button>
            </div>
          </div>
        </div>
        <div class="w-1/2 mt-4">
          <label class="text-sm opacity-75" for="timezone">
            Timezone
            <field-required-sign />
          </label>
          <v-select
            name="timezone"
            :options="timezoneOptions"
            label="label"
            :clearable="true"
            v-model="timezone"
            class="w-full"
          />
        </div>
      </vx-card>
      <vs-button
        class="add-filter-btn mt-8"
        color="primary"
        type="filled"
        @click="handleSubmit"
      >
        Save
      </vs-button>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons';
import { getApiErrorMsg } from '@/helpers/helper';
import { isEmpty } from 'lodash';

export default {
  name: 'Schedule',
  components: {
    ChevronDownIcon,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d',
      },
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
      startDate: '',
      endDate: '',
      scheduleName: '',
      scheduleDays: new Array(7).fill(false),
      weekDays: [
        { text: 'Sunday', value: 1, startTime: null, endTime: null },
        { text: 'Monday', value: 2, startTime: null, endTime: null },
        { text: 'Tuesday', value: 3, startTime: null, endTime: null },
        { text: 'Wednesday', value: 4, startTime: null, endTime: null },
        { text: 'Thursday', value: 5, startTime: null, endTime: null },
        { text: 'Friday', value: 6, startTime: null, endTime: null },
        { text: 'Saturday', value: 7, startTime: null, endTime: null },
      ],
      timezone: null,
      timezoneOptions: [
        { label: 'Pacific Time - US and Canada', value: 'America/Los_Angeles' },
        { label: 'Mountain Time - US and Canada', value: 'America/Edmonton' },
        { label: 'Central Time - US and Canada', value: 'America/Winnipeg' },
        { label: 'Eastern Time - US and Canada', value: 'America/New_York' },
        { label: 'Atlantic Time', value: 'America/Halifax' },
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.data) {
        const { startDate, endDate, timezone, daysOfWeekTimes } = this.data;

        this.startDate = startDate;
        this.endDate = endDate;
        this.timezone = this.timezoneOptions.find(
          (item) => item.value === timezone
        );
        this.weekDays = this.weekDays.map((day) => {
          const dayLowerCase = day.text.toLowerCase();
          const startTimeKey = `${dayLowerCase}StartTime`;
          const endTimeKey = `${dayLowerCase}EndTime`;
          return {
            ...day,
            startTime: daysOfWeekTimes[startTimeKey] || '',
            endTime: daysOfWeekTimes[endTimeKey] || '',
          };
        });
        this.scheduleDays = this.weekDays.map((day) => {
          return day.startTime !== '' && day.endTime !== '';
        });
      }
    },
    clearStartDate() {
      this.startDate = '';
    },
    clearEndDate() {
      this.endDate = '';
    },
    validateData() {
      for (let ind in this.weekDays) {
        const day = this.weekDays[ind];
        if (
          (!isEmpty(day.startTime) && isEmpty(day.endTime)) ||
          (isEmpty(day.startTime) && !isEmpty(day.endTime))
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: `Invalid ${day.text} startTime and endTime`,
          });
          return false;
        }

        if (!isEmpty(day.startTime) && !isEmpty(day.endTime)) {
          const time1 = this.$dayjs(`2000-01-01 ${day.startTime}`);
          const time2 = this.$dayjs(`2000-01-01 ${day.endTime}`);
          let timeDiff = time2.diff(time1);

          if (timeDiff <= 0) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: `For ${day.text}, start time must be earlier than end time`,
            });
            return false;
          }
        }
      }
      if (!(this.timezone || {}).value) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select a timezone',
        });
        return false;
      }
      return true;
    },
    async handleSubmit() {
      if (!this.validateData()) return;

      try {
        const campaignId = this.$route.params.id;
        this.loading = true;

        const daysOfWeekTimes = this.weekDays.reduce((acc, day) => {
          const dayLowerCase = day.text.toLowerCase();
          acc[`${dayLowerCase}StartTime`] = day.startTime || null;
          acc[`${dayLowerCase}EndTime`] = day.endTime || null;
          return acc;
        }, {});

        const payload = {
          id: campaignId,
          startDate: this.startDate,
          endDate: this.endDate,
          timezone: this.timezone.value,
          daysOfWeekTimes: daysOfWeekTimes,
        };
        const response = await this.$store.dispatch(
          'marketing/updateCampaign',
          payload
        );
        if (response && response.data) {
          this.$emit('update:Schedule', {
            campaign: payload,
          });
          this.$vs.notify({
            color: 'primary',
            title: 'Campaign updated',
            text: 'Campaign updated successfully.',
          });
        } else {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid response from the server.',
          });
        }
      } catch (error) {
        console.log(error);
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
    applyTimeToEveryday(index) {
      const day = this.weekDays[index];
      this.weekDays = this.weekDays.map((item) => {
        return {
          ...item,
          startTime: day.startTime,
          endTime: day.endTime,
        };
      });
    },
  },
};
</script>

<style scoped>
.icon-append {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  display: flex;
  align-items: center;
  margin: 0.5rem;
  padding: 0.25rem;
  border-left: 1px solid #d1d5db;
}

.date-panel {
  min-height: 70vh;
}
</style>
