(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_dragAndDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar/dragAndDrop */ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DispatchCalender',
  components: {
    DragAndDropTimeline: _calendar_dragAndDrop__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    editLoadSidebar: function editLoadSidebar(data) {
      this.$emit('editLoadSidebar', {
        loadId: data
      });
    },
    refreshPageContent: function refreshPageContent() {
      var _ref = this.$refs.dragAndDropTimeline || {},
          refreshPageContent = _ref.refreshPageContent;

      if (refreshPageContent) {
        this.$refs.dragAndDropTimeline.refreshPageContent();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var vue_popperjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-popperjs */ "./node_modules/vue-popperjs/dist/vue-popper.min.js");
/* harmony import */ var vue_popperjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_popperjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_popperjs_dist_vue_popper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-popperjs/dist/vue-popper.css */ "./node_modules/vue-popperjs/dist/vue-popper.css");
/* harmony import */ var vue_popperjs_dist_vue_popper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_popperjs_dist_vue_popper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ganttChart_unit_GanttUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ganttChart/unit/GanttUnit */ "./resources/js/src/components/ganttChart/unit/GanttUnit.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    load: {
      type: Object,
      default: function _default() {}
    },
    isDraggable: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    isTimeLineCard: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    }
  },
  inject: ['timeSectionDayJs'],
  components: {
    Popper: vue_popperjs__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  mounted: function mounted() {// console.log(this.load, 'load');
  },
  data: function data() {
    return {
      formattedLoadStatus: _config_constants__WEBPACK_IMPORTED_MODULE_0__["default"].status.nodeLoadToLabel,
      isDraggingOver: false
    };
  },
  computed: {
    badgeClass: function badgeClass() {
      if (this.load.status == 'open') {
        return 'warning';
      } else if (this.load.status == 'inTransit') {
        return 'primary';
      } else if (this.load.status == 'assign') {
        return 'info';
      } else {
        return 'success';
      }
    },
    getStopClass: function getStopClass() {
      var stopClassDict = {
        shipper: 'pickup',
        leg: 'leg',
        multiPurposeStop: 'terminal',
        receiver: 'delivered'
      };
      return function (type) {
        return stopClassDict[type] || '';
      };
    },
    getStopType: function getStopType() {
      return function (stop) {
        return {
          shipper: 'Pickup',
          leg: 'Leg',
          multiPurposeStop: 'Terminal',
          receiver: 'Delivery'
        }[stop] || '';
      };
    },
    formatStopAddress: function formatStopAddress() {
      var _this = this;

      return function (stop) {
        return "".concat(stop.city, ", ").concat(stop.state || '', " (").concat(_this.dateTimeStringGenerator(stop.date, stop.time), ")");
      };
    },
    singleDayLoad: function singleDayLoad() {
      if (this.isTimeLineCard && Object(_components_ganttChart_unit_GanttUnit__WEBPACK_IMPORTED_MODULE_3__["differenceInDays"])(this.load.startDate, this.load.endDate) < 1) {
        return 'single-day-load';
      }

      return '';
    }
  },
  methods: {
    onDragOver: function onDragOver() {
      this.isDraggingOver = true;
    },
    onDragEnd: function onDragEnd() {
      this.isDraggingOver = false;
      this.$emit('onLoadCardDragEnd', this.load);
    },
    dateTimeStringGenerator: function dateTimeStringGenerator(date, time) {
      if (date || time) {
        var datePart = date ? this.$dayjs(date).format('YYYY-MM-DD') : '';
        var combinedDateTime = time ? "".concat(datePart, " ").concat(time) : datePart;
        var dateTime = this.$dayjs(combinedDateTime, "YYYY-MM-DD".concat(time ? ' HH:mm' : ''));
        var formattedDateTime = dateTime.isValid() ? dateTime.format("MM/DD/YY".concat(time ? ' hh:mm A' : '')) : '';
        return formattedDateTime;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/map */ "./node_modules/@babel/runtime/core-js/map.js");
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_LoadCard_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/LoadCard.vue */ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue");
/* harmony import */ var _mixins_globalMixins__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/mixins/globalMixins */ "./resources/js/src/mixins/globalMixins.js");
/* harmony import */ var _helpers_eventBus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/helpers/eventBus */ "./resources/js/src/helpers/eventBus.js");










function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DragAndDropTimeline',
  components: {
    GanttChart: function GanttChart() {
      return __webpack_require__.e(/*! import() */ 69).then(__webpack_require__.bind(null, /*! ./components/ganttChart */ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/ganttChart/index.vue"));
    },
    LoadCard: _components_LoadCard_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  mixins: [_mixins_globalMixins__WEBPACK_IMPORTED_MODULE_14__["default"]],
  props: {
    returnData: {
      type: Object,
      default: function _default() {
        return {
          loads: false
        };
      }
    },
    parentKey: {
      type: String,
      default: 'planningTimeline'
    },
    showBarsInSingleRow: {
      type: Boolean,
      default: true
    },
    infoClassList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _helpers_eventBus__WEBPACK_IMPORTED_MODULE_15__["EventBus"].$on(_config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].eventBuses.loadChanged, this.getAndProcessData);
              _context.next = 3;
              return this.initData();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function mounted() {
      return _mounted.apply(this, arguments);
    };
  }(),
  watch: {
    timelineDataForGantt: {
      handler: function handler() {
        this.chartRenderKey++;
        this.setHeightOfSideBar();
      },
      deep: true
    },
    loadDriverAssignment: function loadDriverAssignment() {
      console.log('loadDriverAssignment()');
      var load = this.loadToHaveDriver;
      var driver = this.driverToGetLoad;

      if (load && driver) {
        // Smart. Catched a good corner case. Who thought this?
        var isDriverCurrentlyAssigned = false;

        if ((load.drivers || []).length > 0) {
          isDriverCurrentlyAssigned = load.drivers.some(function (loadDriver) {
            return (loadDriver.users || []).some(function (user) {
              return user.id === driver.driverId;
            });
          });
        }

        if (isDriverCurrentlyAssigned) {
          this.clearLoadToAssign();
        } else {
          this.assignDriverToLoad(load, driver);
        }
      } else if (load && !driver) {
        this.clearLoadToAssign();
      } // When we drag and drop, assignDriver is triggered before assignLoad. So
      // driver will first be set, then load.
      // Suppose driver A already has load 101. First drag 101 to A, no effect.
      // Then drag load 102 to A but cancel (do not release), loadToHaveDriver will change to 102.
      // Then drag load 101 to A again, this will cause 102 assigned to A.
      // Won't work, no load can be assigned.
      // else if (load || driver) {
      //   this.clearLoadToAssign();
      // }

    },
    windowWidth: function windowWidth(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.chartRenderKey++;
      }
    }
  },
  data: function data() {
    return {
      nodeLoads: [],
      timelineDataForGantt: [],
      groupedUnassignedLoads: [],
      loadToHaveDriver: null,
      driverToGetLoad: null,
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        defaultDate: [new Date().setDate(new Date().getDate() - 2), new Date().setDate(new Date().getDate() + 6)]
      },
      skip_days: 30,
      ChartHeight: 550,
      chartRenderKey: 0,
      sideBarHeights: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('load', ['allDriverTruckTrailerForLoadDriver']), {
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    },
    dateRange: function dateRange() {
      var _ref = this.selectedDateRange.split(' to ') || [],
          _ref2 = _slicedToArray(_ref, 2),
          startDate = _ref2[0],
          endDate = _ref2[1];

      if (startDate && endDate) {
        return [startDate, endDate];
      } else if (startDate) {
        return [startDate, startDate];
      }

      return [];
    },
    getNameLetters: function getNameLetters() {
      return function (name) {
        var _name$split = name.split(' '),
            _name$split2 = _slicedToArray(_name$split, 2),
            first = _name$split2[0],
            second = _name$split2[1];

        return "".concat(first[0]).concat(second ? second[0] : '').toUpperCase();
      };
    },
    avatarColors: function avatarColors() {
      return function (id) {
        var _getRandomColorById = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getRandomColorById"])(id),
            backgroundColor = _getRandomColorById.backgroundColor,
            color = _getRandomColorById.color;

        return {
          backgroundColor: backgroundColor,
          color: color
        };
      };
    },
    loadDriverAssignment: function loadDriverAssignment() {
      return "".concat(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(this.loadToHaveDriver), ";").concat(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(this.driverToGetLoad));
    }
  }),
  methods: {
    initData: function () {
      var _initData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2() {
        var contentArea;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.configDateFlatPickr();
                contentArea = (document || {}).getElementById('content-area').clientHeight;
                this.ChartHeight = contentArea ? contentArea - 150 : this.clientHeight;
                _context2.next = 6;
                return this.getAndProcessData();

              case 6:
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      return function initData() {
        return _initData.apply(this, arguments);
      };
    }(),
    showBarDetails: function showBarDetails(data) {
      if (this.showBarsInSingleRow && Array.isArray(data)) {// If showBarsInSingleRow is true, then show all bars in single row, data will be array of records
      } else {
        // If showBarsInSingleRow is false, then show each bar in different row, data will be single record
        var _ref3 = data || {},
            loadId = _ref3.loadId;

        if (loadId) this.$emit('updateLoad', loadId);
      }
    },
    // I have changed these code a lot. Not fully reviewed.
    // I have changed these code a lot. Not fully reviewed.
    // I have changed these code a lot. Not fully reviewed.
    assignDriverToLoad: function () {
      var _assignDriverToLoad = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee3(load, driver) {
        var payload, emptyUserDriver;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('assignDriverToLoad()');
                _context3.prev = 1;
                payload = {};

                if (load.status == 'open') {
                  payload.status = 'assign'; // Don't forget to change load status as well...
                }

                emptyUserDriver = load.segmentDrivers.find(function (ld) {
                  return ld.users.length == 0;
                });

                if (emptyUserDriver) {
                  payload.drivers = [{
                    id: emptyUserDriver.id,
                    userIds: [driver.driverId],
                    status: 'assign'
                  }];
                } else {
                  payload.addDrivers = [{
                    userIds: [driver.driverId]
                  }];

                  if (load.stops[0].type == 'leg') {
                    payload.addDrivers[0].fromLeg = 1;
                  } else if (load.stops[load.stops.length - 1].type == 'leg') {
                    payload.addDrivers[0].toLeg = 1;
                  }
                }

                this.clearLoadToAssign(); // Put here otherwise the watch will trigger tons of times.

                this.tempAssignLoad(load, driver); // TODO: Unlike Pipeline, the UI will still take some time to reflect. Why?

                _context3.next = 10;
                return this.$store.dispatch('load/nodeUpdateLoad', {
                  id: load.loadId,
                  payload: payload
                });

              case 10:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Driver Assigned',
                  text: 'Driver assigned successfully.'
                });
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](1);
                this.showErrorMessage(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(_context3.t0));

              case 16:
                _context3.prev = 16;
                _context3.next = 19;
                return this.getAndProcessData();

              case 19:
                return _context3.finish(16);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 13, 16, 20]]);
      }));

      return function assignDriverToLoad(_x, _x2) {
        return _assignDriverToLoad.apply(this, arguments);
      };
    }(),

    /**
     * Move load card to the driver's row in Gantt before query API returns;
     *
     * @param {Object} load
     * @param {Object} driver
     */
    tempAssignLoad: function tempAssignLoad(load, driver) {
      var _this = this;

      console.log('tempAssignLoad()'); // Directly pushing to driver.loads will not work. I think somewhere somebody might did sth like clone.

      var driverToAssign = this.timelineDataForGantt.find(function (timelineData) {
        return timelineData.driverId === driver.driverId;
      });

      var _this$selectedDateRan = this.selectedDateRange.split(' to '),
          _this$selectedDateRan2 = _slicedToArray(_this$selectedDateRan, 2),
          calendarStartDate = _this$selectedDateRan2[0],
          calendarEndDate = _this$selectedDateRan2[1];

      if (load.endDate >= calendarStartDate && load.startDate <= (calendarEndDate || calendarStartDate)) {
        load.startDate += ' ' + (load.startTime ? load.startTime : '00:00');
        load.endDate += ' ' + (load.endTime ? load.endTime : '23:59');
        driverToAssign.loads.push(load);
      }

      var group = this.groupedUnassignedLoads.find(function (g) {
        return g.groupDate == _this.getDateForUnassignedList(load.startDate);
      }); // I don't think it will ever be undefined.

      if (group) {
        group.loads.splice(group.loads.findIndex(function (l) {
          return l.key == load.key;
        }), 1);
      }
    },
    // When finishing drag a load to a driver OR when drag a load already belong to the driver inside this driver's row.
    clearLoadToAssign: function clearLoadToAssign() {
      console.log('clearLoadToAssign()');
      this.loadToHaveDriver = null;
      this.driverToGetLoad = null;
    },
    // When drag a load to a driver, this is triggered first.
    assignDriver: function assignDriver(driver) {
      console.log('assignDriver()');
      this.driverToGetLoad = driver;
    },
    // When drag a load to a driver, this is triggered 2nd.
    assignLoad: function assignLoad(load) {
      console.log('assignLoad()');
      this.loadToHaveDriver = load;
    },
    getAndProcessData: function () {
      var _getAndProcessData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee4() {
        var _this$selectedDateRan3, _this$selectedDateRan4, startDate, endDate, stopFields, params, _ref4, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('getAndProcessData()');
                this.$vs.loading();
                _this$selectedDateRan3 = this.selectedDateRange.split(' to '), _this$selectedDateRan4 = _slicedToArray(_this$selectedDateRan3, 2), startDate = _this$selectedDateRan4[0], endDate = _this$selectedDateRan4[1];
                _context4.prev = 3;
                stopFields = 'order,date,time,city,state';
                params = {
                  startDate: startDate,
                  endDate: endDate || startDate,
                  fields: ['customer:name', 'shippers:' + stopFields, 'receivers:' + stopFields, 'legs:' + stopFields, 'multiPurposeStops:' + stopFields, 'drivers:fromLeg,toLeg,status,truck,trailer,users', 'number', 'status'],
                  mode: ['overlap']
                };
                _context4.next = 8;
                return this.$store.dispatch('load/nodeGetLoads', params);

              case 8:
                _ref4 = _context4.sent;
                payload = _ref4.data.payload;
                this.nodeLoads = payload;
                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](3);
                this.showErrorMessage(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(_context4.t0));

              case 16:
                try {
                  this.processData(this.nodeLoads, startDate, endDate || startDate);
                } catch (error) {
                  console.log(error);
                }

                this.$vs.loading.close();

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 13]]);
      }));

      return function getAndProcessData() {
        return _getAndProcessData.apply(this, arguments);
      };
    }(),
    // Generate assigned loads and unassigned loads.
    processData: function processData(nodeLoads, calendarStartDate, calendarEndDate) {
      var _this2 = this;

      // For loads with a leg, they shall split into two loads.
      var unassignedLoads = [];
      var assignedLoads = new _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(nodeLoads), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var load = _step.value;

          if (load.status == 'canceled') {
            continue;
          }

          this.categorizeLoad(unassignedLoads, assignedLoads, load);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.timelineDataForGantt = this.allDriverTruckTrailerForLoadDriver.drivers.map(function (driver) {
        return {
          driverId: driver.id,
          driverName: driver.name,
          loads: _this2.formatLoads(assignedLoads.get(driver.id) || [], true).filter( // A load card may not fit in calendar date range at all, for example
          // 1st stop to leg is out of range, but leg to last stop is in range.
          function (l) {
            return l.endDate.slice(0, 10) >= calendarStartDate && l.startDate.slice(0, 10) <= calendarEndDate;
          })
        };
      });
      var grouped = {};
      this.formatLoads(unassignedLoads).forEach(function (load) {
        if (!grouped[load.startDate]) {
          grouped[load.startDate] = [];
        }

        grouped[load.startDate].push(load);
      });
      this.groupedUnassignedLoads = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(grouped).sort(function (a, b) {
        return a < b ? -1 : 1;
      }).map(function (date) {
        return {
          groupDate: _this2.getDateForUnassignedList(date),
          loads: grouped[date]
        };
      });
    },
    categorizeLoad: function categorizeLoad(unassignedLoads, assignedLoads, load) {
      var stops = this.getStopsHelper(load); // Delivered and beyond loads and canceled loads shall never show up in unassigned list.

      if (load.legs.length == 0) {
        this.categorizeLoadHelper(unassignedLoads, assignedLoads, _objectSpread({}, load, {
          stops: stops,
          segmentDrivers: load.drivers
        }), load.drivers);
        return;
      }

      var legIndex = stops.findIndex(function (s) {
        return s.type == 'leg';
      });
      var toLegStops = stops.slice(0, legIndex + 1);
      var fromLegStops = stops.slice(legIndex);
      var toLegDrivers = load.drivers.filter(function (ld) {
        return ld.toLeg;
      });
      var fromLegDrivers = load.drivers.filter(function (ld) {
        return ld.fromLeg;
      }); // Just to prevent bugs in other code.

      if (toLegStops.length >= 2) {
        this.categorizeLoadHelper(unassignedLoads, assignedLoads, _objectSpread({}, load, {
          stops: toLegStops,
          segmentDrivers: toLegDrivers
        }), toLegDrivers);
      }

      if (fromLegStops.length >= 2) {
        this.categorizeLoadHelper(unassignedLoads, assignedLoads, _objectSpread({}, load, {
          stops: fromLegStops,
          segmentDrivers: fromLegDrivers
        }), fromLegDrivers);
      }
    },
    getStopsHelper: function getStopsHelper(load) {
      var stops = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(load.shippers), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var s = _step2.value;
          stops.push(_objectSpread({
            type: 'shipper'
          }, s));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(load.legs), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _s2 = _step3.value;
          stops.push(_objectSpread({
            type: 'leg'
          }, _s2));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(load.receivers), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _s3 = _step4.value;
          stops.push(_objectSpread({
            type: 'receiver'
          }, _s3));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(load.multiPurposeStops), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _s4 = _step5.value;
          stops.push(_objectSpread({
            type: 'multiPurposeStop'
          }, _s4));
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      stops.sort(function (a, b) {
        return a.order - b.order;
      });
      return stops;
    },
    // Even if a load has drivers (users), it's still possible that it is unassigned load,
    // because the driver may handed over. But for correctness, we shall still assign
    // this load to the handed over driver, because we cannot assign the same load to
    // a driver twice.
    // The drivers here are the load drivers for the particular segment, != load.drivers
    categorizeLoadHelper: function categorizeLoadHelper(unassignedLoads, assignedLoads, load, drivers) {
      // These users are used for determining what loads show up in what user's row.
      // Note, to determine if we can assign one load to one driver, we have to examine
      // all users of this load, no matter status.
      var users = lodash__WEBPACK_IMPORTED_MODULE_12___default.a.flatten(drivers.map(function (ld) {
        return ld.users;
      }));

      var hasNonHandedOverUser = drivers.filter(function (ld) {
        return ld.status != 'handedOver';
      }).some(function (ld) {
        return ld.users.length > 0;
      });

      if (!hasNonHandedOverUser && ['open', 'assign', 'inTransit'].includes(load.status)) {
        unassignedLoads.push(load);
      }

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(users), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var user = _step6.value;

          if (assignedLoads.has(user.id)) {
            assignedLoads.get(user.id).push(load);
          } else {
            assignedLoads.set(user.id, [load]);
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    },
    formatLoads: function formatLoads() {
      var loads = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var applyDefaultTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return loads.map(function (load) {
        var firstStop = load.stops[0];
        var lastStop = load.stops[load.stops.length - 1];
        var key = load.id;

        if (firstStop.type == 'leg') {
          key += 'fromLeg';
        }

        if (lastStop.type == 'leg') {
          key += 'toLeg';
        }

        var startDate = firstStop.date;
        var endDate = lastStop.date;

        if (applyDefaultTime) {
          startDate += ' ' + (firstStop.time ? firstStop.time : '00:00');
          endDate += ' ' + (lastStop.time ? lastStop.time : '23:59');
        }

        return _objectSpread({
          key: key,
          loadId: load.id,
          customerName: load.customer ? load.customer.name : null,
          startDate: startDate,
          startTime: firstStop.time,
          startCity: firstStop.city,
          startState: firstStop.state,
          endDate: endDate,
          endTime: lastStop.time,
          endCity: lastStop.city,
          endState: lastStop.state
        }, load);
      } // drivers: load.drivers,
      );
    },
    getDateForUnassignedList: function getDateForUnassignedList(date) {
      return this.$dayjs(date).format('MMMM D, YYYY');
    },
    // Although not fully reviewed, at least I have a guess what they are doing.
    // Although not fully reviewed, at least I have a guess what they are doing.
    // Although not fully reviewed, at least I have a guess what they are doing.
    showLoadDetails: function showLoadDetails(_ref5) {
      var loadId = _ref5.loadId;

      if (loadId) {
        this.$emit('updateLoad', loadId);
      }
    },
    configDateFlatPickr: function configDateFlatPickr() {
      var defaultDate = this.flat_pikr_config.defaultDate;
      this.selectedDateRange = "".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(defaultDate[0]), " to ").concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(defaultDate[1]));
    },
    handleFlatPickerInput: function () {
      var _handleFlatPickerInput = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee5(selectedDates, dateStr) {
        var selectedDateFormat, selectDate, _selectDate;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.selectedDateRange = dateStr;
                selectedDateFormat = dateStr.split(' to ');

                if (selectedDates.length >= 2) {
                  if (new Date(selectedDates[0]).getTime() === new Date(selectedDates[1]).getTime()) {
                    selectDate = new Date(selectedDates[0]);
                    this.$set(this.flat_pikr_config, 'minDate', selectDate.setDate(selectDate.getDate() - this.skip_days));
                    this.$set(this.flat_pikr_config, 'maxDate', selectDate.setDate(selectDate.getDate() + this.skip_days * 2));
                  } else {
                    this.$set(this.flat_pikr_config, 'minDate', '');
                    this.$set(this.flat_pikr_config, 'maxDate', '');
                  }
                } else {
                  _selectDate = new Date(selectedDateFormat[0]);

                  _selectDate.setHours(_selectDate.getHours() + 12);

                  _selectDate.setDate(_selectDate.getDate() - this.skip_days);

                  this.$set(this.flat_pikr_config, 'minDate', _selectDate.toISOString().slice(0, 10));

                  _selectDate.setDate(_selectDate.getDate() + this.skip_days * 2);

                  this.$set(this.flat_pikr_config, 'maxDate', _selectDate.toISOString().slice(0, 10));
                }

                if (!(selectedDates.length >= 2)) {
                  _context5.next = 6;
                  break;
                }

                _context5.next = 6;
                return this.getAndProcessData();

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function handleFlatPickerInput(_x3, _x4) {
        return _handleFlatPickerInput.apply(this, arguments);
      };
    }(),
    generateHeightOfGanttChart: function generateHeightOfGanttChart() {
      console.log('generateHeightOfGanttChart()');
      var heightRes = [];
      var gnatCharContainer = document.getElementById('gantt-chart-container');
      var children = (gnatCharContainer || {}).children || [];
      if (!children.length) return [];

      for (var i = 0; i < children.length; i++) {
        var tableChild = children[i];
        heightRes.push(tableChild.clientHeight);
      }

      return heightRes;
    },
    setHeightOfSideBar: function setHeightOfSideBar() {
      var _this3 = this;

      console.log('setHeightOfSideBar()');
      setTimeout(function () {
        var heightRes = _this3.generateHeightOfGanttChart();

        _this3.sideBarHeights = heightRes;
        if (!heightRes.length) return;
        var chartSideBlock = document.getElementById('chartSideBlock');
        var children = (chartSideBlock || []).children || [];

        for (var i = 0; i < children.length; i++) {
          var tableChild = children[i];
          tableChild.style.height = "".concat(heightRes[i] + 1, "px");
        }
      }, 600);
    }
  },
  beforeDestroy: function beforeDestroy() {
    _helpers_eventBus__WEBPACK_IMPORTED_MODULE_15__["EventBus"].$off(_config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].eventBuses.loadChanged);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=template&id=410fa118&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=template&id=410fa118& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "dispatch-calender"
  }, [_c("DragAndDropTimeline", {
    ref: "dragAndDropTimeline",
    attrs: {
      returnData: {
        loads: true,
        timeOffCalendars: false
      },
      parentKey: "dispatchTimeline",
      showBarsInSingleRow: true,
      infoClassList: ["v-centered-info"]
    },
    on: {
      updateLoad: _vm.editLoadSidebar
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=template&id=47ac1011&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=template&id=47ac1011&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "load-parent w-full relative",
    attrs: {
      draggable: _vm.isDraggable
    },
    on: {
      dragend: function dragend($event) {
        $event.preventDefault();
        return _vm.onDragEnd.apply(null, arguments);
      },
      dragover: function dragover($event) {
        $event.preventDefault();
        return _vm.onDragOver.apply(null, arguments);
      }
    }
  }, [_c("popper", {
    attrs: {
      trigger: "hover",
      "append-to-body": "",
      "visible-arrow": false,
      options: {
        placement: "top",
        modifiers: {
          offset: {
            offset: "0,10px"
          },
          flip: true
        }
      }
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isTimeLineCard && !_vm.isDraggingOver,
      expression: "isTimeLineCard && !isDraggingOver"
    }],
    staticClass: "popper"
  }, [_c("div", {
    staticClass: "load-on-hover"
  }, [_c("div", {
    staticClass: "load-content"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("h6", {
    staticClass: "load-number"
  }, [_vm._v("Load " + _vm._s(_vm.load.number))]), _vm._v(" "), _c("div", {
    staticClass: "badge",
    class: _vm.badgeClass
  }, [_vm._v("\n              " + _vm._s(_vm.formattedLoadStatus[_vm.load.status]) + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "text-left p-5"
  }, [_c("p", {
    staticClass: "mb-3 value"
  }, [_vm._v("\n              " + _vm._s(_vm.load.segmentDrivers.filter(function (ld) {
    return ld.truck;
  }).map(function (ld) {
    return ld.truck.number;
  }).join(", ")) + "\n            ")]), _vm._v(" "), _c("h6", {
    staticClass: "mb-2 label"
  }, [_vm._v("Stops")]), _vm._v(" "), _vm._l(_vm.load.stops, function (stop, index) {
    return _c("div", {
      key: "".concat(stop.type, "-").concat(stop.id, "-").concat(index),
      staticClass: "mb-3",
      class: [_vm.getStopClass(stop.type)].concat()
    }, [_c("label", {
      class: ["".concat(_vm.getStopClass(stop.type), "-label")].concat()
    }, [_vm._v(_vm._s(_vm.getStopType(stop.type)))]), _vm._v(" "), _c("div", {
      staticClass: "addresses mt-2"
    }, [_c("address", {
      staticClass: "address mb-3 block"
    }, [_vm._v("\n                  " + _vm._s(_vm.formatStopAddress(stop)) + "\n                ")])])]);
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "load w-full",
    class: {
      "bg-white mb-3": _vm.isDraggable,
      "show-bg border-none": _vm.isTimeLineCard
    },
    attrs: {
      slot: "reference"
    },
    slot: "reference"
  }, [_c("div", {
    staticClass: "load-content p-3",
    class: _vm.singleDayLoad
  }, [_c("div", {
    staticClass: "flex justify-between load-title"
  }, [_c("h6", {
    staticClass: "load-number"
  }, [_vm._v(_vm._s(_vm.load.number))]), _vm._v(" "), _c("div", {
    staticClass: "badge",
    class: _vm.badgeClass
  }, [_vm._v("\n            " + _vm._s(_vm.formattedLoadStatus[_vm.load.status]) + "\n          ")])]), _vm._v(" "), _c("p", {
    staticClass: "load-customer"
  }, [_vm._v(_vm._s(_vm.load.customerName))]), _vm._v(" "), _c("div", {
    staticClass: "locations flex gap-3 items-center"
  }, [_c("span", [_vm._v(_vm._s(_vm.load.startCity) + ", " + _vm._s(_vm.load.startState) + " ")]), _vm._v(" "), !_vm.singleDayLoad ? _c("span", {
    staticClass: "breaker"
  }, [_c("feather-icon", {
    staticClass: "truck-icon",
    attrs: {
      icon: "TruckIcon"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.load.endCity) + ", " + _vm._s(_vm.load.endState) + " ")])])])])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=template&id=90411658&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=template&id=90411658& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "planning-timeline"
  }, [_c("div", {
    staticClass: "planning-timeline-header flex justify-between"
  }, [_c("portal-target", {
    attrs: {
      name: "planningTimeline"
    }
  }), _vm._v(" "), _c("portal", {
    attrs: {
      to: _vm.parentKey
    }
  }, [_c("div", {
    staticClass: "planning-timeline-controls flex items-center"
  }, [_c("div", {
    staticClass: "mr-2",
    staticStyle: {
      "min-width": "13.5rem"
    }
  }, [_c("flat-pickr", {
    ref: "flat-pickr",
    staticClass: "w-full",
    attrs: {
      config: _vm.flat_pikr_config,
      placeholder: "Select Date Range"
    },
    on: {
      "on-change": _vm.handleFlatPickerInput
    },
    model: {
      value: _vm.selectedDateRange,
      callback: function callback($$v) {
        _vm.selectedDateRange = $$v;
      },
      expression: "selectedDateRange"
    }
  })], 1)])])], 1), _vm._v(" "), _vm.dateRange.length > 0 ? _c("GanttChart", {
    key: _vm.chartRenderKey,
    staticClass: "mt-4",
    attrs: {
      headerData: ["Driver Name"],
      "gantt-data": _vm.timelineDataForGantt,
      "time-section": _vm.dateRange,
      "chart-max-height": _vm.ChartHeight,
      renderPropertyName: ["loads"],
      sideBarHeights: _vm.sideBarHeights,
      barHeight: "20px",
      rowHeight: "35px",
      blockMinHeight: "75px",
      singleRow: _vm.showBarsInSingleRow,
      showSideBar: true,
      parentKey: _vm.parentKey,
      groupedUnassignedLoads: _vm.groupedUnassignedLoads
    },
    on: {
      onClickBar: function onClickBar($event) {
        return _vm.showBarDetails($event);
      },
      onClickLine: function onClickLine($event) {
        return _vm.openDriverTimeOffCalender($event);
      },
      onLoadCardClick: function onLoadCardClick($event) {
        return _vm.showLoadDetails($event);
      },
      refreshChart: function refreshChart($event) {
        return _vm.getAndProcessData();
      },
      onLoadAssign: _vm.assignLoad,
      onDriverAssign: _vm.assignDriver
    },
    scopedSlots: _vm._u([{
      key: "container-box",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("LoadCard", {
          attrs: {
            load: item,
            isDraggable: true
          },
          on: {
            onLoadCardDragEnd: _vm.assignLoad
          }
        })];
      }
    }, {
      key: "side-box",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("div", {
          staticClass: "w-full block truck-info",
          class: _vm.infoClassList
        }, [_c("div", {
          staticClass: "flex p-3",
          class: item.driverName ? "justify-start" : "justify-center"
        }, [_c("div", {
          staticClass: "flex items-center w-full"
        }, [item.assetLabel ? _c("span", {
          staticClass: "font-medium title"
        }, [_vm._v("\n              " + _vm._s(item.assetLabel) + "\n            ")]) : item.truckNumber ? _c("span", {
          staticClass: "font-medium title"
        }, [_vm._v("\n              " + _vm._s(item.truckNumber) + "\n            ")]) : item.trailerNumber ? _c("span", {
          staticClass: "font-medium title"
        }, [_vm._v("\n              " + _vm._s(item.trailerNumber) + "\n            ")]) : item.driverName ? [_c("vs-avatar", {
          staticClass: "avatar",
          style: _vm.avatarColors(item.driverId),
          attrs: {
            circle: "",
            text: _vm.getNameLetters(item.driverName),
            size: "40px"
          }
        }), _vm._v(" "), _c("span", {
          staticClass: "font-medium title"
        }, [_vm._v(_vm._s(item.driverName))])] : _vm._e()], 2)])])];
      }
    }], null, false, 880405956)
  }) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popper[data-v-47ac1011] {\n  max-width: 250px;\n}[dir] .popper[data-v-47ac1011] {\n  box-shadow: none;\n  background-color: #fff;\n  border: none;\n}\n[dir] .load[data-v-47ac1011], [dir] .load-on-hover[data-v-47ac1011] {\n  border: 1px solid rgba(104, 104, 104, 0.368627451);\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1019607843);\n  border-radius: 4px;\n  cursor: pointer;\n}\n.load.load-on-hover[data-v-47ac1011],\n.load-on-hover.load-on-hover[data-v-47ac1011] {\n  min-width: 250px;\n}\n[dir] .load.load-on-hover[data-v-47ac1011], [dir] .load-on-hover.load-on-hover[data-v-47ac1011] {\n  background-color: #fff;\n  border: none;\n}\n.load *[data-v-47ac1011]:not(.load-number),\n.load-on-hover *[data-v-47ac1011]:not(.load-number) {\n  font-size: 0.85rem;\n}\n.load .load-number[data-v-47ac1011],\n.load-on-hover .load-number[data-v-47ac1011] {\n  color: #1061c9;\n}\n.load .badge[data-v-47ac1011],\n.load-on-hover .badge[data-v-47ac1011] {\n  font-weight: 500;\n}\n[dir] .load .badge[data-v-47ac1011], [dir] .load-on-hover .badge[data-v-47ac1011] {\n  padding: 2px 10px 2px 10px;\n  border-radius: 2px;\n}\n.load .badge.warning[data-v-47ac1011],\n.load-on-hover .badge.warning[data-v-47ac1011] {\n  color: #fdab3d;\n}\n[dir] .load .badge.warning[data-v-47ac1011], [dir] .load-on-hover .badge.warning[data-v-47ac1011] {\n  background-color: rgb(255, 238, 216);\n}\n.load .badge.success[data-v-47ac1011],\n.load-on-hover .badge.success[data-v-47ac1011] {\n  color: #34d326;\n}\n[dir] .load .badge.success[data-v-47ac1011], [dir] .load-on-hover .badge.success[data-v-47ac1011] {\n  background-color: rgba(52, 211, 38, 0.2);\n}\n.load .badge.primary[data-v-47ac1011],\n.load-on-hover .badge.primary[data-v-47ac1011] {\n  color: #1877f2;\n}\n[dir] .load .badge.primary[data-v-47ac1011], [dir] .load-on-hover .badge.primary[data-v-47ac1011] {\n  background-color: rgba(24, 119, 242, 0.2);\n}\n.load .badge.info[data-v-47ac1011],\n.load-on-hover .badge.info[data-v-47ac1011] {\n  color: #b412a4;\n}\n[dir] .load .badge.info[data-v-47ac1011], [dir] .load-on-hover .badge.info[data-v-47ac1011] {\n  background-color: rgba(180, 18, 164, 0.2);\n}\n.load .locations span[data-v-47ac1011],\n.load-on-hover .locations span[data-v-47ac1011] {\n  white-space: nowrap;\n}\n.load .locations .breaker[data-v-47ac1011],\n.load-on-hover .locations .breaker[data-v-47ac1011] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.load .locations .breaker .truck-icon[data-v-47ac1011],\n.load-on-hover .locations .breaker .truck-icon[data-v-47ac1011] {\n  width: 15px;\n}\n.load .locations .breaker[data-v-47ac1011]::before,\n.load-on-hover .locations .breaker[data-v-47ac1011]::before {\n  content: \"\";\n  width: 100%;\n}\n[dir] .load .locations .breaker[data-v-47ac1011]::before, [dir] .load-on-hover .locations .breaker[data-v-47ac1011]::before {\n  border-top: 1px solid #686868;\n}\n[dir=ltr] .load .locations .breaker[data-v-47ac1011]::before, [dir=ltr] .load-on-hover .locations .breaker[data-v-47ac1011]::before {\n  margin-right: 3px;\n}\n[dir=rtl] .load .locations .breaker[data-v-47ac1011]::before, [dir=rtl] .load-on-hover .locations .breaker[data-v-47ac1011]::before {\n  margin-left: 3px;\n}\n.load.show-bg[data-v-47ac1011],\n.load-on-hover.show-bg[data-v-47ac1011] {\n  overflow: hidden;\n}\n[dir] .load.show-bg[data-v-47ac1011], [dir] .load-on-hover.show-bg[data-v-47ac1011] {\n  background-color: rgb(242, 248, 255);\n}\n[dir=ltr] .load.show-bg[data-v-47ac1011], [dir=ltr] .load-on-hover.show-bg[data-v-47ac1011] {\n  border-left: 5px solid #1877f2 !important;\n}\n[dir=rtl] .load.show-bg[data-v-47ac1011], [dir=rtl] .load-on-hover.show-bg[data-v-47ac1011] {\n  border-right: 5px solid #1877f2 !important;\n}\n.load .load-content[data-v-47ac1011],\n.load-on-hover .load-content[data-v-47ac1011] {\n  min-width: 220px;\n}\n.load .load-content .header[data-v-47ac1011],\n.load-on-hover .load-content .header[data-v-47ac1011] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n[dir] .load .load-content .header[data-v-47ac1011], [dir] .load-on-hover .load-content .header[data-v-47ac1011] {\n  background-color: rgb(242, 248, 255);\n  padding: 15px;\n}\n.load .load-content .label[data-v-47ac1011],\n.load-on-hover .load-content .label[data-v-47ac1011] {\n  font-size: 12px;\n  font-weight: 400;\n}\n.load .load-content .value[data-v-47ac1011],\n.load-on-hover .load-content .value[data-v-47ac1011] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.load .load-content .pickup-label[data-v-47ac1011],\n.load .load-content .delivered-label[data-v-47ac1011],\n.load .load-content .leg-label[data-v-47ac1011],\n.load .load-content .terminal-label[data-v-47ac1011],\n.load-on-hover .load-content .pickup-label[data-v-47ac1011],\n.load-on-hover .load-content .delivered-label[data-v-47ac1011],\n.load-on-hover .load-content .leg-label[data-v-47ac1011],\n.load-on-hover .load-content .terminal-label[data-v-47ac1011] {\n  font-size: 10px;\n}\n[dir] .load .load-content .pickup-label[data-v-47ac1011], [dir] .load .load-content .delivered-label[data-v-47ac1011], [dir] .load .load-content .leg-label[data-v-47ac1011], [dir] .load .load-content .terminal-label[data-v-47ac1011], [dir] .load-on-hover .load-content .pickup-label[data-v-47ac1011], [dir] .load-on-hover .load-content .delivered-label[data-v-47ac1011], [dir] .load-on-hover .load-content .leg-label[data-v-47ac1011], [dir] .load-on-hover .load-content .terminal-label[data-v-47ac1011] {\n  border-radius: 3px;\n  padding: 0.2rem 0.8rem;\n}\n.load .load-content .pickup-label[data-v-47ac1011],\n.load-on-hover .load-content .pickup-label[data-v-47ac1011] {\n  color: #f0f0f0;\n}\n[dir] .load .load-content .pickup-label[data-v-47ac1011], [dir] .load-on-hover .load-content .pickup-label[data-v-47ac1011] {\n  background-color: #183bff;\n}\n.load .load-content .delivered-label[data-v-47ac1011],\n.load-on-hover .load-content .delivered-label[data-v-47ac1011] {\n  color: #f6f6f6;\n}\n[dir] .load .load-content .delivered-label[data-v-47ac1011], [dir] .load-on-hover .load-content .delivered-label[data-v-47ac1011] {\n  background-color: #00b515;\n}\n.load .load-content .leg-label[data-v-47ac1011],\n.load-on-hover .load-content .leg-label[data-v-47ac1011] {\n  color: #f6f6f6;\n}\n[dir] .load .load-content .leg-label[data-v-47ac1011], [dir] .load-on-hover .load-content .leg-label[data-v-47ac1011] {\n  background-color: #cc0000;\n}\n.load .load-content .terminal-label[data-v-47ac1011],\n.load-on-hover .load-content .terminal-label[data-v-47ac1011] {\n  color: #e6e6e6;\n}\n[dir] .load .load-content .terminal-label[data-v-47ac1011], [dir] .load-on-hover .load-content .terminal-label[data-v-47ac1011] {\n  background-color: #20093f;\n}\n[dir=ltr] .load .load-content .pickup[data-v-47ac1011], [dir=ltr] .load .load-content .delivered[data-v-47ac1011], [dir=ltr] .load .load-content .leg[data-v-47ac1011], [dir=ltr] .load .load-content .terminal[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .pickup[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .delivered[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .leg[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .terminal[data-v-47ac1011] {\n  padding-left: 6px;\n  border-left-width: 1px;\n  border-left-style: solid;\n}\n[dir=rtl] .load .load-content .pickup[data-v-47ac1011], [dir=rtl] .load .load-content .delivered[data-v-47ac1011], [dir=rtl] .load .load-content .leg[data-v-47ac1011], [dir=rtl] .load .load-content .terminal[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .pickup[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .delivered[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .leg[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .terminal[data-v-47ac1011] {\n  padding-right: 6px;\n  border-right-width: 1px;\n  border-right-style: solid;\n}\n[dir=ltr] .load .load-content .pickup.pickup[data-v-47ac1011], [dir=ltr] .load .load-content .delivered.pickup[data-v-47ac1011], [dir=ltr] .load .load-content .leg.pickup[data-v-47ac1011], [dir=ltr] .load .load-content .terminal.pickup[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .pickup.pickup[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .delivered.pickup[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .leg.pickup[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .terminal.pickup[data-v-47ac1011] {\n  border-left-color: #183bff;\n}\n[dir=rtl] .load .load-content .pickup.pickup[data-v-47ac1011], [dir=rtl] .load .load-content .delivered.pickup[data-v-47ac1011], [dir=rtl] .load .load-content .leg.pickup[data-v-47ac1011], [dir=rtl] .load .load-content .terminal.pickup[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .pickup.pickup[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .delivered.pickup[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .leg.pickup[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .terminal.pickup[data-v-47ac1011] {\n  border-right-color: #183bff;\n}\n[dir=ltr] .load .load-content .pickup.delivered[data-v-47ac1011], [dir=ltr] .load .load-content .delivered.delivered[data-v-47ac1011], [dir=ltr] .load .load-content .leg.delivered[data-v-47ac1011], [dir=ltr] .load .load-content .terminal.delivered[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .pickup.delivered[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .delivered.delivered[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .leg.delivered[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .terminal.delivered[data-v-47ac1011] {\n  border-left-color: #00b515;\n}\n[dir=rtl] .load .load-content .pickup.delivered[data-v-47ac1011], [dir=rtl] .load .load-content .delivered.delivered[data-v-47ac1011], [dir=rtl] .load .load-content .leg.delivered[data-v-47ac1011], [dir=rtl] .load .load-content .terminal.delivered[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .pickup.delivered[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .delivered.delivered[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .leg.delivered[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .terminal.delivered[data-v-47ac1011] {\n  border-right-color: #00b515;\n}\n[dir=ltr] .load .load-content .pickup.leg[data-v-47ac1011], [dir=ltr] .load .load-content .delivered.leg[data-v-47ac1011], [dir=ltr] .load .load-content .leg.leg[data-v-47ac1011], [dir=ltr] .load .load-content .terminal.leg[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .pickup.leg[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .delivered.leg[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .leg.leg[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .terminal.leg[data-v-47ac1011] {\n  border-left-color: #cc0000;\n}\n[dir=rtl] .load .load-content .pickup.leg[data-v-47ac1011], [dir=rtl] .load .load-content .delivered.leg[data-v-47ac1011], [dir=rtl] .load .load-content .leg.leg[data-v-47ac1011], [dir=rtl] .load .load-content .terminal.leg[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .pickup.leg[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .delivered.leg[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .leg.leg[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .terminal.leg[data-v-47ac1011] {\n  border-right-color: #cc0000;\n}\n[dir=ltr] .load .load-content .pickup.terminal[data-v-47ac1011], [dir=ltr] .load .load-content .delivered.terminal[data-v-47ac1011], [dir=ltr] .load .load-content .leg.terminal[data-v-47ac1011], [dir=ltr] .load .load-content .terminal.terminal[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .pickup.terminal[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .delivered.terminal[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .leg.terminal[data-v-47ac1011], [dir=ltr] .load-on-hover .load-content .terminal.terminal[data-v-47ac1011] {\n  border-left-color: #20093f;\n}\n[dir=rtl] .load .load-content .pickup.terminal[data-v-47ac1011], [dir=rtl] .load .load-content .delivered.terminal[data-v-47ac1011], [dir=rtl] .load .load-content .leg.terminal[data-v-47ac1011], [dir=rtl] .load .load-content .terminal.terminal[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .pickup.terminal[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .delivered.terminal[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .leg.terminal[data-v-47ac1011], [dir=rtl] .load-on-hover .load-content .terminal.terminal[data-v-47ac1011] {\n  border-right-color: #20093f;\n}\n.load .load-content address[data-v-47ac1011],\n.load-on-hover .load-content address[data-v-47ac1011] {\n  font-size: 10px;\n  font-style: normal;\n}\n.load .single-day-load .load-title[data-v-47ac1011],\n.load-on-hover .single-day-load .load-title[data-v-47ac1011] {\n  font-size: 0.5rem !important;\n  justify-content: start !important;\n}\n.load .single-day-load .load-title .badge[data-v-47ac1011],\n.load-on-hover .single-day-load .load-title .badge[data-v-47ac1011] {\n  font-size: 0.5rem !important;\n}\n[dir] .load .single-day-load .load-title .badge[data-v-47ac1011], [dir] .load-on-hover .single-day-load .load-title .badge[data-v-47ac1011] {\n  padding: 0;\n}\n[dir=ltr] .load .single-day-load .load-title .badge[data-v-47ac1011], [dir=ltr] .load-on-hover .single-day-load .load-title .badge[data-v-47ac1011] {\n  margin-left: 0.1875rem;\n}\n[dir=rtl] .load .single-day-load .load-title .badge[data-v-47ac1011], [dir=rtl] .load-on-hover .single-day-load .load-title .badge[data-v-47ac1011] {\n  margin-right: 0.1875rem;\n}\n.load .single-day-load .breaker[data-v-47ac1011],\n.load-on-hover .single-day-load .breaker[data-v-47ac1011] {\n  display: block;\n}\n.load .single-day-load .load-number[data-v-47ac1011],\n.load-on-hover .single-day-load .load-number[data-v-47ac1011] {\n  font-size: 0.75rem !important;\n}\n.load .single-day-load .load-customer[data-v-47ac1011],\n.load-on-hover .single-day-load .load-customer[data-v-47ac1011] {\n  font-size: 0.75rem !important;\n}\n.load .single-day-load .locations[data-v-47ac1011],\n.load-on-hover .single-day-load .locations[data-v-47ac1011] {\n  flex-direction: column;\n  font-size: 0.5rem;\n  gap: 3px !important;\n  align-items: flex-start !important;\n}\n.load .single-day-load .locations .breaker[data-v-47ac1011],\n.load-on-hover .single-day-load .locations .breaker[data-v-47ac1011] {\n  display: block;\n}\n.load .single-day-load .locations span[data-v-47ac1011],\n.load-on-hover .single-day-load .locations span[data-v-47ac1011] {\n  font-size: 0.75rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=style&index=0&id=90411658&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=style&index=0&id=90411658&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .planning-timeline {\n  padding-top: 5px;\n}\n.truck-info {\n  display: flex !important;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.truck-info .title {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.truck-info .avatar {\n  font-size: 24px;\n  font-weight: 600;\n  min-width: 40px;\n}\n[dir] .truck-info .avatar {\n  cursor: auto;\n}\n.truck-info .avatar .vs-avatar--text {\n  color: inherit !important;\n}\n.driver-info-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.driver-info-container .driver-name-card {\n  min-height: var(--gantt-row-height);\n  justify-content: flex-end;\n}\n[dir] .driver-info-container .driver-name-card {\n  padding: 0 10px;\n}\n.gantt_chart_content {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.gantt_chart_content .bar-label-text {\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: Times New Roman;\n}\n[dir] .gantt_chart_content .bar-label-text {\n  text-align: center;\n}\n.v-centered-info {\n  justify-content: center;\n}\n.h-centered-info {\n  align-items: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/dayjs/plugin/isSameOrBefore.js":
/*!*****************************************************!*\
  !*** ./node_modules/dayjs/plugin/isSameOrBefore.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,i){ true?module.exports=i():undefined}(this,(function(){"use strict";return function(e,i){i.prototype.isSameOrBefore=function(e,i){return this.isSame(e,i)||this.isBefore(e,i)}}}));

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=style&index=0&id=90411658&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=style&index=0&id=90411658&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=90411658&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=style&index=0&id=90411658&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/ganttChart/unit/GanttUnit.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/components/ganttChart/unit/GanttUnit.js ***!
  \******************************************************************/
/*! exports provided: handleHourSet, handleDateSet, handleDaySet, handleWeekSet, differenceInDays, differenceInHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleHourSet", function() { return handleHourSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDateSet", function() { return handleDateSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDaySet", function() { return handleDaySet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleWeekSet", function() { return handleWeekSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differenceInDays", function() { return differenceInDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differenceInHours", function() { return differenceInHours; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


var isSameOrBefore = __webpack_require__(/*! dayjs/plugin/isSameOrBefore */ "./node_modules/dayjs/plugin/isSameOrBefore.js");

dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(isSameOrBefore);
/**
 * @description get an hour collection
 * @param {Number} count
 * @return  {Array}
 * @date 2020/9/4
 *
 */

var handleHourSet = function handleHourSet(count) {
  var data = [];
  var character = 0;

  while (count >= 1) {
    data.push(character);
    character++;
    count--;
    if (character === 24) character = 0;
  }

  return data;
};
/**
 * @description get a set of days
 * @param {Object} start
 * @param {Object} end
 * @return  {Array}
 * @date 2020/9/4
 *
 */

var handleDateSet = function handleDateSet(start, end) {
  var dataList = [];
  var startTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(start);
  var endTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(end);

  while (startTime.isSameOrBefore(endTime, "day")) {
    dataList.push(startTime.format("MM/DD/YYYY"));
    startTime = startTime.add(1, "day");
  }

  return dataList;
};
var handleDaySet = function handleDaySet(startDate, endDate) {
  var data = []; //   const startDateLocal = new Date(startDate);
  //   const endDateLocal = new Date(endDate);
  //   let totalSeconds = Math.abs(endDateLocal - startDateLocal) / 1000;
  //   let daysDifference = Math.floor (totalSeconds / (60 * 60 * 24));
  //   for (var i = 0; i <= daysDifference; i++) {
  //     let currentDate = new Date();
  //     currentDate.setDate(startDateLocal.getDate() + i);
  //     data.push(currentDate.toLocaleDateString("en-US", { day: "numeric" }));
  //   }
  // return data;

  function getDaysInMonth(date) {
    // Use 1 for January, 2 for February, etc.
    var month = date.month() + 1;
    var year = date.year();
    return new Date(year, month, 0).getDate();
  }

  var startTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate);
  var endTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate);
  var daysInMonth = getDaysInMonth(startTime);
  var dataModifier = startTime.get("date");

  while (startTime.isSameOrBefore(endTime, "day")) {
    data.push({
      label: "".concat(startTime.format("ddd, DD MMM YYYY")),
      value: dataModifier,
      isWeekend: startTime.day() === 0 || startTime.day() === 6
    });
    dataModifier++;

    if ([28, 29, 30, 31].some(function (x) {
      return x < dataModifier;
    })) {
      if (dataModifier > daysInMonth) {
        dataModifier = 1;
        daysInMonth = getDaysInMonth(startTime.add(1, "month"));
      }
    }

    startTime = startTime.add(1, "day");
  }

  return data;
};
var handleWeekSet = function handleWeekSet(startDate, endDate) {
  var data = [];
  var startTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate);
  var endTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate);
  var differenceInWeeks = endTime.diff(startTime, "week"); // Default week window of 12 weeks
  // if (differenceInWeeks < 12) {
  //   endTime = startTime.add(12, "week");
  // }

  /* Start form start of week*/
  // startTime = startTime.subtract(startTime.day(), "day");
  // endTime = endTime.add(6 - endTime.day(), "day");

  var start = startTime.format("MM/DD/YYYY");
  var end = endTime.format("MM/DD/YYYY");
  var differenceInDayCount = differenceInDays(start, end);

  while (startTime.isSameOrBefore(endTime, "day")) {
    var startWeek = startTime;
    var endWeek = void 0;

    if (dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startTime).day() === 0) {
      endWeek = startWeek.add(6, "day");
    } else {
      endWeek = startWeek.add(6 - startWeek.day(), "day");
    }

    if (endWeek.isAfter(endTime)) {
      endWeek = startWeek.add(endTime.day(), "day");
    }

    var length = endWeek.diff(startWeek, "day") + 1;
    var label = void 0;

    if (differenceInDayCount > 20) {
      // Label Update case for Ui where per hour is too small 
      switch (length) {
        case 1:
          label = "".concat(startWeek.get("date"));
          break;

        case 2:
          label = "".concat(startWeek.get("date"), " - ").concat(endWeek.get("date"));
          break;

        case 3:
          label = "".concat(startWeek.format("MMM"), " ").concat(startWeek.get("date"), " - ").concat(endWeek.get("date"));
          break;

        default:
          label = "".concat(startWeek.format("MMM"), " ").concat(startWeek.get("date"), " - ").concat(endWeek.format("MMM"), " ").concat(endWeek.get("date"));
          break;
      }
    } else {
      label = "".concat(startWeek.format("MMM"), " ").concat(startWeek.get("date"), " - ").concat(endWeek.format("MMM"), " ").concat(endWeek.get("date"));
    }

    data.push({
      label: label,
      length: length
    });

    if (dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startWeek).day() === 0) {
      startTime = startWeek.add(7, "day");
    } else {
      startTime = startWeek.add(7 - startWeek.day(), "day");
    }
  }

  return {
    data: data,
    startDate: start,
    endDate: end
  };
};
var differenceInDays = function differenceInDays(start, end) {
  var startTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(start);
  var endTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(end);
  return endTime.diff(startTime, "minute") / (60 * 24);
};
var differenceInHours = function differenceInHours(start, end, forceTimeCheck) {
  var startTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(start);
  var endTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(end);
  var diff = endTime.diff(startTime, "minute") / 60;
  return forceTimeCheck ? diff : diff + 24;
};

/***/ }),

/***/ "./resources/js/src/mixins/globalMixins.js":
/*!*************************************************!*\
  !*** ./resources/js/src/mixins/globalMixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    showErrorMessage: function showErrorMessage(message) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8000;
      this.$vs.notify({
        time: time,
        color: 'danger',
        title: 'Error',
        text: message
      });
    },
    showSuccessMessage: function showSuccessMessage(message) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
      this.$vs.notify({
        time: time,
        color: 'primary',
        title: 'Success',
        text: message
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Calendar2.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Calendar2.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar2_vue_vue_type_template_id_410fa118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar2.vue?vue&type=template&id=410fa118& */ "./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=template&id=410fa118&");
/* harmony import */ var _Calendar2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar2.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Calendar2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar2_vue_vue_type_template_id_410fa118___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar2_vue_vue_type_template_id_410fa118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/Calendar2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=template&id=410fa118&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=template&id=410fa118& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar2_vue_vue_type_template_id_410fa118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar2.vue?vue&type=template&id=410fa118& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Calendar2.vue?vue&type=template&id=410fa118&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar2_vue_vue_type_template_id_410fa118___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar2_vue_vue_type_template_id_410fa118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadCard_vue_vue_type_template_id_47ac1011_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadCard.vue?vue&type=template&id=47ac1011&scoped=true& */ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=template&id=47ac1011&scoped=true&");
/* harmony import */ var _LoadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadCard_vue_vue_type_style_index_0_id_47ac1011_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss& */ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadCard_vue_vue_type_template_id_47ac1011_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadCard_vue_vue_type_template_id_47ac1011_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47ac1011",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_47ac1011_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=style&index=0&id=47ac1011&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_47ac1011_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_47ac1011_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_47ac1011_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_47ac1011_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=template&id=47ac1011&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=template&id=47ac1011&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_template_id_47ac1011_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadCard.vue?vue&type=template&id=47ac1011&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/components/LoadCard.vue?vue&type=template&id=47ac1011&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_template_id_47ac1011_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_template_id_47ac1011_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_90411658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=90411658& */ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=template&id=90411658&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_90411658_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=90411658&lang=scss& */ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=style&index=0&id=90411658&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_90411658___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_90411658___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=style&index=0&id=90411658&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=style&index=0&id=90411658&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90411658_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=90411658&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=style&index=0&id=90411658&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90411658_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90411658_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90411658_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90411658_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=template&id=90411658&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=template&id=90411658& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_90411658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=90411658& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/calendar/dragAndDrop/index.vue?vue&type=template&id=90411658&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_90411658___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_90411658___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=80.js.map