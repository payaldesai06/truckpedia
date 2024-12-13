(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[204],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ExpirationReminderSelector',
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      inAdvanceDays: []
    };
  },
  computed: {
    expirationDateOptions: function expirationDateOptions() {
      return [{
        value: 1,
        text: 1
      }, {
        value: 7,
        text: 7
      }, {
        value: 10,
        text: 10
      }, {
        value: 15,
        text: 15
      }, {
        value: 20,
        text: 20
      }, {
        value: 30,
        text: 30
      }, {
        value: 45,
        text: 45
      }, {
        value: 60,
        text: 60
      }, {
        value: 90,
        text: 90
      }];
    }
  },
  watch: {
    inAdvanceDays: {
      handler: function handler(val) {
        this.$emit('input', val);
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.inAdvanceDays = this.value;
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
                return _context.abrupt("return", this.inAdvanceDays);

              case 1:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=template&id=290665ca&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=template&id=290665ca& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "expiration-reminder-selector"
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "flex vx-col w-full mt-2",
    staticStyle: {
      "align-items": "center"
    }
  }, [_c("span", {
    staticClass: "mr-2"
  }, [_vm._v("\n            Expiration reminder\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "day-selector mr-2"
  }, [_c("multiselect", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      multiple: true,
      options: _vm.expirationDateOptions,
      label: "text",
      trackBy: "value",
      showLabels: false,
      placeholder: "Select days",
      closeOnSelect: false,
      "data-vv-validate-on": "change",
      "data-vv-as": "selected",
      name: "inAdvanceDays"
    },
    model: {
      value: _vm.inAdvanceDays,
      callback: function callback($$v) {
        _vm.inAdvanceDays = $$v;
      },
      expression: "inAdvanceDays"
    }
  })], 1), _vm._v(" "), _c("span", [_vm._v("\n            day(s) in advance,\n          ")])])]), _vm._v(" "), !_vm.inAdvanceDays || !_vm.inAdvanceDays.length ? _c("div", {
    staticClass: "vx-row w-full ml-2"
  }, [_c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n          Please select at least one in advance days\n        ")])]) : _vm._e()])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vx-row ml-1"
  }, [_c("strong", [_vm._v("\n          Expiration reminder\n        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpirationReminderSelector_vue_vue_type_template_id_290665ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpirationReminderSelector.vue?vue&type=template&id=290665ca& */ "./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=template&id=290665ca&");
/* harmony import */ var _ExpirationReminderSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpirationReminderSelector.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExpirationReminderSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpirationReminderSelector_vue_vue_type_template_id_290665ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExpirationReminderSelector_vue_vue_type_template_id_290665ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationReminderSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpirationReminderSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationReminderSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=template&id=290665ca&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=template&id=290665ca& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationReminderSelector_vue_vue_type_template_id_290665ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpirationReminderSelector.vue?vue&type=template&id=290665ca& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/ExpirationReminderSelector.vue?vue&type=template&id=290665ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationReminderSelector_vue_vue_type_template_id_290665ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationReminderSelector_vue_vue_type_template_id_290665ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=204.js.map