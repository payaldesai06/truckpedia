(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[232],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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


var dict = {
  custom: {
    odometerAtPurchase: {
      numeric: "The field must be numeric with no decimal",
      max: "The field supports a maximum of 7 characters"
    }
  }
}; // Register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_2__["Validator"].localize("en", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TruckSpecsForm",
  props: {
    truckData: {
      type: Object,
      default: null
    },
    value: {
      type: Object,
      default: null
    }
  },
  computed: {
    emitDate: function emitDate() {
      var _ref = this || {},
          odometerAtPurchase = _ref.odometerAtPurchase,
          brakeTypeFront = _ref.brakeTypeFront,
          brakeTypeRear = _ref.brakeTypeRear,
          speedLimitPedal = _ref.speedLimitPedal,
          speedLimitCruise = _ref.speedLimitCruise,
          fuelTankCapacity = _ref.fuelTankCapacity,
          tireSize = _ref.tireSize,
          idleShutoff = _ref.idleShutoff,
          apuUnit = _ref.apuUnit;

      return {
        odometerAtPurchase: odometerAtPurchase,
        brakeTypeFront: brakeTypeFront,
        brakeTypeRear: brakeTypeRear,
        speedLimitPedal: speedLimitPedal,
        speedLimitCruise: speedLimitCruise,
        fuelTankCapacity: fuelTankCapacity,
        tireSize: tireSize,
        idleShutoff: idleShutoff,
        apuUnit: apuUnit
      };
    }
  },
  watch: {
    emitDate: function emitDate(newVal) {
      this.$emit("input", newVal);
    },
    value: {
      handler: function handler(newVal) {
        var _ref2 = newVal || {},
            odometerAtPurchase = _ref2.odometerAtPurchase,
            brakeTypeFront = _ref2.brakeTypeFront,
            brakeTypeRear = _ref2.brakeTypeRear,
            speedLimitPedal = _ref2.speedLimitPedal,
            speedLimitCruise = _ref2.speedLimitCruise,
            fuelTankCapacity = _ref2.fuelTankCapacity,
            tireSize = _ref2.tireSize,
            idleShutoff = _ref2.idleShutoff,
            apuUnit = _ref2.apuUnit;

        this.odometerAtPurchase = odometerAtPurchase;
        this.brakeTypeFront = brakeTypeFront;
        this.brakeTypeRear = brakeTypeRear;
        this.speedLimitPedal = speedLimitPedal;
        this.speedLimitCruise = speedLimitCruise;
        this.fuelTankCapacity = fuelTankCapacity;
        this.tireSize = tireSize;
        this.idleShutoff = idleShutoff;
        this.apuUnit = apuUnit;
      },
      deep: true,
      immediate: true
    }
  },
  data: function data() {
    return {
      odometerAtPurchase: null,
      //int.
      brakeTypeFront: "",
      // string, “drum” or “disc”.
      brakeTypeRear: "",
      // string, “drum” or “disc”.
      speedLimitPedal: "",
      // string.
      speedLimitCruise: "",
      // string.
      fuelTankCapacity: "",
      //string.
      tireSize: "",
      // string.
      idleShutoff: null,
      // boolean.
      breakTypeOptions: [{
        label: "Drum",
        value: "drum"
      }, {
        label: "Disc",
        value: "disc"
      }],
      apuUnit: null
    };
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
                _context.next = 2;
                return this.$validator.validateAll();

              case 2:
                if (!this.errors.items.length) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                return _context.abrupt("return", true);

              case 5:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=template&id=00357dc2&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=template&id=00357dc2& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Specs")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Odometer at Purchase")]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "numeric|max:7",
      expression: "'numeric|max:7'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      name: "odometerAtPurchase"
    },
    model: {
      value: _vm.odometerAtPurchase,
      callback: function callback($$v) {
        _vm.odometerAtPurchase = _vm._n($$v);
      },
      expression: "odometerAtPurchase"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("odometerAtPurchase")) + "\n      ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Brake Type (Front)")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      "data-vv-as": "selected",
      name: "value",
      label: "label",
      options: _vm.breakTypeOptions,
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: true
    },
    model: {
      value: _vm.brakeTypeFront,
      callback: function callback($$v) {
        _vm.brakeTypeFront = $$v;
      },
      expression: "brakeTypeFront"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Brake Type (Rear)")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      "data-vv-as": "selected",
      name: "value",
      label: "label",
      options: _vm.breakTypeOptions,
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: true
    },
    model: {
      value: _vm.brakeTypeRear,
      callback: function callback($$v) {
        _vm.brakeTypeRear = $$v;
      },
      expression: "brakeTypeRear"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Speed Limit (Pedal)")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "speedLimitPedal"
    },
    model: {
      value: _vm.speedLimitPedal,
      callback: function callback($$v) {
        _vm.speedLimitPedal = $$v;
      },
      expression: "speedLimitPedal"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Speed Limit (Cruise)")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "speedLimitCruise"
    },
    model: {
      value: _vm.speedLimitCruise,
      callback: function callback($$v) {
        _vm.speedLimitCruise = $$v;
      },
      expression: "speedLimitCruise"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Fuel Tank Capacity")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "fuelTankCapacity"
    },
    model: {
      value: _vm.fuelTankCapacity,
      callback: function callback($$v) {
        _vm.fuelTankCapacity = $$v;
      },
      expression: "fuelTankCapacity"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("APU Unit")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "apuUnit"
    },
    model: {
      value: _vm.apuUnit,
      callback: function callback($$v) {
        _vm.apuUnit = $$v;
      },
      expression: "apuUnit"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Tire Size")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "tireSize"
    },
    model: {
      value: _vm.tireSize,
      callback: function callback($$v) {
        _vm.tireSize = $$v;
      },
      expression: "tireSize"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("vs-checkbox", {
    staticClass: "text-xs mt-3",
    attrs: {
      name: "idleShutoff"
    },
    model: {
      value: _vm.idleShutoff,
      callback: function callback($$v) {
        _vm.idleShutoff = $$v;
      },
      expression: "idleShutoff"
    }
  }, [_vm._v("Idle Shutoff")])], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpecsForm_vue_vue_type_template_id_00357dc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpecsForm.vue?vue&type=template&id=00357dc2& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=template&id=00357dc2&");
/* harmony import */ var _SpecsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpecsForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpecsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpecsForm_vue_vue_type_template_id_00357dc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpecsForm_vue_vue_type_template_id_00357dc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpecsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=template&id=00357dc2&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=template&id=00357dc2& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecsForm_vue_vue_type_template_id_00357dc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpecsForm.vue?vue&type=template&id=00357dc2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue?vue&type=template&id=00357dc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecsForm_vue_vue_type_template_id_00357dc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpecsForm_vue_vue_type_template_id_00357dc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=232.js.map