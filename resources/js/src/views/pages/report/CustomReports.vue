<template>
  <div class="vx-row space-y-6">
    <div class="vx-col w-1/6">
      <vs-button
        color="dark"
        type="border"
        icon-pack="feather"
        icon="icon-arrow-left"
        @click="toggleReportsTab"
        >Back
      </vs-button>
    </div>
    <div class="vx-col w-full">
      <div class="flex">
        <div class="flex items-center overflow-x-auto">
          <vs-chip
            class="cursor-pointer mx-2 text-sm min-w-75"
            v-for="{ id, title, isActive } in tabs"
            :key="id"
            :color="isActive ? 'primary' : ''"
            @click.native="changeTab(id)"
          >
            {{ title }}
          </vs-chip>
        </div>
      </div>
      <div>
        <div class="mt-60" v-if="currentComponent">
          <component :is="currentComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    FuelSurcharges: () => import('./components/FuelSurcharges.vue'),
    AccessorialServiceReport: () =>
      import('./components/AccessorialServiceReport.vue'),
    LoadBillingReport: () => import('./components/LoadBillingReport.vue'),
    FlatFile: () => import('./components/FlatFile.vue'),
    SettlementSummary: () => import('./components/SettlementSummary.vue'),
  },
  name: 'CustomReports',
  data() {
    return {
      tabs: [],
      pdcmTabs: [
        {
          id: 1,
          title: 'Flat File',
          name: 'FlatFile',
          isActive: true,
        },
        {
          id: 2,
          title: 'Settlement Summary',
          name: 'SettlementSummary',
          isActive: false,
        },
      ],
      lgsbTabs: [
        {
          id: 1,
          title: 'Fuel Surcharges',
          name: 'FuelSurchargesReport',
          isActive: true,
        },
        {
          id: 2,
          title: 'Load Billing',
          name: 'LoadBillingReport',
          isActive: false,
        },
        {
          id: 3,
          title: 'Accessorial Services Billing',
          name: 'AccessorialServiceReport',
          isActive: false,
        },
      ],
      componentList: {
        FuelSurchargesReport: 'FuelSurcharges',
        AccessorialServiceReport: 'AccessorialServiceReport',
        LoadBillingReport: 'LoadBillingReport',
        FlatFile: 'FlatFile',
        SettlementSummary: 'SettlementSummary',
      },
    };
  },

  methods: {
    toggleReportsTab(value) {
      this.$emit('toggleReports');
    },
    changeTab(id) {
      this.tabs.forEach((tab) => {
        if (tab.id === id) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
      });
    },
  },
  computed: {
    ...mapGetters('auth', ['userRole']),
    currentComponent() {
      const activeItem = this.tabs.find((item) => item.isActive);
      if (!activeItem || !activeItem.name) return '';
      return this.componentList[activeItem.name];
    },
  },
  created() {
    this.tabs =
      this.user.admin_company_detail_id == 286 ? this.lgsbTabs : this.pdcmTabs;
  },
  watch: {
    failedLoadsPopup(val) {
      if (!val) {
        this.notFoundLoads = [];
        this.failedToUploadLoads = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.failed-loads-popup {
  .vs-popup--header {
    background-color: var(--danger);
  }
}
</style>
