<template>
  <DataTable
    :value="quoteResponses"
    :expandedRows.sync="expandedRows"
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
    <template #header v-if="listHeading">
      <div class="flex justify-content-between align-items-center">
        <h5 class="m-0">{{ listHeading }}</h5>
      </div>
    </template>
    <Column :expander="true" :headerStyle="{ width: '3rem' }" />
    <Column field="status" header="Status">
      <template #body="{ data: { status } }">
        {{ formatStatus(status) }}
      </template></Column
    >
    <Column header="Shipper Name">
      <template #body="{ data: { quote } }">
        {{
          quote && quote.shipperCompany && quote.shipperCompany.name
            ? quote.shipperCompany.name
            : ''
        }}
      </template>
    </Column>
    <Column header="Equipment Type">
      <template #body="{ data: { quote } }">
        {{ quote && formatStatus(quote.equipmentType) }}
      </template>
    </Column>
    <Column header="Origin">
      <template #body="{ data: { quote } }">
        {{
          quote &&
          quote.stops &&
          quote.stops[0] &&
          formatStateCity(quote.stops[0].city, quote.stops[0].state)
        }}
      </template>
    </Column>
    <Column header="Destination">
      <template #body="{ data: { quote } }">
        {{
          quote &&
          quote.stops &&
          quote.stops.length > 0 &&
          quote.stops[quote.stops.length - 1] &&
          formatStateCity(
            quote.stops[quote.stops.length - 1].city,
            quote.stops[quote.stops.length - 1].state
          )
        }}
      </template>
    </Column>
    <Column header="Miles">
      <template #body="{ data: { quote } }">
        {{ quote && checkValue(quote.distance) }}
      </template>
    </Column>
    <Column header="Trucks Needed">
      <template #body="{ data: { quote } }">
        {{ quote && checkValue(quote.numberOfTrucks) }}
      </template>
    </Column>
    <Column header="Trucks Available">
      <template #body="{ data: { carrierNumberOfTrucks } }">
        {{ checkValue(carrierNumberOfTrucks) }}
      </template>
    </Column>
    <Column header="Urgency Date">
      <template #body="{ data: { quote } }">
        {{ quote && formatDate(quote.urgencyDate) }}
      </template>
    </Column>
    <Column header="Agreed Rate">
      <template #body="{ data: { mutualAgreedRate } }">
        {{ formatCurrencyRate(mutualAgreedRate) }}
      </template>
    </Column>
    <Column header="Book Now Rate">
      <template #body="{ data: { quote } }">
        {{ quote && formatCurrencyRate(quote.bookNowRate) }}
      </template>
    </Column>
    <Column header="Counter Rate">
      <template #body="{ data: { shipperCounterRate } }">
        {{ formatCurrencyRate(shipperCounterRate) }}
      </template>
    </Column>
    <Column header="Submitted Quote">
      <template #body="{ data: { carrierSubmitQuoteRate } }">
        {{ formatCurrencyRate(carrierSubmitQuoteRate) }}
      </template>
    </Column>
    <Column header="Action">
      <template #body="slotProps">
        <div class="flex flex-wrap gap-1">
          <vs-button
            v-if="shouldShowBookNowButton(slotProps.data)"
            color="primary"
            size="small"
            @click="showBookNowConfirmationPopupFun(slotProps.data)"
          >
            Book Now
          </vs-button>
          <vs-button
            v-if="shouldShowSubmitQuoteButton(slotProps.data)"
            color="success"
            size="small"
            @click="showSubmitQuotePopupFun(slotProps.data)"
          >
            Submit Quote
          </vs-button>
        </div>
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
                expandedActiveRows[slotProps.data.id] === item.name
                  ? 'primary'
                  : ''
              "
              @click.native="changeTab(item.name, slotProps)"
            >
              {{ item.title }}
            </vs-chip>
          </div>
        </div>
        <QuoteDetailsCard
          class="mt-4"
          :quotesDetails="{ ...slotProps.data, ...slotProps.data.quote }"
          v-show="
            expandedActiveRows[slotProps.data.id] &&
            expandedActiveRows[slotProps.data.id] === 'details'
          "
        />

        <DataTable
          class="mt-4"
          :value="slotProps.data.loads"
          v-show="
            expandedActiveRows[slotProps.data.id] &&
            expandedActiveRows[slotProps.data.id] === 'loads'
          "
        >
          <Column field="loadNumber" header="Load Number"> </Column>
          <Column field="loadReference" header="Reference"> </Column>
          <Column field="rate" header="Rate">
            <template #body="{ data: { rate } }">
              {{ formatCurrencyRate(rate) }}
            </template>
          </Column>
          <Column field="status" header="Status">
            <template #body="{ data: { status } }">
              {{ formatStatus(status) }}
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
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </template>
    <SubmitQuotePopup
      ref="quotePopup"
      v-if="showSubmitQuotePopup"
      :newQuoteRate="newQuoteRate"
      :quoteValidUntil="quoteValidUntil"
      :numberOfTrucks="numberOfTrucks"
      :showSubmitQuotePopup="showSubmitQuotePopup"
      @submit-request="handleRespondRequests"
      @update:showSubmitQuotePopup="updateShowSubmitQuotePopup"
    />

    <load-sidebar
      v-show="isSidebarActive"
      :isSidebarActive="isSidebarActive"
      @closeSidebar="closeLoadSidebar"
      :data="selectedLoad"
      @refreshCallingUi="getCarrierQuotesList"
    />

    <CarrierBookNowPopup
      v-if="carrierBookNowPopup.isActive"
      :isActive="carrierBookNowPopup.isActive"
      :data="carrierBookNowPopup.data"
      @onSubmit="handleRespondRequests"
      @onClose="toggleCarrierBookNowPopup"
    />
  </DataTable>
