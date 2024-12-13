(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/mixins/datatableMixin */ "./resources/js/src/mixins/datatableMixin.js");
/* harmony import */ var _components_ReportLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ReportLayout */ "./resources/js/src/views/pages/report/components/ReportLayout.vue");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RevenueByDispatcherSalesReport",
  mixins: [_mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_8__["default"]],
  components: {
    ReportLayout: _components_ReportLayout__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      items: {
        data: [],
        links: {},
        meta: {}
      },
      dispatchers: [],
      dispatcher_options: [],
      selected_dispatcher_option: "",
      selected_date_range: "",
      // Flate Pikr Config
      flat_pikr_config: {
        mode: "range"
      }
    };
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getAllDispatchers();

            case 2:
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
  methods: {
    commonApiCall: function () {
      var _commonApiCall = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
        var filter,
            dispatcherIdsPayload,
            selectedDates,
            payload,
            data,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                filter = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                dispatcherIdsPayload = null;

                if (this.selected_dispatcher_option) {
                  dispatcherIdsPayload = this.selected_dispatcher_option.user_id == "all" ? null : [this.selected_dispatcher_option.user_id];
                }

                selectedDates = this.selected_date_range.split(" to ");

                if (!(selectedDates.length < 2)) {
                  _context2.next = 7;
                  break;
                }

                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: "Please select report period."
                });
                return _context2.abrupt("return", 0);

              case 7:
                filter = _objectSpread({}, filter, {
                  dispatcherIds: dispatcherIdsPayload,
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                });

                if (filter.hasOwnProperty("toDownload")) {
                  this.$vs.loading({
                    container: "#button-export-loading",
                    scale: 0.45
                  });
                } else {
                  this.loading = true;
                }

                _context2.prev = 9;
                payload = {
                  eventForServer: this.eventForServer,
                  filter: filter
                };
                _context2.next = 13;
                return this.$store.dispatch("report/getRevenueByDispatcherSalesReportDatatable", payload);

              case 13:
                data = _context2.sent;

                if (!filter.hasOwnProperty("toDownload")) {
                  _context2.next = 17;
                  break;
                }

                window.location = data.download_url;
                return _context2.abrupt("return", 0);

              case 17:
                this.items = data;
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](9);
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: _context2.t0.response.data.message
                });

              case 23:
                _context2.prev = 23;

                if (filter.hasOwnProperty("toDownload")) {
                  this.$vs.loading.close("#button-export-loading > .con-vs-loading");
                } else {
                  this.loading = false;
                }

                return _context2.finish(23);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[9, 20, 23, 26]]);
      }));

      return function commonApiCall() {
        return _commonApiCall.apply(this, arguments);
      };
    }(),
    getAllDispatchers: function () {
      var _getAllDispatchers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {
        var filters, _ref, payload, dispatcherOptions;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.$vs.loading();
                _context3.prev = 1;
                filters = {
                  status_with: "active,inactive"
                };
                _context3.next = 5;
                return this.$store.dispatch("company-user/getAllDispatchers", filters);

              case 5:
                _ref = _context3.sent;
                payload = _ref.payload;
                dispatcherOptions = payload.data.map(function (dispatcher) {
                  return _objectSpread({}, dispatcher, {
                    full_name: "".concat(dispatcher.user_details.first_name, " ").concat(dispatcher.user_details.last_name)
                  });
                });
                this.dispatchers = dispatcherOptions;
                this.dispatcher_options = [{
                  user_id: "all",
                  full_name: "Select All"
                }].concat(_toConsumableArray(dispatcherOptions));
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](1);
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: _context3.t0.response.data.message
                });

              case 15:
                _context3.prev = 15;
                this.$vs.loading.close();
                return _context3.finish(15);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 12, 15, 18]]);
      }));

      return function getAllDispatchers() {
        return _getAllDispatchers.apply(this, arguments);
      };
    }(),
    exportCSV: function exportCSV() {
      this.commonApiCall({
        toDownload: 1
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReportLayout',
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function created() {
      return _created.apply(this, arguments);
    };
  }()
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=template&id=029edc9c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=template&id=029edc9c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("report-layout", [_c("vx-card", {
    staticClass: "w-full",
    attrs: {
      title: "Revenue by Dispatcher Sales Report"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("DataTable", {
    ref: "datatable",
    attrs: {
      value: _vm.items.data,
      lazy: true,
      paginator: true,
      rows: _vm.rows,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      filters: _vm.filters,
      loading: _vm.loading,
      scrollable: true,
      rowsPerPageOptions: _vm.rowsPerPageOptions
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event);
      },
      page: function page($event) {
        return _vm.onPage($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-full flex items-center justify-between"
        }, [_c("div", {
          staticClass: "w-1/2 flex items-end space-x-2"
        }, [_c("div", {
          staticClass: "w-1/3"
        }, [_c("label", {
          staticClass: "text-sm opacity-75"
        }, [_vm._v("Select Dispatcher")]), _vm._v(" "), _c("v-select", {
          staticClass: "w-full",
          attrs: {
            options: _vm.dispatcher_options,
            label: "full_name",
            reduce: function reduce(option) {
              return {
                user_id: option.user_id,
                full_name: option.full_name
              };
            }
          },
          model: {
            value: _vm.selected_dispatcher_option,
            callback: function callback($$v) {
              _vm.selected_dispatcher_option = $$v;
            },
            expression: "selected_dispatcher_option"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "w-1/3"
        }, [_c("label", {
          staticClass: "text-sm opacity-75"
        }, [_vm._v("Choose Period")]), _vm._v(" "), _c("flat-pickr", {
          staticClass: "w-full",
          attrs: {
            config: _vm.flat_pikr_config
          },
          model: {
            value: _vm.selected_date_range,
            callback: function callback($$v) {
              _vm.selected_date_range = $$v;
            },
            expression: "selected_date_range"
          }
        })], 1), _vm._v(" "), _c("div", [_c("vs-button", {
          attrs: {
            color: "primary"
          },
          on: {
            click: _vm.commonApiCall
          }
        }, [_vm._v("Generate Report")])], 1)]), _vm._v(" "), _c("div", {
          staticClass: "w-1/2 flex items-center justify-end"
        }, [_c("vs-button", {
          staticClass: "vs-con-loading__container",
          attrs: {
            color: "primary",
            type: "border",
            "icon-pack": "feather",
            icon: "icon-external-link",
            id: "button-export-loading"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.exportCSV.apply(null, arguments);
            }
          }
        }, [_vm._v("Export\n                ")])], 1)])];
      },
      proxy: true
    }, {
      key: "empty",
      fn: function fn() {
        return [_vm._v("\n            No records found\n          ")];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_vm._v("\n            In total there are " + _vm._s(_vm.totalRecords) + " items.\n          ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._v(" "), _c("Column", {
    attrs: {
      field: "customer.company_name",
      header: "Customer Name",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.customer.company_name) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "total_revenue",
      header: "Total Revenue",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("span", [_vm._v("$")]), _vm._v(" " + _vm._s(slotProps.data.total_revenue) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "percentage_of_revenue",
      header: "% of Revenue",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.percentage_of_revenue) + " "), _c("span", [_vm._v("%")])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "number_of_loads",
      header: "No. of Loads",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.number_of_loads) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "load_total_miles",
      header: "Total Miles",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.load_total_miles) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "revenue_per_mile",
      header: "Revenue/Mile",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("span", [_vm._v("$")]), _vm._v(" " + _vm._s(slotProps.data.revenue_per_mile) + "\n            ")];
      }
    }])
  })], 1)], 1)])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=template&id=e08a3f5e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=template&id=e08a3f5e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-row space-y-6"
  }, [_c("div", {
    staticClass: "vx-col w-1/6"
  }, [_c("vs-button", {
    attrs: {
      color: "dark",
      type: "border",
      "icon-pack": "feather",
      icon: "icon-arrow-left",
      to: {
        name: "report"
      }
    }
  }, [_vm._v("Back\n    ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_vm._t("default")], 2)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/mixins/datatableMixin.js":
/*!***************************************************!*\
  !*** ./resources/js/src/mixins/datatableMixin.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rows: 10,
      rowsPerPageOptions: [5, 10, 15],
      eventForServer: null,
      loading: false,
      dynamicSortField: 'name',
      dynamicSortOrder: 1,
      filters: {}
    };
  },
  computed: {
    totalRecords: function totalRecords() {
      return this.items.meta ? this.items.meta.total : 0;
    }
  },
  methods: {
    onPage: function onPage(event) {
      this.eventForServer = event;
      this.commonApiCall(this.filters);
    },
    onSort: function onSort(event) {
      this.eventForServer = event;
      this.commonApiCall(this.filters);
    },
    onInputFilter: function onInputFilter() {
      this.commonApiCall(this.filters);
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RevenueByDispatcherSalesReport_vue_vue_type_template_id_029edc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RevenueByDispatcherSalesReport.vue?vue&type=template&id=029edc9c&scoped=true& */ "./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=template&id=029edc9c&scoped=true&");
/* harmony import */ var _RevenueByDispatcherSalesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RevenueByDispatcherSalesReport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RevenueByDispatcherSalesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RevenueByDispatcherSalesReport_vue_vue_type_template_id_029edc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RevenueByDispatcherSalesReport_vue_vue_type_template_id_029edc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "029edc9c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevenueByDispatcherSalesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RevenueByDispatcherSalesReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevenueByDispatcherSalesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=template&id=029edc9c&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=template&id=029edc9c&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RevenueByDispatcherSalesReport_vue_vue_type_template_id_029edc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RevenueByDispatcherSalesReport.vue?vue&type=template&id=029edc9c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/RevenueByDispatcherSalesReport.vue?vue&type=template&id=029edc9c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RevenueByDispatcherSalesReport_vue_vue_type_template_id_029edc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RevenueByDispatcherSalesReport_vue_vue_type_template_id_029edc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportLayout.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportLayout.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportLayout_vue_vue_type_template_id_e08a3f5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportLayout.vue?vue&type=template&id=e08a3f5e&scoped=true& */ "./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=template&id=e08a3f5e&scoped=true&");
/* harmony import */ var _ReportLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportLayout.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportLayout_vue_vue_type_template_id_e08a3f5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportLayout_vue_vue_type_template_id_e08a3f5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e08a3f5e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/components/ReportLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=template&id=e08a3f5e&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=template&id=e08a3f5e&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportLayout_vue_vue_type_template_id_e08a3f5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportLayout.vue?vue&type=template&id=e08a3f5e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportLayout.vue?vue&type=template&id=e08a3f5e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportLayout_vue_vue_type_template_id_e08a3f5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportLayout_vue_vue_type_template_id_e08a3f5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=121.js.map