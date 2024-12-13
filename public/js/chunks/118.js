(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/IftaReport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/IftaReport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ReportLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ReportLayout */ "./resources/js/src/views/pages/report/components/ReportLayout.vue");
/* harmony import */ var _mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/datatableMixin */ "./resources/js/src/mixins/datatableMixin.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "IFTAReport",
  mixins: [_mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    ReportLayout: _components_ReportLayout__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      items: {
        data: [],
        links: {},
        meta: {}
      },
      reportYear: "2023",
      selectedQuarterOption: 2,
      flatPikrConfig: {
        dateFormat: "Y",
        mode: "single"
      }
    };
  },
  created: function created() {},
  methods: {
    getReport: function () {
      var _getReport = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var payload, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$vs.loading();
                _context.prev = 1;
                payload = {
                  year: Number(this.reportYear),
                  quarter: this.selectedQuarterOption
                };
                _context.next = 5;
                return this.$store.dispatch("report/getReportIfta", payload);

              case 5:
                data = _context.sent;
                this.items.data = data.jurisdictions;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: _context.t0.response.data.message
                });

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

      return function getReport() {
        return _getReport.apply(this, arguments);
      };
    }(),
    truncateToTwoDecimalPlaces: function truncateToTwoDecimalPlaces(number) {
      return number.toFixed(2);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/IftaReport.vue?vue&type=template&id=29e44154&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/IftaReport.vue?vue&type=template&id=29e44154& ***!
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

  return _c("report-layout", [_c("vx-card", {
    staticClass: "w-full",
    attrs: {
      title: "IFTA Report"
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
      paginator: false,
      rows: _vm.rows,
      rowHover: true,
      loading: _vm.loading,
      scrollable: true
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
        }, [_vm._v("Year")]), _vm._v(" "), _c("flat-pickr", {
          staticClass: "w-full",
          attrs: {
            config: _vm.flatPikrConfig
          },
          model: {
            value: _vm.reportYear,
            callback: function callback($$v) {
              _vm.reportYear = $$v;
            },
            expression: "reportYear"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "w-1/3"
        }, [_c("label", {
          staticClass: "text-sm opacity-75"
        }, [_vm._v("Quarter")]), _vm._v(" "), _c("v-select", {
          staticClass: "w-full",
          attrs: {
            options: [1, 2, 3, 4],
            label: "full_name"
          },
          model: {
            value: _vm.selectedQuarterOption,
            callback: function callback($$v) {
              _vm.selectedQuarterOption = $$v;
            },
            expression: "selectedQuarterOption"
          }
        })], 1), _vm._v(" "), _c("div", [_c("vs-button", {
          attrs: {
            color: "primary"
          },
          on: {
            click: _vm.getReport
          }
        }, [_vm._v("\n                    Generate Report\n                  ")])], 1)])])];
      },
      proxy: true
    }, {
      key: "empty",
      fn: function fn() {
        return [_vm._v(" No records found ")];
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
      field: "state",
      header: "State"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.state) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "taxableMiles",
      header: "Taxable Miles"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(_vm.truncateToTwoDecimalPlaces(slotProps.data.taxableMiles)) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "gallonsPaid",
      header: "Gallons Paid"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(_vm.truncateToTwoDecimalPlaces(slotProps.data.gallonsPaid)) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "gallonsConsumed",
      header: "Gallons Consumed"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(_vm.truncateToTwoDecimalPlaces(slotProps.data.gallonsConsumed)) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "gallonsNetTaxable",
      header: "Gallons Net Taxable"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(_vm.truncateToTwoDecimalPlaces(slotProps.data.gallonsNetTaxable)) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "stateTaxRate",
      header: "State Tax Rate"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.stateTaxRate.toFixed(4)) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "stateTaxPaid",
      header: "State Tax Paid"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(_vm.truncateToTwoDecimalPlaces(slotProps.data.stateTaxPaid)) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "stateTaxConsumed",
      header: "State Tax Consumed"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(_vm.truncateToTwoDecimalPlaces(slotProps.data.stateTaxConsumed)) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "stateTaxDue",
      header: "State Tax Due"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(_vm.truncateToTwoDecimalPlaces(slotProps.data.stateTaxDue)) + "\n            ")];
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

/***/ "./resources/js/src/views/pages/report/IftaReport.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/report/IftaReport.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IftaReport_vue_vue_type_template_id_29e44154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IftaReport.vue?vue&type=template&id=29e44154& */ "./resources/js/src/views/pages/report/IftaReport.vue?vue&type=template&id=29e44154&");
/* harmony import */ var _IftaReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IftaReport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/IftaReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IftaReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IftaReport_vue_vue_type_template_id_29e44154___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IftaReport_vue_vue_type_template_id_29e44154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/IftaReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/IftaReport.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/IftaReport.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IftaReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IftaReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/IftaReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IftaReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/IftaReport.vue?vue&type=template&id=29e44154&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/IftaReport.vue?vue&type=template&id=29e44154& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IftaReport_vue_vue_type_template_id_29e44154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IftaReport.vue?vue&type=template&id=29e44154& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/IftaReport.vue?vue&type=template&id=29e44154&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IftaReport_vue_vue_type_template_id_29e44154___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IftaReport_vue_vue_type_template_id_29e44154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=118.js.map