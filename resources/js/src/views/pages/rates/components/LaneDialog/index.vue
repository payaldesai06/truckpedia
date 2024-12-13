<template>
  <div class="planning-schedule-form w-full">
    <Dialog
      class="dialog driver-time-off-form schedule-form-dialog"
      :visible="isDialogActive"
      :closable="false"
      :modal="true"
      :style="{ minHeight: '38vh', background: '#fff' }"
    >
      <!-- Header Section -->
      <template #header>
        <div class="w-full flex items-center justify-between">
          <div class="w-full flex justify-between border-right">
            <div class="flex self-center">
              <strong>
                <span v-if="isEditMode"> Update </span>
                <span v-else>Add new </span>
                Lane
              </strong>
            </div>
          </div>
        </div>
      </template>
      <!-- Body Section -->
      <div class="schedule-form-card">
        <!-- Body Section -->
        <div class="form-container">
          <section class="flex">
            <div class="left-block flex vx-col">
              <div class="w-full">
                <!-- Routes Block  -->
                <RouteSelectionCard
                  :truckOptions="truckOptions"
                  v-model="routeForm"
                  ref="routeCard"
                  :editMode="isEditMode"
                  class="mt-5"
                />
              </div>
            </div>
            <div class="right-block vx-col">
              <!-- Frequency selector  -->
              <div class="frequency-selector">
                <FrequencyCalculator
                  :frequencyData="frequencyForm"
                  :showErrors="showErrors"
                  :isEdit="isEditMode"
                />
              </div>
            </div>
          </section>
        </div>
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
            <vs-button
              class="w-full"
              color="primary"
              :disabled="isDisabled"
              @click="submitForm"
            >
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
import GoogleMapMixin from '@/mixins/googleMapMixin';
import { isEqual } from 'lodash';

