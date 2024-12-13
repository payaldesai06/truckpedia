<template>
  <vs-sidebar
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="lane-sidebar"
    :click-not-close="true"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div>
      <div class="flex justify-between items-center vs-header-sidebar">
        <div>
          <h4>{{ editMode ? 'Edit' : 'New' }} Lane</h4>
        </div>
        <div
          @click.stop="closeSidebar"
          style="width: 30px"
          class="cursor-pointer"
        >
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style="color: rgb(109, 114, 126)"
            size="24"
            id="sideModalCloseButton"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            ></path>
          </svg>
        </div>
      </div>
      <template>
        <div class="vs-sidebar-form mt-3">
          <div class="vs-row">
            <div
              class="vs-col lg:w-1/3 md:w-1/2 sm:w-full mb-5 lg:pr-4 md:pr-4"
            >
              <label>Origin Name</label>
              <vs-input v-model="laneData.origin.name" class="w-full" />
            </div>
            <div
              class="vs-col lg:w-1/3 md:w-1/2 sm:w-full mb-5 lg:pr-4 md:pr-0"
            >
              <label>Origin Address<field-required-sign /></label>
              <gmap-autocomplete
                class="vs-inputx vs-input--input normal hasValue"
                placeholder=""
                :value="originAddress"
                @place_changed="getChangedPlace($event, 'origin')"
                @input="handleInput($event, 'origin')"
                :options="googleMapAutoCompleteOptions"
                :select-first-on-enter="true"
              >
              </gmap-autocomplete>
              <span class="text-danger text-sm" v-if="!isOrigin">
                Please enter valid origin address
              </span>
            </div>
            <div
              class="vs-col lg:w-1/3 md:w-full sm:w-full mb-5 lg:pr-4 md:pr-0"
            >
              <label>Origin Code</label>
              <vs-input v-model="laneData.origin.code" class="w-full" />
            </div>
          </div>
          <div class="vs-row">
            <div
              class="vs-col lg:w-1/3 md:w-1/2 sm:w-full mb-5 lg:pr-4 md:pr-4"
            >
              <label>Destination Name</label>
              <vs-input v-model="laneData.destination.name" class="w-full" />
            </div>
            <div
              class="vs-col lg:w-1/3 md:w-1/2 sm:w-full mb-5 lg:pr-4 md:pr-0"
            >
              <label>Destination Address<field-required-sign /></label>
              <gmap-autocomplete
                class="vs-inputx vs-input--input normal hasValue"
                placeholder=""
                :value="destinationAddress"
                @place_changed="getChangedPlace($event, 'destination')"
                @input="handleInput($event, 'destination')"
                :options="googleMapAutoCompleteOptions"
                :select-first-on-enter="true"
              >
              </gmap-autocomplete>
              <span class="text-danger text-sm" v-if="!isDestination">
                Please enter valid destination address
              </span>
            </div>
            <div
              class="vs-col lg:w-1/3 md:w-full sm:w-full mb-5 lg:pr-4 md:pr-0"
            >
              <label>Destination Code</label>
              <vs-input v-model="laneData.destination.code" class="w-full" />
            </div>
          </div>
          <div class="vs-row">
            <div
              class="vs-col lg:w-1/4 md:w-1/2 lg:pr-4 sm:w-full mb-5 lg:pr-4 md:pr-4"
            >
              <label>Lane Code</label>
              <vs-input v-model="laneData.code" name="code" class="w-full" />
            </div>
            <div
              class="vs-col lg:w-1/4 md:w-1/2 sm:w-full mb-5 lg:pr-4 md:pr-0"
            >
              <label for="distance">Distance <field-required-sign /></label>
              <vs-input
                type="number"
                v-model="laneData.distance"
                data-vv-validate-on="blur"
                v-validate="'required|between:1,999999.99'"
                name="distance"
                class="w-full"
              />
              <span class="text-danger text-sm">
                {{ errors.first('distance') }}
              </span>
            </div>
            <div
              class="vs-col lg:w-1/4 md:w-1/2 sm:w-full mb-5 lg:pr-4 md:pr-4"
            >
              <label>RPM</label>
              <vs-input
                type="number"
                icon="attach_money"
                data-vv-validate-on="blur"
                v-validate="'between:1,99.9999'"
                v-model="laneData.rpm"
                name="RPM"
                class="w-full"
              />
              <span class="text-danger text-sm">
                {{ errors.first('RPM') }}
              </span>
            </div>
            <div
              class="vs-col lg:w-1/4 md:w-1/2 sm:w-full mb-5 lg:pr-4 md:pr-0"
            >
              <label>Rate</label>
              <vs-input
                type="number"
                icon="attach_money"
                data-vv-validate-on="blur"
                v-validate="'between:1,999999.99'"
                v-model="laneData.rate"
                name="Rate"
                class="w-full"
              />
              <span class="text-danger text-sm">
                {{ errors.first('Rate') }}
              </span>
            </div>
          </div>
          <div class="vs-row">
            <div
              class="vs-col lg:w-1/4 md:w-1/2 sm:w-full mb-5 lg:pr-4 md:pr-4"
            >
              <label>Round Trip Distance</label>
              <vs-input
                type="number"
                v-model="laneData.roundTripDistance"
                data-vv-validate-on="blur"
                v-validate="'between:1,999999.99'"
                name="Round trip distance"
                class="w-full"
              />
              <span class="text-danger text-sm">
                {{ errors.first('Round trip distance') }}
              </span>
            </div>
            <div
              class="vs-col lg:w-1/4 md:w-1/2 sm:w-full mb-5 lg:pr-4 md:pr-0"
            >
              <label>Round Trip Rate</label>
              <vs-input
                type="number"
                icon="attach_money"
                v-model="laneData.roundTripRate"
                data-vv-validate-on="blur"
                v-validate="'between:1,999999.99'"
                name="Round trip rate"
                class="w-full"
              />
              <span class="text-danger text-sm">
                {{ errors.first('Round trip rate') }}
              </span>
            </div>
            <div
              class="vs-col lg:w-1/4 md:w-full sm:w-full mb-5 lg:pr-4 md:pr-0"
            >
              <label>Direction</label>
              <v-select
                :options="directions"
                v-model="laneData.direction"
                :reduce="(option) => option.value"
                :clearable="true"
                class="w-full"
              />
            </div>
            <div
              class="vs-col lg:w-1/4 md:w-full sm:w-full mb-5 lg:pr-4 md:pr-0"
            >
              <label>Effective Date</label>
              <vs-button
                color="warning"
                type="flat"
                size="small"
                style="padding: 0; margin-left: 1rem"
                @click="clearEffectiveDate"
                :disabled="!laneData.effectiveDate"
              >
                Clear
              </vs-button>
              <flat-pickr
                class="w-full"
                v-model="laneData.effectiveDate"
                :config="configDateFlatPickr"
              />
            </div>
          </div>
          <div class="vs-row">
            <div
              class="relative w-full border border-solid border-radius-5px min-h-20 mb-5"
              style="border-color: #0003"
            >
              <label
                class="absolute bg-white top--10px left-10px padding-0-5px"
              >
                Fuel Surcharge
              </label>

              <div class="vs-col w-full mt-5">
                <div class="flex px-3 md:items-center overflow-auto">
                  <p class="m-2 md-text-nowrap">(Fuel Price -</p>
                  <div class="flex flex-col">
                    <vs-input
                      type="number"
                      step="any"
                      placeholder="Default Price"
                      style="width: 100px"
                      v-model="laneData.fuelSurchargeV2"
                    />
                  </div>

                  <p class="mx-2 mt-2 md:mt-0">)/</p>
                  <div class="flex flex-col">
                    <vs-input
                      class="mr-10"
                      type="number"
                      step="any"
                      placeholder="MPG"
                      style="width: 80px"
                      v-model="laneData.fuelSurchargeV3"
                    />
                  </div>
                  <div class="flex flex-col">
                    <vs-input
                      class="mx-auto mr-4"
                      type="number"
                      step="any"
                      placeholder="Flat Fee"
                      style="width: 100px"
                      v-model="laneData.fuelSurchargeRate"
                    />
                  </div>
                  <div class="flex flex-col">
                    <vs-input
                      class="mx-auto"
                      type="number"
                      step="any"
                      placeholder="Round Trip Flat Fee"
                      style="max-width: 180px"
                      v-model="laneData.fuelSurchargeRoundTripRate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="vs-row" v-if="laneData.effectiveDate">
            <div class="vs-col lg:w-1/3 md:w-1/2 sm:w-full pr-4 mb-5">
              <label>Previous RPM</label>
              <vs-input
                type="number"
                icon="attach_money"
                v-model="laneData.previousRpm"
                data-vv-validate-on="blur"
                v-validate="'between:0,99.9999'"
                name="Previous RPM"
                class="w-full"
              />
              <span class="text-danger text-sm">
                {{ errors.first('Previous RPM') }}
              </span>
            </div>
            <div class="vs-col lg:w-1/3 md:w-1/2 sm:w-full pr-4 mb-5">
              <label>Previous Rate</label>
              <vs-input
                type="number"
                icon="attach_money"
                v-model="laneData.previousRate"
                data-vv-validate-on="blur"
                v-validate="'between:0,999999.99'"
                name="Previous rate"
                class="w-full"
              />
              <span class="text-danger text-sm">
                {{ errors.first('Previous rate') }}
              </span>
            </div>
            <div class="vs-col lg:w-1/3 md:w-1/2 sm:w-full mb-5">
              <label>Previous Round Trip Rate</label>
              <vs-input
                type="number"
                icon="attach_money"
                v-model="laneData.previousRoundTripRate"
                data-vv-validate-on="blur"
                v-validate="'between:0,999999.99'"
                name="Previous round trip rate"
                class="w-full"
              />
              <span class="text-danger text-sm">
                {{ errors.first('Previous round trip rate') }}
              </span>
            </div>
          </div>
          <div class="vs-col w-full pb-3">
            <label>Notes</label>
            <vs-textarea v-model="laneData.notes" class="w-full" />
          </div>
          <div class="vs-row">
            <div class="vs-col w-full mt-2">
              <div class="vs-row pt-6 flex justify-end space-x-2">
                <vs-button type="border" @click.stop="closeSidebar"
                  >Cancel</vs-button
                >
                <vs-button :disabled="isSaveDisabled" @click="handleSubmit">{{
                  editMode ? 'Update' : 'Save'
                }}</vs-button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </vs-sidebar>
