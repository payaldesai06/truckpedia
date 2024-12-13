<template>
  <section>
    <div class="px-3 vx-col w-full">
      <div class="flex items-center justify-between">
        <span class="flex items-center gap-1">
          <vs-icon
            v-if="showDragIcon"
            class="cursor-grab handle mt-2px ml--25px"
            size="small"
            icon="drag_indicator"
          />
          <h4 class="text-base font-semibold text-black">
            Receiver
            <vs-button
              v-if="accessPermission"
              class="ml-2 mr-3 px-2"
              style="font-size: 11px"
              color="primary"
              type="border"
              @click="$emit('saveAddress')"
            >
              Save Address
            </vs-button>
          </h4>
          <DropHookTrailer
            v-if="dropHookTrailerVisible"
            :dropTrailerType="receiver.dropTrailerType"
            :hookTrailerType="receiver.hookTrailerType"
            :hookTrailerId="receiver.hookTrailerId"
            :dropTrailerId="receiver.dropTrailerId"
            :trailerOptions="trailerOptions"
            @dropTrailerType="setDropTrailerType"
            @hookTrailerType="setHookTrailerType"
            @update:dropTrailerId="updateDropTrailerId"
            @update:hookTrailerId="updateHookTrailerId"
          ></DropHookTrailer>
        </span>

        <vs-button
          color="danger"
          type="border"
          class="px-3"
          style="font-size: 11px"
          v-if="accessPermission"
          @click="$emit('remove')"
        >
          Delete
        </vs-button>
      </div>

      <vs-divider class="opacity-75" />
    </div>

    <div class="px-3 w-full">
      <div class="vx-row">
        <template v-if="dropHookTrailerVisible">
          <div class="vx-row ml-0 md:w-full">
            <div class="vx-col mb-4 flex items-center">
              <label class="text-sm mr-2">Driver arrived at</label>
              <CustomDateTimeSelector
                class="date-input"
                :dateValue="arrivedLocalDate"
                :timeValue="arrivedLocalTime"
                :convertToUTC="false"
                :setDefaultTime="true"
                :smallInput="true"
                warningMessageIfDateTimeNotSelected="Provide driver arrival time. Do not change it if driver has not yet arrived at the receiver."
                @input:Date="updateDate($event, 'arrivedLocalDate')"
                @input:Time="updateTime($event, 'arrivedLocalTime')"
              />
            </div>
            <div class="vx-col mb-4 flex items-center">
              <label class="text-sm mr-2">Driver unloaded at</label>
              <CustomDateTimeSelector
                class="date-input"
                :dateValue="unloadedLocalDate"
                :timeValue="unloadedLocalTime"
                :convertToUTC="false"
                :setDefaultTime="true"
                :smallInput="true"
                warningMessageIfDateTimeNotSelected="Provide driver departure time. Do not change it if driver has not yet departed from the receiver."
                @input:Date="updateDate($event, 'unloadedLocalDate')"
                @input:Time="updateTime($event, 'unloadedLocalTime')"
              />
            </div>
          </div>
        </template>
        <div class="vx-col w-1/4">
          <label class="text-xs">
            Receiver
            <field-required-sign />
            <vs-button
              color="primary"
              type="flat"
              style="padding: 0; margin-left: 1rem"
              size="small"
              :disabled="!accessPermission"
              @click="$emit('toggleMap')"
            >
              Open Map
            </vs-button>
          </label>
          <div>
            <span class="p-fluid">
              <AutoComplete
                :disabled="!accessPermission"
                v-model="receiverName"
                :suggestions="addressSuggestions"
                :autoHighlight="true"
                @item-select="handleAutoCompleteData($event, 'receiver')"
                @complete="autoComplete($event, 'receiver')"
                @clear="updateObjectName('', 'receiver')"
                field="name"
              />
            </span>
          </div>
        </div>

        <div class="vx-col w-1/4">
          <div
            class="vs-component vs-con-input-label vs-input w-full vs-input-primary"
          >
            <label class="text-xs"
              >Address
              <field-required-sign />
            </label>

            <div class="vs-con-input">
              <gmap-autocomplete
                class="vs-inputx vs-input--input normal hasValue"
                :value="receiver.address"
                placeholder=""
                :disabled="!accessPermission"
                @place_changed="getChangedPlace($event)"
                :options="googleMapAutoCompleteOptions"
                :select-first-on-enter="true"
              >
              </gmap-autocomplete>
            </div>
          </div>
        </div>

        <div class="vx-col w-1/4">
          <label class="text-xs"
            >City
            <field-required-sign />
          </label>

          <vs-input
            v-model="receiver.city"
            :disabled="!accessPermission"
            class="w-full"
          />
        </div>

        <div class="vx-col w-1/4">
          <label class="text-xs"
            >State
            <field-required-sign />
          </label>

          <vs-input
            v-model="receiver.state"
            :disabled="!accessPermission"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs"
            >Zip Code
            <field-required-sign />
          </label>

          <vs-input
            :disabled="!accessPermission"
            v-model="receiver.zip_code"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs">
            {{ isDateWindow ? 'Start Date' : 'Date' }}
            <field-required-sign />
            <vs-button
              color="primary"
              type="flat"
              style="padding: 0; margin-left: 1rem"
              size="small"
              :disabled="!accessPermission"
              @click="onTimeModeChange()"
            >
              {{ isDateWindow ? 'Set A Specific Time' : 'Set A Time Window' }}
            </vs-button>
          </label>
          <flat-pickr
            v-model="receiver.delivery_date"
            :disabled="!accessPermission"
            :config="configDateFlatPickr"
            class="w-full"
          />
          <span
            v-if="isDateWarningVisible('delivery_date')"
            class="flex items-center mt-1 text-sm ml-auto text-danger"
          >
            <vs-icon icon="date_range" class="text-sm" />
            {{ dateWarningString }}
          </span>
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label
            class="text-xs"
            :class="{
              'text-danger': showEmptyTimeWarning && !receiver.delivery_time,
            }"
            >{{ isDateWindow ? 'Start Time' : 'Time' }}
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 0; margin-left: 1rem"
              :disabled="!accessPermission"
              @click="receiver.delivery_time = ''"
              >Clear</vs-button
            >
          </label>
          <flat-pickr
            v-model="receiver.delivery_time"
            :disabled="!accessPermission"
            :config="configTimeFlatPickr"
            class="w-full"
          />
          <span
            v-if="showEmptyTimeWarning && !receiver.delivery_time"
            class="flex items-center mt-1 text-sm ml-auto text-danger"
          >
            <vs-icon icon="date_range" class="text-sm" />
            {{ timeWarningString }}
          </span>
        </div>

        <div class="mt-4 vx-col w-1/4" v-if="isDateWindow">
          <label class="text-xs">End Date </label>
          <flat-pickr
            v-model="receiver.delivery_end_date"
            :disabled="!accessPermission"
            :config="configDateFlatPickr"
            class="w-full"
          />
          <span
            v-if="isDateWarningVisible('delivery_end_date')"
            class="flex items-center mt-1 text-sm ml-auto text-danger"
          >
            <vs-icon icon="date_range" class="text-sm" />
            {{ dateWarningString }}
          </span>
        </div>
        <div class="mt-4 vx-col w-1/4" v-if="isDateWindow">
          <label class="text-xs"
            >End Time
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 0; margin-left: 1rem"
              :disabled="!accessPermission"
              @click="receiver.delivery_end_time = ''"
              >Clear</vs-button
            >
          </label>
          <flat-pickr
            v-model="receiver.delivery_end_time"
            :config="configTimeFlatPickr"
            :disabled="!accessPermission"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs">Contact Person</label>
          <vs-input
            :disabled="!accessPermission"
            v-model="receiver.contact_person"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs">Contact Number</label>
          <vs-input
            v-model="receiver.contact_number"
            :disabled="!accessPermission"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs">Delivery No. #</label>
          <vs-input
            v-model="receiver.receiver_reference"
            :disabled="!accessPermission"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/2">
          <label class="text-xs">Note</label>
          <vs-textarea
            class="w-full hide-scroll"
            height="36px"
            :disabled="!accessPermission"
            v-model="receiver.receiver_note"
          ></vs-textarea>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <vs-divider />
    </div>
  </section>
