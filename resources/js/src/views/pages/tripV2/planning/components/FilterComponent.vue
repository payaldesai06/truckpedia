<template>
  <div class="planning-tab-filter">
    <div class="filter-dropdown">
      <div
        class="filter-btn a-icon cursor-pointer"
        @click="openFilterPopup"
        style="z-index: 100"
      >
        <filter-icon size="1x"></filter-icon>
        <span class="ml-1">Filters</span>
        <chevron-down-icon size="1x" class="ml-2"></chevron-down-icon>
      </div>
      <div
        class="filter-dropdown-menu"
        :class="floatDirection === 'ltr' ? 'ltr' : 'rtl'"
        v-if="openFilterDropdown"
        v-click-outside="closeFilterPopup"
      >
        <div class="p-4 filters">
          <div
            class="overflow-auto"
            style="max-height: 300px"
            v-if="isFilterNotEmpty"
          >
            <p class="p-2">Showing loads</p>
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
                  style="min-width: 60px"
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
                    @change="handleFun(condition.column, index)"
                    class="custom-select"
                  >
                    <template v-for="item in columListToRender">
                      <option
                        :key="item.value"
                        :value="item.value"
                        v-show="!item.hide"
                      >
                        {{ item.text }}
                      </option>
                    </template>
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
                </div>

                <div
                  class="w-full"
                  v-if="
                    [
                      'loadDispatcher',
                      'loadTag',
                      'loadDriver',
                      'driverTag',
                      'truck',
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
                    placeholder="Select driver(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.id"
                  />
                  <v-select
                    v-if="condition.column == 'driverTag'"
                    v-model="condition.value"
                    :options="tagOptions"
                    label="fullName"
                    :disabled="!condition.column"
                    multiple
                    placeholder="Select driver tag(s)"
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
                  />
                  <v-select
                    v-if="condition.column == 'loadTag'"
                    v-model="condition.value"
                    :options="tagOptions"
                    label="fullName"
                    :disabled="!condition.column"
                    multiple
                    placeholder="Select tag(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.id"
                  />
                </div>

                <div class="w-full" v-if="condition.column == 'loadStatus'">
                  <v-select
                    v-model="condition.value"
                    :options="loadStatusOptions"
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

                <div class="w-full" v-if="condition.column == 'truck'">
                  <v-select
                    v-model="condition.value"
                    :options="truckOptions"
                    label="label"
                    :disabled="!condition.column"
                    multiple
                    placeholder="Select truck(s)"
                    :closeOnSelect="false"
                    :appendToBody="true"
                    :clearable="true"
                    :reduce="(option) => option.value"
                  />
                </div>

                <div class="delete-icon" @click="deleteCondition(index)">
                  <vs-icon icon="delete" class="m-0"></vs-icon>
                </div>
              </div>
            </span>
          </div>
          <span v-else>No filter conditions applied</span>
          <div class="add-condition mt-4" v-if="hasFiltersToAdd">
            <span @click="handleAddCondition">+ Add condition</span>
          </div>
          <div class="flex items-center mt-5 justify-between">
            <vs-button color="primary" type="filled" @click="submitFilter">
              Save
            </vs-button>
            <vs-button color="danger" type="border" @click="closeFilterPopup">
              Cancel
            </vs-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FilterIcon, ChevronDownIcon } from 'vue-feather-icons';
