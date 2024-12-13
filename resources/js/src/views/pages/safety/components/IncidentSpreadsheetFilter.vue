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
                      v-for="item in modifiedColumnList"
                      :key="item.value"
                      :value="item.value"
                      :disabled="
                        filtersData.conditions.some(
                          (condition) => condition.column === item.value
                        )
                      "
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
                </div>
                <template v-if="condition.column">
                  <div v-if="['incidentYear'].includes(condition.column)">
                    <Calendar
                      v-model="condition.value"
                      view="year"
                      dateFormat="yy"
                      appendTo="body"
                      :manualInput="false"
                    />
                  </div>
                  <div v-else-if="['incidentDate'].includes(condition.column)">
                    <flat-pickr
                      :value="condition.value"
                      class="date-picker"
                      :config="flat_pikr_config"
                      @on-change="
                        (dateArray) => onDateChange(dateArray, 'incidentDate')
                      "
                    />
                  </div>
                  <div
                    v-else-if="
                      Object.keys(dropdownTypeCols).includes(condition.column)
                    "
                  >
                    <select
                      v-model="condition.value"
                      :disabled="!condition.column"
                      class="custom-select"
                      :style="dropdownTypeCols[condition.column].style || ''"
                    >
                      <option
                        v-for="item in getDropdownOptions(
                          dropdownTypeCols[condition.column].options
                        )"
                        :key="
                          item[dropdownTypeCols[condition.column].optionKey]
                        "
                        :value="
                          item[dropdownTypeCols[condition.column].optionValue]
                        "
                      >
                        {{
                          item[
                            dropdownTypeCols[condition.column].optionLabelKey
                          ]
                        }}
                      </option>
                    </select>
                  </div>
                  <div class="w-full" v-else>
                    <input
                      v-model="condition.value"
                      :disabled="!condition.column"
                      placeholder="Type filter keyword"
                      class="custom-input"
                    />
                  </div>
                </template>
                <div class="delete-icon" @click="deleteCondition(index)">
                  <vs-icon icon="delete" class="m-0"></vs-icon>
                </div>
              </div>
            </span>
          </div>
          <span v-else>No filter conditions are applied to this sheet</span>
          <div
            class="add-condition mt-4"
            v-if="
              (filtersData.conditions || []).length < modifiedColumnList.length
            "
          >
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
import Calendar from 'primevue/calendar';
import config from '@/config/constants.js';
import { mapGetters } from 'vuex';

