<template>
  <div class="w-full">
    <div class="mt-2 flex items-center justify-between px-6">
      <h4 v-if="!duplicateLoad">Edit Load Detail</h4>
      <h4 v-else>Add New Load</h4>

      <div class="flex items-center">
        <template>
          <div class="dropdown-button-container mr-4" v-if="!duplicateLoad">
            <vs-dropdown vs-trigger-click>
              <vs-button
                class="btn-drop cursor-pointer"
                color="primary"
                icon="expand_more"
                size="small"
                icon-after
              >
                Action
              </vs-button>
              <vs-dropdown-menu>
                <vs-dropdown-item @click="onDuplicateThisLoad">
                  Duplicate this load
                </vs-dropdown-item>
                <vs-dropdown-item
                  v-if="isAvailableForDelete && !isLoadDeleted"
                  @click="onConfirmDelete"
                  >Delete this load
                </vs-dropdown-item>
                <vs-dropdown-item
                  v-if="isLoadDeleted"
                  @click="onConfirmRestore"
                >
                  Restore deleted load
                </vs-dropdown-item>

                <vs-dropdown-item
                  @click="onConfirmCancel"
                  v-if="!isLoadDeleted && !isLoadCanceled"
                >
                  Cancel this load
                </vs-dropdown-item>
                <vs-dropdown-item
                  @click="onConfirmRestoreCanceledLoad"
                  v-if="!isLoadDeleted && isLoadCanceled"
                >
                  Restore canceled load
                </vs-dropdown-item>
                <vs-dropdown-item
                  v-if="hasDefaultGLAccess"
                  @click="onConfirmMergeTransplaceLoad"
                >
                  Merge Transplace Load
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
        </template>

        <feather-icon
          icon="XIcon"
          @click="closeSidebar"
          class="cursor-pointer"
        ></feather-icon>
      </div>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <div>
      <keep-alive>
        <!-- used for duplicate loads  -->
        <LoadDetail
          ref="loadDetail"
          v-if="duplicateLoad"
          @closeSidebar="closeSidebar"
          :loadId="data.loadId"
          :duplicateLoad="duplicateLoad"
          @refreshCallingUi="triggerRefresh"
          @toggleAddNewCustomerDialog="
            $emit('toggleAddNewCustomerDialog', $event)
          "
        />
        <vs-tabs alignment="fixed" v-else>
          <vs-tab label="Detail">
            <div>
              <load-status
                :load="load"
                v-if="!duplicateLoad"
                @handleLoadStatus="handleLoadStatus"
              ></load-status>
              <LoadDetail
                ref="loadDetail"
                @closeSidebar="closeSidebar"
                :loadId="data.loadId"
                :duplicateLoad="duplicateLoad"
                :isLoadDeleted="isLoadDeleted"
                :showLoadChargesSection="showLoadChargesSection"
                :transformedLoadStatus="transformedLoadStatus"
                :loadDrivers="loadDrivers"
                @refreshCallingUi="triggerRefresh"
                @updateShipperReceiverLegList="shipperReceiverLegList = $event"
                @toggleAddNewCustomerDialog="
                  $emit('toggleAddNewCustomerDialog', $event)
                "
                @saveLoadDrivers="saveLoadDrivers"
              />
            </div>
          </vs-tab>

          <vs-tab label="Documents">
            <div class="vx-row mt-6">
              <div class="vx-col w-full">
                <DocumentUpload
                  :loadId="data.loadId"
                  :downloadFile="downloadFile"
                  :isLoadDeleted="isLoadDeleted"
                />
              </div>
            </div>
          </vs-tab>

          <vs-tab
            v-if="
              !this.companyFeatureAccess.includes('basic') &&
              !this.companyFeatureAccess.includes('noTms')
            "
            label="Billing"
            style="height: calc(100vh - 100px)"
          >
            <billing-tab
              class="mt-6"
              :load="load || {}"
              :driversList="driversListForBillingTab"
            />
          </vs-tab>

          <vs-tab label="Pictures">
            <div class="vx-row mt-6">
              <div class="vx-col w-full">
                <Pictures
                  :loadId="data.loadId"
                  :isLoadDeleted="isLoadDeleted"
                />
              </div>
            </div>
          </vs-tab>

          <vs-tab label="Activities">
            <div class="vx-row mt-6">
              <div class="vx-col w-full">
                <ActivitiesTab
                  :data="{
                    loadId: data.loadId,
                    logs: load && load.logs,
                    active: true,
                  }"
                  :shipperReceiverLegList="shipperReceiverLegList"
                />
              </div>
            </div>
          </vs-tab>

          <vs-tab label="Chat" v-if="load && load.status != 'deleted'">
            <div class="vx-row mt-6">
              <div class="vx-col w-full">
                <ChatSystem :isLoadChatExists="isLoadChatExists" />
              </div>
            </div>
          </vs-tab>
        </vs-tabs>
      </keep-alive>
    </div>

    <vs-prompt
      id="customizeMergeLoadPrompt"
      accept-text="Merge"
      @cancel="cancelCustomizeMergeLoad"
      @accept="mergeTransplaceLoad"
      @close="cancelCustomizeMergeLoad"
      :color="'primary'"
      title="Merge Transplace Loads"
      :active.sync="activePrompt"
    >
      <div style="min-width: 500px">
        <h5 class="mb-3">
          Please input the other load’s load number (not reference)
        </h5>
        <div class="flex items-center">
          <p class="mb-0 mr-3">Load Number :</p>
          <vs-input
            placeholder="#"
            v-model.number="transplaceLoadNumber"
            type="number"
          />
        </div>
      </div>
    </vs-prompt>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import config from '@/config/constants';