</template>

<script>
import config from '@/config/constants.js';

import CustomDateTimeSelector from '@/components/custom/CustomDateTimeSelector';

import DropHookTrailer from './DropHookTrailer.vue';
import setPlaceMixin from '@/mixins/setPlaceMixin.js';
export default {
  name: 'ReceiverAddressCard',
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    accessPermission: {
      /** Permission defaults to true for create mode
       * and value passed [canAccess(roleModify)] for edit mode
       */
      type: Boolean,
      default: true,
    },
    showDragIcon: {
      type: Boolean,
      default: false,
    },
    trailerOptions: {
      type: Array,
      default: () => [],
    },
    dropHookTrailerVisible: {
      type: Boolean,
      default: true,
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
    showEmptyTimeWarning: {
      type: Boolean,
      default: false,
    },
    /*showDelete: {
      type: Boolean,
      default: false,
    },*/
  },
  components: {
    CustomDateTimeSelector,
    DropHookTrailer,
  },
  mixins: [setPlaceMixin],
  watch: {
    receiver: {
      handler(newVal) {
        if (newVal) this.$emit('input', newVal);
      },
      deep: true,
      immediate: true,
    },
    value: {
      handler(newVal) {
        this.receiver = newVal;
        this.receiverName = newVal.receiver_name;
        this.isDateWindow =
          this.isDateWindow ||
          !!newVal.delivery_end_date ||
          !!newVal.delivery_end_time;
        this.arrivedLocalDate = newVal.arrivedLocalDatetime
          ? this.$dayjs(newVal.arrivedLocalDatetime).format('YYYY-MM-DD')
          : null;
        this.arrivedLocalTime = newVal.arrivedLocalDatetime
          ? this.$dayjs(newVal.arrivedLocalDatetime).format('HH:mm')
          : null;
        this.unloadedLocalDate = newVal.unloadedLocalDatetime
          ? this.$dayjs(newVal.unloadedLocalDatetime).format('YYYY-MM-DD')
          : null;
        this.unloadedLocalTime = newVal.unloadedLocalDatetime
          ? this.$dayjs(newVal.unloadedLocalDatetime).format('HH:mm')
          : null;
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      receiver: null,
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      // flat-pickr config
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d',
      },
      isDateWindow: false,
      addressSuggestions: null,
      receiverName: null,
      arrivedLocalDate: null,
      arrivedLocalTime: null,
      unloadedLocalDate: null,
      unloadedLocalTime: null,
      dateWarningString: 'Date is in the past',
      timeWarningString: 'Missing Time',
    };
  },
  computed: {
    hookTrailerNumber() {
      return this.getTrailerNumber(this.receiver.hookTrailerId);
    },
    dropTrailerNumber() {
      return this.getTrailerNumber(this.receiver.dropTrailerId);
    },
  },
  methods: {
    updateHookTrailerId(id) {
      this.receiver.hookTrailerId = id;
    },
    updateDropTrailerId(id) {
      this.receiver.dropTrailerId = id;
    },
    setDropTrailerType(dropTrailerType) {
      this.receiver.dropTrailerType = dropTrailerType;
    },
    setHookTrailerType(hookTrailerType) {
      this.receiver.hookTrailerType = hookTrailerType;
    },
    onTimeModeChange() {
      this.receiver.delivery_end_date = '';
      this.receiver.delivery_end_time = '';
      this.isDateWindow = !this.isDateWindow;
    },
    validate() {},
    /*
     * Google Map Autocomplete
     */
    getChangedPlace(place) {
      // Extract address components from the provided place
      const { address, city, state, zipCode, latitude, longitude } =
        this.setPlace(place);
      this.$set(this.receiver, 'address', address);
      this.$set(this.receiver, 'city', city);
      this.$set(this.receiver, 'state', state);
      this.$set(this.receiver, 'zip_code', zipCode);
      this.$set(this.receiver, 'latitude', latitude);
      this.$set(this.receiver, 'longitude', longitude);
      this.$forceUpdate();
    },
    async autoComplete(event, type) {
      try {
        // setTimeout(() => {
        this.$store
          .dispatch('saved-addresses/searchAddresses', event.query.trim())
          .then((data) => {
            this.updateObjectName(event.query.trim(), type);
            this.addressSuggestions = data.payload.filter((data) => {
              return data.name
                .toLowerCase()
                .startsWith(event.query.toLowerCase());
            });
          });
        // }, 600);
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
    updateObjectName(name, type) {
      if (type == 'receiver') {
        this.receiver.receiver_name = name;
      }
    },
    async handleAutoCompleteData(data, type) {
      let name = data.value.name;
      let getIndexObject = null;
      if (type == 'receiver') {
        getIndexObject = this.receiver;
        getIndexObject.receiver_name = name;
      } else {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Something went wrong.',
        });
      }

      getIndexObject.address = data.value.address;
      getIndexObject.latitude = data.value.latitude;
      getIndexObject.longitude = data.value.longitude;
      getIndexObject.city = data.value.city;
      getIndexObject.state = data.value.state;
      getIndexObject.zip_code = data.value.zip_code;
      getIndexObject.contact_person = data.value.contact;
      getIndexObject.contact_number = data.value.phone;
    },
    updateDate(date, type) {
      this[type] = date;
      this.updateDateTimeData();
    },
    updateTime(time, type) {
      this[type] = time;
      this.updateDateTimeData();
    },
    updateDateTimeData() {
      const unloadedLocalDate = this.unloadedLocalDate || '';
      const unloadedLocalTime = unloadedLocalDate
        ? this.unloadedLocalTime
          ? `${this.unloadedLocalTime}:00`
          : '00:00:00'
        : '';

      const arrivedLocalDate = this.arrivedLocalDate || '';
      const arrivedLocalTime = arrivedLocalDate
        ? this.arrivedLocalTime
          ? `${this.arrivedLocalTime}:00`
          : '00:00:00'
        : '';

      this.$emit('input', {
        ...this.receiver,
        unloadedLocalDatetime:
          `${unloadedLocalDate} ${unloadedLocalTime}`.trim(),
        arrivedLocalDatetime: `${arrivedLocalDate} ${arrivedLocalTime}`.trim(),
      });
    },
    isDateWarningVisible(type) {
      if (this.isEditMode) {
        return false;
      }

      const keysToCheck = {
        delivery_date: this.receiver.delivery_date,
        delivery_end_date: this.receiver.delivery_end_date,
      };
      const date = keysToCheck[type];

      if (date) {
        return this.$dayjs(date).isBefore(this.$dayjs(), 'day');
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
// Utility classes
.mt-2px {
  margin-top: 2px;
}

.ml--25px {
  margin-left: -25px;
}

.cursor-grab {
  cursor: grab;
}

.date-input {
  max-width: 140px;

  ::v-deep {
    .vs-con-input input {
      background-color: #fff;
    }
  }
}
</style>
