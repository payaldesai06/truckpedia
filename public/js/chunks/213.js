(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[213],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ViewEditRecord',
  provide: function provide() {
    return {
      customFields: this.customFields
    };
  },
  props: {
    customFields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    fieldTypes: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  components: {
    DetailsView: function DetailsView() {
      return __webpack_require__.e(/*! import() */ 130).then(__webpack_require__.bind(null, /*! ./DetailsView.vue */ "./resources/js/src/views/pages/menu/components/DetailsView.vue"));
    },
    FieldForm: function FieldForm() {
      return __webpack_require__.e(/*! import() */ 131).then(__webpack_require__.bind(null, /*! ./FieldForm.vue */ "./resources/js/src/views/pages/menu/components/FieldForm.vue"));
    }
  },
  data: function data() {
    return {
      isDetailsViewActive: false,
      isFieldDialogVisible: false,
      selectedRecord: null,
      selectedField: null,
      selectedRecordID: null,
      rollUpTargets: null,
      recordLinkData: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])('menuV2', ['getAllSubMenu']), {
    submenuId: function submenuId() {
      var _ref = (this.$route || {}).params || {},
          submenuId = _ref.submenuId;

      return submenuId || null;
    },
    hasNextRecord: function hasNextRecord() {
      // if (!isEmpty(this.selectedRecord) && this.selectedRecord.id) {
      //   const index = this.dataObject.findIndex(
      //     (item) => item.id === this.selectedRecord.id
      //   )
      //   return index < this.dataObject.length - 1
      // }
      return false;
    },
    hasPreviousRecord: function hasPreviousRecord() {
      // if (!isEmpty(this.selectedRecord) && this.selectedRecord.id) {
      //   const index = this.dataObject.findIndex(
      //     (item) => item.id === this.selectedRecord.id
      //   )
      //   return index > 0
      // }
      return false;
    },
    submenuList: function submenuList() {
      var submenuId = this.submenuId;
      return submenuId ? this.getAllSubMenu.filter(function (item) {
        return item.id !== parseInt(submenuId);
      }) : this.getAllSubMenu;
    }
  }),
  methods: {
    searchLinkedRecords: function searchLinkedRecords(payload) {
      this.$emit("searchLinkedRecords", payload);
    },

    /* Details view controls : Start */
    toggleDetailsView: function toggleDetailsView() {
      var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(record)) {
        this.selectedRecord = record;
        this.selectedRecordID = record[0].id;
      } else {
        this.selectedRecord = [];
        this.selectedRecordID = null;
      }

      this.isDetailsViewActive = !this.isDetailsViewActive;
    },
    updateRecord: function updateRecord(val) {
      this.$emit("updateRecord", {
        recordId: this.selectedRecordID,
        values: _toConsumableArray(val)
      });
      this.toggleDetailsView();
    },
    submitRecord: function submitRecord(val) {
      this.$emit("submitRecord", {
        values: _toConsumableArray(val)
      });
      this.toggleDetailsView();
    },
    deleteRecord: function deleteRecord(id) {
      this.$emit("deleteRecord", id);
      this.toggleDetailsView();
    },
    nextRecord: function nextRecord() {// const index = this.dataObject.findIndex(
      //   (item) => item.id === this.selectedRecord.id
      // )
      // this.selectedRecord = this.dataObject[index + 1]
    },
    previousRecord: function previousRecord() {// const index = this.dataObject.findIndex(
      //   (item) => item.id === this.selectedRecord.id
      // )
      // this.selectedRecord = this.dataObject[index - 1]
    },

    /* Details view controls : End */

    /* Field Records controls : Start */
    closeFieldDialog: function closeFieldDialog() {
      this.selectedField = null;
      this.toggleFieldDialog();
    },
    toggleFieldDialog: function toggleFieldDialog() {
      this.isFieldDialogVisible = !this.isFieldDialogVisible;
    },
    addField: function addField(val) {
      this.$emit("addField", val, this.selectedRecordID);
      this.toggleFieldDialog();
    },
    editField: function editField(id) {
      this.selectedField = this.customFields.find(function (item) {
        return item.id === id;
      });
      this.toggleFieldDialog();
    },
    updateField: function updateField(val) {
      this.$emit("updateField", val);
      this.selectedField = null;
      this.toggleFieldDialog();
    },
    uploadFiles: function uploadFiles(val) {
      this.$emit('uploadFiles', val);
    },
    deleteFile: function deleteFile(val) {
      this.$emit('deleteFile', val);
    },
    updateSelectedRecord: function updateSelectedRecord(fieldId, record) {
      if (record.id === this.selectedRecordID) this.selectedRecord = this.selectedRecord.map(function (field) {
        if (field.fieldId === fieldId) {
          return _objectSpread({}, field, {
            filesValue: record.customFieldsData.find(function (f) {
              return f.fieldId === fieldId;
            }).filesValue
          });
        }

        return field;
      });
    },
    deleteField: function deleteField(id) {
      this.$emit('deleteField', {
        fieldId: id
      });
    },
    initRecordLinkFields: function initRecordLinkFields(record) {
      var _this = this;

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(this.recordLinkData)) {
        this.recordLinkData = record;
        return;
      }

      _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(record).forEach(function (key) {
        if (_this.recordLinkData[key]) _this.recordLinkData[key] = record[key];else _this.recordLinkData = _objectSpread({}, _this.recordLinkData, _defineProperty({}, key, record[key]));
      });
    },
    addAttachments: function addAttachments(fieldId, filesArray) {
      var _this2 = this;

      var fieldName = this.customFields.find(function (field) {
        return field.id === fieldId;
      }).name || '';
      var existingFiles = this.$refs.detailsView.form[fieldName] || [];
      this.$refs.detailsView.form[fieldName] = _toConsumableArray(existingFiles).concat(_toConsumableArray(filesArray));
      this.selectedRecord = this.selectedRecord.map(function (field) {
        if (field.fieldId === fieldId) {
          return _objectSpread({}, field, {
            filesValue: _toConsumableArray(_this2.$refs.detailsView.form[fieldName])
          });
        }

        return field;
      });
    },
    addNewRecordAttachments: function addNewRecordAttachments(fieldId, filesArray) {
      if (this.$refs.detailsView) {
        var fieldName = this.customFields.find(function (field) {
          return field.id === fieldId;
        }).name || '';

        if (fieldName) {
          var existingFiles = this.$refs.detailsView.form[fieldName] || [];
          this.$refs.detailsView.form[fieldName] = _toConsumableArray(existingFiles).concat(_toConsumableArray(filesArray));
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=template&id=051de0be&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=template&id=051de0be& ***!
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

  return _c("div", {
    staticClass: "view-edit-records"
  }, [_vm.isDetailsViewActive ? _c("DetailsView", {
    ref: "detailsView",
    attrs: {
      isPromptActive: _vm.isDetailsViewActive,
      customFields: _vm.customFields,
      selectedItem: _vm.selectedRecord,
      nextIconVisible: _vm.hasNextRecord,
      previousIconVisible: _vm.hasPreviousRecord,
      recordLinkData: _vm.recordLinkData
    },
    on: {
      toggleDialog: _vm.toggleDetailsView,
      "update:Details": _vm.updateRecord,
      "submit:Details": _vm.submitRecord,
      "delete:Details": _vm.deleteRecord,
      next: _vm.nextRecord,
      prev: _vm.previousRecord,
      toggleFieldDialog: _vm.toggleFieldDialog,
      editField: _vm.editField,
      deleteField: _vm.deleteField,
      uploadFiles: _vm.uploadFiles,
      "delete:File": _vm.deleteFile,
      searchLinkedRecords: _vm.searchLinkedRecords
    }
  }) : _vm._e(), _vm._v(" "), _vm.isFieldDialogVisible ? _c("FieldForm", {
    attrs: {
      isPromptActive: _vm.isFieldDialogVisible,
      typesList: _vm.fieldTypes,
      selectedField: _vm.selectedField,
      submenuList: _vm.submenuList,
      rollUpTargets: _vm.rollUpTargets,
      customFields: _vm.customFields,
      submenuId: _vm.submenuId
    },
    on: {
      closeDialog: _vm.closeFieldDialog,
      addField: _vm.addField,
      updateField: _vm.updateField
    }
  }) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/ViewEditRecord.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/ViewEditRecord.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewEditRecord_vue_vue_type_template_id_051de0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewEditRecord.vue?vue&type=template&id=051de0be& */ "./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=template&id=051de0be&");
/* harmony import */ var _ViewEditRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewEditRecord.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewEditRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewEditRecord_vue_vue_type_template_id_051de0be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewEditRecord_vue_vue_type_template_id_051de0be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/menu/components/ViewEditRecord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEditRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewEditRecord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEditRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=template&id=051de0be&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=template&id=051de0be& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEditRecord_vue_vue_type_template_id_051de0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewEditRecord.vue?vue&type=template&id=051de0be& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/ViewEditRecord.vue?vue&type=template&id=051de0be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEditRecord_vue_vue_type_template_id_051de0be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewEditRecord_vue_vue_type_template_id_051de0be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=213.js.map