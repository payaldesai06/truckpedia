(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'QuantityVariableRateForm',
  filters: {
    currencyFormat: function currencyFormat(value) {
      if (!value) return '$ 0.00';
      var retSting = '';

      if (value < 0) {
        retSting += '- ';
        value = value * -1;
      }

      retSting += "$".concat((+value).toFixed(2));
      return retSting;
    }
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    qtyRate: {
      get: function get() {
        return this.value.qtyRate;
      },
      set: function set(val) {
        var qtyRate = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_4__["isValidInputValue"])(val, [undefined, '']) ? val : null;
        this.$emit('input', _objectSpread({}, this.value, {
          qtyRate: qtyRate
        }));
      }
    }
  },
  methods: {
    totalFreightRate: function totalFreightRate(_ref) {
      var qtyRate = _ref.qtyRate,
          freight_qty = _ref.freight_qty;
      return Number(qtyRate) * Number(freight_qty);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=template&id=3de7e12b&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=template&id=3de7e12b& ***!
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

  return _c("div", {
    staticClass: "flex gap-4"
  }, [_c("div", {
    staticClass: "w-4/12"
  }, [_c("div", {
    staticClass: "flex flex-col"
  }, [_c("label", {
    staticClass: "text-sm"
  }, [_vm._v("Description")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-auto",
    attrs: {
      disabled: "",
      value: _vm.value.freight_description
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "w-4/12"
  }, [_c("div", {
    staticClass: "flex flex-col justify-center"
  }, [_c("label", {
    staticClass: "text-sm"
  }, [_vm._v("Qty")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-auto",
    attrs: {
      type: "number",
      disabled: "",
      value: _vm.value.freight_qty
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "w-4/12 flex gap-4 justify-between items-center"
  }, [_c("vx-input-group", {
    staticClass: "mt-auto"
  }, [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    attrs: {
      type: "number"
    },
    model: {
      value: _vm.qtyRate,
      callback: function callback($$v) {
        _vm.qtyRate = $$v;
      },
      expression: "qtyRate"
    }
  })], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "text-lg w-4/12 mt-6 flex justify-center items-center"
  }, [_vm._v("\n    " + _vm._s(_vm._f("currencyFormat")(_vm.totalFreightRate(_vm.value))) + "\n  ")])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuantityVariableRateForm_vue_vue_type_template_id_3de7e12b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuantityVariableRateForm.vue?vue&type=template&id=3de7e12b& */ "./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=template&id=3de7e12b&");
/* harmony import */ var _QuantityVariableRateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuantityVariableRateForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuantityVariableRateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuantityVariableRateForm_vue_vue_type_template_id_3de7e12b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuantityVariableRateForm_vue_vue_type_template_id_3de7e12b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityVariableRateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuantityVariableRateForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityVariableRateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=template&id=3de7e12b&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=template&id=3de7e12b& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityVariableRateForm_vue_vue_type_template_id_3de7e12b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuantityVariableRateForm.vue?vue&type=template&id=3de7e12b& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/load/components/QuantityVariableRateForm.vue?vue&type=template&id=3de7e12b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityVariableRateForm_vue_vue_type_template_id_3de7e12b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityVariableRateForm_vue_vue_type_template_id_3de7e12b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=59.js.map