(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/@babel/runtime/core-js/map.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/map.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "./node_modules/core-js/library/fn/map.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/number/is-integer.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/number/is-integer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-integer */ "./node_modules/core-js/library/fn/number/is-integer.js");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _components_TripCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TripCard */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue");
/* harmony import */ var _components_FilterComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FilterComponent */ "./resources/js/src/views/pages/tripV2/planning/components/FilterComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TripPlanningTab',
  components: {
    TripCard: _components_TripCard__WEBPACK_IMPORTED_MODULE_7__["default"],
    PlanningTabFilter: _components_FilterComponent__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  provide: function provide() {
    var _this = this;

    return {
      allDispatchers: function allDispatchers() {
        return [];
      },
      allTags: function allTags() {
        return _this.allDriverTags || [];
      },
      allDrivers: function allDrivers() {
        return _this.allDriversList || [];
      },
      loadStatuses: function loadStatuses() {
        return [];
      }
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
              this.getAllDrivers();
              this.getAllDriverTags();
              this.configDateFlatPickr();
              _context.next = 5;
              return this.getLoadsForPlanning();

            case 5:
              if (this.pcmiler.getKeyApiCalled) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return this.getPcmilerApiKey();

            case 8:
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
  data: function data() {
    return {
      planningData: [],
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        defaultDate: [new Date().setDate(new Date().getDate() - 8), new Date().setDate(new Date().getDate() + 8)]
      },
      skip_days: 60,
      apiCompleted: false,
      groupByOptions: [{
        id: 1,
        name: 'Driver',
        value: 'companyDriver'
      }, {
        id: 2,
        name: 'Owner Operator',
        value: 'ownerOperator'
      }, {
        id: 3,
        name: 'Truck',
        value: 'truck'
      }],
      selectedGroupBy: {
        id: 1,
        name: 'Driver',
        value: 'companyDriver'
      },
      allDriversList: null,
      allDriverTags: null,
      selectedFilters: null,
      filterInitState: null,
      planningTabFilters: null,
      calculateDeadheadOption: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('pcmiler', ['pcmiler']), {
    columns: function columns() {
      var basicColumnsToRender = [{
        field: 'loadNumber',
        header: 'LoadNumber',
        expander: true
      }, {
        field: 'loadStatus',
        header: 'Status'
      }, {
        field: 'loadStartDate',
        header: 'Start Date'
      }, {
        field: 'loadEndDate',
        header: 'End Date'
      }, {
        field: 'loadRate',
        header: 'Rate'
      }, {
        field: 'totalLoadedDistance',
        header: 'Loaded Distance',
        edit: true
      }, {
        field: 'emptyDistance',
        header: 'Empty Distance',
        edit: true
      }, {
        field: 'stops',
        header: 'Stops'
      }];
      var additionalColumnsForGroupByDriver = [
      /**
       * These values are to be inserted as 2nd and 3rd columns
       * Only when selectedGroupBy is of type 'companyDriver'
       * the field names, '' and '' used below are not assigned from backEnd
       * they are created in front end for ease of rendering in sub components
       * they are initialized in 'formatForDriverGroupBy' method
       */
      {
        field: 'loadDriverAssignedTruck',
        header: 'Truck'
      }, {
        field: 'loadDriverAssignedTrailer',
        header: 'Trailer'
      }];

      if (this.isDriverGroupBy) {
        basicColumnsToRender.splice.apply(basicColumnsToRender, [1, 0].concat(additionalColumnsForGroupByDriver));
      }

      return basicColumnsToRender;
    },
    isDriverGroupBy: function isDriverGroupBy() {
      var _ref = this.selectedGroupBy || {},
          value = _ref.value;

      return value === 'companyDriver'; // See groupByOptions id:1
    }
  }),
  watch: {
    planningTabFilters: {
      handler: function handler(val) {
        var _ref2 = val || {},
            driverIds = _ref2.driverIds,
            driverTagIds = _ref2.driverTagIds;

        this.selectedFilters = {
          driverIds: driverIds || [],
          driverTagIds: driverTagIds || []
        };
      }
    },
    selectedFilters: {
      handler: function handler(val) {
        if (val.driverIds || val.driverTagIds) {
          this.getLoadsForPlanning();
        }
      }
    },
    planningData: {
      handler: function handler(val) {
        if (!val.length) {
          this.calculateDeadheadOption = false;
        }
      }
    }
  },
  methods: {
    configDateFlatPickr: function configDateFlatPickr() {
      var defaultDate = this.flat_pikr_config.defaultDate;
      this.selectedDateRange = "".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(defaultDate[0]), " to ").concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(defaultDate[1]));
    },
    handleFlatPickerInput: function handleFlatPickerInput(selectedDates, dateStr, instance) {
      this.selectedDateRange = dateStr;
      var selectedDateFormat = dateStr.split(' to ');

      if ((selectedDates || []).length >= 2) {
        if (new Date(selectedDates[0]).getTime() === new Date(selectedDates[1]).getTime()) {
          var selectDate = new Date(selectedDates[0]);
          this.$set(this.flat_pikr_config, 'minDate', selectDate.setDate(selectDate.getDate() - this.skip_days));
          this.$set(this.flat_pikr_config, 'maxDate', selectDate.setDate(selectDate.getDate() + this.skip_days * 2));
        } else {
          this.$set(this.flat_pikr_config, 'minDate', '');
          this.$set(this.flat_pikr_config, 'maxDate', '');
        }
      } else {
        var _selectDate = new Date(selectedDateFormat[0]);

        _selectDate.setHours(_selectDate.getHours() + 12);

        _selectDate.setDate(_selectDate.getDate() - this.skip_days);

        this.$set(this.flat_pikr_config, 'minDate', _selectDate.toISOString().slice(0, 10));

        _selectDate.setDate(_selectDate.getDate() + this.skip_days * 2);

        this.$set(this.flat_pikr_config, 'maxDate', _selectDate.toISOString().slice(0, 10));
      }

      this.getLoadsForPlanning();
    },
    getLoadsForPlanning: function getLoadsForPlanning() {
      var _this2 = this;

      var filters = {};

      if (this.isDriverGroupBy) {
        // Driver and Driver tags filter condition is active
        if (this.selectedFilters) {
          if (this.selectedFilters.driverTagIds && this.selectedFilters.driverTagIds.length) {
            filters.driverTagIds = this.selectedFilters.driverTagIds;
          }

          if (this.selectedFilters.driverIds && this.selectedFilters.driverIds.length) {
            filters.driverIds = this.selectedFilters.driverIds;
          }
        }
      } // If both driverIds and driverTagIds are empty, set filters to null


      if (!_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(filters).length) {
        filters = null;
      }

      try {
        var selectedDateRange = this.selectedDateRange.split(' to ');

        if ((selectedDateRange || []).length < 2) {
          return;
        }

        var startDate = selectedDateRange[0];
        var endDate = selectedDateRange[1];
        var payload = {
          startDate: startDate,
          endDate: endDate
        };
        if (this.selectedGroupBy.value) payload.type = this.selectedGroupBy.value;
        if (filters) payload.filters = filters;
        this.$vs.loading();
        this.$store.dispatch('tripV2/getLoadsForPlanning', payload).then(function (item) {
          _this2.planningData = _this2.formatPlanningPayload(item.payload.loads);
          _this2.apiCompleted = true;

          _this2.$vs.loading.close();
        });
      } catch (error) {
        console.log(error);
      }
    },
    endTrip: function () {
      var _endTrip = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(driverLoadData) {
        var _this3 = this;

        var toastSuccess, stopDates, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                toastSuccess =
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this3.$vs.notify({
                              time: 2000,
                              color: 'success',
                              title: 'Trip Created',
                              text: 'Trip created successfully'
                            });

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function toastSuccess() {
                    return _ref3.apply(this, arguments);
                  };
                }();

                _context3.prev = 1;
                stopDates = [];
                (driverLoadData || []).children.forEach(function (load) {
                  ((load || {}).stops || []).forEach(function (stop) {
                    stopDates.push(stop.date);
                  });
                });
                stopDates = stopDates.filter(function (item) {
                  return item;
                }).sort();

                if (!(stopDates.length < 1)) {
                  _context3.next = 7;
                  break;
                }

                throw new Error('To create a trip, at least one stop should have an associated date.');

              case 7:
                payload = {
                  type: this.selectedGroupBy.value,
                  loads: driverLoadData.children.map(function (x) {
                    return {
                      loadId: x.loadId,
                      loadedDistance: x.totalLoadedDistance,
                      emptyDistance: x.emptyDistance
                    };
                  }),
                  stopsStartDate: stopDates[0],
                  stopsEndDate: stopDates[stopDates.length - 1],
                  totalLoadedDistance: driverLoadData.totalLoadedDistance,
                  totalEmptyDistance: driverLoadData.totalEmptyDistance
                };

                if (this.selectedGroupBy.value === null || this.selectedGroupBy.value === 'companyDriver') {
                  payload.driverUserId = driverLoadData.id;
                } else if (this.selectedGroupBy.value === 'ownerOperator') {
                  payload.ownerOperatorTagId = driverLoadData.id;
                } else if (this.selectedGroupBy.value === 'truck') {
                  payload.truckId = driverLoadData.id;
                }

                _context3.next = 11;
                return this.$store.dispatch('tripV2/createTrip', payload);

              case 11:
                this.getLoadsForPlanning();
                toastSuccess();
                _context3.next = 20;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](1);
                console.error(_context3.t0);
                _context3.next = 20;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: (((_context3.t0 || {}).response || {}).data || {}).message || _context3.t0.message || 'Error creating trip'
                });

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 15]]);
      }));

      return function endTrip(_x) {
        return _endTrip.apply(this, arguments);
      };
    }(),
    formatPlanningPayload: function formatPlanningPayload(planningPayload) {
      var _ref4 = this.selectedGroupBy || {},
          value = _ref4.value;

      switch (value) {
        case 'companyDriver':
          return this.formatForDriverGroupBy(planningPayload);

        case 'ownerOperator':
          return this.formatForOwnerOperatorGroupBy(planningPayload);

        case 'truck':
          return this.formatForTruckGroupBy(planningPayload);

        default:
          // value == null
          return this.formatForDriverGroupBy(planningPayload);
      }
    },
    formatForDriverGroupBy: function formatForDriverGroupBy(planningPayload) {
      var driverGroupByMap = {};
      (planningPayload || []).forEach(function (element) {
        /**
         * For Each load check for 'additionalAssetsInfo' property
         * present only when grouped by driver,
         * identifies the trucks and Trailers assigned to the driver.
         * Used direct arrays, in stead of creating concatenated strings,
         * as we might later need to add hyper links to Trucks and Trailer,
         * in which case their ids will be needed
         */
        var _ref5 = element || {},
            additionalAssetsInfo = _ref5.additionalAssetsInfo;

        var _ref6 = additionalAssetsInfo || {},
            trucks = _ref6.trucks,
            trailers = _ref6.trailers;

        element.loadDriverAssignedTruck = trucks || [];
        element.loadDriverAssignedTrailer = trailers || [];
        element.emptyDistance = element.emptyDistance || 0;

        if (driverGroupByMap[element.driverUserId]) {
          driverGroupByMap[element.driverUserId].children.push(element);
        } else {
          driverGroupByMap[element.driverUserId] = {
            id: element.driverUserId,
            name: element.driverName,
            children: [element]
          };
        }
      });
      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(driverGroupByMap).map(function (key) {
        var loadRateTotal = driverGroupByMap[key].children.reduce(function (accum, val) {
          return accum + Number(val.loadRate);
        }, 0);
        if ((driverGroupByMap[key].children || []).length > 1) driverGroupByMap[key].children = driverGroupByMap[key].children.sort(function (a, b) {
          var aDate = new Date("".concat(a.loadStartDate, " ").concat(a.loadStartTime || '00:00:00')).getTime();
          var bDate = new Date("".concat(b.loadStartDate, " ").concat(b.loadStartTime || '00:00:00')).getTime();
          return aDate - bDate;
        });
        return _objectSpread({}, driverGroupByMap[key], {
          count: driverGroupByMap[key].children.length,
          loadRateTotal: loadRateTotal
        });
      });
    },
    formatForTruckGroupBy: function formatForTruckGroupBy(planningPayload) {
      var truckGroupByMap = {};
      (planningPayload || []).forEach(function (element) {
        element.emptyDistance = element.emptyDistance || 0;

        if (truckGroupByMap[element.truckId]) {
          truckGroupByMap[element.truckId].children.push(element);
        } else {
          truckGroupByMap[element.truckId] = {
            id: element.truckId,
            name: element.truckNumber,
            children: [element]
          };
        }
      });
      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(truckGroupByMap).map(function (key) {
        var loadRateTotal = truckGroupByMap[key].children.reduce(function (accum, val) {
          return accum + Number(val.loadRate);
        }, 0);
        if ((truckGroupByMap[key].children || []).length > 1) truckGroupByMap[key].children = truckGroupByMap[key].children.sort(function (a, b) {
          var aDate = new Date("".concat(a.loadStartDate, " ").concat(a.loadStartTime || '00:00:00')).getTime();
          var bDate = new Date("".concat(b.loadStartDate, " ").concat(b.loadStartTime || '00:00:00')).getTime();
          return aDate - bDate;
        });
        return _objectSpread({}, truckGroupByMap[key], {
          count: truckGroupByMap[key].children.length,
          loadRateTotal: loadRateTotal
        });
      });
    },
    formatForOwnerOperatorGroupBy: function formatForOwnerOperatorGroupBy(planningPayload) {
      var ownerTagGroupMap = {};
      (planningPayload || []).forEach(function (element) {
        element.emptyDistance = element.emptyDistance || 0;

        if (ownerTagGroupMap[element.ownerOperatorTagId]) {
          ownerTagGroupMap[element.ownerOperatorTagId].children.push(element);
        } else {
          ownerTagGroupMap[element.ownerOperatorTagId] = {
            id: element.ownerOperatorTagId,
            name: element.ownerOperatorTagName,
            children: [element]
          };
        }
      });
      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(ownerTagGroupMap).map(function (key) {
        var loadRateTotal = ownerTagGroupMap[key].children.reduce(function (accum, val) {
          return accum + Number(val.loadRate);
        }, 0);
        if ((ownerTagGroupMap[key].children || []).length > 1) ownerTagGroupMap[key].children = ownerTagGroupMap[key].children.sort(function (a, b) {
          var aDate = new Date("".concat(a.loadStartDate, " ").concat(a.loadStartTime || '00:00:00')).getTime();
          var bDate = new Date("".concat(b.loadStartDate, " ").concat(b.loadStartTime || '00:00:00')).getTime();
          return aDate - bDate;
        });
        return _objectSpread({}, ownerTagGroupMap[key], {
          count: ownerTagGroupMap[key].children.length,
          loadRateTotal: loadRateTotal
        });
      });
    },
    updateGroupBy: function updateGroupBy(groupBy) {
      this.selectedGroupBy = groupBy;
      this.getLoadsForPlanning();
    },
    getAllDrivers: function () {
      var _getAllDrivers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4() {
        var allDrivers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.$store.dispatch('driverV2/getAllDrivers');

              case 3:
                allDrivers = _context4.sent;

                if (allDrivers) {
                  this.allDriversList = allDrivers;
                }

                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      return function getAllDrivers() {
        return _getAllDrivers.apply(this, arguments);
      };
    }(),
    getPcmilerApiKey: function () {
      var _getPcmilerApiKey = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.$store.dispatch('pcmiler/getPcmiler');

              case 3:
                _context5.next = 8;
                break;

              case 5:
                _context5.prev = 5;
                _context5.t0 = _context5["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context5.t0.response.data.message
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 5]]);
      }));

      return function getPcmilerApiKey() {
        return _getPcmilerApiKey.apply(this, arguments);
      };
    }(),
    getAllDriverTags: function () {
      var _getAllDriverTags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee6() {
        var _ref7, payload, _ref8, allTags;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.$store.dispatch('tag/getAllTags');

              case 3:
                _ref7 = _context6.sent;
                payload = _ref7.payload;
                _ref8 = payload || {}, allTags = _ref8.data;

                if (allTags) {
                  this.allDriverTags = allTags;
                }

                _context6.next = 12;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                console.error(_context6.t0);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 9]]);
      }));

      return function getAllDriverTags() {
        return _getAllDriverTags.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/number/is-integer */ "./node_modules/@babel/runtime/core-js/number/is-integer.js");
