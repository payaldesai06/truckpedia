(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[200],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _mixins_globalMixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/mixins/globalMixins */ "./resources/js/src/mixins/globalMixins.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selectedDateRange: null,
      // Flate Pikr Config
      flat_pikr_config: {
        mode: 'range'
      },
      payload: {},
      csvName: '',
      rows: []
    };
  },
  mixins: [_mixins_globalMixins__WEBPACK_IMPORTED_MODULE_7__["default"]],
  methods: {
    /**
     * Get Loads Reports based on type
     */
    generateReport: function () {
      var _generateReport = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(type) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$vs.loading();
                _context.prev = 1;
                _context.next = 4;
                return this.$store.dispatch(type == 'mas' ? 'report/exportLoadsMasReport' : 'report/exportLoadsSyncadaReport', _objectSpread({}, this.payload));

              case 4:
                response = _context.sent;
                this.rows = response.rows;

                if (this.rows.length) {
                  // Report csv name based on start and end dates
                  if (this.payload.startDate === this.payload.endDate) {
                    this.csvName = "LGSB_".concat(type == 'mas' ? 'MAS' : 'Syncada', " Upload ").concat(this.$dayjs(this.payload.startDate).format('MM.DD.YY'), ".csv");
                  } else {
                    this.csvName = "LGSB_".concat(type == 'mas' ? 'MAS' : 'Syncada', " Upload ").concat(this.$dayjs(this.payload.startDate).format('MM.DD.YY'), "-").concat(this.$dayjs(this.payload.endDate).format('MM.DD.YY'), ".csv");
                  }

                  this.setDataForCsv();
                } else {
                  this.showErrorMessage('Data not found');
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                this.showErrorMessage(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(_context.t0));

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

      return function generateReport(_x) {
        return _generateReport.apply(this, arguments);
      };
    }(),

    /**
     * convert the data to csv
     * @param {*} rows
     */
    convertToCsv: function convertToCsv(rows) {
      return rows.join('\n');
    },
    setDataForCsv: function setDataForCsv() {
      Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["downloadCsv"])(this.convertToCsv(this.rows), this.csvName);
    },
    onDatePickerClose: function onDatePickerClose(selectedDates, dateStr, instance) {
      if (selectedDates.length == 1) {
        instance.setDate([selectedDates[0], selectedDates[0]], true);
      }
    }
  },
  watch: {
    // look over the date range for start and end date if there is one set the end date to same
    selectedDateRange: {
      handler: function handler(val) {
        if (val) {
          var dates = this.selectedDateRange.split(' to ');

          if (dates.length && dates.length === 1) {
            this.payload.startDate = dates[0];
            this.payload.endDate = dates[0];
          } else {
            this.payload.startDate = dates[0];
            this.payload.endDate = dates[1];
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=template&id=21278806&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=template&id=21278806& ***!
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

  return _c("div", [_c("div", {
    staticClass: "w-full py-6 flex items-center justify-between"
  }, [_c("div", {
    staticClass: "flex items-end py-5 space-x-2"
  }, [_c("div", [_c("label", {
    staticClass: "text-sm opacity-75"
  }, [_vm._v("Choose Period")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.flat_pikr_config
    },
    on: {
      "on-close": _vm.onDatePickerClose
    },
    model: {
      value: _vm.selectedDateRange,
      callback: function callback($$v) {
        _vm.selectedDateRange = $$v;
      },
      expression: "selectedDateRange"
    }
  })], 1), _vm._v(" "), _c("div", [_vm.selectedDateRange ? _c("vs-button", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.generateReport("mas");
      }
    }
  }, [_vm._v("MAS Report")]) : _vm._e(), _vm._v(" "), _vm.selectedDateRange ? _c("vs-button", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.generateReport("syncada");
      }
    }
  }, [_vm._v("Syncada Report")]) : _vm._e()], 1)])])]);
};

var staticRenderFns = [];
render._withStripped = true;


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

/***/ "./resources/js/src/views/pages/report/components/LoadBillingReport.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/LoadBillingReport.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadBillingReport_vue_vue_type_template_id_21278806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadBillingReport.vue?vue&type=template&id=21278806& */ "./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=template&id=21278806&");
/* harmony import */ var _LoadBillingReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadBillingReport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoadBillingReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadBillingReport_vue_vue_type_template_id_21278806___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadBillingReport_vue_vue_type_template_id_21278806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/components/LoadBillingReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBillingReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadBillingReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBillingReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=template&id=21278806&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=template&id=21278806& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBillingReport_vue_vue_type_template_id_21278806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadBillingReport.vue?vue&type=template&id=21278806& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/LoadBillingReport.vue?vue&type=template&id=21278806&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBillingReport_vue_vue_type_template_id_21278806___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBillingReport_vue_vue_type_template_id_21278806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=200.js.map