<template>
  <div>
    <div class="flex">
      <div class="w-1/4">
        <div
          :class="steps.length > 2 ? 'max-h-45 h-full' : ''"
          ref="stepsContainer"
        >
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            :class="{
              'active-step-box': activeStep === index,
              'no-active-step-box': activeStep !== index,
            }"
            class="step-box"
            @click="setActiveStep(index)"
          >
            <div class="flex justify-between items-center">
              <p class="count-steps">Step {{ index + 1 }}</p>
              <div v-if="steps.length > 1" class="delete-step-icon">
                <vs-icon
                  class="cursor-pointer"
                  size="small"
                  icon="delete"
                  color="danger"
                  @click.stop="confirmRemoveStep(index)"
                />
              </div>
            </div>
            <vs-divider />
            <div class="subject-txt">
              <span>{{ step.subject || '< No Subject >' }} </span>
            </div>
            <div v-if="index + 1 < steps.length">
              <vs-divider />
              <div class="flex my-4 gap-2 items-center">
                wait for
                <vs-input
                  class="delay-day-input"
                  type="number"
                  min="0"
                  v-model="steps[index].nextStepWaitForDays"
                />
                days, then
              </div>
            </div>
          </div>
        </div>
        <div class="add-step" @click="addStep">Add Step</div>
      </div>
      <div class="w-3/4">
        <div
          v-if="showTemplateName"
          class="template-name-input flex flex-col mt-6 mb-6"
        >
          <label class="text-xs">Template Name</label>
          <vx-input-group>
            <vs-input class="w-full" v-model="templateName" />
          </vx-input-group>
        </div>
        <div class="send-email-wrap" v-if="activeStep !== null">
          <div class="send-email-header">
            <div class="w-75">
              <span>Subject:</span>
              <span>
                <input
                  type="text"
                  v-model="activeVariantSubject"
                  name="subject"
                  placeholder="Your subject"
                />
              </span>
            </div>
          </div>
          <vs-divider class="m-0" />
          <div>
            <vue-editor
              v-model="activeVariantContent"
              :editorToolbar="customToolbar"
              class="custom-toolbar"
              placeholder="Start typing here..."
            ></vue-editor>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-20 mx-4" v-if="currentRouteName == 'companies-view'">
      <vx-card>
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
            <label style="width: 90px" :for="day.text">
              {{ day.text }}
            </label>
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
              >
                Clear
              </vs-button>
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
    </div>
    <div class="flex mt-6 mr-4 flex justify-end">
      <vs-button
        class="action-btn mr-4"
        type="border"
        @click="handleRedirection"
        >Cancel</vs-button
      >
      <vs-button @click="handleSaveSequence" :disabled="isSubmitDisabled">
        {{
          editMode && currentRouteName !== 'companies-view' ? 'Update' : 'Save'
        }}</vs-button
      >
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import { mapGetters } from 'vuex';
import { isEmpty } from 'lodash';

