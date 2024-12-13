(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TableList',
  props: {
    tableData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    totalRecords: {
      type: Number
    },
    rows: {
      type: Number
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onPage: function onPage(_ref) {
      var page = _ref.page,
          rows = _ref.rows;
      this.$emit('onPage', {
        page: page,
        rows: rows
      });
    },
    editItem: function editItem(id) {
      this.$emit('editItem', id);
    },
    deleteItem: function deleteItem(id) {
      this.$emit('deleteItem', id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=template&id=06d734ba&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=template&id=06d734ba&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("DataTable", {
    attrs: {
      value: _vm.tableData,
      lazy: true,
      paginator: true,
      rows: _vm.rows,
      totalRecords: _vm.totalRecords,
      rowsPerPageOptions: [10, 25, 50],
      loading: _vm.loading,
      responsiveLayout: "scroll"
    },
    on: {
      page: function page($event) {
        return _vm.onPage($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_vm._v(" No records found ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("Column", {
    attrs: {
      field: "cardNo",
      header: "Card No"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var cardNumber = _ref.data.cardNumber;
        return [_vm._v("\n        " + _vm._s(cardNumber) + "\n      ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "expirationDate",
      header: "Expiration Date"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var expirationDate = _ref2.data.expirationDate;
        return [_vm._v("\n        " + _vm._s(expirationDate) + "\n      ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "assignDate",
      header: "Assigned On"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var currentAssignee = _ref3.data.currentAssignee;
        return [_vm._v("\n        " + _vm._s((currentAssignee || {}).assignDate) + "\n      ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "user",
      header: "Current Driver"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var currentAssignee = _ref4.data.currentAssignee;
        return [_vm._v("\n        " + _vm._s(((currentAssignee || {}).user || {}).name) + "\n      ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "truck",
      header: "Current Truck"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref5) {
        var currentAssignee = _ref5.data.currentAssignee;
        return [_vm._v("\n        " + _vm._s(((currentAssignee || {}).truck || {}).number) + "\n      ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "notes",
      header: "Notes"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref6) {
        var notes = _ref6.data.notes;
        return [_vm._v("\n        " + _vm._s(notes) + "\n      ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "status",
      header: "Status"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref7) {
        var status = _ref7.data.status;
        return [_c("div", {
          staticClass: "status",
          class: status === "active" ? "isActive" : "isInactive"
        }, [_vm._v("\n          " + _vm._s(status) + "\n        ")])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "action",
      header: "Action",
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "flex items-center space-x-2"
        }, [_c("vx-tooltip", {
          attrs: {
            text: "Edit"
          }
        }, [_c("img", {
          staticClass: "cursor-pointer",
          attrs: {
            src: __webpack_require__(/*! @assets/images/crm/editIcon.svg */ "./resources/assets/images/crm/editIcon.svg"),
            alt: "edit-icon",
            width: "28"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.editItem(slotProps.data.id);
            }
          }
        })]), _vm._v(" "), _c("vx-tooltip", {
          attrs: {
            text: "Delete"
          }
        }, [_c("img", {
          staticClass: "cursor-pointer",
          attrs: {
            src: __webpack_require__(/*! @assets/images/custom/deleteIcon.svg */ "./resources/assets/images/custom/deleteIcon.svg"),
            alt: "delete-icon",
            width: "28"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.deleteItem(slotProps.data.id);
            }
          }
        })])], 1)];
      }
    }])
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".status[data-v-06d734ba] {\n  font-size: 14px;\n  font-weight: 400;\n  display: flex;\n  height: 30px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  text-transform: capitalize;\n  max-width: 75px;\n}[dir] .status[data-v-06d734ba] {\n  border-radius: 4px;\n  padding: 10px;\n}\n.isActive[data-v-06d734ba] {\n  color: var(--foundation-success-normal-hover, #0b8d57);\n}\n[dir] .isActive[data-v-06d734ba] {\n  background: var(--Foundation-Success-Light, #e7f5ef);\n}\n.isInactive[data-v-06d734ba] {\n  color: var(--foundation-error-normal-hover, #d93025);\n}\n[dir] .isInactive[data-v-06d734ba] {\n  background: var(--Foundation-Error-Light, #fbe9e7);\n}\n@media (max-width: 768px) {\n[data-v-06d734ba] .p-datatable .p-datatable-thead > tr > th,[data-v-06d734ba] .p-datatable .p-datatable-tbody > tr > td {\n    min-width: 200px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/assets/images/crm/editIcon.svg":
/*!**************************************************!*\
  !*** ./resources/assets/images/crm/editIcon.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/editIcon.svg?2c2bf4b5491b63abece9e522d47b9686";

/***/ }),

/***/ "./resources/assets/images/custom/deleteIcon.svg":
/*!*******************************************************!*\
  !*** ./resources/assets/images/custom/deleteIcon.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/deleteIcon.svg?41b3a1f1e29c22c2f440f53898d2f6a7";

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableList_vue_vue_type_template_id_06d734ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableList.vue?vue&type=template&id=06d734ba&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=template&id=06d734ba&scoped=true&");
/* harmony import */ var _TableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TableList_vue_vue_type_style_index_0_id_06d734ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableList_vue_vue_type_template_id_06d734ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableList_vue_vue_type_template_id_06d734ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "06d734ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_style_index_0_id_06d734ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=style&index=0&id=06d734ba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_style_index_0_id_06d734ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_style_index_0_id_06d734ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_style_index_0_id_06d734ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_style_index_0_id_06d734ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=template&id=06d734ba&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=template&id=06d734ba&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_template_id_06d734ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableList.vue?vue&type=template&id=06d734ba&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue?vue&type=template&id=06d734ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_template_id_06d734ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_template_id_06d734ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=125.js.map