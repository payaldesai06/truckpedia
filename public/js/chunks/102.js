(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterJWT_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterJWT.vue */ "./resources/js/src/views/pages/register/RegisterJWT.vue");
 // import RegisterFirebase from './RegisterFirebase.vue'
// import RegisterAuth0 from './RegisterAuth0.vue'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RegisterJwt: _RegisterJWT_vue__WEBPACK_IMPORTED_MODULE_0__["default"] // RegisterFirebase,
    // RegisterAuth0

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
    first_name: {
      required: 'The first name field is required.',
      alpha: 'Your first name may only contain alphabetic characters'
    },
    last_name: {
      required: 'The last name field is required.',
      alpha: 'Your last name may only contain alphabetic characters'
    }
  } // register custom messages

};
vee_validate__WEBPACK_IMPORTED_MODULE_2__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.first_name !== '' && this.last_name !== '' && this.email !== '' && this.password !== '' && this.confirm_password !== '' && this.isTermsConditionAccepted === true;
    }
  },
  methods: {
    checkLogin: function checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // Close animation if passed as payload
        // this.$vs.loading.close()
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        });
        return false;
      }

      return true;
    },
    registerUserJWt: function () {
      var _registerUserJWt = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var payload, referralCode;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (this.validateForm) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                // const payload = {
                //   userDetails: {
                //     displayName: this.displayName,
                //     email: this.email,
                //     password: this.password,
                //     confirmPassword: this.confirm_password
                //   },
                //   notify: this.$vs.notify
                // }
                this.$vs.loading();
                payload = {
                  first_name: this.first_name,
                  last_name: this.last_name,
                  email: this.email,
                  password: this.password,
                  confirmPassword: this.confirm_password,
                  notify: this.$vs.notify
                };
                _context.next = 7;
                return this.$store.dispatch('auth/registerUserJWT', payload);

              case 7:
                this.$vs.loading.close();
                referralCode = this.$route.query.referralCode;
                this.$router.push({
                  name: 'free-trial',
                  query: {
                    referralCode: referralCode
                  }
                }).catch(function () {});
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                this.$vs.loading.close();
                this.$vs.notify({
                  title: 'Error',
                  text: _context.t0.message,
                  iconPack: 'feather',
                  icon: 'icon-alert-circle',
                  color: 'danger'
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      return function registerUserJWt() {
        return _registerUserJWt.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a& ***!
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

  return _c("div", {
    staticClass: "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
  }, [_c("vx-card", [_c("div", {
    staticClass: "full-page-bg-color",
    attrs: {
      slot: "no-body"
    },
    slot: "no-body"
  }, [_c("div", {
    staticClass: "vx-row no-gutter"
  }, [_c("div", {
    staticClass: "vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
  }, [_c("img", {
    staticClass: "mx-auto",
    attrs: {
      src: __webpack_require__(/*! @assets/images/pages/register.jpg */ "./resources/assets/images/pages/register.jpg"),
      alt: "register"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg"
  }, [_c("div", {
    staticClass: "px-8 pt-8 register-tabs-container"
  }, [_c("div", {
    staticClass: "vx-card__title mb-4"
  }, [_c("h4", {
    staticClass: "mb-4"
  }, [_vm._v("Create Account")]), _vm._v(" "), _c("p", [_vm._v("Fill the below form to create a new account.")])]), _vm._v(" "), _c("register-jwt")], 1)])])])])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "pb-4 space-y-4"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n      First Name\n      "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "first_name"
    },
    model: {
      value: _vm.first_name,
      callback: function callback($$v) {
        _vm.first_name = $$v;
      },
      expression: "first_name"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("first_name")))])], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n      Last Name\n      "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "last_name"
    },
    model: {
      value: _vm.last_name,
      callback: function callback($$v) {
        _vm.last_name = $$v;
      },
      expression: "last_name"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("last_name")))])], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n      Email\n      "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|email|min:3",
      expression: "'required|email|min:3'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "email",
      type: "email"
    },
    model: {
      value: _vm.email,
      callback: function callback($$v) {
        _vm.email = $$v;
      },
      expression: "email"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("email")))])], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n      Password\n      "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|min:6",
      expression: "'required|min:6'"
    }],
    ref: "password",
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      type: "password",
      name: "password"
    },
    model: {
      value: _vm.password,
      callback: function callback($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("password")))])], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n      Confirm Password\n      "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "min:6|confirmed:password",
      expression: "'min:6|confirmed:password'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      "data-vv-as": "password",
      type: "password",
      name: "confirm_password"
    },
    model: {
      value: _vm.confirm_password,
      callback: function callback($$v) {
        _vm.confirm_password = $$v;
      },
      expression: "confirm_password"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("confirm_password")))])], 1), _vm._v(" "), _c("vs-checkbox", {
    staticClass: "mt-6",
    model: {
      value: _vm.isTermsConditionAccepted,
      callback: function callback($$v) {
        _vm.isTermsConditionAccepted = $$v;
      },
      expression: "isTermsConditionAccepted"
    }
  }, [_vm._v("\n    I accept the terms & conditions.\n  ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-6",
    attrs: {
      type: "border",
      to: "/login"
    }
  }, [_vm._v("\n    Login\n  ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "float-right mt-6",
    attrs: {
      disabled: !_vm.validateForm
    },
    on: {
      click: _vm.registerUserJWt
    }
  }, [_vm._v("\n    Register\n  ")])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-tabs-container {\n  min-height: 517px;\n}\n[dir] .register-tabs-container .con-tab {\n  padding-bottom: 23px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/assets/images/pages/register.jpg":
/*!****************************************************!*\
  !*** ./resources/assets/images/pages/register.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/register.jpg?cfd9ef099bfc1f99c6f2970ae05a6a4a";

/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=59b7090a& */ "./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Register_vue_vue_type_style_index_0_id_59b7090a_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss& */ "./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/register/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_59b7090a_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&id=59b7090a&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_59b7090a_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_59b7090a_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_59b7090a_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_59b7090a_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=59b7090a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterJWT.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterJWT.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterJWT.vue?vue&type=template&id=653637e6& */ "./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6&");
/* harmony import */ var _RegisterJWT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterJWT.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterJWT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/register/RegisterJWT.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterJWT.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterJWT.vue?vue&type=template&id=653637e6& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=102.js.map