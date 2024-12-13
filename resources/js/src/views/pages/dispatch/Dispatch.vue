<template>
  <div id="data-list-list-view" class="data-list-container w-full">
    <!-- Load Sidebar -->
    <load-sidebar
      ref="loadSidebar"
      v-show="true"
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="closeSidebar"
      :data="sidebarData"
      :isLoadDeleted="isLoadDeleted"
      @refreshCallingUi="refreshPageContent"
    />

    <div class="pt-5">
      <div class="vx-row">
        <div class="vx-col flex justify-between w-full">
          <div class="flex items-center" style="max-width: 70%">
            <vs-button
              color="primary"
              type="border"
              @click.stop="addNewData"
              v-if="canAccess(this.roleModify)"
              style="min-width: 130px"
            >
              New Load
            </vs-button>
            <ul class="flex space-x-4 ml-2 mr-4" style="margin-bottom: 7px">
              <li
                v-for="item in filteredDispatchOptions"
                :key="item.title"
                v-if="canAccess(item.roles)"
                @click="changeComponent(item.componentName)"
                class="font-medium text-md cursor-pointer invisible-border"
                :class="{ active: activeComponent == item.componentName }"
              >
                {{ item.title }}
              </li>
            </ul>
            <portal-target
              v-if="!this.companyFeatureAccess.includes('basic')"
              name="spreadsheet-list-in-dispatch"
              class="spreadsheet-list-in-dispatch-header"
            >
            </portal-target>
          </div>

          <div class="flex space-x-4 items-center">
            <div
              v-if="activeComponent == 'list' && canAccess(this.roleModify)"
              class="flex items-center justify-end"
            >
              <vs-dropdown
                v-show="!isLoadDeleted && selectedLoadsList.length > 1"
              >
                <div
                  class="filter-btn a-icon cursor-pointer py-2"
                  style="z-index: 100"
                >
                  <span class="ml-1">Batch Actions</span>
                  <chevron-down-icon size="1x" class="ml-2"></chevron-down-icon>
                </div>
                <vs-dropdown-menu>
                  <vs-dropdown-item divider>
                    <vs-button
                      color="primary"
                      class="w-full"
                      type="border"
                      @click="massInvoicePopup = true"
                      >Generate Mass Invoice</vs-button
                    >
                  </vs-dropdown-item>
                  <!-- <vs-dropdown-item divider>
                    <vs-button color="primary" class="w-full" type="border"
                      >Request Payment</vs-button
                    >
                  </vs-dropdown-item> -->
                  <vs-dropdown-item divider>
                    <vs-button
                      color="primary"
                      class="w-full"
                      type="border"
                      @click="massInvoiceQbdPopup = true"
                      >Sync to QuickBooks Desktop</vs-button
                    >
                  </vs-dropdown-item>
                  <vs-dropdown-item divider>
                    <vs-button
                      color="primary"
                      class="w-full"
                      type="border"
                      @click="onConfirmRequestMassInvoicePayment"
                      >Request Mass Invoice Payment</vs-button
                    >
                  </vs-dropdown-item>
                  <vs-dropdown-item divider>
                    <vs-button
                      color="primary"
                      class="w-full"
                      type="border"
                      @click="onConfirmMultipleLoadsPaymentReceived"
                      >Payment Received</vs-button
                    >
                  </vs-dropdown-item>
                  <vs-dropdown-item divider>
                    <vs-button
                      color="danger"
                      class="w-full"
                      type="border"
                      @click="onConfirmDeleteMultipleLoads"
                      >Delete</vs-button
                    >
                  </vs-dropdown-item>
                  <!-- <vs-dropdown-item divider>
                    <vs-button color="primary" type="border" class="w-full"
                      >Sync to QuickBooks Online</vs-button
                    >
                  </vs-dropdown-item> -->
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>
            <div v-if="activeComponent == 'list'">
              <popper
                trigger="clickToToggle"
                :options="{
                  placement: 'bottom',
                  modifiers: { offset: { offset: '0,10px' } },
                }"
              >
                <div class="popper">
                  <div>
                    <div class="p-2">
                      <p class="active-filter">Active filters</p>
                      <div>
                        <div class="filter-input">
                          <multiselect
                            v-model="selectedColumnList"
                            placeholder="Select columns"
                            :options="listColumnOptions"
                            :limit="1"
                            :limitText="(count) => `and ${count} more`"
                            :multiple="true"
                            :allow-empty="false"
                            :show-labels="false"
                          ></multiselect>

                          <!-- <vs-icon
                            icon="delete"
                            class="mx-4 cursor-pointer"
                            @click="removeFilter(selectedFiltersOptions[0])"
                          ></vs-icon> -->
                        </div>
                        <div class="filter-input">
                          <multiselect
                            v-model="selected_tag"
                            :allow-empty="false"
                            placeholder="Select tag"
                            :preselect-first="true"
                            :options="tagOptions"
                            label="business_name"
                            :searchable="false"
                            :show-labels="false"
                          ></multiselect>
                          <!-- <vs-icon
                            icon="delete"
                            class="mx-4 cursor-pointer"
                            @click="removeFilter(selectedFiltersOptions[1])"
                          ></vs-icon> -->
                        </div>
                        <div class="filter-input">
                          <multiselect
                            v-model="direction"
                            :allow-empty="false"
                            placeholder="Select direction"
                            :preselect-first="true"
                            :options="direction_options"
                            label="label"
                            :searchable="false"
                            :show-labels="false"
                          ></multiselect>
                          <!-- <vs-icon
                            icon="delete"
                            class="mx-4 cursor-pointer"
                            @click="removeFilter(selectedFiltersOptions[2])"
                          ></vs-icon> -->
                        </div>
                        <!-- Selected filter List default show Multipselect dropdown -->
                        <div class="filter-input">
                          <multiselect
                            v-model="load_status"
                            :allow-empty="false"
                            placeholder="Select load status"
                            :preselect-first="true"
                            :options="loadStatusOptions"
                            label="label"
                            :searchable="false"
                            :show-labels="false"
                          ></multiselect>
                          <!-- <vs-icon
                            icon="delete"
                            class="mx-4 cursor-pointer"
                            @click="removeFilter(selectedFiltersOptions[3])"
                          ></vs-icon> -->
                        </div>
                        <!-- <popper
                          trigger="clickToOpen"
                          :visibleArrow="false"
                          :options="{
                            placement: 'left',
                            modifiers: { offset: { offset: '0,10px' } },
                          }"
                        >
                          <div class="popper text-center">
                            <div>
                              <div>
                                <div>
                                  <span class="add-filter-heading"
                                    >ADD FILTERS</span
                                  >
                                </div>
                                <div class="form-group">
                                  <div class="search-icon">Search</div>
                                  <input type="search" v-model="search" />
                                </div>
                              </div>
                              <div class="list">
                                <a
                                  href="javascript:void(0)"
                                  v-for="(item, index) in filteredOptions"
                                  v-show="checkColumnVisibility(item)"
                                  @click="handleFilterOption(item)"
                                  :key="index"
                                  >{{ item }}</a
                                >
                              </div>
                            </div>
                          </div> -->

                        <!-- <div slot="reference">
                            <a class="a-icon">
                              <p class="mt-3 add-filter-link">+ Add Filters</p>
                            </a>
                          </div> -->
                        <!-- </popper> -->
                      </div>
                    </div>
                  </div>
                </div>

                <div slot="reference">
                  <div
                    class="filter-btn a-icon cursor-pointer"
                    style="z-index: 100"
                  >
                    <filter-icon size="1x"></filter-icon>
                    <span class="ml-1">Filters</span>
                    <chevron-down-icon
                      size="1x"
                      class="ml-2"
                    ></chevron-down-icon>
                  </div>
                </div>
              </popper>
            </div>
            <!-- Filter for Dispatch Pipeline  -->
            <div v-if="activeComponent === 'pipline'">
              <PipelineFilter
                v-model="pipelineFilter"
                @update:Filters="updatePipelineFilters"
              />
            </div>

            <div
              :style="
                activeComponent === 'list' || activeComponent === 'pipline'
                  ? 'min-width: 13.5rem'
                  : ''
              "
            >
              <flat-pickr
                v-if="
                  activeComponent === 'list' || activeComponent === 'pipline'
                "
                v-model="date"
                :config="flat_pikr_config"
                ref="flat-pickr"
                placeholder="Select Date Range"
                @on-change="handleFlatPickerInput"
                class="w-full"
              />
              <portal-target name="dispatchTimeline"></portal-target>
            </div>

            <div
              v-if="activeComponent == 'list'"
              class="flex items-center justify-end"
            >
              <vs-button
                color="primary"
                type="border"
                icon-pack="feather"
                icon="icon-external-link"
                id="button-export-loading"
                class="vs-con-loading__container"
                v-if="canAccess(this.roleModify)"
                @click.stop="exportExcel"
                >Export
              </vs-button>
            </div>
            <div
              v-if="activeComponent === 'pipline'"
              class="flex items-center justify-end pr-1"
            >
              <vs-icon
                class="text-2xl cursor-pointer"
                icon="more_horiz"
                @click.stop="togglePipelineSidebar"
              />
            </div>

            <portal-target
              name="spreadsheet-controls-in-dispatch"
            ></portal-target>
          </div>
        </div>
      </div>

      <div class="vx-row flex">
        <div class="vx-col w-full">
          <component
            v-if="isNonSpreadsheetUi"
            ref="components"
            v-bind:is="activeComponent"
            :loadStatus="load_status"
            :selectedDateRange="date"
            :selectedColumn="selectedColumnList"
            :direction="direction"
            :selectedTag="selected_tag"
            :pipelineFilter="pipelineFilter"
            :userCustomization="currentUserCustomizations"
            @update:hideColumns="updatePipelineHideColumns"
            @editLoadSidebar="editData"
            @viewLoadSidebar="viewData"
            @updateSelectedLoadsList="updateSelectedLoadsList"
          ></component>
          <Spreadsheet
            v-show="!isNonSpreadsheetUi"
            :activeComponent="isNonSpreadsheetUi ? 0 : activeComponent"
            :dispatchTabDateRange="date"
            @updateActiveTab="updateActiveTab"
            @updateDateRange="updateDateRange"
          >
          </Spreadsheet>
        </div>
        <div
          class="w-1/5 absolute right-0 bg-white"
          v-if="isPipelineSidebarActive"
          v-click-outside="togglePipelineSidebar"
        >
          <PipelineSidebar
            :userCustomization="currentUserCustomizations"
            @update:hideColumns="updatePipelineHideColumns"
            @update:showLabels="updatePipelineShowLabels"
          />
        </div>
      </div>
    </div>

    <vs-popup
      class="holamundo"
      title="Mass Invoice"
      :active.sync="massInvoicePopup"
    >
      <vs-input
        type="number"
        label="Invoice number"
        v-model="massInvoiceNumber"
      />
      <div class="mt-4">
        <vs-button color="primary" type="filled" @click="submitMassInvoice"
          >Submit</vs-button
        >
        <vs-button
          color="danger"
          type="filled"
          @click="massInvoicePopup = false"
          >Cancel</vs-button
        >
      </div>
    </vs-popup>
    <vs-popup
      class="holamundo"
      title="Sync Mass Invoice to QuickBooks Desktop"
      :active.sync="massInvoiceQbdPopup"
    >
      Invoice is automatically synced to QuickBooks Desktop when generated. Are
      you sure you want to manually sync these loads to QuickBooks Desktop?
      <vs-input
        type="number"
        label="Invoice number"
        v-model="massInvoiceNumber"
      />
      <div class="mt-4">
        <vs-button color="primary" type="filled" @click="submitMassInvoiceQbd"
          >Submit</vs-button
        >
        <vs-button
          color="danger"
          type="filled"
          @click="massInvoiceQbdPopup = false"
          >Cancel</vs-button
        >
      </div>
    </vs-popup>
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import config from '@/config/constants';
import { mapState, mapGetters } from 'vuex';

