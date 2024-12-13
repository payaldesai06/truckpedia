(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ChatWindow_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ChatWindow.vue */ "./resources/js/src/views/pages/chat/components/ChatWindow.vue");
/* harmony import */ var _components_UserList_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/UserList.vue */ "./resources/js/src/views/pages/chat/components/UserList.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatSystem',
  components: {
    ChatWindowVue: _components_ChatWindow_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    UserList: _components_UserList_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    chatLoadId: {
      type: Number,
      default: null
    },
    isLoadChatExists: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      userId: '',
      allChat: [],
      chatWindowOpen: false,
      activeChat: null,
      newMessagesNotificationChatIds: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])('auth', ['user'])),
  watch: {
    isLoadChatExists: {
      handler: function handler(val) {
        var _this = this;

        if (!val) return;
        var loadData = {
          chatType: 'load',
          loadData: {
            loadId: val.loadId,
            number: val.number,
            reference: val.reference,
            isFromLoad: val.isExists
          }
        };
        this.$nextTick(function () {
          _this.openChatWindow(val.loadId, loadData);
        });
      },
      deep: true,
      immediate: true
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //clear chat session storage on load
              sessionStorage.removeItem('openChatId');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function created() {
      return _created.apply(this, arguments);
    };
  }(),
  methods: {
    newMessagesNotificationChatId: function newMessagesNotificationChatId(newMessageChatId) {
      this.newMessagesNotificationChatIds.push(newMessageChatId);
    },
    openChatWindow: function () {
      var _openChatWindow = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(id, chatData, shouldCreate, chatId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.newMessagesNotificationChatIds = this.newMessagesNotificationChatIds.filter(function (e) {
                  return e !== (chatData.chatId || chatId);
                });
                this.chatWindowOpen = true;
                this.userId = id;
                this.$refs.chatWindow.setSelectedChatData(id, chatData);
                this.$refs.chatWindow.getMessages({
                  scroll: true
                }, shouldCreate);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function openChatWindow(_x, _x2, _x3, _x4) {
        return _openChatWindow.apply(this, arguments);
      };
    }(),
    closeChatWindow: function closeChatWindow() {
      this.chatWindowOpen = false;
      this.activeChat = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/symbol/iterator */ "./node_modules/@babel/runtime/core-js/symbol/iterator.js");
/* harmony import */ var _babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/symbol */ "./node_modules/@babel/runtime/core-js/symbol.js");
/* harmony import */ var _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ChatWindowHeader_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ChatWindowHeader.vue */ "./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue");
/* harmony import */ var _MessageInput_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MessageInput.vue */ "./resources/js/src/views/pages/chat/components/MessageInput.vue");
/* harmony import */ var _MessageItem_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MessageItem.vue */ "./resources/js/src/views/pages/chat/components/MessageItem.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_eventBus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../helpers/eventBus */ "./resources/js/src/helpers/eventBus.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../config/constants */ "./resources/js/src/config/constants.js");











