<template>
  <div ref="spreadsheet">
    <template v-if="selectedSheetId">
      <div class="flex items-center gap-2 float-right">
        <span>View Mode:</span>
        <v-select
          :options="spreadsheetViewOptions"
          v-model="viewMode"
          :clearable="false"
          :searchable="false"
          :reduce="(option) => option.value"
          class="mb-1"
          style="min-width: 100px"
          @input="viewChange"
        />
      </div>
      <!-- Custom Spreadsheet  -->
      <spreadsheet-editor
        ref="spreadsheetEditor"
        v-for="(subsheet, index) in spreadsheet.sheets"
        :key="index"
        v-show="isSubsheetVisible(subsheet.id)"
        :subsheet="subsheet"
        :headers="subsheet.columns"
        :spreadsheetId="spreadsheet.id"
        v-model="subsheet.content"
        :accessLevel="accessLevel"
        :viewMode="viewMode"
        @update="onCellUpdate"
        @updateSpreadsheet="getSpreadsheetData"
        @updateSameLoadData="updateSameLoadData"
        @updateSpreadsheetName="updateSpreadsheetNameLocally"
      >
        <columns
          v-for="column in subsheet.columns"
          :key="column.id"
          :field="column.id"
          :predefinedColumn="column.predefinedColumn"
          :readonly="column.editable"
          :customColumnId="column.customColumnId"
          :order="column.order"
          :amount="
            amountCols.includes(column.predefinedColumn) ||
            column.customType === 'currency'
          "
          :customType="column.customType"
        />
      </spreadsheet-editor>
      <template v-if="viewMode === 'list' && accessLevel && accessLevel < 3">
        <vs-button
          color="primary"
          type="border"
          size="small"
          class="mt-5"
          style="width: 160px"
          @click="addNewSubsheet"
        >
          Add New Subsheet
        </vs-button>
      </template>
      <!-- Custom Spreadsheet End -->
      <div v-else>
        <!-- Subsheet buttons -->
        <div
          class="fixed bottom-0 w-full bg-white pb-4 flex gap-3 items-center"
        >
          <div
            ref="subsheetList"
            class="flex gap-3 overflow-x-auto subsheet-list view-bar-container pr-2"
            :style="subsheetListStyle"
          >
            <div class="flex">
              <div
                class="view-bar-item"
                v-for="(subsheet, index) in spreadsheet.sheets"
                :key="index"
                :id="`subsheet-${subsheet.id}`"
              >
                <div
                  class="flex items-center justify-center"
                  :class="{
                    'active-spreadsheet': subsheet.id == selectedSubsheetId,
                  }"
                >
                  <div
                    v-if="modifySheetId == subsheet.id"
                    class="flex items-center"
                  >
                    <input
                      class="spreadsheet-rename-input"
                      :value="subsheet.name"
                      @keyup.enter="
                        modifySubsheetName($event.target.value, subsheet.id)
                      "
                    />
                    <div
                      class="cursor-pointer"
                      style="position: relative; right: 20px; display: flex"
                      @click="modifySheetId = ''"
                    >
                      <vs-icon icon="close"></vs-icon>
                    </div>
                  </div>
                  <span class="cursor-pointer" v-else>
                    <div class="flex items-center">
                      <span
                        class="mr-2"
                        @click="updateSelectedSubsheetId(subsheet.id)"
                      >
                        {{ subsheet.name }}
                      </span>
                      <div class="show-hover">
                        <span
                          @click="
                            toggleOverlayPanel(
                              $event,
                              `overlayPanel-${subsheet.id}`
                            )
                          "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10l5 5 5-5z" />
                          </svg>
                        </span>
                        <OverlayPanel
                          class="overlay-panel"
                          appendTo="body"
                          style="width: 160px; padding: 0"
                          :ref="`overlayPanel-${subsheet.id}`"
                        >
                          <div class="cursor-pointer pb-1">
                            <p @click.stop="handleRename(subsheet.id)">
                              Rename Subsheet
                            </p>
                          </div>
                          <div class="cursor-pointer pt-1 text-danger">
                            <p @click.stop="openDeleteWarningDialog(subsheet.id)">
                              Delete Subsheet
                            </p>
                          </div>
                        </OverlayPanel>
                        <!-- <vs-dropdown
                          vs-custom-content
                          vs-trigger-click
                          @click.stop.native
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#000000"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path d="M7 10l5 5 5-5z" />
                            </svg>
                          </div>
                          <vs-dropdown-menu
                            class="spreadsheet-list-dropdown-items"
                          >
                            <vs-dropdown-item>
                              <p @click.stop="handleRename(subsheet.id)">
                                Rename Subsheet
                              </p>
                            </vs-dropdown-item>
                          </vs-dropdown-menu>
                        </vs-dropdown> -->
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <template v-if="accessLevel && accessLevel < 3">
            <vs-button
              color="primary"
              type="border"
              size="small"
              style="width: 160px"
              @click="addNewSubsheet"
            >
              Add New Subsheet
            </vs-button>
          </template>
        </div>
      </div>
    </template>
    <section v-else>
      <div class="flex justify-center align-center p-10">
        <h2>No sheets available</h2>
      </div>
    </section>
  </div>
