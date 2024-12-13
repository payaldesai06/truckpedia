(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var dict = {
  custom: {
    totalHours: {
      required: 'Total hours is required',
      regex: 'Not a valid value'
    },
    totalMiles: {
      required: 'Total miles is required',
      regex: 'Not a valid value'
    },
    totalStops: {
      regex: 'Not a valid value'
    },
    detentionHours: {
      regex: 'Not a valid value'
    },
    layoverHours: {
      regex: 'Not a valid value'
    },
    basePayment: {
      required: 'Base payment is required',
      regex: 'Not a valid value'
    },
    reimbursement: {
      regex: 'Not a valid value'
    }
  }
}; // Register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_7__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LoadEdit',
  components: {
    Files: function Files() {
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @/components/files/Files */ "./resources/js/src/components/files/Files.vue"));
    },
    TableHeader: function TableHeader() {
      return __webpack_require__.e(/*! import() */ 184).then(__webpack_require__.bind(null, /*! ./TableView/TableHeader.vue */ "./resources/js/src/views/pages/tripV2/components/TableView/TableHeader.vue"));
    },
    FileUploadPrompt: function FileUploadPrompt() {
      return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! @/components/files/FileUploadPrompt */ "./resources/js/src/components/files/FileUploadPrompt.vue"));
    },
    LoadTemplate: function LoadTemplate() {
      return Promise.all(/*! import() */[__webpack_require__.e(15), __webpack_require__.e(55)]).then(__webpack_require__.bind(null, /*! ./LoadTemplate */ "./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue"));
    },
    TripTemplate: function TripTemplate() {
      return Promise.all(/*! import() */[__webpack_require__.e(15), __webpack_require__.e(185)]).then(__webpack_require__.bind(null, /*! ./TripTemplate */ "./resources/js/src/views/pages/tripV2/components/TripTemplate.vue"));
    }
  },
  props: {
    recordId: {
      type: Number,
      default: null
    },
    showCloseButton: {
      type: Boolean,
      default: true
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('load', ['getFuelPrice']), {
    tripId: function tripId() {
      return this.trip.tripId;
    },
    tripNumber: function tripNumber() {
      return "#".concat(this.trip.tripNumber);
    },
    isApproved: function isApproved() {
      return this.trip.status === 'approved' || this.trip.status === 'paid';
    },
    loadPayment: function loadPayment() {
      var total = 0;

      if (this.driverPayType === 'template') {
        this.loads.forEach(function (load) {
          ((load || {}).loadTemplate || []).forEach(function (template) {
            if (template.payment) {
              total += parseFloat(template.payment);
            }
          });
        });
      } else {
        if (this.tripPaymentTotalAmount || this.loadPaymentTotalAmount) {
          return parseFloat(Number(this.loadPaymentTotalAmount) + Number(this.tripPaymentTotalAmount)).toFixed(2);
        }

        if (this.driverDetails) {
          total = parseFloat(this.driverDetails.perMileCharge) * parseFloat(this.driverDetails.totalMiles) || 0 + parseFloat(this.driverDetails.emptyDistanceRate) || 0 * parseFloat(this.driverDetails.totalEmptyDistance) || 0;
        }

        total = total >= 0 ? total : 0;
      }

      return parseFloat(total).toFixed(2);
    },
    stopPayment: function stopPayment() {
      var total = 0;

      if (this.driverDetails && this.driverDetails.totalStops && this.driverDetails.totalStops > 0) {
        total = this.driverDetails.stopRate * (parseFloat(this.driverDetails.totalStops).toFixed(0) - this.driverDetails.stopPayStartAfter);
      }

      total = total >= 0 ? total : 0;
      return parseFloat(total).toFixed(2);
    },
    detentionPayment: function detentionPayment() {
      var total = 0;

      if (this.driverDetails && this.driverDetails.detentionHours && this.driverDetails.detentionHours > 0) {
        total = this.driverDetails.detentionRate * (this.driverDetails.detentionHours - this.driverDetails.detentionPayStartAfter);
      }

      total = total >= 0 ? total : 0;
      return parseFloat(total).toFixed(2);
    },
    layoverPayment: function layoverPayment() {
      var total = 0;

      if (this.driverDetails && this.driverDetails.layoverHours && this.driverDetails.layoverHours > 0) {
        total = this.driverDetails.layoverRate * (this.driverDetails.layoverHours - this.driverDetails.layoverPayStartAfter);
      }

      total = total >= 0 ? total : 0;
      return parseFloat(total).toFixed(2);
    },
    hourlyPayment: function hourlyPayment() {
      var total = 0;

      if (this.driverDetails && this.driverDetails.totalHours && this.driverDetails.totalHours > 0) {
        total = this.driverDetails.hourlyRate * this.driverDetails.totalHours;
      }

      total = total >= 0 ? total : 0;
      return parseFloat(total).toFixed(2);
    },
    getHeaders: function getHeaders() {
      var _this = this;

      return this.headers.map(function (header) {
        var checkForValues = ['driverArrivalDateTime2', 'driverDepartureDateTime2'];

        if (header.isVisible && header.type === 'dateTime') {
          header.name = header.name.replace('Time', '');
        }

        header.keys.forEach(function (key) {
          header.isVisible = checkForValues.includes(key) ? _this.loads.some(function (load) {
            return load.stops.find(function (item) {
              return item[key];
            });
          }) : true;
        });
        return header;
      }).filter(function (header) {
        return header.isVisible;
      });
    },
    driverPayType: function driverPayType() {
      return this.isApproved ? (this.trip || {}).driverPayType || 'flat' : (this.driverDefaultPayType || {}).defaultPayType || 'flat'; // flat is to be the fall back pay type
    },
    submitButtonText: function submitButtonText() {
      return this.trip.status === 'approved' ? 'Re-Approve' : this.trip.status === 'paid' ? 'Re-Approve Paid Trip' : 'Approve';
    },
    ratePerMile: function ratePerMile() {
      if (!this.totalLoadedMiles) {
        return 0;
      }

      return (this.totalLoadTotalRate / this.totalLoadedMiles).toFixed(2) || 0;
    },
    profitPerMile: function profitPerMile() {
      if (!this.totalLoadedMiles) {
        return 0;
      }

      return (this.calculateProfit() / this.totalLoadedMiles || 0).toFixed(2) || 0;
    }
  }),
  data: function data() {
    return {
      loadTemplate: [],
      tripTemplate: [],
      tripsTemplateFields: [],
      isLoading: false,
      trip: null,
      payeeType: null,
      earliestStartDate: null,
      latestEndDate: null,
      tripDriverName: null,
      profitLossData: [],
      totalLoadTotalRate: 0,
      totalLoadedMiles: 0,
      loads: [],
      driverDefaultPayType: null,
      driverDetails: null,
      regexNumber: /^\d*\.?\d*$/,
      payTypeKeys: {
        hauling_fees: 'haulingFees',
        total_income: 'totalIncome',
        hauling_plus_fuel_surcharge: 'haulingPlusFuelSurcharge'
      },
      customPayment: [],
      addNewCustomPaymentOptionPopup: false,
      customFeildName: '',
      customFeildDescription: '',
      customPaymentOption: [{
        fieldId: null,
        name: 'Add new',
        description: ''
      }],
      isFileUploadPromptVisible: false,
      fileInput: null,
      isAnyPromptsActive: false,
      headers: [{
        id: 1,
        name: 'Name',
        type: 'text',
        keys: ['name'],
        isVisible: true
      }, {
        id: 2,
        name: 'Type',
        type: 'singleSelect',
        keys: ['type'],
        isVisible: true
      }, {
        id: 3,
        name: 'Appointment Time',
        type: 'dateTime',
        keys: ['date', 'time'],
        isVisible: true
      }, {
        id: 4,
        name: 'Address',
        type: 'text',
        keys: ['address', 'city', 'state'],
        isVisible: true
      }, {
        id: 5,
        name: 'Arrival Time',
        type: 'dateTime',
        keys: ['driverArrivalDateTime'],
        isVisible: true
      }, {
        id: 6,
        name: 'Departure Time',
        type: 'dateTime',
        keys: ['driverDepartureDateTime'],
        isVisible: true
      }, {
        id: 7,
        name: 'Arrival Time 2',
        type: 'dateTime',
        keys: ['driverArrivalDateTime2'],
        isVisible: true
      }, {
        id: 8,
        name: 'Departure Time 2',
        type: 'dateTime',
        keys: ['driverDepartureDateTime2'],
        isVisible: true
      }],
      tripPaymentTotalAmount: null,
      loadPaymentTotalAmount: null,
      payTemplateCustomFields: null,
      initLoadTemplateData: {},
      initTripTemplateData: [],
      loadTemplateFieldsOptions: []
    };
  },
  created: function created() {
    this.init();
    this.getPublicWeeklyFuelPrices();
  },
  // mounted() {
  //   this.getCustomFields();
  // },
  methods: {
    loadTemplateFields: function loadTemplateFields(options) {
      this.loadTemplateFieldsOptions = options;
    },
    getPublicWeeklyFuelPrices: function getPublicWeeklyFuelPrices() {
      this.$store.dispatch('load/getPublicWeeklyFuelPrices');
    },
    isCustomFieldPopupOpenOrNot: function isCustomFieldPopupOpenOrNot(val) {
      var _this2 = this;

      setTimeout(function () {
        // Necessary to avoid the Sidebar from closing when the popup is opened
        _this2.isAnyPromptsActive = val;
      }, 100);
    },
    getCustomFields: function getCustomFields() {
      var _this3 = this;

      this.$store.dispatch('driverPayTemplates/getCustomFields').then(function (data) {
        _this3.payTemplateCustomFields = data;
        _this3.tripsTemplateFields = data.tripFields;
      });
    },
    totalPayment: function totalPayment() {
      var _this4 = this;

      var grandTotal = 0;

      if (this.driverPayType === 'template') {
        this.loads.forEach(function (load) {
          ((load || {}).loadTemplate || []).forEach(function (template) {
            if (template.payment) {
              grandTotal += parseFloat(template.payment);
            }
          });
        });
        this.tripTemplate.forEach(function (template) {
          if (template.payment) {
            grandTotal += parseFloat(template.payment);
          }
        });
      } else {
        var reimbursement = this.driverDetails.reimbursement ? this.driverDetails.reimbursement : 0;

        if (this.driverDetails.payType === 'perMile') {
          grandTotal = Number(this.loadPayment) + Number(this.stopPayment) + Number(this.detentionPayment) + Number(this.layoverPayment) + Number(reimbursement);
        } else if (this.driverDetails.payType === 'hourly') {
          grandTotal = Number(this.hourlyPayment) + Number(reimbursement);
        } else if (this.driverDetails.payType === 'percentage') {
          var loadKeys = {
            haulingFees: 'loadHaulingFees',
            totalIncome: 'loadTotalRate',
            haulingPlusFuelSurcharge: ['loadHaulingFees', 'loadFuelSurcharge']
          };
          var loadAmount = {
            total: 0
          };
          var total = this.trip.loads.reduce(function (acc, load) {
            if (loadKeys[_this4.driverDetails.payPercentageOf]) {
              var keys = loadKeys[_this4.driverDetails.payPercentageOf];

              if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isArray"])(keys)) {
                var _total = (load[keys[0]] || 0) + (load[keys[1]] || 0);

                loadAmount.total += _total;
                return acc + _total * parseFloat(_this4.driverDetails.payPercentage) / 100;
              }

              loadAmount.total += load[keys] || 0;
              return acc + parseFloat(load[keys]) * parseFloat(_this4.driverDetails.payPercentage) / 100;
            }
          }, 0);
          grandTotal = this.driverDetails.basePayment === null ? total : this.driverDetails.basePayment;
          if (this.driverDetails.basePayment === null && this.driverDetails.basePayment !== grandTotal) this.assignBasePayment(grandTotal);
          this.assignPercentageLoadAmount(loadAmount.total);
          grandTotal = Number(grandTotal) + Number(reimbursement);
        } else {
          if (this.driverDetails.payType === 'flat' && this.driverDetails.basePayment === null) {
            this.assignBasePayment(parseFloat(this.driverDetails.flatPayRate));
          }

          grandTotal = Number(this.driverDetails.basePayment) + Number(reimbursement);
        }

        if (this.customPayment.length > 0) {
          var _total2 = this.customPayment.reduce(function (acc, curr) {
            return acc + Number(curr.payment);
          }, 0);

          if (!isNaN(_total2)) {
            grandTotal = grandTotal + _total2;
          }
        }
      }

      return !isNaN(grandTotal) ? Number(grandTotal).toFixed(2) : 0;
    },
    acceptCustomPaymentPrompt: function acceptCustomPaymentPrompt() {
      var _this5 = this;

      this.$vs.loading();
      var payload = {
        name: this.customFeildName,
        description: this.customFeildDescription
      };
      this.$store.dispatch('tripV2/customPaymentFieldCreate', payload).then(function () {
        _this5.customPaymentOption = [{
          fieldId: null,
          name: 'Add new',
          description: ''
        }];

        _this5.getCustomPaymentOptions();

        _this5.$vs.notify({
          color: 'primary',
          title: 'Add custom payment',
          text: 'Add custom payment successfully.'
        });
      }).catch(function (error) {
        _this5.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: _this5.getErrorMsg(error)
        });
      }).finally(function () {
        _this5.$vs.loading.close();
      });
    },
    closeCustomPaymentPrompt: function closeCustomPaymentPrompt() {
      this.addNewCustomPaymentOptionPopup = false;
    },
    handleCustomPayment: function handleCustomPayment(id) {
      if (id === null) {
        this.addNewCustomPaymentOptionPopup = true;
      }
    },
    removeCustomPayment: function removeCustomPayment(index) {
      this.customPayment.splice(index, 1);
    },
    addCustomPayment: function addCustomPayment() {
      this.customPayment.push({});
    },
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.isLoading = true;
                this.$vs.loading();
                _context.next = 5;
                return this.getCustomFields();

              case 5:
                _context.next = 7;
                return this.getTrip();

              case 7:
                this.getCustomPaymentOptions();
                _context.next = 12;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);

              case 12:
                _context.prev = 12;
                this.isLoading = false;
                this.$vs.loading.close();
                return _context.finish(12);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10, 12, 16]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    getCustomPaymentOptions: function getCustomPaymentOptions() {
      var _this6 = this;

      this.$store.dispatch('tripV2/customPaymentGetField').then(function (_ref) {
        var data = _ref.data;
        data.payload.fields.forEach(function (item) {
          _this6.customPaymentOption.unshift(item);
        });
      });
    },
    isFormValid: function () {
      var _isFormValid = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$validator.validateAll();

              case 2:
                return _context2.abrupt("return", this.errors.items.length === 0);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function isFormValid() {
        return _isFormValid.apply(this, arguments);
      };
    }(),
    // Form Submit
    submit: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        var _this7 = this;

        var formValid, _this$driverDetails, payType, reimbursement, payPercentage, payPercentageOf, payPercentageLoadAmount, basePayment, hourlyRate, totalHours, stopRate, totalStops, layoverRate, layoverHours, detentionRate, totalMiles, detentionHours, emptyDistanceRate, stopPayStartAfter, perMileCharge, totalEmptyDistance, layoverPayStartAfter, detentionPayStartAfter, payload, objName, loadDetails, firstStopDatePrice, tripDetails;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.isFormValid();

              case 2:
                formValid = _context3.sent;

                if (formValid) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                _this$driverDetails = this.driverDetails, payType = _this$driverDetails.payType, reimbursement = _this$driverDetails.reimbursement, payPercentage = _this$driverDetails.payPercentage, payPercentageOf = _this$driverDetails.payPercentageOf, payPercentageLoadAmount = _this$driverDetails.payPercentageLoadAmount, basePayment = _this$driverDetails.basePayment, hourlyRate = _this$driverDetails.hourlyRate, totalHours = _this$driverDetails.totalHours, stopRate = _this$driverDetails.stopRate, totalStops = _this$driverDetails.totalStops, layoverRate = _this$driverDetails.layoverRate, layoverHours = _this$driverDetails.layoverHours, detentionRate = _this$driverDetails.detentionRate, totalMiles = _this$driverDetails.totalMiles, detentionHours = _this$driverDetails.detentionHours, emptyDistanceRate = _this$driverDetails.emptyDistanceRate, stopPayStartAfter = _this$driverDetails.stopPayStartAfter, perMileCharge = _this$driverDetails.perMileCharge, totalEmptyDistance = _this$driverDetails.totalEmptyDistance, layoverPayStartAfter = _this$driverDetails.layoverPayStartAfter, detentionPayStartAfter = _this$driverDetails.detentionPayStartAfter;
                payload = {
                  tripId: this.recordId,
                  driverPayType: payType,
                  loadPayment: this.loadPayment,
                  reimbursement: reimbursement ? parseFloat(reimbursement).toFixed(2) : null,
                  additionalCustomPayments: null,
                  totalPayment: this.totalPayment(),
                  notes: this.trip.notes
                };
                objName = {
                  perMile: 'payMileDetails',
                  hourly: 'payHourlyDetails',
                  percentage: 'payPercentageDetails',
                  template: 'payTemplateDetails'
                };

                if (payload.driverPayType === 'percentage') {
                  payload[objName[payload.driverPayType]] = {
                    payPercentage: payPercentage,
                    payPercentageOf: payPercentageOf,
                    payPercentageLoadAmount: payPercentageLoadAmount
                  };
                  payload.loadPayment = basePayment;
                } else if (payload.driverPayType === 'hourly') {
                  payload[objName[payload.driverPayType]] = {
                    hourlyRate: hourlyRate,
                    totalHours: parseFloat(totalHours).toFixed(2)
                  };
                  payload.loadPayment = this.hourlyPayment;
                } else if (payload.driverPayType === 'perMile') {
                  payload[objName[payload.driverPayType]] = {
                    stopRate: stopRate,
                    stopCount: totalStops ? parseFloat(totalStops).toFixed(0) : null,
                    layoverRate: layoverRate,
                    stopPayment: this.stopPayment,
                    layoverInHours: layoverHours ? parseFloat(layoverHours).toFixed(2) : null,
                    detentionRate: detentionRate,
                    layoverPayment: this.layoverPayment,
                    totalLoadedDistance: parseFloat(totalMiles).toFixed(2),
                    detentionInHours: detentionHours ? parseFloat(detentionHours).toFixed(2) : null,
                    detentionPayment: this.detentionPayment,
                    emptyDistanceRate: emptyDistanceRate,
                    stopPayStartAfter: stopPayStartAfter,
                    loadedDistanceRate: perMileCharge,
                    totalEmptyDistance: totalEmptyDistance,
                    layoverPayStartAfter: layoverPayStartAfter,
                    detentionPayStartAfter: detentionPayStartAfter
                  };
                } else if (payload.driverPayType === 'flat' || payload.driverPayType === null) {
                  payload.loadPayment = basePayment;
                } else if (payload.driverPayType === 'template') {
                  loadDetails = [];
                  firstStopDatePrice = null;
                  this.loads.forEach(function (load, index) {
                    if (index === 0) {
                      console.log(_this7.getFuelPrice(load.stops[0][0].date));

                      var fuelPrice = _this7.getFuelPrice(load.stops[0][0].date);

                      firstStopDatePrice = fuelPrice !== null ? fuelPrice : null;
                    }

                    load.loadTemplate.forEach(function (item) {
                      var obj = {
                        loadId: load.loadId,
                        fieldId: item.fieldId,
                        payment: item.payment,
                        qty: item.quantity,
                        type: item.type,
                        comment: item.comment,
                        tripTemplatePayDetailId: item.tripTemplatePayDetailId || null
                      };

                      if (item.hasOwnProperty('rate') && item.rate !== null) {
                        obj.rate = item.rate;
                      }

                      if (item.hasOwnProperty('payStartAfter') && item.payStartAfter !== null) {
                        obj.payStartAfter = item.payStartAfter;
                      }

                      if (item.hasOwnProperty('percentage') && item.percentage !== null) {
                        obj.percentage = item.percentage;
                      }

                      if (item.type === 'formulaLoadedMiles' || item.type === 'formulaEmptyMiles') {
                        obj.v1 = item.v1 === firstStopDatePrice || !item.v1 ? firstStopDatePrice : item.v1;
                        obj.v2 = item.v2;
                        obj.v3 = item.v3;
                        console.log('v1', item.v1);
                        console.log('v2', item.v2);
                        console.log('v3', item.v3);
                      }

                      loadDetails.push(obj);
                    });
                  });
                  tripDetails = this.tripTemplate.map(function (item) {
                    return {
                      fieldId: item.fieldId,
                      payment: item.payment,
                      qty: item.quantity,
                      rate: item.rate,
                      type: item.type,
                      comment: item.comment,
                      tripTemplatePayDetailId: item.tripTemplatePayDetailId || null
                    };
                  });
                  payload[objName[payload.driverPayType]] = {
                    loadDetails: loadDetails,
                    tripDetails: tripDetails
                  };
                }

                payload.additionalCustomPayments = this.customPayment.map(function (x) {
                  return _objectSpread({}, x, {
                    customPaymentId: x.id || null
                  });
                });
                this.$vs.loading();
                _context3.prev = 11;
                _context3.next = 14;
                return this.$store.dispatch('tripV2/approveTrip', payload);

              case 14:
                this.$emit('closeSidebar', true);
                this.$vs.notify({
                  color: 'primary',
                  title: 'Trip Payment Approved',
                  text: 'Trip payment approved successfully.'
                });
                _context3.next = 21;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](11);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context3.t0)
                });

              case 21:
                _context3.prev = 21;
                this.$vs.loading.close();
                return _context3.finish(21);

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[11, 18, 21, 24]]);
      }));

      return function submit() {
        return _submit.apply(this, arguments);
      };
    }(),
    getPayType: function getPayType(type) {
      return this.payTypeKeys[type] || type;
    },
    initDriverDetailsObject: function initDriverDetailsObject() {
      var _this8 = this;

      this.driverDetails = {
        id: this.trip.driverUserId,
        payType: this.isApproved ? this.trip.driverPayType || 'flat' : this.driverDefaultPayType.defaultPayType || 'flat',
        hourlyRate: this.isApproved && this.trip.hourlyRate ? parseFloat(this.trip.hourlyRate).toFixed(2) || null : this.driverDefaultPayType.hourlyRate || null,
        totalHours: parseFloat(this.trip.totalHours) || null,
        reimbursement: this.trip.reimbursement || null,
        totalPayment: this.trip.totalPayment || null,
        totalStops: this.isApproved ? this.trip.stopCount : null,
        stopPayment: this.trip.stopPayment || null,
        stopRate: this.isApproved ? parseFloat(this.trip.stopRate) || null : parseFloat(this.driverDefaultPayType.payPerStopRate) || null,
        stopPayStartAfter: this.isApproved ? this.trip.stopPayStartAfter || null : this.driverDefaultPayType.payPerStopStartAfter || null,
        detentionHours: this.isApproved ? this.trip.detentionInHours : null,
        detentionPayment: this.trip.detentionPayment || null,
        detentionPayStartAfter: this.isApproved ? this.trip.detentionPayStartAfter || null : this.driverDefaultPayType.detentionStartAfter || null,
        detentionRate: this.isApproved ? parseFloat(this.trip.detentionRate) || null : parseFloat(this.driverDefaultPayType.detentionRate) || null,
        layoverHours: this.isApproved ? this.trip.layoverInHours : null,
        layoverPayment: this.trip.layoverPayment || null,
        layoverPayStartAfter: this.isApproved ? this.trip.layoverPayStartAfter || null : this.driverDefaultPayType.layoverStartAfter || null,
        layoverRate: this.isApproved ? parseFloat(this.trip.layoverRate) || null : parseFloat(this.driverDefaultPayType.layoverRate) || null,
        payPercentageOf: this.isApproved ? this.getPayType(this.trip.payPercentageOf) : this.getPayType(this.driverDefaultPayType.loadPayPercentageOf),
        payPercentage: this.isApproved && this.trip.payPercentage ? parseFloat(this.trip.payPercentage).toFixed(2) || null : this.driverDefaultPayType.loadPayPercentage || null,
        payPercentageLoadAmount: this.isApproved ? this.trip.payPercentageLoadAmount || 0 : 0,
        perMileCharge: this.isApproved && this.trip.loadedDistanceRate ? parseFloat(this.trip.loadedDistanceRate).toFixed(2) || null : this.driverDefaultPayType.perMileCharge || null,
        totalMiles: this.trip.totalLoadedDistance ? parseFloat(this.trip.totalLoadedDistance).toFixed(2) : null,
        loadPayment: this.isApproved ? this.trip.loadPayment || null : 0,
        loadedDistanceRate: this.trip.loadedDistanceRate ? this.trip.loadedDistanceRate : null,
        emptyDistanceRate: this.trip.emptyDistanceRate ? this.trip.emptyDistanceRate : null,
        totalEmptyDistance: this.trip.totalEmptyDistance ? parseFloat(this.trip.totalEmptyDistance) : null,
        flatPayRate: this.driverDefaultPayType && this.driverDefaultPayType.flatPayRate ? parseFloat(this.driverDefaultPayType.flatPayRate).toFixed(2) : null,
        basePayment: this.isApproved ? this.trip.loadPayment || null : null,
        driverPayTemplate: this.isApproved && this.trip.driverPayType === 'template' ? this.trip.payTemplateDetails : this.driverDefaultPayType.defaultPayType === 'template' ? this.driverDefaultPayType.driverPayTemplate : null
      };

      if (this.driverDetails.payType === 'template') {
        this.initLoadTemplateData = {};
        this.loads.forEach(function (load) {
          _this8.initLoadTemplateData[load.loadId] = _this8.driverDetails.driverPayTemplate.loadDetails;

          if (_this8.trip.payTemplateDetails && _this8.trip.payTemplateDetails.loadDetails && _this8.trip.payTemplateDetails.loadDetails.length > 0) {
            var loadDetails = _this8.trip.payTemplateDetails.loadDetails.filter(function (e) {
              return e.loadId === load.loadId;
            });

            if (loadDetails.length > 0) {
              _this8.initLoadTemplateData[load.loadId] = loadDetails;
            }
          }
        });
        /*
        this.initLoadTemplateData = (this.trip.payTemplateDetails && this.trip.payTemplateDetails.loadDetails && this.trip.payTemplateDetails.loadDetails.length > 0)
          ? this.trip.payTemplateDetails.loadDetails
          : this.driverDetails.driverPayTemplate.loadDetails;
        */

        this.initTripTemplateData = this.driverDetails.driverPayTemplate.tripDetails;
      }
    },
    getTrip: function () {
      var _getTrip = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4() {
        var _this9 = this;

        var _ref2, payload, loads, dates, allDates;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.$vs.loading();
                _context4.next = 4;
                return this.$store.dispatch('tripV2/fetchTripById', this.recordId);

              case 4:
                _ref2 = _context4.sent;
                payload = _ref2.data.payload;

                if (payload) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return");

              case 8:
                if (payload && !Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(payload.trip)) {
                  this.trip = payload.trip;
                  this.driverDefaultPayType = payload.driverDefaultPayType || {};
                  loads = payload.trip.loads.map(function (load) {
                    return _objectSpread({}, load, {
                      isCollapsed: false
                    });
                  });
                  this.loads = loads && loads.length > 1 ? this.sortLoadsByDateTime(loads) : loads;
                  this.customPayment = payload.trip.additionalCustomPayments;
                  this.loads = this.loads.map(function (load) {
                    var stops = _this9.getFormattedStops(load.stops);

                    return _objectSpread({}, load, {
                      stops: stops
                    });
                  });
                  this.initDriverDetailsObject();

                  if (payload.type == 'companyDriver') {
                    dates = payload.trip.loads.map(function (load) {
                      return {
                        loadStartDate: load.loadStartDate,
                        loadEndDate: load.loadEndDate
                      };
                    });
                    allDates = [];
                    dates.forEach(function (date) {
                      allDates.push(date.loadStartDate, date.loadEndDate);
                    });
                    allDates.sort(function (a, b) {
                      return a - b;
                    });
                    this.earliestStartDate = allDates[0];
                    this.latestEndDate = allDates[allDates.length - 1];
                    this.tripDriverName = payload.trip.driverName;
                    this.payeeType = payload.type;
                    this.totalLoadTotalRate = this.trip.loads.reduce(function (total, load) {
                      return parseFloat(total) + parseFloat(load.loadTotalRate);
                    }, 0);
                    this.totalLoadedMiles = this.trip.loads.reduce(function (total, load) {
                      return parseFloat(total) + (parseFloat(load.loadedDistance) + parseFloat(load.emptyDistance));
                    }, 0);
                    this.fetchData();
                  }
                }

                _context4.next = 15;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context4.t0)
                });
                this.$emit('closeSidebar');

              case 15:
                _context4.prev = 15;
                this.$vs.loading.close();
                return _context4.finish(15);

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11, 15, 18]]);
      }));

      return function getTrip() {
        return _getTrip.apply(this, arguments);
      };
    }(),
    fetchData: function () {
      var _fetchData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5() {
        var pageSize,
            currentPage,
            filterParams,
            res,
            _args5 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                pageSize = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 50;
                currentPage = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 1;
                _context5.prev = 2;
                filterParams = {
                  page: currentPage,
                  pageSize: pageSize,
                  fields: ['date', 'amount', 'product'],
                  startDate: this.earliestStartDate,
                  endDate: this.latestEndDate,
                  driverName: this.tripDriverName
                };
                _context5.next = 6;
                return this.$store.dispatch('accounting/getFuelExpenses', filterParams);

              case 6:
                res = _context5.sent;
                this.profitLossData = res.data.payload;
                _context5.next = 14;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](2);
                _context5.next = 14;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context5.t0)
                });

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 10]]);
      }));

      return function fetchData() {
        return _fetchData.apply(this, arguments);
      };
    }(),
    calculateProfit: function calculateProfit() {
      var revenue = this.totalLoadTotalRate || 0;
      var driverPayment = this.totalPayment() || 0;
      var fuelExpenses = (this.profitLossData.fuelExpenses || []).reduce(function (total, expense) {
        return parseFloat(total) + parseFloat(expense.amount || 0);
      }, 0);
      var profit = revenue - driverPayment - fuelExpenses;
      return profit || 0;
    },
    assignBasePayment: function assignBasePayment(value) {
      if (value) this.driverDetails.basePayment = parseFloat(value).toFixed(2);
    },
    assignPercentageLoadAmount: function assignPercentageLoadAmount(value) {
      if (value) this.driverDetails.payPercentageLoadAmount = parseFloat(value).toFixed(2);
    },
    sentenceCase: function sentenceCase(str) {
      var message = {
        haulingFees: 'hauling fees',
        totalIncome: 'total amount',
        haulingPlusFuelSurcharge: 'hauling fee and fuel surcharge'
      };
      return "".concat(message[str], " $").concat(this.driverDetails.payPercentageLoadAmount) || "".concat(str, " $").concat(this.driverDetails.payPercentageLoadAmount);
    },
    dragNdrop: function dragNdrop(event, tripId) {
      var files = event.target.files;
      var filesHolder = [];

      for (var i = 0; i < files.length; i++) {
        filesHolder.push(files[i]);
      }

      this.uploadFiles(filesHolder);
    },
    drop: function drop(tripId) {
      document.getElementById(tripId).classList = 'drag-box';
    },
    dragLeave: function dragLeave(tripId) {
      document.getElementById(tripId).classList = 'drag-box';
    },
    dragEnter: function dragEnter(tripId) {
      document.getElementById(tripId).classList = 'drag-box draging';
    },
    toggleFileUploadPrompt: function toggleFileUploadPrompt() {
      this.isFileUploadPromptVisible = !this.isFileUploadPromptVisible;
    },
    deleteFile: function () {
      var _deleteFile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee6(data) {
        var fileId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                fileId = ((data || {}).file || {}).fileId;
                _context6.next = 4;
                return this.$store.dispatch('tripV2/deleteFile', {
                  tripId: this.tripId,
                  files: [{
                    fileId: fileId
                  }]
                });

              case 4:
                this.removeFileData(fileId);
                this.$vs.notify({
                  time: 2000,
                  color: 'success',
                  title: 'File Deleted',
                  text: 'File deleted successfully'
                });
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context6.t0)
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      return function deleteFile(_x) {
        return _deleteFile.apply(this, arguments);
      };
    }(),
    getFileExtension: function getFileExtension(files) {
      var fileExtension = files.map(function (file) {
        var extension = file.name.split('.').pop();
        return {
          extension: extension
        };
      });
      return fileExtension;
    },
    generateS3NameAndURL: function () {
      var _generateS3NameAndURL = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee7(files) {
        var allFiles, _ref3, _ref3$data, result, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;

                if (!(files.length === 0)) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return");

              case 3:
                _context7.next = 5;
                return this.getFileExtension(files);

              case 5:
                allFiles = _context7.sent;
                _context7.next = 8;
                return this.$store.dispatch('tripV2/getUploadUrl', {
                  tripId: this.tripId,
                  files: allFiles
                });

              case 8:
                _ref3 = _context7.sent;
                _ref3$data = _ref3.data;
                result = _ref3$data.result;
                payload = _ref3$data.payload;
                return _context7.abrupt("return", result && payload ? payload : []);

              case 15:
                _context7.prev = 15;
                _context7.t0 = _context7["catch"](0);

              case 17:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 15]]);
      }));

      return function generateS3NameAndURL(_x2) {
        return _generateS3NameAndURL.apply(this, arguments);
      };
    }(),
    uploadAttachmentsToS3: function () {
      var _uploadAttachmentsToS = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee8(s3FileNameAndURL, files) {
        var attachments, i, _s3FileNameAndURL$i, storageFileName, url, file, _ref4, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.$vs.loading();
                _context8.prev = 1;

                if (!s3FileNameAndURL) {
                  _context8.next = 17;
                  break;
                }

                attachments = [];
                i = 0;

              case 5:
                if (!(i < s3FileNameAndURL.length)) {
                  _context8.next = 16;
                  break;
                }

                _s3FileNameAndURL$i = s3FileNameAndURL[i], storageFileName = _s3FileNameAndURL$i.storageFileName, url = _s3FileNameAndURL$i.url;
                file = files[i];
                _context8.next = 10;
                return this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
                  url: url,
                  file: file,
                  extension: storageFileName.split('.').pop()
                });

              case 10:
                _ref4 = _context8.sent;
                status = _ref4.status;
                if (status === 200) attachments.push({
                  storageFileName: storageFileName,
                  originalFileName: file.name
                });

              case 13:
                i++;
                _context8.next = 5;
                break;

              case 16:
                return _context8.abrupt("return", attachments);

              case 17:
                _context8.next = 21;
                break;

              case 19:
                _context8.prev = 19;
                _context8.t0 = _context8["catch"](1);

              case 21:
                _context8.prev = 21;
                this.$vs.loading.close();
                return _context8.finish(21);

              case 24:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 19, 21, 24]]);
      }));

      return function uploadAttachmentsToS3(_x3, _x4) {
        return _uploadAttachmentsToS.apply(this, arguments);
      };
    }(),
    uploadFiles: function () {
      var _uploadFiles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee9(files) {
        var s3FileNameAndURL, attachments, payload, _ref5, trip;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (files && files.length > 0) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt("return");

              case 2:
                this.isFileUploadPromptVisible = false;
                _context9.prev = 3;
                _context9.next = 6;
                return this.generateS3NameAndURL(files);

              case 6:
                s3FileNameAndURL = _context9.sent;
                _context9.next = 9;
                return this.uploadAttachmentsToS3(s3FileNameAndURL, files);

              case 9:
                _context9.t0 = _context9.sent;

                if (_context9.t0) {
                  _context9.next = 12;
                  break;
                }

                _context9.t0 = [];

              case 12:
                attachments = _context9.t0;
                payload = {
                  tripId: parseInt(this.tripId),
                  files: attachments
                };
                _context9.next = 16;
                return this.$store.dispatch('tripV2/uploadFiles', payload);

              case 16:
                _context9.next = 18;
                return this.$store.dispatch('tripV2/fetchTripById', this.recordId);

              case 18:
                _ref5 = _context9.sent;
                trip = _ref5.data.payload.trip;

                if (trip !== undefined) {
                  this.trip.files = trip.files;
                }

                _context9.next = 26;
                break;

              case 23:
                _context9.prev = 23;
                _context9.t1 = _context9["catch"](3);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context9.t1)
                });

              case 26:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[3, 23]]);
      }));

      return function uploadFiles(_x5) {
        return _uploadFiles.apply(this, arguments);
      };
    }(),
    getErrorMsg: function getErrorMsg(error) {
      return error && error.response && error.response.data && error.response.data.message ? error.response.data.message : 'Something went wrong';
    },
    removeFileData: function removeFileData(fileId) {
      var files = this.trip.files.filter(function (file) {
        return file.fileId !== fileId;
      });
      this.$set(this.trip, 'files', files);
    },
    sortLoadsByDateTime: function sortLoadsByDateTime(loads) {
      return loads.sort(function (a, b) {
        var aDate = new Date("".concat(a.loadStartDate, " ").concat(a.loadStartTime || '00:00:00')).getTime();
        var bDate = new Date("".concat(b.loadStartDate, " ").concat(b.loadStartTime || '00:00:00')).getTime();
        return aDate - bDate;
      });
    },
    trimSeconds: function trimSeconds(dateTime) {
      if (this.$dayjs(dateTime).isValid()) {
        var date = dateTime.split(' ')[0];
        dateTime = "".concat(this.$dayjs(date).format('MM/DD/YY'), " ").concat(dateTime.split(' ')[1]);
      }

      return dateTime.split(':').slice(0, 2).join(':');
    },
    getFormattedStops: function getFormattedStops(stops) {
      var _this10 = this;

      var result = [];
      stops.forEach(function (stop) {
        var acc = [];

        _this10.getHeaders.forEach(function (header) {
          var textValue = header.keys.reduce(function (acc, key) {
            var separateByComma = ['address', 'city'];
            return "".concat(acc).concat(stop[key] ? "".concat(stop[key]).concat(separateByComma.includes(key) ? ', ' : ' ') : '');
          }, '');
          acc.push({
            columnId: header.id,
            keys: header.keys,
            type: header.type,
            date: stop.date,
            textValue: header.type === 'dateTime' ? _this10.trimSeconds(textValue) : textValue
          });
        });

        result.push(acc);
      });
      return result;
    },
    handleOnCellFocus: function handleOnCellFocus(cellId) {
      this.removeCellFocus();
      jquery__WEBPACK_IMPORTED_MODULE_8___default()("[cellId=".concat(cellId, "]")).addClass('cell-focus');
    },
    removeCellFocus: function removeCellFocus() {
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('td').removeClass('cell-focus');
    },
    tripPaymentTotal: function tripPaymentTotal(val) {
      this.tripPaymentTotalAmount = val;
    },
    loadPaymentTotal: function loadPaymentTotal(val) {
      this.loadPaymentTotalAmount = val;
    }
  },
  watch: {
    addNewCustomPaymentOptionPopup: function addNewCustomPaymentOptionPopup(val) {
      var _this11 = this;

      setTimeout(function () {
        // Necessary to avoid the Sidebar from closing when the popup is opened
        _this11.isAnyPromptsActive = val;
      }, 100);
    },
    isFileUploadPromptVisible: function isFileUploadPromptVisible(val) {
      var _this12 = this;

      setTimeout(function () {
        // Necessary to avoid the Sidebar from closing when the popup is opened
        _this12.isAnyPromptsActive = val;
      }, 100);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=template&id=5cf18ea0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=template&id=5cf18ea0&scoped=true& ***!
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

  return !_vm.isLoading ? _c("div", {
    staticClass: "vs-row w-full"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-3"
  }, [_c("vx-card", [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("div", [_c("h2", [_vm._v("\n            Trip No. "), _c("span", [_vm._v(_vm._s(_vm.tripNumber))])])]), _vm._v(" "), _c("feather-icon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showCloseButton,
      expression: "showCloseButton"
    }],
    staticClass: "cursor-pointer",
    attrs: {
      icon: "XIcon"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("closeSidebar");
      }
    }
  })], 1)])], 1), _vm._v(" "), _vm.driverPayType !== "template" ? _c("div", {
    staticClass: "vx-col w-full mb-3"
  }, [_c("vx-card", {
    attrs: {
      title: "Load Information",
      "collapse-action": ""
    }
  }, [_c("div", {
    staticClass: "space-y-4"
  }, [_c("vx-card", {
    attrs: {
      "no-shadow": "",
      "card-border": ""
    }
  }, _vm._l(_vm.loads, function (load, index) {
    return _c("div", {
      key: "load_".concat(load.loadId, "_").concat(index),
      staticClass: "overflow-auto p-2",
      staticStyle: {
        "background-color": "#f7f8f9"
      }
    }, [_c("h4", {
      staticClass: "cursor-pointer",
      style: !load.isCollapsed ? "box-shadow: 1px 2px 1px #f0f0f1" : "",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          load.isCollapsed = !load.isCollapsed;
        }
      }
    }, [_vm._v("\n              #" + _vm._s(load.loadNumber) + "\n            ")]), _vm._v(" "), _c("table", {
      directives: [{
        name: "click-outside",
        rawName: "v-click-outside",
        value: _vm.removeCellFocus,
        expression: "removeCellFocus"
      }, {
        name: "show",
        rawName: "v-show",
        value: !load.isCollapsed,
        expression: "!load.isCollapsed"
      }],
      staticClass: "overflow-auto w-full load-table"
    }, [_c("table-header", {
      attrs: {
        headers: _vm.getHeaders
      }
    }), _vm._v(" "), _c("tbody", _vm._l(load.stops, function (stop, index) {
      return _c("tr", {
        key: index
      }, _vm._l(stop, function (currentStop, idx) {
        return _c("td", {
          key: "key_".concat(load.loadId, "_").concat(idx, "_").concat(index),
          staticClass: "td-children",
          attrs: {
            cellId: "cellId_".concat(load.loadId, "_").concat(idx, "_").concat(index)
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.handleOnCellFocus("cellId_".concat(load.loadId, "_").concat(idx, "_").concat(index));
            }
          }
        }, [_c("div", {
          staticClass: "table-td"
        }, [_c("p", {
          staticClass: "cells__input cell-export",
          domProps: {
            textContent: _vm._s(currentStop.textValue)
          }
        })])]);
      }), 0);
    }), 0)], 1)]);
  }), 0)], 1)])], 1) : _vm._e(), _vm._v(" "), _vm.driverPayType === "template" ? _c("div", {
    staticClass: "vx-col w-full mb-3",
    attrs: {
      id: "payment-template"
    }
  }, [_c("vx-card", {
    attrs: {
      title: "Load Payments",
      "collapse-action": ""
    }
  }, [_c("div", {
    staticClass: "space-y-1"
  }, [_c("vx-card", {
    staticClass: "card",
    attrs: {
      "no-shadow": "",
      "card-border": ""
    }
  }, _vm._l(_vm.loads, function (load, index) {
    return _c("div", {
      key: "load_".concat(load.loadId, "_").concat(index),
      staticClass: "mb-5"
    }, [_c("h4", {
      staticClass: "cursor-pointer p-3",
      staticStyle: {
        "background-color": "#f7f8f9"
      },
      style: !load.isCollapsed ? "box-shadow: 1px 2px 1px #f0f0f1" : "",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          load.isCollapsed = !load.isCollapsed;
        }
      }
    }, [_vm._v("\n              Load #" + _vm._s(load.loadNumber) + "\n            ")]), _vm._v(" "), _c("div", {
      staticClass: "overflow-auto",
      staticStyle: {
        "background-color": "#f7f8f9"
      }
    }, [_c("table", {
      directives: [{
        name: "click-outside",
        rawName: "v-click-outside",
        value: _vm.removeCellFocus,
        expression: "removeCellFocus"
      }, {
        name: "show",
        rawName: "v-show",
        value: !load.isCollapsed,
        expression: "!load.isCollapsed"
      }],
      staticClass: "w-full load-table"
    }, [_c("table-header", {
      attrs: {
        headers: _vm.getHeaders
      }
    }), _vm._v(" "), _c("tbody", _vm._l(load.stops, function (stop, index) {
      return _c("tr", {
        key: index
      }, _vm._l(stop, function (currentStop, idx) {
        return _c("td", {
          key: "key_".concat(load.loadId, "_").concat(idx, "_").concat(index),
          staticClass: "td-children",
          attrs: {
            cellId: "cellId_".concat(load.loadId, "_").concat(idx, "_").concat(index)
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.handleOnCellFocus("cellId_".concat(load.loadId, "_").concat(idx, "_").concat(index));
            }
          }
        }, [_c("div", {
          staticClass: "table-td"
        }, [_c("p", {
          staticClass: "cells__input cell-export",
          domProps: {
            textContent: _vm._s(currentStop.textValue)
          }
        })])]);
      }), 0);
    }), 0)], 1)]), _vm._v(" "), _c("div", {
      staticClass: "w-full px-6 mt-5"
    }, [_c("load-template", {
      attrs: {
        load: load,
        customFields: _vm.payTemplateCustomFields,
        initLoadTemplateData: _vm.initLoadTemplateData[load.loadId],
        isApproved: _vm.isApproved
      },
      on: {
        loadPaymentTotal: _vm.loadPaymentTotal,
        isCustomFieldPopupOpenOrNot: _vm.isCustomFieldPopupOpenOrNot,
        updateCustomFields: _vm.getCustomFields,
        loadTemplateFields: _vm.loadTemplateFields
      },
      model: {
        value: load.loadTemplate,
        callback: function callback($$v) {
          _vm.$set(load, "loadTemplate", $$v);
        },
        expression: "load.loadTemplate"
      }
    })], 1)]);
  }), 0)], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("vx-card", {
    staticClass: "card",
    attrs: {
      "no-shadow": "",
      "card-border": ""
    }
  }, [_c("trip-template", {
    attrs: {
      tripsTemplateFields: _vm.tripsTemplateFields,
      initTripTemplateData: _vm.initTripTemplateData,
      customFields: _vm.payTemplateCustomFields,
      isApproved: _vm.isApproved
    },
    on: {
      tripPaymentTotal: _vm.tripPaymentTotal,
      isCustomFieldPopupOpenOrNot: _vm.isCustomFieldPopupOpenOrNot,
      updateCustomFields: _vm.getCustomFields
    },
    model: {
      value: _vm.tripTemplate,
      callback: function callback($$v) {
        _vm.tripTemplate = $$v;
      },
      expression: "tripTemplate"
    }
  })], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), _vm.driverPayType === "template" ? _c("div", {
    staticClass: "vx-col w-full mb-3",
    attrs: {
      id: "template-payment-total"
    }
  }, [_c("vx-card", [_c("div", {
    staticClass: "flex justify-between flex-wrap"
  }, [_c("h5", {
    staticClass: "text-primary font-semibold"
  }, [_vm._v("\n          Trip Total Payment:"), _c("span", {
    staticClass: "ml-2 text-dark opacity-75"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v("\n            " + _vm._s(_vm.totalPayment()) + "\n          ")])])])])], 1) : _vm._e(), _vm._v(" "), _vm.payeeType === "companyDriver" ? _c("div", {
    staticClass: "vx-col w-full mb-3",
    attrs: {
      id: "driver-detail"
    }
  }, [_c("vx-card", {
    attrs: {
      title: "Profit and Loss"
    }
  }, [_c("div", {
    staticClass: "vx-row px-4 grid grid-cols-1 gap-4 lg:gap-8"
  }, [_c("vx-card", {
    attrs: {
      "no-shadow": "",
      "card-border": ""
    }
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("table", [_c("tr", [_c("td", {
    staticClass: "font-semibold"
  }, [_vm._v("Total Miles:")]), _vm._v(" "), _c("td", [_vm._v("\n                  " + _vm._s(_vm.totalLoadedMiles.toLocaleString()) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-semibold"
  }, [_vm._v("Revenue:")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v(_vm._s(this.totalLoadTotalRate.toLocaleString()) + " ($" + _vm._s(_vm.ratePerMile.toLocaleString()) + "/mi)\n                ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-semibold"
  }, [_vm._v("Driver Pay:")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v(_vm._s(_vm.totalPayment()) + "\n                ")])]), _vm._v(" "), _vm._l(_vm.profitLossData.fuelExpenses, function (item, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "font-semibold"
    }, [_vm._v(_vm._s(item.product) + ":")]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "mr-1"
    }, [_vm._v("$")]), _vm._v(_vm._s(item.amount))])]);
  })], 2)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between flex-wrap"
  }, [_c("h5", {
    staticClass: "text-primary font-semibold"
  }, [_vm._v("\n              Profit :"), _c("span", {
    staticClass: "ml-2 text-dark opacity-75"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v(_vm._s(_vm.calculateProfit().toLocaleString()) + " ($" + _vm._s(_vm.profitPerMile.toLocaleString()) + "/mi)\n              ")])])])], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-3",
    attrs: {
      id: "notes"
    }
  }, [_c("vx-card", {
    attrs: {
      title: "Notes"
    }
  }, [_c("vs-textarea", {
    attrs: {
      height: "120px"
    },
    model: {
      value: _vm.trip.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.trip, "notes", $$v);
      },
      expression: "trip.notes"
    }
  })], 1)], 1), _vm._v(" "), _vm.driverPayType != "template" ? _c("div", {
    staticClass: "vx-col w-full mb-3",
    attrs: {
      id: "driver-detail"
    }
  }, [_c("vx-card", {
    attrs: {
      title: "Driver Details"
    }
  }, [_c("div", {
    staticClass: "vx-row px-4 grid grid-cols-1 gap-4 lg:gap-8"
  }, [_c("vx-card", {
    attrs: {
      "no-shadow": "",
      "card-border": ""
    }
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("table", [_c("tr", [_c("td", {
    staticClass: "font-semibold"
  }, [_vm._v("Name")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.trip.driverName))])]), _vm._v(" "), _vm.driverDetails.payType ? _c("tr", [_c("td", {
    staticClass: "font-semibold"
  }, [_vm._v("Payrate")]), _vm._v(" "), _vm.driverDetails.payType == "hourly" ? _c("td", [_vm._v("\n                  " + _vm._s("$".concat(_vm.driverDetails.hourlyRate, "/hour")) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.driverDetails.payType == "perMile" ? _c("td", [_vm._v("\n                  " + _vm._s("$".concat(_vm.driverDetails.perMileCharge, "/mile")) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.driverDetails.payType == "percentage" ? _c("td", [_vm._v("\n                  " + _vm._s("".concat(_vm.driverDetails.payPercentage)) + "\n                  "), _c("span", {
    staticClass: "mx-1"
  }, [_vm._v("% of")]), _vm._v("\n                  " + _vm._s(_vm.sentenceCase(_vm.driverDetails.payPercentageOf)) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.driverDetails.payType == "flat" ? _c("td", [_vm._v("\n                  " + _vm._s("$".concat(_vm.driverDetails.flatPayRate || _vm.driverDetails.basePayment || 0)) + "\n                ")]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "w-full space-y-2"
  }, [_vm.driverDetails.payType == "hourly" ? [_c("div", {
    staticClass: "w-full flex items-center space-x-4"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n                      Total Hours\n                      "), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: {
        required: true,
        regex: _vm.regexNumber
      },
      expression: "{\n                          required: true,\n                          regex: regexNumber,\n                        }"
    }],
    staticClass: "w-full",
    attrs: {
      step: "any",
      name: "totalHours",
      type: "number"
    },
    model: {
      value: _vm.driverDetails.totalHours,
      callback: function callback($$v) {
        _vm.$set(_vm.driverDetails, "totalHours", _vm._n($$v));
      },
      expression: "driverDetails.totalHours"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.first("totalHours")) + "\n                      ")])], 1)]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "mt-5 font-semibold opacity-75"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v("\n                      " + _vm._s(_vm.hourlyPayment) + "\n                    ")])])])] : _vm._e(), _vm._v(" "), _vm.driverDetails.payType == "perMile" ? [_c("div", {
    staticClass: "w-full flex items-center space-x-4"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n                      Total Miles\n                      "), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: {
        required: true,
        regex: _vm.regexNumber
      },
      expression: "{\n                          required: true,\n                          regex: regexNumber,\n                        }"
    }],
    staticClass: "w-full",
    attrs: {
      step: "any",
      name: "totalMiles",
      type: "number"
    },
    model: {
      value: _vm.driverDetails.totalMiles,
      callback: function callback($$v) {
        _vm.$set(_vm.driverDetails, "totalMiles", _vm._n($$v));
      },
      expression: "driverDetails.totalMiles"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.first("totalMiles")) + "\n                      ")])], 1)]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "mt-5 font-semibold opacity-75"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v("\n                      " + _vm._s(_vm.loadPayment) + "\n                    ")])])]), _vm._v(" "), _c("div", {
    staticClass: "w-full flex items-center space-x-4"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" No. of Stops ")]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: {
        regex: _vm.regexNumber
      },
      expression: "{\n                          regex: regexNumber,\n                        }"
    }],
    staticClass: "w-full",
    attrs: {
      step: "any",
      name: "totalStops",
      type: "number"
    },
    model: {
      value: _vm.driverDetails.totalStops,
      callback: function callback($$v) {
        _vm.$set(_vm.driverDetails, "totalStops", _vm._n($$v));
      },
      expression: "driverDetails.totalStops"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.first("totalStops")) + "\n                      ")])], 1)]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "mt-5 font-semibold opacity-75"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v("\n                      " + _vm._s(_vm.stopPayment) + "\n                    ")])])]), _vm._v(" "), _c("div", {
    staticClass: "w-full flex items-center space-x-4"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Detention (in Hours) ")]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: {
        regex: _vm.regexNumber
      },
      expression: "{\n                          regex: regexNumber,\n                        }"
    }],
    staticClass: "w-full",
    attrs: {
      step: "any",
      name: "detentionHours",
      type: "number"
    },
    model: {
      value: _vm.driverDetails.detentionHours,
      callback: function callback($$v) {
        _vm.$set(_vm.driverDetails, "detentionHours", _vm._n($$v));
      },
      expression: "driverDetails.detentionHours"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.first("detentionHours")) + "\n                      ")])], 1)]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "mt-5 font-semibold opacity-75"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v("\n                      " + _vm._s(_vm.detentionPayment) + "\n                    ")])])]), _vm._v(" "), _c("div", {
    staticClass: "w-full flex items-center space-x-4"
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Layover (in Hours) ")]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: {
        regex: _vm.regexNumber
      },
      expression: "{\n                          regex: regexNumber,\n                        }"
    }],
    staticClass: "w-full",
    attrs: {
      step: "any",
      name: "layoverHours",
      type: "number"
    },
    model: {
      value: _vm.driverDetails.layoverHours,
      callback: function callback($$v) {
        _vm.$set(_vm.driverDetails, "layoverHours", _vm._n($$v));
      },
      expression: "driverDetails.layoverHours"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.first("layoverHours")) + "\n                      ")])], 1)]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "mt-5 font-semibold opacity-75"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v("\n                      " + _vm._s(_vm.layoverPayment) + "\n                    ")])])])] : _vm._e(), _vm._v(" "), _vm.driverDetails.payType == "percentage" || _vm.driverDetails.payType == "flat" || _vm.driverDetails.payType == null ? [_c("div", {
    staticClass: "w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n                    Base Payment\n                    "), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: {
        required: true,
        regex: _vm.regexNumber
      },
      expression: "{\n                        required: true,\n                        regex: regexNumber,\n                      }"
    }],
    staticClass: "w-full",
    attrs: {
      step: "any",
      name: "basePayment",
      type: "number"
    },
    model: {
      value: _vm.driverDetails.basePayment,
      callback: function callback($$v) {
        _vm.$set(_vm.driverDetails, "basePayment", _vm._n($$v));
      },
      expression: "driverDetails.basePayment"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n                      " + _vm._s(_vm.errors.first("basePayment")) + "\n                    ")])], 1)])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Reimbursement ($) ")]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: {
        regex: _vm.regexNumber
      },
      expression: "{\n                      regex: regexNumber,\n                    }"
    }],
    staticClass: "w-full",
    attrs: {
      step: "any",
      name: "reimbursement",
      type: "number"
    },
    model: {
      value: _vm.driverDetails.reimbursement,
      callback: function callback($$v) {
        _vm.$set(_vm.driverDetails, "reimbursement", _vm._n($$v));
      },
      expression: "driverDetails.reimbursement"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n                    " + _vm._s(_vm.errors.first("reimbursement")) + "\n                  ")])], 1)])], 2)]), _vm._v(" "), _vm._l(_vm.customPayment, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "flex gap-2 mt-3 items-center"
    }, [_c("label", {
      staticClass: "mr-2 text-sm"
    }, [_vm._v("Custom Payment:")]), _vm._v(" "), _c("v-select", {
      staticClass: "w-64",
      attrs: {
        options: _vm.customPaymentOption,
        label: "name",
        clearable: false,
        reduce: function reduce(option) {
          return option.fieldId;
        }
      },
      on: {
        input: _vm.handleCustomPayment
      },
      model: {
        value: item.fieldId,
        callback: function callback($$v) {
          _vm.$set(item, "fieldId", $$v);
        },
        expression: "item.fieldId"
      }
    }), _vm._v(" "), _c("vx-input-group", [_c("template", {
      slot: "prepend"
    }, [_c("div", {
      staticClass: "prepend-text bg-primary"
    }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
      attrs: {
        type: "number",
        step: "any"
      },
      model: {
        value: item.payment,
        callback: function callback($$v) {
          _vm.$set(item, "payment", _vm._n($$v));
        },
        expression: "item.payment"
      }
    })], 2), _vm._v(" "), _c("vs-button", {
      attrs: {
        color: "danger",
        type: "border",
        size: "small",
        "icon-pack": "feather",
        icon: "icon-trash",
        radius: ""
      },
      on: {
        click: function click($event) {
          return _vm.removeCustomPayment(index);
        }
      }
    })], 1);
  }), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-4",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        return _vm.addCustomPayment();
      }
    }
  }, [_vm._v("Add custom payment")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between flex-wrap py-5"
  }, [_c("h5", {
    staticClass: "text-primary font-semibold"
  }, [_vm._v("\n              Total Payment :"), _c("span", {
    staticClass: "ml-2 text-dark opacity-75"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v("\n                " + _vm._s(_vm.totalPayment()) + "\n              ")])])])], 2)], 1)])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-3",
    attrs: {
      id: "file-upload"
    }
  }, [_c("vx-card", {
    attrs: {
      title: "File Upload"
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c("div", {
          staticClass: "vx-row"
        }, [_c("div", {
          staticClass: "vx-col flex gap-1 items-center"
        }, [_c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            size: "small",
            icon: "file_upload"
          },
          on: {
            click: function click($event) {
              return _vm.toggleFileUploadPrompt(_vm.tripId);
            }
          }
        })], 1)])];
      },
      proxy: true
    }], null, false, 1897102659)
  }, [_vm._v(" "), _c("div", [_c("span", {
    staticClass: "drag-box",
    attrs: {
      id: _vm.tripId
    }
  }, [_c("input", {
    attrs: {
      type: "file",
      multiple: ""
    },
    on: {
      change: function change(event) {
        return _vm.dragNdrop(event, _vm.tripId);
      },
      dragleave: function dragleave($event) {
        return _vm.dragLeave(_vm.tripId);
      },
      dragenter: function dragenter($event) {
        return _vm.dragEnter(_vm.tripId);
      },
      drop: function drop($event) {
        return _vm.drop(_vm.tripId);
      }
    }
  }), _vm._v(" "), _vm.trip.files.length > 0 ? [_c("Files", {
    attrs: {
      imagePreview: false,
      isDownloadAllowed: true,
      fileList: _vm.trip.files
    },
    on: {
      deleteFile: _vm.deleteFile
    }
  })] : [_c("div", {
    staticClass: "vx-row justify-center"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("span", {
    staticClass: "text-gray-500"
  }, [_vm._v("Drag and drop files to upload or click here to upload")])])])]], 2)])])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-3"
  }, [_c("div", {
    staticClass: "space-x-2 flex justify-center"
  }, [_c("vs-button", {
    attrs: {
      color: "warning",
      type: "border"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("closeSidebar");
      }
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "success",
      type: "filled"
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("\n        " + _vm._s(_vm.submitButtonText) + "\n      ")])], 1)]), _vm._v(" "), _c("vs-prompt", {
    staticStyle: {
      "z-index": "52015"
    },
    attrs: {
      title: "Add New Custom Payment",
      "accept-text": "Save",
      active: _vm.addNewCustomPaymentOptionPopup
    },
    on: {
      accept: _vm.acceptCustomPaymentPrompt,
      cancel: _vm.closeCustomPaymentPrompt,
      close: _vm.closeCustomPaymentPrompt,
      "update:active": function updateActive($event) {
        _vm.addNewCustomPaymentOptionPopup = $event;
      }
    }
  }, [_c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n        Name\n        "), _c("field-required-sign")], 1), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "text"
    },
    model: {
      value: _vm.customFeildName,
      callback: function callback($$v) {
        _vm.customFeildName = $$v;
      },
      expression: "customFeildName"
    }
  })], 1)]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Description ")]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "text"
    },
    model: {
      value: _vm.customFeildDescription,
      callback: function callback($$v) {
        _vm.customFeildDescription = $$v;
      },
      expression: "customFeildDescription"
    }
  })], 1)])]), _vm._v(" "), _c("FileUploadPrompt", {
    attrs: {
      id: "trip-edit-file-prompt",
      isPromptActive: _vm.isFileUploadPromptVisible
    },
    on: {
      onClose: _vm.toggleFileUploadPrompt,
      onAccept: _vm.uploadFiles
    }
  })], 1) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#driver-detail table td[data-v-5cf18ea0] {\n  vertical-align: top;\n  min-width: 180px;\n  word-break: break-all;\n}[dir] #driver-detail table td[data-v-5cf18ea0] {\n  padding-bottom: 0.8rem;\n}\n[data-v-5cf18ea0] .swiper-slide.swiper-slide-prev {\n  opacity: 0 !important;\n}\n[data-v-5cf18ea0] #notes textarea.vs-textarea {\n  resize: none !important;\n}\n.drag-box[data-v-5cf18ea0] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  line-height: 50px;\n  color: #999;\n  display: inline-block;\n  transition: transform 0.3s;\n}\n[dir] .drag-box[data-v-5cf18ea0] {\n  margin: 0 auto;\n}\n.drag-box input[type=file][data-v-5cf18ea0] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  top: 0;\n}\n[dir=ltr] .drag-box input[type=file][data-v-5cf18ea0] {\n  left: 0;\n}\n[dir=rtl] .drag-box input[type=file][data-v-5cf18ea0] {\n  right: 0;\n}\n[dir] .draging[data-v-5cf18ea0] {\n  border: 2px dashed #ccc;\n}\n#trip-edit-file-prompt[data-v-5cf18ea0] {\n  z-index: 60000 !important;\n}\n.load-table td[data-v-5cf18ea0] {\n  border-block-end-color: rgb(240, 241, 243);\n  color: #666666;\n}\n[dir] .load-table td[data-v-5cf18ea0] {\n  background: #f7f8f9;\n  padding: 5px;\n}\n[dir=ltr] .load-table td[data-v-5cf18ea0] {\n  box-shadow: 1px 2px 1px #f0f0f1;\n}\n[dir=rtl] .load-table td[data-v-5cf18ea0] {\n  box-shadow: -1px 2px 1px #f0f0f1;\n}\n.load-table td .table-td[data-v-5cf18ea0] {\n  display: flex;\n  align-items: center;\n  font-size: 13.5px;\n}\n.load-table .td-children[data-v-5cf18ea0] {\n  max-width: 260px;\n}\n[dir] .load-table .td-children[data-v-5cf18ea0] {\n  background: #fff;\n}\n.cells__input[data-v-5cf18ea0] {\n  width: 100%;\n  overflow: hidden;\n  height: 20px;\n  color: #292d34;\n  font-family: Arial, Montserrat, Helvetica, sans-serif;\n  resize: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n[dir] .cells__input[data-v-5cf18ea0] {\n  border: none;\n  padding: 0px 4px;\n}\n[dir] .cells__input[data-v-5cf18ea0]:disabled {\n  background: #fff;\n}\n[dir] .cells input[data-v-5cf18ea0], [dir] .cells button[data-v-5cf18ea0] {\n  border: none;\n  background: #fff;\n  padding: 0 6px;\n}\n.cell-focus[data-v-5cf18ea0] {\n  outline: #2d7ff9 auto 1px !important;\n}\n.cell-focus .multiselect[data-v-5cf18ea0] {\n  flex-wrap: wrap;\n}\n[dir] #payment-template .card[data-v-5cf18ea0] .vx-card__body {\n  padding: 1rem 1.5rem;\n}\n[dir] .px-table[data-v-5cf18ea0] .vx-card__body {\n  padding: 1rem 0.5rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/mixins/closeSidebarMixin.js":
