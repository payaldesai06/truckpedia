(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "./node_modules/@babel/runtime/core-js/object/values.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/values.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/helper */ "./resources/js/src/views/pages/menu/helpers/helper.js");
/* harmony import */ var _mixins_GroupBy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mixins/GroupBy */ "./resources/js/src/views/pages/menu/mixins/GroupBy.js");








function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries


 // Helpers



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MenuView",
  mixins: [_mixins_GroupBy__WEBPACK_IMPORTED_MODULE_11__["default"]],
  components: {
    ListView: function ListView() {
      return __webpack_require__.e(/*! import() */ 132).then(__webpack_require__.bind(null, /*! ./components/ListView */ "./resources/js/src/views/pages/menu/components/ListView.vue"));
    },
    BoardView: function BoardView() {
      return __webpack_require__.e(/*! import() */ 167).then(__webpack_require__.bind(null, /*! ./components/BoardView */ "./resources/js/src/views/pages/menu/components/BoardView.vue"));
    },
    GanttView: function GanttView() {
      return __webpack_require__.e(/*! import() */ 169).then(__webpack_require__.bind(null, /*! ./components/GanttView */ "./resources/js/src/views/pages/menu/components/GanttView.vue"));
    },
    TableView: function TableView() {
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(74)]).then(__webpack_require__.bind(null, /*! ./components/TableView */ "./resources/js/src/views/pages/menu/components/TableView.vue"));
    },
    ViewPrompt: function ViewPrompt() {
      return __webpack_require__.e(/*! import() */ 214).then(__webpack_require__.bind(null, /*! ./components/ViewPrompt */ "./resources/js/src/views/pages/menu/components/ViewPrompt.vue"));
    },
    ViewEditRecord: function ViewEditRecord() {
      return __webpack_require__.e(/*! import() */ 213).then(__webpack_require__.bind(null, /*! ./components/ViewEditRecord */ "./resources/js/src/views/pages/menu/components/ViewEditRecord.vue"));
    }
  },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])("menuV2", ["getAllSubMenu", "getAllView"]), {
    subMenuName: function subMenuName() {
      var submenuId = this.$route.params.submenuId;
      if (!submenuId) return "";
      var submenu = this.getAllSubMenu.find(function (item) {
        return item.id === parseInt(submenuId);
      });
      return submenu ? submenu.name : "";
    },
    currentComponent: function currentComponent() {
      if (this.viewOptions.length === 0) return "";

      var _this$viewOptions$fin = this.viewOptions.find(function (item) {
        return item.isActive;
      }),
          name = _this$viewOptions$fin.name;

      if (!name) return "";
      return this.componentList[name];
    },
    viewId: function viewId() {
      var _this$viewOptions$fin2 = this.viewOptions.find(function (item) {
        return item.isActive;
      }),
          id = _this$viewOptions$fin2.id;

      return id;
    },
    viewMetaData: function viewMetaData() {
      var _this$viewOptions$fin3 = this.viewOptions.find(function (item) {
        return item.isActive;
      }),
          name = _this$viewOptions$fin3.name;

      if (!name) return {};
      return _objectSpread({}, this["".concat(name, "MetaData")], {
        type: name
      });
    },
    recordLinkFields: function recordLinkFields() {
      return this.customFields.filter(function (item) {
        return item.type === 'recordLink';
      });
    }
  }),
  data: function data() {
    return {
      viewOptions: [],
      componentList: {
        list: "ListView",
        board: "BoardView",
        gantt: "GanttView",
        table: "TableView"
      },
      viewPromptVisible: false,
      fieldTypes: _helpers_helper__WEBPACK_IMPORTED_MODULE_10__["fieldTypes"],
      listMetaData: {},
      boardMetaData: {},
      tableMetaData: {},
      ganttMetaData: {},
      customFields: [],
      recordData: [],
      fetchingData: true
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    hideTableGanttForNow: function hideTableGanttForNow(name) {
      //  if(name === "table" || name === "gantt"){
      //   return false
      //  }
      return true;
    },
    getErrorMsg: function getErrorMsg(error) {
      return error && error.response && error.response.data && error.response.data.message ? error.response.data.message : "Something went wrong";
    },
    initViews: function () {
      var _initViews = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
        var viewID,
            tableViewIndex,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                viewID = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                _context.prev = 1;
                _context.next = 4;
                return this.$store.dispatch("companyUserV2/fetchAllUsers");

              case 4:
                if (!(this.getAllView.length === 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", []);

              case 6:
                this.viewOptions = this.getAllView.map(function (item) {
                  var view = _helpers_helper__WEBPACK_IMPORTED_MODULE_10__["menuViews"][item.type];
                  if (!view) return {};
                  return _objectSpread({}, view, {
                    id: item.id,
                    isActive: viewID ? viewID === item.id : false
                  });
                });

                if (!viewID) {
                  tableViewIndex = this.viewOptions.findIndex(function (item) {
                    return item.name === "table";
                  });
                  tableViewIndex !== -1 ? this.viewOptions[tableViewIndex].isActive = true : this.viewOptions[0].isActive = true;
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      return function initViews() {
        return _initViews.apply(this, arguments);
      };
    }(),
    redirectToErrorPage: function redirectToErrorPage() {
      this.$router.push({
        name: "page-error-404"
      });
    },
    fetchData: function () {
      var _fetchData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
        var viewID,
            _this$$route$params,
            menuId,
            submenuId,
            _args2 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                viewID = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
                _context2.prev = 1;
                _this$$route$params = this.$route.params, menuId = _this$$route$params.menuId, submenuId = _this$$route$params.submenuId;

                if (!(!menuId || !submenuId)) {
                  _context2.next = 6;
                  break;
                }

                this.redirectToErrorPage();
                return _context2.abrupt("return");

              case 6:
                this.$vs.loading();
                this.fetchingData = true;
                _context2.next = 10;
                return this.$store.dispatch("menuV2/fetchSubMenuList", menuId);

              case 10:
                _context2.next = 12;
                return this.$store.dispatch("menuV2/fetchViewList", {
                  id: submenuId
                });

              case 12:
                _context2.next = 14;
                return this.initViews(viewID);

              case 14:
                _context2.next = 16;
                return this.fetchViewData();

              case 16:
                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context2.t0)
                });

              case 21:
                _context2.prev = 21;
                this.$vs.loading.close();
                this.fetchingData = false;
                return _context2.finish(21);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 18, 21, 25]]);
      }));

      return function fetchData() {
        return _fetchData.apply(this, arguments);
      };
    }(),
    fetchViewData: function () {
      var _fetchViewData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(viewId) {
        var _ref, _ref$data$payload, listMetaData, boardMetaData, tableMetaData, ganttMetaData, recordCustomFields, recordData;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.$store.dispatch("menuV2/getView", viewId || this.viewId);

              case 3:
                _ref = _context3.sent;
                _ref$data$payload = _ref.data.payload;
                listMetaData = _ref$data$payload.listMetaData;
                boardMetaData = _ref$data$payload.boardMetaData;
                tableMetaData = _ref$data$payload.tableMetaData;
                ganttMetaData = _ref$data$payload.ganttMetaData;
                recordCustomFields = _ref$data$payload.recordCustomFields;
                recordData = _ref$data$payload.recordData;
                this.listMetaData = listMetaData || {};
                this.boardMetaData = boardMetaData || {};
                this.tableMetaData = tableMetaData || {};
                this.ganttMetaData = ganttMetaData || {};
                this.customFields = recordCustomFields || [];
                this.recordData = recordData || [];
                _context3.next = 22;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context3.t0)
                });

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 19]]);
      }));

      return function fetchViewData(_x) {
        return _fetchViewData.apply(this, arguments);
      };
    }(),
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.fetchData();

              case 3:
                this.$nextTick(function () {
                  _this.$watch(function () {
                    return _this.$route.params;
                  }, function (toParams, previousParams) {
                    if (toParams.submenuId !== previousParams.submenuId) {
                      _this.resetTableViewSortSchema();

                      _this.fetchData();
                    }
                  });
                });
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context4.t0)
                });

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    changeTab: function () {
      var _changeTab = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5(id) {
        var _this$viewOptions$fin4, title;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _this$viewOptions$fin4 = this.viewOptions.find(function (item) {
                  return item.id === id;
                }), title = _this$viewOptions$fin4.title;

                if (title) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return");

              case 4:
                this.$vs.loading();
                this.viewOptions.forEach(function (item) {
                  item.isActive = item.id === id;
                });
                this.resetTableViewSortSchema();
                _context5.next = 9;
                return this.fetchViewData();

              case 9:
                _context5.next = 13;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);

              case 13:
                _context5.prev = 13;
                this.$vs.loading.close();
                return _context5.finish(13);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 11, 13, 16]]);
      }));

      return function changeTab(_x2) {
        return _changeTab.apply(this, arguments);
      };
    }(),
    showViewPrompt: function showViewPrompt() {
      this.viewPromptVisible = true;
    },
    addView: function () {
      var _addView = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6(_ref2) {
        var type, name, submenuId, _ref3, id;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                type = _ref2.name, name = _ref2.title;
                _context6.prev = 1;
                this.viewPromptVisible = false;
                submenuId = this.$route.params.submenuId;

                if (submenuId) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return");

              case 6:
                _context6.next = 8;
                return this.$store.dispatch("menuV2/createView", {
                  name: name,
                  type: type,
                  submenuId: submenuId
                });

              case 8:
                _ref3 = _context6.sent;
                id = _ref3.data.payload.id;
                _context6.next = 12;
                return this.fetchData(id);

              case 12:
                _context6.next = 17;
                break;

              case 14:
                _context6.prev = 14;
                _context6.t0 = _context6["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context6.t0)
                });

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 14]]);
      }));

      return function addView(_x3) {
        return _addView.apply(this, arguments);
      };
    }(),
    updateRecord: function () {
      var _updateRecord = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee7(record) {
        var submenuId, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;

                if (record) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return");

              case 3:
                submenuId = this.$route.params.submenuId;
                payload = {
                  submenuId: submenuId,
                  recordId: record.recordId,
                  newValues: record.values
                };
                _context7.next = 7;
                return this.$store.dispatch("menuV2/updateFieldValues", payload);

              case 7:
                this.fetchViewData();
                _context7.next = 13;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context7.t0)
                });

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 10]]);
      }));

      return function updateRecord(_x4) {
        return _updateRecord.apply(this, arguments);
      };
    }(),
    submitRecord: function () {
      var _submitRecord = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee8(record) {
        var submenuId, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;

                if (record) {
                  _context8.next = 3;
                  break;
                }

                return _context8.abrupt("return");

              case 3:
                submenuId = this.$route.params.submenuId;
                payload = {
                  submenuId: submenuId,
                  newValues: record.values
                };
                _context8.next = 7;
                return this.$store.dispatch("menuV2/createNewRecord", payload);

              case 7:
                this.fetchViewData();
                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context8.t0)
                });

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 10]]);
      }));

      return function submitRecord(_x5) {
        return _submitRecord.apply(this, arguments);
      };
    }(),
    deleteRecord: function () {
      var _deleteRecord = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee9(id) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;

                if (id) {
                  _context9.next = 3;
                  break;
                }

                return _context9.abrupt("return");

              case 3:
                payload = {
                  submenuId: this.$route.params.submenuId,
                  recordId: id
                };
                _context9.next = 6;
                return this.$store.dispatch("menuV2/deleteRecord", payload);

              case 6:
                this.fetchViewData();
                _context9.next = 12;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context9.t0)
                });

              case 12:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 9]]);
      }));

      return function deleteRecord(_x6) {
        return _deleteRecord.apply(this, arguments);
      };
    }(),
    getCustomFields: function () {
      var _getCustomFields = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee10() {
        var submenuId, _ref4, fields;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                submenuId = this.$route.params.submenuId;
                _context10.next = 4;
                return this.$store.dispatch("menuV2/fetchCustomFields", submenuId);

              case 4:
                _ref4 = _context10.sent;
                fields = _ref4.data.payload.fields;
                this.customFields = fields || [];
                _context10.next = 12;
                break;

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context10.t0)
                });

              case 12:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 9]]);
      }));

      return function getCustomFields() {
        return _getCustomFields.apply(this, arguments);
      };
    }(),
    addField: function () {
      var _addField = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee11(data, recordId) {
        var submenuId, payload, _ref5, status, _ref5$data, result, recordData, _result, selectedRecord, record, recordLinkData;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;

                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(data)) {
                  _context11.next = 3;
                  break;
                }

                return _context11.abrupt("return");

              case 3:
                submenuId = this.$route.params.submenuId;
                payload = {
                  submenuId: submenuId,
                  fields: [data]
                };
                _context11.next = 7;
                return this.$store.dispatch("menuV2/createCustomFields", payload);

              case 7:
                _context11.next = 9;
                return this.getCustomFields();

              case 9:
                _context11.next = 11;
                return this.fetchViewData();

              case 11:
                if (!recordId) {
                  _context11.next = 20;
                  break;
                }

                _context11.next = 14;
                return this.fetchRecord(submenuId, recordId);

              case 14:
                _ref5 = _context11.sent;
                status = _ref5.status;
                _ref5$data = _ref5.data;
                result = _ref5$data.result;
                recordData = _ref5$data.payload.recordData;

                if (status === 200 && result) {
                  _result = this.formatData([_objectSpread({}, recordData)]);
                  selectedRecord = _result && _result.length ? _result[0].customFieldsData : [];
                  this.$refs.viewEditRecord.selectedRecord = selectedRecord;
                }

              case 20:
                if (!(data.type === 'recordLink')) {
                  _context11.next = 27;
                  break;
                }

                record = this.customFields[this.customFields.length - 1].type === 'recordLink' ? {
                  fieldId: this.customFields[this.customFields.length - 1].id,
                  submenuId: submenuId // Original BE API code implemented the wrong payload.
                  // this.customFields[this.customFields.length - 1]
                  //  .recordLinkMetaData.submenuId

                } : null;

                if (!record) {
                  _context11.next = 27;
                  break;
                }

                _context11.next = 25;
                return this.fetchTargetRecords(record.submenuId, record.fieldId);

              case 25:
                recordLinkData = _context11.sent;

                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(recordLinkData)) {
                  recordLinkData = this.formatTargetRecords(recordLinkData);
                  this.$refs.viewEditRecord.initRecordLinkFields(recordLinkData);
                }

              case 27:
                _context11.next = 32;
                break;

              case 29:
                _context11.prev = 29;
                _context11.t0 = _context11["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context11.t0)
                });

              case 32:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 29]]);
      }));

      return function addField(_x7, _x8) {
        return _addField.apply(this, arguments);
      };
    }(),
    updateField: function () {
      var _updateField = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee12(data) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;

                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(data)) {
                  _context12.next = 3;
                  break;
                }

                return _context12.abrupt("return");

              case 3:
                payload = {
                  id: data.id,
                  name: data.name,
                  level: data.level
                };
                if (data.type === 'singleSelect') payload.singleSelectOptions = data.singleSelectOptions || [];else if (data.type === 'multiSelect') payload.multiSelectOptions = data.multiSelectOptions || [];else if (data.type === 'formula' && data.formulaMetaData) {
                  payload.formulaMetaData = data.formulaMetaData;
                }
                _context12.next = 7;
                return this.$store.dispatch("menuV2/updateCustomField", payload);

              case 7:
                this.getCustomFields();
                _context12.next = 13;
                break;

              case 10:
                _context12.prev = 10;
                _context12.t0 = _context12["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context12.t0)
                });

              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 10]]);
      }));

      return function updateField(_x9) {
        return _updateField.apply(this, arguments);
      };
    }(),
    updateView: function () {
      var _updateView = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee13(data) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;

                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(data)) {
                  _context13.next = 3;
                  break;
                }

                return _context13.abrupt("return");

              case 3:
                payload = _objectSpread({}, data, {
                  id: this.viewId
                });
                _context13.next = 6;
                return this.$store.dispatch("menuV2/updateView", payload);

              case 6:
                this.fetchViewData(this.viewId);
                _context13.next = 12;
                break;

              case 9:
                _context13.prev = 9;
                _context13.t0 = _context13["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context13.t0)
                });

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[0, 9]]);
      }));

      return function updateView(_x10) {
        return _updateView.apply(this, arguments);
      };
    }(),
    toggleDetailsView: function () {
      var _toggleDetailsView = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee14(recordId) {
        var isValidRecordId, payload, recordLinkData, submenuId, _ref6, status, _ref6$data, result, recordData, _result2, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, record, id;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                isValidRecordId = !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isNil"])(recordId) && !isNaN(Number(recordId));
                payload = [];
                recordLinkData = {};
                submenuId = this.$route.params.submenuId;

                if (!isValidRecordId) {
                  _context14.next = 13;
                  break;
                }

                _context14.next = 7;
                return this.fetchRecord(submenuId, recordId);

              case 7:
                _ref6 = _context14.sent;
                status = _ref6.status;
                _ref6$data = _ref6.data;
                result = _ref6$data.result;
                recordData = _ref6$data.payload.recordData;

                if (status === 200 && result) {
                  _result2 = this.formatData([_objectSpread({}, recordData)]);
                  payload = _result2 && _result2.length ? _result2[0].customFieldsData : [];
                }

              case 13:
                if (!(this.recordLinkFields && this.recordLinkFields.length)) {
                  _context14.next = 43;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context14.prev = 17;
                _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5___default()(this.recordLinkFields);

              case 19:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context14.next = 29;
                  break;
                }

                record = _step.value;
                id = record.id;
                _context14.next = 24;
                return this.fetchTargetRecords(submenuId, id);

              case 24:
                recordLinkData = _context14.sent;

                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(recordLinkData)) {
                  recordLinkData = this.formatTargetRecords(recordLinkData);
                  this.$refs.viewEditRecord.initRecordLinkFields(recordLinkData);
                }

              case 26:
                _iteratorNormalCompletion = true;
                _context14.next = 19;
                break;

              case 29:
                _context14.next = 35;
                break;

              case 31:
                _context14.prev = 31;
                _context14.t0 = _context14["catch"](17);
                _didIteratorError = true;
                _iteratorError = _context14.t0;

              case 35:
                _context14.prev = 35;
                _context14.prev = 36;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 38:
                _context14.prev = 38;

                if (!_didIteratorError) {
                  _context14.next = 41;
                  break;
                }

                throw _iteratorError;

              case 41:
                return _context14.finish(38);

              case 42:
                return _context14.finish(35);

              case 43:
                if (this.$refs.viewEditRecord) {
                  this.$refs.viewEditRecord.toggleDetailsView(payload);
                }

              case 44:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[17, 31, 35, 43], [36,, 38, 42]]);
      }));

      return function toggleDetailsView(_x11) {
        return _toggleDetailsView.apply(this, arguments);
      };
    }(),
    getFileExtension: function getFileExtension(files) {
      var fileExtension = files.map(function (file) {
        var extension = file.name.split('.').pop();
        return {
          extension: extension
        };
      });
      return fileExtension;
    },
    generateS3NameAndURL: function () {
      var _generateS3NameAndURL = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee15(files, recordId, fieldId) {
        var allFiles, submenuId, _ref7, _ref7$data, result, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;

                if (!(files.length === 0)) {
                  _context15.next = 3;
                  break;
                }

                return _context15.abrupt("return");

              case 3:
                _context15.next = 5;
                return this.getFileExtension(files);

              case 5:
                allFiles = _context15.sent;
                submenuId = this.$route.params.submenuId;
                _context15.next = 9;
                return this.$store.dispatch('menuV2/uploadAttachment', {
                  submenuId: submenuId,
                  recordId: recordId,
                  fieldId: fieldId,
                  files: allFiles
                });

              case 9:
                _ref7 = _context15.sent;
                _ref7$data = _ref7.data;
                result = _ref7$data.result;
                payload = _ref7$data.payload;
                return _context15.abrupt("return", result && payload ? payload : []);

              case 16:
                _context15.prev = 16;
                _context15.t0 = _context15["catch"](0);

              case 18:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[0, 16]]);
      }));

      return function generateS3NameAndURL(_x12, _x13, _x14) {
        return _generateS3NameAndURL.apply(this, arguments);
      };
    }(),
    uploadAttachmentsToS3: function () {
      var _uploadAttachmentsToS = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee16(s3FileNameAndURL, files) {
        var attachments, i, _s3FileNameAndURL$i, storageFileName, url, file, _ref8, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;

                if (!s3FileNameAndURL) {
                  _context16.next = 16;
                  break;
                }

                attachments = [];
                i = 0;

              case 4:
                if (!(i < s3FileNameAndURL.length)) {
                  _context16.next = 15;
                  break;
                }

                _s3FileNameAndURL$i = s3FileNameAndURL[i], storageFileName = _s3FileNameAndURL$i.storageFileName, url = _s3FileNameAndURL$i.url;
                file = files[i];
                _context16.next = 9;
                return this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
                  url: url,
                  file: file,
                  extension: storageFileName.split(".").pop()
                });

              case 9:
                _ref8 = _context16.sent;
                status = _ref8.status;
                if (status === 200) attachments.push({
                  storageFileName: storageFileName,
                  originalFileName: file.name
                });

              case 12:
                i++;
                _context16.next = 4;
                break;

              case 15:
                return _context16.abrupt("return", attachments);

              case 16:
                _context16.next = 20;
                break;

              case 18:
                _context16.prev = 18;
                _context16.t0 = _context16["catch"](0);

              case 20:
                _context16.prev = 20;
                return _context16.finish(20);

              case 22:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 18, 20, 22]]);
      }));

      return function uploadAttachmentsToS3(_x15, _x16) {
        return _uploadAttachmentsToS.apply(this, arguments);
      };
    }(),
    fetchRecord: function () {
      var _fetchRecord = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee17(submenuId, recordId) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                _context17.next = 3;
                return this.$store.dispatch('menuV2/fetchRecord', {
                  submenuId: parseInt(submenuId),
                  recordId: recordId
                });

              case 3:
                res = _context17.sent;
                return _context17.abrupt("return", res);

              case 7:
                _context17.prev = 7;
                _context17.t0 = _context17["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context17.t0)
                });

              case 10:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[0, 7]]);
      }));

      return function fetchRecord(_x17, _x18) {
        return _fetchRecord.apply(this, arguments);
      };
    }(),
    updateSelectedRecordFileValues: function updateSelectedRecordFileValues(recordId, fieldId, recordData) {
      this.recordData = this.recordData.map(function (record) {
        if (record.id === recordId) {
          record.customFieldsData = record.customFieldsData.map(function (field) {
            if (field.fieldId === fieldId) {
              return _objectSpread({}, field, {
                filesValue: recordData.customFieldsData.find(function (f) {
                  return f.fieldId === fieldId;
                }).filesValue
              });
            }

            return field;
          });
        }

        return record;
      });
      if (this.$refs.viewEditRecord) this.$refs.viewEditRecord.updateSelectedRecord(fieldId, recordData);
    },
    uploadFiles: function () {
      var _uploadFiles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee18(_ref9) {
        var files, recordId, fieldId, s3FileNameAndURL, attachments, filesArray;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                files = _ref9.files, recordId = _ref9.recordId, fieldId = _ref9.fieldId;
                _context18.prev = 1;
                _context18.next = 4;
                return this.generateS3NameAndURL(files, recordId, fieldId);

              case 4:
                s3FileNameAndURL = _context18.sent;
                _context18.next = 7;
                return this.uploadAttachmentsToS3(s3FileNameAndURL, files);

              case 7:
                _context18.t0 = _context18.sent;

                if (_context18.t0) {
                  _context18.next = 10;
                  break;
                }

                _context18.t0 = [];

              case 10:
                attachments = _context18.t0;
                filesArray = files.map(function (file) {
                  var fileDetails = attachments.find(function (attachment) {
                    return attachment.originalFileName === file.name;
                  });
                  return _objectSpread({
                    id: "temp-".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])()),
                    file: file
                  }, fileDetails);
                });

                if (!this.$refs.viewEditRecord) {
                  _context18.next = 20;
                  break;
                }

                if (!recordId) {
                  _context18.next = 18;
                  break;
                }

                _context18.next = 16;
                return this.$refs.viewEditRecord.addAttachments(fieldId, filesArray);

              case 16:
                _context18.next = 20;
                break;

              case 18:
                _context18.next = 20;
                return this.$refs.viewEditRecord.addNewRecordAttachments(fieldId, filesArray);

              case 20:
                _context18.next = 25;
                break;

              case 22:
                _context18.prev = 22;
                _context18.t1 = _context18["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context18.t1)
                });

              case 25:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[1, 22]]);
      }));

      return function uploadFiles(_x19) {
        return _uploadFiles.apply(this, arguments);
      };
    }(),
    deleteFile: function () {
      var _deleteFile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee19(payload) {
        var submenuId, recordId, fieldId, files, _ref10, status, _ref10$data, result, recordData;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                submenuId = this.$route.params.submenuId;
                recordId = payload.recordId, fieldId = payload.fieldId, files = payload.files;
                _context19.next = 5;
                return this.$store.dispatch('menuV2/deleteFiles', {
                  submenuId: parseInt(submenuId),
                  recordId: recordId,
                  fieldId: fieldId,
                  files: files
                });

              case 5:
                _context19.next = 7;
                return this.fetchRecord(submenuId, recordId);

              case 7:
                _ref10 = _context19.sent;
                status = _ref10.status;
                _ref10$data = _ref10.data;
                result = _ref10$data.result;
                recordData = _ref10$data.payload.recordData;
                if (status === 200 && result) this.updateSelectedRecordFileValues(recordId, fieldId, recordData);
                _context19.next = 18;
                break;

              case 15:
                _context19.prev = 15;
                _context19.t0 = _context19["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context19.t0)
                });

              case 18:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[0, 15]]);
      }));

      return function deleteFile(_x20) {
        return _deleteFile.apply(this, arguments);
      };
    }(),
    deleteField: function () {
      var _deleteField = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee20(_ref11) {
        var fieldId, submenuId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                fieldId = _ref11.fieldId;
                _context20.prev = 1;
                submenuId = this.$route.params.submenuId;
                _context20.next = 5;
                return this.$store.dispatch('menuV2/deleteCustomField', {
                  submenuId: parseInt(submenuId),
                  fieldId: fieldId
                });

              case 5:
                _context20.next = 7;
                return this.fetchViewData();

              case 7:
                _context20.next = 12;
                break;

              case 9:
                _context20.prev = 9;
                _context20.t0 = _context20["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context20.t0)
                });

              case 12:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this, [[1, 9]]);
      }));

      return function deleteField(_x21) {
        return _deleteField.apply(this, arguments);
      };
    }(),
    searchLinkedRecords: function () {
      var _searchLinkedRecords = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee21(searchObj) {
        var submenuId, recordLinkData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                submenuId = this.$route.params.submenuId;
                _context21.next = 3;
                return this.fetchTargetRecords(submenuId, searchObj.fieldId, searchObj.text);

              case 3:
                recordLinkData = _context21.sent;

                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(recordLinkData)) {
                  recordLinkData = this.formatTargetRecords(recordLinkData);
                  this.$refs.viewEditRecord.initRecordLinkFields(recordLinkData);
                }

              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      return function searchLinkedRecords(_x22) {
        return _searchLinkedRecords.apply(this, arguments);
      };
    }(),
    fetchTargetRecords: function () {
      var _fetchTargetRecords = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee22(submenuId, fieldId) {
        var searchKeyWords,
            _ref12,
            status,
            _ref12$data,
            result,
            _ref12$data$payload,
            recordCustomFields,
            recordData,
            _args22 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                searchKeyWords = _args22.length > 2 && _args22[2] !== undefined ? _args22[2] : null;
                _context22.prev = 1;
                _context22.next = 4;
                return this.$store.dispatch('menuV2/getTargetRecords', {
                  submenuId: submenuId,
                  fieldId: fieldId,
                  searchKeyWords: searchKeyWords
                });

              case 4:
                _ref12 = _context22.sent;
                status = _ref12.status;
                _ref12$data = _ref12.data;
                result = _ref12$data.result;
                _ref12$data$payload = _ref12$data.payload;
                recordCustomFields = _ref12$data$payload.recordCustomFields;
                recordData = _ref12$data$payload.recordData;

                if (!(status === 200 && result)) {
                  _context22.next = 13;
                  break;
                }

                return _context22.abrupt("return", {
                  fieldId: fieldId,
                  recordCustomFields: recordCustomFields,
                  recordData: recordData
                });

              case 13:
                _context22.next = 18;
                break;

              case 15:
                _context22.prev = 15;
                _context22.t0 = _context22["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context22.t0)
                });

              case 18:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[1, 15]]);
      }));

      return function fetchTargetRecords(_x23, _x24) {
        return _fetchTargetRecords.apply(this, arguments);
      };
    }(),
    formatTargetRecords: function formatTargetRecords(records) {
      var _this2 = this;

      var customFields = records.recordCustomFields; //.slice(0, 4)

      var customFieldsData = records.recordData.map(function (record) {
        record.customFieldsData = record.customFieldsData.filter(function (field) {
          return customFields.find(function (customField) {
            return customField.id === field.fieldId;
          });
        });
        return record;
      });
      var fieldValueTypes = ["textValue", "userValue", "singleSelectValue", "numberValue", "currencyValue", "multiSelectValue"];
      var formattedRecords = customFieldsData.map(function (record) {
        var data = record.customFieldsData.map(function (field) {
          var customField = customFields.find(function (customField) {
            return customField.id === field.fieldId && fieldValueTypes.some(function (type) {
              return field[type];
            });
          });

          if (customField) {
            var fieldValue = '';
            var fieldColor = '';
            if (field.textValue) fieldValue = field.textValue;
            if (field.userValue) fieldValue = field.userValue.map(function (user) {
              return _this2.allUsersMap[user.userId].fullName;
            }).join(', ');

            if (field.singleSelectValue) {
              fieldValue = customField.singleSelectOptions.find(function (option) {
                return option.optionId === field.singleSelectValue;
              }).optionName;
              fieldColor = customField.singleSelectOptions.find(function (option) {
                return option.optionId === field.singleSelectValue;
              }).color;
            }

            if (field.dateValue) fieldValue = _this2.convertToLocalDateTime(field.dateValue.utcDateOnly, field.dateValue.utcTimeOnly);
            if (field.dateNoTzValue) fieldValue = "".concat(field.dateNoTzValue.localDateOnly || '', " ").concat(field.dateNoTzValue.localTimeOnly || '');
            if (field.hasOwnProperty('numberValue')) fieldValue = field.numberValue;
            if (field.currencyValue) fieldValue = field.currencyValue ? "$".concat(parseFloat(field.currencyValue).toFixed(2)) : '';

            if (field.multiSelectValue) {
              fieldValue = customField.multiSelectOptions.filter(function (option) {
                return field.multiSelectValue.includes(option.optionId);
              }).map(function (option) {
                return option.optionName;
              }).join(', ');
            }

            var values = {
              name: customField.name,
              value: fieldValue,
              color: fieldColor,
              type: customField.type
            };
            return values;
          }
        }).filter(function (field) {
          return field;
        });
        return {
          recordId: record.id,
          data: data
        };
      });
      return _defineProperty({}, records.fieldId, formattedRecords);
    },
    resetTableViewSortSchema: function resetTableViewSortSchema() {
      if (this.$refs['TableView']) {
        this.$refs['TableView'].handleSortSchema([]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=template&id=a77c1a62&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=template&id=a77c1a62&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "menu-view"
  }, [_c("div", {
    class: ["menu-header pl-0"]
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("h3", [_vm._v(_vm._s(_vm.subMenuName))]), _vm._v(" "), _c("div", {
    staticClass: "menu-header-list flex items-center overflow-x-auto"
  }, [_vm._l(_vm.viewOptions, function (_ref) {
    var id = _ref.id,
        title = _ref.title,
        icon = _ref.icon,
        isActive = _ref.isActive,
        name = _ref.name;
    return _c("vs-chip", {
      key: id,
      staticClass: "cursor-pointer mx-2 text-sm min-w-75",
      attrs: {
        color: isActive ? "primary" : ""
      },
      nativeOn: {
        click: function click($event) {
          return _vm.changeTab(id);
        }
      }
    }, [_c("vs-icon", {
      staticClass: "mr-1",
      attrs: {
        size: "18px",
        icon: icon
      }
    }), _vm._v("\n          " + _vm._s(title) + "\n        ")], 1);
  }), _vm._v(" "), _c("label", {
    staticClass: "text-sm font-semibold ml-4 cursor-pointer text-primary",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.showViewPrompt.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Add\n        ")])], 2)])]), _vm._v(" "), _vm.currentComponent ? _c("div", {
    staticClass: "menu-view-container"
  }, [_c(_vm.currentComponent, {
    ref: _vm.currentComponent,
    tag: "component",
    attrs: {
      title: _vm.subMenuName,
      viewMetaData: _vm.viewMetaData,
      customFields: _vm.customFields,
      recordData: _vm.recordData,
      fetchingData: _vm.fetchingData
    },
    on: {
      toggleDetailsView: _vm.toggleDetailsView,
      updateView: _vm.updateView,
      "update:Details": _vm.updateRecord
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.viewPromptVisible ? _c("ViewPrompt", {
    on: {
      close: function close($event) {
        _vm.viewPromptVisible = false;
      },
      submit: _vm.addView
    }
  }) : _vm._e(), _vm._v(" "), _c("ViewEditRecord", {
    ref: "viewEditRecord",
    attrs: {
      customFields: _vm.customFields,
      fieldTypes: _vm.fieldTypes
    },
    on: {
      updateRecord: _vm.updateRecord,
      submitRecord: _vm.submitRecord,
      deleteRecord: _vm.deleteRecord,
      addField: _vm.addField,
      updateField: _vm.updateField,
      updateView: _vm.updateView,
      uploadFiles: _vm.uploadFiles,
      deleteFile: _vm.deleteFile,
      deleteField: _vm.deleteField,
      searchLinkedRecords: _vm.searchLinkedRecords
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-header[data-v-a77c1a62] {\n  width: 100%;\n  height: 60px;\n  position: fixed;\n  transition: all 0.4s ease;\n  top: 0;\n  z-index: 5;\n  /* box-shadow: 0 4px 20px 0 rgb(0 0 0 / 5%); */\n}[dir] .menu-header[data-v-a77c1a62] {\n  padding: 1.2rem;\n  background: rgb(255, 255, 255);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1333333333);\n}\n.menu-header .menu-header-list[data-v-a77c1a62]::-webkit-scrollbar-thumb:horizontal {\n  /*The style of the horizontal scrollbar*/\n  width: 4px;\n  -webkit-border-radius: 6px;\n}\n[dir] .menu-header .menu-header-list[data-v-a77c1a62]::-webkit-scrollbar-thumb:horizontal {\n  background-color: #cccccc;\n}\n.menu-header .menu-header-list[data-v-a77c1a62]::-webkit-scrollbar-track-piece { /*The background color of the scrollbar*/\n  -webkit-border-radius: 0; /*Fillet width of the scrollbar*/\n}\n[dir] .menu-header .menu-header-list[data-v-a77c1a62]::-webkit-scrollbar-track-piece {\n  background-color: #fff;\n}\n.menu-header .menu-header-list[data-v-a77c1a62]::-webkit-scrollbar {\n  width: 10px; /*the width of the scrollbar*/\n  height: 8px; /*the height of the scroll bar*/\n}\n.menu-header .menu-header-list[data-v-a77c1a62]::-webkit-scrollbar-thumb:vertical {\n  /*The style of the vertical scrollbar*/\n  height: 50px;\n  -webkit-border-radius: 4px;\n  outline: 2px solid #fff;\n  outline-offset: -2px;\n}\n[dir] .menu-header .menu-header-list[data-v-a77c1a62]::-webkit-scrollbar-thumb:vertical {\n  background-color: #999;\n  border: 2px solid #fff;\n}\n.menu-header .menu-header-list[data-v-a77c1a62]::-webkit-scrollbar-thumb:hover {\n  /*The hover style of the scroll bar*/\n  height: 50px;\n  -webkit-border-radius: 4px;\n}\n[dir] .menu-header .menu-header-list[data-v-a77c1a62]::-webkit-scrollbar-thumb:hover {\n  background-color: #9f9f9f;\n}\n.min-w-75[data-v-a77c1a62] {\n  min-width: 75px;\n}\n[dir] .menu-view-container[data-v-a77c1a62] {\n  margin-top: 56px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/menu/MenuView.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/menu/MenuView.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuView_vue_vue_type_template_id_a77c1a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuView.vue?vue&type=template&id=a77c1a62&scoped=true& */ "./resources/js/src/views/pages/menu/MenuView.vue?vue&type=template&id=a77c1a62&scoped=true&");
/* harmony import */ var _MenuView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/menu/MenuView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuView_vue_vue_type_style_index_0_id_a77c1a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true& */ "./resources/js/src/views/pages/menu/MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuView_vue_vue_type_template_id_a77c1a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuView_vue_vue_type_template_id_a77c1a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a77c1a62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/menu/MenuView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/menu/MenuView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/MenuView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/menu/MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_style_index_0_id_a77c1a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=style&index=0&id=a77c1a62&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_style_index_0_id_a77c1a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_style_index_0_id_a77c1a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_style_index_0_id_a77c1a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_style_index_0_id_a77c1a62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/menu/MenuView.vue?vue&type=template&id=a77c1a62&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/MenuView.vue?vue&type=template&id=a77c1a62&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_template_id_a77c1a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuView.vue?vue&type=template&id=a77c1a62&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/MenuView.vue?vue&type=template&id=a77c1a62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_template_id_a77c1a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuView_vue_vue_type_template_id_a77c1a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/menu/helpers/helper.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/helpers/helper.js ***!
  \*************************************************************/
/*! exports provided: menuViews, fieldTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuViews", function() { return menuViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldTypes", function() { return fieldTypes; });
var menuViews = {
  list: {
    id: 1,
    title: 'List',
    name: 'list',
    icon: 'format_list_bulleted',
    isActive: false
  },
  board: {
    id: 2,
    title: 'Board',
    name: 'board',
    icon: 'dashboard',
    isActive: false
  },
  gantt: {
    id: 3,
    title: 'Gantt',
    name: 'gantt',
    icon: 'assessment',
    isActive: false
  },
  table: {
    id: 4,
    title: 'Table',
    name: 'table',
    icon: 'view_stream',
    isActive: false
  }
};
var fieldTypes = [{
  id: 1,
  label: 'Text',
  value: 'text',
  icon: 'title'
}, {
  id: 2,
  label: 'User',
  value: 'user',
  icon: 'person'
}, {
  id: 3,
  label: 'Single Select',
  value: 'singleSelect',
  icon: 'done'
}, {
  id: 4,
  label: 'Date',
  value: 'date',
  icon: 'date_range'
}, {
  id: 5,
  label: 'Date Without Timezone',
  value: 'dateNoTz',
  icon: 'calendar_today'
}, {
  id: 6,
  label: 'Files',
  value: 'files',
  icon: 'attach_file'
}, {
  id: 7,
  label: 'Number',
  value: 'number',
  icon: 'looks_one'
}, {
  id: 8,
  label: 'Currency',
  value: 'currency',
  icon: 'attach_money'
}, {
  id: 9,
  label: 'Multi Select',
  value: 'multiSelect',
  icon: 'done_all'
}, {
  id: 10,
  label: 'Link to record',
  value: 'recordLink',
  icon: 'link'
}, {
  id: 11,
  label: 'Rollup',
  value: 'rollup',
  icon: 'track_changes'
}, {
  id: 12,
  label: 'Formula',
  value: 'formula',
  icon: 'functions'
}];

/***/ }),

/***/ "./resources/js/src/views/pages/menu/mixins/GroupBy.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/mixins/GroupBy.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/set */ "./node_modules/@babel/runtime/core-js/set.js");
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/object/values */ "./node_modules/@babel/runtime/core-js/object/values.js");
/* harmony import */ var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");










function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable multiline-ternary */



/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])("companyUserV2", ["getAllUsersList"]), {
    allUsersMap: function allUsersMap() {
      return this.getAllUsersList.reduce(function (acc, item) {
        acc[item.id] = item;
        return acc;
      }, {});
    },
    customFieldsToRender: function customFieldsToRender() {
      var customFieldsMap = this.customFields.reduce(function (acc, item) {
        acc[item.id] = item;
        return acc;
      }, {});

      var _ref = (this.viewMetaData || {}).show || {},
          columns = _ref.columns;

      if (columns && columns.length > 0) {
        var columnsToRender = columns.map(function (item) {
          return _objectSpread({}, customFieldsMap[item.customFieldId], item);
        }).sort(function (a, b) {
          return a.order - b.order;
        });
        return columnsToRender;
      }

      return [];
    },
    customFieldsToRenderMap: function customFieldsToRenderMap() {
      return this.customFieldsToRender.reduce(function (acc, item) {
        acc[item.id] = item;
        return acc;
      }, {});
    },
    idOfFieldsToRender: function idOfFieldsToRender() {
      return this.customFieldsToRender.map(function (x) {
        return x.id;
      });
    },
    formattedRecordData: function formattedRecordData() {
      var res = this.formatData(this.recordData);
      return res || [];
    },
    sortData: function sortData() {
      var _this = this;

      return function (records) {
        if (records && _this.tableSortSchema && _this.tableSortSchema.length > 0) {
          records = _toConsumableArray(records).sort(function (a, b) {
            var _this$tableSortSchema = _this.tableSortSchema[0],
                field = _this$tableSortSchema.field,
                sortOrder = _this$tableSortSchema.sortOrder;
            var fieldA = a.customFieldsData.find(function (f) {
              return f.fieldId === field;
            });
            var fieldB = b.customFieldsData.find(function (f) {
              return f.fieldId === field;
            });

            var _this$customFields$fi = _this.customFields.find(function (f) {
              return f.id === field;
            }),
                type = _this$customFields$fi.type;

            if (type === 'text') {
              if (sortOrder === 'a') {
                return (fieldA.textValue || '').localeCompare(fieldB.textValue || ''); // fieldA.textValue > fieldB.textValue ? 1 : -1;
              } else if (sortOrder === 'd') {
                return (fieldB.textValue || '').localeCompare(fieldA.textValue || ''); // fieldA.textValue > fieldB.textValue ? -1 : 1;
              }
            } else if (type === 'number') {
              var aField = parseFloat(fieldA.numberValue) || 0;
              var bField = parseFloat(fieldB.numberValue) || 0;

              if (sortOrder === 'a') {
                return aField > bField ? 1 : -1;
              } else if (sortOrder === 'd') {
                return aField > bField ? -1 : 1;
              }
            } else if (type === 'currency') {
              var _aField = parseFloat(fieldA.currencyValue) || 0;

              var _bField = parseFloat(fieldB.currencyValue) || 0;

              if (sortOrder === 'a') {
                return _aField > _bField ? 1 : -1;
              } else if (sortOrder === 'd') {
                return _aField > _bField ? -1 : 1;
              }
            }
          });
          return records;
        }

        return records;
      };
    },
    viewData: function viewData() {
      var _this2 = this;

      var _ref2 = this.selectedGroupBy || {},
          groupById = _ref2.id;

      if (groupById) {
        var groupBy = this.customFields.find(function (f) {
          return f.id === groupById;
        });

        if (groupBy) {
          var temp = {};

          if (groupBy.type === "singleSelect") {
            temp = this.singleSelectTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === "text") {
            temp = this.textTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === "user") {
            temp = this.userTypeSortedData(groupBy, this.formattedRecordData, this.getAllUsersList);
          } else if (groupBy.type === "date") {
            temp = this.dateTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === "number") {
            temp = this.numberTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === 'currency') {
            temp = this.currencyTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === 'dateNoTz') {
            temp = this.dateNoTzTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === 'multiSelect') {
            temp = this.multiSelectTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === 'recordLink') {
            temp = this.recordLinkTypeSortedData(groupBy, this.formattedRecordData);
          }

          if (this.tableSortSchema && this.tableSortSchema.length > 0) {
            var field = this.tableSortSchema[0].field;
            var selectedField = this.customFields.find(function (f) {
              return f.id === field;
            });

            if (selectedField && selectedField.id === groupBy.id && selectedField.type === groupBy.type) {
              var sortOrder = this.tableSortSchema[0].sortOrder;

              var sortedKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(temp).sort(function (a, b) {
                if (a === 'No ' + groupBy.name) return 1;
                if (b === 'No ' + groupBy.name) return -1;

                if (groupBy.type === 'text') {
                  if (sortOrder === 'a') {
                    return a.localeCompare(b);
                  } else if (sortOrder === 'd') {
                    return b.localeCompare(a);
                  }
                } else if (groupBy.type === 'number') {
                  var aField = parseFloat(a);
                  var bField = parseFloat(b);

                  if (sortOrder === 'a') {
                    return aField > bField ? 1 : -1;
                  } else if (sortOrder === 'd') {
                    return aField > bField ? -1 : 1;
                  }
                } else if (groupBy.type === 'currency') {
                  var _aField2 = parseFloat(a);

                  var _bField2 = parseFloat(b);

                  if (sortOrder === 'a') {
                    return _aField2 > _bField2 ? 1 : -1;
                  } else if (sortOrder === 'd') {
                    return _aField2 > _bField2 ? -1 : 1;
                  }
                }
              });

              var sortedObj = {};
              sortedKeys.forEach(function (key) {
                // Assign decimal values to the key if it is a number without decimal to maintain the order
                if (!isNaN(key) && !isNaN(parseFloat(key)) && !key.includes('.')) {
                  sortedObj[key + '.00'] = temp[key];
                } else {
                  sortedObj[key] = temp[key];
                }
              });
              temp = sortedObj;
            }

            temp = _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_7___default()(temp).map(function (item) {
              return _objectSpread({}, item, {
                records: _this2.sortData(item.records)
              });
            });
          }

          return temp;
        }
      }

      return [{
        id: "none",
        label: this.title,
        records: this.sortData(this.formattedRecordData)
      }];
    },
    groupByOptions: function groupByOptions() {
      var _ref3 = this.viewMetaData || {},
          type = _ref3.type; // const res = [...(this.customFields || [])];


      var res = (this.customFields || []).map(function (item) {
        return _objectSpread({}, item, {
          isDisabled: item.type === "files"
        });
      });

      if (type === "board") {
        return res;
      } else if (type === "gantt") {
        return res.filter(function (f) {
          return f.type === "date";
        });
      }

      res.unshift({
        id: 0,
        name: "None",
        type: "null",
        isDisabled: false
      });
      return res;
    },
    // Expects the corresponding view page to have a prop called viewMetaData, which has the metaData for that view only
    selectedGroupBy: function selectedGroupBy() {
      var _ref4 = this.viewMetaData || {},
          type = _ref4.type;

      var _ref5 = ((this.viewMetaData || {}).groupBy || {}).firstLevel || {},
          groupById = _ref5.customFieldId;

      var selectedGrouping = this.groupByOptions.find(function (f) {
        return f.id === groupById;
      });
      var singleSelect = this.groupByOptions.find(function (f) {
        return f.type === "singleSelect";
      });

      if (type === "board") {
        return selectedGrouping || singleSelect || this.groupByOptions[0] || {};
      } else if (type === "gantt") {
        // Gantt View doesn't need grouping
        return {
          id: 0,
          name: "None",
          type: "null"
        };
      }

      return selectedGrouping || this.groupByOptions[0] || {};
    }
  }),
  methods: {
    textTypeSortedData: function textTypeSortedData(groupBy, recordData) {
      var _this3 = this;

      var groupById = groupBy.id;
      if (!groupById || !recordData.length) return {};
      var temp = {};

      var groupByValues = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6___default.a(recordData.map(function (item) {
        var field = (item.customFieldsData || []).find(function (f) {
          return f.fieldId === groupById;
        });

        if (field.textValue) {
          return field.textValue;
        }

        return;
      }))).filter(Boolean);

      groupByValues.forEach(function (label) {
        temp[label] = {
          label: label,
          records: _this3.formattedRecordData.filter(function (record) {
            var field = record.customFieldsData.find(function (f) {
              return f.fieldId === groupBy.id;
            });

            if (field && field.textValue === label) {
              return true;
            }

            return false;
          })
        };
      });
      var noDatLabel = "No ".concat(groupBy.name || "");
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter(function (record) {
          var field = record.customFieldsData.find(function (f) {
            return f.fieldId === groupBy.id;
          });

          if (!field) {
            return true;
          }

          if (field && !groupByValues.includes(field.textValue)) {
            return true;
          }
        })
      };
      return temp;
    },
    userTypeSortedData: function userTypeSortedData(groupBy, recordData, usersList) {
      var _this4 = this;

      var groupById = groupBy.id;
      if (!groupById || !recordData.length) return {};
      var temp = {};

      var groupByValues = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6___default.a(recordData.map(function (item) {
        var field = (item.customFieldsData || []).find(function (f) {
          return f.fieldId === groupById;
        });

        if ((field.userValue || []).length > 0) {
          return field.userValue.map(function (x) {
            return x.userId;
          }).join(",");
        }

        return;
      }))).filter(Boolean);

      var userNameMap = (usersList || []).reduce(function (acc, item) {
        acc[item.id] = item.fullName;
        return acc;
      }, {});
      var assigneeNameMap = groupByValues.reduce(function (acc, item) {
        acc[item] = item.split(",").map(function (x) {
          return userNameMap[x];
        }).join(", ");
        return acc;
      }, {});
      groupByValues.forEach(function (label) {
        temp[label] = {
          label: assigneeNameMap[label],
          records: _this4.formattedRecordData.filter(function (record) {
            var field = record.customFieldsData.find(function (f) {
              return f.fieldId === groupBy.id;
            });
            var userMap = ((field || {}).userValue || []).map(function (x) {
              return x.userId;
            }).join(",");

            if (userMap === label) {
              return true;
            }

            return false;
          })
        };
      });
      var noDatLabel = "No ".concat(groupBy.name || "");
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter(function (record) {
          var field = record.customFieldsData.find(function (f) {
            return f.fieldId === groupBy.id;
          });

          if (!field) {
            return true;
          }

          var userMap = ((field || {}).userValue || []).map(function (x) {
            return x.userId;
          }).join(",");

          if (!userMap || !groupByValues.includes(userMap)) {
            return true;
          }
        })
      };
      return temp;
    },
    dateTypeSortedData: function dateTypeSortedData(groupBy, recordData) {
      var _this5 = this;

      var groupById = groupBy.id;
      if (!groupById || !recordData.length) return {};
      var temp = {};

      var groupByValues = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6___default.a(recordData.map(function (item) {
        var field = (item.customFieldsData || []).find(function (f) {
          return f.fieldId === groupById;
        });

        if (field.dateValue) {
          var _field$dateValue = field.dateValue,
              utcDateOnly = _field$dateValue.utcDateOnly,
              utcTimeOnly = _field$dateValue.utcTimeOnly;
          return _this5.convertToLocalDateTime(utcDateOnly, utcTimeOnly);
        }

        return;
      }))).filter(Boolean);

      groupByValues.forEach(function (label) {
        temp[label] = {
          label: label,
          records: _this5.formattedRecordData.filter(function (record) {
            var field = record.customFieldsData.find(function (f) {
              return f.fieldId === groupBy.id;
            });
            var compareString = "";

            if ((field || {}).dateValue) {
              var _field$dateValue2 = field.dateValue,
                  utcDateOnly = _field$dateValue2.utcDateOnly,
                  utcTimeOnly = _field$dateValue2.utcTimeOnly;
              compareString = _this5.convertToLocalDateTime(utcDateOnly, utcTimeOnly);
            }

            if (compareString === label) {
              return true;
            }

            return false;
          })
        };
      });
      var noDatLabel = "No ".concat(groupBy.name || "");
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter(function (record) {
          var field = record.customFieldsData.find(function (f) {
            return f.fieldId === groupBy.id;
          });

          if (!field) {
            return true;
          }

          var compareString = "";

          if ((field || {}).dateValue) {
            var _field$dateValue3 = field.dateValue,
                utcDateOnly = _field$dateValue3.utcDateOnly,
                utcTimeOnly = _field$dateValue3.utcTimeOnly;
            compareString = _this5.convertToLocalDateTime(utcDateOnly, utcTimeOnly);
          }

          if (!groupByValues.includes(compareString)) {
            return true;
          }
        })
      };
      return temp;
    },
    dateNoTzTypeSortedData: function dateNoTzTypeSortedData(groupBy, recordData) {
      var _this6 = this;

      var groupById = groupBy.id;
      if (!groupById || !recordData.length) return {};
      var temp = {};

      var groupByValues = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6___default.a(recordData.map(function (item) {
        var field = (item.customFieldsData || []).find(function (f) {
          return f.fieldId === groupById;
        });

        if (field.dateNoTzValue) {
          var _field$dateNoTzValue = field.dateNoTzValue,
              localDateOnly = _field$dateNoTzValue.localDateOnly,
              localTimeOnly = _field$dateNoTzValue.localTimeOnly;
          return localDateOnly && localTimeOnly ? "".concat(localDateOnly, " ").concat(localTimeOnly) : localDateOnly || "";
        }

        return;
      }))).filter(Boolean);

      groupByValues.forEach(function (label) {
        temp[label] = {
          label: label,
          records: _this6.formattedRecordData.filter(function (record) {
            var field = record.customFieldsData.find(function (f) {
              return f.fieldId === groupBy.id;
            });
            var compareString = "";

            if ((field || {}).dateNoTzValue) {
              var _field$dateNoTzValue2 = field.dateNoTzValue,
                  localDateOnly = _field$dateNoTzValue2.localDateOnly,
                  localTimeOnly = _field$dateNoTzValue2.localTimeOnly;
              compareString = localDateOnly && localTimeOnly ? "".concat(localDateOnly, " ").concat(localTimeOnly) : localDateOnly || "";
            }

            if (compareString === label) {
              return true;
            }

            return false;
          })
        };
      });
      var noDatLabel = "No ".concat(groupBy.name || "");
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter(function (record) {
          var field = record.customFieldsData.find(function (f) {
            return f.fieldId === groupBy.id;
          });

          if (!field) {
            return true;
          }

          var compareString = "";

          if ((field || {}).dateNoTzValue) {
            var _field$dateNoTzValue3 = field.dateNoTzValue,
                localDateOnly = _field$dateNoTzValue3.localDateOnly,
                localTimeOnly = _field$dateNoTzValue3.localTimeOnly;
            compareString = localDateOnly && localTimeOnly ? "".concat(localDateOnly, " ").concat(localTimeOnly) : localDateOnly || "";
          }

          if (!groupByValues.includes(compareString)) {
            return true;
          }
        })
      };
      return temp;
    },
    singleSelectTypeSortedData: function singleSelectTypeSortedData(groupBy, recordData) {
      var _this7 = this;

      var groupById = groupBy.id;
      if (!groupById || !recordData.length) return {};
      var temp = [];
      temp = groupBy.singleSelectOptions.map(function (item) {
        return {
          id: item.optionId,
          label: item.optionName,
          records: _this7.formattedRecordData.filter(function (record) {
            var field = record.customFieldsData.find(function (f) {
              return f.fieldId === groupBy.id;
            });

            if (field && field.singleSelectValue === item.optionId) {
              return true;
            }

            return false;
          })
        };
      });
      temp.push({
        id: 0,
        label: "No " + (groupBy.name || ""),
        records: recordData.filter(function (record) {
          var field = record.customFieldsData.find(function (f) {
            return f.fieldId === groupById;
          });

          if (!field) {
            return true;
          }

          if (field && !field.singleSelectValue) {
            return true;
          }
        })
      });
      return temp;
    },
    timeZoneAbbreviated: function timeZoneAbbreviated(dateTimeString) {
      // Reference: https://stackoverflow.com/a/63282162
      var _toString$match = new Date(dateTimeString).toString().match(/\((.+)\)/),
          tz = _toString$match[1];

      if (tz.includes(' ')) {
        return tz.split(' ').map(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 1),
              first = _ref7[0];

          return first;
        }).join('');
      } else {
        return tz;
      }
    },
    convertToLocalDateTime: function convertToLocalDateTime(dateValue, timeValue) {
      if (dateValue && timeValue) {
        return "".concat(dayjs__WEBPACK_IMPORTED_MODULE_10___default()(new Date("".concat(dateValue, "T").concat(timeValue, ":00.000Z"))).format('YYYY-MM-DD'), " ").concat(dayjs__WEBPACK_IMPORTED_MODULE_10___default()(new Date("".concat(dateValue, "T").concat(timeValue, ":00.000Z"))).format('HH:mm'), " ").concat(this.timeZoneAbbreviated("".concat(dateValue, "T").concat(timeValue, ":00.000Z")));
      } else return dateValue || '';
    },
    getFileExtensions: function getFileExtensions(files) {
      var limit = this.fileExtensionLimit || 3;
      var extensions = files.slice(0, limit).map(function (file) {
        var res = file.originalFileName.split('.').pop();
        return res;
      });
      if (files.length > limit) extensions.push("+".concat(files.length - limit, " more"));
      return extensions;
    },
    formatData: function formatData(record) {
      var _this8 = this;

      var res = record.map(function (item) {
        if (item.customFieldsData.length > 0) {
          var customFieldsData = item.customFieldsData.map(function (field) {
            var isRender = _this8.idOfFieldsToRender.length ? _this8.idOfFieldsToRender.includes(field.fieldId) : true;
            var order = (_this8.customFieldsToRenderMap[field.fieldId] || {}).order || null;

            if (field.singleSelectValue) {
              var _this8$customFields$m = _this8.customFields.map(function (f) {
                if (f.type === "singleSelect" && f.id === field.fieldId) {
                  return f.singleSelectOptions;
                }
              }).filter(Boolean),
                  _this8$customFields$m2 = _slicedToArray(_this8$customFields$m, 1),
                  singleSelectOptions = _this8$customFields$m2[0];

              var optionLabel = singleSelectOptions.find(function (item) {
                return item.optionId === field.singleSelectValue;
              });
              return _objectSpread({}, field, {
                singleSelectValue: optionLabel ? field.singleSelectValue : null,
                id: item.id,
                fieldId: field.fieldId,
                textValue: (optionLabel || {}).optionName || "",
                isRender: isRender,
                order: order,
                color: (optionLabel || {}).color || ""
              });
            }

            if (field.userValue) {
              var userNameMap = field.userValue.reduce(function (acc, item) {
                acc[item.userId] = (_this8.allUsersMap[item.userId] || {}).fullName || "";
                return acc;
              }, {});

              var userText = _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_7___default()(userNameMap).join(", ");

              return _objectSpread({}, field, {
                id: item.id,
                fieldId: field.fieldId,
                textValue: userText,
                isRender: isRender,
                order: order,
                userData: _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_7___default()(userNameMap).map(function (fullName) {
                  var tag = (fullName || "").split(" ").map(function (item) {
                    return item[0];
                  }).join("");
                  return {
                    fullName: fullName,
                    tag: tag
                  };
                }) || []
              });
            }

            if (field.dateValue) {
              return _objectSpread({}, field, {
                id: item.id,
                fieldId: field.fieldId,
                textValue: _this8.convertToLocalDateTime(field.dateValue.utcDateOnly, field.dateValue.utcTimeOnly),
                isRender: isRender,
                order: order
              });
            }

            if (field.dateNoTzValue) {
              return _objectSpread({}, field, {
                id: item.id,
                fieldId: field.fieldId,
                textValue: "".concat(field.dateNoTzValue.localDateOnly || "", " ").concat(field.dateNoTzValue.localTimeOnly || ""),
                isRender: isRender,
                order: order
              });
            }

            if (field.numberValue) {
              return _objectSpread({}, field, {
                id: item.id,
                fieldId: field.fieldId,
                textValue: field.numberValue,
                isRender: isRender,
                order: order
              });
            }

            if (field.currencyValue) {
              return _objectSpread({}, field, {
                id: item.id,
                fieldId: field.fieldId,
                textValue: field.currencyValue ? "$".concat(parseFloat(field.currencyValue).toFixed(2)) : '',
                isRender: isRender,
                order: order
              });
            }

            if (field.multiSelectValues) {
              var _this8$customFields$m3 = _this8.customFields.map(function (f) {
                if (f.type === "multiSelect" && f.id === field.fieldId) {
                  return f.multiSelectOptions;
                }
              }).filter(Boolean),
                  _this8$customFields$m4 = _slicedToArray(_this8$customFields$m3, 1),
                  multiSelectOptions = _this8$customFields$m4[0];

              var options = (field.multiSelectValues || []).filter(function (item) {
                return multiSelectOptions.find(function (option) {
                  return option.optionId === item.optionId;
                });
              }).map(function (item) {
                var currentOption = multiSelectOptions.find(function (option) {
                  return option.optionId === item.optionId;
                });
                return {
                  optionId: item.optionId,
                  optionName: currentOption.optionName,
                  color: currentOption.color
                };
              });
              return _objectSpread({}, field, {
                id: item.id,
                fieldId: field.fieldId,
                textValue: "",
                isRender: isRender,
                order: order,
                color: "",
                multiSelectValues: options || []
              });
            }

            if (field.recordLinkValues) {
              return _objectSpread({}, field, {
                id: item.id,
                fieldId: field.fieldId,
                textValue: field.recordLinkValues.map(function (item) {
                  return item.recordText;
                }).join(', '),
                recordLinkValues: field.recordLinkValues,
                isRender: isRender,
                order: order
              });
            }

            return _objectSpread({}, field, {
              id: item.id,
              fieldId: field.fieldId,
              textValue: field.textValue || "",
              isRender: isRender,
              order: order
            });
          });
          return {
            id: item.id,
            customFieldsData: customFieldsData.sort(function (a, b) {
              return a.order - b.order;
            })
          };
        } else {
          var _customFieldsData = _this8.customFieldsToRender.map(function (field) {
            return {
              id: item.id,
              fieldId: field.id,
              textValue: "",
              isRender: true,
              order: 0
            };
          });

          return {
            id: item.id,
            customFieldsData: _customFieldsData
          };
        }
      });
      return res;
    },
    numberTypeSortedData: function numberTypeSortedData(groupBy, recordData) {
      var _this9 = this;

      var groupById = groupBy.id;
      if (!groupById || !recordData.length) return {};
      var temp = {};

      var groupByValues = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6___default.a(recordData.map(function (item) {
        var field = (item.customFieldsData || []).find(function (f) {
          return f.fieldId === groupById;
        });

        if (field.numberValue) {
          return field.numberValue;
        }

        return;
      }))).filter(Boolean);

      groupByValues.forEach(function (label) {
        temp[label] = {
          label: label,
          records: _this9.formattedRecordData.filter(function (record) {
            var field = record.customFieldsData.find(function (f) {
              return f.fieldId === groupBy.id;
            });

            if (field && field.numberValue === label) {
              return true;
            }

            return false;
          })
        };
      });
      var noDatLabel = "No ".concat(groupBy.name || "");
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter(function (record) {
          var field = record.customFieldsData.find(function (f) {
            return f.fieldId === groupBy.id;
          });

          if (!field) {
            return true;
          }

          if (field && !groupByValues.includes(field.numberValue)) {
            return true;
          }
        })
      };
      return temp;
    },
    currencyTypeSortedData: function currencyTypeSortedData(groupBy, recordData) {
      var _this10 = this;

      var groupById = groupBy.id;
      if (!groupById || !recordData.length) return {};
      var temp = {};

      var groupByValues = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6___default.a(recordData.map(function (item) {
        var field = (item.customFieldsData || []).find(function (f) {
          return f.fieldId === groupById;
        });

        if (field.currencyValue) {
          return field.currencyValue;
        }

        return;
      }))).filter(Boolean);

      groupByValues.forEach(function (label) {
        temp[label] = {
          label: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_11__["formatAmount"])(label),
          records: _this10.formattedRecordData.filter(function (record) {
            var field = record.customFieldsData.find(function (f) {
              return f.fieldId === groupBy.id;
            });

            if (field && field.currencyValue === label) {
              return true;
            }

            return false;
          })
        };
      });
      var noDatLabel = "No ".concat(groupBy.name || "");
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter(function (record) {
          var field = record.customFieldsData.find(function (f) {
            return f.fieldId === groupBy.id;
          });

          if (!field) {
            return true;
          }

          if (field && !groupByValues.includes(field.currencyValue)) {
            return true;
          }
        })
      };
      return temp;
    },
    multiSelectTypeSortedData: function multiSelectTypeSortedData(groupBy, recordData) {
      var _this11 = this;

      var groupById = groupBy.id;
      if (!groupById || !recordData.length) return {};
      var temp = {};

      var groupByValues = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6___default.a(recordData.map(function (item) {
        var field = (item.customFieldsData || []).find(function (f) {
          return f.fieldId === groupById;
        });

        if ((field.multiSelectValues || []).length) {
          return field.multiSelectValues.map(function (item) {
            return item.optionName;
          }).join(',');
        }
      }))).filter(Boolean);

      groupByValues.forEach(function (label) {
        temp[label] = {
          label: label,
          records: _this11.formattedRecordData.filter(function (record) {
            var field = record.customFieldsData.find(function (f) {
              return f.fieldId === groupBy.id;
            });

            if (field && (field.multiSelectValues || []).length) {
              var optionLabel = field.multiSelectValues.map(function (item) {
                return item.optionName;
              }).join(',');
              if (optionLabel === label) return true;
            }

            return false;
          })
        };
      });
      var noDatLabel = "No ".concat(groupBy.name || '');
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter(function (record) {
          var field = record.customFieldsData.find(function (f) {
            return f.fieldId === groupBy.id;
          });

          if (!field) {
            return true;
          }

          var optionLabel = field.multiSelectValues.map(function (item) {
            return item.optionName;
          }).join(',');

          if (!optionLabel && !groupByValues.includes(optionLabel)) {
            return true;
          }
        })
      };
      return temp;
    },
    recordLinkTypeSortedData: function recordLinkTypeSortedData(groupBy, recordData) {
      var _this12 = this;

      var groupById = groupBy.id;
      if (!groupById || !recordData.length) return {};
      var temp = {};

      var groupByValues = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_6___default.a(recordData.map(function (item) {
        var field = (item.customFieldsData || []).find(function (f) {
          return f.fieldId === groupById;
        });

        if ((field.recordLinkValues || []).length) {
          return field.recordLinkValues.map(function (item) {
            return item.recordText;
          }).join(',');
        }
      }))).filter(Boolean);

      groupByValues.forEach(function (label) {
        temp[label] = {
          label: label,
          records: _this12.formattedRecordData.filter(function (record) {
            var field = record.customFieldsData.find(function (f) {
              return f.fieldId === groupBy.id;
            });

            if (field && (field.recordLinkValues || []).length) {
              var optionLabel = field.recordLinkValues.map(function (item) {
                return item.recordText;
              }).join(',');
              if (optionLabel === label) return true;
            }

            return false;
          })
        };
      });
      var noDatLabel = "No ".concat(groupBy.name || '');
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter(function (record) {
          var field = record.customFieldsData.find(function (f) {
            return f.fieldId === groupBy.id;
          });

          if (!field) {
            return true;
          }

          var optionLabel = field.recordLinkValues.map(function (item) {
            return item.recordText;
          }).join(',');

          if (!optionLabel && !groupByValues.includes(optionLabel)) {
            return true;
          }
        })
      };
      return temp;
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=108.js.map