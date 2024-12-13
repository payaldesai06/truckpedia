(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_QuoteDetailsCard_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/QuoteDetailsCard.vue */ "./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue");
/* harmony import */ var _components_submitQuotePopup_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/submitQuotePopup.vue */ "./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue");
/* harmony import */ var _components_CarrierBookNowPopup_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CarrierBookNowPopup.vue */ "./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue");
/* harmony import */ var _mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixins/quoteCommonFunctions */ "./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CarrierQuoteList',
  mixins: [_mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_10__["default"]],
  props: {
    listHeading: {
      type: String,
      default: ''
    },
    activeTab: {
      type: String,
      default: ''
    }
  },
  components: {
    QuoteDetailsCard: _components_QuoteDetailsCard_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    SubmitQuotePopup: _components_submitQuotePopup_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    CarrierBookNowPopup: _components_CarrierBookNowPopup_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    LoadSidebar: function LoadSidebar() {
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! @/views/pages/dispatch/load/LoadSidebar.vue */ "./resources/js/src/views/pages/dispatch/load/LoadSidebar.vue"));
    }
  },
  data: function data() {
    return {
      viewOptions: [{
        id: 1,
        title: 'Details',
        name: 'details',
        isActive: true
      }, {
        id: 2,
        title: 'Loads',
        name: 'loads',
        isActive: true
      }],
      quoteResponses: [],
      expandedRows: [],
      showSubmitQuotePopup: false,
      newQuoteRate: '',
      quoteValidUntil: '',
      numberOfTrucks: null,
      carrierData: null,
      rows: 25,
      totalRecords: 0,
      isSidebarActive: false,
      selectedLoad: {
        loadId: null
      },
      expandedActiveRows: {},
      carrierBookNowPopup: {
        isActive: false,
        data: {}
      }
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    handleRespondRequests: function () {
      var _handleRespondRequests = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(data) {
        var _this = this;

        var isValid, quote, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.showSubmitQuotePopup) {
                  _context.next = 11;
                  break;
                }

                isValid = false;
                _context.next = 4;
                return this.$refs.quotePopup.validateForm();

              case 4:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                this.showSubmitQuotePopup = data.showSubmitQuotePopup;
                this.newQuoteRate = data.newQuoteRate;
                this.quoteValidUntil = data.quoteValidUntil;
                this.numberOfTrucks = data.numberOfTrucks;

              case 11:
                this.$vs.loading();
                quote = this.carrierData.quote;
                payload = {
                  quotes: [{
                    id: quote.id,
                    shipperCompanyId: quote.shipperCompany.id,
                    token: String(quote.token),
                    responseType: !this.showSubmitQuotePopup ? 'bookNow' : 'submitQuote'
                  }]
                };

                if (payload.quotes[0].responseType === 'bookNow') {
                  payload.quotes[0].carrierNumberOfTrucks = data.submittedNumberOfTrucks;
                  payload.quotes[0].bookNow = {
                    rate: Math.max(Number(quote.bookNowRate), Number(this.carrierData.shipperCounterRate))
                  };
                } else if (payload.quotes[0].responseType === 'submitQuote') {
                  payload.quotes[0].carrierNumberOfTrucks = this.numberOfTrucks;
                  payload.quotes[0].submitQuote = {
                    rate: this.newQuoteRate,
                    quoteValidUntil: this.quoteValidUntil
                  };
                }

                this.$store.dispatch('quote/respondRequests', payload).then(function (data) {
                  if (data.result) {
                    _this.$vs.notify({
                      time: 8000,
                      color: 'success',
                      title: 'Success',
                      text: 'Quote updated successfully'
                    });

                    _this.init();

                    _this.showSubmitQuotePopup = false;
                    _this.newQuoteRate = '';
                    _this.quoteValidUntil = '';
                    _this.numberOfTrucks = null;

                    _this.toggleCarrierBookNowPopup();
                  }
                }).catch(function (error) {
                  _this.$vs.notify({
                    time: 8000,
                    color: 'danger',
                    title: 'Error',
                    text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(error)
                  });
                }).finally(function () {
                  _this.$vs.loading.close();
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleRespondRequests(_x) {
        return _handleRespondRequests.apply(this, arguments);
      };
    }(),
    showSubmitQuotePopupFun: function showSubmitQuotePopupFun(data) {
      this.carrierData = data;
      this.showSubmitQuotePopup = true;
    },
    showBookNowConfirmationPopupFun: function showBookNowConfirmationPopupFun(data) {
      this.carrierData = data;
      var rate = Math.max(Number(data.quote.bookNowRate), Number(data.shipperCounterRate));
      this.carrierBookNowPopup = {
        isActive: true,
        data: _objectSpread({}, data, {
          rate: rate
        })
      };
    },
    toggleCarrierBookNowPopup: function toggleCarrierBookNowPopup() {
      this.carrierBookNowPopup = {
        isActive: false,
        data: {}
      };
    },
    shouldShowSubmitQuoteButton: function shouldShowSubmitQuoteButton(data) {
      return data.mutualAgreedRate === null;
    },
    shouldShowBookNowButton: function shouldShowBookNowButton(data) {
      return data.mutualAgreedRate === null && (data.quote.bookNowRate !== null || data.shipperCounterRate !== null);
    },
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                payload = {
                  filters: {
                    status: this.activeTab
                  },
                  pageSize: 25,
                  page: 1
                };
                this.$vs.loading();
                _context2.next = 5;
                return this.getCarrierQuotesList(payload);

              case 5:
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(_context2.t0)
                });

              case 10:
                _context2.prev = 10;
                this.$vs.loading.close();
                return _context2.finish(10);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7, 10, 13]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    getCarrierQuotesList: function () {
      var _getCarrierQuotesList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(_ref) {
        var _ref$pageSize, pageSize, _ref$page, page, _ref$filters, filters, res, _ref2, meta, _ref3, totalItems;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref$pageSize = _ref.pageSize, pageSize = _ref$pageSize === void 0 ? 25 : _ref$pageSize, _ref$page = _ref.page, page = _ref$page === void 0 ? 1 : _ref$page, _ref$filters = _ref.filters, filters = _ref$filters === void 0 ? {
                  status: this.activeTab
                } : _ref$filters;
                _context3.prev = 1;
                _context3.next = 4;
                return this.$store.dispatch('quote/getCarrierQuotesList', {
                  filters: filters,
                  pageSize: pageSize,
                  page: page
                });

              case 4:
                res = _context3.sent;
                // console.log(res);
                this.quoteResponses = res.data.payload.quoteResponses;
                _ref2 = (res.data || {}).payload || {}, meta = _ref2.meta;
                _ref3 = meta || {}, totalItems = _ref3.totalItems;
                this.totalRecords = totalItems || 0;
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(_context3.t0)
                });

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 11]]);
      }));

      return function getCarrierQuotesList(_x2) {
        return _getCarrierQuotesList.apply(this, arguments);
      };
    }(),
    changeTab: function changeTab(name, slotProps) {
      this.expandedActiveRows = _objectSpread({}, this.expandedActiveRows, _defineProperty({}, slotProps.data.id, name));
    },
    editQuote: function editQuote(quoteId) {
      if (quoteId) {
        this.$emit('editQuote', quoteId);
      }
    },
    updateShowSubmitQuotePopup: function updateShowSubmitQuotePopup(value) {
      this.showSubmitQuotePopup = value;
    },
    onPage: function onPage(_ref4) {
      var page = _ref4.page,
          rows = _ref4.rows;
      this.getCarrierQuotesList({
        pageSize: rows,
        page: page + 1,
        filters: {
          status: this.activeTab
        }
      });
    },
    editLoad: function editLoad(loadId) {
      if (loadId) {
        this.selectedLoad.loadId = loadId;
        this.isSidebarActive = true;
      }
    },
    closeLoadSidebar: function closeLoadSidebar() {
      this.isSidebarActive = false;
      this.selectedLoad.loadId = null;
    },
    onRowExpand: function onRowExpand(_ref5) {
      var id = _ref5.data.id;
      this.expandedActiveRows[id] = 'details';
    },
    onRowCollapse: function onRowCollapse(_ref6) {
      var id = _ref6.data.id;
      delete this.expandedActiveRows[id];
    }
  },
  watch: {
    activeTab: {
      handler: function handler(val) {
        this.init();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// TODO: Rename 'CarrierRequest' (including filename) to 'CarrierList', and put into components/.

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CarrierRequest',
  components: {
    CustomerDialog: function CustomerDialog() {
      return Promise.all(/*! import() */[__webpack_require__.e(16), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, /*! @/views/pages/customers/CustomerDialog */ "./resources/js/src/views/pages/customers/CustomerDialog.vue"));
    }
  },
  props: {
    value: {
      type: Object,
      default: function _default() {}
    },
    listHeading: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      carrierDetails: [],
      selectedCarriers: null,
      // carrierBook: '',
      totalRecords: 0,
      filters: {},
      validationErrors: {
        bookNowRate: null
      },
      isSidebarActive: false,
      customerDefaultValues: {
        type: 'carrier'
      }
    };
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getAllCustomers();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function mounted() {
      return _mounted.apply(this, arguments);
    };
  }(),
  methods: {
    redirectToQuotaRequest: function redirectToQuotaRequest() {
      if (!this.selectedCarriers || this.selectedCarriers.length === 0) {
        this.$vs.notify({
          title: 'Error',
          text: 'Please select at least one carrier.',
          color: 'danger'
        });
      } else if (this.validationErrors.bookNowRate) {
        this.$vs.notify({
          title: 'Error',
          text: 'Please enter valid rate.',
          color: 'danger'
        });
      } else {
        // TODO: change event name for this.$emit('showQuotesEmails'.
        this.$emit('processQuotesEmails', this.selectedCarriers);
      }
    },
    backToQuote: function backToQuote() {
      // this.$router.push({ name: 'quote' });
      this.$emit('backToQuotes');
    },
    getAllCustomers: function () {
      var _getAllCustomers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _ref, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.$store.dispatch('customer/list', {
                  filters: {
                    status: ['active'],
                    type: ['carrier']
                  },
                  fieldsToQuery: ['email', 'ccEmails', 'city', 'state', 'primaryContact']
                });

              case 3:
                _ref = _context2.sent;
                payload = _ref.payload;
                this.carrierDetails = payload.customers || [];
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_2__["getApiErrorMsg"])(_context2.t0)
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      return function getAllCustomers() {
        return _getAllCustomers.apply(this, arguments);
      };
    }(),
    validateRate: function validateRate() {
      if (this.value.bookNowRate) {
        if (this.value.bookNowRate < 0) {
          this.validationErrors.bookNowRate = 'Rate must be greater than or equal to 0';
        } else {
          this.validationErrors.bookNowRate = null;
        }
      } else {
        this.validationErrors.bookNowRate = null;
      }
    },
    toggleSidebar: function toggleSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isSidebarActive = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Pickup_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Pickup.vue */ "./resources/js/src/views/pages/quotes/components/Pickup.vue");
/* harmony import */ var _components_LoadBasicInfo_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/LoadBasicInfo.vue */ "./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue");
/* harmony import */ var _components_Delivery_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Delivery.vue */ "./resources/js/src/views/pages/quotes/components/Delivery.vue");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mixins_googleMapMixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/mixins/googleMapMixin */ "./resources/js/src/mixins/googleMapMixin.js");









