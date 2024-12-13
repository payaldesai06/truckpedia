(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EmailSidebar',
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_6__["VueEditor"]
  },
  data: function data() {
    return {
      customToolbar: [[{
        font: []
      }], [{
        header: [false, 1, 2, 3, 4, 5, 6]
      }], ['bold', 'italic', 'underline'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        color: []
      }, {
        background: []
      }], ['link']],
      emailData: {},
      rawResponse: {},
      validationDict: {
        custom: {
          firstName: {
            required: 'First name is required'
          },
          lastName: {
            required: 'Last name is required'
          },
          dailyLimit: {
            required: 'Daily limit is required',
            min_value: 'The value must be greater than or equal to 0',
            decimal: 'The value must not contain decimal places'
          }
        }
      }
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {
          this.closeSidebar();
        }
      }
    },
    isSubmitDisabled: function isSubmitDisabled() {
      var _this = this;

      var isDisabled = false;

      _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(this.emailData).forEach(function (key) {
        if (_this.emailData[key] !== _this.rawResponse[key]) {
          isDisabled = true;
        }
      });

      return !isDisabled;
    }
  },
  mounted: function mounted() {
    this.$validator.localize('en', this.validationDict);
  },
  methods: {
    closeSidebar: function closeSidebar() {
      this.$emit('closeSidebar');
    },
    initData: function () {
      var _initData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
        var _ref, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.$store.dispatch('marketing/getEmailAccountDetails', this.data.id);

              case 3:
                _ref = _context.sent;
                payload = _ref.data.payload;
                this.emailData = _objectSpread({}, payload || {});
                this.rawResponse = _objectSpread({}, payload || {});
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_7__["getApiErrorMsg"])(_context.t0)
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function initData() {
        return _initData.apply(this, arguments);
      };
    }(),
    updateEmailAccount: function () {
      var _updateEmailAccount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
        var _this2 = this;

        var payload, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.$validator.validateAll();

              case 3:
                if (!(this.errors.items.length > 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                payload = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(this.emailData).reduce(function (acc, key) {
                  if (_this2.emailData[key] !== _this2.rawResponse[key]) {
                    acc[key] = _this2.emailData[key];
                  }

                  return acc;
                }, {});
                _context2.next = 8;
                return this.$store.dispatch('marketing/updateEmailAccount', _objectSpread({
                  id: this.data.id
                }, payload));

              case 8:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.$vs.notify({
                  time: 8000,
                  color: 'success',
                  title: 'Success',
                  text: data.message
                });
                this.closeSidebar();
                this.$store.commit('marketing/setMarketingEmails', []);
                this.$emit('refreshEmailAccounts');
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_7__["getApiErrorMsg"])(_context2.t0)
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 16]]);
      }));

      return function updateEmailAccount() {
        return _updateEmailAccount.apply(this, arguments);
      };
    }()
  },
  watch: {
    isSidebarActive: {
      handler: function handler(val) {
        this.emailData = {};
        this.$validator.reset();

        if (val) {
          this.initData();
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=template&id=0a34a938&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=template&id=0a34a938&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "overflow-auto"
  }, [_c("vs-sidebar", {
    attrs: {
      "position-right": "",
      parent: "body",
      color: "primary",
      spacer: ""
    },
    model: {
      value: _vm.isSidebarActiveLocal,
      callback: function callback($$v) {
        _vm.isSidebarActiveLocal = $$v;
      },
      expression: "isSidebarActiveLocal"
    }
  }, [_c("div", {
    staticClass: "flex justify-between items-center px-10 pt-3 opacity-50"
  }, [_c("div", [_c("h6", {
    staticClass: "font-bold"
  }, [_vm._v(_vm._s(_vm.emailData.email))])]), _vm._v(" "), _c("div", {
    staticClass: "cursor-pointer",
    staticStyle: {
      width: "30px"
    },
    on: {
      click: _vm.closeSidebar
    }
  }, [_c("svg", {
    staticClass: "MuiSvgIcon-root",
    staticStyle: {
      color: "rgb(109, 114, 126)"
    },
    attrs: {
      focusable: "false",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      size: "24",
      id: "sideModalCloseButton"
    }
  }, [_c("path", {
    attrs: {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "h-full overflow-auto p-10 pb-32 pt-5"
  }, [_c("h4", [_vm._v("Settings")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "py-3 flex items-center"
  }, [_c("svg", {
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      id: "Final / User"
    }
  }, [_c("path", {
    attrs: {
      id: "Vector (Stroke)",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4ZM5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9Z",
      fill: "#6D727E"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      id: "Vector (Stroke)_2",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12.0002 16C8.49591 16 5.51562 17.8999 3.86567 20.7509C3.58904 21.2289 2.97728 21.3921 2.49927 21.1155C2.02127 20.8389 1.85802 20.2271 2.13466 19.7491C4.11659 16.3245 7.73254 14 12.0002 14C16.2678 14 19.8837 16.3245 21.8657 19.7491C22.1423 20.2271 21.9791 20.8389 21.5011 21.1155C21.0231 21.3921 20.4113 21.2289 20.1347 20.7509C18.4847 17.8999 15.5044 16 12.0002 16Z",
      fill: "#6D727E"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "font-bold pl-3"
  }, [_vm._v("Sender name")])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), [_c("div", {
    staticClass: "vs-row justify-between"
  }, [_c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "inputx w-full pr-3",
    attrs: {
      label: "First Name",
      "data-vv-validate-on": "blur",
      name: "firstName"
    },
    model: {
      value: _vm.emailData.firstName,
      callback: function callback($$v) {
        _vm.$set(_vm.emailData, "firstName", $$v);
      },
      expression: "emailData.firstName"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n              " + _vm._s(_vm.errors.first("firstName")) + "\n            ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "inputx w-full",
    attrs: {
      label: "Last Name",
      "data-vv-validate-on": "blur",
      name: "lastName"
    },
    model: {
      value: _vm.emailData.lastName,
      callback: function callback($$v) {
        _vm.$set(_vm.emailData, "lastName", $$v);
      },
      expression: "emailData.lastName"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n              " + _vm._s(_vm.errors.first("lastName")) + "\n            ")])], 1)])], _vm._v(" "), [_c("h4", {
    staticClass: "font-bold pl-3 pt-100"
  }, [_vm._v("Signature")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", [_c("vue-editor", {
    attrs: {
      editorToolbar: _vm.customToolbar
    },
    model: {
      value: _vm.emailData.signature,
      callback: function callback($$v) {
        _vm.$set(_vm.emailData, "signature", $$v);
      },
      expression: "emailData.signature"
    }
  })], 1)], _vm._v(" "), [_c("div", {
    staticClass: "flex items-center pt-12"
  }, [_c("svg", {
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("g", {
    attrs: {
      id: "campaign"
    }
  }, [_c("path", {
    attrs: {
      id: "Vector 6 (Stroke)",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M20.3628 3.69045L4.86939 8.85492L12.313 11.5905C12.6237 11.7046 12.8734 11.9421 13.0031 12.2466L15.9448 19.1534L20.3628 3.69045ZM21.1692 1.31346C22.0847 1.0083 22.9676 1.85368 22.7025 2.78154L17.2475 21.8741C16.9369 22.9612 15.4327 23.0549 14.9896 22.0147L11.2986 13.3484L2.03607 9.94445C0.970892 9.553 0.993959 8.03854 2.07053 7.67968L21.1692 1.31346Z",
      fill: "#6D727E"
    }
  })])]), _vm._v(" "), _c("h4", {
    staticClass: "font-bold pl-3"
  }, [_vm._v("Campaign Settings")])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Daily campaign limit")]), _vm._v(" "), _c("p", {
    staticClass: "pt-2"
  }, [_vm._v("Daily sending limit")]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center mt-4"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|min_value:0|decimal:0",
      expression: "'required|min_value:0|decimal:0'"
    }],
    staticClass: "inputx",
    attrs: {
      type: "number",
      "data-vv-validate-on": "blur",
      name: "dailyLimit"
    },
    model: {
      value: _vm.emailData.dailyLimit,
      callback: function callback($$v) {
        _vm.$set(_vm.emailData, "dailyLimit", _vm._n($$v));
      },
      expression: "emailData.dailyLimit"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "pl-3"
  }, [_vm._v("emails")])], 1), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n            " + _vm._s(_vm.errors.first("dailyLimit")) + "\n          ")])])], _vm._v(" "), _c("vs-divider", {
    staticClass: "mt-8"
  }), _vm._v(" "), [_c("div", {
    staticClass: "w-full mt-10"
  }, [_c("vs-button", {
    attrs: {
      type: "filled",
      disabled: _vm.isSubmitDisabled
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.updateEmailAccount.apply(null, arguments);
      }
    }
  }, [_vm._v("\n            Save\n          ")])], 1)]], 2)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-0a34a938] .vs-sidebar {\n  max-width: 50%;\n}\n[dir] .pt-100[data-v-0a34a938] {\n  padding-top: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailSidebar_vue_vue_type_template_id_0a34a938_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailSidebar.vue?vue&type=template&id=0a34a938&scoped=true& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=template&id=0a34a938&scoped=true&");
/* harmony import */ var _EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmailSidebar_vue_vue_type_style_index_0_id_0a34a938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailSidebar_vue_vue_type_template_id_0a34a938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailSidebar_vue_vue_type_template_id_0a34a938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a34a938",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_style_index_0_id_0a34a938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=style&index=0&id=0a34a938&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_style_index_0_id_0a34a938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_style_index_0_id_0a34a938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_style_index_0_id_0a34a938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_style_index_0_id_0a34a938_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=template&id=0a34a938&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=template&id=0a34a938&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_template_id_0a34a938_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSidebar.vue?vue&type=template&id=0a34a938&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue?vue&type=template&id=0a34a938&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_template_id_0a34a938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_template_id_0a34a938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=163.js.map