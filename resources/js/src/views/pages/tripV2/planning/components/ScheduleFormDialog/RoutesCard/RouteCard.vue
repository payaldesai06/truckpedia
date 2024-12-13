<template>
  <div class="mt-1 flex flex-row">
    <div class="manual-lane-block shadow block">
      <div class="flex">
        <!-- Start / Stop Icons  -->
        <div class="flex flex-col justify-between items-center py-6">
          <img class="mb-2" src="@assets/images/custom/sender_icon.svg" />
          <div class="path-border"></div>
          <img class="mt-2" src="@assets/images/custom/receiver_icon.svg" />
        </div>
        <!-- Form Block  -->
        <div class="w-full">
          <div class="vx-row flex justify-between address-row">
            <!-- Shipper address  -->
            <div class="address-block vx-col w-2/5 px-0">
              <div class="flex flex-column">
                <div class="flex justify-between items-center">
                  <label class="text-xs" for="shipperStreetAddress">
                    Pickup
                    <field-required-sign />
                  </label>
                  <vs-dropdown
                    class="cursor-pointer"
                    :ref="`pickupDropdown${defaultKey}`"
                    vs-custom-content
                    vs-trigger-click
                    @click="togglePickupDropdown"
                  >
                    <a href.prevent>
                      <vs-icon icon="error_outline" color="primary"></vs-icon>
                    </a>
                    <vs-dropdown-menu class="tooltip-dropdown-menu">
                      <p>
                        Manually input City and State or add States from the
                        dropdown
                      </p>
                      <vs-button
                        type="line"
                        @click="
                          changePickupAddressType(`pickupDropdown${defaultKey}`)
                        "
                      >
                        click to change
                      </vs-button>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </div>
                <div v-show="pickupByAddress">
                  <gmap-autocomplete
                    label="Shipper"
                    name="shipperStreetAddress"
                    placeholder="City, State Zip"
                    class="vs-inputx vs-input--input normal hasValue"
                    :value="originAddressText"
                    @place_changed="getChangedPlace('origin', $event)"
                    :options="googleMapAutoCompleteOptions"
                    :select-first-on-enter="true"
                  >
                  </gmap-autocomplete>
                  <span class="text-danger text-sm">
                    <template
                      v-if="
                        formData &&
                        formData.origin &&
                        formData.origin.latitude &&
                        formData.origin.longitude
                      "
                    >
                      <span v-if="!formData.origin.city">
                        City couldn't be identified
                      </span>
                      <span v-else-if="!formData.origin.state">
                        State couldn't be identified
                      </span>
                    </template>
                    <template v-else>
                      <span
                        v-if="
                          !((formData || {}).origin || {}).streetAddress &&
                          showErrors
                        "
                      >
                        Pickup is required
                      </span>
                    </template>
                  </span>
                </div>
                <div v-show="!pickupByAddress">
                  <vs-select
                    placeholder="Select Pickup State"
                    multiple
                    class="w-full"
                    autocomplete
                    :value="originStates"
                    @input="onOriginStateChange"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.text"
                      :text="item.text"
                      v-for="(item, index) in statesList"
                    />
                  </vs-select>
                  <span class="text-danger text-sm">
                    <template v-if="!originStates.length && showErrors">
                      <span> Pickup is required </span>
                    </template>
                  </span>
                </div>
              </div>
            </div>
            <!-- Shipper Deadhead  -->
            <div class="vx-col w-1/5 px-1" v-show="pickupByAddress">
              <div class="flex justify-between flex-column">
                <div class="address-input flex flex-column">
                  <label for="shipperDeadhead" class="text-xs">
                    Deadhead
                    <field-required-sign />
                  </label>
                  <vs-input
                    name="shipperDeadhead"
                    v-model="formData.origin.deadhead"
                    v-validate="
                      pickupByAddress
                        ? 'required|integer|max_value:1000|min_value:1'
                        : ''
                    "
                    type="number"
                    min="1"
                    max="1000"
                    onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                    class="w-full"
                  />
                </div>
                <span class="text-danger text-sm">
                  {{ errors.first('shipperDeadhead') }}
                </span>
              </div>
            </div>
            <!-- Target Rpm  -->
            <div class="input-block vx-col w-1/5 px-1">
              <label for="targetRpm" class="text-sm">
                Target RPM <field-required-sign />
              </label>
              <vs-input
                ref="targetRpm"
                name="targetRpm"
                icon="attach_money"
                v-model="formData.targetRpm"
                class="w-full"
                type="number"
                min="0.0001"
                max="99.9999"
                v-validate="
                  'required|decimal:4|max_value:99.9999|min_value:0.0001'
                "
              >
              </vs-input>
              <p class="text-danger text-sm">
                {{ errors.first('targetRpm') }}
              </p>
            </div>
            <!-- Min Rate -->
            <div :class="['vx-col px-1', pickupByAddress ? 'w-1/5' : 'w-2/5']">
              <div class="flex justify-between flex-column">
                <div
                  :class="[
                    'address-input flex flex-column',
                    pickupByAddress ? '' : 'max-weight-field',
                  ]"
                >
                  <label for="targetMinRate" class="text-xs"> Min. Rate </label>
                  <vs-input
                    name="targetMinRate"
                    v-model="formData.targetMinRate"
                    type="number"
                    class="w-full"
                    min="0.01"
                    max="999999.99"
                    v-validate="'decimal:2|max_value:999999.99|min_value:0.01'"
                  />
                  <!-- Add below line as attribute to get $ icon  -->
                  <!-- icon="attach_money" -->
                  <span class="text-danger text-sm">
                    {{ errors.first('targetMinRate') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            :class="[
              'vx-row flex address-row',
              deliveryByAddress ? 'justify-between' : '',
            ]"
          >
            <!-- Receiver Block  -->
            <div class="address-block vx-col w-2/5 px-0">
              <div class="flex flex-column">
                <div class="flex justify-between items-center">
                  <label class="text-xs" for="shipperStreetAddress">
                    Delivery
                    <field-required-sign />
                  </label>
                  <vs-dropdown
                    class="cursor-pointer"
                    :ref="`deliveryDropdown${defaultKey}`"
                    vs-custom-content
                    vs-trigger-click
                    @click="toggleDeliveryDropdown"
                  >
                    <a href.prevent>
                      <vs-icon icon="error_outline" color="primary"></vs-icon>
                    </a>
                    <vs-dropdown-menu class="tooltip-dropdown-menu">
                      <p>
                        Manually input City and State or add States from the
                        dropdown
                      </p>
                      <vs-button
                        type="line"
                        @click="
                          changeDeliveryAddressType(
                            `deliveryDropdown${defaultKey}`
                          )
                        "
                      >
                        click to change
                      </vs-button>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </div>
                <div v-show="deliveryByAddress">
                  <gmap-autocomplete
                    label="Receiver"
                    name="receiverStreetAddress"
                    placeholder="City, State Zip"
                    class="vs-inputx vs-input--input normal hasValue"
                    :value="destinationAddressText"
                    @place_changed="getChangedPlace('destination', $event)"
                    :options="googleMapAutoCompleteOptions"
                    :select-first-on-enter="true"
                  >
                  </gmap-autocomplete>
                  <span class="text-danger text-sm">
                    <template
                      v-if="
                        formData.destination.latitude &&
                        formData.destination.longitude
                      "
                    >
                      <span v-if="!formData.destination.city">
                        City couldn't be identified
                      </span>
                      <span v-else-if="!formData.destination.state">
                        State couldn't be identified
                      </span>
                    </template>
                    <template v-else>
                      <span
                        v-if="
                          !((formData || {}).destination || {}).streetAddress &&
                          showErrors
                        "
                      >
                        Delivery is required
                      </span>
                    </template>
                  </span>
                </div>
                <div v-show="!deliveryByAddress">
                  <vs-select
                    placeholder="Select Delivery State"
                    multiple
                    class="w-full"
                    autocomplete
                    :value="destinationStates"
                    @input="onDestinationStateChange"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.text"
                      :text="item.text"
                      v-for="(item, index) in statesList"
                    />
                  </vs-select>
                  <span class="text-danger text-sm">
                    <template v-if="!destinationStates.length && showErrors">
                      <span> Delivery is required </span>
                    </template>
                  </span>
                </div>
              </div>
            </div>
            <!-- Receiver DeadHead  -->
            <div class="vx-col w-1/5 px-1" v-show="deliveryByAddress">
              <div class="flex justify-between flex-column">
                <div class="address-input flex flex-column">
                  <label for="receiverDeadhead" class="text-xs">
                    Deadhead
                    <field-required-sign />
                  </label>
                  <vs-input
                    name="receiverDeadhead"
                    v-model="formData.destination.deadhead"
                    v-validate="
                      deliveryByAddress
                        ? 'required|integer|max_value:1000|min_value:1'
                        : ''
                    "
                    type="number"
                    min="1"
                    max="1000"
                    onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                    class="w-full"
                  />
                  <span class="text-danger text-sm">
                    {{ errors.first('receiverDeadhead') }}
                  </span>
                </div>
              </div>
            </div>
            <!-- Target weight  -->
            <div class="input-block vx-col w-2/5 px-1">
              <div class="vx-col max-weight-field">
                <label for="targetWeight" class="text-sm">
                  Max. Weight <field-required-sign />
                </label>
                <vs-input
                  ref="targetWeight"
                  name="targetWeight"
                  type="number"
                  v-model="formData.targetWeight"
                  class="w-full"
                  v-validate="'required|integer|max_value:999999|min_value:1'"
                  min="1"
                  max="999999"
                  onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                />
                <p class="text-danger text-sm">
                  {{ errors.first('targetWeight') }}
                </p>
              </div>
            </div>
            <!-- Empty Block  -->
            <!-- <div class="input-block vx-col w-1/5 px-1"></div> -->
          </div>
        </div>
        <!-- Delete Icon  -->
        <div class="delete-icon vx-col px-1 my-auto">
          <vs-icon
            v-if="showDelete"
            icon="delete"
            type="filled"
            color="danger"
            size="small"
            class="m-0"
            @click="$emit('delete')"
          ></vs-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config/constants.js';
import { getUniqueIdV4 } from '@/helpers/helper';
import SetPlaceMixin from '@/mixins/setPlaceMixin.js';

import { Validator } from 'vee-validate';
const dict = {
  custom: {
    shipperDeadhead: {
      required: 'Is required.',
      min_value: 'Range 0 to 1000',
      max_value: 'Range 0 to 1000',
      integer: 'Deadhead should be integer.',
    },
    receiverDeadhead: {
      required: 'Is required.',
      min_value: 'Range 0 to 1000',
      max_value: 'Range 0 to 1000',
      integer: 'Should be integer.',
    },
    targetWeight: {
      required: 'Is required.',
      min_value: 'Min value 1',
      max_value: 'Max value 999999',
      integer: 'Must be integer.',
    },
    targetRpm: {
      required: 'Is required.',
      number: 'Max 4 decimals',
      decimal: 'Max 4 decimals',
      min_value: 'Min 0.0001',
      max_value: 'Max 99.9999',
    },
    targetMinRate: {
      decimal: 'Max 2 decimals',
      number: 'Max 2 decimals',
      min_value: 'Min 0.01',
      max_value: 'Max 999999.99',
    },
  },
};
Validator.localize('en', dict);

export default {
  name: 'AddressCard',

  props: {
    showDelete: {
      type: Boolean,
      default: () => true,
    },
    value: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      formData: {
        targetRpm: '',
        targetWeight: '',
        targetMinRate: '',
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
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      showErrors: false,
      pickupByAddress: true,
      pickupDropdown: false,
      stateList: config.state_list,
      deliveryByAddress: true,
      deliveryDropdown: false,
      defaultKey: 0,
    };
  },

  mixins: [SetPlaceMixin],

  computed: {
    originAddressText() {
      const { city, state, zipCode } = this.formData.origin || {};
      let returnString = '';
      if (city) returnString += city;
      if (state) returnString += `, ${state}`;
      if (zipCode) returnString += `, ${zipCode}`;
      return returnString;
    },
    destinationAddressText() {
      const { city, state, zipCode } = this.formData.destination || {};
      let returnString = '';
      if (city) returnString += city;
      if (state) returnString += `, ${state}`;
      if (zipCode) returnString += `, ${zipCode}`;
      return returnString;
    },
    originStates() {
      return (this.formData.origin || {}).statesArray || [];
    },
    destinationStates() {
      return (this.formData.destination || {}).statesArray || [];
    },
    statesList() {
      return this.stateList.filter((item) => item.text !== 'PR');
    },
  },
  mounted() {
    this.defaultKey = getUniqueIdV4();
  },
  watch: {
    formData: {
      handler: function (val) {
        const addressKeys = [
          'streetAddress',
          'city',
          'state',
          'zipCode',
          'latitude',
          'longitude',
          'deadhead',
        ];

        const originStatesArray = (val.origin || {}).statesArray || [];
        if (originStatesArray.length) {
          this.pickupByAddress = false;
          addressKeys.forEach((key) => {
            delete val.origin[key];
          });
        } else {
          delete val.origin.statesArray;
        }

        const destinationStatesArray =
          (val.destination || {}).statesArray || [];
        if (destinationStatesArray.length) {
          this.deliveryByAddress = false;
          addressKeys.forEach((key) => {
            delete val.destination[key];
          });
        } else {
          delete val.destination.statesArray;
        }

        this.$emit('update', val);
      },
      deep: true,
    },
    value: {
      handler: function (val) {
        if (val) {
          this.formData = val;
        }
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    /*
     * Google Map Autocomplete
     */
     getChangedPlace(key, place) {
      // Extract address components from the provided place
      const { address, city, state, zipCode, latitude, longitude } =
        this.setPlace(place);
      this.$set(this.formData[key], 'streetAddress', address);
      this.$set(this.formData[key], 'city', city);
      this.$set(this.formData[key], 'state', state);
      this.$set(this.formData[key], 'zipCode', zipCode);
      this.$set(this.formData[key], 'latitude', latitude);
      this.$set(this.formData[key], 'longitude', longitude);
      this.$forceUpdate();
    },
    async validate() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        this.showErrors = true;
        return false;
      }
      const { origin, destination } = this.formData || {};
      const {
        latitude: originLatitude,
        longitude: originDestination,
        statesArray: originStates,
      } = origin || {};
      const {
        latitude: destinationLatitude,
        longitude: destinationLongitude,
        statesArray: destinationStates,
      } = destination || {};

      let addressValidation = true;
      if (this.pickupByAddress) {
        addressValidation = !!originLatitude && !!originDestination;
      } else {
        addressValidation = !!(originStates || []).length;
      }

      if (this.deliveryByAddress) {
        addressValidation =
          addressValidation && !!destinationLatitude && !!destinationLongitude;
      } else {
        addressValidation =
          addressValidation && !!(destinationStates || []).length;
      }

      this.showErrors = !addressValidation;

      return addressValidation;
    },
    togglePickupDropdown() {
      this.pickupDropdown = !this.pickupDropdown;
    },
    changePickupAddressType(dropdownRef) {
      this.pickupByAddress = !this.pickupByAddress;
      this.resetPickupAddress();

      if (dropdownRef && this.$refs[dropdownRef]) {
        this.$refs[dropdownRef].vsDropdownVisible = false;
        this.$refs[dropdownRef].$children
          .filter((item) => item.hasOwnProperty('dropdownVisible'))
          .forEach((item) => {
            item.dropdownVisible = false;
          });
      }
    },
    resetPickupAddress() {
      this.formData.origin = {
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        latitude: '',
        longitude: '',
        deadhead: '',
        statesArray: [],
      };
    },
    toggleDeliveryDropdown() {
      this.deliveryDropdown = !this.deliveryDropdown;
    },
    changeDeliveryAddressType(dropdownRef) {
      this.deliveryByAddress = !this.deliveryByAddress;
      this.resetDeliveryAddress();

      if (dropdownRef && this.$refs[dropdownRef]) {
        this.$refs[dropdownRef].vsDropdownVisible = false;
        this.$refs[dropdownRef].$children
          .filter((item) => item.hasOwnProperty('dropdownVisible'))
          .forEach((item) => {
            item.dropdownVisible = false;
          });
      }
    },
    resetDeliveryAddress() {
      this.formData.destination = {
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        latitude: '',
        longitude: '',
        deadhead: '',
        statesArray: [],
      };
    },
    onOriginStateChange(e) {
      this.formData = {
        ...this.formData,
        origin: {
          statesArray: e,
        },
      };
    },
    onDestinationStateChange(e) {
      this.formData = {
        ...this.formData,
        destination: {
          statesArray: e,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.address-row {
  padding: 0px 15px;
  align-items: baseline;
  flex-wrap: initial;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.shadow {
  margin: 5px;
  padding: 5px;
  border-radius: 8px;
  border: 2px solid whitesmoke;
}
.manual-lane-block {
  width: 100%;
}
::v-deep {
  .vs-input--icon {
    top: 12px;
    border-right: none !important;
    z-index: 10 !important;
  }
}

.path-border {
  border: none !important;
  border-left: 1px dashed rgb(105, 76, 254) !important;
  height: 100%;
  width: 1px;
  // border-style: dashed;
}

.tooltip-dropdown-menu {
  position: absolute;
  z-index: 100001 !important;
  box-shadow: 0px 4px 24px #22292f1a;
  width: 170px;
  p {
    font-size: 10px;
    color: #6e6b7b;
  }

  ::v-deep {
    .vs-dropdown--menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .vs-button--text {
      color: #6e6b7b;
      font-size: 11px;
    }
  }
}
</style>
<style>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
.vs-input--input.hasIcon {
  padding: 0.7rem 0.1rem 0.7rem 1.5rem !important;
}
.p-dialog-content {
  padding: 0 1rem;
}
.delete-icon {
  cursor: pointer;
}
.max-weight-field {
  width: 50% !important;
}
/* 960px and down */
@media only screen and (max-width: 960px) {
  .max-weight-field {
    width: 100% !important;
  }
  .address-row {
    padding: 0 5px 0 15px;
  }
}
</style>
