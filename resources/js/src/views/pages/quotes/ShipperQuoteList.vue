<template>
  <div>
    <DataTable
      ref="shipperQuoteList"
      :value="quotes.quotes"
      :expandedRows.sync="expandedRows"
      dataKey="id"
      responsiveLayout="scroll"
      :lazy="true"
      :paginator="true"
      :totalRecords="totalRecords"
      :rows="rows"
      :rowsPerPageOptions="[10, 25, 50]"
      @page="onPage($event)"
      @row-expand="onRowExpand($event)"
      @row-collapse="onRowCollapse($event)"
    >
      <Column :expander="true" />
      <Column className="pr-0">
        <template #body="{ data }">
          <div class="lanesWrap" @click="editQuote(data.id)">
            <div class="headingNumber">{{ data.referenceNumber }}</div>
            <div class="flex mt-2">
              <div class="inline-grid">
                <div class="distance-wrpper">
                  <div class="dots dotGray"></div>
                  <div style="border: 1px solid #d9d9d9; height: 100%"></div>
                  <div class="dots dotBlue"></div>
                </div>
              </div>
              <div class="w-100 flex">
                <div class="w-1/2 flex flex-col justify-between">
                  <h6 class="mt-1">
                    {{
                      data.stops &&
                      data.stops[0] &&
                      formatStateCity(data.stops[0].city, data.stops[0].state)
                    }}
                  </h6>
                  <!-- <p>Oct 30, 07:00 AM - 02:00 PM PST</p> -->
                  <p class="my-3">{{ checkValue(data.distance) }} mi</p>
                  <h6>
                    {{
                      data.stops &&
                      data.stops.length > 0 &&
                      data.stops[data.stops.length - 1] &&
                      formatStateCity(
                        data.stops[data.stops.length - 1].city,
                        data.stops[data.stops.length - 1].state
                      )
                    }}
                  </h6>
                </div>
                <div class="w-1/2">
                  <h6>Trucks</h6>
                  <p>{{ data.numberOfTrucks }}</p>
                  <h6 class="mt-3">{{ loadTypes[data.loadType] || '' }}</h6>
                  <p class="mt-1">
                    {{ getEquipmentType(data.equipmentType) }}
                  </p>
                </div>
                <!-- <div class="flex">
                  <div class="w-35">
                    <p>Nov 1, 08:00 AM - 08:00 PM PST</p>
                  </div>
                  <div class="w-20">
                    <h5>53 length</h5>
                    <p>Consumer Goods</p>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </template>
      </Column>
      <!-- TODO: why we are hard coding the 1st column, 2nd column?? What if I want 5 columns? This need to be an array, not hard coded -->
      <Column className="px-0 w-full">
        <template #body="{ data }">
          <template v-if="data.sortedResponses.length">
            <div class="flex gap-2">
              <div
                class="mr-4 w-250"
                v-for="item in data.sortedResponses"
                :key="item.id"
              >
                <!-- <div class="heading">{{ toOrdinal(index + 1) }} Cheapest</div> -->
                <div
                  :class="[
                    'cheapestHeader',
                    { 'cursor-pointer': item.carrierCompany.id },
                  ]"
                  @click="redirectToCarrierDetailsPage(item.carrierCompany.id)"
                >
                  {{ item.carrierCompany.name ? item.carrierCompany.name : '' }}
                </div>
                <div class="flex justify-center">
                  <div class="text-center mr-5">
                    <div class="text-center" v-if="showMutualAgreedRate(item)">
                      <p>AGREED RATE</p>
                      <p class="fw-500">
                        {{ formatCurrencyRate(item.mutualAgreedRate) }}
                      </p>
                    </div>
                    <div class="text-center" v-else>
                      <p>CARRIER'S OFFER</p>
                      <p class="fw-500">
                        {{ formatCurrencyRate(item.carrierSubmitQuoteRate) }}
                      </p>
                    </div>
                    <div>
                      <span
                        v-if="showCounterButton(item)"
                        class="shipperLinks cursor-pointer"
                        @click="showCounterPopupFun(item, data.id)"
                      >
                        Counter
                      </span>
                    </div>
                  </div>
                  <div class="text-center">
                    <div v-if="!showMutualAgreedRate(item)">
                      <p>VALID UNTIL</p>
                      <p class="fw-500">
                        {{ formatDate(item.carrierQuoteValidUntil) || 'N/A' }}
                      </p>
                    </div>
                    <div>
                      <span v-if="showStatusNotButton(item)">
                        <p class="fw-500">
                          {{ formatStatus(item.status) || '' }}
                        </p>
                      </span>
                      <span
                        v-else-if="showAcceptButton(item)"
                        class="shipperLinks cursor-pointer"
                        @click="showAcceptPopupFun(item, data.id)"
                      >
                        Accept
                      </span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="orangeTxt" v-if="showCounterRate(item)">
                    <p>
                      COUNTERED RATE:
                      {{ formatCurrencyRate(item.shipperCounterRate) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </Column>

      <template #expansion="slotProps">
        <div class="orders-subtable">
          <div class="flex items-center justify-between overflow-x-auto">
            <div>
              <vs-chip
                style="min-width: 75px"
                class="cursor-pointer mx-2 text-sm"
                v-for="item in viewOptions"
                :key="item.id"
                :color="
                  expandedActiveRows[slotProps.data.id] &&
                  expandedActiveRows[slotProps.data.id] === item.value
                    ? 'primary'
                    : ''
                "
                @click.native="changeTab(item.value, slotProps)"
              >
                {{ item.label }}
              </vs-chip>
            </div>
          </div>
          <DataTable
            :value="slotProps.data.loads"
            v-if="
              expandedActiveRows[slotProps.data.id] &&
              expandedActiveRows[slotProps.data.id] === 'loads'
            "
            class="shipperSubList"
          >
            <Column field="loadNumber" header="Load Number"></Column>
            <Column field="loadReference" header="Reference"></Column>
            <Column header="Carrier">
              <template #body="{ data: { carrierAsCustomer } }">
                <span
                  :class="[
                    {
                      'cursor-pointer': (carrierAsCustomer || {})
                        .syncedCompanyId,
                    },
                  ]"
                  v-if="(carrierAsCustomer || {}).name"
                  @click="
                    redirectToCarrierDetailsPage(
                      carrierAsCustomer.syncedCompanyId
                    )
                  "
                >
                  {{ carrierAsCustomer.name }}
                </span>
              </template>
            </Column>
            <Column field="rate" header="Rate">
              <template #body="{ data: { rate } }">
                {{ formatCurrencyRate(rate) }}
              </template>
            </Column>
            <Column field="status" header="Status">
              <template #body="{ data: { status } }">
                {{ loadStatus(status) }}
              </template>
            </Column>
            <Column field="action" header="Action">
              <template #body="{ data: { id } }">
                <div class="flex items-center gap-1">
                  <vx-tooltip text="Edit">
                    <vs-button
                      color="primary"
                      type="filled"
                      icon-pack="feather"
                      icon="icon-edit"
                      size="small"
                      radius
                      @click.stop="editLoad(id)"
                    ></vs-button>
                  </vx-tooltip>
                  <!-- <vx-tooltip text="Find Carrier">
                    <vs-button
                      color="primary"
                      type="filled"
                      icon="cancel"
                      size="small"
                      radius
                    ></vs-button>
                  </vx-tooltip> -->
                </div>
              </template>
            </Column>
          </DataTable>
          <DataTable
            :value="slotProps.data.responses"
            v-if="
              expandedActiveRows[slotProps.data.id] &&
              expandedActiveRows[slotProps.data.id] === 'quotes'
            "
          >
            <Column field="carrier" header="Carrier">
              <template #body="{ data: { carrierCompany } }">
                <span
                  :class="[{ 'cursor-pointer': (carrierCompany || {}).id }]"
                  v-if="(carrierCompany || {}).name"
                  @click="redirectToCarrierDetailsPage(carrierCompany.id)"
                >
                  {{ carrierCompany.name }}
                </span>
              </template>
            </Column>
            <Column header="Accepted Rate">
              <template #body="{ data: { mutualAgreedRate } }">
                {{ formatCurrencyRate(mutualAgreedRate) }}
              </template>
            </Column>
            <Column header="Counter Rate">
              <template #body="{ data: { shipperCounterRate } }">
                {{ formatCurrencyRate(shipperCounterRate) }}
              </template></Column
            >
            <Column header="Carrier Quote">
              <template #body="{ data: { carrierSubmitQuoteRate } }">
                {{ formatCurrencyRate(carrierSubmitQuoteRate) }}
              </template>
            </Column>
            <Column field="carrierQuoteValidUntil" header="Quote Valid Until">
              <template #body="{ data: { carrierQuoteValidUntil } }">
                {{ formatDate(carrierQuoteValidUntil) }}
              </template>
            </Column>
            <Column field="status" header="Status">
              <template #body="{ data: { status } }">
                {{ formatStatus(status) }}
              </template></Column
            >
            <Column field="trucks" header="Trucks Available">
              <template #body="{ data: { carrierNumberOfTrucks } }">
                {{ checkValue(carrierNumberOfTrucks) }}
              </template>
            </Column>
            <Column field="loads" header="Loads">
              <template #body="{ data: { numberOfLoads } }">
                {{ checkValue(numberOfLoads) }}
              </template>
            </Column>
            <Column field="action" header="Action">
              <template #body="{ data }">
                <div v-if="shouldShowCounterAndAcceptButton(data)">
                  <vs-button
                    color="primary"
                    size="small"
                    @click="showCounterPopupFun(data, slotProps.data.id)"
                  >
                    Counter
                  </vs-button>
                  <vs-button
                    color="success"
                    size="small"
                    @click="showAcceptPopupFun(data, slotProps.data.id)"
                  >
                    Accept
                  </vs-button>
                </div>
                <vs-button
                  v-if="data.mutualAgreedRate && data.status != 'canceled'"
                  color="primary"
                  size="small"
                  @click="showCreateLoadSidebar(data, slotProps.data.id)"
                >
                  Issue Load
                </vs-button>
                <vs-button
                  color="warning"
                  size="small"
                  v-if="data.status == 'accepted'"
                  @click="
                    cancelQuoteConfirmationPopupFun(data, slotProps.data.id)
                  "
                >
                  Cancel
                </vs-button>
              </template>
            </Column>
          </DataTable>
        </div>
      </template>
    </DataTable>

    <vs-popup title="" :active.sync="showCounterPopup" class="popupWidth">
      <div class="flex flex-col gap-4 items-center">
        <h2 class="font-bold">Counter Rate</h2>
        <div class="flex items-center counterRateWrapper">
          <div class="mr-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.5 14V16H11V18H13V16H14C14.663 16 15.2989 15.7366 15.7678 15.2678C16.2366 14.7989 16.5 14.163 16.5 13.5C16.5 12.837 16.2366 12.2011 15.7678 11.7322C15.2989 11.2634 14.663 11 14 11H10C9.86739 11 9.74021 10.9473 9.64645 10.8536C9.55268 10.7598 9.5 10.6326 9.5 10.5C9.5 10.3674 9.55268 10.2402 9.64645 10.1464C9.74021 10.0527 9.86739 10 10 10H15.5V8H13V6H11V8H10C9.33696 8 8.70107 8.26339 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13H14C14.1326 13 14.2598 13.0527 14.3536 13.1464C14.4473 13.2402 14.5 13.3674 14.5 13.5C14.5 13.6326 14.4473 13.7598 14.3536 13.8536C14.2598 13.9473 14.1326 14 14 14H8.5Z"
                fill="#09121F"
              />
            </svg>
          </div>
          <div class="w-full">
            <input
              v-model="counterRate"
              placeholder="Enter new counter rate"
              class="counterRateInput"
              v-validate="'required'"
              inputmode="numeric"
              pattern="[0-9]*"
              name="counterRate"
            />
          </div>
        </div>
        <div class="text-danger text-sm">
          {{ errors.first('counterRate') }}
        </div>
        <vs-button
          class="w-full"
          color="primary"
          type="filled"
          @click="handleCarrierResponse"
          style="max-width: 250px"
        >
          Submit
        </vs-button>
      </div>
    </vs-popup>

    <vs-popup title="" :active.sync="showAcceptPopup" class="popupWidth">
      <div class="flex flex-col gap-4 items-center">
        <h2 class="font-bold">Accept rate?</h2>
        <h3 class="acceptCounterRate">
          {{ formatCurrencyRate(acceptRate) }}
        </h3>
        <div>
          <vs-button
            class="mr-3"
            color="primary"
            type="border"
            @click="showAcceptPopup = false"
          >
            No
          </vs-button>
          <vs-button
            class=""
            color="primary"
            type="filled"
            @click="handleCarrierResponse"
          >
            Yes
          </vs-button>
        </div>
      </div>
    </vs-popup>

    <load-sidebar
      v-show="isSidebarActive"
      :isSidebarActive="isSidebarActive"
      @closeSidebar="closeLoadSidebar"
      :addLoadData="sidebarData"
      :data="editLoadData"
      @refreshCallingUi="getShipperQuotesList"
    />
  </div>
</template>

<script>
import config from '@/config/constants';
import quoteCommonFunctions from './mixins/quoteCommonFunctions';
import { getApiErrorMsg, isNullOrUndefined } from '@/helpers/helper';

export default {
  name: 'ShipperQuoteList',
  mixins: [quoteCommonFunctions],
  components: {
    LoadSidebar: () => import('@/views/pages/dispatch/load/LoadSidebar.vue'),
  },
  props: {
    listHeading: {
      type: String,
      default: '',
    },
    activeTab: {
      type: String,
      default: '',
    },
  },
  computed: {
    totalNumberOfLoads() {
      return (data) => {
        return data.loads.length;
      };
    },
    totalNumberOfQuotes() {
      return (data) => {
        return data.responses.length;
      };
    },
    minRateReceived() {
      return (data) => {
        if (data.responses && data.responses.length > 0) {
          const smallestObject = data.responses.reduce((min, current) => {
            return current.carrierSubmitQuoteRate < min.carrierSubmitQuoteRate
              ? current
              : min;
          }, data.responses[0]);
          if (smallestObject.carrierSubmitQuoteRate) {
            return `$${smallestObject.carrierSubmitQuoteRate}`;
          }
        }
        return null;
      };
    },
    editLoadData() {
      if (this.selectedLoad.loadId) {
        return {
          loadId: this.selectedLoad.loadId,
        };
      }

      return {};
    },
  },
  data() {
    return {
      viewOptions: [
        {
          id: 1,
          label: 'Quotes',
          value: 'quotes',
        },
        {
          id: 2,
          label: 'Loads',
          value: 'loads',
        },
      ],
      quotes: [],
      expandedRows: [],
      showCounterPopup: false,
      showAcceptPopup: false,
      counterRate: null,
      acceptRate: null,
      carrierData: null,
      isSidebarActive: false,
      sidebarData: {},
      rows: 25,
      totalRecords: 0,
      loadStatusWithLabels: config.status.loadWithLabels,
      selectedLoad: {
        loadId: null,
      },
      validationDict: {
        custom: {
          counterRate: {
            required: 'Counter Rate is required',
          },
        },
      },
      expandedActiveRows: {},
      isCanceled: false,
    };
  },
  created() {
    this.init();
    this.$validator.localize('en', this.validationDict);

    this.$nextTick(() => {
      const thead = this.$refs.shipperQuoteList.$el.querySelector('thead');
      thead.style.display = 'none';
    });
  },
  watch: {
    showCounterPopup: {
      handler(val) {
        if (!val) {
          this.counterRate = null;
          this.$validator.reset();
        }
      },
    },
    activeTab: {
      handler(val) {
        this.init();
      },
    },
  },
  methods: {
    showCounterButton(response) {
      if (
        response.status == 'quoteReceived' ||
        response.status == 'countered'
      ) {
        return true;
      }
      return false;
    },

    showCounterRate(response) {
      if (response.status == 'countered') {
        return true;
      }
      return false;
    },

    showAcceptButton(response) {
      if (
        !isNullOrUndefined(response.carrierSubmitQuoteRate) &&
        (response.status == 'quoteReceived' || response.status == 'countered')
      ) {
        return true;
      }
      return false;
    },

    showStatusNotButton(response) {
      if (['canceled', 'accepted', 'expired'].includes(response.status)) {
        return true;
      }
      return false;
    },

    showMutualAgreedRate(response) {
      return response.mutualAgreedRate;
    },
    cancelQuoteConfirmationPopupFun(carrier, quoteId = null) {
      this.isCanceled = true;
      this.carrierData = { ...carrier, quoteId };
      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        title: 'Warning',
        text: `Are you sure. You want to cancel this quote?`,
        acceptText: 'Yes',
        accept: () => this.handleCarrierResponse(),
        cancel: () => {
          this.carrierData = {};
          this.isCanceled = false;
        },
      });
    },

    async handleCarrierResponse() {
      if (this.showCounterPopup) {
        await this.$validator.validateAll();
        if (this.errors.items.length) return;
      }
      this.$vs.loading();
      const payload = {
        quotes: [
          {
            id: this.carrierData.quoteId,
            responseId: this.carrierData.id,
            carrierNumberOfTrucks: this.carrierData.carrierNumberOfTrucks,
          },
        ],
      };
      // TODO: where is the validator and missing value warning for counter rate?
      if (this.showCounterPopup) {
        payload.quotes[0].responseType = 'counterRate';
        payload.quotes[0].counter = { rate: this.counterRate };
      } else if (this.isCanceled) {
        payload.quotes[0].responseType = 'cancel';
      } else {
        payload.quotes[0].responseType = 'acceptRate';
        payload.quotes[0].accept = { rate: this.acceptRate };
      }
      this.$store
        .dispatch('quote/handleCarrierResponse', payload)
        .then(({ data }) => {
          if (data.result) {
            this.$vs.notify({
              time: 8000,
              color: 'success',
              title: 'Success',
              text: 'Quote updated successfully',
            });
            this.showCounterPopup = false;
            this.showAcceptPopup = false;
            this.isCanceled = false;
            this.init();
          }
        })
        .catch((error) => {
          this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    shouldShowCounterAndAcceptButton(data) {
      return (
        data.mutualAgreedRate === null && data.carrierSubmitQuoteRate !== null
      );
    },
    showCounterPopupFun(carrier, quoteId = null) {
      this.carrierData = { ...carrier, quoteId };
      this.showCounterPopup = true;
    },
    showAcceptPopupFun(carrier, quoteId = null) {
      this.carrierData = { ...carrier, quoteId };
      this.acceptRate = this.carrierData.carrierSubmitQuoteRate;
      this.showAcceptPopup = true;
    },
    async init() {
      try {
        this.$vs.loading();
        const payload = {
          filters: {
            status: this.activeTab,
          },
          pageSize: 25,
          page: 1,
        };
        await this.getShipperQuotesList(payload);
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
    async getShipperQuotesList({
      pageSize = 25,
      page = 1,
      filters = { status: this.activeTab },
    }) {
      try {
        const res = await this.$store.dispatch('quote/getShipperQuotesList', {
          filters,
          pageSize,
          page,
        });
        this.quotes = res.data.payload;
        const { meta } = (res.data || {}).payload || {};
        const { totalItems } = meta || {};
        this.totalRecords = totalItems || 0;

        // Calculate Cheapest/2nd Cheapest Rate
        this.quotes.quotes = this.quotes.quotes.map((quote) => {
          // If carrier has not yet submitted a rate, then do not show it on
          // the main table, but still show it in each quote's quotes tab.
          const sortedResponses = quote.responses.filter(
            (r) => r.status !== 'pending'
          );
          sortedResponses.sort((a, b) => {
            const aRate =
              Number(a.mutualAgreedRate) ||
              Number(a.carrierSubmitQuoteRate) ||
              0;
            const bRate =
              Number(b.mutualAgreedRate) ||
              Number(b.carrierSubmitQuoteRate) ||
              0;

            return aRate - bRate;
          });
          return {
            ...quote,
            sortedResponses,
          };
        });
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    changeTab(name, slotProps) {
      this.expandedActiveRows = {
        ...this.expandedActiveRows,
        [slotProps.data.id]: name,
      };
    },
    addQuote() {},
    editQuote(quoteId) {
      if (quoteId) {
        this.$emit('editQuote', quoteId);
      }
    },
    async showCreateLoadSidebar(data, quoteId) {
      try {
        const {
          data: { payload },
        } = await this.$store.dispatch('quote/getQuote', quoteId);

        this.sidebarData = {
          ...data,
          stops: payload.stops || [],
          sendRateConAndBolToCarrier: true,
          quoteId,
        };
        this.isSidebarActive = true;
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    closeLoadSidebar(refreshList) {
      this.isSidebarActive = false;
      this.sidebarData = {};
      this.selectedLoad.loadId = null;

      if (refreshList) {
        this.getShipperQuotesList({
          page: 1,
          pageSize: 25,
          filters: { status: this.activeTab },
        });
      }
    },
    loadStatus(status) {
      if (status) {
        return this.loadStatusWithLabels.find((item) => item.value === status)
          .label;
      }
    },
    editLoad(loadId) {
      if (loadId) {
        this.selectedLoad.loadId = loadId;
        this.isSidebarActive = true;
      }
    },
    onPage({ page, rows }) {
      this.getShipperQuotesList({
        pageSize: rows,
        page: page + 1,
        filters: { status: this.activeTab },
      });
    },
    onRowExpand({ data: { id } }) {
      this.expandedActiveRows[id] = this.viewOptions[0].value;
    },
    onRowCollapse({ data: { id } }) {
      delete this.expandedActiveRows[id];
    },
    toOrdinal(number) {
      const suffixes = ['th', 'st', 'nd', 'rd'];
      const relevantDigits = number < 30 ? number % 20 : number % 30;
      const suffix =
        relevantDigits <= 3 ? suffixes[relevantDigits] : suffixes[0];
      return number + suffix;
    },
    redirectToCarrierDetailsPage(companyId) {
      if (companyId) {
        window.open(
          `${config.truckingDirectoryCarrierDetailUrl}companyId=${companyId}`,
          '_blank'
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.cheapestHeader {
  padding: 0px 7px;
  background-color: var(--slate-100, #f1f5f9);
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
}

// ::v-deep {
// .p-datatable-thead {
//   visibility: hidden;
// }
//}

.vertical-divider {
  border: 1px solid #e9ecef;
  margin: 0px 10px;
}

.shipperLinks {
  color: var(--blue-600, #2563eb);
  font-size: 16px;
  font-weight: 700;
  text-decoration-line: underline;
}

.heading {
  color: var(--neutrals-black, #181818);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
}

.orangeTxt {
  text-align: center;
  p {
    color: var(--orange-500, #f97316);
    font-weight: 700;
  }
  h5 {
    color: var(--orange-500, #f97316);
    font-size: 16px;
    font-weight: 700;
  }
}

.lanesWrap {
  width: 400px;
  .headingNumber {
    font-size: 15px;
    font-weight: 600;
    // margin-bottom: 10px;
  }
}

.w-100 {
  width: 100%;
}
.w-35 {
  width: 35%;
}
.w-20 {
  width: 20%;
}

.w-250 {
  width: 250px;
}

.distance-wrpper {
  display: flex;
  flex-direction: column;
  height: 90%;
  margin-right: 10px;
  margin-top: 5px;
  justify-content: space-between;
  align-items: center;
  .dots {
    padding: 5px;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
  }
  .dots.dotGray {
    background-color: #d9d9d9;
  }
  .dots.dotBlue {
    background-color: #2563eb;
  }
}
.counterRateWrapper {
  border: 1px solid #edeff2;
  padding: 7px;
  min-width: 250px;
  border-radius: 4px;
}
.counterRateInput {
  border: none;
  min-height: 35px;
  outline: none;
  width: 100%;
}
.outlineBtn {
  border: 1px solid #3975eb;
  background-color: #ffffff;
  color: #3975eb;
  border-radius: 4px;
}
.acceptCounterRate {
  color: #2563eb;
  padding: 25px 0px;
  font-size: 24px;
}
.fw-500 {
  font-weight: 500;
}
</style>

<style>
.popupWidth.con-vs-popup .vs-popup {
  width: 450px;
}
</style>
