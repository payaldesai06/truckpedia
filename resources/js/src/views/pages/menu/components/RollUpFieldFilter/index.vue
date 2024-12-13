<template>
  <div class="filter-dropdown-menu">
    <div class="p-4 filters">
      <div
        class="overflow-auto"
        v-if="isFilterNotEmpty"
      >
        <span
          v-for="(condition, index) in filtersData.conditions"
          :key="index"
        >
          <div class="flex items-center p-3">
            <span style="min-width: 82px" v-if="!index">
              <p class="text-center">Where</p>
            </span>

            <!-- Combiner method and/or  -->
            <select
              v-else-if="index == 1"
              v-model="filtersData.op"
              class="custom-select operator-select"
              :disabled="isEdit"
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
              <!-- Column Selector  -->
              <select
                v-model="condition.customField"
                @change="handleFun(condition.customField, index)"
                class="custom-select"
                :disabled="isEdit"
              >
                <option
                  v-for="item in columnsList"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
              <!-- Combiner key  -->
              <select
                v-model="condition.cmp"
                placeholder="operator"
                class="custom-select"
                :disabled="isEdit"
              >
                <option
                  v-for="(item, index) in operators[condition.customField]"
                  :key="item"
                  :value="item"
                  :selected="index == 0"
                >
                  {{ (item || '').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase() }}
                </option>
              </select>
               <!-- Combine condition : 1 -> for date -->
              <select
                v-if="isDateField(condition.customField)"
                :disabled="!condition.customField || isEdit"
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
                isDateField(condition.customField) &&
                selectedDateOption[index] != 'today'
              "
            >
              <flat-pickr
                placeholder="Select date"
                class="custom-select"
                v-model="condition.value"
                :disabled="isEdit"
              />
            </div>

            <div class="w-full" v-if="isSingleSelect(condition.customField)">
              <select
                v-if="condition.cmp === 'is'"
                v-model="condition.value"
                :disabled="!condition.customField || isEdit"
                placeholder="Select option"
                class="custom-select"
              >
                <option
                  v-for="item in fieldIdToTypeMap[condition.customField].singleSelectOptions"
                  :key="item.optionId"
                  :value="item.optionId"
                >
                  {{ item.optionName }}
                </option>
              </select>
              <v-select
                v-else-if="condition.cmp === 'isAnyOf'"
                v-model="condition.value"
                :options="fieldIdToTypeMap[condition.customField].singleSelectOptions"
                label="optionName"
                :disabled="!condition.customField || isEdit"
                multiple
                placeholder="Select option(s)"
                :closeOnSelect="false"
                :appendToBody="true"
                :clearable="true"
                :reduce="option => option.optionId"
              />
            </div>
            
            <div
              class="w-full" 
              v-if="isUserField(condition.customField)"
            >
              <select
                v-if="condition.cmp === 'is'"
                v-model="condition.value"
                :disabled="!condition.customField || isEdit"
                placeholder="Select direction"
                class="custom-select"
              >
                <option
                  v-for="item in []"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.fullName }}
                </option>
              </select>
              <v-select
                v-else-if="condition.cmp === 'isAnyOf'"
                v-model="condition.value"
                :options="[]"
                label="fullName"
                :disabled="!condition.customField || isEdit"
                multiple
                placeholder="Select user(s)"
                :closeOnSelect="false"
                :appendToBody="true"
                :clearable="true"
                :reduce="option => option.id"
              />
            </div>

            <div
              class="w-full"
              v-if="isTextField(condition.customField) || isNumberField(condition.customField)"
            >
              <input
                v-model="condition.value"
                :disabled="!condition.customField || isEdit"
                placeholder="Type filter keyword"
                class="custom-input"
              >
              </input>
            </div>

            <div
              v-if="!isEdit"
              class="delete-icon"
              @click="deleteCondition(index)"
            >
              <vs-icon icon="delete" class="m-0"></vs-icon>
            </div>
          </div>
        </span>
      </div>
      <template v-if="showFilter">
        <div class="add-condition mt-4" v-if="(columnsList || []).length === 0">
            <span class="flex justify-center pt-3" style="color: red;">
              No filterable field available
            </span>
        </div>
        <div class="add-condition mt-4" v-else-if="((filtersData || {}).conditions || []).length < 1 && !isEdit">
          <span @click="handleAddCondition">+ Add condition</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "RollUpFieldFilter",
  props: {
    filters: {
      type: Object,
      default() {
        return {};
      },
    },
    selectedTarget: {
      type: Object,
      default() {
        return null
      },
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      filterJson: {},
      filterCondition: ["and", "or"],
      recordCustomFields: [],
      dateOptions: [
        { text: "today", value: "today" },
        { text: "a specific date", value: "date" },
      ],
      selectedDateOption: [],
      showFilter: false,
    };
  },
  computed: {
    columnsList() {
      return (this.recordCustomFields || []).filter(x => x.type === 'singleSelect')
    },
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
    fieldIdToTypeMap() {
      return this.columnsList.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    },
    operators() {
      const typeToOperatorMap = {
        "text": ["contains"],
        "user": ["is", "isAnyOf"],
        "singleSelect": ["is"],
        // "singleSelect": ["is", "isAnyOf"],
        "date": ["is"],
        "number": ["is"],
      }
      const fieldIdToOperatorMap = this.columnsList.reduce(
        (acc, item) => {
          acc[item.id] = typeToOperatorMap[item.type];
          return acc;
        },
        {}
      );
      return fieldIdToOperatorMap;
    },
  },
  watch: {
    selectedDateOption: {
      handler() {
        this.selectedDateOption.map((item, index) => {
          if (item == "today") {
            this.filterJson.conditions[index].value = "today";
          }
        });
      },
    },
  },
  async created() {
    await this.fetchFieldOptions(this.selectedTarget.submenuId);
  },
  mounted() {
    this.mountInitFilterData(this.filters);
    setTimeout(() => {
      this.showFilter = true;
    }, 600);
  },
  methods: {
    isValid() {
      if (Object.keys(this.filterJson).length > 0) {
        for (const item of this.filterJson.conditions) {
          if (
            item.value == null ||
            item.value == "" ||
            item.customField == null ||
            item.customField == ""
          ) {
            this.$vs.notify({
              color: "danger",
              title: "Error",
              text: "Filter condition is incomplete.",
            });
            return false;
          }
        }
      } else if (this.filterJson === null) {
        return true;
      }
      return true;
    },
    handleAddCondition() {
      if (Object.keys(this.filterJson).length === 0) {
        this.filterJson = {
          conditions: [
            {
              customField: "",
              cmp: "is",
              value: "",
            },
          ],
          op: "or",
        };
      } else {
        this.filterJson.conditions.push({
          customField: "",
          cmp: "is",
          value: "",
        });
      }
      this.selectedDateOption.push("today");
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
          if (item.value == "today") {
            this.selectedDateOption.push("today");
          } else {
            this.selectedDateOption.push("date");
          }
        });
      }
    },
    handleDateOption(event, index) {
      if (event.target.value == "date") {
        this.filterJson.conditions[index].value = "";
      }
    },
    handleFun(fieldId, index) {
      const fieldType = (this.fieldIdToTypeMap[fieldId] || {}).type || null;
      switch (fieldType) {
        case "date":
            if (this.selectedDateOption[index] != "date") {
              this.selectedDateOption[index] = "today";
              this.filterJson.conditions[index].value = "today";
            }
          break;
        case "text":
            this.selectedDateOption[index] = "";
            this.filterJson.conditions[index].value = "";
            this.filterJson.conditions[index].cmp =
              (this.operators[fieldId] || [])[0] || "";
          break;
        case "number":
            this.selectedDateOption[index] = "";
            this.filterJson.conditions[index].value = "";
            this.filterJson.conditions[index].cmp =
              (this.operators[fieldId] || [])[0] || "";
          break;
        case "singleSelect":
            this.selectedDateOption[index] = "";
            this.filterJson.conditions[index].value = "";
            this.filterJson.conditions[index].cmp =
              (this.operators[fieldId] || [])[0] || "";
          break;
        case "user":
            this.selectedDateOption[index] = "";
            this.filterJson.conditions[index].value = "";
            this.filterJson.conditions[index].cmp =
              (this.operators[fieldId] || [])[0] || "";
          break;
        case "multiSelect":
            this.selectedDateOption[index] = "";
            this.filterJson.conditions[index].value = "";
            this.filterJson.conditions[index].cmp =
              (this.operators[fieldId] || [])[0] || "";
          break;
      
        default:
          break;
      }
    },
    async fetchFieldOptions(subMenuId) {
      const viewsList = await this.$store.dispatch("menuV2/fetchViewList", {
        id: subMenuId,
        skipStateUpdate: true
      })
      const viewId = ((viewsList || [])[0] || {}).id || null;
      if(viewId) {
        const {
          data: {
            payload: {
              recordCustomFields,
            },
          },
        } = await this.$store.dispatch("menuV2/getView", viewId || this.viewId);
        this.recordCustomFields = recordCustomFields;
        return recordCustomFields;
      }
      return;
    },
    isUserField(fieldId) {
      return (this.fieldIdToTypeMap[fieldId] || {}).type === "user";
    },
    isTextField(fieldId) {
      return (this.fieldIdToTypeMap[fieldId] || {}).type === "text";
    },
    isSingleSelect(fieldId) {
      return (this.fieldIdToTypeMap[fieldId] || {}).type === "singleSelect";
    },
    isMultiSelect(fieldId) {
      return (this.fieldIdToTypeMap[fieldId] || {}).type === "multiSelect";
    },
    isDateField(fieldId) {
      return (this.fieldIdToTypeMap[fieldId] || {}).type === "date";
    },
    isNumberField(fieldId) {
      return (this.fieldIdToTypeMap[fieldId] || {}).type === "number";
    },
  }
};
</script>

<style lang="scss" scoped>
$borderColor: rgba(0, 0, 0, 0.1);

.filter-dropdown {
  .filter-dropdown-menu {
    position: absolute;
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
}
</style>
<style>
.flatpickr-calendar,
.vs__dropdown-menu {
  z-index: 100000 !important;
}
</style>
