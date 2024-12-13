<template>
  <div ref="calendar">
    <div
      class="flex sm:flex-row flex-col md:items-center flex-wrap"
      :class="[spreadsheetForSpecificUser ? 'justify-between' : 'justify-end']"
    >
      <div
        class="spreadsheet-list-width-home-tab"
        v-if="spreadsheetForSpecificUser"
      >
        <!-- Spreadsheet header  -->
        <!-- <spreadsheet-list 
          :accessLevel="accessLevel" 
          :hideSpreadsheet="isUserBrokerOrShipper"
        ></spreadsheet-list> -->
        <!-- Spreadsheet header End  -->
      </div>
      <div>
        <div class="flex items-center">
          <vs-dropdown vs-custom-content vs-trigger-click>
            <div ref="anytime">
              <vs-icon icon="event_note" color="#00ADC2" />
              <span class="mr-2" style="color: #00adc2">{{
                getSelectedDateRange
              }}</span>
            </div>

            <vs-dropdown-menu>
              <div class="p-3">
                <div
                  class="flex items-center justify-between pb-5"
                  v-if="onHomeTabSelected"
                >
                  <vs-radio
                    v-model="loadDirection"
                    vs-name="loadDirection"
                    @change="getAllTrackings"
                    class="px-base"
                    vs-value="all"
                    >In/Out</vs-radio
                  >
                  <vs-radio
                    v-model="loadDirection"
                    vs-name="loadDirection"
                    @change="getAllTrackings"
                    class="px-base"
                    vs-value="inbound"
                    >Inbound</vs-radio
                  >
                  <vs-radio
                    v-model="loadDirection"
                    vs-name="loadDirection"
                    @change="getAllTrackings"
                    vs-value="outbound"
                    >Outbound</vs-radio
                  >
                </div>
                <div
                  class="flex items-center justify-between pb-5"
                  v-if="onHomeTabSelected"
                >
                  <vs-radio
                    v-model="filter"
                    vs-name="filter"
                    @change="getAllTrackings"
                    class="px-base"
                    vs-value="PU/Del"
                    >PU/Del</vs-radio
                  >
                  <vs-radio
                    v-model="filter"
                    vs-name="filter"
                    @change="getAllTrackings"
                    class="px-base"
                    vs-value="pickup"
                    >Pick Up</vs-radio
                  >
                  <vs-radio
                    v-model="filter"
                    vs-name="filter"
                    @change="getAllTrackings"
                    vs-value="delivery"
                    >Delivery</vs-radio
                  >
                </div>
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
           <div
            class="px-2 cursor-pointer"
            v-show="!onHomeTabSelected"
            @click="handleSpreadsheetShare"
            v-if="accessLevel == 1"
          >
            <vs-icon
              icon="share"
              color="primary"
            />
            <span class="text-primary">Share</span>
          </div>
           <div
            class="px-2 cursor-pointer"
            v-show="!onHomeTabSelected"
            @click="refreshSpreadsheet"
          >
             <vs-icon size="small" icon="autorenew"></vs-icon>
            <span >Refresh</span>
          </div>

          <div
            class="px-2 cursor-pointer"
            @click="changeView(items.name)"
            v-for="items in viewOptions"
            :key="items.name"
            v-show="onHomeTabSelected"
          >
            <vs-icon
              :icon="items.icon"
              :color="items.active ? 'primary' : ''"
            />
            <span :class="items.active ? 'text-primary' : ''">{{
              items.name
            }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <template v-if="!isUserBrokerOrShipper">
      <div v-if="onHomeTabSelected">
        <div v-if="!viewOption[2].active">
          <Trucking :options="!viewOption[0].active" />
        </div>

        <div
          id="simple-calendar-app"
          class="mt-5"
          v-show="!viewOption[1].active"
        >
          <calendar-table
            :calendar="calendar"
            @moveDateToRight="moveDateToRight"
            @moveDateToLeft="moveDateToLeft"
            :calendarsDates="calendarsDates"
            :calendarEvent="simpleCalendarEvents"
            :selectedDateRange="selectedDateRange"
            @refreshCalendar="refreshCalendar"
            @getTracking="getAllTrackings"
          />
        </div>
      </div>
      <div v-else>
        <spreadsheet
          ref="spreadsheet"
          v-if="spreadsheetForSpecificUser"
          :selectedSheetId="selectedTab"
          :selectedDateRange="spreadsheetDateRange"
        ></spreadsheet>
      </div>
    </template>
    <template v-else>
      <Trucking :options="true" />
    </template>

     <vs-popup v-if="!onHomeTabSelected" :title="`Share ${selectedSpreadsheetName}`" :active.sync="sharePopup">
       <share-spreadsheet-popup ref="accessLevelRef" :spreadsheetId="selectedTab"></share-spreadsheet-popup>
    </vs-popup>
  </div>
</template>

<script>
require("vue-simple-calendar/static/css/default.css");
// import Datepicker from "vuejs-datepicker";
// import { en} from "vuejs-datepicker/src/locale";
// import html2canvas from "html2canvas";
import Trucking from "./components/Trucking.vue";
import CalendarTable from "./components/CalendarTable.vue";
// import Spreadsheet from "../excel/Spreadsheet.vue";
const Spreadsheet = () => import("../excel/Spreadsheet.vue");
import { mapGetters } from "vuex";
import SpreadsheetList from "./components/SpreadsheetList.vue";
// const SpreadsheetList = () => import("./components/SpreadsheetList.vue");
// import ShareSpreadsheetPopup from './components/ShareSpreadsheetPopup.vue';
const ShareSpreadsheetPopup = () => import("./components/ShareSpreadsheetPopup.vue");

// const CategoriesPie = () => import("./CategoriesPie.vue");

export default {
  components: {
    // Datepicker,
    Trucking,
    CalendarTable,
    Spreadsheet,
    SpreadsheetList,
    ShareSpreadsheetPopup,
    
  },
  data() {
    return {
      loadDirection: "all",
      calendarsDates: [],
      viewOption: [
        { name: "View all", icon: "view_week", active: true },
        { name: "Map", icon: "location_on", active: false },
        { name: "List", icon: "clear_all", active: false },
      ],
      CardDetailsData: {
        active: false,
        value: null,
      },
      selectedDateRange: "",
      filter: "PU/Del",
      // showDate: new Date(),
      // Flat Pikr Config
      skip_days: 6,
      flat_pikr_config: {
        mode: "range",
        minDate: "",
        maxDate: "",
        inline: true,
        defaultDate: [
          new Date(),
          new Date().setDate(new Date().getDate() + this.skip_days),
        ],
      },

      // showDate: new Date(),
      simpleCalendarEvents: [],
      disabledFrom: false,
      id: 0,
      title: "",
      startDate: "",
      endDate: "",
      labelLocal: "none",

      //langHe: he,
      //langEn: en,

      url: "",

      activePromptAddEvent: false,
      activePromptEditEvent: false,

      calendar: [
        {
          load_id: 2024,
          load_number: 1024,
          truck_number: "123",
          trailer_number: "123",
          driver_name: "John Doe",
          equipment_type: "53' Van",
          dispatcher_notes: "drop trailer at leg",
          origin: {
            city: "Los Angeles",
            state: "CA",
            date: "2022-02-13",
          },
          destination: {
            city: "Berkeley",
            state: "CA",
            date: "2022-02-16",
          },
        },
        {
          load_id: 2024,
          load_number: 1024,
          truck_number: "456",
          trailer_number: "567",
          driver_name: "Alice",
          equipment_type: "53' Van",
          dispatcher_notes: "drop trailer at leg",
          origin: {
            city: "Berkeley",
            state: "CA",
            date: "2022-02-16",
          },
          destination: {
            city: "Seattle",
            state: "WA",
            date: "2022-02-20",
          },
        },
      ],

      // spreadsheet
      selectedTab: "Home",
      spreadsheetDateRange: "",
      sharePopup: false,
      selectedSpreadsheetName: '',
      accessLevel: null
    };
  },

  async created() {
    // Selected Date
    // "2021-05-05 to 2021-05-06"
    this.setDefaultDateRange();
    await this.getAllTrackings();
  },

  watch: {
    selectedTab: {
      handler() {
        if (!this.onHomeTabSelected) {
          this.skip_days = 396; // 1 year and 1 month
        } else {
          this.skip_days = 6;
          const dates = this.selectedDateRange.split(" to ");
          const date1 = new Date(dates[0]);
          const date2 = new Date(dates[1]);
          const diffTime = Math.abs(date2 - date1);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays >= 7) {
            this.setDefaultDateRange();
          }
          this.getAllTrackings();
        }
      },
    },
    selectedDateRange() {
      const dates = this.selectedDateRange.split(" to ");
      this.dateRange(dates[0], dates[1] ? dates[1] : dates[0]);
    },
  },

  computed: {
    ...mapGetters("auth", ["userRole", "user", "isUserBrokerOrShipper"]),
    spreadsheetForSpecificUser() {
      return true;
    },
    onHomeTabSelected() {
      return this.selectedTab == "Home";
    },
    getSelectedDateRange() {
      const regex = /\d{4}-/g;
      const dateRangeWithoutYear = this.selectedDateRange.replaceAll(regex, "");
      const date = dateRangeWithoutYear.replaceAll("-", "/").split("to");
      if (date[0] && date[1]) {
        return `${date[0]}-${date[1]}`;
      }
      return `${date[0]}`;
    },
    calendarTableData() {
      let calendarData = [];
      for (var i = 0; i < 7; i++) {
        !this.calendar[i]
          ? calendarData.push({})
          : calendarData.push(this.calendar[i]);
      }
      return this.calendar.length > 7 ? this.calendar : calendarData;
    },
    validForm() {
      return (
        this.title !== "" &&
        this.startDate !== "" &&
        this.endDate !== "" &&
        Date.parse(this.endDate) - Date.parse(this.startDate) >= 0 &&
        !this.errors.has("event-url")
      );
    },
    disabledDatesTo() {
      return { to: new Date(this.startDate) };
    },

    disabledDatesFrom() {
      return { from: new Date(this.endDate) };
    },

    windowWidth() {
      return this.$store.state.windowWidth;
    },

    showDate() {
      if (this.selectedDateRange) {
        return new Date(this.selectedDateRange.split(" to ")[0]);
      }

      return new Date();
    },

    startingDayOfWeek() {
      return new Date(this.showDate).getDay();
    },
    viewOptions() {
      if (this.isUserBrokerOrShipper)
        return [{ name: "Map", icon: "location_on", active: true }];
      return this.viewOption;
    }
  },

  methods: {
    handleSpreadsheetShare(){
     this.sharePopup = true;
     this.$refs.accessLevelRef.getUsersAccessLevel();
    },
    setAccessLevel(accessLevelProperty){
      this.accessLevel = accessLevelProperty;
    },
    refreshSpreadsheet(){
     this.$refs.spreadsheet.refreshSpreadsheet();
    },
    // call from spreadsheet header
    spreadsheetHeaderProperties(property) {
      this.selectedTab = property.selectedTab;
      this.selectedSpreadsheetName = property.selectedSpreadsheetName;
      // this.$refs.spreadsheetRef.getSpreadsheetData();
    },
    setDefaultDateRange() {
      let today = new Date();
      today.setHours(0);
      const todayStr = today.toISOString().split("T", 1)[0];
      today.setDate(today.getDate() + this.skip_days);
      const after7DaysStr = today.toISOString().split("T", 1)[0];
      this.selectedDateRange = `${todayStr} to ${after7DaysStr}`;
      this.spreadsheetDateRange = this.selectedDateRange;
    },
    // Calendar methods
    dateRange(startDate, endDate) {
      var dateArray = [];
      let currentDate = new Date(startDate);
      const endDateObj = new Date(endDate);
      while (currentDate <= endDateObj) {
        currentDate.setUTCDate(currentDate.getUTCDate() + 1);
        dateArray.push({
          weekday: new Date(currentDate).toLocaleString("en-us", {
            weekday: "short",
          }),
          day: new Date(currentDate).toLocaleString("en-us", {
            day: "numeric",
          }),
          month: new Date(currentDate).toLocaleString("en-us", {
            month: "long",
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
            weekday: new Date(newDate).toLocaleString("en-us", {
              weekday: "short",
            }),
            day: new Date(newDate).toLocaleString("en-us", {
              day: "numeric",
            }),
            month: new Date(newDate).toLocaleString("en-us", {
              month: "long",
            }),
            date: newDate,
          });
        }
      }

      this.calendarsDates = dateArray;
    },

    moveDateToRight() {
      const selectedDates = this.selectedDateRange.split(" to ");
      let rightDate = new Date(
        selectedDates[1] ? selectedDates[1] : selectedDates[0]
      );
      rightDate.setHours(rightDate.getHours() + 12);
      rightDate.setDate(rightDate.getDate() + 1);

      let leftDate = new Date(selectedDates[0]);
      leftDate.setHours(leftDate.getHours() + 12);
      leftDate.setDate(leftDate.getDate() + 1);

      this.selectedDateRange =
        leftDate.toISOString().slice(0, 10) +
        " to " +
        rightDate.toISOString().slice(0, 10);
      this.getAllTrackings();
    },

    moveDateToLeft() {
      const selectedDates = this.selectedDateRange.split(" to ");
      let rightDate = new Date(
        selectedDates[1] ? selectedDates[1] : selectedDates[0]
      );
      rightDate.setHours(rightDate.getHours() + 12);
      rightDate.setDate(rightDate.getDate() - 1);

      let leftDate = new Date(selectedDates[0]);
      leftDate.setHours(leftDate.getHours() + 12);
      leftDate.setDate(leftDate.getDate() - 1);

      this.selectedDateRange =
        leftDate.toISOString().slice(0, 10) +
        " to " +
        rightDate.toISOString().slice(0, 10);
      this.getAllTrackings();
    },

    closePopup() {
      this.$refs.anytime.click();
    },

    changeView(name) {
      const getIndex = this.viewOption.findIndex((ele) => ele.name === name);
      this.viewOption[getIndex].active = true;
      this.viewOption.map((ele, index) => {
        if (getIndex != index) {
          this.viewOption[index].active = false;
        }
      });
    },

    handleChangeDate(selectedDates, dateStr, instance) {
      // console.log("handleChangeDate()", this.selectedDateRange);
      const selectedDateFormat = dateStr.split(" to ");
      if (selectedDates.length >= 2) {
        if (
          new Date(selectedDates[0]).getTime() ===
          new Date(selectedDates[1]).getTime()
        ) {
          const selectDate = new Date(selectedDates[0]);
          this.$set(
            this.flat_pikr_config,
            "minDate",
            selectDate.setDate(selectDate.getDate() - this.skip_days)
          );
          this.$set(
            this.flat_pikr_config,
            "maxDate",
            selectDate.setDate(selectDate.getDate() + this.skip_days * 2)
          );
        } else {
          this.$set(this.flat_pikr_config, "minDate", "");
          this.$set(this.flat_pikr_config, "maxDate", "");
        }
        this.getAllTrackings();
        this.spreadsheetDateRange = this.selectedDateRange;
      } else {
        const selectDate = new Date(selectedDateFormat[0]);
        selectDate.setHours(selectDate.getHours() + 12);

        selectDate.setDate(selectDate.getDate() - this.skip_days);
        this.$set(
          this.flat_pikr_config,
          "minDate",
          selectDate.toISOString().slice(0, 10)
        );

        selectDate.setDate(selectDate.getDate() + this.skip_days * 2);
        this.$set(
          this.flat_pikr_config,
          "maxDate",
          selectDate.toISOString().slice(0, 10)
        );
      }
    },

    async getAllTrackings() {
      if (this.isUserBrokerOrShipper) return;
      if (!this.selectedDateRange) {
        return;
      }
      if (!this.onHomeTabSelected && this.spreadsheetForSpecificUser) {
        return;
      }
      console.log("getAllTrackings()", this.selectedDateRange);
      const selectedDate = this.selectedDateRange.split(" to ");

      const filter = {
        startDate: selectedDate[0],
        endDate: selectedDate[1] ? selectedDate[1] : selectedDate[0],
        direction: this.loadDirection,
        pickupOnly: this.filter == "pickup" ? 1 : 0,
        deliveryOnly: this.filter == "delivery" ? 1 : 0,
      };

      this.$vs.loading();

      try {
        const payload = await this.$store.dispatch(
          "calendar/getAllTrackings",
          filter
        );
        this.simpleCalendarEvents = [];
        payload.map((item) => {
          var origin = new Date(item.origin.date);
          origin.setHours(origin.getHours() + 12);
          var destination = new Date(item.destination.date);
          destination.setHours(destination.getHours() + 12);
          var calendarBar;
          if (
            new Date(item.origin.date) < new Date(this.calendarsDates[0].date)
          ) {
            for (let i = 0; i < this.calendarsDates.length; i++) {
              let calendarDay = Number(this.calendarsDates[i].day);
              let calendarMonth = this.calendarsDates[i].month;
              if (
                destination.getDate() === calendarDay &&
                destination.toLocaleString("en-us", { month: "long" }) ===
                  calendarMonth
              ) {
                calendarBar = { width: i, offset: 0 };
                break;
              } else {
                calendarBar = { width: 6, offset: 0 };
              }
            }
          } else {
            let calendarData = { width: 0, offset: 0 };
            for (let i = 0; i < this.calendarsDates.length; i++) {
              let calendarDay = Number(this.calendarsDates[i].day);
              let calendarMonth = this.calendarsDates[i].month;
              if (
                origin.getDate() === calendarDay &&
                origin.toLocaleString("en-us", { month: "long" }) ===
                  calendarMonth
              ) {
                calendarData.offset = i;
                if (calendarData.offset > 0) {
                  calendarData.offset = i;
                  break;
                }
              }
            }
            for (let i = 0; i < this.calendarsDates.length; i++) {
              let calendarDay = Number(this.calendarsDates[i].day);
              let calendarMonth = this.calendarsDates[i].month;
              if (
                destination.getDate() === calendarDay &&
                destination.toLocaleString("en-us", { month: "long" }) ===
                  calendarMonth
              ) {
                calendarData.width = i;
                let newData = calendarData.offset - calendarData.width;
                calendarData.width = Math.abs(newData);
                break;
              } else {
                calendarData.width = 6;
              }
            }
            calendarBar = calendarData;
          }

          this.simpleCalendarEvents.push({
            id: item.load_id,
            startDate: item.origin.date,
            endDate: item.destination.date,
            url: "",
            classes: `width-${calendarBar.width} offset-${calendarBar.offset}`,
            label: item,
          });
        });

        this.calendar = payload;
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    /*async shareImage() {
      this.$vs.loading();

      try {
        const el = this.$refs["calendar-container"];
        const canvas = await html2canvas(el);

        const dataUrl = canvas.toDataURL();

        const { data } = await this.$store.dispatch("calendar/shareImage", {
          image: dataUrl,
        });
        const imageURL = data.payload.image_url;

        window.location.href = `mailto:?subject=Share&body=${encodeURI(
          imageURL
        )}`;
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },*/

    refreshCalendar() {
      this.getAllTrackings();
    },
  },
};
</script>

<style>
.px-base {
  padding-left: 0 !important;
}
.spreadsheet-list-width-home-tab {
  width: 80%;
  transition: 200ms width;
}
@media (max-width: 1099px) {
  .spreadsheet-list-width-home-tab {
    width: 100%;
    margin-bottom: 15px;
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
</style>
