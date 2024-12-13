(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Trucking_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Trucking.vue */ "./resources/js/src/views/pages/calender/components/Trucking.vue");
/* harmony import */ var _components_CalendarTable_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CalendarTable.vue */ "./resources/js/src/views/pages/calender/components/CalendarTable.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_SpreadsheetList_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SpreadsheetList.vue */ "./resources/js/src/views/pages/calender/components/SpreadsheetList.vue");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

__webpack_require__(/*! vue-simple-calendar/static/css/default.css */ "./node_modules/vue-simple-calendar/static/css/default.css"); // import Datepicker from "vuejs-datepicker";
// import { en} from "vuejs-datepicker/src/locale";
// import html2canvas from "html2canvas";



 // import Spreadsheet from "../excel/Spreadsheet.vue";

var Spreadsheet = function Spreadsheet() {
  return Promise.all(/*! import() */[__webpack_require__.e(61), __webpack_require__.e(26), __webpack_require__.e(196)]).then(__webpack_require__.bind(null, /*! ../excel/Spreadsheet.vue */ "./resources/js/src/views/pages/excel/Spreadsheet.vue"));
};


 // const SpreadsheetList = () => import("./components/SpreadsheetList.vue");
// import ShareSpreadsheetPopup from './components/ShareSpreadsheetPopup.vue';

var ShareSpreadsheetPopup = function ShareSpreadsheetPopup() {
  return __webpack_require__.e(/*! import() */ 45).then(__webpack_require__.bind(null, /*! ./components/ShareSpreadsheetPopup.vue */ "./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue"));
}; // const CategoriesPie = () => import("./CategoriesPie.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // Datepicker,
    Trucking: _components_Trucking_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CalendarTable: _components_CalendarTable_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Spreadsheet: Spreadsheet,
    SpreadsheetList: _components_SpreadsheetList_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    ShareSpreadsheetPopup: ShareSpreadsheetPopup
  },
  data: function data() {
    return {
      loadDirection: "all",
      calendarsDates: [],
      viewOption: [{
        name: "View all",
        icon: "view_week",
        active: true
      }, {
        name: "Map",
        icon: "location_on",
        active: false
      }, {
        name: "List",
        icon: "clear_all",
        active: false
      }],
      CardDetailsData: {
        active: false,
        value: null
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
        defaultDate: [new Date(), new Date().setDate(new Date().getDate() + this.skip_days)]
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
      calendar: [{
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
          date: "2022-02-13"
        },
        destination: {
          city: "Berkeley",
          state: "CA",
          date: "2022-02-16"
        }
      }, {
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
          date: "2022-02-16"
        },
        destination: {
          city: "Seattle",
          state: "WA",
          date: "2022-02-20"
        }
      }],
      // spreadsheet
      selectedTab: "Home",
      spreadsheetDateRange: "",
      sharePopup: false,
      selectedSpreadsheetName: '',
      accessLevel: null
    };
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Selected Date
              // "2021-05-05 to 2021-05-06"
              this.setDefaultDateRange();
              _context.next = 3;
              return this.getAllTrackings();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function created() {
      return _created.apply(this, arguments);
    };
  }(),
  watch: {
    selectedTab: {
      handler: function handler() {
        if (!this.onHomeTabSelected) {
          this.skip_days = 396; // 1 year and 1 month
        } else {
          this.skip_days = 6;
          var dates = this.selectedDateRange.split(" to ");
          var date1 = new Date(dates[0]);
          var date2 = new Date(dates[1]);
          var diffTime = Math.abs(date2 - date1);
          var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays >= 7) {
            this.setDefaultDateRange();
          }

          this.getAllTrackings();
        }
      }
    },
    selectedDateRange: function selectedDateRange() {
      var dates = this.selectedDateRange.split(" to ");
      this.dateRange(dates[0], dates[1] ? dates[1] : dates[0]);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])("auth", ["userRole", "user", "isUserBrokerOrShipper"]), {
    spreadsheetForSpecificUser: function spreadsheetForSpecificUser() {
      return true;
    },
    onHomeTabSelected: function onHomeTabSelected() {
      return this.selectedTab == "Home";
    },
    getSelectedDateRange: function getSelectedDateRange() {
      var regex = /\d{4}-/g;
      var dateRangeWithoutYear = this.selectedDateRange.replaceAll(regex, "");
      var date = dateRangeWithoutYear.replaceAll("-", "/").split("to");

      if (date[0] && date[1]) {
        return "".concat(date[0], "-").concat(date[1]);
      }

      return "".concat(date[0]);
    },
    calendarTableData: function calendarTableData() {
      var calendarData = [];

      for (var i = 0; i < 7; i++) {
        !this.calendar[i] ? calendarData.push({}) : calendarData.push(this.calendar[i]);
      }

      return this.calendar.length > 7 ? this.calendar : calendarData;
    },
    validForm: function validForm() {
      return this.title !== "" && this.startDate !== "" && this.endDate !== "" && Date.parse(this.endDate) - Date.parse(this.startDate) >= 0 && !this.errors.has("event-url");
    },
    disabledDatesTo: function disabledDatesTo() {
      return {
        to: new Date(this.startDate)
      };
    },
    disabledDatesFrom: function disabledDatesFrom() {
      return {
        from: new Date(this.endDate)
      };
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    },
    showDate: function showDate() {
      if (this.selectedDateRange) {
        return new Date(this.selectedDateRange.split(" to ")[0]);
      }

      return new Date();
    },
    startingDayOfWeek: function startingDayOfWeek() {
      return new Date(this.showDate).getDay();
    },
    viewOptions: function viewOptions() {
      if (this.isUserBrokerOrShipper) return [{
        name: "Map",
        icon: "location_on",
        active: true
      }];
      return this.viewOption;
    }
  }),
  methods: {
    handleSpreadsheetShare: function handleSpreadsheetShare() {
      this.sharePopup = true;
      this.$refs.accessLevelRef.getUsersAccessLevel();
    },
    setAccessLevel: function setAccessLevel(accessLevelProperty) {
      this.accessLevel = accessLevelProperty;
    },
    refreshSpreadsheet: function refreshSpreadsheet() {
      this.$refs.spreadsheet.refreshSpreadsheet();
    },
    // call from spreadsheet header
    spreadsheetHeaderProperties: function spreadsheetHeaderProperties(property) {
      this.selectedTab = property.selectedTab;
      this.selectedSpreadsheetName = property.selectedSpreadsheetName; // this.$refs.spreadsheetRef.getSpreadsheetData();
    },
    setDefaultDateRange: function setDefaultDateRange() {
      var today = new Date();
      today.setHours(0);
      var todayStr = today.toISOString().split("T", 1)[0];
      today.setDate(today.getDate() + this.skip_days);
      var after7DaysStr = today.toISOString().split("T", 1)[0];
      this.selectedDateRange = "".concat(todayStr, " to ").concat(after7DaysStr);
      this.spreadsheetDateRange = this.selectedDateRange;
    },
    // Calendar methods
    dateRange: function dateRange(startDate, endDate) {
      var dateArray = [];
      var currentDate = new Date(startDate);
      var endDateObj = new Date(endDate);

      while (currentDate <= endDateObj) {
        currentDate.setUTCDate(currentDate.getUTCDate() + 1);
        dateArray.push({
          weekday: new Date(currentDate).toLocaleString("en-us", {
            weekday: "short"
          }),
          day: new Date(currentDate).toLocaleString("en-us", {
            day: "numeric"
          }),
          month: new Date(currentDate).toLocaleString("en-us", {
            month: "long"
          }),
          date: new Date(currentDate)
        });
      }

      if (dateArray.length < 7) {
        var lastSelectedDate = dateArray.at(-1).date;
        var daysLeft = 7 - dateArray.length;

        for (var i = 0; i < daysLeft; i++) {
          lastSelectedDate.setUTCDate(lastSelectedDate.getUTCDate() + 1);
          var newDate = new Date(lastSelectedDate.setDate(lastSelectedDate.getDate()));
          dateArray.push({
            weekday: new Date(newDate).toLocaleString("en-us", {
              weekday: "short"
            }),
            day: new Date(newDate).toLocaleString("en-us", {
              day: "numeric"
            }),
            month: new Date(newDate).toLocaleString("en-us", {
              month: "long"
            }),
            date: newDate
          });
        }
      }

      this.calendarsDates = dateArray;
    },
    moveDateToRight: function moveDateToRight() {
      var selectedDates = this.selectedDateRange.split(" to ");
      var rightDate = new Date(selectedDates[1] ? selectedDates[1] : selectedDates[0]);
      rightDate.setHours(rightDate.getHours() + 12);
      rightDate.setDate(rightDate.getDate() + 1);
      var leftDate = new Date(selectedDates[0]);
      leftDate.setHours(leftDate.getHours() + 12);
      leftDate.setDate(leftDate.getDate() + 1);
      this.selectedDateRange = leftDate.toISOString().slice(0, 10) + " to " + rightDate.toISOString().slice(0, 10);
      this.getAllTrackings();
    },
    moveDateToLeft: function moveDateToLeft() {
      var selectedDates = this.selectedDateRange.split(" to ");
      var rightDate = new Date(selectedDates[1] ? selectedDates[1] : selectedDates[0]);
      rightDate.setHours(rightDate.getHours() + 12);
      rightDate.setDate(rightDate.getDate() - 1);
      var leftDate = new Date(selectedDates[0]);
      leftDate.setHours(leftDate.getHours() + 12);
      leftDate.setDate(leftDate.getDate() - 1);
      this.selectedDateRange = leftDate.toISOString().slice(0, 10) + " to " + rightDate.toISOString().slice(0, 10);
      this.getAllTrackings();
    },
    closePopup: function closePopup() {
      this.$refs.anytime.click();
    },
    changeView: function changeView(name) {
      var _this = this;

      var getIndex = this.viewOption.findIndex(function (ele) {
        return ele.name === name;
      });
      this.viewOption[getIndex].active = true;
      this.viewOption.map(function (ele, index) {
        if (getIndex != index) {
          _this.viewOption[index].active = false;
        }
      });
    },
    handleChangeDate: function handleChangeDate(selectedDates, dateStr, instance) {
      // console.log("handleChangeDate()", this.selectedDateRange);
      var selectedDateFormat = dateStr.split(" to ");

      if (selectedDates.length >= 2) {
        if (new Date(selectedDates[0]).getTime() === new Date(selectedDates[1]).getTime()) {
          var selectDate = new Date(selectedDates[0]);
          this.$set(this.flat_pikr_config, "minDate", selectDate.setDate(selectDate.getDate() - this.skip_days));
          this.$set(this.flat_pikr_config, "maxDate", selectDate.setDate(selectDate.getDate() + this.skip_days * 2));
        } else {
          this.$set(this.flat_pikr_config, "minDate", "");
          this.$set(this.flat_pikr_config, "maxDate", "");
        }

        this.getAllTrackings();
        this.spreadsheetDateRange = this.selectedDateRange;
      } else {
        var _selectDate = new Date(selectedDateFormat[0]);

        _selectDate.setHours(_selectDate.getHours() + 12);

        _selectDate.setDate(_selectDate.getDate() - this.skip_days);

        this.$set(this.flat_pikr_config, "minDate", _selectDate.toISOString().slice(0, 10));

        _selectDate.setDate(_selectDate.getDate() + this.skip_days * 2);

        this.$set(this.flat_pikr_config, "maxDate", _selectDate.toISOString().slice(0, 10));
      }
    },
    getAllTrackings: function () {
      var _getAllTrackings = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var _this2 = this;

        var selectedDate, filter, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.isUserBrokerOrShipper) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                if (this.selectedDateRange) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                if (!(!this.onHomeTabSelected && this.spreadsheetForSpecificUser)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return");

              case 6:
                console.log("getAllTrackings()", this.selectedDateRange);
                selectedDate = this.selectedDateRange.split(" to ");
                filter = {
                  startDate: selectedDate[0],
                  endDate: selectedDate[1] ? selectedDate[1] : selectedDate[0],
                  direction: this.loadDirection,
                  pickupOnly: this.filter == "pickup" ? 1 : 0,
                  deliveryOnly: this.filter == "delivery" ? 1 : 0
                };
                this.$vs.loading();
                _context2.prev = 10;
                _context2.next = 13;
                return this.$store.dispatch("calendar/getAllTrackings", filter);

              case 13:
                payload = _context2.sent;
                this.simpleCalendarEvents = [];
                payload.map(function (item) {
                  var origin = new Date(item.origin.date);
                  origin.setHours(origin.getHours() + 12);
                  var destination = new Date(item.destination.date);
                  destination.setHours(destination.getHours() + 12);
                  var calendarBar;

                  if (new Date(item.origin.date) < new Date(_this2.calendarsDates[0].date)) {
                    for (var i = 0; i < _this2.calendarsDates.length; i++) {
                      var calendarDay = Number(_this2.calendarsDates[i].day);
                      var calendarMonth = _this2.calendarsDates[i].month;

                      if (destination.getDate() === calendarDay && destination.toLocaleString("en-us", {
                        month: "long"
                      }) === calendarMonth) {
                        calendarBar = {
                          width: i,
                          offset: 0
                        };
                        break;
                      } else {
                        calendarBar = {
                          width: 6,
                          offset: 0
                        };
                      }
                    }
                  } else {
                    var calendarData = {
                      width: 0,
                      offset: 0
                    };

                    for (var _i = 0; _i < _this2.calendarsDates.length; _i++) {
                      var _calendarDay = Number(_this2.calendarsDates[_i].day);

                      var _calendarMonth = _this2.calendarsDates[_i].month;

                      if (origin.getDate() === _calendarDay && origin.toLocaleString("en-us", {
                        month: "long"
                      }) === _calendarMonth) {
                        calendarData.offset = _i;

                        if (calendarData.offset > 0) {
                          calendarData.offset = _i;
                          break;
                        }
                      }
                    }

                    for (var _i2 = 0; _i2 < _this2.calendarsDates.length; _i2++) {
                      var _calendarDay2 = Number(_this2.calendarsDates[_i2].day);

                      var _calendarMonth2 = _this2.calendarsDates[_i2].month;

                      if (destination.getDate() === _calendarDay2 && destination.toLocaleString("en-us", {
                        month: "long"
                      }) === _calendarMonth2) {
                        calendarData.width = _i2;
                        var newData = calendarData.offset - calendarData.width;
                        calendarData.width = Math.abs(newData);
                        break;
                      } else {
                        calendarData.width = 6;
                      }
                    }

                    calendarBar = calendarData;
                  }

                  _this2.simpleCalendarEvents.push({
                    id: item.load_id,
                    startDate: item.origin.date,
                    endDate: item.destination.date,
                    url: "",
                    classes: "width-".concat(calendarBar.width, " offset-").concat(calendarBar.offset),
                    label: item
                  });
                });
                this.calendar = payload;
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](10);
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: _context2.t0.response.data.message
                });

              case 22:
                _context2.prev = 22;
                this.$vs.loading.close();
                return _context2.finish(22);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[10, 19, 22, 25]]);
      }));

      return function getAllTrackings() {
        return _getAllTrackings.apply(this, arguments);
      };
    }(),

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
    refreshCalendar: function refreshCalendar() {
      this.getAllTrackings();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dispatch_load_LoadSidebar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dispatch/load/LoadSidebar.vue */ "./resources/js/src/views/pages/dispatch/load/LoadSidebar.vue");
