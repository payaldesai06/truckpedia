<template>
  <div>
    <!-- Turn on later when needed.
      <ul class="tabs" v-if="brokerModeForSpecificCompany">
      <li
        class="tab"
        :class="{ active: activeTabList === 'carrier' }"
        @click="activeTabList = 'carrier'"
      >
        Quotes As Carrier
      </li>
      <li
        class="tab"
        :class="{ active: activeTabList === 'broker' }"
        @click="activeTabList = 'broker'"
      >
        Quotes As Broker
      </li>
    </ul>
    -->

    <div class="flex items-center">
      <vs-button
        color="primary"
        type="filled"
        v-if="isUserBrokerOrShipper"
        @click="openQuotePopup"
        >New</vs-button
      >
      <ul class="flex space-x-4 ml-2 mr-4">
        <li
          class="font-medium text-md cursor-pointer invisible-border"
          @click="changeTab('active')"
          :class="{ active: activeStatusTab === 'active' }"
        >
          Active
        </li>
        <li
          v-if="!isUserBrokerOrShipper"
          class="font-medium text-md cursor-pointer invisible-border"
          @click="changeTab('acceptedAndCanceled')"
          :class="{ active: activeStatusTab === 'acceptedAndCanceled' }"
        >
          Accepted
        </li>
        <li
          class="font-medium text-md cursor-pointer invisible-border"
          @click="changeTab('expired')"
          :class="{ active: activeStatusTab === 'expired' }"
        >
          Expired
        </li>
      </ul>
    </div>

    <vs-popup title="" :active.sync="quotePopup" fullscreen class="quotes">
      <div>
        <CarriersDetails
          v-if="showCarriersDetails"
          v-model="quotesDetails"
          @backToQuotes="
            (showCarriersDetails = false), (showQuotesEmails = false)
          "
          @processQuotesEmails="setShowQuotesEmails"
        />
        <SendQuoteEmail
          v-if="showQuotesEmails && !showCarriersDetails"
          @backToQuotes="showCarriersDetails = false"
          :selectedCarriers="selectedCarriers"
          :quotesDetails="quotesDetails"
          @submitCreateEditQuote="submitCreateEditQuote"
          @goBack="showCarriersDetails = true"
        />
        <component
          ref="quoteRefs"
          v-if="!showCarriersDetails && !showQuotesEmails && quotePopup"
          :is="activeTab"
          :quotesDetails="quotesDetails"
          @processCarrierDetails="setShowCarrierDetails"
        />
      </div>
    </vs-popup>
    <div class="mt-5">
      <ShipperQuoteList
        v-if="isUserBrokerOrShipper"
        @editQuote="editQuote"
        :key="componentKey"
        :activeTab="activeStatusTab"
      />
      <template v-else>
        <CarrierQuoteList
          @editQuote="editQuote"
          :activeTab="activeStatusTab"
          :key="componentKey"
          v-if="activeTabList === 'carrier'"
        />

        <!-- turn on later when needed
        <div v-if="brokerModeForSpecificCompany && activeTabList === 'broker'">
          <ShipperQuoteList
            class="mt-5"
            @editQuote="editQuote"
            :key="componentKey"
          />
        </div>
        -->
      </template>
    </div>
  </div>
</template>

