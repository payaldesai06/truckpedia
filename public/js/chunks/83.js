(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IncidentEmailComposer',
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_4__["VueEditor"]
  },
  props: {
    value: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])('auth', ['user']), {
    isRecordOnlyType: function isRecordOnlyType() {
      return this.value && this.value.type === 'recordOnly';
    },
    isSubmitDisabled: function isSubmitDisabled() {
      return this.value && (!this.value.subject || !this.value.content);
    }
  }),
  data: function data() {
    return {
      customToolbar: [[{
        font: []
      }], [{
        header: [false, 1, 2, 3, 4, 5, 6]
      }], ['bold', 'italic', 'underline'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        color: []
      }, {
        background: []
      }], ['link']],
      types: [{
        id: 1,
        label: 'Send Out From Truckpedia',
        value: 'sendOutFromEzpapel'
      }, {
        id: 2,
        label: 'Record Only',
        value: 'recordOnly'
      }],
      emailTo: '',
      emailCc: '',
      emailBcc: '',
      replyTo: ''
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this$value = this.value,
          to = _this$value.to,
          cc = _this$value.cc,
          bcc = _this$value.bcc,
          replyTo = _this$value.replyTo;
      this.emailTo = this.getEmails(to);
      this.emailCc = this.getEmails(cc);
      this.emailBcc = this.getEmails(bcc);
      this.replyTo = this.getEmails(replyTo);
    },
    getEmails: function getEmails(emails) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["arrayToCommaSeparatedString"])(emails);
    },
    setEmail: function setEmail(value, key) {
      this.value[key] = value.split(',').map(function (email) {
        return email.trim();
      }).filter(function (email) {
        return email;
      });
    },
    sendEmail: function sendEmail() {
      this.$emit('send-email');
      this.emailTo = '';
      this.emailCc = '';
      this.emailBcc = '';
      this.replyTo = '';
    },
    cancelEmail: function cancelEmail() {
      this.$emit('cancel-email');
    }
  },
  watch: {
    'value.type': {
      handler: function handler(val) {
        if (val === 'sendOutFromEzpapel') {
          var _ref = (this.user || {}).admin_company_details || {},
              email = _ref.email,
              business_name = _ref.business_name;

          this.value.fromName = business_name || '';
          this.value.replyTo = [email] || false;
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IncidentEmailPreview',
  props: {
    value: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      types: [{
        id: 1,
        label: 'Send Out From Truckpedia',
        value: 'sendOutFromEzpapel'
      }, {
        id: 2,
        label: 'Record Only',
        value: 'recordOnly'
      }]
    };
  },
  methods: {
    getType: function getType(type) {
      return this.types.find(function (t) {
        return t.value === type;
      }).label;
    },
    getLocalDateTime: function getLocalDateTime(dateTimeString) {
      var utcDateTimeString = dateTimeString.replace(' ', 'T').concat('Z');
      return this.$dayjs(utcDateTimeString).format('YYYY-MM-DD HH:mm');
    },
    getEmails: function getEmails(emails) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["arrayToCommaSeparatedString"])(emails);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _IncidentEmailComposer_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IncidentEmailComposer.vue */ "./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue");
/* harmony import */ var _IncidentEmailPreview_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IncidentEmailPreview.vue */ "./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IncidentEmailsTab',
  components: {
    IncidentEmailComposer: _IncidentEmailComposer_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    IncidentEmailPreview: _IncidentEmailPreview_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    value: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    isEmailComposerOpen: function isEmailComposerOpen() {
      return this.emailComposer.isVisible;
    },
    previewEmailId: function previewEmailId() {
      return this.emailPreview.email.emailId;
    }
  },
  data: function data() {
    return {
      emailData: {
        to: [],
        cc: [],
        bcc: [],
        fromName: '',
        from: '',
        replyTo: [],
        subject: '',
        content: '',
        type: 'sendOutFromEzpapel'
      },
      emailComposer: {
        isVisible: false
      },
      emailPreview: {
        isVisible: false,
        email: {}
      }
    };
  },
  methods: {
    resetEmailData: function resetEmailData() {
      this.emailData = {
        to: [],
        cc: [],
        bcc: [],
        fromName: '',
        from: '',
        replyTo: [],
        subject: '',
        content: '',
        type: 'sendOutFromEzpapel'
      };
    },
    closeEmailComposer: function closeEmailComposer() {
      this.emailComposer.isVisible = false;
      this.resetEmailData();
    },
    toggleEmailComposer: function toggleEmailComposer() {
      this.closeEmailPreview();
      this.emailComposer.isVisible = !this.emailComposer.isVisible;
    },
    sendEmail: function () {
      var _sendEmail = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        var payload, _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.$vs.loading({
                  container: '#btn-send-email',
                  scale: 0.45
                });
                payload = _objectSpread({}, this.emailData, {
                  incidentId: Number(this.value.incidentId),
                  from: this.emailData.type === 'sendOutFromEzpapel' ? null : this.emailData.from
                });
                _context.next = 5;
                return this.$store.dispatch('incidents/sendEmail', payload);

              case 5:
                _ref = _context.sent;
                data = _ref.data;

                if (data && data.payload) {
                  delete payload.incidentId;
                  this.value.emails = _toConsumableArray(this.value.emails).concat([_objectSpread({}, payload, {
                    emailId: data.payload.emailId,
                    createdAt: data.payload.createdAt
                  })]).sort(function (a, b) {
                    return b.emailId - a.emailId;
                  });
                }

                this.$vs.notify({
                  title: 'Success',
                  text: "Email ".concat(payload.type === 'sendOutFromEzpapel' ? 'sent' : 'saved', " successfully"),
                  color: 'success'
                });
                this.resetEmailData();
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  title: 'Error',
                  text: _context.t0.response.data.message || _context.t0.message,
                  color: 'danger'
                });

              case 15:
                _context.prev = 15;
                this.$vs.loading.close('#btn-send-email > .con-vs-loading');
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12, 15, 18]]);
      }));

      return function sendEmail() {
        return _sendEmail.apply(this, arguments);
      };
    }(),
    selectEmail: function selectEmail(email) {
      this.closeEmailComposer();
      this.emailPreview = {
        isVisible: true,
        email: email
      };
    },
    closeEmailPreview: function closeEmailPreview() {
      this.emailPreview = {
        isVisible: false,
        email: {}
      };
    },
    getEmails: function getEmails(emails) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_10__["arrayToCommaSeparatedString"])(emails);
    },
    confirmDeleteEmail: function confirmDeleteEmail(event, email, index) {
      var _this = this;

      event.stopPropagation();
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm',
        text: 'Are you sure you want to delete this email?',
        acceptText: 'Yes',
        accept: function accept() {
          return _this.deleteEmail(email, index);
        }
      });
    },
    deleteEmail: function () {
      var _deleteEmail = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(email, index) {
        var payload, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                payload = {
                  incidentId: Number(this.value.incidentId),
                  emailId: email.emailId
                };
                _context2.next = 4;
                return this.$store.dispatch('incidents/deleteEmail', payload);

              case 4:
                response = _context2.sent;

                if (response.status === 200) {
                  this.value.emails.splice(index, 1);
                  this.$vs.notify({
                    title: 'Success',
                    text: "Email delete successfully",
                    color: 'success'
                  });
                  this.emailPreview.isVisible = false;
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.$vs.notify({
                  title: 'Error',
                  color: 'danger',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_10__["getApiErrorMsg"])(_context2.t0)
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      return function deleteEmail(_x, _x2) {
        return _deleteEmail.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=template&id=3998cf09&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=template&id=3998cf09&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex justify-end"
  }, [_c("vs-icon", {
    staticClass: "cursor-pointer",
    attrs: {
      icon: "close",
      size: "small"
    },
    on: {
      click: _vm.cancelEmail
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "email-composer"
  }, [_c("div", {
    staticClass: "my-3"
  }, [_c("div", [_c("label", [_vm._v("Type")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.types,
      clearable: false,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.type,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "type", $$v);
      },
      expression: "value.type"
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isRecordOnlyType,
      expression: "isRecordOnlyType"
    }]
  }, [_c("label", [_vm._v("From")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      }
    },
    model: {
      value: _vm.value.from,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "from", $$v);
      },
      expression: "value.from"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "my-4"
  }, [_vm._v("To")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("Separate multiple emails with commas")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      },
      input: function input($event) {
        return _vm.setEmail($event, "to");
      }
    },
    model: {
      value: _vm.emailTo,
      callback: function callback($$v) {
        _vm.emailTo = $$v;
      },
      expression: "emailTo"
    }
  }), _vm._v(" "), _c("div", [_c("vs-collapse", [_c("vs-collapse-item", {
    staticClass: "p-0"
  }, [_c("div", {
    staticClass: "p-0 m-0",
    attrs: {
      slot: "header"
    },
    slot: "header"
  }, [_c("span", {
    staticClass: "text-sm"
  }, [_vm._v("Show more options")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("CC")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("\n                Separate multiple emails with commas\n              ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      },
      input: function input($event) {
        return _vm.setEmail($event, "cc");
      }
    },
    model: {
      value: _vm.emailCc,
      callback: function callback($$v) {
        _vm.emailCc = $$v;
      },
      expression: "emailCc"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("BCC")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("\n                Separate multiple emails with commas\n              ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      },
      input: function input($event) {
        return _vm.setEmail($event, "bcc");
      }
    },
    model: {
      value: _vm.emailBcc,
      callback: function callback($$v) {
        _vm.emailBcc = $$v;
      },
      expression: "emailBcc"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("From name")]), _vm._v(" "), _c("div", [_c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.value.fromName,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "fromName", $$v);
      },
      expression: "value.fromName"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("Reply to")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("\n                Separate multiple emails with commas\n              ")]), _vm._v(" "), _c("div", [_c("vs-input", {
    staticClass: "w-full",
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      },
      input: function input($event) {
        return _vm.setEmail($event, "replyTo");
      }
    },
    model: {
      value: _vm.replyTo,
      callback: function callback($$v) {
        _vm.replyTo = $$v;
      },
      expression: "replyTo"
    }
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("Subject")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.value.subject,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "subject", $$v);
      },
      expression: "value.subject"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("Content")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      editorToolbar: _vm.customToolbar
    },
    model: {
      value: _vm.value.content,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "content", $$v);
      },
      expression: "value.content"
    }
  })], 1)], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-center md:justify-end mt-2"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      disabled: _vm.isSubmitDisabled,
      id: "btn-send-email"
    },
    on: {
      click: _vm.sendEmail
    }
  }, [_vm._v("\n      " + _vm._s(_vm.isRecordOnlyType ? "Save" : "Send") + "\n    ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "ml-2",
    attrs: {
      type: "border"
    },
    on: {
      click: _vm.cancelEmail
    }
  }, [_vm._v("\n      Cancel\n    ")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=template&id=7bb458ef&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=template&id=7bb458ef&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex justify-end"
  }, [_c("vs-icon", {
    staticClass: "cursor-pointer",
    attrs: {
      icon: "close",
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("close-preview");
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col py-2 mt-2 flex flex-col gap-2 rounded border-gray"
  }, [_c("div", {
    staticClass: "px-4 flex"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v("Date:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.getLocalDateTime(_vm.value.createdAt)))])]), _vm._v(" "), _c("div", {
    staticClass: "px-4 flex"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v("Type:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.getType(_vm.value.type)))])]), _vm._v(" "), _c("div", {
    staticClass: "px-4 flex"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v("From:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.value.from))])]), _vm._v(" "), _c("div", {
    staticClass: "px-4 flex"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v("To:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.getEmails(_vm.value.to)))])]), _vm._v(" "), _c("div", {
    staticClass: "px-4 flex"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v("CC:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.getEmails(_vm.value.cc)))])]), _vm._v(" "), _c("div", {
    staticClass: "px-4 flex"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v("BCC:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.getEmails(_vm.value.bcc)))])]), _vm._v(" "), _c("div", {
    staticClass: "px-4 flex"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v("From name:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.value.fromName))])]), _vm._v(" "), _c("div", {
    staticClass: "px-4 flex"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v("Reply to:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.getEmails(_vm.value.replyTo)))])]), _vm._v(" "), _c("div", {
    staticClass: "px-4 flex"
  }, [_c("p", {
    staticClass: "font-semibold"
  }, [_vm._v("Subject:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.value.subject))])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col mt-4 py-2 rounded border-gray min-h-278"
  }, [_c("div", {
    staticClass: "px-4"
  }, [_c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.value.content)
    }
  })])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=template&id=39a1912a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=template&id=39a1912a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-4"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Emails")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/4"
  }, [_c("div", [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "primary",
      disabled: _vm.isEmailComposerOpen
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.toggleEmailComposer.apply(null, arguments);
      }
    }
  }, [_vm._v("\n            New Email\n          ")])], 1), _vm._v(" "), _c("vs-divider", {
    staticClass: "my-2"
  }), _vm._v(" "), _c("div", {
    staticClass: "email-list overflow-y-auto"
  }, [_c("div", {
    staticClass: "flex flex-col gap-2"
  }, _vm._l(_vm.value.emails, function (email, index) {
    return _c("div", {
      key: email.emailId,
      class: ["p-2 rounded cursor-pointer h-34", _vm.previewEmailId === email.emailId ? "border-gray-highlighted" : "border-gray"],
      on: {
        click: function click($event) {
          return _vm.selectEmail(email);
        }
      }
    }, [_c("div", {
      staticClass: "flex justify-between"
    }, [_c("p", {
      staticClass: "font-bold text-ellipsis overflow-hidden whitespace-nowrap"
    }, [_vm._v("\n                  " + _vm._s(_vm.getEmails(email.to)) + "\n                ")]), _vm._v(" "), _c("vs-icon", {
      staticClass: "delete-icon",
      attrs: {
        icon: "delete"
      },
      on: {
        click: function click($event) {
          return _vm.confirmDeleteEmail($event, email, index);
        }
      }
    })], 1), _vm._v(" "), _c("p", {
      staticClass: "text-sm font-medium"
    }, [_vm._v("\n                " + _vm._s(email.subject) + "\n              ")]), _vm._v(" "), _c("p", {
      staticClass: "text-xs email-content pointer-events-none",
      domProps: {
        innerHTML: _vm._s(email.content)
      }
    })]);
  }), 0)])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-3/4"
  }, [_vm.emailComposer.isVisible ? [_c("incident-email-composer", {
    on: {
      "send-email": _vm.sendEmail,
      "cancel-email": _vm.closeEmailComposer
    },
    model: {
      value: _vm.emailData,
      callback: function callback($$v) {
        _vm.emailData = $$v;
      },
      expression: "emailData"
    }
  })] : _vm.emailPreview.isVisible ? [_c("incident-email-preview", {
    attrs: {
      value: _vm.emailPreview.email
    },
    on: {
      "close-preview": _vm.closeEmailPreview
    }
  })] : [_c("div", {
    staticClass: "flex items-center justify-center h-full"
  }, [_c("p", {
    staticClass: "text-2xl font-bold"
  }, [_vm._v("\n              Please select an email or add new email.\n            ")])])]], 2)])], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".email-composer[data-v-3998cf09] {\n  overflow: auto;\n}\n[dir] .vs-collapse-item--header[data-v-3998cf09] {\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .border-gray[data-v-7bb458ef] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.min-h-278[data-v-7bb458ef] {\n  min-height: 278px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".email-list[data-v-39a1912a] {\n  max-height: 520px;\n  scrollbar-color: #dadce0 transparent;\n  scrollbar-width: thin;\n}\n.email-list .email-content[data-v-39a1912a] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n[dir] .email-list .email-content[data-v-39a1912a] {\n  background: #fff;\n}\n.email-list[data-v-39a1912a]::-webkit-scrollbar {\n  height: 8px;\n  overflow: visible;\n  width: 8px;\n}\n[dir] .email-list[data-v-39a1912a]::-webkit-scrollbar-thumb {\n  border-style: solid;\n  border-color: transparent;\n  border-width: 4px;\n  background-color: #dadce0;\n  border-radius: 8px;\n  box-shadow: none;\n}\n[dir] .border-gray[data-v-39a1912a] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n[dir] .border-gray-highlighted[data-v-39a1912a] {\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n.whitespace-nowrap[data-v-39a1912a] {\n  white-space: nowrap;\n}\n.text-ellipsis[data-v-39a1912a] {\n  text-overflow: ellipsis;\n}\n.h-34[data-v-39a1912a] {\n  height: 8.5rem;\n}\n.delete-icon[data-v-39a1912a] {\n  font-size: 1.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IncidentEmailComposer_vue_vue_type_template_id_3998cf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IncidentEmailComposer.vue?vue&type=template&id=3998cf09&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=template&id=3998cf09&scoped=true&");
/* harmony import */ var _IncidentEmailComposer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IncidentEmailComposer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IncidentEmailComposer_vue_vue_type_style_index_0_id_3998cf09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IncidentEmailComposer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IncidentEmailComposer_vue_vue_type_template_id_3998cf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IncidentEmailComposer_vue_vue_type_template_id_3998cf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3998cf09",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailComposer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_style_index_0_id_3998cf09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=style&index=0&id=3998cf09&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_style_index_0_id_3998cf09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_style_index_0_id_3998cf09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_style_index_0_id_3998cf09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_style_index_0_id_3998cf09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=template&id=3998cf09&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=template&id=3998cf09&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_template_id_3998cf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailComposer.vue?vue&type=template&id=3998cf09&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailComposer.vue?vue&type=template&id=3998cf09&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_template_id_3998cf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailComposer_vue_vue_type_template_id_3998cf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IncidentEmailPreview_vue_vue_type_template_id_7bb458ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IncidentEmailPreview.vue?vue&type=template&id=7bb458ef&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=template&id=7bb458ef&scoped=true&");
/* harmony import */ var _IncidentEmailPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IncidentEmailPreview.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IncidentEmailPreview_vue_vue_type_style_index_0_id_7bb458ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IncidentEmailPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IncidentEmailPreview_vue_vue_type_template_id_7bb458ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IncidentEmailPreview_vue_vue_type_template_id_7bb458ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7bb458ef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_style_index_0_id_7bb458ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=style&index=0&id=7bb458ef&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_style_index_0_id_7bb458ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_style_index_0_id_7bb458ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_style_index_0_id_7bb458ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_style_index_0_id_7bb458ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=template&id=7bb458ef&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=template&id=7bb458ef&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_template_id_7bb458ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailPreview.vue?vue&type=template&id=7bb458ef&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailPreview.vue?vue&type=template&id=7bb458ef&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_template_id_7bb458ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailPreview_vue_vue_type_template_id_7bb458ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IncidentEmailsTab_vue_vue_type_template_id_39a1912a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IncidentEmailsTab.vue?vue&type=template&id=39a1912a&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=template&id=39a1912a&scoped=true&");
/* harmony import */ var _IncidentEmailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IncidentEmailsTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IncidentEmailsTab_vue_vue_type_style_index_0_id_39a1912a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IncidentEmailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IncidentEmailsTab_vue_vue_type_template_id_39a1912a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IncidentEmailsTab_vue_vue_type_template_id_39a1912a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "39a1912a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailsTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_style_index_0_id_39a1912a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=style&index=0&id=39a1912a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_style_index_0_id_39a1912a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_style_index_0_id_39a1912a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_style_index_0_id_39a1912a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_style_index_0_id_39a1912a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=template&id=39a1912a&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=template&id=39a1912a&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_template_id_39a1912a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentEmailsTab.vue?vue&type=template&id=39a1912a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue?vue&type=template&id=39a1912a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_template_id_39a1912a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentEmailsTab_vue_vue_type_template_id_39a1912a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=83.js.map