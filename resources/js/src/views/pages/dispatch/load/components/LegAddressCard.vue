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
          <h4 class="text-base font-semibold">
            Leg
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
            :dropTrailerType="leg.dropTrailerType"
            :hookTrailerType="leg.hookTrailerType"
            :hookTrailerId="leg.hookTrailerId"
            :dropTrailerId="leg.dropTrailerId"
            :trailerOptions="trailerOptions"
            @dropTrailerType="setDropTrailerType"
            @hookTrailerType="setHookTrailerType"
            @update:dropTrailerId="updateDropTrailerId"
            @update:hookTrailerId="updateHookTrailerId"
          ></DropHookTrailer>
        </span>

        <vs-button
          v-if="accessPermission"
          color="danger"
          type="border"
          class="px-3"
          style="font-size: 11px"
          @click="$emit('remove')"
        >
          Delete
        </vs-button>
      </div>

      <vs-divider class="opacity-75" />
    </div>

    <div class="px-3 w-full">
      <div class="vx-row">
        <div class="vx-col w-1/4">
          <label class="text-xs">
            Location name
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

          <span class="p-fluid">
            <AutoComplete
              :disabled="!accessPermission"
              v-model="legLocationName"
              :suggestions="addressSuggestions"
              :autoHighlight="true"
              @item-select="handleAutoCompleteData($event, 'legs')"
              @complete="autoComplete($event, 'legs')"
              field="name"
              @clear="updateObjectName('', 'legs')"
            />
          </span>
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
                :value="leg.address"
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
            v-model="leg.city"
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
            v-model="leg.state"
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
            v-model="leg.zip_code"
            :disabled="!accessPermission"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs"
            >{{ isDateWindow ? 'Start Date' : 'Date' }}
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
            v-model="leg.date"
            :disabled="!accessPermission"
            :config="configDateFlatPickr"
            class="w-full"
          />
          <span
            v-if="isDateWarningVisible('date')"
            class="flex items-center mt-1 text-sm ml-auto text-danger"
          >
            <vs-icon icon="date_range" class="text-sm" />
            {{ dateWarningString }}
          </span>
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs"
            >{{ isDateWindow ? 'Start Time' : 'Time' }}
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 0; margin-left: 1rem"
              :disabled="!accessPermission"
              @click="leg.time = ''"
              >Clear</vs-button
            >
          </label>
          <flat-pickr
            v-model="leg.time"
            :disabled="!accessPermission"
            :config="configTimeFlatPickr"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4" v-if="isDateWindow">
          <label class="text-xs">End Date </label>
          <flat-pickr
            v-model="leg.end_date"
            :disabled="!accessPermission"
            :config="configDateFlatPickr"
            class="w-full"
          />
          <span
            v-if="isDateWarningVisible('end_date')"
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
              @click="leg.end_time = ''"
              >Clear</vs-button
            >
          </label>
          <flat-pickr
            v-model="leg.end_time"
            :disabled="!accessPermission"
            :config="configTimeFlatPickr"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs">Contact Person</label>
          <vs-input
            :disabled="!accessPermission"
            v-model="leg.contact_person"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs">Contact Number</label>
          <vs-input
            v-model="leg.contact_number"
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
            v-model="leg.note"
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
import DropHookTrailer from './DropHookTrailer.vue';
import setPlaceMixin from '@/mixins/setPlaceMixin.js';
export default {
  name: 'LegDetailsCard',
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
  },
  components: {
    DropHookTrailer,
  },
  mixins: [setPlaceMixin],
  watch: {
    leg: {
      handler(newVal) {
        if (newVal) this.$emit('input', newVal);
      },
      deep: true,
      immediate: true,
    },
    value: {
      handler(newVal) {
        this.leg = newVal;
        this.legLocationName = newVal.location_name;
        this.isDateWindow =
          this.isDateWindow || !!newVal.end_date || !!newVal.end_time;
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    hookTrailerNumber() {
      return this.getTrailerNumber(this.leg.hookTrailerId);
    },
    dropTrailerNumber() {
      return this.getTrailerNumber(this.leg.dropTrailerId);
    },
  },
  data() {
    return {
      trailerHookDropOptions: [
        { label: 'Loaded', value: 'loaded' },
        { label: 'Empty', value: 'empty' },
      ],
      leg: null,
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
      legLocationName: null,
      dateWarningString: 'Date is in the past',
    };
  },
  methods: {
    updateHookTrailerId(id) {
      this.leg.hookTrailerId = id;
    },
    updateDropTrailerId(id) {
      this.leg.dropTrailerId = id;
    },
    setDropTrailerType(dropTrailerType) {
      this.leg.dropTrailerType = dropTrailerType;
    },
    setHookTrailerType(hookTrailerType) {
      this.leg.hookTrailerType = hookTrailerType;
    },
    onTimeModeChange() {
      this.leg.end_date = '';
      this.leg.end_time = '';
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
      this.$set(this.leg, 'address', address);
      this.$set(this.leg, 'city', city);
      this.$set(this.leg, 'state', state);
      this.$set(this.leg, 'zip_code', zipCode);
      this.$set(this.leg, 'latitude', latitude);
      this.$set(this.leg, 'longitude', longitude);
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
      if (type == 'legs') {
        this.leg.location_name = name;
      }
    },
    async handleAutoCompleteData(data, type) {
      let name = data.value.name;
      let getIndexObject = null;
      if (type == 'legs') {
        getIndexObject = this.leg;
        getIndexObject.location_name = name;
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
    isDateWarningVisible(type) {
      if (this.isEditMode) {
        return false;
      }

      const keysToCheck = {
        date: this.leg.date,
        end_date: this.leg.end_date,
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
</style>
