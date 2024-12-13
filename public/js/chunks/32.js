(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'add-note-button',
  props: {
    text: {
      type: String,
      default: function _default() {
        return '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tasks_TasksTable_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/TasksTable.vue */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue");
/* harmony import */ var _AddBtn_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddBtn.vue */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue");
/* harmony import */ var _tasks_AddTask_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/AddTask.vue */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../helpers/helper */ "./resources/js/src/helpers/helper.js");








function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Tasks',
  components: {
    AddBtn: _AddBtn_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    AddTask: _tasks_AddTask_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    TasksTable: _tasks_TasksTable_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    location: {
      type: String,
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    return {
      totalRecords: 0,
      paginationMetaData: {},
      tasks: [],
      showTaskModal: false,
      types: [{
        label: 'To-do',
        value: 'todo'
      }, {
        label: 'Call',
        value: 'call'
      }, {
        label: 'Email',
        value: 'email'
      }],
      statuses: [{
        label: 'Overdue',
        value: 'overdue'
      }, {
        label: 'Due Today',
        value: 'dueToday'
      }, {
        label: 'Upcoming',
        value: 'upcoming'
      }, {
        label: 'Completed',
        value: 'completed'
      }],
      filters: {
        name: '',
        type: null,
        status: null,
        reminderDate: '',
        dueDate: '',
        note: '',
        localDate: '',
        assigneeId: ''
      },
      defaultPayloadForUsers: {
        roles: ['admin', 'dispatcher'],
        fields: ['firstName', 'lastName']
      },
      laoding: false,
      filteredType: null,
      filteredStatus: null,
      selectedTaskId: null,
      filterFlag: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])('marketing', ['selectedDeal']), Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])('companyUserV2', ['getUsersList']), {
    modifiedUserList: function modifiedUserList() {
      if (!this.getUsersList[_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(this.defaultPayloadForUsers)].length) {
        return [];
      }

      return (this.getUsersList[_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(this.defaultPayloadForUsers)] || []).map(function (user) {
        return {
          id: user.id,
          fullName: "".concat(user.firstName || '', " ").concat(user.lastName || '').trim()
        };
      });
    }
  }),
  created: function created() {
    this.init();
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.$vs.loading();
                this.loading = true;
                _context.next = 5;
                return this.fetchTask({
                  pageSize: 25,
                  currentPage: 1
                });

              case 5:
                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
                _context.prev = 9;
                this.$vs.loading.close();
                return _context.finish(9);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7, 9, 12]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    fetchTask: function () {
      var _fetchTask = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(_ref) {
        var _ref$pageSize, pageSize, _ref$currentPage, currentPage, _ref$filters, filters, payload, appliedFilters, _ref2, data, _ref3, meta, _ref4, totalPage, totalItems;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref$pageSize = _ref.pageSize, pageSize = _ref$pageSize === void 0 ? 25 : _ref$pageSize, _ref$currentPage = _ref.currentPage, currentPage = _ref$currentPage === void 0 ? 1 : _ref$currentPage, _ref$filters = _ref.filters, filters = _ref$filters === void 0 ? this.filters : _ref$filters;
                payload = _objectSpread({}, this.location == 'deal' && {
                  dealId: _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.selectedDeal).length ? this.selectedDeal.id : this.$route.params.id
                }, {
                  page: currentPage,
                  pageSize: pageSize,
                  fields: ['type', 'reminderDate', 'dueDate', 'status', 'note', 'assignees']
                });
                appliedFilters = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_11__["getObjectDifference"])(this.filters, filters);

                if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(appliedFilters).length) {
                  this.filterFlag = true;
                  payload = _objectSpread({}, payload, appliedFilters);
                }

                _context2.prev = 4;
                _context2.next = 7;
                return this.$store.dispatch('marketing/getTasks', payload);

              case 7:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.loading = false;
                this.tasks = data.payload.tasks || [];

                if (this.location == 'deal') {
                  this.$store.commit('marketing/setDealTasks', this.tasks);
                }

                _ref3 = (data || {}).payload || {}, meta = _ref3.meta;
                _ref4 = meta || {}, totalPage = _ref4.totalPage, totalItems = _ref4.totalItems;
                this.totalPage = totalPage || 1;
                this.totalRecords = totalItems || 0;
                this.paginationMetaData = meta;
                _context2.next = 24;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](4);
                _context2.next = 23;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: getApiErrorMsg(_context2.t0)
                });

              case 23:
                this.loading = false;

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 19]]);
      }));

      return function fetchTask(_x) {
        return _fetchTask.apply(this, arguments);
      };
    }(),
    handleTaskModal: function handleTaskModal(val) {
      this.showTaskModal = val;
      this.selectedTaskId = null;

      if (val) {
        this.selectedTaskId = 0;
      }
    },
    editTaskModal: function editTaskModal(val) {
      this.showTaskModal = true;
      this.selectedTaskId = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/entries */ "./node_modules/@babel/runtime/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _AddBtn_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../AddBtn.vue */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");









