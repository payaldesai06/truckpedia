<template>
  <div>
    <div class="filter-dropdown">
      <div>
        <div class="flex items-center cursor-pointer" @click="openFilterPopup">
          <vs-icon icon="filter_list"></vs-icon>
          <span>Filter</span>
        </div>
      </div>

      <div class="filter-dropdown-menu" v-if="openFilterDropdown">
        <!-- v-click-outside="closeFilterPopup" -->
        <!-- Causing issue with date selection  -->
        <div class="p-4 filters">
          <div
            class="overflow-auto"
            style="max-height: 300px"
            v-if="isFilterNotEmpty"
          >
            <p class="p-2">In this sheet, show records</p>
            <span
              v-for="(condition, index) in filtersData.conditions"
              :key="index"
            >
              <div class="flex items-center p-3">
                <span style="min-width: 82px" v-if="!index">
                  <p class="text-center">Where</p>
                </span>
                <select
                  v-else-if="index == 1"
                  v-model="filtersData.op"
                  class="custom-select operator-select"
                >
                  <option
                    v-for="item in filterCondition"
                    :key="item"
                    :value="item"
                  >
                    {{ item }}
                  </option>
                </select>

                <span style="min-width: 82px" v-else>
                  <p class="text-center font-bold">{{ filtersData.op }}</p>
                </span>

                <div class="flex items-center">
                  <select
                    v-model="condition.column"
                    style="min-width: 160px"
                    @change="handleFun(condition.column, index)"
                    class="custom-select"
                  >
                    <option
                      v-for="item in filterableColumns"
                      :key="item.value"
                      :value="item.value"
                    >
                      {{ item.text }}
                    </option>
                  </select>

                  <select
                    v-model="condition.cmp"
                    placeholder="operator"
                    class="custom-select"
                  >
                    <option
                      v-for="(item, index) in operators[condition.column]"
                      :key="item"
                      :value="item"
                      :selected="index == 0"
                    >
                      {{
                        (item || '')
                          .replace(/([a-z])([A-Z])/g, '$1 $2')
                          .toLowerCase()
                      }}
                    </option>
                  </select>

                  <select
                    v-if="
                      ['loadShipDate', 'loadDeliveryDate'].includes(
                        condition.column
                      )
                    "
                    :disabled="!condition.column"
                    v-model="selectedDateOption[index]"
                    @change="handleDateOption($event, index)"
                    class="custom-select"
                  >
                    <option
                      v-for="item in dateOptions"
                      :key="item.value"
                      :value="item.value"
                    >
                      {{ item.text }}
                    </option>
                  </select>
                </div>
                <div
                  v-if="
                    ['loadShipDate', 'loadDeliveryDate'].includes(
                      condition.column
                    ) && selectedDateOption[index] != 'today'
                  "
                >
                  <flat-pickr
                    placeholder="Select date"
                    class="custom-select"
                    v-model="condition.value"
                  />
                </div>

                <div class="w-full" v-if="condition.column == 'loadDirection'">
                  <select
                    v-model="condition.value"
                    :disabled="!condition.column"
                    placeholder="Select direction"
                    class="custom-select"
                  >
                    <option
                      v-for="item in direction"
                      :key="item.value"
                      :value="item.value"
                    >
                      {{ item.text }}
                    </option>
                  </select>
                </div>

                <div
                  class="w-full"
                  v-if="
                    [
                      'loadDriver',
                      'loadDispatcher',
                      'loadTag',
                      'loadTruck',
                      'loadTrailer',
                    ].includes(condition.column)
                  "
                >
                  <v-select
                    v-if="condition.column == 'loadDriver'"
                    v-model="condition.value"
                    :options="driverOptions"
                    label="name"
                    :disabled="!condition.column"
                    multiple
                    style="min-width: 200px"
                    placeholder="Select driver(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.id"
                  />
                  <v-select
                    v-if="condition.column == 'loadTruck'"
                    v-model="condition.value"
                    :options="truckOptions"
                    label="number"
                    :disabled="!condition.column"
                    multiple
                    style="min-width: 200px"
                    placeholder="Select Truck(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.id"
                  />
                  <v-select
                    v-if="condition.column == 'loadTrailer'"
                    v-model="condition.value"
                    :options="trailerOptions"
                    label="number"
                    :disabled="!condition.column"
                    multiple
                    style="min-width: 200px"
                    placeholder="Select Trailer(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.id"
                  />
                  <v-select
                    v-if="condition.column == 'loadDispatcher'"
                    v-model="condition.value"
                    :options="dispatcherOptions"
                    label="fullName"
                    :disabled="!condition.column"
                    multiple
                    placeholder="Select dispatcher(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.id"
                    style="min-width: 200px"
                  />
                  <v-select
                    v-if="condition.column == 'loadTag'"
                    v-model="condition.value"
                    :options="tagOptions"
                    label="fullName"
                    :disabled="!condition.column"
                    multiple
                    style="min-width: 200px"
                    placeholder="Select tag(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.id"
                  />
                </div>

                <div
                  class="w-full"
                  v-if="
                    ['loadShipper', 'loadReceiver', 'loadLeg'].includes(
                      condition.column
                    )
                  "
                >
                  <input
                    v-model="condition.value"
                    :disabled="!condition.column"
                    placeholder="Type filter keyword"
                    class="custom-input"
                  />
                </div>
                <v-select
                  v-if="condition.column == 'loadPickupState'"
                  v-model="condition.value"
                  :options="statesOptions"
                  label="text"
                  :disabled="!condition.column"
                  multiple
                  style="min-width: 200px"
                  placeholder="Select Pickup State(s)"
                  :closeOnSelect="false"
                  :appendToBody="true"
                  :clearable="true"
                  :reduce="(option) => option.text"
                />
                <v-select
                  v-if="condition.column == 'loadDeliveryState'"
                  v-model="condition.value"
                  :options="statesOptions"
                  label="text"
                  :disabled="!condition.column"
                  multiple
                  style="min-width: 200px"
                  placeholder="Select Delivery State(s)"
                  :closeOnSelect="false"
                  :appendToBody="true"
                  :clearable="true"
                  :reduce="(option) => option.text"
                />
                <div class="w-full" v-if="condition.column == 'loadCustomer'">
                  <v-select
                    v-model="condition.value"
                    :options="customerOptions"
                    label="company_name"
                    value="customer_id"
                    :disabled="!condition.column"
                    multiple
                    style="min-width: 200px"
                    placeholder="Select customer(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.customer_id"
                  />
                </div>

                <div
                  class="w-full"
                  v-if="
                    condition.column == 'loadThirdPartyCarrier' &&
                    condition.cmp == 'isAnyOf'
                  "
                >
                  <v-select
                    v-model="condition.value"
                    :options="thirdPartyCarrierOptions"
                    label="company_name"
                    value="customer_id"
                    :disabled="!condition.column"
                    multiple
                    placeholder="Select carrier(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.customer_id"
                    style="min-width: 200px"
                  />
                </div>

                <div class="w-full" v-if="condition.column == 'loadStatus'">
                  <v-select
                    v-model="condition.value"
                    :options="loadStatuses"
                    label="label"
                    :disabled="!condition.column"
                    multiple
                    placeholder="Select status(es)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.value"
                  />
                </div>

                <div
                  class="w-full"
                  v-if="condition.column == 'loadContainerStatus'"
                >
                  <select
                    v-model="condition.value"
                    :disabled="!condition.column"
                    placeholder="Select status"
                    class="custom-select"
                  >
                    <option
                      v-for="item in loadContainerStatuses"
                      :key="item.value"
                      :value="item.value"
                    >
                      {{ item.label }}
                    </option>
                  </select>
                </div>

                <div
                  class="w-full"
                  v-if="condition.column == 'loadContainerLocation'"
                >
                  <v-select
                    v-model="condition.value"
                    :options="loadContainerLocation"
                    label="label"
                    :disabled="!condition.column"
                    multiple
                    placeholder="Select location"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.value"
                    style="min-width: 200px"
                  />
                </div>

                <div class="delete-icon" @click="deleteCondition(index)">
                  <vs-icon icon="delete" class="m-0"></vs-icon>
                </div>
              </div>
            </span>
          </div>
          <span v-else>No filter conditions are applied to this sheet</span>
          <div class="add-condition mt-4">
            <span @click="handleAddCondition">+ Add condition</span>
          </div>
          <div class="flex items-center mt-5 justify-between">
            <vs-button color="primary" type="filled" @click="submitFilter"
              >Save</vs-button
            >
            <vs-button color="danger" type="border" @click="closeFilterPopup"
              >Cancel</vs-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable multiline-ternary nonblock-statement-body-position no-confusing-arrow implicit-arrow-linebreak -->
