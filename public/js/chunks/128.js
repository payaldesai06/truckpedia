(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _mixins_hosMixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/mixins/hosMixin */ "./resources/js/src/mixins/hosMixin.js");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DriverList',
  mixins: [_mixins_hosMixin__WEBPACK_IMPORTED_MODULE_10__["default"]],
  data: function data() {
    return {
      drivers: [],
      totalPage: 1,
      totalRecords: 0,
      status: [{
        id: 1,
        label: 'Active',
        value: 'active'
      }, {
        id: 2,
        label: 'Inactive',
        value: 'inactive'
      }],
      filter: {
        status: {
          value: 'active'
        },
        name: {
          value: null
        },
        truckNumber: {
          value: null
        },
        trailerNumber: {
          value: null
        },
        phone: {
          value: null
        },
        email: {
          value: null
        },
        driverType: {
          value: null
        },
        companyEmployeeId: {
          value: null
        },
        tagId: {
          value: null
        }
      },
      sortBy: {
        field: null,
        order: null
      },
      loading: false,
      paginationMetaData: null,
      defaultPageSize: 25,
      driverTypes: _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].driverTypes,
      allTags: [],
      defaultKey: 0,
      driverHos: [],
      hosKnobIconHeight: 35,
      hosKnobStrokeWidth: 5,
      isComponentCreated: false
    };
  },
  computed: {
    footerText: function footerText() {
      var _ref = this.paginationMetaData || {},
          from = _ref.from,
          to = _ref.to,
          total = _ref.total;

      if (from && to && total) {
        return "Displaying ".concat(from, " to ").concat(to, " of ").concat(total, " records");
      }

      return '';
    },
    knobStyleObject: function knobStyleObject() {
      return {
        height: "35px"
      };
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getAllTags();

            case 2:
              this.initLocalFilters();
              this.init();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function created() {
      return _created.apply(this, arguments);
    };
  }(),
  methods: {
    fetchDrivers: function () {
      var _fetchDrivers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
        var _this = this;

        var pageSize,
            currentPage,
            _ref2,
            data,
            _ref3,
            meta,
            _ref4,
            last_page,
            total,
            _args2 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pageSize = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 25;
                currentPage = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
                _context2.prev = 2;
                this.loading = true;
                _context2.next = 6;
                return this.$store.dispatch('driverV2/fetchDriverList', {
                  page: currentPage,
                  pageSize: pageSize,
                  filter: _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.filter).reduce(function (acc, key) {
                    if (_this.filter[key].value) {
                      acc[key] = _this.filter[key].value;
                    }

                    return acc;
                  }, {}),
                  sortBy: this.sortBy.field && this.sortBy.order ? this.sortBy : {}
                });

              case 6:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.drivers = data.payload.data || [];
                _ref3 = (data || {}).payload || {}, meta = _ref3.meta;
                _ref4 = meta || {}, last_page = _ref4.last_page, total = _ref4.total;
                this.totalPage = last_page || 1;
                this.totalRecords = total || 0;
                this.paginationMetaData = meta; // if (this.isComponentCreated) this.getDriverHos();

                return _context2.abrupt("return", data);

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](2);
                _context2.next = 21;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: _context2.t0.response.data.message || _context2.t0.message
                });

              case 21:
                _context2.prev = 21;
                this.loading = false;
                return _context2.finish(21);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 17, 21, 24]]);
      }));

      return function fetchDrivers() {
        return _fetchDrivers.apply(this, arguments);
      };
    }(),
    initLocalFilters: function initLocalFilters() {
      var _this2 = this;

      var lastRouteName = this.$store.state.previousRoute;
      var validRoutes = ['drivers-add', 'drivers-edit'];
      var driverFilters = this.$store.state.localFilters && this.$store.state.localFilters.driverFilters || {};

      if (lastRouteName && validRoutes.includes(lastRouteName) && driverFilters) {
        _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(driverFilters).forEach(function (key) {
          if (driverFilters[key].value) {
            _this2.filter[key].value = driverFilters[key].value;
          }
        });
      } else {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          driverFilters: {}
        });
      }
    },
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.$vs.loading();
                _context3.next = 4;
                return this.fetchDrivers();

              case 4:
                _context3.next = 6;
                return this.$store.dispatch('vehicleV2/fetchAllVehicles');

              case 6:
                _context3.next = 10;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

              case 10:
                _context3.prev = 10;
                this.$vs.loading.close();
                this.isComponentCreated = true;
                return _context3.finish(10);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8, 10, 14]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    redirectToAddDriver: function redirectToAddDriver() {
      this.saveLocalFilters();
      this.$router.push({
        name: 'drivers-add'
      }).catch(function () {
        return true;
      });
    },
    redirectToEditDriver: function redirectToEditDriver(id) {
      this.saveLocalFilters();
      this.$router.push({
        name: 'drivers-edit',
        params: {
          id: id
        }
      }).catch(function () {
        return true;
      });
    },
    onSort: function onSort(_ref5) {
      var sortField = _ref5.sortField,
          sortOrder = _ref5.sortOrder;
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? 'asc' : 'desc'
      };
      this.onFilter();
    },
    onPage: function onPage(_ref6) {
      var page = _ref6.page,
          rows = _ref6.rows;
      this.fetchDrivers(rows, page + 1);
    },
    getDriverType: function getDriverType(driverType) {
      var driverTypeObj = _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].driverTypes.find(function (item) {
        return item.value === driverType;
      });
      return driverTypeObj ? driverTypeObj.label : '';
    },
    getAllTags: function () {
      var _getAllTags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$store.dispatch('tag/getAllTags');

              case 2:
                response = _context4.sent;
                this.allTags = response.payload.data.map(function (item) {
                  return _objectSpread({}, item, {
                    uniqueId: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getUniqueIdV4"])()
                  });
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getAllTags() {
        return _getAllTags.apply(this, arguments);
      };
    }(),
    getTags: function getTags(tags) {
      var tagLabels = [];
      tags.forEach(function (value) {
        tagLabels.push(value.tagBusinessName);
      });
      return tagLabels.join(', ');
    },
    onFilter: function () {
      var _onFilter = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.loading = true;
                _context5.next = 4;
                return this.fetchDrivers();

              case 4:
                _context5.next = 9;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context5.t0.response.data.message
                });

              case 9:
                _context5.prev = 9;
                this.loading = false;
                return _context5.finish(9);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 6, 9, 12]]);
      }));

      return function onFilter() {
        return _onFilter.apply(this, arguments);
      };
    }(),
    exportExcel: function () {
      var _exportExcel = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee6() {
        var _this3 = this;

        var payload, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                payload = {
                  filter: {}
                };
                payload.filter = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.filter).reduce(function (acc, key) {
                  if (_this3.filter[key].value) {
                    acc[key] = _this3.filter[key].value;
                  }

                  return acc;
                }, {});
                payload.filter.toDownload = true;
                this.$vs.loading({
                  container: '#button-export-loading',
                  scale: 0.45
                });
                _context6.next = 7;
                return this.$store.dispatch('driverV2/fetchDriverList', payload);

              case 7:
                data = _context6.sent;
                window.location = data.data.payload.download_url;
                return _context6.abrupt("return");

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context6.t0.response.data.message
                });

              case 15:
                _context6.prev = 15;
                this.$vs.loading.close('#button-export-loading > .con-vs-loading');
                return _context6.finish(15);

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 12, 15, 18]]);
      }));

      return function exportExcel() {
        return _exportExcel.apply(this, arguments);
      };
    }(),
    getDriverHos: function () {
      var _getDriverHos = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee7() {
        var _ref7, status, hos;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return this.$store.dispatch('hos/fetchHos');

              case 3:
                _ref7 = _context7.sent;
                status = _ref7.status;
                hos = _ref7.data.payload.hos;

                if (status === 200 && hos && hos.length) {
                  this.driverHos = _toConsumableArray(hos);
                  this.initDriverHosColData();
                }

                _context7.next = 12;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](0);
                console.error(_context7.t0);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 9]]);
      }));

      return function getDriverHos() {
        return _getDriverHos.apply(this, arguments);
      };
    }(),
    initDriverHosColData: function initDriverHosColData() {
      var _this4 = this;

      if (this.driverHos && this.driverHos.length) {
        (this.drivers || []).forEach(function (driver) {
          driver.driverHos = _this4.initHosData(_this4.driverHos, driver.firstName, driver.lastName);
        });
        this.defaultKey = new Date().getTime();
      }
    },
    saveLocalFilters: function saveLocalFilters() {
      var _this5 = this;

      // Check if any filter is applied
      var isFilterApplied = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.filter).some(function (key) {
        if (key === 'status' && _this5.filter[key].value === 'active') {
          return false;
        }

        return _this5.filter[key].value;
      });

      if (isFilterApplied) {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          driverFilters: this.filter
        });
      } else {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          driverFilters: {}
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=template&id=3ef5e8ff&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=template&id=3ef5e8ff&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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

  return _c("vx-card", [_c("div", {
    staticClass: "vx-row m-0 flex justify-between items-center w-full"
  }, [_c("div", {
    staticClass: "vx-col pl-0 flex items-center"
  }, [_c("h3", {
    domProps: {
      textContent: _vm._s("Drivers")
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
        return _vm.fetchDrivers();
      }
    },
    model: {
      value: _vm.filter.status.value,
      callback: function callback($$v) {
        _vm.$set(_vm.filter.status, "value", $$v);
      },
      expression: "filter.status.value"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col pr-0 flex"
  }, [_c("vs-button", {
    staticClass: "vs-con-loading__container",
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
  }, [_vm._v("\n        Export\n      ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "ml-4",
    attrs: {
      color: "primary",
      icon: "person_add"
    },
    on: {
      click: _vm.redirectToAddDriver
    }
  }, [_vm._v("\n        ADD DRIVER\n      ")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("DataTable", {
    key: _vm.defaultKey,
    attrs: {
      value: _vm.drivers,
      filterDisplay: "row",
      filters: _vm.filter,
      removableSort: "",
      responsiveLayout: "scroll",
      lazy: true,
      paginator: true,
      rows: _vm.defaultPageSize,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      rowsPerPageOptions: [10, 25, 50],
      currentPageReportTemplate: "Displaying {first} to {last} of {totalRecords} records"
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
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }, _vm.footerText ? {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "vx-row flex justify-between items-center"
        }, [_c("div", {
          staticClass: "vx-col"
        }, [_vm._v(_vm._s(_vm.footerText))]), _vm._v(" "), _c("div", {
          staticClass: "vx-col"
        })])];
      },
      proxy: true
    } : null], null, true)
  }, [_c("Column", {
    attrs: {
      header: "",
      headerStyle: {
        width: "0.5rem"
      }
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var id = _ref.data.id;
        return [_c("div", [_c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "edit"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.redirectToEditDriver(id);
            }
          }
        })], 1)];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "name",
      header: "Name",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var name = _ref2.data.name;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(name)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref3) {
        _objectDestructuringEmpty(_ref3);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onFilter
          },
          model: {
            value: _vm.filter["name"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["name"], "value", $$v);
            },
            expression: "filter['name'].value"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "truckNumber",
      header: "Truck",
      showFilterMenu: false,
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var truckNumber = _ref4.data.truckNumber;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(truckNumber)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref5) {
        _objectDestructuringEmpty(_ref5);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onFilter
          },
          model: {
            value: _vm.filter["truckNumber"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["truckNumber"], "value", $$v);
            },
            expression: "filter['truckNumber'].value"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "trailerNumber",
      header: "Trailer",
      showFilterMenu: false,
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref6) {
        var trailerNumber = _ref6.data.trailerNumber;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(trailerNumber)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref7) {
        _objectDestructuringEmpty(_ref7);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onFilter
          },
          model: {
            value: _vm.filter["trailerNumber"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["trailerNumber"], "value", $$v);
            },
            expression: "filter['trailerNumber'].value"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "phone",
      header: "Phone",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref8) {
        var phone = _ref8.data.phone;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(phone)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref9) {
        _objectDestructuringEmpty(_ref9);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onFilter
          },
          model: {
            value: _vm.filter["phone"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["phone"], "value", $$v);
            },
            expression: "filter['phone'].value"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "email",
      header: "Email",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref10) {
        var email = _ref10.data.email;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(email)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref11) {
        _objectDestructuringEmpty(_ref11);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onFilter
          },
          model: {
            value: _vm.filter["email"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["email"], "value", $$v);
            },
            expression: "filter['email'].value"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "companyEmployeeId",
      header: "Employee ID",
      showFilterMenu: false,
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref12) {
        var companyEmployeeId = _ref12.data.companyEmployeeId;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(companyEmployeeId)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref13) {
        _objectDestructuringEmpty(_ref13);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onFilter
          },
          model: {
            value: _vm.filter["companyEmployeeId"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["companyEmployeeId"], "value", $$v);
            },
            expression: "filter['companyEmployeeId'].value"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "Tag",
      header: "Tag",
      showFilterMenu: false,
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref14) {
        var tags = _ref14.data.tags;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(_vm.getTags(tags))
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref15) {
        _objectDestructuringEmpty(_ref15);

        return [_c("Dropdown", {
          staticClass: "p-column-filter",
          attrs: {
            options: _vm.allTags,
            dataKey: "uniqueId",
            placeholder: "Tag",
            optionLabel: "business_name",
            optionValue: "tag_id",
            showClear: true,
            appendTo: "body"
          },
          on: {
            change: function change($event) {
              return _vm.onFilter();
            }
          },
          model: {
            value: _vm.filter["tagId"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["tagId"], "value", $$v);
            },
            expression: "filter['tagId'].value"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "driverType",
      header: "Driver Type",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref16) {
        var driverType = _ref16.data.driverType;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(_vm.getDriverType(driverType))
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref17) {
        _objectDestructuringEmpty(_ref17);

        return [_c("Dropdown", {
          staticClass: "p-column-filter",
          attrs: {
            options: _vm.driverTypes,
            placeholder: "Any",
            optionLabel: "label",
            optionValue: "value",
            showClear: true,
            appendTo: "body"
          },
          on: {
            change: function change($event) {
              return _vm.onFilter();
            }
          },
          model: {
            value: _vm.filter["driverType"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filter["driverType"], "value", $$v);
            },
            expression: "filter['driverType'].value"
          }
        })];
      }
    }])
  })], 1)], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-3ef5e8ff] .vs-input--icon {\n  top: 10px;\n}\n[data-v-3ef5e8ff] .p-column-filter-clear-button {\n  display: none;\n}\n.min-width-125[data-v-3ef5e8ff] {\n  min-width: 125px;\n}\n[dir] .vx-card[data-v-3ef5e8ff] {\n  box-shadow: none !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/mixins/hosMixin.js":
/*!*********************************************!*\
  !*** ./resources/js/src/mixins/hosMixin.js ***!
  \*********************************************/
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





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    calculatePercentageBasedOnSeconds: function calculatePercentageBasedOnSeconds(seconds, type) {
      var cycleLength = {
        breakInS: 28800,
        // 8 hours
        driveInS: 39600,
        // 11 hours
        shiftInS: 50400,
        // 14 hours
        cycleInS: 252000 // 70 hours

      };

      if (seconds != null && type) {
        if (seconds === 0) return 100;
        return seconds / cycleLength[type] * 100;
      } else {
        return 0;
      }
    },
    convertSecondsToHoursAndMinutes: function convertSecondsToHoursAndMinutes(seconds) {
      if (seconds != null) {
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds - hours * 3600) / 60);
        return "".concat(hours.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0"));
      }
    },
    getCircleColor: function getCircleColor(seconds) {
      if (seconds != null) {
        var greenColor = "#33ef95";
        var greyColor = "#e9e9e9";
        var yellowColor = "#f3b543";
        var lightYellowColor = "#ffe6b3";
        var lightRedColor = "#ffc8bf";
        var minutes = seconds / 60;

        if (minutes <= 0) {
          return {
            valueColor: lightRedColor,
            rangeColor: lightRedColor
          };
        } else if (minutes > 0 && minutes < 30) {
          return {
            valueColor: yellowColor,
            rangeColor: lightYellowColor
          };
        } else {
          return {
            valueColor: greenColor,
            rangeColor: greyColor
          };
        }
      } else {
        return {
          valueColor: "#fff",
          rangeColor: "#fff"
        };
      }
    },
    initHosData: function initHosData(hosData, firstName, lastName) {
      if (hosData && hosData.length && (firstName || lastName)) {
        var firstNameLC = (firstName || "").toLowerCase();
        var lastNameLC = (lastName || "").toLowerCase();
        var driverHosData = hosData.find(function (_ref) {
          var externalDriverName = _ref.externalDriverName;
          var externalDriverNameLC = (externalDriverName || "").toLowerCase();

          if (externalDriverNameLC == firstNameLC + " " + lastNameLC) {
            return true;
          } else if (externalDriverNameLC.includes(firstNameLC) && externalDriverNameLC.includes(lastNameLC)) {
            return true;
          }

          return false;
        });

        if (driverHosData) {
          var breakValue = this.calculatePercentageBasedOnSeconds(driverHosData.clocks.breakInS, "breakInS");
          var breakLabel = this.convertSecondsToHoursAndMinutes(driverHosData.clocks.breakInS);

          var _this$getCircleColor = this.getCircleColor(driverHosData.clocks.breakInS),
              breakValueColor = _this$getCircleColor.valueColor,
              breakRangeColor = _this$getCircleColor.rangeColor;

          var driveValue = this.calculatePercentageBasedOnSeconds(driverHosData.clocks.driveInS, "driveInS");
          var driveLabel = this.convertSecondsToHoursAndMinutes(driverHosData.clocks.driveInS);

          var _this$getCircleColor2 = this.getCircleColor(driverHosData.clocks.driveInS),
              driveValueColor = _this$getCircleColor2.valueColor,
              driveRangeColor = _this$getCircleColor2.rangeColor;

          var shiftValue = this.calculatePercentageBasedOnSeconds(driverHosData.clocks.shiftInS, "shiftInS");
          var shiftLabel = this.convertSecondsToHoursAndMinutes(driverHosData.clocks.shiftInS);

          var _this$getCircleColor3 = this.getCircleColor(driverHosData.clocks.shiftInS),
              shiftValueColor = _this$getCircleColor3.valueColor,
              shiftRangeColor = _this$getCircleColor3.rangeColor;

          var cycleValue = this.calculatePercentageBasedOnSeconds(driverHosData.clocks.cycleInS, "cycleInS");
          var cycleLabel = this.convertSecondsToHoursAndMinutes(driverHosData.clocks.cycleInS);

          var _this$getCircleColor4 = this.getCircleColor(driverHosData.clocks.cycleInS),
              cycleValueColor = _this$getCircleColor4.valueColor,
              cycleRangeColor = _this$getCircleColor4.rangeColor;

          return _objectSpread({}, driverHosData.clocks, {
            breakValue: breakValue,
            breakLabel: breakLabel,
            breakValueColor: breakValueColor,
            breakRangeColor: breakRangeColor,
            driveValue: driveValue,
            driveLabel: driveLabel,
            driveValueColor: driveValueColor,
            driveRangeColor: driveRangeColor,
            shiftValue: shiftValue,
            shiftLabel: shiftLabel,
            shiftValueColor: shiftValueColor,
            shiftRangeColor: shiftRangeColor,
            cycleValue: cycleValue,
            cycleLabel: cycleLabel,
            cycleValueColor: cycleValueColor,
            cycleRangeColor: cycleRangeColor
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/DriverList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/DriverList.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DriverList_vue_vue_type_template_id_3ef5e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DriverList.vue?vue&type=template&id=3ef5e8ff&scoped=true& */ "./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=template&id=3ef5e8ff&scoped=true&");
/* harmony import */ var _DriverList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DriverList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DriverList_vue_vue_type_style_index_0_id_3ef5e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true& */ "./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DriverList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DriverList_vue_vue_type_template_id_3ef5e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DriverList_vue_vue_type_template_id_3ef5e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ef5e8ff",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/drivers/DriverList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_style_index_0_id_3ef5e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=style&index=0&id=3ef5e8ff&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_style_index_0_id_3ef5e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_style_index_0_id_3ef5e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_style_index_0_id_3ef5e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_style_index_0_id_3ef5e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=template&id=3ef5e8ff&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=template&id=3ef5e8ff&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_template_id_3ef5e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverList.vue?vue&type=template&id=3ef5e8ff&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/DriverList.vue?vue&type=template&id=3ef5e8ff&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_template_id_3ef5e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverList_vue_vue_type_template_id_3ef5e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=128.js.map