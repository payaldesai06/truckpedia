(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[233],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var _http_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/http/axios */ "./resources/js/src/http/axios/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


 // For custom error message


var dict = {
  custom: {
    company_name: {
      required: 'The company name field is required.'
    },
    phone_number: {
      required: 'The phone number field is required.',
      numeric: ''
    },
    number_of_trucks: {
      required: 'The number of trucks field is required.'
    }
  } // register custom messages

};
vee_validate__WEBPACK_IMPORTED_MODULE_4__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'WhiteListRegister',
  data: function data() {
    return {
      appName: _config_constants__WEBPACK_IMPORTED_MODULE_2__["default"].appName,
      // form
      company_name: '',
      email: '',
      number_of_trucks: '',
      phone_number: ''
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.company_name !== '' && this.email !== '' && this.phone_number !== '' && this.number_of_trucks !== '';
    }
  },
  methods: {
    resetForm: function resetForm() {
      this.company_name = '';
      this.email = '';
      this.phone_number = '';
      this.number_of_trucks = '';
    },
    submit: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this = this;

        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  company_name: this.company_name,
                  email: this.email,
                  phone_number: this.phone_number,
                  number_of_trucks: this.number_of_trucks
                };
                this.$vs.loading();
                _context.next = 4;
                return _http_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/waiting-list', payload).then(function (_ref) {
                  var data = _ref.data;

                  _this.$vs.notify({
                    title: 'Success',
                    text: data.message,
                    color: 'success'
                  });

                  _this.resetForm();
                }).catch(function (error) {
                  _this.$vs.notify({
                    title: 'Error',
                    text: error.response.data.message,
                    color: 'danger'
                  });
                }).finally(function () {
                  _this.$vs.loading.close();
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function submit() {
        return _submit.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=template&id=5a46e225&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=template&id=5a46e225& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
  }, [_c("div", {
    staticClass: "vx-col w-10/12 md:w-6/12 xl:w-4/12 sm:m-0 m-4"
  }, [_c("vx-card", {
    attrs: {
      claass: "shadow-sm",
      "no-shadow": ""
    }
  }, [_c("div", {
    staticClass: "full-page-bg-color",
    attrs: {
      slot: "no-body"
    },
    slot: "no-body"
  }, [_c("div", {
    staticClass: "vx-row no-gutter justify-center items-center"
  }, [_c("div", {
    staticClass: "vx-col w-full d-theme-dark-bg"
  }, [_c("div", {
    staticClass: "px-8 pt-8 pb-6 login-tabs-container"
  }, [_c("div", {
    staticClass: "vx-card__title mb-4 w-full md:w-10/12 mx-auto"
  }, [_c("h2", {
    staticClass: "flex items-center justify-center mb-4 text-3xl"
  }, [_vm._v("👋 "), _c("span", {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.appName))])]), _vm._v(" "), _c("div", {
    staticClass: "pt-2 text-dark"
  }, [_c("p", [_c("strong", [_vm._v("Hey")]), _vm._v(", we're still in\n                    "), _c("strong", [_vm._v("private beta")]), _vm._v(", but we are working hard to "), _c("strong", {
    staticClass: "border-b border-primary"
  }, [_vm._v("open up\n                      soon!")])]), _vm._v(" "), _c("p", {
    staticClass: "pt-1"
  }, [_vm._v("Please fill out the form below to join our "), _c("strong", [_vm._v("waitlist")]), _vm._v(".")]), _vm._v(" "), _c("p", {
    staticClass: "pt-1 font-semibold"
  }, [_vm._v("\n                    we're looking forward to welcoming you.\n                  ")])])]), _vm._v(" "), _c("form", {
    staticClass: "pt-4 w-full md:w-10/12 mx-auto",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
      }
    }
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Company Name\n                    "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "text",
      "data-vv-validate-on": "blur",
      name: "company_name",
      placeholder: _vm.appName
    },
    model: {
      value: _vm.company_name,
      callback: function callback($$v) {
        _vm.company_name = $$v;
      },
      expression: "company_name"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("company_name")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-4 w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Email\n                    "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|email|min:3",
      expression: "'required|email|min:3'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "email",
      "data-vv-validate-on": "blur",
      name: "email",
      placeholder: "johndoe@example.com"
    },
    model: {
      value: _vm.email,
      callback: function callback($$v) {
        _vm.email = typeof $$v === "string" ? $$v.trim() : $$v;
      },
      expression: "email"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("email")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-4 w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Phone Number\n                    "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "text",
      "data-vv-validate-on": "blur",
      name: "phone_number",
      placeholder: "9876543210"
    },
    model: {
      value: _vm.phone_number,
      callback: function callback($$v) {
        _vm.phone_number = $$v;
      },
      expression: "phone_number"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("phone_number")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-4 w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("# of Trucks\n                    "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|numeric",
      expression: "'required|numeric'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      "data-vv-validate-on": "blur",
      name: "number_of_trucks",
      placeholder: "100"
    },
    model: {
      value: _vm.number_of_trucks,
      callback: function callback($$v) {
        _vm.number_of_trucks = $$v;
      },
      expression: "number_of_trucks"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("number_of_trucks")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-6 w-full"
  }, [_c("vs-button", {
    attrs: {
      type: "filled",
      disabled: !_vm.validateForm
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("\n                    Submit\n                  ")])], 1)])])])])])])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WaitingListRegister_vue_vue_type_template_id_5a46e225___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WaitingListRegister.vue?vue&type=template&id=5a46e225& */ "./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=template&id=5a46e225&");
/* harmony import */ var _WaitingListRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaitingListRegister.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WaitingListRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WaitingListRegister_vue_vue_type_template_id_5a46e225___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WaitingListRegister_vue_vue_type_template_id_5a46e225___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/waitinglist/WaitingListRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingListRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WaitingListRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingListRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=template&id=5a46e225&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=template&id=5a46e225& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingListRegister_vue_vue_type_template_id_5a46e225___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WaitingListRegister.vue?vue&type=template&id=5a46e225& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/waitinglist/WaitingListRegister.vue?vue&type=template&id=5a46e225&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingListRegister_vue_vue_type_template_id_5a46e225___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingListRegister_vue_vue_type_template_id_5a46e225___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=233.js.map