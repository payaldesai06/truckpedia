(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_EmailInbox_AccountList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/EmailInbox/AccountList */ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue");
/* harmony import */ var _components_EmailInbox_MailViewBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/EmailInbox/MailViewBox */ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue");
/* harmony import */ var _components_EmailInbox_MailThreads_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/EmailInbox/MailThreads.vue */ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MailIndex',
  components: {
    AccountList: _components_EmailInbox_AccountList__WEBPACK_IMPORTED_MODULE_2__["default"],
    MailViewBox: _components_EmailInbox_MailViewBox__WEBPACK_IMPORTED_MODULE_3__["default"],
    MailThreads: _components_EmailInbox_MailThreads_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      selectedEmailAccounts: [],
      selectedThread: {},
      viewMode: 'viewByAllInboxes'
    };
  },
  methods: {
    handleEmailClicked: function handleEmailClicked(item) {
      if (item !== this.selectedEmailAccounts[0]) {
        this.selectedThread = {};
      }

      this.selectedEmailAccounts = [item];
    },
    handelThreadClicked: function () {
      var _handelThreadClicked = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(emailAccountId, thread) {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.$store.dispatch('marketing/getThreadMessages', {
                  id: emailAccountId,
                  threadId: thread.id
                });

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                // Needed in child pages' API.
                data.payload.thread.emailAccountId = emailAccountId;
                this.selectedThread = data.payload.thread; // We shall ONLY mark a thread as read if it's successfully loaded.
                // It's wrong if we mark a thread as read even before we get it, cause
                // the latter can fail due to various reasons, like BE bug.

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                _context.next = 13;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_5__["getApiErrorMsg"])(_context.t0)
                });

              case 13:
                _context.prev = 13;
                return _context.finish(13);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9, 13, 15]]);
      }));

      return function handelThreadClicked(_x, _x2) {
        return _handelThreadClicked.apply(this, arguments);
      };
    }(),
    handleThreadUpdated: function handleThreadUpdated(thread) {
      this.$refs.threadList.updateThread(thread);
    },
    handleViewChange: function handleViewChange(_ref2) {
      var view = _ref2.view,
          accountList = _ref2.accountList;
      this.viewMode = view;
      this.selectedEmailAccounts = accountList || [];
      this.selectedThread = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primevue_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/accordion */ "./node_modules/primevue/accordion/index.js");
