(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[185],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_account_settings_company_driver_pay_templates_components_CustomFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pages/account-settings/company/driver-pay-templates/components/CustomFields */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue");







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TripTemplate',
  components: {
    CustomFields: _pages_account_settings_company_driver_pay_templates_components_CustomFields__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    // loads: {
    //   type: Array,
    //   default: () => [],
    // },
    customFields: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    initTripTemplateData: {
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
    }
  },
  filters: {
    currencyFormat: function currencyFormat(value) {
      if (!value) return '0.00';
      return (+value).toFixed(2);
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
      }],
      target: '',
      tripTemplateFields: [],
      isFlatType: false,
      selectedLoad: 1
    };
  },
  computed: {
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
      this.$emit('tripPaymentTotal', this.formatAmount(total));
      return this.formatAmount(total);
    }
  },
  mounted: function mounted() {// this.getTemplateDataById({ value: this.selectedLoad });
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
      this.tripTemplateFields = ((customFieldsData || {}).tripFields || []).map(function (item) {
        return _objectSpread({
          fieldName: item.name,
          defaultPercentage: item.defaultPercentage ? parseFloat(item.defaultPercentage).toFixed(2) : 0,
          defaultRate: item.defaultRate ? parseFloat(item.defaultRate).toFixed(2) : null
        }, item);
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
        payStartAfter: 0,
        isStopPayType: false,
        percentage: null,
        isPercentage: false
      });
    },
    // resetTemplateFieldList() {
    //   this.tripTemplateFields = [];
    //   this.templateFieldList = this.templateFieldList.map((val) => {
    //     return {
    //       ...val,
    //       selectedFieldId: "",
    //       rate: 0,
    //       quantity: 0,
    //       payment: 0,
    //       comment: "",
    //       fieldType: "rate",
    //       payStartAfter: 0,
    //       isStopPayType: false,
    //     };
    //   });
    // },
    // getTemplateDataById({ value }) {
    //   if (!value) {
    //     this.resetTemplateFieldList();
    //     return;
    //   }
    //   // if (value !== this.selectedLoad) {
    //   //   this.resetTemplateFieldList()
    //   // }
    //   this.$store
    //     .dispatch("driverPayTemplates/getTemplateDataById", value)
    //     .then((data) => {
    //       this.tripTemplateFields = data.tripDetails;
    //     });
    // },
    selectField: function selectField(event, list, i) {
      var value = event.value;
      if (!value) return;
      this.templateFieldList[i] = {};
      var currentObj = this.tripTemplateFields.find(function (val) {
        return val.fieldId || val.id === value;
      });
      this.checkDriverPayTemplateType(currentObj, i);
      var defaultPercentage = currentObj.defaultPercentage,
          defaultRate = currentObj.defaultRate,
          type = currentObj.type;
      this.templateFieldList[i].fieldId = value;

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
      } else {
        this.templateFieldList[i].isStopPayType = false;
      }

      if (type === 'flatPay') {
        this.isFlatType = true;
        this.templateFieldList[i].quantity = 1;
      } else {
        this.isFlatType = false;
        this.templateFieldList[i].quantity = 0;
      }

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
          payStartAfter = _this$templateFieldLi.payStartAfter;

      if (isPercentage) {
        var newObject = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, this.templateFieldList[i], {
          payment: this.formatAmount(percentage / 100 * quantity)
        });

        this.$set(this.templateFieldList, i, newObject);
      } else {
        if (isStopPayType) {
          var _newObject = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, this.templateFieldList[i], {
            payment: this.formatAmount(rate * quantity - payStartAfter)
          });

          this.$set(this.templateFieldList, i, _newObject);
        } else {
          var _newObject2 = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, this.templateFieldList[i], {
            payment: this.formatAmount(Number(rate) * quantity)
          });

          this.$set(this.templateFieldList, i, _newObject2);
        }
      }
    },
    removeTemplateField: function removeTemplateField(index) {
      this.templateFieldList.splice(index, 1);
    },
    editCustomField: function editCustomField(item) {
      this.target = item.fieldTarget;

      if (!item.hasOwnProperty('id')) {
        var getDefaultFields = this.tripTemplateFields.find(function (x) {
          return x.id === item.fieldId;
        });
        this.editCustomFieldData = getDefaultFields || {};
      } else {
        this.editCustomFieldData = item;
      }

      this.toggleAddCustomFieldPopup = true;
    }
  },
  watch: {
    toggleAddCustomFieldPopup: {
      handler: function handler(val) {
        this.$emit('isCustomFieldPopupOpenOrNot', val);
      }
    },
    templateFieldList: {
      handler: function handler(val) {
        this.$emit('input', val);
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
    initTripTemplateData: {
      handler: function handler(val) {
        var _this = this;

        if (val) {
          this.templateFieldList = val.map(function (item) {
            var _this$tripTemplateFie = _this.tripTemplateFields.filter(function (ele) {
              if (ele.id === item.fieldId) {
                return ele;
              }
            }),
                _this$tripTemplateFie2 = _slicedToArray(_this$tripTemplateFie, 1),
                templateArray = _this$tripTemplateFie2[0];

            return _objectSpread({
              fieldName: templateArray.fieldName,
              type: templateArray.type
            }, item, {
              quantity: item.qty ? parseFloat(item.qty) : 1,
              payment: item.payment ? _this.formatAmount(item.payment) : _this.formatAmount(item.rate)
            });
          });
        }
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=template&id=f70f1e42&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=template&id=f70f1e42&scoped=true& ***!
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
  }, [_c("h5", {}, [_vm._v("Recurring Payments")]), _vm._v(" "), _c("div", [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled",
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.addNewCustomFieldOption("trip");
      }
    }
  }, [_vm._v("New Recurring Payment Field")])], 1)]), _vm._v(" "), _vm._l(_vm.templateFieldList, function (list, index) {
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
        options: _vm.tripTemplateFields,
        value: list.fieldId,
        dataKey: "id",
        optionValue: "id",
        optionLabel: "fieldName",
        placeholder: "Select Field",
        filter: ""
      },
      on: {
        change: function change($event) {
          return _vm.selectField($event, list, index);
        }
      }
    })], 1)]), _vm._v(" "), list.isPercentage ? _c("div", {
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
        type: "number"
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
        type: "number"
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
    }, [_vm._v("Quantity ")]), _vm._v(" "), _c("div", {
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
        readonly: _vm.isFlatType
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
        type: "number"
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
    })])]), _vm._v(" "), _c("div", [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(" Comments ")]), _vm._v(" "), _c("div", {
      staticClass: "flex flex-col"
    }, [_c("vs-input", {
      staticClass: "w-full",
      attrs: {
        step: "any",
        name: "quantity",
        type: "text"
      },
      model: {
        value: list.comment,
        callback: function callback($$v) {
          _vm.$set(list, "comment", $$v);
        },
        expression: "list.comment"
      }
    })], 1)]), _vm._v(" "), [_c("div", {
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
      staticClass: "w-6 pt-5 pl-2.5",
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
    })], 1)]], 2)]);
  }), _vm._v(" "), _c("div", {
    staticClass: "vx-row w-6/12 mt-2"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.addTemplateFields
    }
  }, [_vm._v("\n        Add New Payment\n      ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("h5", {
    staticClass: "text-base font-semibold"
  }, [_vm._v("Recurring Total Payment:")]), _vm._v(" "), _c("p", {
    staticClass: "ml-2"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v("$")]), _vm._v(_vm._s(_vm._f("currencyFormat")(_vm.getSumTotal)) + "\n        ")])])], 1)], 2), _vm._v(" "), _c("CustomFields", {
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".max-width-125[data-v-f70f1e42] {\n  width: 125px;\n}\n.min-width-125[data-v-f70f1e42] {\n  min-width: 125px;\n}\n.custom-input[data-v-f70f1e42] {\n  color: inherit;\n  position: relative;\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n[dir] .custom-input[data-v-f70f1e42] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0.7rem !important;\n  padding: 0.4rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n}\n.w-40[data-v-f70f1e42] {\n  width: 6rem; /* 140px */\n}\n.w-field[data-v-f70f1e42] {\n  width: 15rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/tripV2/components/TripTemplate.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/TripTemplate.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TripTemplate_vue_vue_type_template_id_f70f1e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TripTemplate.vue?vue&type=template&id=f70f1e42&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=template&id=f70f1e42&scoped=true&");
/* harmony import */ var _TripTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TripTemplate.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TripTemplate_vue_vue_type_style_index_0_id_f70f1e42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true& */ "./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TripTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TripTemplate_vue_vue_type_template_id_f70f1e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TripTemplate_vue_vue_type_template_id_f70f1e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f70f1e42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/TripTemplate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TripTemplate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_style_index_0_id_f70f1e42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=style&index=0&id=f70f1e42&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_style_index_0_id_f70f1e42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_style_index_0_id_f70f1e42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_style_index_0_id_f70f1e42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_style_index_0_id_f70f1e42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=template&id=f70f1e42&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=template&id=f70f1e42&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_template_id_f70f1e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TripTemplate.vue?vue&type=template&id=f70f1e42&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/TripTemplate.vue?vue&type=template&id=f70f1e42&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_template_id_f70f1e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TripTemplate_vue_vue_type_template_id_f70f1e42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=185.js.map