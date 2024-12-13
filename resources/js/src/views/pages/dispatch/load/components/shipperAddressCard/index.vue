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
            Shipper
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
            :dropTrailerType="shipper_and_freight_detail.dropTrailerType"
            :hookTrailerType="shipper_and_freight_detail.hookTrailerType"
            :hookTrailerId="shipper_and_freight_detail.hookTrailerId"
            :dropTrailerId="shipper_and_freight_detail.dropTrailerId"
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

    <div class="px-3 w-full mx-auto">
      <div class="px-4 w-full vx-row">
        <div class="vx-row md:w-full">
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
                  warningMessageIfDateTimeNotSelected="Provide driver arrival time. Do not change it if driver has not yet arrived at the shipper."
                  @input:Date="updateDate($event, 'arrivedLocalDate')"
                  @input:Time="updateTime($event, 'arrivedLocalTime')"
                />
              </div>
              <div class="vx-col mb-4 flex items-center">
                <label class="text-sm mr-2">Driver loaded at</label>
                <CustomDateTimeSelector
                  class="date-input"
                  :dateValue="loadedLocalDate"
                  :timeValue="loadedLocalTime"
                  :convertToUTC="false"
                  :setDefaultTime="true"
                  :smallInput="true"
                  warningMessageIfDateTimeNotSelected="Provide driver departure time. Do not change it if driver has not yet departed from the shipper."
                  @input:Date="updateDate($event, 'loadedLocalDate')"
                  @input:Time="updateTime($event, 'loadedLocalTime')"
                />
              </div>
            </div>
          </template>
          <div class="vx-col w-1/4">
            <label class="text-xs">
              Shipper
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
                  v-model="shipperName"
                  :suggestions="addressSuggestions"
                  :autoHighlight="true"
                  @item-select="handleAutoCompleteData($event, 'shipper')"
                  @complete="autoComplete($event, 'shipper')"
                  @clear="updateObjectName('', 'shipper')"
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
                  :value="shipper_and_freight_detail.address"
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
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.city"
              class="w-full"
            />
          </div>

          <div class="vx-col w-1/4">
            <label class="text-xs"
              >State
              <field-required-sign />
            </label>

            <vs-input
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.state"
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
              v-model="shipper_and_freight_detail.zip_code"
              class="w-full"
            />
          </div>

          <div class="mt-4 vx-col w-1/4">
            <label class="text-xs">
              {{ isDateWindow ? 'Start Date' : 'Date' }}
              <field-required-sign />
              <vs-button
                :disabled="!accessPermission"
                color="primary"
                type="flat"
                style="padding: 0; margin-left: 1rem"
                size="small"
                @click="onTimeModeChange()"
              >
                {{ isDateWindow ? 'Set A Specific Time' : 'Set A Time Window' }}
              </vs-button>
            </label>
            <flat-pickr
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.shipping_date"
              :config="configDateFlatPickr"
              class="w-full"
              @input="onShippingDateChange"
            />
            <span
              v-if="isDateWarningVisible('shipping_date')"
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
                'text-danger':
                  showEmptyTimeWarning &&
                  !shipper_and_freight_detail.shipping_time,
              }"
              >{{ isDateWindow ? 'Start Time' : 'Time' }}
              <vs-button
                color="warning"
                type="flat"
                size="small"
                style="padding: 0; margin-left: 1rem"
                :disabled="!accessPermission"
                @click="shipper_and_freight_detail.shipping_time = ''"
                >Clear</vs-button
              >
            </label>
            <flat-pickr
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.shipping_time"
              :config="configTimeFlatPickr"
              class="w-full"
            />
            <span
              v-if="
                showEmptyTimeWarning &&
                !shipper_and_freight_detail.shipping_time
              "
              class="flex items-center mt-1 text-sm ml-auto text-danger"
            >
              <vs-icon icon="date_range" class="text-sm" />
              {{ timeWarningString }}
            </span>
          </div>

          <div class="mt-4 vx-col w-1/4" v-if="isDateWindow">
            <label class="text-xs">End Date </label>
            <flat-pickr
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.shipping_end_date"
              :config="configDateFlatPickr"
              class="w-full"
            />
            <span
              v-if="isDateWarningVisible('shipping_end_date')"
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
                :disabled="!accessPermission"
                color="warning"
                type="flat"
                size="small"
                style="padding: 0; margin-left: 1rem"
                @click="shipper_and_freight_detail.shipping_end_time = ''"
                >Clear</vs-button
              >
            </label>
            <flat-pickr
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.shipping_end_time"
              :config="configTimeFlatPickr"
              class="w-full"
            />
          </div>

          <div class="mt-4 vx-col w-1/4">
            <label class="text-xs">Contact Person</label>
            <vs-input
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.contact_person"
              class="w-full"
            />
          </div>

          <div class="mt-4 vx-col w-1/4">
            <label class="text-xs">Contact Number</label>
            <vs-input
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.contact_number"
              class="w-full"
            />
          </div>

          <div class="mt-4 vx-col w-1/4">
            <label class="text-xs">Pick up #</label>

            <vs-input
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.shipper_reference"
              class="w-full"
            />
          </div>
          <div class="mt-4 vx-col w-1/4">
            <label class="text-xs">Container #</label>

            <vs-input
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.container"
              class="w-full"
            />
          </div>
          <div class="mt-4 vx-col w-1/4">
            <label class="text-xs">Temperature</label>

            <vs-input
              :disabled="!accessPermission"
              v-model="shipper_and_freight_detail.temperature"
              class="w-full"
            />
          </div>
          <div class="mt-4 vx-col w-1/2">
            <label class="text-xs">Note</label>
            <vs-textarea
              :disabled="!accessPermission"
              class="w-full hide-scroll"
              height="36px"
              v-model="shipper_and_freight_detail.shipper_note"
            ></vs-textarea>
          </div>
        </div>
      </div>
    </div>

    <FreightDetails
      v-if="freightDetails"
      v-model="freightDetails"
      ref="primaryFreightDetails"
      :accessPermission="accessPermission"
      :hideDelete="true"
      :isAddNewFreightAllowed="
        !(
          (shipper_and_freight_detail.additionalFreightDetails || {}).details ||
          []
        ).length
      "
      :liveWatchOnValue="true"
      :hasT3Access="hasT3Access"
      :t3Statuses="t3Statuses"
      :isEditMode="isEditMode"
      @toggleMap="(data, isClickable) => $emit('toggleMap', data, isClickable)"
      @useFreightAddress="$emit('useFreightAddress', $event)"
      @addNewFreight="addNewFreightDetail()"
    />

    <template v-if="shipper_and_freight_detail.additionalFreightDetails">
      <template
        v-for="(freightData, ix) in shipper_and_freight_detail
          .additionalFreightDetails.details || []"
      >
        <FreightDetails
          :key="
            shipper_and_freight_detail.additionalFreightDetails.details[ix].id
          "
          v-model="
            shipper_and_freight_detail.additionalFreightDetails.details[ix]
          "
          ref="secondaryFreightDetails"
          :accessPermission="accessPermission"
          :isAddNewFreightAllowed="
            ix + 1 ===
            shipper_and_freight_detail.additionalFreightDetails.details.length
          "
          :hasT3Access="hasT3Access"
          :t3Statuses="t3Statuses"
          :isEditMode="isEditMode"
          @toggleMap="
            (data, isClickable) => $emit('toggleMap', data, isClickable)
          "
          @useFreightAddress="$emit('useFreightAddress', $event)"
          @addNewFreight="addNewFreightDetail()"
          @removeFreight="removeFreightDetails(ix)"
        />
      </template>
    </template>

    <div class="mt-8">
      <vs-divider />
    </div>
  </section>
