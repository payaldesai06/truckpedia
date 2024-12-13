(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[216],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ExpirationDateForm",
  components: {},
  props: {
    trailerData: {
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
          annualInspExpireDate = _ref.annualInspExpireDate,
          insuranceExpireDate = _ref.insuranceExpireDate,
          registrationExpireDate = _ref.registrationExpireDate,
          annualPermitExpireDate = _ref.annualPermitExpireDate;

      return {
        annualInspExpireDate: annualInspExpireDate,
        insuranceExpireDate: insuranceExpireDate,
        registrationExpireDate: registrationExpireDate,
        annualPermitExpireDate: annualPermitExpireDate
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
            annualInspExpireDate = _ref2.annualInspExpireDate,
            insuranceExpireDate = _ref2.insuranceExpireDate,
            registrationExpireDate = _ref2.registrationExpireDate,
            annualPermitExpireDate = _ref2.annualPermitExpireDate;

        this.annualInspExpireDate = annualInspExpireDate;
        this.insuranceExpireDate = insuranceExpireDate;
        this.registrationExpireDate = registrationExpireDate;
        this.annualPermitExpireDate = annualPermitExpireDate;
      },
      immediate: true,
      deep: true
    }
  },
  data: function data() {
    return {
      annualInspExpireDate: null,
      // date, like “2022-11-22”.
      insuranceExpireDate: null,
      // date. like “2022-11-22”.
      registrationExpireDate: null,
      // date. like “2022-11-22”.
      annualPermitExpireDate: null // date. like “2022-11-22”.

    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=template&id=298d4863&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=template&id=298d4863& ***!
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

  return _c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Expiration Dates")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Annual Inspection Expiration Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "",
      name: "annualInspExpireDate"
    },
    model: {
      value: _vm.annualInspExpireDate,
      callback: function callback($$v) {
        _vm.annualInspExpireDate = $$v;
      },
      expression: "annualInspExpireDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Insurance Expiration Date ")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "",
      name: "insuranceExpireDate"
    },
    model: {
      value: _vm.insuranceExpireDate,
      callback: function callback($$v) {
        _vm.insuranceExpireDate = $$v;
      },
      expression: "insuranceExpireDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Registration Expiration Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "",
      name: "registrationExpireDate"
    },
    model: {
      value: _vm.registrationExpireDate,
      callback: function callback($$v) {
        _vm.registrationExpireDate = $$v;
      },
      expression: "registrationExpireDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Annual Permit Expiration Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "",
      name: "annualPermitExpireDate"
    },
    model: {
      value: _vm.annualPermitExpireDate,
      callback: function callback($$v) {
        _vm.annualPermitExpireDate = $$v;
      },
      expression: "annualPermitExpireDate"
    }
  })], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpirationDateForm_vue_vue_type_template_id_298d4863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpirationDateForm.vue?vue&type=template&id=298d4863& */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=template&id=298d4863&");
/* harmony import */ var _ExpirationDateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpirationDateForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExpirationDateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpirationDateForm_vue_vue_type_template_id_298d4863___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExpirationDateForm_vue_vue_type_template_id_298d4863___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationDateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpirationDateForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationDateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=template&id=298d4863&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=template&id=298d4863& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationDateForm_vue_vue_type_template_id_298d4863___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpirationDateForm.vue?vue&type=template&id=298d4863& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue?vue&type=template&id=298d4863&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationDateForm_vue_vue_type_template_id_298d4863___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpirationDateForm_vue_vue_type_template_id_298d4863___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=216.js.map