import { redirectToNewTab } from '@/helpers/helper';
import LoadDetail from './LoadDetail';
import DocumentUpload from './DocumentUpload';
import Pictures from './Pictures';
import ActivitiesTab from './ActivitiesTab';
import LoadStatus from './components/LoadStatus.vue';
import ChatSystem from '../../chat/Index.vue';
import BillingTab from './BillingTab';
import { EventBus } from '@/helpers/eventBus';

export default {
  name: 'EditLoad',

  props: {
    data: {
      type: Object,
      default: () => {},
    },
    isLoadDeleted: {
      type: Boolean,
      default: false,
    },
    showLoadChargesSection: {
      type: Boolean,
      default: true,
    },
  },

  components: {
    VuePerfectScrollbar,
    LoadDetail,
    Pictures,
    LoadStatus,
    DocumentUpload,
    ActivitiesTab,
    ChatSystem,
    BillingTab,
  },

  data() {
    return {
      loadStatus: config.status.load,
      duplicateLoad: false,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
      transformedLoadStatus: null,
      activePrompt: false,
      transplaceLoadNumber: '',
      shipperReceiverLegList: [],
      loadDrivers: {
        assign_driver_and_equipments: [],
        paramLegs: [],
      },
    };
  },

  computed: {
    ...mapGetters('load', { load: 'load' }),
    ...mapGetters('auth', [
      'userRole',
      'user',
      'isUserBrokerOrShipper',
      'companyFeatureAccess',
    ]),

    //TODO: what is the purpose of this?
    isLoadChatExists() {
      if (this.load && this.load.load_id) {
        return {
          loadId: this.load.load_id,
          refrenceId: this.load.refrence_id,
          number: this.load.load_unique_id,
          isExists: true,
        };
      }
    },

    isAvailableForDelete() {
      if (!this.load) {
        return false;
      }
      return true;
      /*
      return [
        this.loadStatus.open,
        this.loadStatus.assign,
        this.loadStatus.in_transit,
      ].includes(this.load.status);
      */
    },

    isLoadCanceled() {
      if (!this.load) {
        return false;
      }
      return this.load.status === this.loadStatus.canceled;
    },

    hasDefaultGLAccess() {
      const { admin_company_detail_id } =
        (this.user || {}).admin_company_details || {};
      if (admin_company_detail_id) {
        return config.companiesWithPayToCodeNDefaultGLAccountAccess.includes(
          Number(admin_company_detail_id)
        );
      }
      return false;
    },
    driversListForBillingTab() {
      const driversList = [];

      this.loadDrivers.assign_driver_and_equipments.forEach((driver) => {
        driver.selected_drivers.forEach((d) => {
          driversList.push({
            name: d.full_name,
            driver_id: d.driver_id,
            emptyDistance: driver.emptyDistance || 0,
            loadedDistance: driver.loadedDistance || 0,
            toLegOrEnd: true,
          });
        });
      });

      this.loadDrivers.paramLegs.forEach((leg) => {
        leg.selected_drivers.forEach((d) => {
          driversList.push({
            name: d.full_name,
            driver_id: d.driver_id,
            emptyDistance: leg.emptyDistance || 0,
            loadedDistance: leg.loadedDistance || 0,
            fromLeg: true,
          });
        });
      });

      return driversList;
    },
  },

  methods: {
    handleLoadStatus(loadStatus) {
      this.transformedLoadStatus = loadStatus;
    },
    onDuplicateThisLoad() {
      this.$vs.loading();
      this.duplicateLoad = true;
      setTimeout(() => {
        this.$vs.loading.close();
        this.$vs.notify({
          color: 'primary',
          title: 'Success',
          text: 'Load duplicated, please click Submit to save this new load.',
        });
      }, 100);
    },

    async closeSidebar() {
      await this.$store.dispatch('load/resetLoad');

      this.$emit('closeSidebar');
    },

    onConfirmDelete() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Yes, I confirm',
        title: 'Load Delete',
        text: 'Are you sure you want to delete this load?',
        accept: () => this.deleteLoad(),
      });
    },

    async deleteLoad() {
      this.$vs.loading();

      try {
        const payload = {
          id: this.load.load_id,
        };

        await this.$store.dispatch('load/deleteLoad', payload);
        this.triggerRefresh();
        await this.closeSidebar();

        // fixed: overlap with other loading (Datatable/Pipeline)
        this.$vs.loading.close();

        // Start Loading For Load Datatable/Pipeline
        await this.$store.dispatch('load/startLoading');

        this.$vs.notify({
          color: 'primary',
          title: 'Load Deleted',
          text: 'Load deleted successfully.',
        });
      } catch (error) {
        // fixed: overlap with other loading (Datatable/Pipeline)
        this.$vs.loading.close();

        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    onConfirmRestore() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Yes, I confirm',
        title: 'Load Restore',
        text: 'Are you sure you want to restore this load?',
        accept: () => this.restoreLoad(),
      });
    },

    async restoreLoad() {
      this.$vs.loading();

      try {
        const payload = {
          id: this.load.load_id,
        };

        await this.$store.dispatch('load/restoreLoad', payload);
        this.triggerRefresh();
        await this.closeSidebar();

        // fixed: overlap with other loading (Datatable/Pipeline)
        this.$vs.loading.close();

        // Start Loading For Load Datatable/Pipeline
        await this.$store.dispatch('load/startLoading');

        this.$vs.notify({
          color: 'primary',
          title: 'Load Restored',
          text: 'Load restored successfully.',
        });
      } catch (error) {
        // fixed: overlap with other loading (Datatable/Pipeline)
        this.$vs.loading.close();

        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    /**
     * Download
     */
    downloadFile(url) {
      redirectToNewTab(url);
    },

    onConfirmCancel() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Yes, I confirm',
        title: 'Cancel Load',
        text: 'Are you sure you want to cancel this load?',
        accept: () => this.cancelLoad(),
      });
    },

    onConfirmRestoreCanceledLoad() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Yes, I confirm',
        title: 'Restore Canceled Load',
        text: 'Are you sure you want to restore this canceled load?',
        accept: () => this.restoreCanceledLoad(),
      });
    },

    async cancelLoad() {
      // const loadData = JSON.parse(JSON.stringify(this.load));
      this.$vs.loading();

      try {
        let param = {
          load_id: this.load.load_id,
        };
        await this.$store.dispatch('load/cancelLoad', param);
        this.triggerRefresh();
        await this.closeSidebar();
        this.$vs.loading.close();
        // Start Loading For Load Datatable/Pipeline
        await this.$store.dispatch('load/startLoading');

        this.$vs.notify({
          color: 'success',
          title: 'Success',
          text: 'Load canceled successfully.',
        });
      } catch (error) {
        this.$vs.loading.close();
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text:
            (((error || {}).response || {}).data || {}).message ||
            'Something went wrong!',
        });
      }
    },

    async restoreCanceledLoad() {
      // const loadData = JSON.parse(JSON.stringify(this.load));
      this.$vs.loading();

      try {
        let param = {
          load_id: this.load.load_id,
        };
        await this.$store.dispatch('load/restoreCanceledLoad', param);
        this.triggerRefresh();
        await this.closeSidebar();
        this.$vs.loading.close();
        // Start Loading For Load Datatable/Pipeline
        await this.$store.dispatch('load/startLoading');

        this.$vs.notify({
          color: 'success',
          title: 'Success',
          text: 'Restored canceled load successfully.',
        });
      } catch (error) {
        this.$vs.loading.close();
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text:
            (((error || {}).response || {}).data || {}).message ||
            'Something went wrong!',
        });
      }
    },

    triggerRefresh() {
      EventBus.$emit(config.eventBuses.loadChanged);
      this.$emit('refreshCallingUi');
    },

    onConfirmMergeTransplaceLoad() {
      this.activePrompt = true;
    },
    async mergeTransplaceLoad() {
      try {
        await this.$store.dispatch('load/customizedMergeLoad', {
          byLoadNumber: {
            currentLoadId: this.load.load_id,
            targetLoadNumber: Number(this.transplaceLoadNumber),
          },
        });
        this.$vs.notify({
          color: 'primary',
          title: 'Success',
          text: 'Loads merged successfully.',
        });
        this.triggerRefresh();
        await this.closeSidebar();
        // Start Loading For Load Datatable/Pipeline
        await this.$store.dispatch('load/startLoading');
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          time: 8000,
          title: 'Error',
          text: this.getErrorMsg(error),
        });
      } finally {
        this.transplaceLoadNumber = '';
        this.activePrompt = false;
      }
    },
    cancelCustomizeMergeLoad() {
      this.transplaceLoadNumber = '';
      this.activePrompt = false;
    },
    getErrorMsg(error) {
      const { message } = ((error || {}).response || {}).data || {};
      return message || 'Something went wrong';
    },
    saveLoadDrivers({ assign_driver_and_equipments, paramLegs }) {
      this.loadDrivers = {
        assign_driver_and_equipments: [...(assign_driver_and_equipments || [])],
        paramLegs: [...(paramLegs || [])],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.con-vs-dropdown--menu.vs-dropdown-menu {
  z-index: 900000;
  width: 16rem;
}

.parent-dropdown.vs-con-dropdown {
  cursor: pointer;
}
</style>

<style lang="scss">
#customizeMergeLoadPrompt {
  .vs-dialog {
    max-width: 500px !important;

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
  }
}
</style>
