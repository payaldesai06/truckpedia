(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[224],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PdfInvoice",
  props: {
    invoice: {
      type: Object,
      required: true
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
    }
  },
  data: function data() {
    return {
      total: 0,
      totalAmount: null,
      invoiceData: {}
    };
  },
  created: function created() {
    this.invoiceData = this.invoice;
    this.amountTotal();

    var dayjsUtc = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");

    this.$dayjs.extend(dayjsUtc);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])("auth", ["user"]), {
    companyLogo: function companyLogo() {
      if (this.user && this.user.admin_company_details && this.user.admin_company_details.company_image_url) {
        return this.user.admin_company_details.company_image_url;
      }

      return null;
    }
  }),
  watch: {
    invoice: {
      handler: function handler(val) {
        this.invoiceData = val;
        this.amountTotal();
      },
      deep: true
    },
    editInvoiceData: {
      handler: function handler(val) {
        console.log(val);
        console.log(this.invoice);
      }
    }
  },
  methods: {
    calculatePercentage: function calculatePercentage(percentage) {
      if (percentage) {
        return Number(this.subTotalAmount().split("$")[1]) * (percentage / 100);
      }

      return null;
    },
    subTotalAmount: function subTotalAmount() {
      if (this.invoiceData) {
        var total = 0;

        if (this.invoiceData.items && this.invoiceData.items.length > 0) {
          this.invoiceData.items.forEach(function (item) {
            total += Number(item.rate) * Number(item.qty) || 0;
          });
        }

        return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_5__["formatAmount"])(Number(total).toFixed(2));
      }
    },
    amountTotal: function amountTotal() {
      var _this = this;

      if (this.invoiceData) {
        var total = 0;

        if (this.invoiceData && this.invoiceData.items && this.invoiceData.items.length > 0) {
          this.invoiceData.items.forEach(function (item) {
            total += Number(item.rate) * _this.formatRate(item.qty) || 0;
          });
        }

        if (this.invoiceData && this.invoiceData.customFields && this.invoiceData.customFields.length > 0) {
          this.invoiceData.customFields.forEach(function (item) {
            // if(item.percentage != null || item.isPercentage){
            //   total = total + this.calculatePercentage(Number(item.percentage));
            // }else{
            total = total + Number(item.payment) || 0; // }
          });
        }

        this.totalAmount = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_5__["formatAmount"])(Number(total).toFixed(2));
      }
    },
    // TODO: this is very wrong!!!

    /*
    I said this on Slack:
    For qty:
    “1.0000” -> should be “1" in email/pdf.
    “1.1000” -> should be “1.1" in email/pdf.
    “1.1200” -> should be “1.12" in email/pdf.
    “1.1230” -> should be “1.123" in email/pdf.
    For rate:
    “1.0000” -> should be “1.00" in email/pdf.
    “1.1000” -> should be “1.10" in email/pdf.
    “1.1200” -> should be “1.12" in email/pdf.
    “1.1230” -> should be “1.123" in email/pdf.
    For custom payments’ payment or invoice item’s amount or invoice’s balance_due or subtotal:
    “1.0000” -> should be “1.00" in email/pdf.
    “1.1000” -> should be “1.10" in email/pdf.
    “1.1200” -> should be “1.12" in email/pdf.
    “1.1230” -> should be “1.12" in email/pdf.
    */
    formatRate: function formatRate(rate) {
      var decimals;

      if (isNaN(rate)) {
        decimals = rate.toString().split(".")[1];
      } else {
        decimals = rate;
      }

      return decimals && decimals.length > 2 ? parseFloat(rate) : rate;
    },
    convertToMonthFormat: function convertToMonthFormat(dueDate) {
      var date = new Date(new Date(dueDate).setDate(new Date(dueDate).getDate() + 1));
      var month = date.toLocaleString("default", {
        month: "long"
      });
      var day = date.toLocaleString("default", {
        day: "2-digit"
      });
      var year = date.toLocaleString("default", {
        year: "numeric"
      });
      return "".concat(month, " ").concat(day, ", ").concat(year);
    },
    convertToLocalDateTime: function convertToLocalDateTime(dateTimeString) {
      return this.$dayjs.utc(dateTimeString).local().format("YYYY-MM-DD HH:mm");
    },
    uniqueId: function uniqueId(i, _uniqueId) {
      return "".concat(i, "_").concat(_uniqueId);
    },
    handleAmount: function handleAmount(unitPrice, quantity) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_5__["formatAmount"])(this.formatRate(Number(unitPrice) * quantity));
    },
    getOptionNameFromFieldId: function getOptionNameFromFieldId(fieldId) {
      var option = this.customFieldsPaymentOptions.filter(function (ele) {
        if (ele.fieldId === fieldId) {
          return ele;
        }
      });

      if (option.length > 0) {
        return option[0].name;
      }

      return "";
    },
    minTwoDecimal: function minTwoDecimal(val) {
      return Number(val).toLocaleString("en-US", {
        minimumFractionDigits: 2
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=template&id=3d8bee3d&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=template&id=3d8bee3d& ***!
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
    staticStyle: {
      color: "#000000",
      "font-size": "12px",
      "line-height": "150%",
      "font-weight": "400",
      border: "0 !important",
      margin: "0 !important",
      outline: "0 !important",
      "text-decoration": "none !important"
    }
  }, [_c("div", {
    staticStyle: {
      "margin-left": "40px",
      "margin-right": "40px",
      overflow: "hidden",
      "min-height": "400px"
    }
  }, [_c("div", {
    staticClass: "mb20 flex-horizontal flex-justify flex-align-start width-100",
    staticStyle: {
      width: "100%",
      "margin-bottom": "20px",
      display: "-webkit-box",
      "-webkit-box-orient": "horizontal",
      "-webkit-box-pack": "justify",
      "-webkit-box-align": "start"
    }
  }, [_c("div", [_c("div", {
    staticClass: "h1 mb20",
    staticStyle: {
      "font-weight": "600",
      "font-size": "24px",
      "line-height": "130%",
      "margin-bottom": "20px"
    }
  }, [_vm._v("\n            Invoice\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "mb20",
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c("table", {
    staticClass: "metadata",
    staticStyle: {
      "border-collapse": "separate"
    },
    attrs: {
      cellpadding: "0",
      cellspacing: "0"
    }
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      "white-space": "nowrap",
      "font-weight": "500",
      "padding-right": "8px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n                    Invoice number\n                  ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "white-space": "nowrap",
      "font-weight": "500",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.invoice.invoiceNumber) + "\n                  ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "white-space": "nowrap",
      "font-weight": "500",
      "padding-right": "8px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n                    Date due\n                  ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "white-space": "nowrap",
      "font-weight": "500",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.invoice.dueDate ? _vm.convertToMonthFormat(_vm.invoice.dueDate) : "") + "\n                  ")])])])])])]), _vm._v(" "), _vm.companyLogo ? _c("div", {
    staticClass: "brand-logo-container"
  }, [_c("img", {
    staticClass: "logo-img brand-logo-img",
    staticStyle: {
      "object-fit": "contain",
      height: "75px",
      width: "75px"
    },
    attrs: {
      src: _vm.companyLogo
    }
  })]) : _c("div", {
    staticClass: "brand-logo-fallback-container"
  }, [_c("div", {
    staticClass: "h1 logo-gray",
    staticStyle: {
      color: "RGB(128, 128, 128)",
      "font-weight": "600",
      "font-size": "24px",
      "line-height": "130%"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.user.admin_company_details.business_name) + "\n          ")])])]), _vm._v(" "), _c("div", {
    staticClass: "flex-horizontal flex-align-start mb30 break-word",
    staticStyle: {
      "word-wrap": "break-word",
      "word-break": "break-word",
      "margin-bottom": "30px",
      display: "-webkit-box",
      "-webkit-box-orient": "horizontal",
      "-webkit-box-align": "start"
    }
  }, [_c("div", {
    staticClass: "width-50",
    staticStyle: {
      width: "50%"
    }
  }, [_c("div", {
    staticClass: "address-merchant-name bold",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.user.admin_company_details.business_name) + "\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "address-lines"
  }, [_c("div", [_vm._v("\n              " + _vm._s(_vm.user.admin_company_details.address) + "\n            ")]), _vm._v(" "), _c("div", [_vm._v("\n              " + _vm._s(_vm.user.admin_company_details.city) + ",\n              " + _vm._s(_vm.user.admin_company_details.state) + "\n              " + _vm._s(_vm.user.admin_company_details.zipcode) + "\n            ")])]), _vm._v(" "), _c("div", [_vm._v("\n            " + _vm._s(_vm.user.admin_company_details.email || "") + "\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "address-phone"
  }, [_vm._v("\n            " + _vm._s(_vm.user.admin_company_details.phone_number) + "\n          ")]), _vm._v(" "), _c("div")]), _vm._v(" "), _c("div", {
    staticClass: "flex-horizontal width-50",
    staticStyle: {
      width: "50%",
      display: "-webkit-box",
      "-webkit-box-orient": "horizontal"
    }
  }, [_c("div", {
    staticClass: "pr15 width-100"
  }, [_c("div", {
    staticClass: "bold",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Bill to")]), _vm._v(" "), _c("div", [_vm._v("\n              " + _vm._s(_vm.invoice.customer && _vm.invoice.customer.company_name ? _vm.invoice.customer.company_name : "") + "\n            ")]), _vm._v(" "), _c("div", [_vm._v("\n              " + _vm._s(_vm.invoice.customer && _vm.invoice.customer.billing_contact ? _vm.invoice.customer.billing_contact : "") + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "address-lines"
  }, [_c("div", [_vm._v("\n                " + _vm._s(_vm.invoice.customer && _vm.invoice.customer.billing_address ? _vm.invoice.customer.billing_address : "") + "\n              ")]), _vm._v("\n              " + _vm._s(_vm.invoice.customer && _vm.invoice.customer.billing_city ? _vm.invoice.customer.billing_city + "," : "") + "\n              " + _vm._s(_vm.invoice.customer && _vm.invoice.customer.billing_state ? _vm.invoice.customer.billing_state : "") + "\n              " + _vm._s(_vm.invoice.customer && _vm.invoice.customer.billing_zip_code ? _vm.invoice.customer.billing_zip_code : "") + "\n            ")]), _vm._v(" "), _c("div", [_vm._v("\n              " + _vm._s(_vm.invoice.customer && _vm.invoice.customer.billing_email ? _vm.invoice.customer.billing_email : "") + "\n            ")]), _vm._v(" "), _c("div", [_vm._v("\n              " + _vm._s(_vm.invoice.customer && _vm.invoice.customer.billing_phone_number ? _vm.invoice.customer.billing_phone_number : "") + "\n            ")]), _vm._v(" "), _vm.invoice.customer ? [_vm.invoice.customer.salesRep ? _c("div", [_vm._v("\n                Sales Rep: " + _vm._s(_vm.invoice.customer.salesRep) + "\n              ")]) : _vm._e(), _vm._v(" "), _vm.invoice.customer.shippingCarrierAcct ? _c("div", [_vm._v("\n                Shipping Carrier Account: " + _vm._s(_vm.invoice.customer.shippingCarrierAcct) + "\n              ")]) : _vm._e()] : _vm._e()], 2)])]), _vm._v(" "), _vm.invoice && _vm.invoice.shippingAddress ? _c("div", {
    staticClass: "flex-horizontal flex-align-start mb30 break-word",
    staticStyle: {
      "word-wrap": "break-word",
      "word-break": "break-word",
      "margin-bottom": "30px",
      display: "-webkit-box",
      "-webkit-box-orient": "horizontal",
      "-webkit-box-align": "start"
    }
  }, [_c("div", {
    staticClass: "width-50",
    staticStyle: {
      width: "50%"
    }
  }, [_c("div", {
    staticClass: "address-merchant-name bold",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("\n            Shipping address\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "address-lines"
  }, [_c("div", [_vm._v("\n              " + _vm._s(_vm.invoice.shippingAddress) + "\n            ")])]), _vm._v(" "), _c("div")])]) : _vm._e(), _vm._v(" "), _c("table", {
    staticClass: "line-item-table mb30",
    staticStyle: {
      "border-collapse": "separate",
      "margin-bottom": "15px",
      width: "100%",
      overflow: "hidden",
      "table-layout": "fixed"
    },
    attrs: {
      cellpadding: "0",
      cellspacing: "0"
    }
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.invoiceData.items, function (item, index) {
    return _c("tr", {
      key: _vm.uniqueId(index, "items"),
      staticClass: "line-item-row"
    }, [_c("td", [_c("div", [_c("div", {
      staticClass: "bold"
    }, [_vm._v("\n                  " + _vm._s(item.name) + "\n                ")])])]), _vm._v(" "), _c("td", [_vm._v("\n              " + _vm._s(_vm.formatRate(item.qty)) + "\n            ")]), _vm._v(" "), _c("td", {
      staticClass: "break-word"
    }, [_c("div", [_vm._v("$" + _vm._s(_vm.minTwoDecimal(_vm.formatRate(item.rate))))])]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n              " + _vm._s(_vm.handleAmount(item.rate, item.qty)) + "\n            ")])]);
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("tr", {
    staticClass: "summary-amount"
  }, [_c("td"), _vm._v(" "), _c("td", {
    staticStyle: {
      "padding-top": "5px",
      "padding-bottom": "5px",
      "-webkit-font-smoothing": "antialiased !important"
    },
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n              Subtotal\n            ")]), _vm._v(" "), _c("td", {
    staticClass: "align-right",
    staticStyle: {
      "text-align": "right",
      "padding-top": "5px",
      "padding-bottom": "5px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.formatRate(_vm.subTotalAmount())) + "\n            ")])]), _vm._v(" "), _vm._l(_vm.invoiceData.customFields, function (item, index) {
    return _c("tr", {
      key: _vm.uniqueId("".concat(index, "_").concat(item.fieldId), "customField"),
      staticClass: "summary-amount"
    }, [_c("td"), _vm._v(" "), _c("td", {
      staticStyle: {
        "padding-top": "5px",
        "padding-bottom": "5px",
        "-webkit-font-smoothing": "antialiased !important"
      },
      attrs: {
        colspan: "2"
      }
    }, [_vm._v("\n              " + _vm._s(_vm.getOptionNameFromFieldId(item.fieldId)) + "\n              " + _vm._s(item.percentage != null && item.percentage != "" ? "(" : "") + "\n              " + _vm._s(item.percentage != null && item.percentage != "" ? item.percentage : "") + "\n              " + _vm._s(item.percentage != null && item.percentage != "" ? "% of Subtotal" : "") + _vm._s(item.percentage != null && item.percentage != "" ? ")" : "") + "\n            ")]), _vm._v(" "), _c("td", {
      staticClass: "align-right",
      staticStyle: {
        "text-align": "right",
        "padding-top": "5px",
        "padding-bottom": "5px",
        "-webkit-font-smoothing": "antialiased !important"
      }
    }, [_vm._v("\n              " + _vm._s("$") + "\n              " + _vm._s(_vm.minTwoDecimal(_vm.formatRate(item.payment))) + "\n            ")])]);
  }), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("tr", {
    staticClass: "summary-amount bold",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_c("td"), _vm._v(" "), _c("td", {
    staticStyle: {
      "padding-top": "5px",
      "padding-bottom": "5px",
      "-webkit-font-smoothing": "antialiased !important"
    },
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n              Amount due\n            ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "text-align": "right",
      "padding-top": "5px",
      "padding-bottom": "5px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.totalAmount) + "\n            ")])])], 2)]), _vm._v(" "), _vm.invoice && _vm.invoice.notes ? _c("div", [_c("div", {
    staticClass: "mb-2"
  }, [_c("div", {
    staticClass: "font-semibold mb-2"
  }, [_vm._v("Notes")]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "break-all",
    domProps: {
      innerHTML: _vm._s(_vm.invoice.notes)
    }
  })])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "pb30 avoid-page-break",
    staticStyle: {
      "padding-bottom": "30px",
      "page-break-inside": "avoid"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "fs-10",
    staticStyle: {
      "font-size": "10px"
    }
  }), _vm._v(" "), _vm.invoiceData && (_vm.invoiceData.invoicePayments || []).length ? _c("table", {
    staticClass: "line-item-table mb30",
    staticStyle: {
      "border-collapse": "separate",
      "margin-bottom": "15px",
      width: "100%",
      overflow: "hidden",
      "table-layout": "fixed"
    },
    attrs: {
      cellpadding: "0",
      cellspacing: "0"
    }
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_vm._l(_vm.invoiceData.invoicePayments, function (item, index) {
    return _c("tr", {
      key: _vm.uniqueId(index, "invoicePayments"),
      staticClass: "line-item-row"
    }, [_c("td", [_vm._v("\n              " + _vm._s(item.transactionId) + "\n            ")]), _vm._v(" "), _c("td", {
      staticClass: "break-word"
    }, [_c("div", [_vm._v("$" + _vm._s(_vm.minTwoDecimal(_vm.formatRate(item.amountPaid))))])]), _vm._v(" "), _c("td", [_vm._v("\n              " + _vm._s(item.status) + "\n            ")]), _vm._v(" "), _c("td", [_vm._v("\n              " + _vm._s(item.last4Digits) + "\n            ")]), _vm._v(" "), _c("td", [_vm._v("\n              " + _vm._s(item.utcDatetime ? _vm.convertToLocalDateTime(item.utcDatetime) : "") + "\n            ")])]);
  }), _vm._v(" "), _vm._m(6)], 2)]) : _vm._e()])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", [_c("tr", {
    staticClass: "table-headers"
  }, [_c("th", {
    staticClass: "width-50 center-valign p-0",
    staticStyle: {
      width: "50%",
      "vertical-align": "center",
      "padding-bottom": "5px",
      "font-size": "10px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n              Product\n            ")]), _vm._v(" "), _c("th", {
    staticClass: "width-16point7 center-valign p-0",
    staticStyle: {
      width: "16.7%",
      "vertical-align": "center",
      "padding-bottom": "5px",
      "font-size": "10px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n              Qty\n            ")]), _vm._v(" "), _c("th", {
    staticClass: "width-16point7 center-valign p-0",
    staticStyle: {
      width: "16.7%",
      "vertical-align": "center",
      "padding-bottom": "5px",
      "font-size": "10px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_c("div", {
    staticClass: "line-height-1point3",
    staticStyle: {
      "line-height": "1.3"
    }
  }, [_vm._v("\n                Unit price\n              ")])]), _vm._v(" "), _c("th", {
    staticClass: "width-16point7 center-valign align-right p-0",
    staticStyle: {
      width: "16.7%",
      "text-align": "right",
      "vertical-align": "center",
      "padding-bottom": "5px",
      "font-size": "10px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_c("div", {
    staticClass: "line-height-1point3",
    staticStyle: {
      "line-height": "1.3"
    }
  }, [_vm._v("\n                Amount\n              ")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", [_c("td", {
    staticStyle: {
      border: "0",
      "border-collapse": "collapse",
      margin: "0",
      padding: "0",
      height: "15px",
      "font-size": "1px",
      "line-height": "1px",
      "mso-line-height-rule": "exactly",
      "-webkit-font-smoothing": "antialiased !important"
    },
    attrs: {
      colspan: "5",
      height: "15"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", {
    staticClass: "summary-amount-border"
  }, [_c("td"), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top": "1px solid #ebebeb",
      "-webkit-font-smoothing": "antialiased !important"
    },
    attrs: {
      colspan: "4"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", {
    staticClass: "summary-amount-border"
  }, [_c("td"), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top": "1px solid #ebebeb",
      "-webkit-font-smoothing": "antialiased !important"
    },
    attrs: {
      colspan: "4"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", {
    staticClass: "summary-amount-border"
  }, [_c("td"), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top": "1px solid #ebebeb",
      "-webkit-font-smoothing": "antialiased !important"
    },
    attrs: {
      colspan: "4"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", [_c("tr", {
    staticClass: "table-headers"
  }, [_c("th", {
    staticClass: "width-16point7 center-valign p-0",
    staticStyle: {
      width: "16.7%",
      "vertical-align": "center",
      "padding-bottom": "5px",
      "font-size": "10px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n            Transaction #\n            ")]), _vm._v(" "), _c("th", {
    staticClass: "width-16point7 center-valign p-0",
    staticStyle: {
      width: "16.7%",
      "vertical-align": "center",
      "padding-bottom": "5px",
      "font-size": "10px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n              Amount Paid\n            ")]), _vm._v(" "), _c("th", {
    staticClass: "width-16point7 center-valign p-0",
    staticStyle: {
      width: "16.7%",
      "vertical-align": "center",
      "padding-bottom": "5px",
      "font-size": "10px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_vm._v("\n            Status\n            ")]), _vm._v(" "), _c("th", {
    staticClass: "width-16point7 center-valign p-0",
    staticStyle: {
      width: "16.7%",
      "vertical-align": "center",
      "padding-bottom": "5px",
      "font-size": "10px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_c("div", {
    staticClass: "line-height-1point3",
    staticStyle: {
      "line-height": "1.3"
    }
  }, [_vm._v("\n                Card\n              ")])]), _vm._v(" "), _c("th", {
    staticClass: "width-16point7 center-valign p-0",
    staticStyle: {
      width: "16.7%",
      "vertical-align": "center",
      "padding-bottom": "5px",
      "font-size": "10px",
      "-webkit-font-smoothing": "antialiased !important"
    }
  }, [_c("div", {
    staticClass: "line-height-1point3",
    staticStyle: {
      "line-height": "1.3"
    }
  }, [_vm._v("\n                Date\n              ")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", [_c("td", {
    staticStyle: {
      border: "0",
      "border-collapse": "collapse",
      margin: "0",
      padding: "0",
      height: "15px",
      "font-size": "1px",
      "line-height": "1px",
      "mso-line-height-rule": "exactly",
      "-webkit-font-smoothing": "antialiased !important"
    },
    attrs: {
      colspan: "5",
      height: "15"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PdfInvoice_vue_vue_type_template_id_3d8bee3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PdfInvoice.vue?vue&type=template&id=3d8bee3d& */ "./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=template&id=3d8bee3d&");
/* harmony import */ var _PdfInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PdfInvoice.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PdfInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PdfInvoice_vue_vue_type_template_id_3d8bee3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PdfInvoice_vue_vue_type_template_id_3d8bee3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PdfInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=template&id=3d8bee3d&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=template&id=3d8bee3d& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfInvoice_vue_vue_type_template_id_3d8bee3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PdfInvoice.vue?vue&type=template&id=3d8bee3d& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/Invoice/PdfInvoice.vue?vue&type=template&id=3d8bee3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfInvoice_vue_vue_type_template_id_3d8bee3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfInvoice_vue_vue_type_template_id_3d8bee3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=224.js.map