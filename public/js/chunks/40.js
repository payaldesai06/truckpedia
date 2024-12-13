(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _helpers_eventBus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/eventBus */ "./resources/js/src/helpers/eventBus.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LinkEmailAccountPopup',
  data: function data() {
    return {
      currentStep: 1,
      googleAccount: {
        isActive: false,
        value: ''
      },
      outlookAccount: {
        isActive: false,
        value: ''
      },
      oAuthGoogleKey: _config_constants__WEBPACK_IMPORTED_MODULE_4__["default"].oAuthGoogleClientId
    };
  },
  props: {
    popupActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    togglePopup: {
      get: function get() {
        return this.popupActive;
      },
      set: function set(val) {
        if (!val) {
          this.closePopup();
        }
      }
    }
  },
  methods: {
    toggleGoogleAccount: function toggleGoogleAccount() {
      this.currentStep = 2;
      this.googleAccount.isActive = true;
      this.outlookAccount.isActive = false;
    },
    toggleOutlookAccount: function toggleOutlookAccount() {
      this.currentStep = 2;
      this.outlookAccount.isActive = true;
      this.googleAccount.isActive = false;
    },
    showProviderOptions: function showProviderOptions() {
      this.currentStep = 1;
      this.googleAccount.isActive = false;
    },
    nextStep: function nextStep() {
      if (this.currentStep < 4) {
        this.currentStep += 1;
      }
    },
    backStep: function backStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
    },
    resetValues: function resetValues() {
      this.googleAccount.isActive = false;
      this.googleAccount.value = '';
    },
    closePopup: function closePopup() {
      this.$emit('closePopup');
      this.currentStep = 1;
      this.resetValues();
    },
    linkEmailAccount: function () {
      var _linkEmailAccount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(provider) {
        var _this = this;

        var initCall, _ref, authorizationUrl, popup, checkPopup;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                initCall = function initCall() {
                  if (provider === 'gmail') {
                    return _this.$store.dispatch('marketing/gmailInit');
                  } else if (provider === 'outlook') {
                    return _this.$store.dispatch('marketing/outlookInit');
                  }
                };

                _context.next = 4;
                return initCall();

              case 4:
                _ref = _context.sent;
                authorizationUrl = _ref.data.payload.authorizationUrl;

                if (authorizationUrl) {
                  popup = window.open(authorizationUrl, '', 'width=600, height=700, top=100, left=100');
                  checkPopup = setInterval(function () {
                    if (!popup || popup.closed || popup.closed == null) {
                      clearInterval(checkPopup);
                      _helpers_eventBus__WEBPACK_IMPORTED_MODULE_3__["EventBus"].$emit('refreshEmailAccounts');

                      _this.$store.commit('marketing/setMarketingEmails', []);

                      _this.closePopup();
                    }
                  }, 1000);
                }

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
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_2__["getApiErrorMsg"])(_context.t0)
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function linkEmailAccount(_x) {
        return _linkEmailAccount.apply(this, arguments);
      };
    }(),
    copyText: function copyText() {
      var textToCopy = document.getElementById('textToCopy');
      var textArea = document.createElement('textarea');
      textArea.value = textToCopy.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999);

      try {
        this.$vs.notify({
          group: 'copy',
          type: 'success',
          title: 'Copied!',
          text: 'Text copied to clipboard successfully.'
        });
      } catch (err) {
        this.$vs.notify({
          group: 'copy',
          type: 'error',
          title: 'Error!',
          text: 'Failed to copy text to clipboard.'
        });
      }

      document.body.removeChild(textArea);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=template&id=506556f9&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=template&id=506556f9&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
      classContent: "popup-example",
      active: _vm.togglePopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.togglePopup = $event;
      }
    }
  }, [_vm.currentStep === 1 ? [_c("h3", {
    staticClass: "mb-8"
  }, [_vm._v("Connect a new email account")]), _vm._v(" "), _c("div", {
    staticClass: "vs-row w-full",
    on: {
      click: _vm.toggleGoogleAccount
    }
  }, [_c("div", {
    staticClass: "leadsOptionwrap"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("div", {
    staticClass: "iconType pr-4"
  }, [_c("img", {
    staticClass: "mt-4",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/googleIcon.svg */ "./resources/assets/images/custom/googleIcon.svg"),
      width: "35px"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "txtType"
  }, [_c("p", [_vm._v("Google")]), _vm._v(" "), _c("h3", [_vm._v("Gmail / G-Suite")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "vs-row w-full",
    on: {
      click: _vm.toggleOutlookAccount
    }
  }, [_c("div", {
    staticClass: "leadsOptionwrap"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("div", {
    staticClass: "iconType pr-4"
  }, [_c("img", {
    staticClass: "mt-4",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/outlookIcon.svg */ "./resources/assets/images/custom/outlookIcon.svg"),
      width: "35px"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "txtType"
  }, [_c("p", [_vm._v("Microsoft")]), _vm._v(" "), _c("h3", [_vm._v("Office 365 / Outlook")])])])])])] : _vm._e(), _vm._v(" "), _vm.currentStep === 2 ? [_vm.googleAccount.isActive ? _c("div", [_c("div", [_c("div", {
    staticClass: "flex items-center mt-2 mb-4 header",
    on: {
      click: _vm.showProviderOptions
    }
  }, [_c("svg", {
    staticClass: "feather feather-chevron-left fea text-dark icon-xs",
    staticStyle: {
      "stroke-width": "3px",
      "margin-top": "-2px"
    },
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("g", [_c("polyline", {
    attrs: {
      points: "15 18 9 12 15 6"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "text-muted pb-1"
  }, [_vm._v("Select another provider")])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("div", [_c("img", {
    staticClass: "mr-3 mt-2",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/googleIcon.svg */ "./resources/assets/images/custom/googleIcon.svg"),
      width: "35px"
    }
  })]), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "mb-0 fw-600"
  }, [_vm._v("Connect Your Google Account")]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 text-muted fw-600"
  }, [_vm._v("Gmail / G-Suite")])])]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-center pt-3"
  }, [_c("p", {
    staticClass: "text-center fw-600"
  }, [_vm._v("\n              First, let's\n              "), _c("span", {
    staticStyle: {
      color: "#006bff"
    }
  }, [_vm._v("enable IMAP")]), _vm._v(" access "), _c("br"), _vm._v("\n              for your Google account.\n            ")])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", [_c("ol", {
    staticClass: "pl-10",
    staticStyle: {
      "list-style-type": "decimal !important"
    }
  }, [_c("li", {
    staticClass: "mt-4 mb-3"
  }, [_vm._v("On your computer, open Gmail.")]), _vm._v(" "), _c("li", {
    staticClass: "mb-3"
  }, [_c("span", {
    staticClass: "d-flex align-items-center"
  }, [_vm._v("\n                  Click the\n                  "), _c("svg", {
    staticClass: "mx-1",
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
    }
  })]), _vm._v("\n                  gear icon in the top right corner.")])]), _vm._v(" "), _c("li", {
    staticClass: "mb-3"
  }, [_vm._v("\n                Click\n                "), _c("span", {
    staticClass: "text-dark fw-600"
  }, [_vm._v("All Settings")]), _vm._v(".\n              ")]), _vm._v(" "), _c("li", {
    staticClass: "mb-3"
  }, [_vm._v("\n                Click the\n                "), _c("span", {
    staticClass: "text-dark fw-600"
  }, [_c("a", {
    attrs: {
      href: "https://mail.google.com/mail/u/0/#settings/fwdandpop",
      target: "blank"
    }
  }, [_vm._v("Forwarding and POP/IMAP")])]), _vm._v("\n                tab.\n              ")]), _vm._v(" "), _c("li", {
    staticClass: "mb-3"
  }, [_vm._v('\n                In the "IMAP access" section, select\n                '), _c("span", {
    staticClass: "text-dark fw-600"
  }, [_vm._v("Enable IMAP")]), _vm._v(".\n              ")]), _vm._v(" "), _c("li", [_vm._v("\n                Click\n                "), _c("span", {
    staticClass: "text-dark fw-600"
  }, [_vm._v("Save Changes")]), _vm._v(".\n              ")])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4 text-center"
  }, [_c("vs-button", {
    on: {
      click: _vm.nextStep
    }
  }, [_c("span", {
    staticClass: "flex items-center"
  }, [_vm._v("\n                Yes, IMAP has been enabled\n                "), _c("svg", {
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 24 24",
      height: "25",
      width: "25",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      fill: "none",
      d: "M0 0h24v24H0z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }
  })])])])], 1)], 1)]) : _vm._e(), _vm._v(" "), _vm.outlookAccount.isActive ? _c("div", [_c("div", [_c("div", {
    staticClass: "flex items-center mt-2 mb-4 header",
    on: {
      click: _vm.showProviderOptions
    }
  }, [_c("svg", {
    staticClass: "feather feather-chevron-left fea text-dark icon-xs",
    staticStyle: {
      "stroke-width": "3px",
      "margin-top": "-2px"
    },
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("g", [_c("polyline", {
    attrs: {
      points: "15 18 9 12 15 6"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "text-muted pb-1"
  }, [_vm._v("Select another provider")])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("div", [_c("img", {
    staticClass: "mr-3 mt-2",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/outlookIcon.svg */ "./resources/assets/images/custom/outlookIcon.svg"),
      width: "35px"
    }
  })]), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "mb-0 fw-600"
  }, [_vm._v("Connect Your Microsoft Account")]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 text-muted fw-600"
  }, [_vm._v("Office 365 / Outlook")])])]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-center pt-3"
  }, [_c("p", {
    staticClass: "text-center fw-600"
  }, [_vm._v("\n              First, let's\n              "), _c("span", {
    staticStyle: {
      color: "#006bff"
    }
  }, [_vm._v("enable IMAP")]), _vm._v(" access "), _c("br"), _vm._v("\n              for your Microsoft account.\n            ")])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex justify-center"
  }, [_c("div", {
    staticClass: "outlook-wrap"
  }, [_c("div", {
    staticClass: "flex justify-center"
  }, [_c("h4", {
    staticClass: "header-text"
  }, [_vm._v("\n                  Microsoft accounts purchased directly from Microsoft\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-center"
  }, [_c("div", {
    staticClass: "outlook-card"
  }, [_c("ol", {
    staticClass: "pl-10",
    staticStyle: {
      "list-style-type": "decimal !important"
    }
  }, [_c("li", {
    staticClass: "mt-4 mb-3"
  }, [_vm._v("\n                      On your computer, log in to your\n                      "), _c("span", {
    staticClass: "fw-600"
  }, [_c("a", {
    attrs: {
      href: "https://admin.microsoft.com/#/homepage",
      target: "blank"
    }
  }, [_vm._v("\n                          Microsoft Admin center\n                        ")])])]), _vm._v(" "), _c("li", {
    staticClass: "mb-3"
  }, [_c("span", {
    staticClass: "d-flex align-items-center"
  }, [_vm._v("\n                        Open\n                        "), _c("a", {
    staticClass: "fw-600",
    attrs: {
      href: "https://admin.microsoft.com/#/users",
      target: "blank"
    }
  }, [_vm._v("\n                          Active Users ")]), _vm._v(".\n                      ")])]), _vm._v(" "), _c("li", {
    staticClass: "mb-3"
  }, [_vm._v("\n                      In the side window, click on\n                      "), _c("span", {
    staticClass: "fw-600"
  }, [_vm._v("Mail")]), _vm._v(" tab, and then on\n                      "), _c("span", {
    staticClass: "fw-600"
  }, [_vm._v("Manage email apps.")])]), _vm._v(" "), _c("li", {
    staticClass: "mb-3"
  }, [_vm._v("\n                      Check the\n                      "), _c("span", {
    staticClass: "fw-600"
  }, [_vm._v("Authenticated SMTP")]), _vm._v(" box and\n                      make sure "), _c("span", {
    staticClass: "fw-600"
  }, [_vm._v("IMAP")]), _vm._v(" is checked\n                      too.\n                    ")]), _vm._v(" "), _c("li", {
    staticClass: "mb-3"
  }, [_vm._v("\n                      Click "), _c("span", {
    staticClass: "fw-600"
  }, [_vm._v("Save Changes")]), _vm._v(".\n                    ")])])])]), _vm._v(" "), false ? undefined : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4 text-center"
  }, [_c("vs-button", {
    on: {
      click: function click($event) {
        return _vm.linkEmailAccount("outlook");
      }
    }
  }, [_c("span", {
    staticClass: "flex items-center"
  }, [_vm._v("\n                Yes, SMTP has been enabled\n                "), _c("svg", {
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 24 24",
      height: "25",
      width: "25",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      fill: "none",
      d: "M0 0h24v24H0z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }
  })])])])], 1)], 1)]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.currentStep === 3 ? [_vm.googleAccount.isActive ? _c("div", [_c("div", [_c("div", {
    staticClass: "flex items-center mt-2 mb-4 header",
    on: {
      click: _vm.showProviderOptions
    }
  }, [_c("svg", {
    staticClass: "feather feather-chevron-left fea text-dark icon-xs",
    staticStyle: {
      "stroke-width": "3px",
      "margin-top": "-2px"
    },
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("g", [_c("polyline", {
    attrs: {
      points: "15 18 9 12 15 6"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "text-muted pb-1"
  }, [_vm._v("Select another provider")])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("div", [_c("img", {
    staticClass: "mr-3 mt-2",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/googleIcon.svg */ "./resources/assets/images/custom/googleIcon.svg"),
      width: "35px"
    }
  })]), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "mb-0 fw-600"
  }, [_vm._v("Connect Your Google Account")]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 text-muted fw-600"
  }, [_vm._v("Gmail / G-Suite")])])]), _vm._v(" "), _c("p", {
    staticClass: "text-center fw-600 pt-5",
    staticStyle: {
      color: "#006bff"
    }
  }, [_vm._v("\n            Select a connection option\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-center"
  }, [_c("div", {
    staticClass: "auth-wrap",
    on: {
      click: _vm.nextStep
    }
  }, [_c("h6", [_vm._v("oAuth")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "flex items-center mt-2"
  }, [_c("svg", {
    staticClass: "mr-2",
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 16 16",
      height: "20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
    }
  })]), _vm._v("\n                    Easier to setup\n                  ")]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center mt-2"
  }, [_c("svg", {
    staticClass: "mr-2",
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 16 16",
      height: "20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
    }
  })]), _vm._v("\n                    More stable and less disconnects\n                  ")]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center mt-2"
  }, [_c("svg", {
    staticClass: "mr-2",
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 16 16",
      height: "20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
    }
  })]), _vm._v("\n                    Available for GSuite accounts\n                  ")])])]), _vm._v(" "), _c("div", {
    staticClass: "px-2 py-1 rounded mr-2 recommended-btn mt-8"
  }, [_c("p", {
    staticClass: "fw-600 mb-0"
  }, [_vm._v("Recommended")])])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-8"
  }, [_c("h6", {
    staticClass: "mb-0 text-muted flex items-center cursor-pointer",
    on: {
      click: _vm.backStep
    }
  }, [_c("svg", {
    staticClass: "mr-1",
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 24 24",
      height: "20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      fill: "none",
      d: "M0 0h24v24H0z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    }
  })]), _vm._v("\n              Back\n            ")])])], 1)]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.currentStep === 4 ? [_vm.googleAccount.isActive ? _c("div", [_c("div", [_c("div", {
    staticClass: "flex items-center mt-2 mb-4 header",
    on: {
      click: _vm.showProviderOptions
    }
  }, [_c("svg", {
    staticClass: "feather feather-chevron-left fea text-dark icon-xs",
    staticStyle: {
      "stroke-width": "3px",
      "margin-top": "-2px"
    },
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("g", [_c("polyline", {
    attrs: {
      points: "15 18 9 12 15 6"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "text-muted pb-1"
  }, [_vm._v("Select another provider")])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("div", [_c("img", {
    staticClass: "mr-3 mt-2",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/googleIcon.svg */ "./resources/assets/images/custom/googleIcon.svg"),
      width: "35px"
    }
  })]), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "mb-0 fw-600"
  }, [_vm._v("Connect Your Google Account")]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 text-muted fw-600"
  }, [_vm._v("Gmail / G-Suite")])])]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-center items-center mt-5 fd-column"
  }, [_c("h6", {
    staticClass: "text-muted"
  }, [_vm._v("\n              Allow Truckpedia to access your Google workspace\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-center"
  }, [_c("div", {
    staticClass: "px-2 py-1 rounded mr-2 mt-2",
    staticStyle: {
      background: "rgb(221, 254, 229)",
      width: "fit-content"
    }
  }, [_c("p", {
    staticClass: "disable-selection font-weight-medium mb-0",
    staticStyle: {
      "font-size": "12px",
      color: "rgb(102, 102, 102)"
    }
  }, [_vm._v("\n                  You only need to do this once per domain\n                ")])])])]), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-center mt-8"
  }, [_c("a", {
    staticClass: "flex items-center justify-center",
    attrs: {
      href: "#",
      target: "blank"
    }
  }, [_c("svg", {
    staticClass: "mr-2",
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 24 24",
      height: "30",
      width: "30",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"
    }
  })]), _vm._v("\n                See tutorial video\n              ")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", [_c("ol", {
    staticClass: "mt-4 pl-10",
    staticStyle: {
      "list-style-type": "decimal !important"
    }
  }, [_c("li", {
    staticClass: "mb-4"
  }, [_vm._v("\n                Go to your\n                "), _c("a", {
    attrs: {
      href: "https://admin.google.com/u/1/ac/owl/list?tab=configuredApps",
      target: "blank"
    }
  }, [_vm._v("\n                  Google Workspace Admin Panel\n                ")])]), _vm._v(" "), _c("li", {
    staticClass: "mb-4"
  }, [_vm._v("\n                Click "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v('"Add App"')]), _vm._v(" "), _c("br"), _vm._v("\n                and then select\n                "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v('"OAuth App Name or Client ID"')])]), _vm._v(" "), _c("li", {
    staticClass: "mb-3"
  }, [_vm._v("\n                Use the following Client-ID to search for Truckpedia:\n                "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "font-weight-normal small p-3 mt-2 rounded",
    staticStyle: {
      background: "rgb(232, 232, 232)"
    },
    attrs: {
      id: "textToCopy"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.oAuthGoogleKey) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("span", {
    staticStyle: {
      background: "rgb(60, 60, 60)",
      color: "rgb(255, 255, 255)",
      "border-radius": "2px",
      padding: "5px 10px",
      cursor: "pointer"
    },
    attrs: {
      id: "copyButton"
    },
    on: {
      click: _vm.copyText
    }
  }, [_c("small", [_vm._v("Copy")])])])]), _vm._v(" "), _c("li", {
    staticClass: "mb-4"
  }, [_vm._v("\n                Select and approve Truckpedia to access your Google Workspace\n              ")])])]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-center items-center"
  }, [_c("div", {
    on: {
      click: _vm.backStep
    }
  }, [_c("h6", {
    staticClass: "mb-0 text-muted flex items-center cursor-pointer"
  }, [_c("svg", {
    staticClass: "mr-1",
    staticStyle: {
      "margin-top": "0px"
    },
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 24 24",
      height: "20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      fill: "none",
      d: "M0 0h24v24H0z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    }
  })]), _vm._v("\n                Back\n              ")])]), _vm._v(" "), _c("div", [_c("vs-button", {
    staticClass: "ml-5",
    on: {
      click: function click($event) {
        return _vm.linkEmailAccount("gmail");
      }
    }
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_vm._v("\n                  Login\n                  "), _c("svg", {
    staticStyle: {
      "margin-top": "3px"
    },
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 24 24",
      height: "20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      fill: "none",
      d: "M0 0h24v24H0z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }
  })])])])], 1)])], 1)]) : _vm._e()] : _vm._e()], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-506556f9] .vs-popup {\n  width: 50%;\n}\n[data-v-506556f9] .vs-popup--header .vs-popup--title {\n  visibility: hidden;\n}\n.leadsOptionwrap[data-v-506556f9] {\n  transition: box-shadow 0.5s ease 0s;\n}\n[dir] .leadsOptionwrap[data-v-506556f9] {\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.06) 0px 2px 12px;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 25px;\n}\n[dir=ltr] .leadsOptionwrap .txtType[data-v-506556f9] {\n  border-left: 1px solid rgb(189, 189, 189);\n  padding-left: 15px;\n}\n[dir=rtl] .leadsOptionwrap .txtType[data-v-506556f9] {\n  border-right: 1px solid rgb(189, 189, 189);\n  padding-right: 15px;\n}\n.leadsOptionwrap .txtType p[data-v-506556f9] {\n  text-transform: uppercase;\n  font-size: 14px;\n}\n[dir] .leadsOptionwrap .txtType p[data-v-506556f9] {\n  margin-bottom: 7px;\n}\n.leadsOptionwrap .txtType h3[data-v-506556f9] {\n  color: rgb(60, 60, 60);\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n[dir] .leadsOptionwrap .txtType h3[data-v-506556f9] {\n  margin: 0px;\n}\n.drop-box[data-v-506556f9] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  min-height: 300px;\n  position: relative;\n}\n[dir] .drop-box[data-v-506556f9] {\n  border-style: dashed;\n  border-width: 2px;\n  border-radius: 15px;\n  border-color: rgb(204, 204, 204);\n  padding: 20px;\n  cursor: pointer;\n  margin-top: 25px;\n}\n.drop-box input[data-v-506556f9] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n.drop-box h6[data-v-506556f9] {\n  color: rgb(204, 204, 204);\n}\n[dir] .leadsOptionwrap[data-v-506556f9]:hover {\n  box-shadow: rgba(0, 0, 0, 0.176) 0px 1rem 3rem;\n  border: 2px solid rgb(60, 60, 60);\n}\n.text-muted[data-v-506556f9] {\n  color: #8492a6 !important;\n}\n.fw-600[data-v-506556f9] {\n  font-weight: 600;\n}\n.button-align .vs-button-text.vs-button--text[data-v-506556f9] {\n  display: flex;\n  align-items: center;\n}\n.auth-wrap[data-v-506556f9] {\n  min-height: 270px;\n  width: 320px;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n[dir] .auth-wrap[data-v-506556f9] {\n  border-radius: 15px;\n  background-color: rgb(2, 125, 255);\n  box-shadow: rgb(2, 125, 255) 0px 0px 10px 0px;\n  margin-top: 25px;\n  cursor: pointer;\n}\n.auth-wrap h6[data-v-506556f9] {\n  color: #fff;\n}\n.auth-wrap .recommended-btn[data-v-506556f9] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n[dir] .auth-wrap .recommended-btn[data-v-506556f9] {\n  background: rgb(221, 254, 229);\n}\n.auth-wrap .recommended-btn p[data-v-506556f9] {\n  font-size: 12px;\n  color: rgb(102, 102, 102);\n}\n.header[data-v-506556f9] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n[dir] .header[data-v-506556f9] {\n  cursor: pointer;\n}\n[dir=ltr] .header[data-v-506556f9] {\n  margin-left: -10px;\n}\n[dir=rtl] .header[data-v-506556f9] {\n  margin-right: -10px;\n}\n.fd-column[data-v-506556f9] {\n  flex-direction: column;\n}\n.outlook-wrap[data-v-506556f9] {\n  min-width: 328px;\n  max-width: 375px;\n  height: 375px;\n}\n[dir] .outlook-wrap[data-v-506556f9] {\n  border: 2px solid rgb(239, 239, 239);\n  box-shadow: rgb(239, 239, 239) 0px 0px 10px 0px;\n  padding: 16px;\n}\n.outlook-wrap .header-text[data-v-506556f9] {\n  max-width: 300px;\n  font-weight: 900;\n}\n[dir] .outlook-wrap .header-text[data-v-506556f9] {\n  text-align: center;\n}\n.outlook-wrap .outlook-card[data-v-506556f9] {\n  max-width: 300px;\n  max-height: 250px;\n  scroll-behavior: smooth;\n  overflow-y: scroll;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss&");

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

/***/ "./resources/assets/images/custom/googleIcon.svg":
/*!*******************************************************!*\
  !*** ./resources/assets/images/custom/googleIcon.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/googleIcon.svg?686f8efa6e3e28e96d1c08399e8d353d";

/***/ }),

