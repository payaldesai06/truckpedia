<template>
  <div class="pt-3 menu-table-view">
    <ControlBar
      :viewName="'table'"
      :selectedGroupBy="selectedGroupBy"
      :groupByOptions="groupByOptions"
      :viewMetaData="viewMetaData"
      :customFields="customFields"
      @updateView="updateView"
      @toggleDetailsView="expandRecord"
    >
      <div class="flex items-center space-x-5">
        <table-sort
          ref="tableSort"
          :sortSchemaData="tableSortSchema"
          :sortingOptions="sortingOptions"
          :columns="sortingColumns"
          @handleSortSchema="handleSortSchema"
        />
      </div>
    </ControlBar>
    <section v-if="hasColumnToRender" class="overflow-auto pb-6">
      <table class="spreadsheet-table table-resizable table-editor mt-3">
        <table-header
          :headers="customFieldsToRender"
          :sortSchemaData="tableSortSchema"
          :sortingOptions="sortingOptions"
          :columnTypesForSorting="columnTypesForSorting"
          @updateRecordOrder="updateRecordOrder"
          @handleSortSchema="handleSortSchema"
        />
        <template v-for="(item, index) in viewData">
          <tbody :key="index" v-if="item.records.length">
            <tr class="accordion-row" v-if="item.id !== 'none'">
              <td
                class="accordion-icon-wrapper"
                colspan="1"
                @click="() => (isCollapsed[index] = !isCollapsed[index])"
              >
                <vs-icon
                  class="cursor-pointer accordion-icon"
                  size="18px"
                  :style="{
                    transform: `rotate(${isCollapsed[index] ? 90 : 0}deg)`,
                  }"
                  :icon="isCollapsed[index] ? 'expand_less' : 'expand_more'"
                />
              </td>
              <td :colspan="1" class="accordion-header-wrapper">
                <strong
                  class="accordion-header-text"
                  @click="() => (isCollapsed[index] = !isCollapsed[index])"
                >
                  <label class="text-md font-semibold" v-text="item.label" />
                </strong>
                <small
                  transparent
                  color="primary"
                  class="ml-2 accordion-header-item-count"
                >
                  <span> ( {{ ((item || {}).records || []).length }} ) </span>
                </small>
              </td>
              <td
                v-for="(field, idx) in item.records[0].customFieldsData
                  .filter((x) => x.isRender)
                  .slice(1)"
                :key="idx"
                :colspan="1"
                class="accordion-header-wrapper"
              >
                <template
                  v-if="
                    field.numberValue !== undefined ||
                    field.currencyValue !== undefined
                  "
                >
                  <span class="flex items-center field-sum">
                    <p class="mr-1">Sum</p>
                    {{ getFieldSum(field.fieldId, item.records) }}
                  </span>
                </template>
              </td>
            </tr>
            <template v-if="!isCollapsed[index]">
              <tr
                class="show-expand-icon-hover"
                v-for="(record, recordIndex) in item.records"
                :key="recordIndex"
              >
                <td>
                  <div class="row-index">
                    <div class="flex items-center justify-center">
                      <span class="indexNo">
                        {{ ++recordIndex }}
                      </span>
                      <div @click="expandRecord(record.id)" class="expand-icon">
                        <!-- expand icon svg   -->
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          style="shape-rendering: geometricprecision"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="currentColor"
                            d="M5.77546101,13.6834543 L2.81474478,14.1064138 C2.25439084,14.1864644 1.87938524,13.8017775 1.95822565,13.2498947 L2.38118511,10.2891784 C2.45982823,9.73867658 2.83916177,9.616002 3.22968611,10.0065263 L3.93679297,10.7136331 L5.8350897,8.81533646 C6.22830529,8.42212085 6.85864277,8.42494825 7.24916702,8.8154725 C7.64241393,9.20871941 7.6397522,9.83910076 7.24930313,10.2295499 L5.35100654,12.1278466 L6.05811323,12.8349534 C6.45136014,13.2282004 6.32208977,13.6053645 5.77546101,13.6834543 Z M10.2981302,2.3810729 L13.2588464,1.95811344 C13.8192003,1.87806288 14.1942059,2.26274971 14.1153655,2.81463257 L13.6924061,5.7753488 C13.6137629,6.32585066 13.2344294,6.44852523 12.8439051,6.05800094 L12.1367982,5.35089416 L10.2294376,7.25825476 C9.836222,7.65147037 9.20588451,7.64864296 8.81536027,7.25811872 C8.42211336,6.86487181 8.42477509,6.23449046 8.81522416,5.84404133 L10.7225846,3.9366806 L10.0154779,3.22957382 C9.62223103,2.83632686 9.7515014,2.45916273 10.2981302,2.3810729 Z"
                          ></path>
                        </svg>
                        <!-- expand icon svg  End -->
                      </div>
                    </div>
                  </div>
                </td>
                <!-- table columns  -->
                <template
                  v-for="item in record.customFieldsData.filter(
                    (x) => x.isRender
                  )"
                >
                  <td
                    v-if="item.isRender"
                    :key="`key_${record.id}_${item.fieldId}`"
                    :cellId="`cellId_${record.id}_${item.fieldId}`"
                    @click="onCellActions($event, record, item)"
                    class="cell-td"
                  >
                    <!-- cells input   -->
                    <!-- v-if for tag for status  -->
                    <!-- <Tag :value="displayTableCell(item)" v-if="item.singleSelectValue" :severity="statusColors[displayTableCell(item)]"></Tag> -->
                    <template v-if="item.singleSelectValue !== undefined">
                      <vs-chip
                        v-if="item.singleSelectValue"
                        class="ml-1 mt-1"
                        :color="item.color"
                        :style="generateTextColor(item.color)"
                      >
                        {{ displayTableCell(item) }}
                      </vs-chip>
                      <OverlayPanel
                        :ref="`singleSelect${record.id}_${item.fieldId}`"
                        appendTo="body"
                        style="width: 200px; padding: 0"
                      >
                        <div class="w-full">
                          <Dropdown
                            class="w-full"
                            v-model="selectedSingleSelectValue"
                            :options="singleSelectOptions"
                            optionLabel="optionName"
                            optionValue="optionId"
                            placeholder="Select a option"
                            showClear
                            @change="updateSingleSelectValue(record.id, item)"
                          >
                            <template #value="slotProps">
                              <div class="flex" v-if="slotProps.value">
                                <vs-chip
                                  :color="
                                    getOptionColor(
                                      slotProps.value,
                                      singleSelectOptions
                                    )
                                  "
                                  :style="
                                    getOptionColor(
                                      slotProps.value,
                                      singleSelectOptions
                                    )
                                      ? generateTextColor(
                                          getOptionColor(
                                            slotProps.value,
                                            singleSelectOptions
                                          )
                                        )
                                      : ''
                                  "
                                >
                                  {{
                                    getOptionName(
                                      slotProps.value,
                                      singleSelectOptions
                                    )
                                  }}
                                </vs-chip>
                              </div>
                              <label v-else class="text-gray-400">
                                {{ slotProps.placeholder }}
                              </label>
                            </template>
                            <template
                              #option="{ option: { optionName, color } }"
                            >
                              <div class="flex">
                                <vs-chip
                                  :color="color || ''"
                                  :style="color ? generateTextColor(color) : ''"
                                >
                                  {{ optionName }}
                                </vs-chip>
                              </div>
                            </template>
                          </Dropdown>
                        </div>
                      </OverlayPanel>
                    </template>
                    <template v-else-if="item.userValue">
                      <span class="user-name-list">
                        {{ displayTableCell(item) }}
                      </span>
                      <OverlayPanel
                        :ref="`userMultiSelect${record.id}_${item.fieldId}`"
                        appendTo="body"
                        id="multiUserSelectOverlay"
                        style="width: 200px; padding: 0"
                      >
                        <Multiselect
                          :ref="`userMultiSelect${record.id}_${item.fieldId}MSelect`"
                          class="w-full"
                          v-model="userSelection[`${record.id}_${item.fieldId}`]"
                          placeholder=""
                          :show-labels="false"
                          track-by="id"
                          label="fullName"
                          :multiple="true"
                          :options="allUsers"
                          :allow-empty="true"
                          :closeOnSelect="false"
                          :isOpen="true"
                          @input="
                            updateUserSelection(
                              `${record.id}_${item.fieldId}`,
                              $event
                            )
                          "
                          @close="
                            submitAssignee(`${record.id}_${item.fieldId}`, $event)
                          "
                        >
                          <template
                            slot="selection"
                            slot-scope="{ values, search, isOpen }"
                          >
                            <span
                              class="multiselect__single"
                              v-if="values.length && !isOpen"
                            >
                              {{ displayTableCell(item) }}
                            </span>
                          </template>
                        </Multiselect>
                      </OverlayPanel> 
                    </template>
                    <template v-else-if="item.filesValue">
                      <div class="flex p-1">
                        <div
                          v-for="(extension, index) in getFileExtensions(
                            item.filesValue
                          )"
                          :key="index"
                        >
                          <label class="text-md">
                            {{
                              index < item.filesValue.length - 1 &&
                              index < fileExtensionLimit
                                ? `${extension},&nbsp;`
                                : extension
                            }}
                          </label>
                        </div>
                      </div>
                    </template>
                    <template v-else-if="item.multiSelectValues">
                      <div
                        class="flex overflow-hidden multiselect"
                        :style="
                          multiSelectColumnWidth[item.fieldId]
                            ? `width:${multiSelectColumnWidth[item.fieldId]}px`
                            : ''
                        "
                      >
                        <vs-chip
                          v-for="option in item.multiSelectValues"
                          :key="option.optionId"
                          class="w-max mb-0 multiselect-chips mt-1 mb-1 ml-1"
                          :color="option.color"
                          :style="generateTextColor(option.color)"
                        >
                          {{ option.optionName }}
                        </vs-chip>
                      </div>
                    </template>
                    <template v-else-if="item.dateValue !== undefined">
                      <CustomDateTimeSelector
                        class="menu-tableview-date-input"
                        :dateValue="item.dateValue.utcDateOnly"
                        :timeValue="item.dateValue.utcTimeOnly"
                        :inputPlaceholder="''"
                        @input:Date="
                          (val) => (item.dateValue.utcDateOnly = val)
                        "
                        @input:Time="
                          (val) => (item.dateValue.utcTimeOnly = val)
                        "
                        @update="updateDateValue(record.id)"
                      />
                    </template>
                    <template v-else-if="item.dateNoTzValue !== undefined">
                      <CustomDateTimeSelector
                        class="menu-tableview-date-input"
                        :dateValue="item.dateNoTzValue.localDateOnly"
                        :timeValue="item.dateNoTzValue.localTimeOnly"
                        :inputPlaceholder="''"
                        :convertToUTC="false"
                        @input:Date="
                          (val) => (item.dateNoTzValue.localDateOnly = val)
                        "
                        @input:Time="
                          (val) => (item.dateNoTzValue.localTimeOnly = val)
                        "
                        @update="updateDateValue(record.id)"
                      />
                    </template>
                    <textarea
                      v-else
                      class="cells__input cell-export"
                      @input="updateCellValue($event.target.value, item, record)"
                      v-text="displayTableCell(item)"
                      :disabled="disabledColumn(item)"
                      :spellcheck="false"
                    />
                    <!-- cells input End  -->
                  </td>
                </template>
                <!-- table columns End -->
              </tr>
            </template>
          </tbody>
        </template>
        <tbody>
          <tr class="cursor-pointer h-8">
            <td>
              <div class="flex justify-center">
                <vs-icon icon="add" size="small" @click="expandRecord(null)" />
              </div>
            </td>
          </tr>
        </tbody>
        <template>
          <tbody
            v-for="(record, index) in formattedRecordData.slice(0, 1)"
            :key="index + 'total'"
          >
            <tr class="cursor-pointer h-8">
              <td></td>
              <template
                v-for="item in record.customFieldsData.filter(
                  (x) => x.isRender
                )"
              >
                <td
                  v-if="item.isRender"
                  :key="`key_${item.fieldId}`"
                  class="cell-td"
                >
                  <template
                    v-if="
                      item.numberValue !== undefined ||
                      item.currencyValue !== undefined
                    "
                  >
                    <span class="flex items-center field-sum p-1">
                      <p class="mr-1">Sum</p>
                      {{ getFieldSum(item.fieldId) }}
                    </span>
                  </template>
                </td>
              </template>
            </tr>
          </tbody>
        </template>
      </table>
    </section>
    <!-- <section v-else-if="mountComplete">
      <Transition>
        <vx-card v-if="mountComplete && !hasColumnToRender">
          <div id="no-record-holder">
            <span style="color: red;">No columns to render.</span>
            <br>
            <span>
              Chose columns to render from <span v-tooltip="'[Show] button at top left'">show</span>
            </span>
          </div>
        </vx-card>
      </Transition>
    </section> -->
  </div>