function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var dict = {
  custom: {
    name: {
      required: 'The Task Name field is required.'
    },
    type: {
      required: 'The Task Type field is required.'
    },
    priority: {
      required: 'The Priority field is required.'
    },
    dueDate: {
      required: 'The Due Date field is required.'
    }
  }
};
vee_validate__WEBPACK_IMPORTED_MODULE_11__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'add-new-task',
  components: {
    AddBtn: _AddBtn_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    isShow: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    selectedTaskId: {
      type: Number,
      default: 0
    },
    userList: {
      TypeError: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      taskData: {
        name: '',
        type: '',
        reminderDate: '',
        dueDate: '',
        assigneeIds: [],
        dealIds: [],
        priority: '',
        note: '',
        status: '',
        assignees: [],
        deals: [],
        addAssigneeIds: [],
        removeAssigneeIds: []
      },
      priorityList: [{
        label: 'High',
        value: 'high'
      }, {
        label: 'Medium',
        value: 'medium'
      }, {
        label: 'Low',
        value: 'low'
      }],
      taskTypeList: [{
        label: 'To-do',
        value: 'todo'
      }, {
        label: 'Call',
        value: 'call'
      }, {
        label: 'Email',
        value: 'email'
      }],
      dealList: [],
      statuses: [{
        label: 'Completed',
        value: 'completed'
      }],
      selectedDealIds: null,
      selectedType: 'todo',
      selectedAssigneeIds: null,
      selectedPriority: 'medium',
      selectedStatus: null,
      taskDataForUpdate: null
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.$store.dispatch('marketing/getDeals', {});

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.dealList = data.payload.deals;
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _context.next = 12;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(_context.t0)
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    onClose: function onClose() {
      this.$emit('handleTaskModal');
    },
    saveTask: function () {
      var _saveTask = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
        var _this = this;

        var isValidate, originalAssigneeIds, currentAssigneeIds, originalDealIds, currentDealIds, payload, changedValues, addAssigneeIds, removeAssigneeIds, addDealIds, removeDealIds, response, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.validate();

              case 2:
                isValidate = _context2.sent;

                if (!isValidate) {
                  _context2.next = 56;
                  break;
                }

                _context2.prev = 4;
                originalAssigneeIds = this.taskData.assignees.map(function (assignee) {
                  return assignee.id;
                });
                currentAssigneeIds = this.selectedAssigneeIds || [];
                originalDealIds = this.taskData.deals.map(function (deal) {
                  return deal.id;
                });
                currentDealIds = this.selectedDealIds || [];
                this.taskData.type = this.selectedType;
                this.taskData.assigneeIds = this.selectedAssigneeIds;
                this.taskData.dealIds = this.selectedDealIds;
                this.taskData.priority = this.selectedPriority;
                this.taskData.status = this.selectedStatus;
                payload = null;

                if (this.selectedTaskId) {
                  changedValues = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getObjectDifference"])(this.taskDataForUpdate, this.taskData);

                  if (changedValues.note === '') {
                    changedValues.note = null;
                  }

                  payload = changedValues;
                } else {
                  payload = _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_6___default()(this.taskData).reduce(function (acc, _ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2),
                        key = _ref3[0],
                        value = _ref3[1];

                    if (!Array.isArray(value) && value || value === false || value === 0 || Array.isArray(value) && value.length || _this.selectedTaskId) {
                      acc[key] = value !== null ? value : '';
                    }

                    return acc;
                  }, {});
                }

                delete payload.assignees;
                delete payload.deals;

                if (!this.selectedTaskId) {
                  _context2.next = 42;
                  break;
                }

                delete payload.assigneeIds;
                delete payload.dealIds;
                delete payload.id;
                addAssigneeIds = currentAssigneeIds.filter(function (id) {
                  return !originalAssigneeIds.includes(id);
                });
                removeAssigneeIds = originalAssigneeIds.filter(function (id) {
                  return !currentAssigneeIds.includes(id);
                });

                if (addAssigneeIds.length) {
                  payload.addAssigneeIds = addAssigneeIds;
                }

                if (removeAssigneeIds.length) {
                  payload.removeAssigneeIds = removeAssigneeIds;
                }

                addDealIds = currentDealIds.filter(function (id) {
                  return !originalDealIds.includes(id);
                });
                removeDealIds = originalDealIds.filter(function (id) {
                  return !currentDealIds.includes(id);
                });

                if (addDealIds.length) {
                  payload.addDealIds = addDealIds;
                }

                if (removeDealIds.length) {
                  payload.removeDealIds = removeDealIds;
                }

                if (!_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(payload).length) {
                  _context2.next = 39;
                  break;
                }

                _context2.next = 33;
                return this.$store.dispatch('marketing/updateTasks', {
                  id: this.selectedTaskId,
                  payload: payload
                });

              case 33:
                response = _context2.sent;

                if (!(response.status === 200)) {
                  _context2.next = 37;
                  break;
                }

                _context2.next = 37;
                return this.$vs.notify({
                  time: 8000,
                  color: 'primary',
                  title: 'Success',
                  text: 'Task updated successfully.'
                });

              case 37:
                _context2.next = 40;
                break;

              case 39:
                return _context2.abrupt("return");

              case 40:
                _context2.next = 48;
                break;

              case 42:
                _context2.next = 44;
                return this.$store.dispatch('marketing/saveTasks', payload);

              case 44:
                _response = _context2.sent;

                if (!(_response.status === 200)) {
                  _context2.next = 48;
                  break;
                }

                _context2.next = 48;
                return this.$vs.notify({
                  time: 8000,
                  color: 'primary',
                  title: 'Success',
                  text: 'Task created successfully.'
                });

              case 48:
                this.onClose();
                this.$emit('refresh', {});
                _context2.next = 56;
                break;

              case 52:
                _context2.prev = 52;
                _context2.t0 = _context2["catch"](4);
                _context2.next = 56;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(_context2.t0)
                });

              case 56:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 52]]);
      }));

      return function saveTask() {
        return _saveTask.apply(this, arguments);
      };
    }(),
    validate: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$validator.validateAll();

              case 2:
                if (!this.errors.items.length) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", false);

              case 4:
                return _context3.abrupt("return", true);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function validate() {
        return _validate.apply(this, arguments);
      };
    }(),
    removeValue: function removeValue(key) {
      this.taskData[key] = null;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('companyUserV2', ['getUsersList']), {
    isModalShowing: {
      get: function get() {
        return this.isShow;
      },
      set: function set(val) {}
    },
    validateForm: function validateForm() {
      return !this.$validator.errors.any() && this.taskData.name !== '' && this.taskData.dueDate !== '' && this.selectedType !== '' && this.selectedPriority !== '';
    },
    isSaveDisabled: function isSaveDisabled() {
      if (this.selectedTaskId) {
        if (!this.taskData || !this.taskDataForUpdate) return null;

        var taskDataCheck = _objectSpread({}, this.taskData, {
          type: this.selectedType,
          priority: this.selectedPriority,
          status: this.selectedStatus ? this.selectedStatus : null,
          assigneeIds: this.selectedAssigneeIds,
          dealIds: this.selectedDealIds
        });

        if (this.taskData.note === '') {
          taskDataCheck.note = null;
        }

        delete taskDataCheck.assignees;
        delete taskDataCheck.deals;
        var noChanges = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getObjectDifference"])(this.taskDataForUpdate, taskDataCheck);
        var originalDealIds = structuredClone(this.taskDataForUpdate.dealIds);
        var originalAssigneeIds = structuredClone(this.taskDataForUpdate.assigneeIds);

        if (noChanges.dealIds && noChanges.dealIds.sort().toString() === originalDealIds.sort().toString()) {
          delete noChanges.dealIds;
        }

        if (noChanges.assigneeIds && noChanges.assigneeIds.sort().toString() === originalAssigneeIds.sort().toString()) {
          delete noChanges.assigneeIds;
        }

        return this.$validator.errors.any() || !_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(noChanges).length;
      } else {
        return !this.validateForm;
      }
    }
  }),
  watch: {
    isModalShowing: function isModalShowing() {
      this.$validator.reset();
    },
    selectedTaskId: function () {
      var _selectedTaskId = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4(newVal, oldVal) {
        var payload, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!newVal) {
                  _context4.next = 26;
                  break;
                }

                _context4.prev = 1;
                payload = {
                  id: newVal
                };
                _context4.next = 5;
                return this.$store.dispatch('marketing/getTaskDetail', payload);

              case 5:
                response = _context4.sent;
                this.taskData = response.data.payload.task;
                this.taskDataForUpdate = structuredClone(this.taskData);
                this.selectedType = this.taskData.type;
                this.selectedPriority = this.taskData.priority;
                this.selectedStatus = this.taskData.status;
                this.selectedAssigneeIds = this.taskData.assignees.map(function (assignee) {
                  return assignee.id;
                });
                this.selectedDealIds = this.taskData.deals.map(function (deal) {
                  return deal.id;
                });
                this.taskDataForUpdate.assigneeIds = this.selectedAssigneeIds;
                this.taskDataForUpdate.dealIds = this.selectedDealIds;
                this.taskDataForUpdate.status = this.selectedStatus || this.selectedStatus === '' ? this.selectedStatus : null;
                delete this.taskDataForUpdate.assignees;
                delete this.taskDataForUpdate.deals;
                _context4.next = 24;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](1);
                _context4.next = 24;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(_context4.t0)
                });

              case 24:
                _context4.next = 32;
                break;

              case 26:
                this.taskData = {
                  name: '',
                  type: '',
                  reminderDate: '',
                  dueDate: '',
                  assigneeIds: [],
                  dealIds: [],
                  priority: '',
                  note: '',
                  status: '',
                  assignees: [],
                  deals: [],
                  addAssigneeIds: [],
                  removeAssigneeIds: []
                };
                this.selectedType = 'todo';
                this.selectedDealIds = null;
                this.selectedAssigneeIds = null;
                this.selectedPriority = 'medium';
                this.selectedStatus = null;

              case 32:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 20]]);
      }));

      return function selectedTaskId(_x, _x2) {
        return _selectedTaskId.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TasksTable',
  props: {
    tasks: {
      required: true,
      type: Array
    },
    totalRecords: {
      required: true,
      type: Number
    },
    paginationMetaData: {
      required: true,
      type: Object
    },
    userList: {
      TypeError: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      loading: false,
      rows: 25,
      filters: {
        name: '',
        type: null,
        status: null,
        reminderDate: '',
        dueDate: '',
        note: '',
        localDate: '',
        assigneeId: null
      },
      sortBy: {
        field: null,
        order: null
      },
      types: [{
        label: 'To-do',
        value: 'todo'
      }, {
        label: 'Call',
        value: 'call'
      }, {
        label: 'Email',
        value: 'email'
      }],
      statuses: [{
        id: 1,
        label: 'Overdue',
        value: 'overdue'
      }, {
        id: 2,
        label: 'Due Today',
        value: 'dueToday'
      }, {
        id: 3,
        label: 'Upcoming',
        value: 'upcoming'
      }, {
        id: 4,
        label: 'Completed',
        value: 'completed'
      }],
      cssForStatusCell: {
        active: 'active-status',
        paused: 'paused-status',
        completed: 'completed-status',
        draft: 'draft-status'
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
  methods: {
    onSort: function onSort(_ref2) {
      var sortField = _ref2.sortField,
          sortOrder = _ref2.sortOrder;
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? 'asc' : 'desc'
      };
    },
    onPage: function onPage(_ref3) {
      var page = _ref3.page,
          rows = _ref3.rows;
      this.$emit('fetchTasks', {
        pageSize: rows,
        currentPage: page + 1,
        filters: this.filters
      });
    },
    getStatus: function getStatus(status, dueDate) {
      status = this.getStatusValue(status, dueDate);
      return this.statuses.find(function (item) {
        return item.value === status;
      }).label;
    },
    handleEditTask: function handleEditTask(id) {
      this.$emit('editTaskModal', id);
    },
    getStatusValue: function getStatusValue(status, dueDate) {
      if (status !== 'completed') {
        var now = this.$dayjs().format('YYYY-MM-DD');

        if (now > dueDate) {
          status = 'overdue';
        } else if (now < dueDate) {
          status = 'upcoming';
        } else if (now == dueDate) {
          status = 'dueToday';
        }
      }

      return status;
    },
    formatDate: function formatDate(date) {
      return date ? this.$dayjs(date).format('MM/DD/YY') : '';
    },
    onInputFilter: function onInputFilter(key) {
      if (this.filters[key] === null && key !== 'type' && key !== 'status' && key !== 'assigneeId') {
        this.filters[key] = '';
      }

      if (key === 'status') {
        if (this.filters[key] !== null) this.filters.localDate = this.$dayjs().format('YYYY-MM-DD');else this.filters.localDate = '';
      }

      this.$emit('fetchTasks', {
        filters: this.filters
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vs-button", _vm._b({
    staticClass: "vs-con-loading__container add-note-btn",
    attrs: {
      color: "primary",
      type: "border",
      "icon-pack": "feather",
      icon: "icon-plus",
      size: "small",
      id: "new-note-button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("onClick");
      }
    }
  }, "vs-button", _vm.$attrs, false), [_vm._v("\n  " + _vm._s(_vm.text) + "\n")]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=template&id=4278b90c&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=template&id=4278b90c& ***!
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
    staticClass: "tasks"
  }, [(_vm.tasks.length || _vm.filterFlag) && !_vm.loading ? [_c("div", {
    staticClass: "mb-5 task-conatiner"
  }, [_c("div", {
    staticClass: "flex w-full justify-end mb-4 gap-3"
  }, [_c("AddBtn", {
    attrs: {
      text: "New Task"
    },
    on: {
      onClick: function onClick($event) {
        return _vm.handleTaskModal(true);
      }
    }
  })], 1), _vm._v(" "), _c("TasksTable", {
    attrs: {
      tasks: _vm.tasks,
      totalRecords: _vm.totalRecords,
      paginationMetaData: _vm.paginationMetaData,
      userList: _vm.modifiedUserList
    },
    on: {
      fetchTasks: _vm.fetchTask,
      editTaskModal: _vm.editTaskModal
    }
  })], 1)] : !_vm.loading ? [_c("div", {
    staticClass: "flex justify-center no-data-found py-10"
  }, [_c("div", {
    staticClass: "flex flex-col items-center"
  }, [_c("h6", {
    staticClass: "mb-3"
  }, [_vm._v("No Tasks Created")]), _vm._v(" "), _c("AddBtn", {
    staticClass: "new-task",
    attrs: {
      text: "New Task"
    },
    on: {
      onClick: function onClick($event) {
        return _vm.handleTaskModal(true);
      }
    }
  })], 1)])] : _vm._e(), _vm._v(" "), _c("AddTask", {
    attrs: {
      "is-show": _vm.showTaskModal,
      selectedTaskId: _vm.selectedTaskId,
      userList: _vm.modifiedUserList
    },
    on: {
      handleTaskModal: function handleTaskModal($event) {
        return _vm.handleTaskModal(false);
      },
      refresh: _vm.fetchTask
    }
  })], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=template&id=0ed3fcb1&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=template&id=0ed3fcb1& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vs-sidebar", {
    staticClass: "task-sidebar",
    attrs: {
      parent: "body",
      "position-right": "",
      "default-index": "1",
      color: "primary",
      spacer: ""
    },
    model: {
      value: _vm.isModalShowing,
      callback: function callback($$v) {
        _vm.isModalShowing = $$v;
      },
      expression: "isModalShowing"
    }
  }, [_c("div", {
    staticClass: "flex items-center justify-between vs-header-sidebar"
  }, [_c("h4", [_vm._v(_vm._s(this.selectedTaskId ? "Edit" : "New") + " Task")]), _vm._v(" "), _c("feather-icon", {
    staticClass: "cursor-pointer text-white",
    attrs: {
      icon: "XIcon"
    },
    on: {
      click: _vm.onClose
    }
  })], 1), _vm._v(" "), _c("form", {
    staticClass: "vs-sidebar-form px-3 pb-5"
  }, [_c("div", {
    staticClass: "vx-row w-full m-0"
  }, [_c("div", {
    staticClass: "vx-col w-1/2 pb-4"
  }, [_c("label", [_vm._v("Task Title "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "name"
    },
    model: {
      value: _vm.taskData.name,
      callback: function callback($$v) {
        _vm.$set(_vm.taskData, "name", $$v);
      },
      expression: "taskData.name"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n          " + _vm._s(_vm.errors.first("name")) + "\n        ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 pb-4"
  }, [_c("label", [_vm._v("Type "), _c("field-required-sign")], 1), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.taskTypeList,
      label: "label",
      reduce: function reduce(option) {
        return option.value;
      },
      "data-vv-as": "selected",
      closeOnSelect: true,
      clearable: true,
      name: "type"
    },
    model: {
      value: _vm.selectedType,
      callback: function callback($$v) {
        _vm.selectedType = $$v;
      },
      expression: "selectedType"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n          " + _vm._s(_vm.errors.first("type")) + "\n        ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 pb-4"
  }, [_c("label", [_vm._v("Deal")]), _vm._v(" "), _c("v-select", {
    attrs: {
      multiple: "",
      "data-vv-as": "selected",
      options: _vm.dealList,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      closeOnSelect: true,
      clearable: true
    },
    model: {
      value: _vm.selectedDealIds,
      callback: function callback($$v) {
        _vm.selectedDealIds = $$v;
      },
      expression: "selectedDealIds"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 pb-4"
  }, [_c("label", [_vm._v("Reminder Date")]), _vm._v(" "), _c("div", {
    staticClass: "reminder-date"
  }, [_c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "",
      name: "reminderDate",
      clearable: ""
    },
    model: {
      value: _vm.taskData.reminderDate,
      callback: function callback($$v) {
        _vm.$set(_vm.taskData, "reminderDate", $$v);
      },
      expression: "taskData.reminderDate"
    }
  }), _vm._v(" "), _vm.taskData.reminderDate ? _c("span", {
    staticClass: "clear-date",
    on: {
      click: function click($event) {
        return _vm.removeValue("reminderDate");
      }
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "close"
    }
  })], 1) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 pb-4"
  }, [_c("label", [_vm._v("Due Date "), _c("field-required-sign")], 1), _vm._v(" "), _c("flat-pickr", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      name: "dueDate",
      "data-vv-validate-on": "on-change"
    },
    model: {
      value: _vm.taskData.dueDate,
      callback: function callback($$v) {
        _vm.$set(_vm.taskData, "dueDate", $$v);
      },
      expression: "taskData.dueDate"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n          " + _vm._s(_vm.errors.first("dueDate")) + "\n        ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 pb-4"
  }, [_c("label", [_vm._v("Assign To ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      multiple: "",
      "data-vv-as": "selected",
      options: _vm.userList,
      label: "fullName",
      reduce: function reduce(option) {
        return option.id;
      },
      closeOnSelect: true,
      clearable: true
    },
    model: {
      value: _vm.selectedAssigneeIds,
      callback: function callback($$v) {
        _vm.selectedAssigneeIds = $$v;
      },
      expression: "selectedAssigneeIds"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2 pb-4"
  }, [_c("label", [_vm._v("Priority "), _c("field-required-sign")], 1), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.priorityList,
      label: "label",
      reduce: function reduce(option) {
        return option.value;
      },
      "data-vv-as": "selected",
      closeOnSelect: true,
      clearable: true,
      name: "priority"
    },
    model: {
      value: _vm.selectedPriority,
      callback: function callback($$v) {
        _vm.selectedPriority = $$v;
      },
      expression: "selectedPriority"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n          " + _vm._s(_vm.errors.first("priority")) + "\n        ")])], 1), _vm._v(" "), this.selectedTaskId ? _c("div", {
    staticClass: "vx-col w-1/2 pb-4"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Status")]), _vm._v(" "), _c("v-select", {
    attrs: {
      "data-vv-as": "selected",
      options: _vm.statuses,
      label: "label",
      reduce: function reduce(option) {
        return option.value;
      },
      closeOnSelect: true,
      clearable: true,
      name: "status"
    },
    model: {
      value: _vm.selectedStatus,
      callback: function callback($$v) {
        _vm.selectedStatus = $$v;
      },
      expression: "selectedStatus"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full pb-4"
  }, [_c("label", [_vm._v("Note")]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    model: {
      value: _vm.taskData.note,
      callback: function callback($$v) {
        _vm.$set(_vm.taskData, "note", $$v);
      },
      expression: "taskData.note"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-end w-full mt-5"
  }, [_c("vs-button", {
    staticClass: "mr-3 action-btn",
    attrs: {
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.onClose.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "action-btn",
    attrs: {
      disabled: _vm.isSaveDisabled
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.saveTask.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        Save\n      ")])], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=template&id=31dc4345&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=template&id=31dc4345&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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

  return _c("div", [_c("div", {
    staticClass: "mt-10"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.tasks,
      lazy: true,
      paginator: true,
      rows: _vm.rows,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      loading: _vm.loading,
      filterDisplay: "row",
      responsiveLayout: "scroll",
      rowsPerPageOptions: [10, 25, 50]
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
      showFilterMenu: false,
      field: "name",
      header: "Task Title"
    },
    scopedSlots: _vm._u([{
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter input-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filters["name"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "name", $$v);
            },
            expression: "filters['name']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      showFilterMenu: false,
      field: "type",
      header: "Type"
    },
    scopedSlots: _vm._u([{
      key: "filter",
      fn: function fn(_ref) {
        _objectDestructuringEmpty(_ref);

        return [_c("Dropdown", {
          staticClass: "p-column-filter filter-dropdown",
          attrs: {
            options: _vm.types,
            optionLabel: "label",
            optionValue: "value",
            showClear: true,
            appendTo: "body"
          },
          on: {
            change: function change($event) {
              return _vm.onInputFilter("type");
            }
          },
          model: {
            value: _vm.filters["type"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "type", $$v);
            },
            expression: "filters['type']"
          }
        })];
      }
    }, {
      key: "body",
      fn: function fn(_ref2) {
        var type = _ref2.data.type;
        return [_vm._v("\n          " + _vm._s(_vm.types.filter(function (item) {
          return item.value === type;
        })[0].label) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      showFilterMenu: false,
      field: "reminderDate",
      header: "Reminder Date"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var reminderDate = _ref3.data.reminderDate;
        return [_vm._v("\n          " + _vm._s(_vm.formatDate(reminderDate)) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker input-filter",
          on: {
            "on-change": _vm.onInputFilter
          },
          model: {
            value: _vm.filters["reminderDate"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "reminderDate", $$v);
            },
            expression: "filters['reminderDate']"
          }
        }), _vm._v(" "), _vm.filters["reminderDate"] ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              _vm.filters["reminderDate"] = "";
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      showFilterMenu: false,
      field: "dueDate",
      header: "Due Date"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var dueDate = _ref4.data.dueDate;
        return [_vm._v("\n          " + _vm._s(_vm.formatDate(dueDate)) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker input-filter",
          on: {
            "on-change": _vm.onInputFilter
          },
          model: {
            value: _vm.filters["dueDate"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "dueDate", $$v);
            },
            expression: "filters['dueDate']"
          }
        }), _vm._v(" "), _vm.filters["dueDate"] ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              _vm.filters["dueDate"] = "";
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      showFilterMenu: false,
      field: "assignees",
      header: "Assign To"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref5) {
        var assignees = _ref5.data.assignees;
        return [_vm._v("\n          " + _vm._s(assignees.map(function (user) {
          return user.name;
        }).join(", ")) + "\n        ")];
      }
    }, {
      key: "filter",
      fn: function fn(_ref6) {
        _objectDestructuringEmpty(_ref6);

        return [_c("Dropdown", {
          staticClass: "p-column-filter filter-dropdown",
          attrs: {
            options: _vm.userList,
            optionLabel: "fullName",
            optionValue: "id",
            showClear: true,
            appendTo: "body"
          },
          on: {
            change: function change($event) {
              return _vm.onInputFilter("assigneeId");
            }
          },
          model: {
            value: _vm.filters["assigneeId"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "assigneeId", $$v);
            },
            expression: "filters['assigneeId']"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      showFilterMenu: false,
      field: "status",
      header: "Status"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref7) {
        var _ref7$data = _ref7.data,
            status = _ref7$data.status,
            dueDate = _ref7$data.dueDate;
        return [_c("span", {
          staticClass: "status-container",
          class: _vm.getStatusValue(status, dueDate) + "-status"
        }, [_vm._v("\n            " + _vm._s(_vm.getStatus(status, dueDate)) + "\n          ")])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref8) {
        _objectDestructuringEmpty(_ref8);

        return [_c("Dropdown", {
          staticClass: "p-column-filter filter-dropdown",
          attrs: {
            options: _vm.statuses,
            optionLabel: "label",
            optionValue: "value",
            showClear: true,
            appendTo: "body"
          },
          on: {
            change: function change($event) {
              return _vm.onInputFilter("status");
            }
          },
          model: {
            value: _vm.filters["status"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "status", $$v);
            },
            expression: "filters['status']"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      showFilterMenu: false,
      field: "note",
      header: "Note",
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter input-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.onInputFilter
          },
          model: {
            value: _vm.filters["note"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "note", $$v);
            },
            expression: "filters['note']"
          }
        })];
      },
      proxy: true
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
      fn: function fn(_ref9) {
        var id = _ref9.data.id;
        return [_c("div", {
          staticClass: "cursor-pointer",
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.handleEditTask(id);
            }
          }
        }, [_c("img", {
          attrs: {
            src: __webpack_require__(/*! @assets/images/crm/editIcon.svg */ "./resources/assets/images/crm/editIcon.svg")
          }
        })])];
      }
    }])
  })], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-note-btn {\n  font-size: 1rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-sidebar .vs-sidebar--items {\n  overflow: auto;\n}\n.task-sidebar .vs-sidebar {\n  width: 45vw !important;\n  max-width: 50vw !important;\n}\n.task-sidebar .task-form textarea {\n  resize: none !important;\n}\n.task-sidebar .reminder-date {\n  position: relative;\n}\n.task-sidebar .reminder-date .clear-date {\n  position: absolute;\n  inset: 0 0 0 auto;\n  display: flex;\n  align-items: center;\n  width: 25px;\n}\n[dir] .task-sidebar .reminder-date .clear-date {\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-31dc4345] .p-column-filter-clear-button {\n  display: none;\n}\n.clearable-date-picker[data-v-31dc4345] {\n  position: relative;\n}\n.clearable-date-picker .close-icon[data-v-31dc4345] {\n  position: absolute;\n  top: 25%;\n}\n[dir] .clearable-date-picker .close-icon[data-v-31dc4345] {\n  cursor: pointer;\n}\n[dir=ltr] .clearable-date-picker .close-icon[data-v-31dc4345] {\n  right: 30%;\n}\n[dir=rtl] .clearable-date-picker .close-icon[data-v-31dc4345] {\n  left: 30%;\n}\n.input-filter[data-v-31dc4345] {\n  width: 75% !important;\n}\n.filter-dropdown[data-v-31dc4345] {\n  min-width: 150px;\n  width: 75%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../node_modules/css-loader!../../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../node_modules/css-loader!../../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/assets/images/crm/editIcon.svg":
/*!**************************************************!*\
  !*** ./resources/assets/images/crm/editIcon.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/editIcon.svg?2c2bf4b5491b63abece9e522d47b9686";

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBtn.vue?vue&type=template&id=0b13993f& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f&");
/* harmony import */ var _AddBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBtn.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBtn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBtn.vue?vue&type=template&id=0b13993f& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tasks_vue_vue_type_template_id_4278b90c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=4278b90c& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=template&id=4278b90c&");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tasks_vue_vue_type_template_id_4278b90c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tasks_vue_vue_type_template_id_4278b90c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=template&id=4278b90c&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=template&id=4278b90c& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_4278b90c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=template&id=4278b90c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue?vue&type=template&id=4278b90c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_4278b90c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_4278b90c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddTask_vue_vue_type_template_id_0ed3fcb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTask.vue?vue&type=template&id=0ed3fcb1& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=template&id=0ed3fcb1&");
/* harmony import */ var _AddTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTask.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddTask_vue_vue_type_style_index_0_id_0ed3fcb1_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddTask_vue_vue_type_template_id_0ed3fcb1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddTask_vue_vue_type_template_id_0ed3fcb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddTask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_style_index_0_id_0ed3fcb1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader!../../../../../../../../../../node_modules/css-loader!../../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=style&index=0&id=0ed3fcb1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_style_index_0_id_0ed3fcb1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_style_index_0_id_0ed3fcb1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_style_index_0_id_0ed3fcb1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_style_index_0_id_0ed3fcb1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=template&id=0ed3fcb1&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=template&id=0ed3fcb1& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_template_id_0ed3fcb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddTask.vue?vue&type=template&id=0ed3fcb1& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/AddTask.vue?vue&type=template&id=0ed3fcb1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_template_id_0ed3fcb1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_template_id_0ed3fcb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TasksTable_vue_vue_type_template_id_31dc4345_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksTable.vue?vue&type=template&id=31dc4345&scoped=true& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=template&id=31dc4345&scoped=true&");
/* harmony import */ var _TasksTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TasksTable_vue_vue_type_style_index_0_id_31dc4345_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TasksTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TasksTable_vue_vue_type_template_id_31dc4345_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TasksTable_vue_vue_type_template_id_31dc4345_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31dc4345",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TasksTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_style_index_0_id_31dc4345_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader!../../../../../../../../../../node_modules/css-loader!../../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=style&index=0&id=31dc4345&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_style_index_0_id_31dc4345_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_style_index_0_id_31dc4345_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_style_index_0_id_31dc4345_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_style_index_0_id_31dc4345_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=template&id=31dc4345&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=template&id=31dc4345&scoped=true& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_template_id_31dc4345_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TasksTable.vue?vue&type=template&id=31dc4345&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/tasks/TasksTable.vue?vue&type=template&id=31dc4345&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_template_id_31dc4345_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksTable_vue_vue_type_template_id_31dc4345_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=32.js.map