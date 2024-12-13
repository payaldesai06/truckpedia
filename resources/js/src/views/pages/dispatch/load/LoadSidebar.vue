<template>
  <vs-sidebar
    ref="sidebar"
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <component
      ref="scrollbarComponent"
      :is="scrollbarTag"
      class="scroll-area--data-list-add-new"
      :settings="settings"
      :key="$vs.rtl"
    >
      <template v-if="isCreateMode">
        <add-load
          ref="addLoad"
          @closeSidebar="closeSidebar"
          v-if="isSidebarActiveLocal"
          :showLoadChargesSection="showLoadChargesSection"
          :addLoadData="addLoadData"
          @toggleAddNewCustomerDialog="toggleAddNewCustomerDialog($event)"
        />
      </template>

      <template v-else-if="isViewOnly">
        <view-load
          @closeSidebar="closeSidebar"
          :data="data"
          v-if="isSidebarActiveLocal"
        />
      </template>

      <template v-else>
        <edit-load
          ref="editLoad"
          @closeSidebar="closeSidebar"
          :data="data"
          v-if="isSidebarActiveLocal"
          :isLoadDeleted="isLoadDeleted"
          :showLoadChargesSection="showLoadChargesSection"
          @refreshCallingUi="$emit('refreshCallingUi')"
          @toggleAddNewCustomerDialog="toggleAddNewCustomerDialog($event)"
        />
      </template>
    </component>

    <!-- Customer Dialog -->
    <customer-dialog
      v-if="isCustomerDialogActive"
      :toggleDialogForCustomer="isCustomerDialogActive"
      :defaultValues="customerDefaultValues"
      @closePopup="toggleAddNewCustomerDialog"
      @getCustomerList="refreshCustomerList"
    />
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import AddLoad from './AddLoad';
import EditLoad from './EditLoad';
import ViewLoad from './ViewLoad';
import CloseSidebarMixin from '@/mixins/closeSidebarMixin';
import config from '@/config/constants';
import { mapGetters, mapState } from 'vuex';
import { EventBus } from '@/helpers/eventBus';

export default {
  name: 'LoadSidebar',

  mixins: [CloseSidebarMixin],

  provide() {
    return {
      scrollData: this.scrollData,
    };
  },

  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
    isLoadDeleted: {
      type: Boolean,
      default: false,
    },
    addLoadData: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    VuePerfectScrollbar,
    AddLoad,
    EditLoad,
    ViewLoad,
    CustomerDialog: () => import('@/views/pages/customers/CustomerDialog'),
  },

  data() {
    return {
      settings: {
        // perfect scrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },

      // Scroll to top
      scrollData: {
        scrollToTop: false,
      },
      isCustomerDialogActive: false,
      customerDefaultValues: null,
    };
  },

  watch: {
    scrollData: {
      deep: true,
      handler(newScrollData) {
        if (!newScrollData.scrollToTop) return;

        this.scrollData.scrollToTop = false;
        this.$refs['scrollbarComponent'].$el.scrollTop = 0;
      },
    },
  },
  mounted() {
    // Add click event listener to the sidebar background
    this.$refs.sidebar.$el.addEventListener(
      'click',
      this.handleSidebarBackgroundClick
    );
  },
  beforeDestroy() {
    this.$store.dispatch('load/clearStateAction');
    // Cleanup: remove the click event listener when the component is destroyed
    this.$refs.sidebar.$el.removeEventListener(
      'click',
      this.handleSidebarBackgroundClick
    );
  },
  computed: {
    ...mapGetters('auth', ['user']),
    ...mapState('load', ['allDriverTruckTrailerForLoadDriverLoaded']),

    isSidebarActiveLocal: {
      get() {
        this.getAllDriverTruckTrailerForLoadDriver();
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          // this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      },
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    showLoadChargesSection() {
      if (
        this.user.admin_company_details.admin_company_detail_id ===
        config.hideLoadChargesForCompanyId
      )
        return this.user.role === 'admin';

      return true;
    },
    isViewOnly() {
      const { viewOnly } = this.data || {};
      return typeof viewOnly !== 'undefined' && viewOnly === true;
    },
    isCreateMode() {
      return Object.entries(this.data || {}).length === 0;
    },
  },
  methods: {
    handleSidebarBackgroundClick(event) {
      if (event.target.closest('.vs-sidebar--background')) {
        this.$store.dispatch('load/clearStateAction');
        // Clicked outside the sidebar, so close it
        this.closeSidebar();
      }
    },
    getAllDriverTruckTrailerForLoadDriver() {
      // Test case 1: Verify that the API is called when the data is not loaded and the sidebar is active
      // Test case 2: Verify that the API is not called when the data is already loaded
      // Test case 3: Verify that the API is not called when the sidebar is not active
      if (
        !this.allDriverTruckTrailerForLoadDriverLoaded &&
        this.isSidebarActive
      ) {
        // Call the API
        this.$store.dispatch('load/getAllDriverTruckTrailerForLoadDriver');
      }
    },
    closeSidebar(refreshList = false) {
      this.$emit('closeSidebar', refreshList);
    },
    refreshCustomerList() {
      if (this.$refs.addLoad || this.$refs.editLoad) {
        EventBus.$emit('refreshCustomerList');
      }
    },
    toggleAddNewCustomerDialog(val = null) {
      if (!this.isCustomerDialogActive && val && Object.keys(val).length) {
        this.customerDefaultValues = val;
      } else {
        this.customerDefaultValues = null;
      }

      this.isCustomerDialogActive = !this.isCustomerDialogActive;
    },
    refreshCustomerList() {
      const refsToCheck = [
        this.$refs.addLoad,
        ((this.$refs.editLoad || {}).$refs || {}).loadDetail,
      ];
      refsToCheck.forEach((ref) => {
        if (ref) {
          ref.getAllCustomers();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/* @import "@sass/custom/sidebar.scss"; */

// hide footer blank space
/* .scroll-area--data-list-add-new {
  height: calc(var(--vh, 1vh) * 100 - 0rem);
  /* height: 100%; */
/* } */

.add-new-data-sidebar {
  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 85vw !important;
    max-width: 90vw !important;
    /* .vs-sidebar--items {
      overflow: auto !important;
    } */
  }
}

::v-deep .vs__dropdown-menu {
  max-height: 180px !important;
}
</style>
