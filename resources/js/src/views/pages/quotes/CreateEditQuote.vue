<template>
  <div class="p-8">
    <!-- <vs-divider class="my-4" /> -->
    <LoadBasicInfo ref="loadBasicInfo" v-model="formData" />

    <div>
      <div class="flex">
        <h4 class="pickup-label my-auto mr-2">Pickup/Delivery</h4>
        <section class="flex gap-4">
          <vs-button
            color="primary"
            type="border"
            class="px-3"
            style="font-size: 12px"
            @click.stop="addNewShipper"
          >
            Add Pickup
          </vs-button>
          <vs-button
            color="primary"
            type="border"
            class="px-3"
            style="font-size: 12px"
            @click.stop="addNewReceiver"
          >
            Add Delivery
          </vs-button>
        </section>
      </div>
      <draggable
        tag="ul"
        :list="shipperReceiverList"
        class="list-group"
        handle=".handle"
      >
        <li
          class="list-group-item flex flex-col mt-6"
          v-for="(item, index) in shipperReceiverList"
          :key="item.feId"
        >
          <div class="flex items-center">
            <vs-icon
              class="cursor-grab handle mt-2px ml--25px"
              size="small"
              icon="drag_indicator"
            />
            <div class="flex items-center gap-2">
              <label class="text-primary ml-1 font-semibold">
                {{ item.type === 'shipper' ? 'Pickup' : 'Delivery' }}
              </label>
              <vs-button
                v-show="shipperReceiverList.length > 1"
                color="danger"
                type="border"
                icon="delete"
                size="small"
                @click.stop="deleteShipperReceiver(index)"
              ></vs-button>
            </div>
          </div>
          <Pickup
            v-if="item.type === 'shipper'"
            :ref="`shipper-${item.feId}`"
            v-model="shipperReceiverList[index]"
            :index="index"
          />
          <Delivery
            v-if="item.type === 'receiver'"
            :ref="`receiver-${item.feId}`"
            v-model="shipperReceiverList[index]"
          />
        </li>
      </draggable>
    </div>
    <vs-divider class="my-6" />

    <div class="vx-row float-right gap-3">
      <!-- <vs-button color="primary" type="border">Assign load to</vs-button>
      <vs-button color="primary" type="border">Find Carriers</vs-button> -->
      <vs-button
        color="primary"
        type="filled"
        @click="redirectToCarriersDetails"
        :disabled="!hasShipperAndReceiver"
      >
        Request from my carriers
      </vs-button>
      <vs-button
        color="primary"
        type="filled"
        @click="redirectToCarriersDetails('saveCarrierDetails')"
        :disabled="!hasShipperAndReceiver"
      >
        <!-- TODO: Vikas nobody understand what you are doing here. This is not correct parameter. -->
        <!-- TODO: Also I should be able to save without sending emails when creating a quote. -->
        Save
      </vs-button>
    </div>
  </div>
</template>

<script>
import Pickup from './components/Pickup.vue';
import LoadBasicInfo from './components/LoadBasicInfo.vue';
import Delivery from './components/Delivery.vue';
import { getUniqueIdV4 } from '@/helpers/helper';
import Draggable from 'vuedraggable';
import GoogleMapMixin from '@/mixins/googleMapMixin';
import { getApiErrorMsg } from '@/helpers/helper';

