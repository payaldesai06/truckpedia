(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/@babel/runtime/core-js/number/is-finite.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/number/is-finite.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-finite */ "./node_modules/core-js/library/fn/number/is-finite.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/number/is-integer.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/number/is-integer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-integer */ "./node_modules/core-js/library/fn/number/is-integer.js");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/number/is-finite */ "./node_modules/@babel/runtime/core-js/number/is-finite.js");
/* harmony import */ var _babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/number/is-integer */ "./node_modules/@babel/runtime/core-js/number/is-integer.js");
/* harmony import */ var _babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");










function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AccountingTab",
  components: {
    DriverPayTemplateBlock: function DriverPayTemplateBlock() {
      return Promise.all(/*! import() */[__webpack_require__.e(15), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, /*! @/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue"));
    }
  },
  props: {
    dataObj: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])("auth", ["user"]), {
    getFormData: function getFormData() {
      return JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(this.formData));
    },
    isFormValid: function isFormValid() {
      /*if (this.getFormData.allowances > 100 || this.getFormData.allowances < 0)
        return false;*/
      if (this.getFormData.withholding < 0) return false;
      return true;
    },
    isEditMode: function isEditMode() {
      return this.$route.name === "drivers-edit";
    },
    showAllDriverPayTypes: function showAllDriverPayTypes() {
      if (this.user.admin_company_detail_id >= _config_constants__WEBPACK_IMPORTED_MODULE_9__["default"].showCustomizeDriverPayTypeOnlyForCompanyIdGreaterThanOrEqualTo) {
        return false;
      }

      return true;
    }
  }),
  data: function data() {
    return {
      frequencyOptions: [{
        title: "Weekly",
        value: "weekly"
      }, {
        title: "Biweekly",
        value: "biweekly"
      }, {
        title: "Monthly",
        value: "monthly"
      }],
      filingStatusOptions: [{
        title: "Single",
        value: "single"
      }, {
        title: "Married filing jointly",
        value: "marriedFilingJointly"
      }, {
        title: "Married filing separately",
        value: "marriedFilingSeparately"
      }, {
        title: "Head of household",
        value: "headOfHousehold"
      }, {
        title: "Qualifying widow(er)",
        value: "qualifyingWidow"
      }],
      loadPayPercentOptions: [{
        title: "Hauling Fees",
        value: _config_constants__WEBPACK_IMPORTED_MODULE_9__["default"].load_pay_percentage_of.hauling_fees
      }, {
        title: "Hauling + Fuel Surcharge",
        value: _config_constants__WEBPACK_IMPORTED_MODULE_9__["default"].load_pay_percentage_of.hauling_plus_fuel_surcharge
      }, {
        title: "Total Income",
        value: _config_constants__WEBPACK_IMPORTED_MODULE_9__["default"].load_pay_percentage_of.total_income
      }],
      formData: {
        id: parseInt(this.$route.params.id),
        driverPayType: "",
        perMileCharge: "",
        payPerStopRate: "",
        payPerStopStartAfter: "",
        detentionRate: "",
        detentionStartAfter: "",
        layoverRate: "",
        layoverStartAfter: "",
        hourlyRate: "",
        loadPayPercentage: "",
        loadPayPercentageOf: "",
        paymentMethod: "",
        financialInstitutionName: "",
        accountNumber: "",
        routingNumber: "",
        taxForm: "",
        filingStatus: "",
        taxFederalCredits: null,
        payFrequency: null,
        //allowances: null,
        withholding: null,
        taxMedicare: false,
        taxAdvanceEarnedIncomeCredit: false,
        taxSocialSecurity: false,
        taxFederalTax: false,
        flatPayFrequency: "",
        flatPayRate: null,
        // driverPayTemplateId: null, //Disabled for this Ui format
        driverPayTemplate: null
      },
      validationMsg: {
        perMileCharge: null,
        payPerStopRate: null,
        payPerStopStartAfter: null,
        detentionRate: null,
        detentionStartAfter: null,
        layoverRate: null,
        layoverStartAfter: null,
        hourlyRate: null,
        loadPayPercentage: null,
        loadPayPercentageOf: null,
        taxFederalCredits: null,
        //allowances: null,
        withholding: null
      },
      deductions: [{
        description: "Cash advance",
        startDate: "",
        endDate: "",
        frequency: "One Time",
        amount: 500,
        iif: "Deduction"
      }],
      showButtonsData: false
    };
  },
  created: function created() {
    this.formData = _objectSpread({}, this.formData, Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.dataObj));
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.$emit("update:Accounting", this.formData);
  },
  methods: {
    restoreData: function restoreData() {
      this.formData = this.formDataBackup;

      var _ref = this.formData || {},
          driverPayTemplate = _ref.driverPayTemplate,
          driverPayType = _ref.driverPayType;

      if (driverPayTemplate && driverPayType === "template") {
        var loadDetails = driverPayTemplate.loadDetails,
            tripDetails = driverPayTemplate.tripDetails;

        if (loadDetails && loadDetails.length || tripDetails && tripDetails.length) {
          /** Ensure loadDetails or tripDetail has values, before setting the payType to 'template' (for custom pay template) */
          this.formData.driverPayTemplate.loadDetails = loadDetails ? loadDetails.map(function (x) {
            return _objectSpread({}, x, {
              id: x.fieldId || x.id
            });
          }) : [];
          this.formData.driverPayTemplate.tripDetails = tripDetails ? tripDetails.map(function (x) {
            return _objectSpread({}, x, {
              id: x.fieldId || x.id
            });
          }) : [];
        }
      }

      this.$router.push({
        name: "drivers"
      });
    },
    init: function init() {
      var _this = this;

      this.formDataBackup = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(this.formData));

      var _ref2 = this.formData || {},
          driverPayTemplate = _ref2.driverPayTemplate,
          driverPayType = _ref2.driverPayType;

      if (driverPayTemplate && driverPayType === "template") {
        var loadDetails = driverPayTemplate.loadDetails,
            tripDetails = driverPayTemplate.tripDetails;

        if (loadDetails && loadDetails.length || tripDetails && tripDetails.length) {
          /** Ensure loadDetails or tripDetail has values, before setting the payType to 'template' (for custom pay template) */
          this.formData.driverPayTemplate.loadDetails = loadDetails ? loadDetails.map(function (x) {
            return _objectSpread({}, x, {
              id: x.fieldId || x.id
            });
          }) : [];
          this.formData.driverPayTemplate.tripDetails = tripDetails ? tripDetails.map(function (x) {
            return _objectSpread({}, x, {
              id: x.fieldId || x.id
            });
          }) : [];
        }
      }

      if (!this.isEditMode) return;
      this.$nextTick(function () {
        _this.$watch("getFormData", _this.showButtons, {
          deep: true
        });
      });
    },
    validateField: function validateField(field) {
      var validationType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var value = this.formData[field];
      this.validationMsg[field] = null;

      if (validationType.includes("required") && value !== 0 && !value) {
        this.validationMsg[field] = "This field must be a valid value";
        return;
      }

      if (validationType.includes("int") && validationType.includes("float")) {
        var regex = new RegExp("^[0-9]+(.[0-9]+)?$");
        this.validationMsg[field] = regex.test(value) ? null : "This field must be a valid number";
        return;
      }

      if (validationType.includes("int") && !_babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_7___default()(value)) {
        this.validationMsg[field] = "This field must be an integer";
        return;
      }

      if (validationType.includes("float") && !_babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_6___default()(value)) {
        this.validationMsg[field] = "This field must be a number";
        return;
      }

      if (validationType.includes("min") && value < 0) {
        this.validationMsg[field] = "This field must be a positive number";
        return;
      }

      if (validationType.includes("max") && value > 100) {
        this.validationMsg[field] = "This field must be less than 100";
      }
    },
    showButtons: function showButtons() {
      this.showButtonsData = true;
    },
    submitForm: function () {
      var _submitForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var templates, _ref3, tripDetails, loadDetails;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.isFormValid) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (this.$refs.driverPayTemplate && this.formData.driverPayType === "template") {
                  templates = this.$refs.driverPayTemplate.generatedTemplatePayload();
                  delete templates.name;
                  this.formData.driverPayTemplate = templates;
                }

                if (this.formData.driverPayTemplate && this.formData.driverPayType === "template") {
                  _ref3 = this.formData.driverPayTemplate || {}, tripDetails = _ref3.tripDetails, loadDetails = _ref3.loadDetails;

                  if (tripDetails) {
                    this.formData.driverPayTemplate.tripDetails = tripDetails.map(function (x) {
                      return _objectSpread({}, x, {
                        fieldId: x.fieldId || x.id
                      });
                    });
                  }

                  if (loadDetails) {
                    this.formData.driverPayTemplate.loadDetails = loadDetails.map(function (x) {
                      return _objectSpread({}, x, {
                        fieldId: x.fieldId || x.id
                      });
                    });
                  }
                }

                this.$emit("submit:Accounting", this.formData);
                this.showButtonsData = false;
                this.formDataBackup = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(this.formData));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function submitForm() {
        return _submitForm.apply(this, arguments);
      };
    }()
  },
  watch: {
    dataObj: {
      handler: function handler(newVal) {
        if (newVal) {
          this.formData = _objectSpread({}, this.formData, Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(newVal));
        }
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=template&id=5119e720&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=template&id=5119e720&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", [_c("div", {
    staticClass: "accounting-container"
  }, [_c("div", {
    staticClass: "left-block block mt-4"
  }, [_c("vx-card", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Compensation")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("div", {
    staticClass: "mt-1 flex w-full"
  }, [_c("div", {
    staticClass: "vx-row w-full"
  }, [_c("div", {
    staticClass: "vx-col w-3/4",
    staticStyle: {
      display: "flex-root"
    }
  }, [_vm.showAllDriverPayTypes ? [_c("vs-radio", {
    staticClass: "vx-col ml-2",
    attrs: {
      "vs-value": "per_mile"
    },
    model: {
      value: _vm.formData.driverPayType,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "driverPayType", $$v);
      },
      expression: "formData.driverPayType"
    }
  }, [_vm._v("\n                        Per Mile\n                      ")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "vx-col ml-2",
    attrs: {
      "vs-value": "hourly"
    },
    model: {
      value: _vm.formData.driverPayType,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "driverPayType", $$v);
      },
      expression: "formData.driverPayType"
    }
  }, [_vm._v("\n                        Hourly\n                      ")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "vx-col ml-2",
    attrs: {
      "vs-value": "percentage"
    },
    model: {
      value: _vm.formData.driverPayType,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "driverPayType", $$v);
      },
      expression: "formData.driverPayType"
    }
  }, [_vm._v("\n                        Percentage\n                      ")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "vx-col ml-2",
    attrs: {
      "vs-value": "flat"
    },
    model: {
      value: _vm.formData.driverPayType,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "driverPayType", $$v);
      },
      expression: "formData.driverPayType"
    }
  }, [_vm._v("\n                        Flatpay\n                      ")])] : _vm._e(), _vm._v(" "), _c("vs-radio", {
    staticClass: "vx-col ml-2",
    attrs: {
      "vs-value": "template"
    },
    model: {
      value: _vm.formData.driverPayType,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "driverPayType", $$v);
      },
      expression: "formData.driverPayType"
    }
  }, [_vm._v("\n                      Customize\n                    ")]), _vm._v(" "), _c("span")], 2), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/4"
  }, [_vm.formData.driverPayType ? _c("label", {
    staticClass: "text-xs font-semibold mt-1 ml-4 cursor-pointer text-primary flex justify-end",
    on: {
      click: function click($event) {
        _vm.formData.driverPayType = "";
      }
    }
  }, [_vm._v("\n                      Clear\n                    ")]) : _vm._e()])])])])]), _vm._v(" "), _c("div", [_vm.formData.driverPayType === "per_mile" ? [_c("div", {
    staticClass: "vx-row mt-4 min-height-80"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Per Mile")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("perMileCharge", ["required", "int", "float"]);
      }
    },
    model: {
      value: _vm.formData.perMileCharge,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "perMileCharge", _vm._n($$v));
      },
      expression: "formData.perMileCharge"
    }
  }), _vm._v(" "), _vm.validationMsg.perMileCharge ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.perMileCharge)
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row min-height-80"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Pay Per Stop")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("payPerStopRate", ["required", "int", "float"]);
      }
    },
    model: {
      value: _vm.formData.payPerStopRate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "payPerStopRate", _vm._n($$v));
      },
      expression: "formData.payPerStopRate"
    }
  }), _vm._v(" "), _vm.validationMsg.payPerStopRate ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.payPerStopRate)
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Start After (Stops)")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("payPerStopStartAfter", ["required", "int"]);
      }
    },
    model: {
      value: _vm.formData.payPerStopStartAfter,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "payPerStopStartAfter", _vm._n($$v));
      },
      expression: "formData.payPerStopStartAfter"
    }
  }), _vm._v(" "), _vm.validationMsg.payPerStopStartAfter ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.payPerStopStartAfter)
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row min-height-80"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Detention")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("detentionRate", ["required", "int", "float"]);
      }
    },
    model: {
      value: _vm.formData.detentionRate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "detentionRate", _vm._n($$v));
      },
      expression: "formData.detentionRate"
    }
  }), _vm._v(" "), _vm.validationMsg.detentionRate ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.detentionRate)
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Start After (Hours)")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("detentionStartAfter", ["required", "int"]);
      }
    },
    model: {
      value: _vm.formData.detentionStartAfter,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "detentionStartAfter", _vm._n($$v));
      },
      expression: "formData.detentionStartAfter"
    }
  }), _vm._v(" "), _vm.validationMsg.detentionStartAfter ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.detentionStartAfter)
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row min-height-80"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Layover")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("layoverRate", ["required", "int", "float"]);
      }
    },
    model: {
      value: _vm.formData.layoverRate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "layoverRate", _vm._n($$v));
      },
      expression: "formData.layoverRate"
    }
  }), _vm._v(" "), _vm.validationMsg.layoverRate ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.layoverRate)
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Start After (Hours)")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("layoverStartAfter", ["required", "int"]);
      }
    },
    model: {
      value: _vm.formData.layoverStartAfter,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "layoverStartAfter", _vm._n($$v));
      },
      expression: "formData.layoverStartAfter"
    }
  }), _vm._v(" "), _vm.validationMsg.layoverStartAfter ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.layoverStartAfter)
    }
  }) : _vm._e()], 1)])] : _vm._e(), _vm._v(" "), _vm.formData.driverPayType === "hourly" ? [_c("div", {
    staticClass: "vx-row mt-4"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Rate")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("hourlyRate", ["required", "int", "float"]);
      }
    },
    model: {
      value: _vm.formData.hourlyRate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "hourlyRate", _vm._n($$v));
      },
      expression: "formData.hourlyRate"
    }
  }), _vm._v(" "), _vm.validationMsg.hourlyRate ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.hourlyRate)
    }
  }) : _vm._e()], 2)], 1)])] : _vm._e(), _vm._v(" "), _vm.formData.driverPayType === "percentage" ? [_c("div", {
    staticClass: "mt-4 w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Load Pay Percentage")]), _vm._v(" "), _c("div", {
    staticClass: "flex w-full"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("loadPayPercentage", ["required", "min", "max"]);
      }
    },
    model: {
      value: _vm.formData.loadPayPercentage,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "loadPayPercentage", _vm._n($$v));
      },
      expression: "formData.loadPayPercentage"
    }
  }), _vm._v(" "), _vm.validationMsg.loadPayPercentage ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.loadPayPercentage)
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("label", {
    staticClass: "ml-2 mt-2 font-semibold w-12"
  }, [_vm._v("% of")]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.loadPayPercentOptions,
      label: "title",
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: false
    },
    model: {
      value: _vm.formData.loadPayPercentageOf,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "loadPayPercentageOf", $$v);
      },
      expression: "formData.loadPayPercentageOf"
    }
  })], 1)])])] : _vm._e(), _vm._v(" "), _vm.formData.driverPayType === "flat" ? [_c("div", {
    staticClass: "vx-row mt-4"
  }, [_c("div", {
    staticClass: "vx-col w-1/2 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Frequency")]), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.frequencyOptions,
      label: "title",
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: false
    },
    on: {
      change: function change($event) {
        return _vm.validateField("flatPayFrequency", ["required"]);
      }
    },
    model: {
      value: _vm.formData.flatPayFrequency,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "flatPayFrequency", $$v);
      },
      expression: "formData.flatPayFrequency"
    }
  }), _vm._v(" "), _vm.validationMsg.flatPayFrequency ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.flatPayFrequency)
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Flat Pay Rate")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("flatPayRate", ["required", "int", "float"]);
      }
    },
    model: {
      value: _vm.formData.flatPayRate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "flatPayRate", _vm._n($$v));
      },
      expression: "formData.flatPayRate"
    }
  }), _vm._v(" "), _vm.validationMsg.flatPayRate ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.flatPayRate)
    }
  }) : _vm._e()], 1)])] : _vm._e()], 2)], 1), _vm._v(" "), _vm.formData.driverPayType === "template" ? _c("vx-card", {
    staticClass: "mt-2 driver-pay-template-incolum-block"
  }, [_c("DriverPayTemplateBlock", {
    attrs: {
      hideName: true
    },
    model: {
      value: _vm.formData.driverPayTemplate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "driverPayTemplate", $$v);
      },
      expression: "formData.driverPayTemplate"
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "center-block mt-4"
  }, [_c("vx-card", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "vx-row flex justify-between items-end"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Payment Info")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2 flex flex-col gap-1"
  }, [_c("div", {
    staticClass: "vx-row p-2"
  }, [_c("vs-radio", {
    staticClass: "text-xs m-3",
    attrs: {
      "vs-name": "paymentMethod",
      "vs-value": "check"
    },
    model: {
      value: _vm.formData.paymentMethod,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "paymentMethod", $$v);
      },
      expression: "formData.paymentMethod"
    }
  }, [_vm._v("\n                  Check\n                ")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "text-xs",
    attrs: {
      "vs-name": "paymentMethod",
      "vs-value": "directDeposit"
    },
    model: {
      value: _vm.formData.paymentMethod,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "paymentMethod", $$v);
      },
      expression: "formData.paymentMethod"
    }
  }, [_vm._v("\n                  Direct Deposit\n                ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Financial Institution Name")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.financialInstitutionName,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "financialInstitutionName", $$v);
      },
      expression: "formData.financialInstitutionName"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-5"
  }, [_c("div", {
    staticClass: "vx-col w-1/2 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Account Number")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.accountNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "accountNumber", $$v);
      },
      expression: "formData.accountNumber"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Routing Number")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.routingNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "routingNumber", $$v);
      },
      expression: "formData.routingNumber"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "right-block mt-4"
  }, [_c("vx-card", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "vx-row flex justify-between items-end"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Tax")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2 flex flex-col mt-4"
  }, [_c("vs-radio", {
    staticClass: "text-xs",
    attrs: {
      "vs-name": "taxForm",
      "vs-value": "w2"
    },
    model: {
      value: _vm.formData.taxForm,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "taxForm", $$v);
      },
      expression: "formData.taxForm"
    }
  }, [_vm._v("\n                    Employee (W2)\n                  ")]), _vm._v(" "), _c("vs-radio", {
    staticClass: "text-xs mt-2",
    attrs: {
      "vs-name": "taxForm",
      "vs-value": "1099"
    },
    model: {
      value: _vm.formData.taxForm,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "taxForm", $$v);
      },
      expression: "formData.taxForm"
    }
  }, [_vm._v("\n                    Contractor (1099)\n                  ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Pay Frequency")]), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.frequencyOptions,
      label: "title",
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: true
    },
    model: {
      value: _vm.formData.payFrequency,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "payFrequency", $$v);
      },
      expression: "formData.payFrequency"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-4"
  }, [_c("div", {
    staticClass: "vx-col w-1/2 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Dependents and Credits")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number",
      min: "0",
      max: "999999"
    },
    on: {
      input: function input($event) {
        return _vm.validateField("allowances", ["max", "min"]);
      }
    },
    model: {
      value: _vm.formData.taxFederalCredits,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "taxFederalCredits", _vm._n($$v));
      },
      expression: "formData.taxFederalCredits"
    }
  })], 2), _vm._v(" "), _vm.validationMsg.taxFederalCredits ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.taxFederalCredits)
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Withholding")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      input: function input($event) {
        return _vm.validateField("withholding", ["min"]);
      }
    },
    model: {
      value: _vm.formData.withholding,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "withholding", _vm._n($$v));
      },
      expression: "formData.withholding"
    }
  })], 2), _vm._v(" "), _vm.validationMsg.withholding ? _c("label", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.validationMsg.withholding)
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row ml-2 mt-4"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Filing Status")]), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.filingStatusOptions,
      label: "title",
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: true
    },
    model: {
      value: _vm.formData.filingStatus,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "filingStatus", $$v);
      },
      expression: "formData.filingStatus"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col ml-20"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("vs-checkbox", {
    staticClass: "text-xs",
    model: {
      value: _vm.formData.taxMedicare,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "taxMedicare", $$v);
      },
      expression: "formData.taxMedicare"
    }
  }, [_vm._v("Medicare")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("vs-checkbox", {
    staticClass: "text-xs mt-3",
    model: {
      value: _vm.formData.taxAdvanceEarnedIncomeCredit,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "taxAdvanceEarnedIncomeCredit", $$v);
      },
      expression: "formData.taxAdvanceEarnedIncomeCredit"
    }
  }, [_vm._v("\n                  Advance Earned Income Credit\n                ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("vs-checkbox", {
    staticClass: "text-xs mt-3",
    model: {
      value: _vm.formData.taxSocialSecurity,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "taxSocialSecurity", $$v);
      },
      expression: "formData.taxSocialSecurity"
    }
  }, [_vm._v("Social Security")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("vs-checkbox", {
    staticClass: "text-xs mt-3",
    model: {
      value: _vm.formData.taxFederalTax,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "taxFederalTax", $$v);
      },
      expression: "formData.taxFederalTax"
    }
  }, [_vm._v("\n                  Federal Tax\n                ")])], 1)])])], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "driver-pay-template-multi-colum-block"
  }, [_c("div", {
    staticClass: "vx-row",
    staticStyle: {
      "padding-right": "4rem"
    }
  }, [_c("div", {
    staticClass: "vx-col w-2/3"
  }, [_vm.formData.driverPayType === "template" ? _c("vx-card", {
    staticClass: "mt-2"
  }, [_c("DriverPayTemplateBlock", {
    attrs: {
      hideName: true
    },
    model: {
      value: _vm.formData.driverPayTemplate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "driverPayTemplate", $$v);
      },
      expression: "formData.driverPayTemplate"
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-2/3"
  })])])]), _vm._v(" "), _vm.showButtonsData ? _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col ml-auto"
  }, [_c("vs-button", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_vm._v("SAVE")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.restoreData.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          CANCEL\n        ")])], 1)])]) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/core-js/library/fn/number/is-finite.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/fn/number/is-finite.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-finite */ "./node_modules/core-js/library/modules/es6.number.is-finite.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Number.isFinite;


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

/***/ "./node_modules/core-js/library/modules/es6.number.is-finite.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.number.is-finite.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var _isFinite = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-5119e720] input::-webkit-outer-spin-button,[data-v-5119e720] input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}[dir][data-v-5119e720] input::-webkit-outer-spin-button, [dir][data-v-5119e720] input::-webkit-inner-spin-button {\n  margin: 0;\n}\n[data-v-5119e720] input[type=number] {\n  -moz-appearance: textfield;\n}\n[dir] .mt-40[data-v-5119e720] {\n  margin-top: 40px;\n}\n.min-width-220[data-v-5119e720] {\n  min-width: 220px;\n}\n.min-width-400[data-v-5119e720] {\n  min-width: 400px;\n}\n.text-red[data-v-5119e720] {\n  color: #ea5758;\n}\n.min-height-80[data-v-5119e720] {\n  min-height: 60px;\n}\n.accounting-container[data-v-5119e720] {\n  /* display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  flex-direction: row; */\n}\n@media (min-width: 1099px) {\n.accounting-container[data-v-5119e720] {\n    display: grid;\n    grid-gap: 1rem;\n    width: 100%;\n    grid-template-columns: auto auto auto;\n}\n}\n.accounting-container .center-block[data-v-5119e720] {\n  min-width: 200px;\n}\n.driver-pay-template-incolum-block[data-v-5119e720] {\n  display: block;\n}\n.driver-pay-template-multi-colum-block[data-v-5119e720] {\n  display: none;\n}\n@media (min-width: 1099px) {\n.driver-pay-template-incolum-block[data-v-5119e720] {\n    display: none;\n}\n.driver-pay-template-multi-colum-block[data-v-5119e720] {\n    display: block;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/drivers/components/AccountingTab.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/AccountingTab.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountingTab_vue_vue_type_template_id_5119e720_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountingTab.vue?vue&type=template&id=5119e720&scoped=true& */ "./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=template&id=5119e720&scoped=true&");
/* harmony import */ var _AccountingTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountingTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AccountingTab_vue_vue_type_style_index_0_id_5119e720_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true& */ "./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AccountingTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountingTab_vue_vue_type_template_id_5119e720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountingTab_vue_vue_type_template_id_5119e720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5119e720",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/drivers/components/AccountingTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountingTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_style_index_0_id_5119e720_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=style&index=0&id=5119e720&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_style_index_0_id_5119e720_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_style_index_0_id_5119e720_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_style_index_0_id_5119e720_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_style_index_0_id_5119e720_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=template&id=5119e720&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=template&id=5119e720&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_template_id_5119e720_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountingTab.vue?vue&type=template&id=5119e720&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/AccountingTab.vue?vue&type=template&id=5119e720&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_template_id_5119e720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountingTab_vue_vue_type_template_id_5119e720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=97.js.map