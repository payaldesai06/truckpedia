(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CustomFieldsPopup",
  props: {
    togglePopup: {
      type: Boolean,
      required: true
    },
    loadOptions: {
      default: [],
      type: Array
    },
    tripOptions: {
      default: [],
      type: Array
    },
    selectedTarget: {
      default: "",
      type: String
    },
    editCustomFieldData: {
      type: Object,
      default: {}
    }
  },
  data: function data() {
    return {
      name: "",
      rate: null,
      defaultRate: null,
      defaultPayStartAfter: null,
      defaultPercentage: 0,
      defaultAccount: null,
      selectedType: "",
      defaultV2: "",
      defaultV3: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])("auth", ["user"]), {
    toggleDriverCustomFieldPopup: {
      get: function get() {
        return this.togglePopup;
      },
      set: function set(val) {
        if (!val) {
          this.initValues();
          this.closePopup();
        }
      }
    },
    checkSelectedType: function checkSelectedType() {
      if (this.selectedType && this.selectedType.value) {
        if (this.selectedType.value.includes("byPercentage")) {
          return true;
        }
      }

      return false;
    },
    isEdit: function isEdit() {
      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.editCustomFieldData).length > 0) {
        return true;
      }

      return false;
    },
    customFieldTitle: function customFieldTitle() {
      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.editCustomFieldData).length > 0) {
        return "Edit Custom Payment Field";
      }

      return "Create Custom Payment Field";
    },
    hasDefaultGLAccess: function hasDefaultGLAccess() {
      var _ref = (this.user || {}).admin_company_details || {},
          admin_company_detail_id = _ref.admin_company_detail_id;

      if (admin_company_detail_id) {
        return _config_constants__WEBPACK_IMPORTED_MODULE_5__["default"].companiesWithPayToCodeNDefaultGLAccountAccess.includes(Number(admin_company_detail_id));
      }

      return false;
    }
  }),
  watch: {
    editCustomFieldData: {
      handler: function handler(val) {
        this.name = val.name;
        this.defaultRate = val.defaultRate;
        this.defaultPercentage = val.defaultPercentage || 0;

        if (val.target === "load") {
          var load = this.loadOptions.filter(function (item) {
            return item.value === val.type;
          });
          this.selectedType = load[0];
        } else {
          var trip = this.tripOptions.filter(function (item) {
            return item.value === val.type;
          });
          this.selectedType = trip[0];
        }

        this.defaultPayStartAfter = val.defaultPayStartAfter;
        this.defaultAccount = val.defaultAccount;
        this.defaultV2 = val.defaultV2;
        this.defaultV3 = val.defaultV3;
      }
    }
  },
  methods: {
    initValues: function initValues() {
      this.name = "";
      this.rate = null;
      this.defaultRate = null;
      this.defaultPayStartAfter = null;
      this.defaultPercentage = 0;
      this.defaultAccount = null;
      this.defaultV2 = null;
      this.defaultV3 = null;
    },
    closePopup: function closePopup() {
      this.$emit("closePopup");
    },
    handleCustomFieldsApiCall: function handleCustomFieldsApiCall() {
      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.editCustomFieldData).length > 0) {
        this.editCustomField();
      } else {
        this.createCustomField();
      }
    },
    generatedPayload: function generatedPayload() {
      var payload = {
        target: this.selectedTarget,
        name: this.name,
        defaultAccount: this.defaultAccount,
        type: (this.selectedType || {}).value
      };

      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.editCustomFieldData).length > 0) {
        if (this.editCustomFieldData.fieldId) {
          payload.id = this.editCustomFieldData.fieldId;
        } else {
          payload.id = this.editCustomFieldData.id;
        }
      }

      if ((this.selectedType || {}).value === "stopPay") {
        payload.defaultPayStartAfter = this.defaultPayStartAfter;
      }

      if (this.checkSelectedType) {
        payload.defaultPercentage = this.defaultPercentage;
      } else if ((this.selectedType || {}).value === "formulaEmptyMiles" || (this.selectedType || {}).value === "formulaLoadedMiles") {
        payload.defaultV2 = Number(this.defaultV2).toFixed(3);
        payload.defaultV3 = Number(this.defaultV3).toFixed(3);
      } else {
        payload.defaultRate = this.defaultRate;
      }

      return payload;
    },
    defaultv2Andv3Validation: function defaultv2Andv3Validation() {
      if ((this.selectedType || {}).value === "formulaEmptyMiles" || (this.selectedType || {}).value === "formulaLoadedMiles") {
        if (!this.defaultV2 || !this.defaultV3) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Default fields are required.'
          });
          return true;
        }
      }
    },
    createCustomField: function createCustomField() {
      var _this = this;

      var validation = this.defaultv2Andv3Validation();
      if (validation) return;
      this.$vs.loading();
      this.$store.dispatch("driverPayTemplates/createCustomFields", this.generatedPayload()).then(function (data) {
        _this.$vs.notify({
          color: "primary",
          title: "Add Custom Field",
          text: "Add custom field successfully."
        });

        _this.$emit("getCustomFields");

        _this.closePopup();
      }).catch(function (error) {
        _this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      }).finally(function () {
        _this.$vs.loading.close();
      });
    },
    editCustomField: function editCustomField() {
      var _this2 = this;

      var validation = this.defaultv2Andv3Validation();
      if (validation) return;
      this.$vs.loading();
      this.$store.dispatch("driverPayTemplates/editCustomField", this.generatedPayload()).then(function (data) {
        _this2.$vs.notify({
          color: "primary",
          title: "Edit Custom Field",
          text: "Edit custom field successfully."
        });

        _this2.$emit("getCustomFields");

        _this2.closePopup();
      }).catch(function (error) {
        _this2.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      }).finally(function () {
        _this2.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=template&id=2b7e3748&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=template&id=2b7e3748&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vs-popup", {
    staticStyle: {
      "z-index": "52035"
    },
    attrs: {
      title: _vm.customFieldTitle,
      active: _vm.toggleDriverCustomFieldPopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.toggleDriverCustomFieldPopup = $event;
      }
    }
  }, [_c("div", {
    staticClass: "overflow-hidden"
  }, [_c("div", [_c("div", [_c("label", [_vm._v("Type")]), _vm._v(" "), _c("field-required-sign")], 1), _vm._v(" "), _vm.selectedTarget === "load" ? _c("v-select", {
    attrs: {
      options: _vm.loadOptions,
      disabled: _vm.isEdit,
      label: "text"
    },
    model: {
      value: _vm.selectedType,
      callback: function callback($$v) {
        _vm.selectedType = $$v;
      },
      expression: "selectedType"
    }
  }) : _c("v-select", {
    attrs: {
      options: _vm.tripOptions,
      disabled: _vm.isEdit,
      label: "text"
    },
    model: {
      value: _vm.selectedType,
      callback: function callback($$v) {
        _vm.selectedType = $$v;
      },
      expression: "selectedType"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("div", [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Name"
    },
    model: {
      value: _vm.name,
      callback: function callback($$v) {
        _vm.name = $$v;
      },
      expression: "name"
    }
  })], 1), _vm._v(" "), _vm.hasDefaultGLAccess ? _c("div", {
    staticClass: "mt-4"
  }, [_c("label", [_vm._v("Default GL Account")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Default GL Account"
    },
    model: {
      value: _vm.defaultAccount,
      callback: function callback($$v) {
        _vm.defaultAccount = $$v;
      },
      expression: "defaultAccount"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.selectedType && (_vm.selectedType.value === "formulaEmptyMiles" || _vm.selectedType.value === "formulaLoadedMiles") ? _c("div", [_c("div", {
    staticClass: "flex items-center mt-4 gap-2"
  }, [_c("span", {
    staticClass: "mt-5"
  }, [_vm._v("( Fuel Price - ")]), _vm._v(" "), _c("div", [_c("div", [_c("label", [_vm._v("Default Base Price")]), _vm._v(" "), _c("field-required-sign"), _vm._v(" "), _c("vs-input", {
    staticClass: "w-50px",
    attrs: {
      placeholder: "Default Base Price"
    },
    model: {
      value: _vm.defaultV2,
      callback: function callback($$v) {
        _vm.defaultV2 = $$v;
      },
      expression: "defaultV2"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("span", [_vm._v(")")]), _vm._v(" "), _c("span", [_vm._v(" / ")])]), _vm._v(" "), _c("div", [_c("div", [_c("label", [_vm._v("Default MPG")]), _vm._v(" "), _c("field-required-sign"), _vm._v(" "), _c("vs-input", {
    staticClass: "w-100px",
    attrs: {
      placeholder: "Default MPG"
    },
    model: {
      value: _vm.defaultV3,
      callback: function callback($$v) {
        _vm.defaultV3 = $$v;
      },
      expression: "defaultV3"
    }
  })], 1)])])]) : [!_vm.checkSelectedType ? _c("div", {
    staticClass: "mt-4"
  }, [_c("div", [_c("label", [_vm._v("Default rate")]), _vm._v(" "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Default rate",
      type: "number"
    },
    model: {
      value: _vm.defaultRate,
      callback: function callback($$v) {
        _vm.defaultRate = $$v;
      },
      expression: "defaultRate"
    }
  })], 1) : _c("div", {
    staticClass: "mt-4"
  }, [_c("div", [_c("label", [_vm._v("Default Percentage")]), _vm._v(" "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number",
      min: "-100",
      max: "100"
    },
    model: {
      value: _vm.defaultPercentage,
      callback: function callback($$v) {
        _vm.defaultPercentage = $$v;
      },
      expression: "defaultPercentage"
    }
  })], 1)], _vm._v(" "), _vm.selectedType && _vm.selectedType.value === "stopPay" ? _c("div", {
    staticClass: "mt-4"
  }, [_c("div", [_c("label", [_vm._v("Default Pay Start After")]), _vm._v(" "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Default Pay Start After",
      type: "number"
    },
    model: {
      value: _vm.defaultPayStartAfter,
      callback: function callback($$v) {
        _vm.defaultPayStartAfter = $$v;
      },
      expression: "defaultPayStartAfter"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-8",
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.handleCustomFieldsApiCall
    }
  }, [_vm._v("Submit")])], 2)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select .vs__dropdown-toggle .vs__actions .vs__clear[data-v-2b7e3748] {\n  display: none !important;\n}\n.w-100px[data-v-2b7e3748] {\n  width: 100px !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css&");

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

/***/ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomFields_vue_vue_type_template_id_2b7e3748_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomFields.vue?vue&type=template&id=2b7e3748&scoped=true& */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=template&id=2b7e3748&scoped=true&");
/* harmony import */ var _CustomFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFields.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomFields_vue_vue_type_style_index_0_id_2b7e3748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css& */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomFields_vue_vue_type_template_id_2b7e3748_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomFields_vue_vue_type_template_id_2b7e3748_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b7e3748",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_style_index_0_id_2b7e3748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=style&index=0&id=2b7e3748&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_style_index_0_id_2b7e3748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_style_index_0_id_2b7e3748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_style_index_0_id_2b7e3748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_style_index_0_id_2b7e3748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=template&id=2b7e3748&scoped=true&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=template&id=2b7e3748&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_template_id_2b7e3748_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomFields.vue?vue&type=template&id=2b7e3748&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue?vue&type=template&id=2b7e3748&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_template_id_2b7e3748_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFields_vue_vue_type_template_id_2b7e3748_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=15.js.map