import { mapGetters } from 'vuex';
export default {
  name: 'PlanningPageFilterComponent',
  components: {
    FilterIcon,
    ChevronDownIcon,
  },
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    filtersToSupport: {
      type: Array,
      default: [
        'loadTag',
        'loadDispatcher',
        'loadDriver',
        'loadStatus',
        'driverTag',
        'truck',
      ],
    },
    floatDirection: {
      type: String,
      default: 'ltr', // Used to to which side the filter card should expand // ltr and rtl
    },
  },
  inject: [
    'allTags',
    'allDispatchers',
    'loadStatuses',
  ] /** All are reactive variables , so call them as functions in code */,
  data() {
    return {
      openFilterDropdown: false,
      filterJson: {},
      columnsList: [
        { text: 'Tags', value: 'loadTag' },
        { text: 'Dispatcher', value: 'loadDispatcher' },
        { text: 'Driver', value: 'loadDriver' },
        { text: 'Driver Tag', value: 'driverTag' },
        { text: 'Status', value: 'loadStatus' },
        { text: 'Truck', value: 'truck' },
      ],
      operators: {
        loadDispatcher: ['isAnyOf'],
        loadTag: ['isAnyOf'],
        loadDriver: ['isAnyOf'],
        loadStatus: ['isAnyOf'],
        driverTag: ['isAnyOf'],
        truck: ['isAnyOf'],
      },
      filterCondition: ['and'],
    };
  },
  computed: {
    ...mapGetters('load', ['allDriverTruckTrailerForLoadDriver']),
    filtersData() {
      return this.filterJson;
    },
    isFilterNotEmpty() {
      if (
        this.filterJson &&
        Object.keys(this.filterJson).length != 0 &&
        (this.filterJson.conditions || []).length
      ) {
        return true;
      }
      return false;
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
    driverOptions() {
      return this.allDriverTruckTrailerForLoadDriver.drivers || [];
    },
    columListToRender() {
      const columnToRender = this.filtersToSupport.length
        ? this.columnsList.filter((x) =>
            this.filtersToSupport.includes(x.value)
          )
        : this.columnsList;
      return columnToRender.map((column) => {
        return {
          ...column,
          hide: !!this.selectedFilterColumns.includes(column.value),
        };
      });
    },
    selectedFilterColumns() {
      return ((this.filterJson || {}).conditions || [])
        .map((condition) => condition.column)
        .filter(Boolean);
    },
    hasFiltersToAdd() {
      return this.columListToRender.filter((x) => !x.hide).length > 0;
    },
    loadStatusOptions() {
      return this.loadStatuses() || [];
    },
    truckOptions() {
      return (
        (this.allDriverTruckTrailerForLoadDriver.trucks || []).map((truck) => ({
          label: truck.number,
          value: truck.id,
        })) || []
      );
    },
  },
  methods: {
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
          op: 'and',
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
      if (!this.filterJson.conditions.length) {
        this.filterJson = {};
      }
    },
    handleFun(column, index) {
      const nullFiledColumns = [
        'loadDispatcher',
        'loadTag',
        'loadDriver',
        'loadStatus',
        'driverTag',
        'truck',
      ];
      if (nullFiledColumns.includes(column)) {
        this.filterJson.conditions[index].value = '';
        this.filterJson.conditions[index].cmp =
          (this.operators[column] || [])[0] || '';
      }
    },
    submitFilter() {
      /* Validation Block : START */
      if (Object.keys(this.filterJson).length > 0) {
        for (const item of this.filterJson.conditions) {
          if (
            item.value == null ||
            item.value == '' ||
            item.column == null ||
            item.column == ''
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
      /* Validation Block : End */

      const filter = {};
      (this.filterJson.conditions || []).forEach((condition) => {
        if (condition.column) {
          filter[condition.column] = condition.value;
        }
      });

      const res = {};
      if (filter.loadDispatcher) {
        res.dispatcherIds = filter.loadDispatcher;
      }
      if (filter.loadTag) {
        res.tagIds = filter.loadTag;
      }
      if (filter.loadDriver) {
        res.driverIds = filter.loadDriver;
      }
      if (filter.driverTag) {
        res.driverTagIds = filter.driverTag;
      }
      if (filter.loadStatus) {
        res.loadStatuses = filter.loadStatus;
      }
      if (filter.truck) {
        res.truckIds = filter.truck;
      }

      this.$emit('input', res); // Update parent component via v-model
      this.closeFilterPopup();
    },
    // open filter popup method
    openFilterPopup() {
      this.mountInitFilterData();
      this.openFilterDropdown = true;
    },
    // close filter popup method
    closeFilterPopup() {
      this.openFilterDropdown = false;
      this.filterJson = {};
    },
    mountInitFilterData() {
      const {
        dispatcherIds,
        tagIds,
        driverIds,
        loadStatuses,
        driverTagIds,
        truckIds,
      } = this.value || {};
      const filterJson = {
        conditions: [],
        op: 'and',
      };
      if ((dispatcherIds || []).length)
        filterJson.conditions.push({
          cmp: 'isAnyOf',
          column: 'loadDispatcher',
          value: dispatcherIds,
        });
      if ((tagIds || []).length)
        filterJson.conditions.push({
          cmp: 'isAnyOf',
          column: 'loadTag',
          value: tagIds,
        });
      if ((driverIds || []).length)
        filterJson.conditions.push({
          cmp: 'isAnyOf',
          column: 'loadDriver',
          value: driverIds,
        });
      if ((driverTagIds || []).length)
        filterJson.conditions.push({
          cmp: 'isAnyOf',
          column: 'driverTag',
          value: driverTagIds,
        });
      if ((loadStatuses || []).length) {
        filterJson.conditions.push({
          cmp: 'isAnyOf',
          column: 'loadStatus',
          value: loadStatuses,
        });
      }
      if ((truckIds || []).length) {
        filterJson.conditions.push({
          cmp: 'isAnyOf',
          column: 'truck',
          value: truckIds,
        });
      }
      if (filterJson.conditions.length) {
        this.filterJson = filterJson;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$borderColor: rgba(0, 0, 0, 0.1);

.filter-dropdown {
  position: relative;
  box-shadow: none;
  position: relative;
  display: flex;
  background-color: #fff;
  justify-content: flex-end;
  .filter-dropdown-menu {
    z-index: 1000;
    border-radius: 3px;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    box-shadow: 0 5px 25px 0 rgb(0 0 0 / 10%);
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 40px;
    white-space: nowrap;
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: 100%;
      border: 7px solid transparent;
      border-bottom-color: #dddddd;
    }

    @media (max-width: 991px) {
      width: 90%;
    }
    &.ltr {
      right: 0;
      &:before,
      &:after {
        content: '';
        right: 0px;
      }
    }
    &.rtl {
      left: 0;
      &:before,
      &:after {
        content: '';
        left: 0px;
      }
    }
  }
}

.filters {
  background: #fff;
  position: relative;
  min-width: 500px;
  max-width: 60vw;

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
      width: max-content;
      max-width: 35vw;
      min-width: 150px;
    }
    .vs__search {
      width: 100px;
    }
  }

  .vs__dropdown-toggle {
    padding: 0.8px 0 !important;
  }
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
</style>

<style lang="scss">
.vs__dropdown-menu {
  .vs__dropdown-option {
    width: max-content;
    min-width: 100%;
  }
}
</style>
