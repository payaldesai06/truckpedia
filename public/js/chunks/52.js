(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "OverviewCard",
  props: {
    isEditable: {
      type: Boolean,
      default: false
    },
    dataObj: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])("tag", ["allTags"]), {
    isEditMode: function isEditMode() {
      return this.$route.name === "drivers-edit";
    }
  }),
  data: function data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        status: "active",
        phone: "",
        driverType: "employee",
        isTeamDriver: false,
        isLocalDriver: false,
        isRegionalDriver: false,
        approvalStatus: "",
        tags: []
      },
      driverTypes: _config_constants__WEBPACK_IMPORTED_MODULE_5__["default"].driverTypes,
      status: [{
        id: 1,
        label: "Active",
        value: "active"
      }, {
        id: 2,
        label: "Inactive",
        value: "inactive"
      }],
      approvalStatuses: [
      /*{
        id: 1,
        label: "Approved",
        value: "approved",
      },*/
      {
        id: 3,
        label: "Approved CDL",
        value: "approvedCdl"
      }, {
        id: 4,
        label: "Approved CMV",
        value: "approvedCmv"
      }, {
        id: 5,
        label: "Approved Non-CMV",
        value: "approvedNonCmv"
      }, {
        id: 2,
        label: "Not approved",
        value: "notApproved"
      }],
      tags: []
    };
  },
  methods: {
    handleInput: function handleInput(field) {
      // if (field === "tags") {
      //   this.formData[field] = this.tags.map((x) => {
      //     return { id: x.tag_id || x.id };
      //   });
      // }
      this.$emit("cardInput", _defineProperty({}, field, this.formData[field]));
    }
  },
  watch: {
    dataObj: {
      handler: function handler(newVal) {
        this.formData = _objectSpread({}, this.formData, newVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=template&id=e57f7d0e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=template&id=e57f7d0e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "border-solid bg-primary-light border-radius-10 border-color-primary flex flex-row p-4"
  }, [_c("div", {
    staticClass: "flex flex-row w-full border-right-primary"
  }, [_c("vs-icon", {
    attrs: {
      icon: "person",
      size: "70px",
      bg: "#aca7f7",
      round: ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "ml-4 mr-2 w-full flex flex-wrap justify-between flex-col"
  }, [_c("div", [!_vm.isEditable ? _c("h5", {
    domProps: {
      textContent: _vm._s("".concat(_vm.formData.firstName, " ").concat(_vm.formData.lastName))
    }
  }) : _c("div", {
    staticClass: "flex"
  }, [_c("vs-input", {
    attrs: {
      placeholder: "Enter First Name"
    },
    on: {
      input: function input($event) {
        return _vm.handleInput("firstName");
      }
    },
    model: {
      value: _vm.formData.firstName,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "firstName", $$v);
      },
      expression: "formData.firstName"
    }
  }), _vm._v(" "), _c("vs-input", {
    staticClass: "ml-1",
    attrs: {
      placeholder: "Enter Last Name"
    },
    on: {
      input: function input($event) {
        return _vm.handleInput("lastName");
      }
    },
    model: {
      value: _vm.formData.lastName,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "lastName", $$v);
      },
      expression: "formData.lastName"
    }
  })], 1), _vm._v(" "), _c("Dropdown", {
    staticClass: "mt-1",
    attrs: {
      options: _vm.status,
      disabled: !_vm.isEditable,
      dataKey: "uniqueId",
      optionLabel: "label",
      optionValue: "value",
      placeholder: "Select Status"
    },
    on: {
      input: function input($event) {
        return _vm.handleInput("status");
      }
    },
    model: {
      value: _vm.formData.status,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "status", $$v);
      },
      expression: "formData.status"
    }
  }), _vm._v(" "), _c("Dropdown", {
    staticClass: "mt-1",
    attrs: {
      options: _vm.approvalStatuses,
      disabled: !_vm.isEditable,
      showClear: "",
      dataKey: "uniqueId",
      optionLabel: "label",
      optionValue: "value",
      placeholder: "Select Approval Status"
    },
    on: {
      input: function input($event) {
        return _vm.handleInput("approvalStatus");
      }
    },
    model: {
      value: _vm.formData.approvalStatus,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "approvalStatus", $$v);
      },
      expression: "formData.approvalStatus"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-1"
  }, [!_vm.isEditable ? _c("div", {
    staticClass: "flex items-center"
  }, [_c("vs-icon", {
    attrs: {
      icon: "call"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-3",
    domProps: {
      textContent: _vm._s(_vm.formData.phone)
    }
  })], 1) : _c("vs-input", {
    attrs: {
      placeholder: "Enter Phone Number"
    },
    on: {
      input: function input($event) {
        return _vm.handleInput("phone");
      }
    },
    model: {
      value: _vm.formData.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "phone", $$v);
      },
      expression: "formData.phone"
    }
  })], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full mx-5"
  }, [_c("div", {
    staticClass: "flex flex-row w-2/3"
  }, [_c("div", {
    staticClass: "flex flex-col w-1/3 mr-5"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Driver Type")]), _vm._v(" "), _c("Dropdown", {
    attrs: {
      options: _vm.driverTypes,
      disabled: !_vm.isEditable,
      dataKey: "uniqueId",
      optionLabel: "label",
      optionValue: "value"
    },
    on: {
      input: function input($event) {
        return _vm.handleInput("driverType");
      }
    },
    model: {
      value: _vm.formData.driverType,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "driverType", $$v);
      },
      expression: "formData.driverType"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-5 flex"
  }, [_c("div", {
    staticClass: "w-1/4"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Team Driver")]), _vm._v(" "), _c("vs-switch", {
    attrs: {
      disabled: !_vm.isEditable
    },
    on: {
      input: function input($event) {
        return _vm.handleInput("isTeamDriver");
      }
    },
    model: {
      value: _vm.formData.isTeamDriver,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "isTeamDriver", $$v);
      },
      expression: "formData.isTeamDriver"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-1/4"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Local Driver")]), _vm._v(" "), _c("vs-switch", {
    attrs: {
      disabled: !_vm.isEditable
    },
    on: {
      input: function input($event) {
        return _vm.handleInput("isLocalDriver");
      }
    },
    model: {
      value: _vm.formData.isLocalDriver,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "isLocalDriver", $$v);
      },
      expression: "formData.isLocalDriver"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-1/4"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Regional Driver")]), _vm._v(" "), _c("vs-switch", {
    attrs: {
      disabled: !_vm.isEditable
    },
    on: {
      input: function input($event) {
        return _vm.handleInput("isRegionalDriver");
      }
    },
    model: {
      value: _vm.formData.isRegionalDriver,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "isRegionalDriver", $$v);
      },
      expression: "formData.isRegionalDriver"
    }
  })], 1)])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".min-height-100[data-v-e57f7d0e] {\n  min-height: 100px;\n}\n[dir] .bg-primary-light[data-v-e57f7d0e] {\n  background-color: #f1f4ff;\n}\n[dir] .border-radius-10[data-v-e57f7d0e] {\n  border-radius: 10px !important;\n}\n[dir] .border-color-primary[data-v-e57f7d0e] {\n  border-color: #aca7f7 !important;\n}\n[dir=ltr] .border-right-primary[data-v-e57f7d0e] {\n  border-right: 2px solid #aca7f7 !important;\n}\n[dir=rtl] .border-right-primary[data-v-e57f7d0e] {\n  border-left: 2px solid #aca7f7 !important;\n}\n[dir][data-v-e57f7d0e] .v-select {\n  background: #ffffff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/drivers/components/OverviewCard.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/OverviewCard.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OverviewCard_vue_vue_type_template_id_e57f7d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverviewCard.vue?vue&type=template&id=e57f7d0e&scoped=true& */ "./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=template&id=e57f7d0e&scoped=true&");
/* harmony import */ var _OverviewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverviewCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OverviewCard_vue_vue_type_style_index_0_id_e57f7d0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true& */ "./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OverviewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OverviewCard_vue_vue_type_template_id_e57f7d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OverviewCard_vue_vue_type_template_id_e57f7d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e57f7d0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/drivers/components/OverviewCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_style_index_0_id_e57f7d0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=style&index=0&id=e57f7d0e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_style_index_0_id_e57f7d0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_style_index_0_id_e57f7d0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_style_index_0_id_e57f7d0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_style_index_0_id_e57f7d0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=template&id=e57f7d0e&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=template&id=e57f7d0e&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_template_id_e57f7d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewCard.vue?vue&type=template&id=e57f7d0e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewCard.vue?vue&type=template&id=e57f7d0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_template_id_e57f7d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewCard_vue_vue_type_template_id_e57f7d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=52.js.map