</template>

<script>
import FreightDetails from './FreightDetails.vue';
import CustomDateTimeSelector from '@/components/custom/CustomDateTimeSelector';
import config from '@/config/constants.js';
import { mapGetters } from 'vuex';
import DropHookTrailer from '../DropHookTrailer.vue';
import { getUniqueIdV4 } from '@/helpers/helper';
import setPlaceMixin from '@/mixins/setPlaceMixin.js';

export default {
  name: 'ShipperAddressCard',
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
    hasT3Access: {
      type: Boolean,
      default: false,
    },
    t3Statuses: {
      type: Array,
      default: () => [],
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
      default: true,
    },*/
  },
  components: {
    FreightDetails,
    CustomDateTimeSelector,
    DropHookTrailer,
  },
  mixins: [setPlaceMixin],
  computed: {
    ...mapGetters('auth', ['user']),
  },
  watch: {
    freightDetails: {
      handler(newVal) {
        if (newVal) {
          this.updateFreightDetails(newVal);
        }
      },
      deep: true,
      immediate: true,
    },
    shipper_and_freight_detail: {
      handler(newVal) {
        if (newVal) this.$emit('input', newVal);
      },
      deep: true,
      immediate: true,
    },
    value: {
      handler(newVal) {
        this.shipper_and_freight_detail = newVal;
        this.shipperName = newVal.shipper_name;
        this.setFreightDetails(newVal);
        this.isDateWindow =
          this.isDateWindow ||
          !!newVal.shipping_end_date ||
          !!newVal.shipping_end_time;
        this.arrivedLocalDate = newVal.arrivedLocalDatetime
          ? this.$dayjs(newVal.arrivedLocalDatetime).format('YYYY-MM-DD')
          : null;
        this.arrivedLocalTime = newVal.arrivedLocalDatetime
          ? this.$dayjs(newVal.arrivedLocalDatetime).format('HH:mm')
          : null;
        this.loadedLocalDate = newVal.loadedLocalDatetime
          ? this.$dayjs(newVal.loadedLocalDatetime).format('YYYY-MM-DD')
          : null;
        this.loadedLocalTime = newVal.loadedLocalDatetime
          ? this.$dayjs(newVal.loadedLocalDatetime).format('HH:mm')
          : null;
      },
      deep: true,
      immediate: true,
    },
    'shipper_and_freight_detail.additionalFreightDetails.details': {
      handler(val) {
        if (val) {
          const calResult = val.reduce(
            (acc, freightDetail) => {
              const { freight_weight, freight_qty } = freightDetail || {};
              acc.totalWeight += +freight_weight || 0;
              acc.totalQty += +freight_qty || 0;
              return acc;
            },
            {
              totalWeight: 0,
              totalQty: 0,
            }
          );
          const { totalWeight, totalQty } = calResult;
          this.$set(
            this.shipper_and_freight_detail.additionalFreightDetails,
            'totalWeight',
            +totalWeight || null
          );
          this.$set(
            this.shipper_and_freight_detail.additionalFreightDetails,
            'totalQty',
            +totalQty || null
          );

          val.forEach((freightDetail) => {
            if (!freightDetail.id) {
              freightDetail.id = getUniqueIdV4();
            }
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      shipper_and_freight_detail: null,
      freightDetails: null,
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
      shipperName: null,
      arrivedLocalDate: null,
      arrivedLocalTime: null,
      loadedLocalDate: null,
      loadedLocalTime: null,
      dateWarningString: 'Date is in the past',
      timeWarningString: 'Missing Time',
    };
  },
  methods: {
    onShippingDateChange() {
      this.$emit('onShippingDateChange');
    },
    setFreightDetails(formData) {
      const {
        freight_description,
        freight_weight,
        weight_unit,
        freight_qty,
        qty_unit,
        freight_length,
        freight_width,
        freight_height,
        freightEquipmentType,
      } = formData || {};
      this.freightDetails = {
        freightEquipmentType,
        freight_description,
        freight_weight,
        weight_unit,
        freight_qty,
        qty_unit,
        freight_length,
        freight_width,
        freight_height,
      };
    },
    updateFreightDetails(freightDetails) {
      Object.keys(freightDetails).forEach((key) => {
        this.shipper_and_freight_detail[key] = freightDetails[key];
      });
    },
    updateHookTrailerId(id) {
      this.shipper_and_freight_detail.hookTrailerId = id;
    },
    updateDropTrailerId(id) {
      this.shipper_and_freight_detail.dropTrailerId = id;
    },
    setDropTrailerType(dropTrailerType) {
      this.shipper_and_freight_detail.dropTrailerType = dropTrailerType;
    },
    setHookTrailerType(hookTrailerType) {
      this.shipper_and_freight_detail.hookTrailerType = hookTrailerType;
    },
    onTimeModeChange() {
      this.shipper_and_freight_detail.shipping_end_date = '';
      this.shipper_and_freight_detail.shipping_end_time = '';
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
      this.$set(this.shipper_and_freight_detail, 'address', address);
      this.$set(this.shipper_and_freight_detail, 'city', city);
      this.$set(this.shipper_and_freight_detail, 'state', state);
      this.$set(this.shipper_and_freight_detail, 'zip_code', zipCode);
      this.$set(this.shipper_and_freight_detail, 'latitude', latitude);
      this.$set(this.shipper_and_freight_detail, 'longitude', longitude);
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
      if (type == 'shipper') {
        this.shipper_and_freight_detail.shipper_name = name;
      }
    },
    async handleAutoCompleteData(data, type) {
      let name = data.value.name;
      let getIndexObject = null;
      if (type == 'shipper') {
        getIndexObject = this.shipper_and_freight_detail;
        getIndexObject.shipper_name = name;
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
    addNewFreightDetail() {
      if (this.shipper_and_freight_detail.additionalFreightDetails) {
        this.shipper_and_freight_detail.additionalFreightDetails.details.push(
          {}
        );
      } else {
        this.$set(this.shipper_and_freight_detail, 'additionalFreightDetails', {
          totalWeight: null,
          totalQty: null,
          details: [{}],
        });
      }
    },
    removeFreightDetails(index) {
      this.shipper_and_freight_detail.additionalFreightDetails.details.splice(
        index,
        1
      );
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
      const loadedLocalDate = this.loadedLocalDate || '';
      const loadedLocalTime = loadedLocalDate
        ? this.loadedLocalTime
          ? `${this.loadedLocalTime}:00`
          : '00:00:00'
        : '';

      const arrivedLocalDate = this.arrivedLocalDate || '';
      const arrivedLocalTime = arrivedLocalDate
        ? this.arrivedLocalTime
          ? `${this.arrivedLocalTime}:00`
          : '00:00:00'
        : '';

      this.$emit('input', {
        ...this.shipper_and_freight_detail,
        loadedLocalDatetime: `${loadedLocalDate} ${loadedLocalTime}`.trim(),
        arrivedLocalDatetime: `${arrivedLocalDate} ${arrivedLocalTime}`.trim(),
      });
    },
    isDateWarningVisible(type) {
      if (this.isEditMode) {
        return false;
      }

      const keysToCheck = {
        shipping_date: this.shipper_and_freight_detail.shipping_date,
        shipping_end_date: this.shipper_and_freight_detail.shipping_end_date,
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