/*!******************************************************!*\
  !*** ./resources/js/src/mixins/closeSidebarMixin.js ***!
  \******************************************************/
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





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('auth', ['user'])),
  watch: {
    user: function user(_user) {
      if (!_user) {
        this.closeSidebar();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadEdit.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadEdit.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadEdit_vue_vue_type_template_id_5cf18ea0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadEdit.vue?vue&type=template&id=5cf18ea0&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=template&id=5cf18ea0&scoped=true&");
/* harmony import */ var _LoadEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadEdit_vue_vue_type_style_index_0_id_5cf18ea0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadEdit_vue_vue_type_template_id_5cf18ea0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadEdit_vue_vue_type_template_id_5cf18ea0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5cf18ea0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/LoadEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_style_index_0_id_5cf18ea0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=style&index=0&id=5cf18ea0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_style_index_0_id_5cf18ea0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_style_index_0_id_5cf18ea0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_style_index_0_id_5cf18ea0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_style_index_0_id_5cf18ea0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=template&id=5cf18ea0&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=template&id=5cf18ea0&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_template_id_5cf18ea0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadEdit.vue?vue&type=template&id=5cf18ea0&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadEdit.vue?vue&type=template&id=5cf18ea0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_template_id_5cf18ea0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadEdit_vue_vue_type_template_id_5cf18ea0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=7.js.map