</template>
<!-- eslint-disable nonblock-statement-body-position multiline-ternary -->
<script>
import TableHeader from "./TableView/TableHeader.vue";
import TableSort from "./TableView/TableSort.vue";
import $ from "jquery";
import { mapGetters } from "vuex";
import { isEmpty } from "lodash";
import GroupBy from "../mixins/GroupBy";
import { generateTextColor } from "@/config/helpers.js";
import { formatAmount, getUniqueIdV4 } from "@/helpers/helper";

export default {
  components: {
    TableHeader,
    TableSort,
    ControlBar: () => import("./ControlBar"),
    OverlayPanel: () => import("primevue/overlaypanel"),
    CustomDateTimeSelector: () => import("@/components/custom/CustomDateTimeSelector")
  },
  mixins: [GroupBy],
  props: {
    title: {
      type: String,
      default: "",
    },
    customFields: {
      type: Array,
      default: () => [],
    },
    recordData: {
      type: Array,
      default: () => [],
    },
    viewMetaData: {
      type: Object,
      default: () => {},
    },
    fetchingData: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      // statusColors: [{'Open': 'rgb(211, 211, 211)'}, {'In Progress': 'rgb(65, 148, 246)'}, {'Completed': 'success'}],
      valueType: {
        text: "textValue",
        singleSelect: "singleSelectValue",
        date: "dateValue",
        user: "userValue",
        dateNoTz: "dateNoTzValue",
        number: "numberValue",
        currency: "currencyValue",
        multiSelect: "multiSelectValues",
        rollup: "rollupValue",
        formula: "formulaValue",
      },
      customColumnCellTimerMap: new Map(),
      openStatus: null,
      userSelection: {},
      isCollapsed: {},
      fileExtensionLimit: 3,
      mountComplete: false,
      singleSelectOptions: [],
      selectedSingleSelectValue: null,
      sortingOptions: [
        { text: 'A → Z', value: 'a' },
        { text: 'Z → A', value: 'd' },
      ],
      tableSortSchema: [],
      columnTypesForSorting: ['text', 'number', 'currency'],
    };
  },

  computed: {
    ...mapGetters("companyUserV2", ["getAllUsersList"]),
    allUsers() {
      return this.getAllUsersList;
    },
    allUsersMap() {
      return this.allUsers.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    },
    hasColumnToRender() {
      const { show } = this.viewMetaData|| {};
      const { columns } = show || {};
      return (columns || []).length > 0;
    },
    multiSelectColumnWidth () {
      return this.customFieldsToRender.reduce((acc, item) => {
        if (item.type === "multiSelect") {
          acc[item.customFieldId] = item.width
        }
        return acc
      }, {})
    },
    sortingColumns() {
      return this.customFieldsToRender
        .filter(({ type }) => this.columnTypesForSorting.includes(type))
        .map(({ customFieldId, name }) => ({
          field: customFieldId,
          label: name,
          uniqueId: getUniqueIdV4(),
        }));
    },
  },

  watch: {
    viewData: {
      handler(val) {
        Object.keys(val).map((key) => {
          const res = this.isCollapsed[key] || false;
          this.$set(this.isCollapsed, key, res);
        }, {});
      },
      immediate: true,
    },
    recordData: {
      handler(records) {
        records.forEach((record) => {
          const { id, customFieldsData } = record || {};
          if (id && !isEmpty(customFieldsData)) {
            const userFields = customFieldsData.filter((x) => x.userValue);
            userFields.forEach((x) => {
              this.$set(
                this.userSelection,
                `${id}_${x.fieldId}`,
                x.userValue.map((x) => this.allUsersMap[x.userId])
              );
            });
          }
        });
      },
      deep: true,
      immediate: true,
    },
  },
  mounted(){
    this.confirmDataFetch();
  },
  updated: function () {
  this.$nextTick(function () {
    this.resizeColumWidth();
  })
  },
  methods: {
    resizeColumWidth() {
      var thElm;
      var startOffset;
      var THIS = this;
        Array.prototype.forEach.call(
        document.querySelectorAll(".table-resizable th"),
        function (th) {
          th.style.position = "relative";
          var grip = document.createElement("div");
          grip.classList.add("handle-resizeble");
          grip.innerHTML = "&nbsp;";
            grip.addEventListener("mousedown", function (e) {
            e.preventDefault();
            thElm = th;
            startOffset = th.offsetWidth - e.pageX;
          });
          th.appendChild(grip);
        }
      );

      document.addEventListener("mousemove", function (e) {
        if (thElm) {
          thElm.style.width = startOffset + e.pageX + "px";
          thElm.style.maxWidth = startOffset + e.pageX + "px";
        }
      });

      document.addEventListener("mouseup", function (e) {
        if (thElm) {
          const columnId = thElm.getAttribute("columnid");
          const width = thElm.style.width;
          THIS.updateTableColumnWidth(columnId, width);
        }
        thElm = undefined;
      });
    },
    updateTableColumnWidth(columnId, width){
      const newViewPayload = this.viewMetaData.show.columns.map((item) => {
        if(item.customFieldId === parseInt(columnId)){
             item.width = width.split("px")[0];
             return item;
          }
          return item;
      });
      const payload = {
        show: {
          columns: newViewPayload
        },
        type: 'table'
      };
      this.updateView(payload);
    },  
    expandRecord(recordId) {
      this.$emit("toggleDetailsView", recordId);
    },
    disabledColumn(item) {
      const fieldValues = [
        "dateValue",
        "filesValue",
        "dateNoTzValue",
        "multiSelectValues",
        "recordLinkValues",
      ];
      const hasValue = fieldValues.some((x) => item[x]);
      if(item.hasOwnProperty(this.valueType.rollup) || item.hasOwnProperty(this.valueType.formula)){
        return true;
      }
      if (item.hasOwnProperty(this.valueType.text) && !hasValue) {
        return false;
      }
      return true;
    },
    displayTableCell(item) {
      if (
        (item.hasOwnProperty(this.valueType.rollup) &&
          item.rollupValue.type === "number") ||
        (item.hasOwnProperty(this.valueType.formula) &&
          item.formulaValue.type === "number")
      ) {
        return item.numberValue;
      }
      if (
        item.hasOwnProperty(this.valueType.number) &&
        item.numberValue != null
      ) {
        return item.numberValue;
      }
      if (item.hasOwnProperty(this.valueType.text)) {
        return item.textValue;
      }
      if (item.hasOwnProperty(this.valueType.date)) {
        if (item.dateValue.utcDateOnly) {
          return `${item.dateValue.utcDateOnly}`;
        }
        return "";
      }
      if (item.hasOwnProperty(this.valueType.singleSelect)) {
        const [singleSelectOptions] = this.customFields
          .map((field) => {
            if (field.type === "singleSelect" && field.id === item.fieldId) {
              return field.singleSelectOptions;
            }
          })
          .filter(Boolean);

        const optionLabel = singleSelectOptions.filter(
          (x) => x.optionId === item.singleSelectValue
        );

        return optionLabel.length ? optionLabel[0].optionName : "";
      }
      if (item.hasOwnProperty(this.valueType.user)) {
        if (item.userValue.length === 0) {
          return [];
        }
        return item.userValue.map((x) => this.allUsersMap[x.userId].fullName);
      }
    },
    handleOnCellFocus(cellId, fieldId) {
      // use for status dropdown
      // const [checkFieldIsStatusOrNot] = this.customFields.filter(
      //   (x) => x.id === fieldId
      // );
      // if (checkFieldIsStatusOrNot.name === "Status") {
      //   this.openStatus = cellId;
      // } else {
      //   this.openStatus = null;
      // }
      $("td").removeClass("cell-focus");
      $(`[cellId=${cellId}]`).addClass("cell-focus");
    },
    updateCellValue(newValue, item, record) {
      const timeoutId = `${record.id}_${item.fieldId}`;
      if (this.customColumnCellTimerMap.has(timeoutId)) {
        clearTimeout(this.customColumnCellTimerMap.get(timeoutId));
      }
      const [values] = this.customFields
        .map((field) => {
          if (field.id === item.fieldId) {
            const value = this.valueType[field.type];
            if (field.type === "text") {
              return {
                fieldId: field.id,
                [value]: newValue || "",
              };
            } else if (field.type === "number") {
              return {
                fieldId: field.id,
                [value]: !isNaN(parseFloat(newValue))
                  ? parseFloat(newValue)
                  : null,
              };
            } else if (field.type === "currency") {
              const regex = /[^0-9\.]+/g;
              const numericValue = newValue.replace(regex, "");

              return {
                fieldId: field.id,
                [value]: numericValue ? Number(numericValue) : null,
              };
            }
          }
        })
        .filter(Boolean);
      const payload = {
        recordId: record.id,
        values: [values],
      };
      var that = this;
      this.customColumnCellTimerMap.set(
        timeoutId,
        setTimeout(function () {
          that.$emit("update:Details", payload);
        }, 1000)
      );
    },
    updateUserSelection(id, val) {
      this.$set(this.userSelection, id, val);
    },
    submitAssignee(id, val) {
      const [recordId, fieldId] = id.split("_");
      if (!recordId || !fieldId) return;
      let record = this.recordData.find((x) => {
        return x.id == recordId;
      });
      if (!record) return;
      record = JSON.parse(JSON.stringify(record));
      let hasDataChange = false;
      const updatedPayload = record.customFieldsData.map((x) => {
        if (x.fieldId == fieldId) {
          const userValue = val.map((x) => ({ userId: x.id }));
          let compareStringOne = userValue
            .map((x) => x.userId)
            .sort()
            .join("_");
          let compareStringTwo = x.userValue
            .map((x) => x.userId)
            .sort()
            .join("_");
          if (compareStringOne !== compareStringTwo) {
            hasDataChange = true;
          }
          return {
            ...x,
            userValue,
          };
        }
        return x;
      });
      if (hasDataChange) {
        this.$emit("update:Details", {
          recordId: recordId,
          values: [...updatedPayload],
        });
      }
    },
    updateView(data) {
      const payload = {
        tableMetaData: {
          ...data,
        },
      };
      this.$emit("updateView", payload);

      if (data && data.show) {
        // Remove sort schema if column is removed from view
        const columnIds = data.show.columns.map((x) => x.customFieldId);
        const newSortSchema = this.tableSortSchema.filter((x) =>
          columnIds.includes(x.field)
        );
        this.handleSortSchema(newSortSchema);
      }
    },
    openMultiUserSelect(refName, event) {
      if ((this.$refs[refName] || [])[0]) {
        this.$refs[refName][0].toggle(event);
        this.$nextTick(() => {
          if ((this.$refs[`${refName}MSelect`] || [])[0]) {
            this.$refs[`${refName}MSelect`][0].toggle();
          }
        });
      }
    },
    updateRecordOrder(record) {
      if (!isEmpty(record)) {
        const {
          moved: {
            element: { customFieldId },
            newIndex,
          },
        } = record;

        const sortedList = this.viewMetaData.show.columns.sort(
          (a, b) => a.order - b.order
        );

        const itemIndex = sortedList.findIndex(
          (x) => x.customFieldId === customFieldId
        );
        const movedItem = sortedList.splice(itemIndex, 1)[0];
        sortedList.splice(newIndex - 1, 0, movedItem);

        sortedList.map((item, index) => {
          item.order = index + 1;
        });

        const payload = {
          ...this.viewMetaData,
          show: {
            columns: sortedList,
          },
        };

        this.updateView(payload);
      }
    },
    generateTextColor(color) {
      return generateTextColor(color);
    },
    confirmDataFetch() {
      if (!this.fetchingData) {
        this.mountComplete = true;
      } else {
        // this.confirmDataFetch();
      }
    },
    openSingleSelect (item, refName, event) {
      if ((this.$refs[refName] || [])[0]) {
        this.$refs[refName][0].toggle(event)

        if (this.$refs[refName][0].visible) {
          this.selectedSingleSelectValue = item.singleSelectValue || null
          this.singleSelectOptions =
            this.customFields.find((field) => field.id === item.fieldId)
              .singleSelectOptions || []
        } else {
          this.selectedSingleSelectValue = null
          this.singleSelectOptions = []
        }
      }
    },
    getOptionColor (id, optionsArray) {
      const option = (optionsArray || []).find(
        (option) => option.optionId === id
      )

      return option && option.color ? option.color : ''
    },
    getOptionName (id, optionsArray) {
      const option = (optionsArray || []).find(
        (option) => option.optionId === id
      )

      return option && option.optionName ? option.optionName : ''
    },
    updateSingleSelectValue (recordID, selectedField) {
      if (
        selectedField.singleSelectValue &&
        this.selectedSingleSelectValue &&
        selectedField.singleSelectValue === this.selectedSingleSelectValue
      )
        return

      const payload = {
        recordId: recordID,
        values: this.recordData
          .find((record) => record.id === recordID)
          .customFieldsData.map((field) => {
            if (field.fieldId === selectedField.fieldId) {
              return {
                ...field,
                singleSelectValue: this.selectedSingleSelectValue
              }
            }

            return field
          })
      }

      this.$emit('update:Details', payload)
    },
    getFieldSum (fieldId, recordArray = null) {
      const records =
        recordArray !== null ? recordArray : this.formattedRecordData
      const result = {
        fieldType: this.customFields.find((field) => field.id === fieldId).type,
        total: 0
      }

      records.forEach((record) => {
        const recordField = record.customFieldsData.find(
          (field) => field.fieldId === fieldId
        )

        const valueType = {
          number: 'numberValue',
          currency: 'currencyValue',
          rollup: 'numberValue',
          formula: 'numberValue'
        }

        if (recordField && recordField[valueType[result.fieldType]]) {
          result.total += parseFloat(
            recordField[valueType[result.fieldType]]
          )
        }
      })

      return result.fieldType === 'currency'
        ? formatAmount(parseFloat(result.total).toFixed(2))
        : result.total
    },
    onCellActions (event, record, item) {
      this.handleOnCellFocus(
        `cellId_${record.id}_${item.fieldId}`,
        item.fieldId
      );
      this.openMultiUserSelect(
        `userMultiSelect${record.id}_${item.fieldId}`,
        event
      );
      this.openSingleSelect(
        item,
        `singleSelect${record.id}_${item.fieldId}`,
        event
      );
    },
    updateDateValue (recordId) {
      const payload = {
        recordId,
        values: this.recordData.find((record) => record.id === recordId)
          .customFieldsData
      };

      this.$emit("update:Details", payload);
    },
    handleSortSchema(sortSchema) {
      this.tableSortSchema = [...sortSchema];
      this.$refs.tableSort.setSortSchema(sortSchema);
    },
  },

  beforeDestroy() {
    this.customColumnCellTimerMap.clear();
  },
};
</script>

