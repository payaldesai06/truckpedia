(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[183],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_closeSidebarMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/closeSidebarMixin */ "./resources/js/src/mixins/closeSidebarMixin.js");
/* harmony import */ var _LoadEdit_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadEdit.vue */ "./resources/js/src/views/pages/tripV2/components/LoadEdit.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LoadSidebar',
  mixins: [_mixins_closeSidebarMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    LoadEdit: _LoadEdit_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  provide: function provide() {
    return {
      scrollData: this.scrollData
    };
  },
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    recordId: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      settings: {
        // perfect scrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      },
      // Scroll to top
      scrollData: {
        scrollToTop: false
      },
      customFieldPopup: false
    };
  },
  watch: {
    scrollData: {
      deep: true,
      handler: function handler(newScrollData) {
        if (!newScrollData.scrollToTop) return;
        this.scrollData.scrollToTop = false;
        this.$refs['scrollbarComponent'].$el.scrollTop = 0;
      }
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {}
      }
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  methods: {
    isCustomFieldPopupOpenOrNot: function isCustomFieldPopupOpenOrNot(val) {
      this.customFieldPopup = val;
    },
    closeSidebar: function closeSidebar(value) {
      if (value !== undefined && value !== null) {
        this.$emit('closeSidebar', value);
      }

      this.$emit('closeSidebar');
    },
    outsideClickHandler: function outsideClickHandler() {
      if (this.$refs.loadEdit && !this.$refs.loadEdit.isAnyPromptsActive) {
        this.closeSidebar();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=template&id=19a74ff4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=template&id=19a74ff4&scoped=true& ***!
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

  return _c("vs-sidebar", {
    staticClass: "add-new-data-sidebar items-no-padding",
    attrs: {
      "position-right": "",
      parent: "body",
      "default-index": "1",
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
  }, [_c(_vm.scrollbarTag, {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.outsideClickHandler,
      expression: "outsideClickHandler"
    }],
    key: _vm.$vs.rtl,
    ref: "scrollbarComponent",
    tag: "component",
    staticClass: "scroll-area--data-list-add-new",
    attrs: {
      settings: _vm.settings
    }
  }, [[_vm.isSidebarActiveLocal ? _c("LoadEdit", {
    ref: "loadEdit",
    attrs: {
      recordId: _vm.recordId
    },
    on: {
      isCustomFieldPopupOpenOrNot: _vm.isCustomFieldPopupOpenOrNot,
      closeSidebar: _vm.closeSidebar
    }
  }) : _vm._e()]], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* @import \"@sass/custom/sidebar.scss\"; */\n\n/* .scroll-area--data-list-add-new {\n  height: calc(var(--vh, 1vh) * 100 - 0rem);\n} */\n.add-new-data-sidebar[data-v-19a74ff4] .vs-sidebar {\n  z-index: 52010;\n  width: 75vw;\n  max-width: 90vw;\n}\n[data-v-19a74ff4] .vs-sidebar--items {\n  overflow: auto !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadSideBar_vue_vue_type_template_id_19a74ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadSideBar.vue?vue&type=template&id=19a74ff4&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=template&id=19a74ff4&scoped=true&");
/* harmony import */ var _LoadSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadSideBar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadSideBar_vue_vue_type_style_index_0_id_19a74ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadSideBar_vue_vue_type_template_id_19a74ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadSideBar_vue_vue_type_template_id_19a74ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19a74ff4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/LoadSideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadSideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_style_index_0_id_19a74ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=style&index=0&id=19a74ff4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_style_index_0_id_19a74ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_style_index_0_id_19a74ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_style_index_0_id_19a74ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_style_index_0_id_19a74ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=template&id=19a74ff4&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=template&id=19a74ff4&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_template_id_19a74ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadSideBar.vue?vue&type=template&id=19a74ff4&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadSideBar.vue?vue&type=template&id=19a74ff4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_template_id_19a74ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSideBar_vue_vue_type_template_id_19a74ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=183.js.map