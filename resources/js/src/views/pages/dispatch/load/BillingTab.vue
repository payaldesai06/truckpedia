<template>
  <div class="overflow-auto h-full pb-16">
    <h3 class="text-lg font-semibold text-black">Drivers Payable</h3>

    <div
      v-for="(driver, index) in driverList"
      :key="driver.driver_id"
      :class="[index > 0 ? 'mt-2' : 'mt-10']"
    >
      <h3 class="text-lg font-semibold text-black">
        Driver {{ driver.name }}:
      </h3>
      <load-template
        v-if="driver.driver_pay_types === 'template'"
        v-model="loadTemplateValues"
        :driverId="driver.driver_id"
        class="ml-4"
        :load="loadData(driver.driver_id)"
        :customFields="payTemplateCustomFields"
        :initLoadTemplateData="loadTemplateData[driver.driver_id]"
        :isApproved="false"
        :isBillingTab="true"
        :isSaveButtonVisible="isSaveButtonVisible(driver.driver_id)"
        :isUpdateButtonVisible="isUpdateButtonVisible(driver.driver_id)"
        :hiddenSaveButtonDriverId="
          hiddenSaveButtonDriverIds.some(
            (hiddenId) => hiddenId === driver.driver_id
          )
        "
        :isPreTripPayTemplateDetailsAvailable="
          isPreTripPayTemplateDetailsAvailable(driver.driver_id)
        "
        @input="onDriverPayInput(driver.driver_id, $event)"
        @onSave="updateDriverPay(driver.driver_id)"
        @onUpdate="toggleDriverPayPopup(driver.driver_id)"
        @loadPaymentTotal="loadPaymentTotal(driver.driver_id, $event)"
        @updateCustomFields="getCustomFields"
        @toggleSaveButtonVisibility="toggleSaveButtonVisibilityFun"
      />
      <div v-else class="mt-4">
        <span>
          To configure driver payment, please change this driver’s default pay
          type to Customize in Driver->Accounting page.
        </span>
        <vs-divider />
      </div>
    </div>

    <!-- Total -->
    <div class="flex items-center">
      <h5 class="text-base font-semibold">Total Payment:</h5>
      <p class="ml-2">
        <span class="mr-1">&dollar;</span>
        {{ driversPayableTotal | currencyFormat }}
      </p>
    </div>

    <!-- Trip Driver Pay -->
    <vs-popup
      class="driver-pay-popup"
      :active.sync="driverPayPopup.isActive"
      :breakpoints="{ '960px': '80vw', '640px': '100vw' }"
      title=""
    >
      <div>
        <load-edit
          v-if="driverPayPopup.isActive"
          :recordId="driverPayPopup.recordId"
          :showCloseButton="false"
          @closeSidebar="closeDriverPayPopup"
        />
      </div>
    </vs-popup>
  </div>
</template>

