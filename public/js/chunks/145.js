(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EmailConfiguration",
  props: {
    getAutomationEmailList: Array,
    trigger: {
      type: String
    },
    action: {
      required: false
    },
    scheduledData: {
      required: false
    },
    shareUrl: {
      type: String,
      required: false
    },
    triggers: {
      required: true,
      type: Array
    }
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_4__["VueEditor"]
  },
  data: function data() {
    return {
      emailChips: [],
      content: "",
      customToolbar: [[{
        font: []
      }], [{
        header: [false, 1, 2, 3, 4, 5, 6]
      }], ["bold", "italic", "underline"], // [
      //   { align: "" },
      //   { align: "center" },
      //   { align: "right" },
      //   { align: "justify" },
      // ],
      // ["blockquote"],
      [{
        list: "ordered"
      }, {
        list: "bullet"
      }], // [{ indent: "-1" }, { indent: "+1" }],
      [{
        color: []
      }, {
        background: []
      }], ["link"]],
      fromName: "",
      replyTo: "",
      cc: [],
      bcc: [],
      subject: "",
      actionId: null,
      emailTo: "",
      emailCC: "",
      emailBCC: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])("auth", ["userRole", "user"])),
  created: function created() {
    if (this.trigger == this.triggers[1] || this.trigger == this.triggers[2] || this.trigger == this.triggers[3]) {
      this.setAvailableData();
    }

    if (this.trigger == this.triggers[0]) {
      this.emailTo = this.getAutomationEmailList.join(",");
    }
  },
  watch: {
    scheduledData: {
      handler: function handler() {
        this.setEmailData();
      },
      immediate: true,
      deep: true
    },
    emailTo: function emailTo() {
      if (this.trigger === this.triggers[0]) {
        this.$emit("handleExtraEmails", this.emailTo.split(",").map(function (ele) {
          return ele.trim();
        }));
      }
    },
    getAutomationEmailList: function getAutomationEmailList(emails) {
      if (this.trigger === this.triggers[0]) {
        this.emailTo = emails.join(",");
      }
    }
  },
  methods: {
    setAvailableData: function setAvailableData() {
      this.replyTo = this.user.admin_company_details.email;
      this.fromName = this.user.admin_company_details.business_name;

      if (this.action.action != "Send an email") {
        this.subject = "Available Trucks From ".concat(this.user.admin_company_details.business_name);
        this.content = "Hi,<br/> <span>Please click <a href=\"".concat(this.shareUrl, "\">here</a> to view our company's available trucks.</span> <br/> ").concat(this.user.admin_company_details.business_name);
      }

      this.setEmailData();
    },
    setEmailData: function setEmailData() {
      if (this.scheduledData && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.scheduledData).length) {
        if (this.scheduledData.cc.length || this.scheduledData.bcc.length || this.scheduledData.to.length) {
          this.subject = this.scheduledData.subject;
          this.content = this.scheduledData.content;
          this.emailCC = this.scheduledData.cc.join(",");
          this.emailBCC = this.scheduledData.bcc.join(",");
          this.emailTo = this.scheduledData.to.join(",");
          this.actionId = this.scheduledData.actionId;
          this.replyTo = this.scheduledData.replyTo;
          this.fromName = this.scheduledData.fromName;
        }
      }

      if (!this.subject && this.trigger == this.triggers[2]) {
        /* Maintenance Mode */
        this.subject = "Reminder";
      }

      if (!this.subject && this.trigger == this.triggers[3]) {
        /* Maintenance Mode */
        this.subject = "Expiration Reminder";
      }
    },
    sendDataToParent: function sendDataToParent() {
      if (this.trigger == this.triggers[1] || this.trigger == this.triggers[2] || this.trigger == this.triggers[3]) {
        this.$emit("scheduledEmailConfiguration", {
          id: this.action.selectedIndex,
          actionType: this.action.action == "Send an email" ? "email" : "emailAvailableTrucks",
          to: this.emailTo.split(",").map(function (ele) {
            return ele.trim();
          }),
          cc: this.emailCC.split(",").map(function (ele) {
            return ele.trim();
          }),
          bcc: this.emailBCC.split(",").map(function (ele) {
            return ele.trim();
          }),
          fromName: this.fromName,
          replyTo: this.replyTo ? this.replyTo.trim() : null,
          subject: this.subject,
          content: this.content,
          actionId: this.actionId
        });
      }
    }
  },
  updated: function updated() {
    this.sendDataToParent();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=template&id=3dfdb295&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=template&id=3dfdb295& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-3"
  }, [_c("b", [_vm._v("Action will run...")]), _vm._v(" "), _c("div", {
    staticClass: "email-config"
  }, [_c("div", {
    staticClass: "mt-4 my-3"
  }, [_vm.trigger === _vm.triggers[0] ? _c("label", [_vm._v("Add extra emails")]) : _c("label", {
    staticClass: "my-4"
  }, [_vm._v("To")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("Separate multiple emails with commas")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.emailTo,
      callback: function callback($$v) {
        _vm.emailTo = $$v;
      },
      expression: "emailTo"
    }
  }), _vm._v(" "), _vm.trigger == _vm.triggers[1] || _vm.trigger == _vm.triggers[2] || _vm.trigger == _vm.triggers[3] ? _c("div", [_c("vs-collapse", [_c("vs-collapse-item", {
    staticClass: "p-0"
  }, [_c("div", {
    staticClass: "p-0 m-0",
    attrs: {
      slot: "header"
    },
    slot: "header"
  }, [_c("span", {
    staticClass: "text-sm"
  }, [_vm._v("Show more options")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("CC")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("\n                Separate multiple emails with commas\n              ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.emailCC,
      callback: function callback($$v) {
        _vm.emailCC = $$v;
      },
      expression: "emailCC"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("BCC")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("\n                Separate multiple emails with commas\n              ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.emailBCC,
      callback: function callback($$v) {
        _vm.emailBCC = $$v;
      },
      expression: "emailBCC"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("From name")]), _vm._v(" "), _c("div", [_c("vs-input", {
    staticClass: "w-full",
    on: {
      input: _vm.sendDataToParent
    },
    model: {
      value: _vm.fromName,
      callback: function callback($$v) {
        _vm.fromName = $$v;
      },
      expression: "fromName"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("Reply to")]), _vm._v(" "), _c("div", [_c("vs-input", {
    staticClass: "w-full",
    on: {
      input: _vm.sendDataToParent
    },
    model: {
      value: _vm.replyTo,
      callback: function callback($$v) {
        _vm.replyTo = $$v;
      },
      expression: "replyTo"
    }
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("Subject")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.subject,
      callback: function callback($$v) {
        _vm.subject = $$v;
      },
      expression: "subject"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("Content")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      editorToolbar: _vm.customToolbar
    },
    model: {
      value: _vm.content,
      callback: function callback($$v) {
        _vm.content = $$v;
      },
      expression: "content"
    }
  }), _vm._v(" "), _vm.trigger == _vm.triggers[2] ? _c("blockquote", {
    staticClass: "mt-5"
  }, [_c("strong", [_vm._v(" NOTE: ")]), _vm._v("\n             “Asset numbers and service dates will be automatically appended at the end of the email”\n          ")]) : _vm._e(), _vm._v(" "), _vm.trigger == _vm.triggers[3] ? _c("blockquote", {
    staticClass: "mt-5"
  }, [_c("strong", [_vm._v(" NOTE: ")]), _vm._v("\n             “Asset details will be appended at the end of the email”\n          ")]) : _vm._e()], 1)], 1) : _vm._e()], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".email-config {\n  overflow: auto;\n  height: 70vh;\n}\n[dir] .email-config .con-chips {\n  box-shadow: none !important;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0;\n}\n[dir] .email-config .con-chips .con-vs-chip {\n  margin: 6px 3px;\n}\n.email-config input {\n  width: 100%;\n}\n[dir] .vs-collapse-item--header {\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss&");

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

/***/ "./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailConfiguration_vue_vue_type_template_id_3dfdb295___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailConfiguration.vue?vue&type=template&id=3dfdb295& */ "./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=template&id=3dfdb295&");
/* harmony import */ var _EmailConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailConfiguration.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmailConfiguration_vue_vue_type_style_index_0_id_3dfdb295_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss& */ "./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmailConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailConfiguration_vue_vue_type_template_id_3dfdb295___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailConfiguration_vue_vue_type_template_id_3dfdb295___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/automation/components/EmailConfiguration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailConfiguration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_style_index_0_id_3dfdb295_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=style&index=0&id=3dfdb295&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_style_index_0_id_3dfdb295_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_style_index_0_id_3dfdb295_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_style_index_0_id_3dfdb295_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_style_index_0_id_3dfdb295_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=template&id=3dfdb295&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=template&id=3dfdb295& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_template_id_3dfdb295___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailConfiguration.vue?vue&type=template&id=3dfdb295& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/EmailConfiguration.vue?vue&type=template&id=3dfdb295&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_template_id_3dfdb295___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfiguration_vue_vue_type_template_id_3dfdb295___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=145.js.map