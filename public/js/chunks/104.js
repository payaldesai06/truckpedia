(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/entries */ "./node_modules/@babel/runtime/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _accountTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accountTypes */ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/accountTypes.js");







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AccountPopup',
  props: {
    showEditAccountPopup: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    selectedAccountId: {
      type: Number,
      default: ''
    },
    accountInfo: {
      type: Object,
      default: function _default() {}
    },
    accountsList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      accountForm: {
        type: null,
        name: null,
        description: null,
        isSubAccount: false,
        parentAccountId: null
      },
      accountTypeList: _accountTypes__WEBPACK_IMPORTED_MODULE_7__["default"]
    };
  },
  computed: {
    showEditAccountPopupInternal: {
      get: function get() {
        return this.showEditAccountPopup;
      },
      set: function set(value) {
        this.$emit('update:showEditAccountPopup', value);
      }
    },
    validateForm: function validateForm() {
      return !this.errors.any() && this.accountForm.name && this.accountForm.type;
    },
    isSubmitDisabled: function isSubmitDisabled() {
      return !this.showEditAccountPopupInternal || !this.validateForm || this.isEdit && _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(this.accountForm) === _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(this.accountFormForUpdate);
    }
  },
  watch: _defineProperty({
    showEditAccountPopup: function showEditAccountPopup(newVal, oldVal) {
      if (!this.isEdit) {
        this.accountForm = {
          type: null,
          name: null,
          description: null,
          isSubAccount: false,
          parentAccountId: null
        };
      } else {
        this.accountForm = {
          type: this.accountInfo.accountType,
          name: this.accountInfo.accountName,
          description: this.accountInfo.description,
          isSubAccount: this.accountInfo.parentAccount && this.accountInfo.parentAccount.id > 0 ? true : false,
          parentAccountId: this.accountInfo.parentAccount ? this.accountInfo.parentAccount.id : null
        };
        this.accountFormForUpdate = structuredClone(this.accountForm);
      }
    },
    'accountForm.isSubAccount': function accountFormIsSubAccount(newVal, oldVal) {
      if (newVal === false) {
        this.accountForm.parentAccountId = null;
      }
    }
  }, "accountForm.isSubAccount", function accountFormIsSubAccount(newVal, oldVal) {
    if (newVal === false) {
      this.accountForm.parentAccountId = null;
    }
  }),
  methods: {
    closePopup: function closePopup() {
      this.showEditAccountPopupInternal = false;
    },
    handleAccount: function () {
      var _handleAccount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var _this = this;

        var isDuplicate, noSameType, res, payload, _payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // I finally figured out why the FE code does not work for me...
                // In Firefox, when I copy a child account like "Fuel", it actually
                // puts " Fuel" in the clipboard. So it's not a duplicate account in FE,
                // but BE treats it as a duplciate... It took me multiple hours to finally
                // found this out...
                isDuplicate = this.accountsList.some(function (account) {
                  if (_this.isEdit && account.id == _this.selectedAccountId) {
                    return false;
                  }

                  if (account.name.toLowerCase() != _this.accountForm.name.toLowerCase()) {
                    return false;
                  }

                  if (account.type != _this.accountForm.type) {
                    return false;
                  }

                  if (!account.parentAccount && !_this.accountForm.parentAccountId) {
                    return true;
                  }

                  if (account.parentAccount && _this.accountForm.parentAccountId) {
                    return account.parentAccount.id == _this.accountForm.parentAccountId;
                  }

                  return false;
                });
                noSameType = this.accountForm.parentAccountId && this.accountsList.find(function (item) {
                  return item.id === _this.accountForm.parentAccountId;
                }).type != this.accountForm.type;

                if (!isDuplicate) {
                  _context.next = 6;
                  break;
                }

                this.$vs.notify({
                  color: 'danger',
                  title: 'Duplicate Account',
                  text: 'An account with the same name, type and parent already exists. Please use a different name.'
                });
                return _context.abrupt("return");

              case 6:
                if (!noSameType) {
                  _context.next = 9;
                  break;
                }

                this.$vs.notify({
                  color: 'danger',
                  title: 'Child Account',
                  text: 'Child account and parent account must have the same type.'
                });
                return _context.abrupt("return");

              case 9:
                if (!(this.isEdit && this.hasChild(this.selectedAccountId, this.accountForm.parentAccountId))) {
                  _context.next = 12;
                  break;
                }

                this.$vs.notify({
                  color: 'danger',
                  title: 'Invalid Parent',
                  text: 'Please select correct parent account.'
                });
                return _context.abrupt("return");

              case 12:
                if (!this.isEdit) {
                  _context.next = 20;
                  break;
                }

                payload = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getObjectDifference"])(this.accountFormForUpdate, this.accountForm);
                delete payload.isSubAccount;
                _context.next = 17;
                return this.$store.dispatch('accounting/updateAccount', {
                  id: this.selectedAccountId,
                  payload: payload
                });

              case 17:
                res = _context.sent;
                _context.next = 25;
                break;

              case 20:
                _payload = _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(this.accountForm).reduce(function (acc, _ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                      key = _ref2[0],
                      value = _ref2[1];

                  if (value || value === false || value === 0) {
                    acc[key] = value;
                  }

                  return acc;
                }, {});
                delete _payload.isSubAccount;
                _context.next = 24;
                return this.$store.dispatch('accounting/createAccount', _payload);

              case 24:
                res = _context.sent;

              case 25:
                if (res.status === 200) {
                  this.$vs.notify({
                    color: 'success',
                    title: 'Saved account',
                    text: 'Account updated successfully'
                  });
                  this.closePopup();
                  this.$emit('refresh');
                }

                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(_context.t0)
                });

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 28]]);
      }));

      return function handleAccount() {
        return _handleAccount.apply(this, arguments);
      };
    }(),
    hasChild: function hasChild(currentId, selectedId) {
      if (currentId === selectedId) {
        return true;
      }

      var currentAccount = this.accountsList.find(function (account) {
        return account.id === currentId;
      });

      if (!currentAccount) {
        return false;
      }

      var children = this.accountsList.filter(function (account) {
        return account.parentAccount && account.parentAccount.id === currentId;
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          if (child.id === selectedId) {
            return true;
          }

          if (this.hasChild(child.id, selectedId)) {
            return true;
          }
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

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _ChartOfAccounts_accountTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChartOfAccounts/accountTypes */ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/accountTypes.js");
/* harmony import */ var _ChartOfAccounts_AccountPopup_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChartOfAccounts/AccountPopup.vue */ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChartOfAccountsTab',
  data: function data() {
    return {
      accountsList: [],
      isEditAccount: false,
      showEditAccountPopup: false,
      selectedAccountId: null,
      selectedAccount: {},
      accountTypeList: _ChartOfAccounts_accountTypes__WEBPACK_IMPORTED_MODULE_7__["default"]
    };
  },
  components: {
    AccountPopup: _ChartOfAccounts_AccountPopup_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.$vs.loading();
                _context.next = 4;
                return this.getAccounts();

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(_context.t0)
                });

              case 9:
                _context.prev = 9;
                this.$vs.loading.close();
                return _context.finish(9);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6, 9, 12]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    getAccounts: function () {
      var _getAccounts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.$store.dispatch('accounting/getAccounts', {
                  params: {
                    fields: ['type', 'name', 'description', 'parentAccount']
                  }
                });

              case 3:
                res = _context2.sent;
                this.accountsList = this.processAccountsData(res.data.payload.accounts);
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(_context2.t0)
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      return function getAccounts() {
        return _getAccounts.apply(this, arguments);
      };
    }(),
    processAccountsData: function processAccountsData(accounts) {
      var processData = [];

      function processAccount(account) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        processData.push(_objectSpread({}, account, {
          accountId: account.id,
          accountName: account.name,
          accountType: account.type,
          description: account.description,
          level: level
        }));
        var subAccounts = accounts.filter(function (subAccount) {
          return subAccount.parentAccount && subAccount.parentAccount.id === account.id;
        });
        subAccounts.forEach(function (subAccount) {
          processAccount(subAccount, level + 1);
        });
      }

      accounts.forEach(function (account) {
        if (!account.parentAccount) {
          processAccount(account);
        }
      });
      return processData;
    },
    onConfirm: function onConfirm(options) {
      this.$vs.dialog(_objectSpread({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes'
      }, options));
    },
    addAccount: function addAccount() {
      this.showEditAccountPopup = true;
      this.isEditAccount = false;
    },
    editAccount: function editAccount(accountId) {
      var _this = this;

      this.showEditAccountPopup = true;
      this.isEditAccount = true;
      this.selectedAccountId = accountId;
      this.selectedAccount = this.accountsList.find(function (element) {
        return element.id === _this.selectedAccountId;
      });
    },
    handleEditAccount: function handleEditAccount(value) {
      this.showEditAccountPopup = value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=template&id=632545f3&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=template&id=632545f3&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      title: "Account",
      active: _vm.showEditAccountPopupInternal
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.showEditAccountPopupInternal = $event;
      }
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("div", {
    staticClass: "mt-5"
  }, [_c("label", [_vm._v("Name "), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("vs-input", {
    staticClass: "w-full account-form",
    model: {
      value: _vm.accountForm.name,
      callback: function callback($$v) {
        _vm.$set(_vm.accountForm, "name", $$v);
      },
      expression: "accountForm.name"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("label", [_vm._v("Description")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("vs-input", {
    staticClass: "w-full account-form",
    model: {
      value: _vm.accountForm.description,
      callback: function callback($$v) {
        _vm.$set(_vm.accountForm, "description", $$v);
      },
      expression: "accountForm.description"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("div", {
    staticClass: "account-type mt-5"
  }, [_c("label", [_vm._v("Account Type "), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("v-select", {
    staticClass: "mb-4 md:mb-0 account-form",
    attrs: {
      options: _vm.accountTypeList,
      clearable: true,
      label: "label",
      reduce: function reduce(option) {
        return option.value;
      },
      disabled: _vm.isEdit
    },
    model: {
      value: _vm.accountForm.type,
      callback: function callback($$v) {
        _vm.$set(_vm.accountForm, "type", $$v);
      },
      expression: "accountForm.type"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "sub-account-form mt-5"
  }, [_c("vs-checkbox", {
    model: {
      value: _vm.accountForm.isSubAccount,
      callback: function callback($$v) {
        _vm.$set(_vm.accountForm, "isSubAccount", $$v);
      },
      expression: "accountForm.isSubAccount"
    }
  }, [_vm._v("\n          Is sub-account of")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("v-select", {
    staticClass: "account-form",
    attrs: {
      options: this.accountsList,
      clearable: true,
      label: "accountName",
      disabled: !_vm.accountForm.isSubAccount,
      reduce: function reduce(option) {
        return option.accountId;
      }
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(option) {
        return [_c("span", {
          style: {
            paddingLeft: "".concat(option.level * 20, "px")
          }
        }), _vm._v("\n              " + _vm._s(option.accountName) + "\n            ")];
      }
    }]),
    model: {
      value: _vm.accountForm.parentAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.accountForm, "parentAccountId", $$v);
      },
      expression: "accountForm.parentAccountId"
    }
  })], 1)], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-12"
  }, [_c("div", {
    staticClass: "text-right"
  }, [_c("vs-button", {
    staticClass: "mt-5",
    attrs: {
      color: "primary",
      type: "filled",
      disabled: _vm.isSubmitDisabled
    },
    on: {
      click: _vm.handleAccount
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-5",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.closePopup
    }
  }, [_vm._v("Cancel")])], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=template&id=59908dda&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=template&id=59908dda&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-row justify-between items-center"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h3", {
    domProps: {
      textContent: _vm._s("Chart of Accounts")
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.addAccount
    }
  }, [_vm._v("New")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-5"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.accountsList,
      responsiveLayout: "scroll"
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_vm._v(" No records found ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("Column", {
    attrs: {
      field: "accountName",
      header: "Name"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("span", {
          style: {
            paddingLeft: "".concat(slotProps.data.level * 20, "px")
          }
        }, [_vm._v("\n                " + _vm._s(slotProps.data.accountName) + "\n              ")])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "type",
      header: "Type"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(_vm.accountTypeList.find(function (item) {
          return item.value === slotProps.data.type;
        }).label) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "description",
      header: "Description"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.description) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "action",
      header: "Action",
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "flex items-center space-x-2"
        }, [_c("vx-tooltip", {
          attrs: {
            text: "Edit"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "primary",
            type: "filled",
            "icon-pack": "feather",
            icon: "icon-edit",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.editAccount(slotProps.data.accountId);
            }
          }
        })], 1)], 1)];
      }
    }])
  })], 1)], 1)])]), _vm._v(" "), _c("AccountPopup", {
    attrs: {
      showEditAccountPopup: _vm.showEditAccountPopup,
      isEdit: _vm.isEditAccount,
      selectedAccountId: _vm.selectedAccountId,
      accountInfo: _vm.selectedAccount,
      accountsList: _vm.accountsList
    },
    on: {
      "update:showEditAccountPopup": _vm.handleEditAccount,
      refresh: function refresh($event) {
        return _vm.getAccounts();
      }
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".account-type[data-v-632545f3] .vs__dropdown-menu {\n  max-height: 180px !important;\n}\n.sub-account-form[data-v-632545f3] .vs__dropdown-menu {\n  max-height: 110px !important;\n}\n.account-form[data-v-632545f3] {\n  height: 40px;\n}\n.account-form[data-v-632545f3] .vs-con-input,\n.account-form[data-v-632545f3] .vs-con-input input {\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss&");

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

/***/ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountPopup_vue_vue_type_template_id_632545f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountPopup.vue?vue&type=template&id=632545f3&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=template&id=632545f3&scoped=true&");
/* harmony import */ var _AccountPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountPopup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AccountPopup_vue_vue_type_style_index_0_id_632545f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss& */ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AccountPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountPopup_vue_vue_type_template_id_632545f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountPopup_vue_vue_type_template_id_632545f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "632545f3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountPopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_style_index_0_id_632545f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=style&index=0&id=632545f3&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_style_index_0_id_632545f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_style_index_0_id_632545f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_style_index_0_id_632545f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_style_index_0_id_632545f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=template&id=632545f3&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=template&id=632545f3&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_template_id_632545f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountPopup.vue?vue&type=template&id=632545f3&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/AccountPopup.vue?vue&type=template&id=632545f3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_template_id_632545f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPopup_vue_vue_type_template_id_632545f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/accountTypes.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/ChartOfAccounts/accountTypes.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var accountTypes = [{
  label: 'Expense',
  value: 'expense'
}, {
  label: 'Revenue',
  value: 'revenue'
}];
/* harmony default export */ __webpack_exports__["default"] = (accountTypes);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartOfAccountsTab_vue_vue_type_template_id_59908dda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartOfAccountsTab.vue?vue&type=template&id=59908dda&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=template&id=59908dda&scoped=true&");
/* harmony import */ var _ChartOfAccountsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartOfAccountsTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartOfAccountsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartOfAccountsTab_vue_vue_type_template_id_59908dda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartOfAccountsTab_vue_vue_type_template_id_59908dda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "59908dda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartOfAccountsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartOfAccountsTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartOfAccountsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=template&id=59908dda&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=template&id=59908dda&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartOfAccountsTab_vue_vue_type_template_id_59908dda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartOfAccountsTab.vue?vue&type=template&id=59908dda&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/ChartOfAccountsTab.vue?vue&type=template&id=59908dda&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartOfAccountsTab_vue_vue_type_template_id_59908dda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartOfAccountsTab_vue_vue_type_template_id_59908dda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=104.js.map