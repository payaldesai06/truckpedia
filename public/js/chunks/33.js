(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IncidentFileUploadPopup',
  components: {
    Files: function Files() {
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @/components/files/Files */ "./resources/js/src/components/files/Files.vue"));
    },
    ImagePreview: function ImagePreview() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! primevue/imagepreview */ "./node_modules/primevue/imagepreview/index.js", 7));
    }
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    },
    fileData: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    onAccept: function onAccept() {
      if (this.isEdit) {
        this.$emit('onAccept:Update', _objectSpread({}, this.fileData, {
          isPrivate: this.isPrivate[0],
          fileLabel: this.fileLabel[0]
        }));
        return;
      }

      this.$emit('onAccept', {
        files: this.filesHolder,
        isPrivate: this.isPrivate,
        fileLabel: this.fileLabel
      });
    },
    onClose: function onClose() {
      this.$emit('onClose');
    },
    fileSelected: function fileSelected(event) {
      var files = event.target.files;

      for (var i = 0; i < files.length; i++) {
        this.filesHolder.push(files[i]);
        this.isPrivate.push('');
        this.fileLabel.push('');
      }

      this.$refs.fileUpload.value = '';
    },
    removeFile: function removeFile(_ref) {
      var index = _ref.index;
      this.filesHolder.splice(index, 1);
      this.isPrivate.splice(index, 1);
      this.fileLabel.splice(index, 1);
    },
    getFileType: function getFileType(file) {
      var fileExtension = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_5__["getSelectedFileExtension"])(file, ['storageFilename', 'originalFilename', 'name']);
      return _config_constants__WEBPACK_IMPORTED_MODULE_4__["default"].fileTypes[fileExtension.toLowerCase()] || 'other';
    },
    getFileIcon: function getFileIcon(file) {
      var fileType = this.getFileType(file);
      return _config_constants__WEBPACK_IMPORTED_MODULE_4__["default"].materialIconForFileType[fileType];
    },
    getImageURL: function getImageURL(file) {
      var fileValue = file.file ? file.file : file;
      if (file.url) return file.url;
      return fileValue.storageFileUrl || URL.createObjectURL(fileValue);
    },
    downloadFile: function downloadFile(file) {
      var fileValue = file.file ? file.file : file;
      var link = document.createElement('a');
      link.href = file.url ? file.url : URL.createObjectURL(fileValue);
      link.download = file.url ? file.originalFilename : fileValue.name;
      Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_5__["redirectToNewTab"])(link);
    },
    clearLabel: function clearLabel(index) {
      this.$set(this.fileLabel, index, '');
    }
  },
  computed: {
    isEdit: function isEdit() {
      return this.fileData && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.fileData).length;
    },
    title: function title() {
      return this.isEdit ? 'Edit File' : 'Upload File';
    },
    acceptText: function acceptText() {
      return this.isEdit ? 'Update' : 'Upload';
    },
    isFormValid: function isFormValid() {
      return !this.isEdit ? this.filesHolder.length > 0 : true;
    }
  },
  data: function data() {
    return {
      filesHolder: [],
      isPrivate: [],
      accessOptions: [{
        id: 1,
        label: 'Private',
        value: 'private'
      }, {
        id: 2,
        label: 'Public',
        value: ''
      }],
      fileLabel: [],
      fileLabelOptions: _config_constants__WEBPACK_IMPORTED_MODULE_4__["default"].safetyModule.fileLabelOptions.sort(function (a, b) {
        return a.label < b.label ? -1 : 1;
      }),
      showFileUpload: true
    };
  },
  watch: {
    isPromptActive: function isPromptActive(val) {
      if (!val) {
        this.filesHolder = [];
        this.isPrivate = [];
        this.fileLabel = [];
      }

      if (this.isEdit) {
        this.filesHolder[0] = this.fileData;
        this.isPrivate[0] = this.fileData.isPrivate === 'public' ? '' : this.fileData.isPrivate;
        this.fileLabel[0] = this.fileData.fileLabel;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _IncidentFileUploadPopup_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IncidentFileUploadPopup.vue */ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue");
/* harmony import */ var _MediaPreview_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MediaPreview.vue */ "./resources/js/src/views/pages/safety/components/MediaPreview.vue");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");









function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_4___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_3___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilesTab',
  components: {
    IncidentFileUploadPopup: _IncidentFileUploadPopup_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    MediaPreview: _MediaPreview_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    value: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // See the discussion on line 20.
    filesToDisplay: function filesToDisplay() {
      var _this = this;

      var hasFilters = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(this.filter).some(function (key) {
        return _this.filter[key].value;
      }); // These functions are for public URL


      if (this.isPublicUrl && !hasFilters) {
        return this.publicFiles;
      }

      if (this.isPublicUrl && hasFilters) {
        var filteredFiles = this.publicFiles.filter(function (file) {
          return _this.filteredDataTable(file);
        });
        return filteredFiles;
      }

      if (!this.isPublicUrl && !hasFilters) {
        return this.value.files;
      }

      if (!this.isPublicUrl && hasFilters) {
        var _filteredFiles = this.value.files.filter(function (file) {
          return _this.filteredDataTable(file);
        });

        return _filteredFiles;
      }
    }
  },
  data: function data() {
    return {
      filter: {
        isPrivate: {
          value: null
        },
        fileLabel: {
          value: null
        },
        fileName: {
          value: null
        }
      },
      loading: false,
      accessOptions: [{
        id: 1,
        label: 'Private',
        value: 'private'
      }, {
        id: 2,
        label: 'Public',
        value: 'public'
      }],
      fileLabelOptions: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].safetyModule.fileLabelOptions.sort(function (a, b) {
        return a.label < b.label ? -1 : 1;
      }),
      fileUploadPrompt: {
        isPromptActive: false,
        data: null
      },
      defaultKey: 0,
      mediaPreview: {
        isActive: false,
        data: null
      },
      isPublicUrl: false,
      publicFiles: [],
      uploadPercentage: 0,
      isDragOverlayActive: false,
      selectedFiles: []
    };
  },
  created: function created() {
    var _this2 = this;

    if (this.$route.query.token && this.$route.params.id) {
      this.isPublicUrl = true;
      this.getViewPageFiles();
    } // Add event listener for drag-n-drop


    window.addEventListener('dragover', function (e) {
      e.preventDefault();
      var isLoaderActive = document.getElementsByClassName('con-vs-loading')[0];
      if (isLoaderActive) return;
      _this2.isDragOverlayActive = e.dataTransfer.types[0] === 'Files' && !_this2.fileUploadPrompt.isPromptActive && !_this2.mediaPreview.isActive;
    });
    window.addEventListener('drop', function (e) {
      e.preventDefault();
      _this2.isDragOverlayActive = false;
    });
    window.addEventListener('dragleave', function (e) {
      e.preventDefault(); // Check if user dropped the file outside the browser

      if (e.clientX === 0 && e.clientY === 0) {
        _this2.isDragOverlayActive = false;
      }
    });
  },
  methods: {
    filteredDataTable: function filteredDataTable(file) {
      var isPrivate = this.filter.isPrivate.value;
      var fileLabel = this.filter.fileLabel.value;
      var fileName = this.filter.fileName.value;
      var isPrivateMatch = isPrivate ? this.getAccessLabel(file.isPrivate).toLocaleLowerCase() === this.getAccessLabel(isPrivate).toLocaleLowerCase() : true;
      var fileLabelMatch = fileLabel ? file.fileLabel === fileLabel : true;
      var fileNameMatch = fileName ? file.originalFilename ? file.originalFilename.toLowerCase().includes(fileName.toLowerCase()) : (file.storageFilename || '').toLowerCase().includes(fileName.toLowerCase()) : true;

      if (!this.isPublicUrl) {
        return isPrivateMatch && fileLabelMatch && fileNameMatch;
      }

      return fileLabelMatch && fileNameMatch;
    },
    getViewPageFiles: function getViewPageFiles() {
      var _this3 = this;

      var payload = {
        incidentId: this.$route.params.id,
        type: 'publicFiles',
        token: this.$route.query.token
      };
      this.$store.dispatch('incidents/viewIncidentFiles', payload).then(function (_ref) {
        var data = _ref.data;
        _this3.publicFiles = data.payload.files;
      });
    },
    toggleFileUploadPrompt: function toggleFileUploadPrompt() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.fileUploadPrompt = {
        isPromptActive: !this.fileUploadPrompt.isPromptActive,
        data: data
      };
    },
    getFileExtension: function getFileExtension(files) {
      var fileExtension = files.map(function (file) {
        var extension = file.name.split('.').pop();
        return {
          extension: extension
        };
      });
      return fileExtension;
    },
    isViewable: function isViewable(file) {
      var extension = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_10__["getSelectedFileExtension"])(file, ['storageFilename', 'originalFilename']);
      var isPublicPage = this.$route.name === 'publicIncidentFiles';

      if (!this.isEdit && !isPublicPage) {
        return ['video', 'image', 'pdf'].includes(_config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].fileTypes[extension.toLowerCase()]);
      }

      var validTypes = ['video', 'image', 'pdf', 'doc', 'xls', 'msg'];
      var fileType = _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].fileTypes[extension.toLowerCase()];
      return fileType && validTypes.includes(fileType);
    },
    generateS3NameAndURL: function () {
      var _generateS3NameAndURL = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(files) {
        var allFiles, _ref2, _ref2$data, result, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(files.length === 0)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return this.getFileExtension(files);

              case 5:
                allFiles = _context.sent;
                _context.next = 8;
                return this.$store.dispatch('incidents/getUploadUrls', {
                  incidentId: this.value.incidentId || null,
                  files: allFiles
                });

              case 8:
                _ref2 = _context.sent;
                _ref2$data = _ref2.data;
                result = _ref2$data.result;
                payload = _ref2$data.payload;
                return _context.abrupt("return", result && payload ? payload : []);

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
      }));

      return function generateS3NameAndURL(_x) {
        return _generateS3NameAndURL.apply(this, arguments);
      };
    }(),
    uploadAttachmentsToS3: function () {
      var _uploadAttachmentsToS = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2(s3FileNameAndURL, files) {
        var _this4 = this;

        var loadingText, attachments, _loop, i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                loadingText = function loadingText(fileNumber, percentage) {
                  return "Uploading file ".concat(fileNumber, " of ").concat(s3FileNameAndURL.length, " - ").concat(percentage, "%");
                };

                this.$vs.loading({
                  text: s3FileNameAndURL.length > 1 ? loadingText(1, 0) : "".concat(this.uploadPercentage, "%")
                });
                _context3.prev = 2;

                if (!s3FileNameAndURL) {
                  _context3.next = 13;
                  break;
                }

                attachments = [];
                _loop =
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _loop(i) {
                  var _s3FileNameAndURL$i, storageFilename, url, file, _ref3, status;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _loop$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _s3FileNameAndURL$i = s3FileNameAndURL[i], storageFilename = _s3FileNameAndURL$i.storageFilename, url = _s3FileNameAndURL$i.url;
                          file = files[i];
                          _context2.next = 4;
                          return _this4.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
                            url: url,
                            file: file,
                            extension: storageFilename.split('.').pop(),
                            setImagePreviewHeaders: false,
                            onUploadProgress: function onUploadProgress(progressEvent) {
                              _this4.uploadPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total)); // Get loader text by class name and update the text

                              var h4 = document.getElementsByClassName('title-loading')[0];

                              if (h4) {
                                h4.innerText = s3FileNameAndURL.length > 1 ? loadingText(i + 1, _this4.uploadPercentage) : "".concat(_this4.uploadPercentage, "%");
                              }
                            }
                          });

                        case 4:
                          _ref3 = _context2.sent;
                          status = _ref3.status;
                          if (status === 200) attachments.push({
                            file: file,
                            storageFilename: storageFilename,
                            originalFilename: file.name
                          });

                        case 7:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _loop, this);
                });
                i = 0;

              case 7:
                if (!(i < s3FileNameAndURL.length)) {
                  _context3.next = 12;
                  break;
                }

                return _context3.delegateYield(_loop(i), "t0", 9);

              case 9:
                i++;
                _context3.next = 7;
                break;

              case 12:
                return _context3.abrupt("return", attachments);

              case 13:
                _context3.next = 17;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t1 = _context3["catch"](2);

              case 17:
                _context3.prev = 17;
                this.$vs.loading.close();
                this.uploadPercentage = 0;
                return _context3.finish(17);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this, [[2, 15, 17, 21]]);
      }));

      return function uploadAttachmentsToS3(_x2, _x3) {
        return _uploadAttachmentsToS.apply(this, arguments);
      };
    }(),
    getAccessLabel: function getAccessLabel(isPrivate) {
      var label = this.accessOptions.find(function (option) {
        return option.value === isPrivate;
      });
      return label ? label.label : 'Public';
    },
    getLabel: function getLabel(fileLabel) {
      var label = this.fileLabelOptions.find(function (option) {
        return option.value === fileLabel;
      });
      return label ? label.label : '';
    },
    convertToLocalDateTime: function convertToLocalDateTime(dateTimeString) {
      return this.$dayjs.utc(dateTimeString).local().format('YYYY-MM-DD HH:mm');
    },
    uploadFiles: function () {
      var _uploadFiles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(_ref4) {
        var files,
            isPrivate,
            fileLabel,
            togglePrompt,
            s3FileNameAndURL,
            attachments,
            payload,
            _ref5,
            data,
            _args4 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                files = _ref4.files, isPrivate = _ref4.isPrivate, fileLabel = _ref4.fileLabel;
                togglePrompt = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;
                _context4.prev = 2;
                _context4.next = 5;
                return this.generateS3NameAndURL(files);

              case 5:
                s3FileNameAndURL = _context4.sent;
                _context4.next = 8;
                return this.uploadAttachmentsToS3(s3FileNameAndURL, files);

              case 8:
                _context4.t0 = _context4.sent;

                if (_context4.t0) {
                  _context4.next = 11;
                  break;
                }

                _context4.t0 = [];

              case 11:
                attachments = _context4.t0;

                if (!this.isEdit) {
                  _context4.next = 23;
                  break;
                }

                payload = {
                  incidentId: this.value.incidentId || null,
                  files: attachments.map(function (attachment, index) {
                    return {
                      storageFilename: attachment.storageFilename,
                      originalFilename: attachment.originalFilename,
                      isPrivate: isPrivate[index],
                      fileLabel: fileLabel[index]
                    };
                  })
                };
                _context4.next = 16;
                return this.$store.dispatch('incidents/saveFiles', payload);

              case 16:
                _context4.next = 18;
                return this.$store.dispatch('incidents/getIncidentFiles', this.value.incidentId);

              case 18:
                _ref5 = _context4.sent;
                data = _ref5.data;
                this.value.files = data.payload.files;
                _context4.next = 24;
                break;

              case 23:
                this.value.files = _toConsumableArray(this.value.files || []).concat(_toConsumableArray(attachments.map(function (attachment, index) {
                  return _objectSpread({}, attachment, {
                    fileId: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_10__["getUniqueIdV4"])(),
                    isPrivate: isPrivate[index],
                    fileLabel: fileLabel[index]
                  });
                })));

              case 24:
                this.$vs.notify({
                  time: 8000,
                  color: 'success',
                  title: 'Success',
                  text: 'Files uploaded successfully'
                });
                if (togglePrompt) this.toggleFileUploadPrompt();
                _context4.next = 31;
                break;

              case 28:
                _context4.prev = 28;
                _context4.t1 = _context4["catch"](2);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: _context4.t1.response.data.message || _context4.t1.message
                });

              case 31:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this, [[2, 28]]);
      }));

      return function uploadFiles(_x4) {
        return _uploadFiles.apply(this, arguments);
      };
    }(),
    updateFile: function () {
      var _updateFile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4(fileData) {
        var payload, _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (!this.isEdit) {
                  _context5.next = 13;
                  break;
                }

                this.$vs.loading();
                payload = {
                  incidentId: this.value.incidentId || null,
                  files: [{
                    fileId: fileData.fileId,
                    isPrivate: fileData.isPrivate !== 'private' ? null : 'private',
                    fileLabel: fileData.fileLabel
                  }]
                };
                _context5.next = 6;
                return this.$store.dispatch('incidents/updateIncidentFile', payload);

              case 6:
                _context5.next = 8;
                return this.$store.dispatch('incidents/getIncidentFiles', this.value.incidentId);

              case 8:
                _ref6 = _context5.sent;
                data = _ref6.data;
                this.value.files = data.payload.files;
                _context5.next = 14;
                break;

              case 13:
                this.value.files = this.value.files.map(function (file) {
                  if (file.fileId === fileData.fileId) {
                    return _objectSpread({}, file, {
                      isPrivate: fileData.isPrivate,
                      fileLabel: fileData.fileLabel
                    });
                  }

                  return file;
                });

              case 14:
                this.toggleFileUploadPrompt();
                _context5.next = 20;
                break;

              case 17:
                _context5.prev = 17;
                _context5.t0 = _context5["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: _context5.t0.response.data.message || _context5.t0.message
                });

              case 20:
                _context5.prev = 20;
                this.$vs.loading.close();
                return _context5.finish(20);

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4, this, [[0, 17, 20, 23]]);
      }));

      return function updateFile(_x5) {
        return _updateFile.apply(this, arguments);
      };
    }(),
    deleteFile: function deleteFile(fileId) {
      this.$vs.dialog({
        color: 'danger',
        title: 'Delete File',
        text: 'Are you sure you want to delete this file?',
        accept: this.deleteFileFromIncident.bind(this, fileId)
      });
    },
    deleteFileFromIncident: function () {
      var _deleteFileFromIncident = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5(fileId) {
        var _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;

                if (!this.isEdit) {
                  _context6.next = 12;
                  break;
                }

                this.$vs.loading();
                _context6.next = 5;
                return this.$store.dispatch('incidents/deleteIncidentFile', fileId);

              case 5:
                _context6.next = 7;
                return this.$store.dispatch('incidents/getIncidentFiles', this.value.incidentId);

              case 7:
                _ref7 = _context6.sent;
                data = _ref7.data;
                this.value.files = data.payload.files;
                _context6.next = 13;
                break;

              case 12:
                this.value.files = this.value.files.filter(function (file) {
                  return file.fileId !== fileId;
                });

              case 13:
                _context6.next = 18;
                break;

              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: _context6.t0.response.data.message || _context6.t0.message
                });

              case 18:
                _context6.prev = 18;
                this.$vs.loading.close();
                return _context6.finish(18);

              case 21:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5, this, [[0, 15, 18, 21]]);
      }));

      return function deleteFileFromIncident(_x6) {
        return _deleteFileFromIncident.apply(this, arguments);
      };
    }(),
    editFile: function editFile(fileId) {
      var fileData = this.value.files.find(function (file) {
        return file.fileId === fileId;
      });
      this.toggleFileUploadPrompt(fileData);
    },
    toggleMediaPreview: function toggleMediaPreview() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.mediaPreview = {
        isActive: !this.mediaPreview.isActive,
        data: data
      };
    },
    downloadFile: function downloadFile(file) {
      var fileValue = file.file ? file.file : file;
      var extension = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_10__["getSelectedFileExtension"])(fileValue, ['name', 'originalFilename', 'storageFilename']);

      if (extension === 'pdf') {
        var url = fileValue.storageFileUrl || URL.createObjectURL(fileValue);
        window.open(url, '_blank');
        return;
      }

      var link = document.createElement('a');
      link.href = fileValue.storageFileUrl || URL.createObjectURL(fileValue);
      link.download = fileValue.originalFilename || fileValue.name; // Start download of file

      link.click(); // Free up resources

      setTimeout(function () {
        URL.revokeObjectURL(link.href);
      }, 100); // Remove link from DOM

      link.remove();
    },
    onDrop: function onDrop(event) {
      var files = _toConsumableArray(event.dataTransfer.files);

      var isPrivate = [];
      var fileLabel = [];

      for (var i = 0; i < files.length; i++) {
        isPrivate.push(null);
        fileLabel.push(null);
      }

      if (files.length > 0) {
        this.uploadFiles({
          files: files,
          isPrivate: isPrivate,
          fileLabel: fileLabel
        }, false);
      }
    },
    dragNdrop: function dragNdrop(event) {
      var files = event.target.files;
      var filesHolder = [];
      var isPrivate = [];
      var fileLabel = [];

      for (var i = 0; i < files.length; i++) {
        filesHolder.push(files[i]);
        isPrivate.push(null);
        fileLabel.push(null);
      }

      this.uploadFiles({
        files: filesHolder,
        isPrivate: isPrivate,
        fileLabel: fileLabel
      }, false);
    },
    openFileSelect: function openFileSelect() {
      this.$refs.fileSelect.click();
    },
    copyToClipboard: function () {
      var _copyToClipboard = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6() {
        var response, linkArray, linkString;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return this.$store.dispatch('incidents/getLinksForFiles', {
                  incidentId: this.value.incidentId,
                  files: this.selectedFiles.map(function (file) {
                    return {
                      id: file.fileId
                    };
                  })
                });

              case 3:
                response = _context7.sent;

                if (!(response.status === 200)) {
                  _context7.next = 11;
                  break;
                }

                linkArray = response.data.payload.files.map(function (_ref8) {
                  var link = _ref8.link;
                  return link;
                });
                linkString = linkArray.join('\n\n'); // Easier to separate multiple links.

                _context7.next = 9;
                return this.$copyText(linkString);

              case 9:
                this.selectedFiles = [];
                this.$vs.notify({
                  color: 'success',
                  title: 'Success',
                  text: 'Copied to clipboard!'
                });

              case 11:
                _context7.next = 16;
                break;

              case 13:
                _context7.prev = 13;
                _context7.t0 = _context7["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_10__["getApiErrorMsg"])(_context7.t0)
                });

              case 16:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee6, this, [[0, 13]]);
      }));

      return function copyToClipboard() {
        return _copyToClipboard.apply(this, arguments);
      };
    }()
  },
  watch: {
    'value.files': {
      handler: function handler() {
        this.selectedFiles = [];
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kenjiuno_msgreader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kenjiuno/msgreader */ "./node_modules/@kenjiuno/msgreader/lib/index.js");
/* harmony import */ var _kenjiuno_msgreader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_kenjiuno_msgreader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _kenjiuno_decompressrtf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kenjiuno/decompressrtf */ "./node_modules/@kenjiuno/decompressrtf/lib/index.js");
/* harmony import */ var _kenjiuno_decompressrtf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_kenjiuno_decompressrtf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rtf_stream_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rtf-stream-parser */ "./node_modules/rtf-stream-parser/dist/src/index.js");
/* harmony import */ var rtf_stream_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rtf_stream_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var iconv_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! iconv-lite */ "./node_modules/iconv-lite/lib/index.js");
/* harmony import */ var iconv_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(iconv_lite__WEBPACK_IMPORTED_MODULE_9__);




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) { var sourceSymbolKeys = _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MediaPreview',
  components: {
    Skeleton: function Skeleton() {
      return __webpack_require__.e(/*! import() */ 137).then(__webpack_require__.t.bind(null, /*! primevue/skeleton */ "./node_modules/primevue/skeleton/index.js", 7));
    }
  },
  props: {
    isDialogActive: {
      type: Boolean,
      default: false
    },
    fileData: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    fileType: function fileType() {
      if (this.fileData) {
        var _this$fileData = this.fileData,
            storageFilename = _this$fileData.storageFilename,
            originalFilename = _this$fileData.originalFilename;
        var extension = storageFilename ? storageFilename.split('.').pop() : originalFilename.split('.').pop();
        return _config_constants__WEBPACK_IMPORTED_MODULE_3__["default"].fileTypes[extension.toLowerCase()];
      }

      return '';
    },
    fileURL: function fileURL() {
      var validTypes = ['video', 'image', 'pdf', 'doc', 'xls'];

      if (this.fileData && validTypes.includes(this.fileType) && (this.fileData.storageFileUrl || this.fileData.file)) {
        if (this.docTypes.includes(this.fileType)) {
          // Encode file url
          var encodedFileUrl = encodeURIComponent(this.fileData.storageFileUrl || window.URL.createObjectURL(this.fileData.file)); // Return office file preview url

          return "https://view.officeapps.live.com/op/embed.aspx?src=".concat(encodedFileUrl);
        }

        return this.fileData.storageFileUrl || window.URL.createObjectURL(this.fileData.file);
      }

      return '';
    }
  },
  data: function data() {
    return {
      docTypes: ['doc', 'xls'],
      isImageLoading: false,
      isMsgLoading: false,
      rtf: '',
      html: '',
      msgFile: {}
    };
  },
  created: function created() {
    this.isImageLoading = this.fileType === 'image';

    if (this.fileType === 'msg') {
      this.isMsgLoading = true;
      this.msgFilePreview();
    }
  },
  methods: {
    onClose: function onClose() {
      this.$emit('close');
    },
    onImageLoad: function onImageLoad() {
      this.isImageLoading = false;
    },
    msgFilePreview: function msgFilePreview() {
      var _this = this;

      /* 
        REFERENCE:
        https://github.com/HiraokaHyperTools/msgreader_demo2/blob/master/app/src/App.tsx
        https://github.com/HiraokaHyperTools/msgreader_demo3/blob/master/app/src/App.tsx
       */
      axios__WEBPACK_IMPORTED_MODULE_4___default()({
        method: 'get',
        url: this.fileData.storageFileUrl,
        responseType: 'arraybuffer'
      }).then(function (response) {
        var msgRead = new _kenjiuno_msgreader__WEBPACK_IMPORTED_MODULE_5___default.a(response.data);

        var _msgRead$getFileData = msgRead.getFileData(),
            compressedRtf = _msgRead$getFileData.compressedRtf,
            rest = _objectWithoutProperties(_msgRead$getFileData, ["compressedRtf"]);

        _this.msgFile = rest;

        if (rest.recipients && rest.recipients.length > 0) {
          var toEmails = [];
          var ccEmails = [];
          var bccEmails = [];
          rest.recipients.forEach(function (item) {
            if (item.recipType === 'to') {
              toEmails.push(item.name);
            } else if (item.recipType === 'cc') {
              ccEmails.push(item.name);
            } else if (item.recipType === 'bcc') {
              bccEmails.push(item.name);
            }
          });
          _this.msgFile.to = toEmails.join(', ');
          _this.msgFile.cc = ccEmails.join(', ');
          _this.msgFile.bcc = bccEmails.join(', ');
        }

        if (rest.attachments && rest.attachments.length > 0) {
          _this.msgFile.attachments = rest.attachments.map(function (item) {
            var attachmentEntity = msgRead.getAttachment(item);
            return {
              fileName: attachmentEntity.fileName,
              downloadUrl: URL.createObjectURL(new Blob([attachmentEntity.content]))
            };
          });
        }

        if (compressedRtf) {
          var rtfBlob = Object(_kenjiuno_decompressrtf__WEBPACK_IMPORTED_MODULE_6__["decompressRTF"])(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(compressedRtf));
          _this.rtf = iconv_lite__WEBPACK_IMPORTED_MODULE_9___default.a.decode(buffer__WEBPACK_IMPORTED_MODULE_7__["Buffer"].from(rtfBlob), 'latin1');
        } else {
          _this.rtf = '';
        }

        _this.isMsgLoading = false;
      });
    }
  },
  watch: {
    rtf: {
      handler: function handler() {
        if (this.fileType !== 'msg') return;

        if (this.rtf.length !== 0) {
          try {
            var result = Object(rtf_stream_parser__WEBPACK_IMPORTED_MODULE_8__["deEncapsulateSync"])(this.rtf, {
              decode: iconv_lite__WEBPACK_IMPORTED_MODULE_9___default.a.decode
            });
            this.html = result.text + '';
          } catch (ex) {
            this.html = ex + '';
          }
        } else {
          this.html = '';
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=template&id=67f28f7c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=template&id=67f28f7c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
      active: _vm.isPromptActive,
      "is-valid": _vm.isFormValid
    },
    on: {
      cancel: _vm.onClose,
      accept: _vm.onAccept,
      close: _vm.onClose
    }
  }, [!_vm.isEdit ? _c("div", {
    staticClass: "vx-col w-full",
    attrs: {
      id: "file-input"
    }
  }, [_c("vx-input-group", {
    staticClass: "mb-base"
  }, [_c("div", {
    staticClass: "vs-component vs-con-input-label vs-input w-full vs-input-primary"
  }, [_c("div", {
    staticClass: "vs-con-input"
  }, [_c("input", {
    ref: "fileUpload",
    staticClass: "vs-inputx vs-input--input normal hasValue",
    attrs: {
      type: "file",
      multiple: ""
    },
    on: {
      change: _vm.fileSelected
    }
  })])])])], 1) : _vm._e(), _vm._v(" "), _vm.filesHolder.length > 0 ? _vm._l(_vm.filesHolder, function (file, index) {
    return _c("div", {
      key: "".concat(index, "-").concat(file.name || file.originalFilename),
      staticClass: "vx-row flex justify-evenly items-center"
    }, [_c("div", {
      staticClass: "vx-col w-1/4"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v("Access")]), _vm._v(" "), _c("Dropdown", {
      staticClass: "mb-4 md:mb-0",
      staticStyle: {
        background: "#fff",
        width: "100%"
      },
      attrs: {
        options: _vm.accessOptions,
        optionLabel: "label",
        optionValue: "value",
        appendTo: "body"
      },
      model: {
        value: _vm.isPrivate[index],
        callback: function callback($$v) {
          _vm.$set(_vm.isPrivate, index, $$v);
        },
        expression: "isPrivate[index]"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col w-1/4"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v("File Label\n          "), _c("vs-button", {
      staticStyle: {
        padding: "0",
        "margin-left": "1rem"
      },
      attrs: {
        color: "warning",
        type: "flat",
        size: "small"
      },
      on: {
        click: function click($event) {
          return _vm.clearLabel(index);
        }
      }
    }, [_vm._v("\n            Clear\n          ")])], 1), _vm._v(" "), _c("Dropdown", {
      staticClass: "mb-4 md:mb-0",
      staticStyle: {
        background: "#fff",
        width: "100%"
      },
      attrs: {
        options: _vm.fileLabelOptions,
        optionLabel: "label",
        optionValue: "value",
        appendTo: "body"
      },
      model: {
        value: _vm.fileLabel[index],
        callback: function callback($$v) {
          _vm.$set(_vm.fileLabel, index, $$v);
        },
        expression: "fileLabel[index]"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col w-1/4 flex items-center"
    }, [_vm.getFileType(file) === "image" ? _c("ImagePreview", {
      attrs: {
        src: _vm.getImageURL(file),
        alt: "img",
        imageStyle: "object-fit: contain; width: 50px; min-height: 50px",
        preview: ""
      }
    }) : _c("vs-icon", {
      staticClass: "text-2xl",
      attrs: {
        icon: _vm.getFileIcon(file)
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "ml-2"
    }, [_vm._v("\n          " + _vm._s((file.file ? file.file.name : file.name) || file.originalFilename) + "\n        ")])], 1), _vm._v(" "), !_vm.isEdit ? _c("div", {
      staticClass: "vx-col w-1/4 flex items-center justify-end"
    }, [_c("vs-button", {
      staticClass: "ml-2",
      attrs: {
        color: "primary",
        type: "border",
        icon: "delete"
      },
      on: {
        click: function click($event) {
          return _vm.removeFile(index);
        }
      }
    })], 1) : _vm._e()]);
  }) : [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("span", {
    staticClass: "text-gray-500"
  }, [_vm._v("No Files Found")])])])]], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=template&id=6c654afe&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=template&id=6c654afe&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mt-4"
  }, [_c("vx-card", [!_vm.isPublicUrl ? _c("div", {
    staticClass: "vx-row flex justify-end"
  }, [_c("div", {
    staticClass: "vx-col flex items-center"
  }, [_vm.selectedFiles.length > 0 ? _c("vs-button", {
    staticClass: "ml-4",
    attrs: {
      color: "primary",
      type: "border",
      icon: "content_copy",
      size: "small"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.copyToClipboard.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Copy links\n        ")]) : _vm._e(), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "border",
      size: "small",
      icon: "add"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.toggleFileUploadPrompt();
      }
    }
  }, [_vm._v("\n          Upload files\n        ")])], 1)]) : _vm._e(), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", [(_vm.value.files || []).length > 0 || (_vm.publicFiles || []).length > 0 ? [_c("DataTable", {
    key: _vm.defaultKey,
    staticClass: "w-full",
    attrs: {
      value: _vm.filesToDisplay,
      filterDisplay: "row",
      filters: _vm.filter,
      loading: _vm.loading,
      responsiveLayout: "scroll",
      lazy: true,
      selection: _vm.selectedFiles
    },
    on: {
      "update:selection": function updateSelection($event) {
        _vm.selectedFiles = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }], null, false, 545229396)
  }, [_c("Column", {
    attrs: {
      selectionMode: "multiple",
      headerStyle: {
        width: "3em"
      },
      hidden: _vm.isPublicUrl
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "",
      headerStyle: {
        width: "0.5rem"
      }
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var data = _ref.data;
        return [_c("div", {
          staticClass: "flex items-center gap-1"
        }, [_c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "file_download",
            size: "small"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.downloadFile(data);
            }
          }
        }), _vm._v(" "), !_vm.isPublicUrl ? _c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "delete",
            size: "small"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.deleteFile(data.fileId);
            }
          }
        }) : _vm._e(), _vm._v(" "), !_vm.isPublicUrl ? _c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "edit",
            size: "small"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.editFile(data.fileId);
            }
          }
        }) : _vm._e(), _vm._v(" "), _vm.isViewable(data) ? _c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "visibility",
            size: "small"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.toggleMediaPreview(data);
            }
          }
        }) : _vm._e()], 1)];
      }
    }], null, false, 1130172459)
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "isPrivate",
      header: "Access",
      showFilterMenu: false,
      sortable: false,
      hidden: _vm.isPublicUrl
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var isPrivate = _ref2.data.isPrivate;
        return [_c("div", [_c("span", [_vm._v("\n                  " + _vm._s(_vm.getAccessLabel(isPrivate)) + "\n                ")])])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref3) {
        _objectDestructuringEmpty(_ref3);

        return [_c("Dropdown", {
          staticClass: "p-column-filter",
          attrs: {
            options: _vm.accessOptions,
            dataKey: "uniqueId",
            placeholder: "Access",
            optionLabel: "label",
            optionValue: "value",
            showClear: true,
            appendTo: "body"
          },
          model: {
            value: _vm.filter["isPrivate"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["isPrivate"], "value", $$v);
            },
            expression: "filter['isPrivate'].value"
          }
        })];
      }
    }], null, false, 1449920289)
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "fileLabel",
      header: "File Label",
      showFilterMenu: false,
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var fileLabel = _ref4.data.fileLabel;
        return [_c("div", [_c("span", [_vm._v("\n                  " + _vm._s(_vm.getLabel(fileLabel)) + "\n                ")])])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref5) {
        _objectDestructuringEmpty(_ref5);

        return [_c("Dropdown", {
          staticClass: "p-column-filter",
          attrs: {
            options: _vm.fileLabelOptions,
            dataKey: "uniqueId",
            placeholder: "Label",
            optionLabel: "label",
            optionValue: "value",
            showClear: true,
            appendTo: "body"
          },
          model: {
            value: _vm.filter["fileLabel"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["fileLabel"], "value", $$v);
            },
            expression: "filter['fileLabel'].value"
          }
        })];
      }
    }], null, false, 4162146196)
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "",
      header: "File Name",
      showFilterMenu: false,
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref6) {
        var _ref6$data = _ref6.data,
            originalFilename = _ref6$data.originalFilename,
            storageFilename = _ref6$data.storageFilename;
        return [_c("div", [_c("span", [_vm._v("\n                  " + _vm._s(originalFilename ? originalFilename : storageFilename) + "\n                ")])])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref7) {
        _objectDestructuringEmpty(_ref7);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            placeholder: "File Name",
            showClear: true
          },
          model: {
            value: _vm.filter["fileName"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["fileName"], "value", $$v);
            },
            expression: "filter['fileName'].value"
          }
        })];
      }
    }], null, false, 1450562984)
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "createdAt",
      header: "Uploaded Time",
      showFilterMenu: false,
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref8) {
        var createdAt = _ref8.data.createdAt;
        return [_c("div", [_c("span", [_vm._v("\n                  " + _vm._s(createdAt ? _vm.convertToLocalDateTime(createdAt) : "") + "\n                ")])])];
      }
    }], null, false, 968837216)
  })], 1)] : !_vm.isPublicUrl ? [_c("Panel", {
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
            icon: "file_upload"
          },
          on: {
            click: _vm.openFileSelect
          }
        })], 1)])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", [_c("span", {
    staticClass: "drag-box"
  }, [_c("input", {
    ref: "fileSelect",
    attrs: {
      type: "file",
      multiple: ""
    },
    on: {
      change: function change(event) {
        return _vm.dragNdrop(event);
      },
      dragover: function dragover(e) {
        return e.preventDefault();
      },
      dragenter: function dragenter(e) {
        return e.preventDefault();
      },
      drop: function drop($event) {
        $event.preventDefault();
        return _vm.onDrop.apply(null, arguments);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "vx-row justify-center dragndrop"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("span", {
    staticClass: "text-gray-500"
  }, [_vm._v("Drag and drop files to upload or click here to\n                    upload")])])])])])])] : _vm._e(), _vm._v(" "), !_vm.isPublicUrl && _vm.isDragOverlayActive && _vm.value.files && _vm.value.files.length > 0 ? _c("div", {
    staticClass: "absolute inset-0 bg-gray-200 opacity-70 flex items-center justify-center",
    on: {
      dragover: function dragover(e) {
        return e.preventDefault();
      },
      dragenter: function dragenter(e) {
        return e.preventDefault();
      },
      drop: function drop($event) {
        $event.preventDefault();
        return _vm.onDrop.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "flex flex-col items-center justify-center"
  }, [_c("vs-icon", {
    staticClass: "text-6xl",
    attrs: {
      icon: "cloud_upload",
      color: "primary",
      size: "large"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-xl font-bold"
  }, [_vm._v("Drop files here")])], 1)]) : _vm._e()], 2)], 1), _vm._v(" "), _c("incident-file-upload-popup", {
    attrs: {
      isPromptActive: _vm.fileUploadPrompt.isPromptActive,
      fileData: _vm.fileUploadPrompt.data
    },
    on: {
      onClose: _vm.toggleFileUploadPrompt,
      onAccept: _vm.uploadFiles,
      "onAccept:Update": _vm.updateFile
    }
  }), _vm._v(" "), _vm.mediaPreview.isActive ? _c("media-preview", {
    attrs: {
      isDialogActive: _vm.mediaPreview.isActive,
      fileData: _vm.mediaPreview.data
    },
    on: {
      close: function close($event) {
        return _vm.toggleMediaPreview();
      }
    }
  }) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=template&id=7df07bb5&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=template&id=7df07bb5&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "dialog",
    style: {
      width: "80vw"
    },
    attrs: {
      visible: _vm.isDialogActive,
      closable: false,
      modal: true,
      breakpoints: {
        "960px": "50vw",
        "640px": "80vw"
      }
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-full flex items-center justify-end"
        }, [_c("vs-icon", {
          staticClass: "cursor-pointer ml-2",
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
    }])
  }, [_vm._v(" "), [_c("div", {
    staticClass: "w-full"
  }, [_vm.fileType === "image" ? _c("div", {
    staticClass: "w-full flex items-center justify-center"
  }, [_c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isImageLoading,
      expression: "!isImageLoading"
    }],
    staticClass: "w-full h-full",
    attrs: {
      src: _vm.fileURL,
      alt: _vm.fileData.originalFilename
    },
    on: {
      load: _vm.onImageLoad
    }
  }), _vm._v(" "), _vm.isImageLoading ? [_c("Skeleton", {
    attrs: {
      height: "50vh"
    }
  })] : _vm._e()], 2) : _vm.fileType === "video" ? _c("div", {
    staticClass: "w-full flex items-center justify-center"
  }, [_c("video", {
    staticClass: "w-full h-full",
    attrs: {
      src: _vm.fileURL,
      alt: _vm.fileData.originalFilename,
      controls: ""
    }
  })]) : _vm.fileType === "pdf" || _vm.docTypes.includes(_vm.fileType) ? _c("div", {
    staticClass: "iframe-wrapper"
  }, [_c("iframe", {
    staticClass: "iframe",
    attrs: {
      src: _vm.fileURL,
      alt: _vm.fileData.originalFilename
    }
  })]) : _vm.fileType === "msg" ? _c("div", {
    staticClass: "w-full message-details"
  }, [!_vm.isMsgLoading && _vm.html ? _c("div", [_c("table", [_c("tbody", [_vm.msgFile.messageDeliveryTime ? _c("tr", [_c("th", [_vm._v("Time:")]), _vm._v(" "), _c("td", [_vm._v("\n                  " + _vm._s(_vm.msgFile.messageDeliveryTime) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.msgFile.senderName ? _c("tr", [_c("th", [_vm._v("From:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.msgFile.senderName))])]) : _vm._e(), _vm._v(" "), _vm.msgFile.to ? _c("tr", [_c("th", [_vm._v("To:")]), _vm._v(" "), _c("td", [_vm._v("\n                  " + _vm._s(_vm.msgFile.to) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.msgFile.cc ? _c("tr", [_c("th", [_vm._v("Cc:")]), _vm._v(" "), _c("td", [_vm._v("\n                  " + _vm._s(_vm.msgFile.cc) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.msgFile.bcc ? _c("tr", [_c("th", [_vm._v("Bcc:")]), _vm._v(" "), _c("td", [_vm._v("\n                  " + _vm._s(_vm.msgFile.bcc) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.msgFile.subject ? _c("tr", [_c("th", [_vm._v("Subject:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.msgFile.subject))])]) : _vm._e(), _vm._v(" "), _vm.msgFile.attachments && _vm.msgFile.attachments.length > 0 ? _c("tr", [_c("th", {
    staticClass: "align-text-top"
  }, [_vm._v("Attachments:")]), _vm._v(" "), _c("td", {
    staticClass: "flex flex-col"
  }, _vm._l(_vm.msgFile.attachments, function (item, index) {
    return _c("span", {
      key: index
    }, [_vm._v("\n                    " + _vm._s(item.fileName) + " -\n                    "), _c("a", {
      attrs: {
        download: item.fileName,
        href: item.downloadUrl
      }
    }, [_vm._v("\n                      Download\n                    ")])]);
  }), 0)]) : _vm._e()])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.html)
    }
  })], 1) : _vm.isMsgLoading ? _c("div", [_c("Skeleton", {
    attrs: {
      height: "50vh"
    }
  })], 1) : _vm._e()]) : _vm._e()])]], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#file-input input[type=file][data-v-67f28f7c]::-webkit-file-upload-button {\n  display: none;\n}\n[data-v-67f28f7c] .vs-dialog {\n  max-width: 50% !important;\n}\n[data-v-67f28f7c] .vs-dialog .vs-dialog-text {\n  max-height: 50vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-dropdown-panel {\n  z-index: 52005 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-6c654afe] .p-panel-icons {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n}[dir][data-v-6c654afe] .p-panel-icons {\n  padding: 0 1rem;\n}\n[data-v-6c654afe] .p-column-filter-clear-button {\n  display: none;\n}\n[data-v-6c654afe] .vs-button--icon {\n  z-index: auto;\n}\n[dir] .bg-gray-200[data-v-6c654afe] {\n  background-color: rgb(229, 231, 235);\n}\n.opacity-70[data-v-6c654afe] {\n  opacity: 0.7;\n}\n[data-v-6c654afe] .p-panel-icons {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n}\n[dir][data-v-6c654afe] .p-panel-icons {\n  padding: 0 1rem;\n}\n.drag-box[data-v-6c654afe] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  color: #999;\n  display: inline-block;\n  transition: transform 0.3s;\n}\n[dir] .drag-box[data-v-6c654afe] {\n  margin: 0 auto;\n}\n.drag-box input[type=file][data-v-6c654afe] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  top: 0;\n}\n[dir=ltr] .drag-box input[type=file][data-v-6c654afe] {\n  left: 0;\n}\n[dir=rtl] .drag-box input[type=file][data-v-6c654afe] {\n  right: 0;\n}\n.dragndrop[data-v-6c654afe] {\n  line-height: 95px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iframe-wrapper[data-v-7df07bb5] {\n  position: relative; /* 16:9 */\n  height: 0;\n}[dir] .iframe-wrapper[data-v-7df07bb5] {\n  padding-bottom: 56.25%;\n  padding-top: 25px;\n}\n.iframe[data-v-7df07bb5] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n[dir=ltr] .iframe[data-v-7df07bb5] {\n  left: 0;\n}\n[dir=rtl] .iframe[data-v-7df07bb5] {\n  right: 0;\n}\n.msg-content[data-v-7df07bb5] {\n  overflow-x: hidden; /* Hide horizontal scrollbar */\n}\n[dir] .msg-content[data-v-7df07bb5] {\n  border: 1px solid #eee;\n  padding: 15px;\n}\n.message-details th[data-v-7df07bb5] {\n  font-weight: bold;\n  font-size: 1rem;\n}\n[dir] .message-details th[data-v-7df07bb5] {\n  padding: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IncidentFileUploadPopup_vue_vue_type_template_id_67f28f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IncidentFileUploadPopup.vue?vue&type=template&id=67f28f7c&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=template&id=67f28f7c&scoped=true&");
