<template>
  <div ref="spreadsheet-tab" class="spreadsheet-tab-in-dispatch">
    <portal to="spreadsheet-list-in-dispatch">
      <div
        class="flex sm:flex-row flex-col md:items-center flex-wrap"
        :class="[
          spreadsheetForSpecificUser ? 'justify-between' : 'justify-end',
        ]"
      >
        <div
          class="spreadsheet-list-width-home-tab"
          v-if="spreadsheetForSpecificUser"
        >
          <!-- Spreadsheet header  -->
          <spreadsheet-list
            ref="spreadSheetList"
            :accessLevel="accessLevel"
            :hideHomeTab="true"
            :activeTab="selectedTab"
            @spreadsheetHeaderProperties="spreadsheetHeaderProperties"
            @updateSpreadSheetList="updateSpreadSheetList"
          ></spreadsheet-list>
          <!-- Spreadsheet header End  -->
        </div>
      </div>
    </portal>

    <portal to="spreadsheet-controls-in-dispatch" v-if="selectedTab">
      <div>
        <div class="flex items-center">
          <template v-if="hasSpreadsheetList">
            <vs-dropdown
              vs-custom-content
              vs-trigger-click
              style="min-width: 116px"
            >
              <div ref="anytime" class="flex items-center">
                <vs-icon icon="event_note" color="#00ADC2" />
                <span class="mr-2 ml-1" style="color: #00adc2">{{
                  getSelectedDateRange
                }}</span>
              </div>

              <vs-dropdown-menu>
                <div class="p-3">
                  <div class="flex flex-col-reverse sm:flex-row">
                    <div>
                      <div class="relative">
                        <vs-icon
                          icon="event_note"
                          color="#7367F0"
                          class="calendar-icon"
                        ></vs-icon>
                        <flat-pickr
                          class="w-full"
                          v-model="selectedDateRange"
                          :config="flat_pikr_config"
                          @on-change="handleChangeDate"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </vs-dropdown-menu>
            </vs-dropdown>
            <div class="flex items-center">
              <div
                class="px-2 cursor-pointer flex items-center"
                @click="handleSpreadsheetShare"
                v-if="accessLevel == 1 || accessLevel == 2"
              >
                <vs-icon icon="share" color="primary" />
                <span class="text-primary ml-1">Share</span>
              </div>
              <div
                class="px-2 cursor-pointer flex items-center"
                @click="refreshSpreadsheet"
              >
                <vs-icon size="small" icon="autorenew"></vs-icon>
                <span>Refresh</span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </portal>

    <div>
      <spreadsheet
        ref="spreadsheet"
        v-if="spreadsheetForSpecificUser && selectedTab"
        :selectedSheetId="selectedTab"
        :selectedDateRange="spreadsheetDateRange"
        :filterJsonCache="filterJson"
        @updateFilterJson="saveFilterJson"
      ></spreadsheet>
    </div>

    <vs-popup
      :title="`Share ${selectedSpreadsheetName}`"
      :active.sync="sharePopup"
    >
      <share-spreadsheet-popup
        ref="accessLevelRef"
        :spreadsheetId="selectedTab"
      ></share-spreadsheet-popup>
    </vs-popup>
  </div>
</template>

<script>
require('vue-simple-calendar/static/css/default.css');
import { mapGetters } from 'vuex';
import SpreadsheetList from '@/views/pages/calender/components/SpreadsheetList';
const Spreadsheet = () => import('@/views/pages/excel/Spreadsheet');
const ShareSpreadsheetPopup = () =>
  import('@/views/pages/calender/components/ShareSpreadsheetPopup');