/* TODO: I need Vikas, Himanshu, Sachin, Hitesh provide me testing proof for:
  1) creating quotes with multiple shippers and receivers, and delete shipper, delte receiver, shift shipper order, shift receiver order.
  2) edit quotes with multiple shippers and receivers, add new shipper, add new receiver, and delete shipper, delte receiver, shift shipper order, shift receiver order.
*/
export default {
  name: 'CreateEditQuote',
  mixins: [GoogleMapMixin],
  components: {
    Pickup,
    LoadBasicInfo,
    Delivery,
    Draggable,
  },
  props: {
    quotesDetails: {
      type: Object,
      default: () => {},
    },
  },
  watch: {},
  computed: {
    isEdit() {
      return this.quotesDetails && Object.keys(this.quotesDetails).length > 0;
    },
    hasShipperAndReceiver() {
      return (
        this.shipperReceiverList.some((s) => s.type == 'shipper') &&
        this.shipperReceiverList.some((s) => s.type == 'receiver')
      );
    },
  },
  data() {
    return {
      shipperReceiverList: [],
      formData: {
        loadType: null,
        equipmentType: null,
        referenceNumber: '',
        distance: null, // Required
        urgencyDate: null,
        numberOfTrucks: null, // Required
        driverPreference: null,
        bookNowRate: null, // Required
        stops: [], // Required
        requestQuoteFromMyCarriers: {},
      },
    };
  },
  created() {
    this.handleEditQuote();
  },
  methods: {
    resetDetails() {
      this.formData = {
        loadType: null,
        equipmentType: null,
        referenceNumber: '',
        distance: null, // Required
        urgencyDate: null,
        numberOfTrucks: null, // Required
        driverPreference: null,
        bookNowRate: null, // Required
        stops: [], // Required
        requestQuoteFromMyCarriers: {},
      };
      this.shipperReceiverList = [];
      this.addNewShipper();
      this.addNewReceiver();
    },
    handleEditQuote() {
      if (this.isEdit) {
        this.formData = {
          ...this.quotesDetails,
          requestQuoteFromMyCarriers: {},
        };
        if (!this.formData.hasOwnProperty('equipmentType')) {
          this.formData.equipmentType = null;
        }
        this.shipperReceiverList = this.formData.stops.map((stop) => {
          return {
            feId: getUniqueIdV4(),
            ...stop,
          };
        });
        this.formData.stops = null;
        delete this.formData.stops;
      } else {
        this.addNewShipper();
        this.addNewReceiver();
      }
    },
    addNewShipper() {
      const newShipper = {
        feId: getUniqueIdV4(),
        type: 'shipper',
        name: null,
        address: null,
        city: '',
        state: '',
        zipCode: '',
        latitude: '',
        longitude: '',
        date: null,
        time: null,
        endDate: null,
        endTime: null,
        contactPerson: null,
        contactNumber: null,
        referenceNumber: null,
        note: '',
        container: null,
        temperature: null,
        goodsValue: null,
        description: null,
        weight: null,
        weightUnit: null,
        qty: null,
        qtyUnit: null,
        hazmat: null,
        length: null,
        width: null,
        height: null,
      };

      this.shipperReceiverList.push(newShipper);
    },
    addNewReceiver() {
      const receiverList = {
        feId: getUniqueIdV4(),
        type: 'receiver',
        name: null,
        address: null,
        city: '',
        state: '',
        zipCode: '',
        latitude: '',
        longitude: '',
        date: null,
        time: null,
        endDate: null,
        endTime: null,
        contactPerson: null,
        contactNumber: null,
        referenceNumber: null,
        note: '',
      };

      this.shipperReceiverList.push(receiverList);
    },
    deleteShipperReceiver(index) {
      this.shipperReceiverList.splice(index, 1);
    },
    async calculateLoadDistance(stops) {
      try {
        const latLngList = stops
          .filter((stop) => stop.latitude && stop.longitude)
          .map((stop) => {
            return {
              lat: Number(stop.latitude),
              lng: Number(stop.longitude),
            };
          });
        const routes = latLngList
          .map((item, index, source) => {
            if (!source[index - 1]) return null;
            return { origin: source[index - 1], destination: item };
          })
          .filter((item) => item);
        const totalDistanceInMeter =
          await this.getGoogleDistanceBetweenMultipleRoutes(routes);
        // convert: meter to miles
        const distance = (totalDistanceInMeter / 1609.344).toFixed(2);
        return Number(distance);
      } catch (error) {
        console.log('error', error);
      }
    },
    async redirectToCarriersDetails(tab) {
      // Validate form using ref
      let isValid = false;
      isValid = await this.$refs.loadBasicInfo.validateForm();
      this.shipperReceiverList.forEach((stop) => {
        isValid =
          this.$refs[`${stop.type}-${stop.feId}`][0].validateForm() && isValid;
      });

      if (!isValid) {
        return;
      }

      const payload = {
        ...this.formData,
        stops: [
          ...this.shipperReceiverList.map((stop) => {
            const { id, feId, ...rest } = stop;
            if (stop.id) {
              return { id, ...rest };
            }

            return { ...rest };
          }),
        ],
      };
      if (this.isEdit) {
        payload.id = this.quotesDetails.id;

        console.log(this.quotesDetails.stops.length, payload.stops.length);
        // Only calculate distance if stops lat lng changed
        const isStopsChanged =
          this.quotesDetails.stops.length !== payload.stops.length ||
          payload.stops.some((stop, index) => {
            return (
              stop.latitude !== this.quotesDetails.stops[index].latitude ||
              stop.longitude !== this.quotesDetails.stops[index].longitude
            );
          });

        if (isStopsChanged) {
          payload.distance = await this.calculateLoadDistance(payload.stops);
          console.log('distance: ', payload.distance);
        }
      } else {
        payload.distance = await this.calculateLoadDistance(payload.stops);
        console.log('distance: ', payload.distance);
      }

      // TODO: change event name for this.$emit('showCarriersDetails'.
      const updatedTab = tab === 'saveCarrierDetails' ? tab : undefined;
      this.$emit('processCarrierDetails', payload, updatedTab);
      // this.$emit("closeQuotePopup")
      // this.$router.push({ name: 'QuotesCarrier' }).catch(() => true);
    },
  },
};
</script>

<style lang="scss" scoped>
.pickup-label,
.delivery-label {
  color: #343434;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}

// Utility Classes

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