/* harmony import */ var _babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/map */ "./node_modules/@babel/runtime/core-js/map.js");
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mixins_googleMapMixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/mixins/googleMapMixin */ "./resources/js/src/mixins/googleMapMixin.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);










function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PlanningColumn',
  inject: ['openLoadSidebar'],
  data: function data() {
    return {
      columnsChildren: [],
      timeoutHandler: null,
      selectedLoads: [],
      cachedDistances: {},
      columnsData: [],
      distanceCache: new _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_8___default.a()
    };
  },
  mixins: [_mixins_googleMapMixin__WEBPACK_IMPORTED_MODULE_9__["default"]],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('tripV2', ['getPlanningLoads']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('pcmiler', ['pcmiler']), {
    stopColumns: function stopColumns() {
      var columns = [{
        field: 'name',
        header: 'Name',
        expander: false
      }, {
        field: 'city',
        header: 'City'
      }, {
        field: 'state',
        header: 'State'
      }, {
        field: 'type',
        header: 'Type'
      }, {
        field: 'date',
        header: 'Date'
      }];
      return columns;
    },
    getLoadsFromIds: function getLoadsFromIds() {
      var _this = this;

      return this.columnsData.filter(function (load) {
        return _this.selectedLoads.includes(load.loadId);
      });
    },
    stopTypeLatLngLoadList: function stopTypeLatLngLoadList() {
      var _this2 = this;

      if (this.getLoadsFromIds.length > 1 && this.calculateDeadheadOption) {
        var ret = this.getLoadsFromIds.map(function (item, index) {
          if (item && item.stops) {
            var firstStop = item.stops[0];
            var lastStop = item.stops[item.stops.length - 1];

            if (firstStop && lastStop) {
              if (index === 0) {
                return "loadId".concat(item.loadId, "-last").concat(lastStop.lat, ",").concat(lastStop.long);
              } else if (index === _this2.getLoadsFromIds.length - 1) {
                return "loadId".concat(item.loadId, "-first").concat(firstStop.lat, ",").concat(firstStop.long);
              } else {
                return "loadId".concat(item.loadId, "-first").concat(firstStop.lat, ",").concat(firstStop.long, ";loadId").concat(item.loadId, "-last").concat(lastStop.lat, ",").concat(lastStop.long);
              }
            }
          }

          return '';
        }).join(';');
        return ret;
      }

      return '';
    }
  }),
  props: {
    value: {
      default: []
    },
    nodes: {
      default: []
    },
    columns: {
      default: []
    },
    calculateDeadheadOption: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    uniqueId: {
      type: Number || null,
      default: function _default() {
        return null;
      }
    }
  },
  watch: {
    nodes: {
      handler: function handler() {
        this.columnsData = this.nodes;
      },
      deep: true,
      immediate: true
    },
    value: {
      handler: function handler(val) {
        this.selectedLoads = val;
      },
      deep: true,
      immediate: true
    },
    selectedLoads: {
      handler: function handler(val) {
        this.$emit('input', val);
      },
      deep: true,
      immediate: true
    },
    stopTypeLatLngLoadList: {
      handler: function handler(newValue) {
        console.log(newValue, 'calculating deadhead miles.');
        this.processStops(newValue);
      }
    }
  },
  methods: {
    onDragEnd: function onDragEnd(event) {
      var _this3 = this;

      var elements = jquery__WEBPACK_IMPORTED_MODULE_12___default()(".parent-column".concat(this.uniqueId));
      var sequencedLoadIds = [];
      var reOrderedLoads = [];

      for (var i = 0; i < elements.length; i++) {
        var elementId = jquery__WEBPACK_IMPORTED_MODULE_12___default()(elements[i]).data('id');
        var loadId = elementId.split('-')[2];
        sequencedLoadIds.push(Number(loadId));
        var selectedElement = jquery__WEBPACK_IMPORTED_MODULE_12___default()("[data-id=\"".concat(elementId, "\"]"));
        var selectedHeaders = jquery__WEBPACK_IMPORTED_MODULE_12___default()("[data-child-header-id=\"".concat(elementId, "\"]"));
        var selectedColumns = jquery__WEBPACK_IMPORTED_MODULE_12___default()("[data-child-row-id=\"".concat(elementId, "\"]"));
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(selectedHeaders).insertAfter(selectedElement);
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(selectedColumns).insertAfter(selectedHeaders);
      }

      sequencedLoadIds.forEach(function (loadId) {
        _this3.columnsData.forEach(function (item) {
          if (item.loadId === loadId) {
            reOrderedLoads.push(item);
          }
        });
      });
      this.$emit('changeOrder', reOrderedLoads);
    },
    processStops: function () {
      var _processStops = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(stopsString) {
        var _this4 = this;

        var stops, _loop, i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.$emit('updateEndTripBtnVisibility', true);

                if (stopsString) {
                  _context2.next = 5;
                  break;
                }

                // Reset all empty distance to default
                this.columnsData.forEach(function (load) {
                  // loadId is not unique, cause a load can have multiple drivers, tags, trucks, etc.
                  var defaultValue = _this4.getPlanningLoads.find(function (item) {
                    return item.loadId === load.loadId && (load.driverUserId && load.driverUserId == item.driverUserId || load.ownerOperatorTagId && load.ownerOperatorTagId == item.ownerOperatorTagId || load.truckId && load.truckId == item.truckId);
                  });

                  if (defaultValue) {
                    load.emptyDistance = defaultValue.emptyDistance;
                  }
                });
                return _context2.abrupt("return");

              case 5:
                stops = stopsString.split(';');
                this.getPlanningLoads.forEach(function (item) {
                  var foundLoad = _this4.columnsData.find(function (x) {
                    return x.loadId === item.loadId && (x.driverUserId && x.driverUserId == item.driverUserId || x.ownerOperatorTagId && x.ownerOperatorTagId == item.ownerOperatorTagId || x.truckId && x.truckId == item.truckId);
                  });

                  if (foundLoad) {
                    foundLoad.emptyDistance = item.emptyDistance;
                  }
                });
                _loop =
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _loop(i) {
                  var stop1, stop2, engine, distance, columnsData;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          stop1 = _this4.parseStop(stops[i]);
                          stop2 = _this4.parseStop(stops[i + 1]);

                          if (!(stop1 && stop2)) {
                            _context.next = 8;
                            break;
                          }

                          engine = _this4.pcmiler.apiKey ? 'pc' : 'google';
                          _context.next = 6;
                          return _this4.calculateDistance(stop1, stop2, engine);

                        case 6:
                          distance = _context.sent;

                          if (distance) {
                            columnsData = _this4.columnsData.find(function (load) {
                              return load.loadId === stop2.loadId;
                            });
                            columnsData.emptyDistance = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_10__["parseFloatWithTrim"])(columnsData.emptyDistance + Number(distance)) || 0;
                          }

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop, this);
                });
                i = 0;

              case 9:
                if (!(i < stops.length)) {
                  _context2.next = 14;
                  break;
                }

                return _context2.delegateYield(_loop(i), "t0", 11);

              case 11:
                i += 2;
                _context2.next = 9;
                break;

              case 14:
                _context2.next = 18;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t1 = _context2["catch"](0);

              case 18:
                _context2.prev = 18;
                this.$emit('updateEndTripBtnVisibility', false);
                return _context2.finish(18);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this, [[0, 16, 18, 21]]);
      }));

      return function processStops(_x) {
        return _processStops.apply(this, arguments);
      };
    }(),
    parseStop: function parseStop(stopString) {
      var matchResult = stopString.match(/loadId(\d+)-(first|last)(.*)/);
      if (!matchResult) return;

      var _matchResult = _slicedToArray(matchResult, 4),
          loadId = _matchResult[1],
          type = _matchResult[2],
          latLng = _matchResult[3];

      var _latLng$split$map = latLng.split(',').map(Number),
          _latLng$split$map2 = _slicedToArray(_latLng$split$map, 2),
          lat = _latLng$split$map2[0],
          lng = _latLng$split$map2[1];

      return {
        loadId: parseInt(loadId),
        type: type,
        lat: lat,
        lng: lng
      };
    },
    getRestColumnSize: function getRestColumnSize(stopsLength) {
      return this.columns.length - stopsLength;
    },
    toFixed: function toFixed(x, d) {
      if (!d) return x.toFixed(d); // don't go wrong if no decimal

      return Number(x).toFixed(d).replace(/\.?0+$/, '');
    },
    showPlanningLoads: function showPlanningLoads(colData, index) {
      this.$set(this.columnsData, index, _objectSpread({}, this.columnsData[index], {
        showChildren: !this.columnsData[index].showChildren
      }));
    },
    setCustomInput: function setCustomInput(item, index, fieldName, event) {
      var _this5 = this;

      clearTimeout(this.timeoutHandler);
      var countOfDecimal = ((event + '').split('.')[1] || '').length;
      var decimalSupportMap = {
        totalLoadedDistance: 4
      };
      var decimalToSupport = decimalSupportMap[fieldName] || 2;
      var dataToSet = countOfDecimal > decimalToSupport ? this.toFixed(event, decimalToSupport) : event;
      this.$set(this.columnsData[index], fieldName, dataToSet);
      /* After typing: Check if all decimal are 0 then set the value to non decimal */

      this.timeoutHandler = setTimeout(function () {
        if (_babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_6___default()(parseFloat(event)) && countOfDecimal > 0) {
          var _dataToSet = _this5.toFixed(event, decimalToSupport);

          _this5.$set(_this5.columnsData[index], fieldName, _dataToSet);
        }
      }, 1000);
    },
    showLoadDetails: function showLoadDetails(_ref) {
      var loadId = _ref.loadId;

      if (loadId) {
        this.openLoadSidebar(loadId);
      }
    },
    calculateDistanceByGoogle: function () {
      var _calculateDistanceByGoogle = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(origin, destination) {
        var routes, totalDistanceInMeter;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                routes = [{
                  origin: origin,
                  destination: destination
                }];
                _context3.next = 4;
                return this.getGoogleDistanceBetweenMultipleRoutes(routes);

              case 4:
                totalDistanceInMeter = _context3.sent;
                return _context3.abrupt("return", totalDistanceInMeter / 1609.344 !== 0 ? (totalDistanceInMeter / 1609.344).toFixed(2) : 0);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      return function calculateDistanceByGoogle(_x2, _x3) {
        return _calculateDistanceByGoogle.apply(this, arguments);
      };
    }(),
    calculateDistanceByPCMiler: function () {
      var _calculateDistanceByPCMiler = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3(origin, destination) {
        var _this6 = this;

        var pcMilerLatLogString, latLngList, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                pcMilerLatLogString = '';
                latLngList = [origin, destination];
                latLngList.forEach(function (stop) {
                  pcMilerLatLogString += stop.lng + ',' + stop.lat + ';';
                });
                payload = {
                  stops: pcMilerLatLogString.slice(0, -1),
                  apiKey: this.pcmiler.apiKey
                };
                _context4.next = 6;
                return this.$store.dispatch('pcmiler/getPcmilerTMile', payload).then(function (data) {
                  return data[0].TMiles !== 0 ? data[0].TMiles : 0;
                }).catch(function (e) {
                  _this6.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: 'Something went wrong while calculating miles by PC MILER. Is the API key correct? '
                  });
                });

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));

      return function calculateDistanceByPCMiler(_x4, _x5) {
        return _calculateDistanceByPCMiler.apply(this, arguments);
      };
    }(),
    calculateDistance: function () {
      var _calculateDistance = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4(origin, destination) {
        var engine,
            cacheKey,
            distance,
            _args5 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                engine = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 'google';
                cacheKey = "".concat(origin.lat, ",").concat(origin.lng, "-").concat(destination.lat, ",").concat(destination.lng);

                if (!this.distanceCache.has(cacheKey)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", this.distanceCache.get(cacheKey));

              case 6:
                distance = null;

                if (!(engine === 'google')) {
                  _context5.next = 13;
                  break;
                }

                _context5.next = 10;
                return this.calculateDistanceByGoogle(origin, destination);

              case 10:
                distance = _context5.sent;
                _context5.next = 16;
                break;

              case 13:
                _context5.next = 15;
                return this.calculateDistanceByPCMiler(origin, destination);

              case 15:
                distance = _context5.sent;

              case 16:
                if (distance != null) {
                  // Google Maps API does sometimes fail, I got into this situation.
                  this.distanceCache.set(cacheKey, distance);
                }

                return _context5.abrupt("return", distance);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4, this);
      }));

      return function calculateDistance(_x6, _x7) {
        return _calculateDistance.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    columns: {
      default: []
    },
    driverData: {
      type: Object
    },
    value: {
      type: Array,
      default: []
    },
    isEndTripBtnDisabled: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.setCustomRateInput();
    this.setCustomDistanceInput();
    this.setCustomEmptyDistanceInput();
    /*
    this.customRateInput = this.toFixed(
      this.selectedLoadsCalculatedRate || this.driverData.loadRateTotal,
      2
    );
    this.customDistanceInput = this.toFixed(
      this.selectedLoadsCalculatedDistance ||
        this.driverDataTotalLoadedDistance,
      4
    );
    this.customEmptyDistanceInput = this.toFixed(
      this.selectedLoadsTotalEmptyDistance ||
        this.totalEmptyDistance,
      4
    );
    */
  },
  computed: {
    selectedLoadsData: function selectedLoadsData() {
      var _this = this;

      return this.driverData.children.filter(function (child) {
        return _this.selectedLoads.includes(child.loadId);
      });
    },
    selectedLoadsCalculatedRate: function selectedLoadsCalculatedRate() {
      return this.selectedLoadsData.reduce(function (acc, load) {
        return acc + Number((load || {}).loadRate || 0);
      }, 0);
    },
    selectedLoadsCalculatedDistance: function selectedLoadsCalculatedDistance() {
      return this.selectedLoadsData.reduce(function (acc, load) {
        return acc + Number((load || {}).totalLoadedDistance || 0);
      }, 0);
    },
    driverDataTotalLoadedDistance: function driverDataTotalLoadedDistance() {
      return this.driverData.children.reduce(function (acc, load) {
        return acc + Number((load || {}).totalLoadedDistance || 0);
      }, 0);
    },
    selectedLoadsTotalEmptyDistance: function selectedLoadsTotalEmptyDistance() {
      return this.selectedLoadsData.reduce(function (acc, load) {
        return acc + Number((load || {}).emptyDistance || 0);
      }, 0);
    },
    totalEmptyDistance: function totalEmptyDistance() {
      return this.driverData.children.reduce(function (acc, load) {
        return acc + Number((load || {}).emptyDistance || 0);
      }, 0);
    },
    isEndTripDisabled: function isEndTripDisabled() {
      return this.selectedLoads.length === 0 || this.isEndTripBtnDisabled;
    }
  },
  data: function data() {
    return {
      selectAll: false,
      selectedLoads: [],
      customRateInput: null,
      customDistanceInput: null,
      customEmptyDistanceInput: null
    };
  },
  watch: {
    value: {
      handler: function handler(value) {
        this.selectedLoads = value;
      },
      immediate: true
    },
    selectedLoads: {
      handler: function handler(val) {
        this.$emit('input', val);
        this.selectAll = val.length === this.driverData.children.length;
        this.$forceUpdate();
      },
      immediate: true
    },
    'driverData.loadRateTotal': {
      handler: function handler() {
        this.setCustomRateInput();
      },
      deep: true
    },
    driverDataTotalLoadedDistance: {
      handler: function handler() {
        this.setCustomDistanceInput();
      },
      deep: true
    },
    selectedLoadsCalculatedRate: {
      handler: function handler() {
        this.setCustomRateInput();
      },
      deep: true
    },
    selectedLoadsCalculatedDistance: {
      handler: function handler() {
        this.setCustomDistanceInput();
      },
      deep: true
    },
    totalEmptyDistance: {
      handler: function handler() {
        this.setCustomEmptyDistanceInput();
      },
      deep: true
    },
    selectedLoadsTotalEmptyDistance: {
      handler: function handler() {
        this.setCustomEmptyDistanceInput();
      },
      deep: true
    },
    selectAll: function selectAll() {
      this.selectAllLoads();
    }
  },
  methods: {
    toFixed: function toFixed(x, d) {
      if (!d) return x.toFixed(d); // don't go wrong if no decimal

      return x.toFixed(d).replace(/\.?0+$/, '');
    },
    endTrip: function endTrip() {
      this.$emit('endTrip', _objectSpread({}, this.driverData, {
        children: this.selectedLoadsData,
        totalLoadedDistance: this.customDistanceInput,
        totalEmptyDistance: this.customEmptyDistanceInput
      }));
    },
    selectAllLoads: function selectAllLoads() {
      if (this.selectAll) {
        this.selectedLoads = this.driverData.children.map(function (child) {
          return child.loadId;
        });
      } else if (!this.selectAll && this.driverData.children.length === this.selectedLoads.length) {
        this.selectedLoads = [];
      }
    },
    setCustomRateInput: function setCustomRateInput() {
      this.customRateInput = this.selectedLoadsData.length > 0 ? this.toFixed(this.selectedLoadsCalculatedRate, 2) : this.toFixed(this.driverData.loadRateTotal, 2);
    },
    setCustomDistanceInput: function setCustomDistanceInput() {
      this.customDistanceInput = this.selectedLoadsData.length > 0 ? this.toFixed(this.selectedLoadsCalculatedDistance, 4) : this.toFixed(this.driverDataTotalLoadedDistance, 4);
    },
    setCustomEmptyDistanceInput: function setCustomEmptyDistanceInput() {
      this.customEmptyDistanceInput = this.selectedLoadsData.length > 0 ? this.toFixed(this.selectedLoadsTotalEmptyDistance, 4) : this.toFixed(this.totalEmptyDistance, 4);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    columns: {
      default: []
    },
    count: {
      default: 0
    },
    name: {
      default: '',
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlanningHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlanningHeader.vue */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue");
/* harmony import */ var _PlanningColumns_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlanningColumns.vue */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue");
/* harmony import */ var _PlanningFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlanningFooter.vue */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    driverData: {
      type: Object,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    calculateDeadheadOption: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  components: {
    PlanningHeader: _PlanningHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PlanningColumns: _PlanningColumns_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PlanningFooter: _PlanningFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      selectedLoads: [],
      isEndTripBtnDisabled: false
    };
  },
  computed: {
    uniqueId: function uniqueId() {
      // driverData is driver/truck/tag id, created by formatForDriverGroupBy() in tripV2/planning/PlanningTab/index.vue.
      return this.driverData.id;
    }
  },
  methods: {
    endTrip: function endTrip(data) {
      this.$emit('endTrip', data);
    },
    onChangeOrder: function onChangeOrder(reOrderedLoads) {
      this.driverData.children = reOrderedLoads;
    },
    updateEndTripBtnVisibility: function updateEndTripBtnVisibility(isDisabled) {
      this.isEndTripBtnDisabled = isDisabled;
    }
  },
  watch: {
    driverData: function driverData() {
      this.selectedLoads = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=template&id=8acf475c&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=template&id=8acf475c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "planning-table"
  }, [_c("div", {
    staticClass: "planning-page-header flex justify-between mb-3 items-center"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("h3", {
    staticClass: "ml-2",
    staticStyle: {
      "min-width": "max-content"
    },
    domProps: {
      textContent: _vm._s("Company Drivers")
    }
  }), _vm._v(" "), _vm.allDriversList && _vm.isDriverGroupBy ? _c("PlanningTabFilter", {
    staticClass: "ml-2",
    attrs: {
      filtersToSupport: ["loadDriver", "driverTag"],
      floatDirection: "rtl"
    },
    model: {
      value: _vm.planningTabFilters,
      callback: function callback($$v) {
        _vm.planningTabFilters = $$v;
      },
      expression: "planningTabFilters"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "flex justify-end items-center"
  }, [(_vm.planningData || []).length ? _c("vs-checkbox", {
    staticClass: "calculate-deadhead-checkbox",
    model: {
      value: _vm.calculateDeadheadOption,
      callback: function callback($$v) {
        _vm.calculateDeadheadOption = $$v;
      },
      expression: "calculateDeadheadOption"
    }
  }, [_vm._v("\n        Calculate deadhead miles\n      ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mr-2 flex items-center",
    staticStyle: {
      "min-width": "13.5rem"
    }
  }, [_c("div", {
    staticClass: "m-auto mr-1"
  }, [_c("vs-dropdown", {
    staticClass: "cursor-pointer",
    attrs: {
      "vs-trigger-click": ""
    }
  }, [_c("vs-button", {
    staticClass: "btn-drop w-max",
    staticStyle: {
      "min-height": "35px",
      "max-height": "40px"
    },
    attrs: {
      color: "primary",
      icon: "expand_more",
      size: "small",
      "icon-after": ""
    }
  }, [_c("span", [_vm._v("Group By")]), _vm._v(" "), _vm.selectedGroupBy.name ? _c("span", [_vm._v("\n                : " + _vm._s(_vm.selectedGroupBy.name) + "\n              ")]) : _vm._e()]), _vm._v(" "), _c("vs-dropdown-menu", _vm._l(_vm.groupByOptions, function (item) {
    return _c("vs-dropdown-item", {
      key: item.id,
      on: {
        click: function click($event) {
          return _vm.updateGroupBy(item);
        }
      }
    }, [_vm._v("\n                " + _vm._s(item.name) + "\n              ")]);
  }), 1)], 1)], 1), _vm._v(" "), _c("flat-pickr", {
    ref: "flat-pickr",
    staticClass: "w-full",
    staticStyle: {
      "min-width": "14rem",
      "max-height": "40px"
    },
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
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "trip-card-container"
  }, [_vm._l(_vm.planningData, function (driverData) {
    return _c("div", {
      key: driverData.id,
      staticClass: "overflow-auto"
    }, [_c("table", {
      staticClass: "mt-2"
    }, [_c("TripCard", {
      attrs: {
        calculateDeadheadOption: _vm.calculateDeadheadOption,
        driverData: driverData,
        columns: _vm.columns
      },
      on: {
        endTrip: _vm.endTrip
      }
    })], 1)]);
  }), _vm._v(" "), _vm.apiCompleted && (_vm.planningData || []).length === 0 ? _c("div", {
    staticClass: "flex items-center justify-center"
  }, [_c("strong", [_vm._v(" No trips found ")])]) : _vm._e()], 2)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=template&id=f52751d4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=template&id=f52751d4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("Draggable", {
    attrs: {
      tag: "tbody",
      draggable: ".parent-column".concat(_vm.uniqueId),
      group: {
        name: "items".concat(_vm.uniqueId),
        put: true
      }
    },
    on: {
      end: _vm.onDragEnd
    }
  }, [_vm._l(_vm.columnsData, function (item, i) {
    return [item ? _c("tr", {
      key: item.loadId,
      class: "parent-column".concat(_vm.uniqueId),
      attrs: {
        "data-id": "item-".concat(_vm.uniqueId, "-").concat(item.loadId)
      },
      on: {
        click: function click($event) {
          return _vm.showPlanningLoads(item, i);
        }
      }
    }, [_vm._l(_vm.columns, function (column, index) {
      return _c("td", {
        key: column.field,
        class: {
          "td-children": item.isChildren,
          editable: column.edit
        }
      }, [!item.isChildren ? _c("div", {
        staticClass: "table-td"
      }, [index < 1 ? _c("div", [_c("vs-checkbox", {
        staticClass: "h-full inline-flex",
        attrs: {
          "vs-value": item.loadId,
          "vs-name": item.loadId
        },
        nativeOn: {
          click: function click($event) {
            $event.stopPropagation();
          }
        },
        model: {
          value: _vm.selectedLoads,
          callback: function callback($$v) {
            _vm.selectedLoads = $$v;
          },
          expression: "selectedLoads"
        }
      })], 1) : _vm._e(), _vm._v(" "), column.field === "stops" ? _c("span", [_vm._v("\n            " + _vm._s(item[column.field].length) + "\n          ")]) : [!column.edit ? [column.field === "loadNumber" ? _c("span", {
        staticStyle: {
          cursor: "pointer"
        },
        on: {
          click: function click($event) {
            $event.preventDefault();
            return _vm.showLoadDetails(item);
          }
        }
      }, [_vm._v("\n                " + _vm._s(item[column.field]) + "\n              ")]) : column.field === "loadDriverAssignedTruck" ? _c("span", {
        staticStyle: {
          cursor: "default"
        }
      }, _vm._l(item[column.field], function (truck, i) {
        return _c("span", {
          key: truck.truckId
        }, [_vm._v("\n                  " + _vm._s(truck.truckNumber)), i + 1 !== item[column.field].length ? [_vm._v(",")] : _vm._e()], 2);
      }), 0) : column.field === "loadDriverAssignedTrailer" ? _c("span", {
        staticStyle: {
          cursor: "default"
        }
      }, _vm._l(item[column.field], function (trailer, i) {
        return _c("span", {
          key: trailer.trailerId
        }, [_vm._v("\n                  " + _vm._s(trailer.trailerNumber)), i + 1 !== item[column.field].length ? [_vm._v(",")] : _vm._e()], 2);
      }), 0) : _c("span", {
        staticStyle: {
          cursor: "default"
        }
      }, [_vm._v("\n                " + _vm._s(item[column.field]) + "\n              ")])] : _c("vs-input", {
        staticClass: "border-0 bg-transparent",
        attrs: {
          type: "number"
        },
        on: {
          input: function input($event) {
            return _vm.setCustomInput(item, i, column.field, $event);
          }
        },
        nativeOn: {
          click: function click($event) {
            $event.stopPropagation();
          }
        },
        model: {
          value: item[column.field],
          callback: function callback($$v) {
            _vm.$set(item, column.field, $$v);
          },
          expression: "item[column.field]"
        }
      })]], 2) : _c("div", {
        staticClass: "table-td"
      }, [index < 1 ? _c("div", {
        staticClass: "dropdown-dot"
      }) : _vm._e(), _vm._v("\n          " + _vm._s(item.stopId) + "\n        ")])]);
    }), _vm._v(" "), _c("td")], 2) : _vm._e(), _vm._v(" "), !isNaN(_vm.uniqueId) ? _c("tr", {
      key: "item-".concat(_vm.uniqueId, "-").concat(item.loadId),
      attrs: {
        "data-child-header-id": "item-".concat(_vm.uniqueId, "-").concat(item.loadId)
      }
    }, [_vm._l(_vm.stopColumns, function (stopCol) {
      return _c("th", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: item.showChildren,
          expression: "item.showChildren"
        }],
        key: stopCol.field
      }, [_c("div", {
        staticClass: "planning-header"
      }, [_vm._v("\n          " + _vm._s(stopCol.header) + "\n        ")])]);
    }), _vm._v(" "), _c("th", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.showChildren,
        expression: "item.showChildren"
      }]
    })], 2) : _vm._e(), _vm._v(" "), _vm._l(item.stops, function (stop) {
      return _c("tr", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: item.showChildren,
          expression: "item.showChildren"
        }],
        key: stop.type + stop.stopId + item.loadId,
        attrs: {
          "data-child-row-id": "item-".concat(_vm.uniqueId, "-").concat(item.loadId)
        }
      }, [_vm._l(_vm.stopColumns, function (stopColumn, index2) {
        return _c("td", {
          key: stopColumn.field,
          staticClass: "td-children"
        }, [_c("div", {
          staticClass: "table-td"
        }, [index2 < 1 ? _c("div", {
          staticClass: "dropdown-dot"
        }) : _vm._e(), _vm._v(" "), !stopColumn.edit ? _c("span", [_vm._v("\n            " + _vm._s(stop[stopColumn.field]) + "\n          ")]) : _c("input")])]);
      }), _vm._v(" "), _vm._l(Array(_vm.getRestColumnSize(item.stops.length)), function (item, index3) {
        return _c("td", {
          key: index3,
          staticClass: "td-children"
        });
      })], 2);
    })];
  })], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=template&id=955b111c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=template&id=955b111c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.columns.length ? _c("tfoot", {
    staticClass: "planning-footer"
  }, [_c("tr", [_vm._l(_vm.columns, function (column) {
    return _c("td", {
      key: column.field,
      class: {
        "selected-color": column.field === "loadRate",
        "first-column": column.field === "loadNumber"
      }
    }, [_c("div", {
      staticStyle: {
        "max-width": "110px"
      }
    }, [column.field === "loadNumber" ? [_c("vs-checkbox", {
      staticClass: "h-full inline-flex",
      attrs: {
        "vs-name": "selectAll"
      },
      nativeOn: {
        click: function click($event) {
          $event.stopPropagation();
        }
      },
      model: {
        value: _vm.selectAll,
        callback: function callback($$v) {
          _vm.selectAll = $$v;
        },
        expression: "selectAll"
      }
    }, [_c("span", {
      staticClass: "pl-2"
    }, [_vm._v(" Select All ")])])] : _vm._e(), _vm._v(" "), column.field === "loadRate" ? [_c("vx-input-group", [_c("template", {
      slot: "prepend"
    }, [_c("div", {
      staticClass: "dollar-text"
    }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
      staticClass: "selected-color",
      attrs: {
        readonly: "",
        type: "number"
      },
      model: {
        value: _vm.customRateInput,
        callback: function callback($$v) {
          _vm.customRateInput = $$v;
        },
        expression: "customRateInput"
      }
    })], 2)] : _vm._e(), _vm._v(" "), column.field === "totalLoadedDistance" ? [_c("vs-input", {
      staticClass: "selected-color",
      staticStyle: {
        "max-width": "110px"
      },
      attrs: {
        readonly: "",
        type: "number"
      },
      model: {
        value: _vm.customDistanceInput,
        callback: function callback($$v) {
          _vm.customDistanceInput = $$v;
        },
        expression: "customDistanceInput"
      }
    })] : _vm._e(), _vm._v(" "), column.field === "emptyDistance" ? [_c("vs-input", {
      staticClass: "selected-color",
      staticStyle: {
        "max-width": "110px"
      },
      attrs: {
        readonly: "",
        type: "number"
      },
      model: {
        value: _vm.customEmptyDistanceInput,
        callback: function callback($$v) {
          _vm.customEmptyDistanceInput = $$v;
        },
        expression: "customEmptyDistanceInput"
      }
    })] : _vm._e()], 2)]);
  }), _vm._v(" "), _c("td", [_c("div", [_c("vs-button", {
    attrs: {
      color: "#52B587",
      type: "filled",
      disabled: _vm.isEndTripDisabled
    },
    on: {
      click: _vm.endTrip
    }
  }, [_vm._v("\n          End trip\n        ")])], 1)])], 2)]) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=template&id=52f64938&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=template&id=52f64938&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", [_c("tr", [_vm._l(_vm.columns, function (item, index) {
    return _c("th", {
      key: item.field,
      staticStyle: {
        "min-width": "110px"
      }
    }, [index > 0 ? _c("div", {
      staticClass: "planning-header"
    }, [_vm._v("\n        " + _vm._s(item.header) + "\n      ")]) : _c("div", {
      staticClass: "planning-header"
    }, [_c("div", {
      staticClass: "driver-name"
    }, [_vm._v("\n          " + _vm._s(_vm.name || item.header) + "\n        ")]), _vm._v(" "), _vm.count ? _c("span", [_vm._v(" " + _vm._s(_vm.count) + " Loads ")]) : _vm._e()])]);
  }), _vm._v(" "), _c("th")], 2)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=template&id=6d1006c8&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=template&id=6d1006c8& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "planning-trip-card"
  }, [_c("planning-header", {
    attrs: {
      columns: _vm.columns,
      count: _vm.driverData.count,
      name: _vm.driverData.name
    }
  }), _vm._v(" "), _c("planning-columns", {
    attrs: {
      nodes: _vm.driverData.children,
      columns: _vm.columns,
      calculateDeadheadOption: _vm.calculateDeadheadOption,
      uniqueId: _vm.uniqueId
    },
    on: {
      changeOrder: _vm.onChangeOrder,
      updateEndTripBtnVisibility: _vm.updateEndTripBtnVisibility
    },
    model: {
      value: _vm.selectedLoads,
      callback: function callback($$v) {
        _vm.selectedLoads = $$v;
      },
      expression: "selectedLoads"
    }
  }), _vm._v(" "), _c("planning-footer", {
    attrs: {
      isEndTripBtnDisabled: _vm.isEndTripBtnDisabled,
      columns: _vm.columns,
      driverData: _vm.driverData
    },
    on: {
      endTrip: _vm.endTrip
    },
    model: {
      value: _vm.selectedLoads,
      callback: function callback($$v) {
        _vm.selectedLoads = $$v;
      },
      expression: "selectedLoads"
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__(/*! ../modules/es7.map.to-json */ "./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__(/*! ../modules/es7.map.of */ "./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__(/*! ../modules/es7.map.from */ "./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/fn/number/is-integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/fn/number/is-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-integer */ "./node_modules/core-js/library/modules/es6.number.is-integer.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Number.isInteger;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.number.is-integer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.number.is-integer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/library/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=style&index=0&id=8acf475c&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=style&index=0&id=8acf475c&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".planning-table {\n  /* height: 100vh; */\n}[dir] .planning-table {\n  background: #f7f8f9;\n  padding-top: 5px;\n}\n.planning-table table {\n  width: 100%;\n}\n.planning-table .trip-card-container {\n  overflow-y: auto;\n  height: calc(100vh - 120px);\n  /* scroll bar */\n}\n.planning-table .trip-card-container::-webkit-scrollbar-thumb:horizontal {\n  /*The style of the horizontal scrollbar*/\n  width: 4px;\n  -webkit-border-radius: 6px;\n}\n[dir] .planning-table .trip-card-container::-webkit-scrollbar-thumb:horizontal {\n  background-color: #cccccc;\n}\n.planning-table .trip-card-container::-webkit-scrollbar-track-piece { /*The background color of the scrollbar*/\n  -webkit-border-radius: 0; /*Fillet width of the scrollbar*/\n}\n[dir] .planning-table .trip-card-container::-webkit-scrollbar-track-piece {\n  background-color: #fff;\n}\n.planning-table .trip-card-container::-webkit-scrollbar {\n  width: 10px; /*the width of the scrollbar*/\n  height: 8px; /*the height of the scroll bar*/\n}\n.planning-table .trip-card-container::-webkit-scrollbar-thumb:vertical {\n  /*The style of the vertical scrollbar*/\n  height: 50px;\n  -webkit-border-radius: 4px;\n  outline: 2px solid #fff;\n  outline-offset: -2px;\n}\n[dir] .planning-table .trip-card-container::-webkit-scrollbar-thumb:vertical {\n  background-color: #999;\n  border: 2px solid #fff;\n}\n.planning-table .trip-card-container::-webkit-scrollbar-thumb:hover {\n  /*The hover style of the scroll bar*/\n  height: 50px;\n  -webkit-border-radius: 4px;\n}\n[dir] .planning-table .trip-card-container::-webkit-scrollbar-thumb:hover {\n  background-color: #9f9f9f;\n}\n[dir] .planning-table .multiselect__placeholder {\n  margin-bottom: 0 !important;\n}\n.planning-table .w-max {\n  width: -moz-max-content;\n  width: max-content;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td[data-v-f52751d4] {\n  border-block-end-color: rgb(240, 241, 243);\n  color: #666666;\n}[dir] td[data-v-f52751d4] {\n  background: #f7f8f9;\n  padding: 5px;\n}[dir=ltr] td[data-v-f52751d4] {\n  box-shadow: 1px 2px 1px #f0f0f1;\n}[dir=rtl] td[data-v-f52751d4] {\n  box-shadow: -1px 2px 1px #f0f0f1;\n}\n[dir] td.editable[data-v-f52751d4] {\n  padding: 0;\n}\ntd input[data-v-f52751d4] {\n  color: #666666;\n  width: 100%;\n}\ntd .table-td[data-v-f52751d4] {\n  display: flex;\n  align-items: center;\n  font-size: 13.5px;\n}\ntd .table-td .dropdown-dot[data-v-f52751d4] {\n  width: 8px;\n  height: 8px;\n}\n[dir] td .table-td .dropdown-dot[data-v-f52751d4] {\n  background: rgb(211, 211, 211);\n  border-radius: 2px;\n}\n[dir=ltr] td .table-td .dropdown-dot[data-v-f52751d4] {\n  margin-right: 5px;\n}\n[dir=rtl] td .table-td .dropdown-dot[data-v-f52751d4] {\n  margin-left: 5px;\n}\n[dir] td .table-td .span[data-v-f52751d4] {\n  cursor: default;\n}\ntd .table-td[data-v-f52751d4] .vs-input {\n  width: 100%;\n  /* Chrome, Safari, Edge, Opera */\n  /*!* Firefox *!*/\n}\n[dir] td .table-td[data-v-f52751d4] .vs-input input, [dir] td .table-td[data-v-f52751d4] .vs-input .vs-input--input {\n  border: none !important;\n  background: #f7f8f9 !important;\n  box-shadow: none !important;\n}\ntd .table-td[data-v-f52751d4] .vs-input input::-webkit-outer-spin-button,\ntd .table-td[data-v-f52751d4] .vs-input input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n[dir] td .table-td[data-v-f52751d4] .vs-input input::-webkit-outer-spin-button, [dir] td .table-td[data-v-f52751d4] .vs-input input::-webkit-inner-spin-button {\n  margin: 0;\n}\ntd .table-td[data-v-f52751d4] .vs-input input[type=number] {\n  -moz-appearance: textfield;\n}\ntd .table-td[data-v-f52751d4] .vs-input input[type=number]::-webkit-inner-spin-button,\ntd .table-td[data-v-f52751d4] .vs-input input[type=number]::-webkit-outer-spin-button {\n  opacity: 1;\n}\n.planning-header[data-v-f52751d4] {\n  font-weight: 500;\n  color: #000;\n}\n[dir] .td-children[data-v-f52751d4] {\n  background: #fff;\n}\n[dir=ltr] .td-children[data-v-f52751d4]:first-child {\n  padding-left: 30px;\n}\n[dir=rtl] .td-children[data-v-f52751d4]:first-child {\n  padding-right: 30px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] tfoot[data-v-955b111c] {\n  background: #ecf0f3;\n}\ntfoot tr[data-v-955b111c] {\n  height: 38px;\n}\n[dir] tfoot tr td[data-v-955b111c] {\n  padding: 0px 12px;\n}\n[dir=ltr] tfoot tr .first-column[data-v-955b111c] {\n  padding: 0 12px 0 6px;\n}\n[dir=rtl] tfoot tr .first-column[data-v-955b111c] {\n  padding: 0 6px 0 12px;\n}\ntfoot tr .first-column > div[data-v-955b111c] {\n  display: flex;\n}\n[dir] tfoot .selected-color[data-v-955b111c] {\n  background: #dce6ec;\n  border-radius: 10px;\n  padding: 0 !important;\n}\n[dir] tfoot .rate-input[data-v-955b111c] {\n  border: 1px inset #ccc;\n}\ntfoot[data-v-955b111c] .vs-input {\n  /* Chrome, Safari, Edge, Opera */\n  /*!* Firefox *!*/\n}\ntfoot[data-v-955b111c] .vs-input input {\n  width: 100%;\n  height: 100%;\n}\n[dir] tfoot[data-v-955b111c] .vs-input input {\n  border: none !important;\n  background: #dce6ec;\n  box-shadow: none;\n  padding: 1.4rem 0.5em !important;\n}\ntfoot[data-v-955b111c] .vs-input input::-webkit-outer-spin-button,\ntfoot[data-v-955b111c] .vs-input input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n[dir] tfoot[data-v-955b111c] .vs-input input::-webkit-outer-spin-button, [dir] tfoot[data-v-955b111c] .vs-input input::-webkit-inner-spin-button {\n  margin: 0;\n}\ntfoot[data-v-955b111c] .vs-input input[type=number] {\n  -moz-appearance: textfield;\n}\ntfoot[data-v-955b111c] .vs-input input[type=number]::-webkit-inner-spin-button,\ntfoot[data-v-955b111c] .vs-input input[type=number]::-webkit-outer-spin-button {\n  opacity: 1;\n}\ntfoot[data-v-955b111c] .dollar-text {\n  color: inherit !important;\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] tfoot[data-v-955b111c] .dollar-text {\n  margin-left: 10px;\n}\n[dir=rtl] tfoot[data-v-955b111c] .dollar-text {\n  margin-right: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th[data-v-52f64938] {\n  height: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #000;\n  color: #000;\n  outline: none;\n}[dir] th[data-v-52f64938] {\n  background: #f7f8f9;\n  border: 0;\n}\nth .planning-header[data-v-52f64938] {\n  font-weight: 500;\n}\n.planning-header[data-v-52f64938] {\n  display: flex;\n  align-items: center;\n}\n.planning-header .driver-name[data-v-52f64938] {\n  min-width: 100px;\n  max-width: 200px;\n  word-break: break-all;\n}\n[dir] .planning-header .driver-name[data-v-52f64938] {\n  background: #f5da49;\n  padding: 10px;\n}\n[dir=ltr] .planning-header .driver-name[data-v-52f64938] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  margin-right: 8px;\n}\n[dir=rtl] .planning-header .driver-name[data-v-52f64938] {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  margin-left: 8px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=style&index=0&id=8acf475c&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=style&index=0&id=8acf475c&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=8acf475c&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=style&index=0&id=8acf475c&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_8acf475c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8acf475c& */ "./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=template&id=8acf475c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_8acf475c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=8acf475c&lang=scss& */ "./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=style&index=0&id=8acf475c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_8acf475c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_8acf475c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=style&index=0&id=8acf475c&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=style&index=0&id=8acf475c&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf475c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=8acf475c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=style&index=0&id=8acf475c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf475c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf475c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf475c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf475c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=template&id=8acf475c&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=template&id=8acf475c& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8acf475c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=8acf475c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue?vue&type=template&id=8acf475c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8acf475c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8acf475c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlanningColumns_vue_vue_type_template_id_f52751d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlanningColumns.vue?vue&type=template&id=f52751d4&scoped=true& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=template&id=f52751d4&scoped=true&");
/* harmony import */ var _PlanningColumns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlanningColumns.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PlanningColumns_vue_vue_type_style_index_0_id_f52751d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PlanningColumns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlanningColumns_vue_vue_type_template_id_f52751d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlanningColumns_vue_vue_type_template_id_f52751d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f52751d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningColumns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_style_index_0_id_f52751d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=style&index=0&id=f52751d4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_style_index_0_id_f52751d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_style_index_0_id_f52751d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_style_index_0_id_f52751d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_style_index_0_id_f52751d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=template&id=f52751d4&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=template&id=f52751d4&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_template_id_f52751d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningColumns.vue?vue&type=template&id=f52751d4&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningColumns.vue?vue&type=template&id=f52751d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_template_id_f52751d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningColumns_vue_vue_type_template_id_f52751d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlanningFooter_vue_vue_type_template_id_955b111c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlanningFooter.vue?vue&type=template&id=955b111c&scoped=true& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=template&id=955b111c&scoped=true&");
/* harmony import */ var _PlanningFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlanningFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PlanningFooter_vue_vue_type_style_index_0_id_955b111c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PlanningFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlanningFooter_vue_vue_type_template_id_955b111c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlanningFooter_vue_vue_type_template_id_955b111c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "955b111c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_style_index_0_id_955b111c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=style&index=0&id=955b111c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_style_index_0_id_955b111c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_style_index_0_id_955b111c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_style_index_0_id_955b111c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_style_index_0_id_955b111c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=template&id=955b111c&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=template&id=955b111c&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_template_id_955b111c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningFooter.vue?vue&type=template&id=955b111c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningFooter.vue?vue&type=template&id=955b111c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_template_id_955b111c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningFooter_vue_vue_type_template_id_955b111c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlanningHeader_vue_vue_type_template_id_52f64938_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlanningHeader.vue?vue&type=template&id=52f64938&scoped=true& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=template&id=52f64938&scoped=true&");
/* harmony import */ var _PlanningHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlanningHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PlanningHeader_vue_vue_type_style_index_0_id_52f64938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PlanningHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlanningHeader_vue_vue_type_template_id_52f64938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlanningHeader_vue_vue_type_template_id_52f64938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52f64938",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_style_index_0_id_52f64938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=style&index=0&id=52f64938&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_style_index_0_id_52f64938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_style_index_0_id_52f64938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_style_index_0_id_52f64938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_style_index_0_id_52f64938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=template&id=52f64938&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=template&id=52f64938&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_template_id_52f64938_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlanningHeader.vue?vue&type=template&id=52f64938&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/PlanningHeader.vue?vue&type=template&id=52f64938&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_template_id_52f64938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanningHeader_vue_vue_type_template_id_52f64938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6d1006c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6d1006c8& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=template&id=6d1006c8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6d1006c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6d1006c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=template&id=6d1006c8&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=template&id=6d1006c8& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d1006c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6d1006c8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/components/TripCard/index.vue?vue&type=template&id=6d1006c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d1006c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d1006c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=72.js.map