(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FolderNamePrompt",
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    },
    isEditMode: {
      type: Boolean,
      default: false
    },
    currentFolderName: {
      type: String,
      default: ""
    }
  },
  computed: {
    title: function title() {
      return this.isEditMode ? "Rename Folder" : "Add New Folder";
    },
    acceptText: function acceptText() {
      return this.isEditMode ? "Rename" : "Add";
    }
  },
  data: function data() {
    return {
      folderName: ""
    };
  },
  methods: {
    clearFolderName: function clearFolderName() {
      this.folderName = "";
    },
    onAccept: function onAccept() {
      this.$emit("onAccept", this.folderName);
      this.clearFolderName();
    },
    onClose: function onClose() {
      if (this.isEditMode) this.$emit("resetEditMode");
      this.$emit("onClose");
      this.clearFolderName();
    }
  },
  watch: {
    isEditMode: function isEditMode(val) {
      if (val) {
        this.folderName = this.currentFolderName;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=template&id=3dc40fa7&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=template&id=3dc40fa7& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
      "is-valid": _vm.folderName !== "",
      active: _vm.isPromptActive
    },
    on: {
      cancel: _vm.onClose,
      accept: _vm.onAccept,
      close: _vm.onClose
    }
  }, [_c("div", [_vm._v("\n    Enter a name for the folder\n    "), _c("vs-input", {
    attrs: {
      placeholder: "Folder Name"
    },
    model: {
      value: _vm.folderName,
      callback: function callback($$v) {
        _vm.folderName = $$v;
      },
      expression: "folderName"
    }
  })], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/components/folders/FolderNamePrompt.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/components/folders/FolderNamePrompt.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FolderNamePrompt_vue_vue_type_template_id_3dc40fa7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FolderNamePrompt.vue?vue&type=template&id=3dc40fa7& */ "./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=template&id=3dc40fa7&");
/* harmony import */ var _FolderNamePrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FolderNamePrompt.vue?vue&type=script&lang=js& */ "./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FolderNamePrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FolderNamePrompt_vue_vue_type_template_id_3dc40fa7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FolderNamePrompt_vue_vue_type_template_id_3dc40fa7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/folders/FolderNamePrompt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderNamePrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolderNamePrompt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderNamePrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=template&id=3dc40fa7&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=template&id=3dc40fa7& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderNamePrompt_vue_vue_type_template_id_3dc40fa7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolderNamePrompt.vue?vue&type=template&id=3dc40fa7& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/FolderNamePrompt.vue?vue&type=template&id=3dc40fa7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderNamePrompt_vue_vue_type_template_id_3dc40fa7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderNamePrompt_vue_vue_type_template_id_3dc40fa7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=57.js.map