<script>
import config from '@/config/constants';
import { isEmpty, isArray } from 'lodash';
import { mapGetters } from 'vuex';

export default {
  name: 'SpreadsheetFilters',
  props: {
    subsheetId: {
      type: Number,
      required: true,
    },
    spreadsheetId: {
      type: Number,
      required: true,
    },
    filters: {
      type: Object,
      default() {
        return {};
      },
    },
    accessLevel: {
      required: false,
    },
  },
  inject: [
    'allDrivers',
    'allTags',
    'allDispatchers',
    'allCustomers',
    'allTrucks',
    'allTrailers',
  ] /** All 3 are reactive variables , so call them as functions in code */,
  data() {
    return {
      openFilterDropdown: false,
      filterJson: {},
      filterCondition: ['and', 'or'],
      columnsList: [
        { text: 'Ship Date', value: 'loadShipDate' },
        { text: 'Del. Date', value: 'loadDeliveryDate' },
        { text: 'Direction', value: 'loadDirection' },
        { text: 'Shipper', value: 'loadShipper' },
        { text: 'Receiver', value: 'loadReceiver' },
        { text: 'Pickup State', value: 'loadPickupState' },
        { text: 'Delivery State', value: 'loadDeliveryState' },
        { text: 'Leg', value: 'loadLeg' },
        { text: 'Driver', value: 'loadDriver' },
        { text: 'Truck', value: 'loadTruck' },
        { text: 'Trailer', value: 'loadTrailer' },
        { text: 'Dispatcher', value: 'loadDispatcher' },
        { text: 'Tag', value: 'loadTag' },
        { text: 'Customer', value: 'loadCustomer' },
        { text: 'Third Party Carrier', value: 'loadThirdPartyCarrier' },
        { text: 'Status', value: 'loadStatus' },
        { text: 'Container Status', value: 'loadContainerStatus' },
        { text: 'Container Location', value: 'loadContainerLocation' },
      ],
      shipperBrokerColumnsList: [
        { text: 'Ship Date', value: 'loadShipDate' },
        { text: 'Del. Date', value: 'loadDeliveryDate' },
        { text: 'Shipper', value: 'loadShipper' },
        { text: 'Receiver', value: 'loadReceiver' },
        { text: 'Dispatcher', value: 'loadDispatcher' },
        { text: 'Tag', value: 'loadTag' },
        { text: 'Third Party Carrier', value: 'loadThirdPartyCarrier' },
        { text: 'Status', value: 'loadStatus' },
        { text: 'Container Status', value: 'loadContainerStatus' },
        { text: 'Container Location', value: 'loadContainerLocation' },
      ],
      selectedDirection: '',
      direction: [
        {
          text: 'Inbound',
          value: 'i',
        },
        {
          text: 'Outbound',
          value: 'o',
        },
      ],
      dateOptions: [
        { text: 'today', value: 'today' },
        { text: 'a specific date', value: 'date' },
      ],
      selectedDate: '',
      selectedDateOption: [],
      operators: config.spreadsheetColFilterOperators,
    };
  },
  mounted() {
    this.mountInitFilterData(this.filters);
  },
  watch: {
    selectedDateOption: {
      handler() {
        this.selectedDateOption.map((item, index) => {
          if (item === 'today' && this.filterJson.conditions[index]) {
            this.filterJson.conditions[index].value = 'today';
          }
        });
      },
    },
  },
  computed: {
    ...mapGetters('auth', ['isUserBrokerOrShipper']),

    filtersData() {
      return this.filterJson;
    },
    isFilterNotEmpty() {
      if (
        this.filterJson &&
        Object.keys(this.filterJson).length != 0 &&
        this.filterJson.conditions.length
      ) {
        return true;
      }
      return false;
    },
    operatorType() {
      return {
        loadShipDate: 'date',
        loadDeliveryDate: 'date',
        loadDirection: 'direction',
        loadDirection: 'direction',
        loadShipper: 'textFilter', // manual text input filter
        loadReceiver: 'textFilter',
        loadLeg: 'textFilter',
        loadDriver: 'valueFilter', // Multiselect or single select filter
        loadTruck: 'valueFilter',
        loadTrailer: 'valueFilter',
        loadPickupState: 'valueFilter', // Multiselect or single select filter
        loadDeliveryState: 'valueFilter', // Multiselect or single select filter
        loadDispatcher: 'valueFilter',
        loadTag: 'valueFilter',
        loadCustomer: 'valueFilter',
        loadStatus: 'valueFilter',
        loadThirdPartyCarrier: 'valueFilter',
      };
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
    tagOptions() {
      return (this.allTags() || []).map((tag) => ({
        ...tag,
        id: tag.tag_id,
        fullName: tag.business_name,
      }));
    },
    statesOptions() {
      return config.state_list;
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
    filterableColumns() {
      return this.isUserBrokerOrShipper
        ? this.shipperBrokerColumnsList
        : this.columnsList;
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
  },
  methods: {
    filterField({ column, cmp, value }) {
      this.openFilterPopup();
      const columnType = this.operatorType[column];

      if (!(this.filterJson.conditions || []).length) {
        this.filterJson = {
          conditions: [
            {
              column,
              cmp,
              value,
            },
          ],
          op: 'or',
        };

        if (columnType === 'date') {
          this.selectedDateOption.push(value === 'today' ? 'today' : 'date');
        } else {
          this.selectedDateOption.push(columnType);
        }
      } else {
        const existingFilterIndex = this.filters.conditions.findIndex(
          (item) => item.column === column
        );

        if (existingFilterIndex > -1) {
          // update existing filter
          this.filterJson.conditions[existingFilterIndex] = {
            column,
            cmp,
            value,
          };

          if (columnType === 'date') {
            this.selectedDateOption[existingFilterIndex] =
              value === 'today' ? 'today' : 'date';
          } else {
            this.selectedDateOption[existingFilterIndex] = columnType;
          }
        } else {
          this.filterJson.conditions.push({
            column,
            cmp,
            value,
          });

          if (columnType === 'date') {
            this.selectedDateOption.push(value === 'today' ? 'today' : 'date');
          } else {
            this.selectedDateOption.push(columnType);
          }
        }
      }
    },
    handleDateOption(event, index) {
      if (event.target.value == 'date') {
        this.filterJson.conditions[index].value = '';
      }
    },
    handleFun(column, index) {
      const dateColumns = ['loadShipDate', 'loadDeliveryDate'];
      const directionColumns = ['loadDirection'];
      const nullFiledColumns = [
        'loadDriver',
        'loadTrailer',
        'loadTruck',
        'loadDispatcher',
        'loadTag',
        'loadShipper',
        'loadReceiver',
        'loadPickupState',
        'loadDeliveryState',
        'loadLeg',
        'loadCustomer',
        'loadStatus',
        'loadThirdPartyCarrier',
        'loadContainerLocation',
      ];
      if (directionColumns.includes(column)) {
        this.selectedDateOption[index] = 'i';
        this.filterJson.conditions[index].value = 'i';
        this.filterJson.conditions[index].cmp =
          (this.operators[column] || [])[0] || '';
      } else if (dateColumns.includes(column)) {
        if (this.selectedDateOption[index] != 'date') {
          this.selectedDateOption[index] = 'today';
          this.filterJson.conditions[index].value = 'today';
          const availableComparators = this.operators[column] || [];
          const previousComparator =
            this.filterJson.conditions[index].cmp || '';
          if (!availableComparators.includes(previousComparator)) {
            this.filterJson.conditions[index].cmp =
              availableComparators[0] || '';
          }
        }
      } else if (nullFiledColumns.includes(column)) {
        this.selectedDateOption[index] = '';
        this.filterJson.conditions[index].value = '';
        this.filterJson.conditions[index].cmp =
          (this.operators[column] || [])[0] || '';
      } else if (column === 'loadContainerStatus') {
        this.selectedDateOption[index] = 'e';
        this.filterJson.conditions[index].value = 'e';
        this.filterJson.conditions[index].cmp =
          (this.operators[column] || [])[0] || '';
      }
    },
    // open filter popup method
    openFilterPopup() {
      this.mountInitFilterData(this.filters);
      this.openFilterDropdown = true;
    },
    // close filter popup method
    closeFilterPopup() {
      this.openFilterDropdown = false;
      this.filterJson = {};
      this.selectedDateOption = [];
    },
    // submit filter method
    submitFilter() {
      if (Object.keys(this.filterJson).length > 0) {
        for (const item of this.filterJson.conditions) {
          if (
            item.column &&
            item.column === 'loadThirdPartyCarrier' &&
            item.cmp !== 'isAnyOf'
          ) {
            continue;
          } else if (
            !item.column ||
            !item.value ||
            (isArray(item.value) && isEmpty(item.value))
          ) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: 'Filter condition is incomplete.',
            });
            return;
          }
        }
      }

      for (const item of this.filterJson.conditions || []) {
        if (item.column === 'loadThirdPartyCarrier') {
          item.value = item.cmp !== 'isAnyOf' ? null : item.value;
        }
      }

      const payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheetId,
        filter: this.filterJson,
      };
      this.$vs.loading();

      this.$store
        .dispatch('spreadsheet/modifySheetFilter', payload)
        .then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Sheet filter',
            text: 'Modify sheet filter successfully',
          });
          this.$parent.saveFilter({
            filter: this.filterJson,
            id: this.subsheetId,
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
          this.closeFilterPopup();
          this.$vs.loading.close();
          this.$emit('updateSpreadsheet');
        });
    },
    handleAddCondition() {
      if (Object.keys(this.filterJson).length === 0) {
        this.filterJson = {
          conditions: [
            {
              column: '',
              cmp: 'is',
              value: '',
            },
          ],
          op: 'or',
        };
      } else {
        this.filterJson.conditions.push({
          column: '',
          cmp: 'is',
          value: '',
        });
      }
    },
    deleteCondition(index) {
      this.filterJson.conditions.splice(index, 1);
      this.selectedDateOption.splice(index, 1);
      if (!this.filterJson.conditions.length) {
        this.filterJson = {};
      }
    },
    mountInitFilterData(filterData) {
      this.filterJson = JSON.parse(JSON.stringify(filterData));
      this.selectedDateOption = [];
      if (Object.keys(this.filterJson).length) {
        this.filterJson.conditions.map((item) => {
          if (item.value == 'today') {
            this.selectedDateOption.push('today');
          } else {
            this.selectedDateOption.push(this.operatorType[item.column]);
          }
        });
      }
    },
    removeFilter(field) {
      this.openFilterPopup();

      const index = this.filterJson.conditions.findIndex(
        (item) => item.column === field
      );
      if (index > -1) this.deleteCondition(index);
    },
  },
};
</script>

