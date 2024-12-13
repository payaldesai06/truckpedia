(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[210],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FreeTrial',
  data: function data() {
    return {
      trialDays: _config_constants__WEBPACK_IMPORTED_MODULE_0__["default"].trialDays,
      features: ['AI Dispatch', 'Calendar Optimizer', 'Smart Sheet', 'Mobile Driver App', 'Integration', 'Billing Automation', 'Data Analytics', 'Digital Documents', 'Trucking Maintenance', 'And More.']
    };
  },
  methods: {
    submit: function submit() {
      var referralCode = this.$route.query.referralCode;
      this.$router.push({
        name: 'setup-profile',
        query: {
          referralCode: referralCode
        }
      }).catch(function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=template&id=e24f3d76&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=template&id=e24f3d76&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      slot: "no-body"
    },
    slot: "no-body"
  }, [_c("div", {
    staticClass: "px-8 bg-primary py-4"
  }, [_c("h2", {
    staticClass: "text-white"
  }, [_vm._v("Welcome to Truckpedia")])]), _vm._v(" "), _c("div", {
    staticClass: "px-8 pt-8 pb-2 vx-row no-gutter"
  }, [_c("div", {
    staticClass: "vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg"
  }, [_c("div", {}, [_c("div", {
    staticClass: "vx-card__title mb-4"
  }, [_c("p", {
    staticClass: "text-xl font-medium"
  }, [_c("strong", {
    staticClass: "text-success"
  }, [_vm._v("Congratulations,")]), _vm._v(" you're in!\n                ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg"
  }, [_c("div", {}, [_c("div", {
    staticClass: "vx-card__title mb-4"
  }, [_c("h4", {
    staticClass: "mb-4"
  }, [_vm._v("Truckpedia Features:")])]), _vm._v(" "), _c("ul", {
    staticClass: "pl-4 mt-4 space-y-2"
  }, _vm._l(_vm.features, function (feature) {
    return _c("li", {
      key: feature,
      staticClass: "flex items-center"
    }, [_c("span", {
      staticClass: "flex items-center text-primary mr-3"
    }, [_c("svg", {
      staticClass: "w-6 h-6",
      attrs: {
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }
    }, [_c("path", {
      attrs: {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    })])]), _vm._v("\n                  " + _vm._s(feature) + "\n                ")]);
  }), 0)])])])]), _vm._v(" "), _c("template", {
    slot: "footer"
  }, [_c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex justify-end"
  }, [_c("vs-button", {
    staticClass: "mt-4",
    attrs: {
      type: "filled",
      color: "primary"
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("Get Started")])], 1)], 1)], 2)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/free-trial/FreeTrial.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/free-trial/FreeTrial.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FreeTrial_vue_vue_type_template_id_e24f3d76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreeTrial.vue?vue&type=template&id=e24f3d76&scoped=true& */ "./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=template&id=e24f3d76&scoped=true&");
/* harmony import */ var _FreeTrial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FreeTrial.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FreeTrial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FreeTrial_vue_vue_type_template_id_e24f3d76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FreeTrial_vue_vue_type_template_id_e24f3d76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e24f3d76",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/free-trial/FreeTrial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeTrial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FreeTrial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeTrial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=template&id=e24f3d76&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=template&id=e24f3d76&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeTrial_vue_vue_type_template_id_e24f3d76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FreeTrial.vue?vue&type=template&id=e24f3d76&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/free-trial/FreeTrial.vue?vue&type=template&id=e24f3d76&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeTrial_vue_vue_type_template_id_e24f3d76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeTrial_vue_vue_type_template_id_e24f3d76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=210.js.map