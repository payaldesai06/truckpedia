<template>
  <div>
    <div
      class="w-1/5 absolute right-0 bg-white sidebar"
      style="z-index: 1000"
      v-if="isIncidentSidebarActive"
      v-click-outside="toggleIncidentSidebar"
    >
      <IncidentSidebar @update:showColumns="updateIncidentShowColumns" />
    </div>
    <vx-card>
      <div class="vx-row m-0 flex justify-between items-center w-full">
        <div class="vx-col pl-0 flex items-center">
          <h3 v-text="'Incidents'" />
        </div>
        <div class="vx-col pr-0 flex">
          <vs-button
            class="ml-4"
            color="primary"
            icon="person_add"
            @click.prevent="redirectToAddIncident"
          >
            ADD INCIDENT
          </vs-button>
          <div class="flex items-center justify-end px-3">
            <vs-icon
              class="text-2xl cursor-pointer"
              icon="more_horiz"
              @click.stop="toggleIncidentSidebar"
            />
          </div>
        </div>
      </div>
      <vs-divider />
      <div class="vx-row">
        <div class="vx-col w-full">
          <DataTable
            :value="incidents"
            :key="defaultKey"
            filterDisplay="row"
            :filters="filter"
            removableSort
            responsiveLayout="scroll"
            :lazy="true"
            :paginator="true"
            :rows="defaultPageSize"
            :rowHover="true"
            :totalRecords="totalRecords"
            :reorderableColumns="true"
            @column-reorder="onColReorder"
            @sort="onSort($event)"
            @page="onPage($event)"
            :rowsPerPageOptions="[10, 25, 50]"
            :currentPageReportTemplate="`Displaying {first} to {last} of {totalRecords} records`"
          >
            <Column header="" :headerStyle="{ width: '0.5rem' }">
              <template #body="{ data: { incidentId } }">
                <div>
                  <vs-icon
                    class="cursor-pointer"
                    icon="edit"
                    @click.prevent="redirectToEditIncident(incidentId)"
                  />
                </div>
              </template>
            </Column>
            <Column
              v-for="col in incidentColumns"
              :key="col.id"
              :field="col.field"
              :header="col.label"
              :showFilterMenu="false"
              :sortable="col.isSortable"
              :headerStyle="col.style"
            >
              <template #body="{ data }">
                <div v-if="col.field === 'tag'">
                  <span v-text="getTags(data.tagId)" />
                </div>
                <div
                  v-else-if="
                    col.field === 'costAmount' ||
                    col.field === 'chargeBackAmount'
                  "
                >
                  <span v-text="formatAmount(data[col.field])" />
                </div>
                <div v-else-if="dropdownTypeFields.includes(col.field)">
                  <span v-text="getLabels(col.field, data[col.field])" />
                </div>
                <div v-else>
                  <span v-text="truncateString(data[col.key])" />
                </div>
              </template>
              <template #filter="{}" v-if="col.filter">
                <Dropdown
                  v-if="col.filter.type === 'dropdown'"
                  v-model="filter[col.filter.key].value"
                  @change="onFilter()"
                  :options="getOptions(col.filter.options)"
                  dataKey="uniqueId"
                  :placeholder="col.filter.placeholder"
                  :optionLabel="col.filter.optionLabel"
                  :optionValue="col.filter.optionValue"
                  class="p-column-filter"
                  :showClear="true"
                  appendTo="body"
                />
                <InputText
                  v-else-if="col.filter.type === 'number'"
                  type="number"
                  v-model="filter[col.filter.key].value"
                  @input="onFilter"
                  class="p-column-filter w-full"
                />
                <InputText
                  v-else-if="col.filter.type === 'text'"
                  type="text"
                  v-model="filter[col.filter.key].value"
                  @input="onFilter"
                  class="p-column-filter w-full"
                />
                <div
                  class="clearable-date-picker p-column-filter w-full"
                  v-else-if="col.filter.type === 'date'"
                >
                  <flat-pickr
                    :value="filter[col.filter.key].value"
                    class="date-picker"
                    :config="{ dateFormat: 'Y-m-d' }"
                    @on-change="onDateChange($event, col.filter.key)"
                  />
                  <vs-icon
                    v-if="filter[col.filter.key].value"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="onDateClear(col.filter.key)"
                  />
                </div>
                <div
                  class="clearable-date-picker p-column-filter w-full"
                  v-else-if="col.filter.type === 'dateRange'"
                >
                  <flat-pickr
                    :value="filter[col.filter.key].value"
                    class="date-picker"
                    :config="flat_pikr_config"
                    @on-change="
                      (dateArray) => onDateRangeChange(dateArray, col.filter.key)
                    "
                  />
                  <vs-icon
                    v-if="filter[col.filter.key].value"
                    class="close-icon"
                    icon="close"
                    size="small"
                    @click="onDateClear(col.filter.key)"
                  />
                </div>
              </template>
            </Column>
            <template #empty><b>No records found</b></template>
            <template #footer v-if="footerText">
              <div class="vx-row flex justify-between items-center">
                <div class="vx-col">{{ footerText }}</div>
                <div class="vx-col">
                  <!-- <vs-pagination :total="totalPage" v-model="currentPage" /> -->
                </div>
              </div>
            </template>
          </DataTable>
        </div>
      </div>
    </vx-card>
  </div>
