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
    <div class="flex items-center space-x-5 mt-3">
      <incident-spreadsheet-filter
        ref="spreadsheetFilter"
        :filters="filterSchema"
        :allTags="allTags"
        @submitFilter="handleFilter"
      />
      <incident-spreadsheet-sort
        ref="spreadsheetSort"
        :sortSchemaData="sortSchema"
        :sortingOptions="sortingOptions"
        :columns="sortingColumns"
        @handleSortSchema="handleSortSchema"
      />
      <div class="flex items-center cursor-pointer ml-5" @click="exportToExcel">
        <vs-icon icon="file_download"></vs-icon>
        <span>Export</span>
      </div>
    </div>
    <section class="overflow-auto pb-6">
      <table class="spreadsheet-table mt-3 table-resizable">
        <table-header
          :headers="incidentColumns"
          :sortSchemaData="sortSchema"
          :sortingOptions="sortingOptions"
          @updateRecordOrder="onColReorder"
          @handleSortSchema="handleSortSchema"
        />
        <tbody>
          <tr
            class="show-expand-icon-hover"
            v-for="incident in incidentData"
            :key="incident.id"
          >
            <td>
              <div class="flex items-center justify-center">
                <div
                  @click.stop="redirectToEditIncident(incident.incidentId)"
                  class="expand-icon"
                >
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
            </td>
            <template v-for="(value, key, index) in incident">
              <td
                v-if="key !== 'incidentId'"
                :key="`key_${index}_${incident.incidentId}`"
                :cellId="`cellId_${index}_${incident.incidentId}`"
                @click="
                  handleOnCellFocus(`cellId_${index}_${incident.incidentId}`)
                "
                class="cell-td"
                :style="getCellStyle(key, incident.incidentId)"
              >
                <textarea
                  class="cells__input cell-export"
                  v-text="displayTableCell(key, value)"
                  :disabled="true"
                  :spellcheck="false"
                  :style="getCellStyle(key, incident.incidentId)"
                />
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import TableHeader from './components/TableHeader.vue';
import IncidentSidebar from './components/IncidentSidebar.vue';
import IncidentSpreadsheetSort from './components/IncidentSpreadsheetSort.vue';
import IncidentSpreadsheetFilter from './components/IncidentSpreadsheetFilter.vue';

import $ from 'jquery';
import config from '@/config/constants.js';
import safetyCommonFunctions from './mixins/safetyCommonFunctions';
import { getUniqueIdV4, getApiErrorMsg, formatAmount } from '@/helpers/helper';

