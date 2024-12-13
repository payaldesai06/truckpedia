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
            Terminal
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
            :dropTrailerType="terminal.dropTrailerType"
            :hookTrailerType="terminal.hookTrailerType"
            :hookTrailerId="terminal.hookTrailerId"
            :dropTrailerId="terminal.dropTrailerId"
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
              v-model="terminalLocationName"
              :suggestions="addressSuggestions"
              :autoHighlight="true"
              @item-select="handleAutoCompleteData($event, 'terminal')"
              @complete="autoComplete($event, 'terminal')"
              field="name"
              @clear="updateObjectName('', 'terminal')"
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
                :value="terminal.address"
                placeholder=""
                :disabled="!accessPermission"
                @place_changed="setTerminalPlace($event)"
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
            v-model="terminal.city"
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
            v-model="terminal.state"
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
            v-model="terminal.zipCode"
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
            v-model="terminal.date"
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
              @click="terminal.time = ''"
              >Clear</vs-button
            >
          </label>
          <flat-pickr
            v-model="terminal.time"
            :disabled="!accessPermission"
            :config="configTimeFlatPickr"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4" v-if="isDateWindow">
          <label class="text-xs">End Date </label>
          <flat-pickr
            v-model="terminal.endDate"
            :disabled="!accessPermission"
            :config="configDateFlatPickr"
            class="w-full"
          />
          <span
            v-if="isDateWarningVisible('endDate')"
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
              @click="terminal.endTime = ''"
              >Clear</vs-button
            >
          </label>
          <flat-pickr
            v-model="terminal.endTime"
            :disabled="!accessPermission"
            :config="configTimeFlatPickr"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs">Contact Person</label>
          <vs-input
            :disabled="!accessPermission"
            v-model="terminal.contactPerson"
            class="w-full"
          />
        </div>

        <div class="mt-4 vx-col w-1/4">
          <label class="text-xs">Contact Number</label>
          <vs-input
            v-model="terminal.contactNumber"
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
            v-model="terminal.notes"
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
import SetPlaceMixin from '@/mixins/setPlaceMixin.js';
export default {
  name: 'TerminalDetailsCard',
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
  mixins: [SetPlaceMixin],
  components: {
    DropHookTrailer,
  },
  watch: {
    terminal: {
      handler(newVal) {
        if (newVal) this.$emit('input', newVal);
      },
      deep: true,
      immediate: true,
    },
    value: {
      handler(newVal) {
        this.terminal = newVal;
        this.terminalLocationName = newVal.name;
        this.isDateWindow =
          this.isDateWindow || !!newVal.endDate || !!newVal.endTime;
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
      terminal: null,
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
      terminalLocationName: null,
      dateWarningString: 'Date is in the past',
    };
  },
  methods: {
    updateHookTrailerId(id) {
      this.terminal.hookTrailerId = id;
    },
    updateDropTrailerId(id) {
      this.terminal.dropTrailerId = id;
    },
    setDropTrailerType(dropTrailerType) {
      this.terminal.dropTrailerType = dropTrailerType;
    },
    setHookTrailerType(hookTrailerType) {
      this.terminal.hookTrailerType = hookTrailerType;
    },

    onTimeModeChange() {
      this.terminal.endDate = '';
      this.terminal.endTime = '';
      this.isDateWindow = !this.isDateWindow;
    },
    validate() {},
    /*
     * Google Map Autocomplete
     */
    setTerminalPlace(place) {
      // Extract address components from the provided place
      const { address, city, state, zipCode, latitude, longitude } =
        this.setPlace(place);

      // Set the extracted address components to the terminal object
      this.$set(this.terminal, 'address', address);
      this.$set(this.terminal, 'city', city);
      this.$set(this.terminal, 'state', state);
      this.$set(this.terminal, 'zipCode', zipCode);
      this.$set(this.terminal, 'latitude', latitude);
      this.$set(this.terminal, 'longitude', longitude);
    },
    async autoComplete(event, type) {
      try {
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
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
    updateObjectName(name, type) {
      if (type == 'terminal') {
        this.terminal.name = name;
      }
    },
    async handleAutoCompleteData(data, type) {
      try {
        if (type === 'terminal') {
          const {
            name,
            address,
            latitude,
            longitude,
            city,
            state,
            zip_code,
            contact,
            phone,
          } = data.value;

          this.terminal = {
            ...this.terminal,
            name,
            address,
            latitude,
            longitude,
            city,
            state,
            zipCode: zip_code,
            contactPerson: contact,
            contactNumber: phone,
          };
        } else {
          throw new Error('Invalid type');
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Something went wrong.',
        });
      }
    },
    isDateWarningVisible(type) {
      if (this.isEditMode) {
        return false;
      }

      const keysToCheck = {
        date: this.terminal.date,
        endDate: this.terminal.endDate,
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
