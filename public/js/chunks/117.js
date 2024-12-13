(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_ReportLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ReportLayout */ "./resources/js/src/views/pages/report/components/ReportLayout.vue");
/* harmony import */ var _mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/mixins/datatableMixin */ "./resources/js/src/mixins/datatableMixin.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DropTrailerReport',
  mixins: [_mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_7__["default"]],
  components: {
    ReportLayout: _components_ReportLayout__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      selected_date_range: '',
      items: {
        data: [],
        links: {},
        meta: {}
      },
      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range'
      }
    };
  },
  methods: {
    commonApiCall: function () {
      var _commonApiCall = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var filter,
            selectedDates,
            data,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filter = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                selectedDates = this.selected_date_range.split(' to '); // if (selectedDates.length < 2) {
                //   this.$vs.notify({
                //     color: 'danger',
                //     title: 'Error',
                //     text: 'Please select report period.'
                //   })
                //   return 0
                // }

                filter = _objectSpread({}, filter, {
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                });

                if (filter.hasOwnProperty('toDownload')) {
                  this.$vs.loading({
                    container: '#button-export-loading',
                    scale: 0.45
                  });
                } else {
                  this.loading = true;
                }

                _context.prev = 4;
                _context.next = 7;
                return this.$store.dispatch('report/getDropTrailerReportDatatable', {
                  eventForServer: this.eventForServer,
                  filter: filter
                });

              case 7:
                data = _context.sent;

                if (!filter.hasOwnProperty('toDownload')) {
                  _context.next = 11;
                  break;
                }

                window.location = data.download_url;
                return _context.abrupt("return", 0);

              case 11:
                this.items = data;
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context.t0.response.data.message
                });

              case 17:
                _context.prev = 17;

                if (filter.hasOwnProperty('toDownload')) {
                  this.$vs.loading.close('#button-export-loading > .con-vs-loading');
                } else {
                  this.loading = false;
                }

                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 14, 17, 20]]);
      }));

      return function commonApiCall() {
        return _commonApiCall.apply(this, arguments);
      };
    }(),
    exportCSV: function exportCSV() {
      this.commonApiCall({
        toDownload: 1
      });
    },
    onConfirmMarkTrailerPickedUp: function onConfirmMarkTrailerPickedUp(load) {
      var _this = this;

      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        title: 'Trailer Pickup',
        text: 'Are you sure. You want to mark this trailer as picked up.',
        accept: function accept() {
          return _this.markTrailerPickedUp(load);
        }
      });
    },
    markTrailerPickedUp: function () {
      var _markTrailerPickedUp = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(load) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$vs.loading();
                _context2.prev = 1;
                payload = {
                  id: load.drivers.load_driver_id
                };
                _context2.next = 5;
                return this.$store.dispatch('load/trailerPickedUp', payload);

              case 5:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Trailer Picked up',
                  text: 'Trailer marked as picked up successfully.'
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                this.$vs.notify({
                  title: 'Error',
                  text: _context2.t0.response.data.message,
                  color: 'danger'
                });

              case 11:
                _context2.prev = 11;
                this.$vs.loading.close(); // refresh datatable

                _context2.next = 15;
                return this.commonApiCall();

              case 15:
                return _context2.finish(11);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8, 11, 16]]);
      }));

      return function markTrailerPickedUp(_x) {
        return _markTrailerPickedUp.apply(this, arguments);
      };
    }()
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=template&id=b2e1925c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=template&id=b2e1925c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Drop Trailer Report"
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
        }, [_vm._v("\n                    Generate Report\n                  ")])], 1)]), _vm._v(" "), _c("div", {
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
      field: "load_unique_id",
      header: "Load #",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.load_unique_id) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "trailer_number",
      header: "Trailer #",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.drivers.trailer.trailer_number) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "driver_names",
      header: "Driver(s)"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "flex items-center space-x-2"
        }, _vm._l(slotProps.data.drivers.drivers, function (driver) {
          return _c("vs-chip", {
            key: driver.driver_id,
            attrs: {
              color: "primary"
            }
          }, [_vm._v("\n                  " + _vm._s(driver.driver_details.name) + "\n                ")]);
        }), 1)];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "delivery_date",
      header: "Delivery Date",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.receiver.delivery_date) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "receiver_location",
      header: "Delivery Location",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.receiver.city) + " "), _c("span", [_vm._v(",")]), _vm._v(" " + _vm._s(slotProps.data.receiver.state) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Actions",
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var data = _ref.data;
        return [!data.drivers.is_trailer_picked_up ? [_c("div", {
          staticClass: "flex items-center"
        }, [_c("vx-tooltip", {
          attrs: {
            text: "Mark Trailer as Picked up"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "primary",
            type: "border",
            "icon-pack": "feather",
            icon: "icon-check-circle",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.onConfirmMarkTrailerPickedUp(data);
            }
          }
        })], 1)], 1)] : _vm._e()];
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

/***/ "./resources/js/src/views/pages/report/DropTrailerReport.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/report/DropTrailerReport.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropTrailerReport_vue_vue_type_template_id_b2e1925c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropTrailerReport.vue?vue&type=template&id=b2e1925c&scoped=true& */ "./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=template&id=b2e1925c&scoped=true&");
/* harmony import */ var _DropTrailerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropTrailerReport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropTrailerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropTrailerReport_vue_vue_type_template_id_b2e1925c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropTrailerReport_vue_vue_type_template_id_b2e1925c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b2e1925c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/DropTrailerReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropTrailerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropTrailerReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropTrailerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=template&id=b2e1925c&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=template&id=b2e1925c&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DropTrailerReport_vue_vue_type_template_id_b2e1925c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropTrailerReport.vue?vue&type=template&id=b2e1925c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/DropTrailerReport.vue?vue&type=template&id=b2e1925c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DropTrailerReport_vue_vue_type_template_id_b2e1925c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DropTrailerReport_vue_vue_type_template_id_b2e1925c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=117.js.map