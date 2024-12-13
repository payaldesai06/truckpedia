(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/email/EmailPopup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/email/EmailPopup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/helper */ "./resources/js/src/helpers/helper.js");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EmailPopup',
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_3__["VueEditor"]
  },
  props: {
    selectedDocs: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isPopupActive: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      isOpenSendEmailPopup: false,
      cc: [],
      bcc: [],
      emailTo: '',
      emailCC: '',
      emailBCC: '',
      fromName: '',
      replyTo: '',
      subject: '',
      notes: '',
      content: '',
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
      }], ['link']]
    };
  },
  created: function created() {
    this.setAvailableData();
  },
  computed: {
    isActive: {
      get: function get() {
        return this.isPopupActive;
      },
      set: function set(val) {
        if (!val) {
          this.closePopup();
          this.clearForm();
        }
      }
    }
  },
  methods: {
    setAvailableData: function setAvailableData() {
      this.replyTo = this.user.admin_company_details.email;
      this.fromName = this.user.admin_company_details.business_name;
    },
    validateMultipleEmails: function () {
      var _validateMultipleEmails = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(emails, emailMsg) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, validte;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!emails) {
                  _context.next = 32;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 4;
                _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(emails.split(','));

              case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 18;
                  break;
                }

                item = _step.value;
                _context.next = 10;
                return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_4__["validateEmail"])(item);

              case 10:
                validte = _context.sent;

                if (validte) {
                  _context.next = 14;
                  break;
                }

                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: "You have entered an invalid ".concat(emailMsg, " email address!")
                });
                return _context.abrupt("return", true);

              case 14:
                return _context.abrupt("return", false);

              case 15:
                _iteratorNormalCompletion = true;
                _context.next = 6;
                break;

              case 18:
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](4);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 24:
                _context.prev = 24;
                _context.prev = 25;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 27:
                _context.prev = 27;

                if (!_didIteratorError) {
                  _context.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context.finish(27);

              case 31:
                return _context.finish(24);

              case 32:
                return _context.abrupt("return", false);

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 20, 24, 32], [25,, 27, 31]]);
      }));

      return function validateMultipleEmails(_x, _x2) {
        return _validateMultipleEmails.apply(this, arguments);
      };
    }(),
    sendEmail: function () {
      var _sendEmail = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var payload, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.emailTo === '' || this.subject === '')) {
                  _context2.next = 3;
                  break;
                }

                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: 'Email and Subject are required fields.'
                });
                return _context2.abrupt("return");

              case 3:
                _context2.next = 5;
                return this.validateMultipleEmails(this.emailCC, 'CC');

              case 5:
                if (!_context2.sent) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return");

              case 7:
                _context2.next = 9;
                return this.validateMultipleEmails(this.replyTo, 'Reply to');

              case 9:
                if (!_context2.sent) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return");

              case 11:
                _context2.next = 13;
                return this.validateMultipleEmails(this.emailBCC, 'Bcc');

              case 13:
                if (!_context2.sent) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt("return");

              case 15:
                _context2.next = 17;
                return this.validateMultipleEmails(this.emailTo, 'To');

              case 17:
                if (!_context2.sent) {
                  _context2.next = 19;
                  break;
                }

                return _context2.abrupt("return");

              case 19:
                payload = {
                  email: {
                    fromName: this.fromName || '',
                    replyTo: this.replyTo || '',
                    to: this.emailTo && this.emailTo.split(',').map(function (email) {
                      return email.trim();
                    }) || undefined,
                    cc: this.emailCC && this.emailCC.split(',').map(function (email) {
                      return email.trim();
                    }) || undefined,
                    bcc: this.emailBCC && this.emailBCC.split(',').map(function (email) {
                      return email.trim();
                    }) || undefined,
                    subject: this.subject,
                    content: this.content,
                    attachments: this.selectedDocs.map(function (_ref) {
                      var fileName = _ref.fileName,
                          url = _ref.url;
                      return {
                        filename: fileName,
                        url: url
                      };
                    })
                  }
                };
                _context2.prev = 20;
                _context2.next = 23;
                return this.$store.dispatch('email/sendEmail', payload);

              case 23:
                response = _context2.sent;

                if (response && response.data) {
                  this.$vs.notify({
                    color: 'primary',
                    title: 'Email Sent',
                    text: 'Your email has been sent successfully.'
                  });
                } else {
                  this.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: 'Invalid response from the server.'
                  });
                }

                _context2.next = 30;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](20);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context2.t0.response.data.message || _context2.t0.message
                });

              case 30:
                this.clearForm();
                this.closePopup();

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[20, 27]]);
      }));

      return function sendEmail() {
        return _sendEmail.apply(this, arguments);
      };
    }(),
    clearForm: function clearForm() {
      this.emailTo = '';
      this.emailCC = '';
      this.emailBCC = '';
      this.subject = '';
      this.content = '';
      this.notes = '';
    },
    isOpenPopup: function isOpenPopup() {
      this.isOpenSendEmailPopup = true;
    },
    closePopup: function closePopup() {
      this.$emit('closePopup');
    },
    onEmailInput: function onEmailInput(field) {
      if (this[field]) {
        // Remove spaces
        this[field] = this[field].replace(/\s/g, '');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/email/EmailPopup.vue?vue&type=template&id=2b33be83&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/email/EmailPopup.vue?vue&type=template&id=2b33be83& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("vs-popup", {
    attrs: {
      title: "",
      active: _vm.isActive
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.isActive = $event;
      }
    }
  }, [[_c("div", [[_c("div", [_c("div", {
    staticClass: "email-config"
  }, [_c("div", {
    staticClass: "mt-4 my-3"
  }, [_c("label", [_vm._v("To")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("\n                  Separate multiple emails with commas\n                ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      input: function input($event) {
        return _vm.onEmailInput("emailTo");
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
  }, [_vm._v("Cc")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("\n                          Separate multiple emails with commas\n                        ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      input: function input($event) {
        return _vm.onEmailInput("emailCC");
      }
    },
    model: {
      value: _vm.emailCC,
      callback: function callback($$v) {
        _vm.emailCC = $$v;
      },
      expression: "emailCC"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("Bcc")]), _vm._v(" "), _c("p", {
    staticClass: "small text-xs"
  }, [_vm._v("\n                          Separate multiple emails with commas\n                        ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    on: {
      input: function input($event) {
        return _vm.onEmailInput("emailBCC");
      }
    },
    model: {
      value: _vm.emailBCC,
      callback: function callback($$v) {
        _vm.emailBCC = $$v;
      },
      expression: "emailBCC"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("From name")]), _vm._v(" "), _c("div", [_c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.fromName,
      callback: function callback($$v) {
        _vm.fromName = $$v;
      },
      expression: "fromName"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "my-4"
  }, [_vm._v("Reply to")]), _vm._v(" "), _c("div", [_c("vs-input", {
    staticClass: "w-full",
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
      value: _vm.subject,
      callback: function callback($$v) {
        _vm.subject = $$v;
      },
      expression: "subject"
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
      value: _vm.content,
      callback: function callback($$v) {
        _vm.content = $$v;
      },
      expression: "content"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("p", [_c("strong", [_vm._v("Note:")]), _vm._v(" Selected files will be included\n                      in the email as attachments.\n                    ")])]), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-4",
    on: {
      click: function click($event) {
        return _vm.sendEmail();
      }
    }
  }, [_vm._v("Send Email")])], 1)], 1)])])]], 2)]], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/email/EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/email/EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customNotes .ql-toolbar.ql-snow {\n  display: none;\n}\n[dir] .customNotes #quill-container {\n  border-top: 1px solid #ccc;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/email/EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/email/EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/email/EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css&");

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

/***/ "./resources/js/src/components/email/EmailPopup.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/email/EmailPopup.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailPopup_vue_vue_type_template_id_2b33be83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailPopup.vue?vue&type=template&id=2b33be83& */ "./resources/js/src/components/email/EmailPopup.vue?vue&type=template&id=2b33be83&");
/* harmony import */ var _EmailPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailPopup.vue?vue&type=script&lang=js& */ "./resources/js/src/components/email/EmailPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmailPopup_vue_vue_type_style_index_0_id_2b33be83_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css& */ "./resources/js/src/components/email/EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmailPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailPopup_vue_vue_type_template_id_2b33be83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailPopup_vue_vue_type_template_id_2b33be83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/email/EmailPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/email/EmailPopup.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/components/email/EmailPopup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailPopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/email/EmailPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/email/EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/components/email/EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_style_index_0_id_2b33be83_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/email/EmailPopup.vue?vue&type=style&index=0&id=2b33be83&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_style_index_0_id_2b33be83_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_style_index_0_id_2b33be83_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_style_index_0_id_2b33be83_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_style_index_0_id_2b33be83_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/email/EmailPopup.vue?vue&type=template&id=2b33be83&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/components/email/EmailPopup.vue?vue&type=template&id=2b33be83& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_template_id_2b33be83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailPopup.vue?vue&type=template&id=2b33be83& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/email/EmailPopup.vue?vue&type=template&id=2b33be83&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_template_id_2b33be83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPopup_vue_vue_type_template_id_2b33be83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=41.js.map