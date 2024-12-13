<template>
  <div>
    <vx-card>
      <!-- Tabs -->
      <div>
        <div class="tab-container">
          <span
            v-for="tab in tabList"
            :key="tab.id"
            :class="['tab', { active: tab.value === activeComponent }]"
            @click.stop="changeActiveComponent(tab.value)"
          >
            {{ tab.label }}
          </span>
        </div>
      </div>
      <div class="rates-estimates-card" v-if="canAccessGreenscreens">
        <div class="rates-estimates-search">
          <span class="rates-card-title">Rates Estimates</span>
          <div class="rates-estimates-form">
            <v-select
              v-model="selectedEquipmentType"
              :options="equipmentTypeOptions"
              :reduce="(option) => option.value"
              :closeOnSelect="true"
              label="title"
              :clearable="true"
              class="equipment-type"
              placeholder="Equipment Type"
            />
            <gmap-autocomplete
              class="vs-inputx vs-input--input normal hasValue origin-location"
              :value="ratesOriginLocation"
              placeholder="Origin Location"
              @place_changed="getChangedPlace($event, 'origin')"
              @input="onAutocompleteInput($event, 'origin')"
              :options="googleMapAutoCompleteOptions"
              :select-first-on-enter="true"
            >
            </gmap-autocomplete>
            <gmap-autocomplete
              class="vs-inputx vs-input--input normal hasValue destination-location"
              :value="ratesDestinationLocation"
              placeholder="Destination Location"
              @place_changed="getChangedPlace($event, 'destination')"
              @input="onAutocompleteInput($event, 'destination')"
              :options="googleMapAutoCompleteOptions"
              :select-first-on-enter="true"
            >
            </gmap-autocomplete>
            <vs-button
              class="get-rates-btn"
              :disabled="isGetRateDisabled"
              @click="getRates"
            >
              Get Rate
            </vs-button>
          </div>
        </div>
        <RateEstimatesResult :ratePredictions="ratePredictions" />
      </div>
      <template v-if="!isUserBrokerOrShipper">
        <div class="flex items-center justify-between">
          <h3 v-text="'Overview'" />
          <div class="flex items-center gap-2">
            <flat-pickr
              :value="selectedDateRange"
              :config="flat_pikr_config"
              ref="flatPicker"
              class="w-full"
              style="min-width: 190px"
              @on-change="onDateChange"
            />
            <div class="filter-input">
              <multiselect
                v-model="selectedTag"
                :allow-empty="false"
                placeholder="Select tag"
                :preselect-first="true"
                :options="tagOptions"
                label="business_name"
                :searchable="false"
                :show-labels="false"
              />
            </div>
          </div>
        </div>
        <div
          :class="[
            'grid',
            'gap-8',
            'grid-cols-2',
            'md:grid-cols-3',
            'lg:grid-cols-4',
            activeComponent === 'DriverOverview'
              ? 'xl:grid-cols-6'
              : 'xl:grid-cols-5',
          ]"
        >
          <!-- <vx-card class="info-card" v-for="(item, i) in infoCard" :key="i">
          <p class="title">{{ item.title }}</p>
          <p class="dataset">{{ item.data }}</p>
        </vx-card> -->
          <vx-card
            class="info-card"
            v-for="(item, key) in infoCard"
            :key="key"
            :style="getColorStyle(key)"
          >
            <p class="title">{{ key | formatTotalValueLabels }}</p>
            <p
              class="dataset"
              v-if="
                key === 'revenue' ||
                key === 'expense' ||
                key === 'profit' ||
                key === 'expensePerMile' ||
                key === 'revenuePerMile' ||
                key === 'expensePerMile' ||
                key === 'profitPerMile' ||
                key === 'expensePerDriver' ||
                key === 'revenuePerDriver' ||
                key === 'profitPerDriver'
              "
              :style="getDataColorStyle(key)"
            >
              ${{ item | formatNumberWithCommas }}
            </p>
            <p class="dataset" :style="getDataColorStyle(key)" v-else>
              {{ item | formatNumberWithCommas }}
            </p>
          </vx-card>
        </div>
      </template>
    </vx-card>

    <component
      v-if="!isUserBrokerOrShipper"
      class="my-8"
      :is="activeComponent"
      :selectedDateRange="selectedDateRange"
      :selectedTag="selectedTag"
      :tagOptions="tagOptions"
      :defaultTags="tags"
      @update:totalValues="updateTotalValues"
    />
  </div>
</template>
<!-- eslint-disable implicit-arrow-linebreak multiline-ternary -->
<script>
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';

