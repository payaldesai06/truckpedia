(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_QuoteEmailContentPreview_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/QuoteEmailContentPreview.vue */ "./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SendQuoteEmail',
  components: {
    QuoteEmailContentPreview: _components_QuoteEmailContentPreview_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])('auth', ['user'])),
  props: {
    selectedCarriers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    quotesDetails: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      fromName: '',
      replyTo: '',
      to: '',
      cc: [],
      bcc: [],
      subject: ''
    };
  },
  created: function created() {
    this.setAvailableData();
    this.subject = "New Quote Request From ".concat(this.user.admin_company_details.business_name);
  },
  watch: {
    selectedCarriers: function selectedCarriers(newVal) {
      this.setAvailableData();
    }
  },
  methods: {
    goBack: function goBack() {
      this.$emit('goBack');
    },
    setAvailableData: function setAvailableData() {
      this.fromName = this.user.admin_company_details.business_name;
      this.bcc = this.selectedCarriers.map(function (item) {
        if (item.ccEmails.length) {
          return "".concat(item.email, ",").concat(item.ccEmails.join(','));
        }

        return item.email;
      }).filter(Boolean).join(',');
      this.cc = this.currentUserEmails();
      this.replyTo = this.user.admin_company_details.email;
    },
    // Add email validation function
    currentUserEmails: function currentUserEmails() {
      var _ref = (this.user || {}).admin_company_details || {},
          email = _ref.email,
          billing_cc_emails = _ref.billing_cc_emails;

      return "".concat(email).concat(billing_cc_emails ? ',' : '').concat(billing_cc_emails && billing_cc_emails.join(', '));
    },
    sendEmail: function () {
      var _sendEmail = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var fromName, replyTo, cc, bcc, subject, to, emailData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fromName = this.fromName, replyTo = this.replyTo, cc = this.cc, bcc = this.bcc, subject = this.subject, to = this.to; // Check if any required fields are empty

                if (!(!fromName || !replyTo || !subject)) {
                  _context.next = 4;
                  break;
                }

                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: 'Please fill in all required fields.'
                });
                return _context.abrupt("return");

              case 4:
                // Proceed to send the email
                emailData = {
                  fromName: fromName,
                  to: to ? to.split(',').map(function (email) {
                    return email.trim();
                  }).filter(Boolean) : null,
                  replyTo: replyTo.split(',').map(function (email) {
                    return email.trim();
                  }).filter(Boolean),
                  cc: cc ? cc.split(',').map(function (email) {
                    return email.trim();
                  }).filter(Boolean) : null,
                  bcc: bcc ? bcc.split(',').map(function (email) {
                    return email.trim();
                  }).filter(Boolean) : null,
                  subject: subject
                };
                this.$emit('submitCreateEditQuote', emailData);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function sendEmail() {
        return _sendEmail.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/quoteCommonFunctions */ "./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js");





