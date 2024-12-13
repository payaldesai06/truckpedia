(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[199],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/mixins/datatableMixin */ "./resources/js/src/mixins/datatableMixin.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PaymentHistoryDatatable',
  mixins: [_mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_6__["default"]],
  data: function data() {
    return {
      filters: {
        business_name: '',
        load_counter: '',
        from_date: '',
        to_date: '',
        amount: ''
      }
    };
  },
  created: function created() {
    this.commonApiCall();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapState"])('payment-history', {
    items: 'paymentHistories'
  })),
  methods: {
    commonApiCall: function () {
      var _commonApiCall = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var _this = this;

        var filter,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filter = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                this.loading = true;
                _context.next = 4;
                return this.$store.dispatch('payment-history/getPaymentHistoryDatatable', {
                  eventForServer: this.eventForServer,
                  filter: filter
                }).catch(function (error) {
                  _this.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: error.response.data.message
                  });
                }).finally(function () {
                  return _this.loading = false;
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function commonApiCall() {
        return _commonApiCall.apply(this, arguments);
      };
    }(),

    /**
     * Download File
     */
    downloadFile: function downloadFile(url) {
      Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_7__["redirectToNewTab"])(url);
    },

    /*
     * Formatted Transaction Status
     */
    getTransactionStatus: function getTransactionStatus() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return {
        0: 'failed',
        1: 'success'
      }[status];
    },
    getTransactionStatusColor: function getTransactionStatusColor() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return {
        0: 'danger',
        1: 'success'
      }[status];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=template&id=13544f8f&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=template&id=13544f8f&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vx-card", {
    attrs: {
      title: "Payment History"
    }
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.items.data,
      lazy: true,
      paginator: true,
      rows: _vm.rows,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      filters: _vm.filters,
      loading: _vm.loading,
      scrollable: true,
      rowsPerPageOptions: _vm.rowsPerPageOptions
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event);
      },
      page: function page($event) {
        return _vm.onPage($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_vm._v("\n        No records found\n      ")];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_vm._v("\n        In total there are " + _vm._s(_vm.totalRecords) + " items.\n      ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("Column", {
    attrs: {
      field: "business_name",
      header: "Company Name",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n          " + _vm._s(slotProps.data.admin_company_details.business_name) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filters["business_name"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "business_name", $$v);
            },
            expression: "filters['business_name']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "load_counter",
      header: "No. of Loads",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n          " + _vm._s(slotProps.data.load_counter) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "number"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filters["load_counter"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "load_counter", $$v);
            },
            expression: "filters['load_counter']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "from_date",
      header: "From Date",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n          " + _vm._s(slotProps.data.from_date) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filters["from_date"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "from_date", $$v);
            },
            expression: "filters['from_date']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "to_date",
      header: "To Date",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n          " + _vm._s(slotProps.data.to_date) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filters["to_date"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "to_date", $$v);
            },
            expression: "filters['to_date']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "amount",
      header: "Amount",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("span", [_vm._v("$")]), _vm._v("\n          " + _vm._s(slotProps.data.amount) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "number"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filters["amount"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "amount", $$v);
            },
            expression: "filters['amount']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "status",
      header: "Status",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var data = _ref.data;
        return [_c("vs-chip", {
          attrs: {
            transparent: "",
            color: _vm.getTransactionStatusColor(data.status)
          }
        }, [_vm._v("\n            " + _vm._s(_vm.getTransactionStatus(data.status)) + "\n          ")])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Action"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var data = _ref2.data;
        return [data.status == 1 ? [_c("div", {
          staticClass: "flex items-center"
        }, [_c("vx-tooltip", {
          attrs: {
            text: "Download Invoice"
          }
        }, [_c("vs-button", {
          attrs: {
            type: "border",
            "icon-pack": "feather",
            icon: "icon-download",
            color: "primary",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.downloadFile(data.invoice_file_url);
            }
          }
        })], 1)], 1)] : _vm._e()];
      }
    }])
  })], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/mixins/datatableMixin.js":
/*!***************************************************!*\
  !*** ./resources/js/src/mixins/datatableMixin.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rows: 10,
      rowsPerPageOptions: [5, 10, 15],
      eventForServer: null,
      loading: false,
      dynamicSortField: 'name',
      dynamicSortOrder: 1,
      filters: {}
    };
  },
  computed: {
    totalRecords: function totalRecords() {
      return this.items.meta ? this.items.meta.total : 0;
    }
  },
  methods: {
    onPage: function onPage(event) {
      this.eventForServer = event;
      this.commonApiCall(this.filters);
    },
    onSort: function onSort(event) {
      this.eventForServer = event;
      this.commonApiCall(this.filters);
    },
    onInputFilter: function onInputFilter() {
      this.commonApiCall(this.filters);
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentHistoryDatatable_vue_vue_type_template_id_13544f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentHistoryDatatable.vue?vue&type=template&id=13544f8f&scoped=true& */ "./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=template&id=13544f8f&scoped=true&");
/* harmony import */ var _PaymentHistoryDatatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentHistoryDatatable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentHistoryDatatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentHistoryDatatable_vue_vue_type_template_id_13544f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaymentHistoryDatatable_vue_vue_type_template_id_13544f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "13544f8f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentHistoryDatatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentHistoryDatatable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentHistoryDatatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=template&id=13544f8f&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=template&id=13544f8f&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentHistoryDatatable_vue_vue_type_template_id_13544f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentHistoryDatatable.vue?vue&type=template&id=13544f8f&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/payment-history/PaymentHistoryDatatable.vue?vue&type=template&id=13544f8f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentHistoryDatatable_vue_vue_type_template_id_13544f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentHistoryDatatable_vue_vue_type_template_id_13544f8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=199.js.map