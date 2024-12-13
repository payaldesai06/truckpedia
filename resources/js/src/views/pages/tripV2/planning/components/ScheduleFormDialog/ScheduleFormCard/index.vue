<template>
  <div class="schedule-form-card">
    <!-- Body Section -->
    <div class="form-container">
      <section class="flex">
        <div class="left-block flex vx-col">
          <div class="w-full">
            <div
              class="delete-icon vx-col px-1 my-auto mr-5"
              v-if="sideDeleteButton"
            >
              <vs-icon
                v-if="isEditMode"
                icon="delete"
                type="filled"
                color="danger"
                size="small"
                class="m-0"
                @click="onConfirmDelete"
              ></vs-icon>
            </div>
            <!-- Routes Block  -->
            <RoutesCard
              v-model="formData.manualLanes"
              ref="manualLanes"
              class="mt-5"
            />
          </div>
        </div>
        <div class="right-block vx-col">
          <!-- Truck selector  -->
          <div class="truck-selector vx-row mt-2" v-if="!isEditMode">
            <div class="vx-col w-full mt-2">
              <div>
                <label class="text-sm opacity-75">
                  Truck
                  <field-required-sign />
                </label>
                <multiselect
                  v-model="formData.truckIds"
                  :multiple="true"
                  :options="truckOptions"
                  label="truck_number"
                  trackBy="truck_number"
                  :showLabels="false"
                  :placeholder="'Select truck(s)'"
                  :closeOnSelect="false"
                  name="selectedTrucks"
                  :disabled="isEditMode"
                >
                </multiselect>
                <p
                  class="text-danger text-sm"
                  v-if="!formData.truckIds && showErrors"
                >
                  Select at least on truck
                </p>
              </div>
            </div>
          </div>
          <!-- Frequency selector  -->
          <div class="frequency-selector">
            <FrequencyCalculator
              :formData="formData"
              ref="freqCalculator"
              :isEdit="!!scheduleFormData"
              :showDeleteButton="!sideDeleteButton"
              @delete="onConfirmDelete"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleFormCard',
  props: {
    scheduleFormData: {
      type: Object,
      default: () => null,
    },
    truckOptions: {
      type: Array,
      default: () => [],
    },
    sideDeleteButton: {
      type: Boolean,
      default: false,
    },
    arrayLength: {
      // No of schedules selected for modification
      type: Number,
      default: 0,
    },
  },
  provide() {
    return {
      reduceCardHeight: () => this.isEditMode && this.arrayLength > 1,
    };
  },
  components: {
    RoutesCard: () => import('../RoutesCard'),
    FrequencyCalculator: () => import('../FreqCalculator'),
  },
  computed: {
    isEditMode() {
      const { truckAvalRptSchedId, truckAvalOnceSchedId } = this.formData || {};
      return !!(truckAvalRptSchedId || truckAvalOnceSchedId);
    },
  },
  data() {
    return {
      formData: {
        truckIds: null,
        manualLanes: [
          {
            targetRpm: '',
            targetWeight: '',
            origin: {
              streetAddress: '',
              city: '',
              state: '',
              zipCode: '',
              latitude: '',
              longitude: '',
              deadhead: '',
              statesArray: [],
            },
            destination: {
              streetAddress: '',
              city: '',
              state: '',
              zipCode: '',
              latitude: '',
              longitude: '',
              deadhead: '',
              statesArray: [],
            },
          },
        ],
        frequentType: null,
        weeklySelectedDays: null,
        onceTimeRange: null,
        startTime: null,
        endTime: null,
      },
      showErrors: false,
    };
  },
  created() {
    this.initFormData();
  },
  methods: {
    initFormData() {
      if (this.scheduleFormData) {
        const scheduleFormData = JSON.parse(
          JSON.stringify(this.scheduleFormData)
        );
        const { truckId, onceTimeRange } = scheduleFormData || {};
        const { startDate, endDate } = onceTimeRange || {};
        if (startDate && endDate) {
          scheduleFormData.onceTimeRange = `${startDate} to ${endDate}`;
        }
        if (truckId) {
          scheduleFormData.truckIds = this.truckOptions.filter(
            (truck) => truck.truck_id === truckId
          );
        }
        this.formData = scheduleFormData;
      }
    },
    resetState() {
      this.formData = {
        truckIds: null,
        manualLanes: [
          {
            targetRpm: '',
            targetWeight: '',
            origin: {
              streetAddress: '',
              city: '',
              state: '',
              zipCode: '',
              latitude: '',
              longitude: '',
              deadhead: '',
              statesArray: [],
            },
            destination: {
              streetAddress: '',
              city: '',
              state: '',
              zipCode: '',
              latitude: '',
              longitude: '',
              deadhead: '',
              statesArray: [],
            },
          },
        ],
        frequentType: null,
        weeklySelectedDays: null,
        onceTimeRange: null,
        startTime: null,
        endTime: null,
      };
      this.showErrors = false;
    },
    async validate() {
      this.showErrors = true;
      let validFreq, validManualLanes;
      const freqCalculator = this.$refs.freqCalculator || null;
      if (freqCalculator) {
        validFreq = await freqCalculator.validate();
      }
      const manualLanes = this.$refs.manualLanes || null;
      if (manualLanes) {
        validManualLanes = await manualLanes.validate();
      }
      return validFreq && validManualLanes;
    },
    generateSchedulePayload() {
      const freqData = this.$refs.freqCalculator.freqData || {};
      const payload = {
        truckIds: this.formData.truckIds.map((truck) => {
          return {
            truckId: truck.truck_id,
          };
        }),
        manualLanes: this.formData.manualLanes,
        ...freqData,
      };
      const { truckAvalRptSchedId, truckAvalOnceSchedId } =
        this.scheduleFormData || {};
      if (truckAvalRptSchedId) {
        payload.truckAvalRptSchedId = truckAvalRptSchedId;
      }
      if (truckAvalOnceSchedId) {
        payload.truckAvalOnceSchedId = truckAvalOnceSchedId;
      }
      return payload;
    },
    onConfirmDelete() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm',
        text: 'Are you sure you want to delete this schedule?',
        acceptText: 'Yes',
        accept: () => this.deleteSchedule(),
      });
    },
    async deleteSchedule() {
      const { truckAvalRptSchedId, truckAvalOnceSchedId } =
        this.scheduleFormData || {};
      let payload = {};
      if (truckAvalRptSchedId) {
        payload.truckAvalRptSchedId = truckAvalRptSchedId;
      } else if (truckAvalOnceSchedId) {
        payload.truckAvalOnceSchedId = truckAvalOnceSchedId;
      }
      this.$emit('deleteSchedule', payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.delete-icon {
  cursor: pointer;
}
.left-block {
  width: 55%;
  max-width: 55%;
}
.right-block {
  width: 40%;
  max-width: 40%;
  margin-left: 5%;
}
</style>