/* harmony import */ var _IncidentFileUploadPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IncidentFileUploadPopup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IncidentFileUploadPopup_vue_vue_type_style_index_0_id_67f28f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true&");
/* harmony import */ var _IncidentFileUploadPopup_vue_vue_type_style_index_1_id_67f28f7c_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss& */ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _IncidentFileUploadPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IncidentFileUploadPopup_vue_vue_type_template_id_67f28f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IncidentFileUploadPopup_vue_vue_type_template_id_67f28f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67f28f7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFileUploadPopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_0_id_67f28f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=0&id=67f28f7c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_0_id_67f28f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_0_id_67f28f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_0_id_67f28f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_0_id_67f28f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_1_id_67f28f7c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=style&index=1&id=67f28f7c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_1_id_67f28f7c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_1_id_67f28f7c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_1_id_67f28f7c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_style_index_1_id_67f28f7c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=template&id=67f28f7c&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=template&id=67f28f7c&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_template_id_67f28f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFileUploadPopup.vue?vue&type=template&id=67f28f7c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFileUploadPopup.vue?vue&type=template&id=67f28f7c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_template_id_67f28f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFileUploadPopup_vue_vue_type_template_id_67f28f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IncidentFilesTab_vue_vue_type_template_id_6c654afe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IncidentFilesTab.vue?vue&type=template&id=6c654afe&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=template&id=6c654afe&scoped=true&");
/* harmony import */ var _IncidentFilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IncidentFilesTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IncidentFilesTab_vue_vue_type_style_index_0_id_6c654afe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IncidentFilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IncidentFilesTab_vue_vue_type_template_id_6c654afe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IncidentFilesTab_vue_vue_type_template_id_6c654afe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c654afe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/safety/components/IncidentFilesTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFilesTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_style_index_0_id_6c654afe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=style&index=0&id=6c654afe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_style_index_0_id_6c654afe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_style_index_0_id_6c654afe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_style_index_0_id_6c654afe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_style_index_0_id_6c654afe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=template&id=6c654afe&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=template&id=6c654afe&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_template_id_6c654afe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentFilesTab.vue?vue&type=template&id=6c654afe&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue?vue&type=template&id=6c654afe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_template_id_6c654afe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentFilesTab_vue_vue_type_template_id_6c654afe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/MediaPreview.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/MediaPreview.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaPreview_vue_vue_type_template_id_7df07bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaPreview.vue?vue&type=template&id=7df07bb5&scoped=true& */ "./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=template&id=7df07bb5&scoped=true&");
/* harmony import */ var _MediaPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaPreview.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MediaPreview_vue_vue_type_style_index_0_id_7df07bb5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true& */ "./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MediaPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaPreview_vue_vue_type_template_id_7df07bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaPreview_vue_vue_type_template_id_7df07bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7df07bb5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/safety/components/MediaPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_style_index_0_id_7df07bb5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=style&index=0&id=7df07bb5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_style_index_0_id_7df07bb5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_style_index_0_id_7df07bb5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_style_index_0_id_7df07bb5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_style_index_0_id_7df07bb5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=template&id=7df07bb5&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=template&id=7df07bb5&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_template_id_7df07bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaPreview.vue?vue&type=template&id=7df07bb5&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/MediaPreview.vue?vue&type=template&id=7df07bb5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_template_id_7df07bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaPreview_vue_vue_type_template_id_7df07bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 4:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=33.js.map