function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var sourceSymbolKeys = _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* TODO: I need Vikas, Himanshu, Sachin, Hitesh provide me testing proof for:
  1) creating quotes with multiple shippers and receivers, and delete shipper, delte receiver, shift shipper order, shift receiver order.
  2) edit quotes with multiple shippers and receivers, add new shipper, add new receiver, and delete shipper, delte receiver, shift shipper order, shift receiver order.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CreateEditQuote',
  mixins: [_mixins_googleMapMixin__WEBPACK_IMPORTED_MODULE_13__["default"]],
  components: {
    Pickup: _components_Pickup_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    LoadBasicInfo: _components_LoadBasicInfo_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Delivery: _components_Delivery_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_12___default.a
  },
  props: {
    quotesDetails: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {},
  computed: {
    isEdit: function isEdit() {
      return this.quotesDetails && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(this.quotesDetails).length > 0;
    },
    hasShipperAndReceiver: function hasShipperAndReceiver() {
      return this.shipperReceiverList.some(function (s) {
        return s.type == 'shipper';
      }) && this.shipperReceiverList.some(function (s) {
        return s.type == 'receiver';
      });
    }
  },
  data: function data() {
    return {
      shipperReceiverList: [],
      formData: {
        loadType: null,
        equipmentType: null,
        referenceNumber: '',
        distance: null,
        // Required
        urgencyDate: null,
        numberOfTrucks: null,
        // Required
        driverPreference: null,
        bookNowRate: null,
        // Required
        stops: [],
        // Required
        requestQuoteFromMyCarriers: {}
      }
    };
  },
  created: function created() {
    this.handleEditQuote();
  },
  methods: {
    resetDetails: function resetDetails() {
      this.formData = {
        loadType: null,
        equipmentType: null,
        referenceNumber: '',
        distance: null,
        // Required
        urgencyDate: null,
        numberOfTrucks: null,
        // Required
        driverPreference: null,
        bookNowRate: null,
        // Required
        stops: [],
        // Required
        requestQuoteFromMyCarriers: {}
      };
      this.shipperReceiverList = [];
      this.addNewShipper();
      this.addNewReceiver();
    },
    handleEditQuote: function handleEditQuote() {
      if (this.isEdit) {
        this.formData = _objectSpread({}, this.quotesDetails, {
          requestQuoteFromMyCarriers: {}
        });

        if (!this.formData.hasOwnProperty('equipmentType')) {
          this.formData.equipmentType = null;
        }

        this.shipperReceiverList = this.formData.stops.map(function (stop) {
          return _objectSpread({
            feId: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_11__["getUniqueIdV4"])()
          }, stop);
        });
        this.formData.stops = null;
        delete this.formData.stops;
      } else {
        this.addNewShipper();
        this.addNewReceiver();
      }
    },
    addNewShipper: function addNewShipper() {
      var newShipper = {
        feId: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_11__["getUniqueIdV4"])(),
        type: 'shipper',
        name: null,
        address: null,
        city: '',
        state: '',
        zipCode: '',
        latitude: '',
        longitude: '',
        date: null,
        time: null,
        endDate: null,
        endTime: null,
        contactPerson: null,
        contactNumber: null,
        referenceNumber: null,
        note: '',
        container: null,
        temperature: null,
        goodsValue: null,
        description: null,
        weight: null,
        weightUnit: null,
        qty: null,
        qtyUnit: null,
        hazmat: null,
        length: null,
        width: null,
        height: null
      };
      this.shipperReceiverList.push(newShipper);
    },
    addNewReceiver: function addNewReceiver() {
      var receiverList = {
        feId: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_11__["getUniqueIdV4"])(),
        type: 'receiver',
        name: null,
        address: null,
        city: '',
        state: '',
        zipCode: '',
        latitude: '',
        longitude: '',
        date: null,
        time: null,
        endDate: null,
        endTime: null,
        contactPerson: null,
        contactNumber: null,
        referenceNumber: null,
        note: ''
      };
      this.shipperReceiverList.push(receiverList);
    },
    deleteShipperReceiver: function deleteShipperReceiver(index) {
      this.shipperReceiverList.splice(index, 1);
    },
    calculateLoadDistance: function () {
      var _calculateLoadDistance = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(stops) {
        var latLngList, routes, totalDistanceInMeter, distance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                latLngList = stops.filter(function (stop) {
                  return stop.latitude && stop.longitude;
                }).map(function (stop) {
                  return {
                    lat: Number(stop.latitude),
                    lng: Number(stop.longitude)
                  };
                });
                routes = latLngList.map(function (item, index, source) {
                  if (!source[index - 1]) return null;
                  return {
                    origin: source[index - 1],
                    destination: item
                  };
                }).filter(function (item) {
                  return item;
                });
                _context.next = 5;
                return this.getGoogleDistanceBetweenMultipleRoutes(routes);

              case 5:
                totalDistanceInMeter = _context.sent;
                // convert: meter to miles
                distance = (totalDistanceInMeter / 1609.344).toFixed(2);
                return _context.abrupt("return", Number(distance));

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log('error', _context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      return function calculateLoadDistance(_x) {
        return _calculateLoadDistance.apply(this, arguments);
      };
    }(),
    redirectToCarriersDetails: function () {
      var _redirectToCarriersDetails = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2(tab) {
        var _this = this;

        var isValid, payload, isStopsChanged, updatedTab;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Validate form using ref
                isValid = false;
                _context2.next = 3;
                return this.$refs.loadBasicInfo.validateForm();

              case 3:
                isValid = _context2.sent;
                this.shipperReceiverList.forEach(function (stop) {
                  isValid = _this.$refs["".concat(stop.type, "-").concat(stop.feId)][0].validateForm() && isValid;
                });

                if (isValid) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return");

              case 7:
                payload = _objectSpread({}, this.formData, {
                  stops: _toConsumableArray(this.shipperReceiverList.map(function (stop) {
                    var id = stop.id,
                        feId = stop.feId,
                        rest = _objectWithoutProperties(stop, ["id", "feId"]);

                    if (stop.id) {
                      return _objectSpread({
                        id: id
                      }, rest);
                    }

                    return _objectSpread({}, rest);
                  }))
                });

                if (!this.isEdit) {
                  _context2.next = 19;
                  break;
                }

                payload.id = this.quotesDetails.id;
                console.log(this.quotesDetails.stops.length, payload.stops.length); // Only calculate distance if stops lat lng changed

                isStopsChanged = this.quotesDetails.stops.length !== payload.stops.length || payload.stops.some(function (stop, index) {
                  return stop.latitude !== _this.quotesDetails.stops[index].latitude || stop.longitude !== _this.quotesDetails.stops[index].longitude;
                });

                if (!isStopsChanged) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 15;
                return this.calculateLoadDistance(payload.stops);

              case 15:
                payload.distance = _context2.sent;
                console.log('distance: ', payload.distance);

              case 17:
                _context2.next = 23;
                break;

              case 19:
                _context2.next = 21;
                return this.calculateLoadDistance(payload.stops);

              case 21:
                payload.distance = _context2.sent;
                console.log('distance: ', payload.distance);

              case 23:
                // TODO: change event name for this.$emit('showCarriersDetails'.
                updatedTab = tab === 'saveCarrierDetails' ? tab : undefined;
                this.$emit('processCarrierDetails', payload, updatedTab); // this.$emit("closeQuotePopup")
                // this.$router.push({ name: 'QuotesCarrier' }).catch(() => true);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function redirectToCarriersDetails(_x2) {
        return _redirectToCarriersDetails.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony import */ var _CreateEditQuote_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateEditQuote.vue */ "./resources/js/src/views/pages/quotes/CreateEditQuote.vue");
/* harmony import */ var _CarriersDetails_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CarriersDetails.vue */ "./resources/js/src/views/pages/quotes/CarriersDetails.vue");
/* harmony import */ var _SendQuoteEmail_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SendQuoteEmail.vue */ "./resources/js/src/views/pages/quotes/SendQuoteEmail.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CarrierQuoteList_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CarrierQuoteList.vue */ "./resources/js/src/views/pages/quotes/CarrierQuoteList.vue");
/* harmony import */ var _ShipperQuoteList_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShipperQuoteList.vue */ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Index',
  components: {
    CreateEditQuote: _CreateEditQuote_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CarriersDetails: _CarriersDetails_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    SendQuoteEmail: _SendQuoteEmail_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    CarrierQuoteList: _CarrierQuoteList_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    ShipperQuoteList: _ShipperQuoteList_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('auth', ['userRole', 'user', 'isUserBrokerOrShipper', 'companyFeatureAccess']), {
    activeTab: function activeTab() {
      return this.tabs.find(function (tab) {
        return tab.isActive;
      }).componentName;
    },
    brokerModeForSpecificCompany: function brokerModeForSpecificCompany() {
      return _config_constants_js__WEBPACK_IMPORTED_MODULE_12__["default"].showBrokerModeForSpecificCompanyIds.includes(this.user.admin_company_detail_id) || this.companyFeatureAccess.includes('brokerModeForCarrier');
    },
    displayOnCondition: function displayOnCondition() {
      return this.brokerModeForSpecificCompany;
    }
  }),
  data: function data() {
    return {
      // Vikas you mess up this in this past. I hope you don't mess up it again. For carrier with broker feature, I shall see 2 tabs: "Quotes As Carrier" and "Quotes As Broker". Each tab has one list. Not 2 lists on the same page!!!
      tabs: [{
        id: 1,
        title: 'New Quote',
        componentName: 'CreateEditQuote',
        isActive: true
      }],
      quotePopup: false,
      showCarriersDetails: false,
      showQuotesEmails: false,
      quotesDetails: {},
      componentKey: 0,
      selectedCarriers: [],
      activeTabList: 'carrier',
      activeStatusTab: 'active'
    };
  },
  methods: {
    changeTab: function changeTab(activeTab) {
      this.activeStatusTab = activeTab;
    },
    openQuotePopup: function openQuotePopup() {
      this.quotePopup = true; // this.$refs.quoteRefs.resetDetails();

      this.showQuotesEmails = false;
      this.showCarriersDetails = false;
    },
    setShowQuotesEmails: function setShowQuotesEmails(selectedCarriers) {
      this.showQuotesEmails = true;
      this.showCarriersDetails = false;
      this.selectedCarriers = selectedCarriers;
    },
    setShowCarrierDetails: function setShowCarrierDetails(quotesDetails, tab) {
      this.quotesDetails = quotesDetails;

      if (tab === 'saveCarrierDetails') {
        this.submitCreateEditQuote();
      } else {
        this.showCarriersDetails = true;
        this.showQuotesEmails = false;
      }
    },
    submitCreateEditQuote: function submitCreateEditQuote(emailData) {
      var _this = this;

      var payload = _objectSpread({}, this.quotesDetails);

      if (payload.bookNowRate === '') {
        payload.bookNowRate = null;
      }

      if (emailData) {
        payload.requestQuoteFromMyCarriers = {
          email: emailData
        };
      } else {
        delete payload.requestQuoteFromMyCarriers;
      }

      if (payload.id) {
        this.$store.dispatch('quote/updateQuote', payload).then(function () {
          _this.quotePopup = false;

          _this.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Quote updated Successfully'
          });

          _this.componentKey++;
        }).catch(function (error) {
          _this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_13__["getApiErrorMsg"])(error)
          });
        });
      } else {
        this.$store.dispatch('quote/createQuote', payload).then(function () {
          _this.quotePopup = false;

          _this.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Quote created Successfully'
          });

          _this.componentKey++;
        }).catch(function (error) {
          _this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_13__["getApiErrorMsg"])(error)
          });
        });
      }
    },
    editQuote: function () {
      var _editQuote = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(quoteId) {
        var _ref, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.$store.dispatch('quote/getQuote', quoteId);

              case 3:
                _ref = _context.sent;
                payload = _ref.data.payload;

                if (payload) {
                  this.openQuotePopup();
                  this.quotesDetails = payload;
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_13__["getApiErrorMsg"])(_context.t0)
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      return function editQuote(_x) {
        return _editQuote.apply(this, arguments);
      };
    }()
  },
  watch: {
    quotePopup: function quotePopup(val) {
      if (!val) {
        console.log('Popup closed');
        this.quotesDetails = {};
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var _mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixins/quoteCommonFunctions */ "./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ShipperQuoteList',
  mixins: [_mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_7__["default"]],
  components: {
    LoadSidebar: function LoadSidebar() {
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! @/views/pages/dispatch/load/LoadSidebar.vue */ "./resources/js/src/views/pages/dispatch/load/LoadSidebar.vue"));
    }
  },
  props: {
    listHeading: {
      type: String,
      default: ''
    },
    activeTab: {
      type: String,
      default: ''
    }
  },
  computed: {
    totalNumberOfLoads: function totalNumberOfLoads() {
      return function (data) {
        return data.loads.length;
      };
    },
    totalNumberOfQuotes: function totalNumberOfQuotes() {
      return function (data) {
        return data.responses.length;
      };
    },
    minRateReceived: function minRateReceived() {
      return function (data) {
        if (data.responses && data.responses.length > 0) {
          var smallestObject = data.responses.reduce(function (min, current) {
            return current.carrierSubmitQuoteRate < min.carrierSubmitQuoteRate ? current : min;
          }, data.responses[0]);

          if (smallestObject.carrierSubmitQuoteRate) {
            return "$".concat(smallestObject.carrierSubmitQuoteRate);
          }
        }

        return null;
      };
    },
    editLoadData: function editLoadData() {
      if (this.selectedLoad.loadId) {
        return {
          loadId: this.selectedLoad.loadId
        };
      }

      return {};
    }
  },
  data: function data() {
    return {
      viewOptions: [{
        id: 1,
        label: 'Quotes',
        value: 'quotes'
      }, {
        id: 2,
        label: 'Loads',
        value: 'loads'
      }],
      quotes: [],
      expandedRows: [],
      showCounterPopup: false,
      showAcceptPopup: false,
      counterRate: null,
      acceptRate: null,
      carrierData: null,
      isSidebarActive: false,
      sidebarData: {},
      rows: 25,
      totalRecords: 0,
      loadStatusWithLabels: _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].status.loadWithLabels,
      selectedLoad: {
        loadId: null
      },
      validationDict: {
        custom: {
          counterRate: {
            required: 'Counter Rate is required'
          }
        }
      },
      expandedActiveRows: {},
      isCanceled: false
    };
  },
  created: function created() {
    var _this = this;

    this.init();
    this.$validator.localize('en', this.validationDict);
    this.$nextTick(function () {
      var thead = _this.$refs.shipperQuoteList.$el.querySelector('thead');

      thead.style.display = 'none';
    });
  },
  watch: {
    showCounterPopup: {
      handler: function handler(val) {
        if (!val) {
          this.counterRate = null;
          this.$validator.reset();
        }
      }
    },
    activeTab: {
      handler: function handler(val) {
        this.init();
      }
    }
  },
  methods: {
    showCounterButton: function showCounterButton(response) {
      if (response.status == 'quoteReceived' || response.status == 'countered') {
        return true;
      }

      return false;
    },
    showCounterRate: function showCounterRate(response) {
      if (response.status == 'countered') {
        return true;
      }

      return false;
    },
    showAcceptButton: function showAcceptButton(response) {
      if (!Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(response.carrierSubmitQuoteRate) && (response.status == 'quoteReceived' || response.status == 'countered')) {
        return true;
      }

      return false;
    },
    showStatusNotButton: function showStatusNotButton(response) {
      if (['canceled', 'accepted', 'expired'].includes(response.status)) {
        return true;
      }

      return false;
    },
    showMutualAgreedRate: function showMutualAgreedRate(response) {
      return response.mutualAgreedRate;
    },
    cancelQuoteConfirmationPopupFun: function cancelQuoteConfirmationPopupFun(carrier) {
      var _this2 = this;

      var quoteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.isCanceled = true;
      this.carrierData = _objectSpread({}, carrier, {
        quoteId: quoteId
      });
      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        title: 'Warning',
        text: "Are you sure. You want to cancel this quote?",
        acceptText: 'Yes',
        accept: function accept() {
          return _this2.handleCarrierResponse();
        },
        cancel: function cancel() {
          _this2.carrierData = {};
          _this2.isCanceled = false;
        }
      });
    },
    handleCarrierResponse: function () {
      var _handleCarrierResponse = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var _this3 = this;

        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.showCounterPopup) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.$validator.validateAll();

              case 3:
                if (!this.errors.items.length) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                this.$vs.loading();
                payload = {
                  quotes: [{
                    id: this.carrierData.quoteId,
                    responseId: this.carrierData.id,
                    carrierNumberOfTrucks: this.carrierData.carrierNumberOfTrucks
                  }]
                }; // TODO: where is the validator and missing value warning for counter rate?

                if (this.showCounterPopup) {
                  payload.quotes[0].responseType = 'counterRate';
                  payload.quotes[0].counter = {
                    rate: this.counterRate
                  };
                } else if (this.isCanceled) {
                  payload.quotes[0].responseType = 'cancel';
                } else {
                  payload.quotes[0].responseType = 'acceptRate';
                  payload.quotes[0].accept = {
                    rate: this.acceptRate
                  };
                }

                this.$store.dispatch('quote/handleCarrierResponse', payload).then(function (_ref) {
                  var data = _ref.data;

                  if (data.result) {
                    _this3.$vs.notify({
                      time: 8000,
                      color: 'success',
                      title: 'Success',
                      text: 'Quote updated successfully'
                    });

                    _this3.showCounterPopup = false;
                    _this3.showAcceptPopup = false;
                    _this3.isCanceled = false;

                    _this3.init();
                  }
                }).catch(function (error) {
                  _this3.$vs.notify({
                    time: 8000,
                    color: 'danger',
                    title: 'Error',
                    text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(error)
                  });
                }).finally(function () {
                  _this3.$vs.loading.close();
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleCarrierResponse() {
        return _handleCarrierResponse.apply(this, arguments);
      };
    }(),
    shouldShowCounterAndAcceptButton: function shouldShowCounterAndAcceptButton(data) {
      return data.mutualAgreedRate === null && data.carrierSubmitQuoteRate !== null;
    },
    showCounterPopupFun: function showCounterPopupFun(carrier) {
      var quoteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.carrierData = _objectSpread({}, carrier, {
        quoteId: quoteId
      });
      this.showCounterPopup = true;
    },
    showAcceptPopupFun: function showAcceptPopupFun(carrier) {
      var quoteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.carrierData = _objectSpread({}, carrier, {
        quoteId: quoteId
      });
      this.acceptRate = this.carrierData.carrierSubmitQuoteRate;
      this.showAcceptPopup = true;
    },
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.$vs.loading();
                payload = {
                  filters: {
                    status: this.activeTab
                  },
                  pageSize: 25,
                  page: 1
                };
                _context2.next = 5;
                return this.getShipperQuotesList(payload);

              case 5:
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(_context2.t0)
                });

              case 10:
                _context2.prev = 10;
                this.$vs.loading.close();
                return _context2.finish(10);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7, 10, 13]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    getShipperQuotesList: function () {
      var _getShipperQuotesList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(_ref2) {
        var _ref2$pageSize, pageSize, _ref2$page, page, _ref2$filters, filters, res, _ref3, meta, _ref4, totalItems;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref2$pageSize = _ref2.pageSize, pageSize = _ref2$pageSize === void 0 ? 25 : _ref2$pageSize, _ref2$page = _ref2.page, page = _ref2$page === void 0 ? 1 : _ref2$page, _ref2$filters = _ref2.filters, filters = _ref2$filters === void 0 ? {
                  status: this.activeTab
                } : _ref2$filters;
                _context3.prev = 1;
                _context3.next = 4;
                return this.$store.dispatch('quote/getShipperQuotesList', {
                  filters: filters,
                  pageSize: pageSize,
                  page: page
                });

              case 4:
                res = _context3.sent;
                this.quotes = res.data.payload;
                _ref3 = (res.data || {}).payload || {}, meta = _ref3.meta;
                _ref4 = meta || {}, totalItems = _ref4.totalItems;
                this.totalRecords = totalItems || 0; // Calculate Cheapest/2nd Cheapest Rate

                this.quotes.quotes = this.quotes.quotes.map(function (quote) {
                  // If carrier has not yet submitted a rate, then do not show it on
                  // the main table, but still show it in each quote's quotes tab.
                  var sortedResponses = quote.responses.filter(function (r) {
                    return r.status !== 'pending';
                  });
                  sortedResponses.sort(function (a, b) {
                    var aRate = Number(a.mutualAgreedRate) || Number(a.carrierSubmitQuoteRate) || 0;
                    var bRate = Number(b.mutualAgreedRate) || Number(b.carrierSubmitQuoteRate) || 0;
                    return aRate - bRate;
                  });
                  return _objectSpread({}, quote, {
                    sortedResponses: sortedResponses
                  });
                });
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(_context3.t0)
                });

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 12]]);
      }));

      return function getShipperQuotesList(_x) {
        return _getShipperQuotesList.apply(this, arguments);
      };
    }(),
    changeTab: function changeTab(name, slotProps) {
      this.expandedActiveRows = _objectSpread({}, this.expandedActiveRows, _defineProperty({}, slotProps.data.id, name));
    },
    addQuote: function addQuote() {},
    editQuote: function editQuote(quoteId) {
      if (quoteId) {
        this.$emit('editQuote', quoteId);
      }
    },
    showCreateLoadSidebar: function () {
      var _showCreateLoadSidebar = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4(data, quoteId) {
        var _ref5, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.$store.dispatch('quote/getQuote', quoteId);

              case 3:
                _ref5 = _context4.sent;
                payload = _ref5.data.payload;
                this.sidebarData = _objectSpread({}, data, {
                  stops: payload.stops || [],
                  sendRateConAndBolToCarrier: true,
                  quoteId: quoteId
                });
                this.isSidebarActive = true;
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(_context4.t0)
                });

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      return function showCreateLoadSidebar(_x2, _x3) {
        return _showCreateLoadSidebar.apply(this, arguments);
      };
    }(),
    closeLoadSidebar: function closeLoadSidebar(refreshList) {
      this.isSidebarActive = false;
      this.sidebarData = {};
      this.selectedLoad.loadId = null;

      if (refreshList) {
        this.getShipperQuotesList({
          page: 1,
          pageSize: 25,
          filters: {
            status: this.activeTab
          }
        });
      }
    },
    loadStatus: function loadStatus(status) {
      if (status) {
        return this.loadStatusWithLabels.find(function (item) {
          return item.value === status;
        }).label;
      }
    },
    editLoad: function editLoad(loadId) {
      if (loadId) {
        this.selectedLoad.loadId = loadId;
        this.isSidebarActive = true;
      }
    },
    onPage: function onPage(_ref6) {
      var page = _ref6.page,
          rows = _ref6.rows;
      this.getShipperQuotesList({
        pageSize: rows,
        page: page + 1,
        filters: {
          status: this.activeTab
        }
      });
    },
    onRowExpand: function onRowExpand(_ref7) {
      var id = _ref7.data.id;
      this.expandedActiveRows[id] = this.viewOptions[0].value;
    },
    onRowCollapse: function onRowCollapse(_ref8) {
      var id = _ref8.data.id;
      delete this.expandedActiveRows[id];
    },
    toOrdinal: function toOrdinal(number) {
      var suffixes = ['th', 'st', 'nd', 'rd'];
      var relevantDigits = number < 30 ? number % 20 : number % 30;
      var suffix = relevantDigits <= 3 ? suffixes[relevantDigits] : suffixes[0];
      return number + suffix;
    },
    redirectToCarrierDetailsPage: function redirectToCarrierDetailsPage(companyId) {
      if (companyId) {
        window.open("".concat(_config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].truckingDirectoryCarrierDetailUrl, "companyId=").concat(companyId), '_blank');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CarrierBookNowPopup',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    showBookNowPopupInternal: {
      get: function get() {
        return this.isActive;
      },
      set: function set(value) {
        this.$emit('onClose', value);
      }
    }
  },
  data: function data() {
    return {
      validationDict: {
        custom: {
          numberOfTrucks: {
            required: 'Number of Trucks is required',
            numeric: 'Value must be a valid integer'
          }
        }
      },
      numberOfTrucksInternal: null
    };
  },
  created: function created() {
    this.$validator.localize('en', this.validationDict);
    var _this$data = this.data,
        carrierNumberOfTrucks = _this$data.carrierNumberOfTrucks,
        numberOfTrucks = _this$data.quote.numberOfTrucks;
    this.numberOfTrucksInternal = carrierNumberOfTrucks || numberOfTrucks || null;
  },
  methods: {
    formatAmount: _helpers_helper__WEBPACK_IMPORTED_MODULE_2__["formatAmount"],
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.validateForm();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  this.$emit('onSubmit', {
                    submittedNumberOfTrucks: this.numberOfTrucksInternal
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function onSubmit() {
        return _onSubmit.apply(this, arguments);
      };
    }(),
    validateForm: function () {
      var _validateForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$validator.validateAll();

              case 2:
                if (!this.errors.items.length) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", false);

              case 4:
                return _context2.abrupt("return", true);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function validateForm() {
        return _validateForm.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");
/* harmony import */ var _mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/quoteCommonFunctions */ "./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Delivery',
  mixins: [_mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    value: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d'
      },
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true
      },
      // google map autocomplete options
      googleMapAutoCompleteOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].googleMapAutoCompleteOptions,
      validationErrors: {
        address: null
      }
    };
  },
  methods: {
    // Call this method to validate the form from parent component using ref
    validateForm: function validateForm() {
      this.validateAddress();
      return !this.validationErrors.address;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LoadBasicInfo',
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d'
      },
      equipmentTypeOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_6__["default"].planning.equipmentTypes,
      validationDict: {
        custom: {
          numberOfTrucks: {
            required: 'Number of trucks is required',
            numeric: 'The field must be numeric with no decimal',
            max_value: 'Number of trucks must be less than 32767',
            min_value: 'Number of trucks must be greater than 0'
          }
        }
      }
    };
  },
  created: function created() {
    this.$validator.localize('en', this.validationDict);
  },
  methods: {
    setLoadType: function setLoadType(type) {
      if (type && type !== this.value.loadType) {
        this.$emit('input', _objectSpread({}, this.value, {
          loadType: type
        }));
      }
    },
    validateForm: function () {
      var _validateForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$validator.validateAll();

              case 2:
                if (!this.errors.items.length) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                return _context.abrupt("return", true);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function validateForm() {
        return _validateForm.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");
/* harmony import */ var _mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/quoteCommonFunctions */ "./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Pickup',
  mixins: [_mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    value: {
      type: Object,
      default: function _default() {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d'
      },
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true
      },
      // google map autocomplete options
      googleMapAutoCompleteOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].googleMapAutoCompleteOptions,
      weightOptions: [{
        label: 'lbs',
        value: 'lb'
      }, {
        label: 'tons',
        value: 'ton'
      }, {
        label: 'kg',
        value: 'kg'
      }],
      validationErrors: {
        address: null,
        goodsValue: null,
        weight: null,
        date: null
      }
    };
  },
  methods: {
    validateGoodsValue: function validateGoodsValue() {
      /*
      if (this.value.goodsValue == null) {
        this.validationErrors.goodsValue = 'Goods value is required';
      } else
      */
      if (this.value.goodsValue < 0) {
        this.validationErrors.goodsValue = 'Goods value must be greater than or equal to 0';
      } else {
        this.validationErrors.goodsValue = null;
      }
    },
    validateWeight: function validateWeight() {
      /*
      if (this.value.weight == null) {
        this.validationErrors.weight = 'Weight is required';
      } else 
      */
      if (this.value.weight < 0) {
        this.validationErrors.weight = 'Weight must be greater than or equal to 0';
      } else {
        this.validationErrors.weight = null;
      }
    },
    validateDate: function validateDate() {
      if (!this.value.date) {
        this.validationErrors.date = 'Please provide pickup date';
      } else {
        this.validationErrors.date = null;
      }
    },
    // Call this method to validate the form from parent component using ref
    validateForm: function validateForm() {
      this.validateAddress();
      this.validateGoodsValue();
      this.validateWeight();
      this.validateDate();
      return !this.validationErrors.address && !this.validationErrors.goodsValue && !this.validationErrors.weight && !this.validationErrors.date;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/quoteCommonFunctions */ "./resources/js/src/views/pages/quotes/mixins/quoteCommonFunctions.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'QuoteDetailsCard',
  mixins: [_mixins_quoteCommonFunctions__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    quotesDetails: {
      type: Object,
      default: function _default() {}
    },
    isRequestViaLink: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'submitQuotePopup',
  props: {
    showSubmitQuotePopup: Boolean,
    newQuoteRate: String,
    quoteValidUntil: String,
    numberOfTrucks: String
  },
  data: function data() {
    return {
      flatPikrConfig: {
        mode: 'single'
      },
      newQuoteRateInternal: this.newQuoteRate,
      quoteValidUntilInternal: this.quoteValidUntil,
      numberOfTrucksInternal: this.numberOfTrucks,
      validationDict: {
        custom: {
          newQuoteRate: {
            required: 'New Quote Rate is required'
          },
          quoteValidUntil: {
            required: 'Quote Valid Until is required'
          },
          numberOfTrucks: {
            required: 'Number of Trucks is required',
            numeric: 'Value must be a valid integer'
          }
        }
      }
    };
  },
  created: function created() {
    this.$validator.localize('en', this.validationDict);
  },
  computed: {
    showSubmitQuotePopupInternal: {
      get: function get() {
        return this.showSubmitQuotePopup;
      },
      set: function set(value) {
        this.$emit('update:showSubmitQuotePopup', value);
      }
    }
  },
  methods: {
    handleRespondRequests: function handleRespondRequests() {
      this.$emit('submit-request', {
        newQuoteRate: this.newQuoteRateInternal,
        quoteValidUntil: this.quoteValidUntilInternal,
        numberOfTrucks: this.numberOfTrucksInternal,
        showSubmitQuotePopup: this.showSubmitQuotePopupInternal
      });
    },
    validateForm: function () {
      var _validateForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$validator.validateAll();

              case 2:
                if (!this.errors.items.length) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                return _context.abrupt("return", true);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function validateForm() {
        return _validateForm.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=template&id=db198116&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=template&id=db198116& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("DataTable", {
    attrs: {
      value: _vm.quoteResponses,
      expandedRows: _vm.expandedRows,
      responsiveLayout: "scroll",
      lazy: true,
      paginator: true,
      totalRecords: _vm.totalRecords,
      rows: _vm.rows,
      rowsPerPageOptions: [10, 25, 50]
    },
    on: {
      "update:expandedRows": function updateExpandedRows($event) {
        _vm.expandedRows = $event;
      },
      "update:expanded-rows": function updateExpandedRows($event) {
        _vm.expandedRows = $event;
      },
      page: function page($event) {
        return _vm.onPage($event);
      },
      "row-expand": function rowExpand($event) {
        return _vm.onRowExpand($event);
      },
      "row-collapse": function rowCollapse($event) {
        return _vm.onRowCollapse($event);
      }
    },
    scopedSlots: _vm._u([_vm.listHeading ? {
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "flex justify-content-between align-items-center"
        }, [_c("h5", {
          staticClass: "m-0"
        }, [_vm._v(_vm._s(_vm.listHeading))])])];
      },
      proxy: true
    } : null, {
      key: "expansion",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "orders-subtable"
        }, [_c("div", {
          staticClass: "flex items-center justify-between overflow-x-auto"
        }, [_c("div", _vm._l(_vm.viewOptions, function (item) {
          return _c("vs-chip", {
            key: item.id,
            staticClass: "cursor-pointer mx-2 text-sm",
            staticStyle: {
              "min-width": "75px"
            },
            attrs: {
              color: _vm.expandedActiveRows[slotProps.data.id] && _vm.expandedActiveRows[slotProps.data.id] === item.name ? "primary" : ""
            },
            nativeOn: {
              click: function click($event) {
                return _vm.changeTab(item.name, slotProps);
              }
            }
          }, [_vm._v("\n            " + _vm._s(item.title) + "\n          ")]);
        }), 1)]), _vm._v(" "), _c("QuoteDetailsCard", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.expandedActiveRows[slotProps.data.id] && _vm.expandedActiveRows[slotProps.data.id] === "details",
            expression: "\n          expandedActiveRows[slotProps.data.id] &&\n          expandedActiveRows[slotProps.data.id] === 'details'\n        "
          }],
          staticClass: "mt-4",
          attrs: {
            quotesDetails: _objectSpread({}, slotProps.data, slotProps.data.quote)
          }
        }), _vm._v(" "), _c("DataTable", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.expandedActiveRows[slotProps.data.id] && _vm.expandedActiveRows[slotProps.data.id] === "loads",
            expression: "\n          expandedActiveRows[slotProps.data.id] &&\n          expandedActiveRows[slotProps.data.id] === 'loads'\n        "
          }],
          staticClass: "mt-4",
          attrs: {
            value: slotProps.data.loads
          }
        }, [_c("Column", {
          attrs: {
            field: "loadNumber",
            header: "Load Number"
          }
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "loadReference",
            header: "Reference"
          }
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "rate",
            header: "Rate"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref) {
              var rate = _ref.data.rate;
              return [_vm._v("\n            " + _vm._s(_vm.formatCurrencyRate(rate)) + "\n          ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "status",
            header: "Status"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref2) {
              var status = _ref2.data.status;
              return [_vm._v("\n            " + _vm._s(_vm.formatStatus(status)) + "\n          ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "action",
            header: "Action"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref3) {
              var id = _ref3.data.id;
              return [_c("div", {
                staticClass: "flex items-center gap-1"
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
                    return _vm.editLoad(id);
                  }
                }
              })], 1)], 1)];
            }
          }], null, true)
        })], 1)], 1)];
      }
    }], null, true)
  }, [_vm._v(" "), _c("Column", {
    attrs: {
      expander: true,
      headerStyle: {
        width: "3rem"
      }
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "status",
      header: "Status"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var status = _ref4.data.status;
        return [_vm._v("\n      " + _vm._s(_vm.formatStatus(status)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Shipper Name"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref5) {
        var quote = _ref5.data.quote;
        return [_vm._v("\n      " + _vm._s(quote && quote.shipperCompany && quote.shipperCompany.name ? quote.shipperCompany.name : "") + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Equipment Type"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref6) {
        var quote = _ref6.data.quote;
        return [_vm._v("\n      " + _vm._s(quote && _vm.formatStatus(quote.equipmentType)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Origin"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref7) {
        var quote = _ref7.data.quote;
        return [_vm._v("\n      " + _vm._s(quote && quote.stops && quote.stops[0] && _vm.formatStateCity(quote.stops[0].city, quote.stops[0].state)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Destination"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref8) {
        var quote = _ref8.data.quote;
        return [_vm._v("\n      " + _vm._s(quote && quote.stops && quote.stops.length > 0 && quote.stops[quote.stops.length - 1] && _vm.formatStateCity(quote.stops[quote.stops.length - 1].city, quote.stops[quote.stops.length - 1].state)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Miles"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref9) {
        var quote = _ref9.data.quote;
        return [_vm._v("\n      " + _vm._s(quote && _vm.checkValue(quote.distance)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Trucks Needed"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref10) {
        var quote = _ref10.data.quote;
        return [_vm._v("\n      " + _vm._s(quote && _vm.checkValue(quote.numberOfTrucks)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Trucks Available"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref11) {
        var carrierNumberOfTrucks = _ref11.data.carrierNumberOfTrucks;
        return [_vm._v("\n      " + _vm._s(_vm.checkValue(carrierNumberOfTrucks)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Urgency Date"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref12) {
        var quote = _ref12.data.quote;
        return [_vm._v("\n      " + _vm._s(quote && _vm.formatDate(quote.urgencyDate)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Agreed Rate"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref13) {
        var mutualAgreedRate = _ref13.data.mutualAgreedRate;
        return [_vm._v("\n      " + _vm._s(_vm.formatCurrencyRate(mutualAgreedRate)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Book Now Rate"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref14) {
        var quote = _ref14.data.quote;
        return [_vm._v("\n      " + _vm._s(quote && _vm.formatCurrencyRate(quote.bookNowRate)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Counter Rate"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref15) {
        var shipperCounterRate = _ref15.data.shipperCounterRate;
        return [_vm._v("\n      " + _vm._s(_vm.formatCurrencyRate(shipperCounterRate)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Submitted Quote"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref16) {
        var carrierSubmitQuoteRate = _ref16.data.carrierSubmitQuoteRate;
        return [_vm._v("\n      " + _vm._s(_vm.formatCurrencyRate(carrierSubmitQuoteRate)) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Action"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "flex flex-wrap gap-1"
        }, [_vm.shouldShowBookNowButton(slotProps.data) ? _c("vs-button", {
          attrs: {
            color: "primary",
            size: "small"
          },
          on: {
            click: function click($event) {
              return _vm.showBookNowConfirmationPopupFun(slotProps.data);
            }
          }
        }, [_vm._v("\n          Book Now\n        ")]) : _vm._e(), _vm._v(" "), _vm.shouldShowSubmitQuoteButton(slotProps.data) ? _c("vs-button", {
          attrs: {
            color: "success",
            size: "small"
          },
          on: {
            click: function click($event) {
              return _vm.showSubmitQuotePopupFun(slotProps.data);
            }
          }
        }, [_vm._v("\n          Submit Quote\n        ")]) : _vm._e()], 1)];
      }
    }])
  }), _vm._v(" "), _vm._v(" "), _vm.showSubmitQuotePopup ? _c("SubmitQuotePopup", {
    ref: "quotePopup",
    attrs: {
      newQuoteRate: _vm.newQuoteRate,
      quoteValidUntil: _vm.quoteValidUntil,
      numberOfTrucks: _vm.numberOfTrucks,
      showSubmitQuotePopup: _vm.showSubmitQuotePopup
    },
    on: {
      "submit-request": _vm.handleRespondRequests,
      "update:showSubmitQuotePopup": _vm.updateShowSubmitQuotePopup
    }
  }) : _vm._e(), _vm._v(" "), _c("load-sidebar", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isSidebarActive,
      expression: "isSidebarActive"
    }],
    attrs: {
      isSidebarActive: _vm.isSidebarActive,
      data: _vm.selectedLoad
    },
    on: {
      closeSidebar: _vm.closeLoadSidebar,
      refreshCallingUi: _vm.getCarrierQuotesList
    }
  }), _vm._v(" "), _vm.carrierBookNowPopup.isActive ? _c("CarrierBookNowPopup", {
    attrs: {
      isActive: _vm.carrierBookNowPopup.isActive,
      data: _vm.carrierBookNowPopup.data
    },
    on: {
      onSubmit: _vm.handleRespondRequests,
      onClose: _vm.toggleCarrierBookNowPopup
    }
  }) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=template&id=0023bc44&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=template&id=0023bc44&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "CarrierBtn"
  }, [_c("vs-button", {
    on: {
      click: function click($event) {
        return _vm.toggleSidebar(true);
      }
    }
  }, [_vm._v(" Add Carrier ")]), _vm._v(" "), _vm.isSidebarActive ? _c("customer-dialog", {
    attrs: {
      toggleDialogForCustomer: _vm.isSidebarActive,
      defaultValues: _vm.customerDefaultValues
    },
    on: {
      closePopup: _vm.toggleSidebar,
      getCustomerList: _vm.getAllCustomers
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", [_c("h4", {
    staticClass: "font-bold mb-5"
  }, [_vm._v(_vm._s(_vm.listHeading || "My Carriers"))]), _vm._v(" "), _c("DataTable", {
    attrs: {
      value: _vm.carrierDetails,
      responsiveLayout: "scroll",
      rowHover: false,
      filters: _vm.filters,
      scrollable: true,
      selection: _vm.selectedCarriers
    },
    on: {
      "update:selection": function updateSelection($event) {
        _vm.selectedCarriers = $event;
      }
    }
  }, [_c("Column", {
    attrs: {
      header: "",
      selectionMode: "multiple",
      headerStyle: {
        width: "0.5rem"
      }
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "companyName",
      header: "Company"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "primaryContact",
      header: "Contact"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "email",
      header: "Email"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "city",
      header: "Location"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "bookNow my-5"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_vm._v("Book Now Rate?")]), _vm._v(" "), _c("div", {
    staticClass: "input-with-currency"
  }, [_c("div", {
    staticClass: "icon"
  }, [_vm._v("$")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.value.bookNowRate,
      expression: "value.bookNowRate",
      modifiers: {
        number: true
      }
    }],
    staticClass: "price",
    attrs: {
      type: "number",
      inputmode: "numeric"
    },
    domProps: {
      value: _vm.value.bookNowRate
    },
    on: {
      blur: [_vm.validateRate, function ($event) {
        return _vm.$forceUpdate();
      }],
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.value, "bookNowRate", _vm._n($event.target.value));
      }
    }
  })]), _vm._v(" "), _vm.validationErrors.bookNowRate ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n      " + _vm._s(_vm.validationErrors.bookNowRate) + "\n    ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "CarrierBtn flex justify-between"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.backToQuote
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.redirectToQuotaRequest
    }
  }, [_vm._v("Next")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=template&id=6e5f2473&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=template&id=6e5f2473&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "p-8"
  }, [_c("LoadBasicInfo", {
    ref: "loadBasicInfo",
    model: {
      value: _vm.formData,
      callback: function callback($$v) {
        _vm.formData = $$v;
      },
      expression: "formData"
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "flex"
  }, [_c("h4", {
    staticClass: "pickup-label my-auto mr-2"
  }, [_vm._v("Pickup/Delivery")]), _vm._v(" "), _c("section", {
    staticClass: "flex gap-4"
  }, [_c("vs-button", {
    staticClass: "px-3",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.addNewShipper.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Add Pickup\n        ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "px-3",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.addNewReceiver.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Add Delivery\n        ")])], 1)]), _vm._v(" "), _c("draggable", {
    staticClass: "list-group",
    attrs: {
      tag: "ul",
      list: _vm.shipperReceiverList,
      handle: ".handle"
    }
  }, _vm._l(_vm.shipperReceiverList, function (item, index) {
    return _c("li", {
      key: item.feId,
      staticClass: "list-group-item flex flex-col mt-6"
    }, [_c("div", {
      staticClass: "flex items-center"
    }, [_c("vs-icon", {
      staticClass: "cursor-grab handle mt-2px ml--25px",
      attrs: {
        size: "small",
        icon: "drag_indicator"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "flex items-center gap-2"
    }, [_c("label", {
      staticClass: "text-primary ml-1 font-semibold"
    }, [_vm._v("\n              " + _vm._s(item.type === "shipper" ? "Pickup" : "Delivery") + "\n            ")]), _vm._v(" "), _c("vs-button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.shipperReceiverList.length > 1,
        expression: "shipperReceiverList.length > 1"
      }],
      attrs: {
        color: "danger",
        type: "border",
        icon: "delete",
        size: "small"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.deleteShipperReceiver(index);
        }
      }
    })], 1)], 1), _vm._v(" "), item.type === "shipper" ? _c("Pickup", {
      ref: "shipper-".concat(item.feId),
      refInFor: true,
      attrs: {
        index: index
      },
      model: {
        value: _vm.shipperReceiverList[index],
        callback: function callback($$v) {
          _vm.$set(_vm.shipperReceiverList, index, $$v);
        },
        expression: "shipperReceiverList[index]"
      }
    }) : _vm._e(), _vm._v(" "), item.type === "receiver" ? _c("Delivery", {
      ref: "receiver-".concat(item.feId),
      refInFor: true,
      model: {
        value: _vm.shipperReceiverList[index],
        callback: function callback($$v) {
          _vm.$set(_vm.shipperReceiverList, index, $$v);
        },
        expression: "shipperReceiverList[index]"
      }
    }) : _vm._e()], 1);
  }), 0)], 1), _vm._v(" "), _c("vs-divider", {
    staticClass: "my-6"
  }), _vm._v(" "), _c("div", {
    staticClass: "vx-row float-right gap-3"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled",
      disabled: !_vm.hasShipperAndReceiver
    },
    on: {
      click: _vm.redirectToCarriersDetails
    }
  }, [_vm._v("\n      Request from my carriers\n    ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled",
      disabled: !_vm.hasShipperAndReceiver
    },
    on: {
      click: function click($event) {
        return _vm.redirectToCarriersDetails("saveCarrierDetails");
      }
    }
  }, [_vm._v("\n      Save\n    ")])], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=template&id=32cab88f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/Index.vue?vue&type=template&id=32cab88f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex items-center"
  }, [_vm.isUserBrokerOrShipper ? _c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.openQuotePopup
    }
  }, [_vm._v("New")]) : _vm._e(), _vm._v(" "), _c("ul", {
    staticClass: "flex space-x-4 ml-2 mr-4"
  }, [_c("li", {
    staticClass: "font-medium text-md cursor-pointer invisible-border",
    class: {
      active: _vm.activeStatusTab === "active"
    },
    on: {
      click: function click($event) {
        return _vm.changeTab("active");
      }
    }
  }, [_vm._v("\n        Active\n      ")]), _vm._v(" "), !_vm.isUserBrokerOrShipper ? _c("li", {
    staticClass: "font-medium text-md cursor-pointer invisible-border",
    class: {
      active: _vm.activeStatusTab === "acceptedAndCanceled"
    },
    on: {
      click: function click($event) {
        return _vm.changeTab("acceptedAndCanceled");
      }
    }
  }, [_vm._v("\n        Accepted\n      ")]) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "font-medium text-md cursor-pointer invisible-border",
    class: {
      active: _vm.activeStatusTab === "expired"
    },
    on: {
      click: function click($event) {
        return _vm.changeTab("expired");
      }
    }
  }, [_vm._v("\n        Expired\n      ")])])], 1), _vm._v(" "), _c("vs-popup", {
    staticClass: "quotes",
    attrs: {
      title: "",
      active: _vm.quotePopup,
      fullscreen: ""
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.quotePopup = $event;
      }
    }
  }, [_c("div", [_vm.showCarriersDetails ? _c("CarriersDetails", {
    on: {
      backToQuotes: function backToQuotes($event) {
        ;
        _vm.showCarriersDetails = false, _vm.showQuotesEmails = false;
      },
      processQuotesEmails: _vm.setShowQuotesEmails
    },
    model: {
      value: _vm.quotesDetails,
      callback: function callback($$v) {
        _vm.quotesDetails = $$v;
      },
      expression: "quotesDetails"
    }
  }) : _vm._e(), _vm._v(" "), _vm.showQuotesEmails && !_vm.showCarriersDetails ? _c("SendQuoteEmail", {
    attrs: {
      selectedCarriers: _vm.selectedCarriers,
      quotesDetails: _vm.quotesDetails
    },
    on: {
      backToQuotes: function backToQuotes($event) {
        _vm.showCarriersDetails = false;
      },
      submitCreateEditQuote: _vm.submitCreateEditQuote,
      goBack: function goBack($event) {
        _vm.showCarriersDetails = true;
      }
    }
  }) : _vm._e(), _vm._v(" "), !_vm.showCarriersDetails && !_vm.showQuotesEmails && _vm.quotePopup ? _c(_vm.activeTab, {
    ref: "quoteRefs",
    tag: "component",
    attrs: {
      quotesDetails: _vm.quotesDetails
    },
    on: {
      processCarrierDetails: _vm.setShowCarrierDetails
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_vm.isUserBrokerOrShipper ? _c("ShipperQuoteList", {
    key: _vm.componentKey,
    attrs: {
      activeTab: _vm.activeStatusTab
    },
    on: {
      editQuote: _vm.editQuote
    }
  }) : [_vm.activeTabList === "carrier" ? _c("CarrierQuoteList", {
    key: _vm.componentKey,
    attrs: {
      activeTab: _vm.activeStatusTab
    },
    on: {
      editQuote: _vm.editQuote
    }
  }) : _vm._e()]], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=template&id=4cc1b3ac&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=template&id=4cc1b3ac&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("DataTable", {
    ref: "shipperQuoteList",
    attrs: {
      value: _vm.quotes.quotes,
      expandedRows: _vm.expandedRows,
      dataKey: "id",
      responsiveLayout: "scroll",
      lazy: true,
      paginator: true,
      totalRecords: _vm.totalRecords,
      rows: _vm.rows,
      rowsPerPageOptions: [10, 25, 50]
    },
    on: {
      "update:expandedRows": function updateExpandedRows($event) {
        _vm.expandedRows = $event;
      },
      "update:expanded-rows": function updateExpandedRows($event) {
        _vm.expandedRows = $event;
      },
      page: function page($event) {
        return _vm.onPage($event);
      },
      "row-expand": function rowExpand($event) {
        return _vm.onRowExpand($event);
      },
      "row-collapse": function rowCollapse($event) {
        return _vm.onRowCollapse($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "expansion",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "orders-subtable"
        }, [_c("div", {
          staticClass: "flex items-center justify-between overflow-x-auto"
        }, [_c("div", _vm._l(_vm.viewOptions, function (item) {
          return _c("vs-chip", {
            key: item.id,
            staticClass: "cursor-pointer mx-2 text-sm",
            staticStyle: {
              "min-width": "75px"
            },
            attrs: {
              color: _vm.expandedActiveRows[slotProps.data.id] && _vm.expandedActiveRows[slotProps.data.id] === item.value ? "primary" : ""
            },
            nativeOn: {
              click: function click($event) {
                return _vm.changeTab(item.value, slotProps);
              }
            }
          }, [_vm._v("\n              " + _vm._s(item.label) + "\n            ")]);
        }), 1)]), _vm._v(" "), _vm.expandedActiveRows[slotProps.data.id] && _vm.expandedActiveRows[slotProps.data.id] === "loads" ? _c("DataTable", {
          staticClass: "shipperSubList",
          attrs: {
            value: slotProps.data.loads
          }
        }, [_c("Column", {
          attrs: {
            field: "loadNumber",
            header: "Load Number"
          }
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "loadReference",
            header: "Reference"
          }
        }), _vm._v(" "), _c("Column", {
          attrs: {
            header: "Carrier"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref) {
              var carrierAsCustomer = _ref.data.carrierAsCustomer;
              return [(carrierAsCustomer || {}).name ? _c("span", {
                class: [{
                  "cursor-pointer": (carrierAsCustomer || {}).syncedCompanyId
                }],
                on: {
                  click: function click($event) {
                    return _vm.redirectToCarrierDetailsPage(carrierAsCustomer.syncedCompanyId);
                  }
                }
              }, [_vm._v("\n                " + _vm._s(carrierAsCustomer.name) + "\n              ")]) : _vm._e()];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "rate",
            header: "Rate"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref2) {
              var rate = _ref2.data.rate;
              return [_vm._v("\n              " + _vm._s(_vm.formatCurrencyRate(rate)) + "\n            ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "status",
            header: "Status"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref3) {
              var status = _ref3.data.status;
              return [_vm._v("\n              " + _vm._s(_vm.loadStatus(status)) + "\n            ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "action",
            header: "Action"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref4) {
              var id = _ref4.data.id;
              return [_c("div", {
                staticClass: "flex items-center gap-1"
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
                    return _vm.editLoad(id);
                  }
                }
              })], 1)], 1)];
            }
          }], null, true)
        })], 1) : _vm._e(), _vm._v(" "), _vm.expandedActiveRows[slotProps.data.id] && _vm.expandedActiveRows[slotProps.data.id] === "quotes" ? _c("DataTable", {
          attrs: {
            value: slotProps.data.responses
          }
        }, [_c("Column", {
          attrs: {
            field: "carrier",
            header: "Carrier"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref5) {
              var carrierCompany = _ref5.data.carrierCompany;
              return [(carrierCompany || {}).name ? _c("span", {
                class: [{
                  "cursor-pointer": (carrierCompany || {}).id
                }],
                on: {
                  click: function click($event) {
                    return _vm.redirectToCarrierDetailsPage(carrierCompany.id);
                  }
                }
              }, [_vm._v("\n                " + _vm._s(carrierCompany.name) + "\n              ")]) : _vm._e()];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            header: "Accepted Rate"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref6) {
              var mutualAgreedRate = _ref6.data.mutualAgreedRate;
              return [_vm._v("\n              " + _vm._s(_vm.formatCurrencyRate(mutualAgreedRate)) + "\n            ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            header: "Counter Rate"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref7) {
              var shipperCounterRate = _ref7.data.shipperCounterRate;
              return [_vm._v("\n              " + _vm._s(_vm.formatCurrencyRate(shipperCounterRate)) + "\n            ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            header: "Carrier Quote"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref8) {
              var carrierSubmitQuoteRate = _ref8.data.carrierSubmitQuoteRate;
              return [_vm._v("\n              " + _vm._s(_vm.formatCurrencyRate(carrierSubmitQuoteRate)) + "\n            ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "carrierQuoteValidUntil",
            header: "Quote Valid Until"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref9) {
              var carrierQuoteValidUntil = _ref9.data.carrierQuoteValidUntil;
              return [_vm._v("\n              " + _vm._s(_vm.formatDate(carrierQuoteValidUntil)) + "\n            ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "status",
            header: "Status"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref10) {
              var status = _ref10.data.status;
              return [_vm._v("\n              " + _vm._s(_vm.formatStatus(status)) + "\n            ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "trucks",
            header: "Trucks Available"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref11) {
              var carrierNumberOfTrucks = _ref11.data.carrierNumberOfTrucks;
              return [_vm._v("\n              " + _vm._s(_vm.checkValue(carrierNumberOfTrucks)) + "\n            ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "loads",
            header: "Loads"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref12) {
              var numberOfLoads = _ref12.data.numberOfLoads;
              return [_vm._v("\n              " + _vm._s(_vm.checkValue(numberOfLoads)) + "\n            ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "action",
            header: "Action"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref13) {
              var data = _ref13.data;
              return [_vm.shouldShowCounterAndAcceptButton(data) ? _c("div", [_c("vs-button", {
                attrs: {
                  color: "primary",
                  size: "small"
                },
                on: {
                  click: function click($event) {
                    return _vm.showCounterPopupFun(data, slotProps.data.id);
                  }
                }
              }, [_vm._v("\n                  Counter\n                ")]), _vm._v(" "), _c("vs-button", {
                attrs: {
                  color: "success",
                  size: "small"
                },
                on: {
                  click: function click($event) {
                    return _vm.showAcceptPopupFun(data, slotProps.data.id);
                  }
                }
              }, [_vm._v("\n                  Accept\n                ")])], 1) : _vm._e(), _vm._v(" "), data.mutualAgreedRate && data.status != "canceled" ? _c("vs-button", {
                attrs: {
                  color: "primary",
                  size: "small"
                },
                on: {
                  click: function click($event) {
                    return _vm.showCreateLoadSidebar(data, slotProps.data.id);
                  }
                }
              }, [_vm._v("\n                Issue Load\n              ")]) : _vm._e(), _vm._v(" "), data.status == "accepted" ? _c("vs-button", {
                attrs: {
                  color: "warning",
                  size: "small"
                },
                on: {
                  click: function click($event) {
                    return _vm.cancelQuoteConfirmationPopupFun(data, slotProps.data.id);
                  }
                }
              }, [_vm._v("\n                Cancel\n              ")]) : _vm._e()];
            }
          }], null, true)
        })], 1) : _vm._e()], 1)];
      }
    }])
  }, [_c("Column", {
    attrs: {
      expander: true
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      className: "pr-0"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref14) {
        var data = _ref14.data;
        return [_c("div", {
          staticClass: "lanesWrap",
          on: {
            click: function click($event) {
              return _vm.editQuote(data.id);
            }
          }
        }, [_c("div", {
          staticClass: "headingNumber"
        }, [_vm._v(_vm._s(data.referenceNumber))]), _vm._v(" "), _c("div", {
          staticClass: "flex mt-2"
        }, [_c("div", {
          staticClass: "inline-grid"
        }, [_c("div", {
          staticClass: "distance-wrpper"
        }, [_c("div", {
          staticClass: "dots dotGray"
        }), _vm._v(" "), _c("div", {
          staticStyle: {
            border: "1px solid #d9d9d9",
            height: "100%"
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "dots dotBlue"
        })])]), _vm._v(" "), _c("div", {
          staticClass: "w-100 flex"
        }, [_c("div", {
          staticClass: "w-1/2 flex flex-col justify-between"
        }, [_c("h6", {
          staticClass: "mt-1"
        }, [_vm._v("\n                  " + _vm._s(data.stops && data.stops[0] && _vm.formatStateCity(data.stops[0].city, data.stops[0].state)) + "\n                ")]), _vm._v(" "), _c("p", {
          staticClass: "my-3"
        }, [_vm._v(_vm._s(_vm.checkValue(data.distance)) + " mi")]), _vm._v(" "), _c("h6", [_vm._v("\n                  " + _vm._s(data.stops && data.stops.length > 0 && data.stops[data.stops.length - 1] && _vm.formatStateCity(data.stops[data.stops.length - 1].city, data.stops[data.stops.length - 1].state)) + "\n                ")])]), _vm._v(" "), _c("div", {
          staticClass: "w-1/2"
        }, [_c("h6", [_vm._v("Trucks")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(data.numberOfTrucks))]), _vm._v(" "), _c("h6", {
          staticClass: "mt-3"
        }, [_vm._v(_vm._s(_vm.loadTypes[data.loadType] || ""))]), _vm._v(" "), _c("p", {
          staticClass: "mt-1"
        }, [_vm._v("\n                  " + _vm._s(_vm.getEquipmentType(data.equipmentType)) + "\n                ")])])])])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      className: "px-0 w-full"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref15) {
        var data = _ref15.data;
        return [data.sortedResponses.length ? [_c("div", {
          staticClass: "flex gap-2"
        }, _vm._l(data.sortedResponses, function (item) {
          return _c("div", {
            key: item.id,
            staticClass: "mr-4 w-250"
          }, [_c("div", {
            class: ["cheapestHeader", {
              "cursor-pointer": item.carrierCompany.id
            }],
            on: {
              click: function click($event) {
                return _vm.redirectToCarrierDetailsPage(item.carrierCompany.id);
              }
            }
          }, [_vm._v("\n                " + _vm._s(item.carrierCompany.name ? item.carrierCompany.name : "") + "\n              ")]), _vm._v(" "), _c("div", {
            staticClass: "flex justify-center"
          }, [_c("div", {
            staticClass: "text-center mr-5"
          }, [_vm.showMutualAgreedRate(item) ? _c("div", {
            staticClass: "text-center"
          }, [_c("p", [_vm._v("AGREED RATE")]), _vm._v(" "), _c("p", {
            staticClass: "fw-500"
          }, [_vm._v("\n                      " + _vm._s(_vm.formatCurrencyRate(item.mutualAgreedRate)) + "\n                    ")])]) : _c("div", {
            staticClass: "text-center"
          }, [_c("p", [_vm._v("CARRIER'S OFFER")]), _vm._v(" "), _c("p", {
            staticClass: "fw-500"
          }, [_vm._v("\n                      " + _vm._s(_vm.formatCurrencyRate(item.carrierSubmitQuoteRate)) + "\n                    ")])]), _vm._v(" "), _c("div", [_vm.showCounterButton(item) ? _c("span", {
            staticClass: "shipperLinks cursor-pointer",
            on: {
              click: function click($event) {
                return _vm.showCounterPopupFun(item, data.id);
              }
            }
          }, [_vm._v("\n                      Counter\n                    ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
            staticClass: "text-center"
          }, [!_vm.showMutualAgreedRate(item) ? _c("div", [_c("p", [_vm._v("VALID UNTIL")]), _vm._v(" "), _c("p", {
            staticClass: "fw-500"
          }, [_vm._v("\n                      " + _vm._s(_vm.formatDate(item.carrierQuoteValidUntil) || "N/A") + "\n                    ")])]) : _vm._e(), _vm._v(" "), _c("div", [_vm.showStatusNotButton(item) ? _c("span", [_c("p", {
            staticClass: "fw-500"
          }, [_vm._v("\n                        " + _vm._s(_vm.formatStatus(item.status) || "") + "\n                      ")])]) : _vm.showAcceptButton(item) ? _c("span", {
            staticClass: "shipperLinks cursor-pointer",
            on: {
              click: function click($event) {
                return _vm.showAcceptPopupFun(item, data.id);
              }
            }
          }, [_vm._v("\n                      Accept\n                    ")]) : _vm._e()])])]), _vm._v(" "), _c("div", {
            staticClass: "text-center"
          }, [_vm.showCounterRate(item) ? _c("div", {
            staticClass: "orangeTxt"
          }, [_c("p", [_vm._v("\n                    COUNTERED RATE:\n                    " + _vm._s(_vm.formatCurrencyRate(item.shipperCounterRate)) + "\n                  ")])]) : _vm._e()])]);
        }), 0)] : _vm._e()];
      }
    }])
  })], 1), _vm._v(" "), _c("vs-popup", {
    staticClass: "popupWidth",
    attrs: {
      title: "",
      active: _vm.showCounterPopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.showCounterPopup = $event;
      }
    }
  }, [_c("div", {
    staticClass: "flex flex-col gap-4 items-center"
  }, [_c("h2", {
    staticClass: "font-bold"
  }, [_vm._v("Counter Rate")]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center counterRateWrapper"
  }, [_c("div", {
    staticClass: "mr-2 mt-2"
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
      d: "M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.5 14V16H11V18H13V16H14C14.663 16 15.2989 15.7366 15.7678 15.2678C16.2366 14.7989 16.5 14.163 16.5 13.5C16.5 12.837 16.2366 12.2011 15.7678 11.7322C15.2989 11.2634 14.663 11 14 11H10C9.86739 11 9.74021 10.9473 9.64645 10.8536C9.55268 10.7598 9.5 10.6326 9.5 10.5C9.5 10.3674 9.55268 10.2402 9.64645 10.1464C9.74021 10.0527 9.86739 10 10 10H15.5V8H13V6H11V8H10C9.33696 8 8.70107 8.26339 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13H14C14.1326 13 14.2598 13.0527 14.3536 13.1464C14.4473 13.2402 14.5 13.3674 14.5 13.5C14.5 13.6326 14.4473 13.7598 14.3536 13.8536C14.2598 13.9473 14.1326 14 14 14H8.5Z",
      fill: "#09121F"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.counterRate,
      expression: "counterRate"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "counterRateInput",
    attrs: {
      placeholder: "Enter new counter rate",
      inputmode: "numeric",
      pattern: "[0-9]*",
      name: "counterRate"
    },
    domProps: {
      value: _vm.counterRate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.counterRate = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("counterRate")) + "\n      ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "w-full",
    staticStyle: {
      "max-width": "250px"
    },
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.handleCarrierResponse
    }
  }, [_vm._v("\n        Submit\n      ")])], 1)]), _vm._v(" "), _c("vs-popup", {
    staticClass: "popupWidth",
    attrs: {
      title: "",
      active: _vm.showAcceptPopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.showAcceptPopup = $event;
      }
    }
  }, [_c("div", {
    staticClass: "flex flex-col gap-4 items-center"
  }, [_c("h2", {
    staticClass: "font-bold"
  }, [_vm._v("Accept rate?")]), _vm._v(" "), _c("h3", {
    staticClass: "acceptCounterRate"
  }, [_vm._v("\n        " + _vm._s(_vm.formatCurrencyRate(_vm.acceptRate)) + "\n      ")]), _vm._v(" "), _c("div", [_c("vs-button", {
    staticClass: "mr-3",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.showAcceptPopup = false;
      }
    }
  }, [_vm._v("\n          No\n        ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.handleCarrierResponse
    }
  }, [_vm._v("\n          Yes\n        ")])], 1)])]), _vm._v(" "), _c("load-sidebar", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isSidebarActive,
      expression: "isSidebarActive"
    }],
    attrs: {
      isSidebarActive: _vm.isSidebarActive,
      addLoadData: _vm.sidebarData,
      data: _vm.editLoadData
    },
    on: {
      closeSidebar: _vm.closeLoadSidebar,
      refreshCallingUi: _vm.getShipperQuotesList
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=template&id=438fc4f1&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=template&id=438fc4f1& ***!
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

  return _c("vs-popup", {
    attrs: {
      title: "Confirm",
      active: _vm.showBookNowPopupInternal,
      "background-color": "rgba(0,0,0,.2)"
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.showBookNowPopupInternal = $event;
      }
    }
  }, [_c("div", [_c("span", [_vm._v("Book now at " + _vm._s(_vm.formatAmount((_vm.data || {}).rate) || "") + "?")]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "vs-input--label pl-0"
  }, [_vm._v("\n        Number of trucks\n        "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
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
      value: _vm.numberOfTrucksInternal,
      callback: function callback($$v) {
        _vm.numberOfTrucksInternal = $$v;
      },
      expression: "numberOfTrucksInternal"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("numberOfTrucks")) + "\n      ")])], 1)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "text-right"
  }, [_c("vs-button", {
    staticClass: "mt-5",
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.onSubmit
    }
  }, [_vm._v("\n        Submit\n      ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-5",
    attrs: {
      color: "danger",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.showBookNowPopupInternal = false;
      }
    }
  }, [_vm._v("\n        Cancel\n      ")])], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=template&id=0382f6ec&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=template&id=0382f6ec&scoped=true& ***!
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

  return _c("div", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/4"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Delivery Address "), _c("field-required-sign")], 1), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text",
    staticStyle: {
      "background-color": "#3975eb1a"
    }
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M15.3033 14.4703L10 19.7736L4.6967 14.4703C1.76777 11.5413 1.76777 6.79263 4.6967 3.86369C7.62563 0.934759 12.3743 0.934759 15.3033 3.86369C18.2323 6.79263 18.2323 11.5413 15.3033 14.4703ZM10 10.8337C10.9205 10.8337 11.6667 10.0875 11.6667 9.16699C11.6667 8.24652 10.9205 7.50033 10 7.50033C9.0795 7.50033 8.33333 8.24652 8.33333 9.16699C8.33333 10.0875 9.0795 10.8337 10 10.8337Z",
      fill: "#3975EB"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "vs-con-input"
  }, [_c("gmap-autocomplete", {
    staticClass: "vs-inputx vs-input--input",
    attrs: {
      value: _vm.formattedAddress,
      placeholder: "",
      options: _vm.googleMapAutoCompleteOptions,
      "select-first-on-enter": true
    },
    on: {
      place_changed: function place_changed($event) {
        return _vm.setPlace($event);
      }
    }
  })], 1)], 2), _vm._v(" "), _vm.validationErrors.address ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.validationErrors.address) + "\n      ")]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/8"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configDateFlatPickr,
      placeholder: "Select a date",
      label: "Date"
    },
    model: {
      value: _vm.value.date,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "date", $$v);
      },
      expression: "value.date"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
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
  })])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/8"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n          Time\n          "), _c("vs-button", {
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
        _vm.value.time = "";
      }
    }
  }, [_vm._v("\n            Clear\n          ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configTimeFlatPickr
    },
    model: {
      value: _vm.value.time,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "time", $$v);
      },
      expression: "value.time"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/8"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n          End Date\n          "), _c("vs-button", {
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
        _vm.value.endDate = "";
      }
    }
  }, [_vm._v("\n            Clear\n          ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configDateFlatPickr,
      placeholder: "Select a date",
      label: "Date"
    },
    model: {
      value: _vm.value.endDate,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "endDate", $$v);
      },
      expression: "value.endDate"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
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
  })])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/8"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n          End Time\n          "), _c("vs-button", {
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
        _vm.value.time = "";
      }
    }
  }, [_vm._v("\n            Clear\n          ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configTimeFlatPickr
    },
    model: {
      value: _vm.value.endTime,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "endTime", $$v);
      },
      expression: "value.endTime"
    }
  })], 1)])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Date")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=template&id=370bca10&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=template&id=370bca10&scoped=true& ***!
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
    staticClass: "vx-row top-nav"
  }, [_c("div", {
    staticClass: "vx-col flex w-full"
  }, [_c("div", {
    class: ["top-nav-item", {
      "btn--active": _vm.value.loadType === "drayage"
    }],
    on: {
      click: function click($event) {
        return _vm.setLoadType("drayage");
      }
    }
  }, [_c("p", [_vm._v("Drayage")])]), _vm._v(" "), _c("div", {
    class: ["top-nav-item", {
      "btn--active": _vm.value.loadType === "ftl"
    }],
    on: {
      click: function click($event) {
        return _vm.setLoadType("ftl");
      }
    }
  }, [_c("p", [_vm._v("FTL")])]), _vm._v(" "), _c("div", {
    class: ["top-nav-item", {
      "btn--active": _vm.value.loadType === "ltl"
    }],
    on: {
      click: function click($event) {
        return _vm.setLoadType("ltl");
      }
    }
  }, [_c("p", [_vm._v("LTL")])])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row my-8"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full flex gap-10"
  }, [_c("div", {}, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("PO/Reference No. (Optional)")]), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Set Reference No"
    },
    model: {
      value: _vm.value.referenceNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "referenceNumber", $$v);
      },
      expression: "value.referenceNumber"
    }
  })], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Urgency")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text",
    staticStyle: {
      "background-color": "#3975eb1a"
    }
  }, [_c("span", [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M4.00098 20V14C4.00098 9.58172 7.5827 6 12.001 6C16.4193 6 20.001 9.58172 20.001 14V20H21.001V22H3.00098V20H4.00098ZM6.00098 14H8.00098C8.00098 11.7909 9.79184 10 12.001 10V8C8.68727 8 6.00098 10.6863 6.00098 14ZM11.001 2H13.001V5H11.001V2ZM19.7792 4.80761L21.1934 6.22183L19.0721 8.34315L17.6578 6.92893L19.7792 4.80761ZM2.80859 6.22183L4.22281 4.80761L6.34413 6.92893L4.92991 8.34315L2.80859 6.22183Z",
      fill: "#3975EB"
    }
  })])])])]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configDateFlatPickr,
      placeholder: "Select a date",
      label: "Date"
    },
    model: {
      value: _vm.value.urgencyDate,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "urgencyDate", $$v);
      },
      expression: "value.urgencyDate"
    }
  })], 2)], 1)])])])]), _vm._v(" "), _c("div", {
    ref: "trucks",
    staticClass: "vx-row my-8"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("div", {
    staticClass: "vx-row items-center"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              Number of Trucks\n              "), _c("field-required-sign")], 1), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text",
    staticStyle: {
      "background-color": "#3975eb1a"
    }
  }, [_c("span", [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z",
      fill: "#3975EB"
    }
  })])])])]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|numeric|min_value:1|max_value:32767",
      expression: "'required|numeric|min_value:1|max_value:32767'"
    }],
    attrs: {
      type: "number",
      min: "1",
      max: "32767",
      inputmode: "numeric",
      pattern: "[0-9]*",
      "data-vv-validate-on": "blur",
      name: "numberOfTrucks"
    },
    model: {
      value: _vm.value.numberOfTrucks,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "numberOfTrucks", _vm._n($$v));
      },
      expression: "value.numberOfTrucks"
    }
  })], 2)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Driver Preference")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-3 items-center my-3"
  }, [_c("vs-radio", {
    attrs: {
      name: "driver-preference",
      "vs-value": null
    },
    model: {
      value: _vm.value.driverPreference,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "driverPreference", $$v);
      },
      expression: "value.driverPreference"
    }
  }, [_vm._v("\n                N/A\n              ")]), _vm._v(" "), _c("vs-radio", {
    attrs: {
      name: "driver-preference",
      "vs-value": "solo"
    },
    model: {
      value: _vm.value.driverPreference,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "driverPreference", $$v);
      },
      expression: "value.driverPreference"
    }
  }, [_vm._v("\n                Solo\n              ")]), _vm._v(" "), _c("vs-radio", {
    attrs: {
      name: "driver-preference",
      "vs-value": "team"
    },
    model: {
      value: _vm.value.driverPreference,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "driverPreference", $$v);
      },
      expression: "value.driverPreference"
    }
  }, [_vm._v("\n                Team\n              ")])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Equipment Type")]), _vm._v(" "), _c("v-select", {
    staticClass: "equipment-dropdown",
    attrs: {
      options: _vm.equipmentTypeOptions,
      placeholder: "Equipment Type",
      label: "title",
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.equipmentType,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "equipmentType", $$v);
      },
      expression: "value.equipmentType"
    }
  })], 1)])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("numberOfTrucks")) + "\n      ")])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=template&id=03a3d692&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=template&id=03a3d692&scoped=true& ***!
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

  return _c("div", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/4"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n            Pick Up Address\n            "), _c("field-required-sign")], 1), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text",
    staticStyle: {
      "background-color": "#3975eb1a"
    }
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M15.3033 14.4703L10 19.7736L4.6967 14.4703C1.76777 11.5413 1.76777 6.79263 4.6967 3.86369C7.62563 0.934759 12.3743 0.934759 15.3033 3.86369C18.2323 6.79263 18.2323 11.5413 15.3033 14.4703ZM10 10.8337C10.9205 10.8337 11.6667 10.0875 11.6667 9.16699C11.6667 8.24652 10.9205 7.50033 10 7.50033C9.0795 7.50033 8.33333 8.24652 8.33333 9.16699C8.33333 10.0875 9.0795 10.8337 10 10.8337Z",
      fill: "#3975EB"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "vs-con-input"
  }, [_c("gmap-autocomplete", {
    staticClass: "vs-inputx vs-input--input",
    attrs: {
      placeholder: "",
      value: _vm.formattedAddress,
      options: _vm.googleMapAutoCompleteOptions,
      "select-first-on-enter": true
    },
    on: {
      place_changed: function place_changed($event) {
        return _vm.setPlace($event);
      }
    }
  })], 1)], 2), _vm._v(" "), _vm.validationErrors.address ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n            " + _vm._s(_vm.validationErrors.address) + "\n          ")]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/8"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Date"), _c("field-required-sign")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configDateFlatPickr,
      placeholder: "Select a date",
      label: "Date"
    },
    model: {
      value: _vm.value.date,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "date", $$v);
      },
      expression: "value.date"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
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
  })])])], 1), _vm._v(" "), _vm.validationErrors.date ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n            " + _vm._s(_vm.validationErrors.date) + "\n          ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/8"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              Time\n              "), _c("vs-button", {
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
        _vm.value.time = "";
      }
    }
  }, [_vm._v("\n                Clear\n              ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configTimeFlatPickr
    },
    model: {
      value: _vm.value.time,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "time", $$v);
      },
      expression: "value.time"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/8"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              End Date\n              "), _c("vs-button", {
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
        _vm.value.endDate = "";
      }
    }
  }, [_vm._v("\n                Clear\n              ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configDateFlatPickr,
      placeholder: "Select a date",
      label: "Date"
    },
    model: {
      value: _vm.value.endDate,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "endDate", $$v);
      },
      expression: "value.endDate"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
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
  })])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/8"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              End Time\n              "), _c("vs-button", {
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
        _vm.value.endTime = "";
      }
    }
  }, [_vm._v("\n                Clear\n              ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configTimeFlatPickr
    },
    model: {
      value: _vm.value.endTime,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "endTime", $$v);
      },
      expression: "value.endTime"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-5"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Notes")]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    model: {
      value: _vm.value.note,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "note", $$v);
      },
      expression: "value.note"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full flex gap-8"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Goods Value")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text",
    staticStyle: {
      "background-color": "#3975eb1a"
    }
  }, [_c("span", [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M12.0049 22.0029C6.48204 22.0029 2.00488 17.5258 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029ZM8.50488 14.0029V16.0029H11.0049V18.0029H13.0049V16.0029H14.0049C15.3856 16.0029 16.5049 14.8836 16.5049 13.5029C16.5049 12.1222 15.3856 11.0029 14.0049 11.0029H10.0049C9.72874 11.0029 9.50488 10.7791 9.50488 10.5029C9.50488 10.2268 9.72874 10.0029 10.0049 10.0029H15.5049V8.00293H13.0049V6.00293H11.0049V8.00293H10.0049C8.62417 8.00293 7.50488 9.12222 7.50488 10.5029C7.50488 11.8836 8.62417 13.0029 10.0049 13.0029H14.0049C14.281 13.0029 14.5049 13.2268 14.5049 13.5029C14.5049 13.7791 14.281 14.0029 14.0049 14.0029H8.50488Z",
      fill: "#3975EB"
    }
  })])])])]), _vm._v(" "), _c("vs-input", {
    attrs: {
      type: "number",
      inputmode: "numeric",
      pattern: "[0-9]*"
    },
    on: {
      blur: _vm.validateGoodsValue
    },
    model: {
      value: _vm.value.goodsValue,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "goodsValue", _vm._n($$v));
      },
      expression: "value.goodsValue"
    }
  })], 2), _vm._v(" "), _vm.validationErrors.goodsValue ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n              " + _vm._s(_vm.validationErrors.goodsValue) + "\n            ")]) : _vm._e()], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Total Shipment Weight")]), _vm._v(" "), _c("vx-input-group", [_c("vs-input", {
    attrs: {
      type: "number",
      inputmode: "numeric",
      pattern: "[0-9]*"
    },
    on: {
      blur: _vm.validateWeight
    },
    model: {
      value: _vm.value.weight,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "weight", _vm._n($$v));
      },
      expression: "value.weight"
    }
  })], 1), _vm._v(" "), _vm.validationErrors.weight ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n              " + _vm._s(_vm.validationErrors.weight) + "\n            ")]) : _vm._e()], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Weight Unit")]), _vm._v(" "), _c("vx-input-group", [_c("v-select", {
    staticStyle: {
      "min-width": "120px"
    },
    attrs: {
      options: _vm.weightOptions,
      label: "label",
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: true,
      dir: _vm.$vs.rtl ? "rtl" : "ltr"
    },
    model: {
      value: _vm.value.weightUnit,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "weightUnit", $$v);
      },
      expression: "value.weightUnit"
    }
  })], 1)], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Freight Details")]), _vm._v(" "), _c("vs-input", {
    attrs: {
      placeholder: "Type your commodities"
    },
    model: {
      value: _vm.value.description,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "description", $$v);
      },
      expression: "value.description"
    }
  })], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Hazardous Goods")]), _vm._v(" "), _c("div", {
    staticClass: "my-3"
  }, [_c("vs-radio", {
    attrs: {
      "vs-name": "hazardous-goods-".concat(_vm.index),
      "vs-value": "no"
    },
    model: {
      value: _vm.value.hazmat,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "hazmat", $$v);
      },
      expression: "value.hazmat"
    }
  }, [_vm._v("\n                No\n              ")]), _vm._v(" "), _c("vs-radio", {
    attrs: {
      "vs-name": "hazardous-goods-".concat(_vm.index),
      "vs-value": "yes"
    },
    model: {
      value: _vm.value.hazmat,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "hazmat", $$v);
      },
      expression: "value.hazmat"
    }
  }, [_vm._v("\n                Yes\n              ")])], 1)])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=template&id=49af3dec&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=template&id=49af3dec& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Shipper Name:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v(_vm._s(_vm.quotesDetails && _vm.checkValue(_vm.quotesDetails.shipperCompany.name)))])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Equipment Type:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v(_vm._s(_vm.formatStatus(_vm.quotesDetails.equipmentType)))])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Origin:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v("\n          " + _vm._s(_vm.quotesDetails && _vm.quotesDetails.stops && _vm.quotesDetails.stops[0] && _vm.formatStateCity(_vm.quotesDetails.stops[0].city, _vm.quotesDetails.stops[0].state)))])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Destination:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v("\n          " + _vm._s(_vm.quotesDetails && _vm.quotesDetails.stops && _vm.quotesDetails.stops.length > 0 && _vm.quotesDetails.stops[_vm.quotesDetails.stops.length - 1] && _vm.formatStateCity(_vm.quotesDetails.stops[_vm.quotesDetails.stops.length - 1].city, _vm.quotesDetails.stops[_vm.quotesDetails.stops.length - 1].state)))])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Miles:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v("\n          " + _vm._s(_vm.checkValue(_vm.quotesDetails.distance)) + "\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Rate Accepted:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v("\n          " + _vm._s(_vm.formatCurrencyRate(_vm.quotesDetails.mutualAgreedRate)) + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Trucks Needed:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v(_vm._s(_vm.checkValue(_vm.quotesDetails.numberOfTrucks)))])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Available Trucks:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v(_vm._s(_vm.checkValue(_vm.quotesDetails.carrierNumberOfTrucks)))])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Urgency Date:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.quotesDetails.urgencyDate)))])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Book Now Rate:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v("\n          " + _vm._s(_vm.formatCurrencyRate(_vm.quotesDetails.bookNowRate)) + "\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Submitted Quote:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v("\n          " + _vm._s(_vm.quotesDetails.carrierSubmitQuoteRate && _vm.formatCurrencyRate(_vm.parseFloatWithTrims(_vm.quotesDetails.carrierSubmitQuoteRate))) + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Quote Valid Until:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.quotesDetails.carrierQuoteValidUntil)))])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Quote Submitted:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v(_vm._s(_vm.quotesDetails.carrierSubmitQuoteRateSubmitUtcTime && _vm.formatUtcToLocalTime(_vm.quotesDetails.carrierSubmitQuoteRateSubmitUtcTime)))])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Counter Rate:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v("\n          " + _vm._s(_vm.formatCurrencyRate(_vm.quotesDetails.shipperCounterRate)) + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 mt-4"
  }, [_c("span", {
    staticClass: "p-component w-40"
  }, [_vm._v("Counter Received:")]), _vm._v(" "), _c("span", {
    staticClass: "p-component"
  }, [_vm._v(_vm._s(_vm.quotesDetails.shipperCounterRateSubmitUtcTime && _vm.formatUtcToLocalTime(_vm.quotesDetails.shipperCounterRateSubmitUtcTime)))])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=template&id=5de11a3e&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=template&id=5de11a3e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "",
      active: _vm.showSubmitQuotePopupInternal,
      "background-color": "rgba(0,0,0,.2)"
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.showSubmitQuotePopupInternal = $event;
      }
    }
  }, [_c("div", [_c("label", {
    staticClass: "vs-input--label"
  }, [_vm._v("\n      New quote rate\n      "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      "data-vv-validate-on": "blur",
      name: "newQuoteRate"
    },
    model: {
      value: _vm.newQuoteRateInternal,
      callback: function callback($$v) {
        _vm.newQuoteRateInternal = $$v;
      },
      expression: "newQuoteRateInternal"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n      " + _vm._s(_vm.errors.first("newQuoteRate")) + "\n    ")]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "vs-input--label"
  }, [_vm._v("\n        Quote valid until\n        "), _c("field-required-sign")], 1), _vm._v(" "), _c("flat-pickr", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      config: _vm.flatPikrConfig,
      "data-vv-validate-on": "on-change",
      name: "quoteValidUntil"
    },
    model: {
      value: _vm.quoteValidUntilInternal,
      callback: function callback($$v) {
        _vm.quoteValidUntilInternal = $$v;
      },
      expression: "quoteValidUntilInternal"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("quoteValidUntil")) + "\n      ")])], 1), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "vs-input--label"
  }, [_vm._v("\n        Number of trucks\n        "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
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
      value: _vm.numberOfTrucksInternal,
      callback: function callback($$v) {
        _vm.numberOfTrucksInternal = $$v;
      },
      expression: "numberOfTrucksInternal"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("numberOfTrucks")) + "\n      ")])], 1)], 1), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "text-right"
  }, [_c("vs-button", {
    staticClass: "mt-5",
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.handleRespondRequests
    }
  }, [_vm._v("\n        Submit\n      ")])], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CarrierBtn[data-v-0023bc44] {\n  display: flex;\n  justify-content: flex-end;\n}[dir] .CarrierBtn[data-v-0023bc44] {\n  margin: 25px 0px;\n}\n.CarrierBtn button[data-v-0023bc44] {\n  color: #fff;\n  outline: none;\n}\n[dir] .CarrierBtn button[data-v-0023bc44] {\n  padding: 14px 24px;\n  border-radius: 5px;\n  background-color: #3975eb;\n  border: 1px solid #3975eb;\n  cursor: pointer;\n}\n.bookNow[data-v-0023bc44] {\n  color: #3975eb;\n  font-weight: 700;\n}\n.bookNow .input-with-currency[data-v-0023bc44] {\n  outline: none;\n  max-width: 300px;\n  display: flex;\n  align-items: center;\n}\n[dir] .bookNow .input-with-currency[data-v-0023bc44] {\n  padding: 8px;\n  margin: 10px 0px;\n  border: 1px solid #e7e7e7;\n  border-radius: 5px;\n}\n.bookNow .input-with-currency .icon[data-v-0023bc44] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 25px;\n  height: 25px;\n  color: #fff;\n}\n[dir] .bookNow .input-with-currency .icon[data-v-0023bc44] {\n  background-color: #333;\n  padding: 10px;\n  border-radius: 50%;\n}\n.bookNow .input-with-currency .price[data-v-0023bc44] {\n  height: 100%;\n  width: 100%;\n}\n[dir] .bookNow .input-with-currency .price[data-v-0023bc44] {\n  padding: 10px;\n  border: none;\n}\n[dir=ltr] .bookNow .input-with-currency .price[data-v-0023bc44] {\n  margin-left: 15px;\n}\n[dir=rtl] .bookNow .input-with-currency .price[data-v-0023bc44] {\n  margin-right: 15px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pickup-label[data-v-6e5f2473],\n.delivery-label[data-v-6e5f2473] {\n  color: #343434;\n  font-size: 20px;\n  font-weight: 700;\n}[dir] .pickup-label[data-v-6e5f2473], [dir] .delivery-label[data-v-6e5f2473] {\n  margin-bottom: 15px;\n}\n[dir] .mt-2px[data-v-6e5f2473] {\n  margin-top: 2px;\n}\n[dir=ltr] .ml--25px[data-v-6e5f2473] {\n  margin-left: -25px;\n}\n[dir=rtl] .ml--25px[data-v-6e5f2473] {\n  margin-right: -25px;\n}\n[dir] .cursor-grab[data-v-6e5f2473] {\n  cursor: grab;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .invisible-border[data-v-32cab88f] {\n  border: 1px solid transparent;\n}\n.active[data-v-32cab88f] {\n  color: rgba(var(--vs-primary), 1) !important;\n}\n[dir] .active[data-v-32cab88f] {\n  border-bottom: 2px solid rgba(var(--vs-primary), 1);\n}\n.tabs[data-v-32cab88f] {\n  display: flex;\n  list-style: none;\n}\n[dir] .tabs[data-v-32cab88f] {\n  padding: 0;\n  margin-bottom: 30px;\n}\n[dir] .tab[data-v-32cab88f] {\n  cursor: pointer;\n}\n[dir=ltr] .tab[data-v-32cab88f] {\n  margin-right: 10px;\n}\n[dir=rtl] .tab[data-v-32cab88f] {\n  margin-left: 10px;\n}\n.tab.active[data-v-32cab88f] {\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cheapestHeader[data-v-4cc1b3ac] {\n  font-weight: 500;\n}[dir] .cheapestHeader[data-v-4cc1b3ac] {\n  padding: 0px 7px;\n  background-color: var(--slate-100, #f1f5f9);\n  border-radius: 5px;\n  text-align: center;\n}\n[dir] .vertical-divider[data-v-4cc1b3ac] {\n  border: 1px solid #e9ecef;\n  margin: 0px 10px;\n}\n.shipperLinks[data-v-4cc1b3ac] {\n  color: var(--blue-600, #2563eb);\n  font-size: 16px;\n  font-weight: 700;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.heading[data-v-4cc1b3ac] {\n  color: var(--neutrals-black, #181818);\n  font-size: 16px;\n  font-weight: 500;\n}\n[dir] .heading[data-v-4cc1b3ac] {\n  text-align: center;\n  margin-bottom: 5px;\n}\n[dir] .orangeTxt[data-v-4cc1b3ac] {\n  text-align: center;\n}\n.orangeTxt p[data-v-4cc1b3ac] {\n  color: var(--orange-500, #f97316);\n  font-weight: 700;\n}\n.orangeTxt h5[data-v-4cc1b3ac] {\n  color: var(--orange-500, #f97316);\n  font-size: 16px;\n  font-weight: 700;\n}\n.lanesWrap[data-v-4cc1b3ac] {\n  width: 400px;\n}\n.lanesWrap .headingNumber[data-v-4cc1b3ac] {\n  font-size: 15px;\n  font-weight: 600;\n}\n.w-100[data-v-4cc1b3ac] {\n  width: 100%;\n}\n.w-35[data-v-4cc1b3ac] {\n  width: 35%;\n}\n.w-20[data-v-4cc1b3ac] {\n  width: 20%;\n}\n.w-250[data-v-4cc1b3ac] {\n  width: 250px;\n}\n.distance-wrpper[data-v-4cc1b3ac] {\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  justify-content: space-between;\n  align-items: center;\n}\n[dir] .distance-wrpper[data-v-4cc1b3ac] {\n  margin-top: 5px;\n}\n[dir=ltr] .distance-wrpper[data-v-4cc1b3ac] {\n  margin-right: 10px;\n}\n[dir=rtl] .distance-wrpper[data-v-4cc1b3ac] {\n  margin-left: 10px;\n}\n[dir] .distance-wrpper .dots[data-v-4cc1b3ac] {\n  padding: 5px;\n  border: 1px solid #d9d9d9;\n  border-radius: 50%;\n}\n[dir] .distance-wrpper .dots.dotGray[data-v-4cc1b3ac] {\n  background-color: #d9d9d9;\n}\n[dir] .distance-wrpper .dots.dotBlue[data-v-4cc1b3ac] {\n  background-color: #2563eb;\n}\n.counterRateWrapper[data-v-4cc1b3ac] {\n  min-width: 250px;\n}\n[dir] .counterRateWrapper[data-v-4cc1b3ac] {\n  border: 1px solid #edeff2;\n  padding: 7px;\n  border-radius: 4px;\n}\n.counterRateInput[data-v-4cc1b3ac] {\n  min-height: 35px;\n  outline: none;\n  width: 100%;\n}\n[dir] .counterRateInput[data-v-4cc1b3ac] {\n  border: none;\n}\n.outlineBtn[data-v-4cc1b3ac] {\n  color: #3975eb;\n}\n[dir] .outlineBtn[data-v-4cc1b3ac] {\n  border: 1px solid #3975eb;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n.acceptCounterRate[data-v-4cc1b3ac] {\n  color: #2563eb;\n  font-size: 24px;\n}\n[dir] .acceptCounterRate[data-v-4cc1b3ac] {\n  padding: 25px 0px;\n}\n.fw-500[data-v-4cc1b3ac] {\n  font-weight: 500;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4[data-v-370bca10] {\n  color: #343434;\n  font-size: 20px;\n  font-weight: 700;\n}[dir] h4[data-v-370bca10] {\n  margin-bottom: 15px;\n}\nlabel[data-v-370bca10] {\n  color: #343434;\n  font-weight: 500;\n}\n.top-nav-item[data-v-370bca10] {\n  width: 200px;\n}\n[dir] .top-nav-item[data-v-370bca10] {\n  margin: 0px 4px;\n  padding: 8px;\n  border: 1px solid #d8d8d8;\n  cursor: pointer;\n}\n[dir] .top-nav-item p[data-v-370bca10] {\n  text-align: center;\n}\n.btn--active[data-v-370bca10] {\n  color: #fff;\n}\n[dir] .btn--active[data-v-370bca10] {\n  background-color: rgb(0, 82, 204) !important;\n  border: 1px solid rgb(0, 82, 204) !important;\n}\n.equipment-dropdown[data-v-370bca10] {\n  min-width: 200px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=1&id=32cab88f&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=1&id=32cab88f&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .quotes .vs-popup--header {\n  background: none !important;\n}\n.quotes.con-vs-popup {\n  z-index: 20000 !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popupWidth.con-vs-popup .vs-popup {\n  width: 450px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label[data-v-0382f6ec] {\n  color: #343434;\n  font-size: 16px;\n  font-weight: 500;\n}[dir] label[data-v-0382f6ec] {\n  margin-bottom: 10px;\n}\nh4[data-v-0382f6ec] {\n  color: #343434;\n  font-size: 20px;\n  font-weight: 700;\n}\n[dir] h4[data-v-0382f6ec] {\n  margin-bottom: 15px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label[data-v-03a3d692] {\n  color: #343434;\n  font-size: 16px;\n  font-weight: 500;\n}[dir] label[data-v-03a3d692] {\n  margin-bottom: 10px;\n}\nh4[data-v-03a3d692] {\n  color: #343434;\n  font-size: 20px;\n  font-weight: 700;\n}\n[dir] h4[data-v-03a3d692] {\n  margin-bottom: 15px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.w-40 {\n  width: 10rem;\n}\n.opacity-40 {\n  opacity: 0.4;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=1&id=32cab88f&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=1&id=32cab88f&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=1&id=32cab88f&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=1&id=32cab88f&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css&");

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

/***/ "./resources/js/src/views/pages/quotes/CarrierQuoteList.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarrierQuoteList.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarrierQuoteList_vue_vue_type_template_id_db198116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarrierQuoteList.vue?vue&type=template&id=db198116& */ "./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=template&id=db198116&");
/* harmony import */ var _CarrierQuoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarrierQuoteList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarrierQuoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarrierQuoteList_vue_vue_type_template_id_db198116___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarrierQuoteList_vue_vue_type_template_id_db198116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/CarrierQuoteList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierQuoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierQuoteList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierQuoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=template&id=db198116&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=template&id=db198116& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierQuoteList_vue_vue_type_template_id_db198116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierQuoteList.vue?vue&type=template&id=db198116& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarrierQuoteList.vue?vue&type=template&id=db198116&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierQuoteList_vue_vue_type_template_id_db198116___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierQuoteList_vue_vue_type_template_id_db198116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CarriersDetails.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarriersDetails.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarriersDetails_vue_vue_type_template_id_0023bc44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarriersDetails.vue?vue&type=template&id=0023bc44&scoped=true& */ "./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=template&id=0023bc44&scoped=true&");
/* harmony import */ var _CarriersDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarriersDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CarriersDetails_vue_vue_type_style_index_0_id_0023bc44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss& */ "./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CarriersDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarriersDetails_vue_vue_type_template_id_0023bc44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarriersDetails_vue_vue_type_template_id_0023bc44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0023bc44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/CarriersDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarriersDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_style_index_0_id_0023bc44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=style&index=0&id=0023bc44&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_style_index_0_id_0023bc44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_style_index_0_id_0023bc44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_style_index_0_id_0023bc44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_style_index_0_id_0023bc44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=template&id=0023bc44&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=template&id=0023bc44&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_template_id_0023bc44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarriersDetails.vue?vue&type=template&id=0023bc44&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CarriersDetails.vue?vue&type=template&id=0023bc44&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_template_id_0023bc44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarriersDetails_vue_vue_type_template_id_0023bc44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CreateEditQuote.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CreateEditQuote.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateEditQuote_vue_vue_type_template_id_6e5f2473_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateEditQuote.vue?vue&type=template&id=6e5f2473&scoped=true& */ "./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=template&id=6e5f2473&scoped=true&");
/* harmony import */ var _CreateEditQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateEditQuote.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CreateEditQuote_vue_vue_type_style_index_0_id_6e5f2473_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true& */ "./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreateEditQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateEditQuote_vue_vue_type_template_id_6e5f2473_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateEditQuote_vue_vue_type_template_id_6e5f2473_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e5f2473",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/CreateEditQuote.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateEditQuote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_style_index_0_id_6e5f2473_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=style&index=0&id=6e5f2473&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_style_index_0_id_6e5f2473_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_style_index_0_id_6e5f2473_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_style_index_0_id_6e5f2473_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_style_index_0_id_6e5f2473_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=template&id=6e5f2473&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=template&id=6e5f2473&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_template_id_6e5f2473_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateEditQuote.vue?vue&type=template&id=6e5f2473&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/CreateEditQuote.vue?vue&type=template&id=6e5f2473&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_template_id_6e5f2473_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditQuote_vue_vue_type_template_id_6e5f2473_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_32cab88f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=32cab88f&scoped=true& */ "./resources/js/src/views/pages/quotes/Index.vue?vue&type=template&id=32cab88f&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_32cab88f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true& */ "./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_style_index_1_id_32cab88f_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=1&id=32cab88f&lang=css& */ "./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=1&id=32cab88f&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_32cab88f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_32cab88f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32cab88f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_32cab88f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=0&id=32cab88f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_32cab88f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_32cab88f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_32cab88f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_32cab88f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=1&id=32cab88f&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=1&id=32cab88f&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_id_32cab88f_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=1&id=32cab88f&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=style&index=1&id=32cab88f&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_id_32cab88f_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_id_32cab88f_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_id_32cab88f_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_id_32cab88f_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/Index.vue?vue&type=template&id=32cab88f&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/Index.vue?vue&type=template&id=32cab88f&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_32cab88f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=32cab88f&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/Index.vue?vue&type=template&id=32cab88f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_32cab88f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_32cab88f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/ShipperQuoteList.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShipperQuoteList_vue_vue_type_template_id_4cc1b3ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipperQuoteList.vue?vue&type=template&id=4cc1b3ac&scoped=true& */ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=template&id=4cc1b3ac&scoped=true&");
/* harmony import */ var _ShipperQuoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipperQuoteList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShipperQuoteList_vue_vue_type_style_index_0_id_4cc1b3ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true& */ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true&");
/* harmony import */ var _ShipperQuoteList_vue_vue_type_style_index_1_id_4cc1b3ac_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css& */ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ShipperQuoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShipperQuoteList_vue_vue_type_template_id_4cc1b3ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShipperQuoteList_vue_vue_type_template_id_4cc1b3ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cc1b3ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/ShipperQuoteList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipperQuoteList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_0_id_4cc1b3ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=0&id=4cc1b3ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_0_id_4cc1b3ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_0_id_4cc1b3ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_0_id_4cc1b3ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_0_id_4cc1b3ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_1_id_4cc1b3ac_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=style&index=1&id=4cc1b3ac&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_1_id_4cc1b3ac_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_1_id_4cc1b3ac_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_1_id_4cc1b3ac_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_style_index_1_id_4cc1b3ac_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=template&id=4cc1b3ac&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=template&id=4cc1b3ac&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_template_id_4cc1b3ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipperQuoteList.vue?vue&type=template&id=4cc1b3ac&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/ShipperQuoteList.vue?vue&type=template&id=4cc1b3ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_template_id_4cc1b3ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperQuoteList_vue_vue_type_template_id_4cc1b3ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarrierBookNowPopup_vue_vue_type_template_id_438fc4f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarrierBookNowPopup.vue?vue&type=template&id=438fc4f1& */ "./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=template&id=438fc4f1&");
/* harmony import */ var _CarrierBookNowPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarrierBookNowPopup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarrierBookNowPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarrierBookNowPopup_vue_vue_type_template_id_438fc4f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarrierBookNowPopup_vue_vue_type_template_id_438fc4f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierBookNowPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierBookNowPopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierBookNowPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=template&id=438fc4f1&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=template&id=438fc4f1& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierBookNowPopup_vue_vue_type_template_id_438fc4f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierBookNowPopup.vue?vue&type=template&id=438fc4f1& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/CarrierBookNowPopup.vue?vue&type=template&id=438fc4f1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierBookNowPopup_vue_vue_type_template_id_438fc4f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierBookNowPopup_vue_vue_type_template_id_438fc4f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/Delivery.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/Delivery.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Delivery_vue_vue_type_template_id_0382f6ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Delivery.vue?vue&type=template&id=0382f6ec&scoped=true& */ "./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=template&id=0382f6ec&scoped=true&");
/* harmony import */ var _Delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delivery.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Delivery_vue_vue_type_style_index_0_id_0382f6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css& */ "./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Delivery_vue_vue_type_template_id_0382f6ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Delivery_vue_vue_type_template_id_0382f6ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0382f6ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/components/Delivery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_0382f6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=style&index=0&id=0382f6ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_0382f6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_0382f6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_0382f6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_0382f6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=template&id=0382f6ec&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=template&id=0382f6ec&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_template_id_0382f6ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivery.vue?vue&type=template&id=0382f6ec&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Delivery.vue?vue&type=template&id=0382f6ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_template_id_0382f6ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_template_id_0382f6ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadBasicInfo_vue_vue_type_template_id_370bca10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadBasicInfo.vue?vue&type=template&id=370bca10&scoped=true& */ "./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=template&id=370bca10&scoped=true&");
/* harmony import */ var _LoadBasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadBasicInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadBasicInfo_vue_vue_type_style_index_0_id_370bca10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true& */ "./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadBasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadBasicInfo_vue_vue_type_template_id_370bca10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadBasicInfo_vue_vue_type_template_id_370bca10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "370bca10",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadBasicInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_style_index_0_id_370bca10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=style&index=0&id=370bca10&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_style_index_0_id_370bca10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_style_index_0_id_370bca10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_style_index_0_id_370bca10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_style_index_0_id_370bca10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=template&id=370bca10&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=template&id=370bca10&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_template_id_370bca10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadBasicInfo.vue?vue&type=template&id=370bca10&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/LoadBasicInfo.vue?vue&type=template&id=370bca10&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_template_id_370bca10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadBasicInfo_vue_vue_type_template_id_370bca10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/Pickup.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/Pickup.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pickup_vue_vue_type_template_id_03a3d692_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pickup.vue?vue&type=template&id=03a3d692&scoped=true& */ "./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=template&id=03a3d692&scoped=true&");
/* harmony import */ var _Pickup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pickup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Pickup_vue_vue_type_style_index_0_id_03a3d692_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css& */ "./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pickup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pickup_vue_vue_type_template_id_03a3d692_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pickup_vue_vue_type_template_id_03a3d692_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03a3d692",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/components/Pickup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pickup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_style_index_0_id_03a3d692_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=style&index=0&id=03a3d692&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_style_index_0_id_03a3d692_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_style_index_0_id_03a3d692_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_style_index_0_id_03a3d692_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_style_index_0_id_03a3d692_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=template&id=03a3d692&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=template&id=03a3d692&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_template_id_03a3d692_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pickup.vue?vue&type=template&id=03a3d692&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/Pickup.vue?vue&type=template&id=03a3d692&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_template_id_03a3d692_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pickup_vue_vue_type_template_id_03a3d692_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuoteDetailsCard_vue_vue_type_template_id_49af3dec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuoteDetailsCard.vue?vue&type=template&id=49af3dec& */ "./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=template&id=49af3dec&");
/* harmony import */ var _QuoteDetailsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuoteDetailsCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuoteDetailsCard_vue_vue_type_style_index_0_id_49af3dec_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css& */ "./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuoteDetailsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuoteDetailsCard_vue_vue_type_template_id_49af3dec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuoteDetailsCard_vue_vue_type_template_id_49af3dec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteDetailsCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_style_index_0_id_49af3dec_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=style&index=0&id=49af3dec&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_style_index_0_id_49af3dec_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_style_index_0_id_49af3dec_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_style_index_0_id_49af3dec_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_style_index_0_id_49af3dec_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=template&id=49af3dec&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=template&id=49af3dec& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_template_id_49af3dec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteDetailsCard.vue?vue&type=template&id=49af3dec& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/QuoteDetailsCard.vue?vue&type=template&id=49af3dec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_template_id_49af3dec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteDetailsCard_vue_vue_type_template_id_49af3dec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _submitQuotePopup_vue_vue_type_template_id_5de11a3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitQuotePopup.vue?vue&type=template&id=5de11a3e& */ "./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=template&id=5de11a3e&");
/* harmony import */ var _submitQuotePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitQuotePopup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _submitQuotePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _submitQuotePopup_vue_vue_type_template_id_5de11a3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _submitQuotePopup_vue_vue_type_template_id_5de11a3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/quotes/components/submitQuotePopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submitQuotePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./submitQuotePopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submitQuotePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=template&id=5de11a3e&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=template&id=5de11a3e& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_submitQuotePopup_vue_vue_type_template_id_5de11a3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./submitQuotePopup.vue?vue&type=template&id=5de11a3e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/quotes/components/submitQuotePopup.vue?vue&type=template&id=5de11a3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_submitQuotePopup_vue_vue_type_template_id_5de11a3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_submitQuotePopup_vue_vue_type_template_id_5de11a3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=66.js.map