(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_pages_account_settings_company_driver_pay_templates_components_CustomFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/account-settings/company/driver-pay-templates/components/CustomFields */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LoadTemplate',
  components: {
    CustomFields: _views_pages_account_settings_company_driver_pay_templates_components_CustomFields__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    load: {
      // Load for which the calculation is being made
      type: Object,
      default: function _default() {
        return null;
      },
      required: true
    },
    customFields: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    loadTitle: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    initLoadTemplateData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isApproved: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    isBillingTab: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    isSaveButtonVisible: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    isUpdateButtonVisible: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    hiddenSaveButtonDriverId: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    driverId: {
      type: Number,
      required: false
    },
    isPreTripPayTemplateDetailsAvailable: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      toggleAddCustomFieldPopup: false,
      templateFieldList: [],
      editCustomFieldData: {},
      driverPayTripOption: [{
        text: 'Flat Pay',
        value: 'flatPay'
      }],
      driverPayLoadOptions: [{
        text: 'By Loaded Miles',
        value: 'byLoadedMiles'
      }, {
        text: 'By Empty Miles',
        value: 'byEmptyMiles'
      }, {
        text: 'Flat Pay',
        value: 'flatPay'
      }, {
        text: 'Stop Pay',
        value: 'stopPay'
      }, {
        text: 'By Hour',
        value: 'byHour'
      }, {
        text: 'By Percentage Of Hauling Fee',
        value: 'byPercentageOfHaulingFee'
      }, {
        text: 'By Percentage Of Fuel Surcharge',
        value: 'byPercentageOfFuelSurcharge'
      }, {
        text: 'By Percentage Of Total Income',
        value: 'byPercentageOfTotalIncome'
      }, {
        text: 'Formula Loaded Miles',
        value: 'formulaLoadedMiles'
      }, {
        text: 'Formula Empty Miles',
        value: 'formulaEmptyMiles'
      }],
      target: '',
      loadTemplateFields: [],
      isFlatType: false,
      selectedLoad: 1,
      publicFuelPrice: null,
      isFirstCall: true
    };
  },
  filters: {
    currencyFormat: function currencyFormat(value) {
      if (!value) return '0.00';
      return (+value).toFixed(2);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])('load', ['getFuelPrice']), {
    getSumTotal: function getSumTotal() {
      var total = this.templateFieldList.reduce(function (acc, curr) {
        var payment = 0;

        if (curr.hasOwnProperty('payment')) {
          payment = Number(curr.payment);
        } else {
          payment = 0;
        }

        return acc + payment;
      }, 0);
      this.$emit('loadPaymentTotal', total);
      return parseFloat(total).toFixed(2);
    },
    loadTemplateFieldsMap: function loadTemplateFieldsMap() {
      return this.loadTemplateFields.reduce(function (acc, curr) {
        acc[curr.fieldId] = curr;
        return acc;
      }, {});
    }
  }),
  watch: {
    toggleAddCustomFieldPopup: {
      handler: function handler(val) {
        this.$emit('isCustomFieldPopupOpenOrNot', val);
      }
    },
    templateFieldList: {
      handler: function handler(val) {
        if (!this.isFirstCall || this.isFirstCall && !this.isPreTripPayTemplateDetailsAvailable) {
          this.$emit('toggleSaveButtonVisibility', this.driverId);
        }

        this.$emit('input', val);

        if (this.isBillingTab) {
          this.getSumTotal;
        }

        this.isFirstCall = false;
      },
      deep: true
    },
    customFields: {
      handler: function handler(val) {
        if (val) {
          this.setCustomFields(val);
        }
      },
      deep: true,
      immediate: true
    },
    loadTemplateFields: {
      handler: function handler(val) {
        this.$emit('loadTemplateFields', val);
      },
      deep: true,
      immediate: true
    },
    initLoadTemplateData: {
      handler: function handler(val) {
        var _this = this;

        if (val && val.length) {
          var templatesOfRender = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(val));
          this.templateFieldList = templatesOfRender.map(function (item, i) {
            var templateArray = _this.loadTemplateFieldsMap[item.fieldId] || {};

            var _ref = item || {},
                qty = _ref.qty,
                paymentFromTemplate = _ref.payment;

            var _this$getQuantityAndP = _this.getQuantityAndPaymentValue(_this.load, _objectSpread({}, item, templateArray)),
                rate = _this$getQuantityAndP.rate,
                quantity = _this$getQuantityAndP.quantity,
                quantityLabel = _this$getQuantityAndP.quantityLabel,
                calculatedPayment = _this$getQuantityAndP.payment;

            if (rate) {
              item.rate = rate;
            }

            item.quantity = qty ? parseFloat(qty) : parseFloat(quantity);
            item.payment = paymentFromTemplate ? paymentFromTemplate : calculatedPayment;
            var date = _this.isBillingTab ? _this.load.stops[0].shipping_date || _this.load.stops[0].date || null : _this.load.stops[0][0].date;
            return _objectSpread({}, item, {
              type: templateArray.type,
              fieldName: templateArray.fieldName,
              isPercentage: !!item.percentage,
              isStopPayType: templateArray.type === 'stopPay',
              quantityLabel: quantityLabel,
              v1: !item.v1 ? _this.getFuelPrice(date) : item.v1
            });
          });
        }
      },
      deep: true,
      immediate: true
    }
  },
  created: function created() {
    // this.getTemplateDataById({ value: this.selectedLoad });
    var date = this.isBillingTab ? this.load.stops[0].shipping_date || this.load.stops[0].date || null : this.load.stops[0][0].date;
    this.publicFuelPrice = this.getFuelPrice(date);
  },
  methods: {
    checkDriverPayTemplateType: function checkDriverPayTemplateType(item, i) {
      if (item && item.type && item.type.includes('byPercentage')) {
        this.$set(this.templateFieldList, i, {
          isPercentage: true
        });
        return;
      }

      if (item && item.fieldType && item.fieldType.includes('byPercentage')) {
        this.$set(this.templateFieldList, i, {
          isPercentage: true
        });
        return;
      }

      this.$set(this.templateFieldList, i, {
        isPercentage: false
      });
    },
    addNewCustomFieldOption: function addNewCustomFieldOption(target) {
      this.target = target;
      this.toggleAddCustomFieldPopup = true;
    },
    setCustomFields: function setCustomFields(customFieldsData) {
      this.loadTemplateFields = ((customFieldsData || {}).loadFields || []).map(function (item) {
        return _objectSpread({}, item, {
          fieldName: item.name,
          fieldId: item.id,
          defaultPercentage: item.defaultPercentage ? parseFloat(item.defaultPercentage).toFixed(2) : 0,
          defaultRate: item.defaultRate ? parseFloat(item.defaultRate).toFixed(2) : null
        });
      });
    },
    closePopup: function closePopup() {
      this.toggleAddCustomFieldPopup = false;
      this.editCustomFieldData = {};
      this.target = '';
    },
    addTemplateFields: function addTemplateFields() {
      this.templateFieldList.push({
        id: null,
        selectedFieldId: '',
        rate: 0,
        quantity: 0,
        payment: 0,
        comment: '',
        fieldType: 'rate',
        payStartAfter: null,
        isStopPayType: false,
        percentage: null,
        isPercentage: false,
        v2: null,
        v3: null
      });
    },
    resetTemplateFieldList: function resetTemplateFieldList() {
      this.loadTemplateFields = [];
      this.templateFieldList = this.templateFieldList.map(function (val) {
        return _objectSpread({}, val, {
          selectedFieldId: '',
          rate: 0,
          quantity: 0,
          payment: 0,
          comment: '',
          fieldType: 'rate',
          payStartAfter: null,
          isStopPayType: false,
          v2: null,
          v3: null
        });
      });
    },

    /*getTemplateDataById({ value }) {
      // This function of code is no longer used in this component
      // since we have stopped using the concept of driverPayTemplateId for the time being
      if (!value) {
        this.resetTemplateFieldList();
        return;
      }
      // if (value !== this.selectedLoad) {
      //   this.resetTemplateFieldList()
      // }
      this.$store
        .dispatch("driverPayTemplates/getTemplateDataById", value)
        .then((data) => {
          this.loadTemplateFields = data.loadDetails;
        });
    },*/
    selectField: function selectField(event, list, i) {
      var value = event.value;
      if (!value) return;
      this.templateFieldList[i] = {};
      var currentObj = this.loadTemplateFields.find(function (val) {
        return val.fieldId === value;
      });
      this.checkDriverPayTemplateType(currentObj, i);
      var defaultPercentage = currentObj.defaultPercentage,
          defaultRate = currentObj.defaultRate,
          type = currentObj.type,
          defaultPayStartAfter = currentObj.defaultPayStartAfter,
          defaultV2 = currentObj.defaultV2,
          defaultV3 = currentObj.defaultV3;
      this.templateFieldList[i].fieldId = currentObj.fieldId;

      if (type.includes('byPercentage')) {
        this.templateFieldList[i].percentage = Number(defaultPercentage);
        this.templateFieldList[i].rate = null;
      } else {
        this.templateFieldList[i].rate = Number(defaultRate);
        this.templateFieldList[i].percentage = null;
      }

      this.templateFieldList[i].type = type;

      if (type === 'stopPay') {
        this.templateFieldList[i].isStopPayType = true;
        this.templateFieldList[i].payStartAfter = defaultPayStartAfter;
      } else {
        this.templateFieldList[i].isStopPayType = false;
      }

      if (type === 'flatPay') {
        this.isFlatType = true;
        this.templateFieldList[i].quantity = 1;
      } else if (type === 'formulaLoadedMiles' || type === 'formulaEmptyMiles') {
        this.templateFieldList[i].v1 = this.publicFuelPrice;
        this.templateFieldList[i].v2 = defaultV2;
        this.templateFieldList[i].v3 = defaultV3;
      } else {
        this.isFlatType = false;
      }

      var _this$getQuantityAndP2 = this.getQuantityAndPaymentValue(this.load, this.templateFieldList[i]),
          quantity = _this$getQuantityAndP2.quantity,
          quantityLabel = _this$getQuantityAndP2.quantityLabel,
          payment = _this$getQuantityAndP2.payment;

      this.templateFieldList[i].quantity = quantity;
      this.templateFieldList[i].quantityLabel = quantityLabel;
      this.templateFieldList[i].payment = payment;
      this.getPayment(i);
    },
    formatAmount: function formatAmount(amount) {
      if (isNaN(amount)) return null;
      return parseFloat(amount).toFixed(2);
    },
    getPayment: function getPayment(i) {
      var _this$templateFieldLi = this.templateFieldList[i],
          rate = _this$templateFieldLi.rate,
          quantity = _this$templateFieldLi.quantity,
          isStopPayType = _this$templateFieldLi.isStopPayType,
          percentage = _this$templateFieldLi.percentage,
          isPercentage = _this$templateFieldLi.isPercentage,
          payStartAfter = _this$templateFieldLi.payStartAfter,
          type = _this$templateFieldLi.type,
          v1 = _this$templateFieldLi.v1,
          v2 = _this$templateFieldLi.v2,
          v3 = _this$templateFieldLi.v3;

      if (isPercentage) {
        var newObject = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, this.templateFieldList[i], {
          payment: this.formatAmount(percentage / 100 * quantity)
        });

        this.$set(this.templateFieldList, i, newObject);
      } else if (type === 'formulaEmptyMiles' || type === 'formulaLoadedMiles') {
        var _rate = (v1 - v2) / v3;

        var _newObject = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, this.templateFieldList[i], {
          rate: _rate.toFixed(3),
          payment: this.formatAmount(Number(_rate) * quantity)
        });

        this.$set(this.templateFieldList, i, _newObject);
      } else {
        if (isStopPayType) {
          var multiplier = Number(quantity) - Number(payStartAfter);
          var payment = multiplier > 0 ? this.formatAmount(multiplier * Number(rate)) : 0;

          var _newObject2 = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, this.templateFieldList[i], {
            payment: payment
          });

          this.$set(this.templateFieldList, i, _newObject2);
        } else {
          var _newObject3 = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, this.templateFieldList[i], {
            payment: this.formatAmount(Number(rate) * quantity)
          });

          this.$set(this.templateFieldList, i, _newObject3);
        }
      }
    },
    removeTemplateField: function removeTemplateField(index) {
      this.templateFieldList.splice(index, 1);
    },
    getQuantityAndPaymentValue: function getQuantityAndPaymentValue(loadData, fieldData) {
      /** Mentioning the payType and the corresponding field name in the load object 
          By % of total income: qty is load income/amount/rate: loadTotalRate.
          By % of fuel surcharge: qty is loadFuelSurcharge.
          By % of hauling fees: qty is loadHaulingFees.
          By hour: qty: user input.
          Stop Pay: qty is array_size(stops), payStartAfter: coming from template data. amount = rate * (qty - payStartAfter).
          Flat pay: qty is 1, no change.
          By empty miles: qty is emptyDistance.
          By loaded miles: qty is loadedDistance.
        */
      // byPercentageOfTotalIncome: "loadTotalRate",
      // byPercentageOfFuelSurcharge: "loadFuelSurcharge",
      // byPercentageOfHaulingFee: "loadHaulingFees",
      // byHour: "", // user input
      // stopPay: "stops".length,
      // flatPay: 1,
      // byEmptyMiles: "emptyDistance",
      // byLoadedMiles: "loadedDistance",
      var _ref2 = fieldData || {},
          type = _ref2.type,
          percentage = _ref2.percentage,
          rate = _ref2.rate;

      percentage = Number(percentage) || 0;
      rate = Number(rate) || 0;
      var date = this.isBillingTab ? this.load.stops[0].shipping_date || this.load.stops[0].date || null : this.load.stops[0][0].date;
      var v1 = this.getFuelPrice(date);
      var v2 = fieldData.v2,
          v3 = fieldData.v3;
      var quantity = 0,
          rateFormula;

      switch (type) {
        case 'byLoadedMiles':
          quantity = loadData.loadedDistance || 0;
          return {
            quantity: quantity,
            quantityLabel: 'Loaded Miles',
            payment: this.formatAmount(quantity * rate)
          };

        case 'byEmptyMiles':
          quantity = loadData.emptyDistance || 0;
          return {
            quantity: quantity,
            quantityLabel: 'Empty Miles',
            payment: this.formatAmount(quantity * rate)
          };

        case 'flatPay':
          return {
            quantity: 1,
            quantityLabel: 'Quantity',
            payment: this.formatAmount(1 * rate)
          };

        case 'stopPay':
          quantity = loadData.stops.length || 0;
          var payStartAfter = fieldData.payStartAfter || 0;
          var multiplier = quantity - payStartAfter;
          return {
            quantity: quantity,
            quantityLabel: 'Stops',
            payment: multiplier > 0 ? this.formatAmount(multiplier * rate) : 0
          };

        case 'byHour':
          return {
            quantity: 0,
            quantityLabel: 'Hours',
            payment: 0
          };

        case 'byPercentageOfHaulingFee':
          quantity = loadData.loadHaulingFees || 0;
          return {
            quantity: quantity,
            quantityLabel: 'Hauling Fee',
            payment: this.formatAmount(percentage / 100 * quantity)
          };

        case 'byPercentageOfFuelSurcharge':
          quantity = loadData.loadFuelSurcharge || 0;
          return {
            quantity: quantity,
            quantityLabel: 'Fuel Surcharge',
            payment: this.formatAmount(percentage / 100 * quantity)
          };

        case 'byPercentageOfTotalIncome':
          quantity = loadData.loadTotalRate || 0;
          return {
            quantity: quantity,
            quantityLabel: 'Load Rate',
            payment: this.formatAmount(percentage / 100 * quantity)
          };

        case 'formulaLoadedMiles':
          quantity = loadData.loadedDistance || 0;
          rateFormula = (v1 - v2) / v3;
          return {
            quantity: quantity,
            quantityLabel: 'Loaded Miles',
            rate: rateFormula.toFixed(3),
            // Round the rate to 3 decimal places
            payment: this.formatAmount(quantity * rateFormula)
          };

        case 'formulaEmptyMiles':
          quantity = loadData.emptyDistance || 0;
          rateFormula = (v1 - v2) / v3;
          return {
            rate: rateFormula.toFixed(3),
            quantity: quantity,
            quantityLabel: 'Empty Miles',
            payment: this.formatAmount(quantity * rateFormula)
          };

        default:
          return {
            quantity: 0,
            payment: 0,
            quantityLabel: ''
          };
      }
    },
    editCustomField: function editCustomField(item) {
      this.target = item.fieldTarget;

      if (!item.hasOwnProperty('id')) {
        var getDefaultFields = this.loadTemplateFields.find(function (x) {
          return x.id === item.fieldId;
        });
        this.editCustomFieldData = getDefaultFields || {};
      } else {
        this.editCustomFieldData = item;
      }

      this.toggleAddCustomFieldPopup = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=template&id=2d44a820&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=template&id=2d44a820&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", [_c("div", [_c("div", {
    staticClass: "vx-row flex justify-between items-center mb-2 w-full"
  }, [_c("h5", {}, [_vm._v(_vm._s(_vm.loadTitle))]), _vm._v(" "), _c("div", [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled",
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.addNewCustomFieldOption("load");
      }
    }
  }, [_vm._v("New Load Payment Field")])], 1)]), _vm._v(" "), _vm._l(_vm.templateFieldList, function (list, index) {
    return _c("div", {
      key: index
    }, [_c("div", {
      staticClass: "vx-row space-x-1 items-center"
    }, [_c("div", [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(" Fields ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("Dropdown", {
      staticClass: "w-field",
      attrs: {
        options: _vm.loadTemplateFields,
        value: list.fieldId,
        dataKey: "fieldId",
        optionValue: "fieldId",
        optionLabel: "fieldName",
        placeholder: "Select Field",
        filter: "",
        disabled: _vm.isUpdateButtonVisible
      },
      on: {
        change: function change($event) {
          return _vm.selectField($event, list, index);
        }
      }
    })], 1)]), _vm._v(" "), list && (list.type === "formulaLoadedMiles" || list.type === "formulaEmptyMiles") ? [_c("div", {
      staticClass: "w-32"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(" Public Fuel Price ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.v1,
        expression: "list.v1",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        type: "number",
        readonly: _vm.isUpdateButtonVisible
      },
      domProps: {
        value: list.v1
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "v1", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.getPayment(index);
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "w-40"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v("\n              " + _vm._s("Base Price") + "\n            ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.v2,
        expression: "list.v2",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        name: "quantity",
        type: "number",
        readonly: _vm.isFlatType || _vm.isUpdateButtonVisible
      },
      domProps: {
        value: list.v2
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "v2", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.getPayment(index);
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "w-40"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(" Rate ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.rate,
        expression: "list.rate",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        name: "rate",
        type: "number",
        readonly: _vm.isUpdateButtonVisible
      },
      domProps: {
        value: list.rate
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "rate", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.getPayment(index);
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "w-40"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v("\n              " + _vm._s(list.quantityLabel || "Quantity") + "\n            ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.quantity,
        expression: "list.quantity",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        name: "quantity",
        type: "number",
        readonly: _vm.isFlatType || _vm.isUpdateButtonVisible
      },
      domProps: {
        value: list.quantity
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "quantity", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.getPayment(index);
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "w-40"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(" Payment ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.payment,
        expression: "list.payment",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        name: "payment",
        type: "number",
        readonly: ""
      },
      domProps: {
        value: list.payment
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "payment", _vm._n($event.target.value));
        },
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])])] : [list.isPercentage ? _c("div", {
      staticClass: "w-40"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(" Percentage ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.percentage,
        expression: "list.percentage",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        name: "rate",
        type: "number",
        readonly: _vm.isUpdateButtonVisible
      },
      domProps: {
        value: list.percentage
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "percentage", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.getPayment(index);
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]) : _c("div", {
      staticClass: "w-40"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(" Rate ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.rate,
        expression: "list.rate",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        name: "rate",
        type: "number",
        readonly: _vm.isUpdateButtonVisible
      },
      domProps: {
        value: list.rate
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "rate", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.getPayment(index);
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "w-40"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v("\n              " + _vm._s(list.quantityLabel || "Quantity") + "\n            ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.quantity,
        expression: "list.quantity",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        name: "quantity",
        type: "number",
        readonly: _vm.isFlatType || _vm.isUpdateButtonVisible
      },
      domProps: {
        value: list.quantity
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "quantity", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.getPayment(index);
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]), _vm._v(" "), _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: list.isStopPayType,
        expression: "list.isStopPayType"
      }],
      staticClass: "w-40"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v("Pay start after")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.payStartAfter,
        expression: "list.payStartAfter",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        name: "quantity",
        type: "number",
        readonly: _vm.isUpdateButtonVisible
      },
      domProps: {
        value: list.payStartAfter
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "payStartAfter", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.getPayment(index);
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "w-40"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(" Payment ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: list.payment,
        expression: "list.payment",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-full custom-input",
      attrs: {
        step: "any",
        name: "payment",
        type: "number",
        readonly: ""
      },
      domProps: {
        value: list.payment
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(list, "payment", _vm._n($event.target.value));
        },
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])])], _vm._v(" "), _c("div", [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(" Comments ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("vs-input", {
      staticClass: "w-full",
      attrs: {
        step: "any",
        name: "quantity",
        type: "text",
        readonly: _vm.isUpdateButtonVisible
      },
      model: {
        value: list.comment,
        callback: function callback($$v) {
          _vm.$set(list, "comment", $$v);
        },
        expression: "list.comment"
      }
    })], 1)]), _vm._v(" "), !_vm.isUpdateButtonVisible ? [_c("div", {
      staticClass: "w-6 pt-5 pl-2.5"
    }, [_c("vx-tooltip", {
      attrs: {
        text: "Edit Custom Payment Field"
      }
    }, [_c("vs-button", {
      attrs: {
        color: "primary",
        type: "border",
        size: "small",
        icon: "edit",
        radius: ""
      },
      on: {
        click: function click($event) {
          return _vm.editCustomField(list);
        }
      }
    })], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "w-6 pt-5 pl-2.5 ml-2",
      staticStyle: {
        "margin-left": "1rem !important"
      }
    }, [_c("vs-button", {
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
          return _vm.removeTemplateField(index);
        }
      }
    })], 1)] : _vm._e()], 2)]);
  }), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2 flex w-full"
  }, [!_vm.isUpdateButtonVisible ? _c("vs-button", {
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.addTemplateFields
    }
  }, [_vm._v("\n        Add New Payment\n      ")]) : _vm._e(), _vm._v(" "), _vm.isSaveButtonVisible || _vm.isUpdateButtonVisible ? _c("div", {
    staticClass: "flex gap-2 items-center ml-auto"
  }, [_vm.hiddenSaveButtonDriverId ? [_vm.isSaveButtonVisible ? _c("vs-button", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("onSave");
      }
    }
  }, [_vm._v("\n            Save\n          ")]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.isUpdateButtonVisible ? _c("vs-button", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("onUpdate");
      }
    }
  }, [_vm._v("\n          Update\n        ")]) : _vm._e()], 2) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-3"
  }, [!_vm.isBillingTab ? _c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("h5", {
    staticClass: "text-base font-semibold"
  }, [_vm._v(_vm._s(_vm.loadTitle) + " Load Payment:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v(_vm._s(_vm._f("currencyFormat")(_vm.getSumTotal)) + "\n        ")])]) : _vm._e(), _vm._v(" "), _c("vs-divider")], 1)], 2), _vm._v(" "), _c("CustomFields", {
    attrs: {
      togglePopup: _vm.toggleAddCustomFieldPopup,
      tripOptions: _vm.driverPayTripOption,
      loadOptions: _vm.driverPayLoadOptions,
      selectedTarget: _vm.target,
      editCustomFieldData: _vm.editCustomFieldData
    },
    on: {
      closePopup: _vm.closePopup,
      getCustomFields: function getCustomFields($event) {
        return _vm.$emit("updateCustomFields");
      }
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".max-width-125[data-v-2d44a820] {\n  width: 125px;\n}\n.min-width-125[data-v-2d44a820] {\n  min-width: 125px;\n}\n.custom-input[data-v-2d44a820] {\n  color: inherit;\n  position: relative;\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n[dir] .custom-input[data-v-2d44a820] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0.7rem !important;\n  padding: 0.4rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n}\n.w-40[data-v-2d44a820] {\n  width: 6rem; /* 140px */\n}\n.w-field[data-v-2d44a820] {\n  width: 15rem;\n}\n[data-v-2d44a820] .vs__dropdown-menu {\n  max-height: 180px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadTemplate_vue_vue_type_template_id_2d44a820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadTemplate.vue?vue&type=template&id=2d44a820&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=template&id=2d44a820&scoped=true&");
/* harmony import */ var _LoadTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadTemplate.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadTemplate_vue_vue_type_style_index_0_id_2d44a820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadTemplate_vue_vue_type_template_id_2d44a820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadTemplate_vue_vue_type_template_id_2d44a820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d44a820",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/LoadTemplate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadTemplate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_style_index_0_id_2d44a820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=style&index=0&id=2d44a820&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_style_index_0_id_2d44a820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_style_index_0_id_2d44a820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_style_index_0_id_2d44a820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_style_index_0_id_2d44a820_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=template&id=2d44a820&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=template&id=2d44a820&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_template_id_2d44a820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadTemplate.vue?vue&type=template&id=2d44a820&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/LoadTemplate.vue?vue&type=template&id=2d44a820&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_template_id_2d44a820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadTemplate_vue_vue_type_template_id_2d44a820_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=55.js.map