</template>
<script>
import { getUniqueIdV4, formatAmount } from "@/helpers/helper";
import config from "@/config/constants.js";
import { mapGetters } from "vuex";
import safetyCommonFunctions from "./mixins/safetyCommonFunctions";

import IncidentSidebar from "./components/IncidentSidebar.vue";

export default {
  name: "IncidentsList",
  components: {
    IncidentSidebar,
  },
  mixins: [safetyCommonFunctions],
  props: {
    allTags: {
      type: Array,
      default: () => [],
    },
    tabId: {
      type: Number,
      default: getUniqueIdV4(),
    },
  },
  data() {
    return {
      incidents: [],
      totalPage: 1,
      totalRecords: 0,
      status: config.safetyModule.status,
      flat_pikr_config: {
        mode: "range",
        dateFormat: "Y-m-d",
      },
      yesOrNo: config.safetyModule.yesOrNo,
      yesOrNoOrUnknown: config.safetyModule.yesOrNoOrUnknown,
      involvedTypes: config.safetyModule.involvedTypes,
      involvedPersonTypes: config.safetyModule.involvedPersonTypes,
      locationTypes: config.safetyModule.locationTypes,
      incidentTypes: config.safetyModule.incidentTypes,
      filter: {
        tagId: { value: null },
        incidentDate: { value: null },
        status: { value: null },
        closedDate: { value: null },
        notes: { value: null },
        incidentClaimNumber: { value: null },
        thirdPartyIncidentClaimNumber: { value: null },
        ncicNumber: { value: null },
        ncicReport: { value: null },
        savedAddressAffected: { value: null },
        chargeBack: { value: null },
        chargeBackAmount: { value: null },
        estimates: { value: null },
        estimatesReceived: { value: null },
        costIncurred: { value: null },
        costAmount: { value: null },
        insuranceCompanyName: { value: null },
        involvedType: { value: null },
        involvedPersonType: { value: null },
        involvedPersonName: { value: null },
        involvedThirdPartyName: { value: null },
        correctiveActionApplied: { value: null },
        dotRecordable: { value: null },
        preventable: { value: null },
        atFault: { value: null },
        truckNumber: { value: null },
        trailerNumber: { value: null },
        locationType: { value: null },
        address: { value: null },
        reported: { value: null },
        incidentType: { value: null },
        jotformReport: { value: null },
        description: { value: null },
        assigneeUserName: { value: null },
        followUpDate: { value: null },
      },
      sortBy: {
        field: null,
        order: null,
      },
      defaultCols: config.safetyModule.tableDefaultCols,
      paginationMetaData: null,
      defaultPageSize: 25,
      defaultKey: getUniqueIdV4(),
      isIncidentSidebarActive: false,
      isActive: false,
      dropdownTypeFields: [
        "status",
        "ncicReport",
        "savedAddressAffected",
        "chargeBack",
        "estimates",
        "costIncurred",
        "involvedType",
        "involvedPersonType",
        "correctiveActionApplied",
        "dotRecordable",
        "preventable",
        "atFault",
        "locationType",
        "reported",
        "incidentType",
        "jotformReport",
        "estimatesReceived",
      ],
      localVisibleCols: [],
    };
  },
  computed: {
    ...mapGetters("auth", ["userCustomization", "user"]),

    footerText() {
      const { from, to, total } = this.paginationMetaData || {};
      if (from && to && total) {
        return `Displaying ${from} to ${to} of ${total} records`;
      }
      return "";
    },
  },
  created() {
    this.init();
  },
  methods: {
    async fetchIncidents(pageSize = 25, currentPage = 1) {
      try {
        const { data } = await this.$store.dispatch(
          "incidents/fetchIncidentList",
          {
            page: currentPage,
            pageSize,
            filters: Object.keys(this.filter).reduce((acc, key) => {
              const dateTypeFilter = ["incidentDate", "closedDate"];

              if (this.filter[key].value) {
                if (dateTypeFilter.includes(key)) {
                  const [startDate, endDate] =
                    this.filter[key].value.split(" to ");
                  acc[key] = {
                    startDate: this.$dayjs(startDate).format("YYYY-MM-DD"),
                    endDate: this.$dayjs(endDate).format("YYYY-MM-DD"),
                  };
                } else {
                  acc[key] = this.filter[key].value;
                }
              }

              return acc;
            }, {}),
            sortBy: this.sortBy.field && this.sortBy.order ? this.sortBy : {},
          }
        );
        this.incidents = data.payload.incidents || [];
        const { meta } = (data || {}).payload || {};
        const { last_page, total } = meta || {};
        this.totalPage = last_page || 1;
        this.totalRecords = total || 0;
        this.paginationMetaData = meta;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: error.response.data.message || error.message,
        });
      }
    },
    async init() {
      try {
        this.$vs.loading();
        await this.fetchIncidents();
        await this.$store.dispatch("vehicleV2/fetchAllVehicles");
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    onSort({ sortField, sortOrder }) {
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? "asc" : "desc",
      };

      this.onFilter();
    },
    onPage({ page, rows }) {
      this.fetchIncidents(rows, page + 1);
    },
    getTags(tagId) {
      const tag = this.allTags.find((item) => item.tag_id === tagId);
      return tag ? this.truncateString(tag.business_name) : "";
    },
    getLabels(fieldName, value) {
      const fieldValues = {
        status: this.status,
        ncicReport: this.yesOrNo,
        savedAddressAffected: this.yesOrNo,
        chargeBack: this.yesOrNo,
        estimates: this.yesOrNo,
        costIncurred: this.yesOrNo,
        involvedType: this.involvedTypes,
        involvedPersonType: this.involvedPersonTypes,
        correctiveActionApplied: this.yesOrNo,
        dotRecordable: this.yesOrNo,
        preventable: this.yesOrNoOrUnknown,
        atFault: this.yesOrNoOrUnknown,
        locationType: this.locationTypes,
        reported : this.yesOrNo,
        incidentType: this.incidentTypes,
        jotformReport: this.yesOrNo,
        estimatesReceived: this.yesOrNo,
      };

      if (fieldValues[fieldName] && value) {
        const label = fieldValues[fieldName].find(
          (item) => item.value === value
        ).label;
        return this.truncateString(label);
      }
    },
    async onFilter() {
      try {
        await this.fetchIncidents();
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      }
    },
    onDateChange(dateArray, type) {
      if (dateArray.length && type) {
        const dateString = this.$dayjs(dateArray[0]).format('YYYY-MM-DD');
        if (this.filter[type].value === dateString) return;

        this.filter[type].value = dateString;
        this.onFilter();
      }
    },
    onDateRangeChange(dateArray, type) {
      if (dateArray.length > 1 && type) {
        const dateString = `${this.$dayjs(dateArray[0]).format(
          "YYYY-MM-DD"
        )} to ${this.$dayjs(dateArray[1]).format("YYYY-MM-DD")}`;
        if (this.filter[type].value === dateString) return;

        this.filter[type].value = dateString;
        this.onFilter();
      }
    },
    onDateClear(type) {
      if (type && this.filter[type].value) {
        this.filter[type].value = null;
        this.onFilter();
      }
    },
    toggleIncidentSidebar() {
      this.isIncidentSidebarActive = !this.isIncidentSidebarActive;
    },
    getOptions(key) {
      return this[key] || [];
    },
    truncateString(str) {
      const limit = 50;
      return (str || '').length > limit
        ? str.substring(0, limit).trim() + '...'
        : str;
    },
    formatAmount(amount) {
      return formatAmount(amount) || '';
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .vs-input--icon {
    top: 10px;
  }

  .p-column-filter-clear-button {
    display: none;
  }
}

.date-picker {
  max-width: 120px;
  text-overflow: ellipsis !important;

  @media screen and (min-width: 1199px) {
    width: 100%;
    max-width: 100%;
  }
}

.clearable-date-picker {
  position: relative;

  .close-icon {
    position: absolute;
    right: -20px;
    top: 25%;
    cursor: pointer;
  }
}

// Utility

.sidebar {
  top: 80px;
}
</style>
