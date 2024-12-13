(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[167],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mixins_GroupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/GroupBy */ "./resources/js/src/views/pages/menu/mixins/GroupBy.js");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BoardView",
  mixins: [_mixins_GroupBy__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    Draggable: function Draggable() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js", 7));
    },
    DraggableCard: function DraggableCard() {
      return __webpack_require__.e(/*! import() */ 168).then(__webpack_require__.bind(null, /*! ./DraggableCard */ "./resources/js/src/views/pages/menu/components/DraggableCard.vue"));
    },
    ControlBar: function ControlBar() {
      return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./ControlBar */ "./resources/js/src/views/pages/menu/components/ControlBar/index.vue"));
    }
  },
  props: {
    customFields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    recordData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    viewMetaData: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    /* Record Update Logic */
    toggleDetailsView: function toggleDetailsView(recordId) {
      this.$emit("toggleDetailsView", recordId);
    },
    updateView: function updateView(data) {
      var payload = {
        boardMetaData: _objectSpread({}, data)
      };
      this.$emit("updateView", payload);
    },
    updateRecord: function updateRecord(event, item) {
      var _this = this;

      if (this.selectedGroupBy && this.selectedGroupBy.type === 'singleSelect' && event.added) {
        var recordID = event.added.element.id;
        var payload = {
          recordId: recordID,
          values: this.recordData.find(function (record) {
            return record.id === recordID;
          }).customFieldsData.map(function (field) {
            if (field.fieldId === _this.selectedGroupBy.id) {
              return _objectSpread({}, field, {
                singleSelectValue: item.id || null
              });
            }

            return field;
          })
        };
        this.$emit('update:Details', payload);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=template&id=bcfbf546&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=template&id=bcfbf546&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "menu-board-view"
  }, [_c("ControlBar", {
    attrs: {
      viewName: "board",
      selectedGroupBy: _vm.selectedGroupBy,
      groupByOptions: _vm.groupByOptions,
      viewMetaData: _vm.viewMetaData,
      customFields: _vm.customFields
    },
    on: {
      updateView: _vm.updateView,
      toggleDetailsView: _vm.toggleDetailsView
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-2 gap-4 draggable-row"
  }, _vm._l(_vm.viewData, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "vx-col draggable-col"
    }, [_c("div", {}, [_c("h3", {
      staticClass: "text-base opacity-75 ml-2"
    }, [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c("vs-divider")], 1), _vm._v(" "), _c("div", {
      staticClass: "draggable-list"
    }, [_c("draggable", {
      staticClass: "p-2 space-y-4 overflow-y-auto draggable-item",
      attrs: {
        list: item.records,
        group: "items",
        "data-status": item.value
      },
      on: {
        change: function change($event) {
          return _vm.updateRecord($event, item);
        }
      }
    }, _vm._l(item.records, function (record, i) {
      return _c("draggable-card", {
        key: i,
        staticClass: "cursor-pointer",
        attrs: {
          data: record,
          customFields: _vm.customFields
        },
        nativeOn: {
          click: function click($event) {
            return _vm.toggleDetailsView(record.id);
          }
        }
      });
    }), 1)], 1)]);
  }), 0)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".draggable-row[data-v-bcfbf546] {\n  display: flex;\n  width: 98%;\n  overflow-y: hidden;\n  overflow-x: visible;\n}[dir] .draggable-row[data-v-bcfbf546] {\n  margin: auto;\n}\n.draggable-col[data-v-bcfbf546] {\n  flex: 1;\n  height: 89vh;\n  min-width: 240px;\n}\n[dir] .draggable-col[data-v-bcfbf546] {\n  background: var(--surface-b);\n  border-radius: 1rem;\n  padding-top: 1rem;\n}\n.draggable-item[data-v-bcfbf546] {\n  height: calc(100vh - 165px);\n}\n\n/* width */\n.draggable-list[data-v-bcfbf546] > ::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n[dir] .draggable-list[data-v-bcfbf546] > ::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #b3b3b3;\n  border-radius: 10px;\n  background: #f1f1f1;\n}\n\n/* Handle */\n[dir] .draggable-list[data-v-bcfbf546] > ::-webkit-scrollbar-thumb {\n  background: #b7b7b7;\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n[dir] .draggable-list[data-v-bcfbf546] > ::-webkit-scrollbar-thumb:hover {\n  background: #7a7a7a;\n}\n.h-fit-content[data-v-bcfbf546] {\n  height: -moz-fit-content;\n  height: fit-content;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/menu/components/BoardView.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/BoardView.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoardView_vue_vue_type_template_id_bcfbf546_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardView.vue?vue&type=template&id=bcfbf546&scoped=true& */ "./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=template&id=bcfbf546&scoped=true&");
/* harmony import */ var _BoardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BoardView_vue_vue_type_style_index_0_id_bcfbf546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true& */ "./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BoardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BoardView_vue_vue_type_template_id_bcfbf546_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BoardView_vue_vue_type_template_id_bcfbf546_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bcfbf546",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/menu/components/BoardView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoardView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_style_index_0_id_bcfbf546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=style&index=0&id=bcfbf546&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_style_index_0_id_bcfbf546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_style_index_0_id_bcfbf546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_style_index_0_id_bcfbf546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_style_index_0_id_bcfbf546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=template&id=bcfbf546&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=template&id=bcfbf546&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_template_id_bcfbf546_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoardView.vue?vue&type=template&id=bcfbf546&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/BoardView.vue?vue&type=template&id=bcfbf546&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_template_id_bcfbf546_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardView_vue_vue_type_template_id_bcfbf546_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=167.js.map