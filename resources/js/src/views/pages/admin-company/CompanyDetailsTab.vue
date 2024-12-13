<template>
  <div>
    <ul class="flex items-center gap-3 mt-4 mb-6 tab-list">
      <li
        v-for="({ title, isActive }, index) in tabs"
        :key="index"
        :class="[
          'font-medium text-md cursor-pointer mr-4',
          isActive ? 'active' : 'invisible-border-bottom',
        ]"
        @click="changeComponent(title)"
      >
        {{ title }}
      </li>
    </ul>

    <!-- Content Section -->
    <div class="mt-5" v-if="currentComponent">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import ShowAdminCompany from './ShowAdminCompany.vue';
export default {
  name: 'CompanyDetailsTab',
  components: {
    ShowAdminCompany,
    EmailCampaigns: () => import('./EmailCampaigns.vue'),
  },
  data() {
    return {
      tabs: [
        {
          title: 'Company Details',
          componentName: 'ShowAdminCompany',
          isActive: true,
        },
        {
          title: 'Email Campaigns',
          componentName: 'EmailCampaigns',
          isActive: false,
        },
      ],
    };
  },
  computed: {
    currentComponent() {
      return this.tabs.find((tab) => tab.isActive).componentName;
    },
  },
  methods: {
    changeComponent(title) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.title === title;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$black-base-color: var(--Black-Black-Base, #18181a);
.tab-list {
    border-bottom: 1px solid var(--Light---ui-border-color, #C5C7D0);
  & li {
    min-width: 100px;
    text-align: center;
    padding-bottom: 5px;
    font-size: 1rem;
    &.active {
      color: $black-base-color !important;
      font-weight: 600;
      border-bottom: 3px solid rgba(var(--vs-primary), 1) !important;
    }
  }
}
</style>