export default {
  name: 'SpreadSheetInDispatch',
  components: {
    Spreadsheet,
    SpreadsheetList,
    ShareSpreadsheetPopup,
  },
  props: {
    activeComponent: {
      type: Number,
      default: 0,
    },
    dispatchTabDateRange: {
      type: String || Date,
    },
  },
  data() {
    return {
      selectedDateRange: this.dispatchTabDateRange || '',
      skip_days: 32,
      flat_pikr_config: {
        mode: 'range',
        minDate: '',
        maxDate: '',
        inline: true,
        defaultDate: [
          new Date(),
          new Date().setDate(new Date().getDate() + this.skip_days),
        ],
      },

      selectedTab: null,
      spreadsheetDateRange: '',
      sharePopup: false,
      selectedSpreadsheetName: '',
      accessLevel: null,
      spreadsheetList: [],
      filterJson: null, // a holder variable to preserve spreadsheet filter data across tabs in dispatch
    };
  },

  async created() {
    this.setDefaultDateRange();
  },

  watch: {
    selectedDateRange() {
      const dates = this.selectedDateRange.split(' to ');
      this.dateRange(dates[0], dates[1] ? dates[1] : dates[0]);
      this.$emit('updateDateRange', this.selectedDateRange);
    },
    selectedTab: {
      handler(val) {
        if (val) {
          // If 0 -> Dispatch is in Pipeline or List Ui
          this.$emit('updateActiveTab', val); // To set in Dispatch page that current selection is a spreadsheet

          if (val !== 'Home') {
            this.skip_days = 396; // 1 year and 1 month
          } else {
            this.skip_days = 32;
          }
        }
      },
    },
    activeComponent() {
      this.selectedTab = this.activeComponent;
    },
  },

  computed: {
    ...mapGetters('auth', ['userRole', 'user']),
    spreadsheetForSpecificUser() {
      return true;
    },
    getSelectedDateRange() {
      const regex = /\d{4}-/g;
      const dateRangeWithoutYear = this.selectedDateRange.replaceAll(regex, '');
      const date = dateRangeWithoutYear.replaceAll('-', '/').split('to');
      if (date[0] && date[1]) {
        return `${date[0]}-${date[1]}`;
      }
      return `${date[0]}`;
    },
    hasSpreadsheetList() {
      return this.spreadsheetList.length > 0;
    },
  },

  methods: {
    handleSpreadsheetShare() {
      this.sharePopup = true;
      this.$refs.accessLevelRef.getUsersAccessLevel();
    },
    setAccessLevel(accessLevelProperty) {
      this.accessLevel = accessLevelProperty;
    },
    refreshSpreadsheet() {
      this.$refs.spreadsheet.refreshSpreadsheet();
    },
    // call from spreadsheet header
    spreadsheetHeaderProperties(property) {
      this.selectedTab = property.selectedTab;
      this.selectedSpreadsheetName = property.selectedSpreadsheetName;
      // this.$refs.spreadsheetRef.getSpreadsheetData();
    },
    setDefaultDateRange() {
      if (this.dispatchTabDateRange) {
        this.selectedDateRange = this.dispatchTabDateRange;
        this.spreadsheetDateRange = this.selectedDateRange;
      } else {
        let today = new Date();
        today.setHours(0);
        const todayStr = today.toISOString().split('T', 1)[0];
        today.setDate(today.getDate() + this.skip_days);
        const after7DaysStr = today.toISOString().split('T', 1)[0];
        this.selectedDateRange = `${todayStr} to ${after7DaysStr}`;
        this.spreadsheetDateRange = this.selectedDateRange;
      }
    },
    // Calendar methods
    dateRange(startDate, endDate) {
      var dateArray = [];
      let currentDate = new Date(startDate);
      const endDateObj = new Date(endDate);
      while (currentDate <= endDateObj) {
        currentDate.setUTCDate(currentDate.getUTCDate() + 1);
        dateArray.push({
          weekday: new Date(currentDate).toLocaleString('en-us', {
            weekday: 'short',
          }),
          day: new Date(currentDate).toLocaleString('en-us', {
            day: 'numeric',
          }),
          month: new Date(currentDate).toLocaleString('en-us', {
            month: 'long',
          }),
          date: new Date(currentDate),
        });
      }

      if (dateArray.length < 7) {
        const lastSelectedDate = dateArray.at(-1).date;
        const daysLeft = 7 - dateArray.length;
        for (let i = 0; i < daysLeft; i++) {
          lastSelectedDate.setUTCDate(lastSelectedDate.getUTCDate() + 1);
          const newDate = new Date(
            lastSelectedDate.setDate(lastSelectedDate.getDate())
          );
          dateArray.push({
            weekday: new Date(newDate).toLocaleString('en-us', {
              weekday: 'short',
            }),
            day: new Date(newDate).toLocaleString('en-us', {
              day: 'numeric',
            }),
            month: new Date(newDate).toLocaleString('en-us', {
              month: 'long',
            }),
            date: newDate,
          });
        }
      }
    },

    closePopup() {
      this.$refs.anytime.click();
    },

    handleChangeDate(selectedDates, dateStr, instance) {
      // console.log("handleChangeDate()", this.selectedDateRange);
      const selectedDateFormat = dateStr.split(' to ');
      if (selectedDates.length >= 2) {
        if (
          new Date(selectedDates[0]).getTime() ===
          new Date(selectedDates[1]).getTime()
        ) {
          const selectDate = new Date(selectedDates[0]);
          this.$set(
            this.flat_pikr_config,
            'minDate',
            selectDate.setDate(selectDate.getDate() - this.skip_days)
          );
          this.$set(
            this.flat_pikr_config,
            'maxDate',
            selectDate.setDate(selectDate.getDate() + this.skip_days * 2)
          );
        } else {
          this.$set(this.flat_pikr_config, 'minDate', '');
          this.$set(this.flat_pikr_config, 'maxDate', '');
        }
        this.spreadsheetDateRange = this.selectedDateRange;
      } else {
        const selectDate = new Date(selectedDateFormat[0]);
        selectDate.setHours(selectDate.getHours() + 12);

        selectDate.setDate(selectDate.getDate() - this.skip_days);
        this.$set(
          this.flat_pikr_config,
          'minDate',
          selectDate.toISOString().slice(0, 10)
        );

        selectDate.setDate(selectDate.getDate() + this.skip_days * 2);
        this.$set(
          this.flat_pikr_config,
          'maxDate',
          selectDate.toISOString().slice(0, 10)
        );
      }
    },
    updateSpreadSheetList(newList) {
      this.spreadsheetList = newList;
    },
    saveFilterJson(data) {
      this.filterJson = data;
    },
  },
};
</script>

<style lang="scss">
.px-base {
  padding-left: 0 !important;
}
.spreadsheet-list-width-home-tab {
  width: 100%;
  transition: 200ms width;
}
@media (max-width: 1099px) {
  .spreadsheet-list-width-home-tab {
    width: 100%;
  }
  .spreadsheet-list-width-tab {
    width: 100% !important;
    margin-bottom: 15px;
  }
}

.spreadsheet-list-width-tab {
  width: 85%;
  transition: 200ms width;
}
.calendar-icon {
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 20px;
}
.flatpickr-calendar.inline {
  box-shadow: none !important;
}
</style>
