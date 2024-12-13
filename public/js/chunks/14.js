(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/Folders.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/folders/Folders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Folders",
  components: {
    FileUploader: function FileUploader() {
      return __webpack_require__.e(/*! import() */ 201).then(__webpack_require__.bind(null, /*! ./FileUploader.vue */ "./resources/js/src/components/folders/FileUploader.vue"));
    },
    Files: function Files() {
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @/components/files/Files */ "./resources/js/src/components/files/Files.vue"));
    },
    FolderNamePrompt: function FolderNamePrompt() {
      return __webpack_require__.e(/*! import() */ 57).then(__webpack_require__.bind(null, /*! ./FolderNamePrompt.vue */ "./resources/js/src/components/folders/FolderNamePrompt.vue"));
    },
    FileUploadPrompt: function FileUploadPrompt() {
      return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! @/components/files/FileUploadPrompt */ "./resources/js/src/components/files/FileUploadPrompt.vue"));
    }
  },
  props: {
    dataArray: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showFileUploadIcon: {
      type: Boolean,
      default: false
    },
    showCollapsed: {
      type: Boolean,
      default: false
    },
    imagePreview: {
      type: Boolean,
      default: true
    },
    showDownload: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    var _ref;

    return _ref = {
      isFolderNamePromptVisible: false,
      isFileUploadPromptVisible: false,
      isEdit: false,
      editFolder: {
        id: null,
        folderName: ""
      },
      folderIDForFiles: null
    }, _defineProperty(_ref, "folderIDForFiles", null), _defineProperty(_ref, "dragStartFile", null), _ref;
  },
  methods: {
    fileDragStart: function fileDragStart(file) {
      this.dragStartFile = file;
      this.$emit('fileDragStart', file);
    },
    fileDropEnd: function fileDropEnd(file) {
      this.dragStartFile = null;
      this.$emit('fileDropEnd', file);
    },
    dragNdrop: function dragNdrop(filesHolder) {
      this.uploadFiles(filesHolder);
    },
    drop: function drop() {
      if (this.dragStartFile) {
        this.fileDropEnd(_objectSpread({}, this.dragStartFile, {
          folderId: this.folderIDForFiles
        }));
      }

      this.dragStartFile = null;
    },
    dragLeave: function dragLeave() {
      this.dragStartFile = null;
    },
    addFolder: function addFolder(folderName) {
      if (this.isEdit && this.editFolder.folderName === folderName) {
        this.toggleFolderPrompt();
        this.resetEditMode();
        return;
      }

      this.$emit("addFolder", {
        isEdit: this.isEdit,
        id: this.editFolder.id,
        folderName: folderName
      });
      this.toggleFolderPrompt();
      if (this.isEdit) this.resetEditMode();
    },
    toggleFolderPrompt: function toggleFolderPrompt() {
      this.isFolderNamePromptVisible = !this.isFolderNamePromptVisible;
    },
    toggleRenameFolderPrompt: function toggleRenameFolderPrompt(folder) {
      this.isEdit = !this.isEdit;
      this.editFolder = _objectSpread({}, folder);
      this.toggleFolderPrompt();
    },
    resetEditMode: function resetEditMode() {
      this.isEdit = false;
      this.editFolder = {
        id: null,
        folderName: ""
      };
    },
    toggleFileUploadPrompt: function toggleFileUploadPrompt(folderId) {
      if (folderId) this.folderIDForFiles = folderId;else this.folderIDForFiles = null;
      this.isFileUploadPromptVisible = !this.isFileUploadPromptVisible;
    },
    uploadFiles: function uploadFiles(files) {
      if (files && files.length > 0 && this.folderIDForFiles) {
        this.$emit("uploadFiles", {
          folderId: this.folderIDForFiles,
          files: files
        });
        this.isFileUploadPromptVisible = false;
      }
    },
    setFolderIdForFiles: function setFolderIdForFiles(folderId) {
      this.folderIDForFiles = folderId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/Folders.vue?vue&type=template&id=44a2e8eb&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/folders/Folders.vue?vue&type=template&id=44a2e8eb&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("vx-card", [_c("div", {
    staticClass: "vx-row justify-end"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "border",
      size: "small",
      icon: "add"
    },
    on: {
      click: _vm.toggleFolderPrompt
    }
  }, [_vm._v("\n          ADD NEW FOLDER\n        ")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _vm.dataArray && _vm.dataArray.length > 0 ? _c("div", _vm._l(_vm.dataArray, function (folder) {
    return _c("Panel", {
      key: folder.id,
      staticClass: "mb-8",
      attrs: {
        toggleable: true,
        collapsed: _vm.showCollapsed
      },
      scopedSlots: _vm._u([{
        key: "icons",
        fn: function fn() {
          return [_c("div", {
            staticClass: "vx-row"
          }, [_c("div", {
            staticClass: "vx-col flex gap-1 items-center"
          }, [_c("vs-icon", {
            staticClass: "cursor-pointer",
            attrs: {
              size: "small",
              icon: "edit"
            },
            on: {
              click: function click($event) {
                return _vm.toggleRenameFolderPrompt(folder);
              }
            }
          }), _vm._v(" "), _vm.showFileUploadIcon ? _c("vs-icon", {
            staticClass: "cursor-pointer",
            attrs: {
              size: "small",
              icon: "file_upload"
            },
            on: {
              click: function click($event) {
                return _vm.toggleFileUploadPrompt(folder.id);
              }
            }
          }) : _vm._e()], 1)])];
        },
        proxy: true
      }, {
        key: "header",
        fn: function fn() {
          return [_c("div", {
            staticClass: "vx-row w-full"
          }, [_c("div", {
            staticClass: "vx-col flex items-center"
          }, [_c("vs-icon", {
            attrs: {
              size: "small",
              icon: "folder"
            }
          }), _vm._v(" "), _c("label", {
            staticClass: "text-sm font-semibold ml-2"
          }, [_vm._v("\n                " + _vm._s(folder.folderName) + "\n              ")])], 1)])];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), _vm._v(" "), _c("div", [_c("span", {
      staticClass: "drag-box",
      attrs: {
        id: folder.id
      }
    }, [_c("FileUploader", {
      attrs: {
        folder: folder
      },
      on: {
        dragNdrop: _vm.dragNdrop,
        dragLeave: _vm.dragLeave,
        drop: _vm.drop,
        setFolderIdForFiles: _vm.setFolderIdForFiles
      }
    }), _vm._v(" "), folder.files.length > 0 ? [_c("Files", {
      attrs: {
        imagePreview: _vm.imagePreview,
        isDownloadAllowed: _vm.showDownload,
        fileList: folder.files
      },
      on: {
        deleteFile: function deleteFile(_ref) {
          var file = _ref.file,
              index = _ref.index;
          return _vm.$emit("deleteFile", {
            file: file,
            index: index
          });
        },
        fileDragStart: _vm.fileDragStart,
        fileDropEnd: _vm.fileDropEnd
      }
    })] : [_c("div", {
      staticClass: "vx-row justify-center"
    }, [_c("div", {
      staticClass: "vx-col"
    }, [_c("span", {
      staticClass: "text-gray-500"
    }, [_vm._v("\n                    Drag and drop files to upload or click here to upload\n                  ")])])])]], 2)])]);
  }), 1) : _c("div", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("label", {
    staticClass: "text-gray-500"
  }, [_vm._v("No records found")])])])])], 1), _vm._v(" "), _c("FolderNamePrompt", {
    attrs: {
      isEditMode: _vm.isEdit,
      currentFolderName: _vm.editFolder.folderName,
      isPromptActive: _vm.isFolderNamePromptVisible
    },
    on: {
      onAccept: _vm.addFolder,
      onClose: _vm.toggleFolderPrompt,
      resetEditMode: _vm.resetEditMode
    }
  }), _vm._v(" "), _c("FileUploadPrompt", {
    attrs: {
      isPromptActive: _vm.isFileUploadPromptVisible
    },
    on: {
      onClose: _vm.toggleFileUploadPrompt,
      onAccept: _vm.uploadFiles
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/folders/Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-44a2e8eb] .p-panel-icons {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n}[dir][data-v-44a2e8eb] .p-panel-icons {\n  padding: 0 1rem;\n}\n.w-fit[data-v-44a2e8eb] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.drag-box[data-v-44a2e8eb] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  line-height: 95px;\n  color: #999;\n  display: inline-block;\n  transition: transform 0.3s;\n}\n[dir] .drag-box[data-v-44a2e8eb] {\n  margin: 0 auto;\n}\n.drag-box input[type=file][data-v-44a2e8eb] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  top: 0;\n}\n[dir=ltr] .drag-box input[type=file][data-v-44a2e8eb] {\n  left: 0;\n}\n[dir=rtl] .drag-box input[type=file][data-v-44a2e8eb] {\n  right: 0;\n}\n[dir] .draging[data-v-44a2e8eb] {\n  border: 2px dashed #ccc;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/folders/Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/components/folders/Folders.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/folders/Folders.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Folders_vue_vue_type_template_id_44a2e8eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Folders.vue?vue&type=template&id=44a2e8eb&scoped=true& */ "./resources/js/src/components/folders/Folders.vue?vue&type=template&id=44a2e8eb&scoped=true&");
/* harmony import */ var _Folders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Folders.vue?vue&type=script&lang=js& */ "./resources/js/src/components/folders/Folders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Folders_vue_vue_type_style_index_0_id_44a2e8eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true& */ "./resources/js/src/components/folders/Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Folders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Folders_vue_vue_type_template_id_44a2e8eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Folders_vue_vue_type_template_id_44a2e8eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44a2e8eb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/folders/Folders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/folders/Folders.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/components/folders/Folders.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Folders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/Folders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/folders/Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/components/folders/Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_style_index_0_id_44a2e8eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/Folders.vue?vue&type=style&index=0&id=44a2e8eb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_style_index_0_id_44a2e8eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_style_index_0_id_44a2e8eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_style_index_0_id_44a2e8eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_style_index_0_id_44a2e8eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/folders/Folders.vue?vue&type=template&id=44a2e8eb&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/components/folders/Folders.vue?vue&type=template&id=44a2e8eb&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_template_id_44a2e8eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Folders.vue?vue&type=template&id=44a2e8eb&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/folders/Folders.vue?vue&type=template&id=44a2e8eb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_template_id_44a2e8eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_template_id_44a2e8eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=14.js.map