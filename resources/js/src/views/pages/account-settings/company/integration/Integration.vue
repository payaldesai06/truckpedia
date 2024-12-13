<template>
  <div>
    <vs-breadcrumb class="options">
      <li v-for="item in filteredTabOptions" :key="item">
        <template v-if="checkRole(item)">
          <a
            href="javascript:void(0)"
            :class="{ active: item === selectedOption }"
            @click="handleOptionActive(item)"
            >{{ item }}</a
          >
          <span class="vs-breadcrum--separator">|</span>
        </template>
      </li>
    </vs-breadcrumb>

    <div v-if="selectedOption === 'Factoring'" aria-label="Factoring">
      <div class="flex items-center">
        <div class="img-logo">
          <img src="@assets/images/tafs/tafs-logo.svg" class="mt-5 img-logo" />
        </div>
      </div>

      <IntegrationTable
        @handleSetting="handleIntergationSetting"
        :data="[
          {
            carrier: parentCompanyName,
            connectionStatus: tafsConnectionStatus,
            partner: 'TAFS',
            tagId: '',
            hideDropdown: true,
          },
        ]"
      />
    </div>
    <div v-if="selectedOption === 'Tracking'" aria-label="Tracking">
      <div class="flex items-center">
        <div class="img-logo">
          <img
            src="@assets/images/samsara/samsara_logo.svg"
            class="mt-5 img-logo"
          />
        </div>

        <div class="img-logo">
          <img
            src="@assets/images/keeptruckin/motive-dark-logo.svg"
            class="mt-5 ml-10 img-logo"
          />
        </div>
      </div>

      <IntegrationTable
        @handleConnect="tableConnectButton"
        @handleDisconnect="tableDisconnectButton"
        :data="[
          {
            carrier: parentCompanyName,
            connectionStatus: samsaraConnectionStatus,
            partner: 'Samsara',
            tagId: '',
          },
          {
            carrier: parentCompanyName,
            connectionStatus: keepTruckinConnectionStatus,
            partner: 'Motive',
            tagId: '',
          },
        ]"
      />
    </div>

    <div v-if="selectedOption === 'Accounting'" aria-label="Accounting">
      <div
        style="img-logo; max-width: 20%;max-height: 20%;display: inline-block;"
      >
        <img
          src="@assets/images/quickbooks/QBOnline_logo.png"
          class="mt-5 img-logo"
        />
      </div>
      <div
        style="img-logo; max-width: 20%;max-height: 20%;display: inline-block;"
      >
        <img
          src="@assets/images/quickbooks/QBDesktop_logo.png"
          class="mt-5 img-logo"
        />
      </div>

      <div v-if="qbdConnectionPassword.length > 0" class="vx-col w-full mb-8">
        <b
          >QuickBooks Desktop connection password (please write down and keep
          this for QBWC):</b
        >
        <span>{{ qbdConnectionPassword }}</span>
      </div>

      <div>
        <IntegrationTable
          @handleConnect="tableConnectButton"
          @handleDisconnect="tableDisconnectButton"
          :data="accounting"
        />
      </div>
    </div>

    <div v-if="selectedOption === 'Fuel Card'" aria-label="Fuel Card">
      <div class="flex items-center">
        <div class="img-logo">
          <img
            alt="Wex Logo"
            src="@assets/images/wex/wex_logo.svg"
            class="mt-5 img-logo fix-logo-height"
          />
        </div>
        <div class="img-logo">
          <img alt="Wex Logo" src="@assets/images/wex/EFS.svg" class="mt-5" />
        </div>
        <div class="img-logo">
          <img
            alt="Wex Logo"
            src="@assets/images/wex/fleet_one.svg"
            class="mt-5"
          />
        </div>
      </div>
      <IntegrationTable
        @handleSetting="handleIntergationSetting"
        :data="[
          {
            carrier: parentCompanyName,
            connectionStatus: wexConnectionStatus,
            partner: 'Wex',
            tagId: '',
            hideDropdown: true,
          },
        ]"
      />
    </div>

    <!-- <div v-if="selectedOption === 'Load Board'" aria-label="Load Board">
      <div>
        <div class="flex items-center" style="max-height: 130px">
          <div class="img-logo">
            <img
              src="@assets/images/external-load-boards/DAT-logo.svg"
              class="img-logo"
            />
          </div>
          <div class="img-logo">
            <img
              src="@assets/images/external-load-boards/truckstop-logo.svg"
              class="img-logo"
            />
          </div>
          <div class="img-logo">
            <img
              src="@assets/images/external-load-boards/chrobinson-logo.svg"
              class="img-logo"
            />
          </div>
        </div>

        <IntegrationTable
          @handleSetting="handleIntergationSetting"
          :data="[
            {
              carrier: parentCompanyName,
              connectionStatus: datConnectionStatus,
              partner: 'DAT',
              hideDropdown: true,
              tagId: '',
            },
            {
              carrier: parentCompanyName,
              connectionStatus: truckstopConnectionStatus,
              hideDropdown: true,
              partner: 'Truckstop',
              tagId: '',
            },
            {
              carrier: parentCompanyName,
              connectionStatus: chrobinsonConnectionStatus,
              hideDropdown: true,
              partner: 'C.H. Robinson',
              tagId: '',
            },
          ]"
        />
      </div>
    </div> -->

    <div v-if="selectedOption === 'Routing'" aria-label="Routing">
      <div class="mt-10">
        <div class="flex items-center" style="max-height: 130px">
          <div class="img-logo">
            <img
              src="@assets/images/external-routing/pcmiler-logo.png"
              class="img-logo"
            />
          </div>
        </div>

        <IntegrationTable
          @handleSetting="handleIntergationSetting"
          :data="[
            {
              carrier: parentCompanyName,
              connectionStatus: pcmilerConnectionStatus,
              partner: 'PC MILER',
              hideDropdown: true,
              tagId: '',
            },
          ]"
        />
      </div>
    </div>

    <div v-if="selectedOption === 'Payment'" aria-label="Payment">
      <div class="flex items-center">
        <div class="img-logo">
          <img
            alt="authorizeNetLogo"
            src="@assets/images/payment/authorizeNet.svg"
            class="mt-5 img-logo"
          />
        </div>
        <div class="img-logo ml-6">
          <img
            alt="melio"
            src="@assets/images/payment/melio.png"
            class="mt-5 img-logo"
          />
        </div>
      </div>
      <IntegrationTable
        @handleSetting="handleIntergationSetting"
        @handleConnect="handleMelioConnection"
        :data="[
          {
            carrier: parentCompanyName,
            connectionStatus: authorizeNetConnectionStatus,
            partner: 'Authorize.Net',
            hideDropdown: true,
          },
          {
            carrier: parentCompanyName,
            connectionStatus: melioConnectionStatus,
            partner: 'Melio Payment',
            tagId: '',
          },
        ]"
      />
    </div>

    <vs-popup title="" :active.sync="datServicePopup">
      <dat-popup @handleDatStatus="getDatConnectionsStatus"></dat-popup>
    </vs-popup>
    <vs-popup title="" :active.sync="wexServicePopup">
      <wex-popup
        @handleWexStatus="getWexConnectionsStatus"
        @closePopup="closePopup('Wex')"
      ></wex-popup>
    </vs-popup>
    <vs-popup class="tafs-popup" title="" :active.sync="tafsPopup">
      <tafs-popup
        :tafsData="tafsData"
        @handleTafsStatus="getTafsConnectionAccounts"
        @closePopup="closePopup('TAFS')"
      ></tafs-popup>
    </vs-popup>
    <vs-popup title="" :active.sync="truckstopPopup">
      <truck-stop-popup
        @handleTruckStopStatus="getTruckStopConnectionStatus"
      ></truck-stop-popup>
    </vs-popup>
    <vs-popup title="" :active.sync="chrobinsonPopup">
      <c-h-robinson-popup
        @handleCHRobinsonStatus="getCHRobinsonConnectionStatus"
      ></c-h-robinson-popup>
    </vs-popup>
    <vs-popup title="" :active.sync="pcmilerPopup">
      <PCMILERPopup @pcmStatus="setPcmStatus"></PCMILERPopup>
    </vs-popup>
    <vs-popup title="" :active.sync="authorizeNetPopup">
      <AuthorizeNetPopup
        :isActive="authorizeNetPopup"
        @closePopup="authorizeNetPopup = false"
        @authorizeNetConnectionStatus="getAuthorizeNetConnectionStatus"
      ></AuthorizeNetPopup>
    </vs-popup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IntegrationTable from './components/IntegrationTable';
