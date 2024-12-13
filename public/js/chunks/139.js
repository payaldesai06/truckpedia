(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuNamePrompt',
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    },
    currentName: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    isAvatarVisible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    acceptText: function acceptText() {
      return 'Rename';
    },
    colorOptions: function colorOptions() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_0__["default"].spreadSheetColorPickerPallet.filter(function (color) {
        return color !== '#ffffff';
      });
    }
  },
  data: function data() {
    return {
      menuName: '',
      menuColor: '',
      defaultColor: '#c3c3c3' // default light gray color

    };
  },
  methods: {
    clearMenuName: function clearMenuName() {
      this.menuName = '';
    },
    onAccept: function onAccept() {
      this.$emit('onAccept', {
        name: this.menuName,
        color: this.menuColor
      });
      this.clearMenuName();
    },
    onClose: function onClose() {
      this.$emit('onClose');
      this.clearMenuName();
    },
    getFirstLetter: function getFirstLetter(name) {
      return name.trim().charAt(0);
    },
    changeMenuAvatarColor: function changeMenuAvatarColor(color) {
      this.menuColor = color;
    }
  },
  watch: {
    currentName: function currentName(val) {
      if (val) {
        this.menuName = val;
      }
    },
    color: function color(val) {
      if (val) {
        this.menuColor = val;
      } else this.menuColor = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=template&id=6346716e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=template&id=6346716e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vs-prompt", {
    attrs: {
      title: _vm.title,
      "accept-text": _vm.acceptText,
      "is-valid": _vm.menuName !== "",
      active: _vm.isPromptActive
    },
    on: {
      cancel: _vm.onClose,
      accept: _vm.onAccept,
      close: _vm.onClose
    }
  }, [_c("div", [_vm._v("\n    Enter a name\n    "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Name"
    },
    model: {
      value: _vm.menuName,
      callback: function callback($$v) {
        _vm.menuName = $$v;
      },
      expression: "menuName"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-4"
  }, [_vm.isAvatarVisible ? _c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("vs-avatar", {
    staticClass: "rounded-lg mt-0 ml-0 menu-avatar",
    attrs: {
      size: "100px",
      color: _vm.menuColor || _vm.defaultColor,
      text: _vm.getFirstLetter(_vm.menuName)
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    class: ["vx-col", _vm.isAvatarVisible ? "w-2/3" : "w-full"]
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "font-semibold"
  }, [_vm._v("Color")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 flex flex-wrap gap-1 color-list"
  }, [_c("vs-icon", {
    staticClass: "size-24 icon-color icon-color--black cursor-pointer",
    attrs: {
      icon: "block"
    },
    on: {
      click: function click($event) {
        return _vm.changeMenuAvatarColor(_vm.defaultColor);
      }
    }
  }), _vm._v(" "), _vm._l(_vm.colorOptions, function (color, index) {
    return _c("vs-icon", {
      key: index,
      staticClass: "size-24 icon-color cursor-pointer",
      attrs: {
        bg: color,
        icon: _vm.menuColor === color ? "check" : ""
      },
      on: {
        click: function click($event) {
          return _vm.changeMenuAvatarColor(color);
        }
      }
    });
  })], 2)])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-6346716e] .menu-avatar .vs-avatar--text {\n  font-size: 2.5rem;\n  font-weight: 500;\n}[dir][data-v-6346716e] .menu-avatar .vs-avatar--text {\n  text-shadow: 0 0 1px #000;\n}\n[data-v-6346716e] .p-dialog-content {\n  overflow-y: visible;\n}\n.color-list[data-v-6346716e] {\n  max-height: 120px;\n  overflow-x: auto;\n}\n.size-24[data-v-6346716e] {\n  width: 24px !important;\n  height: 24px !important;\n}\n.icon-color[data-v-6346716e] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: #fff;\n}\n[dir] .icon-color[data-v-6346716e] {\n  text-shadow: 0 0 1px #000;\n}\n.icon-color--black[data-v-6346716e] {\n  color: #000;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/menu/MenuNamePrompt.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/menu/MenuNamePrompt.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuNamePrompt_vue_vue_type_template_id_6346716e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuNamePrompt.vue?vue&type=template&id=6346716e&scoped=true& */ "./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=template&id=6346716e&scoped=true&");
/* harmony import */ var _MenuNamePrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuNamePrompt.vue?vue&type=script&lang=js& */ "./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuNamePrompt_vue_vue_type_style_index_0_id_6346716e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true& */ "./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuNamePrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuNamePrompt_vue_vue_type_template_id_6346716e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuNamePrompt_vue_vue_type_template_id_6346716e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6346716e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/menu/MenuNamePrompt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuNamePrompt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_style_index_0_id_6346716e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=style&index=0&id=6346716e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_style_index_0_id_6346716e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_style_index_0_id_6346716e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_style_index_0_id_6346716e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_style_index_0_id_6346716e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=template&id=6346716e&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=template&id=6346716e&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_template_id_6346716e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuNamePrompt.vue?vue&type=template&id=6346716e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/MenuNamePrompt.vue?vue&type=template&id=6346716e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_template_id_6346716e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuNamePrompt_vue_vue_type_template_id_6346716e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=139.js.map