/***/ "./resources/assets/images/custom/outlookIcon.svg":
/*!********************************************************!*\
  !*** ./resources/assets/images/custom/outlookIcon.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/outlookIcon.svg?9aa897c3155e9a873d80d201649ec699";

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinkEmailAccountPopup_vue_vue_type_template_id_506556f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkEmailAccountPopup.vue?vue&type=template&id=506556f9&scoped=true& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=template&id=506556f9&scoped=true&");
/* harmony import */ var _LinkEmailAccountPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkEmailAccountPopup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LinkEmailAccountPopup_vue_vue_type_style_index_0_id_506556f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LinkEmailAccountPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LinkEmailAccountPopup_vue_vue_type_template_id_506556f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LinkEmailAccountPopup_vue_vue_type_template_id_506556f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "506556f9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LinkEmailAccountPopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_style_index_0_id_506556f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=style&index=0&id=506556f9&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_style_index_0_id_506556f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_style_index_0_id_506556f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_style_index_0_id_506556f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_style_index_0_id_506556f9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=template&id=506556f9&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=template&id=506556f9&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_template_id_506556f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LinkEmailAccountPopup.vue?vue&type=template&id=506556f9&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue?vue&type=template&id=506556f9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_template_id_506556f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkEmailAccountPopup_vue_vue_type_template_id_506556f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=40.js.map