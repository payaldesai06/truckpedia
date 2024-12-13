(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");
/* harmony import */ var _mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mixins/quoteCommonFunctions */ "./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js");
/* harmony import */ var _register_SingleStepRegistration_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../register/SingleStepRegistration.vue */ "./resources/js/src/views/pages/register/SingleStepRegistration.vue");
/* harmony import */ var _components_QuotesResponseTable_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/QuotesResponseTable.vue */ "./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CarrierViewQuoteRequests',
  mixins: [_mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_9__["default"]],
  components: {
    SingleStepRegistration: _register_SingleStepRegistration_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    QuotesResponseTable: _components_QuotesResponseTable_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      quotes: [],
      expandedRows: [],
      selectedCustomers: null,
      quoteValidUntil: null,
      newQuoteRate: null,
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d'
      },
      rateAcceptPopup: {
        isActive: false,
        acceptRate: null,
        numberOfTrucks: null
      },
      loadTypes: {
        drayage: 'Drayage',
        ftl: 'FTL',
        ltl: 'LTL'
      },
      driverPreferences: {
        solo: 'Solo',
        team: 'Team'
      },
      equipmentTypeOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].planning.equipmentTypes,
      validationDict: {
        custom: {
          carrierSubmitQuoteRate: {
            required: 'New Quote Rate is required'
          },
          carrierQuoteValidUntil: {
            required: 'Quote Valid Until is required'
          },
          carrierNumberOfTrucks: {
            required: 'Available Trucks is required',
            numeric: 'Value must be a valid integer'
          },
          numberOfTrucks: {
            required: 'Number of Trucks is required',
            numeric: 'Value must be a valid integer'
          }
        }
      },
      isAuth: true,
      openSingleStepRegistrationPopup: false,
      showSingleRegistration: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])('auth', ['userRole', 'isUserBrokerOrShipper']), {
    isBookNowVisible: function isBookNowVisible() {
      return this.quotes[0].mutualAgreedRate == null && this.quotes[0].shipperCounterRate == null && this.quotes[0].bookNowRate != null;
    },
    isCounterRateVisible: function isCounterRateVisible() {
      return this.quotes[0].mutualAgreedRate == null && this.quotes[0].shipperCounterRate != null;
    },
    totalWeight: function totalWeight() {
      var weight = 0;
      var weightUnit = '';
      this.quotes.forEach(function (quote) {
        if (quote && quote.stops) {
          quote.stops.forEach(function (stop) {
            if (!weightUnit && stop.weightUnit) {
              weightUnit = stop.weightUnit;
            }

            weight += stop.weight ? Number(stop.weight) : 0;
          });
        }
      });

      if (weight == 0) {
        return '';
      }

      return "".concat(this.parseFloatWithTrims(weight), " ").concat(weightUnit || '').trim();
    },
    quotesResponse: function quotesResponse() {
      return this.quotes && this.quotes[0] && this.quotes[0].responses;
    }
  }),
  created: function created() {
    var token = localStorage.getItem('access_token');

    if (!token) {
      this.isAuth = false;
    }
  },
  mounted: function mounted() {
    this.$validator.localize('en', this.validationDict);
    this.getRequestList();
  },
  watch: {
    'rateAcceptPopup.isActive': function rateAcceptPopupIsActive(val) {
      if (!val) {
        this.rateAcceptPopup.acceptRate = null;
        this.rateAcceptPopup.numberOfTrucks = null;
      }

      this.$validator.reset();
    }
  },
  methods: {
    navigateToLoginPageViaLink: function navigateToLoginPageViaLink() {
      var _this$$route$query = this.$route.query,
          id = _this$$route$query.id,
          i = _this$$route$query.i,
          scid = _this$$route$query.scid,
          s = _this$$route$query.s,
          token = _this$$route$query.token,
          t = _this$$route$query.t;
      this.$router.push({
        name: 'page-login',
        query: {
          source: 'viaCarrierViewQuoteRequestLink',
          id: id || i,
          scid: scid || s,
          token: token || t
        }
      });
    },
    closePopup: function closePopup() {
      this.openSingleStepRegistrationPopup = false;
      this.isAuth = true;
    },
    showSingleRegistrationFun: function showSingleRegistrationFun() {
      this.showSingleRegistration = !this.showSingleRegistration;
    },
    acceptCounterRate: function () {
      var _acceptCounterRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var isFormValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.validateForm();

              case 2:
                isFormValid = _context.sent;

                if (isFormValid) {
                  this.quotes[0].acceptRate = true;
                  this.submitQuote();
                  this.rateAcceptPopup.isActive = false;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function acceptCounterRate() {
        return _acceptCounterRate.apply(this, arguments);
      };
    }(),
    formatStatus: function formatStatus(value) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_7__["formatStatusToCamelCamelCase"])(value);
    },
    restoreToken: function restoreToken(value) {
      if (String(value).length >= 10) {
        return String(value);
      }

      return String(parseInt(value, 36));
    },
    restoreId: function restoreId(value) {
      if (!['I', 'S'].includes(String(value)[0])) {
        return Number(value);
      }

      return Number(parseInt(String(value).substring(1), 36));
    },
    getRequestList: function () {
      var _getRequestList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var _this = this;

        var _this$$route$query2, id, i, scid, s, token, t, _this$splitQueryParam, ids, scids, tokens, quotes, payload, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$$route$query2 = this.$route.query, id = _this$$route$query2.id, i = _this$$route$query2.i, scid = _this$$route$query2.scid, s = _this$$route$query2.s, token = _this$$route$query2.token, t = _this$$route$query2.t;
                _this$splitQueryParam = this.splitQueryParams(id || i, scid || s, token || t), ids = _this$splitQueryParam.ids, scids = _this$splitQueryParam.scids, tokens = _this$splitQueryParam.tokens;
                quotes = ids.map(function (id, index) {
                  return {
                    id: _this.restoreId(id),
                    shipperCompanyId: _this.restoreId(scids[index]),
                    token: _this.restoreToken(tokens[index])
                  };
                });
                _context2.prev = 3;
                payload = {
                  quotes: quotes
                };
                _context2.next = 7;
                return this.$store.dispatch('quote/viewRequestsViaLink', payload);

              case 7:
                res = _context2.sent;
                this.quotes = res.data.payload;

                if (this.quotes[0].mutualAgreedRate) {
                  this.quotes[0].acceptRate = true;
                }

                this.expandedRows = this.quotes.filter(function (item, index) {
                  return index === 0;
                });
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](3);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_7__["getApiErrorMsg"])(_context2.t0)
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 13]]);
      }));

      return function getRequestList() {
        return _getRequestList.apply(this, arguments);
      };
    }(),
    changeTab: function changeTab(id, name) {
      this.quotes.map(function (item) {
        if (item.id === id) {
          item.activeId = name;
        }
      });
    },
    formatNumberWithCommas: function formatNumberWithCommas(value) {
      if (!value) return value;
      var formattedValue = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_7__["parseFloatWithTrim"])(value);
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_7__["commaSeparatedValue"])(formattedValue);
    },
    formatUtcToLocalTime: function formatUtcToLocalTime(utcTime) {
      return this.$dayjs.utc(utcTime).local().format('MM/DD/YY HH:mm z');
    },
    submitQuote: function () {
      var _submitQuote = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        var _this2 = this;

        var _this$$route$query3, id, i, scid, s, token, t, _this$splitQueryParam2, ids, scids, tokens, quotes, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // TODO: we need to support multiple quotes. Below is ONLY my temp code for demo.
                _this$$route$query3 = this.$route.query, id = _this$$route$query3.id, i = _this$$route$query3.i, scid = _this$$route$query3.scid, s = _this$$route$query3.s, token = _this$$route$query3.token, t = _this$$route$query3.t;
                _this$splitQueryParam2 = this.splitQueryParams(id || i, scid || s, token || t), ids = _this$splitQueryParam2.ids, scids = _this$splitQueryParam2.scids, tokens = _this$splitQueryParam2.tokens;
                quotes = ids.map(function (id, index) {
                  return {
                    id: _this2.restoreId(id),
                    shipperCompanyId: _this2.restoreId(scids[index]),
                    token: _this2.restoreToken(tokens[index]),
                    carrierNumberOfTrucks: _this2.rateAcceptPopup.numberOfTrucks != null ? _this2.rateAcceptPopup.numberOfTrucks : _this2.quotes[0].carrierNumberOfTrucks
                  };
                });

                if (!this.quotes[0].acceptRate) {
                  _context3.next = 11;
                  break;
                }

                if (!(this.quotes[0].bookNowRate === null && this.quotes[0].shipperCounterRate === null)) {
                  _context3.next = 7;
                  break;
                }

                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: 'Cannot accept rate if shipper did not provide a rate.'
                });
                return _context3.abrupt("return", false);

              case 7:
                quotes[0].responseType = 'bookNow'; // Number(null) returns 0, which works for us.
                // Number(undefined) returns NaN, which does not work for us.

                quotes[0].bookNow = {
                  rate: this.isBookNowVisible ? Number(this.quotes[0].bookNowRate) : Number(this.quotes[0].shipperCounterRate)
                };
                _context3.next = 16;
                break;

              case 11:
                if (!(this.quotes[0].carrierSubmitQuoteRate === null || this.quotes[0].carrierSubmitQuoteRate === undefined || this.quotes[0].carrierSubmitQuoteRate === '' || !this.quotes[0].carrierQuoteValidUntil)) {
                  _context3.next = 14;
                  break;
                }

                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: 'To submit quote, please provide both the rate and a quote valid until date.'
                });
                return _context3.abrupt("return", false);

              case 14:
                quotes[0].responseType = 'submitQuote';
                quotes[0].submitQuote = {
                  rate: Number(this.quotes[0].carrierSubmitQuoteRate),
                  quoteValidUntil: this.quotes[0].carrierQuoteValidUntil
                };

              case 16:
                payload = {
                  quotes: quotes
                };
                this.$store.dispatch('quote/respondRequests', payload).then(function (response) {
                  if (response.result) {
                    _this2.$vs.notify({
                      color: 'success',
                      title: 'Success',
                      text: 'Quote submitted successfully.'
                    });

                    _this2.$router.push({
                      name: 'quote'
                    });
                  }
                }).catch(function (error) {
                  _this2.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_7__["getApiErrorMsg"])(error)
                  });
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function submitQuote() {
        return _submitQuote.apply(this, arguments);
      };
    }(),
    checkPermissionToSubmit: function checkPermissionToSubmit() {
      if (this.isUserBrokerOrShipper) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Only carriers can submit a quote.'
        });
        return false;
      }

      return true;
    },
    rateAcceptPopupFun: function rateAcceptPopupFun(rate, numberOfTrucks) {
      if (!this.checkPermissionToSubmit()) return;
      this.rateAcceptPopup.acceptRate = rate;
      this.rateAcceptPopup.numberOfTrucks = numberOfTrucks;
      this.rateAcceptPopup.isActive = true;
    },
    getEquipmentType: function getEquipmentType(type) {
      if (!type) {
        return '';
      }

      var equipmentType = this.equipmentTypeOptions.find(function (item) {
        return item.value === type;
      });
      return equipmentType ? equipmentType.title : '';
    },
    validateForm: function () {
      var _validateForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.rateAcceptPopup.isActive) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 3;
                return this.$validator.validate('numberOfTrucks');

              case 3:
                _context4.next = 11;
                break;

              case 5:
                _context4.next = 7;
                return this.$validator.validate('carrierSubmitQuoteRate');

              case 7:
                _context4.next = 9;
                return this.$validator.validate('carrierQuoteValidUntil');

              case 9:
                _context4.next = 11;
                return this.$validator.validate('carrierNumberOfTrucks');

              case 11:
                if (!this.errors.items.length) {
                  _context4.next = 13;
                  break;
                }

                return _context4.abrupt("return", false);

              case 13:
                return _context4.abrupt("return", true);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function validateForm() {
        return _validateForm.apply(this, arguments);
      };
    }(),
    validateAndSubmitQuote: function () {
      var _validateAndSubmitQuote = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5() {
        var isFormValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.checkPermissionToSubmit()) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.next = 4;
                return this.validateForm();

              case 4:
                isFormValid = _context5.sent;

                if (isFormValid) {
                  this.quotes[0].acceptRate = false;
                  this.submitQuote();
                }

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function validateAndSubmitQuote() {
        return _validateAndSubmitQuote.apply(this, arguments);
      };
    }(),
    splitQueryParams: function splitQueryParams(id, s, t) {
      return {
        ids: id.split(','),
        scids: s.split(','),
        tokens: t.split(',')
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'QuotesResponseTable',
  props: {
    quotesResponse: {
      default: []
    }
  },
  methods: {
    formatAmountValue: function formatAmountValue(amount) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_1__["formatAmount"])(amount);
    },
    getCompanyInitials: function getCompanyInitials(name) {
      if (!name) return '';

      var _name$split = name.split(' '),
          _name$split2 = _slicedToArray(_name$split, 2),
          first = _name$split2[0],
          second = _name$split2[1];

      return first.charAt(0).toUpperCase() + (second ? second.charAt(0) : '').toUpperCase();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var dict = {
  custom: {
    fName: {
      required: 'Please enter your first name'
    },
    lName: {
      required: 'Please enter your last name'
    },
    email: {
      required: 'Please enter your email',
      email: 'Please enter a valid email address'
    },
    // password: {
    //   required: 'Please enter your password',
    //   min: 'Password must be at least 6 characters',
    // },
    // cPassword: {
    //   required: 'Please confirm your password',
    //   confirmed: 'Passwords do not match',
    //   min: 'Password must be at least 6 characters',
    // },
    bussinessName: {
      required: 'Please enter your business name'
    },
    usNumber: {
      required: 'Please enter your US DOT Number'
    },
    // billingEmail: {
    //   required: 'Please enter your billing email',
    //   email: 'Please enter a valid billing email address',
    // },
    // loadStartFrom: {
    //   required: 'Please enter Load # Start From',
    // },
    phoneNumber: {
      required: 'Please enter your phone number'
    } // timeZone: {
    //   required: 'Please select your time zone',
    // },

  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SingleStepRegistration',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      formFields: {
        fName: null,
        lName: null,
        email: null,
        // password: null,
        // cPassword: null,
        bussinessName: null,
        usNumber: null,
        // billingEmail: null,
        // loadStartFrom: null,
        streetAddress: null,
        city: null,
        state: null,
        zipCode: null,
        phoneNumber: null // faxNumber: null,
        // timeZone: null,
        // timezoneOptions: null,

      },
      items: []
    };
  },
  created: function created() {
    this.$validator.localize('en', dict); // const timezone = {
    //   'America/Los_Angeles': 'Pacific Time - US and Canada',
    //   'America/Edmonton': 'Mountain Time - US and Canada',
    //   'America/Winnipeg': 'Central Time - US and Canada',
    //   'America/New_York': 'Eastern Time - US and Canada',
    //   'America/Halifax': 'Atlantic Time',
    // };
    // this.timezoneOptions = Object.entries(timezone).map((timezone) => ({
    //   label: timezone[1],
    //   value: timezone[0],
    // }));
  },
  methods: {
    register: function () {
      var _register = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var _this = this;

        var payload, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$validator.validateAll();

              case 2:
                if (!(this.errors.items.length > 0)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                // if (this.formFields.password !== this.formFields.cPassword) {
                //   this.$vs.notify({
                //     title: 'Error',
                //     text: 'Passwords do not match',
                //     iconPack: 'feather',
                //     icon: 'icon-alert-circle',
                //     color: 'danger',
                //   });
                //   return;
                // }
                this.$vs.loading();
                payload = {
                  first_name: this.formFields.fName,
                  last_name: this.formFields.lName,
                  email: this.formFields.email,
                  // password: this.formFields.password,
                  business_name: this.formFields.bussinessName,
                  usdot_number: this.formFields.usNumber,
                  // business_email: this.formFields.billingEmail,
                  // load_unique_id_started_from: this.formFields.loadStartFrom,
                  address: this.formFields.streetAddress,
                  city: this.formFields.city,
                  state: this.formFields.state,
                  zipcode: this.formFields.zipCode,
                  phone_number: this.formFields.phoneNumber,
                  // fax_number: this.formFields.faxNumber,
                  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                };

                if (this.formFields.billingEmail) {
                  payload = _objectSpread({}, payload, {
                    business_email: this.formFields.billingEmail
                  });
                }

                _context.next = 9;
                return this.$store.dispatch('auth/singleStepRegistration', payload).then(function (data) {
                  _this.$vs.notify({
                    title: 'Success',
                    text: data.message,
                    iconPack: 'feather',
                    color: 'success'
                  });

                  _this.$emit('closeRegistrationPopup', true);
                }).catch(function (error) {
                  _this.$vs.notify({
                    title: 'Error',
                    text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(error),
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                  });
                }).finally(function () {
                  _this.$vs.loading.close();
                });

              case 9:
                data = _context.sent;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function register() {
        return _register.apply(this, arguments);
      };
    }(),
    autoComplete: function () {
      var _autoComplete = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(event, type) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  this.$store.dispatch('quote/getAllCarriers', {
                    filters: {
                      dotNumber: event.query.trim()
                    }
                  }).then(function (data) {
                    _this2.items = data.carriers || [];
                  });
                } catch (error) {
                  this.$vs.notify({
                    time: 8000,
                    color: 'danger',
                    title: 'Error',
                    text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(error)
                  });
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function autoComplete(_x, _x2) {
        return _autoComplete.apply(this, arguments);
      };
    }(),
    handleAutoCompleteData: function () {
      var _handleAutoCompleteData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(data, type) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.formFields.usNumber = data.value.dotNumber;
                this.formFields.bussinessName = data.value.legalName;
                this.formFields.city = data.value.phyCity;
                this.formFields.state = data.value.phyState;
                this.formFields.zipCode = data.value.phyZip;
                this.formFields.streetAddress = data.value.phyStreet;
                this.formFields.billingEmail = data.value.emailAddress;
                this.formFields.phoneNumber = data.value.telephone;

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function handleAutoCompleteData(_x3, _x4) {
        return _handleAutoCompleteData.apply(this, arguments);
      };
    }()
  },
  watch: {
    isActive: function isActive(val) {
      var _this3 = this;

      if (val) {
        _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.formFields).forEach(function (key) {
          _this3.formFields[key] = null;
        });

        this.$validator.reset();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=template&id=8d0e2314&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=template&id=8d0e2314&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "px-10 sm-px:0 quoteContainer"
  }, [_vm._l(_vm.quotes, function (item) {
    return _c("div", {
      key: item.id,
      staticClass: "pt-5"
    }, [_c("div", {
      staticClass: "quoteHeading"
    }, [_vm._v("\n        Quote Request from Shipper\n        "), _c("span", {
      staticClass: "font-bold"
    }, [_vm._v("\n          " + _vm._s(item.shipperCompany ? item.shipperCompany.name : "") + "\n        ")])]), _vm._v(" "), _c("div", [_c("div", [_c("h3", {
      staticClass: "quoteSubHeading"
    }, [_vm._v("Quote Details")]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center"
    }, [_c("div", {
      staticClass: "locationBar"
    }, [_c("div", {
      staticClass: "locationPoints"
    }, [_c("span", [_vm._v(_vm._s(item.stops[0].city))]), _vm._v("\n                ,\n                "), _c("span", [_vm._v(_vm._s(item.stops[0].state))])]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center"
    }, [_c("svg", {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "17",
        viewBox: "0 0 16 17",
        fill: "none"
      }
    }, [_c("circle", {
      attrs: {
        cx: "8",
        cy: "8.5",
        r: "8",
        fill: "#3975EB"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "locationDistanceBorder"
    }), _vm._v(" "), _c("svg", {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "21",
        viewBox: "0 0 20 21",
        fill: "none"
      }
    }, [_c("g", {
      attrs: {
        "clip-path": "url(#clip0_376_8306)"
      }
    }, [_c("path", {
      attrs: {
        d: "M15.3033 14.9701L10 20.2733L4.6967 14.9701C1.76777 12.0411 1.76777 7.29238 4.6967 4.36345C7.62563 1.43451 12.3743 1.43451 15.3033 4.36345C18.2323 7.29238 18.2323 12.0411 15.3033 14.9701ZM10 11.3334C10.9205 11.3334 11.6667 10.5872 11.6667 9.66675C11.6667 8.74627 10.9205 8.00008 10 8.00008C9.0795 8.00008 8.33333 8.74627 8.33333 9.66675C8.33333 10.5872 9.0795 11.3334 10 11.3334Z",
        fill: "#3975EB"
      }
    })]), _vm._v(" "), _c("defs", [_c("clipPath", {
      attrs: {
        id: "clip0_376_8306"
      }
    }, [_c("rect", {
      attrs: {
        width: "20",
        height: "20",
        fill: "white",
        transform: "translate(0 0.5)"
      }
    })])])])]), _vm._v(" "), _c("div", {
      staticClass: "locationPoints"
    }, [_c("span", [_vm._v(_vm._s(item.stops[1].city))]), _vm._v(", "), _c("span", [_vm._v(_vm._s(item.stops[1].state))])])])])])]), _vm._v(" "), _c("div", {
      staticClass: "pt-16"
    }, [_c("div", {
      staticClass: "vs-row"
    }, [_c("div", {
      staticClass: "vs-col w-1/3"
    }, [[_c("div", {
      staticClass: "vs-row"
    }, [_vm._m(0, true), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/2"
    }, [_c("p", {
      staticClass: "capitalize"
    }, [_vm._v("\n                    " + _vm._s(_vm.loadTypes[item.loadType] || "") + "\n                  ")])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-row"
    }, [_vm._m(1, true), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/2"
    }, [_c("p", [_vm._v(_vm._s(_vm.getEquipmentType(item.equipmentType)))])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-row"
    }, [_vm._m(2, true), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/2"
    }, [_c("p", [_vm._v("\n                    " + _vm._s(_vm.driverPreferences[item.driverPreference] || "N/A") + "\n                  ")])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-row"
    }, [_vm._m(3, true), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/2"
    }, [_c("p", [_vm._v(_vm._s(_vm.totalWeight))])])])]], 2), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/3"
    }, [[_c("div", {
      staticClass: "vs-row"
    }, [_vm._m(4, true), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/2"
    }, [_c("p", [_vm._v("\n                    " + _vm._s(item && _vm.checkValue(item.distance)) + "\n                  ")])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-row"
    }, [_vm._m(5, true), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/2"
    }, [_c("p", [_vm._v("\n                    " + _vm._s(item.numberOfTrucks) + "\n                  ")])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-row"
    }, [_vm._m(6, true), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/2"
    }, [_c("p", [_vm._v("\n                    " + _vm._s(item && _vm.formatDate(item.urgencyDate)) + "\n                  ")])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-row"
    }, [_vm._m(7, true), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/2"
    }, [_c("p", [_vm._v("\n                    " + _vm._s(_vm.formatCurrencyRate(item.bookNowRate)) + "\n                  ")])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-row"
    }, [_vm._m(8, true), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/2"
    }, [_c("p", [_vm._v("\n                    " + _vm._s(_vm.formatCurrencyRate(item.shipperCounterRate)) + "\n                  ")])])])]], 2), _vm._v(" "), _c("div", {
      staticClass: "vs-col w-1/3"
    }, [_c("p", {
      staticClass: "label pb-4"
    }, [_vm._v("Location")]), _vm._v(" "), _c("div", {
      staticClass: "vs-row"
    }, [_c("div", {
      staticClass: "vs-col md:w-full"
    }, _vm._l(item.stops, function (stop, index) {
      return _c("div", {
        key: index,
        staticClass: "flex items-start mb-3"
      }, [[_c("div", {
        staticClass: "vs-col"
      }, [_c("div", {
        staticClass: "locationLabel"
      }, [stop.type === "shipper" ? _c("span", [_vm._v("PICKUP")]) : _c("span", [_vm._v("DELIVERY")])])]), _vm._v(" "), _c("div", {
        staticClass: "vs-col"
      }, [_c("div", {
        staticClass: "mb-3"
      }, [_c("p", {
        staticClass: "ml-5"
      }, [_c("span", [_vm._v("\n                            " + _vm._s(_vm.formatAddress(stop.address, stop.city, stop.state, stop.zipCode)) + "\n                          ")])])])])]], 2);
    }), 0)])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-row"
    }, [_vm.isBookNowVisible ? _c("div", {
      staticClass: "vs-col"
    }, [_c("vs-button", {
      attrs: {
        type: "filled",
        disabled: !_vm.isAuth
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.rateAcceptPopupFun(item.bookNowRate, item.carrierNumberOfTrucks);
        }
      }
    }, [_vm._v("\n              Book Now:\n              "), _c("span", {
      staticClass: "pl-3"
    }, [_vm._v("\n                " + _vm._s(_vm.formatCurrencyRate(item.bookNowRate)) + "\n              ")])])], 1) : _vm.isCounterRateVisible ? _c("div", {
      staticClass: "vs-col w-1/4"
    }, [_c("div", {
      staticClass: "counterCard"
    }, [_c("h2", [_vm._v("NEW COUNTER RATE")]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center my-3"
    }, [_c("div", {
      staticClass: "flex items-center mr-5"
    }, [_c("svg", {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none"
      }
    }, [_c("path", {
      attrs: {
        d: "M15.9993 29.3332C8.63535 29.3332 2.66602 23.3638 2.66602 15.9998C2.66602 8.63584 8.63535 2.6665 15.9993 2.6665C23.3633 2.6665 29.3327 8.63584 29.3327 15.9998C29.3327 23.3638 23.3633 29.3332 15.9993 29.3332ZM11.3327 18.6665V21.3332H14.666V23.9998H17.3327V21.3332H18.666C19.5501 21.3332 20.3979 20.982 21.023 20.3569C21.6482 19.7317 21.9993 18.8839 21.9993 17.9998C21.9993 17.1158 21.6482 16.2679 21.023 15.6428C20.3979 15.0177 19.5501 14.6665 18.666 14.6665H13.3327C13.1559 14.6665 12.9863 14.5963 12.8613 14.4712C12.7363 14.3462 12.666 14.1766 12.666 13.9998C12.666 13.823 12.7363 13.6535 12.8613 13.5284C12.9863 13.4034 13.1559 13.3332 13.3327 13.3332H20.666V10.6665H17.3327V7.99984H14.666V10.6665H13.3327C12.4486 10.6665 11.6008 11.0177 10.9757 11.6428C10.3505 12.2679 9.99935 13.1158 9.99935 13.9998C9.99935 14.8839 10.3505 15.7317 10.9757 16.3569C11.6008 16.982 12.4486 17.3332 13.3327 17.3332H18.666C18.8428 17.3332 19.0124 17.4034 19.1374 17.5284C19.2624 17.6535 19.3327 17.823 19.3327 17.9998C19.3327 18.1766 19.2624 18.3462 19.1374 18.4712C19.0124 18.5963 18.8428 18.6665 18.666 18.6665H11.3327Z",
        fill: "#1E3A8A"
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "counterPrice"
    }, [_vm._v("\n                  " + _vm._s(_vm.formatCurrencyRate(item.shipperCounterRate)) + "\n                ")])]), _vm._v(" "), _c("div", {
      staticClass: "vx-col flex mb-3"
    }, [_c("vs-button", {
      staticClass: "ml-4",
      attrs: {
        type: "filled",
        disabled: !_vm.isAuth
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.rateAcceptPopupFun(item.shipperCounterRate, item.carrierNumberOfTrucks);
        }
      }
    }, [_vm._v("\n                  Accept\n                ")])], 1)])]) : _vm._e()]), _vm._v(" "), _c("vs-divider", {
      staticClass: "pt-20"
    }), _vm._v(" "), _c("div", {
      staticClass: "submit-quote-wrapper"
    }, [_c("h4", {
      staticClass: "quoteSubHeading"
    }, [_vm._v("Submit A Quote")]), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "grid lg:grid-cols-4 sm:grid-cols-2 col-gap-5"
    }, [_c("div", [_c("label", [_vm._v("Amount Per Truck "), _c("field-required-sign")], 1), _vm._v(" "), _c("vx-input-group", {
      staticClass: "pt-2"
    }, [_c("template", {
      slot: "prepend"
    }, [_c("div", {
      staticClass: "prepend-text",
      staticStyle: {
        "background-color": "#3975eb1a"
      }
    }, [_c("svg", {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none"
      }
    }, [_c("path", {
      attrs: {
        d: "M12.0039 22.0029C6.48107 22.0029 2.00391 17.5258 2.00391 12.0029C2.00391 6.48008 6.48107 2.00293 12.0039 2.00293C17.5267 2.00293 22.0039 6.48008 22.0039 12.0029C22.0039 17.5258 17.5267 22.0029 12.0039 22.0029ZM8.50391 14.0029V16.0029H11.0039V18.0029H13.0039V16.0029H14.0039C15.3846 16.0029 16.5039 14.8836 16.5039 13.5029C16.5039 12.1222 15.3846 11.0029 14.0039 11.0029H10.0039C9.72777 11.0029 9.50391 10.7791 9.50391 10.5029C9.50391 10.2268 9.72777 10.0029 10.0039 10.0029H15.5039V8.00293H13.0039V6.00293H11.0039V8.00293H10.0039C8.6232 8.00293 7.50391 9.12222 7.50391 10.5029C7.50391 11.8836 8.6232 13.0029 10.0039 13.0029H14.0039C14.28 13.0029 14.5039 13.2268 14.5039 13.5029C14.5039 13.7791 14.28 14.0029 14.0039 14.0029H8.50391Z",
        fill: "#3975EB"
      }
    })])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-con-input"
    }, [_c("vs-input", {
      directives: [{
        name: "validate",
        rawName: "v-validate",
        value: "required",
        expression: "'required'"
      }],
      attrs: {
        type: "number",
        inputmode: "numeric",
        pattern: "[0-9]*",
        "data-vv-validate-on": "blur",
        name: "carrierSubmitQuoteRate",
        disabled: item.mutualAgreedRate != null || !_vm.isAuth
      },
      model: {
        value: item.carrierSubmitQuoteRate,
        callback: function callback($$v) {
          _vm.$set(item, "carrierSubmitQuoteRate", _vm._n($$v));
        },
        expression: "item.carrierSubmitQuoteRate"
      }
    })], 1)], 2), _vm._v(" "), _c("span", {
      staticClass: "text-danger text-sm"
    }, [_vm._v("\n                  " + _vm._s(_vm.errors.first("carrierSubmitQuoteRate")) + "\n                ")])], 1), _vm._v(" "), _c("div", [_c("div", [_c("div", [_c("label", [_vm._v("Quote Valid Until "), _c("field-required-sign")], 1)]), _vm._v(" "), _c("vx-input-group", {
      staticClass: "pt-2"
    }, [_c("template", {
      slot: "prepend"
    }, [_c("div", {
      staticClass: "prepend-text",
      staticStyle: {
        "background-color": "#3975eb1a"
      }
    }, [_c("svg", {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "21",
        height: "20",
        viewBox: "0 0 21 20",
        fill: "none"
      }
    }, [_c("path", {
      attrs: {
        d: "M14.501 2.49967H17.8343C18.2946 2.49967 18.6676 2.87277 18.6676 3.33301V16.6663C18.6676 17.1266 18.2946 17.4997 17.8343 17.4997H2.83431C2.37408 17.4997 2.00098 17.1266 2.00098 16.6663V3.33301C2.00098 2.87277 2.37408 2.49967 2.83431 2.49967H6.16764V0.833008H7.83431V2.49967H12.8343V0.833008H14.501V2.49967ZM3.66764 7.49967V15.833H17.001V7.49967H3.66764ZM5.33431 9.16634H7.00098V10.833H5.33431V9.16634ZM9.50098 9.16634H11.1676V10.833H9.50098V9.16634ZM13.6676 9.16634H15.3343V10.833H13.6676V9.16634Z",
        fill: "#3975EB"
      }
    })])])]), _vm._v(" "), _c("div", {
      staticClass: "relative"
    }, [_c("flat-pickr", {
      directives: [{
        name: "validate",
        rawName: "v-validate",
        value: "required",
        expression: "'required'"
      }],
      staticClass: "w-full",
      class: {
        "custom-disabled": item.mutualAgreedRate !== null
      },
      attrs: {
        config: _vm.configDateFlatPickr,
        placeholder: "Select a date",
        "data-vv-validate-on": "on-change",
        name: "carrierQuoteValidUntil",
        disabled: item.mutualAgreedRate != null || !_vm.isAuth
      },
      model: {
        value: item.carrierQuoteValidUntil,
        callback: function callback($$v) {
          _vm.$set(item, "carrierQuoteValidUntil", $$v);
        },
        expression: "item.carrierQuoteValidUntil"
      }
    })], 1)], 2), _vm._v(" "), _c("span", {
      staticClass: "text-danger text-sm"
    }, [_vm._v("\n                    " + _vm._s(_vm.errors.first("carrierQuoteValidUntil")) + "\n                  ")])], 1)]), _vm._v(" "), _c("div", [_c("label", [_vm._v("Available Trucks "), _c("field-required-sign")], 1), _vm._v(" "), _c("vx-input-group", {
      staticClass: "pt-2"
    }, [_c("template", {
      slot: "prepend"
    }, [_c("div", {
      staticClass: "prepend-text",
      staticStyle: {
        "background-color": "#3975eb1a"
      }
    }, [_c("svg", {
      attrs: {
        "data-v-370bca10": "",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none"
      }
    }, [_c("path", {
      attrs: {
        "data-v-370bca10": "",
        d: "M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z",
        fill: "#3975EB"
      }
    })])])]), _vm._v(" "), _c("div", {
      staticClass: "vs-con-input"
    }, [_c("vs-input", {
      directives: [{
        name: "validate",
        rawName: "v-validate",
        value: "required|numeric",
        expression: "'required|numeric'"
      }],
      attrs: {
        type: "number",
        inputmode: "numeric",
        pattern: "[0-9]*",
        "data-vv-validate-on": "blur",
        name: "carrierNumberOfTrucks",
        disabled: item.mutualAgreedRate != null || !_vm.isAuth
      },
      model: {
        value: item.carrierNumberOfTrucks,
        callback: function callback($$v) {
          _vm.$set(item, "carrierNumberOfTrucks", _vm._n($$v));
        },
        expression: "item.carrierNumberOfTrucks"
      }
    })], 1)], 2), _vm._v(" "), _c("span", {
      staticClass: "text-danger text-sm"
    }, [_vm._v("\n                  " + _vm._s(_vm.errors.first("carrierNumberOfTrucks")) + "\n                ")])], 1), _vm._v(" "), _c("div", {
      staticClass: "pt-8"
    }, [item.mutualAgreedRate == null ? _c("vs-button", {
      attrs: {
        type: "filled",
        color: "primary",
        disabled: !_vm.isAuth
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.validateAndSubmitQuote.apply(null, arguments);
        }
      }
    }, [_vm._v("\n                  Submit Quote\n                ")]) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
      staticClass: "flex justify-end w-full items-center py-4"
    }, [!_vm.isAuth ? _c("div", {
      staticClass: "ml-auto flex gap-2"
    }, [_c("vs-button", {
      staticClass: "w-full mt-5",
      on: {
        click: _vm.navigateToLoginPageViaLink
      }
    }, [_vm._v("\n                Login\n              ")]), _vm._v(" "), _c("vs-button", {
      staticClass: "w-full mt-5",
      attrs: {
        color: "primary",
        type: "border"
      },
      on: {
        click: function click($event) {
          _vm.openSingleStepRegistrationPopup = true;
        }
      }
    }, [_vm._v("\n                Register\n              ")])], 1) : _vm._e()])]), _vm._v(" "), _c("DataTable")], 1)]);
  }), _vm._v(" "), _vm.quotesResponse && _vm.quotesResponse.length ? _c("QuotesResponseTable", {
    attrs: {
      quotesResponse: _vm.quotesResponse
    }
  }) : _vm._e(), _vm._v(" "), [_c("vs-popup", {
    attrs: {
      title: "",
      active: _vm.rateAcceptPopup.isActive
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.rateAcceptPopup, "isActive", $event);
      }
    }
  }, [_c("div", [_c("div", {
    staticClass: "flex flex-col gap-4 items-center px-24"
  }, [_c("h2", {
    staticClass: "font-bold"
  }, [_vm._v("Accept Rate")]), _vm._v(" "), _vm._v("\n            Accept shipper quote\n            " + _vm._s(_vm.formatCurrencyRate(_vm.rateAcceptPopup.acceptRate)) + "?\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 items-center mt-10"
  }, [_c("label", {
    staticClass: "w-1/3"
  }, [_vm._v("\n              Number of trucks\n              "), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|numeric",
      expression: "'required|numeric'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      "data-vv-validate-on": "blur",
      name: "numberOfTrucks"
    },
    model: {
      value: _vm.rateAcceptPopup.numberOfTrucks,
      callback: function callback($$v) {
        _vm.$set(_vm.rateAcceptPopup, "numberOfTrucks", _vm._n($$v));
      },
      expression: "rateAcceptPopup.numberOfTrucks"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "error-message"
  }, [_c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n            " + _vm._s(_vm.errors.first("numberOfTrucks")) + "\n          ")])]), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-10 w-full",
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.acceptCounterRate
    }
  }, [_vm._v("\n          Submit\n        ")])], 1)]], 2), _vm._v(" "), _c("vs-popup", {
    attrs: {
      title: "Register Now",
      active: _vm.openSingleStepRegistrationPopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.openSingleStepRegistrationPopup = $event;
      }
    }
  }, [_c("SingleStepRegistration", {
    attrs: {
      isActive: _vm.openSingleStepRegistrationPopup
    },
    on: {
      closeRegistrationPopup: _vm.closePopup
    }
  })], 1)], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("h5", {
    staticClass: "label"
  }, [_vm._v("Mode:")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("h5", {
    staticClass: "label"
  }, [_vm._v("Equipment:")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("h5", {
    staticClass: "label"
  }, [_vm._v("Driver Preference:")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("h5", {
    staticClass: "label"
  }, [_vm._v("Total Weight:")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("h5", {
    staticClass: "label"
  }, [_vm._v("Miles:")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("h5", {
    staticClass: "label"
  }, [_vm._v("Trucks Needed:")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("h5", {
    staticClass: "label"
  }, [_vm._v("Urgency Date:")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("h5", {
    staticClass: "label"
  }, [_vm._v("Book Now Rate:")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vs-col w-1/2"
  }, [_c("h5", {
    staticClass: "label"
  }, [_vm._v("Counter Rate:")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=template&id=d13f26a0&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=template&id=d13f26a0& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "quote-response flex justify-center"
  }, [_c("DataTable", {
    staticClass: "w-1/2 mt-5",
    attrs: {
      value: _vm.quotesResponse
    }
  }, [_c("Column", {
    attrs: {
      field: "carrierCompany",
      header: "Carrier"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "flex items-center col-gap-5"
        }, [slotProps.data.carrierCompany.logoUrl ? _c("img", {
          staticClass: "w-16 h-16",
          attrs: {
            src: slotProps.data.carrierCompany.logoUrl,
            alt: slotProps.data.name
          }
        }) : _c("div", {
          staticClass: "w-16 h-16 bg-blue flex justify-center items-center"
        }, [_c("p", {
          staticClass: "text-white"
        }, [_vm._v("\n              " + _vm._s(_vm.getCompanyInitials(slotProps.data.carrierCompany.name)) + "\n            ")])]), _vm._v(" "), _c("p", {
          staticClass: "text-base uppercase font-semibold"
        }, [_vm._v("\n            " + _vm._s(slotProps.data.carrierCompany.name) + "\n          ")])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "carrierSubmitQuoteRate",
      header: "Rate"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("p", {
          staticClass: "text-blue"
        }, [_vm._v(_vm._s(_vm.formatAmountValue(slotProps.data.carrierSubmitQuoteRate)))])];
      }
    }])
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=template&id=a0506d98&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=template&id=a0506d98& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "registration-modal"
  }, [_c("div", {
    staticClass: "vs-row"
  }, [_c("div", {
    staticClass: "vs-col w-full pb-3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n        US DOT Number (type to search your company) "), _c("field-required-sign")], 1), _vm._v(" "), _c("AutoComplete", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "inputx w-full",
    attrs: {
      name: "usNumber",
      "data-vv-validate-on": "blur",
      suggestions: _vm.items,
      autoHighlight: true,
      field: "legalName"
    },
    on: {
      "item-select": function itemSelect($event) {
        return _vm.handleAutoCompleteData($event, "usNumber");
      },
      complete: function complete($event) {
        return _vm.autoComplete($event, "usNumber");
      }
    },
    model: {
      value: _vm.formFields.usNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "usNumber", $$v);
      },
      expression: "formFields.usNumber"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("usNumber")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vs-row pb-3"
  }, [_c("div", {
    staticClass: "vs-col w-1/2 pr-3 pb-3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" First Name "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "inputx w-full",
    attrs: {
      name: "fName",
      "data-vv-validate-on": "blur"
    },
    model: {
      value: _vm.formFields.fName,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "fName", $$v);
      },
      expression: "formFields.fName"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("fName")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "vs-col w-1/2 pb-3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Last Name "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "inputx w-full",
    attrs: {
      name: "lName",
      "data-vv-validate-on": "blur"
    },
    model: {
      value: _vm.formFields.lName,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "lName", $$v);
      },
      expression: "formFields.lName"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("lName")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vs-row"
  }, [_c("div", {
    staticClass: "vs-col w-full pb-3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Email "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|email",
      expression: "'required|email'"
    }],
    staticClass: "inputx w-full",
    attrs: {
      name: "email",
      "data-vv-validate-on": "blur"
    },
    model: {
      value: _vm.formFields.email,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "email", $$v);
      },
      expression: "formFields.email"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("email")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vs-row"
  }, [_c("div", {
    staticClass: "vs-col w-full pb-3"
  }, [_c("vs-input", {
    staticClass: "inputx w-full",
    attrs: {
      name: "phoneNumber",
      label: "Phone Number"
    },
    model: {
      value: _vm.formFields.phoneNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "phoneNumber", $$v);
      },
      expression: "formFields.phoneNumber"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("phoneNumber")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vs-row"
  }, [_c("div", {
    staticClass: "vs-col w-full pb-3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Business Name "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "inputx w-full",
    attrs: {
      name: "bussinessName",
      "data-vv-validate-on": "blur"
    },
    model: {
      value: _vm.formFields.bussinessName,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "bussinessName", $$v);
      },
      expression: "formFields.bussinessName"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("bussinessName")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vs-row pb-3"
  }, [_c("div", {
    staticClass: "vs-col w-1/2 pr-3 pb-3"
  }, [_c("vs-input", {
    staticClass: "inputx w-full",
    attrs: {
      name: "streetAddress",
      label: "Address Street"
    },
    model: {
      value: _vm.formFields.streetAddress,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "streetAddress", $$v);
      },
      expression: "formFields.streetAddress"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("streetAddress")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "vs-col w-1/2 pb-3"
  }, [_c("vs-input", {
    staticClass: "inputx w-full",
    attrs: {
      name: "city",
      label: "City"
    },
    model: {
      value: _vm.formFields.city,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "city", $$v);
      },
      expression: "formFields.city"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("city")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vs-row pb-3"
  }, [_c("div", {
    staticClass: "vs-col w-1/2 pr-3 pb-3"
  }, [_c("vs-input", {
    staticClass: "inputx w-full",
    attrs: {
      name: "state",
      label: "State"
    },
    model: {
      value: _vm.formFields.state,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "state", $$v);
      },
      expression: "formFields.state"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("state")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "vs-col w-1/2 pb-3"
  }, [_c("vs-input", {
    staticClass: "inputx w-full",
    attrs: {
      name: "zipCode",
      label: "Zip Code"
    },
    model: {
      value: _vm.formFields.zipCode,
      callback: function callback($$v) {
        _vm.$set(_vm.formFields, "zipCode", $$v);
      },
      expression: "formFields.zipCode"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("zipCode")))])], 1)]), _vm._v(" "), _c("vs-button", {
    staticClass: "w-full",
    on: {
      click: _vm.register
    }
  }, [_vm._v("Submit")])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quoteContainer .quoteHeading[data-v-8d0e2314] {\n  font-size: 32px;\n  font-weight: 700;\n}\n.quoteContainer .quoteSubHeading[data-v-8d0e2314] {\n  font-size: 20px;\n  font-weight: 500;\n}\n[dir] .quoteContainer .quoteSubHeading[data-v-8d0e2314] {\n  padding: 15px 0px;\n}\n.quoteContainer h4.quoteSubHeading[data-v-8d0e2314] {\n  position: relative;\n}\n[dir=ltr] .quoteContainer h4.quoteSubHeading[data-v-8d0e2314] {\n  left: -25px;\n}\n[dir=rtl] .quoteContainer h4.quoteSubHeading[data-v-8d0e2314] {\n  right: -25px;\n}\n.quoteContainer .locationBar[data-v-8d0e2314] {\n  display: flex;\n  align-items: center;\n}\n[dir] .quoteContainer .locationBar[data-v-8d0e2314] {\n  border-radius: 100px;\n  background: var(--blue-200, #bfdbfe);\n  padding: 8px 16px;\n}\n.quoteContainer .locationBar .locationDistanceBorder[data-v-8d0e2314] {\n  min-width: 200px;\n}\n[dir] .quoteContainer .locationBar .locationDistanceBorder[data-v-8d0e2314] {\n  border: 1px dashed rgba(var(--vs-primary), 1) !important;\n}\n.quoteContainer .locationBar .locationPoints[data-v-8d0e2314] {\n  color: rgba(var(--vs-primary), 1) !important;\n  font-size: 16px;\n  font-weight: 500;\n}\n[dir] .quoteContainer .locationBar .locationPoints[data-v-8d0e2314] {\n  padding: 0px 5px;\n}\n.quoteContainer .label[data-v-8d0e2314] {\n  color: #626262;\n}\n[dir] .quoteContainer .label[data-v-8d0e2314] {\n  padding-bottom: 15px;\n}\n.quoteContainer p[data-v-8d0e2314] {\n  font-size: 16px;\n  font-weight: 500;\n}\n.quoteContainer .locationLabel[data-v-8d0e2314] {\n  color: rgba(var(--vs-primary), 1) !important;\n  font-weight: 500;\n  min-width: 75px;\n}\n[dir] .quoteContainer .counterCard[data-v-8d0e2314] {\n  padding: 15px;\n  border-radius: 8px;\n  background: var(--blue-100, #dbeafe);\n  margin: 0 auto;\n}\n.quoteContainer .counterCard h2[data-v-8d0e2314] {\n  font-size: 18px;\n  color: var(--blue-900, #1e3a8a);\n  font-weight: 700;\n}\n.quoteContainer .counterCard .counterPrice[data-v-8d0e2314] {\n  color: var(--blue-900, #1e3a8a);\n  font-size: 24px;\n  font-weight: 500;\n}\n.quoteContainer .counterCard .counterCardText[data-v-8d0e2314] {\n  color: var(--blue-900, #1e3a8a);\n  font-size: 14px;\n  font-weight: 700;\n}\n.quoteContainer .counterCard .counterCardText span[data-v-8d0e2314] {\n  font-weight: 700;\n}\n[dir] .quoteContainer .error-message[data-v-8d0e2314] {\n  margin-top: 5px;\n}\n[data-v-8d0e2314] .vs-popup--content {\n  position: relative;\n}\n.error-message[data-v-8d0e2314] {\n  position: absolute;\n}\n[dir=ltr] .error-message[data-v-8d0e2314] {\n  left: 165px;\n}\n[dir=rtl] .error-message[data-v-8d0e2314] {\n  right: 165px;\n}\n.custom-disabled[data-v-8d0e2314] {\n  color: #626262;\n}\n.submit-quote-wrapper[data-v-8d0e2314] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quote-response .p-datatable thead th:first-child {\n  width: 75%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-autocomplete-input {\n  width: 100%;\n}\n[dir=ltr] .registration-modal .vs-input--label {\n  padding-left: 0px;\n}\n[dir=rtl] .registration-modal .vs-input--label {\n  padding-right: 0px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss&");

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

/***/ "./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarrierViewQuoteRequests_vue_vue_type_template_id_8d0e2314_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarrierViewQuoteRequests.vue?vue&type=template&id=8d0e2314&scoped=true& */ "./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=template&id=8d0e2314&scoped=true&");
/* harmony import */ var _CarrierViewQuoteRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarrierViewQuoteRequests.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CarrierViewQuoteRequests_vue_vue_type_style_index_0_id_8d0e2314_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss& */ "./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CarrierViewQuoteRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarrierViewQuoteRequests_vue_vue_type_template_id_8d0e2314_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarrierViewQuoteRequests_vue_vue_type_template_id_8d0e2314_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8d0e2314",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierViewQuoteRequests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_style_index_0_id_8d0e2314_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=style&index=0&id=8d0e2314&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_style_index_0_id_8d0e2314_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_style_index_0_id_8d0e2314_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_style_index_0_id_8d0e2314_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_style_index_0_id_8d0e2314_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=template&id=8d0e2314&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=template&id=8d0e2314&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_template_id_8d0e2314_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierViewQuoteRequests.vue?vue&type=template&id=8d0e2314&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierViewQuoteRequests.vue?vue&type=template&id=8d0e2314&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_template_id_8d0e2314_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierViewQuoteRequests_vue_vue_type_template_id_8d0e2314_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuotesResponseTable_vue_vue_type_template_id_d13f26a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotesResponseTable.vue?vue&type=template&id=d13f26a0& */ "./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=template&id=d13f26a0&");
/* harmony import */ var _QuotesResponseTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotesResponseTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuotesResponseTable_vue_vue_type_style_index_0_id_d13f26a0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss& */ "./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuotesResponseTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuotesResponseTable_vue_vue_type_template_id_d13f26a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuotesResponseTable_vue_vue_type_template_id_d13f26a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotesResponseTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_style_index_0_id_d13f26a0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=style&index=0&id=d13f26a0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_style_index_0_id_d13f26a0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_style_index_0_id_d13f26a0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_style_index_0_id_d13f26a0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_style_index_0_id_d13f26a0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=template&id=d13f26a0&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=template&id=d13f26a0& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_template_id_d13f26a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotesResponseTable.vue?vue&type=template&id=d13f26a0& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuotesResponseTable.vue?vue&type=template&id=d13f26a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_template_id_d13f26a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesResponseTable_vue_vue_type_template_id_d13f26a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loadTypes: {
        drayage: 'Drayage',
        ftl: 'FTL',
        ltl: 'LTL'
      },
      equipmentTypeOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].planning.equipmentTypes
    };
  },
  computed: {
    formattedAddress: function formattedAddress() {
      var result = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatAddressCityState"])(this.value.address, this.value.city, this.value.state);
      return result;
    }
  },
  methods: {
    commaSeparatedValue: _helpers_helper__WEBPACK_IMPORTED_MODULE_0__["commaSeparatedValue"],
    parseFloatWithTrims: function parseFloatWithTrims(value) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["parseFloatWithTrim"])(value);
    },
    formatDate: function formatDate(date) {
      if (!date || !this.$dayjs(date).isValid()) {
        return '';
      }

      return this.$dayjs(date).format('MM/DD/YY');
    },
    formatStatus: function formatStatus(value) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatStatusToCamelCamelCase"])(value);
    },
    formatNumberWithCommas: function formatNumberWithCommas(value) {
      if (!value) return value;
      var formattedValue = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["parseFloatWithTrim"])(value);
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["commaSeparatedValue"])(formattedValue);
    },
    formatUtcToLocalTime: function formatUtcToLocalTime(utcTime) {
      return this.$dayjs.utc(utcTime).local().format('MM/DD/YY HH:mm z');
    },
    formatCurrencyRate: function formatCurrencyRate(value) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatAmount"])(value);
    },
    formatStateCity: function formatStateCity(city, state) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatAddressCityState"])(null, city, state);
    },
    formatAddress: function formatAddress(address, city, state, zipCode) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["formatAddressCityStateZipCode"])(address, city, state, zipCode);
    },
    checkValue: function checkValue(value) {
      if (value == null) {
        return '';
      }

      return value;
    },
    setPlace: function setPlace(place) {
      if (!place) return;

      var _extractAddress = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__["extractAddress"])(place),
          address = _extractAddress.address,
          city = _extractAddress.city,
          state = _extractAddress.state,
          zip_code = _extractAddress.zip_code;

      var latitude = place.geometry.location.lat();
      var longitude = place.geometry.location.lng();
      this.value.address = address;
      this.value.city = city;
      this.value.state = state;
      this.value.zipCode = zip_code;
      this.value.latitude = latitude;
      this.value.longitude = longitude;
      this.$forceUpdate();
      this.validateAddress();
    },
    validateAddress: function validateAddress() {
      var _this = this;

      var keysToValidate = ['city', 'state', 'latitude', 'longitude'];
      var invalidKeys = keysToValidate.filter(function (key) {
        return !_this.value[key];
      });

      if (invalidKeys.length) {
        this.validationErrors.address = invalidKeys.length === keysToValidate.length ? 'Address is required' : 'Please enter a valid address';
      } else {
        this.validationErrors.address = null;
      }
    },
    getEquipmentType: function getEquipmentType(type) {
      if (!type) {
        return '';
      }

      var equipmentType = this.equipmentTypeOptions.find(function (item) {
        return item.value === type;
      });
      return equipmentType ? equipmentType.title : '';
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/register/SingleStepRegistration.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/SingleStepRegistration.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleStepRegistration_vue_vue_type_template_id_a0506d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleStepRegistration.vue?vue&type=template&id=a0506d98& */ "./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=template&id=a0506d98&");
/* harmony import */ var _SingleStepRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleStepRegistration.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleStepRegistration_vue_vue_type_style_index_0_id_a0506d98_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss& */ "./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleStepRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleStepRegistration_vue_vue_type_template_id_a0506d98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleStepRegistration_vue_vue_type_template_id_a0506d98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/register/SingleStepRegistration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleStepRegistration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_style_index_0_id_a0506d98_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=style&index=0&id=a0506d98&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_style_index_0_id_a0506d98_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_style_index_0_id_a0506d98_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_style_index_0_id_a0506d98_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_style_index_0_id_a0506d98_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=template&id=a0506d98&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=template&id=a0506d98& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_template_id_a0506d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleStepRegistration.vue?vue&type=template&id=a0506d98& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/SingleStepRegistration.vue?vue&type=template&id=a0506d98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_template_id_a0506d98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleStepRegistration_vue_vue_type_template_id_a0506d98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=34.js.map