export default {
  name: 'LaneDialog',
  props: {
    isDialogActive: {
      type: Boolean,
      default: false,
    },
    truckOptions: {
      type: Array,
      default: () => [],
    },
    lane: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    RouteSelectionCard: () => import('./RouteSelection.vue'),
    FrequencyCalculator: () => import('./FrequencyCalculator.vue'),
    AccessorialFeePopup: () => import('./AccessorialFeePopup.vue'),
  },
  data() {
    return {
      originalLaneData: {},
      routeForm: {
        rpm: '',
        maxWeight: '',
        trucks: [],
        maxRpm: null,
        minRate: '',
        origin: {
          states: [],
          geofence: {
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
            latitude: '',
            longitude: '',
            deadhead: '',
          },
        },
        destination: {
          states: [],
          geofence: {
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
            latitude: '',
            longitude: '',
            deadhead: '',
          },
        },
      },
      frequencyForm: {
        repeat: '',
        startTime: null,
        endTime: null,
        equipmentTypes: '',
        weeklyDays: [],
        startDate: '',
        endDate: '',
      },
      showErrors: false,
      isAccessorialFeePopupActive: false,
    };
  },
  mixins: [GoogleMapMixin],

  computed: {
    isEditMode() {
      return !!Object.keys(this.lane).length;
    },
    isDisabled() {
      if (Object.keys(this.originalLaneData).length) {
        const payload = { ...this.routeForm, ...this.frequencyForm };

        let updatedObject = this.findDifference(this.originalLaneData, payload);
        delete updatedObject.distance;
        delete updatedObject.id;
        updatedObject = this.removeNullValues(updatedObject);

        return !Object.keys(updatedObject).length;
      } else {
        return false;
      }
    },
  },
  watch: {
    lane: {
      handler: function (val) {
        this.initFormData();
      },
    },
  },
  methods: {
    initFormData() {
      this.resetForm();
      if (this.lane.trucks && this.lane.trucks.length) {
        this.lane.trucks = this.lane.trucks.map(({ id }) =>
          this.truckOptions.find(({ truck_id }) => truck_id === id)
        );
      }
      if (this.lane.maxWeight) {
        this.lane.maxWeight = this.lane.maxWeight.toString();
      }
      if (this.lane.origin && this.lane.origin.geofence) {
        this.lane.origin.geofence.deadhead =
          this.lane.origin.geofence.deadhead.toString();
      }
      if (this.lane.destination && this.lane.destination.geofence) {
        this.lane.destination.geofence.deadhead =
          this.lane.destination.geofence.deadhead.toString();
      }
      this.originalLaneData = structuredClone(this.lane);
      if (!!Object.keys(this.lane).length) {
        for (let key in this.frequencyForm) {
          if (this.lane[key]) this.frequencyForm[key] = this.lane[key];
          else delete this.frequencyForm[key];
        }
        for (let key in this.routeForm) {
          if (this.lane[key]) this.routeForm[key] = this.lane[key];
          else delete this.routeForm[key];
        }
      } else {
        this.resetForm();
      }
    },
    close() {
      this.$emit('close');
    },
    validateFrequencyForm(formData) {
      this.showErrors = true;
      if ((formData.equipmentTypes || []).length === 0) {
        return false;
      }
      if (
        (formData.startTime === null &&
          formData.endTime &&
          formData.endTime !== null) ||
        (formData.startTime &&
          formData.startTime !== null &&
          formData.endTime === null)
      ) {
        return false;
      }
      if (
        (formData.startTime && !formData.endTime) ||
        (formData.endTime && !formData.startTime)
      ) {
        return false;
      }

      if (formData.repeat === 'once') {
        if (formData.startDate && formData.endDate) {
          return true;
        }
      } else if (formData.repeat === 'weekly') {
        if ((formData.weeklyDays || []).length > 0) {
          return true;
        }
      }
      return false;
    },
    async submitForm() {
      const routeCardValid = await this.$refs.routeCard.validate();
      if (this.validateFrequencyForm(this.frequencyForm) && routeCardValid) {
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
    findDifference(obj1, obj2) {
      let difference = {};

      Object.keys(obj1).forEach((key) => {
        if (!isEqual(obj1[key], obj2[key])) {
          difference[key] = obj2[key];
          if (difference[key] === '') difference[key] = null;
        }
      });

      Object.keys(obj2).forEach((key) => {
        if (obj1[key] === undefined) {
          difference[key] = obj2[key];
          if (difference[key] === '') difference[key] = null;
        }
      });

      return difference;
    },
    removeNullValues(obj) {
      for (var prop in obj) {
        if (
          typeof obj[prop] === 'object' &&
          !Array.isArray(obj[prop]) &&
          obj[prop] !== null
        ) {
          this.removeNullValues(obj[prop]);
        } else if (obj[prop] === undefined) {
          delete obj[prop];
        } else if (
          (obj[prop] === '' || obj[prop] === null) &&
          this.isEditMode
        ) {
          obj[prop] = null;
          if (this.originalLaneData[prop] === null) {
            delete obj[prop];
          }
        } else if (obj[prop] === '' || (obj[prop] === null && !this.isEditMode))
          delete obj[prop];
      }

      return obj;
    },
    async submitData() {
      try {
        this.$vs.loading();

        const payload = { ...this.routeForm, ...this.frequencyForm };

        const hasOriginLatitude =
          payload.origin.geofence && payload.origin.geofence.latitude;
        const hasDestinationLatitude =
          payload.destination.geofence && payload.destination.geofence.latitude;
        const hasBothLatitudes = hasOriginLatitude && hasDestinationLatitude;
        if (this.isEditMode) {
          const updatedObject = this.findDifference(
            this.originalLaneData,
            payload
          );
          const id = this.lane.id;
          // logic for adding and  removing trucks
          if (payload.trucks && payload.trucks.length) {
            let addedIds = [],
              removedIds = [];
            const originalIds =
              this.originalLaneData.trucks.map((truck) => truck.truck_id) || [];
            const payloadIds =
              payload.trucks.map((truck) => truck.truck_id) || [];

            addedIds = payloadIds.filter(
              (truck_id) => !originalIds.includes(truck_id)
            );
            removedIds = originalIds.filter(
              (truck_id) => !payloadIds.includes(truck_id)
            );

            if (addedIds.length) {
              updatedObject.addTruckIds = addedIds;
            }
            if (removedIds.length) {
              updatedObject.removeTruckIds = removedIds;
            }
          } else if (this.originalLaneData.trucks.length) {
            updatedObject.removeTruckIds = [
              ...this.originalLaneData.trucks.map(({ truck_id }) => truck_id),
            ];
          }
          // delete trucks from object after ids to payload
          delete updatedObject.trucks;

          // logic for geofence data sending
          let originGeofence =
            updatedObject.origin && updatedObject.origin.geofence;
          let destinationGeofence =
            updatedObject.destination && updatedObject.destination.geofence;

          if (this.originalLaneData.origin.geofence && originGeofence) {
            const originDifference = this.findDifference(
              this.originalLaneData.origin.geofence,
              updatedObject.origin.geofence
            );
            if (
              Object.keys(originDifference).length === 1 &&
              originDifference.deadhead
            ) {
              updatedObject.origin = {
                geofence: originDifference,
              };
              originGeofence = false;
            }
          }
          if (
            this.originalLaneData.destination.geofence &&
            destinationGeofence
          ) {
            const originDifference = this.findDifference(
              this.originalLaneData.destination.geofence,
              updatedObject.destination.geofence
            );
            if (
              Object.keys(originDifference).length === 1 &&
              originDifference.deadhead
            ) {
              updatedObject.destination = {
                geofence: originDifference,
              };
              destinationGeofence = false;
            }
          }
          if (hasBothLatitudes && (originGeofence || destinationGeofence)) {
            // convert: meter to miles
            const totalDistanceInMeter = await this.calculateDistance(payload);
            updatedObject.distance = (totalDistanceInMeter / 1609.344).toFixed(
              2
            );
          }

          if (updatedObject.weeklyDays && updatedObject.weeklyDays.length) {
            updatedObject.weeklyDays = updatedObject.weeklyDays.map((day) =>
              this.$dayjs().day(day.value).format('dddd').toLowerCase()
            );
          } else {
            delete updatedObject.weeklyDays;
          }

          await this.updateMarketplaceLane(
            id,
            this.removeNullValues(updatedObject)
          );
        } else {
          if (hasBothLatitudes) {
            // convert: meter to miles
            const totalDistanceInMeter = await this.calculateDistance(payload);
            payload.distance = (totalDistanceInMeter / 1609.344).toFixed(2);
          }
          if (payload.trucks.length) {
            payload.truckIds = payload.trucks.map(({ truck_id }) => truck_id);
            delete payload.trucks;
          } else {
            delete payload.trucks;
          }

          if (payload.weeklyDays.length) {
            payload.weeklyDays = payload.weeklyDays.map((day) =>
              this.$dayjs().day(day.value).format('dddd').toLowerCase()
            );
          } else {
            delete payload.weeklyDays;
          }
          await this.createMarketplaceLane(this.removeNullValues(payload));
        }
      } catch (error) {
        console.log('Error:', error);
      } finally {
        this.$vs.loading.close();
      }
    },
    async createMarketplaceLane(payload) {
      try {
        await this.$store.dispatch(
          'marketplace/createMarketplaceLane',
          payload
        );
        this.$vs.notify({
          title: 'Schedule',
          text: 'Schedule created successfully',
          color: 'success',
        });
        this.$emit('getCarrierMarketplaceLanes');
        this.close();
      } catch (error) {
        console.log('error', error);
        this.$vs.notify({
          title: 'Error',
          text: 'Schedule create failed',
          color: 'danger',
        });
      }
    },
    async updateMarketplaceLane(id, payload) {
      try {
        await this.$store.dispatch('marketplace/updateMarketplaceLane', {
          id,
          payload,
        });
        this.resetForm();
        this.$vs.notify({
          title: 'Update Schedule',
          text: 'Schedule updated successfully',
          color: 'success',
        });
        this.$emit('getCarrierMarketplaceLanes');
        this.close();
      } catch (e) {
        this.$vs.notify({
          title: 'Error',
          text: 'Failed to update schedule',
          color: 'danger',
        });
      }
    },
    resetForm() {
      this.routeForm = {
        rpm: '',
        maxWeight: '',
        trucks: [],
        maxRpm: null,
        minRate: '',
        origin: {
          states: [],
          geofence: {
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
            latitude: '',
            longitude: '',
            deadhead: '',
          },
        },
        destination: {
          states: [],
          geofence: {
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
            latitude: '',
            longitude: '',
            deadhead: '',
          },
        },
      };
      this.frequencyForm = {
        repeat: '',
        startTime: null,
        endTime: null,
        equipmentTypes: [],
        weeklyDays: [],
        startDate: '',
        endDate: '',
      };
      this.showErrors = false;
    },
    async calculateDistance({ origin, destination }) {
      // Rule 1
      const routes = [
        {
          destination: {
            lat: Number(destination.geofence.latitude),
            lng: Number(destination.geofence.longitude),
          },
          origin: {
            lat: Number(origin.geofence.latitude),
            lng: Number(origin.geofence.longitude),
          },
        },
      ];

      return await this.getGoogleDistanceBetweenMultipleRoutes(routes);
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

<style lang="scss">
.flatpickr-calendar.open {
  z-index: 100002 !important;
}

.left-block {
  width: 55%;
  max-width: 55%;
}
.right-block {
  width: 40%;
  max-width: 40%;
  margin-left: 3%;
  margin-top: 35px;
}
::v-deep {
  .p-dialog-content {
    min-height: 420px;
  }
}

.vs-component.con-vs-dialog.vs-dialog-danger {
  z-index: 100003;
}
.p-inline-message-icon {
  display: none;
}
.routes-selector {
  .routes-scroll-area {
    max-height: 25vh;
    overflow-y: auto;
    overflow-x: hidden;
    /* scroll bar */
    &::-webkit-scrollbar-thumb:horizontal {
      /*The style of the horizontal scrollbar*/
      width: 4px;
      background-color: #cccccc;
      -webkit-border-radius: 6px;
    }
    &::-webkit-scrollbar-track-piece {
      background-color: #fff; /*The background color of the scrollbar*/
      -webkit-border-radius: 0; /*Fillet width of the scrollbar*/
    }
    &::-webkit-scrollbar {
      width: 10px; /*the width of the scrollbar*/
      height: 8px; /*the height of the scroll bar*/
    }
    &::-webkit-scrollbar-thumb:vertical {
      /*The style of the vertical scrollbar*/
      height: 50px;
      background-color: #999;
      -webkit-border-radius: 4px;
      outline: 2px solid #fff;
      outline-offset: -2px;
      border: 2px solid #fff;
    }
    &::-webkit-scrollbar-thumb:hover {
      /*The hover style of the scroll bar*/
      height: 50px;
      background-color: #9f9f9f;
      -webkit-border-radius: 4px;
    }
  }
}
</style>
