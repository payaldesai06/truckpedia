import { v4 as uuidv4 } from 'uuid';
import {
  extractAddress,
  getApiErrorMsg,
  parseFloatWithTrim,
  isValidInputValue,
} from '@/helpers/helper';
import { cloneDeep, round } from 'lodash';
import config from '@/config/constants.js';
import customizations from '@/config/customizations.js';
import { EventBus } from '@/helpers/eventBus';
import { mapGetters } from 'vuex';

const loadHelperMixin = {
  data() {
    return {
      // Well, it's in fact much more complicated. For drivers, only the loaded
      // miles can be manual when there is no leg and no terminal between shipper and receiver.
      // Empty miles can never be manual for now.
      driverMileType: 'google_maps',
      // No need to cache Google Maps and PC Miler seperately, cause users do
      // not switch back and forth.
      loadDistanceCache: {
        loadDistanceCalculatedBy: null,
        loadDistanceCache: [],
      },
      // The cache when there is no leg
      noLegCache: {
        loadedDistanceCalculatedBy: null,
        loadedDistanceCache: [],
        loadedDistance: 0,

        emptyDistance: 0,
        // start is 1st stop to first shipper/receiver.
        startEmptyDistanceCalculatedBy: null,
        startEmptyDistanceCache: [],
        startEmptyDistance: 0,
        // end is last shipper/receiver to last stop
        endEmptyDistanceCalculatedBy: null,
        endEmptyDistanceCache: [],
        endEmptyDistance: 0,
      },
      toLegCache: {
        loadedDistanceCalculatedBy: null,
        loadedDistanceCache: [],
        loadedDistance: 0,

        // No empty distance after leg, cause leg is guaranteed the last stop.
        emptyDistanceCalculatedBy: null,
        emptyDistanceCache: [],
        emptyDistance: 0,
      },
      fromLegCache: {
        loadedDistanceCalculatedBy: null,
        loadedDistanceCache: [],
        loadedDistance: 0,

        // No empty distance before leg, cause leg is guaranteed the first stop.
        emptyDistanceCalculatedBy: null,
        emptyDistanceCache: [],
        emptyDistance: 0,
      },

      rateConTypeOptions: [
        { label: 'OTR', value: 'otr' },
        { label: 'Intermodal', value: 'intermodal' },
        { label: 'Local', value: 'local' },
      ],
      containerStatusOptions: [
        { id: 1, label: 'Empty', value: 'empty' },
        { id: 2, label: 'Loaded', value: 'loaded' },
      ],
      containerStatus: null,
      containerLocationStopKey: null,
      vessel: null,
      arrivalDate: null,
      lastFreeDate: null,
      bolNumber: null,
      pickedUpEquipment: {
        number: null,
        type: null,
        size: null,
      },
      droppedOffEquipment: {
        number: null,
        type: null,
        size: null,
      },
      mapDialog: {
        isActive: false,
        itemIndex: null,
        isMapClickable: true,
        markers: [],
      },
      defaultMapCenter: {
        lat: 39.83333361,
        lng: -98.58,
      },
      t3Statuses: [],
      fuelSurchargeV3: 7,
      fuelSurchargeV2: null,
      fuelSurchargeV1: null,
      companyInternalReference: '',
      loadNotes: [],
      selectedLane: null,
      ratePredictions: {},
      showRatePrediction: false,
      selected_equipment_type: null,
      stateList: config.state_list.map((state) => state.text),
      hauling_fee_options: [
        { label: 'Flat fee', value: 'flat_fee' },
        { label: 'Weight', value: 'weight' },
        { label: 'Quantity', value: 'qty' },
        { label: 'Truck hour', value: 'truck_hour' },
        { label: 'Per Mile', value: 'per_mile' },
        { label: 'Quantity (Variable Rate)', value: 'qty_var_rate' },
      ],
      accessorialDeductionPrompt: {
        isActive: false,
        data: {},
      },
      accessorialFeePrompt: {
        isActive: false,
        data: {},
      },
    };
  },

  watch: {
    stopTypeLatLngDriverList: {
      handler: async function (newVal, oldVal) {
        console.log(
          '[watcher] stopTypeLatLngDriverList triggering: ',
          newVal,
          oldVal
        );
        await this.calculateLoadDistances(this.mile_type);
        this.$emit('updateShipperReceiverLegList', this.shipperReceiverLegList);
      },
      // Turn this on will cause calculateLoadDistances() called twice with
      // same data when adding a new stop.
      // deep: true,
    },

    selected_hauling_fee(newType, oldType) {
      if (
        newType == 'truck_hour' &&
        ((newType != oldType && oldType) || !this.haulingFeeQty)
      ) {
        this.onTruckChange(0, 'assignSegment');
      }

      this.onTotalMileChange(this.calculatedLoadMiles);

      if (newType !== 'qty_var_rate' && oldType === 'qty_var_rate') {
        // Reset quantity variable rates
        this.shipperReceiverLegList
          .filter((item) => item.renderAddressType == 'shipper')
          .forEach((shipper) => {
            shipper.qtyRate = null;
            if (
              ((shipper.additionalFreightDetails || {}).details || []).length
            ) {
              shipper.additionalFreightDetails.details.forEach((freight) => {
                freight.qtyRate = null;
              });
            }
          });
      }
    },
    payloadCacheForGreenscreens: {
      handler: async function (newVal, oldVal) {
        if (this.canAccessGreenscreens) {
          console.log('[watcher] payloadCacheForGreenscreens: ', newVal);
          if (!newVal) {
            this.hideRatePrediction();
          } else {
            this.debounce(async () => {
              await this.getPredictedRates(newVal);
            }, 1000);
          }
        }
      },
    },
    calculatedLoadMiles(newCalculatedLoadMiles, oldCalculatedLoadMiles) {
      if (newCalculatedLoadMiles === oldCalculatedLoadMiles) return;

      this.onTotalMileChange(newCalculatedLoadMiles);
    },
  },

  computed: {
    ...mapGetters('auth', [
      'companyFeatureAccess',
      'user',
      'isUserBrokerOrShipper',
    ]),
    ...mapGetters('load', ['loadDistancesCacheMap']),

    canAccessGreenscreens() {
      if ([23, 36].includes(this.user.admin_company_detail_id)) {
        return true;
      }
      return !this.isUserBrokerOrShipper && !this.brokerModeForSpecificCompany;
    },

    customerLanes() {
      if (
        !this.selected_company ||
        !Object.keys(this.getCachedCustomerLanes).length ||
        !this.getCachedCustomerLanes[JSON.stringify(this.laneDataParams)]
      ) {
        return [];
      }
      return this.getCachedCustomerLanes[
        JSON.stringify(this.laneDataParams)
      ].lanes.map((lanes) => {
        return {
          ...lanes,
          label: `${lanes.origin.city}, ${lanes.origin.state} to ${
            lanes.destination.city
          }, ${lanes.destination.state} ${
            lanes.code ? '(' + lanes.code + ')' : ''
          }`,
        };
      });
    },

    showCompanyInternalReferenceForCompanies() {
      return config.showCompanyInternalReferenceForCompanies.includes(
        this.user.admin_company_detail_id
      );
    },
    // Use this for watch.
    stopTypeLatLngDriverList: function () {
      let ret =
        this.mile_type +
        ';' +
        this.driverMileType +
        ';' +
        'hasLeg' +
        this.legsList.length +
        ';';
      ret += this.shipperReceiverLegList
        .map((stop) => {
          return (
            stop.renderAddressType + ',' + stop.latitude + ',' + stop.longitude
          );
        })
        .join(';');
      ret +=
        'toLeg' +
        this.assign_driver_and_equipments.length +
        ';fromLeg' +
        this.paramLegs.length;
      if (this.paramLegs.length > 0) {
        ret += ',' + this.paramLegs[0].length;
      }
      return ret;
    },

    // Only allow manual driver mile when there is no leg, no terminal, and load
    // mile engine is also manual.
    driverMileEngineCanBeManual() {
      return (
        this.mile_type === 'manual' &&
        this.shipperReceiverLegList.every(
          (stop) =>
            stop.renderAddressType == 'shipper' ||
            stop.renderAddressType == 'receiver'
        )
      );
    },

    payloadCacheForGreenscreens: function () {
      if (
        this.shipperReceiverLegList.filter(
          (stop) =>
            (stop.renderAddressType == 'shipper' ||
              stop.renderAddressType == 'receiver') &&
            (!stop.city ||
              !stop.state ||
              !stop.zip_code ||
              !this.stateList.includes(stop.state))
        ).length > 0 ||
        this.shipperReceiverLegList.filter(
          (stop) => stop.renderAddressType == 'shipper'
        ).length == 0 ||
        this.shipperReceiverLegList.filter(
          (stop) => stop.renderAddressType == 'receiver'
        ).length == 0
      ) {
        return null;
      }
      const pickupDate = this.shipperReceiverLegList.find(
        (stop) => stop.renderAddressType == 'shipper'
      ).shipping_date;
      if (!pickupDate) {
        return null;
      }
      let equipmentType = 'van';
      if (this.selected_equipment_type) {
        if (this.selected_equipment_type.includes('reefer')) {
          equipmentType = 'reefer';
        } else if (this.selected_equipment_type.includes('flatbed')) {
          equipmentType = 'flatbed';
        }
      }

      return (
        equipmentType +
        '+' +
        pickupDate +
        '+' +
        this.shipperReceiverLegList
          .filter(
            (stop) =>
              stop.renderAddressType == 'shipper' ||
              stop.renderAddressType == 'receiver'
          )
          .map((stop) => stop.city + ';' + stop.state + ';' + stop.zip_code)
          .join('+')
      );
    },

    showCostCode() {
      return config.companiesWithCostCodeEnabled.includes(
        this.user.admin_company_detail_id
      );
    },

    costCodeOption() {
      return customizations.emerySappCostCodes;
    },

    roundTripButtonForSpecificCompany() {
      return config.companiesWithPayToCodeNDefaultGLAccountAccess.includes(
        this.user.admin_company_detail_id
      );
    },

    brokerModeForSpecificCompany() {
      return (
        config.showBrokerModeForSpecificCompanyIds.includes(
          this.user.admin_company_detail_id
        ) || this.companyFeatureAccess.includes('brokerModeForCarrier')
      );
    },

    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },

    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar');
          // this.$validator.reset()
          // this.initValues()
        }
      },
    },

    companyInfo() {
      const { admin_company_details } = this.user || {};
      if (this.selected_tag) {
        const tag = this.tagOptions.find(
          (tag) => tag.tag_id === this.selected_tag
        );
        if (tag) {
          return {
            companyName: tag.business_name,
            addressLine1: tag.address,
            addressLine2: `${tag.city}, ${tag.state} ${tag.zipcode}`,
            businessUrl: '',
            businessEmail: tag.email,
            companyLogo: tag.logoImageUrl || '',
          };
        }
      } else {
        if (admin_company_details) {
          return {
            companyName: admin_company_details.business_name,
            addressLine1: admin_company_details.address,
            addressLine2: `${admin_company_details.city}, ${admin_company_details.state} ${admin_company_details.zipcode}`,
            businessUrl: admin_company_details.business_url,
            businessEmail: admin_company_details.email,
            companyLogo: admin_company_details.company_image_url,
          };
        }
      }

      return null;
    },

    isLegAdded() {
      return this.legsList.length > 0;
    },

    carriersList() {
      return (this.customersList || []).filter(
        (customer) => customer.type === 'carrier'
      );
    },

    hauling_fee_amount() {
      const shipperDetails = this.shipperReceiverLegList.filter(
        (item) => item.renderAddressType == 'shipper' || !!item.load_shipper_id
      );
      if (this.selected_hauling_fee === 'qty') {
        return (
          this.hauling_fee_rate *
          shipperDetails.reduce(function (sum, current) {
            const additionalFreightDetailsTotalQty =
              ((current || {}).additionalFreightDetails || {}).totalQty || 0;
            return (
              sum + (current.freight_qty + additionalFreightDetailsTotalQty)
            );
          }, 0)
        );
      } else if (this.selected_hauling_fee === 'weight') {
        return (
          this.hauling_fee_rate *
          shipperDetails.reduce(function (sum, current) {
            const additionalFreightDetailsTotalWeight =
              ((current || {}).additionalFreightDetails || {}).totalWeight || 0;
            return (
              sum +
              (current.freight_weight + additionalFreightDetailsTotalWeight)
            );
          }, 0)
        );
      } else if (this.selected_hauling_fee === 'truck_hour') {
        return Number(this.hauling_fee_rate) * Number(this.haulingFeeQty);
      } else if (this.selected_hauling_fee === 'per_mile') {
        return Number(this.hauling_fee_rate) * Number(this.calculatedLoadMiles);
      } else if (this.selected_hauling_fee === 'qty_var_rate') {
        const total = this.shipperQuantityVariableRates.reduce((acc, item) => {
          if (isValidInputValue(item.qty) && isValidInputValue(item.rate)) {
            return acc + Number(item.rate) * Number(item.qty);
          }
          return acc;
        }, 0);
        this.hauling_fee_rate = parseFloatWithTrim(total);
        return total;
      } else {
        return this.hauling_fee_rate;
      }
    },

    fuel_surcharge_amount() {
      if (
        this.fuel_surcharge_rate &&
        this.selected_fuel_surcharge == 'percentage'
      ) {
        return (this.hauling_fee_amount * this.fuel_surcharge_rate) / 100;
      }

      if (
        (this.fuel_surcharge_rate &&
          this.selected_fuel_surcharge == 'per_mile') ||
        this.selected_fuel_surcharge == 'formulaPerMile'
      ) {
        return this.calculatedLoadMiles * this.fuel_surcharge_rate;
      }

      if (this.fuel_surcharge_rate) {
        return this.fuel_surcharge_rate;
      }

      return 0;
    },

    subTotal() {
      const hauling_fee_amount = Number(this.hauling_fee_amount);
      const fuel_surcharge_amount = Number(this.fuel_surcharge_amount);

      const accessorial_fees_total_amount = this.accessorial_fees
        .map((fees) => Number(fees.amount))
        .reduce((totalAmount, amount) => totalAmount + amount, 0);
      const accessorial_deduction_fees_total_amount =
        this.accessorial_deduction_fees
          .map((fees) => Number(fees.amount))
          .reduce((totalAmount, amount) => totalAmount + amount, 0);

      return (
        hauling_fee_amount +
        fuel_surcharge_amount +
        accessorial_fees_total_amount +
        accessorial_deduction_fees_total_amount
      );
    },

    totalAmount() {
      if (this.subTotal < this.discount) {
        return this.subTotal;
      }

      return this.subTotal - this.discount;
    },

    factoringFee() {
      if (this.factoringCompanies.length > 0) {
        const factoringDetails = this.factoringCompanies[0];
        return (
          this.totalAmount * factoringDetails.factoring_fee_fractional
        ).toFixed(2);
      }
    },

    filteredDriverOptions() {
      // return this.driver_options;
      const selectedDriver = [
        ...this.assign_driver_and_equipments.flatMap(
          (driver) => driver.selected_drivers
        ),
        ...this.paramLegs.flatMap((leg) =>
          leg.flatMap((driver) => driver.selected_drivers)
        ),
      ].filter((selectedDriver) => selectedDriver);

      return this.driver_options.filter(
        (driver) =>
          !selectedDriver.some(
            (selected) => selected.driver_id === driver.driver_id
          )
      );
    },

    filteredTruckOptions() {
      return this.truck_options;
    },

    filteredTruckOptionsLeg() {
      let ret = [];
      for (let i = 0; i < this.paramLegs.length; i++) {
        ret.push(this.truck_options);
      }
      return ret;
    },

    filteredTrailerOptions() {
      return this.trailer_options;
    },

    filteredTrailerOptionsLeg() {
      let ret = [];
      for (let i = 0; i < this.paramLegs.length; i++) {
        ret.push(this.trailer_options);
      }
      return ret;
    },

    isDriverAdded() {
      return !(
        this.assign_driver_and_equipments.length <= 0 ||
        this.assign_driver_and_equipments
          .map((driver) => {
            return (
              driver.selected_drivers.length <= 0 &&
              driver.selected_truck == null &&
              driver.selected_trailer == null &&
              driver.is_drop_trailer == false &&
              driver.externalTrailerNumber == false &&
              driver.is_final_mile == false &&
              // driver.is_notified == false &&
              driver.notes == ''
            );
          })
          .find((result) => result == true)
      );
    },

    userIsCarrier() {
      /**
       * companyType possible values
       * null/carrier => carrier
       * shipper => shipper
       * broker => broker
       */
      const { admin_company_details } = this.user || {};
      const { companyType } = admin_company_details || {};
      return companyType === null || companyType === 'carrier';
    },

    legsList() {
      return (this.shipperReceiverLegList || []).filter(
        (leg) => leg.renderAddressType == 'leg'
      );
    },

    interModalBodyContent() {
      return {
        vessel: this.vessel,
        arrivalDate: this.arrivalDate,
        lastFreeDate: this.lastFreeDate,
        bolNumber: this.bolNumber,
        pickedUpEquipment: this.pickedUpEquipment,
        droppedOffEquipment: this.droppedOffEquipment,
      };
    },

    getDefaultMapCenterCoordinates() {
      if (this.mapDialog.markers.length > 0) {
        return this.mapDialog.markers[0].position;
      }

      return this.getUserLatLang || this.defaultMapCenter;
    },

    hasT3Access() {
      const { admin_company_detail_id } =
        (this.user || {}).admin_company_details || {};
      return config.companiesWithT3Access.includes(admin_company_detail_id);
    },

    containerLocationOptions() {
      let options = this.shipperReceiverLegList.map(
        ({
          key,
          shipper_name,
          receiver_name,
          location_name,
          name,
          renderAddressType,
        }) => {
          let stopName = name;
          switch (renderAddressType) {
            case 'shipper':
              stopName = shipper_name;
              break;
            case 'receiver':
              stopName = receiver_name;
              break;
            case 'leg':
              stopName = location_name;
              break;
          }
          return {
            label: stopName,
            value: key,
          };
        }
      );

      options = options.filter((option) => option.label); // filtering the options based on label inside the object because its showing empty string if label is not present

      if (
        this.containerLocationStopKey &&
        !options.some(
          (option) => option.value === this.containerLocationStopKey
        )
      ) {
        this.containerLocationStopKey = null;
      }

      return options;
    },
    selectedLaneCode() {
      return (this.selectedLane && this.selectedLane.code) || null;
    },
    allowStageTrailerLocation() {
      return (
        this.thirdPartyCarrier.rateConType === 'otr' &&
        config.stageTrailerLocationEnabled.includes(
          this.user.admin_company_detail_id
        )
      );
    },
    calculateByMileBasedHaulingFee() {
      const { admin_company_detail_id } =
        (this.user || {}).admin_company_details || {};

      const isCompanyIncluded = admin_company_detail_id
        ? config.mileBasedHaulingFeeCalculationDict.companies.includes(
            Number(admin_company_detail_id)
          )
        : false;

      return isCompanyIncluded;
    },
    shipperQuantityVariableRates() {
      let res = [];
      this.shipperReceiverLegList
        .filter((item) => item.renderAddressType == 'shipper')
        .forEach((shipper) => {
          res.push({
            shipperKey: shipper.id || shipper.key,
            qty: shipper.freight_qty,
            rate: shipper.qtyRate,
          });
          if (((shipper.additionalFreightDetails || {}).details || []).length) {
            shipper.additionalFreightDetails.details.forEach((freight) => {
              res.push({
                shipperKey: shipper.id || shipper.key,
                qty: freight.freight_qty,
                rate: freight.qtyRate,
              });
            });
          }
        });
      return res;
    },
    showEmptyTimeWarning() {
      return config.companiesWithShipperReceiverTimeHighlight.includes(
        this.user.admin_company_detail_id
      );
    },
    shallRoundMilesToInteger() {
      return config.companiesWithRoundedMilesToInteger.includes(
        this.user.admin_company_detail_id
      );
    },
    laneDataParams() {
      return {
        customerId: this.selected_company.customer_id,
        fields: [
          'code',
          'origin',
          'destination',
          'distance',
          'direction',
          'rate',
          'roundTripDistance',
          'roundTripRate',
          'previousRoundTripRate',
          'effectiveDate',
          'fuelSurchargeV2',
          'fuelSurchargeV3',
          'fuelSurchargeRate',
          'fuelSurchargeRoundTripRate',
        ],
      };
    },
  },

  methods: {
    async onCustomerSelection() {
      this.selectedLane = null;
      if (!this.getCachedCustomerLanes[JSON.stringify(this.laneDataParams)]) {
        await this.getLanesData();
      }
    },

    setSelectedLane(laneCode) {
      const foundLane = this.customerLanes.find(
        (item) => item.code === laneCode
      );
      if (foundLane) {
        this.selectedLane = foundLane;
      }
    },

    async getLanesData() {
      try {
        const {
          data: { payload },
        } = await this.$store.dispatch(
          'customer/getCustomerLanes',
          this.laneDataParams
        );
        if (payload) {
          await this.$store.commit('customer/setCustomerLanes', {
            params: this.laneDataParams,
            lanesData: payload,
          });
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },

    // These function are related to weekly fuel charges
    getPublicWeeklyFuelPrices() {
      this.$store.dispatch('load/getPublicWeeklyFuelPrices');
    },

    async onShippingDateChange(index) {
      const firstShipperIndex = this.shipperReceiverLegList.findIndex(
        (item) => item.renderAddressType === 'shipper'
      );
      if (firstShipperIndex === index) {
        await this.getFuelPriceBasedOnShippingDate(
          this.selected_fuel_surcharge
        );
      }
    },

    async getFuelPriceBasedOnShippingDate(value, skippGettingPrice = false) {
      if (value === 'formulaPerMile') {
        if (!skippGettingPrice) {
          const firstShipper = this.shipperReceiverLegList.find(
            (item) => item.renderAddressType === 'shipper'
          );
          if (!firstShipper || !firstShipper.shipping_date) {
            return;
          }
          const getPrice = await this.getFuelPrice(firstShipper.shipping_date);
          if (getPrice) {
            this.fuelSurchargeV1 = getPrice;
          } else {
            this.fuelSurchargeV1 = null;
          }
        }

        if (
          this.fuelSurchargeV1 === '' ||
          this.fuelSurchargeV2 === '' ||
          this.fuelSurchargeV1 === null ||
          this.fuelSurchargeV2 === null
        ) {
          this.fuel_surcharge_rate = null;
          return;
        }

        this.fuel_surcharge_rate = this.fuelSurchargeV3
          ? round(
              (this.fuelSurchargeV1 - this.fuelSurchargeV2) /
                this.fuelSurchargeV3,
              3
            ) //.toFixed(3)
          : 0; //(this.fuelSurchargeV1 - this.fuelSurchargeV2).toFixed(3);
      }
    },
    // These function are related to weekly fuel charges End

    // This function is related to truck hours
    onTruckChange(index, type) {
      if (
        this.assign_driver_and_equipments.length == 0 ||
        type !== 'assignSegment' ||
        this.selected_hauling_fee !== 'truck_hour'
      ) {
        return;
      }
      if (index === 0) {
        this.setHaulingFeeRateForLoadTruckHour();
      }
    },
    setHaulingFeeRateForLoadTruckHour() {
      if (this.selected_hauling_fee !== 'truck_hour') {
        return;
      }
      const assignDriverTruck = this.assign_driver_and_equipments[0];
      if (
        assignDriverTruck &&
        assignDriverTruck.selected_truck &&
        assignDriverTruck.selected_truck.truck_id
      ) {
        const truck = this.findTruckForTruckHour(
          assignDriverTruck.selected_truck.truck_id
        );
        this.setHaulingFeeRateForTruckHour(truck);
      }
      this.sumOfLoadDriverTime();
      /* else if (this.assign_driver_and_equipments.length === 0) {
        const paramLeg =
          this.paramLegs && this.paramLegs[0] && this.paramLegs[0][0];
        if (
          paramLeg &&
          paramLeg.selected_truck &&
          paramLeg.selected_truck.truck_id
        ) {
          const truck = this.findTruckForTruckHour(paramLeg.selected_truck.truck_id);
          this.setHaulingFeeRateForTruckHour(truck);
        }
      }*/
    },
    findTruckForTruckHour(selectedTruckId) {
      return this.allDriverTruckTrailerForLoadDriver.trucks.find(
        (item) => item.id === selectedTruckId
      );
    },
    setHaulingFeeRateForTruckHour(selectedTruck) {
      if (selectedTruck && selectedTruck.hourlyCost) {
        this.hauling_fee_rate = Number(selectedTruck.hourlyCost);
      }
    },
    sumOfLoadDriverTime() {
      const assignDriverHours = this.assign_driver_and_equipments.map((item) =>
        this.calculateMinuteDifference(
          item.endLoadUtcDatetime,
          item.startLoadUtcDatetime
        )
      );
      let paramDriverHours = [];
      if (this.paramLegs && this.paramLegs.length > 0) {
        paramDriverHours = this.paramLegs[0].map((item) =>
          this.calculateMinuteDifference(
            item.endLoadUtcDatetime,
            item.startLoadUtcDatetime
          )
        );
      }
      const combinedArray = [].concat(
        ...assignDriverHours,
        ...paramDriverHours
      );
      const minuteDifferences = combinedArray.reduce(
        (curr, acc) => curr + acc,
        0
      );
      const totalQty = Number(minuteDifferences / 60.0).toFixed(2);
      if (totalQty) {
        this.haulingFeeQty = totalQty;
      }
    },
    calculateMinuteDifference(endLoadUtcDatetime, startLoadUtcDatetime) {
      if (endLoadUtcDatetime && startLoadUtcDatetime) {
        const endDatetime = this.$dayjs(endLoadUtcDatetime);
        const startDatetime = this.$dayjs(startLoadUtcDatetime);
        return endDatetime.diff(startDatetime, 'minutes');
      }
      return 0;
    },
    // End: this function is related to truck hours

    async calculateLoadDistances() {
      console.log('calculateLoadDistances() begins');

      // For terminal empty mile and driver start position, if user choose manual,
      // we use PC Miler or Google Maps.
      if (
        this.driverMileType === 'manual' &&
        !this.driverMileEngineCanBeManual
      ) {
        this.driverMileType = this.pcMilerOrGoogleMaps();
        console.log(
          'Reset driverMileType, calculateLoadDistances() returns early.'
        );
        return; // Another call of this function will be triggered.
      }

      let mileEngine = this.mile_type;
      let driverMileEngine = this.driverMileType;
      for (const stop of this.shipperReceiverLegList) {
        if (!stop.latitude || !stop.longitude) {
          console.log('No lat/long for a stop, skip calculating distances.');
          return;
        }
      }

      if (mileEngine == 'p' && !this.pcmiler.apiKey) {
        console.log('Missing PC Miler key');
        return;
      }

      // Part A: load miles.
      // Step A.1: get valid lat & lng.
      const loadDistanceList = this.calculateLoadDistanceListHelper();

      if (loadDistanceList.length < 2) {
        // If turn on this line, add 2, delete one, add one back, miles is still 0.
        console.log('loadDistanceList.length < 2');
        this.calculatedLoadMiles = 0;
        this.resetLoadDistanceCache();
        // We can reset these as well but I don't think it's really needed.
        // this.resetNoLegCache();
        // this.resetToLegCache();
        // this.resetFromLegCache();
        return; // no need to do other calculations, cause the load cannot be saved at all.
      }

      // If code goes here, then it means we will calculate both load distance
      // and driver distance, so we need to reset not used driver distance cache.

      // Step A.2 cache lat & lng & calculatedBy compare then calculate.
      if (mileEngine == 'p' || mileEngine == 'google_maps') {
        if (
          !this.areSameCacheStopLists(
            this.loadDistanceCache.loadDistanceCache,
            loadDistanceList
          ) ||
          this.loadDistanceCache.loadDistanceCalculatedBy != mileEngine
        ) {
          this.calculatedLoadMiles = await this.calculateStopDistance(
            loadDistanceList,
            mileEngine
          );
          console.log('Load mile: ' + this.calculatedLoadMiles);
          this.loadDistanceCache.loadDistanceCache = loadDistanceList;
          this.loadDistanceCache.loadDistanceCalculatedBy = mileEngine;
        }
      } else {
        this.loadDistanceCache.loadDistanceCache = [];
        this.loadDistanceCache.loadDistanceCalculatedBy = mileEngine;
      }

      // Part B: terminal empty mile if last stop is terminal.
      // No longer used anymore.

      // Part C: driver start position.

      // Part D: driver loaded and empty miles, both with and without leg cases.
      /*
      Some test cases:
      1. Add leg, then driver.
      2. Remove leg.
      3. Add driver when we have and no leg.
      4. Open old load with and without leg.
      5. Duplicate load.
      6. Terminal.
      7. 2 stops -> leg -> 2 stops -> terminal.
      8. After uploading rate con pdf.
      9. Create a load with leg but no driver, save it, then open.
      10. Edit load, add new driver & update existing driver, open again to check.
      */
      /*
      Case 1: Without leg
        -> Loaded miles == total miles from first shipper/receiver stop to last
          shipper/receiver stop.
        -> Empty miles = all terminal miles before first shipper/receiver stop
          and after last shipper/receiver stop  + each driver's start position miles.
      */
      if (
        // Without leg case
        !this.shipperReceiverLegList.some(
          (item) => item.renderAddressType === 'leg'
        )
      ) {
        await this.calculateDriverDistancesNoLeg(
          loadDistanceList,
          driverMileEngine,
          mileEngine
        );
        this.resetToLegCache();
        this.resetFromLegCache();
      } else {
        // With leg case.
        /*
        Case 2: With leg
        a) 1st stop to leg
          -> Loaded miles == 1st shipper/receiver to leg (including terminal in between).
          -> Empty miles = 1st stop, if terminal, to 1st shipper/receiver + each driver's start position miles to 1st stop.
        b) leg to last stop
          -> Loaded miles == leg to last shipper/receiver (including terminal in between).
          -> Empty miles = last shipper/receiver to last stop, if terminal, + each driver's start position miles to leg.
        */
        await this.calculateDriverDistancesWithLeg(driverMileEngine);
        this.resetNoLegCache();
      }

      // TODO: comment out before push.
      /*
      console.log(
        JSON.stringify(this.loadDistanceCache),
        JSON.stringify(this.noLegCache),
        JSON.stringify(this.toLegCache),
        JSON.stringify(this.fromLegCache)
      );
      */
      this.$forceUpdate();
    },

    pcMilerOrGoogleMaps() {
      let ret = 'google_maps';
      if (this.pcmiler.apiKey) {
        ret = 'p';
      }
      return ret;
    },

    async calculateDriverDistancesNoLeg(
      loadDistanceList,
      driverMileEngine,
      loadMileEngine
    ) {
      const emptyMileEngine = this.getEmptyMileEngine(driverMileEngine);

      if (this.assign_driver_and_equipments.length == 0) {
        this.resetNoLegCache();
        return;
      }
      // If no terminal and same engine for load and driver mile, no need to redo any calculation.
      if (
        !this.shipperReceiverLegList.some(
          (item) => item.renderAddressType === 'terminal'
        ) &&
        loadMileEngine === driverMileEngine
      ) {
        this.resetNoLegCache(true);

        this.noLegCache.loadedDistance = this.calculatedLoadMiles;
        this.noLegCache.loadedDistanceCache =
          this.loadDistanceCache.loadDistanceCache;
        this.noLegCache.loadedDistanceCalculatedBy =
          this.loadDistanceCache.loadDistanceCalculatedBy;
      } else {
        const { startEmptyStopList, loadedStopList, endEmptyStopList } =
          this.calculateNoLegDistanceListHelper();
        // 1st stop to first shipper/receiver.
        if (startEmptyStopList.length < 2) {
          this.resetNoLegCacheStartEmptyDistance();
        } else {
          await this.recalculateDistanceIfNeeded(
            this.noLegCache,
            'startEmptyDistance',
            'startEmptyDistanceCache',
            'startEmptyDistanceCalculatedBy',
            startEmptyStopList,
            emptyMileEngine,
            'No leg start empty mile'
          );
        }

        // First shipper/receiver to last shipper/receiver.
        if (
          loadedStopList.length == loadDistanceList.length &&
          loadMileEngine === driverMileEngine
        ) {
          // No terminal in between.
          this.noLegCache.loadedDistance = this.calculatedLoadMiles;
          this.noLegCache.loadedDistanceCache =
            this.loadDistanceCache.loadDistanceCache;
          this.noLegCache.loadedDistanceCalculatedBy =
            this.loadDistanceCache.loadDistanceCalculatedBy;
        } else {
          await this.recalculateDistanceIfNeeded(
            this.noLegCache,
            'loadedDistance',
            'loadedDistanceCache',
            'loadedDistanceCalculatedBy',
            loadedStopList,
            driverMileEngine, // In thoery, not possible to be manual cause if this is manual, then loadMileEngine must also be manual and we only have shipper and receiver.
            'No leg loaded mile'
          );
        }

        // Last shipper/receiver to last stop.
        if (endEmptyStopList.length < 2) {
          this.resetNoLegCacheEndEmptyDistance();
        } else {
          await this.recalculateDistanceIfNeeded(
            this.noLegCache,
            'endEmptyDistance',
            'endEmptyDistanceCache',
            'endEmptyDistanceCalculatedBy',
            endEmptyStopList,
            emptyMileEngine,
            'No leg end empty mile'
          );
        }

        this.noLegCache.emptyDistance = (
          Number(this.noLegCache.startEmptyDistance) +
          Number(this.noLegCache.endEmptyDistance)
        ).toFixed(2);
      }
      // Make sure the distances are always correct.
      for (const loadDriver of this.assign_driver_and_equipments) {
        loadDriver.loadedDistance = this.noLegCache.loadedDistance;
        loadDriver.emptyDistance = this.noLegCache.emptyDistance;
      }
    },

    getEmptyMileEngine(driverMileEngine) {
      let emptyMileEngine = driverMileEngine;
      if (emptyMileEngine == 'manual') {
        emptyMileEngine = this.pcMilerOrGoogleMaps();
      }
      return emptyMileEngine;
    },

    async calculateDriverDistancesWithLeg(mileEngine) {
      // Cannot be manual cause we ban manual when there is leg.

      const {
        toLegEmptyStopList,
        toLegLoadedStopList,
        fromLegLoadedStopList,
        fromLegEmptyStopList,
      } = this.calculateLegDistanceListsHelper();

      // Only do calculation when there are some drivers.
      if (this.assign_driver_and_equipments.length > 0) {
        if (toLegEmptyStopList.length < 2) {
          this.resetToLegCacheEmptyDistance();
        } else {
          await this.recalculateDistanceIfNeeded(
            this.toLegCache,
            'emptyDistance',
            'emptyDistanceCache',
            'emptyDistanceCalculatedBy',
            toLegEmptyStopList,
            mileEngine,
            'To leg empty mile'
          );
        }

        if (toLegLoadedStopList.length < 2) {
          this.resetToLegCacheLoadedDistance();
        } else {
          await this.recalculateDistanceIfNeeded(
            this.toLegCache,
            'loadedDistance',
            'loadedDistanceCache',
            'loadedDistanceCalculatedBy',
            toLegLoadedStopList,
            mileEngine,
            'To leg loaded mile'
          );
        }

        // Make sure the distances are always correct.
        for (const loadDriver of this.assign_driver_and_equipments) {
          loadDriver.loadedDistance = this.toLegCache.loadedDistance;
          loadDriver.emptyDistance = this.toLegCache.emptyDistance;
        }
      } else {
        this.resetToLegCache();
      }

      // Only do calculation when there are some drivers.
      if (this.paramLegs[0] && this.paramLegs[0].length > 0) {
        if (fromLegLoadedStopList.length < 2) {
          this.resetFromLegCacheLoadedDistance();
        } else {
          await this.recalculateDistanceIfNeeded(
            this.fromLegCache,
            'loadedDistance',
            'loadedDistanceCache',
            'loadedDistanceCalculatedBy',
            fromLegLoadedStopList,
            mileEngine,
            'From leg loaded mile'
          );
        }

        if (fromLegEmptyStopList.length < 2) {
          this.resetFromLegCacheEmptyDistance();
        } else {
          await this.recalculateDistanceIfNeeded(
            this.fromLegCache,
            'emptyDistance',
            'emptyDistanceCache',
            'emptyDistanceCalculatedBy',
            fromLegEmptyStopList,
            mileEngine,
            'From leg empty mile'
          );
        }

        // Make sure the distances are always correct.
        for (const loadDriver of this.paramLegs[0]) {
          loadDriver.loadedDistance = this.fromLegCache.loadedDistance;
          loadDriver.emptyDistance = this.fromLegCache.emptyDistance;
        }
      } else {
        this.resetFromLegCache();
      }
    },

    isShipperReceiverLeg(stop) {
      return (
        stop.renderAddressType == 'shipper' ||
        stop.renderAddressType == 'receiver' ||
        stop.renderAddressType == 'leg'
      );
    },

    calculateNoLegDistanceListHelper() {
      const startEmptyStopList = [];
      const loadedStopList = [];
      const endEmptyStopList = [];
      const firstShipperReceiverStopIndex = Math.max(
        0, // If not found, return -1.
        this.shipperReceiverLegList.findIndex(this.isShipperReceiverLeg)
      );
      const lastShipperReceiverStopIndexHelper =
        this.shipperReceiverLegList.findLastIndex(this.isShipperReceiverLeg);
      const lastShipperReceiverStopIndex =
        lastShipperReceiverStopIndexHelper > -1
          ? lastShipperReceiverStopIndexHelper
          : this.shipperReceiverLegList.length - 1;

      for (let i = 0; i <= firstShipperReceiverStopIndex; ++i) {
        startEmptyStopList.push(this.shipperReceiverLegListIndexToCacheStop(i));
      }

      for (
        let i = firstShipperReceiverStopIndex;
        i <= lastShipperReceiverStopIndex;
        ++i
      ) {
        loadedStopList.push(this.shipperReceiverLegListIndexToCacheStop(i));
      }

      for (
        let i = lastShipperReceiverStopIndex;
        i < this.shipperReceiverLegList.length;
        ++i
      ) {
        endEmptyStopList.push(this.shipperReceiverLegListIndexToCacheStop(i));
      }

      return { startEmptyStopList, loadedStopList, endEmptyStopList };
    },

    calculateLegDistanceListsHelper() {
      // 1st stop, if terminal, to 1st shipper/leg/receiver is empty mile.
      const toLegEmptyStopList = [];
      const toLegLoadedStopList = [];
      const fromLegLoadedStopList = [];
      // last shipper/leg/receiver to last stop, if terminal, is empty mile.
      const fromLegEmptyStopList = [];

      const toLegFirstLoadedStopIndex = Math.max(
        0,
        this.shipperReceiverLegList.findIndex(this.isShipperReceiverLeg)
      );
      const legIndex = this.shipperReceiverLegList.findIndex(
        (e) => e.renderAddressType == 'leg'
      );
      const fromLegLastLoadedStopIndexHelper =
        this.shipperReceiverLegList.findLastIndex(this.isShipperReceiverLeg);
      const fromLegLastLoadedStopIndex =
        fromLegLastLoadedStopIndexHelper > -1
          ? fromLegLastLoadedStopIndexHelper
          : this.shipperReceiverLegList.length - 1;

      for (let i = 0; i <= toLegFirstLoadedStopIndex; ++i) {
        toLegEmptyStopList.push(this.shipperReceiverLegListIndexToCacheStop(i));
      }

      for (let i = toLegFirstLoadedStopIndex; i <= legIndex; ++i) {
        toLegLoadedStopList.push(
          this.shipperReceiverLegListIndexToCacheStop(i)
        );
      }

      for (let i = legIndex; i <= fromLegLastLoadedStopIndex; ++i) {
        fromLegLoadedStopList.push(
          this.shipperReceiverLegListIndexToCacheStop(i)
        );
      }

      for (
        let i = fromLegLastLoadedStopIndex;
        i < this.shipperReceiverLegList.length;
        ++i
      ) {
        fromLegEmptyStopList.push(
          this.shipperReceiverLegListIndexToCacheStop(i)
        );
      }

      return {
        toLegEmptyStopList,
        toLegLoadedStopList,
        fromLegLoadedStopList,
        fromLegEmptyStopList,
      };
    },

    shipperReceiverLegListIndexToCacheStop(i) {
      return {
        lat: Number(this.shipperReceiverLegList[i].latitude),
        lng: Number(this.shipperReceiverLegList[i].longitude),
      };
    },

    async recalculateDistanceIfNeeded(
      cacheObj,
      distanceProp,
      distanceCacheProp,
      distanceCalculatedByProp,
      latestStopList,
      mileEngine,
      logName
    ) {
      if (
        !this.areSameCacheStopLists(
          cacheObj[distanceCacheProp],
          latestStopList
        ) ||
        cacheObj[distanceCalculatedByProp] != mileEngine
      ) {
        cacheObj[distanceProp] = await this.calculateStopDistance(
          latestStopList,
          mileEngine
        );
        console.log(logName + ': ' + cacheObj[distanceProp]);
        cacheObj[distanceCacheProp] = latestStopList;
        cacheObj[distanceCalculatedByProp] = mileEngine;
      }
    },

    areSameCacheStopLists(a, b) {
      if (a.length != b.length) {
        return false;
      }
      for (let i = 0; i < a.length; ++i) {
        if (Number(a[i].lat).toFixed(6) != Number(b[i].lat).toFixed(6)) {
          return false;
        }
        if (Number(a[i].lng).toFixed(6) != Number(b[i].lng).toFixed(6)) {
          return false;
        }
      }
      return true;
    },

    resetLoadDistanceCache() {
      this.loadDistanceCache.loadDistanceCalculatedBy = null;
      this.loadDistanceCache.loadDistanceCache = [];
    },

    resetNoLegCache(resetEmptyOnly = false) {
      if (!resetEmptyOnly) {
        this.resetNoLegCacheLoadedDistance();
      }
      this.noLegCache.emptyDistance = 0;
      this.resetNoLegCacheStartEmptyDistance();
      this.resetNoLegCacheEndEmptyDistance();
    },

    resetNoLegCacheLoadedDistance() {
      this.noLegCache.loadedDistanceCalculatedBy = null;
      this.noLegCache.loadedDistanceCache = [];
      this.noLegCache.loadedDistance = 0;
    },

    resetNoLegCacheStartEmptyDistance() {
      this.noLegCache.startEmptyDistanceCalculatedBy = null;
      this.noLegCache.startEmptyDistanceCache = [];
      this.noLegCache.startEmptyDistance = 0;
    },

    resetNoLegCacheEndEmptyDistance() {
      this.noLegCache.endEmptyDistanceCalculatedBy = null;
      this.noLegCache.endEmptyDistanceCache = [];
      this.noLegCache.endEmptyDistance = 0;
    },

    resetToLegCache() {
      this.resetToLegCacheLoadedDistance();
      this.resetToLegCacheEmptyDistance();
    },

    resetToLegCacheLoadedDistance() {
      this.toLegCache.loadedDistanceCalculatedBy = null;
      this.toLegCache.loadedDistanceCache = [];
      this.toLegCache.loadedDistance = 0;
    },

    resetToLegCacheEmptyDistance() {
      this.toLegCache.emptyDistanceCalculatedBy = null;
      this.toLegCache.emptyDistanceCache = [];
      this.toLegCache.emptyDistance = 0;
    },

    resetFromLegCache() {
      this.resetFromLegCacheLoadedDistance();
      this.resetFromLegCacheEmptyDistance();
    },

    resetFromLegCacheLoadedDistance() {
      this.fromLegCache.loadedDistanceCalculatedBy = null;
      this.fromLegCache.loadedDistanceCache = [];
      this.fromLegCache.loadedDistance = 0;
    },

    resetFromLegCacheEmptyDistance() {
      this.fromLegCache.emptyDistanceCalculatedBy = null;
      this.fromLegCache.emptyDistanceCache = [];
      this.fromLegCache.emptyDistance = 0;
    },

    calculateLoadDistanceListHelper() {
      return this.shipperReceiverLegList
        .filter(
          (stop) =>
            stop.renderAddressType !== 'leg' &&
            stop.renderAddressType !== 'terminal'
        )
        .filter((stop) => stop.latitude && stop.longitude)
        .map((stop) => {
          return {
            lat: Number(stop.latitude),
            lng: Number(stop.longitude),
          };
        });
    },

    async calculateStopDistance(latLngList, mileEngine) {
      let ret = 0;
      if (latLngList.length < 2) {
        return ret;
      }
      if (mileEngine == 'google_maps') {
        ret = await this.calculateStopDistanceByGoogle(latLngList);
        console.log(
          '!!!--->Google Maps of ',
          latLngList.length,
          ' stops: ',
          ret
        );
      } else if (mileEngine == 'p') {
        ret = await this.calculateStopDistanceByPcMiler(latLngList);
        console.log('!!!--->PC Miler of ', latLngList.length, ' stops: ', ret);
      }
      if (this.shallRoundMilesToInteger) {
        return Math.round(ret);
      }
      return ret;
    },

    async calculateStopDistanceByGoogle(latLngList) {
      try {
        const routes = latLngList
          .map((item, index, source) => {
            if (!source[index - 1]) return null;
            return { origin: source[index - 1], destination: item };
          })
          .filter((item) => item);

        const cacheKey = 'g-' + JSON.stringify(routes);
        const cacheDistance = this.getLoadDistanceCacheFromStore(cacheKey);
        if (isValidInputValue(cacheDistance)) {
          return cacheDistance;
        }

        const totalDistanceInMeter =
          await this.getGoogleDistanceBetweenMultipleRoutes(routes);
        // convert: meter to miles
        const distance = (totalDistanceInMeter / 1609.344).toFixed(2);
        // set the store with cache and timestamp
        this.$store.dispatch('load/setLoadDistanceCacheToStore', {
          key: cacheKey,
          value: { distance, timestamp: this.$dayjs() },
        });
        return distance;
      } catch (error) {
        console.log(error);
        /*
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: "Something went wrong while calculating miles by google.",
        });
        */
      }
    },

    async calculateStopDistanceByPcMiler(latLngList) {
      if (!this.pcmiler.apiKey) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Missing PC Miler API key.',
        });
        return;
      }

      let pcMilerLatLogString = '';
      latLngList.forEach((stop) => {
        pcMilerLatLogString += stop.lng + ',' + stop.lat + ';';
      });

      const payload = {
        stops: pcMilerLatLogString.slice(0, -1),
        apiKey: this.pcmiler.apiKey,
        dataVersion: this.pcmiler.dataVersion,
      };

      const cacheKey = 'p-' + JSON.stringify(payload.stops);
      const cacheDistance = this.getLoadDistanceCacheFromStore(cacheKey);
      if (isValidInputValue(cacheDistance)) {
        return cacheDistance;
      }

      return await this.$store
        .dispatch('pcmiler/getPcmilerTMile', payload)
        .then((data) => {
          const distance = data[0].TMiles;
          // set the store with cache and time stamp
          this.$store.dispatch('load/setLoadDistanceCacheToStore', {
            key: cacheKey,
            value: { distance, timestamp: this.$dayjs() },
          });

          return distance;
        })
        .catch((e) => {
          console.log(e);
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Something went wrong while calculating miles by PC MILER. Is the API key correct? ',
          });
        });
    },

    /**
     * get the load distance cache from store and check if it is 24 hours old or not
     * @param {*} cacheKey
     * @returns
     */
    getLoadDistanceCacheFromStore(cacheKey) {
      const oneDayAgo = this.$dayjs().subtract(1, 'day');
      if (this.loadDistancesCacheMap.has(cacheKey)) {
        const value = this.loadDistancesCacheMap.get(cacheKey);
        // if the cache is not older than one day then return distance from store
        if (!value.timestamp.isBefore(oneDayAgo)) {
          return this.loadDistancesCacheMap.get(cacheKey).distance;
        }
      }
      // return null if cache is older than 24 hours
      return null;
    },

    activePromptFunc(val) {
      this.activePrompt = val;
    },

    handleIsMaintenanceFunc(data) {
      this.handleIsMaintenance = data;
    },

    getAllDriversTrucksTrailers() {
      const {
        drivers = [],
        trailers = [],
        trucks = [],
      } = this.allDriverTruckTrailerForLoadDriver;

      this.driver_options = drivers.map(({ name, id, ...driver }) => ({
        full_name: name,
        driver_id: id,
        ...driver,
      }));

      this.truck_options = trucks.map(({ id, number, ...truck }) => ({
        truck_id: id,
        truck_number: number,
        ...truck,
      }));

      this.trailer_options = trailers.map(({ id, number, ...trailer }) => ({
        trailer_id: id,
        trailer_number: number,
        ...trailer,
      }));
    },

    addRoundTripStops() {
      const currentList = cloneDeep(this.shipperReceiverLegList);
      // Clone new Stops
      const list = currentList
        .filter((stop) => stop.renderAddressType != 'leg')
        .filter((stop) => stop.renderAddressType != 'terminal')
        .map((item) => {
          const clone = cloneDeep(item);
          clone.id = null;
          clone.order = null;
          if (item.renderAddressType === 'receiver') {
            clone.key = 'shipper_' + uuidv4();
            clone.shipper_name = item.receiver_name;
            clone.shipping_date = '';
            clone.shipping_time = '';
            clone.shipping_end_date = '';
            clone.shipping_end_time = '';
            // contact_person and contact_number are same
            clone.shipper_reference = '';
            clone.container = '';
            clone.temperature = '';
            clone.shipper_note = '';
            clone.freight_description = '';
            clone.freight_weight = '';
            clone.weight_unit = '';
            clone.freight_qty = '';
            clone.qtyRate = null;
            clone.qty_unit = '';
            clone.freight_length = '';
            clone.freight_width = '';
            clone.freight_height = '';
            clone.freightEquipmentType = '';
            // Question: should we use "" or [] or null?
            clone.additionalFreightDetails = '';
            clone.renderAddressType = 'shipper';
            clone.containerHere = null;

            delete clone.receiver_name;
            delete clone.delivery_date;
            delete clone.delivery_time;
            delete clone.delivery_end_date;
            delete clone.delivery_end_time;
            delete clone.receiver_reference;
            delete clone.receiver_note;
            delete clone.unloadedLocalDatetime;
            delete clone.arrivedLocalDatetime;
            return clone;
          } else if (item.renderAddressType === 'shipper') {
            clone.key = 'receiver_' + uuidv4();
            clone.receiver_name = item.shipper_name;
            clone.delivery_date = '';
            clone.delivery_time = '';
            clone.delivery_end_date = '';
            clone.delivery_end_time = '';
            clone.receiver_reference = '';
            clone.receiver_note = '';
            clone.renderAddressType = 'receiver';
            clone.containerHere = null;

            delete clone.shipper_name;
            delete clone.shipping_date;
            delete clone.shipping_time;
            delete clone.shipping_end_date;
            delete clone.shipping_end_time;
            delete clone.shipper_reference;
            delete clone.container;
            delete clone.temperature;
            delete clone.shipper_note;
            delete clone.freight_description;
            delete clone.freight_weight;
            delete clone.weight_unit;
            delete clone.freight_qty;
            delete clone.qtyRate;
            delete clone.qty_unit;
            delete clone.freight_length;
            delete clone.freight_width;
            delete clone.freight_height;
            delete clone.freightEquipmentType;
            delete clone.additionalFreightDetails;
            delete clone.loadedLocalDatetime;
            delete clone.arrivedLocalDatetime;
            return clone;
          }
        });

      //  Add new shipper and receiver to start of the list
      this.shipperReceiverLegList = [...list.reverse(), ...currentList];
    },

    addToSavedAddressConfirm(source, index) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: `Confirm`,
        text: 'Are you sure you want to save this address?',
        accept: () => this.addToSavedAddress(source, index),
      });
    },

    addToSavedAddress(source, index) {
      const data = this.shipperReceiverLegList[index];
      let addressName;

      switch (source) {
        case 'shipper':
          addressName = data.shipper_name;
          break;
        case 'receiver':
          addressName = data.receiver_name;
          break;
        case 'leg':
          addressName = data.location_name;
          break;
        case 'terminal':
          addressName = data.name;
          break;
        default:
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Something went wrong',
          });
          return;
      }
      if (
        !addressName ||
        !data.address ||
        !data.state ||
        (!data.zip_code && !data.zipCode) ||
        !data.latitude ||
        !data.longitude
      ) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Cannot save an empty address.',
        });
        return;
      }
      const payload = {
        name: addressName,
        address: data.address,
        state: data.state,
        city: data.city,
        zip_code: source === 'terminal' ? data.zipCode : data.zip_code,
        latitude: data.latitude,
        longitude: data.longitude,
        contact:
          source === 'terminal' ? data.contactPerson : data.contact_person,
        phone: source === 'terminal' ? data.contactNumber : data.contact_number,
      };

      this.$vs.loading();
      this.$store
        .dispatch('saved-addresses/createAddress', payload)
        .then(() => {
          this.$vs.notify({
            color: 'primary',
            title: 'Address Saved',
            text: 'Address saved successfully',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => this.$vs.loading.close());
    },

    async getAllCustomers() {
      const { payload } = await this.$store.dispatch(
        'customer/getAllCustomers'
      );

      this.customersList = payload.data || [];
      this.companyOptions = [];

      payload.data
        .filter((customer) => customer.type !== 'carrier')
        .forEach((item) => {
          const selectedCompanyObj = {
            billing_email: item.billing_email,
            billing_address: item.billing_address,
            billing_city: item.billing_city,
            billing_state: item.billing_state,
            billing_zip_code: item.billing_zip_code,
            customer_id: item.customer_id,
          };
          if (item.billToCodes.length) {
            item.billToCodes.forEach((code) => {
              let selectedCompany = {};
              selectedCompany.company_name = item.company_name + ' - ' + code;
              selectedCompany.bill_to_code = code;
              this.companyOptions.push({
                ...selectedCompanyObj,
                ...selectedCompany,
              });
            });
          } else {
            let selectedCompany = {};
            selectedCompany.company_name = item.company_name;
            selectedCompany.bill_to_code = null;
            this.companyOptions.push({
              ...selectedCompanyObj,
              ...selectedCompany,
            });
          }
        });
    },

    async getTags() {
      const { payload } = await this.$store.dispatch('tag/getAllTags');
      this.tagOptions = payload.data;
    },

    async getAllDispatchers() {
      const { payload } = await this.$store.dispatch(
        'company-user/getAllDispatchers'
      );

      this.dispatcher_options = payload.data.map((dispatcher) => ({
        ...dispatcher,
        full_name: `${dispatcher.user_details.first_name} ${dispatcher.user_details.last_name}`,
      }));
    },

    async getAllAccessorialFees() {
      const {
        data: { payload },
      } = await this.$store.dispatch('accounting/getAllAccessorialFees');

      this.accessorial_fee_options = payload;

      // Create New Accessorial Fee (POPUP)
      this.accessorial_fee_options.unshift({
        id: 'add-new',
        name: 'Add New',
        description: null,
        commissionable: false,
      });
    },

    async getAllAccessorialDeductionFees() {
      const {
        data: { payload },
      } = await this.$store.dispatch('accounting/getAllAccessorialDeductions');

      this.accessorial_deduction_options = payload;

      // Create New Accessorial Fee (POPUP)
      this.accessorial_deduction_options.unshift({
        id: 'add-new',
        name: 'Add New',
      });
    },

    async getTaskAutomationDetails() {
      if (this.userRole != 'admin') {
        return;
      }

      this.$store
        .dispatch('task-automation/getTaskAutomation')
        .then((result) => {
          this.taskAutomation.show_dispatcher_fee_on_invoice =
            result.data.payload.show_dispatcher_fee_on_invoice;
          this.taskAutomation.show_factoring_fee_on_invoice =
            result.data.payload.show_factoring_fee_on_invoice;
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
    },

    validateLoadCharges() {
      this.validation.fuelSurchargeHasError = false;
      let isValid = true;
      if (this.fuel_surcharge_rate && !this.selected_fuel_surcharge) {
        this.validation.fuelSurchargeHasError = true;
        isValid = false;
      }
      this.accessorial_fees.forEach((fee) => {
        if (fee.amount && !fee.selected_accessorial_fee) {
          fee.hasError = true;
          isValid = false;
        } else {
          fee.hasError = false;
        }
      });
      this.accessorial_deduction_fees.forEach((fee) => {
        if (fee.amount && !fee.selected_accessorial_deduction) {
          fee.hasError = true;
          isValid = false;
        } else {
          fee.hasError = false;
        }
      });
      if (this.thirdPartyCarrier) {
        this.thirdPartyCarrier = {
          ...this.thirdPartyCarrier,
          charges: {
            ...this.thirdPartyCarrier.charges,
            accessorialDeductionFee:
              this.thirdPartyCarrier.charges.accessorial_deduction.forEach(
                (fee) => {
                  if (fee.rate && !fee.id) {
                    fee.hasError = true;
                    isValid = false;
                  } else {
                    fee.hasError = false;
                  }
                }
              ),
            accessorialFee:
              this.thirdPartyCarrier.charges.accessorial_fee.forEach((fee) => {
                if (fee.rate && !fee.id) {
                  fee.hasError = true;
                  isValid = false;
                } else {
                  fee.hasError = false;
                }
              }),
          },
        };
      }
      return isValid;
    },
    validateHaulingFeeQuantityVariableRate() {
      const isValid = this.shipperQuantityVariableRates.some((shipper) => {
        const rate = shipper.rate;
        const qty = shipper.qty;
        let isInvalid = false;

        if (!isValidInputValue(rate) || !isValidInputValue(qty)) {
          this.$vs.notify({
            time: 4000,
            color: 'danger',
            text: 'Freight quantity and rate are required in this mode.',
          });
          isInvalid = true;
        } else {
          if (rate < 0 || rate > 99.999999) {
            this.$vs.notify({
              time: 4000,
              color: 'danger',
              text: 'Freight quantity rate must be between 0 and 99.999999',
            });
            isInvalid = true;
          }
        }
        return isInvalid;
      });
      return !isValid;
    },
    toggleMap(index, selectedAddress = null, isMapClickable = true) {
      let markers = [];

      if (!selectedAddress) {
        const {
          latitude,
          longitude,
          shipper_name,
          receiver_name,
          location_name,
          name,
        } = this.shipperReceiverLegList[index];

        if (latitude && longitude) {
          markers.push({
            id: 1,
            label: shipper_name || receiver_name || location_name || name || '',
            position: {
              lat: Number(latitude),
              lng: Number(longitude),
            },
          });
        }
      } else {
        const { lat, lng, label } = selectedAddress;

        if (lat && lng) {
          markers.push({
            id: 1,
            label,
            position: {
              lat: Number(lat),
              lng: Number(lng),
            },
          });
        }
      }

      this.mapDialog = {
        isActive: true,
        itemIndex: index,
        isMapClickable,
        markers,
      };
    },

    closeMap() {
      this.mapDialog = {
        isActive: false,
        itemIndex: null,
        isMapClickable: true,
        markers: [],
      };
    },

    async updateAddress({ placeId, lat, lng, map }) {
      if (!this.mapDialog.isMapClickable) return;

      const response = placeId
        ? await this.getPlaceDetails(placeId, map)
        : await this.getGeocoderLatLng({
            location: { lat, lng },
          });

      const geocoderResult = placeId ? response : response.results[0];
      const { address, city, state, zip_code } = extractAddress(geocoderResult);
      const curr = { ...this.shipperReceiverLegList[this.mapDialog.itemIndex] };

      if (curr) {
        const nameKeys = {
          shipper: 'shipper_name',
          receiver: 'receiver_name',
          leg: 'location_name',
          terminal: 'name',
        };
        const zipCodeKey =
          curr.renderAddressType === 'terminal' ? 'zipCode' : 'zip_code';
        const name =
          geocoderResult.name && curr
            ? {
                [nameKeys[curr.renderAddressType]]: geocoderResult.name || '',
              }
            : {};

        this.shipperReceiverLegList[this.mapDialog.itemIndex] = {
          ...curr,
          address,
          city,
          state,
          [zipCodeKey]: zip_code,
          latitude: lat,
          longitude: lng,
          ...name,
        };

        this.$forceUpdate();
        this.closeMap();
      }
    },

    async getDefaultMapCenter() {
      try {
        const {
          admin_company_details: { city, state },
        } = this.user;

        if (city && state) {
          const res = await this.getCoordinatesFromAddress(`${city}, ${state}`);
          this.$store.commit('auth/setUserLatLang', res || null);
        }
      } catch (error) {
        console.log(error);
      }
    },

    clearShipperTime(time) {
      time.shipping_time = '';
    },

    clearShipperEndTime(time) {
      time.shipping_end_time = '';
    },

    clearReceiverTime(time) {
      time.delivery_time = '';
    },

    clearReceiverEndTime(time) {
      time.delivery_end_time = '';
    },

    clearLegTime(time) {
      time.time = '';
    },

    clearLegEndTime(time) {
      time.end_time = '';
    },

    // Close Sidebar
    closeSidebar(refreshList = false) {
      this.$emit('closeSidebar', refreshList);
    },

    handleMultipleLeg(selectedDrivers, index, key) {
      if (selectedDrivers.length <= 2) {
        // assigned driver
        this.paramLegs[key][index].selected_drivers = selectedDrivers;
      } else {
        // get first 2 drivers and assigned to selected driver
        this.paramLegs[key][index].selected_drivers = this.paramLegs[key][
          index
        ].selected_drivers.slice(0, 2);
      }
    },

    handleMultipleDriver(selectedDrivers, index) {
      if (selectedDrivers && selectedDrivers.length > 0) {
        const selectedDriver = selectedDrivers[0];

        let vehicle = this.driver_options.find(
          (item) =>
            item.driver_id === selectedDriver.id ||
            item.driver_id === selectedDriver.driver_id
        );
        if (!this.assign_driver_and_equipments[index].selected_truck) {
          this.assign_driver_and_equipments[index].selected_truck =
            this.truck_options.find(
              (item) => item.truck_id === vehicle.truckId
            );
        }

        if (!this.assign_driver_and_equipments[index].selected_trailer) {
          this.assign_driver_and_equipments[index].selected_trailer =
            this.trailer_options.find(
              (item) => item.trailer_id === vehicle.trailerId
            );
        }
      }
      this.assign_driver_and_equipments[index].selected_drivers =
        selectedDrivers.length <= 2
          ? selectedDrivers
          : selectedDrivers.slice(0, 2);
    },

    addNewAccessorialFee() {
      this.accessorial_fees.push({
        uuid: uuidv4(),
        selected_accessorial_fee: '',
        amount: '',
        hasError: false,
      });
    },

    removeAccessorialFee(index) {
      this.accessorial_fees.splice(index, 1);
    },

    // accessorial deduction
    addNewAccessorialdeductionFee() {
      this.accessorial_deduction_fees.push({
        uuid: uuidv4(),
        selected_accessorial_deduction: '',
        amount: '',
        hasError: false,
      });
    },

    removeAccessorialdeductionFee(index) {
      this.accessorial_deduction_fees.splice(index, 1);
    },

    toggleExternalTrailerNumber(driver) {
      driver.showExternalTrailerNumber = !driver.showExternalTrailerNumber;
      if (driver.showExternalTrailerNumber) {
        driver.selected_trailer = null;
      } else {
        driver.externalTrailerNumber = null;
      }
    },

    addNewAssignDriverAndEquipment(fields = {}) {
      this.assign_driver_and_equipments.push({
        // id: uuidv4(),
        selected_drivers: [],
        selected_truck: null,
        selected_trailer: null,
        is_drop_trailer: false,
        externalTrailerNumber: null,
        showExternalTrailerNumber: false,
        is_final_mile: false,
        chassis: null,
        notes: '',
        ...fields,
      });
    },

    // assign driver and equipment
    addNewAssignDriverAndEquipmentLeg(key) {
      this.paramLegs[key].push({
        selected_drivers: [],
        selected_truck: null,
        selected_trailer: null,
        is_drop_trailer: false,
        is_final_mile: false,
        notes: '',
        chassis: null,
        externalTrailerNumber: null,
        showExternalTrailerNumber: false,
      });
    },

    removeAssignDriverAndEquipment(index) {
      this.assign_driver_and_equipments.splice(index, 1);
    },

    removeAssignDriverAndEquipmentLeg(index, key) {
      this.paramLegs[key].splice(index, 1);
    },

    addNewTerminal(index = null) {
      const terminalPayload = {
        key: 'terminal_' + uuidv4(),
        renderAddressType: 'terminal',
        name: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        latitude: '',
        longitude: '',
        date: '',
        time: '',
        endDate: '',
        endTime: '',
        contactPerson: '',
        contactNumber: '',
        notes: '',
        dropTrailerId: '',
        hookTrailerId: '',
        dropTrailerType: '',
        hookTrailerType: '',
        containerHere: null,
      };

      if (index === null) {
        this.shipperReceiverLegList.push(terminalPayload);
      } else {
        this.shipperReceiverLegList.splice(index, 0, terminalPayload);
      }
    },

    removeTerminal(index) {
      this.shipperReceiverLegList.splice(index, 1);
    },

    addNewLeg(index = null) {
      //TODO ：Only one leg can be added at most
      if (this.isLegAdded) {
        return;
      }

      const driverAndEquipmentPayload = {
        /// id: uuidv4(),
        selected_drivers: [],
        selected_truck: null,
        selected_trailer: null,
        is_drop_trailer: false,
        is_final_mile: false,
        // is_notified: false,
        notes: '',
        externalTrailerNumber: null,
        showExternalTrailerNumber: false,
      };
      const legPayload = {
        key: 'leg_' + uuidv4(),
        renderAddressType: 'leg',
        location_name: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        latitude: '',
        longitude: '',
        date: '',
        time: '',
        end_date: '',
        end_time: '',
        contact_person: '',
        contact_number: '',
        note: '',
        dropTrailerId: '',
        hookTrailerId: '',
        dropTrailerType: '',
        hookTrailerType: '',
        containerHere: null,
      };
      const paramLegPayload = {
        selected_drivers: [],
        selected_truck: null,
        selected_trailer: null,
        is_drop_trailer: false,
        is_final_mile: false,
        notes: '',
        externalTrailerNumber: null,
        showExternalTrailerNumber: false,
      };
      // Currently, we only support add one leg. So if we add this leg, we
      // clear the previously added driver/truck/trailer.
      // Need to consider if we need this.
      this.assign_driver_and_equipments = [driverAndEquipmentPayload];

      if (index === null) {
        this.shipperReceiverLegList.push(legPayload);
      } else {
        this.shipperReceiverLegList.splice(index, 0, legPayload);
      }
      // this.paramLegs=[]
      this.paramLegs.push([paramLegPayload]);
    },

    removeLeg(index) {
      this.assign_driver_and_equipments = [
        {
          selected_drivers: [],
          selected_truck: null,
          selected_trailer: null,
          is_drop_trailer: false,
          is_final_mile: false,
          // is_notified: false,
          notes: '',
          externalTrailerNumber: null,
          showExternalTrailerNumber: false,
        },
      ];
      this.shipperReceiverLegList.splice(index, 1);
      this.paramLegs = [];
    },

    // receiver
    addNewReceiver(index = null) {
      const receiverPayload = {
        key: 'receiver_' + uuidv4(),
        renderAddressType: 'receiver',
        receiver_name: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        latitude: '',
        longitude: '',
        delivery_date: '',
        delivery_time: '',
        delivery_end_date: '',
        delivery_end_time: '',
        contact_person: '',
        contact_number: '',
        receiver_reference: '',
        receiver_note: '',
        dropTrailerId: '',
        hookTrailerId: '',
        dropTrailerType: '',
        hookTrailerType: '',
        containerHere: null,
      };

      if (index === null) {
        this.shipperReceiverLegList.push(receiverPayload);
      } else {
        this.shipperReceiverLegList.splice(index, 0, receiverPayload);
      }
    },
    removeReceiver(index) {
      this.shipperReceiverLegList.splice(index, 1);
    },

    // TODO: we shall refactor code such all all create/edit load UI's add a new
    // stop will call the same function. For example, devs ALWAYS forget that
    // pdf parsing code also creates new shippers and receivers.
    addNewShipperAndFreightDetail(index = null) {
      const shipperPayload = {
        key: 'shipper_' + uuidv4(),
        renderAddressType: 'shipper',
        shipper_name: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        latitude: '',
        longitude: '',
        shipper_reference: '',
        shipper_note: '',
        shipping_date: '',
        shipping_end_date: '',
        // date: '',
        shipping_time: '',
        shipping_end_time: '',
        // time: '',
        contact_person: '',
        contact_number: '',
        // phone_number: '',
        freight_description: '',
        freight_weight: '',
        freight_qty: '',
        qtyRate: null,
        weight_unit: '',
        qty_unit: '',
        freight_length: '',
        freight_width: '',
        freight_height: '',
        container: '',
        temperature: '',
        dropTrailerId: '',
        hookTrailerId: '',
        dropTrailerType: '',
        hookTrailerType: '',
        // freight_pickup_number: ''
        freightEquipmentType: '',
        // Question: should we use "" or [] or null?
        additionalFreightDetails: '',
        containerHere: null,
      };

      if (index === null) {
        this.shipperReceiverLegList.push(shipperPayload);
      } else {
        this.shipperReceiverLegList.splice(index, 0, shipperPayload);
      }
    },

    removeShipperAndFreightDetail(index) {
      this.shipperReceiverLegList.splice(index, 1);
    },

    async getT3Statuses() {
      try {
        const { data } = await this.$store.dispatch('t3/fetchT3Statuses', {
          assetTypeId: 1,
        });
        this.t3Statuses = data.payload;
      } catch (error) {
        console.log(error);
      }
    },
    useFreightAddress(index, payload) {
      if ((index, payload)) {
        const { address, city, state, zipCode, lat, lng, name } = payload;
        const curr = { ...this.shipperReceiverLegList[index] };

        if (curr) {
          this.shipperReceiverLegList[index] = {
            ...curr,
            address,
            city,
            state,
            zip_code: zipCode,
            latitude: lat,
            longitude: lng,
            shipper_name: name ? name : curr.shipper_name,
          };
        }
      }
      this.$forceUpdate();
    },
    onSubmitContainerLocation() {
      this.shipperReceiverLegList.forEach((item) => {
        if (
          this.containerLocationStopKey &&
          item.key == this.containerLocationStopKey
        ) {
          item.containerHere = true;
        } else {
          item.containerHere = null;
        }
      });
    },
    toggleAddNewCustomerDialog(val = null) {
      this.$emit('toggleAddNewCustomerDialog', val);
    },
    updateAddressForCustomerLanes(index, payload) {
      if ((index, payload)) {
        const {
          streetAddress,
          city,
          state,
          longitude,
          latitude,
          name,
          postalCode,
        } = payload;

        const curr = this.shipperReceiverLegList[index];
        if (curr) {
          curr.address = streetAddress;
          curr.city = city;
          curr.state = state;
          curr.zip_code = postalCode;
          curr.latitude = latitude;
          curr.longitude = longitude;
          if (curr.renderAddressType === 'shipper') {
            curr.shipper_name = name ? name : curr.shipper_name;
          } else if (curr.renderAddressType === 'receiver') {
            curr.receiver_name = name ? name : curr.receiver_name;
          }
        }
      }
      this.$forceUpdate();
    },

    debounce(func, delay) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(func, delay);
    },

    async getPredictedRates(payloadCache) {
      const fields = payloadCache.split('+');
      if (fields.length < 4) {
        this.hideRatePrediction();
        return;
      }

      const request = {
        transportType: fields[0],
        pickupDate: fields[1],
        stops: fields.slice(2).map((s) => {
          const stopData = s.split(';');
          return {
            city: stopData[0],
            state: stopData[1],
            postalCode: stopData[2],
          };
        }),
      };

      try {
        const data = await this.$store.dispatch(
          'greenScreens/getRatePredictions',
          { requests: [request] }
        );
        this.ratePredictions = data.payload.responses[0];
        this.showRatePrediction = true;
      } catch (error) {
        this.hideRatePrediction();
      }
    },

    hideRatePrediction() {
      this.ratePredictions = {};
      this.showRatePrediction = false;
    },
    onTotalMileChange(loadMiles) {
      if (!this.calculateByMileBasedHaulingFee) {
        return;
      }
      if (
        this.selected_hauling_fee != 'per_mile' &&
        this.selected_hauling_fee != 'flat_fee'
      ) {
        return;
      }

      const newCalculatedLoadMiles = Number(loadMiles);

      if (
        Number.isNaN(newCalculatedLoadMiles) ||
        newCalculatedLoadMiles === null
      ) {
        return;
      }

      const mileBasedHaulingFeeCalc =
        config.mileBasedHaulingFeeCalculationDict.calculationRefs.find(
          (calculationRef) => {
            return Math.round(newCalculatedLoadMiles) < calculationRef.lessThan;
          }
        );

      if (mileBasedHaulingFeeCalc) {
        if (mileBasedHaulingFeeCalc.flatFee === -1) {
          this.selected_hauling_fee = 'per_mile';
          this.hauling_fee_rate = 5;
        } else {
          this.selected_hauling_fee = 'flat_fee';
          this.hauling_fee_rate = mileBasedHaulingFeeCalc.flatFee;
        }
      }
    },

    // Start Toggle Accessorial Fees and Deductions Prompt
    toggleAccessorialDeductionPrompt(option = null, data = null) {
      if (option === 'add-new' || (data && Object.keys(data).length)) {
        this.accessorialDeductionPrompt.isActive =
          !this.accessorialDeductionPrompt.isActive;
        this.accessorialDeductionPrompt.data = option === 'add-new' ? {} : data;
      } else {
        this.accessorialDeductionPrompt.isActive = false;
        this.accessorialDeductionPrompt.data = {};
      }
    },
    toggleAccessorialFeePrompt(option = null, data = null) {
      if (option === 'add-new' || (data && Object.keys(data).length)) {
        this.accessorialFeePrompt.isActive =
          !this.accessorialFeePrompt.isActive;
        this.accessorialFeePrompt.data = option === 'add-new' ? {} : data;
      } else {
        this.accessorialFeePrompt.isActive = false;
        this.accessorialFeePrompt.data = {};
      }
    },
    // End Toggle Accessorial Fees and Deductions Prompt

    // Start added New Accessorial Fees and Deductions Functions
    addedNewAccessorialFee(value) {
      if (value) {
        // Setting the new fee as the first option after Add New.
        this.accessorial_fee_options.splice(1, 0, value);
      }

      const thirdPartyCarrierIndex =
        this.thirdPartyCarrier.charges.accessorial_fee.findIndex(
          (item) => item.id == 'add-new'
        );
      const index = this.accessorial_fees.findIndex(
        (item) => item.selected_accessorial_fee == 'add-new'
      );

      if (thirdPartyCarrierIndex !== -1) {
        this.thirdPartyCarrier.charges.accessorial_fee[
          thirdPartyCarrierIndex
        ].id = value && value.id;
      }
      if (index !== -1) {
        this.accessorial_fees[index].selected_accessorial_fee =
          value && value.id;
      }
    },
    updatedAccessorialFee({ id, ...rest }) {
      if (id) {
        this.accessorial_fee_options = this.accessorial_fee_options.map(
          (item) => {
            if (item.id === id) {
              return {
                ...item,
                ...rest,
              };
            }
            return item;
          }
        );
      }
    },
    addedNewAccessorialDeduction(value) {
      if (value) {
        // Setting the new fee as the first option after Add New.
        this.accessorial_deduction_options.splice(1, 0, value);
      }

      const thirdPartyCarrierIndex =
        this.thirdPartyCarrier.charges.accessorial_deduction.findIndex(
          (item) => item.id == 'add-new'
        );
      const index = this.accessorial_deduction_fees.findIndex(
        (item) => item.selected_accessorial_deduction == 'add-new'
      );

      if (thirdPartyCarrierIndex !== -1) {
        this.thirdPartyCarrier.charges.accessorial_deduction[
          thirdPartyCarrierIndex
        ].id = value && value.id;
      }
      if (index !== -1) {
        this.accessorial_deduction_fees[index].selected_accessorial_deduction =
          value && value.id;
      }
    },
    updateAccessorialDeduction({ id, ...rest }) {
      if (id) {
        this.accessorial_deduction_options =
          this.accessorial_deduction_options.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                ...rest,
              };
            }
            return item;
          });
      }
    },
    // End added New Accessorial Fees and Deductions Functions
  },

  created() {
    EventBus.$on('refreshCustomerList', this.getAllCustomers);
  },

  beforeDestroy() {
    EventBus.$off('refreshCustomerList', this.getAllCustomers);
  },
};

export default loadHelperMixin;
