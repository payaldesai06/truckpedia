(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditInvoicePanel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditInvoicePanel.vue */ "./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue");
/* harmony import */ var _PreviewInvoice_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreviewInvoice.vue */ "./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue");



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddNewInvoice",
  components: {
    PreviewInvoice: _PreviewInvoice_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditInvoicePanel: _EditInvoicePanel_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    toggleAddNewInvoicePopup: {
      type: Boolean
    },
    isEditType: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    getInvoiceId: {
      type: Number
    }
  },
  data: function data() {
    return {
      invoice: {
        customer: null,
        items: [],
        customFields: [],
        notes: null
      },
      invoiceId: null,
      customFieldsPaymentOptions: [],
      isEdit: false,
      editInvoiceDetails: {}
    };
  },
  mounted: function mounted() {
    if (this.isEditType) {
      this.getInvoices(this.getInvoiceId);
    } else {
      this.resetInvoicesDetails();
    }
  },
  methods: {
    resetInvoicesDetails: function resetInvoicesDetails() {
      this.invoice = {
        customer: null,
        items: [],
        customFields: [],
        notes: null
      };
      this.invoiceId = null;
      this.customFieldsPaymentOptions = [];
      this.editInvoiceDetails = {};
      this.isEdit = false;
      this.$refs.editInvoicPanel.resetEditInvoicesDetails();
    },
    customFieldsOptions: function customFieldsOptions(options) {
      this.customFieldsPaymentOptions = options; // this.$emit('customFieldsOptions', options);
    },
    generateInvoicePayload: function generateInvoicePayload() {
      var _ref = this.invoice || {},
          customer = _ref.customer,
          dueDate = _ref.dueDate,
          invoiceNumber = _ref.invoiceNumber,
          notes = _ref.notes,
          shippingAddress = _ref.shippingAddress;

      var _ref2 = customer || {},
          customer_id = _ref2.customer_id;

      var payload = {
        status: this.invoice.status,
        // status draft or requested
        customerId: customer_id || null,
        invoiceNumber: invoiceNumber || null,
        dueDate: dueDate || null,
        notes: notes || null,
        items: this.invoice.items,
        additionalCustomPayments: this.invoice.customFields,
        shippingAddress: shippingAddress || null
      };
      return payload;
    },
    createInvoices: function createInvoices() {
      var _this = this;

      this.$vs.loading();
      var payload = this.generateInvoicePayload();
      payload.additionalCustomPayments.forEach(function (item) {
        delete item.isPercentage;
      });
      this.$store.dispatch("invoiceV2/createInvoices", payload).then(function () {
        _this.$vs.notify({
          color: "primary",
          title: "Create invoice",
          text: "Create invoice successfully."
        });

        _this.$emit("closeInvoicePopup");

        _this.$emit("getInvoicesList");
      }).catch(function (error) {
        _this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      }).finally(function () {
        _this.$vs.loading.close();
      });
    },
    editInvoices: function editInvoices() {
      var _this2 = this;

      this.$vs.loading();
      var payload = this.generateInvoicePayload();
      payload.invoiceId = this.invoiceId;
      (payload.additionalCustomPayments || []).forEach(function (item) {
        delete item.isPercentage;
      });
      this.$store.dispatch("invoiceV2/editInvoices", payload).then(function () {
        _this2.$vs.notify({
          color: "primary",
          title: "Edit invoice",
          text: "Edit invoice successfully."
        });

        _this2.$emit("closeInvoicePopup");

        _this2.$emit("getInvoicesList");
      }).catch(function (error) {
        _this2.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      }).finally(function () {
        _this2.$vs.loading.close();
      });
    },
    getInvoices: function getInvoices(_getInvoices) {
      var _this3 = this;

      this.$vs.loading();
      var payload = {
        invoiceId: _getInvoices
      };
      this.invoiceId = _getInvoices;
      this.$store.dispatch("invoiceV2/getInvoices", payload).then(function (_ref3) {
        var data = _ref3.data;
        _this3.invoice = data.payload;
        _this3.invoice.customFields = data.payload.additionalCustomPayments;
        _this3.editInvoiceDetails = data.payload;
        _this3.isEdit = true;
      }).catch(function (error) {
        _this3.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      }).finally(function () {
        _this3.$vs.loading.close();
      });
    },
    submitInvoice: function submitInvoice(status) {
      this.$set(this.invoice, "status", status);

      if (!this.isEdit) {
        this.createInvoices();
      } else {
        this.editInvoices();
      }
    },
    addNewPayment: function addNewPayment(data) {
      if (data && this.invoice.invoicePayments) {
        this.invoice.invoicePayments = _toConsumableArray(this.invoice.invoicePayments).concat([data]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EditInvoicePanel",
  components: {
    CustomerSelector: function CustomerSelector() {
      return __webpack_require__.e(/*! import() */ 181).then(__webpack_require__.bind(null, /*! ./EditPanel/CustomerSelector */ "./resources/js/src/views/pages/tripV2/components/Invoice/EditPanel/CustomerSelector/index.vue"));
    },
    ItemBlock: function ItemBlock() {
      return __webpack_require__.e(/*! import() */ 222).then(__webpack_require__.bind(null, /*! ./EditPanel/ItemBlock */ "./resources/js/src/views/pages/tripV2/components/Invoice/EditPanel/ItemBlock/index.vue"));
    },
    CustomFieldBlock: function CustomFieldBlock() {
      return __webpack_require__.e(/*! import() */ 89).then(__webpack_require__.bind(null, /*! ./EditPanel/CustomField */ "./resources/js/src/views/pages/tripV2/components/Invoice/EditPanel/CustomField/index.vue"));
    },
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_2__["VueEditor"]
  },
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    editInvoiceDetails: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    toggleAddNewInvoicePopup: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      customerInfo: {
        selectedCustomer: null,
        invoiceNumber: null,
        dueDate: null,
        shippingAddress: null
      },
      items: [],
      customFields: [],
      editorOptions: {
        modules: {
          toolbar: false
        }
      },
      notes: null,
      invoicePayments: []
    };
  },
  watch: {
    value: {
      handler: function handler(value) {
        this.customerInfo.selectedCustomer = value.customer;
        this.items = value.items;
        this.customFields = value.customFields;
        this.notes = value.notes || null;
        this.invoicePayments = value.invoicePayments || [];
      },
      immediate: true,
      deep: true
    },
    invoice: {
      handler: function handler(value) {
        this.$emit("input", value);
      },
      deep: true
    },
    editInvoiceDetails: {
      handler: function handler(value) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(value)) this.getInvoiceNumberSuggestion();
      }
    }
  },
  computed: {
    invoice: function invoice() {
      return {
        customer: this.customerInfo.selectedCustomer,
        invoiceNumber: this.customerInfo.invoiceNumber || null,
        dueDate: this.customerInfo.dueDate || null,
        shippingAddress: this.customerInfo.shippingAddress || null,
        items: this.items,
        customFields: this.customFields,
        notes: this.notes || null,
        invoicePayments: this.invoicePayments || []
      };
    }
  },
  created: function created() {
    var dayjsUtc = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");

    this.$dayjs.extend(dayjsUtc);
  },
  methods: {
    customFieldsUpdate: function customFieldsUpdate(val) {
      this.customFields = val;
    },
    checkStatus: function checkStatus() {
      if (this.editInvoiceDetails.status != "requested" && this.editInvoiceDetails.status != "paid") {
        return true;
      }

      return false;
    },
    resetEditInvoicesDetails: function resetEditInvoicesDetails() {
      this.customerInfo = {
        selectedCustomer: null,
        invoiceNumber: null,
        dueDate: null,
        shippingAddress: null
      };
      this.items = [];
      this.customFields = [];
      this.notes = null;
      this.invoicePayments = [];
    },
    customFieldsOptions: function customFieldsOptions(options) {
      this.$emit("customFieldsOptions", options);
    },
    saveAsDraft: function saveAsDraft() {
      this.$emit("submit", "draft");
    },
    issueInvoice: function () {
      var _issueInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.validateInvoice();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                this.$emit("submit", "requested");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function issueInvoice() {
        return _issueInvoice.apply(this, arguments);
      };
    }(),
    saveInvoice: function () {
      var _saveInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.validateInvoice();

              case 2:
                isValid = _context2.sent;

                if (isValid) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                this.$emit("submit", this.editInvoiceDetails.status);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function saveInvoice() {
        return _saveInvoice.apply(this, arguments);
      };
    }(),
    validateInvoice: function () {
      var _validateInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var _ref, selectedCustomer, dueDate, invoiceNumber, _ref2, customer_id, _this$invoice, items, customFields, invalidFields;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref = this.customerInfo || {}, selectedCustomer = _ref.selectedCustomer, dueDate = _ref.dueDate, invoiceNumber = _ref.invoiceNumber;
                _ref2 = selectedCustomer || {}, customer_id = _ref2.customer_id;

                if (customer_id) {
                  _context3.next = 5;
                  break;
                }

                this.$vs.notify({
                  title: "Error",
                  text: "Please select a customer",
                  color: "danger"
                });
                return _context3.abrupt("return", false);

              case 5:
                if (invoiceNumber) {
                  _context3.next = 8;
                  break;
                }

                this.$vs.notify({
                  title: "Error",
                  text: "Please enter an invoice number",
                  color: "danger"
                });
                return _context3.abrupt("return", false);

              case 8:
                if (dueDate) {
                  _context3.next = 11;
                  break;
                }

                this.$vs.notify({
                  title: "Error",
                  text: "Please select a due date",
                  color: "danger"
                });
                return _context3.abrupt("return", false);

              case 11:
                _this$invoice = this.invoice, items = _this$invoice.items, customFields = _this$invoice.customFields;

                if (!(items.length === 0 && customFields.length === 0)) {
                  _context3.next = 15;
                  break;
                }

                this.$vs.notify({
                  title: "Error",
                  text: "Please add at least one item or one custom field",
                  color: "danger"
                });
                return _context3.abrupt("return", false);

              case 15:
                if (!(customFields && customFields.length > 0)) {
                  _context3.next = 20;
                  break;
                }

                invalidFields = customFields.filter(function (field) {
                  return field.name === "" || field.value === null;
                });

                if (!(invalidFields.length > 0)) {
                  _context3.next = 20;
                  break;
                }

                this.$vs.notify({
                  title: "Error",
                  text: "Please fill all custom fields",
                  color: "danger"
                });
                return _context3.abrupt("return", false);

              case 20:
                return _context3.abrupt("return", true);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function validateInvoice() {
        return _validateInvoice.apply(this, arguments);
      };
    }(),
    getInvoiceNumberSuggestion: function () {
      var _getInvoiceNumberSuggestion = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.$store.dispatch("invoiceV2/fetchInvoiceNumberSuggestion");

              case 3:
                _ref3 = _context4.sent;
                data = _ref3.data;
                this.customerInfo.invoiceNumber = data.payload.invoiceNumber;
                _context4.next = 10;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      return function getInvoiceNumberSuggestion() {
        return _getInvoiceNumberSuggestion.apply(this, arguments);
      };
    }(),
    formatAmountValue: function formatAmountValue(amount) {
      if (!amount) return '';
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_4__["formatAmount"])(Number(amount));
    },
    sentenceCase: function sentenceCase(str) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_4__["sentenceCase"])(str);
    },
    utcToLocalDateTime: function utcToLocalDateTime(utcDatetime) {
      if (!utcDatetime) return "";
      return this.$dayjs.utc(utcDatetime).local().format("YYYY-MM-DD HH:mm");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PdfInvoice: function PdfInvoice() {
      return __webpack_require__.e(/*! import() */ 224).then(__webpack_require__.bind(null, /*! ./PdfInvoice.vue */ "./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue"));
    },
    EmailInvoice: function EmailInvoice() {
      return __webpack_require__.e(/*! import() */ 182).then(__webpack_require__.bind(null, /*! ./EmailInvoice.vue */ "./resources/js/src/views/pages/tripV2/components/Invoice/EmailInvoice.vue"));
    },
    PaymentPage: function PaymentPage() {
      return __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! ./PaymentPage.vue */ "./resources/js/src/views/pages/tripV2/components/Invoice/PaymentPage.vue"));
    }
  },
  name: 'PreviewInvoice',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('auth', ['user'])),
  props: {
    invoice: {
      type: Object,
      default: function _default() {}
    },
    editInvoiceData: {
      type: Object,
      default: function _default() {}
    },
    customFieldsPaymentOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isEditMode: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    showPaymentPage: function showPaymentPage() {
      if (!this.isEditMode) return false;

      if (this.user && this.user.admin_company_detail_id) {
        return _config_constants__WEBPACK_IMPORTED_MODULE_5__["default"].useAuthorizeNetForManualInvoice.includes(this.user.admin_company_detail_id);
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=template&id=aaadbe08&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=template&id=aaadbe08& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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

  return _c("div", {
    staticClass: "flex h-full"
  }, [_c("div", {
    staticClass: "w-1/2"
  }, [_c("edit-invoice-panel", {
    ref: "editInvoicPanel",
    attrs: {
      editInvoiceDetails: _vm.editInvoiceDetails,
      toggleAddNewInvoicePopup: _vm.toggleAddNewInvoicePopup
    },
    on: {
      submit: _vm.submitInvoice,
      customFieldsOptions: _vm.customFieldsOptions
    },
    model: {
      value: _vm.invoice,
      callback: function callback($$v) {
        _vm.invoice = $$v;
      },
      expression: "invoice"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-1/2 px-6"
  }, [_c("preview-invoice", {
    attrs: {
      invoice: _objectSpread({}, _vm.invoice, {
        invoiceId: _vm.invoiceId
      }),
      customFieldsPaymentOptions: _vm.customFieldsPaymentOptions,
      isEditMode: _vm.isEditType
    },
    on: {
      "payment-success": _vm.addNewPayment
    }
  })], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=template&id=7f9b83e3&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=template&id=7f9b83e3&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-2 pb-6"
  }, [_c("header", [_c("div", {
    staticClass: "vx-row flex justify-between items-end"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "vx-col flex"
  }, [_vm.checkStatus() ? _c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.saveAsDraft.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Save\n        ")]) : _vm._e(), _vm._v(" "), _vm.checkStatus() ? _c("vs-button", {
    staticClass: "ml-2",
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.issueInvoice.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Issue invoice\n        ")]) : _c("vs-button", {
    staticClass: "ml-2",
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.saveInvoice.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Save\n        ")])], 1)]), _vm._v(" "), _c("vs-divider")], 1), _vm._v(" "), _c("CustomerSelector", {
    attrs: {
      editInvoiceDetails: _vm.editInvoiceDetails
    },
    model: {
      value: _vm.customerInfo,
      callback: function callback($$v) {
        _vm.customerInfo = $$v;
      },
      expression: "customerInfo"
    }
  }), _vm._v(" "), _c("ItemBlock", {
    model: {
      value: _vm.items,
      callback: function callback($$v) {
        _vm.items = $$v;
      },
      expression: "items"
    }
  }), _vm._v(" "), _c("CustomFieldBlock", {
    attrs: {
      customFieldsData: _vm.customFields,
      items: _vm.items,
      toggleAddNewInvoicePopup: _vm.toggleAddNewInvoicePopup
    },
    on: {
      customFieldsUpdate: _vm.customFieldsUpdate,
      customFieldsOptions: _vm.customFieldsOptions
    }
  }), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-2"
  }, [_c("div", [_c("div", {
    staticClass: "vx-row flex justify-between items-end"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Notes")])])]), _vm._v(" "), _c("vs-divider")], 1), _vm._v(" "), _c("div", [_c("vue-editor", {
    attrs: {
      id: "invoice-vue-editor-style",
      editorOptions: _vm.editorOptions
    },
    model: {
      value: _vm.notes,
      callback: function callback($$v) {
        _vm.notes = $$v;
      },
      expression: "notes"
    }
  })], 1)]), _vm._v(" "), (_vm.invoicePayments || []).length ? _c("vx-card", {
    staticClass: "mt-2"
  }, [_c("div", [_c("div", {
    staticClass: "vx-row flex justify-between items-end"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Invoice Payments")])])]), _vm._v(" "), _c("vs-divider")], 1), _vm._v(" "), _c("div", [_c("DataTable", {
    attrs: {
      value: _vm.invoicePayments
    }
  }, [_c("Column", {
    attrs: {
      field: "transactionId",
      header: "Transaction #"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "amountPaid",
      header: "Amount Paid"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var amountPaid = _ref.data.amountPaid;
        return [_vm._v("\n            " + _vm._s("".concat(_vm.formatAmountValue(amountPaid))) + "\n          ")];
      }
    }], null, false, 2447850689)
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "status",
      header: "Status"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var status = _ref2.data.status;
        return [_vm._v("\n            " + _vm._s("".concat(_vm.sentenceCase(status))) + "\n          ")];
      }
    }], null, false, 1222508848)
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "last4Digits",
      header: "Card"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "utcDatetime",
      header: "Created Date"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var utcDatetime = _ref3.data.utcDatetime;
        return [_vm._v("\n            " + _vm._s("".concat(_vm.utcToLocalDateTime(utcDatetime))) + "\n          ")];
      }
    }], null, false, 2818315984)
  })], 1)], 1)]) : _vm._e()], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Invoice generator")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=template&id=3b0704a7&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=template&id=3b0704a7& ***!
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

  return _c("vs-tabs", {
    attrs: {
      alignment: "fixed"
    }
  }, [_c("vs-tab", {
    attrs: {
      label: "Invoice pdf"
    }
  }, [_c("div", [_c("pdf-invoice", {
    attrs: {
      invoice: _vm.invoice,
      editInvoiceData: _vm.editInvoiceData,
      customFieldsPaymentOptions: _vm.customFieldsPaymentOptions
    }
  })], 1)]), _vm._v(" "), _c("vs-tab", {
    attrs: {
      label: "Email"
    }
  }, [_c("div", [_c("email-invoice", {
    attrs: {
      invoice: _vm.invoice,
      customFieldsPaymentOptions: _vm.customFieldsPaymentOptions
    }
  })], 1)]), _vm._v(" "), _vm.showPaymentPage() ? _c("vs-tab", {
    attrs: {
      label: "Payment page"
    }
  }, [_c("div", [_c("payment-page", {
    attrs: {
      invoice: _vm.invoice
    },
    on: {
      "payment-success": function paymentSuccess($event) {
        return _vm.$emit("payment-success", $event);
      }
    }
  })], 1)]) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#invoice-vue-editor-style[data-v-7f9b83e3] {\n  height: 100%;\n}\n[data-v-7f9b83e3] #invoice-vue-editor-style {\n  height: 100%;\n}\n[data-v-7f9b83e3] .ql-editor.ql-blank {\n  resize: vertical;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddNewInvoice_vue_vue_type_template_id_aaadbe08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNewInvoice.vue?vue&type=template&id=aaadbe08& */ "./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=template&id=aaadbe08&");
/* harmony import */ var _AddNewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNewInvoice.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddNewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddNewInvoice_vue_vue_type_template_id_aaadbe08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddNewInvoice_vue_vue_type_template_id_aaadbe08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=template&id=aaadbe08&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=template&id=aaadbe08& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewInvoice_vue_vue_type_template_id_aaadbe08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewInvoice.vue?vue&type=template&id=aaadbe08& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/AddNewInvoice.vue?vue&type=template&id=aaadbe08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewInvoice_vue_vue_type_template_id_aaadbe08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewInvoice_vue_vue_type_template_id_aaadbe08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditInvoicePanel_vue_vue_type_template_id_7f9b83e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditInvoicePanel.vue?vue&type=template&id=7f9b83e3&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=template&id=7f9b83e3&scoped=true&");
/* harmony import */ var _EditInvoicePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditInvoicePanel.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditInvoicePanel_vue_vue_type_style_index_0_id_7f9b83e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditInvoicePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditInvoicePanel_vue_vue_type_template_id_7f9b83e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditInvoicePanel_vue_vue_type_template_id_7f9b83e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7f9b83e3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditInvoicePanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_style_index_0_id_7f9b83e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=style&index=0&id=7f9b83e3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_style_index_0_id_7f9b83e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_style_index_0_id_7f9b83e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_style_index_0_id_7f9b83e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_style_index_0_id_7f9b83e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=template&id=7f9b83e3&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=template&id=7f9b83e3&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_template_id_7f9b83e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditInvoicePanel.vue?vue&type=template&id=7f9b83e3&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/EditInvoicePanel.vue?vue&type=template&id=7f9b83e3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_template_id_7f9b83e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EditInvoicePanel_vue_vue_type_template_id_7f9b83e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreviewInvoice_vue_vue_type_template_id_3b0704a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreviewInvoice.vue?vue&type=template&id=3b0704a7& */ "./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=template&id=3b0704a7&");
/* harmony import */ var _PreviewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviewInvoice.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PreviewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreviewInvoice_vue_vue_type_template_id_3b0704a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PreviewInvoice_vue_vue_type_template_id_3b0704a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=template&id=3b0704a7&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=template&id=3b0704a7& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewInvoice_vue_vue_type_template_id_3b0704a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewInvoice.vue?vue&type=template&id=3b0704a7& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/PreviewInvoice.vue?vue&type=template&id=3b0704a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewInvoice_vue_vue_type_template_id_3b0704a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewInvoice_vue_vue_type_template_id_3b0704a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=93.js.map