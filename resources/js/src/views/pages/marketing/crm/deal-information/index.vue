<template>
  <div>
    <vx-card class="deal-information">
      <div
        class="inline-flex items-center heading mb-3 cursor-pointer"
        @click.stop="backToPipeline"
      >
        <vs-icon size="30px" icon="chevron_left" />
        <h4 class="fw-bold ml-2 mt-1">Deal Information</h4>
      </div>

      <div
        class="vx-row m-0 flex justify-between w-full deal-info"
        v-if="Object.keys(selectedDeal).length"
      >
        <div class="vx-col w-1/3 px-0 left-col">
          <div class="mb-3">
            <DealName @toggleDealSidebar="toggleDealSidebar(true)" />
          </div>
          <div class="mb-3">
            <ContactInfo :contacts="contacts" />
          </div>
          <div>
            <Tasks />
          </div>
        </div>

        <div class="vx-col w-2/3 pr-0">
          <DealTabs />
        </div>
      </div>
    </vx-card>
    <pipeline-deal-sidebar
      :isActive="dealSidebar.isActive"
      :dealSidebar="dealSidebar"
      @dealAdded="getSelectedDeal"
      @closeSidebar="toggleDealSidebar(false)"
    />
  </div>
</template>

<script>
import ContactInfo from './components/ContactInfo.vue';
import DealName from './components/DealName.vue';
import DealTabs from './components/DealTablist.vue';
import Tasks from './components/TasksAndUpcomings.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'deal-information',
  components: {
    DealTabs,
    DealName,
    ContactInfo,
    Tasks,
    PipelineDealSidebar: () => import('../components/PipelineDealSidebar.vue'),
  },
  data() {
    return {
      contacts: [],
      dealSidebar: {
        isActive: false,
        data: {},
      },
    };
  },
  computed: {
    ...mapGetters('marketing', [
      'selectedDeal',
      'pipelines',
      'selectedPipeline',
    ]),
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.$store.commit('marketing/setSelectedDeal', {});
      try {
        this.$vs.loading();
        if (!this.pipelines.length) {
          await this.$store.dispatch('marketing/setMarketingPipelines');
          this.$store.commit(
            'marketing/setSelectedPipeline',
            this.pipelines[0]
          );
          this.getDealsForPipeline();
        }
        await this.getSelectedDeal();
      } catch (error) {
        console.error(error);
      } finally {
        this.$vs.loading.close();
      }
    },
    async getSelectedDeal() {
      try {
        const { id } = this.$route.params;
        const { data } = await this.$store.dispatch(
          'marketing/getSingleDeal',
          id
        );
        this.$store.commit('marketing/setSelectedDeal', data.payload.deal);
        await this.getContacts();
      } catch (error) {
        console.error(error);
      }
    },
    async getDealsForPipeline() {
      try {
        const payload = {
          pipelineIds: [this.selectedPipeline.id],
          fields: [
            'stage',
            'assignees',
            'estimatedCloseDate',
            'amount',
            'phone',
            'customer',
          ],
        };
        const { data } = await this.$store.dispatch(
          'marketing/getDeals',
          payload
        );
        this.$store.commit('marketing/setAllDeals', data.payload.deals);
      } catch (error) {
        console.log(error, 'error');
      }
    },
    async getContacts() {
      try {
        const { data } = await this.$store.dispatch('marketing/getContacts', {
          dealId: Object.keys(this.selectedDeal).length
            ? this.selectedDeal.id
            : this.$route.params.id,
          fields: ['email', 'phone'],
        });

        this.contacts = data.payload.contacts || [];
        this.$store.commit('marketing/setDealContacts', this.contacts);
      } catch (error) {
        console.log(error);
      }
    },
    backToPipeline() {
      this.$router.push({
        name: 'marketing-crm',
      });
    },
    toggleDealSidebar(isActive = false) {
      this.dealSidebar.isActive = isActive;
      this.dealSidebar.data = isActive ? this.selectedDeal : {};
    },
  },
};
</script>

<style lang="scss">
$light-color: rgba(0, 0, 0, 0.1);
.deal-information {
  box-shadow: none;
  .info-box {
    background-color: #f7f8f9;
    padding: 15px;
    border-radius: 7px;
    min-height: 100%;
  }
  .no-data-found {
    border-radius: 10px;
    background: var(--Primary-Primary-50, #e7f1fe);
  }

  .p-dialog-header-icons {
    display: none;
  }
}
.action-btn {
  font-size: 1rem !important;
}
</style>