<script>
// import LoadTemplate from '@/views/pages/tripV2/components/LoadTemplate.vue';
import { getApiErrorMsg } from '@/helpers/helper';
import { mapGetters } from 'vuex';
import LoadEdit from '@/views/pages/tripV2/components/LoadEdit.vue';
export default {
  name: 'BillingTab',
  components: {
    LoadTemplate: () =>
      import('@/views/pages/tripV2/components/LoadTemplate.vue'),
    LoadEdit,
  },
  filters: {
    currencyFormat(value) {
      if (!value) return '0.00';
      return (+value).toFixed(2);
    },
  },
  props: {
    load: {
      type: Object,
      required: true,
    },
    driversList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters('load', ['getFuelPrice']),
    // driverList() {
    //   const driverList = ((this.load || {}).drivers || []).flatMap(
    //     ({ drivers }) => drivers.map(({ driver_details }) => driver_details)
    //   );

    //   return driverList;
    // },
    loadData() {
      return (driverId) => {
        const {
          load_id,
          load_charge,
          total_amount,
          load_legs,
          multiPurposeStops,
          receivers,
          shippers,
        } = this.load;
        const driver = this.driversList.find((driver) => {
          if (driver.driver_id === driverId) {
            return driver;
          }
        });
        const allStops = [
          ...(load_legs || []),
          ...(multiPurposeStops || []),
          ...(receivers || []),
          ...(shippers || []),
        ].sort((a, b) => a.order - b.order);
        const driverStops = [];

        if (load_legs && load_legs.length > 0) {
          const legOrder = load_legs[0].order || 2;
          allStops.forEach((stop) => {
            if (
              (driver.toLegOrEnd && stop.order <= legOrder) ||
              (driver.fromLeg && stop.order >= legOrder)
            ) {
              driverStops.push(stop);
            }
          });
        } else {
          allStops.forEach((stop) => {
            driverStops.push(stop);
          });
        }

        return {
          loadId: load_id,
          emptyDistance: driver.emptyDistance,
          loadFuelSurcharge: (load_charge || {}).fuel_surcharge || 0,
          loadHaulingFees: (load_charge || {}).hauling_fees || 0,
          loadTotalRate: total_amount,
          loadedDistance: (driver || {}).loadedDistance || 0,
          stops: driverStops,
        };
      };
    },
    isSaveButtonVisible() {
      return (driverId) => {
        return !((this.driverBillingData[driverId] || {}).trip || {}).id;
      };
    },
    driversPayableTotal() {
      return Object.values(this.driverPayments).reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    },
    isUpdateButtonVisible() {
      return (driverId) => {
        if (!this.driverBillingData[driverId]) return false;
        const { trip } = this.driverBillingData[driverId] || {};
        return !!trip;
      };
    },
    isPreTripPayTemplateDetailsAvailable() {
      return (driverId) => {
        if (!this.driverBillingData[driverId]) return false;
        const { preTripPayTemplateDetails } =
          this.driverBillingData[driverId] || {};
        return !!preTripPayTemplateDetails;
      };
    },
  },
  data() {
    return {
      driverBillingData: {},
      payTemplateCustomFields: null,
      loadTemplateData: {},
      driverPayments: {},
      driverPayPopup: {
        isActive: false,
        recordId: null,
      },
      hiddenSaveButtonDriverIds: [],
      loadTemplateValues: [],
      driverList: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    toggleSaveButtonVisibilityFun(driverId) {
      if (!this.hiddenSaveButtonDriverIds.includes(driverId)) {
        this.hiddenSaveButtonDriverIds.push(driverId);
      }
    },
    async init() {
      try {
        this.$vs.loading();
        this.driverList = this.driversList;
        await this.getCustomFields();
        await this.getDriverPay();
        this.initLoadTemplateData();
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async getDriverPay() {
      try {
        if (!((this.load || {}).drivers || []).length) return;
        if (this.driverList.length == 0) {
          return;
        }
        const apiPayload = {
          loadId: this.load.load_id,
          drivers: this.driverList.map(({ driver_id }) => {
            return { userId: driver_id };
          }),
        };
        const {
          payload: { drivers },
        } = await this.$store.dispatch('tripV2/getDriverPay', apiPayload);

        this.driverList = this.driverList.map((driver) => {
          const { driverDefaultPayType } = drivers.find(
            ({ userId }) => userId === driver.driver_id
          );

          return {
            ...driver,
            driver_pay_types: driverDefaultPayType.defaultPayType,
          };
        });
        this.driverBillingData = (drivers || []).reduce(
          (acc, { userId, ...rest }) => {
            acc[userId] = { userId, ...rest };
            return acc;
          },
          {}
        );
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async getCustomFields() {
      try {
        const data = await this.$store.dispatch(
          'driverPayTemplates/getCustomFields'
        );
        this.payTemplateCustomFields = data;
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    initLoadTemplateData() {
      this.loadTemplateData = Object.keys(this.driverBillingData).reduce(
        (acc, driverId) => {
          const { driverDefaultPayType, preTripPayTemplateDetails, trip } =
            this.driverBillingData[driverId] || {};
          let loadDetails = [];

          if (trip && trip.payTemplateDetails) {
            loadDetails = trip.payTemplateDetails.loadDetails;
          } else if (
            preTripPayTemplateDetails &&
            preTripPayTemplateDetails.loadDetails &&
            preTripPayTemplateDetails.loadDetails.length > 0
          ) {
            loadDetails = preTripPayTemplateDetails.loadDetails;
          } else if (
            driverDefaultPayType &&
            driverDefaultPayType.driverPayTemplate &&
            driverDefaultPayType.driverPayTemplate.loadDetails
          ) {
            loadDetails = driverDefaultPayType.driverPayTemplate.loadDetails;
          }

          acc[driverId] = loadDetails;
          return acc;
        },
        {}
      );
    },
    onDriverPayInput(driverId, values) {
      const currentDriverBillingData = { ...this.driverBillingData[driverId] };
      const { preTripPayTemplateDetails } = currentDriverBillingData || {};
      let additionalData = {};

      if (preTripPayTemplateDetails) {
        additionalData = {
          preTripPayTemplateDetails: {
            ...preTripPayTemplateDetails,
            loadDetails: values.map((value, idx) => {
              const additionalFields = (
                preTripPayTemplateDetails.loadDetails[idx] || {}
              ).loadTemplatePayDetailId
                ? {
                    loadTemplatePayDetailId:
                      preTripPayTemplateDetails.loadDetails[idx]
                        .loadTemplatePayDetailId,
                  }
                : {};

              return {
                ...value,
                ...additionalFields,
                loadId: this.load.load_id,
              };
            }),
          },
        };
      }

      this.driverBillingData[driverId] = {
        ...currentDriverBillingData,
        driverDefaultPayType: {
          defaultPayType:
            (currentDriverBillingData.driverDefaultPayType || {})
              .defaultPayType || {},
          driverPayTemplate: {
            loadDetails: values.map((value) => {
              return {
                ...value,
                loadId: this.load.load_id,
              };
            }),
          },
        },
        ...additionalData,
      };
    },
    async updateDriverPay(driverId) {
      try {
        let loadDetails = [];
        const loadData = this.loadData(driverId);
        const fuelPrice = this.getFuelPrice(
          loadData.stops[0].shipping_date || loadData.stops[0].date || null
        );
        const firstStopDatePrice = fuelPrice !== null ? fuelPrice : null;
        let payTemplateDetails = [];
        const { preTripPayTemplateDetails } =
          this.driverBillingData[driverId] || {};

        if (
          preTripPayTemplateDetails &&
          preTripPayTemplateDetails.loadDetails
        ) {
          payTemplateDetails = preTripPayTemplateDetails.loadDetails;
        } else {
          payTemplateDetails = (
            (this.driverBillingData[driverId] || {}).driverDefaultPayType || {}
          ).driverPayTemplate.loadDetails;
        }
        if (
          payTemplateDetails.some(
            (loadDetail) => !loadDetail.hasOwnProperty('fieldId')
          )
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Please select a payment field or delete the empty fields.',
          });
          return;
        }

        const keysToCheck = ['rate', 'loadTemplatePayDetailId'];

        payTemplateDetails.forEach((loadDetail) => {
          const obj = {
            loadId: this.load.load_id,
            fieldId: loadDetail.fieldId,
            payment: loadDetail.payment,
            qty: loadDetail.quantity,
            type: loadDetail.type,
            comment: loadDetail.comment || null,
          };
          keysToCheck.forEach((key) => {
            if (loadDetail.hasOwnProperty(key) && loadDetail[key] !== null) {
              obj[key] = loadDetail[key];
            }
          });
          if (loadDetail.type.includes('byPercentage')) {
            obj.percentage = loadDetail.percentage;
          }
          if (loadDetail.type === 'stopPay') {
            obj.payStartAfter = loadDetail.payStartAfter;
          }
          if (
            loadDetail.type === 'formulaLoadedMiles' ||
            loadDetail.type === 'formulaEmptyMiles'
          ) {
            obj.v1 =
              loadDetail.v1 === firstStopDatePrice || !loadDetail.v1
                ? firstStopDatePrice
                : loadDetail.v1;
            obj.v2 = loadDetail.v2;
            obj.v3 = loadDetail.v3;
          }

          loadDetails.push(obj);
        });

        const apiPayload = {
          loadId: this.load.load_id,
          drivers: [
            {
              userId: driverId,
              preTripPayTemplateDetails: {
                loadDetails,
              },
            },
          ],
        };

        const {
          payload: { drivers },
        } = await this.$store.dispatch(
          'tripV2/updatePreTripDriverPay',
          apiPayload
        );

        // this.hiddenSaveButtonDriverIds.push(driverId);
        this.hiddenSaveButtonDriverIds = this.hiddenSaveButtonDriverIds.filter(
          (hiddenId) => hiddenId !== driverId
        );

        if (drivers && drivers.length) {
          drivers.forEach(({ userId, preTripPayTemplateDetails }) => {
            this.$set(
              this.driverBillingData[userId],
              'preTripPayTemplateDetails',
              preTripPayTemplateDetails
            );
          });
        }

        this.$vs.notify({
          color: 'success',
          title: 'Success',
          text: 'Driver pay saved successfully',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    loadPaymentTotal(driverId, total) {
      if (!this.driverBillingData[driverId]) return;
      this.$set(this.driverPayments, driverId, total);
    },
    toggleDriverPayPopup(driverId) {
      const tripId = ((this.driverBillingData[driverId] || {}).trip || {}).id;

      if (tripId) {
        this.driverPayPopup = {
          isActive: !this.driverPayPopup.isActive,
          recordId: tripId,
        };
      }
    },
    closeDriverPayPopup(refreshTab = false) {
      if (refreshTab) {
        this.refreshTab();
      }

      this.driverPayPopup = {
        isActive: false,
        recordId: null,
      };
    },
    async refreshTab() {
      try {
        await this.getCustomFields();
        await this.getDriverPay();
        this.initLoadTemplateData();
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.driver-pay-popup.con-vs-popup .vs-popup {
  width: 80%;
}
.driver-pay-popup .vs-popup--header {
  background-color: #fff;
}
.driver-pay-popup.con-vs-popup {
  z-index: 52034;
}
</style>