/* harmony import */ var _components_LoadInfo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LoadInfo.vue */ "./resources/js/src/views/pages/calender/components/LoadInfo.vue");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CardDetails",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  components: {
    LoadInfo: _components_LoadInfo_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LoadSidebar: _dispatch_load_LoadSidebar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loadId: null,
      active: true,
      make_private_show: true,
      fullscreen: false,
      url: null,
      toggleDropdown: false,
      chips: [],
      currentInput: "",
      origin: null,
      destination: null,
      waypnt: [],
      searchLoad: "",
      sidebarData: {},
      addNewDataSidebar: false,
      loadStatusList: [{
        id: "open",
        name: "Open",
        color: "#E63292"
      }, {
        id: "assign",
        name: "Dispatched",
        color: "#FF9F43"
      }, {
        id: "in_transit",
        name: "In Transit",
        color: "#7367F0"
      }, {
        id: "delivered",
        name: "Delivered",
        color: "#28C76F"
      }],
      payload: [{
        load_id: 1,
        load_unique_id: "",
        //"n/a",
        load_reference: "",
        //"n/a",
        load_status: "",
        //"invoice_paid",
        shippers: [{
          shipper_id: 1,
          shipper_name: "",
          //"Schoen Group",
          shipping_date: "",
          //"2021-05-03",
          shipping_time: "",
          latitude: "",
          //33.9628906,
          longitude: "" //-118.0825548, //"10:00:00"

        }],
        receivers: [{
          receiver_id: 1,
          receiver_name: "",
          //"Schoen Group",
          delivery_date: "",
          //"2021-05-14",
          delivery_time: "",
          //"15:30:00",
          latitude: "",
          //33.9628906,
          longitude: "" //-118.0825548,

        }],
        drivers: [{
          driver_id: 1,
          name: "",
          //"Parth",
          phone_number: "" //"8414915994"

        }],
        vehicles: [{
          truck_id: 1,
          truck_number: "",
          //"Truck 601",
          trailer_id: 1,
          trailer_number: "",
          //"Trailer 101",
          location: {
            latitude: "",
            //33.9628906,
            longitude: "",
            //-118.0825548,
            heading_degrees: 0,
            formatted_location: "" //"11035 Enterprise Avenue, Santa Fe Springs, CA, 90670"

          }
        }]
      }],
      drivers: [],
      center: {
        lat: 34.052235,
        lng: -118.243683
      },
      selected_driver: null,
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        content: "",
        maxWidth: 200,
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  computed: {
    openLoadStatusList: function openLoadStatusList() {
      if (this.payload[0].load_status == "invoice_created" || this.payload[0].load_status == "payment_requested" || this.payload[0].load_status == "invoice_paid") {
        return [];
      } else {
        return this.loadStatusList;
      }
    }
  },
  methods: {
    updateLoadStatus: function () {
      var _updateLoadStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(status) {
        var _this = this;

        var param;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                param = {
                  load_id: this.data.loadId,
                  status: status
                };
                _context.next = 3;
                return this.$store.dispatch("pipeline/updateStatus", param).then(function (httpStatus) {
                  if (httpStatus === 200) {
                    _this.$emit("refreshCalendar");

                    _this.$emit("updateStatus", _this.data.loadId);

                    _this.payload[0].load_status = status;

                    _this.$vs.notify({
                      time: 8000,
                      color: "success",
                      title: "Status Updated",
                      text: "Load Status Updated successfully."
                    });
                  } else {
                    _this.$vs.notify({
                      color: "danger",
                      title: "Error",
                      text: "Something went wrong!"
                    });
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function updateLoadStatus(_x) {
        return _updateLoadStatus.apply(this, arguments);
      };
    }(),
    goToLoad: function goToLoad() {
      // this.sidebarData = data;
      this.$emit("closePopup");
      this.sidebarData = {
        loadId: this.data.loadId
      };
      this.addNewDataSidebar = true;
    },
    toggleDataSidebar: function toggleDataSidebar() {
      this.addNewDataSidebar = false;
      this.$emit("refreshCalendar");
    },
    setPayloadData: function setPayloadData(data) {
      this.payload = data;
    },
    getData: function getData() {
      // this.getDataTracking();
      this.$refs.loadInfo.getData();
      this.toggleDropdown = false;
    },
    saveChip: function saveChip() {
      var chips = this.chips,
          currentInput = this.currentInput,
          set = this.set;
      (set && chips.indexOf(currentInput) === -1 || !set) && chips.push({
        email: currentInput
      });
      this.addCollaborator(this.currentInput);
      this.currentInput = "";
    },
    deleteChip: function deleteChip(index, id) {
      this.removeCollaborator(id);
      this.chips.splice(index, 1);
    },
    getCollaboratorData: function getCollaboratorData() {
      this.toggleDropdown = !this.toggleDropdown;

      if (this.toggleDropdown) {
        this.getCollaborator();
      }
    },
    getCollaborator: function getCollaborator() {
      var _this2 = this;

      this.chips = [];
      var data = {
        load_id: this.payload[0].load_id
      };
      this.$store.dispatch("load-collaborator/getLoadCollaborators", data).then(function (value) {
        value.payload.map(function (val) {
          _this2.chips.push(val);
        });
      });
    },
    removeCollaborator: function removeCollaborator(id) {
      var _this3 = this;

      this.$vs.loading();
      var data = {
        id: id
      };
      this.$store.dispatch("load-collaborator/deleteCollaborator", data).then(function (value) {
        _this3.$vs.notify({
          color: "primary",
          title: "Collaborator Deleted",
          text: "Load collaborator deleted successfully."
        });
      }).catch(function (error) {
        _this3.$vs.notify({
          title: "Error",
          text: error.response.data.message,
          color: "danger"
        });
      }).finally(function () {
        _this3.$vs.loading.close();
      });
    },
    addCollaborator: function addCollaborator(email) {
      var _this4 = this;

      this.$vs.loading();
      var data = {
        load_id: this.payload[0].load_id,
        email: email
      };
      this.$store.dispatch("load-collaborator/createCollaborator", data).then(function (value) {
        _this4.$vs.notify({
          color: "primary",
          title: "Collaborator Added",
          text: "Load collaborator added successfully."
        });

        _this4.getCollaborator();
      }).catch(function (error) {
        _this4.chips.pop();

        _this4.$vs.notify({
          title: "Error",
          text: error.response.data.message,
          color: "danger"
        });
      }).finally(function () {
        _this4.$vs.loading.close();
      });
    },
    loadboardButton: function loadboardButton() {},
    fullScreenButton: function fullScreenButton(type) {
      if (type == "close" && this.fullscreen == false) return;
      var ele = document.getElementById("cardDetails");

      try {
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullscreen) {
            document.mozCancelFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (ele.requestFullscreen) {
            ele.requestFullscreen();
          } else if (ele.webkitRequestFullScreen) {
            ele.webkitCancelFullScreen();
          } else if (ele.mozRequestFullScreen) {
            ele.mozRequestFullScreen();
          } else if (ele.msRequestFullscreen) {
            ele.msRequestFullscreen();
          }
        }
      } catch (error) {}

      this.winResize();
    },
    winResize: function winResize() {
      var data = this;

      window.onresize = function () {
        var isFull = !!(document.webkitIsFullScreen || document.mozFullscreen || document.msFullScreenElement || document.fullscreenElement);
        var childEle = document.getElementsByClassName("vs-sidebar")[0];

        if (isFull == false) {
          childEle.style.maxWidth = "650px";
          data.fullscreen = false;
        } else {
          childEle.style.maxWidth = "100%";
          data.fullscreen = true;
        }
      };
    },
    changeAccess: function () {
      var _changeAccess = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var filter;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.payload[0].is_private = !this.payload[0].is_private;
                filter = {
                  load_id: this.payload[0].load_id,
                  is_private: this.payload[0].is_private
                };
                _context2.prev = 2;
                this.$vs.loading();
                _context2.next = 6;
                return this.$store.dispatch("calendar/getChangeAccess", filter);

              case 6:
                _context2.next = 10;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);

              case 10:
                _context2.prev = 10;
                this.$vs.loading.close();
                return _context2.finish(10);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8, 10, 13]]);
      }));

      return function changeAccess() {
        return _changeAccess.apply(this, arguments);
      };
    }(),
    close: function close() {
      this.data.active = false;
      this.fullScreenButton("close");
    },
    shareClick: function () {
      var _shareClick = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var filter, data, url, that;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filter = {
                  load_id: this.payload[0].load_id
                };
                _context3.prev = 1;
                _context3.next = 4;
                return this.$store.dispatch("calendar/getShareUrl", filter);

              case 4:
                data = _context3.sent;
                // let url = `https:\/\/dashboard.ezpapel.com/share/load-tracking/`+data.data.payload.url.split('=')[1];
                url = document.location.origin + "/share/load-tracking/" + data.data.payload.url.split("=")[1];
                that = this;
                this.$copyText(url).then(function (e) {
                  that.$vs.notify({
                    title: "Success",
                    text: "Copied",
                    color: "success"
                  });
                }, function (e) {
                  that.$vs.notify({
                    title: "Danger",
                    text: "Can not copy",
                    color: "danger"
                  });
                });
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);
                this.$vs.notify({
                  title: "Danger",
                  text: "Can not copy",
                  color: "danger"
                });

              case 13:
                _context3.prev = 13;
                this.$vs.loading.close();
                return _context3.finish(13);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 10, 13, 16]]);
      }));

      return function shareClick() {
        return _shareClick.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CalendarDetails */ "./resources/js/src/views/pages/calender/CalendarDetails.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CalendarDetails: _CalendarDetails__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    calendar: Array,
    selectedDateRange: String,
    calendarsDates: Array,
    calendarEvent: Array,
    calenderBar: {
      width: 0,
      offset: 0
    }
  },
  data: function data() {
    return {
      CardDetailsData: {
        active: false,
        value: null
      },
      barPopup: false
    };
  },
  computed: {
    calendarTableData: function calendarTableData() {
      var calendarData = [];

      for (var i = 0; i < 7; i++) {
        !this.calendar[i] ? calendarData.push({}) : calendarData.push(this.calendar[i]);
      }

      return this.calendar.length > 7 ? this.calendar : calendarData;
    }
  },
  methods: {
    computeOriginDestinationString: function computeOriginDestinationString(label) {
      var ret = "#" + label.load_number + " ";

      if (label.origin.time || label.origin.startTime || label.destination.time || label.destination.startTime) {
        ret += label.origin.city + ", " + label.origin.state + " - " + label.destination.city + ", " + label.destination.state;
      } else {
        ret += this.computeOriginDestinationFullString(label);
      }

      return ret;
    },
    computeOriginDestinationFullString: function computeOriginDestinationFullString(label) {
      var ret = label.origin.city + ", " + label.origin.state + " - " + label.destination.city + ", " + label.destination.state;

      if (label.dispatcher_notes) {
        ret += " " + label.dispatcher_notes;
      }

      return ret;
    },
    computePuDelTimeString: function computePuDelTimeString(label, prefix) {
      var ret = "";

      if (label.startTime) {
        ret += label.startTime + "-";
      }

      if (label.time) {
        ret += label.time;
      }

      if (ret) {
        ret = prefix + ret;
      }

      return ret;
    },
    showdispatcherNotesHere: function showdispatcherNotesHere(label) {
      var ret = "";

      if (label.origin.time || label.origin.startTime || label.destination.time || label.destination.startTime) {
        ret = label.dispatcher_notes;
      }

      return ret;
    },
    closePopup: function closePopup() {
      this.barPopup = false;
    },
    cardDetails: function cardDetails(val) {
      //卡片得详情点击事件  这里应该是要显示一个页面并且将信息传进去
      this.barPopup = true;
      this.CardDetailsData.active = true;
      this.CardDetailsData.loadId = val.label.load_id;
      this.$refs.cardDetail.getData();
    },
    getAllTrackings: function getAllTrackings() {
      this.$emit("refreshCalendar");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CalendarDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CalendarDetails */ "./resources/js/src/views/pages/calender/CalendarDetails.vue");
/* harmony import */ var vue2_google_maps_dist_components_cluster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue2-google-maps/dist/components/cluster */ "./node_modules/vue2-google-maps/dist/components/cluster.js");
/* harmony import */ var vue2_google_maps_dist_components_cluster__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps_dist_components_cluster__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");








