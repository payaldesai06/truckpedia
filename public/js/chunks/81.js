(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_EmailAccounts_Headers_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EmailAccounts/Headers.vue */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue");
/* harmony import */ var _components_EmailAccounts_EmailAccountTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EmailAccounts/EmailAccountTable.vue */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Marketing',
  data: function data() {
    return {
      search: '',
      activeComponent: 'email'
    };
  },
  components: {
    Headers: _components_EmailAccounts_Headers_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    EmailAccountTable: _components_EmailAccounts_EmailAccountTable_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    changeComponent: function changeComponent(newComponent) {
      if (newComponent === this.activeComponent) return;
      this.activeComponent = newComponent;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _helpers_eventBus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/eventBus */ "./resources/js/src/helpers/eventBus.js");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EmailAccountTable',
  components: {
    EmailSidebar: function EmailSidebar() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(163)]).then(__webpack_require__.bind(null, /*! ./EmailSidebar.vue */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailSidebar.vue"));
    }
  },
  data: function data() {
    return {
      emailAccounts: [],
      totalRecords: 0,
      paginationMetaData: {},
      loading: false,
      rows: 25,
      filters: {
        email: {
          value: null
        },
        firstName: {
          value: null
        },
        lastName: {
          value: null
        }
      },
      sortBy: {
        field: null,
        order: null
      },
      statuses: ['active', 'draft', 'completed'],
      emailSidebar: {
        isActive: false,
        data: {}
      }
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
  created: function created() {
    this.init();
  },
  mounted: function mounted() {
    _helpers_eventBus__WEBPACK_IMPORTED_MODULE_4__["EventBus"].$on('refreshEmailAccounts', this.fetchEmailAccounts);
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.$vs.loading();
                _context.next = 4;
                return this.fetchEmailAccounts();

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);

              case 8:
                _context.prev = 8;
                this.$vs.loading.close();
                return _context.finish(8);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6, 8, 11]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    fetchEmailAccounts: function () {
      var _fetchEmailAccounts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        var _this = this;

        var pageSize,
            currentPage,
            _ref2,
            data,
            _ref3,
            meta,
            _ref4,
            totalPage,
            totalItems,
            _args2 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pageSize = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 25;
                currentPage = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
                _context2.prev = 2;
                _context2.next = 5;
                return this.$store.dispatch('marketing/getEmailAccountList', {
                  page: currentPage,
                  pageSize: pageSize,
                  filters: _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.filters).reduce(function (acc, key) {
                    if (_this.filters[key].value) {
                      acc[key] = _this.filters[key].value;
                    }

                    return acc;
                  }, {}),
                  sortBy: this.sortBy.field && this.sortBy.order ? this.sortBy : {},
                  fieldsToQuery: ['email', 'firstName', 'lastName', 'authNeeded']
                });

              case 5:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.emailAccounts = data.payload.emailAccounts || [];
                _ref3 = (data || {}).payload || {}, meta = _ref3.meta;
                _ref4 = meta || {}, totalPage = _ref4.totalPage, totalItems = _ref4.totalItems;
                this.totalPage = totalPage || 1;
                this.totalRecords = totalItems || 0;
                this.paginationMetaData = meta;
                _context2.next = 19;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](2);
                _context2.next = 19;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_3__["getApiErrorMsg"])(_context2.t0)
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 15]]);
      }));

      return function fetchEmailAccounts() {
        return _fetchEmailAccounts.apply(this, arguments);
      };
    }(),
    onFilter: function () {
      var _onFilter = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.loading = true;
                _context3.next = 4;
                return this.fetchEmailAccounts();

              case 4:
                _context3.next = 8;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);

              case 8:
                _context3.prev = 8;
                this.loading = false;
                return _context3.finish(8);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6, 8, 11]]);
      }));

      return function onFilter() {
        return _onFilter.apply(this, arguments);
      };
    }(),
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
      this.fetchEmailAccounts(rows, page + 1);
    },
    toggleEmailSidebar: function toggleEmailSidebar(id) {
      this.emailSidebar.isActive = id ? true : false;
      this.emailSidebar.data = id ? {
        id: id
      } : {};
    },
    openDeleteConfirmation: function () {
      var _openDeleteConfirmation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(id) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$vs.dialog({
                  type: 'confirm',
                  color: 'danger',
                  title: 'Delete Email Account',
                  text: 'Are you sure to revoke our access to this account and remove it from Marketing?',
                  accept: function accept() {
                    return _this2.deleteEmailAccount(id);
                  }
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function openDeleteConfirmation(_x) {
        return _openDeleteConfirmation.apply(this, arguments);
      };
    }(),
    deleteEmailAccount: function () {
      var _deleteEmailAccount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.$store.dispatch('marketing/deleteEmailAccount', id);

              case 3:
                this.onFilter();
                this.$vs.notify({
                  time: 3000,
                  title: 'Success',
                  text: 'Deleted successfully',
                  color: 'success'
                });
                this.$store.commit('marketing/setMarketingEmails', []);
                _context5.next = 12;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                _context5.next = 12;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_3__["getApiErrorMsg"])(_context5.t0)
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      return function deleteEmailAccount(_x2) {
        return _deleteEmailAccount.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var primevue_splitbutton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/splitbutton */ "./node_modules/primevue/splitbutton/index.js");
/* harmony import */ var primevue_splitbutton__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primevue_splitbutton__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkEmailAccountPopup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkEmailAccountPopup.vue */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/LinkEmailAccountPopup.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Headers',
  components: {
    SplitButton: primevue_splitbutton__WEBPACK_IMPORTED_MODULE_0___default.a,
    LinkEmailAccountPopup: _LinkEmailAccountPopup_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      search: '',
      searchFilters: '',
      filterState: false,
      activeComponent: 'email',
      items: [{
        title: 'Email',
        componentName: 'email'
      }],
      newAccountType: ''
    };
  },
  methods: {
    changeComponent: function changeComponent(newComponent) {
      this.activeComponent = newComponent;
      this.$emit('changeComponent', newComponent);
    },
    closePopup: function closePopup() {
      this.newAccountType = '';
    },
    toggleFilterInput: function toggleFilterInput() {
      this.filterState = !this.filterState;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=template&id=83c9a718&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=template&id=83c9a718& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("Headers", {
    on: {
      changeComponent: _vm.changeComponent
    }
  }), _vm._v(" "), _c("div", [_c("div", [_c("email-account-table")], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=template&id=1c4740f5&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=template&id=1c4740f5&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-10"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.emailAccounts,
      lazy: true,
      paginator: true,
      rows: _vm.rows,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      filters: _vm.filters,
      filterDisplay: "row",
      loading: _vm.loading,
      responsiveLayout: "scroll",
      rowsPerPageOptions: [10, 25, 50],
      removableSort: ""
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
        }, [_vm._v(_vm._s(_vm.footerText))])])];
      },
      proxy: true
    } : null], null, true)
  }, [_c("Column", {
    attrs: {
      field: "email",
      header: "Email",
      sortable: true,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n          " + _vm._s(slotProps.data.email) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter w-full",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onFilter
          },
          model: {
            value: _vm.filters["email"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filters["email"], "value", _vm._n($$v));
            },
            expression: "filters['email'].value"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "firstName",
      header: "First Name",
      sortable: true,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n          " + _vm._s(slotProps.data.firstName) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter w-full",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onFilter
          },
          model: {
            value: _vm.filters["firstName"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filters["firstName"], "value", _vm._n($$v));
            },
            expression: "filters['firstName'].value"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "lastName",
      header: "Last Name",
      sortable: true,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n          " + _vm._s(slotProps.data.lastName) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter w-full",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onFilter
          },
          model: {
            value: _vm.filters["lastName"].value,
            callback: function callback($$v) {
              _vm.$set(_vm.filters["lastName"], "value", _vm._n($$v));
            },
            expression: "filters['lastName'].value"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "authNeeded",
      header: "Status"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", [[slotProps.data.authNeeded ? _c("vs-chip", {
          directives: [{
            name: "primeVueTooltip",
            rawName: "v-primeVueTooltip.top",
            value: "Please reconnect this email account to resume sending emails.",
            expression: "\n                  'Please reconnect this email account to resume sending emails.'\n                ",
            modifiers: {
              top: true
            }
          }],
          attrs: {
            transparent: "",
            color: "danger"
          }
        }, [_vm._v("\n                Disconnected\n              ")]) : _c("vs-chip", {
          attrs: {
            transparent: "",
            color: "success"
          }
        }, [_vm._v("\n                Normal\n              ")])]], 2)];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Actions",
      headerStyle: {
        width: "0.5rem"
      }
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var id = _ref.data.id;
        return [_c("div", {
          staticClass: "flex items-center gap-2"
        }, [_c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            size: "small",
            icon: "edit"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.toggleEmailSidebar(id);
            }
          }
        }), _vm._v(" "), _c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            size: "small",
            icon: "delete"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.openDeleteConfirmation(id);
            }
          }
        })], 1)];
      }
    }])
  })], 1)], 1), _vm._v(" "), _c("email-sidebar", {
    attrs: {
      isSidebarActive: _vm.emailSidebar.isActive,
      data: _vm.emailSidebar.data
    },
    on: {
      closeSidebar: _vm.toggleEmailSidebar,
      refreshEmailAccounts: _vm.fetchEmailAccounts
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=template&id=08d1289e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=template&id=08d1289e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex items-center justify-between"
  }, [_c("div", [_c("ul", {
    staticClass: "flex space-x-4 ml-2 mr-4",
    staticStyle: {
      "margin-bottom": "7px"
    }
  }, _vm._l(_vm.items, function (item) {
    return _c("li", {
      key: item.title,
      staticClass: "font-medium text-md cursor-pointer invisible-border",
      class: {
        active: _vm.activeComponent == item.componentName
      },
      on: {
        click: function click($event) {
          return _vm.changeComponent(item.componentName);
        }
      }
    }, [_vm._v("\n          " + _vm._s(item.title) + "\n        ")]);
  }), 0)]), _vm._v(" "), _c("vs-button", {
    attrs: {
      icon: "add"
    },
    on: {
      click: function click($event) {
        _vm.newAccountType = "email";
      }
    }
  }, [_vm._v("\n      Add Email Account\n    ")])], 1), _vm._v(" "), _c("link-email-account-popup", {
    attrs: {
      popupActive: _vm.newAccountType === "email"
    },
    on: {
      closePopup: _vm.closePopup
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-1c4740f5] .p-column-filter-clear-button {\n  display: none;\n}\n#button-delete-email[data-v-1c4740f5]:hover {\n  color: #fff !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active[data-v-08d1289e] {\n  color: rgba(var(--vs-primary), 1) !important;\n}[dir] .active[data-v-08d1289e] {\n  border-bottom: 2px solid rgba(var(--vs-primary), 1);\n}\n.position-absolute[data-v-08d1289e] {\n  position: absolute;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .customBtn button {\n  border-color: rgba(var(--vs-primary), 1) !important;\n  background: rgba(var(--vs-primary), 1) !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/EmailAccounts.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/EmailAccounts.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailAccounts_vue_vue_type_template_id_83c9a718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailAccounts.vue?vue&type=template&id=83c9a718& */ "./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=template&id=83c9a718&");
/* harmony import */ var _EmailAccounts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailAccounts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailAccounts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailAccounts_vue_vue_type_template_id_83c9a718___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailAccounts_vue_vue_type_template_id_83c9a718___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/EmailAccounts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccounts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailAccounts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccounts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=template&id=83c9a718&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=template&id=83c9a718& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccounts_vue_vue_type_template_id_83c9a718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailAccounts.vue?vue&type=template&id=83c9a718& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/EmailAccounts.vue?vue&type=template&id=83c9a718&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccounts_vue_vue_type_template_id_83c9a718___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccounts_vue_vue_type_template_id_83c9a718___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailAccountTable_vue_vue_type_template_id_1c4740f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailAccountTable.vue?vue&type=template&id=1c4740f5&scoped=true& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=template&id=1c4740f5&scoped=true&");
/* harmony import */ var _EmailAccountTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailAccountTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmailAccountTable_vue_vue_type_style_index_0_id_1c4740f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmailAccountTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailAccountTable_vue_vue_type_template_id_1c4740f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailAccountTable_vue_vue_type_template_id_1c4740f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c4740f5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailAccountTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_style_index_0_id_1c4740f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=style&index=0&id=1c4740f5&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_style_index_0_id_1c4740f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_style_index_0_id_1c4740f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_style_index_0_id_1c4740f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_style_index_0_id_1c4740f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=template&id=1c4740f5&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=template&id=1c4740f5&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_template_id_1c4740f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailAccountTable.vue?vue&type=template&id=1c4740f5&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/EmailAccountTable.vue?vue&type=template&id=1c4740f5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_template_id_1c4740f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailAccountTable_vue_vue_type_template_id_1c4740f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Headers_vue_vue_type_template_id_08d1289e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Headers.vue?vue&type=template&id=08d1289e&scoped=true& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=template&id=08d1289e&scoped=true&");
/* harmony import */ var _Headers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Headers.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Headers_vue_vue_type_style_index_0_id_08d1289e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss&");
/* harmony import */ var _Headers_vue_vue_type_style_index_1_id_08d1289e_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css& */ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Headers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Headers_vue_vue_type_template_id_08d1289e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Headers_vue_vue_type_template_id_08d1289e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08d1289e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Headers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_0_id_08d1289e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=0&id=08d1289e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_0_id_08d1289e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_0_id_08d1289e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_0_id_08d1289e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_0_id_08d1289e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_1_id_08d1289e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=style&index=1&id=08d1289e&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_1_id_08d1289e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_1_id_08d1289e_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_1_id_08d1289e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_style_index_1_id_08d1289e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=template&id=08d1289e&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=template&id=08d1289e&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_template_id_08d1289e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Headers.vue?vue&type=template&id=08d1289e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/components/EmailAccounts/Headers.vue?vue&type=template&id=08d1289e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_template_id_08d1289e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Headers_vue_vue_type_template_id_08d1289e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=81.js.map