export default {
  name: 'AddCampaignTemplates',
  components: {
    VueEditor,
  },
  props: {
    template: {
      type: Object,
      default: () => {},
    },
    enableButtonValidation: {
      type: Boolean,
      default: () => false,
    },
    originalData: {
      type: Object,
      default: () => {},
    },
    showTemplateName: {
      type: Boolean,
      default: () => true,
    },
    disabledSaveButton: {
      type: Boolean,
      default: () => false,
    },
    scheduleData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      steps: [
        {
          step: 1,
          nextStepWaitForDays: 1,
          subject: '',
          content: '',
        },
      ],
      activeStep: 0,
      templateName: '',
      editMode: false,
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link'],
      ],
      weekDays: [
        { text: 'Sunday', value: 1, startTime: null, endTime: null },
        { text: 'Monday', value: 2, startTime: null, endTime: null },
        { text: 'Tuesday', value: 3, startTime: null, endTime: null },
        { text: 'Wednesday', value: 4, startTime: null, endTime: null },
        { text: 'Thursday', value: 5, startTime: null, endTime: null },
        { text: 'Friday', value: 6, startTime: null, endTime: null },
        { text: 'Saturday', value: 7, startTime: null, endTime: null },
      ],
      timezoneOptions: [
        { label: 'Pacific Time - US and Canada', value: 'America/Los_Angeles' },
        { label: 'Mountain Time - US and Canada', value: 'America/Edmonton' },
        { label: 'Central Time - US and Canada', value: 'America/Winnipeg' },
        { label: 'Eastern Time - US and Canada', value: 'America/New_York' },
        { label: 'Atlantic Time', value: 'America/Halifax' },
      ],
      scheduleDays: new Array(7).fill(false),
      timezone: null,
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
    };
  },
  computed: {
    ...mapGetters('auth', ['user']),
    activeVariantSubject: {
      get() {
        if (this.activeStep !== null) {
          return this.steps[this.activeStep].subject;
        }
        return '';
      },
      set(value) {
        if (this.activeStep !== null) {
          this.$set(this.steps[this.activeStep], 'subject', value);
        }
      },
    },
    activeVariantContent: {
      get() {
        if (this.activeStep !== null) {
          return this.steps[this.activeStep].content;
        }
        return '';
      },
      set(value) {
        if (this.activeStep !== null) {
          this.$set(this.steps[this.activeStep], 'content', value);
        }
      },
    },
    isSubmitDisabled() {
      return (
        this.disabledSaveButton ||
        (this.currentRouteName == 'companies-view' && !this.timezone) ||
        (this.enableButtonValidation &&
          this.editMode &&
          JSON.stringify(this.originalData) ===
            JSON.stringify({ ...this.template, name: this.templateName }))
      );
    },
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    init() {
      if (Object.keys(this.template).length) {
        this.editMode = true;
        this.templateName = this.template.name;
        this.steps = this.template.sequences;
      } else {
        this.steps = this.getDefaultSequence();
        this.templateName = '';
      }
      this.setActiveStep(0); // everytime when template changes, step 1 should be active
    },
    initSchedule() {
      // Initialize the schedule settings
      const { timezone, daysOfWeekTimes } = this.scheduleData;

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
    },
    getDefaultSequence() {
      return [
        {
          nextStepWaitForDays: 1,
          subject: '',
          content: '',
        },
      ];
    },
    handleRedirection() {
      if (this.currentRouteName == 'companies-view') {
        this.$emit('showCampaigns', false);
      } else {
        this.$router.back();
      }
    },

    addStep() {
      const newStep = {
        nextStepWaitForDays: 1,
        subject: '',
        content: '',
      };
      this.steps.push(newStep);
      this.setActiveStep(this.steps.length - 1);
      // this.$nextTick(() => {
      //   this.$refs.stepsContainer.children[
      //     this.steps.length - 1
      //   ].scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'center',
      //   });
      // });
    },
    confirmRemoveStep(index) {
      const options = {
        title: 'Confirm Delete',
        color: 'danger',
        text: 'Are you sure you want to delete this step?',
        accept: () => this.removeStep(index),
      };
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Delete step',
        ...options,
      });
    },
    removeStep(index) {
      this.steps.splice(index, 1);
      if (this.steps.length === 1) {
        this.steps[0].nextStepWaitForDays = 1;
      }
      if (this.activeStep >= this.steps.length) {
        this.setActiveStep(this.steps.length - 1);
      } else {
        this.setActiveStep(0);
      }
    },
    setActiveStep(index) {
      this.activeStep = index;
    },
    validateData() {
      if (this.showTemplateName && this.templateName === '') {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: `Please fill template name`,
        });
        return false;
      }
      let index = 0;
      for (let step of this.steps) {
        if (step.subject == '' || step.content == '') {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: `Please fill subject and content in Step ${
              parseInt(index) + 1
            }`,
          });
          return false;
        }
        index++;
      }
      if (this.currentRouteName == 'companies-view') {
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
      }
      return true;
    },
    handleSaveSequence() {
      if (this.validateData()) {
        let payload = {
          sequences: this.steps.map(
            (data) =>
              data.nextStepWaitForDays && {
                ...data,
                nextStepWaitForDays: Number(data.nextStepWaitForDays),
              }
          ),
          name: this.templateName,
        };

        if (this.currentRouteName == 'companies-view') {
          const daysOfWeekTimes = this.weekDays.reduce((acc, day) => {
            const dayLowerCase = day.text.toLowerCase();
            acc[`${dayLowerCase}StartTime`] = day.startTime || null;
            acc[`${dayLowerCase}EndTime`] = day.endTime || null;
            return acc;
          }, {});
          payload = {
            ...payload,
            timezone: this.timezone.value,
            daysOfWeekTimes,
          };
        }

        this.$emit('templateSaved', payload);
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
  watch: {
    template: {
      handler(val) {
        this.init();
      },
      immediate: true,
    },
    scheduleData: {
      handler() {
        if (this.currentRouteName == 'companies-view') {
          this.initSchedule();
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">
.active-step-box {
  border: 2px solid var(--blue-500, #3b82f6);
}
.no-active-step-box {
  border: 1px solid gray;
}
.step-box {
  border-radius: 8px;
  background: var(--gray-50, #f9fafb);
  min-height: 150px;
  margin-bottom: 15px;
  padding: 15px;
  padding-bottom: 0px;
  cursor: pointer;
  .count-steps {
    color: var(--brand-neutrals-black, #000);
    font-size: 16px;
    font-weight: 500;
  }
  .subject-txt {
    color: var(--brand-neutrals-black, #000);
    font-size: 14px;
    font-weight: 450;
    padding: 0px 16px;
    min-height: 50px;
  }
  .add-variant {
    color: var(--primary-blue, #3975eb);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding: 8px;
    cursor: pointer;
  }
}
.add-step {
  border-radius: 4px;
  border: 1px solid var(--gray-300, #d1d5db);
  color: var(--primary-blue, #3975eb);
  font-size: 16px;
  font-weight: 500;
  padding: 10px 24px;
  text-align: center;
  cursor: pointer;
  margin-top: 15px;
}
.delete-step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-email-wrap {
  border-radius: 8px;
  border: 1px solid var(--gray-200, #e5e7eb);
  background: var(--brand-neutrals-white, #fff);
  margin: 15px;
  margin-top: 0px;
  .send-email-header {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      outline: none;
      border: none;
      min-width: 75%;
    }
  }
}

.template-name-input {
  margin: 15px;
}

.custom-toolbar .ql-toolbar.ql-snow,
.custom-toolbar .ql-container.ql-snow {
  border: none;
}
.custom-toolbar .ql-container.ql-snow {
  min-height: 55vh;
}

.delay-day-input {
  width: 80px;
}

.max-h-45 {
  max-height: 45vh;
  overflow-y: auto;
}

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
</style>
