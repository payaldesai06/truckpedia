<template>
  <thead ref="dropdownParentNode">
    <tr>
      <th style="width: 30px"></th>
      <th hidden>Id</th>
      <th
        v-for="(items, index) in modifiedHeaders"
        :key="index"
        :id="items.id"
        :sheetId="subsheetId"
        :spreadsheetId="spreadsheetId"
        :style="{ width: items.width }"
        class="table-header"
        @dragstart="dragStart(items)"
        @dragenter.prevent
        @dragover.prevent
        @drop="dropDown(items)"
        draggable
      >
        <div class="flex items-center justify-between w-full column-width">
          <div>
            <!-- Rename input  -->
            <!-- <input
              class="rename-input"
              v-if="rename == items.name"
              :value="items.name"
            /> -->
            <!-- Rename input end  -->
            <!-- Table column heading  -->
            <span class="table-heading truncate drag-cursor">{{
              items.name
            }}</span>
            <!-- Table column heading end -->
          </div>
          <!-- Column header property dropdown  -->
          <div class="header-dropdown" v-if="accessLevel < 3">
            <vs-dropdown
              :ref="`filterDropdown_${items.id}`"
              vs-custom-content
              vs-trigger-click
              @click="
                items.isFilterable
                  ? initDropdownFilterOptions(items.filterColumnName)
                  : {}
              "
            >
              <div class="text-right">
                <vs-icon icon="arrow_drop_down" />
              </div>

              <vs-dropdown-menu class="dropdown-items">
                <vs-dropdown-item>
                  <div
                    class="cursor-pointer flex items-center dropdown-item-hover"
                    @click="openDeleteWarningDialog(items.id)"
                  >
                    <vs-icon icon="delete"></vs-icon>
                    <p class="ml-1 text-sm">Delete Column</p>
                  </div>
                </vs-dropdown-item>
                <template v-if="items.isSortable">
                  <vs-dropdown-item
                    v-for="(value, index) in sortingOptions"
                    :key="index"
                  >
                    <div
                      class="cursor-pointer flex items-center dropdown-item-hover"
                      @click="selectSortOption(value, items)"
                    >
                      <vs-icon
                        v-if="
                          !!sortSchemaMap[
                            `${items.predefinedColumn}_${value.value}_${items.id}`
                          ]
                        "
                        size="14px"
                        icon="check"
                      />
                      <span v-else style="width: 21px"></span>
                      <!-- 14 of icon and 7 of margin -->
                      <p class="ml-1 text-sm">Sort {{ value.text }}</p>
                    </div>
                  </vs-dropdown-item>
                </template>
                <template v-if="items.isFilterable">
                  <vs-divider class="my-2" />
                  <div class="flex justify-end">
                    <vs-button
                      class="add-filter-btn"
                      color="primary"
                      type="flat"
                      size="small"
                      :disabled="!filterConditions.cmp"
                      @click.stop="
                        addNewFilter(
                          items.filterColumnName,
                          `filterDropdown_${items.id}`
                        )
                      "
                    >
                      Save filter
                    </vs-button>
                    <vs-button
                      class="add-filter-btn ml-2"
                      color="danger"
                      type="flat"
                      size="small"
                      :disabled="isClearBtnDisabled"
                      @click.stop="
                        removeExistingFilter(
                          items.filterColumnName,
                          `filterDropdown_${items.id}`
                        )
                      "
                    >
                      Clear
                    </vs-button>
                  </div>
                  <div class="cursor-pointer flex items-center mt-2">
                    <Dropdown
                      class="w-full"
                      placeholder="Condition"
                      v-model="filterConditions.cmp"
                      :options="operators[items.filterColumnName]"
                    >
                      <template #value="slotProps">
                        <span v-if="slotProps.value">
                          {{ sentenceCase(slotProps.value) }}
                        </span>
                        <span v-else>{{ slotProps.placeholder }}</span>
                      </template>
                      <template #option="slotProps">
                        <span>
                          {{ sentenceCase(slotProps.option) }}
                        </span>
                      </template>
                    </Dropdown>
                  </div>
                  <div
                    v-if="
                      ['loadShipDate', 'loadDeliveryDate'].includes(
                        items.filterColumnName
                      )
                    "
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <Dropdown
                      class="w-full"
                      placeholder="When"
                      v-model="filterConditions.dateType"
                      :options="dateOptions"
                      optionLabel="text"
                      optionValue="value"
                      :disabled="!filterConditions.cmp"
                      @input="
                        (val) => {
                          val === 'date' ? (filterConditions.value = null) : {};
                        }
                      "
                    >
                      <template #value="slotProps">
                        <span v-if="slotProps.value">
                          {{ sentenceCase(slotProps.value) }}
                        </span>
                        <span v-else>{{ slotProps.placeholder }}</span>
                      </template>
                      <template #option="slotProps">
                        <span>
                          {{ sentenceCase(slotProps.option.text) }}
                        </span>
                      </template>
                    </Dropdown>
                  </div>
                  <div
                    v-if="
                      ['loadShipDate', 'loadDeliveryDate'].includes(
                        items.filterColumnName
                      ) && filterConditions.dateType === 'date'
                    "
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <flat-pickr
                      placeholder="Select date"
                      class="custom-select"
                      v-model="filterConditions.value"
                    />
                  </div>
                  <div
                    v-if="
                      ['loadDriver', 'loadDispatcher', 'loadTag'].includes(
                        items.filterColumnName
                      )
                    "
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <custom-multiSelect
                      v-if="items.filterColumnName == 'loadDriver'"
                      :style="{ width: '170px' }"
                      v-model="filterConditions.value"
                      :options="driverOptions"
                      :disabled="!filterConditions.cmp"
                      optionLabel="name"
                      optionValue="id"
                      @input="filterConditions.value = $event"
                    />
                    <custom-multiSelect
                      v-if="items.filterColumnName == 'loadDispatcher'"
                      :style="{ width: '170px' }"
                      v-model="filterConditions.value"
                      :options="dispatcherOptions"
                      :disabled="!filterConditions.cmp"
                      optionLabel="fullName"
                      optionValue="id"
                      @input="filterConditions.value = $event"
                    />
                    <custom-multiSelect
                      v-if="items.filterColumnName == 'loadTag'"
                      :style="{ width: '170px' }"
                      v-model="filterConditions.value"
                      :options="tagOptions"
                      :disabled="!filterConditions.cmp"
                      optionLabel="fullName"
                      optionValue="id"
                      @input="filterConditions.value = $event"
                    />
                  </div>
                  <div
                    v-if="
                      ['loadShipper', 'loadReceiver'].includes(
                        items.filterColumnName
                      )
                    "
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <vs-input
                      class="w-full"
                      v-model="filterConditions.value"
                      :disabled="!filterConditions.cmp"
                      type="filled"
                      color="primary"
                    />
                  </div>
                  <div
                    v-if="items.filterColumnName === 'loadCustomer'"
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <custom-multiSelect
                      :style="{ width: '170px' }"
                      v-model="filterConditions.value"
                      :options="customerOptions"
                      :disabled="!filterConditions.cmp"
                      optionLabel="company_name"
                      optionValue="customer_id"
                      @input="filterConditions.value = $event"
                    />
                  </div>
                  <div
                    v-if="items.filterColumnName === 'loadTruck'"
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <custom-multiSelect
                      :style="{ width: '170px' }"
                      v-model="filterConditions.value"
                      :options="truckOptions"
                      optionLabel="number"
                      optionValue="id"
                    />
                  </div>
                  <div
                    v-if="items.filterColumnName === 'loadTrailer'"
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <custom-multiSelect
                      :style="{ width: '170px' }"
                      v-model="filterConditions.value"
                      :options="trailerOptions"
                      optionLabel="number"
                      optionValue="id"
                    />
                  </div>
                  <div
                    v-if="
                      items.filterColumnName === 'loadThirdPartyCarrier' &&
                      filterConditions.cmp === 'isAnyOf'
                    "
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <custom-multiSelect
                      :style="{ width: '170px' }"
                      v-model="filterConditions.value"
                      :options="thirdPartyCarrierOptions"
                      :disabled="!filterConditions.cmp"
                      optionLabel="company_name"
                      optionValue="customer_id"
                      @input="filterConditions.value = $event"
                    />
                  </div>
                  <div
                    v-if="items.filterColumnName === 'loadStatus'"
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <custom-multiSelect
                      :style="{ width: '170px' }"
                      v-model="filterConditions.value"
                      :options="loadStatuses"
                      :disabled="!filterConditions.cmp"
                      @input="filterConditions.value = $event"
                    />
                  </div>
                  <div
                    v-if="items.filterColumnName === 'loadContainerStatus'"
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <Dropdown
                      class="w-full"
                      placeholder=""
                      v-model="filterConditions.value"
                      :options="loadContainerStatuses"
                      optionLabel="label"
                      optionValue="value"
                      :disabled="!filterConditions.cmp"
                    />
                  </div>
                  <div
                    v-if="items.filterColumnName === 'loadContainerLocation'"
                    class="cursor-pointer flex items-center mt-2"
                  >
                    <custom-multiSelect
                      :style="{ width: '170px' }"
                      v-model="filterConditions.value"
                      :options="loadContainerLocation"
                      :disabled="!filterConditions.cmp"
                      optionLabel="label"
                      optionValue="value"
                      @input="filterConditions.value = $event"
                    />
                  </div>
                </template>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
          <!-- Column header property dropdown end -->
        </div>
      </th>
      <th class="cursor-pointer" style="width: 50px" v-if="accessLevel < 3">
        <div @click="getCreatedCustomColumns">
          <vs-dropdown vs-custom-content vs-trigger-click>
            <!-- Add columns dropdown  -->
            <div class="a-icon text-black">
              <span>
                <vs-icon icon="add"></vs-icon>
              </span>
            </div>

            <vs-dropdown-menu>
              <div class="add-container">
                <div>
                  <div class="fields-container">
                    <div class="p-2">
                      <input
                        type="text"
                        class="px-3"
                        placeholder="Find a field"
                        v-model="searchInput"
                      />
                    </div>
                    <div class="list-scrollbar">
                      <div class="p-5">
                        <!-- Predefined and Custom Created Columns -->
                        <div
                          class="flex items-center item-hover p-2"
                          v-for="(item, index) in predefinedAndCreatedColumns"
                          :key="index"
                          :class="[
                            (item.preDefined &&
                              predefinedColumns.includes(item.key)) ||
                            (!item.preDefined &&
                              existingCustomColumnId.includes(item.columnId))
                              ? 'column-active'
                              : '',
                          ]"
                          @click="
                            handleActiveColumn(
                              item.preDefined ? item.key : item.columnId,
                              item.preDefined
                                ? 'predefinedColumn'
                                : 'createdCustomColumns'
                            )
                          "
                        >
                          <template
                            v-if="
                              item.preDefined && item.name === 'Bill To Code'
                            "
                          >
                            <div class="ml-2">
                              <!-- Variable from accessMixin -->
                              {{
                                showBillToCodeAsJobCode ? 'Job #' : item.name
                              }}
                            </div>
                          </template>
                          <div v-else class="ml-2">
                            {{ item.name }}
                          </div>
                        </div>
                        <!-- Predefined and Custom Created Columns End -->

                        <!-- Custom column types  -->
                        <div
                          class="flex items-center item-hover p-2"
                          v-for="(value, key, index) in customColumns"
                          :key="`${value}_${index}`"
                          :class="[
                            activeColumn.includes(key) ? 'column-active' : '',
                          ]"
                          @click="handleActiveColumn(key, 'customColumn')"
                        >
                          <div class="ml-2">{{ key }}</div>
                        </div>
                        <!-- Custom column types end -->
                      </div>
                    </div>
                  </div>
                </div>

                <vs-input
                  placeholder="Custom column name"
                  class="w-full stoke-shadow mt-5"
                  :disabled="disableCustomColumnNameInput"
                  v-model="customFieldName"
                />
                <div class="flex justify-between items-center mt-5">
                  <vs-button
                    color="primary"
                    :disabled="validateSeletedColumn"
                    @click="handleCreateField"
                    >Submit</vs-button
                  >
                  <vs-button color="danger" type="border" @click="closeDropdown"
                    >Cancel</vs-button
                  >
                </div>
              </div>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <!-- Add columns dropdown end -->
      </th>
    </tr>
  </thead>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import config from '@/config/constants';