<style lang="scss" scoped>
$borderColor: #e9ebf0;
.show-expand-icon-hover {
  transition: all 350ms;
}

.show-expand-icon-hover td:first-child {
  position: relative;
  min-width: 30px;
}

.expand-icon {
  display: none;
  margin-left: 4px;
  cursor: pointer;
}

.show-expand-icon-hover:hover .expand-icon {
  display: flex;
}

.spreadsheet-table {
  width: max-content;

  tbody {
    background: #fff;
  }

  th,
  td {
    padding: 0px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
}

.spreadsheet-table {
  border: 1px solid $borderColor;
  border-collapse: collapse;

  thead {
    height: 40px;
    tr {
      th {
        background: #f5f5f5;
        border-bottom: 1px solid hsl(0, 0%, 82%);
        border-left: 1px solid $borderColor;

        .table-heading {
          font-weight: 500;
          color: hsl(0, 0%, 10%);
          font-size: 12px;
        }
      }
    }
  }

  th,
  td {
    border: 1px solid $borderColor;
    border-collapse: collapse;
  }
}

.cell-td {
  position: relative;
}

.cells__input {
  border: none;
  padding: 4px;
  width: 100%;
  overflow: hidden;
  height: 20px;
  color: #292d34;
  font-family: Arial, Montserrat, Helvetica, sans-serif;
  resize: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:disabled {
    background: #fff;
  }
}

.cells input,
.cells button {
  border: none;
  background: #fff;
  padding: 0 6px;
}

.cell-focus {
  // box-shadow: 0 0 0 3px #2d7ff9 !important;
  outline: #2d7ff9 auto 1px !important;

  .multiselect {
    flex-wrap: wrap;
  }
}

.multiselect-chips {
  min-width: fit-content;
}

.papper-clip-vertical {
  margin-right: -5px;
  color: rgb(132, 132, 132);
  transform: rotate(270deg);
  cursor: pointer;
}

.subsheet-rename-input {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 3px;
}

.show-on-hover {
  display: none;
}

.sheet-name-hover:hover .show-on-hover {
  display: block;
}

.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden !important;
  position: relative;
}

