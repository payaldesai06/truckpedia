(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[228],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// For custom error message

var dict = {
  custom: {
    acquireCost: {
      decimal: "The field must be numeric and may contain 2 decimal points"
    },
    interestRate: {
      decimal: "Interest rate should be between 0 and 100, with upto 4 decimal places",
      min_value: "Interest rate should be between 0 and 100, with upto 4 decimal places",
      max_value: "Interest rate should be between 0 and 100, with upto 4 decimal places"
    },
    monthlyPayment: {
      decimal: "The field must be numeric and may contain 2 decimal points"
    },
    priceSold: {
      decimal: "The field must be numeric and may contain 2 decimal points"
    }
  }
}; // Register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_2__["Validator"].localize("en", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FinancialForm",
  data: function data() {
    return {
      ownershipType: null,
      // string,
      dateAcquired: null,
      // date.
      acquireCost: null,
      // decimal.
      paymentStartDate: null,
      //  date.
      paymentEndDate: null,
      //  date.
      interestRate: null,
      //  decimal. Allowed values from 0 to 1.0. Sample values: 0.123456 means 12.3456%. At most 6 decimal places.
      lender: null,
      //  string.
      monthlyPayment: null,
      //  decimal.
      contractNumber: null,
      //  string
      priceSold: null,
      //  decimal.
      dateSold: null,
      //  date.
      ownershipOptions: [{
        label: "Company Truck",
        value: "company_truck"
      }, {
        label: "Owner operator",
        value: "owner_operator"
      }, {
        label: "Leased",
        value: "leased"
      }]
    };
  },
  props: {
    truckData: {
      type: Object,
      default: null
    },
    value: {
      type: Object,
      default: null
    }
  },
  computed: {
    emitDate: function emitDate() {
      var _ref = this || {},
          ownershipType = _ref.ownershipType,
          dateAcquired = _ref.dateAcquired,
          acquireCost = _ref.acquireCost,
          paymentStartDate = _ref.paymentStartDate,
          paymentEndDate = _ref.paymentEndDate,
          interestRate = _ref.interestRate,
          lender = _ref.lender,
          monthlyPayment = _ref.monthlyPayment,
          contractNumber = _ref.contractNumber,
          priceSold = _ref.priceSold,
          dateSold = _ref.dateSold;

      return {
        ownershipType: ownershipType,
        dateAcquired: dateAcquired,
        acquireCost: acquireCost,
        paymentStartDate: paymentStartDate,
        paymentEndDate: paymentEndDate,
        interestRate: interestRate,
        lender: lender,
        monthlyPayment: monthlyPayment,
        contractNumber: contractNumber,
        priceSold: priceSold,
        dateSold: dateSold
      };
    }
  },
  watch: {
    emitDate: function emitDate(newVal) {
      this.$emit("input", newVal);
    },
    value: {
      handler: function handler(newVal) {
        var _ref2 = newVal || {},
            ownershipType = _ref2.ownershipType,
            dateAcquired = _ref2.dateAcquired,
            acquireCost = _ref2.acquireCost,
            paymentStartDate = _ref2.paymentStartDate,
            paymentEndDate = _ref2.paymentEndDate,
            interestRate = _ref2.interestRate,
            lender = _ref2.lender,
            monthlyPayment = _ref2.monthlyPayment,
            contractNumber = _ref2.contractNumber,
            priceSold = _ref2.priceSold,
            dateSold = _ref2.dateSold;

        this.ownershipType = ownershipType;
        this.dateAcquired = dateAcquired;
        this.acquireCost = acquireCost;
        this.paymentStartDate = paymentStartDate;
        this.paymentEndDate = paymentEndDate;
        this.interestRate = interestRate;
        this.lender = lender;
        this.monthlyPayment = monthlyPayment;
        this.contractNumber = contractNumber;
        this.priceSold = priceSold;
        this.dateSold = dateSold;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    validate: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$validator.validateAll();

              case 2:
                if (!this.errors.items.length) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                return _context.abrupt("return", true);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function validate() {
        return _validate.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=template&id=1d839233&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=template&id=1d839233& ***!
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

  return _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Finance")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Ownership Type")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      "data-vv-as": "selected",
      name: "value",
      label: "label",
      options: _vm.ownershipOptions,
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: true
    },
    model: {
      value: _vm.ownershipType,
      callback: function callback($$v) {
        _vm.ownershipType = $$v;
      },
      expression: "ownershipType"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Date Acquired")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "",
      name: "dateAcquired"
    },
    model: {
      value: _vm.dateAcquired,
      callback: function callback($$v) {
        _vm.dateAcquired = $$v;
      },
      expression: "dateAcquired"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Cost")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      step: "any",
      name: "acquireCost"
    },
    model: {
      value: _vm.acquireCost,
      callback: function callback($$v) {
        _vm.acquireCost = _vm._n($$v);
      },
      expression: "acquireCost"
    }
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("acquireCost")) + "\n      ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Payment Start Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "",
      name: "paymentStartDate"
    },
    model: {
      value: _vm.paymentStartDate,
      callback: function callback($$v) {
        _vm.paymentStartDate = $$v;
      },
      expression: "paymentStartDate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Payment End Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "",
      name: "paymentEndDate"
    },
    model: {
      value: _vm.paymentEndDate,
      callback: function callback($$v) {
        _vm.paymentEndDate = $$v;
      },
      expression: "paymentEndDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Interest Rate")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("%")])])]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:4|max_value:100|min_value:0",
      expression: "'decimal:4|max_value:100|min_value:0'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      step: "any",
      name: "interestRate"
    },
    model: {
      value: _vm.interestRate,
      callback: function callback($$v) {
        _vm.interestRate = _vm._n($$v);
      },
      expression: "interestRate"
    }
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("interestRate")) + "\n      ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Lender")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "lender"
    },
    model: {
      value: _vm.lender,
      callback: function callback($$v) {
        _vm.lender = $$v;
      },
      expression: "lender"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Monthly Payment")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      step: "any",
      name: "monthlyPayment"
    },
    model: {
      value: _vm.monthlyPayment,
      callback: function callback($$v) {
        _vm.monthlyPayment = _vm._n($$v);
      },
      expression: "monthlyPayment"
    }
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("monthlyPayment")) + "\n      ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Contract Number")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "contractNumber"
    },
    model: {
      value: _vm.contractNumber,
      callback: function callback($$v) {
        _vm.contractNumber = $$v;
      },
      expression: "contractNumber"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Price Sold")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      step: "any",
      name: "priceSold"
    },
    model: {
      value: _vm.priceSold,
      callback: function callback($$v) {
        _vm.priceSold = _vm._n($$v);
      },
      expression: "priceSold"
    }
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("priceSold")) + "\n      ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Date Sold")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "",
      name: "dateSold"
    },
    model: {
      value: _vm.dateSold,
      callback: function callback($$v) {
        _vm.dateSold = $$v;
      },
      expression: "dateSold"
    }
  })], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FinancialForm_vue_vue_type_template_id_1d839233___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FinancialForm.vue?vue&type=template&id=1d839233& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=template&id=1d839233&");
/* harmony import */ var _FinancialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FinancialForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FinancialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FinancialForm_vue_vue_type_template_id_1d839233___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FinancialForm_vue_vue_type_template_id_1d839233___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinancialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FinancialForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinancialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=template&id=1d839233&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=template&id=1d839233& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FinancialForm_vue_vue_type_template_id_1d839233___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FinancialForm.vue?vue&type=template&id=1d839233& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue?vue&type=template&id=1d839233&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FinancialForm_vue_vue_type_template_id_1d839233___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FinancialForm_vue_vue_type_template_id_1d839233___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=228.js.map