import DatPopup from './components/DatPopup.vue';
import WexPopup from './components/WexPopup.vue';
import TafsPopup from './components/TafsPopup.vue';
import TruckStopPopup from './components/TruckStopPopup.vue';
import CHRobinsonPopup from './components/CHRobinsonPopup.vue';
import PCMILERPopup from './components/PCMILERPopup.vue';
import AuthorizeNetPopup from './components/AuthorizeNetPopup.vue';
import config from '@/config/constants';
import globalMixins from '@/mixins/globalMixins';
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'Integration',

  components: {
    IntegrationTable,
    DatPopup,
    TruckStopPopup,
    CHRobinsonPopup,
    PCMILERPopup,
    WexPopup,
    AuthorizeNetPopup,
    TafsPopup,
  },

  data() {
    return {
      parentCompanyName: '',
      samsaraConnectionStatus: '',
      keepTruckinConnectionStatus: '',
      datConnectionStatus: '',
      truckstopConnectionStatus: '',
      chrobinsonConnectionStatus: '',
      pcmilerConnectionStatus: '',
      authorizeNetConnectionStatus: '',
      wexConnectionStatus: '',
      melioConnectionStatus: '',
      tafsConnectionStatus: '',
      tags: [],
      accounting: [],
      qbOnline: [],
      qbDesktop: [],
      qbdConnectionPassword: '',
      selectedOption: 'Accounting',
      options: [
        'Accounting',
        'Fuel Card',
        'Payment',
        'Factoring',
        'Routing',
        'Tracking',
      ],
      datServicePopup: false,
      wexServicePopup: false,
      truckstopPopup: false,
      chrobinsonPopup: false,
      pcmilerPopup: false,
      authorizeNetPopup: false,
      tafsPopup: false,
      tafsData: null,
    };
  },

  mixins: [globalMixins],

  computed: {
    ...mapGetters('auth', { authUser: 'user' }),
    ...mapGetters('auth', ['companyFeatureAccess']),
    ...mapGetters('pcmiler', ['pcmiler']),

    /*showFuelCardForSpecificCompany() {
      if (
        this.authUser &&
        this.authUser.admin_company_details &&
        config.showFuelCardForSpecificCompanyId.includes(
          this.authUser.admin_company_details.admin_company_detail_id
        )
      ) {
        return true;
      }
      return false;
    },*/

    filteredTabOptions() {
      //if (this.showFuelCardForSpecificCompany) {
      if (
        this.companyFeatureAccess.includes('basic') ||
        this.companyFeatureAccess.includes('noTms')
      ) {
        this.handleOptionActive('Tracking');
        return ['Tracking'];
      }
      return this.options;
      //}
      /*
      return this.options.filter((tab) => {
        if (tab == "Fuel Card") {
          return false;
        }
        return true;
      });
      */
    },
  },

  created: async function () {
    this.parentCompanyName = this.authUser.admin_company_details.business_name;
    // Now we only allow admin to see integration.
    if (this.authUser.role != 'dispatcher') {
      this.getSamsaraConnectionStatus();
      this.getKeepTruckinConnectionStatus();
      this.getParentAndTagsConnections();
    }
    //this.getDatConnectionsStatus();
    this.getWexConnectionsStatus();
    //this.getTruckStopConnectionStatus();
    //this.getCHRobinsonConnectionStatus();
    this.getAuthorizeNetConnectionStatus();
    this.getMelioConnectionStatus();
    // get the tafs accounts
    this.getTafsConnectionAccounts();
  },

  methods: {
    setPcmStatus(pcmStatus) {
      if (pcmStatus) {
        this.pcmilerConnectionStatus = 'Connected';
      } else {
        this.pcmilerConnectionStatus = 'Not connected';
      }
      setTimeout(() => {
        this.pcmilerPopup = false;
      }, 200);
    },

    checkRole(item) {
      if (this.authUser.role === 'dispatcher') {
        if (
          item === 'Tracking' ||
          item === 'Accounting' ||
          item === 'Fuel Card' ||
          item === 'Payment' ||
          item === 'Factoring'
        ) {
          return false;
        }
      }
      return true;
    },

    handleIntergationSetting(partner) {
      if (partner == 'DAT') {
        this.datServicePopup = true;
      } else if (partner == 'Truckstop') {
        this.truckstopPopup = true;
      } else if (partner == 'C.H. Robinson') {
        this.chrobinsonPopup = true;
      } else if (partner == 'PC MILER') {
        this.pcmilerPopup = true;
      } else if (partner == 'Wex') {
        this.wexServicePopup = true;
      } else if (partner == 'Authorize.Net') {
        this.authorizeNetPopup = true;
      } else if (partner === 'TAFS') {
        this.tafsPopup = true;
      }
    },
    closePopup(partner) {
      if (partner === 'Wex') {
        this.wexServicePopup = false;
      } else if (partner === 'TAFS') {
        this.tafsPopup = false;
      }
    },

    handleOptionActive(title) {
      this.selectedOption = title;
      if (title == 'Routing') {
        if (this.pcmiler.apiKey) {
          this.pcmilerConnectionStatus = 'Connected';
        } else {
          this.pcmilerConnectionStatus = 'Not connected';
        }
      }
    },

    async getParentAndTagsConnections() {
      const { payload } = await this.$store.dispatch('tag/getAllTags');
      this.tags = payload.data;

      this.$store
        .dispatch('quickbooks/getConnectionStatusAll')
        .then((allStatus) => {
          this.qbOnline.push({
            carrier: this.parentCompanyName,
            connectionStatus: allStatus.parentStatus,
            partner: 'QuickBooks Online',
            tagId: '',
          });

          this.tags.forEach((tag) => {
            allStatus.tags.forEach((tagResult) => {
              if (tag.tag_id == tagResult.tagId) {
                this.qbOnline.push({
                  carrier: tag.business_name,
                  connectionStatus: tagResult.status,
                  partner: 'QuickBooks Online',
                  tagId: tag.tag_id,
                });
              }
            });
          });

          this.accounting = [...this.qbOnline, ...this.qbDesktop];
        });

      this.$store.dispatch('qbd/getConnectionStatusAll').then((allStatus) => {
        this.qbDesktop.push({
          carrier: this.parentCompanyName,
          connectionStatus: allStatus.parentStatus,
          partner: 'QuickBooks Desktop',
          tagId: '',
        });

        this.tags.forEach((tag) => {
          allStatus.tags.forEach((tagResult) => {
            if (tag.tag_id == tagResult.tagId) {
              this.qbDesktop.push({
                carrier: tag.business_name,
                connectionStatus: tagResult.status,
                partner: 'QuickBooks Desktop',
                tagId: tag.tag_id,
              });
            }
          });
        });

        this.accounting = [...this.qbOnline, ...this.qbDesktop];
      });
    },

    tableConnectButton(partner, tagId = '') {
      if (partner == 'Samsara') {
        this.connectSamsara();
      } else if (partner == 'Motive') {
        this.connectKeepTruckin();
      } else if (partner == 'QuickBooks Online') {
        this.connectQbo(tagId);
      } else if (partner == 'QuickBooks Desktop') {
        this.connectQbd(tagId);
      }
    },

    tableDisconnectButton(partner, tagId = '') {
      if (partner == 'Samsara') {
        this.disconnectSamsara();
      } else if (partner == 'Motive') {
        this.disconnectKeepTruckin();
      } else if (partner == 'QuickBooks Online') {
        this.disconnectQbo(tagId);
      } else if (partner == 'QuickBooks Desktop') {
        this.disconnectQbd(tagId);
      }
    },

    async connectQbo(tagId = null) {
      try {
        const payload = { tag_id: tagId };
        await this.$store
          .dispatch('quickbooks/connectToQuickbooks', payload)
          .then((data) => {
            window.open(data, '_blank');
          });
      } catch (error) {
        console.log(error);
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async disconnectQbo(tagId = '') {
      try {
        await this.$store
          .dispatch('quickbooks/disconnectToQuickbooks', tagId)
          .then((data) => {
            window.location.href = data;
          });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
        console.error(error);
      }
    },

    async connectQbd(tagId = null) {
      try {
        const payload = { tag_id: tagId };
        await this.$store
          .dispatch('qbd/connectToQuickbooks', payload)
          .then((data) => {
            // ['qbd_username' => 'value', 'qbd_password' => 'value','xml' => 'xml']
            this.qbdConnectionPassword = data.payload.qbd_password;
            const qwc = document.createElement('a'); // Create "a" element
            const blob = new Blob([data.payload.xml], { type: 'text/xml' }); // Create a blob (file-like object)
            const url = URL.createObjectURL(blob); // Create an object URL from blob
            qwc.setAttribute('href', url); // Set "a" element link
            qwc.setAttribute('download', 'ezpapel.qwc'); // Set download filename
            qwc.click();
          });
      } catch (error) {
        console.log(error);
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async disconnectQbd(tagId = '') {
      try {
        await this.$store
          .dispatch('qbd/disconnectToQuickbooks', tagId)
          .then((data) => {
            window.location.href = data;
          });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
        console.error(error);
      }
    },

    /* samsara */
    async getSamsaraConnectionStatus() {
      try {
        await this.$store
          .dispatch('samsara/getConnectionStatus')
          .then((data) => {
            this.samsaraConnectionStatus = data;
          });
      } catch (error) {
        console.error(error);
      }
    },

    async connectSamsara() {
      try {
        await this.$store.dispatch('samsara/connectToSamsara').then((data) => {
          window.open(data, '_blank');
        });
      } catch (error) {
        console.error(error);
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async disconnectSamsara() {
      try {
        await this.$store
          .dispatch('samsara/disconnectToSamsara')
          .then((data) => {
            window.location.href = data;
          });
      } catch (error) {
        console.error(error);
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    /* keepInTruck methods */
    async getKeepTruckinConnectionStatus() {
      try {
        await this.$store
          .dispatch('keepTruckin/getConnectionStatus')
          .then((msg) => {
            this.keepTruckinConnectionStatus = msg;
          });
      } catch (error) {
        console.error(error);
      }
    },

    async connectKeepTruckin() {
      try {
        await this.$store
          .dispatch('keepTruckin/connectToKeepTruckin')
          .then((data) => {
            window.open(data, '_blank');
          });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async disconnectKeepTruckin() {
      try {
        await this.$store
          .dispatch('keepTruckin/disconnectToKeepTruckin')
          .then((data) => {
            window.location.href = data;
          });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    // WEX Methods
    async getWexConnectionsStatus() {
      this.$store.dispatch('wex/getConnectionStatus').then((data) => {
        this.wexConnectionStatus = data.message;
        localStorage.setItem('wexConnectionStatus', data.message);
      });
    },

    // DAT Methods
    async getDatConnectionsStatus() {
      this.$store.dispatch('dat/connectionStatus').then((data) => {
        this.datConnectionStatus = data.message;
        localStorage.setItem('datConnectionStatus', data.message);
      });
    },

    // Truck Stop
    async getTruckStopConnectionStatus() {
      this.$store.dispatch('truckstop/connectionStatus').then((data) => {
        this.truckstopConnectionStatus = data.message;
        localStorage.setItem('truckstopConnectionStatus', data.message);
      });
    },

    // CH Robinson
    async getCHRobinsonConnectionStatus() {
      this.$store.dispatch('chrobinson/connectionStatus').then((data) => {
        this.chrobinsonConnectionStatus = data.message;
        localStorage.setItem('chrobinsonConnectionStatus', data.message);
      });
    },

    // Payments
    async getAuthorizeNetConnectionStatus() {
      this.$store.dispatch('authorize/connectionStatus').then((data) => {
        this.authorizeNetConnectionStatus = data.message;
        localStorage.setItem('authorizeConnectionStatus', data.message);
      });
    },

    async getMelioConnectionStatus() {
      try {
        const { data } = await this.$store.dispatch('melio/connectionStatus');
        // BE is returning `notConnected` and `connected` but we need `Not connected` and `Connected` for FE due to common component
        this.melioConnectionStatus =
          data.payload === 'notConnected' ? 'Not connected' : 'Connected';
      } catch (error) {
        console.log(error, 'error');
      }
    },

    async getTafsConnectionAccounts() {
      try {
        const { data } = await this.$store.dispatch('tafs/getAccounts');
        this.tafsConnectionStatus = data.payload.accounts.length
          ? 'Connected'
          : 'Not connected';
        this.tafsData = data.payload.accounts.length
          ? data.payload.accounts[0]
          : null;
      } catch (error) {
        console.log(error, 'error');
      }
    },

    async handleMelioConnection() {
      try {
        this.$vs.loading();
        const {
          data: {
            payload: { melioUrl },
          },
        } = await this.$store.dispatch('melio/onboardingUrl');
        if (melioUrl) {
          window.open(melioUrl, '_blank');
        }
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  img {
    @apply object-cover;
  }
  .vs-breadcrumb--ol {
    z-index: 2000 !important;
  }
}

.vs-breadcrumb--ol .active {
  color: rgba(0, 0, 0, 0.4);
}

.vs-breadcrumb--ol a {
  color: #7367f0;
}

.vs-breadcrumb--ol a:not(.active) {
  border-bottom: 1px solid;
}

.img-logo {
  width: 200px;
  z-index: 1;
}

.fix-logo-height {
  height: 90px !important;
}

.img-logo img {
  width: 100%;
  height: 100%;
}

.tafs-popup {
  z-index: 20000;
}
</style>