function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var trafficLayer;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['options'],
  components: {
    CalendarDetails: _CalendarDetails__WEBPACK_IMPORTED_MODULE_7__["default"],
    GmapCluster: vue2_google_maps_dist_components_cluster__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  data: function data() {
    return {
      trucks: [],
      drivers: [],
      detailsPopup: false,
      calendarDetails: {
        active: false,
        value: null
      },
      mapCenter: {
        lat: 39.83333361,
        // 34.052235,
        lng: -98.58 // -118.243683

      },
      infoWindowDetails: {
        latitude: 34.052235,
        longitude: -118.243683
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        maxWidth: 500,
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      loads: [],
      showTrafficLayer: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('auth', ['isUserBrokerOrShipper'])),
  created: function created() {
    if (!this.isUserBrokerOrShipper) this.getLocateTrucks();else this.trackCarrierTrucks();
  },
  mounted: function mounted() {
    // use for remove GmapCluster add event warning
    var _originalConsoleWarn = console.warn;

    console.warn = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var filteredArgs = args.filter(function (m) {
        return !_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(m).includes('google.maps.event.addDomListener() is deprecated');
      });

      if (filteredArgs.length > 0) {
        _originalConsoleWarn(filteredArgs);
      }
    };
  },
  methods: {
    viewDetails: function viewDetails() {
      this.detailsPopup = true;
      this.calendarDetails.active = true;
      this.calendarDetails.loadId = this.infoWindowDetails.load_id;
      this.$refs.cardDetail.getData();
    },
    getLocateTrucks: function () {
      var _getLocateTrucks = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var payload, i, _i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$vs.loading();
                _context.prev = 1;
                _context.next = 4;
                return this.$store.dispatch('calendar/getLocateTrucksDrivers');

              case 4:
                payload = _context.sent;

                for (i = 0; i < payload.trucks.length; ++i) {
                  if (payload.trucks[i].latitude) {
                    this.trucks.push(payload.trucks[i]);
                  }
                }

                for (_i = 0; _i < payload.drivers.length; _i++) {
                  if (payload.drivers[_i].latitude) {
                    this.drivers.push(payload.drivers[_i]);
                  }
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 12:
                _context.prev = 12;
                this.$vs.loading.close();
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9, 12, 15]]);
      }));

      return function getLocateTrucks() {
        return _getLocateTrucks.apply(this, arguments);
      };
    }(),
    toggleInfoWindow: function toggleInfoWindow(truck) {
      this.infoWindowDetails = truck;
      this.infoWinOpen = true;
    },
    trackCarrierTrucks: function () {
      var _trackCarrierTrucks = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var _ref, loads;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.$vs.loading();
                _context2.next = 4;
                return this.$store.dispatch('truckpedia/trackCarrierTrucks');

              case 4:
                _ref = _context2.sent;
                loads = _ref.payload.loads;
                this.loads = loads.filter(function (load) {
                  return load.location && load.location.lat && load.location.lng;
                });
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 12:
                _context2.prev = 12;
                this.$vs.loading.close();
                return _context2.finish(12);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9, 12, 15]]);
      }));

      return function trackCarrierTrucks() {
        return _trackCarrierTrucks.apply(this, arguments);
      };
    }(),
    toggleTrafficLayer: function toggleTrafficLayer() {
      var _this = this;

      if (trafficLayer === undefined) {
        trafficLayer = new google.maps.TrafficLayer();
      }

      this.showTrafficLayer = !this.showTrafficLayer;
      this.$refs.mapRef.$mapPromise.then(function (map) {
        trafficLayer.setMap(_this.showTrafficLayer ? map : null);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=template&id=d6c8ff24&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=template&id=d6c8ff24& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    ref: "calendar"
  }, [_c("div", {
    staticClass: "flex sm:flex-row flex-col md:items-center flex-wrap",
    class: [_vm.spreadsheetForSpecificUser ? "justify-between" : "justify-end"]
  }, [_vm.spreadsheetForSpecificUser ? _c("div", {
    staticClass: "spreadsheet-list-width-home-tab"
  }) : _vm._e(), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "flex items-center"
  }, [_c("vs-dropdown", {
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
    }
  }, [_c("div", {
    ref: "anytime"
  }, [_c("vs-icon", {
    attrs: {
      icon: "event_note",
      color: "#00ADC2"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "mr-2",
    staticStyle: {
      color: "#00adc2"
    }
  }, [_vm._v(_vm._s(_vm.getSelectedDateRange))])], 1), _vm._v(" "), _c("vs-dropdown-menu", [_c("div", {
    staticClass: "p-3"
  }, [_vm.onHomeTabSelected ? _c("div", {
    staticClass: "flex items-center justify-between pb-5"
  }, [_c("vs-radio", {
    staticClass: "px-base",
    attrs: {
      "vs-name": "loadDirection",
      "vs-value": "all"
    },
    on: {
      change: _vm.getAllTrackings
    },
    model: {
      value: _vm.loadDirection,
      callback: function callback($$v) {
        _vm.loadDirection = $$v;
      },
      expression: "loadDirection"
    }
  }, [_vm._v("In/Out")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "px-base",
    attrs: {
      "vs-name": "loadDirection",
      "vs-value": "inbound"
    },
    on: {
      change: _vm.getAllTrackings
    },
    model: {
      value: _vm.loadDirection,
      callback: function callback($$v) {
        _vm.loadDirection = $$v;
      },
      expression: "loadDirection"
    }
  }, [_vm._v("Inbound")]), _vm._v(" "), _c("vs-radio", {
    attrs: {
      "vs-name": "loadDirection",
      "vs-value": "outbound"
    },
    on: {
      change: _vm.getAllTrackings
    },
    model: {
      value: _vm.loadDirection,
      callback: function callback($$v) {
        _vm.loadDirection = $$v;
      },
      expression: "loadDirection"
    }
  }, [_vm._v("Outbound")])], 1) : _vm._e(), _vm._v(" "), _vm.onHomeTabSelected ? _c("div", {
    staticClass: "flex items-center justify-between pb-5"
  }, [_c("vs-radio", {
    staticClass: "px-base",
    attrs: {
      "vs-name": "filter",
      "vs-value": "PU/Del"
    },
    on: {
      change: _vm.getAllTrackings
    },
    model: {
      value: _vm.filter,
      callback: function callback($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  }, [_vm._v("PU/Del")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "px-base",
    attrs: {
      "vs-name": "filter",
      "vs-value": "pickup"
    },
    on: {
      change: _vm.getAllTrackings
    },
    model: {
      value: _vm.filter,
      callback: function callback($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  }, [_vm._v("Pick Up")]), _vm._v(" "), _c("vs-radio", {
    attrs: {
      "vs-name": "filter",
      "vs-value": "delivery"
    },
    on: {
      change: _vm.getAllTrackings
    },
    model: {
      value: _vm.filter,
      callback: function callback($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  }, [_vm._v("Delivery")])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col-reverse sm:flex-row"
  }, [_c("div", [_c("div", {
    staticClass: "relative"
  }, [_c("vs-icon", {
    staticClass: "calendar-icon",
    attrs: {
      icon: "event_note",
      color: "#7367F0"
    }
  }), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.flat_pikr_config
    },
    on: {
      "on-change": _vm.handleChangeDate
    },
    model: {
      value: _vm.selectedDateRange,
      callback: function callback($$v) {
        _vm.selectedDateRange = $$v;
      },
      expression: "selectedDateRange"
    }
  })], 1)])])])])], 1), _vm._v(" "), _vm.accessLevel == 1 ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.onHomeTabSelected,
      expression: "!onHomeTabSelected"
    }],
    staticClass: "px-2 cursor-pointer",
    on: {
      click: _vm.handleSpreadsheetShare
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "share",
      color: "primary"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-primary"
  }, [_vm._v("Share")])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.onHomeTabSelected,
      expression: "!onHomeTabSelected"
    }],
    staticClass: "px-2 cursor-pointer",
    on: {
      click: _vm.refreshSpreadsheet
    }
  }, [_c("vs-icon", {
    attrs: {
      size: "small",
      icon: "autorenew"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Refresh")])], 1), _vm._v(" "), _vm._l(_vm.viewOptions, function (items) {
    return _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.onHomeTabSelected,
        expression: "onHomeTabSelected"
      }],
      key: items.name,
      staticClass: "px-2 cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.changeView(items.name);
        }
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: items.icon,
        color: items.active ? "primary" : ""
      }
    }), _vm._v(" "), _c("span", {
      class: items.active ? "text-primary" : ""
    }, [_vm._v(_vm._s(items.name))])], 1);
  })], 2)])]), _vm._v(" "), !_vm.isUserBrokerOrShipper ? [_vm.onHomeTabSelected ? _c("div", [!_vm.viewOption[2].active ? _c("div", [_c("Trucking", {
    attrs: {
      options: !_vm.viewOption[0].active
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.viewOption[1].active,
      expression: "!viewOption[1].active"
    }],
    staticClass: "mt-5",
    attrs: {
      id: "simple-calendar-app"
    }
  }, [_c("calendar-table", {
    attrs: {
      calendar: _vm.calendar,
      calendarsDates: _vm.calendarsDates,
      calendarEvent: _vm.simpleCalendarEvents,
      selectedDateRange: _vm.selectedDateRange
    },
    on: {
      moveDateToRight: _vm.moveDateToRight,
      moveDateToLeft: _vm.moveDateToLeft,
      refreshCalendar: _vm.refreshCalendar,
      getTracking: _vm.getAllTrackings
    }
  })], 1)]) : _c("div", [_vm.spreadsheetForSpecificUser ? _c("spreadsheet", {
    ref: "spreadsheet",
    attrs: {
      selectedSheetId: _vm.selectedTab,
      selectedDateRange: _vm.spreadsheetDateRange
    }
  }) : _vm._e()], 1)] : [_c("Trucking", {
    attrs: {
      options: true
    }
  })], _vm._v(" "), !_vm.onHomeTabSelected ? _c("vs-popup", {
    attrs: {
      title: "Share ".concat(_vm.selectedSpreadsheetName),
      active: _vm.sharePopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.sharePopup = $event;
      }
    }
  }, [_c("share-spreadsheet-popup", {
    ref: "accessLevelRef",
    attrs: {
      spreadsheetId: _vm.selectedTab
    }
  })], 1) : _vm._e()], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=template&id=20587124&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=template&id=20587124& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    attrs: {
      id: "cardDetails"
    }
  }, [_c("vs-row", {
    attrs: {
      "vs-w": "12"
    }
  }, [_c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-between w-full"
  }, [_c("div", [_vm.payload[0].is_private ? _c("div", {
    staticClass: "space-x-2 ml-4"
  }, [_vm._v("\n          This task is not visible to outside.\n        ")]) : _c("div", {
    staticClass: "space-x-2",
    staticStyle: {
      float: "left",
      "margin-left": "1rem"
    }
  }, [_vm._v("\n          This task is visible to everyone with the link.\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "space-x-2 flex items-center ml-4"
  }, [_c("div", [_vm.payload[0].is_private ? _c("vs-button", {
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.changeAccess
    }
  }, [_vm._v("Make public")]) : _c("vs-button", {
    attrs: {
      color: "danger",
      type: "border"
    },
    on: {
      click: _vm.changeAccess
    }
  }, [_vm._v("Make private")])], 1), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("vs-dropdown", {
    staticClass: "progress-btn float-right mx-2",
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
    }
  }, [_vm._l(_vm.openLoadStatusList, function (items) {
    return _c("div", {
      key: items.id
    }, [_vm.payload[0].load_status == items.id ? _c("vs-button", {
      staticClass: "flex items-center",
      attrs: {
        color: items.color
      }
    }, [_vm._v("\n                " + _vm._s(items.name) + "\n                "), _c("vs-icon", {
      attrs: {
        icon: "chevron_right",
        size: "20px"
      }
    })], 1) : _vm._e()], 1);
  }), _vm._v(" "), _vm.payload[0].load_status == "invoice_created" || _vm.payload[0].load_status == "payment_requested" || _vm.payload[0].load_status == "invoice_paid" ? _c("vs-button", {
    staticClass: "flex items-center",
    attrs: {
      color: "#28C76F"
    }
  }, [_vm._v("\n              Completed\n              "), _c("vs-icon", {
    attrs: {
      icon: "chevron_right",
      size: "20px"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("vs-dropdown-menu", [_c("div", {
    staticClass: "py-2 px-5"
  }, _vm._l(_vm.openLoadStatusList, function (items) {
    return _c("div", {
      key: items.id,
      staticClass: "flex items-center cursor-pointer py-1",
      class: {
        "font-bold": _vm.payload[0].load_status == items.id
      },
      on: {
        click: function click($event) {
          return _vm.updateLoadStatus(items.id);
        }
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: "stop",
        size: "22px",
        color: items.color
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "text-sm"
    }, [_vm._v(_vm._s(items.name))])], 1);
  }), 0)])], 2), _vm._v(" "), _c("vs-button", {
    staticClass: "mx-2",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.goToLoad
    }
  }, [_vm._v("Edit Load")]), _vm._v(" "), _c("div", {
    staticClass: "email-collaborator mx-2"
  }, [_c("div", {
    on: {
      click: _vm.getCollaboratorData
    }
  }, [_c("img", {
    staticClass: "icon-size",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/load_collabrator_icon.svg */ "./resources/assets/images/custom/load_collabrator_icon.svg")
    }
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.toggleDropdown,
      expression: "toggleDropdown"
    }],
    staticClass: "user-list-dropdown"
  }, [_c("div", {
    staticClass: "chip-container"
  }, [_vm._l(_vm.chips, function (chip, i) {
    return _c("div", {
      key: chip.label,
      staticClass: "chip"
    }, [_vm._v("\n                  " + _vm._s(chip.email) + "\n                  "), _c("i", {
      staticClass: "material-icons",
      on: {
        click: function click($event) {
          return _vm.deleteChip(i, chip.id);
        }
      }
    }, [_vm._v("clear")])]);
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.currentInput,
      expression: "currentInput"
    }],
    attrs: {
      placeholder: "Add a collaborator email..."
    },
    domProps: {
      value: _vm.currentInput
    },
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.saveChip.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.currentInput = $event.target.value;
      }
    }
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "vs-dropdown--menu--after top-0"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mr-5",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.shareClick.apply(null, arguments);
      }
    }
  }, [_c("img", {
    staticClass: "icon-size mt-3",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/share_icon.svg */ "./resources/assets/images/custom/share_icon.svg")
    }
  })]), _vm._v(" "), _c("vs-dropdown", {
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
    }
  }, [_c("img", {
    staticClass: "icon-size cursor-pointer",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/vert.svg */ "./resources/assets/images/custom/vert.svg")
    }
  }), _vm._v(" "), _c("vs-dropdown-menu", [_c("vs-dropdown-item", {
    on: {
      click: _vm.fullScreenButton
    }
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("vs-icon", {
    staticClass: "mr-3",
    attrs: {
      title: "Fullscreen",
      icon: "fullscreen"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Fullscreen")])], 1)])], 1)], 1)], 1)])]), _vm._v(" "), _vm.make_private_show ? _c("vs-divider") : _vm._e()], 1), _vm._v(" "), _c("LoadInfo", {
    ref: "loadInfo",
    attrs: {
      data: _vm.data
    },
    on: {
      setPayloadData: _vm.setPayloadData
    }
  }), _vm._v(" "), _c("load-sidebar", {
    attrs: {
      isSidebarActive: _vm.addNewDataSidebar,
      data: _vm.sidebarData
    },
    on: {
      closeSidebar: _vm.toggleDataSidebar
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=template&id=1a72e732&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=template&id=1a72e732&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    ref: "calendar-container",
    staticClass: "vx-card flex",
    staticStyle: {
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "table table-data"
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.calendarTableData, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "tr"
    }, [_c("div", {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.truck_number))]), _vm._v(" "), _c("div", {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.trailer_number))]), _vm._v(" "), _c("div", {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.equipment_type))]), _vm._v(" "), _c("div", {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.driver_name))])]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "table table-calendar"
  }, [_c("div", {
    staticClass: "tr header-table"
  }, [_c("div", {
    staticClass: "calendar-icons"
  }, [_c("span", {
    staticClass: "left",
    on: {
      click: function click($event) {
        return _vm.$emit("moveDateToLeft");
      }
    }
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      height: "30px",
      viewBox: "0 0 24 24",
      width: "30px",
      fill: "#7367F0"
    }
  }, [_c("path", {
    attrs: {
      d: "M0 0h24v24H0z",
      fill: "none"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "right",
    on: {
      click: function click($event) {
        return _vm.$emit("moveDateToRight");
      }
    }
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      height: "30px",
      viewBox: "0 0 24 24",
      width: "30px",
      fill: "#7367F0"
    }
  }, [_c("path", {
    attrs: {
      d: "M0 0h24v24H0z",
      fill: "none"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }
  })])])]), _vm._v(" "), _vm._l(_vm.calendarsDates, function (dates) {
    return _c("div", {
      key: dates.day,
      staticClass: "td"
    }, [_c("div", {
      staticClass: "flex flex-col p-3"
    }, [_c("span", {
      staticClass: "font-bold",
      staticStyle: {
        color: "#7367f0"
      }
    }, [_vm._v(_vm._s(dates.weekday) + " " + _vm._s(dates.day))]), _vm._v(" "), _c("span", [_vm._v(_vm._s(dates.month))])])]);
  })], 2), _vm._v(" "), _vm.calendarEvent.length ? _c("div", _vm._l(_vm.calendarEvent, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "tr body"
    }, [_c("div", {
      staticClass: "td"
    }, [_c("div", {
      staticClass: "bar",
      class: item.classes,
      style: [item.label.load_status == "open" ? {
        background: "#E63292"
      } : item.label.load_status == "assign" ? {
        background: "#FF9F43"
      } : {
        background: "#7367F0"
      }],
      attrs: {
        title: item.label.destination.date
      },
      on: {
        click: function click($event) {
          return _vm.cardDetails(item);
        }
      }
    }, [_vm._v("\n              " + _vm._s(_vm.computeOriginDestinationString(item.label)) + "\n              "), _c("br"), _vm._v("\n              " + _vm._s(_vm.computePuDelTimeString(item.label.origin, "P: ")) + "\n              " + _vm._s(_vm.computePuDelTimeString(item.label.destination, "D: ")) + "\n              " + _vm._s(_vm.showdispatcherNotesHere(item.label)) + "\n            ")])])]);
  }), 0) : _c("div", {
    staticClass: "card-details card-container"
  }, [_vm._m(1)])])]), _vm._v(" "), _c("vs-popup", {
    attrs: {
      fullscreen: "",
      title: "Truck details",
      active: _vm.barPopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.barPopup = $event;
      }
    }
  }, [_c("calendar-details", {
    ref: "cardDetail",
    attrs: {
      data: _vm.CardDetailsData
    },
    on: {
      refreshCalendar: _vm.getAllTrackings,
      closePopup: _vm.closePopup
    }
  })], 1)], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "tr header-table"
  }, [_c("div", {
    staticClass: "td"
  }, [_vm._v("Truck")]), _vm._v(" "), _c("div", {
    staticClass: "td"
  }, [_vm._v("Trailer")]), _vm._v(" "), _c("div", {
    staticClass: "td"
  }, [_vm._v("Type")]), _vm._v(" "), _c("div", {
    staticClass: "td"
  }, [_vm._v("Driver")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card-empty"
  }, [_c("h4", {
    staticClass: "mb-4"
  }, [_vm._v("Welcome to Ezpapel")]), _vm._v(" "), _c("div", {
    staticClass: "img-box"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/ic_bot.png */ "./resources/assets/images/custom/ic_bot.png"),
      alt: "ic_bot"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "mt-4 text-center"
  }, [_vm._v("Please select dates there are no events")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=template&id=61ffc23c&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=template&id=61ffc23c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    attrs: {
      id: "map"
    }
  }, [_c("vs-button", {
    staticClass: "traffic-toggle-button",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        return _vm.toggleTrafficLayer();
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.showTrafficLayer ? "Hide" : "Show") + " Traffic\n  ")]), _vm._v(" "), _c("GmapMap", {
    ref: "mapRef",
    staticClass: "mt-6 mx-auto gmap",
    style: _vm.options ? "height: 80vh;" : "height: 60vh",
    attrs: {
      center: _vm.mapCenter,
      zoom: 4,
      "map-type-id": "roadmap"
    }
  }, [_c("GmapCluster", [!_vm.isUserBrokerOrShipper ? [_c("gmap-info-window", {
    attrs: {
      options: _vm.infoOptions,
      position: {
        lat: Number(_vm.infoWindowDetails.latitude),
        lng: Number(_vm.infoWindowDetails.longitude)
      },
      opened: _vm.infoWinOpen
    },
    on: {
      closeclick: function closeclick($event) {
        _vm.infoWinOpen = false;
      }
    }
  }, [_vm.infoWindowDetails.truck_number ? _c("div", [_c("div", [_c("b", {
    staticClass: "text-dark"
  }, [_vm._v(_vm._s(_vm.infoWindowDetails.truck_number))]), _vm._v(" "), _c("span", {
    staticClass: "text-xs ml-2"
  }, [_vm._v(_vm._s(_vm.infoWindowDetails.load_id ? "Load " + _vm.infoWindowDetails.load_number : ""))])]), _vm._v(" "), _vm.infoWindowDetails.load_id ? _c("div", {
    staticClass: "address"
  }, [_c("div", {
    staticClass: "path-border-container"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/sender_icon.svg */ "./resources/assets/images/custom/sender_icon.svg")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "path-border"
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/receiver_icon.svg */ "./resources/assets/images/custom/receiver_icon.svg")
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col justify-between"
  }, [_c("div", [_c("h6", [_vm._v("\n                    " + _vm._s(_vm.infoWindowDetails.origin) + "\n                  ")])]), _vm._v(" "), _c("div", [_c("h6", [_vm._v("\n                    " + _vm._s(_vm.infoWindowDetails.destination) + "\n                  ")])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "border-window"
  }), _vm._v(" "), _c("div", [_c("table", [_c("tr", {
    staticClass: "mt-3"
  }, [_c("th", [_c("span", {
    staticClass: "font-light text-dark"
  }, [_vm._v("Current Location")])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "max-width": "150px"
    }
  }, [_c("span", {
    staticClass: "text-dark font-bold"
  }, [_vm._v(_vm._s(_vm.infoWindowDetails.formatted_location))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "border-window"
  }), _vm._v(" "), _vm.infoWindowDetails.load_id ? _c("div", [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.viewDetails();
      }
    }
  }, [_vm._v("\n                VIEW DETAILS\n              ")])]) : _vm._e()]) : _c("div", [_c("div", [_c("h6", {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.infoWindowDetails.name))])])])]), _vm._v(" "), _vm._l(_vm.trucks, function (truck) {
    return _c("gmap-marker", {
      key: "t" + truck.truck_id,
      attrs: {
        position: {
          lat: truck.latitude,
          lng: truck.longitude
        },
        icon: __webpack_require__(/*! @assets/images/custom/marker_truck_circle.svg */ "./resources/assets/images/custom/marker_truck_circle.svg"),
        label: {
          text: truck.truck_number,
          color: "#fff",
          fontSize: "12px",
          className: "marker-label"
        },
        title: truck.truck_number,
        clickable: true
      },
      on: {
        click: function click($event) {
          return _vm.toggleInfoWindow(truck);
        }
      }
    });
  }), _vm._v(" "), _vm._l(_vm.drivers, function (driver) {
    return _c("gmap-marker", {
      key: "d" + driver.userId,
      attrs: {
        position: {
          lat: Number(driver.latitude),
          lng: Number(driver.longitude)
        },
        label: {
          text: driver.name,
          color: "black",
          fontSize: "15px",
          className: "marker-label"
        },
        clickable: true
      },
      on: {
        click: function click($event) {
          return _vm.toggleInfoWindow(driver);
        }
      }
    });
  })] : _vm._l(_vm.loads, function (load) {
    return _c("gmap-marker", {
      key: "t" + load.loadId,
      attrs: {
        position: {
          lat: load.location.lat,
          lng: load.location.lng
        },
        icon: __webpack_require__(/*! @assets/images/custom/marker_truck_circle.svg */ "./resources/assets/images/custom/marker_truck_circle.svg"),
        label: {
          text: "".concat(load.loadNumber),
          color: "#fff",
          fontSize: "12px",
          className: "marker-label"
        },
        title: "".concat(load.loadNumber),
        clickable: false
      }
    });
  })], 2)], 1), _vm._v(" "), _c("vs-popup", {
    attrs: {
      fullscreen: "",
      title: "Truck details",
      active: _vm.detailsPopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.detailsPopup = $event;
      }
    }
  }, [_c("calendar-details", {
    ref: "cardDetail",
    attrs: {
      data: _vm.calendarDetails
    }
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: simple-calnedar.scss\n    Description: Simple Calendar app's styles. This is imported in SimpleCalendar.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir] #simple-calendar-app .theme-default.cv-wrapper[data-v-1a72e732] {\n  padding: 20px;\n}\n[dir] #simple-calendar-app .theme-default .cv-header-days[data-v-1a72e732] {\n  border-bottom: 1px solid #ddd;\n}\n#simple-calendar-app .theme-default .cv-header[data-v-1a72e732],\n#simple-calendar-app .theme-default .cv-header-day[data-v-1a72e732] {\n  font-weight: bold;\n}\n[dir] #simple-calendar-app .theme-default .cv-header[data-v-1a72e732], [dir] #simple-calendar-app .theme-default .cv-header-day[data-v-1a72e732] {\n  background-color: transparent;\n}\n[dir] #simple-calendar-app .theme-default .cv-day.draghover[data-v-1a72e732] {\n  box-shadow: inset 0 0 0.2em 0.2em rgba(var(--vs-primary), 1);\n}\n[dir] #simple-calendar-app .theme-default .cv-day[data-v-1a72e732]:not(.outsideOfMonth) {\n  background-color: transparent !important;\n}\n[dir] #simple-calendar-app .theme-default .cv-day.outsideOfMonth[data-v-1a72e732] {\n  background-color: rgba(241, 241, 241, 0.4);\n}\n[dir] #simple-calendar-app .theme-default .cv-day .cv-day-number[data-v-1a72e732] {\n  padding: 1rem;\n}\n@media screen and (max-width: 400px) {\n[dir] #simple-calendar-app .theme-default .cv-day .cv-day-number[data-v-1a72e732] {\n    padding: 0;\n    margin: 5px;\n}\n}\n#simple-calendar-app .theme-default .cv-day.today .cv-day-number[data-v-1a72e732] {\n  display: inline-table;\n  color: #fff;\n  font-weight: 600;\n  min-width: 2rem;\n  min-height: 2rem;\n}\n[dir] #simple-calendar-app .theme-default .cv-day.today .cv-day-number[data-v-1a72e732] {\n  background-color: rgba(var(--vs-primary), 1);\n  border-radius: 50%;\n  padding: 0.43rem;\n  margin: 0.4rem;\n  text-align: center;\n}\n@media screen and (max-width: 400px) {\n[dir] #simple-calendar-app .theme-default .cv-day.today .cv-day-number[data-v-1a72e732] {\n    margin: 5px;\n    padding: 0.3rem;\n}\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week[data-v-1a72e732] {\n  min-height: 20%;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event[data-v-1a72e732] {\n  color: #fff;\n  font-weight: 500;\n}\n[dir] #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event[data-v-1a72e732] {\n  border: none;\n}\n[dir=ltr] #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event[data-v-1a72e732] {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n[dir=rtl] #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event[data-v-1a72e732] {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n[dir] #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.event-primary[data-v-1a72e732] {\n  background: rgba(var(--vs-primary), 1) !important;\n}\n[dir] #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.event-warning[data-v-1a72e732] {\n  background: rgba(var(--vs-warning), 1) !important;\n}\n[dir] #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.event-success[data-v-1a72e732] {\n  background: rgba(var(--vs-success), 1) !important;\n}\n[dir] #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.event-danger[data-v-1a72e732] {\n  background: rgba(var(--vs-danger), 1) !important;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.toBeContinued[data-v-1a72e732]:after, #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.continued[data-v-1a72e732]:before {\n  color: #fff !important;\n}\n[dir] #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event[data-v-1a72e732]:hover {\n  cursor: pointer;\n}\n[dir] #simple-calendar-app .theme-default .cv-weeks .cv-week:first-of-type .cv-day[data-v-1a72e732] {\n  border-top: none;\n}\n.theme-dark .calendar__label-container .con-vs-chip[data-v-1a72e732] {\n  color: #fff !important;\n}\n[dir] .theme-dark #simple-calendar-app .theme-default .cv-day[data-v-1a72e732], [dir] .theme-dark #simple-calendar-app .theme-default .cv-event[data-v-1a72e732], [dir] .theme-dark #simple-calendar-app .theme-default .cv-header-day[data-v-1a72e732], [dir] .theme-dark #simple-calendar-app .theme-default .cv-header-days[data-v-1a72e732], [dir] .theme-dark #simple-calendar-app .theme-default .cv-week[data-v-1a72e732], [dir] .theme-dark #simple-calendar-app .theme-default .cv-weeks[data-v-1a72e732] {\n  border-color: #414561;\n}\n.theme-dark #simple-calendar-app .theme-default .cv-header button[data-v-1a72e732] {\n  color: #c2c6dc;\n}\n[dir] .theme-dark #simple-calendar-app .theme-default .cv-day.outsideOfMonth[data-v-1a72e732] {\n  background-color: #1a2140;\n}\n#simple-calendar-app .theme-default .cv-day.today .cv-day-number[data-v-1a72e732] {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n[dir] #simple-calendar-app .theme-default .cv-day.today .cv-day-number[data-v-1a72e732] {\n  background-color: rgba(var(--vs-primary), 1);\n  border-radius: 50%;\n  margin: 0.4rem;\n  text-align: center;\n}\n@media (min-width: 1500px) {\n.vx-card[data-v-1a72e732] {\n    justify-content: center;\n}\n}\n[dir] .cv-day[data-v-1a72e732], [dir] .cv-weeks[data-v-1a72e732] {\n  border-style: none;\n}\n[dir=ltr] #simple-calendar-app .theme-default.cv-wrapper[data-v-1a72e732] {\n  padding-left: 2px;\n}\n[dir=rtl] #simple-calendar-app .theme-default.cv-wrapper[data-v-1a72e732] {\n  padding-right: 2px;\n}\n[dir] .calendar-border[data-v-1a72e732] {\n  border: 0.5px solid #e9ecef;\n  margin-top: 54px;\n}\n.calendar-row[data-v-1a72e732] {\n  position: absolute;\n  width: 100%;\n}\n.calendar-wrapper[data-v-1a72e732] {\n  width: 100%;\n  position: relative;\n}\n.table[data-v-1a72e732] {\n  display: table;\n  border-collapse: collapse;\n}\n.table .tr[data-v-1a72e732] {\n  display: table-row;\n  height: 80px;\n}\n[dir] .table .tr[data-v-1a72e732] {\n  border: 0.5px solid #ddd;\n}\n[dir=ltr] .table .tr[data-v-1a72e732] {\n  border-left: none;\n}\n[dir=rtl] .table .tr[data-v-1a72e732] {\n  border-right: none;\n}\n.table .tr[data-v-1a72e732]:first-child {\n  color: #5e5873;\n  height: 80px;\n}\n.table .tr .td[data-v-1a72e732] {\n  display: table-cell;\n  height: 80px;\n  vertical-align: middle;\n}\n[dir] .table .tr .td[data-v-1a72e732] {\n  padding: 8px 17px;\n}\n\n/* Not necessary for table styling */\n[dir] .div-table[data-v-1a72e732], [dir] .table-tag[data-v-1a72e732] {\n  margin: 2em;\n}\n[dir=ltr] .div-table[data-v-1a72e732], [dir=ltr] .table-tag[data-v-1a72e732] {\n  float: left;\n}\n[dir=rtl] .div-table[data-v-1a72e732], [dir=rtl] .table-tag[data-v-1a72e732] {\n  float: right;\n}\n[dir] .div-table .title[data-v-1a72e732], [dir] .table-tag .title[data-v-1a72e732] {\n  text-align: center;\n  padding-bottom: 0.5em;\n}\n.bar[data-v-1a72e732] {\n  color: #fff;\n  font-size: 12px;\n}\n[dir] .bar[data-v-1a72e732] {\n  background: #7367f0;\n  border-radius: 5px;\n  padding: 3px 8px;\n  cursor: pointer;\n}\n.table-calendar[data-v-1a72e732] {\n  display: table;\n  border-collapse: collapse;\n  width: 70%;\n  display: flex !important;\n  flex-direction: column;\n}\n@media (max-width: 991px) {\n.table-calendar[data-v-1a72e732] {\n    width: 830px;\n}\n}\n.table-calendar .header-table[data-v-1a72e732] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 1200px) {\n.table-calendar .header-table[data-v-1a72e732] {\n    justify-content: flex-start;\n}\n}\n.table-calendar .header-table .calendar-icons[data-v-1a72e732] {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n.table-calendar .header-table .calendar-icons .left[data-v-1a72e732] {\n  position: relative;\n}\n[dir] .table-calendar .header-table .calendar-icons .left[data-v-1a72e732] {\n  cursor: pointer;\n}\n[dir=ltr] .table-calendar .header-table .calendar-icons .left[data-v-1a72e732] {\n  right: 28px;\n}\n[dir=rtl] .table-calendar .header-table .calendar-icons .left[data-v-1a72e732] {\n  left: 28px;\n}\n[dir] .table-calendar .header-table .calendar-icons .right[data-v-1a72e732] {\n  cursor: pointer;\n}\n.table-calendar .header-table .td[data-v-1a72e732] {\n  width: 16%;\n}\n.table-calendar .tr.body[data-v-1a72e732] {\n  display: flex;\n}\n[dir] .table-calendar .tr.body[data-v-1a72e732] {\n  border-top: none !important;\n}\n.table-calendar .tr.body .td[data-v-1a72e732] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n.table-calendar .tr.body .td .bar[data-v-1a72e732] {\n  position: relative;\n  overflow: auto;\n  max-height: 70px;\n}\n.table-data[data-v-1a72e732] {\n  width: 50%;\n}\n[dir=ltr] .offset-0[data-v-1a72e732] {\n  left: 0;\n}\n[dir=rtl] .offset-0[data-v-1a72e732] {\n  right: 0;\n}\n[dir=ltr] .offset-1[data-v-1a72e732] {\n  left: 15%;\n}\n[dir=rtl] .offset-1[data-v-1a72e732] {\n  right: 15%;\n}\n[dir=ltr] .offset-2[data-v-1a72e732] {\n  left: 30%;\n}\n[dir=rtl] .offset-2[data-v-1a72e732] {\n  right: 30%;\n}\n[dir=ltr] .offset-3[data-v-1a72e732] {\n  left: 45%;\n}\n[dir=rtl] .offset-3[data-v-1a72e732] {\n  right: 45%;\n}\n[dir=ltr] .offset-4[data-v-1a72e732] {\n  left: 60%;\n}\n[dir=rtl] .offset-4[data-v-1a72e732] {\n  right: 60%;\n}\n[dir=ltr] .offset-5[data-v-1a72e732] {\n  left: 74%;\n}\n[dir=rtl] .offset-5[data-v-1a72e732] {\n  right: 74%;\n}\n[dir=ltr] .offset-6[data-v-1a72e732] {\n  left: 89%;\n}\n[dir=rtl] .offset-6[data-v-1a72e732] {\n  right: 89%;\n}\n@media (max-width: 990px) {\n.width-0[data-v-1a72e732] {\n    width: 97px;\n}\n.width-1[data-v-1a72e732] {\n    width: 194px;\n}\n.width-2[data-v-1a72e732] {\n    width: 308px;\n}\n.width-3[data-v-1a72e732] {\n    width: 445px;\n}\n.width-4[data-v-1a72e732] {\n    width: 550px;\n}\n.width-5[data-v-1a72e732] {\n    width: 688px;\n}\n}\n.width-0[data-v-1a72e732] {\n  width: 14%;\n}\n.width-1[data-v-1a72e732] {\n  width: 28%;\n}\n.width-2[data-v-1a72e732] {\n  width: 43%;\n}\n.width-3[data-v-1a72e732] {\n  width: 57%;\n}\n.width-4[data-v-1a72e732] {\n  width: 71%;\n}\n.width-5[data-v-1a72e732] {\n  width: 86%;\n}\n.width-6[data-v-1a72e732] {\n  width: 100%;\n}\n.text-truncate[data-v-1a72e732] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 991px) {\n.table-calendar .header-table .td[data-v-1a72e732] {\n    width: 120px;\n}\n}\n.card-container[data-v-1a72e732] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 991px) {\n[dir] .m-padding[data-v-1a72e732] {\n    padding: 0.6rem 1.25rem;\n}\n}\n.card-details[data-v-1a72e732] {\n  height: 100%;\n  width: 95%;\n}\n[dir] .card-details[data-v-1a72e732] {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: none;\n}\n[dir=ltr] .card-details[data-v-1a72e732] {\n  margin-left: auto;\n}\n[dir=rtl] .card-details[data-v-1a72e732] {\n  margin-right: auto;\n}\n@media (max-width: 991px) {\n.card-details[data-v-1a72e732] {\n    width: 100%;\n}\n[dir] .card-details[data-v-1a72e732] {\n    box-shadow: none;\n}\n[dir=ltr] .card-details[data-v-1a72e732] {\n    margin-left: 0;\n}\n[dir=rtl] .card-details[data-v-1a72e732] {\n    margin-right: 0;\n}\n}\n@media (max-width: 991px) {\n.card-details .heading[data-v-1a72e732] {\n    font-size: 1.2rem;\n}\n}\n.card-details .card-empty[data-v-1a72e732] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.card-details .card-empty .img-box[data-v-1a72e732] {\n  width: 150px;\n}\n.card-details .card-empty .img-box img[data-v-1a72e732] {\n  width: 100%;\n  height: 100%;\n}\n[dir] .card-details .card-load-details[data-v-1a72e732] {\n  border: 1px solid #c5bfff;\n  border-radius: 20px;\n  margin-top: 16px;\n}\n[dir=ltr] .card-details .card-left[data-v-1a72e732] {\n  padding-right: 30px;\n}\n[dir=rtl] .card-details .card-left[data-v-1a72e732] {\n  padding-left: 30px;\n}\n@media (max-width: 991px) {\n[dir=ltr] .card-details .card-left[data-v-1a72e732] {\n    padding-right: 0;\n}\n[dir=rtl] .card-details .card-left[data-v-1a72e732] {\n    padding-left: 0;\n}\n}\n.card-details .card-left h3[data-v-1a72e732] {\n  font-size: 12px;\n  font-weight: 600;\n}\n@media (max-width: 991px) {\n.card-details .card-left h3[data-v-1a72e732] {\n    font-size: 14px;\n}\n}\n.card-details .card-left h4[data-v-1a72e732] {\n  color: #000;\n  font-size: 13px;\n}\n@media (max-width: 991px) {\n.card-details .card-left h4[data-v-1a72e732] {\n    font-size: 14px;\n}\n}\n.card-details .card-left span[data-v-1a72e732] {\n  color: #6e6b7b;\n  font-size: 11px;\n}\n@media (max-width: 991px) {\n.card-details .card-left span[data-v-1a72e732] {\n    font-size: 12px;\n}\n}\n.card-details .card-left .address[data-v-1a72e732] {\n  display: flex;\n}\n[dir] .card-details .card-left .address[data-v-1a72e732] {\n  margin-top: 20px;\n}\n.card-details .card-left .address .path-border-container[data-v-1a72e732] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[dir=ltr] .card-details .card-left .address .path-border-container[data-v-1a72e732] {\n  margin-right: 10px;\n}\n[dir=rtl] .card-details .card-left .address .path-border-container[data-v-1a72e732] {\n  margin-left: 10px;\n}\n.card-details .card-left .address .path-border-container .path-border[data-v-1a72e732] {\n  height: 42px;\n  width: 1px;\n}\n[dir] .card-details .card-left .address .path-border-container .path-border[data-v-1a72e732] {\n  border: 1px solid rgb(105, 76, 254);\n  border-style: dashed;\n}\n.card-details .card-left .address .path-border-container img[data-v-1a72e732] {\n  width: 18px;\n}\n.card-details .card-left .label[data-v-1a72e732] {\n  font-size: 11px;\n  font-weight: 300;\n  color: rgb(94, 88, 115);\n}\n@media (max-width: 991px) {\n.card-details .card-left .label[data-v-1a72e732] {\n    font-size: 14px;\n}\n}\n[dir=ltr] .card-details .card-left .border[data-v-1a72e732] {\n  border-right: 1px solid #f1f4ff;\n}\n[dir=rtl] .card-details .card-left .border[data-v-1a72e732] {\n  border-left: 1px solid #f1f4ff;\n}\n@media (max-width: 991px) {\n[dir] .card-details .card-left .border[data-v-1a72e732] {\n    border: none;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gmap {\n  height: 400px;\n}\n[dir] .list-box {\n  border: 1px solid #7367f0;\n  padding: 8px;\n  border-radius: 8px;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n.list-box span {\n  color: #7367f0;\n}\n.list-box .small-input {\n  width: 30px;\n}\n[dir] .list-box .small-input {\n  border: none;\n  border-bottom: 1px solid #7367f0;\n}\n[dir] .flatpickr-calendar.inline {\n  box-shadow: none !important;\n}\n.calendar-icon {\n  position: absolute;\n  top: 10px;\n  font-size: 20px;\n}\n[dir=ltr] .calendar-icon {\n  right: 20px;\n}\n[dir=rtl] .calendar-icon {\n  left: 20px;\n}\n.address {\n  display: flex;\n}\n[dir] .address {\n  margin-top: 14px;\n}\n.address .path-border-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[dir=ltr] .address .path-border-container {\n  margin-right: 10px;\n}\n[dir=rtl] .address .path-border-container {\n  margin-left: 10px;\n}\n.address .path-border-container .path-border {\n  height: 21px;\n  width: 1px;\n}\n[dir] .address .path-border-container .path-border {\n  border: 1px solid rgb(105, 76, 254);\n  border-style: dashed;\n}\n.address .path-border-container img {\n  width: 18px;\n}\n.border-window {\n  width: 100%;\n}\n[dir] .border-window {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1607843137);\n  margin: 8px 0;\n}\n.btn {\n  width: 100%;\n  font-size: 12px;\n}\n[dir] .btn {\n  padding: 8px 5px;\n  border-radius: 5px;\n  border: none;\n}\n.btn-primary {\n  color: #fff;\n  text-transform: uppercase;\n}\n[dir] .btn-primary {\n  background: #7367f0;\n  margin-bottom: 10px;\n}\n.btn-outline {\n  color: #7367f0;\n  text-transform: uppercase;\n}\n[dir] .btn-outline {\n  border: 1px solid #7367f0;\n  background: #fff;\n}\n.chip {\n  width: 70px;\n}\n[dir] .chip {\n  background: #e1e7fc;\n  border-radius: 50px;\n  text-align: center;\n  padding: 2px;\n  margin-top: 5px;\n}\n.chip span {\n  color: #7367f0;\n  text-transform: uppercase;\n  font-size: 8px;\n  font-weight: 500;\n}\n.traffic-toggle-button {\n  min-width: 130px;\n}\n[dir] .traffic-toggle-button {\n  margin-top: 30px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #cardDetails {\n  background: #fff;\n}\n.sidebarx {\n  overflow: auto !important;\n}\n.vs-sidebar .vs-sidebar--items {\n  overflow: auto !important;\n}\n#map {\n  width: 100%;\n}\n.list {\n  font-size: 1rem;\n  table-layout: fixed;\n  word-wrap: break-all;\n  word-break: normal;\n  overflow: hidden;\n}\n[dir=ltr] .list {\n  margin-left: 1rem;\n}\n[dir=rtl] .list {\n  margin-right: 1rem;\n}\n.otherList {\n  font-size: 1rem;\n}\n[dir=ltr] .otherList {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .otherList {\n  margin-right: 0.5rem;\n}\n.vs-icon {\n  vertical-align: middle;\n}\n[dir=ltr] .vs-icon {\n  margin-right: 0.5rem;\n}\n[dir=rtl] .vs-icon {\n  margin-left: 0.5rem;\n}\n.vs-dropdown-item-col {\n  line-height: 2rem;\n}\n.vs-sidebar-all {\n  max-width: 100%;\n  z-index: 52010;\n}\n.vs-sidebar {\n  max-width: 1100px;\n  z-index: 52010;\n}\n.con-vs-dropdown--menu {\n  z-index: 52010;\n}\n.vs-sidebar--background {\n  z-index: 52010;\n}\n.header-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n.header-sidebar h4 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n[dir=ltr] .header-sidebar h4 > button {\n  margin-left: 10px;\n}\n[dir=rtl] .header-sidebar h4 > button {\n  margin-right: 10px;\n}\n.footer-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n[dir] .footer-sidebar > button {\n  border: 0px solid rgba(0,0,0,0) !important;\n  border-radius: 0px !important;\n}\n[dir=ltr] .footer-sidebar > button {\n  border-left: 1px solid rgba(0,0,0,0.07) !important;\n}\n[dir=rtl] .footer-sidebar > button {\n  border-right: 1px solid rgba(0,0,0,0.07) !important;\n}\n.chip-container {\n  min-height: 34px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  max-height: 300px;\n  overflow: auto;\n}\n[dir] .chip-container {\n  padding: 7px;\n}\n.chip-container .chip {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n}\n[dir] .chip-container .chip {\n  margin: 2px;\n  background: #f0f0f0;\n  padding: 1px 15px;\n  border: 1px solid #ccc;\n  border-radius: 15px;\n}\n.chip-container .chip i {\n  opacity: 0.56;\n}\n[dir] .chip-container .chip i {\n  cursor: pointer;\n}\n[dir=ltr] .chip-container .chip i {\n  margin-left: 8px;\n}\n[dir=rtl] .chip-container .chip i {\n  margin-right: 8px;\n}\n.chip-container input {\n  flex: 1 1 auto;\n  width: 30px;\n  outline: none;\n}\n[dir] .chip-container input {\n  border: none;\n  padding: 8px;\n}\n.chip-container .material-icons {\n  font-size: 16px;\n}\n.collaborator-icon {\n  width: 43px;\n  height: 38px;\n}\n[dir] .collaborator-icon {\n  cursor: pointer;\n}\n.email-collaborator {\n  position: relative;\n  top: 3px;\n}\n[dir=ltr] .email-collaborator {\n  right: 3px;\n}\n[dir=rtl] .email-collaborator {\n  left: 3px;\n}\n.user-list-dropdown .con-chips {\n  justify-content: start !important;\n}\n[dir=ltr] .user-list-dropdown .vs-icon {\n  margin-right: 0;\n}\n[dir=rtl] .user-list-dropdown .vs-icon {\n  margin-left: 0;\n}\n[dir] .user-list-dropdown .con-chips .con-vs-chip {\n  margin: 0;\n}\n.user-list-dropdown {\n  position: absolute;\n  max-height: 400px;\n  min-width: 235px;\n  z-index: 1000;\n}\n[dir] .user-list-dropdown {\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.333);\n  background-color: #fff;\n}\n[dir=ltr] .user-list-dropdown {\n  right: 2px;\n}\n[dir=rtl] .user-list-dropdown {\n  left: 2px;\n}\n.icon-size {\n  width: 20px;\n  height: 20px;\n}\n.con-vs-dropdown--menu {\n  z-index: 100000 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-simple-calendar/static/css/default.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-simple-calendar/static/css/default.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n**************************************************************\nThis theme is the default shipping theme, it includes some\ndecent defaults, but is separate from the calendar component\nto make it easier for users to implement their own themes w/o\nhaving to override as much.\n**************************************************************\n*/\n\n/* Header */\n\n[dir] .theme-default .cv-header, [dir] .theme-default .cv-header-day {\n  background-color: #f0f0f0;\n}\n\n.theme-default .cv-header .periodLabel {\n  font-size: 1.5em;\n}\n\n.theme-default .cv-header button {\n  color: #7f7f7f;\n}\n\n.theme-default .cv-header button:disabled {\n  color: #ccc;\n}\n\n[dir] .theme-default .cv-header button:disabled {\n  background-color: #f7f7f7;\n}\n\n/* Grid */\n\n[dir] .theme-default .cv-day.past {\n  background-color: #fafafa;\n}\n\n[dir] .theme-default .cv-day.outsideOfMonth {\n  background-color: #f7f7f7;\n}\n\n[dir] .theme-default .cv-day.today {\n  background-color: #ffe;\n}\n\n/* Events */\n\n.theme-default .cv-event {\n  text-overflow: ellipsis;\n}\n\n[dir] .theme-default .cv-event {\n  border-color: #e0e0f0;\n  border-radius: 0.5em;\n  background-color: #e7e7ff;\n}\n\n[dir] .theme-default .cv-event.purple {\n  background-color: #f0e0ff;\n  border-color: #e7d7f7;\n}\n\n[dir] .theme-default .cv-event.orange {\n  background-color: #ffe7d0;\n  border-color: #f7e0c7;\n}\n\n.theme-default .cv-event.continued::before,\n.theme-default .cv-event.toBeContinued::after {\n  content: \" \\21E2   \";\n  color: #999;\n}\n\n[dir=ltr] .theme-default .cv-event.toBeContinued {\n  border-right-style: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n[dir=rtl] .theme-default .cv-event.toBeContinued {\n  border-left-style: none;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.theme-default .cv-event.isHovered.hasUrl {\n  text-decoration: underline;\n}\n\n[dir=ltr] .theme-default .cv-event.continued {\n  border-left-style: none;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n[dir=rtl] .theme-default .cv-event.continued {\n  border-right-style: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n/* Event Times */\n\n.theme-default .cv-event .startTime,\n.theme-default .cv-event .endTime {\n  font-weight: bold;\n  color: #666;\n}\n\n/* Drag and drop */\n\n[dir] .theme-default .cv-day.draghover {\n  box-shadow: inset 0 0 0.2em 0.2em yellow;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=ltr] .px-base {\n  padding-left: 0 !important;\n}[dir=rtl] .px-base {\n  padding-right: 0 !important;\n}\n.spreadsheet-list-width-home-tab {\n  width: 80%;\n  transition: 200ms width;\n}\n@media (max-width: 1099px) {\n.spreadsheet-list-width-home-tab {\n    width: 100%;\n}\n[dir] .spreadsheet-list-width-home-tab {\n    margin-bottom: 15px;\n}\n.spreadsheet-list-width-tab {\n    width: 100% !important;\n}\n[dir] .spreadsheet-list-width-tab {\n    margin-bottom: 15px;\n}\n}\n.spreadsheet-list-width-tab {\n  width: 85%;\n  transition: 200ms width;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-simple-calendar/static/css/default.css":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-simple-calendar/static/css/default.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--7-1!../../../postcss-loader/lib??ref--7-2!./default.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-simple-calendar/static/css/default.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/assets/images/custom/ic_bot.png":
/*!***************************************************!*\
  !*** ./resources/assets/images/custom/ic_bot.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/ic_bot.png?1fa6d2abdccbf6acdf6997340e4ce0ed";

/***/ }),

/***/ "./resources/assets/images/custom/load_collabrator_icon.svg":
/*!******************************************************************!*\
  !*** ./resources/assets/images/custom/load_collabrator_icon.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/load_collabrator_icon.svg?e3346385657abff24cb6c69b5f6da70e";

/***/ }),

/***/ "./resources/assets/images/custom/marker_truck_circle.svg":
/*!****************************************************************!*\
  !*** ./resources/assets/images/custom/marker_truck_circle.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/marker_truck_circle.svg?68e10b566b5a4d0f5c81e64eaf1b84db";

/***/ }),

/***/ "./resources/assets/images/custom/receiver_icon.svg":
/*!**********************************************************!*\
  !*** ./resources/assets/images/custom/receiver_icon.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/receiver_icon.svg?0f7292d425530d8dd026e539b7bf7343";

/***/ }),