import { sentenceCase } from '@/helpers/helper';

import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    CustomMultiSelect: () => import('./CustomMultiselect.vue'),
  },
  inject: [
    'allDrivers',
    'allTags',
    'allDispatchers',
    'allCustomers',
    'allTrucks',
    'allTrailers',
  ],
  data() {
    return {
      rename: '',
      customFieldName: null,
      columnList: config.spreadsheetLoadPredefinedColumns,
      searchInput: '',
      activeColumn: [],
      columnPayload: {},
      customColumnType: true,
      customColumns: {
        'Custom Column: Text': 'text',
        'Custom Column: Number': 'number',
        'Custom Column: Currency': 'currency',
      },
      columnPayloadType: '',
      existingCustomColumnId: [],
      createdCustomColumns: [],
      predefinedColumns: [],
      selectedCustomColums: [],
      dragStartOrder: null,
      dragEndOrder: null,
      deleteColumnId: null,
      filterConditions: {
        column: '',
        cmp: '',
        value: '',
        dateType: '',
      },
      dateOptions: [
        { text: 'today', value: 'today' },
        { text: 'a specific date', value: 'date' },
      ],
      operators: config.spreadsheetColFilterOperators,
    };
  },
  props: {
    spreadsheetId: {
      type: Number,
      required: true,
    },
    headers: {
      required: true,
      type: Array,
    },
    subsheetId: {
      type: Number,
      required: true,
    },
    accessLevel: {
      required: false,
    },
    sortingOptions: {
      type: Array,
      required: false,
      default: [],
    },
    sortSchema: {
      type: Array,
      default: [],
    },
    filters: {
      type: Object,
      default: () => {
        return {};
      },
    },
    nonSortableColumns: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters('auth', [
      'user',
      'isUserBrokerOrShipper',
      'companyFeatureAccess',
    ]),

    brokerModeForSpecificCompany() {
      return (
        config.showBrokerModeForSpecificCompanyIds.includes(
          this.user.admin_company_detail_id
        ) || this.companyFeatureAccess.includes('brokerModeForCarrier')
      );
    },

    predefinedColumnList() {
      const excludeColsForBrokerOrShipper = [
        'loadDrivers',
        'loadTrucks',
        'loadTrailers',
        'loadCustomer',
        'loadDriverPay',
        'loadInvoiceDate',
        'loadDriverHos',
      ];
      let columnList = {};
      if (this.isUserBrokerOrShipper) {
        columnList = Object.fromEntries(
          Object.entries(this.columnList).filter(
            ([_, val]) => excludeColsForBrokerOrShipper.indexOf(val) < 0
          )
        );
      } else {
        if (!this.brokerModeForSpecificCompany) {
          columnList = Object.fromEntries(
            Object.entries(this.columnList).filter(
              ([_, val]) => val !== 'loadFindCarriers'
            )
          );
        }
        columnList = Object.fromEntries(Object.entries(this.columnList));
      }

      return columnList;
    },
    validateSeletedColumn() {
      if (
        this.activeColumn.length ||
        this.predefinedColumns.length ||
        this.existingCustomColumnId.length
      ) {
        return false;
      }
      return true;
    },
    modifiedHeaders() {
      const filterableColumns = {
        loadShipDate: 'loadShipDate',
        loadDeliveryDate: 'loadDeliveryDate',
        loadShipperNames: 'loadShipper',
        loadReceiverNames: 'loadReceiver',
        loadDrivers: 'loadDriver',
        loadTag: 'loadTag',
        loadDispatcher: 'loadDispatcher',
        loadCustomer: 'loadCustomer',
        loadStatus: 'loadStatus',
        loadContainerStatus: 'loadContainerStatus',
        loadContainerLocation: 'loadContainerLocation',
        loadThirdPartyCarrier: 'loadThirdPartyCarrier',
        loadTrucks: 'loadTruck',
        loadTrailers: 'loadTrailer',
      };

      return this.headers
        .map((item) => {
          item.isFilterable = Object.keys(filterableColumns).includes(
            item.predefinedColumn
          );
          if (item.isFilterable) {
            item.filterColumnName = filterableColumns[item.predefinedColumn];
          }
          if (item.name === 'Bill To Code') {
            if (this.showBillToCodeAsJobCode) {
              // Variable from accessMixin
              item.name = 'Job #';
            }
          }

          item.isSortable =
            (this.nonSortableColumns || []).indexOf(item.predefinedColumn) ===
            -1;

          return item;
        })
        .sort((a, b) => a.order - b.order);
    },
    sortSchemaMap() {
      return (this.sortSchema || []).reduce((acc, schema) => {
        let string = `${schema.predefinedColumn}_${schema.order}_${schema.columnId}`;
        acc[string] = schema;
        return acc;
      }, {});
    },
    tagOptions() {
      return (this.allTags() || []).map((tag) => ({
        ...tag,
        id: tag.tag_id,
        fullName: tag.business_name,
      }));
    },
    dispatcherOptions() {
      return (this.allDispatchers() || []).map((dispatcher) => ({
        ...dispatcher,
        fullName: `${dispatcher.user_details.first_name} ${dispatcher.user_details.last_name}`,
        id: dispatcher.user_id,
      }));
    },
    loadStatuses() {
      return config.status.loadWithLabels;
    },
    customerOptions() {
      return (this.allCustomers() || []).filter((x) => x.type !== 'carrier');
    },
    thirdPartyCarrierOptions() {
      return (this.allCustomers() || []).filter((x) => x.type === 'carrier');
    },
    isClearBtnDisabled() {
      const dateTypeColumns = ['loadShipDate', 'loadDeliveryDate'];
      const isDateType = dateTypeColumns.includes(this.filterConditions.column);

      if (isDateType) {
        return (
          this.filterConditions.cmp === '' ||
          this.filterConditions.dateType === '' ||
          (this.filterConditions.dateType !== 'today' &&
            this.filterConditions.value === '')
        );
      }

      if (this.filterConditions.column === 'loadThirdPartyCarrier') {
        if (this.filterConditions.cmp === 'isAnyOf')
          return (
            this.filterConditions.value === '' ||
            (this.filterConditions.value || []).length === 0
          );
        else return this.filterConditions.cmp === '';
      }

      return (
        this.filterConditions.cmp === '' ||
        this.filterConditions.value === '' ||
        (this.filterConditions.value || []).length === 0
      );
    },
    disableCustomColumnNameInput() {
      const customColKeys = Object.keys(this.customColumns);
      return !(this.activeColumn || []).some((item) =>
        customColKeys.includes(item)
      );
    },
    loadContainerStatuses() {
      return config.status.loadContainerStatuses.map(({ label, value }) => ({
        label,
        value: value.toLowerCase().charAt(0),
      }));
    },
    loadContainerLocation() {
      return config.status.loadContainerLocation;
    },
    predefinedAndCreatedColumns() {
      const preArray = Object.keys(this.predefinedColumnList).map((key) => ({
        key: this.predefinedColumnList[key],
        name: key,
        preDefined: true,
      }));
      const customCreatedArray = this.createdCustomColumns.map((item) => ({
        ...item,
        preDefined: false,
      }));
      let result = [...preArray, ...customCreatedArray];
      if (this.searchInput) {
        result = result.filter((item) => {
          return this.searchInput
            .toLocaleLowerCase()
            .split(' ')
            .every((word) => item.name.toLocaleLowerCase().includes(word));
        });
      }
      return this.getSortedColumns(result);
    },
    driverOptions() {
      return this.allDrivers() || [];
    },
    truckOptions() {
      return this.allTrucks() || [];
    },
    trailerOptions() {
      return this.allTrailers() || [];
    },
  },

  methods: {
    getSortedColumns(arr) {
      // https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
      return arr.sort((a, b) => Intl.Collator().compare(a.name, b.name));
    },
    openDeleteWarningDialog(id) {
      this.deleteColumnId = id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        title: 'Delete Column',
        text: 'Would you like to delete this column?',
        accept: this.deleteColumn,
      });
    },
    dragStart(item) {
      this.dragStartOrder = item;
    },
    dropDown(item) {
      this.dragEndOrder = item;
      if (this.dragStartOrder.order !== this.dragEndOrder.order) {
        this.columnReOrderingApi(this.dragStartOrder, this.dragEndOrder);
      }
    },
    columnReOrderingApi(start, end) {
      const payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheetId,
        columnId: start.id,
        newOrder: end.order,
      };
      this.$store
        .dispatch('spreadsheet/changeColumnOrder', payload)
        .then(({ data }) => {
          if (data.message === 'Ok') {
            this.$emit('updateSpreadsheet', this.spreadsheetId);
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
    deleteColumn() {
      this.$vs.loading();
      const payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheetId,
        columnId: this.deleteColumnId,
      };
      this.$store
        .dispatch('spreadsheet/deleteColumn', payload)
        .then(({ data }) => {
          this.$emit('updateSpreadsheet', this.spreadsheetId);
          this.$vs.notify({
            color: 'success',
            title: 'Delete Column',
            text: 'Column deleted successfully',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    getCreatedCustomColumns() {
      const payload = {
        id: this.spreadsheetId,
      };
      this.$store
        .dispatch('spreadsheet/getCreatedCustomColumns', payload)
        .then(({ data }) => {
          this.createdCustomColumns = data.payload;
        });
    },
    closeDropdown() {
      this.$refs.dropdownParentNode.click();
      this.activeColumn = '';
      this.columnPayloadType = '';
      this.customColumnType = true;
      this.customFieldName = null;
      this.predefinedColumns = [];
      this.existingCustomColumnId = [];
    },
    addOrRemoveColumn(array, column) {
      if (array.includes(column)) {
        array = array.filter((item) => item != column);
      } else {
        array.push(column);
      }
    },
    handleActiveColumn(column, type) {
      this.columnPayloadType = type;

      if (type == 'predefinedColumn') {
        if (this.predefinedColumns.includes(column)) {
          this.predefinedColumns = this.predefinedColumns.filter(
            (item) => item != column
          );
        } else {
          this.predefinedColumns.push(column);
        }
      }

      if (type == 'customColumn') {
        if (this.activeColumn.includes(column)) {
          this.activeColumn = this.activeColumn.filter(
            (item) => item != column
          );
        } else {
          // Only one custom column can be selected at a time
          this.activeColumn = [column];
        }
      }

      if (type == 'createdCustomColumns') {
        if (this.existingCustomColumnId.includes(column)) {
          this.existingCustomColumnId = this.existingCustomColumnId.filter(
            (item) => item != column
          );
        } else {
          this.existingCustomColumnId.push(column);
        }
      }
    },
    handleCreateField() {
      this.columnPayload = {
        id: this.spreadsheetId,
        sheetId: this.subsheetId,
        columns: [],
      };

      this.predefinedColumns.map((item) => {
        this.columnPayload.columns.push({
          predefinedColumn: item,
        });
      });
      this.existingCustomColumnId.map((item) => {
        this.columnPayload.columns.push({
          existingCustomColumnId: item,
        });
      });

      if (this.activeColumn.length && !this.customFieldName) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Custom column name is required',
        });
        return;
      }

      if (this.customFieldName && this.activeColumn.length) {
        this.columnPayload.columns.push({
          name: this.customFieldName,
          customType: this.customColumns[this.activeColumn.find(Boolean)],
        });
      }

      this.$vs.loading();

      this.$store
        .dispatch('spreadsheet/addMultipleColumns', this.columnPayload)
        .then(() => {
          this.$emit('updateSpreadsheet', this.spreadsheetId);
          this.$vs.notify({
            color: 'success',
            title: 'Add Column',
            text: 'Column added successfully',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    handleRename(column) {
      this.rename = column;
    },
    selectSortOption(selectedSort, columData) {
      const { value } = selectedSort || {};
      const { id, predefinedColumn } = columData || {};
      const payload = {
        columnId: id,
        order: value,
        predefinedColumn,
      };
      this.$emit('updateSort', payload);
    },
    sentenceCase(str) {
      if (str !== null || str !== '') {
        return sentenceCase(str);
      }
    },
    resetFilterConditions(column) {
      const isArrayType = [
        'loadDriver',
        'loadDispatcher',
        'loadTag',
        'loadCustomer',
        'loadStatus',
        'loadThirdPartyCarrier',
      ];
      const value = isArrayType.includes(column) ? [] : '';
      const cmp =
        this.operators[column] && this.operators[column].length === 1
          ? this.operators[column][0]
          : '';

      this.filterConditions = {
        column,
        cmp,
        value,
        dateType: '',
      };
    },
    validateFilterConditions(payload) {
      const { column, cmp, value } = payload;
      const isValid =
        column &&
        cmp &&
        (column === 'loadThirdPartyCarrier' && cmp === 'isAnyOf'
          ? Array.isArray(value)
            ? value.length
            : value
          : true);

      if (!isValid) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Filter condition is incomplete.',
        });
      }

      return isValid;
    },
    addNewFilter(filterColumnName, filterDropdownId) {
      const dateTypeColumns = ['loadShipDate', 'loadDeliveryDate'];
      const payload = {
        column: filterColumnName,
        cmp: this.filterConditions.cmp,
        value: this.filterConditions.value,
      };

      if (
        dateTypeColumns.includes(filterColumnName) &&
        this.filterConditions.dateType === 'today'
      ) {
        payload.value = this.filterConditions.dateType;
      }

      if (this.validateFilterConditions(payload)) {
        this.$emit('filterByThisField', payload);

        if (this.$refs[filterDropdownId]) {
          // Close dropdown after adding filter
          this.$refs[filterDropdownId][0].vsDropdownVisible = false;
          this.$refs[filterDropdownId][0].$children
            .filter((item) => item.hasOwnProperty('dropdownVisible'))
            .forEach((item) => {
              item.dropdownVisible = false;
            });
        }
      }
    },
    getExistingFilter(columnName) {
      if (
        this.filters &&
        this.filters.conditions &&
        this.filters.conditions.length
      ) {
        return this.filters.conditions.find(
          (item) => item.column === columnName
        );
      } else return null;
    },
    initDropdownFilterOptions(columnName) {
      const filter = this.getExistingFilter(columnName);

      if (filter) {
        this.filterConditions = {
          column: filter.column,
          cmp: filter.cmp,
          value: filter.value,
          dateType: filter.value === 'today' ? 'today' : 'date',
        };
      } else this.resetFilterConditions(columnName);
    },
    removeExistingFilter(filterColumnName, filterDropdownId) {
      if (this.getExistingFilter(filterColumnName)) {
        if (this.$refs[filterDropdownId]) {
          // Close dropdown after adding filter
          this.$refs[filterDropdownId][0].vsDropdownVisible = false;
          this.$refs[filterDropdownId][0].$children
            .filter((item) => item.hasOwnProperty('dropdownVisible'))
            .forEach((item) => {
              item.dropdownVisible = false;
            });
        }
        this.$emit('removeExistingFilter', filterColumnName);
      } else this.resetFilterConditions(filterColumnName);
    },
  },
};
</script>

<style lang="scss">
.stoke-shadow {
  box-shadow: inset 0 0 0 2px rgb(0 0 0 / 5%) !important;
}
.list-scrollbar {
  height: calc((100vh - 500px) - 38px);
  min-height: 76px;
  max-height: 878px;
  pointer-events: auto;
  background: #fff;
  border-radius: 6px;
  overflow: auto;
  box-shadow: inset 0 0 0 2px rgb(0 0 0 / 5%) !important;
  .item-hover {
    cursor: pointer;
    border-radius: 6px;
    &:hover {
      background-color: #d0f0fd;
    }
  }
}
.add-container {
  min-width: 400px;
  max-width: 900px;
  max-height: 80vh;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  .fields-container {
    background-color: #f7f7f7;
    padding: 3px;
    margin-top: 20px;
    border-radius: 6px;
    box-shadow: inset 0 0 0 2px rgb(0 0 0 / 5%);
    input {
      border: 0px;
      background-color: transparent;
      width: 100%;
    }
  }
}

.drag-cursor {
  cursor: move;
  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
}

.rename-input {
  border: 2px solid lightgray;
  padding: 1px;
}
.icon {
  fill: #fff;
  color: #fff;
}
.column-active {
  background-color: #d0f0fd;
}

.handleResizeble {
  top: 4px;
  right: 0;
  bottom: 0;
  width: 3px;
  height: 30px;
  position: absolute;
  cursor: ew-resize;
}
.handleResizeble:hover,
.handleResizeble:active {
  background-color: #2d7ff9;
  border-radius: 2px;
}

.flatpickr-calendar.open,
.vs__dropdown-menu {
  z-index: 100000 !important;
}
</style>

<style lang="scss" scoped>
$borderColor: rgba(0, 0, 0, 0.1);

::v-deep {
  .vs-dropdown--custom {
    padding: 0;
    margin: 5px;
  }

  .add-filter-btn {
    .vs-button-text {
      font-weight: 500;
    }
  }
}
.dropdown-item-hover {
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
}

.custom-select,
.custom-input {
  border: 1px solid $borderColor;
  border-radius: 0px;
  padding: 6px;
  height: 35px;
  width: 100%;
  min-width: 120px;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  // border-right: 0px;

  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
}

.custom-select {
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
  background-size: 4px 4px, 5px 5px, 0.5em 0.5em;
  background-repeat: no-repeat;
}
</style>
