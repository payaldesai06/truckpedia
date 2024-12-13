(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[214],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ViewPrompt',
  components: {
    Listbox: function Listbox() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! primevue/listbox */ "./node_modules/primevue/listbox/index.js", 7));
    }
  },
  props: {},
  computed: {},
  data: function data() {
    return {
      views: [{
        id: 1,
        icon: 'view_stream',
        title: 'Table',
        name: 'table'
      }, {
        id: 2,
        icon: 'format_list_bulleted',
        title: 'List',
        name: 'list'
      }, {
        id: 3,
        icon: 'dashboard',
        title: 'Board',
        name: 'board'
      }, {
        id: 4,
        icon: 'assessment',
        title: 'Gantt',
        name: 'gantt'
      }],
      selectedView: null
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {},
    onSubmit: function onSubmit() {
      this.$emit('submit', this.selectedView);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=template&id=578357b2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=template&id=578357b2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
      visible: true,
      closable: false,
      modal: true,
      position: "top"
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-full flex items-center justify-end"
        }, [_c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              return _vm.$emit("close");
            }
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "flex items-center justify-end"
        }, [_c("vs-button", {
          attrs: {
            color: "primary"
          },
          on: {
            click: _vm.onSubmit
          }
        }, [_vm._v("Add View")])], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", [_c("Listbox", {
    staticStyle: {
      width: "100%"
    },
    attrs: {
      options: _vm.views,
      filter: false,
      optionLabel: "title",
      listStyle: "max-height:250px",
      filterPlaceholder: "Search"
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "flex items-center"
        }, [_c("vs-icon", {
          attrs: {
            icon: slotProps.option.icon
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "ml-2"
        }, [_vm._v(_vm._s(slotProps.option.title))])], 1)];
      }
    }]),
    model: {
      value: _vm.selectedView,
      callback: function callback($$v) {
        _vm.selectedView = $$v;
      },
      expression: "selectedView"
    }
  })], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/ViewPrompt.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/ViewPrompt.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewPrompt_vue_vue_type_template_id_578357b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewPrompt.vue?vue&type=template&id=578357b2&scoped=true& */ "./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=template&id=578357b2&scoped=true&");
/* harmony import */ var _ViewPrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewPrompt.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewPrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewPrompt_vue_vue_type_template_id_578357b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewPrompt_vue_vue_type_template_id_578357b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "578357b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/menu/components/ViewPrompt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewPrompt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=template&id=578357b2&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=template&id=578357b2&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPrompt_vue_vue_type_template_id_578357b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewPrompt.vue?vue&type=template&id=578357b2&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/ViewPrompt.vue?vue&type=template&id=578357b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPrompt_vue_vue_type_template_id_578357b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPrompt_vue_vue_type_template_id_578357b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=214.js.map