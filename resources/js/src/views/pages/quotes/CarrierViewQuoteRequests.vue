<template>
  <div>
    <div class="px-10 sm-px:0 quoteContainer">
      <div v-for="item in quotes" class="pt-5" :key="item.id">
        <div class="quoteHeading">
          Quote Request from Shipper
          <span class="font-bold">
            {{ item.shipperCompany ? item.shipperCompany.name : '' }}
          </span>
        </div>
        <div>
          <div>
            <h3 class="quoteSubHeading">Quote Details</h3>
            <div class="flex items-center">
              <div class="locationBar">
                <div class="locationPoints">
                  <span>{{ item.stops[0].city }}</span>
                  ,
                  <span>{{ item.stops[0].state }}</span>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <circle cx="8" cy="8.5" r="8" fill="#3975EB" />
                  </svg>
                  <div class="locationDistanceBorder"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_376_8306)">
                      <path
                        d="M15.3033 14.9701L10 20.2733L4.6967 14.9701C1.76777 12.0411 1.76777 7.29238 4.6967 4.36345C7.62563 1.43451 12.3743 1.43451 15.3033 4.36345C18.2323 7.29238 18.2323 12.0411 15.3033 14.9701ZM10 11.3334C10.9205 11.3334 11.6667 10.5872 11.6667 9.66675C11.6667 8.74627 10.9205 8.00008 10 8.00008C9.0795 8.00008 8.33333 8.74627 8.33333 9.66675C8.33333 10.5872 9.0795 11.3334 10 11.3334Z"
                        fill="#3975EB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_376_8306">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="locationPoints">
                  <span>{{ item.stops[1].city }}</span
                  >, <span>{{ item.stops[1].state }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-16">
          <div class="vs-row">
            <div class="vs-col w-1/3">
              <template>
                <div class="vs-row">
                  <div class="vs-col w-1/2">
                    <h5 class="label">Mode:</h5>
                  </div>
                  <div class="vs-col w-1/2">
                    <p class="capitalize">
                      {{ loadTypes[item.loadType] || '' }}
                    </p>
                  </div>
                </div>
                <div class="vs-row">
                  <div class="vs-col w-1/2">
                    <h5 class="label">Equipment:</h5>
                  </div>
                  <div class="vs-col w-1/2">
                    <p>{{ getEquipmentType(item.equipmentType) }}</p>
                  </div>
                </div>
                <div class="vs-row">
                  <div class="vs-col w-1/2">
                    <h5 class="label">Driver Preference:</h5>
                  </div>
                  <div class="vs-col w-1/2">
                    <p>
                      {{ driverPreferences[item.driverPreference] || 'N/A' }}
                    </p>
                  </div>
                </div>
                <div class="vs-row">
                  <div class="vs-col w-1/2">
                    <h5 class="label">Total Weight:</h5>
                  </div>
                  <div class="vs-col w-1/2">
                    <p>{{ totalWeight }}</p>
                  </div>
                </div>
              </template>
            </div>
            <div class="vs-col w-1/3">
              <template>
                <div class="vs-row">
                  <div class="vs-col w-1/2">
                    <h5 class="label">Miles:</h5>
                  </div>
                  <div class="vs-col w-1/2">
                    <p>
                      {{ item && checkValue(item.distance) }}
                    </p>
                  </div>
                </div>
                <div class="vs-row">
                  <div class="vs-col w-1/2">
                    <h5 class="label">Trucks Needed:</h5>
                  </div>
                  <div class="vs-col w-1/2">
                    <p>
                      {{ item.numberOfTrucks }}
                    </p>
                  </div>
                </div>
                <div class="vs-row">
                  <div class="vs-col w-1/2">
                    <h5 class="label">Urgency Date:</h5>
                  </div>
                  <div class="vs-col w-1/2">
                    <p>
                      {{ item && formatDate(item.urgencyDate) }}
                    </p>
                  </div>
                </div>
                <div class="vs-row">
                  <div class="vs-col w-1/2">
                    <h5 class="label">Book Now Rate:</h5>
                  </div>
                  <div class="vs-col w-1/2">
                    <p>
                      {{ formatCurrencyRate(item.bookNowRate) }}
                    </p>
                  </div>
                </div>
                <div class="vs-row">
                  <div class="vs-col w-1/2">
                    <h5 class="label">Counter Rate:</h5>
                  </div>
                  <div class="vs-col w-1/2">
                    <p>
                      {{ formatCurrencyRate(item.shipperCounterRate) }}
                    </p>
                  </div>
                </div>
              </template>
            </div>
            <div class="vs-col w-1/3">
              <p class="label pb-4">Location</p>
              <div class="vs-row">
                <div class="vs-col md:w-full">
                  <div
                    class="flex items-start mb-3"
                    v-for="(stop, index) in item.stops"
                    :key="index"
                  >
                    <template>
                      <div class="vs-col">
                        <div class="locationLabel">
                          <span v-if="stop.type === 'shipper'">PICKUP</span>
                          <span v-else>DELIVERY</span>
                        </div>
                      </div>
                      <div class="vs-col">
                        <div class="mb-3">
                          <p class="ml-5">
                            <span>
                              {{
                                formatAddress(
                                  stop.address,
                                  stop.city,
                                  stop.state,
                                  stop.zipCode
                                )
                              }}
                            </span>
                          </p>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="vs-row">
            <div class="vs-col" v-if="isBookNowVisible">
              <vs-button
                type="filled"
                :disabled="!isAuth"
                @click.stop="
                  rateAcceptPopupFun(
                    item.bookNowRate,
                    item.carrierNumberOfTrucks
                  )
                "
              >
                Book Now:
                <span class="pl-3">
                  {{ formatCurrencyRate(item.bookNowRate) }}
                </span>
              </vs-button>
            </div>
            <div class="vs-col w-1/4" v-else-if="isCounterRateVisible">
              <div class="counterCard">
                <h2>NEW COUNTER RATE</h2>
                <div class="flex items-center my-3">
                  <div class="flex items-center mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M15.9993 29.3332C8.63535 29.3332 2.66602 23.3638 2.66602 15.9998C2.66602 8.63584 8.63535 2.6665 15.9993 2.6665C23.3633 2.6665 29.3327 8.63584 29.3327 15.9998C29.3327 23.3638 23.3633 29.3332 15.9993 29.3332ZM11.3327 18.6665V21.3332H14.666V23.9998H17.3327V21.3332H18.666C19.5501 21.3332 20.3979 20.982 21.023 20.3569C21.6482 19.7317 21.9993 18.8839 21.9993 17.9998C21.9993 17.1158 21.6482 16.2679 21.023 15.6428C20.3979 15.0177 19.5501 14.6665 18.666 14.6665H13.3327C13.1559 14.6665 12.9863 14.5963 12.8613 14.4712C12.7363 14.3462 12.666 14.1766 12.666 13.9998C12.666 13.823 12.7363 13.6535 12.8613 13.5284C12.9863 13.4034 13.1559 13.3332 13.3327 13.3332H20.666V10.6665H17.3327V7.99984H14.666V10.6665H13.3327C12.4486 10.6665 11.6008 11.0177 10.9757 11.6428C10.3505 12.2679 9.99935 13.1158 9.99935 13.9998C9.99935 14.8839 10.3505 15.7317 10.9757 16.3569C11.6008 16.982 12.4486 17.3332 13.3327 17.3332H18.666C18.8428 17.3332 19.0124 17.4034 19.1374 17.5284C19.2624 17.6535 19.3327 17.823 19.3327 17.9998C19.3327 18.1766 19.2624 18.3462 19.1374 18.4712C19.0124 18.5963 18.8428 18.6665 18.666 18.6665H11.3327Z"
                        fill="#1E3A8A"
                      />
                    </svg>
                  </div>
                  <div class="counterPrice">
                    {{ formatCurrencyRate(item.shipperCounterRate) }}
                  </div>
                </div>
                <div class="vx-col flex mb-3">
                  <vs-button
                    class="ml-4"
                    type="filled"
                    :disabled="!isAuth"
                    @click.stop="
                      rateAcceptPopupFun(
                        item.shipperCounterRate,
                        item.carrierNumberOfTrucks
                      )
                    "
                  >
                    Accept
                  </vs-button>
                </div>
              </div>
            </div>
          </div>
          <vs-divider class="pt-20" />
          <div class="submit-quote-wrapper">
            <h4 class="quoteSubHeading">Submit A Quote</h4>
            <div>
              <div class="grid lg:grid-cols-4 sm:grid-cols-2 col-gap-5">
                <div>
                  <label>Amount Per Truck <field-required-sign /></label>
                  <vx-input-group class="pt-2">
                    <template slot="prepend">
                      <div
                        class="prepend-text"
                        style="background-color: #3975eb1a"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12.0039 22.0029C6.48107 22.0029 2.00391 17.5258 2.00391 12.0029C2.00391 6.48008 6.48107 2.00293 12.0039 2.00293C17.5267 2.00293 22.0039 6.48008 22.0039 12.0029C22.0039 17.5258 17.5267 22.0029 12.0039 22.0029ZM8.50391 14.0029V16.0029H11.0039V18.0029H13.0039V16.0029H14.0039C15.3846 16.0029 16.5039 14.8836 16.5039 13.5029C16.5039 12.1222 15.3846 11.0029 14.0039 11.0029H10.0039C9.72777 11.0029 9.50391 10.7791 9.50391 10.5029C9.50391 10.2268 9.72777 10.0029 10.0039 10.0029H15.5039V8.00293H13.0039V6.00293H11.0039V8.00293H10.0039C8.6232 8.00293 7.50391 9.12222 7.50391 10.5029C7.50391 11.8836 8.6232 13.0029 10.0039 13.0029H14.0039C14.28 13.0029 14.5039 13.2268 14.5039 13.5029C14.5039 13.7791 14.28 14.0029 14.0039 14.0029H8.50391Z"
                            fill="#3975EB"
                          />
                        </svg>
                      </div>
                    </template>
                    <div class="vs-con-input">
                      <vs-input
                        type="number"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        v-model.number="item.carrierSubmitQuoteRate"
                        data-vv-validate-on="blur"
                        v-validate="'required'"
                        name="carrierSubmitQuoteRate"
                        :disabled="item.mutualAgreedRate != null || !isAuth"
                      />
                    </div>
                  </vx-input-group>
                  <span class="text-danger text-sm">
                    {{ errors.first('carrierSubmitQuoteRate') }}
                  </span>
                </div>
                <div>
                  <div>
                    <div>
                      <label>Quote Valid Until <field-required-sign /></label>
                    </div>
                    <vx-input-group class="pt-2">
                      <template slot="prepend">
                        <div
                          class="prepend-text"
                          style="background-color: #3975eb1a"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M14.501 2.49967H17.8343C18.2946 2.49967 18.6676 2.87277 18.6676 3.33301V16.6663C18.6676 17.1266 18.2946 17.4997 17.8343 17.4997H2.83431C2.37408 17.4997 2.00098 17.1266 2.00098 16.6663V3.33301C2.00098 2.87277 2.37408 2.49967 2.83431 2.49967H6.16764V0.833008H7.83431V2.49967H12.8343V0.833008H14.501V2.49967ZM3.66764 7.49967V15.833H17.001V7.49967H3.66764ZM5.33431 9.16634H7.00098V10.833H5.33431V9.16634ZM9.50098 9.16634H11.1676V10.833H9.50098V9.16634ZM13.6676 9.16634H15.3343V10.833H13.6676V9.16634Z"
                              fill="#3975EB"
                            />
                          </svg>
                        </div>
                      </template>
                      <div class="relative">
                        <flat-pickr
                          class="w-full"
                          v-model="item.carrierQuoteValidUntil"
                          :config="configDateFlatPickr"
                          placeholder="Select a date"
                          data-vv-validate-on="on-change"
                          v-validate="'required'"
                          name="carrierQuoteValidUntil"
                          :disabled="item.mutualAgreedRate != null || !isAuth"
                          :class="{
                            'custom-disabled': item.mutualAgreedRate !== null,
                          }"
                        />
                      </div>
                    </vx-input-group>
                    <span class="text-danger text-sm">
                      {{ errors.first('carrierQuoteValidUntil') }}
                    </span>
                  </div>
                </div>
                <div>
                  <label>Available Trucks <field-required-sign /></label>
                  <vx-input-group class="pt-2">
                    <template slot="prepend">
                      <div
                        class="prepend-text"
                        style="background-color: #3975eb1a"
                      >
                        <svg
                          data-v-370bca10=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            data-v-370bca10=""
                            d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z"
                            fill="#3975EB"
                          ></path>
                        </svg>
                      </div>
                    </template>
                    <div class="vs-con-input">
                      <vs-input
                        type="number"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        v-model.number="item.carrierNumberOfTrucks"
                        data-vv-validate-on="blur"
                        v-validate="'required|numeric'"
                        name="carrierNumberOfTrucks"
                        :disabled="item.mutualAgreedRate != null || !isAuth"
                      />
                    </div>
                  </vx-input-group>
                  <span class="text-danger text-sm">
                    {{ errors.first('carrierNumberOfTrucks') }}
                  </span>
                </div>
                <div class="pt-8">
                  <vs-button
                    v-if="item.mutualAgreedRate == null"
                    type="filled"
                    color="primary"
                    :disabled="!isAuth"
                    @click.stop="validateAndSubmitQuote"
                  >
                    Submit Quote
                  </vs-button>
                </div>
              </div>
            </div>
            <div class="flex justify-end w-full items-center py-4">
              <div class="ml-auto flex gap-2" v-if="!isAuth">
                <vs-button
                  class="w-full mt-5"
                  @click="navigateToLoginPageViaLink"
                >
                  Login
                </vs-button>
                <vs-button
                  class="w-full mt-5"
                  color="primary"
                  type="border"
                  @click="openSingleStepRegistrationPopup = true"
                >
                  Register
                </vs-button>
              </div>
            </div>
          </div>
          <DataTable />
        </div>
      </div>
      <QuotesResponseTable
        v-if="quotesResponse && quotesResponse.length"
        :quotesResponse="quotesResponse"
      />
      <template>
        <vs-popup title="" :active.sync="rateAcceptPopup.isActive">
          <div>
            <div class="flex flex-col gap-4 items-center px-24">
              <h2 class="font-bold">Accept Rate</h2>
              <!-- TODO: see my other comments. There should be a helper function to detect null and format currency and add the $ sign. -->
              Accept shipper quote
              {{ formatCurrencyRate(rateAcceptPopup.acceptRate) }}?
            </div>
            <div class="flex gap-2 items-center mt-10">
              <label class="w-1/3">
                Number of trucks
                <field-required-sign />
              </label>
              <div class="w-full">
                <vs-input
                  class="w-full"
                  type="number"
                  v-model.number="rateAcceptPopup.numberOfTrucks"
                  data-vv-validate-on="blur"
                  v-validate="'required|numeric'"
                  name="numberOfTrucks"
                ></vs-input>
              </div>
            </div>
          </div>
          <div class="error-message">
            <span class="text-danger text-sm">
              {{ errors.first('numberOfTrucks') }}
            </span>
          </div>
          <vs-button
            class="mt-10 w-full"
            color="primary"
            type="filled"
            @click="acceptCounterRate"
          >
            Submit
          </vs-button>
        </vs-popup>
      </template>
    </div>
    <vs-popup
      title="Register Now"
      :active.sync="openSingleStepRegistrationPopup"
    >
      <SingleStepRegistration
        :isActive="openSingleStepRegistrationPopup"
        @closeRegistrationPopup="closePopup"
      />
    </vs-popup>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import {
  parseFloatWithTrim,
  commaSeparatedValue,
  formatStatusToCamelCamelCase,
} from '@/helpers/helper';
import config from '@/config/constants.js';
import { getApiErrorMsg } from '@/helpers/helper';
import quoteCommonFunctions from './mixins/quoteCommonFunctions';
import SingleStepRegistration from '../register/SingleStepRegistration.vue';
import QuotesResponseTable from './components/QuotesResponseTable.vue';
export default {
  name: 'CarrierViewQuoteRequests',
  mixins: [quoteCommonFunctions],
  components: {
    SingleStepRegistration,
    QuotesResponseTable,
  },
  data() {
    return {
      quotes: [],
      expandedRows: [],
      selectedCustomers: null,
      quoteValidUntil: null,
      newQuoteRate: null,
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d',
      },
      rateAcceptPopup: {
        isActive: false,
        acceptRate: null,
        numberOfTrucks: null,
      },
      loadTypes: {
        drayage: 'Drayage',
        ftl: 'FTL',
        ltl: 'LTL',
      },
      driverPreferences: {
        solo: 'Solo',
        team: 'Team',
      },
      equipmentTypeOptions: config.planning.equipmentTypes,
      validationDict: {
        custom: {
          carrierSubmitQuoteRate: {
            required: 'New Quote Rate is required',
          },
          carrierQuoteValidUntil: {
            required: 'Quote Valid Until is required',
          },
          carrierNumberOfTrucks: {
            required: 'Available Trucks is required',
            numeric: 'Value must be a valid integer',
          },
          numberOfTrucks: {
            required: 'Number of Trucks is required',
            numeric: 'Value must be a valid integer',
          },
        },
      },
      isAuth: true,
      openSingleStepRegistrationPopup: false,
      showSingleRegistration: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['userRole', 'isUserBrokerOrShipper']),
    isBookNowVisible() {
      return (
        this.quotes[0].mutualAgreedRate == null &&
        this.quotes[0].shipperCounterRate == null &&
        this.quotes[0].bookNowRate != null
      );
    },
    isCounterRateVisible() {
      return (
        this.quotes[0].mutualAgreedRate == null &&
        this.quotes[0].shipperCounterRate != null
      );
    },
    totalWeight() {
      let weight = 0;
      let weightUnit = '';

      this.quotes.forEach((quote) => {
        if (quote && quote.stops) {
          quote.stops.forEach((stop) => {
            if (!weightUnit && stop.weightUnit) {
              weightUnit = stop.weightUnit;
            }
            weight += stop.weight ? Number(stop.weight) : 0;
          });
        }
      });

      if (weight == 0) {
        return '';
      }

      return `${this.parseFloatWithTrims(weight)} ${weightUnit || ''}`.trim();
    },
    quotesResponse() {
      return this.quotes && this.quotes[0] && this.quotes[0].responses;
    },
  },
  created() {
    const token = localStorage.getItem('access_token');
    if (!token) {
      this.isAuth = false;
    }
  },
  mounted() {
    this.$validator.localize('en', this.validationDict);
    this.getRequestList();
  },
  watch: {
    'rateAcceptPopup.isActive': function (val) {
      if (!val) {
        this.rateAcceptPopup.acceptRate = null;
        this.rateAcceptPopup.numberOfTrucks = null;
      }
      this.$validator.reset();
    },
  },
  methods: {
    navigateToLoginPageViaLink() {
      const { id, i, scid, s, token, t } = this.$route.query;
      this.$router.push({
        name: 'page-login',
        query: {
          source: 'viaCarrierViewQuoteRequestLink',
          id: id || i,
          scid: scid || s,
          token: token || t,
        },
      });
    },
    closePopup() {
      this.openSingleStepRegistrationPopup = false;
      this.isAuth = true;
    },
    showSingleRegistrationFun() {
      this.showSingleRegistration = !this.showSingleRegistration;
    },
    async acceptCounterRate() {
      const isFormValid = await this.validateForm();
      if (isFormValid) {
        this.quotes[0].acceptRate = true;
        this.submitQuote();
        this.rateAcceptPopup.isActive = false;
      }
    },
    formatStatus(value) {
      return formatStatusToCamelCamelCase(value);
    },
    restoreToken(value) {
      if (String(value).length >= 10) {
        return String(value);
      }
      return String(parseInt(value, 36));
    },
    restoreId(value) {
      if (!['I', 'S'].includes(String(value)[0])) {
        return Number(value);
      }
      return Number(parseInt(String(value).substring(1), 36));
    },
    async getRequestList() {
      const { id, i, scid, s, token, t } = this.$route.query;
      const { ids, scids, tokens } = this.splitQueryParams(
        id || i,
        scid || s,
        token || t
      );
      const quotes = ids.map((id, index) => ({
        id: this.restoreId(id),
        shipperCompanyId: this.restoreId(scids[index]),
        token: this.restoreToken(tokens[index]),
      }));

      try {
        const payload = { quotes };
        const res = await this.$store.dispatch(
          'quote/viewRequestsViaLink',
          payload
        );
        this.quotes = res.data.payload;
        if (this.quotes[0].mutualAgreedRate) {
          this.quotes[0].acceptRate = true;
        }
        this.expandedRows = this.quotes.filter((item, index) => index === 0);
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    changeTab(id, name) {
      this.quotes.map((item) => {
        if (item.id === id) {
          item.activeId = name;
        }
      });
    },
    formatNumberWithCommas(value) {
      if (!value) return value;
      const formattedValue = parseFloatWithTrim(value);
      return commaSeparatedValue(formattedValue);
    },
    formatUtcToLocalTime(utcTime) {
      return this.$dayjs.utc(utcTime).local().format('MM/DD/YY HH:mm z');
    },
    async submitQuote() {
      // TODO: we need to support multiple quotes. Below is ONLY my temp code for demo.
      const { id, i, scid, s, token, t } = this.$route.query;
      const { ids, scids, tokens } = this.splitQueryParams(
        id || i,
        scid || s,
        token || t
      );
      const quotes = ids.map((id, index) => ({
        id: this.restoreId(id),
        shipperCompanyId: this.restoreId(scids[index]),
        token: this.restoreToken(tokens[index]),
        carrierNumberOfTrucks:
          this.rateAcceptPopup.numberOfTrucks != null
            ? this.rateAcceptPopup.numberOfTrucks
            : this.quotes[0].carrierNumberOfTrucks,
      }));

      if (this.quotes[0].acceptRate) {
        if (
          this.quotes[0].bookNowRate === null &&
          this.quotes[0].shipperCounterRate === null
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Cannot accept rate if shipper did not provide a rate.',
          });
          return false;
        }
        quotes[0].responseType = 'bookNow';
        // Number(null) returns 0, which works for us.
        // Number(undefined) returns NaN, which does not work for us.
        quotes[0].bookNow = {
          rate: this.isBookNowVisible
            ? Number(this.quotes[0].bookNowRate)
            : Number(this.quotes[0].shipperCounterRate),
        };
      } else {
        if (
          this.quotes[0].carrierSubmitQuoteRate === null ||
          this.quotes[0].carrierSubmitQuoteRate === undefined ||
          this.quotes[0].carrierSubmitQuoteRate === '' ||
          !this.quotes[0].carrierQuoteValidUntil
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'To submit quote, please provide both the rate and a quote valid until date.',
          });
          return false;
        }
        quotes[0].responseType = 'submitQuote';
        quotes[0].submitQuote = {
          rate: Number(this.quotes[0].carrierSubmitQuoteRate),
          quoteValidUntil: this.quotes[0].carrierQuoteValidUntil,
        };
      }

      const payload = { quotes };

      this.$store
        .dispatch('quote/respondRequests', payload)
        .then((response) => {
          if (response.result) {
            this.$vs.notify({
              color: 'success',
              title: 'Success',
              text: 'Quote submitted successfully.',
            });
            this.$router.push({ name: 'quote' });
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        });
    },
    checkPermissionToSubmit() {
      if (this.isUserBrokerOrShipper) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Only carriers can submit a quote.',
        });
        return false;
      }
      return true;
    },
    rateAcceptPopupFun(rate, numberOfTrucks) {
      if (!this.checkPermissionToSubmit()) return;

      this.rateAcceptPopup.acceptRate = rate;
      this.rateAcceptPopup.numberOfTrucks = numberOfTrucks;
      this.rateAcceptPopup.isActive = true;
    },
    getEquipmentType(type) {
      if (!type) {
        return '';
      }
      const equipmentType = this.equipmentTypeOptions.find(
        (item) => item.value === type
      );
      return equipmentType ? equipmentType.title : '';
    },
    async validateForm() {
      if (this.rateAcceptPopup.isActive) {
        await this.$validator.validate('numberOfTrucks');
      } else {
        await this.$validator.validate('carrierSubmitQuoteRate');
        await this.$validator.validate('carrierQuoteValidUntil');
        await this.$validator.validate('carrierNumberOfTrucks');
      }

      if (this.errors.items.length) {
        return false;
      }
      return true;
    },
    async validateAndSubmitQuote() {
      if (!this.checkPermissionToSubmit()) return;

      const isFormValid = await this.validateForm();
      if (isFormValid) {
        this.quotes[0].acceptRate = false;
        this.submitQuote();
      }
    },
    splitQueryParams(id, s, t) {
      return {
        ids: id.split(','),
        scids: s.split(','),
        tokens: t.split(','),
      };
    },
  },
};
</script>
<style scoped lang="scss">
.quoteContainer {
  .quoteHeading {
    font-size: 32px;
    font-weight: 700;
  }
  .quoteSubHeading {
    font-size: 20px;
    font-weight: 500;
    padding: 15px 0px;
  }
  h4.quoteSubHeading {
    position: relative;
    left: -25px;
  }
  .locationBar {
    border-radius: 100px;
    background: var(--blue-200, #bfdbfe);
    display: flex;
    align-items: center;
    padding: 8px 16px;
    .locationDistanceBorder {
      border: 1px dashed rgba(var(--vs-primary), 1) !important;
      min-width: 200px;
    }
    .locationPoints {
      color: rgba(var(--vs-primary), 1) !important;
      font-size: 16px;
      padding: 0px 5px;
      font-weight: 500;
    }
  }
  .label {
    color: #626262;
    padding-bottom: 15px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
  .locationLabel {
    color: rgba(var(--vs-primary), 1) !important;
    font-weight: 500;
    min-width: 75px;
  }
  .counterCard {
    padding: 15px;
    border-radius: 8px;
    background: var(--blue-100, #dbeafe);
    margin: 0 auto;

    h2 {
      font-size: 18px;
      color: var(--blue-900, #1e3a8a);
      font-weight: 700;
    }

    .counterPrice {
      color: var(--blue-900, #1e3a8a);
      font-size: 24px;
      font-weight: 500;
    }

    .counterCardText {
      color: var(--blue-900, #1e3a8a);
      font-size: 14px;
      font-weight: 700;

      span {
        font-weight: 700;
      }
    }
  }
  .error-message {
    margin-top: 5px;
  }
}

::v-deep {
  .vs-popup--content {
    position: relative;
  }
}
.error-message {
  position: absolute;
  left: 165px;
}
.custom-disabled {
  color: #626262;
}
.submit-quote-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
