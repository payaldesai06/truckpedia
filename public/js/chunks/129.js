(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[129],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_maintenanceTableColumns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/maintenanceTableColumns */ "./resources/js/src/views/pages/maintenance-v2/helpers/maintenanceTableColumns.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries
 // Helpers


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MaintenanceIssueList",
  components: {
    IssueList: function IssueList() {
      return __webpack_require__.e(/*! import() */ 162).then(__webpack_require__.bind(null, /*! ./components/IssueList.vue */ "./resources/js/src/views/pages/maintenance-v2/components/IssueList.vue"));
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])("maintenanceV2", ["getAllIssueList"]), {
    scheduledIssues: function scheduledIssues() {
      return this.getAllIssueList.data.filter(function (issue) {
        return issue.status === "scheduled";
      });
    },
    serviceIssues: function serviceIssues() {
      return this.getAllIssueList.data.filter(function (issue) {
        return issue.status === "in_service";
      });
    },
    completedIssues: function completedIssues() {
      return this.getAllIssueList.data.filter(function (issue) {
        return issue.status === "completed";
      });
    },
    reportedIssue: function reportedIssue() {
      return this.getAllIssueList.data.filter(function (issue) {
        return issue.status === "reported";
      });
    },
    totalPages: function totalPages() {
      return parseInt(this.getAllIssueList.meta.last_page) || 0; // Number of items per page
    }
  }),
  data: function data() {
    return {
      currentx: 1,
      // Initial page number
      openIssueTableColumns: _helpers_maintenanceTableColumns__WEBPACK_IMPORTED_MODULE_7__["openIssueTableColumns"],
      scheduledIssueTableColumns: _helpers_maintenanceTableColumns__WEBPACK_IMPORTED_MODULE_7__["scheduledIssueTableColumns"],
      inServiceIssueTableColumns: _helpers_maintenanceTableColumns__WEBPACK_IMPORTED_MODULE_7__["inServiceIssueTableColumns"],
      completedIssueTableColumns: _helpers_maintenanceTableColumns__WEBPACK_IMPORTED_MODULE_7__["completedIssueTableColumns"]
    };
  },
  mounted: function mounted() {
    this.init();
  },
  watch: {
    currentx: {
      handler: function handler(val) {
        var payload = {
          page: val,
          pageSize: 11
        };
        this.$store.dispatch("maintenanceV2/fetchIssueList", payload);
      }
    }
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.$vs.loading();

                if (this.getAllIssueList) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                payload = {
                  page: 1,
                  pageSize: 11
                };
                _context.next = 7;
                return this.$store.dispatch("maintenanceV2/fetchIssueList", payload);

              case 7:
                _context.next = 9;
                return this.$store.dispatch("companyUserV2/fetchAllUsers");

              case 9:
                _context.next = 11;
                return this.$store.dispatch("vehicleV2/fetchAllVehicles");

              case 11:
                _context.next = 15;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);

              case 15:
                _context.prev = 15;
                this.$vs.loading.close();
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13, 15, 18]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    openDeleteConfirmation: function () {
      var _openDeleteConfirmation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(id) {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$vs.dialog({
                  type: "confirm",
                  color: "danger",
                  title: "Delete Issue",
                  text: "Are you sure you want to delete this issue?",
                  accept: function accept() {
                    return _this.deleteSelectedIssue(id);
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function openDeleteConfirmation(_x) {
        return _openDeleteConfirmation.apply(this, arguments);
      };
    }(),
    deleteSelectedIssue: function () {
      var _deleteSelectedIssue = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.$store.dispatch("maintenanceV2/deleteIssue", id);

              case 3:
                _context3.next = 5;
                return this.$store.dispatch("maintenanceV2/fetchIssueList");

              case 5:
                this.init();
                this.$vs.notify({
                  time: 8000,
                  title: "Success",
                  text: "Deleted successfully",
                  color: "success"
                });
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                _context3.next = 13;
                return this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: _context3.t0.response.data.message || _context3.t0.message
                });

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      return function deleteSelectedIssue(_x2) {
        return _deleteSelectedIssue.apply(this, arguments);
      };
    }(),
    redirectToMaintenanceForm: function redirectToMaintenanceForm() {
      this.$router.push({
        name: "maintenance-add"
      });
    },
    redirectToMaintenanceEditForm: function redirectToMaintenanceEditForm(id) {
      this.$router.push({
        name: "maintenance-edit",
        params: {
          id: id
        }
      });
    },
    exportMaintenanceExcel: function () {
      var _exportMaintenanceExcel = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4() {
        var payload, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                payload = {
                  toDownload: 1
                };
                this.$vs.loading({
                  container: "#button-export-maintenance",
                  scale: 0.45
                });
                _context4.next = 5;
                return this.$store.dispatch("maintenanceV2/fetchIssueList", payload);

              case 5:
                data = _context4.sent;

                if (data.data.payload.hasOwnProperty("download_url")) {
                  window.location = data.data.payload.download_url;
                }

                return _context4.abrupt("return");

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: _context4.t0.response.data.message
                });

              case 13:
                _context4.prev = 13;
                this.$vs.loading.close("#button-export-maintenance > .con-vs-loading");
                return _context4.finish(13);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10, 13, 16]]);
      }));

      return function exportMaintenanceExcel() {
        return _exportMaintenanceExcel.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=template&id=697a1af8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=template&id=697a1af8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "dashboard"
  }, [_c("vx-card", {
    staticClass: "dashboard-header"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col flex-wrap flex justify-between w-full"
  }, [_c("h3", {
    staticClass: "title"
  }, [_vm._v("Maintenance")]), _vm._v(" "), _c("div", {
    staticClass: "vx-col flex"
  }, [_c("vs-button", {
    staticClass: "vs-con-loading__container",
    attrs: {
      color: "primary",
      type: "border",
      "icon-pack": "feather",
      icon: "icon-external-link",
      id: "button-export-maintenance"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.exportMaintenanceExcel.apply(null, arguments);
      }
    }
  }, [_vm._v("\n            Export\n          ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "ml-4",
    attrs: {
      type: "filled",
      icon: "add"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.redirectToMaintenanceForm.apply(null, arguments);
      }
    }
  }, [_vm._v("\n              NEW\n            ")])], 1)])])]), _vm._v(" "), _c("div", [_c("IssueList", {
    attrs: {
      header: "Reported Open Issues",
      tableColumns: _vm.openIssueTableColumns,
      tableValues: _vm.reportedIssue
    },
    on: {
      delete: _vm.openDeleteConfirmation,
      edit: _vm.redirectToMaintenanceEditForm
    }
  }), _vm._v(" "), _c("IssueList", {
    attrs: {
      header: "Scheduled",
      tableColumns: _vm.scheduledIssueTableColumns,
      tableValues: _vm.scheduledIssues
    },
    on: {
      delete: _vm.openDeleteConfirmation,
      edit: _vm.redirectToMaintenanceEditForm
    }
  }), _vm._v(" "), _c("IssueList", {
    attrs: {
      header: "In Service",
      tableColumns: _vm.inServiceIssueTableColumns,
      tableValues: _vm.serviceIssues
    },
    on: {
      delete: _vm.openDeleteConfirmation,
      edit: _vm.redirectToMaintenanceEditForm
    }
  }), _vm._v(" "), _c("IssueList", {
    attrs: {
      header: "Completed",
      tableColumns: _vm.completedIssueTableColumns,
      tableValues: _vm.completedIssues
    },
    on: {
      delete: _vm.openDeleteConfirmation,
      edit: _vm.redirectToMaintenanceEditForm
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("vs-pagination", {
    staticClass: "flex-row-reverse",
    attrs: {
      total: _vm.totalPages
    },
    model: {
      value: _vm.currentx,
      callback: function callback($$v) {
        _vm.currentx = $$v;
      },
      expression: "currentx"
    }
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .dashboard .vx-card[data-v-697a1af8] {\n  border-radius: 25px;\n}\n.dashboard-header .title[data-v-697a1af8] {\n  align-self: center;\n}\n.dashboard-header[data-v-697a1af8] .vs-button--text {\n  font-size: 0.9rem;\n}\n.dashboard-header[data-v-697a1af8] .vs-button--icon {\n  font-size: 1.7rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MaintenanceIssueList_vue_vue_type_template_id_697a1af8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaintenanceIssueList.vue?vue&type=template&id=697a1af8&scoped=true& */ "./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=template&id=697a1af8&scoped=true&");
/* harmony import */ var _MaintenanceIssueList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaintenanceIssueList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MaintenanceIssueList_vue_vue_type_style_index_0_id_697a1af8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true& */ "./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MaintenanceIssueList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MaintenanceIssueList_vue_vue_type_template_id_697a1af8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MaintenanceIssueList_vue_vue_type_template_id_697a1af8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "697a1af8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceIssueList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_style_index_0_id_697a1af8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=style&index=0&id=697a1af8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_style_index_0_id_697a1af8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_style_index_0_id_697a1af8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_style_index_0_id_697a1af8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_style_index_0_id_697a1af8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=template&id=697a1af8&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=template&id=697a1af8&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_template_id_697a1af8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceIssueList.vue?vue&type=template&id=697a1af8&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceIssueList.vue?vue&type=template&id=697a1af8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_template_id_697a1af8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceIssueList_vue_vue_type_template_id_697a1af8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/maintenance-v2/helpers/maintenanceTableColumns.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/maintenance-v2/helpers/maintenanceTableColumns.js ***!
  \****************************************************************************************/
/*! exports provided: openIssueTableColumns, scheduledIssueTableColumns, inServiceIssueTableColumns, completedIssueTableColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openIssueTableColumns", function() { return openIssueTableColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduledIssueTableColumns", function() { return scheduledIssueTableColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inServiceIssueTableColumns", function() { return inServiceIssueTableColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completedIssueTableColumns", function() { return completedIssueTableColumns; });
var openIssueTableColumns = [{
  header: 'ID',
  field: 'issueNumber'
}, {
  header: 'Priority',
  field: 'priority',
  action: 'getPriorityLabel'
}, {
  header: 'Date Reported',
  field: 'dateReported',
  action: 'trimSeconds'
}, {
  header: 'Unit',
  field: 'unit'
}, {
  header: 'Year',
  field: 'year'
}, {
  header: 'Make',
  field: 'make'
}, {
  header: 'Vin',
  field: 'vin'
}, {
  header: 'Issue Text',
  field: 'notes',
  action: 'trimText'
}, {
  header: 'Modified By',
  field: 'lastModifiedByUserFullName'
}];
var scheduledIssueTableColumns = [{
  header: 'ID',
  field: 'issueNumber'
}, {
  header: 'Priority',
  field: 'priority',
  action: 'getPriorityLabel'
}, {
  header: 'Unit',
  field: 'unit'
}, {
  header: 'Year',
  field: 'year'
}, {
  header: 'Make',
  field: 'make'
}, {
  header: 'Vin',
  field: 'vin'
}, {
  header: 'Service Location',
  field: 'serviceLocation'
}, {
  header: 'Scheduled Time in',
  field: 'scheduledStartTime',
  action: 'trimSeconds'
}, {
  header: 'Estimated Completion Time',
  field: 'estimatedCompletionTime',
  action: 'trimSeconds'
}, {
  header: 'Modified By',
  field: 'lastModifiedByUserFullName'
}];
var inServiceIssueTableColumns = [{
  header: 'ID',
  field: 'issueNumber'
}, {
  header: 'Priority',
  field: 'priority',
  action: 'getPriorityLabel'
}, {
  header: 'Unit',
  field: 'unit'
}, {
  header: 'Year',
  field: 'year'
}, {
  header: 'Make',
  field: 'make'
}, {
  header: 'Vin',
  field: 'vin'
}, {
  header: 'Issue Text',
  field: 'notes',
  action: 'trimText'
}, {
  header: 'Service Location',
  field: 'serviceLocation'
}, {
  header: 'Arrived For Service',
  field: 'arrivedForService',
  action: 'trimSeconds'
}, {
  header: 'Service Start Time',
  field: 'serviceStartTime',
  action: 'trimSeconds'
}, {
  header: 'Updated Estimated Completion Time',
  field: 'updatedEstimatedCompletionTime',
  action: 'trimSeconds'
}, {
  header: 'Modified By',
  field: 'lastModifiedByUserFullName'
}];
var completedIssueTableColumns = [{
  header: 'ID',
  field: 'issueNumber'
}, {
  header: 'Unit',
  field: 'unit'
}, {
  header: 'Year',
  field: 'year'
}, {
  header: 'Make',
  field: 'make'
}, {
  header: 'Vin',
  field: 'vin'
}, {
  header: 'Service Location',
  field: 'serviceLocation'
}, {
  header: 'Completed Time',
  field: 'serviceCompletedTime',
  action: 'trimSeconds'
}, {
  header: 'Modified By',
  field: 'lastModifiedByUserFullName'
}];

/***/ })

}]);
//# sourceMappingURL=129.js.map