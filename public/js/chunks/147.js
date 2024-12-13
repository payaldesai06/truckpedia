(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuShareDialog',
  components: {
    MenuShare: function MenuShare() {
      return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! @/components/menu/components/MenuShare.vue */ "./resources/js/src/components/menu/components/MenuShare.vue"));
    }
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    },
    sharedWith: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    accessLevels: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    allUsers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    recordType: {
      type: String,
      default: null
    },
    isPrivate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isRecordSubmenu: function isRecordSubmenu() {
      return this.recordType === 'subMenu';
    }
  },
  data: function data() {
    return {
      sharedUsersList: [],
      isRecordPrivate: false
    };
  },
  methods: {
    onClose: function onClose() {
      this.$emit('onClose');
    },
    onSharedUsersChange: function onSharedUsersChange(_ref) {
      var isPrivate = _ref.isPrivate,
          sharedPermissions = _ref.sharedPermissions;
      this.sharedUsersList = sharedPermissions;
      this.isRecordPrivate = isPrivate;
    },
    onSubmit: function onSubmit() {
      this.$emit('onSubmit', {
        isPrivate: this.isRecordPrivate,
        sharedPermissions: this.sharedUsersList
      });
    }
  },
  watch: {
    sharedWith: {
      handler: function handler() {
        this.sharedUsersList = this.sharedWith;
      },
      immediate: true
    },
    isPrivate: {
      handler: function handler() {
        this.isRecordPrivate = this.isPrivate;
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=template&id=11a41036&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=template&id=11a41036&scoped=true& ***!
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

  return _c("Dialog", {
    style: {
      width: "40vw"
    },
    attrs: {
      visible: _vm.isPromptActive,
      closable: false,
      modal: true,
      breakpoints: {
        "960px": "75vw",
        "640px": "100vw"
      }
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-full flex items-center justify-between"
        }, [_c("h3", {
          domProps: {
            textContent: _vm._s("Share with")
          }
        }), _vm._v(" "), _c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: _vm.onClose
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-full flex justify-end"
        }, [_c("vs-button", {
          attrs: {
            color: "primary"
          },
          on: {
            click: _vm.onSubmit
          }
        }, [_vm._v(" Save ")]), _vm._v(" "), _c("vs-button", {
          attrs: {
            color: "primary",
            type: "border"
          },
          on: {
            click: _vm.onClose
          }
        }, [_vm._v("\n        Cancel\n      ")])], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("menu-share", {
    staticClass: "vx-col min-height-180",
    attrs: {
      sharedWith: _vm.sharedUsersList,
      accessLevels: _vm.accessLevels,
      allUsers: _vm.allUsers,
      showPrivateCheckbox: _vm.isRecordSubmenu,
      isPrivate: _vm.isPrivate
    },
    on: {
      change: _vm.onSharedUsersChange
    }
  })], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-11a41036] .p-dialog-content {\n  overflow-y: unset;\n}\n.min-height-180[data-v-11a41036] {\n  min-height: 180px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuShareDialog_vue_vue_type_template_id_11a41036_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuShareDialog.vue?vue&type=template&id=11a41036&scoped=true& */ "./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=template&id=11a41036&scoped=true&");
/* harmony import */ var _MenuShareDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuShareDialog.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuShareDialog_vue_vue_type_style_index_0_id_11a41036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true& */ "./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuShareDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuShareDialog_vue_vue_type_template_id_11a41036_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuShareDialog_vue_vue_type_template_id_11a41036_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11a41036",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuShareDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_style_index_0_id_11a41036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=style&index=0&id=11a41036&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_style_index_0_id_11a41036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_style_index_0_id_11a41036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_style_index_0_id_11a41036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_style_index_0_id_11a41036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=template&id=11a41036&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=template&id=11a41036&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_template_id_11a41036_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuShareDialog.vue?vue&type=template&id=11a41036&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue?vue&type=template&id=11a41036&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_template_id_11a41036_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShareDialog_vue_vue_type_template_id_11a41036_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=147.js.map