var _name$mixins$computed;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (_name$mixins$computed = {
  name: 'QuoteEmailContentPreview',
  mixins: [_mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_5__["default"]],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('auth', ['user'])),
  props: {
    quoteEmailContent: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  }
}, _defineProperty(_name$mixins$computed, "computed", {
  totalWeight: function totalWeight() {
    var weight = 0;

    if (this.quoteEmailContent && this.quoteEmailContent.stops) {
      this.quoteEmailContent.stops.forEach(function (stop) {
        weight += stop.weight ? Number(stop.weight) : 0;
      });
    }

    if (weight == 0) {
      return '';
    }

    return this.parseFloatWithTrims(weight);
  }
}), _defineProperty(_name$mixins$computed, "data", function data() {
  return {
    driverPreferences: {
      solo: 'Solo',
      team: 'Team'
    }
  };
}), _defineProperty(_name$mixins$computed, "methods", {}), _name$mixins$computed);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=template&id=7626e38a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=template&id=7626e38a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "email-form-container"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "label mt-4"
  }, [_vm._v("From Name"), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "input mt-4"
  }, [_c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.fromName,
      callback: function callback($$v) {
        _vm.fromName = $$v;
      },
      expression: "fromName"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "label mt-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("to")]), _vm._v(" "), _c("div", {
    staticClass: "input"
  }, [_c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("Separate multiple emails with commas")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      }
    },
    model: {
      value: _vm.to,
      callback: function callback($$v) {
        _vm.to = $$v;
      },
      expression: "to"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Cc")]), _vm._v(" "), _c("div", {
    staticClass: "input"
  }, [_c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("Separate multiple emails with commas")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      }
    },
    model: {
      value: _vm.cc,
      callback: function callback($$v) {
        _vm.cc = $$v;
      },
      expression: "cc"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Bcc")]), _vm._v(" "), _c("div", {
    staticClass: "input"
  }, [_c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("Separate multiple emails with commas")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      }
    },
    model: {
      value: _vm.bcc,
      callback: function callback($$v) {
        _vm.bcc = $$v;
      },
      expression: "bcc"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Reply to"), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "input"
  }, [_c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("Separate multiple emails with commas")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      }
    },
    model: {
      value: _vm.replyTo,
      callback: function callback($$v) {
        _vm.replyTo = $$v;
      },
      expression: "replyTo"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Subject"), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "input"
  }, [_c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.subject,
      callback: function callback($$v) {
        _vm.subject = $$v;
      },
      expression: "subject"
    }
  })], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("QuoteEmailContentPreview", {
    attrs: {
      quoteEmailContent: _vm.quotesDetails
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "quotesBtn"
  }, [_c("vs-button", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.goBack.apply(null, arguments);
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c("vs-button", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.sendEmail.apply(null, arguments);
      }
    }
  }, [_vm._v("Send via Truckpedia")])], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=template&id=71e58ac5&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=template&id=71e58ac5&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticStyle: {
      "background-color": "#fff",
      padding: "15px"
    }
  }, [_c("div", {
    staticClass: "p-5"
  }, [_c("h1", {
    staticClass: "header"
  }, [_vm._v("Quote Request")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 items-center"
  }, [_c("div", {
    staticClass: "text-lg font-medium"
  }, [_vm._v("\n          " + _vm._s(_vm.quoteEmailContent && _vm.quoteEmailContent.stops && _vm.quoteEmailContent.stops[0] && _vm.formatStateCity(_vm.quoteEmailContent.stops[0].city, _vm.quoteEmailContent.stops[0].state)) + "\n        ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "text-lg font-medium"
  }, [_vm._v("\n          " + _vm._s(_vm.quoteEmailContent && _vm.quoteEmailContent.stops && _vm.quoteEmailContent.stops.length > 0 && _vm.quoteEmailContent.stops[_vm.quoteEmailContent.stops.length - 1] && _vm.formatStateCity(_vm.quoteEmailContent.stops[_vm.quoteEmailContent.stops.length - 1].city, _vm.quoteEmailContent.stops[_vm.quoteEmailContent.stops.length - 1].state)) + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col mt-4"
  }, [_c("span", {
    staticClass: "text-xl font-medium"
  }, [_vm._v("QUOTE DETAILS")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "text-lg font-medium w-40"
  }, [_vm._v("Mode:")]), _vm._v(" "), _c("span", {
    staticClass: "text-lg font-medium"
  }, [_vm._v("\n            " + _vm._s(_vm.loadTypes[_vm.quoteEmailContent.loadType] || "") + "\n          ")])]), _vm._v(" "), _c("div", {
    staticClass: "divider"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2"
  }, [_c("span", {
    staticClass: "text-lg font-medium w-40"
  }, [_vm._v("Equipment:")]), _vm._v(" "), _c("span", {
    staticClass: "text-lg font-medium w-40"
  }, [_vm._v("\n            " + _vm._s(_vm.getEquipmentType(_vm.quoteEmailContent.equipmentType)) + "\n          ")])]), _vm._v(" "), _c("div", {
    staticClass: "divider"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2"
  }, [_c("span", {
    staticClass: "text-lg font-medium w-40"
  }, [_vm._v("Locations")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "flex gap-6"
  }, _vm._l((_vm.quoteEmailContent.stops || []).filter(function (item) {
    return item.type === "shipper";
  }), function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "flex flex-col"
    }, [_c("div", {
      staticClass: "flex gap-2"
    }, [_c("span", {
      staticClass: "text-sm font-medium mr-3 mt-2px opacity-40"
    }, [_vm._v("\n                    PICKUP " + _vm._s(index + 1) + "\n                  ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("span", {
      staticClass: "text-base font-medium"
    }, [_vm._v("\n                      " + _vm._s(_vm.formatStateCity(item.city, item.state)) + "\n                    ")]), _vm._v(" "), _c("span", {
      staticClass: "text-base font-medium"
    }, [_vm._v(_vm._s(item.date))]), _vm._v(" "), _c("span", {
      staticClass: "text-base font-medium"
    }, [_vm._v(_vm._s(item.time))])])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "flex gap-6"
  }, _vm._l((_vm.quoteEmailContent.stops || []).filter(function (item) {
    return item.type === "receiver";
  }), function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "flex flex-col"
    }, [_c("div", {
      staticClass: "flex gap-2 mt-4"
    }, [_c("span", {
      staticClass: "text-sm font-medium opacity-40 mt-2px"
    }, [_vm._v("\n                    DELIVERY " + _vm._s(index + 1) + "\n                  ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("span", {
      staticClass: "text-base font-medium"
    }, [_vm._v("\n                      " + _vm._s(_vm.formatStateCity(item.city, item.state)) + "\n                    ")]), _vm._v(" "), _c("span", {
      staticClass: "text-base font-medium"
    }, [_vm._v("\n                      " + _vm._s(item.date) + "\n                    ")]), _vm._v(" "), _c("span", {
      staticClass: "text-base font-medium"
    }, [_vm._v("\n                      " + _vm._s(item.time) + "\n                    ")])])])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "divider"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2"
  }, [_c("span", {
    staticClass: "text-lg font-medium w-40"
  }, [_vm._v("Driver Preference:")]), _vm._v(" "), _c("span", {
    staticClass: "text-lg font-medium"
  }, [_vm._v("\n            " + _vm._s(_vm.driverPreferences[_vm.quoteEmailContent.driverPreference] || "N/A") + "\n          ")])]), _vm._v(" "), _c("div", {
    staticClass: "divider"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2"
  }, [_c("span", {
    staticClass: "text-lg font-medium w-40"
  }, [_vm._v("Total Weight:")]), _vm._v(" "), _c("span", {
    staticClass: "text-lg font-medium"
  }, [_vm._v(_vm._s(_vm.totalWeight))])])]), _vm._v(" "), _c("div", {
    staticClass: "book-now-btn mt-10"
  }, [_c("span", {
    staticClass: "text-base font-mediu",
    staticStyle: {
      color: "#1877f2"
    }
  }, [_vm._v("\n          Book Now: $" + _vm._s(_vm.quoteEmailContent.bookNowRate) + "\n        ")])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "flex items-center"
  }, [_c("div", {
    staticClass: "ellipse"
  }), _vm._v(" "), _c("div", {
    staticClass: "dashed-line"
  }), _vm._v(" "), _c("div", {
    staticClass: "pin"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quotesBtn[data-v-7626e38a] {\n  display: flex;\n  justify-content: space-between;\n}[dir] .quotesBtn[data-v-7626e38a] {\n  margin: 25px 0px;\n}\n.quotesBtn button[data-v-7626e38a] {\n  color: #fff;\n  outline: none;\n}\n[dir] .quotesBtn button[data-v-7626e38a] {\n  padding: 14px 24px;\n  border-radius: 5px;\n  background-color: #3975eb;\n  border: 1px solid #3975eb;\n  cursor: pointer;\n}\n.email-form-container[data-v-7626e38a] {\n  overflow-x: auto;\n  display: flex;\n  flex-direction: column;\n}\n[dir] .email-form-container[data-v-7626e38a] {\n  background-color: #f3f4f6;\n  padding: 25px;\n}\n.email-form-container .form-row[data-v-7626e38a] {\n  display: flex;\n  align-items: center;\n}\n[dir] .email-form-container .form-row[data-v-7626e38a] {\n  margin-bottom: 10px;\n}\n.email-form-container .form-row .label[data-v-7626e38a] {\n  width: 80px;\n  font-weight: 500;\n}\n[dir=ltr] .email-form-container .form-row .label[data-v-7626e38a] {\n  text-align: left;\n}\n[dir=rtl] .email-form-container .form-row .label[data-v-7626e38a] {\n  text-align: right;\n}\n.email-form-container .form-row .input[data-v-7626e38a] {\n  flex-grow: 1;\n}\n.email-form-container .form-row .input input[data-v-7626e38a] {\n  outline: none;\n  width: 100%;\n}\n[dir] .email-form-container .form-row .input input[data-v-7626e38a] {\n  background-color: #fff;\n  border: none;\n  padding: 15px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header[data-v-71e58ac5] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1.6;\n}[dir] .header[data-v-71e58ac5] {\n  margin-top: 0;\n}\n.ellipse[data-v-71e58ac5] {\n  width: 16px;\n  height: 16px;\n}\n[dir] .ellipse[data-v-71e58ac5] {\n  border-radius: 50%;\n  background-color: #3975eb;\n}\n.dashed-line[data-v-71e58ac5] {\n  min-width: 128px;\n  height: 0;\n}\n[dir] .dashed-line[data-v-71e58ac5] {\n  border-top: 1px dashed #3975eb;\n}\n.pin[data-v-71e58ac5] {\n  width: 16px;\n  height: 16px;\n  width: 15px;\n  height: 15px;\n  /* position: absolute; */\n  top: 50%;\n  /* margin: -20px 0 0 -20px; */\n}\n[dir] .pin[data-v-71e58ac5] {\n  background: #3975eb;\n}\n[dir=ltr] .pin[data-v-71e58ac5] {\n  border-radius: 50% 50% 50% 0;\n  transform: rotate(-45deg);\n  left: 50%;\n}\n[dir=rtl] .pin[data-v-71e58ac5] {\n  border-radius: 50% 50% 0 50%;\n  transform: rotate(45deg);\n  right: 50%;\n}\n.pin[data-v-71e58ac5]:after {\n  content: \"\";\n  width: 6px;\n  height: 6px;\n  position: absolute;\n}\n[dir] .pin[data-v-71e58ac5]:after {\n  background: #fff;\n  border-radius: 50%;\n  background-color: #3975eb;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 2px #3975eb;\n}\n[dir=ltr] .pin[data-v-71e58ac5]:after {\n  margin: 3px 0 0 2px;\n}\n[dir=rtl] .pin[data-v-71e58ac5]:after {\n  margin: 3px 2px 0 0;\n}\n.divider[data-v-71e58ac5] {\n  max-width: 934px;\n  height: 0;\n}\n[dir] .divider[data-v-71e58ac5] {\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.book-now-btn[data-v-71e58ac5] {\n  width: 100%;\n  max-width: 215px;\n}\n[dir] .book-now-btn[data-v-71e58ac5] {\n  border-radius: 4px;\n  border: 1px solid #1877f2;\n  padding: 16px 28px;\n  cursor: pointer;\n}\n[dir] .p-5[data-v-71e58ac5] {\n  padding: 1.25rem;\n}\n.text-lg[data-v-71e58ac5] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm[data-v-71e58ac5] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-base[data-v-71e58ac5] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-medium[data-v-71e58ac5] {\n  font-weight: 500;\n}\n.flex[data-v-71e58ac5] {\n  display: flex;\n}\n.flex-col[data-v-71e58ac5] {\n  flex-direction: column;\n}\n.gap-2[data-v-71e58ac5] {\n  gap: 0.5rem;\n}\n.items-center[data-v-71e58ac5] {\n  align-items: center;\n}\n.text-xl[data-v-71e58ac5] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n[dir] .mt-4[data-v-71e58ac5] {\n  margin-top: 1rem;\n}\n.w-20[data-v-71e58ac5] {\n  width: 5rem;\n}\n.w-40[data-v-71e58ac5] {\n  width: 10rem;\n}\n.opacity-40[data-v-71e58ac5] {\n  opacity: 0.4;\n}\n[dir] .quotesCard[data-v-71e58ac5] {\n  margin-top: 25px;\n}\n.quotesCard table[data-v-71e58ac5] {\n  max-width: 100%;\n  height: 250px;\n}\n[dir] .quotesCard table[data-v-71e58ac5] {\n  background-color: #ffffff;\n  border: 1px solid #ccc;\n  padding: 15px;\n}\n.quotesCard table tbody tr td a[data-v-71e58ac5] {\n  text-decoration: none;\n  color: white;\n}\n[dir] .quotesCard table tbody tr td a[data-v-71e58ac5] {\n  background-color: #3975eb;\n  cursor: pointer;\n  padding: 10px 20px;\n}\n[dir] .mt-25[data-v-71e58ac5] {\n  margin-top: 25px;\n}\n[dir] .mt-15[data-v-71e58ac5] {\n  margin-top: 15px;\n}\n[dir] .mt-2px[data-v-71e58ac5] {\n  margin-top: 2px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/quotes/SendQuoteEmail.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/SendQuoteEmail.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SendQuoteEmail_vue_vue_type_template_id_7626e38a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SendQuoteEmail.vue?vue&type=template&id=7626e38a&scoped=true& */ "./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=template&id=7626e38a&scoped=true&");
/* harmony import */ var _SendQuoteEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SendQuoteEmail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SendQuoteEmail_vue_vue_type_style_index_0_id_7626e38a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss& */ "./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SendQuoteEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SendQuoteEmail_vue_vue_type_template_id_7626e38a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SendQuoteEmail_vue_vue_type_template_id_7626e38a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7626e38a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/SendQuoteEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SendQuoteEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_style_index_0_id_7626e38a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=style&index=0&id=7626e38a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_style_index_0_id_7626e38a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_style_index_0_id_7626e38a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_style_index_0_id_7626e38a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_style_index_0_id_7626e38a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=template&id=7626e38a&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=template&id=7626e38a&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_template_id_7626e38a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SendQuoteEmail.vue?vue&type=template&id=7626e38a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/SendQuoteEmail.vue?vue&type=template&id=7626e38a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_template_id_7626e38a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SendQuoteEmail_vue_vue_type_template_id_7626e38a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuoteEmailContentPreview_vue_vue_type_template_id_71e58ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuoteEmailContentPreview.vue?vue&type=template&id=71e58ac5&scoped=true& */ "./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=template&id=71e58ac5&scoped=true&");
/* harmony import */ var _QuoteEmailContentPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuoteEmailContentPreview.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuoteEmailContentPreview_vue_vue_type_style_index_0_id_71e58ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true& */ "./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuoteEmailContentPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuoteEmailContentPreview_vue_vue_type_template_id_71e58ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuoteEmailContentPreview_vue_vue_type_template_id_71e58ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71e58ac5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteEmailContentPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_style_index_0_id_71e58ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=style&index=0&id=71e58ac5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_style_index_0_id_71e58ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_style_index_0_id_71e58ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_style_index_0_id_71e58ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_style_index_0_id_71e58ac5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=template&id=71e58ac5&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=template&id=71e58ac5&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_template_id_71e58ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteEmailContentPreview.vue?vue&type=template&id=71e58ac5&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteEmailContentPreview.vue?vue&type=template&id=71e58ac5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_template_id_71e58ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteEmailContentPreview_vue_vue_type_template_id_71e58ac5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loadTypes: {
        drayage: 'Drayage',
        ftl: 'FTL',
        ltl: 'LTL'
      },
      equipmentTypeOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].planning.equipmentTypes
    };
  },
  computed: {
    formattedAddress: function formattedAddress() {
      var result = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatAddressCityState"])(this.value.address, this.value.city, this.value.state);
      return result;
    }
  },
  methods: {
    commaSeparatedValue: _helpers_helper__WEBPACK_IMPORTED_MODULE_0__["commaSeparatedValue"],
    parseFloatWithTrims: function parseFloatWithTrims(value) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["parseFloatWithTrim"])(value);
    },
    formatDate: function formatDate(date) {
      if (!date || !this.$dayjs(date).isValid()) {
        return '';
      }

      return this.$dayjs(date).format('MM/DD/YY');
    },
    formatStatus: function formatStatus(value) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatStatusToCamelCamelCase"])(value);
    },
    formatNumberWithCommas: function formatNumberWithCommas(value) {
      if (!value) return value;
      var formattedValue = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["parseFloatWithTrim"])(value);
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["commaSeparatedValue"])(formattedValue);
    },
    formatUtcToLocalTime: function formatUtcToLocalTime(utcTime) {
      return this.$dayjs.utc(utcTime).local().format('MM/DD/YY HH:mm z');
    },
    formatCurrencyRate: function formatCurrencyRate(value) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatAmount"])(value);
    },
    formatStateCity: function formatStateCity(city, state) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatAddressCityState"])(null, city, state);
    },
    formatAddress: function formatAddress(address, city, state, zipCode) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatAddressCityStateZipCode"])(address, city, state, zipCode);
    },
    checkValue: function checkValue(value) {
      if (value == null) {
        return '';
      }

      return value;
    },
    setPlace: function setPlace(place) {
      if (!place) return;

      var _extractAddress = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["extractAddress"])(place),
          address = _extractAddress.address,
          city = _extractAddress.city,
          state = _extractAddress.state,
          zip_code = _extractAddress.zip_code;

      var latitude = place.geometry.location.lat();
      var longitude = place.geometry.location.lng();
      this.value.address = address;
      this.value.city = city;
      this.value.state = state;
      this.value.zipCode = zip_code;
      this.value.latitude = latitude;
      this.value.longitude = longitude;
      this.$forceUpdate();
      this.validateAddress();
    },
    validateAddress: function validateAddress() {
      var _this = this;

      var keysToValidate = ['city', 'state', 'latitude', 'longitude'];
      var invalidKeys = keysToValidate.filter(function (key) {
        return !_this.value[key];
      });

      if (invalidKeys.length) {
        this.validationErrors.address = invalidKeys.length === keysToValidate.length ? 'Address is required' : 'Please enter a valid address';
      } else {
        this.validationErrors.address = null;
      }
    },
    getEquipmentType: function getEquipmentType(type) {
      if (!type) {
        return '';
      }

      var equipmentType = this.equipmentTypeOptions.find(function (item) {
        return item.value === type;
      });
      return equipmentType ? equipmentType.title : '';
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=36.js.map