/***/ "./resources/assets/images/custom/sender_icon.svg":
/*!********************************************************!*\
  !*** ./resources/assets/images/custom/sender_icon.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sender_icon.svg?80e19a467903c6fad4500014a1dc391d";

/***/ }),

/***/ "./resources/assets/images/custom/vert.svg":
/*!*************************************************!*\
  !*** ./resources/assets/images/custom/vert.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vert.svg?40c6ddf62c1ab31fb567e67a6076419b";

/***/ }),

/***/ "./resources/js/src/views/pages/calender/Calendar.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/Calendar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_d6c8ff24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=d6c8ff24& */ "./resources/js/src/views/pages/calender/Calendar.vue?vue&type=template&id=d6c8ff24&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/calender/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Calendar_vue_vue_type_style_index_0_id_d6c8ff24_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css& */ "./resources/js/src/views/pages/calender/Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_d6c8ff24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_d6c8ff24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/calender/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/calender/Calendar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/Calendar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/calender/Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_d6c8ff24_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=style&index=0&id=d6c8ff24&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_d6c8ff24_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_d6c8ff24_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_d6c8ff24_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_d6c8ff24_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/calender/Calendar.vue?vue&type=template&id=d6c8ff24&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/Calendar.vue?vue&type=template&id=d6c8ff24& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_d6c8ff24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=template&id=d6c8ff24& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/Calendar.vue?vue&type=template&id=d6c8ff24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_d6c8ff24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_d6c8ff24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/calender/CalendarDetails.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/CalendarDetails.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarDetails_vue_vue_type_template_id_20587124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarDetails.vue?vue&type=template&id=20587124& */ "./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=template&id=20587124&");
/* harmony import */ var _CalendarDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CalendarDetails_vue_vue_type_style_index_0_id_20587124_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus& */ "./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CalendarDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarDetails_vue_vue_type_template_id_20587124___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarDetails_vue_vue_type_template_id_20587124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/calender/CalendarDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_style_index_0_id_20587124_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=style&index=0&id=20587124&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_style_index_0_id_20587124_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_style_index_0_id_20587124_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_style_index_0_id_20587124_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_style_index_0_id_20587124_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=template&id=20587124&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=template&id=20587124& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_template_id_20587124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarDetails.vue?vue&type=template&id=20587124& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/CalendarDetails.vue?vue&type=template&id=20587124&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_template_id_20587124___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDetails_vue_vue_type_template_id_20587124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/CalendarTable.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/CalendarTable.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarTable_vue_vue_type_template_id_1a72e732_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarTable.vue?vue&type=template&id=1a72e732&scoped=true& */ "./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=template&id=1a72e732&scoped=true&");
/* harmony import */ var _CalendarTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CalendarTable_vue_vue_type_style_index_0_id_1a72e732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true& */ "./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CalendarTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarTable_vue_vue_type_template_id_1a72e732_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarTable_vue_vue_type_template_id_1a72e732_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a72e732",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/calender/components/CalendarTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_style_index_0_id_1a72e732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=style&index=0&id=1a72e732&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_style_index_0_id_1a72e732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_style_index_0_id_1a72e732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_style_index_0_id_1a72e732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_style_index_0_id_1a72e732_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=template&id=1a72e732&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=template&id=1a72e732&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_template_id_1a72e732_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarTable.vue?vue&type=template&id=1a72e732&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/CalendarTable.vue?vue&type=template&id=1a72e732&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_template_id_1a72e732_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarTable_vue_vue_type_template_id_1a72e732_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/Trucking.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/Trucking.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Trucking_vue_vue_type_template_id_61ffc23c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trucking.vue?vue&type=template&id=61ffc23c& */ "./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=template&id=61ffc23c&");
/* harmony import */ var _Trucking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trucking.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Trucking_vue_vue_type_style_index_0_id_61ffc23c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss& */ "./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Trucking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Trucking_vue_vue_type_template_id_61ffc23c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Trucking_vue_vue_type_template_id_61ffc23c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/calender/components/Trucking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Trucking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_style_index_0_id_61ffc23c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=style&index=0&id=61ffc23c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_style_index_0_id_61ffc23c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_style_index_0_id_61ffc23c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_style_index_0_id_61ffc23c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_style_index_0_id_61ffc23c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=template&id=61ffc23c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=template&id=61ffc23c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_template_id_61ffc23c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Trucking.vue?vue&type=template&id=61ffc23c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/Trucking.vue?vue&type=template&id=61ffc23c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_template_id_61ffc23c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Trucking_vue_vue_type_template_id_61ffc23c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=73.js.map