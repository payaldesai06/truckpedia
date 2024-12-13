(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[175],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/symbol/iterator */ "./node_modules/@babel/runtime/core-js/symbol/iterator.js");
/* harmony import */ var _babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/symbol */ "./node_modules/@babel/runtime/core-js/symbol.js");
/* harmony import */ var _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");






function _typeof(obj) { if (typeof _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TrailersList',
  data: function data() {
    return {
      trailers: [],
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
        status: 'active',
        // string, one of “active” or “inactive”,
        trailerNumber: '',
        // string,
        driverName: '',
        // string,
        year: '',
        // string,
        make: '',
        // string,
        vin: '',
        // string,
        licensePlate: '',
        // string,
        tagId: {
          value: null
        }
      },
      sortBy: {},
      loading: false,
      paginationMetaData: null,
      defaultPageSize: 25,
      allTags: []
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
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
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
    fetchTrailers: function () {
      var _fetchTrailers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
        var pageSize,
            currentPage,
            payload,
            filter,
            key,
            _ref2,
            data,
            meta,
            links,
            _args2 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pageSize = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : this.defaultPageSize;
                currentPage = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
                _context2.prev = 2;
                this.loading = true;
                payload = {
                  pageSize: pageSize // sortBy: this.sortBy,

                };
                filter = {};
                _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.keys(this.filter);

              case 7:
                if ((_context2.t1 = _context2.t0()).done) {
                  _context2.next = 15;
                  break;
                }

                key = _context2.t1.value;

                if (!(_typeof(this.filter[key]) === 'object')) {
                  _context2.next = 12;
                  break;
                }

                if (this.filter[key].value !== null) {
                  filter[key] = this.filter[key].value;
                }

                return _context2.abrupt("continue", 7);

              case 12:
                if (this.filter[key]) {
                  filter[key] = this.filter[key];
                }

                _context2.next = 7;
                break;

              case 15:
                if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(filter).length) {
                  payload.filter = filter;
                }

                _context2.next = 18;
                return this.$store.dispatch('trailersV2/fetchAllTrailers', {
                  currentPage: currentPage,
                  payload: payload
                });

              case 18:
                _ref2 = _context2.sent;
                data = _ref2.data;
                meta = _ref2.meta;
                links = _ref2.links;
                this.trailers = data || [];
                this.totalPage = (meta || {}).last_page || 1;
                this.totalRecords = (meta || {}).total || 0;
                this.paginationMetaData = meta;
                return _context2.abrupt("return", data);

              case 29:
                _context2.prev = 29;
                _context2.t2 = _context2["catch"](2);
                _context2.next = 33;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_5__["getApiErrorMsg"])(_context2.t2)
                });

              case 33:
                _context2.prev = 33;
                this.loading = false;
                return _context2.finish(33);

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 29, 33, 36]]);
      }));

      return function fetchTrailers() {
        return _fetchTrailers.apply(this, arguments);
      };
    }(),
    initLocalFilters: function initLocalFilters() {
      var _this = this;

      var lastRouteName = this.$store.state.previousRoute;
      var validRoutes = ['CreateTrailer', 'UpdateTrailer'];
      var trailerFilters = this.$store.state.localFilters && this.$store.state.localFilters.trailerFilters || {};

      if (lastRouteName && validRoutes.includes(lastRouteName) && trailerFilters) {
        _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(trailerFilters).forEach(function (key) {
          if (trailerFilters[key]) {
            if (_typeof(trailerFilters[key]) === 'object') {
              _this.filter[key].value = trailerFilters[key].value;
            } else {
              _this.filter[key] = trailerFilters[key];
            }
          }
        });
      } else {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          trailerFilters: {}
        });
      }
    },
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.$vs.loading();
                _context3.next = 4;
                return this.fetchTrailers();

              case 4:
                _context3.next = 8;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);

              case 8:
                _context3.prev = 8;
                this.$vs.loading.close();
                return _context3.finish(8);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6, 8, 11]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    redirectToAddTrailer: function redirectToAddTrailer() {
      this.saveLocalFilters();
      this.$router.push({
        name: 'CreateTrailer'
      }).catch(function () {
        return true;
      });
    },
    editTrailer: function editTrailer(data) {
      if (!(data || {}).id) return;
      this.saveLocalFilters();
      this.$router.push({
        name: 'UpdateTrailer',
        params: {
          trailerDetails: data,
          id: data.id
        }
      }).catch(function () {
        return true;
      });
    },
    onSort: function onSort(event) {},
    onPage: function onPage(_ref3) {
      var page = _ref3.page,
          rows = _ref3.rows;
      this.fetchTrailers(rows, page + 1);
    },
    getAllTags: function () {
      var _getAllTags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$store.dispatch('tag/getAllTags');

              case 2:
                response = _context4.sent;
                this.allTags = response.payload.data;

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
    exportExcel: function () {
      var _exportExcel = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5() {
        var payload, filter, key, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                payload = {
                  filter: {}
                };
                filter = {};
                _context5.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.keys(this.filter);

              case 4:
                if ((_context5.t1 = _context5.t0()).done) {
                  _context5.next = 12;
                  break;
                }

                key = _context5.t1.value;

                if (!(_typeof(this.filter[key]) === 'object')) {
                  _context5.next = 9;
                  break;
                }

                if (this.filter[key].value !== null) {
                  filter[key] = this.filter[key].value;
                }

                return _context5.abrupt("continue", 4);

              case 9:
                if (this.filter[key]) {
                  filter[key] = this.filter[key];
                }

                _context5.next = 4;
                break;

              case 12:
                if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(filter).length) {
                  payload.filter = filter;
                }

                payload.filter.toDownload = 1;
                this.$vs.loading({
                  container: '#button-export-loading',
                  scale: 0.45
                });
                _context5.next = 17;
                return this.$store.dispatch('trailersV2/fetchAllTrailers', {
                  payload: payload
                });

              case 17:
                data = _context5.sent;
                window.location = data.download_url;
                return _context5.abrupt("return");

              case 22:
                _context5.prev = 22;
                _context5.t2 = _context5["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_5__["getApiErrorMsg"])(_context5.t2)
                });

              case 25:
                _context5.prev = 25;
                this.$vs.loading.close('#button-export-loading > .con-vs-loading');
                return _context5.finish(25);

              case 28:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 22, 25, 28]]);
      }));

      return function exportExcel() {
        return _exportExcel.apply(this, arguments);
      };
    }(),
    onFilter: function () {
      var _onFilter = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                this.loading = true;
                _context6.next = 4;
                return this.fetchTrailers();

              case 4:
                _context6.next = 9;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_5__["getApiErrorMsg"])(_context6.t0)
                });

              case 9:
                _context6.prev = 9;
                this.loading = false;
                return _context6.finish(9);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 6, 9, 12]]);
      }));

      return function onFilter() {
        return _onFilter.apply(this, arguments);
      };
    }(),
    saveLocalFilters: function saveLocalFilters() {
      var _this2 = this;

      var isFilterApplied = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.filter).some(function (key) {
        if (key === 'status' && _this2.filter[key] === 'active') {
          return false;
        }

        if (_typeof(_this2.filter[key]) === 'object') {
          return _this2.filter[key].value;
        }

        return _this2.filter[key];
      });

      if (isFilterApplied) {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          trailerFilters: this.filter
        });
      } else {
        this.$store.commit('UPDATE_LOCAL_FILTERS', {
          trailerFilters: {}
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=template&id=17768268&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=template&id=17768268&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "title",
    domProps: {
      textContent: _vm._s("Trailers")
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
        return _vm.fetchTrailers();
      }
    },
    model: {
      value: _vm.filter.status,
      callback: function callback($$v) {
        _vm.$set(_vm.filter, "status", $$v);
      },
      expression: "filter.status"
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
      icon: "local_shipping"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.redirectToAddTrailer.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        ADD TRAILER\n      ")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.trailers,
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
        var data = _ref.data;
        return [_c("div", [_c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "edit"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.editTrailer(data);
            }
          }
        })], 1)];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "trailerNumber",
      header: "Trailer Number",
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var trailerNumber = _ref2.data.trailerNumber;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(trailerNumber)
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
            value: _vm.filter["trailerNumber"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "trailerNumber", $$v);
            },
            expression: "filter['trailerNumber']"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "driverName",
      header: "Driver Name",
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var driverName = _ref4.data.driverName;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(driverName)
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
            value: _vm.filter["driverName"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "driverName", $$v);
            },
            expression: "filter['driverName']"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "year",
      header: "Year",
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref6) {
        var year = _ref6.data.year;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(year)
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
            value: _vm.filter["year"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "year", $$v);
            },
            expression: "filter['year']"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "make",
      header: "Make",
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref8) {
        var make = _ref8.data.make;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(make)
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
            value: _vm.filter["make"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "make", $$v);
            },
            expression: "filter['make']"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "vin",
      header: "VIN",
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref10) {
        var vin = _ref10.data.vin;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(vin)
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
            value: _vm.filter["vin"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "vin", $$v);
            },
            expression: "filter['vin']"
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
      fn: function fn(_ref12) {
        var tags = _ref12.data.tags;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(_vm.getTags(tags))
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref13) {
        _objectDestructuringEmpty(_ref13);

        return [_c("Dropdown", {
          staticClass: "p-column-filter",
          attrs: {
            options: _vm.allTags,
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
      field: "licensePlate",
      header: "License Plate",
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref14) {
        var licensePlate = _ref14.data.licensePlate;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(licensePlate)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref15) {
        _objectDestructuringEmpty(_ref15);

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
            value: _vm.filter["licensePlate"],
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "licensePlate", $$v);
            },
            expression: "filter['licensePlate']"
          }
        })];
      }
    }])
  })], 1)], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-17768268] .vs-input--icon {\n  top: 10px;\n}\n.min-width-125[data-v-17768268] {\n  min-width: 125px;\n}\n[dir] .vx-card[data-v-17768268] {\n  box-shadow: none !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/trailers/TrailersList.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/TrailersList.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrailersList_vue_vue_type_template_id_17768268_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrailersList.vue?vue&type=template&id=17768268&scoped=true& */ "./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=template&id=17768268&scoped=true&");
/* harmony import */ var _TrailersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrailersList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TrailersList_vue_vue_type_style_index_0_id_17768268_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true& */ "./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TrailersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrailersList_vue_vue_type_template_id_17768268_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrailersList_vue_vue_type_template_id_17768268_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "17768268",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trailers/TrailersList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailersList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_style_index_0_id_17768268_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=style&index=0&id=17768268&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_style_index_0_id_17768268_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_style_index_0_id_17768268_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_style_index_0_id_17768268_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_style_index_0_id_17768268_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=template&id=17768268&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=template&id=17768268&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_template_id_17768268_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailersList.vue?vue&type=template&id=17768268&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailersList.vue?vue&type=template&id=17768268&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_template_id_17768268_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailersList_vue_vue_type_template_id_17768268_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=175.js.map