export default {
  name: 'SpreadsheetFilters',
  components: {
    Calendar,
  },
  props: {
    filters: {
      type: Object,
      default() {
        return {};
      },
    },
    allTags: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      openFilterDropdown: false,
      filterJson: {},
      filterCondition: ['and'],
      columnsList: [
        { text: 'Incident Year', value: 'incidentYear' },
        { text: 'Incident Date', value: 'incidentDate' },
        { text: 'Status', value: 'status' },
        { text: 'Tag', value: 'tagId' },
        { text: 'Assignee', value: 'assigneeUserName' },
        { text: 'Incident Type', value: 'incidentType' },
        { text: 'Involved Type', value: 'involvedType' },
        { text: 'Person Type', value: 'involvedPersonType' },
        { text: 'Address', value: 'address' },
        { text: 'Insurance Company', value: 'insuranceCompanyName' },
      ],
      operators: {
        incidentYear: ['is'],
        incidentDate: ['is'],
        status: ['is'],
        tagId: ['is'],
        assigneeUserName: ['contains'],
        incidentType: ['is'],
        involvedType: ['is'],
        involvedPersonType: ['is'],
        address: ['contains'],
        insuranceCompanyName: ['contains'],
      },
      flat_pikr_config: {
        mode: 'range',
        dateFormat: 'Y-m-d',
      },
      statusOptions: config.safetyModule.status,
      incidentTypes: config.safetyModule.incidentTypes,
      involvedTypes: config.safetyModule.involvedTypes,
      involvedPersonTypes: config.safetyModule.involvedPersonTypes,
      dropdownTypeCols: {
        status: {
          options: 'statusOptions',
          optionKey: 'value',
          optionValue: 'value',
          optionLabelKey: 'label',
        },
        tagId: {
          options: 'allTags',
          optionKey: 'tag_id',
          optionValue: 'tag_id',
          optionLabelKey: 'business_name',
        },
        incidentType: {
          options: 'incidentTypes',
          optionKey: 'value',
          optionValue: 'value',
          optionLabelKey: 'label',
          style: 'min-width: 180px',
        },
        involvedType: {
          options: 'involvedTypes',
          optionKey: 'value',
          optionValue: 'value',
          optionLabelKey: 'label',
          style: 'min-width: 180px',
        },
        involvedPersonType: {
          options: 'involvedPersonTypes',
          optionKey: 'value',
          optionValue: 'value',
          optionLabelKey: 'label',
          style: 'min-width: 180px',
        },
      },
    };
  },
  mounted() {
    this.mountInitFilterData(this.filters);
  },
  computed: {
    ...mapGetters('auth', ['user']),
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
    modifiedColumnList() {
      if (
        config.onlyUseSafetyTab.some(
          (item) =>
            item === this.user.admin_company_details.admin_company_detail_id
        )
      ) {
        return this.columnsList.map((item) => {
          {
            if (item.value == 'tagId') {
              item.text = 'Site';
            }
            if (item.value == 'address') {
              item.text = 'Store';
            }
            return item;
          }
        });
      } else {
        return this.columnsList;
      }
    },
  },
  methods: {
    handleFun(column, index) {
      this.filterJson.conditions[index].value = '';
      this.filterJson.conditions[index].cmp =
        (this.operators[column] || [])[0] || '';
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
    },
    // submit filter method
    submitFilter() {
      if (Object.keys(this.filterJson).length > 0) {
        for (const item of this.filterJson.conditions) {
          if (!item.column || !item.value) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: 'Filter condition is incomplete.',
            });
            return;
          }
        }
      }

      const payload = {
        incidentYear: null,
        incidentDate: null,
        status: null,
        tagId: null,
        assigneeUserName: null,
        incidentType: null,
        involvedType: null,
        involvedPersonType: null,
        address: null,
        insuranceCompanyName: null,
      };

      if (Object.keys(this.filterJson).length) {
        for (const item of this.filterJson.conditions) {
          if (item.column === 'incidentYear') {
            payload.incidentYear = this.$dayjs(item.value).format('YYYY');
          } else if (item.column === 'incidentDate') {
            const dateArray = item.value.split(' to ');
            payload.incidentDate = {
              startDate: this.$dayjs(dateArray[0]).format('YYYY-MM-DD'),
              endDate: this.$dayjs(dateArray[1]).format('YYYY-MM-DD'),
            };
          } else {
            payload[item.column] = item.value;
          }
        }
      }

      this.$emit('submitFilter', payload);
      this.closeFilterPopup();
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
    mountInitFilterData(filterData) {
      this.filterJson = Object.entries(filterData).reduce(
        (acc, [key, value]) => {
          if (value) {
            if (key === 'incidentDate') {
              acc.conditions.push({
                column: 'incidentDate',
                cmp: 'is',
                value: `${this.$dayjs(value.startDate).format(
                  'YYYY-MM-DD'
                )} to ${this.$dayjs(value.endDate).format('YYYY-MM-DD')}`,
              });
            } else {
              acc.conditions.push({
                column: key,
                cmp: this.operators[key][0],
                value,
              });
            }
          }
          return acc;
        },
        { conditions: [], op: 'and' }
      );
    },
    removeFilter(field) {
      this.openFilterPopup();

      const index = this.filterJson.conditions.findIndex(
        (item) => item.column === field
      );
      if (index > -1) this.deleteCondition(index);
    },
    onDateChange(dateArray, type) {
      if (dateArray.length > 1 && type) {
        const dateString = `${this.$dayjs(dateArray[0]).format(
          'YYYY-MM-DD'
        )} to ${this.$dayjs(dateArray[1]).format('YYYY-MM-DD')}`;

        const index = this.filterJson.conditions.findIndex(
          (item) => item.column === type
        );
        if (index > -1) {
          this.filterJson.conditions[index].value = dateString;
        } else {
          this.filterJson.conditions.push({
            column: type,
            cmp: 'is',
            value: dateString,
          });
        }
      }
    },
    getDropdownOptions(options) {
      if (options) {
        return this[options];
      }
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