function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default.a === "function" && typeof _babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default.a === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default.a === "function" && obj.constructor === _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default.a && obj !== _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_8___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatWindow',
  components: {
    ChatWindowHeaderVue: _ChatWindowHeader_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    MessageInput: _MessageInput_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    MessageItem: _MessageItem_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  props: {
    userId: {
      type: Number | String,
      required: true
    }
  },
  data: function data() {
    return {
      id: null,
      chatId: null,
      messages: [],
      chatData: '',
      prevInnerDivHeight: null,
      showNewMessageAlert: false,
      uploadPercentage: 0,
      scrollPosition: null,
      page: 1,
      pageSize: 50,
      // TODO: This is to prevent paged 2nd getMessages API being called before
      // 1st returns, however I highly doubt it's correct.
      isLoading: false,
      paginationMeta: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_13__["mapGetters"])('chat', ['chatList'])),
  mounted: function mounted() {
    var _this = this;

    // Add event listener for the scroll event
    if (this.$refs.chat && this.$refs.chat.$refs.chatBox) {
      this.$refs.chat.$refs.chatBox.addEventListener('scroll', function () {
        var chatBox = _this.$refs.chat.$refs.chatBox;
        var scrollPosition = chatBox.scrollTop;

        if (scrollPosition === _this.prevInnerDivHeight) {
          _this.showNewMessageAlert = false;
        }

        if (scrollPosition === 0) {
          _this.handlePagination();
        }
      });
    }

    _helpers_eventBus__WEBPACK_IMPORTED_MODULE_14__["EventBus"].$on(_config_constants__WEBPACK_IMPORTED_MODULE_16__["default"].socketIoEvents.newMessages, this.onNewMessage);
  },
  methods: {
    getChats: function () {
      var _getChats = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$vs.loading();
                _context.next = 3;
                return this.$store.dispatch('chat/getChats');

              case 3:
                this.$vs.loading.close();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getChats() {
        return _getChats.apply(this, arguments);
      };
    }(),
    sendFiles: function () {
      var _sendFiles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee2(files, chatId) {
        var _this2 = this;

        var allFiles, payload, s3FileNameAndURL, attachments, messagePayload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                allFiles = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_15__["getFileExtension"])(files);
                payload = {
                  chatId: chatId,
                  files: allFiles
                };
                _context2.next = 4;
                return this.$store.dispatch('chat/getUploadUrls', payload);

              case 4:
                s3FileNameAndURL = _context2.sent;
                _context2.next = 7;
                return this.uploadAttachmentsToS3(s3FileNameAndURL, files);

              case 7:
                _context2.t0 = _context2.sent;

                if (_context2.t0) {
                  _context2.next = 10;
                  break;
                }

                _context2.t0 = [];

              case 10:
                attachments = _context2.t0;
                messagePayload = {
                  chatId: this.chatId,
                  messages: attachments.map(function (attachment) {
                    return {
                      storageFilename: attachment.storageFilename,
                      originalFilename: attachment.originalFilename,
                      type: 'file'
                    };
                  })
                };
                _context2.next = 14;
                return this.$store.dispatch('chat/sendMessages', messagePayload).catch(function (error) {
                  _this2.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: error.response.data.message
                  });
                });

              case 14:
                // TODO: why we call getMessages() here?
                // NO need to call this api here
                // this.getMessages();
                this.scrollToBottom(false, true);
                this.$vs.loading.close();

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function sendFiles(_x, _x2) {
        return _sendFiles.apply(this, arguments);
      };
    }(),
    uploadAttachmentsToS3: function () {
      var _uploadAttachmentsToS = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee4(s3FileNameAndURL, files) {
        var _this3 = this;

        var _ret;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                return _context5.delegateYield(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee3() {
                  var loadingText, attachments, _loop, i;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee3$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          loadingText = function loadingText(fileNumber, percentage) {
                            return "Uploading file ".concat(fileNumber, " of ").concat(s3FileNameAndURL.length, " - ").concat(percentage, "%");
                          };

                          _this3.$vs.loading({
                            text: s3FileNameAndURL.length > 1 ? loadingText(1, 0) : "".concat(_this3.uploadPercentage, "%")
                          });

                          if (!s3FileNameAndURL) {
                            _context4.next = 12;
                            break;
                          }

                          attachments = [];
                          _loop =
                          /*#__PURE__*/
                          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _loop(i) {
                            var _s3FileNameAndURL$i, storageFilename, url, file, _ref, status;

                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _loop$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    _s3FileNameAndURL$i = s3FileNameAndURL[i], storageFilename = _s3FileNameAndURL$i.storageFilename, url = _s3FileNameAndURL$i.url;
                                    file = files[i];
                                    _context3.next = 4;
                                    return _this3.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
                                      url: url,
                                      file: file,
                                      extension: storageFilename.split('.').pop(),
                                      setImagePreviewHeaders: false,
                                      onUploadProgress: function onUploadProgress(progressEvent) {
                                        _this3.uploadPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total)); // Get loader text by class name and update the text

                                        var h4 = document.getElementsByClassName('title-loading')[0];

                                        if (h4) {
                                          h4.innerText = s3FileNameAndURL.length > 1 ? loadingText(i + 1, _this3.uploadPercentage) : "".concat(_this3.uploadPercentage, "%");
                                        }
                                      }
                                    });

                                  case 4:
                                    _ref = _context3.sent;
                                    status = _ref.status;
                                    if (status === 200) attachments.push({
                                      storageFilename: storageFilename,
                                      originalFilename: file.name
                                    });

                                  case 7:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _loop, this);
                          });
                          i = 0;

                        case 6:
                          if (!(i < s3FileNameAndURL.length)) {
                            _context4.next = 11;
                            break;
                          }

                          return _context4.delegateYield(_loop(i), "t0", 8);

                        case 8:
                          i++;
                          _context4.next = 6;
                          break;

                        case 11:
                          return _context4.abrupt("return", {
                            v: attachments
                          });

                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee3, this);
                })(), "t0", 2);

              case 2:
                _ret = _context5.t0;

                if (!(_typeof(_ret) === "object")) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", _ret.v);

              case 5:
                _context5.next = 9;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t1 = _context5["catch"](0);

              case 9:
                _context5.prev = 9;
                this.$vs.loading.close();
                this.uploadPercentage = 0;
                return _context5.finish(9);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4, this, [[0, 7, 9, 13]]);
      }));

      return function uploadAttachmentsToS3(_x3, _x4) {
        return _uploadAttachmentsToS.apply(this, arguments);
      };
    }(),
    setSelectedChatData: function setSelectedChatData(id, data) {
      this.chatData = data;
      this.id = id;
      this.page = 1;
      this.scrollPosition = null;
    },
    getMessages: function () {
      var _getMessages = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee5() {
        var _this4 = this;

        var val,
            shouldCreate,
            payload,
            _this$chatData,
            chatType,
            intercompanyData,
            _args6 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                val = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
                shouldCreate = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : false;
                // TODO: why this is always true?
                // Answer: We have set this condition to ensure that the chatUsers and other necessary data are always displayed in the headers.
                this.isLoading = true;
                payload = {
                  needChatMetaData: true,
                  page: this.page,
                  pageSize: this.pageSize
                }; // Determine the payload based on the chat type.

                if (!this.chatData) {
                  _context6.next = 21;
                  break;
                }

                _this$chatData = this.chatData, chatType = _this$chatData.chatType, intercompanyData = _this$chatData.intercompanyData;
                _context6.t0 = chatType;
                _context6.next = _context6.t0 === 'group' ? 9 : _context6.t0 === 'load' ? 12 : _context6.t0 === 'intercompany' ? 15 : 18;
                break;

              case 9:
                payload.queryChatType = 'group';
                payload.chatId = this.id;
                return _context6.abrupt("break", 21);

              case 12:
                payload.queryChatType = 'load';
                payload.loadId = this.id;
                return _context6.abrupt("break", 21);

              case 15:
                payload.queryChatType = 'intercompany';
                payload.otherCompanyId = intercompanyData.otherCompanyId || intercompanyData.syncedCompanyId || this.id;
                return _context6.abrupt("break", 21);

              case 18:
                payload.queryChatType = 'oneOnOne';
                payload.targetUserId = this.id;
                return _context6.abrupt("break", 21);

              case 21:
                // Dispatch the 'getMessages' action to retrieve chat data.
                this.$store.dispatch('chat/getMessages', payload).then(function (data) {
                  // Update chatId and messages with retrieved data.
                  _this4.chatId = data.chat.chatId;

                  if (_this4.page === 1) {
                    _this4.messages = data.messages;
                  } else {
                    _this4.messages = _toConsumableArray(_this4.messages).concat(_toConsumableArray(data.messages)).reduce(function () {
                      var unique = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                      var item = arguments.length > 1 ? arguments[1] : undefined;
                      var isExists = unique.some(function (e) {
                        return e.messageId === item.messageId;
                      });
                      if (!isExists) unique.push(item);
                      return unique;
                    }, []);
                  } //set pagination data


                  _this4.paginationMeta = data.meta; // For 'load' type chats, set chatUsers data if it's from a load.

                  if (_this4.chatData.chatType === 'load' && _this4.chatData.loadData.isFromLoad) {
                    // TODO: can anyone teach me what we are doing here? Thanks.
                    // Answer: We are setting the chat users' data to the chatUsers object, but only for the 'load' type.
                    _this4.$set(_this4.chatData, 'chatUsers', data.chat.chatUsers);
                  } // If 'intercompany' chat and shouldCreate flag is true, trigger getChats().


                  if (_this4.chatData && _this4.chatData.chatType === 'intercompany' && shouldCreate) {
                    _this4.getChats();

                    _this4.$set(_this4.chatData, 'chatUsers', data.chat.chatUsers);
                  } // If scroll flag is true, scroll to the bottom of the chat.


                  if (val.scroll) {
                    _this4.scrollToBottom(false, true);
                  }

                  if (val.scrollPosition) {
                    _this4.handleScrollPosition();
                  }
                }).catch(function (error) {
                  // Display error notification in case of an error.
                  _this4.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: error.response.data.message
                  });
                }).finally(function () {
                  // Close loading indicator when the process completes.
                  _this4.$vs.loading.close();

                  _this4.isLoading = false;
                });

              case 22:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getMessages() {
        return _getMessages.apply(this, arguments);
      };
    }(),
    // get next message
    handlePagination: function handlePagination() {
      if (!this.isLoading && this.page < this.paginationMeta.totalPage) {
        this.trackScrollPosition();
        this.page += 1;
        this.getMessages({
          scroll: false,
          scrollPosition: true
        });
      }
    },
    // track scroll position
    trackScrollPosition: function trackScrollPosition() {
      if (this.$refs.chat && this.$refs.chat.$refs.chatBox) {
        var chatBox = this.$refs.chat.$refs.chatBox;
        this.scrollPosition = chatBox.scrollHeight;
      }
    },
    // keep scroll bar at same position
    handleScrollPosition: function handleScrollPosition() {
      var _this5 = this;

      if (this.$refs.chat && this.$refs.chat.$refs.chatBox) {
        this.$nextTick(function () {
          var chatBox = _this5.$refs.chat.$refs.chatBox;
          chatBox.scrollTop = chatBox.scrollHeight - _this5.scrollPosition;
        });
      }
    },
    onNewMessage: function onNewMessage(newMessage) {
      if (newMessage.chat.chatId === this.chatId) {
        var _this$messages;

        (_this$messages = this.messages).push.apply(_this$messages, _toConsumableArray(newMessage.messages));

        this.scrollToBottom(true);
      } else {
        this.$emit('newMessagesNotificationChatId', newMessage.chat.chatId);
      }
    },
    addNewUsers: function () {
      var _addNewUsers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee6(_ref2) {
        var _this6 = this;

        var chatUsers, _ref3, chat, _chatUsers;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee6$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                chatUsers = _ref2.chatUsers;
                _context7.prev = 1;
                _context7.next = 4;
                return this.$store.dispatch('chat/addNewUsers', {
                  chatId: this.chatId,
                  chatUsers: chatUsers
                });

              case 4:
                _ref3 = _context7.sent;
                chat = _ref3.chat;

                if (chat) {
                  this.chatId = chat.chatId;
                  this.$store.commit('chat/UPDATE_CHAT_USERS', chat); // Update chat users in chatData

                  _chatUsers = (this.chatList.filter(function (_ref4) {
                    var chatId = _ref4.chatId;
                    return chatId === _this6.chatId;
                  })[0] || {
                    chatUsers: []
                  }).chatUsers;

                  if (_chatUsers.length) {
                    this.$set(this.chatData, 'chatUsers', _chatUsers);
                  } else {
                    this.chatData.chatUsers = chat.chatUsers;
                  }
                }

                _context7.next = 12;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](1);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context7.t0.response.data.message
                });

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee6, this, [[1, 9]]);
      }));

      return function addNewUsers(_x5) {
        return _addNewUsers.apply(this, arguments);
      };
    }(),
    scrollToBottom: function scrollToBottom() {
      var _this7 = this;

      var isSmoothScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var forceScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.$nextTick(function () {
        if (_this7.$refs.chat && _this7.$refs.chat.$refs.chatBox) {
          var chatBox = _this7.$refs.chat.$refs.chatBox;
          var scrollPosition = chatBox.scrollTop;
          var offset = chatBox.scrollHeight - chatBox.offsetHeight;

          if (!forceScroll) {
            if (!isSmoothScroll && scrollPosition === _this7.prevInnerDivHeight) {
              chatBox.scrollTop = chatBox.scrollHeight;
            } else if (isSmoothScroll) {
              chatBox.scrollTo({
                top: chatBox.scrollHeight,
                behavior: 'smooth'
              });
            }

            _this7.showNewMessageAlert = !isSmoothScroll && scrollPosition < _this7.prevInnerDivHeight;
          } else {
            chatBox.scrollTop = chatBox.scrollHeight;
          }

          _this7.prevInnerDivHeight = offset;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony import */ var primevue_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/listbox */ "./node_modules/primevue/listbox/index.js");
/* harmony import */ var primevue_listbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primevue_listbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatWindowHeader',
  components: {
    Listbox: primevue_listbox__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  props: {
    chatData: {
      type: Object | String,
      default: function _default() {}
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])('companyUserV2', ['getAllUsersList']), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])('chat', ['chatList']), {
    isGroupOrIntercompanyOrLoad: function isGroupOrIntercompanyOrLoad() {
      return ['group', 'intercompany', 'load'].includes(this.chatData.chatType);
    },
    chatTitle: function chatTitle() {
      switch (this.chatData.chatType) {
        case 'group':
          return this.computedName('group');

        case 'intercompany':
          return this.computedName('intercompany');

        case 'load':
          return "#".concat(this.computedName('load'));

        default:
          return '';
      }
    },
    getMultipleUsersName: function getMultipleUsersName() {
      if (this.chatData && this.chatData.chatUsers && this.chatData.chatUsers.length > 0) {
        var names = this.chatData.chatUsers.map(function (user) {
          return "".concat(user.firstName, " ").concat(user.lastName);
        }).filter(function (item) {
          return item.trim() !== '';
        });
        var firstThreeNames = names.slice(0, 5).join(', ');
        var remainingCount = names.length - 5;
        var finalString = firstThreeNames;

        if (remainingCount > 0) {
          return finalString += " +".concat(remainingCount);
        }

        return finalString;
      }
    },
    computedName: function computedName() {
      var _this = this;

      return function (type) {
        if (_this.chatData) {
          if (type === 'intercompany' && _this.chatData.intercompanyData) {
            return _this.chatData.intercompanyData.otherCompanyName;
          }

          if (type === 'group' && _this.chatData.groupData) {
            return _this.chatData.groupData.name;
          }

          if (type === 'load' && _this.chatData.loadData) {
            return _this.chatData.loadData.number;
          }
        }
      };
    },
    computedUserName: function computedUserName() {
      if (this.chatData && this.chatData.firstName) {
        return "".concat(this.chatData.firstName, " ").concat(this.chatData.lastName);
      }

      return '';
    },
    getUsersList: function getUsersList() {
      var _this2 = this;

      if (this.getAllUsersList) {
        return this.getAllUsersList.filter(function (user) {
          return ((_this2.chatData || {}).chatUsers || []).findIndex(function (u) {
            return u.userId === user.id;
          }) < 0;
        });
      }

      return [];
    },
    isAddNewUserEnable: function isAddNewUserEnable() {
      return this.chatData && (this.chatData.chatType === 'group' || this.chatData.chatType === 'load') || this.chatData.chatType === 'intercompany';
    },
    isNameUpdateAllowed: function isNameUpdateAllowed() {
      return this.chatData && this.chatData.chatType === 'group';
    }
  }),
  data: function data() {
    return {
      selectedUsers: [],
      isDropdownVisible: false,
      popupActive: false,
      // Track the popup's open state
      updateGroupName: '',
      colorx: '#848484'
    };
  },
  created: function created() {
    var _this3 = this;

    this.$nextTick(function () {
      _this3.$watch(function () {
        return _this3.$refs.op.visible;
      }, function (newVal) {
        if (!newVal) {
          _this3.selectedUsers = [];
        }
      });
    });

    if (this.getAllUsersList.length === 0) {
      this.$store.dispatch('companyUserV2/fetchAllUsers');
    }
  },
  methods: {
    toggleOverlayPanel: function toggleOverlayPanel() {
      this.$refs.op.toggle(event);
    },
    addNewUsersToChat: function addNewUsersToChat() {
      var payload = {
        chatUsers: this.selectedUsers.map(function (user) {
          return {
            userId: user.id
          };
        })
      };
      this.$emit('addNewUsers', payload);
      this.$refs.op.hide();
    },
    getInitials: function getInitials(fullName) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getInitialFromFullName"])(fullName);
    },
    // Method to toggle the popup
    openChangeChatNamePopup: function openChangeChatNamePopup() {
      this.updateGroupName = this.chatTitle;
      this.popupActive = true;
    },
    saveGroupName: function saveGroupName() {
      var _this4 = this;

      var payload = {
        chatId: this.chatData.chatId,
        name: this.updateGroupName
      };
      this.$store.dispatch('chat/changeGroupChatName', payload).then(function () {
        _this4.popupActive = false;
      });
    },
    cancelGroupName: function cancelGroupName() {
      this.popupActive = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/set */ "./node_modules/@babel/runtime/core-js/set.js");
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");










function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    toggleChatModal: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    customersList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      activeTab: 'individual',
      selectedUser: null,
      selectedUsersForGroup: [],
      groupName: '',
      selectedCustomer: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('companyUserV2', ['getAllUsersList']), Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('chat', ['chatList']), Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('auth', ['user']), {
    disabledSubmit: function disabledSubmit() {
      if (this.activeTab == 'individual') {
        return !this.selectedUser;
      } else if (this.activeTab == 'group') {
        return !this.groupName || !this.selectedUsersForGroup.length;
      } else if (this.activeTab == 'intercompany') {
        return !this.selectedCustomer;
      }
    },
    getCustomerList: function getCustomerList() {
      if (this.chatList && this.chatList.length) {
        var intercompanyChats = this.chatList.filter(function (item) {
          return item.chatType === 'intercompany';
        });

        if (intercompanyChats && intercompanyChats.length) {
          var excludedCompanyIds = intercompanyChats.map(function (chat) {
            return chat.intercompanyData.otherCompanyId;
          }); // Filter customers based on syncedCompanyId and excludedCompanyIds

          return this.customersList.filter(function (item) {
            return item.syncedCompanyId && !excludedCompanyIds.includes(item.syncedCompanyId);
          });
        }
      }

      return this.customersList.filter(function (item) {
        return item.syncedCompanyId;
      });
    },
    individualChatUsers: function individualChatUsers() {
      var _this = this;

      var filtered = (this.chatList || []).filter(function (item) {
        return item.chatType === 'oneOnOne';
      });
      return filtered.map(function (ct) {
        return _objectSpread({}, ct, {
          chatUser: ct.chatUsers ? ct.chatUsers.filter(function (cu) {
            return cu.userId != _this.user.user_id;
          })[0] : ct.chatUser ? ct.chatUser : {}
        });
      });
    },
    userList: function userList() {
      var _this2 = this;

      if (this.activeTab == 'individual') {
        var existingChatUserIds = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_8___default.a(this.individualChatUsers.map(function (item) {
          return item.chatUser.userId;
        }).flat()));

        return this.getAllUsersList.filter(function (item) {
          return item.id != _this2.user.user_id && !existingChatUserIds.includes(item.id);
        });
      } else {
        return this.getAllUsersList;
      }
    },
    localToggleChatModal: {
      get: function get() {
        return this.toggleChatModal;
      },
      set: function set(val) {
        if (!val) {
          this.closePopup();
        }
      }
    }
  }),
  methods: {
    closePopup: function closePopup() {
      this.$emit('closeChatModal');
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.activeTab = 'individual';
      this.selectedUser = null;
      this.selectedUsersForGroup = [];
      this.groupName = '';
      this.selectedCustomer = null;
    },
    handleSubmit: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        var _this3 = this;

        var groupChatUsers, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.activeTab == 'individual')) {
                  _context.next = 5;
                  break;
                }

                this.$emit('onUserSelected', this.selectedUser);
                this.selectedUser = null;
                _context.next = 13;
                break;

              case 5:
                if (!(this.activeTab == 'group')) {
                  _context.next = 12;
                  break;
                }

                groupChatUsers = this.selectedUsersForGroup.map(function (item) {
                  return {
                    userId: item.id
                  };
                });
                payload = {
                  name: this.groupName,
                  chatUsers: groupChatUsers
                };
                _context.next = 10;
                return this.$store.dispatch('chat/createGroupChat', payload).then(function () {
                  _this3.$emit('refreshChats', payload);
                }).catch(function (error) {
                  _this3.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: error.response.data.message
                  });
                }).finally(function () {
                  _this3.$vs.loading.close();
                });

              case 10:
                _context.next = 13;
                break;

              case 12:
                if (this.activeTab == 'intercompany') {
                  this.$emit('getMessage', this.selectedCustomer.syncedCompanyId, {
                    chatType: 'intercompany',
                    intercompanyData: this.selectedCustomer
                  }, true);
                }

              case 13:
                this.closePopup();

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      };
    }(),
    setActiveTab: function setActiveTab(tab) {
      this.activeTab = tab;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-emoji-picker */ "./node_modules/vue-emoji-picker/dist-module/main.js");
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EmojiWindow',
  components: {
    EmojiPicker: vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      search: ''
    };
  },
  methods: {
    insert: function insert(emoji) {
      //   this.input += emoji;
      this.$emit('addEmoji', emoji);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FileUpload',
  data: function data() {
    return {};
  },
  methods: {
    chooseFiles: function chooseFiles() {
      var fileInputElement = this.$refs.file;
      fileInputElement.click();
    },
    onFileSelect: function onFileSelect(selectedFiles) {
      if (!selectedFiles.target.files.length) {
        return;
      }

      var validFiles = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(selectedFiles.target.files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var file = _step.value;
          validFiles.push(file);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$emit('addFiles', validFiles);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EmojiWindow_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmojiWindow.vue */ "./resources/js/src/views/pages/chat/components/EmojiWindow.vue");
/* harmony import */ var _FileUpload_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileUpload.vue */ "./resources/js/src/views/pages/chat/components/FileUpload.vue");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MessageInput',
  components: {
    EmojiWindowVue: _EmojiWindow_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FileUpload: _FileUpload_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    chatId: {
      type: Number | String,
      required: true
    }
  },
  data: function data() {
    return {
      placeholderText: 'Type your message...'
    };
  },
  methods: {
    handleSendMessageOnEnter: function handleSendMessageOnEnter(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        this.sendMessage();
      }
    },
    sendMessage: function () {
      var _sendMessage = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this = this;

        var message, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                message = this.placeholderText === '' ? this.$refs.contentEditable.innerText : '';

                if (message) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                payload = {
                  chatId: this.chatId,
                  messages: [{
                    type: 'text',
                    textMessage: message
                  }]
                };
                _context.next = 6;
                return this.$store.dispatch('chat/sendMessages', payload).then(function (res) {
                  //update last message time without calling getChat API
                  _this.$store.commit('chat/UPDATE_CHAT_LAST_MSG_DATE_TIME', {
                    chatId: _this.chatId,
                    isCurrentUser: true
                  });
                }).catch(function (error) {
                  _this.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: error.response.data.message
                  });
                }).finally(function () {
                  _this.clearContentEditable();
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function sendMessage() {
        return _sendMessage.apply(this, arguments);
      };
    }(),
    addEmoji: function addEmoji(emoji) {
      var contentEditable = this.$refs.contentEditable;
      contentEditable.innerHTML += emoji;
    },
    sendFiles: function () {
      var _sendFiles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(files) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (files.length) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                this.$emit('sendFiles', files, this.chatId);
                _context2.next = 10;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log('error=>', _context2.t0);
                alert('Error parsing media.');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      return function sendFiles(_x) {
        return _sendFiles.apply(this, arguments);
      };
    }(),
    clearContentEditable: function clearContentEditable() {
      this.$refs.contentEditable.innerHTML = ''; // Clear the content editable
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var _VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VideoPlayer.vue */ "./resources/js/src/views/pages/chat/components/VideoPlayer.vue");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _assets_images_custom_pdf_images_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/images/custom/pdf_images.png */ "./resources/assets/images/custom/pdf_images.png");
/* harmony import */ var _assets_images_custom_pdf_images_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_custom_pdf_images_png__WEBPACK_IMPORTED_MODULE_8__);





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MessageItem',
  components: {
    VideoPlayer: _VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    currentMessages: {
      default: [],
      type: Array
    },
    chatUsers: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    userId: {
      type: Number | String,
      default: ''
    },
    chatData: {
      type: Object | String,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      pdfPlaceHolderImage: _assets_images_custom_pdf_images_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      imageViewerOptions: {
        movable: false,
        rotatable: false,
        keyboard: false,
        navbar: false,
        toolbar: false,
        title: false
      },
      openVideoPlayer: false,
      selectedVideo: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('auth', ['user']), {
    filteredAllMessages: function filteredAllMessages() {
      var _this = this;

      var sortMessages = this.currentMessages.sort(function (a, b) {
        return a.messageId - b.messageId;
      });

      if (sortMessages && sortMessages.length) {
        var modifiedMessages = sortMessages.reduce(function (result, curr, index, array) {
          result.push(curr);

          if (index < array.length - 1) {
            var currentDate = _this.$dayjs.utc(curr.createdAt).local().format('YYYY-MM-DD');

            var nextDate = _this.$dayjs.utc(array[index + 1].createdAt).local().format('YYYY-MM-DD');

            if (currentDate !== nextDate) {
              var formattedDate = _this.$dayjs(nextDate).format('ddd, MMM D');

              result.push({
                textMessage: '',
                dateSeparator: formattedDate
              });
            }
          }

          return result;
        }, []);

        if (modifiedMessages && modifiedMessages.length && !modifiedMessages[0].hasOwnProperty('sortMessages') & modifiedMessages[0].hasOwnProperty('createdAt')) {
          var formattedDate = this.$dayjs.utc(modifiedMessages[0].createdAt).local().format('ddd, MMM D');
          modifiedMessages.unshift({
            textMessage: '',
            dateSeparator: formattedDate
          });
        }

        return modifiedMessages;
      }

      return [];
    },
    messageType: function messageType() {
      var _this2 = this;

      return function (message) {
        var supporttedMedia = ['image', 'video', 'pdf'];

        if (message.storageFileUrl) {
          var mediaType = _this2.getMediaType(message.originalFilename);

          return supporttedMedia.includes(mediaType) ? mediaType : 'file';
        } else {
          return 'text';
        }
      };
    }
  }),
  methods: {
    playVideo: function playVideo(messsageData) {
      if (!messsageData.storageFileUrl) {
        return;
      }

      this.selectedVideo = {
        url: messsageData.storageFileUrl
      };
      this.openVideoPlayer = true;
    },
    closePlayer: function closePlayer() {
      this.openVideoPlayer = false;
      this.selectedVideo = {};
    },
    getMediaType: function getMediaType(fileName) {
      if (!fileName) {
        return 'other';
      }

      var fileExtension = fileName.split('.').pop();
      return _config_constants__WEBPACK_IMPORTED_MODULE_5__["default"].fileTypes[fileExtension.toLowerCase()] || 'other';
    },
    downloadFile: function downloadFile(url) {
      Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_7__["redirectToNewTab"])(url);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/set */ "./node_modules/@babel/runtime/core-js/set.js");
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _helpers_eventBus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../helpers/eventBus */ "./resources/js/src/helpers/eventBus.js");
/* harmony import */ var _CreateNewChat_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CreateNewChat.vue */ "./resources/js/src/views/pages/chat/components/CreateNewChat.vue");