</template>
<script>
import SpreadsheetEditor from '@/components/spreadsheet/SpreadsheetEditor.vue';
import Columns from '@/components/spreadsheet/components/Columns.vue';

import { mapGetters } from 'vuex';

import hosMixin from '@/mixins/hosMixin';

import $ from 'jquery';

export default {
  components: { SpreadsheetEditor, Columns },
  name: 'Spreadsheet',
  data() {
    return {
      spreadsheet: [],
      newSubsheetName: 'New Subsheet',
      newSpreadsheetName: '',
      accessLevel: null,
      filterJson: this.filterJsonCache
        ? new Map(this.filterJsonCache)
        : new Map(),
      allDrivers: [],
      allTags: [],
      allDispatchers: [],
      allCustomers: [],
      allTrucks: [],
      allTrailers: [],
      driverHos: [],
      amountCols: [
        'loadAmount',
        'loadDriverPay',
        'loadGrossProfitBrokeredLoad',
      ],
      selectedSubsheetId: null,
      subsheetListStyle: {
        maxWidth: 'calc(100% - 268px)',
        whiteSpace: 'nowrap',
      },
      modifySheetId: '',
      viewMode: 'tab',
      spreadsheetViewOptions: [
        {
          id: 1,
          label: 'Tab',
          value: 'tab',
        },
        {
          id: 2,
          label: 'List',
          value: 'list',
        },
      ],
    };
  },
  provide() {
    return {
      allDispatchers: () => this.allDispatchers,
      allTags: () => this.allTags,
      allDrivers: () => this.allDrivers,
      allCustomers: () => this.allCustomers,
      allTrucks: () => this.allTrucks,
      allTrailers: () => this.allTrailers,
    };
  },
  mixins: [hosMixin],

  props: {
    selectedSheetId: {
      type: Number || String,
    },
    selectedDateRange: {
      type: String || Date,
    },
    filterJsonCache: {
      default: () => {
        return new Map();
      },
    },
  },

  async created() {
    // Call on only first time
    await this.getSpreadsheetData();
    /**
     * Below method is needed here to populate data like allDrivers, allTags, allDispatchers
     * Data is populated into this parent component and made available to all child components
     * via provide-inject
     * This method is also declared here to prevent multiple api call triggered from sub-sheets
     */
    await this.initializeDataForSpreadSheetFilters();

    // Watch width of spreadsheet container and update subsheet list style accordingly
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width) {
          this.subsheetListStyle.maxWidth = `${
            entry.contentRect.width - 172
          }px`;
        }
      }
    });

    resizeObserver.observe(this.$refs.spreadsheet);
  },

  mounted() {
    $('body').click((event) => {
      if (!$(event.target).closest('.spreadsheet-rename-input').length) {
        this.modifySheetId = '';
      }
    });
  },

  watch: {
    // Call on date range change
    selectedDateRange() {
      this.getSpreadsheetData(this.selectedSubsheetId);
    },

    // Call on every spreadsheet change
    selectedSheetId: {
      handler() {
        this.getSpreadsheetData();
      },
    },
  },

  computed: {
    ...mapGetters('auth', ['userRole', 'user']),
  },

  methods: {
    updateSameLoadData(cell) {
      if (cell) {
        const [row, column] = cell.cellId.split('_') || [];
        this.spreadsheet.sheets.forEach((subsheet) => {
          subsheet.content.forEach((content) => {
            if (row == content.key_id) {
              content[column] = cell.value;
            }
          });
        });
      }
    },

    saveSheetsFilter(filter) {
      this.filterJson.set(filter.id, filter.filter);
      this.$emit('updateFilterJson', this.filterJson);
    },

    addNewSubsheet() {
      this.$vs.loading();
      const payload = {
        id: this.selectedSheetId,
        name: this.newSubsheetName,
      };
      this.$store
        .dispatch('spreadsheet/addSheet', payload)
        .then(({ data }) => {
          this.$vs.notify({
            color: 'success',
            title: 'Subsheet Added',
            text: 'Subsheet added successfully',
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
          this.addSpreadsheetPopup = false;
          this.getSpreadsheetData(null, true);
          this.$vs.loading.close();
        });
    },
    // Get spreadsheet Data
    getSpreadsheetData(selectedSubsheetId = null, selectLastSubsheet = false) {
      if (!this.selectedSheetId) return;
      this.$vs.loading();
      this.spreadsheet = [];
      const selectedDate = this.selectedDateRange.split(' to ');
      const filterData = [];
      this.filterJson.forEach((value, key) => {
        filterData.push({ id: key, filter: value });
      });
      const payload = {
        id: this.selectedSheetId,
        startDate: selectedDate[0],
        endDate: selectedDate[1] ? selectedDate[1] : selectedDate[0],
        sheets: filterData.length > 0 ? filterData : {},
      };
      console.log('get spreadsheet()', payload.startDate, payload.endDate);
      this.$store
        .dispatch('spreadsheet/getSpreadsheet', payload)
        .then(({ data }) => {
          this.spreadsheet = data.payload;
          this.spreadsheetAccessLevel(data.payload.accessLevel);
          this.spreadsheet.sheets.forEach((item) => {
            this.saveSheetsFilter({ filter: item.filter, id: item.id });
          });

          if (this.viewMode === 'tab') {
            if (selectedSubsheetId) {
              this.updateSelectedSubsheetId(selectedSubsheetId);

              this.$nextTick(() => {
                // Scroll to selected subsheet option
                if (this.$refs.subsheetList) {
                  const selectedSubsheet =
                    this.$refs.subsheetList.querySelector(
                      `#subsheet-${selectedSubsheetId}`
                    );

                  if (selectedSubsheet) {
                    selectedSubsheet.scrollIntoView({
                      // behavior: "smooth",
                      block: 'nearest',
                      inline: 'start',
                    });
                  }
                }
              });
            } else if (selectLastSubsheet) {
              this.selectedSubsheetId =
                this.spreadsheet.sheets[this.spreadsheet.sheets.length - 1].id;

              this.$nextTick(() => {
                if (this.$refs.subsheetList) {
                  this.$refs.subsheetList.scrollLeft =
                    this.$refs.subsheetList.scrollWidth;
                }
              });
            } else {
              this.selectedSubsheetId = this.spreadsheet.sheets[0].id;
            }
          }

          const hasHosCol = this.spreadsheet.sheets.some((sheet) => {
            return sheet.columns.some(({ predefinedColumn }) => {
              return predefinedColumn === 'loadDriverHos';
            });
          });

          if (hasHosCol) this.getDriverHos();
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
    // on cell update
    onCellUpdate(event, row, spreadsheetId, customColumnId) {
      console.log('update cell api');
      const payload = {
        id: spreadsheetId,
        keyId: row.key_id,
        value: event.target.value,
        customColumnId: customColumnId,
      };
      this.$store.dispatch('spreadsheet/updateCell', payload).catch((error) => {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      });
    },
    spreadsheetAccessLevel(accessLevelProperty) {
      const accessLevelArray = [
        { level: 1, role: 'owner' },
        { level: 2, role: 'admin' },
        { level: 3, role: 'editor' },
        { level: 4, role: 'viewer' },
      ];
      if (accessLevelProperty) {
        accessLevelArray.map((item) => {
          if (accessLevelProperty == item.role) {
            this.$parent.setAccessLevel(item.level);
            this.accessLevel = item.level;
          }
        });
      } else {
        this.$parent.setAccessLevel(null);
        this.accessLevel = null;
      }
    },
    async initializeDataForSpreadSheetFilters() {
      /** Try catch is not used here, but at individual api call level
       * so as to not block the api call flow incase one fails
       */
      this.getAllTags();
      this.getAllDispatchers();
      this.getAllCustomers();
      this.getAllDriverTruckTrailerForLoadDriver();
    },
    async getAllTags() {
      try {
        const {
          payload: { data: allTags },
        } = await this.$store.dispatch('tag/getAllTags');
        if (allTags) {
          this.allTags = allTags;
        }
      } catch (e) {
        console.error(e);
      }
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
    async getAllCustomers() {
      try {
        const {
          payload: { data },
        } = await this.$store.dispatch('customer/getAllCustomers');

        this.allCustomers = data || [];
      } catch (error) {
        console.error(error);
      }
    },
    getAllDriverTruckTrailerForLoadDriver() {
      this.$store
        .dispatch('load/getAllDriverTruckTrailerForLoadDriver')
        .then((data) => {
          this.allTrailers = data.trailers;
          this.allDrivers = data.drivers;
          this.allTrucks = data.trucks;
        });
    },
    async getDriverHos() {
      try {
        const {
          status,
          data: {
            payload: { hos },
          },
        } = await this.$store.dispatch('hos/fetchHos');

        if (status === 200 && hos && hos.length) {
          this.driverHos = [...hos];
          this.initDriverHosColData();
        }
      } catch (e) {
        console.error(e);
      }
    },
    initDriverHosColData() {
      if (this.driverHos && this.driverHos.length) {
        ((this.spreadsheet || {}).sheets || []).forEach((subsheet) => {
          const driverHosColIds = subsheet.columns
            .filter((col) => col.predefinedColumn === 'loadDriverHos')
            .map((col) => col.id);

          if (driverHosColIds && driverHosColIds.length) {
            driverHosColIds.forEach((driverHosColId) => {
              subsheet.content.forEach((row) => {
                if (row[driverHosColId] && row[driverHosColId].length) {
                  row[driverHosColId].map(({ fn, ln }, index) => {
                    if (fn || ln) {
                      const nameString = `${fn || ''} ${ln || ''}`.trim();
                      const formattedHosVal = this.initHosData(
                        this.driverHos,
                        fn,
                        ln
                      );

                      if (formattedHosVal) {
                        row[driverHosColId][index] = {
                          ...row[driverHosColId][index],
                          driverName: nameString,
                          ...formattedHosVal,
                        };
                      }
                    }
                  });
                }
              });
            });
          }
        });
        if (this.$refs.spreadsheetEditor[0])
          this.$refs.spreadsheetEditor[0].reRenderTable();
      }
    },
    updateSelectedSubsheetId(id) {
      this.selectedSubsheetId = id;
    },
    updateSpreadsheetNameLocally({ sheetId, name }) {
      if (!sheetId || !name) return;

      const sheetIndex = this.spreadsheet.sheets.findIndex(
        (sheet) => sheet.id === sheetId
      );

      if (sheetIndex > -1) {
        this.spreadsheet.sheets[sheetIndex].name = name;
      }

      if (this.$refs.spreadsheetEditor) {
        this.$refs.spreadsheetEditor.forEach((editor) => {
          if (editor.subsheet.id === sheetId) {
            editor.subsheetName = name;
          }
        });
      }
    },
    refreshSpreadsheet() {
      this.getSpreadsheetData(this.selectedSubsheetId);
    },
    handleRename(itemId) {
      if (this.accessLevel <= 2) {
        this.modifySheetId = itemId;
      }
    },
    modifySubsheetName(value, subSheetId) {
      if (!value) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Sheet name cannot be empty',
        });
        return;
      }

      const payload = {
        id: this.spreadsheet.id,
        sheetId: subSheetId,
        name: value,
      };
      this.$store
        .dispatch('spreadsheet/modifySheetName', payload)
        .then(({ data }) => {
          this.updateSpreadsheetNameLocally(payload);

          this.$vs.notify({
            color: 'success',
            title: 'Sheet rename',
            text: 'Sheet name updated successfully',
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
          this.modifySheetId = '';
        });
    },
    toggleOverlayPanel(event, ref) {
      if (this.$refs[ref][0]) {
        this.$refs[ref][0].toggle(event);
      }
    },
    viewChange() {
      if (
        this.spreadsheet &&
        this.spreadsheet.sheets &&
        this.spreadsheet.sheets.length > 0
      ) {
        this.selectedSubsheetId = this.spreadsheet.sheets[0].id;
      }
    },
    isSubsheetVisible(subsheetId) {
      if (this.viewMode === 'list') return true;
      return this.selectedSubsheetId == subsheetId;
    },
    openDeleteWarningDialog(id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        title: 'Delete subsheet',
        text: 'Would you like to delete this subsheet?',
        accept: () => this.deleteSubsheet(id),
      });
    },
    deleteSubsheet(id) {
      this.$vs.loading();
      const payload = {
        id: this.spreadsheet.id,
        sheetId: id,
      };
      this.$store
        .dispatch('spreadsheet/deleteSubsheet', payload)
        .then(({ data }) => {
          this.$vs.notify({
            color: 'success',
            title: 'Subsheet deleted',
            text: 'Subsheet deleted successfully',
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
          this.getSpreadsheetData();
          this.$vs.loading.close();
        });
    },
  },
};
</script>

<style lang="scss">
.active-spreadsheet {
  border-color: rgba(var(--vs-primary), 1) !important;
  border-bottom: 2px solid;
  color: rgba(var(--vs-primary), 1) !important;
}

.subsheet-list,
.table-container {
  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    // overflow: visible;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 20px;
  }

  // Mozilla Firefox scrollbar
  scrollbar-color: #c1c1c1 #f1f1f1;
  scrollbar-width: thin;
}

.view-bar-container {
  background: white;
  font-weight: 400;
  display: flex;
  align-items: center;
  overflow: auto;
  overflow-y: hidden;
  .view-bar-item {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-right: 0.7rem;
    border-radius: 3px;
    span {
      font-weight: 500;
      white-space: nowrap;
      margin-left: 5px;
      cursor: pointer;
    }
  }
  svg {
    color: rgb(98, 98, 98);
    fill: rgb(98, 98, 98);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}

.show-hover {
  display: none;
  position: absolute;
  top: 3px;
  right: -5px;
}

.view-bar-item:hover .show-hover {
  display: block;
}

.view-bar-item {
  position: relative;
}

.spreadsheet-list-dropdown-items {
  p {
    font-weight: 500;
  }
}

.spreadsheet-rename-input {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 3px;
}
</style>
