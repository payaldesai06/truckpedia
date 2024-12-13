<template>
  <div class="menu-gantt-view">
    <ControlBar
      :viewName="'gantt'"
      :selectedGroupBy="selectedGroupBy"
      :groupByOptions="groupByOptions"
      :viewMetaData="viewMetaData"
      :customFields="customFields"
      @updateView="updateView"
      @toggleDetailsView="toggleDetailsView"
    >
      <div class="group-by ml-2" v-if="(groupByOptions || []).length">
        <vs-dropdown vs-trigger-click>
          <vs-button
            class="btn-drop cursor-pointer"
            color="primary"
            icon="expand_more"
            size="small"
            icon-after
          >
            <span> Dates Criteria </span>
            <span v-if="(dateCriteria || {}).name">
              : {{ dateCriteria.name }}
            </span>
          </vs-button>
          <vs-dropdown-menu>
            <vs-dropdown-item
              v-for="item in groupByOptions"
              :key="item.id"
              :disabled="item.isDisabled"
              @click="updateDateCriteria(item)"
            >
              {{ item.name }}
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>
    </ControlBar>
    <GanttChart
      :key="dateRange.join('-')"
      class="mt-4"
      :gantt-data="chartData"
      :time-section="dateRange"
      :chart-max-height="ChartHeight"
      :showSideBar="false"
      :dateHourModeDayCount="0"
      @onClickBar="toggleDetailsView($event.recordId)"
    >
      <template #container-box="{ item }">
        <div
          v-if="typeof item === 'object' && infoFieldToRender"
          class="gantt_side_content text-primary"
        >
          {{ recordDataMap[item.recordId][infoFieldToRender.id].textValue }}
        </div>
      </template>
    </GanttChart>
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import dayjs from "dayjs";
import GroupBy from "../mixins/GroupBy";
export default {
  name: "GanttView",
  mixins: [GroupBy],
  components: {
    GanttChart: () => import("@/components/ganttChart"),
    ControlBar: () => import("./ControlBar"),
  },
  props: {
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
  },
  mounted() {
    this.$nextTick(() => {
      const contentArea = (document || {}).getElementById(
        "content-area"
      ).clientHeight;
      this.ChartHeight = contentArea ? contentArea - 150 : this.clientHeight;
    });
    this.verifyInitialDataForRendering();
  },
  data() {
    return {
      ChartHeight: 550,
    };
  },
  computed: {
    currentTime() {
      return new Date().getTime();
    },
    groupByOptions() {
      return (this.customFields || []).filter((f) => f.type === "date" || f.type === "dateNoTz");
    },
    customFieldsMap() {
      return (this.customFields || []).reduce((acc, f) => {
        acc[f.id] = f;
        return acc;
      }, {});
    },
    recordDataMap() {
      const recordData = ((this.viewData || [])[0] || {}).records || [];
      return recordData.reduce((acc, r) => {
        const customFieldsData = ((r || {}).customFieldsData || []).reduce(
          (acc, f) => {
            acc[f.fieldId] = {
              ...f,
              ...this.customFieldsMap[f.fieldId],
            };
            return acc;
          },
          {}
        );
        acc[r.id] = {
          ...customFieldsData,
          ...r,
        };
        return acc;
      }, {});
    },
    fieldFilteredRecords() {
      const { id: filterFieldId } = this.dateCriteria || {};
      const restObject = {};
      let datesArray = [];
      const recordDataMap = JSON.parse(
        JSON.stringify(this.recordDataMap || {})
      );
      Object.keys(recordDataMap || {}).forEach(function (key, index) {
        const fieldCheck = recordDataMap[key][filterFieldId];
        if (fieldCheck) {
          if (fieldCheck.type === "date") {
            const { utcTimeOnly, utcDateOnly } = fieldCheck.dateValue || {};
            if(utcDateOnly) {
              const date =
                utcDateOnly && utcTimeOnly
                  ? dayjs(
                    new Date(`${utcDateOnly}T${utcTimeOnly}:00.000Z`)
                  ).format('YYYY-MM-DD')
                  : utcDateOnly

              datesArray.push(date)
              restObject[key] = {
                ...recordDataMap[key][filterFieldId],
                start: dayjs(date).valueOf(),
                end: dayjs(date).valueOf()
              };
            }
          } else if (fieldCheck.type === "dateNoTz") {
            const { localTimeOnly, localDateOnly } = fieldCheck.dateNoTzValue || {};
            if(localDateOnly) {
              const date =
                localDateOnly && localTimeOnly
                  ? dayjs(
                    new Date(localDateOnly + ' ' + localTimeOnly)
                  ).format('YYYY-MM-DD')
                  : localDateOnly

              datesArray.push(date)
              restObject[key] = {
                ...recordDataMap[key][filterFieldId],
                start: dayjs(date).valueOf(),
                end: dayjs(date).valueOf()
              };
            }
          }
        }
      });
      const uniqueDates = [...new Set(datesArray)];
      const startDate = uniqueDates.sort()[0];
      const endDate = uniqueDates.sort().reverse()[0];
      const dateRange = [startDate, endDate];
      return {
        dateRange,
        filteredRecords: restObject,
      };
    },
    dateRange() {
      return this.fieldFilteredRecords.dateRange;
    },
    chartData() {
      return Object.keys(this.fieldFilteredRecords.filteredRecords).map(
        (key) => {
          return {
            ...this.fieldFilteredRecords.filteredRecords[key],
            recordId: key,
          };
        }
      );
    },
    hasChartData() {
      return (this.chartData || []).length > 0;
    },
    infoFieldToRender() {
      const { columns } = (this.viewMetaData || {}).show || {};
      const { customFieldId } =
        (columns || []).find((c) => c.order === 1) || {};
      if (customFieldId)
        return this.customFields.find((f) => f.id === customFieldId);
      return null;
    },
    dateCriteria() {
      const { recordDatesForUi } = this.viewMetaData || {};
      if(!recordDatesForUi) return null; // This line is needed 
      /**
       * To ensure that the chart Ui is not rendered with the fallback date criteria,
       * before the recordMetaData is received from BE, above line is needed
       */
      const { endDate, startDate } = recordDatesForUi || {};
      const { customFieldId: startDateFieldID } = startDate || {};
      const { customFieldId: endDateFieldID } = endDate || {};
      if (startDateFieldID) {
        const fieldSelected = this.groupByOptions.find((f) => f.id === startDateFieldID) || {};
        return fieldSelected ? fieldSelected : this.groupByOptions[0] || null;
      } else {
        return this.groupByOptions[0] || null;
      }
    },
  },
  watch: {
    viewMetaData: {
      handler() {
        this.verifyInitialDataForRendering();
      },
      deep: true,
    },
  },
  methods: {
    toggleDetailsView(recordId) {
      this.$emit("toggleDetailsView", recordId);
    },
    updateView(data) {
      const payload = {
        ganttMetaData: {
          ...data,
        },
      };
      this.$emit("updateView", payload);
    },
    updateDateCriteria(selectedDateField, showColumData = null) { // Date criteria determines what date is the base of rendering in the chart 
      const { id : selectedDateCriteria } = selectedDateField || {};
      const { recordDatesForUi } = this.viewMetaData || {};
      const { endDate, startDate } = recordDatesForUi || {};
      const { customFieldId: startDateFieldID } = startDate || {};
      const { customFieldId: endDateFieldID } = endDate || {};
      if (selectedDateCriteria !== startDateFieldID) {
        //  || selectedDateCriteria !== endDateFieldID
        const payload = {
          ganttMetaData: {
            ...this.viewMetaData,
            recordDatesForUi: {
              ...(this.viewMetaData.recordDatesForUi || {}),
              startDate: {
                customFieldId: selectedDateCriteria,
              },
              endDate: {
                customFieldId: selectedDateCriteria,
              },
            },
          },
        };
        if (showColumData) {
          payload.ganttMetaData.show = showColumData;
        }
        this.$emit("updateView", payload);
      }
    },
    verifyInitialDataForRendering() {
      let { recordDatesForUi, show } = this.viewMetaData || {};
      const { endDate, startDate } = recordDatesForUi || {};
      const { customFieldId: startDateFieldID } = startDate || {};
      const { customFieldId: endDateFieldID } = endDate || {};

      let appendShowColumData = false;
      const { columns: columnDataToRender } = show || {};
      if ((columnDataToRender || []).length == 0) {
        show = {
          columns: [
            {
              order: 1,
              customFieldId: this.customFields[0].id,
            },
          ],
        }
        appendShowColumData = true;
      }
      /**
       * startDateFieldID and endDateFieldID determines what date field to user for chart rendering
       * If they are not returned from API, we will try to update it with the first date field available
       * Incase not date fields are available, we will skip this step
       */
      if (!startDateFieldID) {
        if (this.dateCriteria) {
          if (appendShowColumData) { // This special case is to ensure show colum data is a;ways present
          /** API was throwing error if we try to update date field with out show field */
            this.updateDateCriteria(this.dateCriteria, show)
          } else {
            this.updateDateCriteria(this.dateCriteria);
          }
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.menu-gantt-view {
  .gantt_side_content {
    width: max-content;
    min-width: max-content;
    left: 100%;
    position: absolute;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 2px 10px;
  }
}
</style>