export default {
  name: 'IncidentsSpreadsheet',
  components: {
    TableHeader,
    IncidentSidebar,
    IncidentSpreadsheetSort,
    IncidentSpreadsheetFilter,
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
  computed: {
    incidentData() {
      let incidentData = this.incidents.map((incident) => {
        const col = this.incidentColumns.reduce((acc, col) => {
          // Hack for tag.
          let field = col.field;
          if (field == 'tag') {
            field = 'tagId';
          }
          acc[field] = incident[field];

          return acc;
        }, {});

        return { incidentId: incident.incidentId, ...col };
      });

      if (this.sortSchema && this.sortSchema.length) {
        const dateTypeFields = ['closedDate', 'incidentDate'];

        this.sortSchema.forEach((sort) => {
          const field = sort.field === 'tag' ? 'tagId' : sort.field;
          const sortOrder = sort.sortOrder;

          incidentData = incidentData.sort((a, b) => {
            if (dateTypeFields.includes(field)) {
              const aDate = this.$dayjs(a[field]);
              const bDate = this.$dayjs(b[field]);

              if (sortOrder === 'a') {
                return aDate.isBefore(bDate) ? -1 : 1;
              } else if (sortOrder === 'd') {
                return aDate.isBefore(bDate) ? 1 : -1;
              }
            } else if (field === 'tagId') {
              const aTagBusinessName =
                (this.allTags.find((item) => item.tag_id === a[field]) || {})
                  .business_name || '';
              const bTagBusinessName =
                (this.allTags.find((item) => item.tag_id === b[field]) || {})
                  .business_name || '';

              if (sortOrder === 'a') {
                return aTagBusinessName < bTagBusinessName ? -1 : 1;
              } else if (sortOrder === 'd') {
                return aTagBusinessName < bTagBusinessName ? 1 : -1;
              }
            } else {
              if (sortOrder === 'a') {
                return a[field] < b[field] ? -1 : 1;
              } else if (sortOrder === 'd') {
                return a[field] < b[field] ? 1 : -1;
              }
            }
          });
        });
      }

      this.$nextTick(() => {
        this.initCellStyles();
      });

      return incidentData;
    },
    sortSchema() {
      return (
        ((this.userCustomization || {}).safetyIncidents || {}).sortSchema || []
      );
    },
    sortingColumns() {
      return this.incidentColumns.map((col) => {
        return {
          field: col.colId,
          label: col.label,
        };
      });
    },
    filterSchema() {
      return JSON.parse(
        JSON.stringify(
          ((this.userCustomization || {}).safetyIncidents || {}).filters || {}
        )
      );
    },
  },
  data() {
    return {
      defaultCols: config.safetyModule.tableDefaultCols,
      incidents: [],
      status: config.safetyModule.status,
      yesOrNo: config.safetyModule.yesOrNo,
      yesOrNoOrUnknown: config.safetyModule.yesOrNoOrUnknown,
      involvedTypes: config.safetyModule.involvedTypes,
      involvedPersonTypes: config.safetyModule.involvedPersonTypes,
      locationTypes: config.safetyModule.locationTypes,
      incidentTypes: config.safetyModule.incidentTypes,
      isIncidentSidebarActive: false,
      dropdownTypeFields: [
        'status',
        'ncicReport',
        'savedAddressAffected',
        'chargeBack',
        'estimates',
        'costIncurred',
        'involvedType',
        'involvedPersonType',
        'correctiveActionApplied',
        'dotRecordable',
        'preventable',
        'atFault',
        'locationType',
        'incidentType',
        'jotformReport',
        'estimatesReceived',
        'reported',
      ],
      localVisibleCols: [],
      sortingOptions: [
        { text: 'A → Z', value: 'a' },
        { text: 'Z → A', value: 'd' },
      ],
      cellStyles: {},
    };
  },
  created() {
    this.init();

    const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
    this.$dayjs.extend(isSameOrAfter);
  },
  mounted() {
    this.resizeColumWidth();
  },
  methods: {
    async fetchIncidents(toDownload = false) {
      try {
        const { data } = await this.$store.dispatch(
          'incidents/fetchIncidentList',
          {
            page: 1, // Leave 1 here because otherwise frontend will send page=undefined.
            // pageSize: 100, Spreadsheet does not support paging yet.
            toDownload,
            filters: Object.keys(this.filterSchema).reduce((acc, key) => {
              if (this.filterSchema[key]) {
                acc[key] = this.filterSchema[key];
              }
              return acc;
            }, {}),
          }
        );
        if (toDownload && data.payload.download_url) {
          const link = document.createElement('a');
          link.href = data.payload.download_url;
          // Start download of file
          link.click();
          // Free up resources
          setTimeout(() => {
            URL.revokeObjectURL(link.href);
          }, 100);
          // Remove link from DOM
          link.remove();
        } else if (!toDownload) {
          this.incidents = data.payload.incidents || [];
        }
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
      }
    },
    async init() {
      try {
        this.$vs.loading();
        await this.fetchIncidents();
        await this.$store.dispatch('vehicleV2/fetchAllVehicles');
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    handleOnCellFocus(cellId) {
      $('td').removeClass('cell-focus');
      $(`[cellId=${cellId}]`).addClass('cell-focus');
    },
    displayTableCell(key, val) {
      if (key === 'tagId') {
        const tag = this.allTags.find((item) => item.tag_id === val);
        return tag ? tag.business_name : '';
      } else if (key === 'chargeBackAmount' || key === 'costAmount') {
        return formatAmount(val) || '';
      } else if (this.dropdownTypeFields.includes(key)) {
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
          incidentType: this.incidentTypes,
          jotformReport: this.yesOrNo,
          estimatesReceived: this.yesOrNo,
          reported: this.yesOrNo,
        };

        if (fieldValues[key] && val) {
          return fieldValues[key].find((item) => item.value === val).label;
        }
      } else {
        return val;
      }
    },
    toggleIncidentSidebar() {
      this.isIncidentSidebarActive = !this.isIncidentSidebarActive;
    },
    handleSortSchema(sortSchema) {
      this.$store.commit('auth/setUserCustomization', {
        ...this.userCustomization,
        safetyIncidents: {
          ...(this.userCustomization.safetyIncidents || {}),
          sortSchema: sortSchema,
        },
      });

      this.$refs.spreadsheetSort.setSortSchema(sortSchema);
    },
    // Resize Column
    resizeColumWidth() {
      var thElm;
      var startOffset;
      var THIS = this;
      Array.prototype.forEach.call(
        document.querySelectorAll('.table-resizable th'),
        function (th) {
          th.style.position = 'relative';
          var grip = document.createElement('div');
          grip.classList.add('handleResizeble');
          grip.innerHTML = '&nbsp;';
          grip.addEventListener('mousedown', function (e) {
            e.preventDefault();
            thElm = th;
            startOffset = th.offsetWidth - e.pageX;
          });
          th.appendChild(grip);
        }
      );
      document.addEventListener('mousemove', function (e) {
        if (thElm) {
          thElm.style.width = startOffset + e.pageX + 'px';
        }
      });
      document.addEventListener('mouseup', function (e) {
        if (thElm) {
          const columnId = thElm.getAttribute('columnid');
          const width = thElm.style.width.replace(/\D/g, '');

          if (THIS.incidentColumns) {
            const payload = THIS.incidentColumns.map((item) => {
              if (item.id == columnId) {
                item.width = width;
              }
              return { c: item.colId, w: item.width };
            });
            THIS.changeColumnWidth(payload);
          }
        }
        thElm = undefined;
      });
    },
    changeColumnWidth(payload) {
      try {
        this.$store.dispatch('incidents/setUserCustomization', {
          showColumns: payload,
        });
        this.$store.commit('auth/setUserCustomization', {
          ...this.userCustomization,
          safetyIncidents: {
            ...(this.userCustomization.safetyIncidents || {}),
            showColumns: payload,
          },
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    // export To Excel format
    exportToExcel() {
      this.fetchIncidents(true);
    },
    async handleFilter(filterSchema) {
      try {
        const { status } = await this.$store.dispatch(
          'incidents/setUserCustomization',
          {
            filters: JSON.stringify(filterSchema),
          }
        );

        if (status === 200) {
          this.$store.commit('auth/setUserCustomization', {
            ...this.userCustomization,
            safetyIncidents: {
              ...(this.userCustomization.safetyIncidents || {}),
              filters: filterSchema,
            },
          });
        }

        await this.fetchIncidents();
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    initCellStyles() {
      const colors = {
        red: '#ff0000',
        orange: '#ffa500',
        yellow: '#ffff00',
      };

      this.incidentData.forEach((incident) => {
        const cellStyles = {};
        if (
          incident.incidentDate &&
          this.$dayjs(incident.incidentDate).isValid()
        ) {
          // IF incident date is not null && browser’s local date ≥ incident date + 90 && status is not closed: color incident date cell in red.
          // ELSE IF incident date is not null && browser’s local date ≥ incident date + 60 && status is not closed: color incident date cell in orange.
          // ELSE IF incident date is not null && browser’s local date ≥ incident date + 30 && status is not closed: color incident date cell in yellow.
          const incidentDate = this.$dayjs(incident.incidentDate);
          const currentDate = this.$dayjs().format('YYYY-MM-DD');
          const isDateSameOrAfter = (date) => {
            return this.$dayjs(currentDate).isSameOrAfter(date);
          };
          const addDays = (date, days) => {
            return this.$dayjs(date).add(days, 'day').format('YYYY-MM-DD');
          };

          if (
            isDateSameOrAfter(addDays(incidentDate, 90)) &&
            incident.status !== 'closed'
          ) {
            cellStyles.incidentDate = {
              backgroundColor: colors.red,
            };
          } else if (
            isDateSameOrAfter(addDays(incidentDate, 60)) &&
            incident.status !== 'closed'
          ) {
            cellStyles.incidentDate = {
              backgroundColor: colors.orange,
            };
          } else if (
            isDateSameOrAfter(addDays(incidentDate, 30)) &&
            incident.status !== 'closed'
          ) {
            cellStyles.incidentDate = {
              backgroundColor: colors.yellow,
            };
          }
        }

        this.$set(this.cellStyles, incident.incidentId, cellStyles);
      });
    },
    getCellStyle(key, incidentId) {
      return this.cellStyles[incidentId] && this.cellStyles[incidentId][key];
    },
  },
};
</script>

<style lang="scss" scoped>
$borderColor: #e9ebf0;

.spreadsheet-table {
  width: max-content;

  .show-expand-icon-hover {
    td:first-child {
      background: #fafbfc !important;
    }
  }

  tbody {
    background: #fff;
  }

  th,
  td {
    padding: 7px;
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
  padding: 0 6px;
  width: 100%;
  height: 17px;
  color: #292d34;
  font-family: Arial, Montserrat, Helvetica, sans-serif;
  resize: none;
  white-space: nowrap;
  &:disabled {
    background: #fff;
  }

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden !important;
  position: relative;
  -webkit-line-clamp: 1;
}

.cell-focus {
  outline: #2d7ff9 auto 1px !important;
}

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
</style>
