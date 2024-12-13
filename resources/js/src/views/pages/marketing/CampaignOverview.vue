<template>
  <div>
    <Breadcrumb :home="home" :model="breadcrumbItems" class="pl-2" />
    <div>
      <div class="flex justify-between items-baseline">
        <ul class="flex space-x-4 ml-2 mr-4 mb-10" style="margin-bottom: 7px">
          <li
            v-for="{ id, title, isActive } in viewOptions"
            :key="id"
            :class="[
              'font-medium text-md cursor-pointer invisible-border',
              { active: isActive },
            ]"
            @click="changeTab(id)"
          >
            {{ title }}
          </li>
        </ul>
        <vs-button
          color="primary"
          type="border"
          class="action-btn"
          :icon="actionBtnIcon"
          @click="handleCampaign"
        >
          {{ actionBtnText }}
        </vs-button>
      </div>
      <div v-if="currentComponent">
        <component
          :is="currentComponent"
          :campaignId="campaignId"
          :data="campaignData"
          @update:Schedule="updateCampaign"
          @update:Options="updateCampaign"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import Breadcrumb from 'primevue/breadcrumb';
import Analytics from './components/Campaigns/Analytics.vue';
import Leads from './components/Campaigns/Leads.vue';
import Sequences from './components/Campaigns/Sequences.vue';
import Schedule from './components/Campaigns/Schedule.vue';
import Options from './components/Campaigns/Options.vue';
export default {
  name: 'CampaignOverview',
  components: {
    Breadcrumb,
    Analytics,
    Leads,
    Sequences,
    Schedule,
    Options,
  },
  data() {
    return {
      viewOptions: [
        {
          id: 1,
          title: 'Analytics',
          component: 'analytics',
          isActive: true,
        },
        {
          id: 2,
          title: 'Leads',
          component: 'leads',
          isActive: false,
        },
        {
          id: 3,
          title: 'Sequences',
          component: 'sequences',
          isActive: false,
        },
        {
          id: 4,
          title: 'Schedule',
          component: 'schedule',
          isActive: false,
        },
        {
          id: 5,
          title: 'Options',
          component: 'options',
          isActive: false,
        },
      ],
      actionBtnText: '',
      actionBtnIcon: '',
      actionStatus: '',
      home: { label: 'Campaigns', to: '/marketing/campaigns' },
      campaignData: {},
    };
  },
  computed: {
    breadcrumbItems() {
      if ((this.campaignData || {}).name) {
        return [
          {
            label: this.campaignData.name,
            // to: `/marketing/campaign/${this.campaignData.id}`,
            command: () => {},
          },
        ];
      }
      return [];
    },
    currentComponent() {
      return this.viewOptions.find((option) => option.isActive).component;
    },
    defaultTab() {
      return (this.$route.query || {}).tab || null;
    },
    campaignId() {
      return Number(this.$route.params.id);
    },
  },
  created() {
    if (this.defaultTab) {
      this.viewOptions.forEach((option) => {
        option.isActive = option.component === this.defaultTab;
      });
    }
    this.init();
  },
  methods: {
    changeTab(id) {
      this.viewOptions.forEach((option) => {
        option.isActive = option.id === id;
      });
    },
    async init() {
      try {
        this.$vs.loading();
        await this.getCampaign();
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    async getCampaign() {
      try {
        this.loading = true;

        const id = this.campaignId;
        const {
          data: { payload },
        } = await this.$store.dispatch('marketing/getCampaignById', { id });

        if (payload && payload.campaign) {
          this.campaignData = payload.campaign;
          const status = this.campaignData.status;
          switch (status) {
            case 'draft':
              this.actionBtnIcon = 'play_arrow';
              this.actionBtnText = 'Start';
              this.actionStatus = 'active';
              break;
            case 'active':
              this.actionBtnIcon = 'pause';
              this.actionBtnText = 'Pause';
              this.actionStatus = 'paused';
              break;
            case 'paused':
              this.actionBtnIcon = 'play_arrow';
              this.actionBtnText = 'Resume';
              this.actionStatus = 'active';
              break;
            default:
              break;
          }
        }
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
    async handleCampaign() {
      try {
        const campaignId = this.$route.params.id;
        this.loading = true;

        const response = await this.$store.dispatch(
          'marketing/updateCampaign',
          {
            id: campaignId,
            status: this.actionStatus,
          }
        );
        if (response && response.data) {
          this.$vs.notify({
            color: 'primary',
            title: 'Campaign updated',
            text: 'Campaign updated successfully.',
          });
          switch (this.actionStatus) {
            case 'draft':
              this.actionBtnIcon = 'play_arrow';
              this.actionBtnText = 'Start';
              this.actionStatus = 'active';
              break;
            case 'active':
              this.actionBtnIcon = 'pause';
              this.actionBtnText = 'Pause';
              this.actionStatus = 'paused';
              break;
            case 'paused':
              this.actionBtnIcon = 'play_arrow';
              this.actionBtnText = 'Resume';
              this.actionStatus = 'active';
              break;
            default:
              break;
          }
        } else {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid response from the server.',
          });
        }
      } catch (error) {
        console.log(error);
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
    updateCampaign({ campaign }) {
      this.campaignData = {
        ...this.campaignData,
        ...(campaign || {}),
      };
    },
  },
};
</script>
<style scoped>
.p-breadcrumb {
  border: none;
}
.action-btn {
  width: 150px;
}
.active {
  border-bottom: 2px solid rgba(var(--vs-primary), 1);
  color: rgba(var(--vs-primary), 1) !important;
}
</style>
