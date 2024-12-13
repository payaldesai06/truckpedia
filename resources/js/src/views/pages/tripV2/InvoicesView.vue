<template>
  <div>
    <!-- Header Section -->
    <Header
      :isCollapsed="isCollapsed"
      :viewOptions="views"
      @changeTab="changeTab"
    />

    <!-- Content -->
    <div class="mt-60" v-if="currentComponent">
      <component :is="currentComponent" />
    </div>
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import { mapGetters } from 'vuex';
import config from '@/config/constants';
export default {
  name: 'InvoicesView',
  components: {
    Header: () => import('./components/Header'),
    InvoicesTab: () => import('./components/InvoicesTab'),
    DriversPayTab: () => import('./components/DriversPayTab'),
    AgingReportTab: () => import('./components/AgingReportTab'),
    FuelExpensesTab: () => import('./components/FuelExpensesTab'),
    ChartOfAccountsTab: () => import('./components/ChartOfAccountsTab'),
    ExpensesTab: () => import('./components/ExpensesTab'),
    FuelCardTab: () => import('./components/FuelCard'),
    AccessorialServicesTab: () => import('./components/AccessorialServicesTab'),
  },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('auth', ['user']),
    currentComponent() {
      const activeItem = this.views.find((item) => item.isActive);
      if (!activeItem || !activeItem.name) return '';

      return this.componentList[activeItem.name];
    },
    views() {
      let tabs =
        this.user.admin_company_details.companyType === 'broker' ||
        this.user.admin_company_details.companyType === 'shipper'
          ? this.viewOptions.filter((item) => item.name !== 'DriversPayTab')
          : this.viewOptions;

      if (
        this.user.admin_company_details.admin_company_detail_id ===
        config.hidefunctionalitiesForSpecificCompanyIds
      ) {
        tabs = this.viewOptions.filter((item) => item.name == 'InvoicesTab');
      }

      if (tabs.length >= 1) tabs[0].isActive = true;
      return tabs;
    },
  },
  data() {
    return {
      viewOptions: [
        {
          id: 1,
          title: 'Drivers Pay',
          name: 'DriversPayTab',
          isActive: false,
        },
        {
          id: 2,
          title: 'Invoices',
          name: 'InvoicesTab',
          isActive: false,
        },
        {
          id: 3,
          title: 'Aging Report',
          name: 'AgingReportTab',
          isActive: false,
        },
        {
          id: 4,
          title: 'Chart of Accounts',
          name: 'ChartOfAccountsTab',
          isActive: false,
        },
        {
          id: 5,
          title: 'Expenses',
          name: 'ExpensesTab',
          isActive: false,
        },
        {
          id: 6,
          title: 'Fuel Cards',
          name: 'FuelCardTab',
          isActive: false,
        },
        {
          id: 7,
          title: 'Fuel Expenses',
          name: 'FuelExpensesTab',
          isActive: false,
        },
        {
          id: 8,
          title: 'Accessorial Services',
          name: 'AccessorialServicesTab',
          isActive: false,
        },
      ],
      componentList: {
        DriversPayTab: 'DriversPayTab',
        InvoicesTab: 'InvoicesTab',
        AgingReportTab: 'AgingReportTab',
        ChartOfAccountsTab: 'ChartOfAccountsTab',
        ExpensesTab: 'ExpensesTab',
        FuelCardTab: 'FuelCardTab',
        FuelExpensesTab: 'FuelExpensesTab',
        AccessorialServicesTab: 'AccessorialServicesTab',
      },
    };
  },
  methods: {
    changeTab(id) {
      this.views.forEach((item) => {
        item.isActive = item.id === id;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// Utility Classes

.mt-60 {
  margin-top: 60px;
}
</style>
