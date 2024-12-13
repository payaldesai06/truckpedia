<template>
  <div class="px-3 mt-6 vx-row">
    <div class="vx-col w-full flex items-center">
      <div class="vx-row flex items-center justify-between w-full">
        <div class="vx-col flex items-center">
          <h4 class="text-base font-semibold text-black mr-3">
            Freight Details
          </h4>
          <vx-tooltip
            v-if="isAddNewFreightAllowed"
            text="Add new freight detail"
            position="right"
          >
            <vs-button
              icon-pack="feather"
              icon="icon-plus"
              color="primary"
              type="border"
              size="small"
              @click.stop="$emit('addNewFreight')"
            >
              Add
            </vs-button>
          </vx-tooltip>
        </div>
        <div class="vx-col flex items-center">
          <vx-tooltip
            v-if="!hideDelete"
            text="Remove freight detail"
            position="left"
          >
            <vs-button
              color="danger"
              type="border"
              size="small"
              @click.stop="$emit('removeFreight')"
            >
              Remove
            </vs-button>
          </vx-tooltip>
        </div>
      </div>

      <!-- <vs-divider class="opacity-75" /> -->
    </div>

    <div class="vx-col w-full">
      <div class="vx-row">
        <template v-if="t3Status.isActive">
          <div class="vx-row ml-0 md:w-full">
            <div class="vx-col my-2 flex items-center">
              <label class="text-sm mr-1">
                Address: {{ t3Status.address }}
              </label>
              <vs-button
                v-if="t3Status.address && t3Status.address !== 'n/a'"
                class="mx-2"
                color="primary"
                style="padding: 5px"
                size="small"
                :disabled="!accessPermission"
                @click="useAddress"
              >
                Use Address
              </vs-button>
              <label class="text-sm ml-1">
                Current Job #: {{ t3Status.jobNumber }}
              </label>
            </div>
          </div>
        </template>
        <div class="vx-col w-1/4 p-fluid">
          <label class="text-xs">
            Equipment #
            <vs-button
              v-if="hasT3Access"
              color="primary"
              type="flat"
              style="padding: 0; margin-left: 1rem"
              size="small"
              @click="toggleMap"
            >
              Open Map
            </vs-button>
          </label>

          <AutoComplete
            class="w-full"
            :disabled="!accessPermission"
            v-model="freightDetail.freightEquipmentType"
            :suggestions="equipmentTypeSuggestions"
            :autoHighlight="true"
            @item-select="handleAutoCompleteData($event, 'equipmentType')"
            @complete="autoComplete($event, 'equipmentType')"
            field="equipmentType"
            @clear="onClear"
          />
        </div>

        <div class="vx-col w-1/4">
          <label class="text-xs">Description</label>

          <vs-input
            :disabled="!accessPermission"
            v-model="freightDetail.freight_description"
            class="w-full"
          />
        </div>

        <div class="vx-col w-1/4">
          <label class="text-xs">Weight</label>

          <vs-input
            :disabled="!accessPermission"
            type="number"
            v-model.number="freightDetail.freight_weight"
            class="w-full"
          />
        </div>

        <div class="vx-col w-1/4">
          <label class="text-xs">Weight Unit</label>
          <v-select
            :disabled="!accessPermission"
            :options="weightOptions"
            label="label"
            :reduce="(option) => option.value"
            :clearable="true"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
            v-model="freightDetail.weight_unit"
            class="mb-4 md:mb-0"
          />
        </div>

        <div class="vx-col w-1/4">
          <label class="text-xs">Qty</label>

          <vs-input
            :disabled="!accessPermission"
            type="number"
            v-model.number="freightDetail.freight_qty"
            class="w-full"
          />
        </div>

        <div class="vx-col w-1/4">
          <label class="text-xs">Qty Unit</label>
          <v-select
            :disabled="!accessPermission"
            :options="qtyOptions"
            label="label"
            :reduce="(option) => option.value"
            :clearable="true"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
            v-model="freightDetail.qty_unit"
            class="mb-4 md:mb-0"
          />
        </div>

        <div class="vx-col w-1/2">
          <label class="text-xs">L*W*H</label>

          <div class="grid grid-cols-3 gap-2">
            <vs-input
              :disabled="!accessPermission"
              step="any"
              v-model="freightDetail.freight_length"
              class="w-full"
            />

            <vs-input
              :disabled="!accessPermission"
              step="any"
              v-model="freightDetail.freight_width"
              class="w-full"
            />

            <vs-input
              :disabled="!accessPermission"
              step="any"
              v-model="freightDetail.freight_height"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMapMixin from '@/mixins/googleMapMixin';