import config from '@/config/constants';
import { mapGetters } from 'vuex';
import { parseFloatWithTrim } from '../../../helpers/helper';

import TruckOverview from './components/TruckOverviewTab.vue';
import MarketOverview from './components/MarketOverviewTab.vue';
import CompanyOverview from './components/CompanyOverviewTab.vue';
import CustomerOverview from './components/CustomerOverviewTab.vue';
import DispatcherOverview from './components/DispatcherOverviewTab.vue';
// import DriverProfitAndLoss from "./components/DriverProfitAndLossTab.vue";
import DriverOverview from './components/DriverOverviewTab.vue';
// import FuelUtilizationByTruck from "./components/FuelUtilizationByTruckTab.vue";
import setPlaceMixin from '@/mixins/setPlaceMixin.js';
import LineChart from '@/components/charts/LineChart.vue';
import RateEstimatesResult from './components/RateEstimatesResult.vue';
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'HomeTab',
  mixins: [setPlaceMixin],
  components: {
    Multiselect,
    TruckOverview,
    MarketOverview,
    CompanyOverview,
    CustomerOverview,
    DispatcherOverview,
    // DriverProfitAndLoss,
    DriverOverview,
    // FuelUtilizationByTruck,
    RateEstimatesResult,
    LineChart,
  },
  computed: {
    ...mapGetters('auth', [
      'userRole',
      'user',
      'isUserBrokerOrShipper',
      'companyFeatureAccess',
    ]),

    canAccessGreenscreens() {
      if ([23, 36].includes(this.user.admin_company_detail_id)) {
        return true;
      }
      return (
        !this.isUserBrokerOrShipper &&
        !config.showBrokerModeForSpecificCompanyIds.includes(
          this.user.admin_company_detail_id
        ) &&
        !this.companyFeatureAccess.includes('brokerModeForCarrier')
      );
    },

    tabList() {
      if (this.isUserBrokerOrShipper) {
        return this.tabs.filter((tab) => tab.value === 'CompanyOverview');
      } else return this.tabs;
    },
    isGetRateDisabled() {
      return (
        !this.selectedEquipmentType ||
        !this.originAddress ||
        !this.destinationAddress
      );
    },
  },
  filters: {
    formatTotalValueLabels(value) {
      const labels = {
        revenue: 'Total Revenue',
        expense: 'Total Expenses',
        profit: 'Total Profit',
        numberOfLoads: 'Number Of Loads',
        milesPerTruck: 'Miles Per Truck',
        miles: 'Total Miles',
        ratePerMile: 'Rate Per Mile',
        expensePerMile: 'Expense Per Mile',
        profitPerMile: 'Profit Per Mile',
        revenuePerDriver: 'Revenue Per Driver',
        expensePerDriver: 'Expense Per Driver',
        profitPerDriver: 'Profit Per Driver',
      };

      if (!value) return value;
      return labels[value] || value;
    },
    formatNumberWithCommas(value) {
      if (!value) return value;
      const formattedValue = parseFloatWithTrim(value);
      return formattedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  data() {
    return {
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        dateFormat: 'Y-m-d',
        defaultDate: [
          // set default date to last one month
          this.$dayjs().subtract(1, 'month').toDate(),
          this.$dayjs().toDate(),
        ],
      },
      selectedTag: { business_name: 'All companies' },
      tagOptions: [],
      infoCard: {
        revenue: 0,
        miles: 0,
        ratePerMile: 0,
        numberOfLoads: 0,

        milesPerTruck: 0,
        expense: 0,
        profit: 0,
        expensePerMile: 0,
        profitPerMile: 0,
      },
      tabs: [
        {
          id: 1,
          label: 'Company Overview',
          value: 'CompanyOverview',
        },
        {
          id: 2,
          label: 'Customer Overview',
          value: 'CustomerOverview',
        },
        {
          id: 3,
          label: 'Driver Overview',
          value: 'DriverOverview',
        },
        {
          id: 4,
          label: 'Truck Overview',
          value: 'TruckOverview',
        },
        {
          id: 5,
          label: 'Market Overview',
          value: 'MarketOverview',
        },
        {
          id: 6,
          label: 'Dispatcher Overview',
          value: 'DispatcherOverview',
        },
        // {
        //   id: 7,
        //   label: "Driver Profit and Loss",
        //   value: "DriverProfitAndLoss"
        // },
        // {
        //   id: 8,
        //   label: "Fuel Utilization By Truck",
        //   value: "FuelUtilizationByTruck"
        // }
      ],
      activeComponent: 'CompanyOverview',
      tags: [],
      equipmentTypeOptions: [
        { title: 'Van', value: 'van' },
        { title: 'Reefer', value: 'reefer' },
        { title: 'Flatbed', value: 'flatbed' },
      ],
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      selectedEquipmentType: 'van',
      ratesOriginLocation: '',
      ratesDestinationLocation: '',
      originAddress: null,
      destinationAddress: null,
      ratePredictions: [],
      stateOption: config.state_list,
    };
  },
  created() {
    this.init();
  },
  methods: {
    getDataColorStyle(key) {
      const colorMap = {
        revenue: '#C900DA',
        expense: '#0B5AC1',
        profit: '#930E0A',
        numberOfLoads: '#DB3918',
        milesPerTruck: '#1877F2',
        ratePerMile: '#2FA52D',
        miles: '#2FA52D',
        ratePerMile: '#AF1631',
        expensePerMile: '#084F1F',
        profitPerMile: '#18181A',
        expensePerDriver: '#0B5AC1',
        revenuePerDriver: '#084F1F',
        profitPerDriver: '#930E0A',
      };

      const defaultColor = '#000';

      return colorMap[key]
        ? `color: ${colorMap[key]};`
        : `color: ${defaultColor};`;
    },
    getColorStyle(key) {
      const colorMap = {
        revenue: '#F8E7F6',
        expense: '#E7F1FE',
        profit: '#FFEAD2',
        numberOfLoads: '#FFF5E7',
        milesPerTruck: '#E8F1FE',
        ratePerMile: '#F1FCF0',
        miles: '#E7F5EF',
        ratePerMile: '#FCE9E9',
        expensePerMile: '#E3FAD6',
        profitPerMile: '#FCE9E9',
        revenuePerDriver: '#E3FAD6',
        expensePerDriver: '#E7F1FE',
        profitPerDriver: '#FFEAD2',
      };

      const defaultColor = '#fff';

      return colorMap[key]
        ? `background-color: ${colorMap[key]};`
        : `background-color: ${defaultColor};`;
    },
    async init() {
      this.selectedDateRange = this.flat_pikr_config.defaultDate
        .map((date) => date.toISOString().split('T')[0])
        .join(' to ');
      await this.getTags();
    },
    async getTags() {
      try {
        const { payload } = await this.$store.dispatch('tag/getAllTags');
        const tags = payload.data;

        this.tags = [...tags];
        this.tagOptions = [{ business_name: 'All companies' }];
        if (this.userRole !== 'tag_operator') {
          this.tagOptions.push({
            tag_id: config.parent,
            business_name: 'Parent company',
          });
        }

        const currentUserTagIds = await this.$store.dispatch(
          'company-user/getCurrentUserTagIds'
        );
        if (currentUserTagIds.length > 0) {
          const currentUserTags = tags.filter((tag) =>
            currentUserTagIds.includes(tag.tag_id)
          );
          this.tagOptions = [...this.tagOptions, ...currentUserTags];
        } else {
          this.tagOptions = [...this.tagOptions, ...tags];
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    onAutocompleteInput($event, type) {
      if (!$event.target.value) {
        if (type === 'origin') {
          this.originAddress = null;
          this.ratesOriginLocation = '';
        } else {
          this.destinationAddress = null;
          this.ratesDestinationLocation = '';
        }
      }
    },

    updateGoogleCityState(city, state, type) {
      if (type === 'origin') {
        this.ratesOriginLocation = city + ', ' + state;
      } else {
        this.ratesDestinationLocation = city + ', ' + state;
      }
    },
    /*
     * Google Map Autocomplete
     */
    getChangedPlace(place, type) {
      if (!place) return;
      const { address, city, state, zipCode } = this.setPlace(place);
      const detailedAddress = {
        address,
        city,
        state,
        zipCode,
      };
      type === 'origin'
        ? (this.originAddress = detailedAddress)
        : (this.destinationAddress = detailedAddress);
      if (city && state) {
        this.updateGoogleCityState(city, state, type);
      } else {
        this.updateGoogleCityState(address, state, type);
      }
    },
    onDateChange(dateArray) {
      if (dateArray.length === 2) {
        this.selectedDateRange = dateArray
          .map((date) => this.$dayjs(date).format('YYYY-MM-DD'))
          .join(' to ');
      }
    },
    updateTotalValues(data) {
      this.infoCard = {
        ...data,
      };
    },
    resetTotalValues(component) {
      this.infoCard = {
        revenue: 0,
        miles: 0,
        ratePerMile: 0,
        numberOfLoads: 0,
      };
      if (component == 'CompanyOverview') {
        this.infoCard.milesPerTruck = 0;
        this.infoCard.expense = 0;
        this.infoCard.profit = 0;
        this.infoCard.expensePerMile = 0;
        this.infoCard.profitPerMile = 0;
      } else if (component == 'DriverOverview') {
        this.infoCard.expense = 0;
        this.infoCard.profit = 0;
        this.infoCard.expensePerMile = 0;
        this.infoCard.profitPerMile = 0;
        this.infoCard.expensePerDriver = 0;
        this.infoCard.revenuePerDriver = 0;
        this.infoCard.profitPerDriver = 0;
      }
    },
    changeActiveComponent(component) {
      if (!component || component === this.activeComponent) return;
      this.activeComponent = component;
      this.resetTotalValues(component);
    },
    onSelectedEquipmentTypeChange(val) {
      this.selectedEquipmentType = val;
    },
    async getRates() {
      const filteredState = this.stateOption.map((item) => item.text);
      if (
        !filteredState.includes(this.originAddress.state) ||
        !filteredState.includes(this.destinationAddress.state)
      ) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: 'Only US origin/destination is supported for now',
        });
        this.ratePredictions = [];
        return;
      }
      if (!this.originAddress.city || !this.destinationAddress.city) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: 'Please Add City For Rate Predictions',
        });
        this.ratePredictions = [];
        return;
      }
      this.$vs.loading();
      try {
        const stops = [
          {
            city: this.originAddress.city,
            state: this.originAddress.state,
            ...(this.originAddress.zipCode && {
              postalCode: this.originAddress.zipCode,
            }),
          },
          {
            city: this.destinationAddress.city,
            state: this.destinationAddress.state,
            ...(this.destinationAddress.zipCode && {
              postalCode: this.destinationAddress.zipCode,
            }),
          },
        ];
        let index = 30;
        const payload = {
          requests: [],
        };
        while (index >= 0) {
          payload.requests.push({
            pickupDate: this.$dayjs()
              .subtract(index, 'day')
              .format('YYYY-MM-DD'),
            transportType: this.selectedEquipmentType,
            stops,
          });
          index--;
        }
        const data = await this.$store.dispatch(
          'greenScreens/getRatePredictions',
          payload
        );

        this.ratePredictions = data.payload.responses;
        if (Object.keys(data.payload.responses[0]).length) {
        } else {
          this.$vs.notify({
            time: 8000,
            color: 'primary',
            title: 'Rates Not Found',
            text: 'Rates not found for this route.',
          });
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: rgba(var(--vs-primary), 1);
blue .filter-input {
  min-width: 13.5rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
  max-width: 300px;
}

::v-deep(.info-card) {
  .vx-card__collapsible-content {
    height: 100%;
    .vx-card__body {
      height: 100%;
      display: grid;
      .title {
        align-self: center;
      }
      .dataset {
        align-self: flex-end;
        word-break: break-word;
      }
    }
  }
}

.info-card {
  border-radius: 8px;
  flex: 1;
  margin-top: 10px;
  text-align: center;
  box-shadow: none !important;
  .title {
    font-size: 16px;
    font-weight: 400;
    color: #1f1f1f;
  }
  .dataset {
    font-size: 1.2rem;
    font-weight: 700;
    color: #000000;
  }
}

.tab-container {
  display: flex;
  margin-bottom: 20px;
  overflow-x: hidden;
  padding-bottom: 8px;

  &:hover {
    overflow-x: scroll;
    padding-bottom: 0px;
  }

  &::-webkit-scrollbar {
    height: 8px;
    overflow: visible;
  }

  &::-webkit-scrollbar-thumb {
    border-style: solid;
    border-color: transparent;
    border-width: 4px;
    background-color: #dadce0;
    border-radius: 8px;
    box-shadow: none;
  }

  .tab {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;
    &.active {
      font-weight: 600;
      color: $primary;
      border-bottom: 2px solid $primary;
    }
  }
}

.rates-estimates-card {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background: #e7f1fe;
  border-image: linear-gradient(180deg, #1877f2 0%, #27b3ed 65%, #2fd3eb 100%);
  border-width: 1.5px;
  border-style: solid;
  border-image-slice: 1;
  .rates-card-title {
    color: #1877f2;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
  }
  .rates-estimates-form {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    .quipment-type {
      flex: 1;
    }
    .origin-location,
    .destination-location {
      width: 40%;
      border-radius: 4px;
    }
    .get-rates-btn {
      white-space: nowrap;
      width: 15%;
      padding: 0.75rem !important;
      background: #1877f2 !important;
      border-radius: 4px !important;
    }
  }
}
.equipment-type {
  background: white;
  width: 200px;
}
</style>