<script>
import CreateEditQuote from './CreateEditQuote.vue';
import CarriersDetails from './CarriersDetails.vue';
import SendQuoteEmail from './SendQuoteEmail.vue';
import { mapGetters } from 'vuex';
import CarrierQuoteList from './CarrierQuoteList.vue';
import ShipperQuoteList from './ShipperQuoteList.vue';
import config from '@/config/constants.js';
import { getApiErrorMsg } from '@/helpers/helper';
export default {
  name: 'Index',
  components: {
    CreateEditQuote,
    CarriersDetails,
    SendQuoteEmail,
    CarrierQuoteList,
    ShipperQuoteList,
  },
  computed: {
    ...mapGetters('auth', [
      'userRole',
      'user',
      'isUserBrokerOrShipper',
      'companyFeatureAccess',
    ]),
    activeTab() {
      return this.tabs.find((tab) => tab.isActive).componentName;
    },
    brokerModeForSpecificCompany() {
      return (
        config.showBrokerModeForSpecificCompanyIds.includes(
          this.user.admin_company_detail_id
        ) || this.companyFeatureAccess.includes('brokerModeForCarrier')
      );
    },
    displayOnCondition() {
      return this.brokerModeForSpecificCompany;
    },
  },
  data() {
    return {
      // Vikas you mess up this in this past. I hope you don't mess up it again. For carrier with broker feature, I shall see 2 tabs: "Quotes As Carrier" and "Quotes As Broker". Each tab has one list. Not 2 lists on the same page!!!
      tabs: [
        {
          id: 1,
          title: 'New Quote',
          componentName: 'CreateEditQuote',
          isActive: true,
        },
      ],
      quotePopup: false,
      showCarriersDetails: false,
      showQuotesEmails: false,
      quotesDetails: {},
      componentKey: 0,
      selectedCarriers: [],
      activeTabList: 'carrier',
      activeStatusTab: 'active',
    };
  },

  methods: {
    changeTab(activeTab) {
      this.activeStatusTab = activeTab;
    },
    openQuotePopup() {
      this.quotePopup = true;
      // this.$refs.quoteRefs.resetDetails();
      this.showQuotesEmails = false;
      this.showCarriersDetails = false;
    },
    setShowQuotesEmails(selectedCarriers) {
      this.showQuotesEmails = true;
      this.showCarriersDetails = false;
      this.selectedCarriers = selectedCarriers;
    },
    setShowCarrierDetails(quotesDetails, tab) {
      this.quotesDetails = quotesDetails;

      if (tab === 'saveCarrierDetails') {
        this.submitCreateEditQuote();
      } else {
        this.showCarriersDetails = true;
        this.showQuotesEmails = false;
      }
    },
    submitCreateEditQuote(emailData) {
      const payload = {
        ...this.quotesDetails,
      };
      if (payload.bookNowRate === '') {
        payload.bookNowRate = null;
      }
      if (emailData) {
        payload.requestQuoteFromMyCarriers = {
          email: emailData,
        };
      } else {
        delete payload.requestQuoteFromMyCarriers;
      }
      if (payload.id) {
        this.$store
          .dispatch('quote/updateQuote', payload)
          .then(() => {
            this.quotePopup = false;
            this.$vs.notify({
              color: 'success',
              title: 'Success',
              text: 'Quote updated Successfully',
            });
            this.componentKey++;
          })
          .catch((error) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: getApiErrorMsg(error),
            });
          });
      } else {
        this.$store
          .dispatch('quote/createQuote', payload)
          .then(() => {
            this.quotePopup = false;
            this.$vs.notify({
              color: 'success',
              title: 'Success',
              text: 'Quote created Successfully',
            });
            this.componentKey++;
          })
          .catch((error) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: getApiErrorMsg(error),
            });
          });
      }
    },
    async editQuote(quoteId) {
      try {
        const {
          data: { payload },
        } = await this.$store.dispatch('quote/getQuote', quoteId);

        if (payload) {
          this.openQuotePopup();
          this.quotesDetails = payload;
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
  watch: {
    quotePopup(val) {
      if (!val) {
        console.log('Popup closed');
        this.quotesDetails = {};
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.invisible-border {
  border: 1px solid transparent;
}
.active {
  border-bottom: 2px solid rgba(var(--vs-primary), 1);
  color: rgba(var(--vs-primary), 1) !important;
}

.tabs {
  display: flex;
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.tab {
  margin-right: 10px;
  cursor: pointer;
}

.tab.active {
  font-weight: bold;
}
</style>

<style>
.quotes .vs-popup--header {
  background: none !important;
}

.quotes.con-vs-popup {
  z-index: 20000 !important;
}
</style>