.table-editor {
  .table-tools {
    .formatter-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .formatter-icon {
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        height: 25px;
        width: 25px;
        padding: 1px;
        &:hover {
          background-color: #e1ffee;
        }
      }
    }
  }
  tr {
    .row-index {
      background: #fafbfc !important;
      font-size: 11px;
      color: #7c828d;
      .checkbox {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        background: #ffffff;
        border: 1px solid #95a0a6;
        display: none;
      }
    }

    &:hover {
      .row-index {
        .checkbox {
          display: flex;
        }
        .indexNo {
          display: none;
        }
      }
    }

    &.selected {
      background: #f0f7ff;
      box-shadow: #f0f7ff 0px 2px 2px 0px;
      textarea,
      td {
        background: #f0f7ff;
      }
      .row-index {
        .checkbox {
          background-color: #2d7ff9;
          border-color: transparent;
          display: flex;
        }
        .indexNo {
          display: none;
        }
      }
    }

    .menu-tableview-date-input {
      padding-left: 2px;
      padding-right: 2px;

      ::v-deep {
        .vs-con-input input {
          border: none !important;
          padding: 4px !important;
          color: #292d34;
          font-size: 13.33px !important;
          font-family: Arial, Montserrat, Helvetica, sans-serif;
          background-color: #fff;
        }
      }
    }
  }
}