export default {
  name: 'FreightDetailsFormBlock',
  mixins: [GoogleMapMixin],
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
    hideDelete: {
      type: Boolean,
      default: false,
    },
    isAddNewFreightAllowed: {
      type: Boolean,
      default: true,
    },
    liveWatchOnValue: {
      type: Boolean,
      default: false,
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
  },
  components: {},
  data() {
    return {
      freightDetail: {
        freightEquipmentType: null,
        freight_description: null,
        freight_weight: null,
        weight_unit: null,
        freight_qty: null,
        qty_unit: null,
        freight_length: null,
        freight_width: null,
        freight_height: null,
      },
      equipmentTypeSuggestions: null,
      // weightOptions: config.weightOptions,
      // qtyOptions: config.qtyOptions,
      weightOptions: [
        { label: 'lbs', value: 1 },
        { label: 'tons', value: 2 },
        { label: 'kg', value: 3 },
      ],
      qtyOptions: [
        { label: 'pallets', value: 1 },
        { label: 'crates', value: 2 },
        { label: 'hours', value: 3 },
        { label: 'days', value: 4 },
        { label: 'miles', value: 5 },
        { label: 'yards', value: 6 },
        { label: 'feet', value: 7 },
        { label: 'cases', value: 8 },
        { label: 'gallons', value: 9 },
        { label: 'pieces', value: 10 }
      ],
      t3Status: {
        isActive: false,
        name: null,
        address: null,
        lat: null,
        lng: null,
        jobNumber: null,
        addressObj: {},
      },
      t3StatusesWatcher: null,
    };
  },
  watch: {
    value: {
      handler(newVal) {
        if (newVal && this.liveWatchOnValue) {
          this.setInitFormData();
        }
      },
      deep: true,
      immediate: true,
    },
    freightDetail: {
      handler(newVal) {
        if (newVal) {
          this.$emit('input', newVal);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.setInitFormData();

    if (this.isEditMode) {
      // Add watcher for t3Statuses
      this.t3StatusesWatcher = this.$watch(
        () => this.t3Statuses,
        (newVal) => {
          if (newVal && newVal.length) {
            this.getT3AssetId();
          }
        },
        { immediate: true }
      );
    }
  },
  methods: {
    setInitFormData() {
      const freightDetail = this.value;
      if (freightDetail) {
        Object.keys(freightDetail).forEach((key) => {
          this.freightDetail[key] = freightDetail[key];
        });
      }
    },
    async autoComplete(event, type) {
      try {
        this.$store
          .dispatch('saved-equipment/getSavedEquipmentsDataTable', {
            eventForServer: {},
            filter: {
              equipmentType: event.query.trim(),
            },
          })
          .then((data) => {
            this.equipmentTypeSuggestions = (
              (data || {}).savedEquipmentTypes || []
            ).filter((data) => {
              return data.equipmentType
                .toLowerCase()
                .includes(event.query.toLowerCase());
            });
          });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text:
            (((error || {}).response || {}).data || {}).message ||
            'Something went wrong',
        });
      }
    },
    async handleAutoCompleteData(data, type) {
      let equipmentType = data.value.equipmentType;
      let getIndexObject = null;
      if (type == 'equipmentType') {
        getIndexObject = this.freightDetail;
        getIndexObject.freightEquipmentType = equipmentType;
      } else {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Something went wrong.',
        });
      }
      const qtyUnit = this.qtyOptions.find(
        (qty) => qty.label == data.value.qtyUnit
      ) || { value: null };
      const weightUnit = this.weightOptions.find(
        (weight) => weight.label == data.value.weightUnit
      ) || { value: null };
      getIndexObject.freightEquipmentType = equipmentType;
      getIndexObject.freight_description = data.value.description;
      getIndexObject.freight_weight = data.value.weight;
      getIndexObject.weight_unit = weightUnit.value;
      getIndexObject.freight_qty = data.value.qty;
      getIndexObject.qty_unit = qtyUnit.value;
      getIndexObject.freight_length = data.value.length;
      getIndexObject.freight_width = data.value.width;
      getIndexObject.freight_height = data.value.height;
      getIndexObject.t3AssetId = data.value.t3AssetId;

      if (this.hasT3Access && getIndexObject.t3AssetId) {
        this.showCurrentT3Status(getIndexObject.t3AssetId);
      } else if (!getIndexObject.t3AssetId) {
        this.resetT3Status();
      }

      this.freightDetail = getIndexObject;
    },
    async showCurrentT3Status(t3AssetId) {
      try {
        this.resetT3Status();
        if (!t3AssetId) return;

        const t3Status = this.t3Statuses.find(
          (status) => status.assetId === t3AssetId
        );
        if (t3Status) {
          const addressKeys = ['address', 'city', 'state', 'zipCode'];
          const address = addressKeys.every((key) => {
            return t3Status[key] && t3Status[key] !== 'null';
          })
            ? addressKeys
                .map((key) => {
                  if (t3Status[key]) return t3Status[key];
                })
                .join(', ')
            : 'n/a';

          if ((!t3Status.lat || !t3Status.long) && address !== 'n/a') {
            const { lat, lng } = await this.getCoordinatesFromAddress(address);
            t3Status.lat = lat;
            t3Status.long = lng;
          }

          this.t3Status = {
            isActive: true,
            name: t3Status.geofenceName,
            address,
            lat: t3Status.lat,
            lng: t3Status.long,
            jobNumber: t3Status.jobNumber,
            addressObj: {
              address: t3Status.address,
              city: t3Status.city,
              state: t3Status.state,
              zipCode: t3Status.zipCode,
            },
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
    resetT3Status() {
      this.t3Status = {
        isActive: false,
        name: null,
        address: null,
        lat: null,
        lng: null,
        jobNumber: null,
        addressObj: {},
      };
    },
    toggleMap() {
      const { isActive, lat, lng } = this.t3Status;
      if (isActive && lat && lng) {
        this.$emit('toggleMap', {
          lat,
          lng,
          label: this.freightDetail.freightEquipmentType || '',
        });
      } else this.$emit('toggleMap', {}, false);
    },
    useAddress() {
      const { isActive, addressObj, lat, lng, name } = this.t3Status;
      if (isActive && addressObj && lat && lng) {
        this.$emit('useFreightAddress', {
          ...addressObj,
          lat,
          lng,
          name,
        });
      }
    },
    onClear() {
      this.freightDetail.freightEquipmentType = null;
      this.resetT3Status();
    },
    async getT3AssetId() {
      // Turn it back when customers need it.
      return;
      try {
        if (!this.freightDetail.freightEquipmentType) return;

        const { data } = await this.$store.dispatch(
          'saved-equipment/getSavedEquipmentsDataTable',
          {
            eventForServer: {},
            filter: {
              equipmentType: this.freightDetail.freightEquipmentType,
            },
          }
        );

        const { t3AssetId } = data[0];
        this.freightDetail.t3AssetId = t3AssetId;
        this.showCurrentT3Status(t3AssetId);
      } catch (error) {
        console.log(error);
      } finally {
        // Remove watcher on this.t3Statuses once t3AssetId is fetched
        if (this.t3StatusesWatcher) {
          this.t3StatusesWatcher();
        }
      }
    },
  },
};
</script>
