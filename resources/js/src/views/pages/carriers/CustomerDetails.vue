<template>
  <div class="dashboard">
    <!-- Header Section -->
    <vx-card class="dashboard-header">
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <div class="flex">
            <h3 class="self-center">Carrier</h3>
          </div>
        </div>
      </div>
      <vs-divider />
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <div class="flex overflow-x-auto">
            <vs-chip
              class="cursor-pointer mx-2 min-w-max"
              v-for="{ id, label, isActive } in tabList"
              :key="id"
              :color="isActive ? 'primary' : ''"
              @click.native="changeTab(id)"
            >
              {{ label }}
            </vs-chip>
          </div>
          <span>
            <vs-button
              color="primary"
              icon="format_list_bulleted"
              @click.stop="redirectToCustomerList"
            >
              Carriers
            </vs-button>
          </span>
        </div>
      </div>
    </vx-card>

    <!-- Tab Component -->
    <div class="mt-4" v-if="currentComponent">
      <component
        :is="currentComponent"
        :dataObj="selectedCustomer"
        :isEditMode="isEditMode"
        @update:Overview="updateCustomerData"
        @update:Files="updateCustomerData"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerDetails',
  components: {
    OverviewTab: () => import('./components/OverviewTab'),
    FilesTab: () => import('./components/FilesTab'),
    LanesTab: () => import('../customers/components/LanesTab.vue'),
  },
  data() {
    return {
      chips: [
        {
          id: 1,
          label: 'Overview',
          isActive: true,
          component: 'OverviewTab',
        },
        {
          id: 2,
          label: 'Files',
          isActive: false,
          component: 'FilesTab',
        },
        {
          id: 3,
          label: 'Lanes',
          isActive: false,
          component: 'LanesTab',
        },
      ],
      selectedCustomer: {},
    };
  },
  computed: {
    tabList() {
      return this.chips;
    },
    currentComponent() {
      return this.tabList.find((tab) => tab.isActive).component;
    },
    isEditMode() {
      return this.$route.name === 'carriers-edit';
    },
  },
  created() {
    if (this.isEditMode) {
      this.init();
    }
  },
  methods: {
    changeTab(id) {
      this.chips.forEach((chip) => {
        if (chip.id === id) {
          chip.isActive = true;
        } else {
          chip.isActive = false;
        }
      });
    },
    redirectToCustomerList() {
      this.$router.push({ name: 'carriers' }).catch(() => true);
    },
    updateCustomerData(data) {
      if (!data) return;
      this.selectedCustomer = { ...this.selectedCustomer, ...data };
    },
    async init() {
      try {
        this.$vs.loading();
        const { id } = this.$route.params;
        const { payload } = await this.$store.dispatch(
          'customer/fetchCustomer',
          id
        );

        if (payload) {
          this.selectedCustomer = { ...payload };
        }
      } catch (error) {
        await this.$vs.notify({
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
// Utility Classes
.min-w-max {
  min-width: max-content;
}
</style>