</template>

<script>
import setPlaceMixin from '@/mixins/setPlaceMixin.js';
import {
  getApiErrorMsg,
  getObjectDifference,
  emptyStringToNull,
  nullToEmptyString,
  isValidInputValue,
} from '@/helpers/helper';
import config from '@/config/constants.js';
export default {
  name: 'add-lane',
  props: {
    laneSidebar: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      laneData: {
        origin: {
          name: '',
          streetAddress: '',
          city: '',
          state: '',
          postalCode: '',
          latitude: '',
          longitude: '',
          code: '',
        },
        destination: {
          name: '',
          streetAddress: '',
          city: '',
          state: '',
          postalCode: '',
          latitude: '',
          longitude: '',
          code: '',
        },
        distance: null,
        code: '',
        rpm: null,
        rate: null,
        notes: '',
        roundTripDistance: null,
        roundTripRate: null,
        effectiveDate: null,
        direction: null,
        previousRpm: null,
        previousRate: null,
        previousRoundTripRate: null,
        fuelSurchargeV2: null,
        fuelSurchargeV3: null,
        fuelSurchargeRate: null,
        fuelSurchargeRoundTripRate: null,
      },
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      originAddress: '',
      destinationAddress: '',
      isOrigin: true,
      isDestination: true,
      laneForUpdate: null,
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d',
      },
      directions: [
        {
          label: 'Outbound',
          value: 'outbound',
        },
        {
          label: 'Inbound',
          value: 'inbound',
        },
      ],
    };
  },
  mixins: [setPlaceMixin],
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.laneSidebar.isActive;
      },
      set(val) {
        if (!val) {
          this.closeSidebar();
        }
      },
    },
    editMode() {
      return this.laneSidebar.id ? true : false;
    },
    isSaveDisabled() {
      if (
        this.errors.any() ||
        !this.isOrigin ||
        !this.isDestination ||
        !this.laneData.origin ||
        !this.laneData.destination ||
        !this.laneData.distance ||
        (this.editMode &&
          JSON.stringify(this.laneData) === JSON.stringify(this.laneForUpdate))
      ) {
        return true;
      } else return false;
    },
    validateFuelSurchargeV2() {
      if (isValidInputValue(this.laneData.fuelSurchargeV3)) {
        return 'required|between:0,99.9999';
      }
      return 'between:0,99.9999';
    },
    validateFuelSurchargeV3() {
      if (isValidInputValue(this.laneData.fuelSurchargeV2)) {
        return 'required|between:0.01,99.9999';
      }
      return 'between:0.0001,99.9999';
    },
  },
  methods: {
    closeSidebar() {
      this.$emit('closeSidebar');
      this.reset();
      this.$validator.reset();
    },
    getLocationString(address, city, state) {
      let ret = city + ', ' + state;
      if (address && address != city) {
        ret = address + ', ' + ret;
      }
      return ret;
    },
    getChangedPlace(place, field) {
      // Extract address components from the provided place
      const { address, city, state, zipCode, latitude, longitude } =
        this.setPlace(place);
      const finalLocation = {
        ...this.laneData[field],
        city,
        state,
        latitude,
        longitude,
        streetAddress: address,
        postalCode: zipCode || null,
      };
      this.laneData[field] = finalLocation;
      if (field === 'origin') {
        this.originAddress = this.getLocationString(address, city, state);
        this.isOrigin =
          !finalLocation.city || !finalLocation.state ? false : true;
      } else {
        this.destinationAddress = this.getLocationString(address, city, state);
        this.isDestination =
          !finalLocation.city || !finalLocation.state ? false : true;
      }
    },
    reset() {
      this.laneData = {
        origin: {
          name: '',
          streetAddress: '',
          city: '',
          state: '',
          postalCode: '',
          latitude: '',
          longitude: '',
          code: '',
        },
        destination: {
          name: '',
          streetAddress: '',
          city: '',
          state: '',
          postalCode: '',
          latitude: '',
          longitude: '',
          code: '',
        },
        distance: null,
        code: '',
        rpm: null,
        rate: null,
        notes: '',
        roundTripDistance: null,
        roundTripRate: null,
        effectiveDate: null,
        direction: null,
        previousRpm: null,
        previousRate: null,
        previousRoundTripRate: null,
        fuelSurchargeV2: null,
        fuelSurchargeV3: null,
        fuelSurchargeRate: null,
        fuelSurchargeRoundTripRate: null,
      };
      this.originAddress = '';
      this.destinationAddress = '';
      this.isOrigin = true;
      this.isDestination = true;
    },
    removeEmptyFields(payload) {
      return Object.fromEntries(
        Object.entries(payload).filter(
          ([_, v]) =>
            (v != '' && v != null) ||
            (typeof v == 'object' && v != null && v.length) ||
            typeof v === 'boolean'
        )
      );
    },
    handleInput(event, type) {
      if (!event.target.value) {
        if (type == 'origin') {
          this.laneData.origin = {
            name: this.laneData.origin.name,
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
            latitude: '',
            longitude: '',
          };
          this.originAddress = '';
          this.isOrigin = false;
        } else {
          this.laneData.destination = {
            name: this.laneData.destination.name,
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
            latitude: '',
            longitude: '',
          };
          this.destinationAddress = '';
          this.isDestination = false;
        }
      }
    },
    async handleSubmit() {
      try {
        if (!this.validateFuelSurcharge()) {
          return false;
        }
        this.$vs.loading();
        let payload = null;
        let response = null;
        if (this.editMode) {
          const changedOrigin = getObjectDifference(
            this.laneForUpdate.origin,
            this.laneData.origin
          );
          const changedDestination = getObjectDifference(
            this.laneForUpdate.destination,
            this.laneData.destination
          );
          const changedValues = getObjectDifference(
            this.laneForUpdate,
            this.laneData
          );
          delete changedValues.origin; // deleting previous value
          delete changedValues.destination; // deleting previous value
          payload = {
            customerId: this.$route.params.id,
            laneId: this.laneForUpdate.id,
            ...changedValues,
            ...(Object.keys(changedOrigin).length && {
              origin: this.laneData.origin,
              distance: this.laneData.distance,
            }),
            ...(Object.keys(changedDestination).length && {
              destination: this.laneData.destination,
              distance: this.laneData.distance,
            }),
          };
          emptyStringToNull(payload);
          response = await this.$store.dispatch(
            'customer/updateCustomerLane',
            payload
          );
        } else {
          this.laneData.origin = this.removeEmptyFields(this.laneData.origin);
          this.laneData.destination = this.removeEmptyFields(
            this.laneData.destination
          );
          payload = this.removeEmptyFields({
            ...this.laneData,
            customerId: this.$route.params.id,
          });
          if (Object.keys(payload).length) {
            response = await this.$store.dispatch(
              'customer/addCustomerLane',
              payload
            );
          }
        }
        this.$vs.notify({
          color: 'primary',
          title: 'Success',
          text: `Customer Lane ${
            this.editMode ? 'Updated' : 'Created'
          } Successfully`,
        });
        this.$store.commit('customer/resetCachedCustomerLanes');
        this.$emit('laneUpdated');
        this.closeSidebar();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    validateFuelSurcharge() {
      if (
        isValidInputValue(this.laneData.fuelSurchargeV2) &&
        !isValidInputValue(this.laneData.fuelSurchargeV3)
      ) {
        this.showError('MPG is required when Default Price is present');
        return false;
      } else if (
        !isValidInputValue(this.laneData.fuelSurchargeV2) &&
        isValidInputValue(this.laneData.fuelSurchargeV3)
      ) {
        this.showError('Default Price is required when MPG is present');
        return false;
      } else if (
        isValidInputValue(this.laneData.fuelSurchargeV2) &&
        (this.laneData.fuelSurchargeV2 < 0 ||
          this.laneData.fuelSurchargeV2 > 99.9999)
      ) {
        this.showError('Default Price should be between 0 and 99.9999');
        return false;
      } else if (
        isValidInputValue(this.laneData.fuelSurchargeV3) &&
        (this.laneData.fuelSurchargeV3 < 0.0001 ||
          this.laneData.fuelSurchargeV3 > 99.9999)
      ) {
        this.showError('MPG should be between 0.0001 and 99.9999');
        return false;
      } else if (
        isValidInputValue(this.laneData.fuelSurchargeRate) &&
        (this.laneData.fuelSurchargeRate <= 0 ||
          this.laneData.fuelSurchargeRate > 999999.99)
      ) {
        this.showError(
          'Fuel Surcharge Rate should be between 0 and 999,999.99'
        );
        return false;
      } else if (
        isValidInputValue(this.laneData.fuelSurchargeRoundTripRate) &&
        (this.laneData.fuelSurchargeRoundTripRate <= 0 ||
          this.laneData.fuelSurchargeRoundTripRate > 999999.99)
      ) {
        this.showError(
          'Fuel Surcharge Round Trip Rate should be between 0 and 999,999.99'
        );
        return false;
      } else {
        return true;
      }
    },
    showError(error) {
      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: error,
      });
    },
    clearEffectiveDate() {
      this.laneData.effectiveDate = null;
      this.laneData.previousRate = '';
      this.laneData.previousRpm = '';
      this.laneData.previousRoundTripRate = '';
    },
    async getLaneById(laneId) {
      try {
        const payload = {
          customerId: this.$route.params.id,
          laneId,
        };
        const { data } = await this.$store.dispatch(
          'customer/getCustomerLaneById',
          payload
        );
        nullToEmptyString(data.payload, ['effectiveDate']);
        this.laneForUpdate = structuredClone(data.payload); // for comparison
        this.laneData = structuredClone(data.payload); // for real time change, its also effecting existing data in table
        this.originAddress = this.getLocationString(
          data.payload.origin.streetAddress,
          data.payload.origin.city,
          data.payload.origin.state
        );
        this.destinationAddress = this.getLocationString(
          data.payload.destination.streetAddress,
          data.payload.destination.city,
          data.payload.destination.state
        );
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
  watch: {
    'laneSidebar.id': {
      handler(value) {
        if (value) {
          this.getLaneById(value);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.lane-sidebar {
  .vs-sidebar--items {
    overflow: auto;
    padding: 1rem 1.5rem;
  }
  .vs-sidebar {
    max-width: 60vw;
  }
  .icon-inputx {
    margin-top: 0.25rem;
  }
}

.md-text-nowrap {
  text-wrap: nowrap;
}
.border-radius-5px {
  border-radius: 5px;
}

.min-h-20 {
  min-height: 5rem; /* 80px */
}

.top--10px {
  top: -10px;
}

.left-10px {
  left: 10px;
}

.padding-0-5px {
  padding: 0 5px;
}
</style>