<style lang="scss" scoped>
$borderColor: rgba(0, 0, 0, 0.1);

.filter-dropdown {
  .filter-dropdown-menu {
    position: absolute;
    // width: 45%;
    z-index: 1000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    @media (max-width: 991px) {
      width: 90%;
    }
  }
}

.filters {
  background: #fff;
  position: relative;
  min-width: 500px;

  input {
    border: 1px solid $borderColor !important;
  }

  .filter-select {
    border-radius: 0;
    width: 100%;

    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border-right: 0px;
    }
  }

  .delete-icon {
    border: 1px solid $borderColor;
    height: 35px;
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
  }

  .add-condition {
    color: hsl(0, 0%, 40%);
    font-weight: 500;
    font-size: 13px;
    span {
      cursor: pointer;
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
    border-right: 0px;

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

  .operator-select {
    min-width: 12px;
    max-width: 66px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 3px;
    border-right: 1px solid $borderColor;
  }
}
::v-deep {
  .v-select {
    .vs__selected-options {
      max-width: 50vw;
    }
    .vs__search {
      width: 100px;
    }
  }

  .vs__dropdown-toggle {
    padding: 0.8px 0 !important;
  }
}
</style>

<style lang="scss">
.vs__dropdown-menu {
  .vs__dropdown-option {
    width: max-content;
    min-width: 100%;
  }
}
</style>