.status-list-container {
  padding: 10px 10px 0;
  min-width: 170px;
  max-height: 350px;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 4px 1px #babfc766;
  background: #fff;
  border-radius: 6px;
  animation: dropdownMenuAnimation 0.03s ease-in forwards;
  min-width: 150px !important;
  z-index: 1000;
  .status-list-item {
    position: relative;
    border-radius: 4px;
    padding: 8px 8px 8px 26px;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    .status-list-status {
      font-weight: 600;
      color: #343434;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 11px;
      font-weight: 500;
      line-height: 1;
      /* color: #bbb; */
      text-transform: uppercase;
      transition: background-color 0.1s;
      -webkit-user-select: none;
      user-select: none;
      padding-right: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
    }
  }
}

.menu-table-view {
  .spreadsheet-table {
    .show-expand-icon-hover {
      td:first-child {
        background: #fafbfc !important;
      }
    }
    tr {
      &.accordion-row {
        height: 40px;
        background: #fafbfc !important;
        &:hover {
          td {
            background: #f0f7ff;
          }
        }
        .accordion-icon-wrapper {
          display: table-cell;
          border: none;
          cursor: pointer;
          .accordion-icon {
            margin-left: 0.5em;
            margin-top: 0.5em;
          }
        }
        .accordion-header-wrapper {
          // border: none;
          .accordion-header-text {
            display: inline-flex;
            align-items: center;
            height: 30px;
            padding: 0 10px;
            border: 1px solid transparent;
            border-radius: 3px 3px 0 0;
            font-size: 11px;
            // color: #fff;
            text-transform: uppercase;
            white-space: nowrap;
            z-index: 10;
            align-self: flex-end;
            cursor: pointer;
            // background: rgb(168, 117, 255);
            label {
              cursor: pointer;
            }
          }
        }
      }
    }
    .user-name-list {
      font-family: Arial, Montserrat, Helvetica, sans-serif;
      font-size: 13.33px !important;
      color: #292d34;
      /* Above 3 attributed copied from ".cells__input" class */
      width: 100%;
      margin-left: 1rem;
    }
  }
}
::v-deep {
  .multiselect__content-wrapper {
    position: relative;
  }
}

.field-sum {
  color: #292d34;
  font-size: 13.33px;
  font-family: Arial, Montserrat, Helvetica, sans-serif;
}

.w-max {
  width: max-content;
}
</style>


<style >
.handle-resizeble{
  position: absolute;
  top: 4px;
  right: 0!important;
  bottom: 0;
  width: 3px;
  height: 30px;
  cursor: ew-resize;
}
.handle-resizeble:hover, .handle-resizeble:active{
  background-color: #2d7ff9;
  border-radius: 2px;
}
</style>