function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var sourceSymbolKeys = _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserList',
  components: {
    CreateNewChat: _CreateNewChat_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  props: {
    chatLoadId: {
      type: Number,
      default: null
    },
    newMessagesNotificationChatIds: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      addGroupMembersSidebar: false,
      selectedUser: '',
      filteredUsers: [],
      showSearchUserInput: false,
      latestSeenId: [],
      individualChatUsers: [],
      customersList: [],
      isIntercompanyChat: false,
      toggleChatModal: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('chat', ['chatList']), Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('companyUserV2', ['getAllUsersList']), Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('auth', ['user']), {
    hasNewMessagesAvailable: function hasNewMessagesAvailable() {
      var _this = this;

      return function (id, lastMessageUtc, lastSeenUtc, chatId) {
        if (id != _this.latestSeenId[_this.latestSeenId.length - 1]) {
          if (chatId && _this.newMessagesNotificationChatIds.some(function (item) {
            return item === chatId;
          })) return true;
          if (_this.newMessagesNotificationChatIds.some(function (item) {
            return item === id;
          })) return true;
        }

        if (_this.latestSeenId.some(function (item) {
          return item === id;
        })) return false;

        if (lastMessageUtc && lastSeenUtc) {
          var lastMessageLocal = _this.$dayjs.utc(lastMessageUtc).local();

          var lastSeenLocal = _this.$dayjs.utc(lastSeenUtc).local();

          return lastMessageLocal.isAfter(lastSeenLocal);
        } //for new chat show based on lastMessageUtc


        if (lastMessageUtc && !lastSeenUtc) {
          return true;
        }

        return false;
      };
    },
    userData: function userData() {
      return {
        shortName: this.getInitials(this.user.firstName, this.user.lastName),
        fullName: "".concat(this.user.firstName, " ").concat(this.user.lastName),
        role: this.user.role
      };
    },
    getInitialsForChat: function getInitialsForChat() {
      var _this2 = this;

      return function (name) {
        var first = name.split(' ')[0];
        var second = name.split(' ')[1];
        return _this2.getInitials(first, second);
      };
    },
    filteredChatList: function filteredChatList() {
      var _this3 = this;

      return (this.chatList || []).map(function (item) {
        if (item.chatType === 'oneOnOne') {
          item.chatUser = item.chatUsers ? item.chatUsers.filter(function (cu) {
            return cu.userId != _this3.user.user_id;
          })[0] : item.chatUser ? item.chatUser : {};
        }

        return item;
      });
    },
    getCompanyUsersList: function getCompanyUsersList() {
      var _this4 = this;

      var existingChatUserIds = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_8___default.a(this.individualChatUsers.map(function (item) {
        return item.chatUser.userId;
      }).flat()));

      return this.getAllUsersList.filter(function (item) {
        return item.id != _this4.user.user_id && !existingChatUserIds.includes(item.id);
      });
    }
  }),
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
      var dayjsUtc;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dayjsUtc = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
              this.$dayjs.extend(dayjsUtc);
              _context.next = 4;
              return this.$store.dispatch('companyUserV2/fetchAllUsers');

            case 4:
              this.getAllCustomers();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function created() {
      return _created.apply(this, arguments);
    };
  }(),
  mounted: function mounted() {
    _helpers_eventBus__WEBPACK_IMPORTED_MODULE_11__["EventBus"].$on('openIntercompanyChat', this.openIntercompanyChat);
  },
  methods: {
    getMessage: function getMessage(otherCompanyId, intercompanyUser, shouldCreate) {
      this.$emit('openChatWindow', otherCompanyId, intercompanyUser, shouldCreate);
    },
    getAllCustomers: function () {
      var _getAllCustomers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
        var _ref, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$store.dispatch('customer/getAllCustomers');

              case 2:
                _ref = _context2.sent;
                payload = _ref.payload;
                this.customersList = payload.data || [];

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getAllCustomers() {
        return _getAllCustomers.apply(this, arguments);
      };
    }(),
    addIntercompanyChat: function addIntercompanyChat() {
      this.isIntercompanyChat = true;
      this.addGroupMembersSidebar = true;
    },
    getChats: function () {
      var _getChats = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3(addedGroup) {
        var foundGroup;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.$vs.loading();
                _context3.next = 3;
                return this.$store.dispatch('chat/getChats');

              case 3:
                // TODO: Duplicate detection by name is not correct. However, I did a test, it will return the newest matched chat, so I guess it would be OK.
                foundGroup = this.chatList.find(function (chat) {
                  return chat.groupData.name === addedGroup.name;
                });
                this.openChat(foundGroup.chatId, foundGroup);
                this.$vs.loading.close();

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getChats(_x) {
        return _getChats.apply(this, arguments);
      };
    }(),
    onUserSelected: function onUserSelected(data) {
      if (data) {
        var _data$fullName$split = data.fullName.split(' '),
            _data$fullName$split2 = _toArray(_data$fullName$split),
            firstName = _data$fullName$split2[0],
            lastName = _data$fullName$split2.slice(1);

        var user = {
          firstName: firstName,
          lastName: lastName.join(' '),
          userId: data.id
        };

        var payload = _toConsumableArray(this.chatList);

        payload.unshift({
          chatUser: user,
          chatType: 'oneOnOne'
        });
        this.$store.commit('chat/SET_CHAT_LIST', payload);
        this.openChat(data.id, user);
        this.toggleUserList();
      }
    },
    toggleUserList: function toggleUserList() {
      this.showSearchUserInput = !this.showSearchUserInput;

      if (!this.showSearchUserInput) {
        this.selectedUser = '';
      }
    },
    searchUsers: function searchUsers(event) {
      var _this5 = this;

      if (!event.query.trim().length) {
        this.filteredUsers = _toConsumableArray(this.getAllUsersList).filter(function (item) {
          return item.id != _this5.user.user_id;
        });
      } else {
        this.filteredUsers = this.getAllUsersList.filter(function (item) {
          if (item.id !== _this5.user.user_id) {
            return item.fullName.toLowerCase().startsWith(event.query.toLowerCase());
          }
        });
      }
    },
    closeAddUserSidebar: function closeAddUserSidebar() {
      this.isIntercompanyChat = false;
      this.addGroupMembersSidebar = false;
    },
    openChat: function openChat(chatUserId, chatData, chatId) {
      this.$emit('closeOpenedChatWindow');
      this.latestSeenId.push(chatUserId);
      this.$emit('openChatWindow', chatUserId, chatData, false, chatId);
      var selectedChatId = chatId || chatUserId;
      _helpers_eventBus__WEBPACK_IMPORTED_MODULE_11__["EventBus"].$emit('lastSeenChatId', selectedChatId);
      sessionStorage.setItem('openChatId', selectedChatId);
    },
    openSettings: function openSettings() {
      console.log('Open settings');
    },
    addIndividualChat: function addIndividualChat() {
      this.showSearchUserInput = true;
    },
    addGroupChat: function addGroupChat() {
      if (this.showSearchUserInput) {
        this.toggleUserList();
      }

      this.addGroupMembersSidebar = true;
    },
    getInitials: function getInitials(firstName, lastName) {
      var fullName = "".concat(firstName || '', " ").concat(lastName || '');
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_10__["getInitialFromFullName"])(fullName);
    },
    openIntercompanyChat: function openIntercompanyChat(_ref2) {
      var chatId = _ref2.chatId,
          rest = _objectWithoutProperties(_ref2, ["chatId"]);

      this.openChat(chatId, rest);
    },
    handleToggleChatModal: function handleToggleChatModal(value) {
      this.toggleChatModal = value;
    }
  },
  beforeDestroy: function beforeDestroy() {
    sessionStorage.removeItem('openChatId');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VideoPlayer',
  props: {
    showVideoPlayer: {
      default: false,
      type: Boolean
    },
    video: {
      default: {},
      type: Object
    }
  },
  watch: {
    video: function video(val) {
      this.options.video = val;
    }
  },
  data: function data() {
    return {
      options: {
        autoplay: true
      }
    };
  },
  methods: {
    closeVideoPlayer: function closeVideoPlayer() {
      this.$emit('closePlayer');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/Index.vue?vue&type=template&id=663b2870&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/Index.vue?vue&type=template&id=663b2870&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "chat-board"
  }, [!_vm.isLoadChatExists ? _c("div", {
    staticClass: "user-window"
  }, [_c("UserList", {
    attrs: {
      newMessagesNotificationChatIds: _vm.newMessagesNotificationChatIds
    },
    on: {
      openChatWindow: _vm.openChatWindow
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.chatWindowOpen,
      expression: "chatWindowOpen"
    }],
    staticClass: "w-full"
  }, [_c("ChatWindowVue", {
    ref: "chatWindow",
    attrs: {
      userId: _vm.userId
    },
    on: {
      closeOpenedChatWindow: _vm.closeChatWindow,
      newMessagesNotificationChatId: _vm.newMessagesNotificationChatId
    }
  })], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=template&id=78298e5f&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=template&id=78298e5f&scoped=true& ***!
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

  return _c("div", {
    staticClass: "chat-system"
  }, [_c("div", {
    staticClass: "chat-window-header"
  }, [_vm.chatData ? _c("ChatWindowHeaderVue", {
    attrs: {
      chatData: _vm.chatData
    },
    on: {
      addNewUsers: _vm.addNewUsers
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "chat-message-items"
  }, [_c("MessageItem", {
    ref: "chat",
    attrs: {
      currentMessages: _vm.messages,
      userId: _vm.userId,
      chatData: _vm.chatData
    }
  }), _vm._v(" "), _vm.showNewMessageAlert ? _c("div", {
    staticClass: "scroll-button",
    on: {
      click: function click($event) {
        return _vm.scrollToBottom(true);
      }
    }
  }, [_c("p", [_vm._v("New Message")])]) : _vm._e()], 1), _vm._v(" "), _vm.chatId ? _c("div", {
    staticClass: "chat-message-input"
  }, [_c("MessageInput", {
    attrs: {
      chatId: _vm.chatId
    },
    on: {
      getMessages: _vm.getMessages,
      sendFiles: _vm.sendFiles
    }
  })], 1) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=template&id=ba4be568&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=template&id=ba4be568&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex justify-between p-2 bg-white"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("vs-avatar", {
    attrs: {
      size: "large",
      src: ""
    }
  }), _vm._v(" "), _vm.isGroupOrIntercompanyOrLoad ? _c("div", [_c("div", [_c("p", [_vm._v(_vm._s(_vm.chatTitle))]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.getMultipleUsersName))])])]) : _c("p", [_vm._v("\n      " + _vm._s(_vm.computedUserName) + " "), _c("br")])], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isAddNewUserEnable,
      expression: "isAddNewUserEnable"
    }],
    staticClass: "flex items-center"
  }, [_c("vs-icon", {
    staticClass: "cursor-pointer mr-3",
    attrs: {
      icon: "person_add",
      size: "medium"
    },
    on: {
      click: _vm.toggleOverlayPanel
    }
  }), _vm._v(" "), _c("OverlayPanel", {
    ref: "op",
    staticStyle: {
      width: "320px",
      "z-index": "52010"
    },
    attrs: {
      appendTo: "body",
      autoZIndex: false
    }
  }, [_c("Listbox", {
    attrs: {
      options: _vm.getUsersList,
      multiple: true,
      filter: true,
      dataKey: "id",
      optionLabel: "fullName",
      listStyle: "max-height:360px;width: 100%"
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "flex items-center"
        }, [_c("vs-avatar", {
          staticStyle: {
            "min-width": "32px"
          },
          attrs: {
            color: "primary",
            text: _vm.getInitials(slotProps.option.fullName)
          }
        }), _vm._v(" "), _c("div", [_vm._v(_vm._s(slotProps.option.fullName))])], 1)];
      }
    }]),
    model: {
      value: _vm.selectedUsers,
      callback: function callback($$v) {
        _vm.selectedUsers = $$v;
      },
      expression: "selectedUsers"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "primary",
      type: "border",
      disabled: _vm.selectedUsers.length === 0
    },
    on: {
      click: _vm.addNewUsersToChat
    }
  }, [_vm._v("\n          Add Users\n        ")])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-end pr-1"
  }, [_c("div", {
    staticClass: "flex items-center justify-end pr-1"
  }, [_c("vs-popup", {
    attrs: {
      classContent: "popup-example",
      title: "Change Group Name",
      active: _vm.popupActive,
      width: "300px"
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.popupActive = $event;
      }
    }
  }, [[_c("div", [_c("div", {
    staticClass: "w-full"
  }, [_c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.updateGroupName,
      callback: function callback($$v) {
        _vm.updateGroupName = $$v;
      },
      expression: "updateGroupName"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-end mt-5"
  }, [_c("vs-button", {
    staticClass: "mr-3",
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: function click($event) {
        return _vm.saveGroupName();
      }
    }
  }, [_vm._v("\n                    Save\n                  ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: _vm.colorx,
      type: "border"
    },
    on: {
      click: function click($event) {
        return _vm.cancelGroupName();
      }
    }
  }, [_vm._v("\n                    Cancel\n                  ")])], 1)], 1)])]], 2), _vm._v(" "), [_c("vs-dropdown", [_c("vs-icon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isNameUpdateAllowed,
      expression: "isNameUpdateAllowed"
    }],
    staticClass: "btn-drop w-max cursor-pointer",
    attrs: {
      icon: "more_vert",
      color: "secondary",
      size: "small"
    }
  }), _vm._v(" "), _c("vs-dropdown-menu", [_c("div", {
    staticClass: "cursor-pointer px-5 py-3 text-center",
    staticStyle: {
      "min-width": "200px"
    },
    on: {
      click: _vm.openChangeChatNamePopup
    }
  }, [_c("span", [_vm._v("Change Group Name")])])])], 1)]], 2)])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=template&id=7df23255&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=template&id=7df23255& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vs-popup", {
    staticClass: "chat-popup",
    attrs: {
      active: _vm.localToggleChatModal,
      title: "Add Chat"
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.localToggleChatModal = $event;
      }
    }
  }, [[_c("div", [_c("div", {
    staticClass: "w-full"
  }, [_c("vs-tabs", {
    attrs: {
      alignment: "fixed"
    }
  }, [_c("vs-tab", {
    attrs: {
      label: "Individual"
    },
    on: {
      click: function click($event) {
        return _vm.setActiveTab("individual");
      }
    }
  }, [_c("div", {
    staticClass: "py-3"
  }, [_c("label", {
    attrs: {
      for: "selectUsers"
    }
  }, [_vm._v("Select User "), _c("field-required-sign")], 1), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.userList,
      clearable: true,
      appendToBody: true,
      label: "fullName"
    },
    model: {
      value: _vm.selectedUser,
      callback: function callback($$v) {
        _vm.selectedUser = $$v;
      },
      expression: "selectedUser"
    }
  })], 1)]), _vm._v(" "), _c("vs-tab", {
    attrs: {
      label: "Group"
    },
    on: {
      click: function click($event) {
        return _vm.setActiveTab("group");
      }
    }
  }, [_c("div", {
    staticClass: "py-3"
  }, [_c("label", {
    attrs: {
      for: "groupName"
    }
  }, [_vm._v("Group Name "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.groupName,
      callback: function callback($$v) {
        _vm.groupName = $$v;
      },
      expression: "groupName"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "py-3"
  }, [_c("label", {
    attrs: {
      for: "selectUsers"
    }
  }, [_vm._v("Add Users "), _c("field-required-sign")], 1), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.userList,
      clearable: true,
      appendToBody: true,
      label: "fullName",
      multiple: ""
    },
    model: {
      value: _vm.selectedUsersForGroup,
      callback: function callback($$v) {
        _vm.selectedUsersForGroup = $$v;
      },
      expression: "selectedUsersForGroup"
    }
  })], 1)]), _vm._v(" "), _c("vs-tab", {
    attrs: {
      label: "Inter-company"
    },
    on: {
      click: function click($event) {
        return _vm.setActiveTab("intercompany");
      }
    }
  }, [_c("div", {
    staticClass: "py-3"
  }, [_c("label", {
    attrs: {
      for: "groupName"
    }
  }, [_vm._v("Company "), _c("field-required-sign")], 1), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.getCustomerList,
      appendToBody: true,
      label: "company_name"
    },
    model: {
      value: _vm.selectedCustomer,
      callback: function callback($$v) {
        _vm.selectedCustomer = $$v;
      },
      expression: "selectedCustomer"
    }
  })], 1)])], 1)], 1)])], _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-end gap-4 mt-5"
  }, [_c("vs-button", {
    attrs: {
      type: "border"
    },
    on: {
      click: _vm.closePopup
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "filled",
      disabled: _vm.disabledSubmit
    },
    on: {
      click: _vm.handleSubmit
    }
  }, [_vm._v("\n      Add\n    ")])], 1)], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=template&id=e5f26e22&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=template&id=e5f26e22&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("emoji-picker", {
    staticClass: "position-relative",
    attrs: {
      search: _vm.search
    },
    on: {
      emoji: _vm.insert
    },
    scopedSlots: _vm._u([{
      key: "emoji-invoker",
      fn: function fn(_ref) {
        var clickEvent = _ref.events.click;
        return _c("div", {
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return clickEvent.apply(null, arguments);
            }
          }
        }, [_c("div", {
          staticClass: "p-1 input-icon-box"
        }, [_c("feather-icon", {
          staticStyle: {
            color: "#7c72e9"
          },
          attrs: {
            icon: "SmileIcon"
          }
        })], 1)]);
      }
    }, {
      key: "emoji-picker",
      fn: function fn(_ref2) {
        var emojis = _ref2.emojis,
            insert = _ref2.insert,
            display = _ref2.display;
        return _c("div", {
          staticClass: "emoji-picker"
        }, [_c("div", [_c("vs-input", {
          staticClass: "w-full",
          attrs: {
            placeholder: "Search Emoji"
          },
          model: {
            value: _vm.search,
            callback: function callback($$v) {
              _vm.search = $$v;
            },
            expression: "search"
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "mt-2"
        }, _vm._l(emojis, function (emojiGroup, category) {
          return _c("div", {
            key: category
          }, [_c("p", [_vm._v(_vm._s(category))]), _vm._v(" "), _c("div", {
            staticClass: "mb-2 flex flex-wrap"
          }, _vm._l(emojiGroup, function (emoji, emojiName) {
            return _c("span", {
              key: emojiName,
              staticClass: "text-2xl p-1 cursor-pointer",
              attrs: {
                title: emojiName
              },
              on: {
                click: function click($event) {
                  return insert(emoji);
                }
              }
            }, [_vm._v(_vm._s(emoji))]);
          }), 0)]);
        }), 0)], 1)]);
      }
    }])
  });
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=template&id=2a005514&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=template&id=2a005514&scoped=true& ***!
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

  return _c("div", {
    staticClass: "p-1 file-icon-box"
  }, [_c("input", {
    ref: "file",
    attrs: {
      type: "file",
      multiple: "",
      hidden: ""
    },
    on: {
      change: _vm.onFileSelect
    }
  }), _vm._v(" "), _c("feather-icon", {
    staticStyle: {
      color: "#7c72e9"
    },
    attrs: {
      icon: "PaperclipIcon"
    },
    on: {
      click: _vm.chooseFiles
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=template&id=514e87ba&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=template&id=514e87ba&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "chat-messaging-system messages"
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("div", {
    ref: "contentEditable",
    staticClass: "chat-input",
    attrs: {
      contenteditable: "true"
    },
    on: {
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.handleSendMessageOnEnter.apply(null, arguments);
      },
      click: function click($event) {
        $event.stopPropagation();
        _vm.placeholderText = "";
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.placeholderText) + "\n    ")])]), _vm._v(" "), _c("div", {
    staticClass: "chat-btn-group"
  }, [_c("div", {
    staticClass: "px-2"
  }, [_c("FileUpload", {
    on: {
      addFiles: _vm.sendFiles
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "px-2"
  }, [_c("EmojiWindowVue", {
    on: {
      addEmoji: _vm.addEmoji
    }
  })], 1), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.sendMessage
    }
  }, [_vm._v("Send")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=template&id=5c4d625a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=template&id=5c4d625a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
    ref: "chatBox",
    staticClass: "chat-box-parent overflow-y-auto"
  }, [_vm._l(_vm.filteredAllMessages, function (msg, index) {
    return _c("div", {
      key: index,
      class: [msg.senderUserId == _vm.user.user_id ? "sent-message" : "received-message", msg.hasOwnProperty("dateSeparator") ? "date-separator" : ""]
    }, [[msg.senderUserId != _vm.user.user_id && (_vm.chatData.chatType === "group" || _vm.chatData.chatType === "load") || _vm.chatData.chatType === "intercompany" ? _c("p", {
      staticClass: "senderName ml-3 font-medium mb-1"
    }, [_vm._v("\n        " + _vm._s(msg.senderFirstName) + "\n        "), msg.senderLastName ? _c("span", [_vm._v(_vm._s(msg.senderLastName))]) : _vm._e()]) : _vm._e(), _vm._v(" "), msg && msg.hasOwnProperty("dateSeparator") ? _c("div", [_vm._v("\n        " + _vm._s(msg.dateSeparator) + "\n      ")]) : _c("div", {
      directives: [{
        name: "viewer",
        rawName: "v-viewer",
        value: _vm.imageViewerOptions,
        expression: "imageViewerOptions"
      }],
      staticClass: "chat-box",
      class: [_vm.messageType(msg), _vm.chatData.chatType]
    }, [msg.textMessage ? [_c("p", {
      staticClass: "message-content"
    }, [_vm._v(_vm._s(msg.textMessage))]), _vm._v(" "), _c("div", {
      staticClass: "text-xs createTime"
    }, [_vm._v("\n            " + _vm._s(_vm._f("utcDatetimeToLocalTimeOnly")(msg.createdAt)) + "\n          ")])] : _vm._e(), _vm._v(" "), _vm.getMediaType(msg.originalFilename) === "image" ? [_c("img", {
      staticClass: "msgImg",
      attrs: {
        src: msg.storageFileUrl
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "text-xs createTime"
    }, [_vm._v("\n            " + _vm._s(_vm._f("utcDatetimeToLocalTimeOnly")(msg.createdAt)) + "\n          ")])] : _vm._e(), _vm._v(" "), _vm.getMediaType(msg.originalFilename) === "video" ? [_c("div", {
      staticClass: "fileContainer",
      on: {
        click: function click($event) {
          return _vm.playVideo(msg);
        }
      }
    }, [_c("feather-icon", {
      staticClass: "play",
      staticStyle: {
        color: "#7c72e9"
      },
      attrs: {
        icon: "PlayIcon"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "fileName"
    }, [_vm._v(_vm._s(msg.originalFilename))])], 1), _vm._v(" "), _c("div", {
      staticClass: "text-xs createTime"
    }, [_vm._v("\n            " + _vm._s(_vm._f("utcDatetimeToLocalTimeOnly")(msg.createdAt)) + "\n          ")])] : _vm._e(), _vm._v(" "), _vm.getMediaType(msg.originalFilename) === "pdf" ? [_c("a", {
      staticClass: "pdf",
      attrs: {
        href: msg.storageFileUrl,
        target: "_blank"
      }
    }, [_c("img", {
      staticStyle: {
        width: "22px"
      },
      attrs: {
        src: _vm.pdfPlaceHolderImage,
        alt: "pdfIcon"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "pdfName"
    }, [_vm._v(_vm._s(msg.originalFilename))])]), _vm._v(" "), _c("div", {
      staticClass: "text-xs createTime"
    }, [_vm._v("\n            " + _vm._s(_vm._f("utcDatetimeToLocalTimeOnly")(msg.createdAt)) + "\n          ")])] : _vm._e(), _vm._v(" "), _vm.messageType(msg) === "file" ? [_c("div", {
      staticClass: "fileContainer",
      on: {
        click: function click($event) {
          return _vm.downloadFile(msg.storageFileUrl);
        }
      }
    }, [_c("feather-icon", {
      staticClass: "play",
      staticStyle: {
        color: "#7c72e9"
      },
      attrs: {
        icon: "DownloadIcon"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "fileName"
    }, [_vm._v(_vm._s(msg.originalFilename))])], 1), _vm._v(" "), _c("div", {
      staticClass: "text-xs createTime"
    }, [_vm._v("\n            " + _vm._s(_vm._f("utcDatetimeToLocalTimeOnly")(msg.createdAt)) + "\n          ")])] : _vm._e()], 2)]], 2);
  }), _vm._v(" "), _c("VideoPlayer", {
    attrs: {
      showVideoPlayer: _vm.openVideoPlayer,
      video: _vm.selectedVideo
    },
    on: {
      closePlayer: _vm.closePlayer
    }
  })], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=template&id=f73ac980&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=template&id=f73ac980&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "relative"
  }, [_vm.userData ? _c("div", {
    staticClass: "user px-2 py-4"
  }, [_c("div", {
    staticClass: "user-align"
  }, [_c("div", {
    staticClass: "user-short-name"
  }, [_c("h2", [_vm._v(_vm._s(_vm.userData.shortName))])]), _vm._v(" "), _c("div", {
    staticClass: "user-name"
  }, [_c("p", {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.userData.fullName))])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "all-chats flex justify-between items-center mt-5 mb-3 px-3"
  }, [_c("h3", [_vm._v("Chats")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      icon: "edit"
    },
    on: {
      click: function click($event) {
        return _vm.handleToggleChatModal(true);
      }
    }
  }, [_vm._v("New Chat")])], 1), _vm._v(" "), _c("div", {
    staticClass: "chat-list"
  }, [_c("div", {
    staticClass: "group-chat pt-5"
  }, [_c("div", {
    staticStyle: {
      overflow: "auto"
    }
  }, _vm._l(_vm.filteredChatList, function (chat) {
    return _c("div", {
      key: chat.chatId,
      staticClass: "py-3 cursor-pointer",
      on: {
        click: function click($event) {
          chat.chatType == "oneOnOne" ? _vm.openChat(chat.chatUser.userId, chat.chatUser, chat.chatId) : chat.chatType == "load" ? _vm.openChat(chat.loadData.loadId, chat) : _vm.openChat(chat.chatId, chat);
        }
      }
    }, [_c("div", {
      staticClass: "flex items-center"
    }, [chat.chatType == "oneOnOne" ? [_c("vs-avatar", {
      staticClass: "mr-3",
      attrs: {
        size: chat.chatUser.avatarSize,
        src: chat.chatUser.avatarSrc
      }
    }), _vm._v(" "), _c("h5", [_vm._v("\n                " + _vm._s(chat.chatUser.firstName) + "\n                " + _vm._s(chat.chatUser.lastName) + "\n              ")])] : chat.chatType == "intercompany" ? [_c("vs-avatar", {
      staticClass: "mr-3",
      attrs: {
        color: "primary",
        text: _vm.getInitialsForChat(chat.intercompanyData.otherCompanyName)
      }
    }), _vm._v(" "), _c("h5", [_vm._v("\n                " + _vm._s(chat.intercompanyData.otherCompanyName) + "\n              ")])] : chat.chatType == "group" ? [_c("vs-avatar", {
      staticClass: "mr-3",
      attrs: {
        color: "primary",
        text: _vm.getInitialsForChat(chat.groupData.name)
      }
    }), _vm._v(" "), _c("h5", [_vm._v("\n                " + _vm._s(chat.groupData.name) + "\n              ")])] : chat.chatType == "load" ? [chat && chat.loadData && chat.loadData.number ? _c("h5", {
      staticClass: "ml-4"
    }, [_vm._v("\n                Load #" + _vm._s(chat.loadData.number) + "\n            ")]) : _vm._e()] : _vm._e(), _vm._v(" "), (chat.chatType == "oneOnOne" ? _vm.hasNewMessagesAvailable(chat.chatUser.userId, chat.lastMessageUtc, chat.lastSeenUtc, chat.chatId) : chat.chatType == "load" ? _vm.hasNewMessagesAvailable(chat.loadData.loadId, chat.lastMessageUtc, chat.lastSeenUtc, chat.chatId) : _vm.hasNewMessagesAvailable(chat.chatId, chat.lastMessageUtc, chat.lastSeenUtc)) ? _c("div", {
      staticClass: "new-message-dot"
    }) : _vm._e()], 2)]);
  }), 0)]), _vm._v(" "), _vm.toggleChatModal ? _c("create-new-chat", {
    attrs: {
      toggleChatModal: _vm.toggleChatModal,
      customersList: _vm.customersList
    },
    on: {
      onUserSelected: _vm.onUserSelected,
      refreshChats: _vm.getChats,
      getMessage: _vm.getMessage,
      closeChatModal: function closeChatModal($event) {
        return _vm.handleToggleChatModal(false);
      }
    }
  }) : _vm._e()], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=template&id=224c3d55&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=template&id=224c3d55&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("Dialog", {
    staticClass: "dialog",
    style: {
      width: "50vw"
    },
    attrs: {
      visible: _vm.showVideoPlayer,
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
            click: _vm.closeVideoPlayer
          }
        })], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm.video.url ? [_c("div", {
    staticClass: "w-full mt-4"
  }, [_c("video", {
    staticClass: "w-full h-full",
    attrs: {
      src: _vm.video.url,
      controls: "",
      autoplay: ""
    }
  })])] : _vm._e()], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-board[data-v-663b2870] {\n  display: flex;\n}\n.chat-board .user-window[data-v-663b2870] {\n  width: 25%;\n}\n.chat-board .chat-window[data-v-663b2870] {\n  width: 85%;\n}\n[dir] .chat-board .chat-window[data-v-663b2870] {\n  background: #ececec;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-system[data-v-78298e5f] {\n  position: relative;\n  height: 95vh;\n  width: 100%;\n}\n.chat-system .chat-window-header[data-v-78298e5f] {\n  width: 100%;\n}\n[dir] .chat-system .chat-window-header[data-v-78298e5f] {\n  border: 1px solid #d4d4d4;\n}\n.chat-system .chat-message-items[data-v-78298e5f] {\n  display: flex;\n  height: 80%;\n  justify-content: flex-end;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n  overflow: auto;\n}\n[dir] .chat-system .chat-message-items[data-v-78298e5f] {\n  border: 1px solid #d4d4d4;\n  border-top: none;\n}\n.chat-system .chat-message-input[data-v-78298e5f] {\n  width: 100%;\n}\n.chat-system .scroll-button[data-v-78298e5f] {\n  position: absolute;\n  width: auto;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[dir] .chat-system .scroll-button[data-v-78298e5f] {\n  padding: 10px;\n  border-radius: 50px;\n  background-color: rgb(242, 19, 93);\n  cursor: pointer;\n}\n[dir=ltr] .chat-system .scroll-button[data-v-78298e5f] {\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n[dir=rtl] .chat-system .scroll-button[data-v-78298e5f] {\n  right: 50%;\n  transform: translate(50%, -50%);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-popup .vs-popup {\n  max-width: 450px;\n}\nbody ul[role=listbox] {\n  z-index: 100000 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-icon-box[data-v-e5f26e22] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}[dir] .input-icon-box[data-v-e5f26e22] {\n  background-color: #e4e3fa;\n  border-radius: 5px;\n}\n.emoji-picker[data-v-e5f26e22] {\n  position: absolute;\n  width: 300px;\n  max-height: 300px;\n  overflow: auto;\n  bottom: 82px;\n}\n[dir] .emoji-picker[data-v-e5f26e22] {\n  box-shadow: 0px 1px 1px 1px lightgray;\n  background-color: #fff;\n  padding: 10px;\n}\n[dir=ltr] .emoji-picker[data-v-e5f26e22] {\n  right: 140px;\n}\n[dir=rtl] .emoji-picker[data-v-e5f26e22] {\n  left: 140px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-icon-box[data-v-2a005514] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}[dir] .file-icon-box[data-v-2a005514] {\n  background-color: #e4e3fa;\n  border-radius: 5px;\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-messaging-system[data-v-514e87ba] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}[dir] .chat-messaging-system[data-v-514e87ba] {\n  padding: 15px;\n  background-color: #fff;\n  margin: 0 auto;\n  border: 1px solid #d4d4d4;\n  border-top: none;\n}\n.chat-messaging-system .chat-btn-group[data-v-514e87ba] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.chat-messaging-system .chat-input[data-v-514e87ba] {\n  width: 100%;\n  font-size: 1.2rem;\n  max-height: 60px;\n  overflow: auto;\n  word-break: break-all;\n}\n[dir] .chat-messaging-system .chat-input[data-v-514e87ba] {\n  background-color: #fff;\n  border: none;\n  padding: 8px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-box-parent[data-v-5c4d625a] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}[dir] .chat-box-parent[data-v-5c4d625a] {\n  padding: 20px;\n}\n.chat-box-parent .chat-box[data-v-5c4d625a] {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n[dir] .chat-box-parent .chat-box[data-v-5c4d625a] {\n  background: #fff;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);\n  padding: 1rem;\n  margin-bottom: 10px;\n}\n[dir=ltr] .chat-box-parent .chat-box[data-v-5c4d625a] {\n  border-radius: 22px 6px 22px 22px;\n}\n[dir=rtl] .chat-box-parent .chat-box[data-v-5c4d625a] {\n  border-radius: 6px 22px 22px 22px;\n}\n.chat-box-parent .chat-box > .msg[data-v-5c4d625a] {\n  display: flex;\n  flex-direction: column;\n}\n.chat-box-parent .chat-box > .msg > .createChat[data-v-5c4d625a] {\n  align-self: flex-end;\n}\n[dir] .chat-box-parent .chat-box > .senderName[data-v-5c4d625a] {\n  margin-bottom: 0.6rem;\n}\n.chat-box-parent .chat-box .createTime[data-v-5c4d625a] {\n  align-self: flex-end;\n}\n[dir] .chat-box-parent .chat-box .createTime[data-v-5c4d625a] {\n  margin-top: 0.3rem;\n}\n.chat-box-parent .sent-message[data-v-5c4d625a] {\n  align-self: flex-end;\n  /* Align sent messages to the left side */\n}\n.chat-box-parent .sent-message > .chat-box[data-v-5c4d625a] {\n  color: #ffffff;\n}\n[dir] .chat-box-parent .sent-message > .chat-box[data-v-5c4d625a] {\n  background-color: #1877F2;\n}\n.chat-box-parent .received-message[data-v-5c4d625a] {\n  align-self: flex-start;\n  /* Align received messages to the right side */\n}\n[dir] .chat-box-parent .received-message > .chat-box[data-v-5c4d625a] {\n  background-color: #d9d9d9;\n}\n.chat-box-parent .received-message > .chat-box > .senderName[data-v-5c4d625a] {\n  align-self: flex-start;\n}\n.chat-box-parent .received-message > .chat-box.image.group > img[data-v-5c4d625a] {\n  height: 76%;\n}\n.chat-box-parent .chat-box.image[data-v-5c4d625a] {\n  width: 15rem;\n  min-height: 8rem;\n}\n[dir] .chat-box-parent .chat-box.image[data-v-5c4d625a] {\n  padding: 1rem;\n  cursor: pointer;\n}\n.chat-box-parent .chat-box.image > img[data-v-5c4d625a] {\n  width: 100%;\n  height: 90%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[dir] .chat-box-parent .chat-box.image > img[data-v-5c4d625a] {\n  border-radius: 1rem;\n}\n.chat-box-parent .chat-box.video[data-v-5c4d625a],\n.chat-box-parent .chat-box.file[data-v-5c4d625a] {\n  position: relative;\n  min-width: 12rem;\n  max-width: 35rem;\n  min-height: 5rem;\n  justify-content: center;\n}\n[dir] .chat-box-parent .chat-box.video[data-v-5c4d625a], [dir] .chat-box-parent .chat-box.file[data-v-5c4d625a] {\n  padding: 1rem;\n  cursor: pointer;\n}\n.chat-box-parent .chat-box.video > .fileContainer[data-v-5c4d625a],\n.chat-box-parent .chat-box.file > .fileContainer[data-v-5c4d625a] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.chat-box-parent .chat-box.video > .fileContainer > .fileName[data-v-5c4d625a],\n.chat-box-parent .chat-box.file > .fileContainer > .fileName[data-v-5c4d625a] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 20rem;\n}\n[dir=ltr] .chat-box-parent .chat-box.video > .fileContainer > .fileName[data-v-5c4d625a], [dir=ltr] .chat-box-parent .chat-box.file > .fileContainer > .fileName[data-v-5c4d625a] {\n  margin-left: 10px;\n}\n[dir=rtl] .chat-box-parent .chat-box.video > .fileContainer > .fileName[data-v-5c4d625a], [dir=rtl] .chat-box-parent .chat-box.file > .fileContainer > .fileName[data-v-5c4d625a] {\n  margin-right: 10px;\n}\n.chat-box-parent .chat-box.pdf[data-v-5c4d625a] {\n  position: relative;\n  min-width: 12rem;\n  max-width: 25rem;\n  min-height: 5rem;\n  justify-content: center;\n}\n[dir] .chat-box-parent .chat-box.pdf[data-v-5c4d625a] {\n  padding: 1rem;\n  cursor: pointer;\n}\n.chat-box-parent .chat-box.pdf > a[data-v-5c4d625a] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.chat-box-parent .chat-box.pdf > a > .pdfName[data-v-5c4d625a] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 20rem;\n  color: #626262;\n}\n[dir=ltr] .chat-box-parent .chat-box.pdf > a > .pdfName[data-v-5c4d625a] {\n  margin-left: 10px;\n}\n[dir=rtl] .chat-box-parent .chat-box.pdf > a > .pdfName[data-v-5c4d625a] {\n  margin-right: 10px;\n}\n.chat-box-parent .chat-box.file[data-v-5c4d625a] {\n  position: relative;\n  min-width: 12rem;\n  max-width: 25rem;\n  min-height: 5rem;\n  justify-content: center;\n}\n[dir] .chat-box-parent .chat-box.file[data-v-5c4d625a] {\n  padding: 1rem;\n  cursor: pointer;\n}\n.chat-box-parent .chat-box.file > .fileContainer[data-v-5c4d625a] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.chat-box-parent .chat-box.file > .fileContainer > .fileName[data-v-5c4d625a] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 20rem;\n}\n[dir=ltr] .chat-box-parent .chat-box.file > .fileContainer > .fileName[data-v-5c4d625a] {\n  margin-left: 10px;\n}\n[dir=rtl] .chat-box-parent .chat-box.file > .fileContainer > .fileName[data-v-5c4d625a] {\n  margin-right: 10px;\n}\n.chat-box-parent[data-v-5c4d625a]::-webkit-scrollbar {\n  display: none;\n}\n.date-separator[data-v-5c4d625a] {\n  position: sticky;\n  top: 0;\n  font-weight: 400;\n  z-index: 1;\n  align-self: center !important;\n  color: #a0a0a7;\n  font-size: 14px;\n}\n[dir] .date-separator[data-v-5c4d625a] {\n  padding: 10px;\n  border-radius: 11px;\n  background-color: #ffffff;\n}\n.message-content[data-v-5c4d625a] {\n  white-space: pre-line;\n  word-break: break-all;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user[data-v-f73ac980] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.user .user-align[data-v-f73ac980] {\n  display: flex;\n  align-items: center;\n}\n.user .user-align .user-short-name[data-v-f73ac980] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir] .user .user-align .user-short-name[data-v-f73ac980] {\n  border-radius: 50%;\n  border: 1px solid rgba(var(--vs-primary), 1);\n}\n[dir=ltr] .user .user-align .user-short-name[data-v-f73ac980] {\n  margin-right: 15px;\n}\n[dir=rtl] .user .user-align .user-short-name[data-v-f73ac980] {\n  margin-left: 15px;\n}\n.user .user-align .user-short-name h2[data-v-f73ac980] {\n  color: rgba(var(--vs-primary), 1);\n  text-transform: uppercase;\n  font-size: 20px;\n}\n.user .user-align .user-name .name[data-v-f73ac980] {\n  font-weight: 700;\n}\n.user .user-align .user-name .lead[data-v-f73ac980] {\n  font-size: 12px;\n  color: gray;\n}\n.individual-chat h5[data-v-f73ac980] {\n  font-weight: 500;\n  font-size: 16px;\n}\n.individual-chat .chat-users[data-v-f73ac980] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.individual-chat .chat-users .details p[data-v-f73ac980] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  font-size: 12px;\n  max-width: 75%;\n  color: #263151;\n}\n[dir] .individual-chat .chat-users .details p[data-v-f73ac980] {\n  margin-top: 3px;\n}\n.individual-chat .chat-users h5[data-v-f73ac980] {\n  font-size: 14px;\n}\n[dir] .individual-chat .notification[data-v-f73ac980] {\n  background: rgb(241, 251, 225);\n  padding: 3px 10px;\n  border-radius: 5px;\n}\n.individual-chat .notification span[data-v-f73ac980] {\n  color: green;\n}\n.group-avtar[data-v-f73ac980] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 35%;\n}\n[dir] .group-avtar .profile-icons .con-vs-avatar.large[data-v-f73ac980] {\n  border: 2px solid #fff;\n}\n.group-avtar .waiting-more[data-v-f73ac980] {\n  position: absolute;\n  color: gray;\n}\n[dir=ltr] .group-avtar .waiting-more[data-v-f73ac980] {\n  right: -10px;\n}\n[dir=rtl] .group-avtar .waiting-more[data-v-f73ac980] {\n  left: -10px;\n}\n.loads h5[data-v-f73ac980] {\n  font-size: 16px;\n}\n[dir] .loads .link[data-v-f73ac980] {\n  margin-top: 20px;\n}\n.loads .link a[data-v-f73ac980] {\n  color: #333;\n  text-decoration: none;\n}\n.loads .link a[data-v-f73ac980] :hover {\n  color: #333;\n}\n.add-more-btn button[data-v-f73ac980] {\n  color: #fff;\n}\n[dir] .add-more-btn button[data-v-f73ac980] {\n  padding: 10px;\n  border: 1px solid #7367f0;\n  background: #7367f0;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.btns[data-v-f73ac980] {\n  min-width: 25px;\n  min-height: 25px;\n  color: #9188ec;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n}\n[dir] .btns[data-v-f73ac980] {\n  background-color: #e3e3fa;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n}\n#parentx[data-v-f73ac980] {\n  overflow: hidden;\n  height: 500px;\n  position: relative;\n}\n.avatars[data-v-f73ac980] {\n  display: flex;\n  list-style-type: none;\n  flex-direction: row;\n}\n[dir] .avatars[data-v-f73ac980] {\n  margin: auto;\n  padding: 0px;\n}\n.avatars__item[data-v-f73ac980] {\n  color: #ffffff;\n  display: block;\n  font-family: sans-serif;\n  font-size: 12px;\n  font-weight: 100;\n  height: 45px;\n  width: 45px;\n  line-height: 45px;\n  transition: margin 0.1s ease-in-out;\n  overflow: hidden;\n}\n[dir] .avatars__item[data-v-f73ac980] {\n  background-color: #596376;\n  border: 2px solid #1f2532;\n  border-radius: 100%;\n  text-align: center;\n}\n[dir=ltr] .avatars__item[data-v-f73ac980] {\n  margin-left: -10px;\n}\n[dir=rtl] .avatars__item[data-v-f73ac980] {\n  margin-right: -10px;\n}\n.avatars__item[data-v-f73ac980]:first-child {\n  z-index: 5;\n}\n.avatars__item[data-v-f73ac980]:nth-child(2) {\n  z-index: 4;\n}\n.avatars__item[data-v-f73ac980]:nth-child(3) {\n  z-index: 3;\n}\n.avatars__item[data-v-f73ac980]:nth-child(4) {\n  z-index: 2;\n}\n.avatars__item[data-v-f73ac980]:nth-child(5) {\n  z-index: 1;\n}\n.avatars__item[data-v-f73ac980]:last-child {\n  z-index: 0;\n}\n.avatars__item img[data-v-f73ac980] {\n  width: 100%;\n}\n[dir=ltr] .avatars:hover .avatars__item[data-v-f73ac980] {\n  margin-right: 10px;\n}\n[dir=rtl] .avatars:hover .avatars__item[data-v-f73ac980] {\n  margin-left: 10px;\n}\n.new-message-dot[data-v-f73ac980] {\n  width: 10px;\n  height: 10px; /* Or any color you prefer for the dot */\n  display: inline-block;\n}\n[dir] .new-message-dot[data-v-f73ac980] {\n  background-color: red;\n  border-radius: 50%;\n}\n[dir=ltr] .new-message-dot[data-v-f73ac980] {\n  margin-left: 5px;\n}\n[dir=rtl] .new-message-dot[data-v-f73ac980] {\n  margin-right: 5px;\n}\n.chat-list[data-v-f73ac980] {\n  overflow: auto;\n  max-height: 90vh;\n}\n.custom-height[data-v-f73ac980] .vs__dropdown-menu {\n  max-height: 180px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-224c3d55] video {\n  aspect-ratio: 16/9;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true&");

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

/***/ "./resources/assets/images/custom/pdf_images.png":
/*!*******************************************************!*\
  !*** ./resources/assets/images/custom/pdf_images.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/pdf_images.png?0dfe1271c4feee62a37d4f324ddee500";

/***/ }),

/***/ "./resources/js/src/views/pages/chat/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/pages/chat/Index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_663b2870_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=663b2870&scoped=true& */ "./resources/js/src/views/pages/chat/Index.vue?vue&type=template&id=663b2870&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_663b2870_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss& */ "./resources/js/src/views/pages/chat/Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_663b2870_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_663b2870_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "663b2870",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_663b2870_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/Index.vue?vue&type=style&index=0&id=663b2870&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_663b2870_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_663b2870_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_663b2870_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_663b2870_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/chat/Index.vue?vue&type=template&id=663b2870&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/Index.vue?vue&type=template&id=663b2870&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_663b2870_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=663b2870&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/Index.vue?vue&type=template&id=663b2870&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_663b2870_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_663b2870_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/ChatWindow.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/ChatWindow.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatWindow_vue_vue_type_template_id_78298e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatWindow.vue?vue&type=template&id=78298e5f&scoped=true& */ "./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=template&id=78298e5f&scoped=true&");
/* harmony import */ var _ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatWindow.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatWindow_vue_vue_type_style_index_0_id_78298e5f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss& */ "./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatWindow_vue_vue_type_template_id_78298e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatWindow_vue_vue_type_template_id_78298e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78298e5f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/components/ChatWindow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_id_78298e5f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=style&index=0&id=78298e5f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_id_78298e5f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_id_78298e5f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_id_78298e5f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_id_78298e5f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=template&id=78298e5f&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=template&id=78298e5f&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_template_id_78298e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=template&id=78298e5f&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindow.vue?vue&type=template&id=78298e5f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_template_id_78298e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_template_id_78298e5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatWindowHeader_vue_vue_type_template_id_ba4be568_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatWindowHeader.vue?vue&type=template&id=ba4be568&scoped=true& */ "./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=template&id=ba4be568&scoped=true&");
/* harmony import */ var _ChatWindowHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatWindowHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatWindowHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatWindowHeader_vue_vue_type_template_id_ba4be568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatWindowHeader_vue_vue_type_template_id_ba4be568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ba4be568",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/components/ChatWindowHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindowHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindowHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindowHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=template&id=ba4be568&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=template&id=ba4be568&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindowHeader_vue_vue_type_template_id_ba4be568_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindowHeader.vue?vue&type=template&id=ba4be568&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/ChatWindowHeader.vue?vue&type=template&id=ba4be568&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindowHeader_vue_vue_type_template_id_ba4be568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindowHeader_vue_vue_type_template_id_ba4be568_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/CreateNewChat.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/CreateNewChat.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateNewChat_vue_vue_type_template_id_7df23255___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateNewChat.vue?vue&type=template&id=7df23255& */ "./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=template&id=7df23255&");
/* harmony import */ var _CreateNewChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateNewChat.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CreateNewChat_vue_vue_type_style_index_0_id_7df23255_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss& */ "./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreateNewChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateNewChat_vue_vue_type_template_id_7df23255___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateNewChat_vue_vue_type_template_id_7df23255___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/components/CreateNewChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateNewChat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_style_index_0_id_7df23255_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=style&index=0&id=7df23255&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_style_index_0_id_7df23255_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_style_index_0_id_7df23255_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_style_index_0_id_7df23255_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_style_index_0_id_7df23255_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=template&id=7df23255&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=template&id=7df23255& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_template_id_7df23255___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateNewChat.vue?vue&type=template&id=7df23255& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/CreateNewChat.vue?vue&type=template&id=7df23255&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_template_id_7df23255___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewChat_vue_vue_type_template_id_7df23255___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/EmojiWindow.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/EmojiWindow.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmojiWindow_vue_vue_type_template_id_e5f26e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmojiWindow.vue?vue&type=template&id=e5f26e22&scoped=true& */ "./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=template&id=e5f26e22&scoped=true&");
/* harmony import */ var _EmojiWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmojiWindow.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmojiWindow_vue_vue_type_style_index_0_id_e5f26e22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss& */ "./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmojiWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmojiWindow_vue_vue_type_template_id_e5f26e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmojiWindow_vue_vue_type_template_id_e5f26e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e5f26e22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/components/EmojiWindow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiWindow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_style_index_0_id_e5f26e22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=style&index=0&id=e5f26e22&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_style_index_0_id_e5f26e22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_style_index_0_id_e5f26e22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_style_index_0_id_e5f26e22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_style_index_0_id_e5f26e22_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=template&id=e5f26e22&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=template&id=e5f26e22&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_template_id_e5f26e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiWindow.vue?vue&type=template&id=e5f26e22&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/EmojiWindow.vue?vue&type=template&id=e5f26e22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_template_id_e5f26e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiWindow_vue_vue_type_template_id_e5f26e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/FileUpload.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/FileUpload.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileUpload_vue_vue_type_template_id_2a005514_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=template&id=2a005514&scoped=true& */ "./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=template&id=2a005514&scoped=true&");
/* harmony import */ var _FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileUpload_vue_vue_type_style_index_0_id_2a005514_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss& */ "./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileUpload_vue_vue_type_template_id_2a005514_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileUpload_vue_vue_type_template_id_2a005514_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a005514",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/components/FileUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_2a005514_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=style&index=0&id=2a005514&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_2a005514_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_2a005514_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_2a005514_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_2a005514_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=template&id=2a005514&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=template&id=2a005514&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_2a005514_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUpload.vue?vue&type=template&id=2a005514&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/FileUpload.vue?vue&type=template&id=2a005514&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_2a005514_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_2a005514_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/MessageInput.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/MessageInput.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageInput_vue_vue_type_template_id_514e87ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageInput.vue?vue&type=template&id=514e87ba&scoped=true& */ "./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=template&id=514e87ba&scoped=true&");
/* harmony import */ var _MessageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageInput.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MessageInput_vue_vue_type_style_index_0_id_514e87ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss& */ "./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MessageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageInput_vue_vue_type_template_id_514e87ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessageInput_vue_vue_type_template_id_514e87ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "514e87ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/components/MessageInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_style_index_0_id_514e87ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=style&index=0&id=514e87ba&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_style_index_0_id_514e87ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_style_index_0_id_514e87ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_style_index_0_id_514e87ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_style_index_0_id_514e87ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=template&id=514e87ba&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=template&id=514e87ba&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_template_id_514e87ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageInput.vue?vue&type=template&id=514e87ba&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageInput.vue?vue&type=template&id=514e87ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_template_id_514e87ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageInput_vue_vue_type_template_id_514e87ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/MessageItem.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/MessageItem.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageItem_vue_vue_type_template_id_5c4d625a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageItem.vue?vue&type=template&id=5c4d625a&scoped=true& */ "./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=template&id=5c4d625a&scoped=true&");
/* harmony import */ var _MessageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageItem.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MessageItem_vue_vue_type_style_index_0_id_5c4d625a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss& */ "./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MessageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageItem_vue_vue_type_template_id_5c4d625a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessageItem_vue_vue_type_template_id_5c4d625a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5c4d625a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/components/MessageItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_5c4d625a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=style&index=0&id=5c4d625a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_5c4d625a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_5c4d625a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_5c4d625a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_5c4d625a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=template&id=5c4d625a&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=template&id=5c4d625a&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_template_id_5c4d625a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageItem.vue?vue&type=template&id=5c4d625a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/MessageItem.vue?vue&type=template&id=5c4d625a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_template_id_5c4d625a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_template_id_5c4d625a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/UserList.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/UserList.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_f73ac980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=f73ac980&scoped=true& */ "./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=template&id=f73ac980&scoped=true&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserList_vue_vue_type_style_index_0_id_f73ac980_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss& */ "./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_f73ac980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_f73ac980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f73ac980",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/components/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_f73ac980_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=style&index=0&id=f73ac980&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_f73ac980_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_f73ac980_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_f73ac980_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_f73ac980_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=template&id=f73ac980&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=template&id=f73ac980&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_f73ac980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=f73ac980&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/UserList.vue?vue&type=template&id=f73ac980&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_f73ac980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_f73ac980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/VideoPlayer.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/VideoPlayer.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPlayer_vue_vue_type_template_id_224c3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=template&id=224c3d55&scoped=true& */ "./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=template&id=224c3d55&scoped=true&");
/* harmony import */ var _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VideoPlayer_vue_vue_type_style_index_0_id_224c3d55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true& */ "./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoPlayer_vue_vue_type_template_id_224c3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoPlayer_vue_vue_type_template_id_224c3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "224c3d55",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/chat/components/VideoPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_224c3d55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=style&index=0&id=224c3d55&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_224c3d55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_224c3d55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_224c3d55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_224c3d55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=template&id=224c3d55&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=template&id=224c3d55&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_224c3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=template&id=224c3d55&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/chat/components/VideoPlayer.vue?vue&type=template&id=224c3d55&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_224c3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_224c3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=6.js.map