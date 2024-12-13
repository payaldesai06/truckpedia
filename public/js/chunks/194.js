(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[194],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DriverAssignment",
  props: {
    driversList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      driverAssignments: []
    };
  },
  watch: {
    driverAssignments: {
      handler: function handler(val) {
        this.$emit("input", val);
      },
      deep: true
    },
    value: function value(newVal) {
      this.driverAssignments = newVal;
    }
  },
  methods: {
    addNewDriverAssignment: function addNewDriverAssignment() {
      this.driverAssignments.push({
        userId: "",
        startDate: "",
        endDate: "",
        isCurrent: false
      });
    },
    removeSelection: function removeSelection(index) {
      this.driverAssignments.splice(index, 1);
    },
    validate: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.driverAssignments.every(function (x) {
                  return x.userId;
                }));

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=template&id=faceb582&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=template&id=faceb582&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vx-card", {
    staticClass: "mt-4 driver-assignment"
  }, [_c("div", {
    staticClass: "vx-row flex justify-between align-center"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Driver Assignments")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "vx-row mx-0 driver-assignment-row"
  }, [_c("div", {
    staticClass: "vx-col pl-0 w-1/4 dar-col-1"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Driver #")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/4 dar-col-2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Start Date")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/4 dar-col-3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("End Date")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mx-0 dar-col-4"
  }, [_c("div", {
    staticClass: "vx-col pr-0 w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Current")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col pl-0 w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  })])])]), _vm._v(" "), _c("div", {}, _vm._l(_vm.driverAssignments, function (driver, index) {
    return _c("div", {
      key: "driver-".concat(index),
      class: ["vx-row mx-0 mb-2 driver-assignment-row", {
        "mt-1": index > 0
      }]
    }, [_c("div", {
      staticClass: "vx-col pl-0 w-1/4 dar-col-1"
    }, [_c("v-select", {
      staticClass: "mb-4 md:mb-0",
      attrs: {
        options: _vm.driversList,
        clearable: true,
        reduce: function reduce(option) {
          return option.id;
        },
        label: "fullName",
        placeholder: "Select Driver"
      },
      model: {
        value: _vm.driverAssignments[index].userId,
        callback: function callback($$v) {
          _vm.$set(_vm.driverAssignments[index], "userId", $$v);
        },
        expression: "driverAssignments[index].userId"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col w-1/4 dar-col-2"
    }, [_c("flat-pickr", {
      staticClass: "w-full",
      attrs: {
        placeholder: "Select start date"
      },
      model: {
        value: _vm.driverAssignments[index].startDate,
        callback: function callback($$v) {
          _vm.$set(_vm.driverAssignments[index], "startDate", $$v);
        },
        expression: "driverAssignments[index].startDate"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col w-1/4 dar-col-3"
    }, [_c("flat-pickr", {
      staticClass: "w-full",
      attrs: {
        placeholder: "Select end date"
      },
      model: {
        value: _vm.driverAssignments[index].endDate,
        callback: function callback($$v) {
          _vm.$set(_vm.driverAssignments[index], "endDate", $$v);
        },
        expression: "driverAssignments[index].endDate"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col pr-0 w-1/4 self-center flex dar-col-4"
    }, [_c("div", {
      staticClass: "vx-row mx-0 w-full"
    }, [_c("div", {
      staticClass: "vx-col p-0 pl-1 w-3/4 self-center flex"
    }, [_c("vs-switch", {
      model: {
        value: _vm.driverAssignments[index].isCurrent,
        callback: function callback($$v) {
          _vm.$set(_vm.driverAssignments[index], "isCurrent", $$v);
        },
        expression: "driverAssignments[index].isCurrent"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col p-0 pl-1 w-1/4 self-center flex"
    }, [_c("vs-icon", {
      staticClass: "cursor-pointer",
      attrs: {
        size: "small",
        icon: "delete",
        color: "danger"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeSelection(index);
        }
      }
    })], 1)])]), _vm._v(" "), !_vm.driverAssignments[index].userId ? _c("span", {
      staticClass: "text-danger text-sm"
    }, [_vm._v("\n          Driver is required. Select driver or remove row\n        ")]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: _vm.addNewDriverAssignment
    }
  }, [_vm._v("\n        New Assignment\n      ")])], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".driver-assignment .align-items-baseline[data-v-faceb582] {\n  align-items: baseline;\n}\n[dir] .driver-assignment[data-v-faceb582] .vx-card__body {\n  padding: 0.8rem;\n}\n.driver-assignment .driver-assignment-row .dar-col-1[data-v-faceb582] {\n  width: 35% !important;\n}\n[dir] .driver-assignment .driver-assignment-row .dar-col-1[data-v-faceb582] {\n  padding: 0;\n}\n.driver-assignment .driver-assignment-row .dar-col-2[data-v-faceb582],\n.driver-assignment .driver-assignment-row .dar-col-3[data-v-faceb582] {\n  width: 25% !important;\n}\n[dir] .driver-assignment .driver-assignment-row .dar-col-2[data-v-faceb582], [dir] .driver-assignment .driver-assignment-row .dar-col-3[data-v-faceb582] {\n  padding: 0 0.25rem;\n}\n.driver-assignment .driver-assignment-row .dar-col-4[data-v-faceb582] {\n  width: 15% !important;\n}\n[dir] .driver-assignment .driver-assignment-row .dar-col-4[data-v-faceb582] {\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DriverAssignment_vue_vue_type_template_id_faceb582_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DriverAssignment.vue?vue&type=template&id=faceb582&scoped=true& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=template&id=faceb582&scoped=true&");
/* harmony import */ var _DriverAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DriverAssignment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DriverAssignment_vue_vue_type_style_index_0_id_faceb582_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DriverAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DriverAssignment_vue_vue_type_template_id_faceb582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DriverAssignment_vue_vue_type_template_id_faceb582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "faceb582",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverAssignment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_style_index_0_id_faceb582_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=style&index=0&id=faceb582&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_style_index_0_id_faceb582_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_style_index_0_id_faceb582_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_style_index_0_id_faceb582_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_style_index_0_id_faceb582_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=template&id=faceb582&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=template&id=faceb582&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_template_id_faceb582_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverAssignment.vue?vue&type=template&id=faceb582&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue?vue&type=template&id=faceb582&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_template_id_faceb582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverAssignment_vue_vue_type_template_id_faceb582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=194.js.map