/* harmony import */ var primevue_accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primevue_accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primevue_accordiontab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/accordiontab */ "./node_modules/primevue/accordiontab/index.js");
/* harmony import */ var primevue_accordiontab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primevue_accordiontab__WEBPACK_IMPORTED_MODULE_3__);



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AccountList',
  components: {
    Accordion: primevue_accordion__WEBPACK_IMPORTED_MODULE_2___default.a,
    AccordionTab: primevue_accordiontab__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  props: {
    viewMode: {
      type: String,
      default: 'viewByAllInboxes'
    }
  },
  data: function data() {
    return {
      search: '',
      inboxes: [],
      selectedItem: null
    };
  },
  created: function created() {
    this.getEmailAccounts();
  },
  methods: {
    getEmailAccounts: function () {
      var _getEmailAccounts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.loading = true;
                _context.next = 4;
                return this.$store.dispatch('marketing/getEmailAccountList', {});

              case 4:
                _ref = _context.sent;
                data = _ref.data;
                this.inboxes = data.payload.emailAccounts;
                this.$emit('onViewChange', {
                  view: 'viewByAllInboxes',
                  accountList: this.inboxes
                });
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                _context.next = 14;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: getApiErrorMsg(_context.t0)
                });

              case 14:
                _context.prev = 14;
                this.loading = false;
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10, 14, 17]]);
      }));

      return function getEmailAccounts() {
        return _getEmailAccounts.apply(this, arguments);
      };
    }(),
    handleEmailClick: function handleEmailClick(item) {
      this.selectedItem = item;
      this.$emit('email-clicked', item);

      if (this.viewMode !== 'viewByAccount') {
        this.$emit('onViewChange', {
          view: 'viewByAccount',
          accountList: [item]
        });
      }
    },
    onViewChange: function onViewChange(view) {
      if (view === 'viewByAllInboxes' && this.viewMode !== 'viewByAllInboxes') {
        this.selectedItem = null;
        this.$emit('onViewChange', {
          view: 'viewByAllInboxes',
          accountList: this.inboxes
        });
      } else if (view === 'viewByAccount' && this.viewMode !== 'viewByAccount') {
        this.$emit('onViewChange', {
          view: 'viewByAccount'
        });
      }
    }
  },
  computed: {
    calcInboxes: function calcInboxes() {
      var _this = this;

      if (!this.search) {
        return this.inboxes;
      }

      return this.inboxes.filter(function (item) {
        return item.email.toLowerCase().includes(_this.search.toLowerCase());
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var primevue_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primevue/progressspinner */ "./node_modules/primevue/progressspinner/index.js");
/* harmony import */ var primevue_progressspinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primevue_progressspinner__WEBPACK_IMPORTED_MODULE_10__);










function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_4___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_3___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MailThreads',
  props: {
    selectedEmailAccounts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    viewMode: {
      type: String,
      default: 'viewByAllInboxes'
    }
  },
  components: {
    ProgressSpinner: primevue_progressspinner__WEBPACK_IMPORTED_MODULE_10___default.a
  },
  data: function data() {
    return {
      searchThread: '',
      activeIndex: -1,
      loading: false,
      threadMessages: [],
      nextPageToken: {},
      emailThreadIds: {},
      currentPage: 0
    };
  },
  methods: {
    scrollToBottom: function scrollToBottom() {
      var emailListRef = this.$refs.emailListRef;
      emailListRef.scrollTo({
        top: emailListRef.scrollHeight,
        behavior: 'smooth'
      });
    },
    handleLoadMoreEmails: function handleLoadMoreEmails() {
      if (!this.loading && this.threadMessages.length > 0) {
        this.scrollToBottom();

        if (this.viewMode === 'viewByAllInboxes') {
          this.fetchEmails();
        } else {
          this.getEmailThreads(this.selectedEmailAccounts[0].id, this.searchThread);
        }
      }
    },
    setActive: function setActive(index, thread) {
      var _this = this;

      if (this.activeIndex !== index) {
        this.activeIndex = index;
        var previouslyActive = document.querySelector('.thread-card.active');

        if (previouslyActive) {
          previouslyActive.classList.remove('active');
        }

        var emailAccountId = this.viewMode === 'viewByAllInboxes' ? _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(this.emailThreadIds).find(function (key) {
          return _this.emailThreadIds[key].includes(thread.id);
        }) : this.selectedEmailAccounts[0].id;
        this.$emit('thread-clicked', emailAccountId, this.threadMessages[index]);
      }
    },
    getEmailThreads: function () {
      var _getEmailThreads = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(id) {
        var searchQuery,
            _this$threadMessages,
            payload,
            _ref,
            data,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                searchQuery = _args.length > 1 && _args[1] !== undefined ? _args[1] : undefined;
                _context.prev = 1;
                this.loading = true;
                payload = {
                  q: searchQuery,
                  pageToken: this.nextPageToken[id] || null,
                  withContent: false
                };

                if (this.threadMessages.length) {
                  payload.threadIdsToExclude = this.threadMessages.filter(function (thread) {
                    return thread.messages.length > 1;
                  }).map(function (thread) {
                    return thread.id;
                  }).join(',');
                }

                _context.next = 7;
                return this.$store.dispatch('marketing/getThreads', {
                  id: id,
                  payload: payload
                });

              case 7:
                _ref = _context.sent;
                data = _ref.data;

                (_this$threadMessages = this.threadMessages).push.apply(_this$threadMessages, _toConsumableArray(data.payload.threads));

                if (data.payload.nextPageToken) {
                  this.nextPageToken[id] = data.payload.nextPageToken;
                } else {
                  delete this.nextPageToken[id];
                }

                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                _context.next = 17;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(_context.t0)
                });

              case 17:
                _context.prev = 17;
                this.loading = false;
                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13, 17, 20]]);
      }));

      return function getEmailThreads(_x) {
        return _getEmailThreads.apply(this, arguments);
      };
    }(),
    // searchThreads() {
    //   if (this.selectedEmailAccounts.id) {
    //     this.getEmailThreads(this.selectedEmailAccounts.id, this.searchThread);
    //   }
    // },
    utcToLocalTime: function utcToLocalTime(utcTime) {
      if (!utcTime) return '';
      return this.$dayjs.utc(utcTime).local().format('MM/DD');
    },
    threadHasUnreadMessages: function threadHasUnreadMessages(thread) {
      return thread.messages.some(function (m) {
        return m.unread;
      });
    },
    // Update a thread based on get one thread API.
    updateThread: function updateThread(thread) {
      for (var i = 0; i < this.threadMessages.length; ++i) {
        if (this.threadMessages[i].id == thread.id) {
          this.threadMessages[i] = thread;
          this.$forceUpdate();
          break;
        }
      }
    },
    getSenderName: function getSenderName(thread) {
      var _this2 = this;

      if (thread.messages.length === 1) {
        var _thread$messages$ = thread.messages[0],
            from = _thread$messages$.from,
            sender = _thread$messages$.sender;
        return from || sender;
      } else {
        var email = '';

        if (this.viewMode === 'viewByAllInboxes') {
          email = (this.selectedEmailAccounts.find(function (account) {
            return _this2.emailThreadIds[account.id].includes(thread.id);
          }) || {}).email;
        } else {
          email = this.selectedEmailAccounts[0].email;
        } // If the thread has more than one email, use the name (if no name,
        // then email) of the last message whose sender != myself.


        var lastMessageNotFromMe = thread.messages.slice().reverse().find(function (message) {
          return message.sender !== email;
        });

        if (lastMessageNotFromMe) {
          return lastMessageNotFromMe.from || lastMessageNotFromMe.sender;
        } else {
          // If the thread has more than one email and all emails are sent by
          // myself, then display the last message’s sender name (which is myself).
          return thread.messages[thread.messages.length - 1].from || thread.messages[thread.messages.length - 1].sender;
        }
      }
    },
    fetchEmails: function () {
      var _fetchEmails = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4() {
        var _this3 = this;

        var fetchEmailThreads, sortThreads, emailAccounts, firstBatchMessages, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref6, id, _res, restMessages, i, _emailAccounts, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, emailAccount, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // try {
                this.loading = true;

                fetchEmailThreads =
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(emailAccountId) {
                    var payload, _ref3, data;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            payload = {
                              q: _this3.searchThread,
                              pageToken: _this3.nextPageToken[emailAccountId] || null,
                              withContent: false
                            };

                            if ((_this3.emailThreadIds[emailAccountId] || []).length) {
                              payload.threadIdsToExclude = _this3.emailThreadIds[emailAccountId].join(',');
                            }

                            _context2.next = 4;
                            return _this3.$store.dispatch('marketing/getThreads', {
                              id: emailAccountId,
                              payload: payload
                            });

                          case 4:
                            _ref3 = _context2.sent;
                            data = _ref3.data;
                            return _context2.abrupt("return", data);

                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function fetchEmailThreads(_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }();

                sortThreads =
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {
                    var messages,
                        threadsOnSamePage,
                        threadsOnDifferentPages,
                        _args3 = arguments;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            messages = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                            threadsOnSamePage = [];
                            threadsOnDifferentPages = [];

                            _this3.threadMessages.forEach(function (thread) {
                              if (thread.page === _this3.currentPage) {
                                threadsOnSamePage.push(thread);
                              } else {
                                threadsOnDifferentPages.push(thread);
                              }
                            });

                            _this3.threadMessages = threadsOnDifferentPages.concat(_toConsumableArray(threadsOnSamePage.concat(_toConsumableArray(messages)).map(function (thread) {
                              return _objectSpread({}, thread, {
                                page: _this3.currentPage
                              });
                            }).sort(function (a, b) {
                              return _this3.$dayjs.utc(a.messages[a.messages.length - 1].utcDate).isBefore(_this3.$dayjs.utc(b.messages[b.messages.length - 1].utcDate)) ? 1 : -1;
                            })));

                          case 5:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function sortThreads() {
                    return _ref4.apply(this, arguments);
                  };
                }(); // First, get the first 6 email accounts.


                emailAccounts = this.selectedEmailAccounts.slice(0, 6);
                firstBatchMessages = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 8;
                _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default()(emailAccounts);

              case 10:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context4.next = 26;
                  break;
                }

                _ref6 = _step.value;
                id = _ref6.id;
                _context4.prev = 13;

                if (!(this.nextPageToken[id] != null || this.currentPage === 0)) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 17;
                return fetchEmailThreads(id);

              case 17:
                _res = _context4.sent;

                if ((_res || {}).payload) {
                  firstBatchMessages.push.apply(firstBatchMessages, _toConsumableArray(_res.payload.threads));
                  this.emailThreadIds[id] = _toConsumableArray(this.emailThreadIds[id] || []).concat(_toConsumableArray(_res.payload.threads.map(function (thread) {
                    return thread.id;
                  })));

                  if (_res.payload.nextPageToken) {
                    this.nextPageToken[id] = _res.payload.nextPageToken;
                  } else {
                    delete this.nextPageToken[id];
                  }
                }

              case 19:
                _context4.next = 23;
                break;

              case 21:
                _context4.prev = 21;
                _context4.t0 = _context4["catch"](13);

              case 23:
                _iteratorNormalCompletion = true;
                _context4.next = 10;
                break;

              case 26:
                _context4.next = 32;
                break;

              case 28:
                _context4.prev = 28;
                _context4.t1 = _context4["catch"](8);
                _didIteratorError = true;
                _iteratorError = _context4.t1;

              case 32:
                _context4.prev = 32;
                _context4.prev = 33;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 35:
                _context4.prev = 35;

                if (!_didIteratorError) {
                  _context4.next = 38;
                  break;
                }

                throw _iteratorError;

              case 38:
                return _context4.finish(35);

              case 39:
                return _context4.finish(32);

              case 40:
                _context4.next = 42;
                return sortThreads(firstBatchMessages);

              case 42:
                this.loading = false;
                restMessages = []; // If there are more than 6 email accounts, then divide them into groups of 6 and query them one by one.

                i = 6;

              case 45:
                if (!(i < this.selectedEmailAccounts.length)) {
                  _context4.next = 86;
                  break;
                }

                _emailAccounts = this.selectedEmailAccounts.slice(i, i + 6);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context4.prev = 50;
                _iterator2 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default()(_emailAccounts);

              case 52:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context4.next = 67;
                  break;
                }

                emailAccount = _step2.value;
                _context4.prev = 54;

                if (!(this.nextPageToken[emailAccount.id] != null || this.currentPage === 0)) {
                  _context4.next = 60;
                  break;
                }

                _context4.next = 58;
                return fetchEmailThreads(emailAccount.id);

              case 58:
                res = _context4.sent;

                if ((res || {}).payload) {
                  restMessages.push.apply(restMessages, _toConsumableArray(res.payload.threads));
                  this.emailThreadIds[emailAccount.id] = _toConsumableArray(this.emailThreadIds[emailAccount.id] || []).concat(_toConsumableArray(res.payload.threads.map(function (thread) {
                    return thread.id;
                  })));

                  if (res.payload.nextPageToken) {
                    this.nextPageToken[emailAccount.id] = res.payload.nextPageToken;
                  } else {
                    delete this.nextPageToken[emailAccount.id];
                  }
                }

              case 60:
                _context4.next = 64;
                break;

              case 62:
                _context4.prev = 62;
                _context4.t2 = _context4["catch"](54);

              case 64:
                _iteratorNormalCompletion2 = true;
                _context4.next = 52;
                break;

              case 67:
                _context4.next = 73;
                break;

              case 69:
                _context4.prev = 69;
                _context4.t3 = _context4["catch"](50);
                _didIteratorError2 = true;
                _iteratorError2 = _context4.t3;

              case 73:
                _context4.prev = 73;
                _context4.prev = 74;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 76:
                _context4.prev = 76;

                if (!_didIteratorError2) {
                  _context4.next = 79;
                  break;
                }

                throw _iteratorError2;

              case 79:
                return _context4.finish(76);

              case 80:
                return _context4.finish(73);

              case 81:
                _context4.next = 83;
                return sortThreads(restMessages);

              case 83:
                i += 6;
                _context4.next = 45;
                break;

              case 86:
                this.currentPage++; // } catch (error) {}

              case 87:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[8, 28, 32, 40], [13, 21], [33,, 35, 39], [50, 69, 73, 81], [54, 62], [74,, 76, 80]]);
      }));

      return function fetchEmails() {
        return _fetchEmails.apply(this, arguments);
      };
    }()
  },
  watch: {
    selectedEmailAccounts: function selectedEmailAccounts(newVal) {
      this.nextPageToken = {};
      this.threadMessages = [];
      this.activeIndex = -1;
      this.emailThreadIds = {};
      this.currentPage = 0;

      if (newVal.length) {
        if (this.viewMode === 'viewByAllInboxes') {
          this.fetchEmails();
        } else {
          this.getEmailThreads(newVal[0].id);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MailViewBox',
  props: {
    selectedThread: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      collapsedMessageIds: [],
      loadedMessageIds: []
    };
  },
  watch: {
    selectedThread: function selectedThread(newVal, oldVal) {
      if (newVal.id !== oldVal.id && newVal.id && newVal.messages) {
        this.collapsedMessageIds = [];
        this.loadedMessageIds = [];

        if (newVal.messages.length == 0) {
          // Should not happen.
          return;
        }

        if (newVal.messages.length === 1) {
          this.loadInlineAttachments(newVal.messages[0]);
        } else {
          // If all messages are already read, then collapse all messages except
          // the last one and load inline attachments for the last message only.
          if (newVal.messages.every(function (item) {
            return !item.unread;
          })) {
            this.collapsedMessageIds = newVal.messages.slice(0, newVal.messages.length - 1).map(function (item) {
              return item.id;
            });
            this.loadInlineAttachments(newVal.messages[newVal.messages.length - 1]);
          } else {
            // If some messages are unread, then collapse the read messages and
            // load inline attachments for all unread messages.
            this.collapsedMessageIds = newVal.messages.filter(function (item) {
              return !item.unread;
            }).map(function (item) {
              return item.id;
            }); // Note here we need to filter unread messages before we call
            // markMessageAsUnread, otherwise all unread messages except the
            // first will not be loaded, cause unread is changed in
            // markMessageAsUnread.

            this.loadMessagesInlineAttachments(newVal.messages.filter(function (item) {
              return item.unread;
            }));
          }
        }

        this.markMessageAsUnread(newVal);
        this.$emit('threadUpdated', newVal);
      }
    }
  },
  created: function created() {},
  methods: {
    utcToLocalTime: function utcToLocalTime(utcTime) {
      return this.$dayjs.utc(utcTime).local().format('MMM DD, YYYY h:mm A');
    },
    loadMessagesInlineAttachments: function () {
      var _loadMessagesInlineAttachments = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(messages) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 3;
                _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(messages);

              case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 12;
                  break;
                }

                message = _step.value;
                _context.next = 9;
                return this.loadInlineAttachments(message);

              case 9:
                _iteratorNormalCompletion = true;
                _context.next = 5;
                break;

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 18:
                _context.prev = 18;
                _context.prev = 19;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 21:
                _context.prev = 21;

                if (!_didIteratorError) {
                  _context.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context.finish(21);

              case 25:
                return _context.finish(18);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
      }));

      return function loadMessagesInlineAttachments(_x) {
        return _loadMessagesInlineAttachments.apply(this, arguments);
      };
    }(),
    // For one message.
    loadInlineAttachments: function () {
      var _loadInlineAttachments = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(message) {
        var attachmentIds, loadedAttachments, temp, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _loop, _iterator2, _step2, _ret;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (message.attachments) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                attachmentIds = message.attachments.filter(function (item) {
                  return item.cid && (item.contentDisposition === 'inline' || item.contentType.startsWith('image') && message.content.includes('src="cid:' + item.cid + '"'));
                } // inline image
                ).map(function (item) {
                  return item.id;
                });

                if (!(attachmentIds.length == 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return this.getMessageAttachments(message.id, attachmentIds);

              case 7:
                loadedAttachments = _context2.sent;
                temp = document.createElement('div');
                temp.innerHTML = message.content;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 13;

                _loop = function _loop() {
                  var loaded = _step2.value;
                  var attachment = message.attachments.find(function (a) {
                    return a.id === loaded.id;
                  });

                  if (!attachment) {
                    return "continue";
                  }

                  var base64Content = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_3__["base64UrlToBase64"])(loaded.content);
                  var blobSrc = URL.createObjectURL(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_3__["b64toBlob"])(base64Content, attachment.contentType)); // const base64Src =
                  // 'data:' + attachment.contentType + ';base64,' + base64Content;
                  // const imgTags = message.content.match(/<img [^>]*src="[^"]*"[^>]*>/gm);

                  temp.querySelectorAll('img').forEach(function (img) {
                    if (/^cid:/.test(img.src) && attachment.cid == img.src.slice(4).trim()) {
                      img.src = blobSrc;
                    }
                  });
                };

                _iterator2 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(loadedAttachments);

              case 16:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context2.next = 23;
                  break;
                }

                _ret = _loop();

                if (!(_ret === "continue")) {
                  _context2.next = 20;
                  break;
                }

                return _context2.abrupt("continue", 20);

              case 20:
                _iteratorNormalCompletion2 = true;
                _context2.next = 16;
                break;

              case 23:
                _context2.next = 29;
                break;

              case 25:
                _context2.prev = 25;
                _context2.t0 = _context2["catch"](13);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 29:
                _context2.prev = 29;
                _context2.prev = 30;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 32:
                _context2.prev = 32;

                if (!_didIteratorError2) {
                  _context2.next = 35;
                  break;
                }

                throw _iteratorError2;

              case 35:
                return _context2.finish(32);

              case 36:
                return _context2.finish(29);

              case 37:
                message.content = temp.innerHTML;
                this.loadedMessageIds.push(message.id);

              case 39:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[13, 25, 29, 37], [30,, 32, 36]]);
      }));

      return function loadInlineAttachments(_x2) {
        return _loadInlineAttachments.apply(this, arguments);
      };
    }(),
    getMessageAttachments: function () {
      var _getMessageAttachments = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(messageId, attachmentIds) {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.$store.dispatch('marketing/getMessageAttachments', {
                  id: this.selectedThread.emailAccountId,
                  messageId: messageId,
                  payload: {
                    attachmentIds: attachmentIds
                  }
                });

              case 3:
                _ref = _context3.sent;
                data = _ref.data;
                return _context3.abrupt("return", data.payload.message.attachments);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                _context3.next = 12;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_3__["getApiErrorMsg"])(_context3.t0)
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      return function getMessageAttachments(_x3, _x4) {
        return _getMessageAttachments.apply(this, arguments);
      };
    }(),
    markMessageAsUnread: function () {
      var _markMessageAsUnread = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(thread) {
        var unreadMessageIds;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                unreadMessageIds = [];
                thread.messages.forEach(function (m) {
                  if (m.unread) {
                    m.unread = false;
                    unreadMessageIds.push(m.id);
                  }
                });

                if (!(unreadMessageIds.length == 0)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:
                _context4.next = 7;
                return this.$store.dispatch('marketing/updateThreadMessage', {
                  id: this.selectedThread.emailAccountId,
                  threadId: thread.id,
                  messageIds: unreadMessageIds,
                  unread: false
                });

              case 7:
                _context4.next = 13;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                _context4.next = 13;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_3__["getApiErrorMsg"])(_context4.t0)
                });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      return function markMessageAsUnread(_x5) {
        return _markMessageAsUnread.apply(this, arguments);
      };
    }(),
    getContentString: function getContentString(content) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(content, 'text/html');
      return doc.body.textContent || doc.body.innerText || '';
    },
    expandMessage: function expandMessage(messageId) {
      this.collapsedMessageIds = this.collapsedMessageIds.filter(function (id) {
        return id !== messageId;
      });

      if (!this.loadedMessageIds.includes(messageId)) {
        var message = this.selectedThread.messages.find(function (item) {
          return item.id === messageId;
        });
        this.loadInlineAttachments(message);
      }
    },
    collapseMessage: function collapseMessage(messageId) {
      this.collapsedMessageIds.push(messageId);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=template&id=7d66d630&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=template&id=7d66d630&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "flex"
  }, [_c("div", {
    staticClass: "pr-4",
    staticStyle: {
      "min-width": "15%"
    }
  }, [_c("AccountList", {
    attrs: {
      viewMode: _vm.viewMode
    },
    on: {
      "email-clicked": _vm.handleEmailClicked,
      onViewChange: _vm.handleViewChange
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "px-4",
    staticStyle: {
      "min-width": "20%"
    }
  }, [_c("MailThreads", {
    ref: "threadList",
    attrs: {
      selectedEmailAccounts: _vm.selectedEmailAccounts,
      viewMode: _vm.viewMode
    },
    on: {
      "thread-clicked": _vm.handelThreadClicked
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "pl-4",
    staticStyle: {
      "min-width": "65%"
    }
  }, [_c("MailViewBox", {
    attrs: {
      selectedThread: _vm.selectedThread
    },
    on: {
      threadUpdated: _vm.handleThreadUpdated
    }
  })], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=template&id=baed729e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=template&id=baed729e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "overflow-auto",
    staticStyle: {
      height: "calc(100vh - 28px)"
    }
  }, [_c("div", {
    attrs: {
      id: "email-treads"
    }
  }, [_c("div", {
    staticClass: "index-box",
    on: {
      click: function click($event) {
        return _vm.onViewChange("viewByAllInboxes");
      }
    }
  }, [_c("span", [_vm._v(" All Inboxes ")]), _vm._v(" "), _c("span", {
    staticClass: "p-accordion-toggle-icon pi pi-chevron-right"
  })]), _vm._v(" "), _c("Accordion", {
    staticClass: "accordion-custom",
    nativeOn: {
      click: function click($event) {
        return _vm.onViewChange("viewByAccount");
      }
    }
  }, [_c("AccordionTab", {
    attrs: {
      header: "All Email Accounts"
    }
  }, [_c("div", [_c("div", {
    staticClass: "overflow-auto",
    staticStyle: {
      "max-height": "calc(100vh - 106px)"
    }
  }, _vm._l(_vm.calcInboxes, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "flex items-center mb-3 cursor-pointer px-3",
      class: {
        selected: _vm.selectedItem && item.id === _vm.selectedItem.id
      },
      staticStyle: {
        "min-height": "30px"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.handleEmailClick(item);
        }
      }
    }, [_c("span", {
      staticClass: "text-ellipsis"
    }, [_vm._v(_vm._s(item.email))])]);
  }), 0)])])], 1)], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=template&id=3507d690&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=template&id=3507d690&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);


var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    ref: "emailListRef",
    staticClass: "overflow-auto",
    style: _vm.loading ? {
      height: "calc(100vh - 70px)"
    } : {
      "max-height": "calc(100vh - 70px)"
    }
  }, [_vm._l(_vm.threadMessages, function (thread, index) {
    return _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.threadMessages.length !== 0,
        expression: "threadMessages.length !== 0"
      }],
      key: index,
      class: ["thread-card", {
        active: index === _vm.activeIndex
      }],
      on: {
        click: function click($event) {
          return _vm.setActive(index, thread);
        }
      }
    }, [_c("div", {
      staticClass: "flex items-center justify-between mb-2 gap-2"
    }, [_c("h6", {
      class: {
        "font-bold": _vm.threadHasUnreadMessages(thread)
      }
    }, [_vm._v("\n          " + _vm._s(_vm.getSenderName(thread)) + "\n        ")]), _vm._v(" "), _c("span", {
      class: {
        "font-bold": _vm.threadHasUnreadMessages(thread)
      }
    }, [_vm._v(_vm._s(_vm.utcToLocalTime(thread.messages[thread.messages.length - 1].utcDate)))])]), _vm._v(" "), _c("div", {
      staticClass: "thread-card-content"
    }, [_c("p", {
      staticClass: "mb-2",
      class: {
        "font-bold": _vm.threadHasUnreadMessages(thread)
      }
    }, [_vm._v("\n          " + _vm._s(thread.messages[thread.messages.length - 1].subject) + "\n        ")])])]);
  }), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "flex items-center justify-center mt-10"
  }, [_c("ProgressSpinner", {
    staticStyle: {
      width: "50px",
      height: "50px"
    },
    attrs: {
      strokeWidth: "5",
      animationDuration: "1s"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.selectedEmailAccounts.length === 0 && _vm.threadMessages.length === 0 && !_vm.loading ? _c("div", {
    staticClass: "flex items-center justify-center empty-thread"
  }, [_vm._m(0)]) : _vm.selectedEmailAccounts.length && _vm.threadMessages.length === 0 && !_vm.loading ? _c("div", {
    staticClass: "flex items-center justify-center empty-thread"
  }, [_vm._m(1)]) : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "load-more-btn"
  }, [!_vm.loading && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_vm.nextPageToken).length > 0 ? _c("button", {
    staticClass: "mr-10",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.handleLoadMoreEmails
    }
  }, [_vm._v("\n      Load More\n    ")]) : _vm._e()])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "flex items-center justify-center",
    staticStyle: {
      "flex-direction": "column"
    }
  }, [_c("h5", {
    staticClass: "mt-4"
  }, [_vm._v("Select an account")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "flex items-center justify-center",
    staticStyle: {
      "flex-direction": "column"
    }
  }, [_c("h5", {
    staticClass: "mt-4"
  }, [_vm._v("No emails found")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=template&id=75150775&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=template&id=75150775&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", [_c("div", {
    staticClass: "header"
  }), _vm._v(" "), _c("div", {
    staticClass: "subHeader"
  }, [_c("div", {
    staticClass: "flex justify-between items-center mt-5"
  }, [_c("div", {
    staticClass: "flex items-center justify-between w-full flex-wrap"
  }, [_vm.selectedThread.messages ? _c("div", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("div", [_c("div", {
    staticClass: "profileCircle mr-3"
  }, [_vm._v("\n                  " + _vm._s((_vm.selectedThread.messages[0].from || _vm.selectedThread.messages[0].sender).charAt(0).toUpperCase()) + "\n                ")])]), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                  " + _vm._s(_vm.selectedThread.messages[0].sender) + "\n                ")])])]), _vm._v(" "), _c("vs-divider")], 1) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "overflow-auto",
    staticStyle: {
      "max-height": "calc(100vh - 120px)"
    }
  }, [_c("div", [_vm.selectedThread && _vm.selectedThread.messages ? _c("div", _vm._l(_vm.selectedThread.messages, function (message, index) {
    return _c("div", {
      key: index
    }, [index > 0 ? _c("vs-divider") : _vm._e(), _vm._v(" "), _vm.collapsedMessageIds.includes(message.id) ? _c("div", {
      staticClass: "cursor-pointer",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.expandMessage(message.id);
        }
      }
    }, [_c("span", {
      staticClass: "font-bold"
    }, [_vm._v("\n                " + _vm._s(message.from || message.sender || "") + "\n              ")]), _vm._v(" "), _c("p", {
      staticClass: "truncate"
    }, [_vm._v("\n                " + _vm._s(_vm.getContentString(message.content)) + "\n              ")])]) : _c("div", [_c("div", {
      staticClass: "cursor-pointer mb-5",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.collapseMessage(message.id);
        }
      }
    }, [_c("h3", {
      staticClass: "mb-3"
    }, [_vm._v(_vm._s(message.subject))]), _vm._v(" "), _c("p", [_c("span", {
      staticClass: "font-bold"
    }, [_vm._v("From: ")]), _vm._v(_vm._s((message.from || "") + " " + message.sender) + "\n                ")]), _vm._v(" "), _c("p", [_c("span", {
      staticClass: "font-bold"
    }, [_vm._v("Date: ")]), _vm._v(_vm._s(_vm.utcToLocalTime(message.utcDate)) + "\n                ")])]), _vm._v(" "), _c("div", {
      staticStyle: {
        width: "100%"
      }
    }, [_c("email-preview", {
      attrs: {
        content: message.content
      }
    })], 1)])], 1);
  }), 0) : _vm._e()])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index-box[data-v-baed729e] {\n  color: #495057;\n  font-weight: 600;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}[dir] .index-box[data-v-baed729e] {\n  padding: 0.6rem 0.9rem;\n  background: rgb(237, 247, 255);\n  border-radius: 12px;\n  border: 0px;\n  margin-bottom: 8px;\n  cursor: pointer;\n}\n.receierBox h4[data-v-baed729e] {\n  font-size: 14px;\n  font-weight: 700;\n}\n.receierBox p[data-v-baed729e] {\n  color: var(--gray-400, #9ca3af);\n  font-size: 14px;\n  font-weight: 500;\n}\n[dir] .selected[data-v-baed729e] {\n  background-color: #edf7ff;\n  border-radius: 12px;\n}\n.selected h4[data-v-baed729e] {\n  color: #4f46e5;\n}\n.status-wrap[data-v-baed729e] {\n  min-height: 50px;\n}\n[dir] .status-wrap[data-v-baed729e] {\n  cursor: pointer;\n  padding: 0px 10px;\n}\n.more-item-wrap[data-v-baed729e] {\n  align-items: center;\n  display: flex;\n  width: 244px;\n}\n[dir] .more-item-wrap[data-v-baed729e] {\n  border-radius: 3px;\n  padding: 12px 20px;\n}\n[dir] .more-item-wrap[data-v-baed729e]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n[dir] .status-wrap[data-v-baed729e]:hover {\n  background-color: rgb(237, 247, 255);\n  border-radius: 12px;\n}\n[dir] .search-input[data-v-baed729e] {\n  border-bottom: 0.5px solid #e2e2e2;\n  padding-bottom: 5px;\n  margin-bottom: 15px;\n}\n.search-input input[data-v-baed729e] {\n  width: 100%;\n  height: 1.1876em;\n  display: block;\n  min-width: 0;\n}\n[dir] .search-input input[data-v-baed729e] {\n  border: 0;\n  margin: 0;\n  padding: 6px 0 7px;\n  background: none;\n}\n[data-v-baed729e] .vs-con-dropdown {\n  width: 100%;\n}\n.text-ellipsis[data-v-baed729e] {\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-3507d690] .vs-input--icon {\n  top: unset;\n}\n.empty-thread[data-v-3507d690] {\n  filter: grayscale(100%);\n  opacity: 0.5;\n  flex-direction: column;\n  position: relative;\n}\n[dir] .empty-thread[data-v-3507d690] {\n  margin: 20px 0;\n}\n.empty-thread h5[data-v-3507d690] {\n  font-size: 1.5rem;\n  font-weight: bolder;\n}\n[dir] .load-more-btn[data-v-3507d690] {\n  margin: 0 15px;\n  margin-top: 15px;\n}\n.load-more-btn button[data-v-3507d690] {\n  width: 100%;\n  outline: none;\n  font-weight: 500;\n}\n[dir] .load-more-btn button[data-v-3507d690] {\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n[dir] .thread-card[data-v-3507d690] {\n  padding: 5px;\n  border-radius: 15px;\n  cursor: pointer;\n}\n[dir=ltr] .thread-card[data-v-3507d690] {\n  margin-right: 5px;\n}\n[dir=rtl] .thread-card[data-v-3507d690] {\n  margin-left: 5px;\n}\n.thread-card h6[data-v-3507d690] {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.thread-card-content p[data-v-3507d690] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n}\n[dir] .active[data-v-3507d690] {\n  background-color: #f4f4f4;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .inboxBtn[data-v-75150775] {\n  border-radius: 4px;\n  background: #ddd;\n  padding: 3px 4px;\n  cursor: pointer;\n}\n.profileCircle[data-v-75150775] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  color: gray;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 500;\n}\n[dir] .profileCircle[data-v-75150775] {\n  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.12) inset;\n  background-color: rgb(218, 218, 218);\n  border-radius: 50%;\n}\n.smallTxt[data-v-75150775] {\n  color: var(--grayText, #585858);\n  font-size: 12px;\n  font-weight: 400;\n}\n.text-underline[data-v-75150775] {\n  text-decoration: underline;\n}\n.content[data-v-75150775] {\n  display: flex;\n  min-height: 63vh;\n  justify-content: center;\n  align-items: center;\n}\n[dir] .content[data-v-75150775] {\n  background-color: #fafafa;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #email-treads\r\n  .p-accordion\r\n  .p-accordion-header:not(.p-disabled).p-highlight\r\n  .p-accordion-header-link, [dir] #email-treads\r\n  .p-accordion\r\n  .p-accordion-header:not(.p-highlight):not(.p-disabled):hover\r\n  .p-accordion-header-link, [dir] #email-treads .p-accordion .p-accordion-header .p-accordion-header-link {\n  background-color: rgb(237, 247, 255);\n  border-radius: 12px;\n  margin-bottom: 8px;\n  border: 0px;\n}[dir=ltr] #email-treads\r\n  .p-accordion\r\n  .p-accordion-header:not(.p-disabled).p-highlight\r\n  .p-accordion-header-link, [dir=ltr] #email-treads\r\n  .p-accordion\r\n  .p-accordion-header:not(.p-highlight):not(.p-disabled):hover\r\n  .p-accordion-header-link, [dir=ltr] #email-treads .p-accordion .p-accordion-header .p-accordion-header-link {\n  padding-right: 0px;\n}[dir=rtl] #email-treads\r\n  .p-accordion\r\n  .p-accordion-header:not(.p-disabled).p-highlight\r\n  .p-accordion-header-link, [dir=rtl] #email-treads\r\n  .p-accordion\r\n  .p-accordion-header:not(.p-highlight):not(.p-disabled):hover\r\n  .p-accordion-header-link, [dir=rtl] #email-treads .p-accordion .p-accordion-header .p-accordion-header-link {\n  padding-left: 0px;\n}\n#email-treads\r\n  .p-accordion\r\n  .p-accordion-header:not(.p-disabled)\r\n  .p-accordion-header-link {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n[dir] #email-treads .p-accordion .p-accordion-content {\n  border: 0px;\n}\n[dir=ltr] #email-treads .p-accordion .p-accordion-content {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n[dir=rtl] #email-treads .p-accordion .p-accordion-content {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n[dir] #email-treads\r\n  .p-accordion\r\n  .p-accordion-header:not(.p-disabled)\r\n  .p-accordion-header-link:focus {\n  box-shadow: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css&");

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

/***/ "./resources/js/src/views/pages/marketing/EmailInbox.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/EmailInbox.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailInbox_vue_vue_type_template_id_7d66d630_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailInbox.vue?vue&type=template&id=7d66d630&scoped=true& */ "./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=template&id=7d66d630&scoped=true&");
/* harmony import */ var _EmailInbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailInbox.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailInbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailInbox_vue_vue_type_template_id_7d66d630_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailInbox_vue_vue_type_template_id_7d66d630_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d66d630",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/EmailInbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailInbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=template&id=7d66d630&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=template&id=7d66d630&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInbox_vue_vue_type_template_id_7d66d630_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailInbox.vue?vue&type=template&id=7d66d630&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/EmailInbox.vue?vue&type=template&id=7d66d630&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInbox_vue_vue_type_template_id_7d66d630_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailInbox_vue_vue_type_template_id_7d66d630_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountList_vue_vue_type_template_id_baed729e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountList.vue?vue&type=template&id=baed729e&scoped=true& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=template&id=baed729e&scoped=true&");
/* harmony import */ var _AccountList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AccountList_vue_vue_type_style_index_0_id_baed729e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss&");
/* harmony import */ var _AccountList_vue_vue_type_style_index_1_id_baed729e_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _AccountList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountList_vue_vue_type_template_id_baed729e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountList_vue_vue_type_template_id_baed729e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "baed729e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_baed729e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=0&id=baed729e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_baed729e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_baed729e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_baed729e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_baed729e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_1_id_baed729e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=style&index=1&id=baed729e&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_1_id_baed729e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_1_id_baed729e_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_1_id_baed729e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_1_id_baed729e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=template&id=baed729e&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=template&id=baed729e&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_template_id_baed729e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountList.vue?vue&type=template&id=baed729e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/AccountList.vue?vue&type=template&id=baed729e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_template_id_baed729e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_template_id_baed729e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MailThreads_vue_vue_type_template_id_3507d690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailThreads.vue?vue&type=template&id=3507d690&scoped=true& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=template&id=3507d690&scoped=true&");
/* harmony import */ var _MailThreads_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailThreads.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MailThreads_vue_vue_type_style_index_0_id_3507d690_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MailThreads_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailThreads_vue_vue_type_template_id_3507d690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MailThreads_vue_vue_type_template_id_3507d690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3507d690",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailThreads.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_style_index_0_id_3507d690_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=style&index=0&id=3507d690&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_style_index_0_id_3507d690_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_style_index_0_id_3507d690_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_style_index_0_id_3507d690_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_style_index_0_id_3507d690_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=template&id=3507d690&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=template&id=3507d690&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_template_id_3507d690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailThreads.vue?vue&type=template&id=3507d690&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailThreads.vue?vue&type=template&id=3507d690&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_template_id_3507d690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MailThreads_vue_vue_type_template_id_3507d690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MailViewBox_vue_vue_type_template_id_75150775_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailViewBox.vue?vue&type=template&id=75150775&scoped=true& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=template&id=75150775&scoped=true&");
/* harmony import */ var _MailViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailViewBox.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MailViewBox_vue_vue_type_style_index_0_id_75150775_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss& */ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MailViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailViewBox_vue_vue_type_template_id_75150775_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MailViewBox_vue_vue_type_template_id_75150775_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75150775",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailViewBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_style_index_0_id_75150775_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=style&index=0&id=75150775&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_style_index_0_id_75150775_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_style_index_0_id_75150775_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_style_index_0_id_75150775_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_style_index_0_id_75150775_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=template&id=75150775&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=template&id=75150775&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_template_id_75150775_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailViewBox.vue?vue&type=template&id=75150775&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailInbox/MailViewBox.vue?vue&type=template&id=75150775&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_template_id_75150775_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MailViewBox_vue_vue_type_template_id_75150775_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=76.js.map