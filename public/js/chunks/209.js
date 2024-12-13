(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[209],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilesTab',
  components: {
    Folders: function Folders() {
      return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! @/components/folders/Folders */ "./resources/js/src/components/folders/Folders.vue"));
    }
  },
  data: function data() {
    return {
      dragStartFile: null
    };
  },
  props: {
    dataObj: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])('driverV2', ['getFileList', 'getFolderList', 'getSelectedDriver']), {
    files: function files() {
      var _this = this;

      return this.getFolderList.map(function (folder) {
        var files = [];
        if (_this.isEditMode) files = _this.getFileList.filter(function (file) {
          return file.folderId === folder.id;
        });else if (_this.dataObj && _this.dataObj.files && _this.dataObj.files.length > 0) files = _this.dataObj.files.filter(function (file) {
          return file.folderId === folder.id;
        });
        return _objectSpread({}, folder, {
          files: files
        });
      });
    },
    isEditMode: function isEditMode() {
      return this.$route.name === 'drivers-edit';
    },
    driverId: function driverId() {
      return this.$route.params.id;
    }
  }),
  created: function created() {
    this.init();
  },
  methods: {
    fileDragStart: function fileDragStart(file) {
      this.dragStartFile = [file];
    },
    fileDropEnd: function fileDropEnd(file) {
      if (this.isEditMode) {
        var getFileId = this.dragStartFile.map(function (item) {
          return {
            fileId: item.id
          };
        });
        var payload = {
          folderId: file.folderId,
          files: getFileId
        };
        this.$store.dispatch('driverV2/driverFileChangeFolder', payload);
        this.fetchFiles();
      }
    },
    fetchFolders: function fetchFolders() {
      return this.$store.dispatch('driverV2/fetchFolderList');
    },
    fetchFiles: function fetchFiles() {
      return this.$store.dispatch('driverV2/fetchFiles', this.driverId);
    },
    getErrorMsg: function getErrorMsg(error) {
      return error && error.response && error.response.data && error.response.data.message ? error.response.data.message : 'Something went wrong';
    },
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (this.getFolderList.length === 0 || this.isEditMode) this.$vs.loading();

                if (!(this.getFolderList.length === 0)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return this.fetchFolders();

              case 5:
                if (!this.isEditMode) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return this.fetchFiles();

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context.t0)
                });

              case 13:
                _context.prev = 13;
                this.$vs.loading.close();
                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10, 13, 16]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    addFolder: function () {
      var _addFolder = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(_ref) {
        var isEdit, id, folderName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isEdit = _ref.isEdit, id = _ref.id, folderName = _ref.folderName;
                _context2.prev = 1;

                if (!isEdit) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 5;
                return this.$store.dispatch('driverV2/updateFolder', {
                  folderId: id,
                  folderName: folderName
                });

              case 5:
                _context2.next = 9;
                break;

              case 7:
                _context2.next = 9;
                return this.$store.dispatch('driverV2/createFolder', {
                  folderName: folderName
                });

              case 9:
                _context2.next = 11;
                return this.fetchFolders();

              case 11:
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](1);
                _context2.next = 17;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: _context2.t0.response.data.message || _context2.t0.message
                });

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 13]]);
      }));

      return function addFolder(_x) {
        return _addFolder.apply(this, arguments);
      };
    }(),
    deleteFile: function () {
      var _deleteFile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3(_ref2) {
        var id, index, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _ref2.file.id, index = _ref2.index;
                _context3.prev = 1;

                if (this.isEditMode) {
                  _context3.next = 6;
                  break;
                }

                payload = {
                  files: this.dataObj.files.filter(function (file, i) {
                    return i !== index;
                  })
                };
                this.$emit('update:Files', payload);
                return _context3.abrupt("return");

              case 6:
                _context3.next = 8;
                return this.$store.dispatch('driverV2/deleteFile', id);

              case 8:
                _context3.next = 10;
                return this.fetchFiles();

              case 10:
                this.$vs.notify({
                  time: 2000,
                  color: 'success',
                  title: 'File Deleted',
                  text: 'File deleted successfully'
                });
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context3.t0)
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 13]]);
      }));

      return function deleteFile(_x2) {
        return _deleteFile.apply(this, arguments);
      };
    }(),
    getFileExtension: function getFileExtension(files) {
      var fileExtension = files.map(function (file) {
        var extension = file.name.split('.').pop();
        return {
          extension: extension
        };
      });
      return fileExtension;
    },
    generateS3NameAndURL: function () {
      var _generateS3NameAndURL = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4(files) {
        var allFiles, _ref3, _ref3$data, result, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!(files.length === 0)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                _context4.next = 5;
                return this.getFileExtension(files);

              case 5:
                allFiles = _context4.sent;
                _context4.next = 8;
                return this.$store.dispatch('driverV2/uploadAttachment', {
                  files: allFiles
                });

              case 8:
                _ref3 = _context4.sent;
                _ref3$data = _ref3.data;
                result = _ref3$data.result;
                payload = _ref3$data.payload;
                return _context4.abrupt("return", result && payload ? payload : []);

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 15]]);
      }));

      return function generateS3NameAndURL(_x3) {
        return _generateS3NameAndURL.apply(this, arguments);
      };
    }(),
    uploadAttachmentsToS3: function () {
      var _uploadAttachmentsToS = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee5(s3FileNameAndURL, files) {
        var attachments, i, _s3FileNameAndURL$i, fileName, url, file, _ref4, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$vs.loading();
                _context5.prev = 1;

                if (!s3FileNameAndURL) {
                  _context5.next = 17;
                  break;
                }

                attachments = [];
                i = 0;

              case 5:
                if (!(i < s3FileNameAndURL.length)) {
                  _context5.next = 16;
                  break;
                }

                _s3FileNameAndURL$i = s3FileNameAndURL[i], fileName = _s3FileNameAndURL$i.fileName, url = _s3FileNameAndURL$i.url;
                file = files[i];
                _context5.next = 10;
                return this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
                  url: url,
                  file: file,
                  extension: fileName.split(".").pop()
                });

              case 10:
                _ref4 = _context5.sent;
                status = _ref4.status;
                if (status === 200) attachments.push({
                  fileName: fileName,
                  originalFileName: file.name
                });

              case 13:
                i++;
                _context5.next = 5;
                break;

              case 16:
                return _context5.abrupt("return", attachments);

              case 17:
                _context5.next = 21;
                break;

              case 19:
                _context5.prev = 19;
                _context5.t0 = _context5["catch"](1);

              case 21:
                _context5.prev = 21;
                this.$vs.loading.close();
                return _context5.finish(21);

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 19, 21, 24]]);
      }));

      return function uploadAttachmentsToS3(_x4, _x5) {
        return _uploadAttachmentsToS.apply(this, arguments);
      };
    }(),
    uploadFiles: function () {
      var _uploadFiles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee6(_ref5) {
        var folderId, files, s3FileNameAndURL, attachments, payload, _payload, _files;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                folderId = _ref5.folderId, files = _ref5.files;
                _context6.prev = 1;
                _context6.next = 4;
                return this.generateS3NameAndURL(files);

              case 4:
                s3FileNameAndURL = _context6.sent;
                _context6.next = 7;
                return this.uploadAttachmentsToS3(s3FileNameAndURL, files);

              case 7:
                _context6.t0 = _context6.sent;

                if (_context6.t0) {
                  _context6.next = 10;
                  break;
                }

                _context6.t0 = [];

              case 10:
                attachments = _context6.t0;

                if (!this.isEditMode) {
                  _context6.next = 19;
                  break;
                }

                payload = {
                  folderId: folderId,
                  userId: parseInt(this.driverId),
                  files: attachments
                };
                _context6.next = 15;
                return this.$store.dispatch('driverV2/uploadFiles', payload);

              case 15:
                _context6.next = 17;
                return this.fetchFiles();

              case 17:
                _context6.next = 22;
                break;

              case 19:
                _payload = attachments.map(function (file, index) {
                  return _objectSpread({}, file, {
                    url: s3FileNameAndURL[index].url,
                    folderId: folderId
                  });
                });
                _files = this.dataObj.files ? _toConsumableArray(this.dataObj.files).concat(_toConsumableArray(_payload)) : _toConsumableArray(_payload);
                this.$emit('update:Files', {
                  files: _files
                });

              case 22:
                _context6.next = 27;
                break;

              case 24:
                _context6.prev = 24;
                _context6.t1 = _context6["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context6.t1)
                });

              case 27:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 24]]);
      }));

      return function uploadFiles(_x6) {
        return _uploadFiles.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=template&id=27406f24&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=template&id=27406f24& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("Folders", {
    attrs: {
      dataArray: _vm.files,
      showFileUploadIcon: true,
      imagePreview: _vm.isEditMode,
      showDownload: _vm.isEditMode
    },
    on: {
      addFolder: _vm.addFolder,
      deleteFile: _vm.deleteFile,
      uploadFiles: _vm.uploadFiles,
      fileDragStart: _vm.fileDragStart,
      fileDropEnd: _vm.fileDropEnd
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/FilesTab.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/FilesTab.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilesTab_vue_vue_type_template_id_27406f24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesTab.vue?vue&type=template&id=27406f24& */ "./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=template&id=27406f24&");
/* harmony import */ var _FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesTab_vue_vue_type_template_id_27406f24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilesTab_vue_vue_type_template_id_27406f24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/drivers/components/FilesTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=template&id=27406f24&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=template&id=27406f24& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_template_id_27406f24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesTab.vue?vue&type=template&id=27406f24& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/FilesTab.vue?vue&type=template&id=27406f24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_template_id_27406f24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_template_id_27406f24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=209.js.map