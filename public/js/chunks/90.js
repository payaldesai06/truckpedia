(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_logo_truckpedia_intial_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/images/logo/truckpedia-intial-logo.svg */ "./resources/assets/images/logo/truckpedia-intial-logo.svg");
/* harmony import */ var _assets_images_logo_truckpedia_intial_logo_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_truckpedia_intial_logo_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Logo',
  data: function data() {
    return {
      logo: _assets_images_logo_truckpedia_intial_logo_svg__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Logo */ "./resources/js/src/layouts/components/Logo.vue");
/* harmony import */ var _ProfileSetupComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileSetupComponent.vue */ "./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue");

 // import RegisterFirebase from './RegisterFirebase.vue'
// import RegisterAuth0 from './RegisterAuth0.vue'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Logo: _layouts_components_Logo__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProfileSetupComponent: _ProfileSetupComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"] // RegisterFirebase,
    // RegisterAuth0

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/entries */ "./node_modules/@babel/runtime/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

 // For custom error message


var dict = {
  custom: {
    business_name: {
      required: "The business name field is required" // alpha: 'Your business name may only contain alphabetic characters'

    },
    usdot_number: {
      required: "The usdot number field is required" // alpha: 'Your USDOT Number may only contain alphabetic characters'

    },
    email: {
      required: "The billing email field is required.",
      email: "Please enter valid email address."
    },
    load_unique_id_started_from: {
      required: "The load id field is required",
      numeric: "Please enter only numeric value."
    },
    address: {
      required: "The address field is required"
    },
    state: {
      required: "The state field is required"
    },
    city: {
      required: "The city field is required"
    },
    zipcode: {
      required: "The zipcode field is required"
    },
    phone_number: {
      required: "The phone number field is required"
    },
    fax_number: {
      required: "The fax number field is required"
    },
    timezone: {
      required: "The timezone field is required"
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_4__["Validator"].localize("en", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      business_name: "",
      usdot_number: "",
      email: "",
      load_unique_id_started_from: "",
      address: "",
      zipcode: "",
      city: "",
      state: "",
      timezone_options: [],
      time_zone: "",
      fax_number: "",
      phone_number: "",
      referralCode: null,
      // google map autocomplete options
      googleMapAutoCompleteOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_3__["default"].googleMapAutoCompleteOptions
    };
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var timezone;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              window.addEventListener("storage", this.checkLogout);

              try {
                // const {data} = await this.$store.dispatch('auth/getTimezoneList')
                //
                // console.log(data.payload)
                timezone = {
                  "America/Los_Angeles": "Pacific Time - US and Canada",
                  "America/Edmonton": "Mountain Time - US and Canada",
                  "America/Winnipeg": "Central Time - US and Canada",
                  "America/New_York": "Eastern Time - US and Canada",
                  "America/Halifax": "Atlantic Time"
                };
                this.timezone_options = _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(timezone).map(function (timezone) {
                  return {
                    label: timezone[1],
                    value: timezone[0]
                  };
                });
              } catch (error) {
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: error.response.data.message
                });
              }

              this.referralCode = this.$route.query.referralCode;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function created() {
      return _created.apply(this, arguments);
    };
  }(),
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.business_name !== "" && this.usdot_number !== "" && this.email !== "" && this.load_unique_id_started_from !== "" && this.address !== "" && this.city !== "" && this.state !== "" && this.zipcode !== "" && this.phone_number !== "" && // && this.fax_number !== ''
      this.time_zone !== "";
    }
  },
  methods: {
    checkLogout: function checkLogout() {
      try {
        if (!localStorage.getItem("access_token")) {
          window.location.reload();
        }
      } catch (e) {
        console.log("Error while logging out: ".concat(e));
      }
    },
    submit: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.$validator.validateAll().then(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(result) {
                    var payload;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!result) {
                              _context2.next = 17;
                              break;
                            }

                            _context2.prev = 1;

                            _this.$vs.loading();

                            payload = {
                              business_name: _this.business_name,
                              usdot_number: _this.usdot_number,
                              email: _this.email,
                              load_unique_id_started_from: _this.load_unique_id_started_from,
                              address: _this.address,
                              city: _this.city,
                              state: _this.state,
                              zipcode: _this.zipcode,
                              phone_number: _this.phone_number,
                              fax_number: _this.fax_number,
                              timezone: _this.time_zone,
                              referralCode: _this.referralCode
                            }; // console.log(payload)

                            _context2.next = 6;
                            return _this.$store.dispatch("auth/adminSetupProfile", payload);

                          case 6:
                            _context2.next = 8;
                            return _this.$router.push({
                              name: "home"
                            });

                          case 8:
                            _this.$vs.notify({
                              color: "success",
                              title: "Profile Setup",
                              text: "Profile set up successfully."
                            });

                            _context2.next = 14;
                            break;

                          case 11:
                            _context2.prev = 11;
                            _context2.t0 = _context2["catch"](1);

                            _this.$vs.notify({
                              title: "Error",
                              text: _context2.t0.response.data.message,
                              color: "danger",
                              time: 5000
                            });

                          case 14:
                            _context2.prev = 14;

                            _this.$vs.loading.close();

                            return _context2.finish(14);

                          case 17:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this, [[1, 11, 14, 17]]);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function submit() {
        return _submit.apply(this, arguments);
      };
    }(),
    logout: function () {
      var _logout = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$vs.loading();
                _context4.prev = 1;
                _context4.next = 4;
                return this.$store.dispatch("auth/logout");

              case 4:
                _context4.next = 6;
                return this.$router.push({
                  name: "page-login"
                }).catch(function () {});

              case 6:
                this.$vs.notify({
                  title: "Logout.",
                  color: "success",
                  text: "You logout successfully."
                });
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: _context4.t0.response.data.message
                });

              case 12:
                _context4.prev = 12;
                this.$vs.loading.close();
                return _context4.finish(12);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 9, 12, 15]]);
      }));

      return function logout() {
        return _logout.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("img", {
    staticClass: "fill-current text-primary",
    attrs: {
      src: _vm.logo,
      alt: "logo"
    }
  });
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=template&id=f54849c2&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=template&id=f54849c2& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex w-full vx-row no-gutter items-center justify-center bg-light-blue",
    staticStyle: {
      height: "100vh"
    }
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
  }, [_c("vx-card", [_c("div", {
    attrs: {
      slot: "no-body"
    },
    slot: "no-body"
  }, [_c("div", {
    staticClass: "pt-4 text-center"
  }, [_c("Logo", {
    staticClass: "mx-auto w-16"
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row no-gutter"
  }, [_c("div", {
    staticClass: "vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg"
  }, [_c("div", {
    staticClass: "px-8 pt-8 register-tabs-container"
  }, [_c("profile-setup-component")], 1)])])])])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=template&id=7a06b84e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=template&id=7a06b84e& ***!
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

  return _c("div", {
    staticClass: "pb-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("Business Name "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "business_name"
    },
    model: {
      value: _vm.business_name,
      callback: function callback($$v) {
        _vm.business_name = $$v;
      },
      expression: "business_name"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("business_name")))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("USDOT Number "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "usdot_number"
    },
    model: {
      value: _vm.usdot_number,
      callback: function callback($$v) {
        _vm.usdot_number = $$v;
      },
      expression: "usdot_number"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("usdot_number")))])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-8"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("Billing Email "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|email",
      expression: "'required|email'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "email"
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
  }, [_vm._v(_vm._s(_vm.errors.first("email")))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("div", {
    staticClass: "flex flex-nowrap sm:justify-end"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("Load# start from "), _c("field-required-sign")], 1), _vm._v(" "), _c("vx-tooltip", {
    staticClass: "w-1",
    attrs: {
      text: "Provided number will be starting number of the LOAD ID."
    }
  }, [_c("feather-icon", {
    staticClass: "ml-2",
    attrs: {
      icon: "InfoIcon",
      svgClasses: "h-4 w-4 hover:text-primary cursor-pointer"
    }
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|numeric",
      expression: "'required|numeric'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "load_unique_id_started_from",
      type: "number"
    },
    model: {
      value: _vm.load_unique_id_started_from,
      callback: function callback($$v) {
        _vm.load_unique_id_started_from = $$v;
      },
      expression: "load_unique_id_started_from"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("load_unique_id_started_from")))])], 1)])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "vx-row mb-8"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("Address "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("div", {
    staticClass: "vs-component vs-con-input-label vs-input w-full vs-input-primary"
  }, [_c("div", {
    staticClass: "vs-con-input"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "address"
    },
    model: {
      value: _vm.address,
      callback: function callback($$v) {
        _vm.address = $$v;
      },
      expression: "address"
    }
  })], 1)]), _vm._v(" "), _vm.errors.first("address") && _vm.address == "" ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("address")))]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("City "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "city"
    },
    model: {
      value: _vm.city,
      callback: function callback($$v) {
        _vm.city = $$v;
      },
      expression: "city"
    }
  }), _vm._v(" "), _vm.errors.first("city") && _vm.city == "" ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("city")))]) : _vm._e()], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mb-8"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("State "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "state"
    },
    model: {
      value: _vm.state,
      callback: function callback($$v) {
        _vm.state = $$v;
      },
      expression: "state"
    }
  }), _vm._v(" "), _vm.errors.first("state") && _vm.state == "" ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("state")))]) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("Zipcode "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "zipcode"
    },
    model: {
      value: _vm.zipcode,
      callback: function callback($$v) {
        _vm.zipcode = $$v;
      },
      expression: "zipcode"
    }
  }), _vm._v(" "), _vm.errors.first("zipcode") && _vm.zipcode == "" ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("zipcode")))]) : _vm._e()], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("Phone Number "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "phone_number"
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
  }, [_vm._v(_vm._s(_vm.errors.first("phone_number")))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "fax_number"
    },
    model: {
      value: _vm.fax_number,
      callback: function callback($$v) {
        _vm.fax_number = $$v;
      },
      expression: "fax_number"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("fax_number")))])], 1)])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("Time Zone "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-as": "selected",
      name: "timezone",
      label: "label",
      options: _vm.timezone_options,
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: false
    },
    model: {
      value: _vm.time_zone,
      callback: function callback($$v) {
        _vm.time_zone = $$v;
      },
      expression: "time_zone"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("timezone")))])], 1)])])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-2/3 w-full"
  }, [_c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.referralCode,
      callback: function callback($$v) {
        _vm.referralCode = $$v;
      },
      expression: "referralCode"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4 vx-row"
  }, [_c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full py-2 flex items-center justify-between"
  }, [_c("vs-button", {
    attrs: {
      color: "danger",
      type: "border"
    },
    on: {
      click: _vm.logout
    }
  }, [_vm._v("Logout\n      ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      disabled: !_vm.validateForm
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("Submit ")])], 1)], 1)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vx-row no-gutter"
  }, [_c("div", {
    staticClass: "vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg"
  }, [_c("div", {
    staticClass: "pt-8"
  }, [_c("div", {
    staticClass: "vx-card__title mb-8"
  }, [_c("h4", {
    staticClass: "text-xl opacity-75"
  }, [_vm._v("Business Address")])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("Fax")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vx-row no-gutter"
  }, [_c("div", {
    staticClass: "vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg"
  }, [_c("div", {
    staticClass: "pt-8"
  }, [_c("div", {
    staticClass: "vx-card__title mb-8"
  }, [_c("h4", {
    staticClass: "text-xl opacity-75"
  }, [_vm._v("Time Zone")])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vx-row no-gutter"
  }, [_c("div", {
    staticClass: "vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg"
  }, [_c("div", {
    staticClass: "pt-8"
  }, [_c("div", {
    staticClass: "vx-card__title mb-8"
  }, [_c("h4", {
    staticClass: "text-xl opacity-75"
  }, [_vm._v("Referral")])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vx-col sm:w-1/3 w-full sm:text-right"
  }, [_c("span", {
    staticClass: "font-semibold opacity-75 text-sm"
  }, [_vm._v("Referral Code")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-tabs-container {\n  min-height: 517px;\n}\n[dir] .register-tabs-container .con-tab {\n  padding-bottom: 23px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss&");

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

/***/ "./resources/assets/images/logo/truckpedia-intial-logo.svg":
/*!*****************************************************************!*\
  !*** ./resources/assets/images/logo/truckpedia-intial-logo.svg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/truckpedia-intial-logo.svg?b4abf62e2d5f1d959bd9ced004ec34c9";

/***/ }),

/***/ "./resources/js/src/layouts/components/Logo.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/layouts/components/Logo.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=212d79e5& */ "./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=212d79e5& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/profile-setup/ProfileSetup.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/profile-setup/ProfileSetup.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileSetup_vue_vue_type_template_id_f54849c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileSetup.vue?vue&type=template&id=f54849c2& */ "./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=template&id=f54849c2&");
/* harmony import */ var _ProfileSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileSetup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProfileSetup_vue_vue_type_style_index_0_id_f54849c2_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss& */ "./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileSetup_vue_vue_type_template_id_f54849c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileSetup_vue_vue_type_template_id_f54849c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/profile-setup/ProfileSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_style_index_0_id_f54849c2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=style&index=0&id=f54849c2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_style_index_0_id_f54849c2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_style_index_0_id_f54849c2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_style_index_0_id_f54849c2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_style_index_0_id_f54849c2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=template&id=f54849c2&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=template&id=f54849c2& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_template_id_f54849c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSetup.vue?vue&type=template&id=f54849c2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetup.vue?vue&type=template&id=f54849c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_template_id_f54849c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetup_vue_vue_type_template_id_f54849c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileSetupComponent_vue_vue_type_template_id_7a06b84e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileSetupComponent.vue?vue&type=template&id=7a06b84e& */ "./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=template&id=7a06b84e&");
/* harmony import */ var _ProfileSetupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileSetupComponent.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileSetupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileSetupComponent_vue_vue_type_template_id_7a06b84e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileSetupComponent_vue_vue_type_template_id_7a06b84e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSetupComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=template&id=7a06b84e&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=template&id=7a06b84e& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetupComponent_vue_vue_type_template_id_7a06b84e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSetupComponent.vue?vue&type=template&id=7a06b84e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/profile-setup/ProfileSetupComponent.vue?vue&type=template&id=7a06b84e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetupComponent_vue_vue_type_template_id_7a06b84e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSetupComponent_vue_vue_type_template_id_7a06b84e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=90.js.map