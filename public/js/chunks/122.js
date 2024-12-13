(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InvoicesTab',
  components: {
    AddNewInvoice: function AddNewInvoice() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(93)]).then(__webpack_require__.bind(null, /*! ./Invoice/AddNewInvoice.vue */ "./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue"));
    },
    LoadSidebar: function LoadSidebar() {
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(9), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! @/views/pages/dispatch/load/LoadSidebar.vue */ "./resources/js/src/views/pages/dispatch/load/LoadSidebar.vue"));
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('factoring-company', ['allFactoringCompanies']), Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('auth', ['isUserBrokerOrShipper', 'user']), {
    getStatusLabel: function getStatusLabel() {
      var _this = this;

      return function (status) {
        var statusLabels = _this.isManualInvoiceMode ? _config_constants__WEBPACK_IMPORTED_MODULE_7__["default"].status.manualInvoiceLabels : _config_constants__WEBPACK_IMPORTED_MODULE_7__["default"].status.loadWithLabels;
        var matchingStatus = statusLabels.find(function (item) {
          return item.value === status;
        });
        return matchingStatus ? matchingStatus.label : '';
      };
    },
    footerText: function footerText() {
      var _ref = this.metaData || {},
          from = _ref.from,
          to = _ref.to,
          total = _ref.total;

      if (from && to && total) {
        return "Displaying ".concat(from, " to ").concat(to, " of ").concat(total, " records");
      }

      return null;
    },
    isManualInvoiceMode: function isManualInvoiceMode() {
      return this.filter.type == 'manual';
    }
  }),
  data: function data() {
    return {
      isManual: false,
      manualStatus: ['requested', 'draft', 'paid'],
      //loadStatus:["requested","paid"],
      loadStatusLabel: ['Delivered', 'Invoice Generated', 'Payment Request', 'Paid'],
      loadStatusValue: {
        Delivered: 'delivered',
        'Invoice Generated': 'invoice_created',
        'Payment Request': 'payment_requested',
        Paid: 'invoice_paid'
      },
      items: [],
      totalRecords: 0,
      loading: false,
      rows: 25,
      metaData: null,
      toggleAddNewInvoicePopup: false,
      eventForServer: {
        page: 1,
        perPage: 25
      },
      getInvoiceId: null,
      isEdit: false,
      filter: {
        type: 'singleLoad',
        status: '',
        statuses: [],
        invoiceNumber: '',
        customerName: '',
        amount: '',
        loadReference: '',
        issueDateRange: '',
        dueDate: '',
        firstShipDateRange: '',
        lastDelDateRange: '',
        salesRep: ''
      },
      filterStatusesValue: [],
      sortBy: null,
      status: [{
        id: 2,
        label: 'Load Invoices',
        value: 'singleLoad'
      }, {
        id: 1,
        label: 'Invoices',
        value: 'manual'
      }],
      loadPaymentStatus: [_config_constants__WEBPACK_IMPORTED_MODULE_7__["default"].status.load.delivered, _config_constants__WEBPACK_IMPORTED_MODULE_7__["default"].status.load.invoice_created, _config_constants__WEBPACK_IMPORTED_MODULE_7__["default"].status.load.invoice_sent],
      loadStatuses: _config_constants__WEBPACK_IMPORTED_MODULE_7__["default"].status.load,
      isSidebarActive: false,
      sidebarData: {},
      flat_pikr_config: {
        mode: 'range',
        dateFormat: 'Y-m-d'
      },
      promptMessage: '',
      promptColor: '',
      emailSubject: '',
      paymentRequestPrompt: {
        isActive: false,
        selectedLoad: null
      },
      selectedManualInvoices: [],
      invoicePrompt: {
        isActive: false,
        selectedLoad: null,
        skipFactoring: false
      },
      paymentReceivedPrompt: {
        isActive: false,
        selectedLoad: null
      },
      receivedAmount: ''
    };
  },
  watch: {
    'filter.status': function filterStatus(val) {
      this.filter.status = val ? val : '';
    }
  },
  mounted: function mounted() {
    if (this.isUserBrokerOrShipper) {
      this.filter.type = 'singleLoad';
      this.status = [{
        id: 2,
        label: 'Load Invoices',
        value: 'singleLoad'
      }];
    }

    if (this.user.admin_company_details.admin_company_detail_id === _config_constants__WEBPACK_IMPORTED_MODULE_7__["default"].hidefunctionalitiesForSpecificCompanyIds) {
      this.filter.type = 'manual';
      this.isManual = true;
      this.status = [{
        id: 1,
        label: 'Invoices',
        value: 'manual'
      }];
    }

    this.init();
  },
  methods: {
    changeFilterType: function changeFilterType(event) {
      if (event.value === 'manual') {
        this.isManual = true;
      } else {
        this.isManual = false;
      }

      this.filter.type = event.value;
      this.fetchInvoices();
    },
    onInputFilterStatus: function onInputFilterStatus() {
      var _this2 = this;

      if (!this.isManual) {
        this.filter.statuses = this.filterStatusesValue.map(function (status) {
          return _this2.loadStatusValue[status];
        });
        this.filter.status = '';
      } else {
        this.filter.status = this.filterStatusesValue;
        this.filter.statuses = [];
      }

      this.fetchInvoices();
    },
    onSort: function onSort(event) {
      var order;

      if (event.sortOrder === -1) {
        order = 'desc';
      } else {
        order = 'asc';
      }

      this.sortBy = {
        field: event.sortField,
        order: order
      };
      this.fetchInvoices();
    },
    onInputFilter: function onInputFilter() {
      this.fetchInvoices();
    },
    openDeleteConfirmation: function () {
      var _openDeleteConfirmation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(data) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$vs.dialog({
                  type: 'confirm',
                  color: 'danger',
                  title: 'Delete Invoice',
                  text: 'Are you sure you want to delete this invoice?',
                  accept: function accept() {
                    return _this3.deleteInvoice(data);
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function openDeleteConfirmation(_x) {
        return _openDeleteConfirmation.apply(this, arguments);
      };
    }(),
    resetInvoicePrompt: function resetInvoicePrompt() {
      this.invoicePrompt = {
        isActive: false,
        selectedLoad: null,
        noFactoring: null,
        skipFactoring: false
      };
    },
    deleteInvoice: function deleteInvoice(data) {
      var _this4 = this;

      this.$vs.loading();
      var payload = {
        invoiceId: data.id
      };
      this.$store.dispatch('invoiceV2/deleteInvoice', payload).then(function () {
        _this4.$vs.notify({
          color: 'success',
          title: 'Delete Invoice',
          text: 'Invoice deleted successfully'
        });

        _this4.init();
      }).catch(function (error) {
        _this4.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.message
        });
      }).finally(function () {
        _this4.$vs.loading.close();
      });
    },
    closeAddNewInvoicePopup: function closeAddNewInvoicePopup() {
      this.toggleAddNewInvoicePopup = false;
    },
    closeInvoicePopup: function closeInvoicePopup() {
      this.toggleAddNewInvoicePopup = false;
    },
    editInvoice: function editInvoice(data) {
      this.getInvoiceId = data.id;
      this.isEdit = true;
      this.toggleAddNewInvoicePopup = true;
    },
    addNewInvoice: function addNewInvoice() {
      this.isEdit = false;
      this.toggleAddNewInvoicePopup = true;
    },
    onConfirmRequestForPayment: function onConfirmRequestForPayment(data) {
      var _this5 = this;

      this.$vs.loading();
      this.$store.dispatch('invoiceV2/confirmRequestPayment', data.id).then(function () {
        _this5.$vs.notify({
          color: 'success',
          title: 'Confirm Request Payment',
          text: 'Confirm request payment successfully'
        });

        _this5.init();
      }).catch(function (error) {
        _this5.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.message
        });
      }).finally(function () {
        _this5.$vs.loading.close();
      });
    },
    downloadFile: function downloadFile(url) {
      if (url) {
        Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["redirectToNewTab"])(url);
      }
    },
    markAsPaid: function markAsPaid(data) {
      var _this6 = this;

      this.$vs.loading();
      this.$store.dispatch('invoiceV2/markAsPaid', data.id).then(function () {
        _this6.$vs.notify({
          color: 'success',
          title: 'Mark As Paid',
          text: 'Mark As Paid successfully'
        });

        _this6.init();
      }).catch(function (error) {
        _this6.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.message
        });
      }).finally(function () {
        _this6.$vs.loading.close();
      });
    },
    fetchInvoices: function () {
      var _fetchInvoices = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var _ref2, page, perPage, filter, selectedDates, _selectedDates, _selectedDates2, _ref3, status, _ref3$data, result, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref2 = this.eventForServer || {}, page = _ref2.page, perPage = _ref2.perPage;
                _context2.prev = 1;
                filter = _objectSpread({}, this.filter);

                if (filter.type === 'manual') {
                  delete filter.firstShipDateRange;
                  delete filter.lastDelDateRange;
                }

                if (filter.type != 'manual') {
                  delete filter.salesRep;
                }

                if (filter.statuses && filter.statuses.length == 0) {
                  delete filter.statuses;
                }

                if (filter.firstShipDateRange) {
                  selectedDates = filter.firstShipDateRange.split(' to ');
                  filter.firstShipDateRange = {
                    startDate: selectedDates[0],
                    endDate: selectedDates[1]
                  };
                }

                if (filter.lastDelDateRange) {
                  _selectedDates = filter.lastDelDateRange.split(' to ');
                  filter.lastDelDateRange = {
                    startDate: _selectedDates[0],
                    endDate: _selectedDates[1]
                  };
                }

                if (filter.issueDateRange) {
                  _selectedDates2 = filter.issueDateRange.split(' to ');
                  filter.issueDateRange = {
                    startDate: _selectedDates2[0],
                    endDate: _selectedDates2[1]
                  };
                }

                _context2.next = 11;
                return this.$store.dispatch('invoiceV2/fetchInvoices', {
                  filter: filter,
                  sortBy: this.sortBy,
                  page: page,
                  perPage: perPage
                });

              case 11:
                _ref3 = _context2.sent;
                status = _ref3.status;
                _ref3$data = _ref3.data;
                result = _ref3$data.result;
                payload = _ref3$data.payload;

                if (status === 200 && result) {
                  this.items = payload && payload.invoices ? payload.invoices : [];
                  this.totalRecords = payload && payload.meta ? payload.meta.total : 0;
                  this.metaData = payload && payload.meta ? payload.meta : null;
                }

                _context2.next = 25;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](1);
                this.items = [];
                this.totalRecords = 0;
                _context2.next = 25;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(_context2.t0)
                });

              case 25:
                _context2.prev = 25;
                return _context2.finish(25);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 19, 25, 27]]);
      }));

      return function fetchInvoices() {
        return _fetchInvoices.apply(this, arguments);
      };
    }(),
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.loading = true;
                _context3.prev = 1;
                _context3.next = 4;
                return this.fetchInvoices();

              case 4:
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](1);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: 'message'
                });

              case 9:
                _context3.prev = 9;
                this.loading = false;
                return _context3.finish(9);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 6, 9, 12]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    onPage: function onPage(event) {
      var _ref4 = event || {},
          page = _ref4.page,
          rows = _ref4.rows;

      this.eventForServer = {
        page: page ? page + 1 : 1,
        perPage: rows ? rows : 25
      };
      this.fetchInvoices();
    },
    sentenceCase: function sentenceCase(str) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["sentenceCase"])(str);
    },
    formatAmountValue: function formatAmountValue(amount) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["formatAmount"])(amount);
    },
    // Confirm Dialog
    onConfirm: function onConfirm(options) {
      this.$vs.dialog(_objectSpread({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes'
      }, options));
    },
    onConfirmGenerateInvoice: function onConfirmGenerateInvoice(load) {
      var _this7 = this;

      var options = {
        title: 'Generate Invoice',
        text: 'Are you sure you want to generate invoice?',
        accept: function accept() {
          return _this7.generateInvoice(load);
        }
      };
      this.onConfirm(options);
    },
    showInvoicePrompt: function showInvoicePrompt(load) {
      this.invoicePrompt = {
        isActive: true,
        selectedLoad: load,
        noFactoring: load && load.customer && load.noFactoring
      };
    },
    generateInvoice: function () {
      var _generateInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4(load) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: load.id
                };

                if (this.invoicePrompt.skipFactoring) {
                  payload.skipFactoring = this.invoicePrompt.skipFactoring;
                } else {
                  payload.skipFactoring = false;
                }

                _context4.prev = 3;
                _context4.next = 6;
                return this.$store.dispatch('load/generateInvoice', payload);

              case 6:
                _context4.next = 8;
                return this.init();

              case 8:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Invoice Generated',
                  text: 'Invoice Generated successfully.'
                });
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](3);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  time: 8000,
                  text: _context4.t0.response.data.message
                });

              case 14:
                _context4.prev = 14;
                this.$vs.loading.close();
                return _context4.finish(14);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 11, 14, 17]]);
      }));

      return function generateInvoice(_x2) {
        return _generateInvoice.apply(this, arguments);
      };
    }(),
    onConfirmRequestPayment: function onConfirmRequestPayment(load) {
      var amount = this.formatAmountValue(Number(load.amount).toFixed(2));
      var text = "Are you sure you want to send request for payment with amount ".concat(amount, " USD");
      this.promptColor = 'warning';
      var noFactoring = load && load.customerNoFactoring;

      if (!noFactoring && load.paymentOption != 'skipFactoring' && this.allFactoringCompanies && this.allFactoringCompanies.length > 0) {
        this.promptMessage = text + " to ".concat(this.allFactoringCompanies[0].billing_email, "?");
      } else {
        if (load && load.customerEmail) {
          this.promptMessage = text + " to ".concat(load.customerEmail, "?");
        } else {
          this.promptMessage = text + "? (Missing customer billing email)";
          this.promptColor = 'danger';
        }
      }

      this.emailSubject = "Invoice for Load ".concat(load.loadReference ? load.loadReference : '');
      this.showPaymentRequestPrompt(load);
    },
    requestForPayment: function () {
      var _requestForPayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: this.paymentRequestPrompt.selectedLoad.id,
                  subject: this.emailSubject
                };
                _context5.prev = 2;
                _context5.next = 5;
                return this.$store.dispatch('load/requestForPayment', payload);

              case 5:
                _context5.next = 7;
                return this.init();

              case 7:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Payment Request',
                  text: 'Request for Payment sent successfully.'
                });
                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context5.t0.response.data.message,
                  time: 8000
                });

              case 13:
                _context5.prev = 13;
                this.$vs.loading.close();
                return _context5.finish(13);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 10, 13, 16]]);
      }));

      return function requestForPayment() {
        return _requestForPayment.apply(this, arguments);
      };
    }(),
    // Payment Received
    onConfirmPaymentReceived: function onConfirmPaymentReceived(load) {
      this.paymentReceivedPrompt = {
        isActive: true,
        selectedLoad: load
      };
      this.receivedAmount = load.amount.toString(); // convering number into string because input type number accepts string and if value is 0 then it doesn't accept 0 as a default value;
    },
    paymentReceived: function () {
      var _paymentReceived = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee6() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: this.paymentReceivedPrompt.selectedLoad.id,
                  paidAmount: this.receivedAmount ? Number(this.receivedAmount) : null
                };
                _context6.prev = 2;
                _context6.next = 5;
                return this.$store.dispatch('load/paymentReceived', payload);

              case 5:
                _context6.next = 7;
                return this.init();

              case 7:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Payment Received',
                  text: 'Payment received successfully.'
                });
                _context6.next = 13;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context6.t0.response.data.message
                });

              case 13:
                _context6.prev = 13;
                this.$vs.loading.close();
                return _context6.finish(13);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 10, 13, 16]]);
      }));

      return function paymentReceived() {
        return _paymentReceived.apply(this, arguments);
      };
    }(),
    openLoadDetails: function openLoadDetails(loadData) {
      if (!this.isManual) {
        var _ref5 = loadData || {},
            id = _ref5.id;

        if (id) {
          this.openLoadSidebar(id);
        }
      }
    },
    openLoadSidebar: function openLoadSidebar(loadId) {
      this.sidebarData = {
        loadId: loadId
      };
      this.isSidebarActive = true;
    },
    closeLoadSidebar: function closeLoadSidebar() {
      this.isSidebarActive = false;
      this.sidebarData = {};
      this.refreshPageContent();
    },
    refreshPageContent: function refreshPageContent() {
      this.fetchInvoices();
    },
    onDateChange: function onDateChange(dateArray, type) {
      if (dateArray.length > 1 && type) {
        var dateString = "".concat(dayjs__WEBPACK_IMPORTED_MODULE_8___default()(dateArray[0]).format('YYYY-MM-DD'), " to ").concat(dayjs__WEBPACK_IMPORTED_MODULE_8___default()(dateArray[1]).format('YYYY-MM-DD'));
        if (this.filter[type] === dateString) return;
        this.filter[type] = dateString;
        this.fetchInvoices();
      }
    },
    onDateClear: function onDateClear(type) {
      if (type && this.filter[type] !== '') {
        this.filter[type] = '';
        this.fetchInvoices();
      }
    },
    showPaymentRequestPrompt: function showPaymentRequestPrompt() {
      var load = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.paymentRequestPrompt = {
        isActive: true,
        selectedLoad: load
      };
    },
    resetPaymentRequestPrompt: function resetPaymentRequestPrompt() {
      this.paymentRequestPrompt = {
        isActive: false,
        selectedLoad: null
      };
    },
    exportExcel: function () {
      var _exportExcel = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee7() {
        var payload, _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                payload = {
                  filter: {
                    type: 'manual',
                    toDownload: true
                  }
                };
                this.$vs.loading({
                  container: '#button-export-loading',
                  scale: 0.45
                });
                _context7.next = 5;
                return this.$store.dispatch('invoiceV2/fetchInvoices', payload);

              case 5:
                _ref6 = _context7.sent;
                data = _ref6.data;
                window.location = data.payload.downloadUrl;
                return _context7.abrupt("return");

              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](0);
                console.log(_context7.t0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getApiErrorMsg"])(_context7.t0)
                });

              case 15:
                _context7.prev = 15;
                this.$vs.loading.close('#button-export-loading > .con-vs-loading');
                return _context7.finish(15);

              case 18:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 11, 15, 18]]);
      }));

      return function exportExcel() {
        return _exportExcel.apply(this, arguments);
      };
    }(),
    resetPaymentReceivedPrompt: function resetPaymentReceivedPrompt() {
      this.paymentReceivedPrompt = {
        isActive: false,
        selectedLoad: null
      };
      this.receivedAmount = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=template&id=161f8242&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=template&id=161f8242&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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

  return _c("div", [_c("vx-card", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.toggleAddNewInvoicePopup,
      expression: "!toggleAddNewInvoicePopup"
    }]
  }, [_c("div", {
    staticClass: "vx-row justify-between"
  }, [_c("div", {
    staticClass: "vx-col flex items-center"
  }, [_c("h3", {
    domProps: {
      textContent: _vm._s("Customers Invoices")
    }
  }), _vm._v(" "), _c("Dropdown", {
    staticClass: "min-width-125 ml-4",
    attrs: {
      options: _vm.status,
      dataKey: "uniqueId",
      optionLabel: "label",
      optionValue: "value",
      placeholder: "Select Status"
    },
    on: {
      change: function change($event) {
        return _vm.changeFilterType($event);
      }
    },
    model: {
      value: _vm.filter.type,
      callback: function callback($$v) {
        _vm.$set(_vm.filter, "type", $$v);
      },
      expression: "filter.type"
    }
  }), _vm._v(" "), _vm.isManualInvoiceMode ? _c("vs-button", {
    staticClass: "ml-2",
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.addNewInvoice
    }
  }, [_vm._v("Add new invoice")]) : _vm._e(), _vm._v(" "), _vm.isManualInvoiceMode ? _c("vs-button", {
    staticClass: "vs-con-loading__container ml-3",
    attrs: {
      color: "primary",
      type: "border",
      "icon-pack": "feather",
      icon: "icon-external-link",
      id: "button-export-loading"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.exportExcel.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Export\n        ")]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-5"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("DataTable", {
    attrs: {
      filterDisplay: "row",
      filters: _vm.filter,
      value: _vm.items,
      lazy: true,
      paginator: true,
      rows: _vm.rows,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      loading: _vm.loading,
      responsiveLayout: "scroll",
      rowsPerPageOptions: [10, 25, 50],
      columnResizeMode: "expand",
      selection: _vm.selectedManualInvoices
    },
    on: {
      page: function page($event) {
        return _vm.onPage($event);
      },
      sort: function sort($event) {
        return _vm.onSort($event);
      },
      "update:selection": function updateSelection($event) {
        _vm.selectedManualInvoices = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }, _vm.footerText ? {
      key: "footer",
      fn: function fn() {
        return [_vm._v("\n            " + _vm._s(_vm.footerText) + "\n          ")];
      },
      proxy: true
    } : null], null, true)
  }, [_c("Column", {
    attrs: {
      field: "invoiceNumber",
      header: "Invoice #",
      sortable: true,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("span", {
          style: {
            cursor: !_vm.isManual ? "pointer" : "default"
          },
          on: {
            click: function click($event) {
              return _vm.openLoadDetails(slotProps.data);
            }
          }
        }, [_vm._v("\n                " + _vm._s(slotProps.data.invoiceNumber) + "\n              ")])];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter w-full",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filter["invoiceNumber"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "invoiceNumber", $$v);
            },
            expression: "filter['invoiceNumber']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "loadReference",
      header: "Reference",
      sortable: false,
      showFilterMenu: false,
      hidden: _vm.filter.type === "manual"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.loadReference) + "\n            ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter w-full",
          staticStyle: {
            width: "60px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filter["loadReference"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "loadReference", $$v);
            },
            expression: "filter['loadReference']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "customerName",
      header: "Customers",
      sortable: true,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.customerName) + "\n            ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter w-full",
          staticStyle: {
            width: "60px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filter["customerName"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "customerName", $$v);
            },
            expression: "filter['customerName']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "salesRep",
      header: "Sales Rep.",
      sortable: false,
      showFilterMenu: false,
      hidden: _vm.filter.type === "singleLoad"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.salesRep) + "\n            ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter w-full",
          staticStyle: {
            width: "60px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filter["salesRep"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "salesRep", $$v);
            },
            expression: "filter['salesRep']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "amount",
      header: "Amount",
      sortable: true,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s("".concat(_vm.formatAmountValue(Number(slotProps.data.amount).toFixed(2)))) + "\n            ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter w-full",
          staticStyle: {
            width: "60px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filter["amount"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "amount", $$v);
            },
            expression: "filter['amount']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "paymentReceived",
      header: "Paid Amount",
      showFilterMenu: false,
      hidden: _vm.filter.type === "manual"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.paidAmount != null ? "".concat(_vm.formatAmountValue(Number(slotProps.data.paidAmount).toFixed(2))) : "") + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "firstShipDate",
      header: "Ship Date",
      sortable: false,
      showFilterMenu: false,
      hidden: _vm.filter.type === "manual"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.firstShipDate) + "\n            ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker",
          attrs: {
            value: _vm.filter["firstShipDateRange"],
            config: _vm.flat_pikr_config
          },
          on: {
            "on-change": function onChange(dateArray) {
              return _vm.onDateChange(dateArray, "firstShipDateRange");
            }
          }
        }), _vm._v(" "), _vm.filter.firstShipDateRange ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              return _vm.onDateClear("firstShipDateRange");
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "lastDelDate",
      header: "Del. Date",
      sortable: false,
      showFilterMenu: false,
      hidden: _vm.filter.type === "manual"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.lastDelDate) + "\n            ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker",
          attrs: {
            value: _vm.filter["lastDelDateRange"],
            config: _vm.flat_pikr_config
          },
          on: {
            "on-change": function onChange(dateArray) {
              return _vm.onDateChange(dateArray, "lastDelDateRange");
            }
          }
        }), _vm._v(" "), _vm.filter.lastDelDateRange ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              return _vm.onDateClear("lastDelDateRange");
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "issueDate",
      header: "Issue Date",
      sortable: true,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.issueDate) + "\n            ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker",
          attrs: {
            value: _vm.filter["issueDateRange"],
            config: _vm.flat_pikr_config
          },
          on: {
            "on-change": function onChange(dateArray) {
              return _vm.onDateChange(dateArray, "issueDateRange");
            }
          }
        }), _vm._v(" "), _vm.filter.issueDateRange ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              return _vm.onDateClear("issueDateRange");
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "dueDate",
      header: "Due Date",
      sortable: _vm.isManual,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(slotProps.data.dueDate) + "\n            ")];
      }
    }, _vm.isManual ? {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker",
          on: {
            "on-change": _vm.onInputFilter
          },
          model: {
            value: _vm.filter["dueDate"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "dueDate", $$v);
            },
            expression: "filter['dueDate']"
          }
        }), _vm._v(" "), _vm.filter.dueDate ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              _vm.filter.dueDate = "";
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    } : null], null, true)
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "status",
      header: "Status",
      sortable: true,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n              " + _vm._s(_vm.getStatusLabel(slotProps.data.status)) + "\n            ")];
      }
    }, {
      key: "filter",
      fn: function fn(_ref) {
        _objectDestructuringEmpty(_ref);

        return [_c("v-select", {
          staticClass: "w-48",
          attrs: {
            options: _vm.isManual ? _vm.manualStatus : _vm.loadStatusLabel,
            placeholder: "Any",
            solo: "",
            multiple: !_vm.isManual
          },
          on: {
            input: _vm.onInputFilterStatus
          },
          model: {
            value: _vm.filterStatusesValue,
            callback: function callback($$v) {
              _vm.filterStatusesValue = $$v;
            },
            expression: "filterStatusesValue"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Action"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [slotProps.data.type === "manual" ? _c("div", {
          staticClass: "flex items-center space-x-2"
        }, [_c("div", {
          staticClass: "flex items-center gap-1"
        }, [slotProps.data.url != "" ? _c("vx-tooltip", {
          staticClass: "mt-2",
          attrs: {
            text: "Download PDF"
          }
        }, [_c("vs-icon", {
          staticClass: "papper-clip-vertical",
          staticStyle: {
            cursor: "pointer"
          },
          attrs: {
            size: "small",
            icon: "attachment"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.downloadFile(slotProps.data.url);
            }
          }
        })], 1) : _vm._e(), _vm._v(" "), _c("vx-tooltip", {
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
              return _vm.editInvoice(slotProps.data);
            }
          }
        })], 1), _vm._v(" "), _c("vx-tooltip", {
          attrs: {
            text: "Request for Payment"
          }
        }, [slotProps.data.status === "requested" ? _c("vs-button", {
          attrs: {
            color: "warning",
            type: "filled",
            icon: "payment",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.onConfirmRequestForPayment(slotProps.data);
            }
          }
        }) : _vm._e()], 1), _vm._v(" "), _c("vx-tooltip", {
          attrs: {
            text: "Mark as Paid"
          }
        }, [slotProps.data.status === "requested" ? _c("vs-button", {
          attrs: {
            color: "success",
            type: "filled",
            icon: "done",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.markAsPaid(slotProps.data);
            }
          }
        }) : _vm._e()], 1), _vm._v(" "), _c("vx-tooltip", {
          attrs: {
            text: "Delete Invoice"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "danger",
            type: "filled",
            icon: "delete",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.openDeleteConfirmation(slotProps.data);
            }
          }
        })], 1)], 1)]) : slotProps.data.type === "singleLoad" && slotProps.data.status !== "deleted" ? _c("div", {
          staticClass: "flex items-center space-x-2"
        }, [_vm.loadPaymentStatus.includes(slotProps.data.status) ? [_c("div", {
          staticClass: "flex items-center gap-1"
        }, [slotProps.data.status === _vm.loadStatuses.delivered || slotProps.data.status === _vm.loadStatuses.invoice_created ? _c("vx-tooltip", {
          attrs: {
            text: "Generate Invoice"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "#7474be",
            type: "filled",
            icon: "receipt",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.showInvoicePrompt(slotProps.data);
            }
          }
        })], 1) : _vm._e(), _vm._v(" "), slotProps.data.status === _vm.loadStatuses.invoice_created || slotProps.data.status === _vm.loadStatuses.invoice_sent ? _c("vx-tooltip", {
          attrs: {
            text: "Request for Payment"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "warning",
            type: "filled",
            icon: "payment",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.onConfirmRequestPayment(slotProps.data);
            }
          }
        })], 1) : _vm._e(), _vm._v(" "), slotProps.data.status === _vm.loadStatuses.invoice_sent ? _c("vx-tooltip", {
          attrs: {
            text: "Mark as Paid"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "success",
            type: "filled",
            icon: "done",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.onConfirmPaymentReceived(slotProps.data);
            }
          }
        })], 1) : _vm._e()], 1)] : _vm._e()], 2) : _vm._e()];
      }
    }])
  })], 1)], 1)]), _vm._v(" "), _c("load-sidebar", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isSidebarActive,
      expression: "isSidebarActive"
    }],
    attrs: {
      isSidebarActive: _vm.isSidebarActive,
      data: _vm.sidebarData
    },
    on: {
      closeSidebar: _vm.closeLoadSidebar,
      refreshCallingUi: _vm.refreshPageContent
    }
  }), _vm._v(" "), _c("vs-prompt", {
    staticClass: "custom-prompt",
    attrs: {
      color: _vm.promptColor,
      "accept-text": "Yes",
      title: "Payment Requested",
      active: _vm.paymentRequestPrompt.isActive
    },
    on: {
      cancel: _vm.resetPaymentRequestPrompt,
      accept: _vm.requestForPayment,
      close: _vm.resetPaymentRequestPrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.paymentRequestPrompt, "isActive", $event);
      }
    }
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.promptMessage))]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("p", {
    staticClass: "mb-0 mr-3"
  }, [_vm._v("Email Subject :")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-4/5",
    attrs: {
      placeholder: "Email"
    },
    model: {
      value: _vm.emailSubject,
      callback: function callback($$v) {
        _vm.emailSubject = $$v;
      },
      expression: "emailSubject"
    }
  })], 1)]), _vm._v(" "), _c("vs-prompt", {
    staticClass: "invoice-generated-popup",
    attrs: {
      "accept-text": "Yes",
      title: "Generate Invoice",
      active: _vm.invoicePrompt.isActive
    },
    on: {
      cancel: _vm.resetInvoicePrompt,
      accept: function accept() {
        return _vm.generateInvoice(_vm.invoicePrompt.selectedLoad);
      },
      close: _vm.resetInvoicePrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.invoicePrompt, "isActive", $event);
      }
    }
  }, [_c("div", {
    staticClass: "flex column items-center"
  }, [_c("p", {
    staticClass: "mb-0 mr-3"
  }, [_vm._v("Are you sure you want to generate invoice?")])]), _vm._v(" "), !_vm.invoicePrompt.noFactoring && this.allFactoringCompanies && this.allFactoringCompanies.length > 0 ? _c("div", {
    staticClass: "w-full mt-3"
  }, [_c("div", {
    staticClass: "flex flex-row items-center justify-between"
  }, [_c("div", {
    staticClass: "w-full relative"
  }, [_c("vs-checkbox", {
    staticClass: "factoring-checkbox",
    model: {
      value: _vm.invoicePrompt.skipFactoring,
      callback: function callback($$v) {
        _vm.$set(_vm.invoicePrompt, "skipFactoring", $$v);
      },
      expression: "invoicePrompt.skipFactoring"
    }
  }, [_vm._v("\n              Skip Factoring\n            ")])], 1)])]) : _vm._e()])], 1), _vm._v(" "), _c("transition", {
    attrs: {
      name: "slide-fade"
    }
  }, [_vm.toggleAddNewInvoicePopup ? _c("div", {
    staticClass: "invoice-custom-sidebar"
  }, [_c("vs-button", {
    staticClass: "mt-16",
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: _vm.closeAddNewInvoicePopup
    }
  }, [_vm._v("\n        Back\n      ")]), _vm._v(" "), _c("add-new-invoice", {
    ref: "addNewInvoice",
    attrs: {
      toggleAddNewInvoicePopup: _vm.toggleAddNewInvoicePopup,
      getInvoiceId: _vm.getInvoiceId,
      isEditType: _vm.isEdit
    },
    on: {
      getInvoicesList: _vm.fetchInvoices,
      closeInvoicePopup: _vm.closeInvoicePopup
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c("vs-prompt", {
    staticClass: "payment-received-prompt",
    attrs: {
      "accept-text": "Yes",
      color: "primary",
      title: "Payment Received",
      active: _vm.paymentReceivedPrompt.isActive
    },
    on: {
      cancel: _vm.resetPaymentReceivedPrompt,
      accept: _vm.paymentReceived,
      close: _vm.resetPaymentReceivedPrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.paymentReceivedPrompt, "isActive", $event);
      }
    }
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v("\n      Are you sure you want to mark as paid with the following amount?\n    ")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    attrs: {
      type: "number",
      placeholder: "Amount"
    },
    model: {
      value: _vm.receivedAmount,
      callback: function callback($$v) {
        _vm.receivedAmount = $$v;
      },
      expression: "receivedAmount"
    }
  })], 2)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-161f8242] .p-sortable-column,[data-v-161f8242] .p-datatable-tbody > tr > td {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n[data-v-161f8242] .p-datatable-responsive-scroll > .p-datatable-wrapper {\n  overflow-x: auto;\n}\n.invoice-custom-sidebar[data-v-161f8242] {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  overflow-y: auto;\n  top: 0;\n  z-index: 100;\n  min-height: 100vh;\n}\n[dir] .invoice-custom-sidebar[data-v-161f8242] {\n  background: #fff;\n  padding: 20px;\n}\n.min-width-125[data-v-161f8242] {\n  min-width: 125px;\n}\n.date-picker[data-v-161f8242] {\n  max-width: 120px;\n  text-overflow: ellipsis !important;\n}\n.clearable-date-picker[data-v-161f8242] {\n  position: relative;\n}\n.clearable-date-picker .close-icon[data-v-161f8242] {\n  position: absolute;\n  top: 25%;\n}\n[dir] .clearable-date-picker .close-icon[data-v-161f8242] {\n  cursor: pointer;\n}\n[dir=ltr] .clearable-date-picker .close-icon[data-v-161f8242] {\n  right: -20px;\n}\n[dir=rtl] .clearable-date-picker .close-icon[data-v-161f8242] {\n  left: -20px;\n}\n.invoice-generated-popup .vs-dialog[data-v-161f8242] {\n  transition: all 0.2s;\n  z-index: 100;\n  width: calc(100% - 20px);\n  max-width: 400px;\n}\n[dir] .invoice-generated-popup .vs-dialog[data-v-161f8242] {\n  margin: 10px;\n  border-radius: 6px;\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n[dir=ltr] .invoice-generated-popup .vs-dialog[data-v-161f8242] {\n  animation: rebound 0.3s;\n}\n[dir=rtl] .invoice-generated-popup .vs-dialog[data-v-161f8242] {\n  animation: rebound 0.3s;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-prompt .vs-dialog {\n  max-width: 700px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss&");

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

/***/ "./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoicesTab_vue_vue_type_template_id_161f8242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoicesTab.vue?vue&type=template&id=161f8242&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=template&id=161f8242&scoped=true&");
/* harmony import */ var _InvoicesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoicesTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InvoicesTab_vue_vue_type_style_index_0_id_161f8242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true&");
/* harmony import */ var _InvoicesTab_vue_vue_type_style_index_1_id_161f8242_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss& */ "./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _InvoicesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoicesTab_vue_vue_type_template_id_161f8242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoicesTab_vue_vue_type_template_id_161f8242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "161f8242",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/InvoicesTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_0_id_161f8242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=0&id=161f8242&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_0_id_161f8242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_0_id_161f8242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_0_id_161f8242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_0_id_161f8242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_1_id_161f8242_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=style&index=1&id=161f8242&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_1_id_161f8242_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_1_id_161f8242_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_1_id_161f8242_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_style_index_1_id_161f8242_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=template&id=161f8242&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=template&id=161f8242&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_template_id_161f8242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesTab.vue?vue&type=template&id=161f8242&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/InvoicesTab.vue?vue&type=template&id=161f8242&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_template_id_161f8242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesTab_vue_vue_type_template_id_161f8242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=122.js.map