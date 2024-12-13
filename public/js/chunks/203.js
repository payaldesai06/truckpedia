(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[203],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AssetsBoard',
  components: {
    AssetSelector: function AssetSelector() {
      return __webpack_require__.e(/*! import() */ 143).then(__webpack_require__.bind(null, /*! ./AssetSelector */ "./resources/js/src/layouts/components/automation/components/AssetSelector.vue"));
    }
  },
  props: {
    assetsTypeSelected: {
      type: Array,
      default: function _default() {
        return ['Drivers', 'Trucks', 'Trailers'];
      }
    },
    assetsList: {
      type: Object,
      default: function _default() {}
    },
    value: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      expirationReminderAssetProperties: {
        Trucks: [{
          label: 'IRP Expiration Date',
          value: 'irpExpirationDate'
        }, {
          label: 'Annual Inspection Expiration Date',
          value: 'annualInspExpireDate'
        }, {
          label: 'Insurance Expiration Date',
          value: 'insuranceExpireDate'
        }, {
          label: 'Registration Expiration Date',
          value: 'registrationExpireDate'
        }, {
          label: 'Annual Permit Expiration Date',
          value: 'annualPermitExpireDate'
        }],
        Trailers: [{
          label: 'Annual Inspection Expiration Date',
          value: 'annualInspExpireDate'
        }, {
          label: 'Insurance Expiration Date',
          value: 'insuranceExpireDate'
        }, {
          label: 'Registration Expiration Date',
          value: 'registrationExpireDate'
        }, {
          label: 'Annual Permit Expiration Date',
          value: 'annualPermitExpireDate'
        }],
        Drivers: [{
          label: 'CDL Expiration Date',
          value: 'cdlExpirationDate'
        }, {
          label: 'Medical Card Expiration Date',
          value: 'medicalCardExpirationDate'
        }, {
          label: 'Occupation Expiration Date',
          value: 'occupationExpirationDate'
        }, {
          label: 'Clearinghouse Expiration Date',
          value: 'clearinghouseExpirationDate'
        }]
      },
      selectedAssets: null
    };
  },
  mounted: function mounted() {
    this.selectedAssets = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, this.selectedAssets, this.value);
  },
  computed: {
    expirationReminderAssetsData: function expirationReminderAssetsData() {
      var _ref = this.assetsList || {},
          trailerList = _ref.trailerList,
          trucksList = _ref.trucksList,
          allDrivers = _ref.allDrivers;

      return {
        Trailers: trailerList || [],
        Trucks: trucksList || [],
        Drivers: allDrivers || []
      };
    },
    trackByData: function trackByData() {
      return {
        Trailers: {
          trackBy: 'id',
          label: 'number'
        },
        Trucks: {
          trackBy: 'id',
          label: 'number'
        },
        Drivers: {
          trackBy: 'id',
          label: 'fullName'
        }
      };
    }
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
                return _context.abrupt("return", true);

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
  },
  watch: {
    selectedAssets: {
      handler: function handler(val) {
        this.$emit('input', val);
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=template&id=5031e550&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=template&id=5031e550& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.selectedAssets ? _c("div", {
    staticClass: "bottom-block flex justify-content-between"
  }, _vm._l(_vm.assetsTypeSelected, function (asset) {
    return _c("div", {
      key: asset,
      staticClass: "w-full"
    }, [_c("AssetSelector", {
      attrs: {
        assetName: asset,
        assetsList: _vm.expirationReminderAssetsData[asset],
        propertiesList: _vm.expirationReminderAssetProperties[asset],
        assetTrackKey: _vm.trackByData[asset].trackBy,
        assetLabelKey: _vm.trackByData[asset].label
      },
      model: {
        value: _vm.selectedAssets[asset],
        callback: function callback($$v) {
          _vm.$set(_vm.selectedAssets, asset, $$v);
        },
        expression: "selectedAssets[asset]"
      }
    })], 1);
  }), 0) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/AssetsBoard.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/AssetsBoard.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssetsBoard_vue_vue_type_template_id_5031e550___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssetsBoard.vue?vue&type=template&id=5031e550& */ "./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=template&id=5031e550&");
/* harmony import */ var _AssetsBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetsBoard.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssetsBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssetsBoard_vue_vue_type_template_id_5031e550___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssetsBoard_vue_vue_type_template_id_5031e550___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/automation/components/AssetsBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetsBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssetsBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetsBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=template&id=5031e550&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=template&id=5031e550& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetsBoard_vue_vue_type_template_id_5031e550___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssetsBoard.vue?vue&type=template&id=5031e550& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/automation/components/AssetsBoard.vue?vue&type=template&id=5031e550&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetsBoard_vue_vue_type_template_id_5031e550___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetsBoard_vue_vue_type_template_id_5031e550___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=203.js.map