import { formatDate, getApiErrorMsg } from '@/helpers/helper';

import LoadSidebar from './load/LoadSidebar';
import PipelineFilter from './components/PipelineFilter';

import Pipline from './Pipline';
import List from './List';
import Spreadsheet from './Spreadsheet';
import Calendar from './Calendar';
import { FilterIcon, ChevronDownIcon } from 'vue-feather-icons';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
  name: 'Dispatch',

  components: {
    Pipline,
    List,
    LoadSidebar,
    FilterIcon,
    ChevronDownIcon,
    Popper,
    Spreadsheet,
    PipelineFilter,
    Calendar,
    Calendar2: () => import('./Calendar2'),
    PipelineSidebar: () => import('./components/PipelineSidebar.vue'),
  },

  data() {
    const roles = config.roles;
    return {
      massInvoiceNumber: null,
      massInvoicePopup: false,
      massInvoiceQbdPopup: false,
      selectedLoadsList: [],
      date: '',
      selected_tag: { business_name: 'All companies' },
      tagOptions: [],
      load_status: '',
      direction: '',
      filters: [],
      showsFilters: [],
      roleModify: [roles.admin, roles.dispatcher],
      roleDefaultListView: [roles.warehouse_operator],
      selectedColumnList: [],
      search: '',
      filtersOptions: ['Columns', 'Companies', 'Directions', 'Status'],
      selectedFiltersOptions: ['Columns', 'Companies', 'Directions', 'Status'],
      loadStatusOptions: [
        { label: 'All status', value: config.all },
        { label: 'Open', value: config.status.load.open },
        { label: 'Dispatched', value: config.status.load.assign },
        { label: 'In transit', value: config.status.load.in_transit },
        { label: 'Delivered', value: config.status.load.delivered },
        {
          label: 'Invoice generated',
          value: config.status.load.invoice_created,
        },
        { label: 'Payment requested', value: config.status.load.invoice_sent },
        { label: 'Paid', value: config.status.load.invoice_paid },
        { label: 'Canceled', value: config.status.load.canceled },
        { label: 'Deleted', value: config.status.load.deleted },
      ],
      listColumnOptions: [],
      direction_options: [
        { label: 'All directions', value: config.all },
        { label: 'Inbound', value: 'inbound' },
        { label: 'Outbound', value: 'outbound' },
      ],

      activeComponent: 'pipline',
      items: [
        {
          title: 'Pipeline',
          componentName: 'pipline',
          roles: [roles.admin, roles.dispatcher, roles.tag_operator],
        },
        {
          title: 'List',
          componentName: 'list',
          roles: [
            roles.admin,
            roles.dispatcher,
            roles.tag_operator,
            roles.warehouse_operator,
          ],
        },
        {
          title: 'Calendar',
          componentName: 'calendar',
          roles: [
            roles.admin,
            roles.dispatcher,
            roles.tag_operator,
            roles.warehouse_operator,
          ],
        },
      ],

      // Flat Pikr Config
      flat_pikr_config: {
        mode: 'range',
        // Added 2 days to endDate because we change date query from pickup & delivery to delivery only to speed up.
        defaultDate: [new Date().fp_incr(-7), new Date().fp_incr(9)],
      },

      // Load Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},

      allDispatchers: null,
      allTags: null,
      pipelineFilter: null,
      isPipelineSidebarActive: false,
      defaultColumnOptions: [
        'Load',
        'Load Reference',
        'Internal Reference',
        'Ship Date',
        'Del. Date',
        'Customer',
        'Pick up',
        'Delivery',
        'Drivers',
        'Notes',
        'Load Status',
        'Pickup No.',
        'Delivery No.',
        'Trucks',
        'Trailers',
        'Action',
      ],
    };
  },

  provide() {
    return {
      allDispatchers: () => this.allDispatchers || [],
      allTags: () => this.allTags || [],
      allDrivers: () => this.allDrivers || [],
      loadStatuses: () => this.loadStatuses || [],
      allTrucks: () => this.allTrucks || [],
      allTrailers: () => this.allTrailers || [],
    };
  },

  computed: {
    ...mapState('load', {
      allDriverTruckTrailerForLoadDriver: 'allDriverTruckTrailerForLoadDriver',
    }),
    ...mapGetters('auth', [
      'userRole',
      'userCustomization',
      'companyFeatureAccess',
    ]),
    filteredOptions: function () {
      var self = this;
      return this.filtersOptions.filter(function (data) {
        return data.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      });
    },
    ...mapGetters('customization', ['customization']),

    isLoadDeleted() {
      const { value } = this.load_status;
      return value && value === 'deleted';
    },

    isNonSpreadsheetUi() {
      return ['list', 'pipline', 'calendar', 'calendar2'].includes(
        this.activeComponent
      );
    },
    currentUserCustomizations() {
      if (!this.userCustomization || !this.userCustomization.loadPipeline) {
        return {
          filters: {},
        };
      }

      const {
        loadPipeline: { show, filters },
      } = this.userCustomization || {};

      return {
        ...(show || {}),
        filters: filters || {},
      };
    },
    loadStatuses() {
      return config.status.loadWithLabels;
    },
    allDrivers() {
      const { drivers = [] } = this.allDriverTruckTrailerForLoadDriver || {};
      return drivers.map(({ name, id, ...driver }) => ({
        ...driver,
        fullName: name,
        id,
      }));
    },
    allTrucks() {
      const { trucks = [] } = this.allDriverTruckTrailerForLoadDriver || {};
      return trucks;
    },
    allTrailers() {
      const { trailers = [] } = this.allDriverTruckTrailerForLoadDriver || {};
      return trailers;
    },
    showCompanyInternalReferenceForCompanies() {
      return config.showCompanyInternalReferenceForCompanies.includes(
        this.user.admin_company_detail_id
      );
    },
    dispatchListShowCompanyPickAndDeliveryNumbers() {
      return config.dispatchListShowCompanyPickAndDeliveryNumbers.includes(
        this.user.admin_company_detail_id
      );
    },
    filteredDispatchOptions() {
      if (this.companyFeatureAccess.includes('basic')) {
        return this.items.filter((i) => i.title === 'Pipeline');
      } else if (
        [23, 32, 36, 307, 348].includes(this.user.admin_company_detail_id)
      ) {
        return this.items.map((i) => {
          if (i.componentName == 'calendar') {
            i.componentName = 'calendar2';
          }
          return i;
        });
      } else {
        return this.items;
      }
    },
  },

  created() {
    this.setDefaultTabConfig();
    this.getTags(); // Needed for component as well as to pass to filters
    this.getAllDispatchers(); // Needed to be passed to filters
    this.initSavedPipelineFilters();
    this.configDateFlatPickr();
    if (!this.customization || this.customization.length == 0) {
      this.getCustomizations();
    }
    this.getAllDriverTruckTrailerForLoadDriver();

    this.selectedColumnList = [...this.defaultColumnOptions];
    this.listColumnOptions = [...this.defaultColumnOptions];
    if (!this.showCompanyInternalReferenceForCompanies) {
      this.selectedColumnList = this.selectedColumnList.filter(
        (item) => item !== 'Internal Reference'
      );
      // Shall not let users see the column if they cannot use it.
      this.listColumnOptions = [...this.selectedColumnList];
    }
    if (!this.dispatchListShowCompanyPickAndDeliveryNumbers) {
      this.selectedColumnList = this.selectedColumnList.filter(
        (item) => item !== 'Pickup No.' && item !== 'Delivery No.'
      );
    }
  },

  methods: {
    /**
     * Sets the default tab configuration based on the user's role and company details.
     */
    setDefaultTabConfig() {
      for (let key in this.roleDefaultListView) {
        let value = this.roleDefaultListView[key];
        if (value === this.userRole) {
          this.activeComponent = 'list';
          return;
        }
      }

      config.listDefaultTabCompanies.includes(this.user.admin_company_detail_id)
        ? (this.activeComponent = 'list')
        : (this.activeComponent = 'pipline');
    },
    getAllDriverTruckTrailerForLoadDriver() {
      //Api called here to get all the driver truck trailer
      this.$store.dispatch('load/getAllDriverTruckTrailerForLoadDriver');
    },
    getCustomizations() {
      this.$store.dispatch('customization/getCustomizations').catch((error) => {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      });
    },

    updateSelectedLoadsList(selectedLoadsList) {
      this.selectedLoadsList = selectedLoadsList;
    },

    // Confirm Dialog
    onConfirm(options) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        ...options,
      });
    },

    submitMassInvoice() {
      const loadArray = [];
      for (let i = 0; i < this.selectedLoadsList.length; ++i) {
        if (
          this.selectedLoadsList[i].status != config.status.load.delivered &&
          this.selectedLoadsList[i].status != config.status.load.invoice_created
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text:
              'Load ' +
              this.selectedLoadsList[i].load_unique_id +
              ' has to be in delivered or or invoice generated status.',
          });
          return;
        }
        loadArray.push(this.selectedLoadsList[i].load_id);
      }

      if (!this.submitMassInvoiceChecker(loadArray)) {
        return;
      }

      this.$vs.loading();
      const payload = {
        invoiceNumber: parseInt(this.massInvoiceNumber),
        loadIds: loadArray,
      };

      this.$store
        .dispatch('load/generateMassInvoice', payload)
        .then((response) => {
          if (response.result) {
            this.$vs.notify({
              color: 'success',
              title: 'Success',
              text: 'Mass invoice generated successfully',
            });
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            time: 10000,
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$refs.components.refreshLoadList();
          this.massInvoicePopup = false;
          this.$vs.loading.close();
        });
    },

    submitMassInvoiceQbd() {
      const loadArray = this.selectedLoadsList.map((load) => load.load_id);

      if (!this.submitMassInvoiceChecker(loadArray)) {
        return;
      }

      for (let i = 0; i < this.selectedLoadsList.length; ++i) {
        let truckNumber = '';
        if (
          this.selectedLoadsList[i].drivers &&
          this.selectedLoadsList[i].drivers.length
        ) {
          this.selectedLoadsList[i].drivers.forEach((driver) => {
            truckNumber += driver.truck.truck_number;
          });
        }
        if (!truckNumber) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text:
              'Load ' +
              this.selectedLoadsList[i].load_unique_id +
              ' has no truck assigned.',
          });
          return;
        }
      }

      const payload = {
        invoiceNumber: parseInt(this.massInvoiceNumber),
        loadIds: loadArray,
      };

      this.$store
        .dispatch('load/syncMassInvoiceToQbd', payload)
        .then((response) => {
          this.$vs.notify({
            color: 'success',
            title: 'Added to queue',
            text: 'Invoice sync request added to queue.',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
            time: 10000,
          });
        })
        .finally(() => {
          this.$refs.components.refreshLoadList();
          this.massInvoiceQbdPopup = false;
        });
    },

    onConfirmRequestMassInvoicePayment() {
      const options = {
        title: 'Mass Invoice Payment Request',
        text: 'Are you sure you want to request mass invoice payment?',
        accept: () => this.requestMassInvoicePayment(),
      };

      this.onConfirm(options);
    },

    requestMassInvoicePayment() {
      const loadArray = [];
      for (let i = 0; i < this.selectedLoadsList.length; ++i) {
        if (
          this.selectedLoadsList[i].status !==
            config.status.load.invoice_sent &&
          this.selectedLoadsList[i].status !==
            config.status.load.invoice_created
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text:
              'Load ' +
              this.selectedLoadsList[i].load_unique_id +
              ' has to be in payment requested or invoice generated status.',
          });
          return;
        }
        loadArray.push(this.selectedLoadsList[i].load_id);
      }

      if (!this.submitMassInvoiceChecker(loadArray, false)) {
        return;
      }

      /*
      // TODO: Should let backend return the separate invoice for mass invoice value, then turn this back on.
      const checkSameMassInvoice =
        this.selectedLoadsList.every(
          (item) =>
            item.invoice_file_name ===
            this.selectedLoadsList[0].invoice_file_name
        ) &&
        this.selectedLoadsList[0].invoice_file_name.startsWith("mass-invoice");
      if (!checkSameMassInvoice) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: "Selected loads do not have the same mass invoice pdf.",
        });
        return false;
      }
      */

      const payload = {
        loadIds: loadArray,
      };

      this.$store
        .dispatch('load/requestMassInvoicePayment', payload)
        .then((response) => {
          if (response.result) {
            this.$vs.notify({
              color: 'success',
              title: 'Success',
              text: 'Mass invoice payment requested.',
            });
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$refs.components.refreshLoadList();
        });
    },

    onConfirmMultipleLoadsPaymentReceived() {
      const options = {
        title: 'Payment Received',
        text: 'Are you sure you want to mark selected loads as paid?',
        accept: () => this.multipleLoadsPaymentReceived(),
      };

      this.onConfirm(options);
    },

    multipleLoadsPaymentReceived() {
      const loadArray = [];
      for (let i = 0; i < this.selectedLoadsList.length; ++i) {
        if (
          this.selectedLoadsList[i].status !== config.status.load.invoice_sent
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text:
              'Load ' +
              this.selectedLoadsList[i].load_unique_id +
              ' has to be in payment requested status.',
          });
          return;
        }
        loadArray.push(this.selectedLoadsList[i].load_id);
      }

      const payload = {
        loadIds: loadArray,
      };

      this.$store
        .dispatch('load/multipleLoadsPaymentReceived', payload)
        .then((response) => {
          if (response.result) {
            this.$vs.notify({
              color: 'success',
              title: 'Success',
              text: 'Payment status updated.',
            });
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$refs.components.refreshLoadList();
        });
    },

    onConfirmDeleteMultipleLoads() {
      const options = {
        title: 'Confirm Delete',
        color: 'danger',
        text: 'Are you sure you want to delete selected loads?',
        accept: () => this.deleteSelectedLoads(),
      };

      this.onConfirm(options);
    },

    submitMassInvoiceChecker(loadArray, checkInvoiceNumber = true) {
      if (loadArray.length < 2) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select at least two loads.',
        });
        return false;
      }

      if (checkInvoiceNumber) {
        if (
          !Number.isInteger(parseFloat(this.massInvoiceNumber)) ||
          this.massInvoiceNumber <= 0
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Please input a positive integer for invoice number.',
          });
          return false;
        }
      }

      const checkSameCustomer = this.selectedLoadsList.every(
        (item) =>
          item.customer.customer_id ===
          this.selectedLoadsList[0].customer.customer_id
      );
      if (!checkSameCustomer) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Load customers not the same.',
        });
        return false;
      }

      const checkSameTag = this.selectedLoadsList.every(
        (item) => item.tag_id === this.selectedLoadsList[0].tag_id
      );
      if (!checkSameTag) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Load tags not the same.',
        });
        return false;
      }

      return true;
    },

    checkColumnVisibility(title) {
      if (title === 'Columns' && this.userRole === 'warehouse_operator') {
        return false;
      }
      return true;
    },

    // Remove Filters method with close btn
    removeFilter(val) {
      const index = this.showsFilters.indexOf(val);
      if (index > -1) {
        this.showsFilters.splice(index, 1);
        if (val === this.selectedFiltersOptions[0]) {
          this.selectedColumnList = [
            'Load',
            'Load Reference',
            'Ship Date',
            'Del. Date',
            'Customer',
            'Pick up',
            'Delivery',
            'Drivers',
            'Notes',
            'Trucks',
            'Trailers',
            'Load Status',
            'Action',
          ];
        } else if (val === this.selectedFiltersOptions[1]) {
          this.selected_tag = '';
        } else if (val === this.selectedFiltersOptions[2]) {
          this.direction = '';
        } else if (val === this.selectedFiltersOptions[3]) {
          this.load_status = '';
        } else {
          this.showsFilters = [];
        }
      }
    },
    // Toggle filters method
    handleFilterOption(item) {
      if (!this.showsFilters.includes(item)) {
        this.showsFilters.push(item);
      }
    },
    changeComponent(newComponent) {
      if (newComponent === this.activeComponent) return;

      this.load_status = this.loadStatusOptions[0];
      this.activeComponent = newComponent;
      this.isPipelineSidebarActive = false;

      // this.configDateFlatPickr()
    },

    async getTags() {
      const { payload } = await this.$store.dispatch('tag/getAllTags');
      const { data: allTags } = payload || {};
      if (allTags) {
        this.allTags = allTags;
      }

      this.tagOptions = [{ business_name: 'All companies' }];
      if (this.userRole != 'tag_operator') {
        this.tagOptions.push({
          tag_id: config.parent,
          business_name: 'Parent company',
        });
      }

      const currentUserTagIds = await this.$store.dispatch(
        'company-user/getCurrentUserTagIds'
      );
      if (currentUserTagIds.length > 0) {
        const currentUserTags = payload.data.filter((tag) =>
          currentUserTagIds.includes(tag.tag_id)
        );
        this.tagOptions = [...this.tagOptions, ...currentUserTags];
      } else {
        this.tagOptions = [...this.tagOptions, ...payload.data];
      }
      /*if (this.userRole == "tag_operator") {
        const currentUserTagIds = await this.$store.dispatch(
          "company-user/getCurrentUserTagIds"
        );
        const currentUserTags = payload.data.filter((tag) =>
          currentUserTagIds.includes(tag.tag_id)
        );
        this.tagOptions = [
          { business_name: "All companies" },
          ...currentUserTags,
        ];
      } else {
        this.tagOptions = [
          { business_name: "All companies" },
          { tag_id: config.parent, business_name: "Parent company" },
          ...payload.data,
        ];
      }*/
    },

    async getAllDispatchers() {
      try {
        const {
          payload: { data: allDispatchers },
        } = await this.$store.dispatch('company-user/getAllDispatchers');
        if (allDispatchers) {
          this.allDispatchers = allDispatchers;
        }
      } catch (e) {
        console.error(e);
      }
    },

    handleFlatPickerInput(selectedDates, dateStr, instance) {
      // if (selectedDates.length <= 1) return
      // this.configDateFlatPickr()
      this.handleFlatPicker(selectedDates, dateStr, instance);
      /*if (this.activeComponent == 'pipline') {
        this.handleFlatPickerForPiplin(selectedDates, dateStr, instance)
      } else {
        this.handleFlatPickerForList(selectedDates, dateStr, instance)
      }*/
    },

    handleFlatPicker(selectedDates, dateStr, instance) {
      this.date = dateStr;

      const selectedDateFormat = dateStr.split(' to ');
      const startDate = new Date(selectedDateFormat[0]);
      const skipDay = 396; // 13 months

      startDate.setDate(startDate.getDate() - skipDay);
      this.$set(
        this.flat_pikr_config,
        'minDate',
        formatDate(new Date(startDate))
      );

      startDate.setDate(startDate.getDate() + skipDay * 2);
      this.$set(
        this.flat_pikr_config,
        'maxDate',
        formatDate(new Date(startDate))
      );

      if (selectedDates.length >= 2) {
        this.$set(this.flat_pikr_config, 'minDate', '');
        this.$set(this.flat_pikr_config, 'maxDate', '');
      }
    },

    /*handleFlatPickerForPiplin (selectedDates, dateStr, instance) {
      this.date = dateStr

      const selectedDateFormat = dateStr.split(' to ')
      const startDate = new Date(selectedDateFormat[0])
      const skipDay = 30

      startDate.setDate(startDate.getDate() - skipDay)
      this.$set(this.flat_pikr_config, 'minDate', formatDate(new Date(startDate)))

      startDate.setDate(startDate.getDate() + (skipDay * 2))
      this.$set(this.flat_pikr_config, 'maxDate', formatDate(new Date(startDate)))

      if (selectedDates.length >= 2) {
        this.$set(this.flat_pikr_config, 'minDate', '')
        this.$set(this.flat_pikr_config, 'maxDate', '')
      }
    },

    handleFlatPickerForList (selectedDates, dateStr, instance) {
      this.date = dateStr
    },*/

    // Now this is only called when page is created.
    configDateFlatPickr() {
      /*this.flat_pikr_config = this.flat_pikr_config_options[this.activeComponent]

      if (!this.flat_pikr_config) return*/

      const defaultDate = this.flat_pikr_config.defaultDate;
      this.date = `${formatDate(defaultDate[0])} to ${formatDate(
        defaultDate[1]
      )}`;
    },

    // Sidebar
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },

    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },

    viewData(data) {
      this.sidebarData = data;
      this.sidebarData.viewOnly = true;
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },

    closeSidebar() {
      this.addNewDataSidebar = false;
    },

    async exportExcel() {
      try {
        const selectedDates = this.date.split(' to ');
        if (selectedDates.length <= 1) return;

        var payload = {
          filter: {
            startDate: selectedDates[0],
            endDate: selectedDates[1],
            toDownload: 1,
          },
        };

        if (payload.filter.hasOwnProperty('toDownload')) {
          this.$vs.loading({
            container: '#button-export-loading',
            scale: 0.45,
          });
        }
        const data = await this.$store.dispatch(
          'load/getLoadDatatable',
          payload
        );
        if (payload.filter.hasOwnProperty('toDownload')) {
          window.location = data.payload.download_url;
          return 0;
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        if (payload.filter.hasOwnProperty('toDownload')) {
          this.$vs.loading.close('#button-export-loading > .con-vs-loading');
        }
      }
    },

    updateActiveTab(currentTab) {
      this.activeComponent = currentTab;
    },

    updateDateRange(dataRange) {
      this.date = dataRange;
    },

    refreshPageContent() {
      const { refreshPageContent } = this.$refs.components || {};
      if (refreshPageContent) {
        this.$refs.components.refreshPageContent();
      }
    },

    togglePipelineSidebar() {
      this.isPipelineSidebarActive = !this.isPipelineSidebarActive;
    },

    async updatePipelineHideColumns(column) {
      try {
        if (!column) return;

        const { status } = await this.$store.dispatch(
          'pipelineV2/setUserCustomization',
          { hideColumns: { ...column } }
        );

        if (status === 200) {
          const currentHideColumns =
            (this.currentUserCustomizations &&
              this.currentUserCustomizations.hideColumns) ||
            {};
          const { filters, ...rest } = this.currentUserCustomizations || {};

          this.$store.commit('auth/setUserCustomization', {
            loadPipeline: {
              show: {
                ...rest,
                hideColumns: { ...currentHideColumns, ...column },
              },
              filters: filters || {},
            },
          });
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async updatePipelineShowLabels(label) {
      try {
        if (!label) return;

        const { status } = await this.$store.dispatch(
          'pipelineV2/setUserCustomization',
          { showLabels: { ...label } }
        );

        if (status === 200) {
          const currentShowLabels =
            (this.currentUserCustomizations &&
              this.currentUserCustomizations.showLabels) ||
            {};
          const { filters, ...rest } = this.currentUserCustomizations || {};

          this.$store.commit('auth/setUserCustomization', {
            loadPipeline: {
              show: {
                ...rest,
                showLabels: { ...currentShowLabels, ...label },
              },
              filters: filters || {},
            },
          });
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    refreshCustomerList() {
      if (this.$refs.loadSidebar) {
        this.$refs.loadSidebar.refreshCustomerList();
      }
    },

    initSavedPipelineFilters() {
      const { filters } = this.currentUserCustomizations || {};
      if (!filters) return;

      const filter = {};
      (filters.conditions || []).forEach((condition) => {
        if (condition.column) {
          filter[condition.column] = condition.value;
        }
      });

      const res = {};
      if (filter.loadDispatcher) res.dispatcherIds = filter.loadDispatcher;
      if (filter.loadTag) res.tagIds = filter.loadTag;
      if (filter.loadDriver) res.driverIds = filter.loadDriver;

      this.pipelineFilter = res;
    },

    async updatePipelineFilters(filters) {
      try {
        if (!filters) return;

        const isNotEmpty = Object.values(filters).some((value) => value);

        const { status } = await this.$store.dispatch(
          'pipelineV2/setUserCustomization',
          { filters: isNotEmpty ? JSON.stringify(filters) : null }
        );

        if (status === 200) {
          const { filters: _, ...rest } = this.currentUserCustomizations || {};

          this.$store.commit('auth/setUserCustomization', {
            loadPipeline: {
              show: { ...rest } || {},
              filters: { ...filters } || {},
            },
          });
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },

    deleteSelectedLoads() {
      const loadArray = this.selectedLoadsList.map((load) => load.load_id);
      const payload = {
        loadIds: loadArray,
      };

      this.$store
        .dispatch('load/batchDeleteLoads', payload)
        .then((response) => {
          if (response.result) {
            this.$vs.notify({
              color: 'success',
              title: 'Success',
              text: 'Selected loads deleted successfully.',
            });

            // Assuming you have a method to refresh your table data
            this.$refs.components.refreshLoadList();
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
.invisible-border {
  border: 1px solid transparent;
}
.active {
  border-bottom: 2px solid rgba(var(--vs-primary), 1);
  color: rgba(var(--vs-primary), 1) !important;
}
.active-filter {
  font-size: 11px;
  text-transform: uppercase;
}
.add-filter-link {
  color: #1c80cf;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
}
.form-group input[type='search'] {
  border: none;
  background: transparent;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
}
.form-group input[type='search']::placeholder {
  color: #bbb;
}
.form-group {
  color: #555;
  display: flex;
  padding: 2px;
  border: 1px solid #e4e4e4;
  border-radius: 50px;
  margin-top: 12px;
}
.form-group .search-icon {
  text-indent: -999px;
  overflow: hidden;
  width: 40px;
  padding: 0;
  margin: 0;
  background-size: 12px !important;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat center;
  cursor: pointer;
  opacity: 0.7;
}

.form-group .search-icon:hover {
  opacity: 1;
}
.add-filter-heading {
  font-size: 11px;
  color: rgba(34, 34, 34, 0.3);
  font-weight: 500;
}
.list {
  margin-top: 12px;
  /* height: 185px; */
  overflow: auto;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
}
.list > a {
  padding: 8px 15px;
  cursor: pointer;
  color: #343434;
}
.list > a:hover {
  background-color: #f0f1f3;
}
.list a:first-child {
  background-color: rgba(var(--vs-primary), 1);
  color: #fff;
}
.filter-input {
  min-width: 13.5rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
  max-width: 300px;
}

.filter-dropdown {
  top: 43px;
  position: absolute;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 10%);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.v-select,
.con-select {
  width: 100%;
}

.filter-dropdown.vs-dropdown-menu:after {
  border: 0 !important;
}
.filter-btn {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 5px 12px;
  align-items: center;
  justify-content: space-around;
  display: flex;
}
.a-icon {
  color: #626262;
}

.popper {
  background: #fff;
  box-shadow: 0px 4px 24px lightgrey;
  min-width: 150px;
  text-align: left;
}

.arrow[data-hide] {
  visibility: hidden;
}

.spreadsheet-list-in-dispatch-header {
  /* Medium devices (phones, 1080px and down) */
  @media only screen and (max-width: 1080px) {
    max-width: 40%;
  }
  /* Large devices (laptops/desktops, 1080px and up till 1600px) */
  @media only screen and (min-width: 1080px) and (max-width: 1600px) {
    max-width: 50%;
  }
  /* Extra large devices (large laptops and desktops, 1600px and up) */
  @media only screen and (min-width: 1600px) {
    max-width: 70%;
  }
}
.vue-portal-target {
  ::v-deep {
    .view-bar-container {
      box-shadow: none;
      margin-bottom: 8px;
      overflow-x: hidden;

      &:hover {
        overflow-x: scroll;
        margin-bottom: 0px;
      }

      &::-webkit-scrollbar {
        height: 8px;
        overflow: visible;
      }

      &::-webkit-scrollbar-thumb {
        border-style: solid;
        border-color: transparent;
        border-width: 4px;
        background-color: #dadce0;
        border-radius: 8px;
        box-shadow: none;
      }

      // Mozilla Firefox scrollbar
      scrollbar-width: thin;
      scrollbar-color: #dadce0 #dadce0;
    }
  }
}
</style>

<style lang="scss">
.dispatch-customer-sidebar {
  .vs-sidebar {
    z-index: 52020 !important;
  }
}
</style>
