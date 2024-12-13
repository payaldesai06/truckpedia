<template>
  <div class="planning-schedule-form w-full">
    <Dialog
      class="dialog driver-time-off-form schedule-form-dialog"
      :visible="isDialogActive"
      :closable="false"
      :modal="true"
      :style="{ minHeight: '50vh' }"
    >
      <!-- Header Section -->
      <template #header>
        <div class="w-full flex items-center justify-between">
          <div class="w-full flex justify-between border-right">
            <div class="flex self-center">
              <strong>
                <span v-if="isEditMode"> Update </span>
                <span v-else>Add new </span>
                schedule
              </strong>
            </div>
            <div class="flex self-center">
              <InlineMessage v-if="isEditMode" severity="info" type="info">
                TruckNumber : {{ truckIdToUpdate[0].truck_number }}
              </InlineMessage>
            </div>
          </div>
        </div>
      </template>
      <!-- Body Section -->
      <div class="form-container" v-if="isEditMode">
        <vs-divider />
        <template v-for="(schedule, index) in scheduleFormArray">
          <ScheduleFormCard
            ref="scheduleFormCard"
            :key="`${index}-${schedule.truckId}-${
              schedule.truckAvalRptSchedId
                ? schedule.truckAvalRptSchedId
                : schedule.truckAvalOnceSchedId
            }`"
            :scheduleFormData="schedule"
            :truckOptions="truckOptions"
            :arrayLength="scheduleFormArray.length"
            @deleteSchedule="deleteSchedule(index, $event)"
          />
          <vs-divider />
        </template>
      </div>
      <div class="form-container" v-else>
        <ScheduleFormCard
          ref="scheduleFormCard"
          :scheduleFormData="createScheduleData"
          :truckOptions="truckOptions"
        />
      </div>

      <!-- Footer Section -->
      <template #footer>
        <div class="w-full mt-4 flex justify-between">
          <div class="flex">
            <vs-button
              class="w-full"
              color="primary"
              type="flat"
              @click="toggleAccessorialFeePopup"
            >
              Configure Accessorial Fees
            </vs-button>
          </div>
          <div class="w-1/3 flex ml-auto">
            <vs-button class="w-full" color="primary" @click="submitForm">
              Save
            </vs-button>
            <vs-button
              class="w-full mr-0"
              color="primary"
              type="border"
              @click.stop="close"
            >
              Cancel
            </vs-button>
          </div>
        </div>
      </template>
    </Dialog>

    <accessorial-fee-popup
      v-if="isAccessorialFeePopupActive"
      :isPromptActive="isAccessorialFeePopupActive"
      @toggleDialog="toggleAccessorialFeePopup"
      @saveDetails="updateAccessorialFee"
    />
  </div>
</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.min.css';
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'ScheduleFormDialog',
  props: {
    isDialogActive: {
      type: Boolean,
      default: false,
    },
    schedulesArray: {
      type: Object | Array,
      default: () => null,
    },
    truckOptions: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ScheduleFormCard: () => import('./ScheduleFormCard'),
    InlineMessage: () => import('primevue/inlinemessage'),
    AccessorialFeePopup: () => import('../AccessorialFeePopup.vue'),
  },
  data() {
    return {
      scheduleFormArray: [],
      showErrors: false,
      truckIdToUpdate: null,
      createScheduleData: null,
      hasDataChanged: false,
      isAccessorialFeePopupActive: false,
    };
  },
  computed: {
    isEditMode() {
      return !!(this.schedulesArray && this.schedulesArray.length);
    },
  },
  created() {
    this.initFormData();
  },
  methods: {
    initFormData() {
      if ((this.schedulesArray || []).length) {
        this.scheduleFormArray = this.schedulesArray;
        if (this.schedulesArray[0].truckId) {
          this.truckIdToUpdate = this.truckOptions.filter(
            (truck) => truck.truck_id === this.schedulesArray[0].truckId
          );
        }
      } else {
        this.scheduleFormArray = [];
        this.truckIdToUpdate = null;
      }
    },
    close() {
      this.$emit('close');
      if (this.hasDataChanged) {
        this.$emit('refresh');
      }
    },
    async validate() {
      if (this.isEditMode) {
        let valid = true;
        await Promise.all(
          this.$refs.scheduleFormCard.map(async (ref) => {
            const res = await ref.validate();
            valid = valid && res;
          })
        );
        return valid;
      } else {
        // Create Mode
        let valid = await this.$refs.scheduleFormCard.validate();
        return valid;
      }
    },
    async submitForm() {
      const formValidated = await this.validate();
      if (formValidated) {
        this.showErrors = false;
        this.submitData();
      } else {
        this.showErrors = true;
        this.$vs.notify({
          title: 'Error',
          text: 'Please fill all required fields',
          color: 'danger',
        });
      }
    },
    async generateSchedulePayload() {
      if (this.isEditMode) {
        let updates = [];
        await Promise.all(
          this.$refs.scheduleFormCard.map(async (ref) => {
            const res = await ref.generateSchedulePayload();
            updates.push(res);
          })
        );
        return {
          updates,
        };
      } else {
        return await this.$refs.scheduleFormCard.generateSchedulePayload();
      }
    },
    async submitData() {
      const payload = await this.generateSchedulePayload();
      try {
        if (this.isEditMode) {
          //Edit Mode
          await this.batchScheduleUpdate(payload);
        } else {
          // Create Mode
          await this.createSchedule(payload);
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    async createSchedule(payload) {
      try {
        const { data } = await this.$store.dispatch(
          'planningV2/createSchedule',
          payload
        );
        this.$vs.notify({
          title: 'Schedule',
          text: 'Schedule created successfully',
          color: 'success',
        });
        this.$emit('close');
        this.$emit('refresh');
      } catch (error) {
        console.log('error', error);
        this.$vs.notify({
          title: 'Error',
          text: 'Schedule create failed',
          color: 'danger',
        });
      }
    },
    async updateSchedule(payload) {
      try {
        const { data } = await this.$store.dispatch(
          'planningV2/updateSchedule',
          payload
        );
        this.$vs.notify({
          title: 'Schedule',
          text: 'Schedule updated successfully',
          color: 'success',
        });
        this.$emit('close');
        this.$emit('refresh');
      } catch (error) {
        console.log('error', error);
        this.$vs.notify({
          title: 'Error',
          text: 'Schedule updated failed',
          color: 'danger',
        });
      }
    },
    async batchScheduleUpdate(payload) {
      try {
        const { data } = await this.$store.dispatch(
          'planningV2/batchScheduleUpdate',
          payload
        );
        this.$vs.notify({
          title: 'Schedules',
          text: 'Schedules updated successfully',
          color: 'success',
        });
        this.$emit('close');
        this.$emit('refresh');
      } catch (error) {
        console.log('error', error);
        this.$vs.notify({
          title: 'Error',
          text: 'Schedules updated failed',
          color: 'danger',
        });
      }
    },
    async deleteSchedule(ix, payload) {
      try {
        const { data } = await this.$store.dispatch(
          'planningV2/deleteSchedule',
          payload
        );
        this.hasDataChanged = true;
        this.scheduleFormArray.splice(ix, 1);
        this.$vs.notify({
          title: 'Delete Schedule',
          text: 'Schedule deleted successfully',
          color: 'success',
        });
        this.$forceUpdate();
        if (this.scheduleFormArray.length === 0) {
          this.$emit('close');
          this.$emit('refresh');
        }
      } catch (error) {
        console.log('error', error);
        this.$vs.notify({
          title: 'Error',
          text: 'Failed to delete schedule',
          color: 'danger',
        });
      }
    },
    toggleAccessorialFeePopup() {
      this.isAccessorialFeePopupActive = !this.isAccessorialFeePopupActive;
    },
    async updateAccessorialFee(data) {
      try {
        this.isAccessorialFeePopupActive = false;
        await this.$store.dispatch('planningV2/updateAccessorialFee', data);
        this.$vs.notify({
          title: 'Accessorial Fee',
          text: 'Accessorial Fee updated successfully',
          color: 'success',
        });

        this.$store.dispatch('planningV2/getAccessorialFee');
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flatpickr-calendar.open {
  z-index: 100002 !important;
}
.planning-schedule-form {
  .left-block,
  .right-block {
    width: 50%;
    max-width: 50%;
  }
}

::v-deep {
  .p-dialog-content {
    min-height: 420px;
  }
}

.schedule-form-dialog {
  ::v-deep {
    .p-dialog {
      width: 80vw !important;
    }
  }
}
/* 1100px and down */
@media only screen and (max-width: 1100px) {
  .schedule-form-dialog {
    ::v-deep {
      .p-dialog {
        width: 92vw !important;
      }
    }
  }
}
/* 1500px and up */
@media only screen and (min-width: 1500px) {
  .schedule-form-dialog {
    ::v-deep {
      .p-dialog {
        width: 70vw !important;
      }
    }
  }
}
</style>
<style lang="scss">
.vs-component.con-vs-dialog.vs-dialog-danger {
  z-index: 100003;
}
.p-inline-message-icon {
  display: none;
}
</style>
