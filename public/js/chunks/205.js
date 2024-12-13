(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[205],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MaintenanceSelectorListItem",
  props: {
    asset: {
      required: true,
      type: Object,
      default: null
    }
  },
  components: {},
  created: function created() {
    var _ref = this.asset || {},
        nextServiceAt = _ref.nextServiceAt;

    if (nextServiceAt) {
      this.startingDate = nextServiceAt;
    }
  },
  data: function data() {
    return {
      startingDate: '',
      configTimeFlatPickr: {
        minDate: new Date().setDate(new Date().getDate() + 1),
        allowInvalidPreload: true
      }
    };
  },
  watch: {
    startingDate: {
      handler: function handler(val) {
        this.$emit('setDate', {
          assetData: this.asset,
          date: val
        });
      }
    }
  },
  methods: {
    removeItem: function removeItem() {
      this.$emit('remove', this.asset);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=template&id=b6084d90&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=template&id=b6084d90& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "mt-5 vx-col w-full space-y-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.asset.number) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("flat-pickr", {
    attrs: {
      config: _vm.configTimeFlatPickr
    },
    model: {
      value: _vm.startingDate,
      callback: function callback($$v) {
        _vm.startingDate = $$v;
      },
      expression: "startingDate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("div", {
    staticClass: "h-full flex items-center justify-end"
  }, [_c("vs-button", {
    attrs: {
      color: "danger",
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.removeItem.apply(null, arguments);
      }
    }
  }, [_vm._v("Remove\n          ")])], 1)])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MaintenanceSelectorListItem_vue_vue_type_template_id_b6084d90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaintenanceSelectorListItem.vue?vue&type=template&id=b6084d90& */ "./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=template&id=b6084d90&");
/* harmony import */ var _MaintenanceSelectorListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaintenanceSelectorListItem.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MaintenanceSelectorListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MaintenanceSelectorListItem_vue_vue_type_template_id_b6084d90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MaintenanceSelectorListItem_vue_vue_type_template_id_b6084d90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceSelectorListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceSelectorListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceSelectorListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=template&id=b6084d90&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=template&id=b6084d90& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceSelectorListItem_vue_vue_type_template_id_b6084d90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceSelectorListItem.vue?vue&type=template&id=b6084d90& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/MaintenanceSelectorListItem.vue?vue&type=template&id=b6084d90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceSelectorListItem_vue_vue_type_template_id_b6084d90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceSelectorListItem_vue_vue_type_template_id_b6084d90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=205.js.map