</template>
<script>
import { getApiErrorMsg } from '@/helpers/helper';
import QuoteDetailsCard from './components/QuoteDetailsCard.vue';
import SubmitQuotePopup from './components/submitQuotePopup.vue';
import CarrierBookNowPopup from './components/CarrierBookNowPopup.vue';

import quoteCommonFunctions from './mixins/quoteCommonFunctions';

export default {
  name: 'CarrierQuoteList',
  mixins: [quoteCommonFunctions],
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
  components: {
    QuoteDetailsCard,
    SubmitQuotePopup,
    CarrierBookNowPopup,
    LoadSidebar: () => import('@/views/pages/dispatch/load/LoadSidebar.vue'),
  },
  data() {
    return {
      viewOptions: [
        {
          id: 1,
          title: 'Details',
          name: 'details',
          isActive: true,
        },
        {
          id: 2,
          title: 'Loads',
          name: 'loads',
          isActive: true,
        },
      ],
      quoteResponses: [],
      expandedRows: [],
      showSubmitQuotePopup: false,
      newQuoteRate: '',
      quoteValidUntil: '',
      numberOfTrucks: null,
      carrierData: null,
      rows: 25,
      totalRecords: 0,
      isSidebarActive: false,
      selectedLoad: {
        loadId: null,
      },
      expandedActiveRows: {},
      carrierBookNowPopup: {
        isActive: false,
        data: {},
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    async handleRespondRequests(data) {
      // console.log(data);
      if (this.showSubmitQuotePopup) {
        let isValid = false;
        isValid = await this.$refs.quotePopup.validateForm();
        if (!isValid) return;
        this.showSubmitQuotePopup = data.showSubmitQuotePopup;
        this.newQuoteRate = data.newQuoteRate;
        this.quoteValidUntil = data.quoteValidUntil;
        this.numberOfTrucks = data.numberOfTrucks;
      }
      this.$vs.loading();
      const quote = this.carrierData.quote;

      const payload = {
        quotes: [
          {
            id: quote.id,
            shipperCompanyId: quote.shipperCompany.id,
            token: String(quote.token),
            responseType: !this.showSubmitQuotePopup
              ? 'bookNow'
              : 'submitQuote',
          },
        ],
      };
      if (payload.quotes[0].responseType === 'bookNow') {
        payload.quotes[0].carrierNumberOfTrucks = data.submittedNumberOfTrucks;
        payload.quotes[0].bookNow = {
          rate: Math.max(
            Number(quote.bookNowRate),
            Number(this.carrierData.shipperCounterRate)
          ),
        };
      } else if (payload.quotes[0].responseType === 'submitQuote') {
        payload.quotes[0].carrierNumberOfTrucks = this.numberOfTrucks;
        payload.quotes[0].submitQuote = {
          rate: this.newQuoteRate,
          quoteValidUntil: this.quoteValidUntil,
        };
      }
      this.$store
        .dispatch('quote/respondRequests', payload)
        .then((data) => {
          if (data.result) {
            this.$vs.notify({
              time: 8000,
              color: 'success',
              title: 'Success',
              text: 'Quote updated successfully',
            });
            this.init();
            this.showSubmitQuotePopup = false;
            this.newQuoteRate = '';
            this.quoteValidUntil = '';
            this.numberOfTrucks = null;
            this.toggleCarrierBookNowPopup();
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
    showSubmitQuotePopupFun(data) {
      this.carrierData = data;
      this.showSubmitQuotePopup = true;
    },
    showBookNowConfirmationPopupFun(data) {
      this.carrierData = data;
      const rate = Math.max(
        Number(data.quote.bookNowRate),
        Number(data.shipperCounterRate)
      );

      this.carrierBookNowPopup = {
        isActive: true,
        data: {
          ...data,
          rate,
        },
      };
    },
    toggleCarrierBookNowPopup() {
      this.carrierBookNowPopup = {
        isActive: false,
        data: {},
      };
    },
    shouldShowSubmitQuoteButton(data) {
      return data.mutualAgreedRate === null;
    },
    shouldShowBookNowButton(data) {
      return (
        data.mutualAgreedRate === null &&
        (data.quote.bookNowRate !== null || data.shipperCounterRate !== null)
      );
    },

    async init() {
      try {
        const payload = {
          filters: {
            status: this.activeTab,
          },
          pageSize: 25,
          page: 1,
        };
        this.$vs.loading();
        await this.getCarrierQuotesList(payload);
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
    async getCarrierQuotesList({
      pageSize = 25,
      page = 1,
      filters = { status: this.activeTab },
    }) {
      try {
        const res = await this.$store.dispatch('quote/getCarrierQuotesList', {
          filters,
          pageSize,
          page,
        });
        // console.log(res);
        this.quoteResponses = res.data.payload.quoteResponses;
        const { meta } = (res.data || {}).payload || {};
        const { totalItems } = meta || {};
        this.totalRecords = totalItems || 0;
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
    editQuote(quoteId) {
      if (quoteId) {
        this.$emit('editQuote', quoteId);
      }
    },
    updateShowSubmitQuotePopup(value) {
      this.showSubmitQuotePopup = value;
    },
    onPage({ page, rows }) {
      this.getCarrierQuotesList({
        pageSize: rows,
        page: page + 1,
        filters: { status: this.activeTab },
      });
    },
    editLoad(loadId) {
      if (loadId) {
        this.selectedLoad.loadId = loadId;
        this.isSidebarActive = true;
      }
    },
    closeLoadSidebar() {
      this.isSidebarActive = false;
      this.selectedLoad.loadId = null;
    },
    onRowExpand({ data: { id } }) {
      this.expandedActiveRows[id] = 'details';
    },
    onRowCollapse({ data: { id } }) {
      delete this.expandedActiveRows[id];
    },
  },
  watch: {
    activeTab: {
      handler(val) {
        this.init();
      },
    },
  },
};
</script>
<style></style>
