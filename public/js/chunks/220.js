(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[220],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
  name: 'AgingReportTab',
  data: function data() {
    return {
      expandedRows: [],
      loading: false,
      items: []
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _ref, result, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.$store.dispatch('load/getAgingReport', {});

              case 3:
                _ref = _context.sent;
                result = _ref.result;
                payload = _ref.payload;

                if (result) {
                  this.items = payload && payload.loadsByCustomer ? payload.loadsByCustomer : [];
                }

                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.items = [];
                this.totalRecords = 0;
                _context.next = 15;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_2__["getApiErrorMsg"])(_context.t0)
                });

              case 15:
                _context.prev = 15;
                return _context.finish(15);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9, 15, 17]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    formatAmountValue: function formatAmountValue(amount) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_2__["formatAmount"])(amount);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=template&id=3f3a0976&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=template&id=3f3a0976& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("vx-card", [_c("DataTable", {
    attrs: {
      value: _vm.items,
      expandedRows: _vm.expandedRows,
      lazy: true,
      loading: _vm.loading,
      responsiveLayout: "scroll"
    },
    on: {
      "update:expandedRows": function updateExpandedRows($event) {
        _vm.expandedRows = $event;
      },
      "update:expanded-rows": function updateExpandedRows($event) {
        _vm.expandedRows = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "expansion",
      fn: function fn(slotProps) {
        return [_c("div", [_c("DataTable", {
          staticClass: "mt-4",
          attrs: {
            value: slotProps.data.loads
          }
        }, [_c("Column", {
          attrs: {
            field: "number",
            header: "Load #"
          }
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "reference",
            header: "Reference"
          }
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "amount",
            header: "Amount"
          },
          scopedSlots: _vm._u([{
            key: "body",
            fn: function fn(_ref) {
              var data = _ref.data;
              return [_vm._v("\n                " + _vm._s(_vm.formatAmountValue(data.amount)) + "\n              ")];
            }
          }], null, true)
        }), _vm._v(" "), _c("Column", {
          attrs: {
            field: "overdueDays",
            header: "Over Due Days"
          }
        })], 1)], 1)];
      }
    }])
  }, [_c("Column", {
    attrs: {
      expander: true,
      headerStyle: {
        width: "3rem"
      }
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Customer"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var data = _ref2.data;
        return [_vm._v("\n          " + _vm._s(data.customer.name) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Current"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var data = _ref3.data;
        return [_vm._v("\n          " + _vm._s(_vm.formatAmountValue(data.current.totalAmount)) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "1-30"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var data = _ref4.data;
        return [_vm._v("\n          " + _vm._s(_vm.formatAmountValue(data.oneMonth.totalAmount)) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "31-60"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref5) {
        var data = _ref5.data;
        return [_vm._v("\n          " + _vm._s(_vm.formatAmountValue(data.twoMonths.totalAmount)) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "61-90"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref6) {
        var data = _ref6.data;
        return [_vm._v("\n          " + _vm._s(_vm.formatAmountValue(data.threeMonths.totalAmount)) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "91+"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref7) {
        var data = _ref7.data;
        return [_vm._v("\n          " + _vm._s(_vm.formatAmountValue(data.remaining.totalAmount)) + "\n        ")];
      }
    }])
  })], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgingReportTab_vue_vue_type_template_id_3f3a0976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgingReportTab.vue?vue&type=template&id=3f3a0976& */ "./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=template&id=3f3a0976&");
/* harmony import */ var _AgingReportTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgingReportTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AgingReportTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgingReportTab_vue_vue_type_template_id_3f3a0976___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgingReportTab_vue_vue_type_template_id_3f3a0976___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/AgingReportTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgingReportTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AgingReportTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgingReportTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=template&id=3f3a0976&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=template&id=3f3a0976& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AgingReportTab_vue_vue_type_template_id_3f3a0976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AgingReportTab.vue?vue&type=template&id=3f3a0976& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/AgingReportTab.vue?vue&type=template&id=3f3a0976&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AgingReportTab_vue_vue_type_template_id_3f3a0976___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AgingReportTab_vue_vue_type_template_id_3f3a0976___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=220.js.map