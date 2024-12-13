(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
/* harmony import */ var flatpickr_dist_plugins_monthSelect_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flatpickr/dist/plugins/monthSelect/index.js */ "./node_modules/flatpickr/dist/plugins/monthSelect/index.js");
/* harmony import */ var flatpickr_dist_plugins_monthSelect_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_plugins_monthSelect_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flatpickr_dist_plugins_monthSelect_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flatpickr/dist/plugins/monthSelect/style.css */ "./node_modules/flatpickr/dist/plugins/monthSelect/style.css");
/* harmony import */ var flatpickr_dist_plugins_monthSelect_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_plugins_monthSelect_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mixins_globalMixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/mixins/globalMixins */ "./resources/js/src/mixins/globalMixins.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AccessorialServiceReport',
  data: function data() {
    return {
      datePickerConfig: {
        plugins: [new flatpickr_dist_plugins_monthSelect_index_js__WEBPACK_IMPORTED_MODULE_6___default.a({
          altFormat: 'M Y',
          dateFormat: 'm.Y'
        })],
        altInput: true,
        minDate: '01.2024'
      },
      selectedDate: '',
      selectedReportFormat: null,
      reportFormats: ['Walmart', 'Syncada'],
      masReportData: [],
      reportTypeButtons: [{
        id: 1,
        label: 'Bobtail & Hazmat',
        types: ['hazmat', 'bobtail'],
        terminal: null
      }, {
        id: 2,
        label: 'Ontario Trailer Movement',
        types: ['trailerMovement'],
        terminal: 'ontario'
      }, {
        id: 3,
        label: 'Ontario Trailer Recovery',
        types: ['trailerRecovery'],
        terminal: 'ontario'
      }, {
        id: 4,
        label: 'Oswego Trailer Movement',
        types: ['trailerMovement'],
        terminal: 'oswego'
      }, {
        id: 5,
        label: 'Oswego Trailer Recovery',
        types: ['trailerRecovery'],
        terminal: 'oswego'
      }]
    };
  },
  mixins: [_mixins_globalMixins__WEBPACK_IMPORTED_MODULE_8__["default"]],
  computed: {
    datePayload: function datePayload() {
      var month = this.selectedDate.split('.')[0];
      var year = this.selectedDate.split('.')[1];
      return _objectSpread({}, month && {
        month: month
      }, year && {
        year: year
      });
    },
    convertedDataInCsv: function convertedDataInCsv() {
      return this.masReportData.join('\n');
    }
  },
  methods: {
    generateMasReport: function () {
      var _generateMasReport = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var _ref, rows;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.$vs.loading();
                _context.next = 4;
                return this.$store.dispatch('report/exportAccessorialServiceMasReport', this.datePayload);

              case 4:
                _ref = _context.sent;
                rows = _ref.rows;
                this.masReportData = rows;

                if (this.masReportData.length) {
                  this.setDataForCsv("LGSB_MAS Upload ".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getMonthName"])(this.datePayload.month), " ").concat(this.datePayload.year, " tm.hazmatch.tr.csv"));
                } else {
                  this.showErrorMessage('Data not found');
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                this.showErrorMessage(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(_context.t0));

              case 13:
                _context.prev = 13;
                this.$vs.loading.close();
                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10, 13, 16]]);
      }));

      return function generateMasReport() {
        return _generateMasReport.apply(this, arguments);
      };
    }(),
    generateFileNameForWalmart: function generateFileNameForWalmart(fileType, payload) {
      var fileNameByType = null;

      if (fileType == 'hazmat') {
        fileNameByType = 'Hazmat & Bobtail';
      } else if (fileType == 'trailerMovement') {
        if (payload.terminal == 'ontario') {
          fileNameByType = 'Ontario Trailer Moves';
        } else {
          fileNameByType = 'Oswego Trailer Moves';
        }
      } else if (fileType == 'trailerRecovery') {
        if (payload.terminal == 'ontario') {
          fileNameByType = 'Ontario Trailer Recoveries';
        } else {
          fileNameByType = 'Oswego Trailer Recoveries';
        }
      }

      return "".concat(this.datePayload.year, " ").concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getMonthName"])(this.datePayload.month), " ").concat(fileNameByType, ".xlsx");
    },
    handleReportTypeButtonSubmit: function () {
      var _handleReportTypeButtonSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(reportType) {
        var payload, _ref2, sheets, fileName, fileType;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.$vs.loading();
                payload = _objectSpread({}, this.datePayload, {
                  types: reportType.types
                }, reportType.terminal && {
                  terminal: reportType.terminal
                }, {
                  report: this.selectedReportFormat
                });
                _context2.next = 5;
                return this.$store.dispatch('report/exportAccessorialServiceSyncadaReport', payload);

              case 5:
                _ref2 = _context2.sent;
                sheets = _ref2.sheets;

                if (sheets && sheets.length) {
                  fileName = null;
                  fileType = payload.types[0]; // checking file type

                  if (this.selectedReportFormat == 'walmart') {
                    fileName = this.generateFileNameForWalmart(fileType, payload);
                  } else {
                    fileName = "ImportEBill ".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getMonthName"])(this.datePayload.month).toLowerCase(), " ").concat(this.datePayload.year, " ").concat(payload.terminal || '').concat(fileType == 'hazmat' ? 'HZ' : fileType == 'trailerMovement' ? ' TM' : fileType == 'trailerRecovery' ? ' TR' : '', ".xlsx");
                  }

                  Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["downloadXlsx"])(sheets, fileName);
                } else {
                  this.showErrorMessage('Data not found');
                }

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                this.showErrorMessage(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(_context2.t0));

              case 13:
                _context2.prev = 13;
                this.$vs.loading.close();
                return _context2.finish(13);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10, 13, 16]]);
      }));

      return function handleReportTypeButtonSubmit(_x) {
        return _handleReportTypeButtonSubmit.apply(this, arguments);
      };
    }(),
    setDataForCsv: function setDataForCsv(fileName) {
      Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["downloadCsv"])(this.convertedDataInCsv, fileName);
    }
  },
  watch: {
    selectedDate: function selectedDate(val) {
      if (!val) {
        this.selectedReportFormat = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=template&id=63db15ef&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=template&id=63db15ef&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vs-row flex py-6"
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "vs-row flex gap-3 py-5 items-end"
  }, [_c("div", [_c("label", {
    staticClass: "text-sm opacity-75",
    attrs: {
      for: "choose-period"
    }
  }, [_vm._v("Choose Period")]), _vm._v(" "), _c("div", [_c("flat-pickr", {
    staticClass: "date-picker",
    attrs: {
      config: _vm.datePickerConfig
    },
    model: {
      value: _vm.selectedDate,
      callback: function callback($$v) {
        _vm.selectedDate = $$v;
      },
      expression: "selectedDate"
    }
  })], 1)]), _vm._v(" "), _c("div", [_vm.selectedDate ? _c("vs-button", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.generateMasReport
    }
  }, [_vm._v("\n          MAS Report\n        ")]) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "pt-6"
  }, [_vm.selectedDate ? _c("div", {
    staticClass: "pb-5"
  }, [_c("label", {
    staticClass: "text-sm opacity-75",
    attrs: {
      for: "report-format"
    }
  }, [_vm._v("Walmart or Syncada")]), _vm._v(" "), _c("v-select", {
    staticStyle: {
      width: "200px"
    },
    attrs: {
      options: _vm.reportFormats,
      reduce: function reduce(option) {
        return option.toLowerCase();
      }
    },
    model: {
      value: _vm.selectedReportFormat,
      callback: function callback($$v) {
        _vm.selectedReportFormat = $$v;
      },
      expression: "selectedReportFormat"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.selectedReportFormat && _vm.selectedDate ? [_c("div", {
    staticClass: "vs-row flex gap-4"
  }, _vm._l(_vm.reportTypeButtons, function (button) {
    return _c("div", {
      key: button.id,
      staticClass: "mb-4"
    }, [_c("vs-button", {
      attrs: {
        color: "primary",
        type: "border"
      },
      on: {
        click: function click($event) {
          return _vm.handleReportTypeButtonSubmit(button);
        }
      }
    }, [_vm._v(_vm._s(button.label))])], 1);
  }), 0)] : _vm._e()], 2)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-63db15ef] .date-picker {\n  width: 200px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss&");

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

/***/ "./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccessorialServiceReport_vue_vue_type_template_id_63db15ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessorialServiceReport.vue?vue&type=template&id=63db15ef&scoped=true& */ "./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=template&id=63db15ef&scoped=true&");
/* harmony import */ var _AccessorialServiceReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessorialServiceReport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AccessorialServiceReport_vue_vue_type_style_index_0_id_63db15ef_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss& */ "./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AccessorialServiceReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccessorialServiceReport_vue_vue_type_template_id_63db15ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccessorialServiceReport_vue_vue_type_template_id_63db15ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63db15ef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/components/AccessorialServiceReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccessorialServiceReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_style_index_0_id_63db15ef_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=style&index=0&id=63db15ef&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_style_index_0_id_63db15ef_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_style_index_0_id_63db15ef_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_style_index_0_id_63db15ef_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_style_index_0_id_63db15ef_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=template&id=63db15ef&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=template&id=63db15ef&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_template_id_63db15ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccessorialServiceReport.vue?vue&type=template&id=63db15ef&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue?vue&type=template&id=63db15ef&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_template_id_63db15ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessorialServiceReport_vue_vue_type_template_id_63db15ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=133.js.map