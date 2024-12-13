(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[221],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
  name: 'FuelCard',
  components: {
    AddItems: function AddItems() {
      return __webpack_require__.e(/*! import() */ 110).then(__webpack_require__.bind(null, /*! ./FuelCard/AddItems.vue */ "./resources/js/src/views/pages/tripV2/components/FuelCard/AddItems.vue"));
    },
    TableList: function TableList() {
      return __webpack_require__.e(/*! import() */ 125).then(__webpack_require__.bind(null, /*! ./FuelCard/TableList.vue */ "./resources/js/src/views/pages/tripV2/components/FuelCard/TableList.vue"));
    }
  },
  data: function data() {
    return {
      showItemModal: false,
      selectedItemId: null,
      selectedItem: null,
      rows: 10,
      loading: false,
      totalRecords: 0,
      itemsList: [],
      fuelCardSidebar: {
        isActive: false,
        selectedRecord: null
      }
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
        var pageSize,
            currentPage,
            parameter,
            _ref,
            payload,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageSize = _args.length > 0 && _args[0] !== undefined ? _args[0] : 25;
                currentPage = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
                _context.prev = 2;
                parameter = {
                  page: currentPage,
                  pageSize: pageSize,
                  fields: ['cardNumber', 'status', 'expirationDate', 'notes', 'currentAssignee']
                };
                _context.next = 6;
                return this.$store.dispatch('accounting/getFuelCards', parameter);

              case 6:
                _ref = _context.sent;
                payload = _ref.data.payload;

                if (payload) {
                  this.itemsList = payload && payload.fuelCards ? payload.fuelCards : [];
                  this.totalRecords = payload && payload.meta ? payload.meta.totalItems : 0;
                }

                _context.next = 17;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                this.itemsList = [];
                this.totalRecords = 0;
                _context.next = 17;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_2__["getApiErrorMsg"])(_context.t0)
                });

              case 17:
                _context.prev = 17;
                return _context.finish(17);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11, 17, 19]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    handleItemModal: function handleItemModal(val) {
      this.fuelCardSidebar.selectedRecord = null;
      this.fuelCardSidebar.isActive = val;
    },
    editRecord: function () {
      var _editRecord = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
        var _ref2, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.$store.dispatch('accounting/getFuelCardById', id);

              case 3:
                _ref2 = _context2.sent;
                payload = _ref2.data.payload;

                if (payload) {
                  this.fuelCardSidebar.isActive = true;
                  this.fuelCardSidebar.selectedRecord = payload;
                }

                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                _context2.next = 12;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_2__["getApiErrorMsg"])(_context2.t0)
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      return function editRecord(_x) {
        return _editRecord.apply(this, arguments);
      };
    }(),
    openDeleteConfirmation: function () {
      var _openDeleteConfirmation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(id) {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$vs.dialog({
                  type: 'confirm',
                  color: 'danger',
                  title: 'Delete Issue',
                  text: 'Are you sure you want to delete this Fuel Card?',
                  accept: function accept() {
                    return _this.deleteCard(id);
                  }
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function openDeleteConfirmation(_x2) {
        return _openDeleteConfirmation.apply(this, arguments);
      };
    }(),
    deleteCard: function () {
      var _deleteCard = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.$store.dispatch('accounting/deleteFuelCard', id);

              case 3:
                this.init();
                this.$vs.notify({
                  time: 8000,
                  title: 'Success',
                  text: 'Deleted successfully',
                  color: 'primary'
                });
                _context4.next = 11;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                _context4.next = 11;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_2__["getApiErrorMsg"])(_context4.t0)
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      return function deleteCard(_x3) {
        return _deleteCard.apply(this, arguments);
      };
    }(),
    onPage: function onPage(_ref3) {
      var page = _ref3.page,
          rows = _ref3.rows;
      this.init(rows, page + 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=template&id=3407df86&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=template&id=3407df86& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("vx-card", [_c("div", {
    staticClass: "vx-row justify-end items-center"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: function click($event) {
        return _vm.handleItemModal(true);
      }
    }
  }, [_vm._v("\n          New\n        ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-5"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("TableList", {
    attrs: {
      tableData: _vm.itemsList,
      loading: _vm.loading,
      totalRecords: _vm.totalRecords,
      rows: _vm.rows
    },
    on: {
      onPage: _vm.onPage,
      editItem: _vm.editRecord,
      deleteItem: _vm.openDeleteConfirmation
    }
  })], 1)])]), _vm._v(" "), _c("div", [_c("AddItems", {
    attrs: {
      "is-show": _vm.fuelCardSidebar.isActive,
      data: _vm.fuelCardSidebar.selectedRecord
    },
    on: {
      onClose: function onClose($event) {
        return _vm.handleItemModal(false);
      },
      refresh: _vm.init
    }
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/FuelCard.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/FuelCard.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FuelCard_vue_vue_type_template_id_3407df86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FuelCard.vue?vue&type=template&id=3407df86& */ "./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=template&id=3407df86&");
/* harmony import */ var _FuelCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FuelCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FuelCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FuelCard_vue_vue_type_template_id_3407df86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FuelCard_vue_vue_type_template_id_3407df86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/components/FuelCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FuelCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=template&id=3407df86&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=template&id=3407df86& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelCard_vue_vue_type_template_id_3407df86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FuelCard.vue?vue&type=template&id=3407df86& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/components/FuelCard.vue?vue&type=template&id=3407df86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelCard_vue_vue_type_template_id_3407df86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelCard_vue_vue_type_template_id_3407df86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=221.js.map