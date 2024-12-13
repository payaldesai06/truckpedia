(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_PipelineCols_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PipelineCols.vue */ "./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);








function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PipelineView',
  components: {
    PipelineCols: _components_PipelineCols_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    stageNamePopup: function stageNamePopup() {
      return __webpack_require__.e(/*! import() */ 138).then(__webpack_require__.bind(null, /*! ./components/StageNamePopup.vue */ "./resources/js/src/views/pages/marketing/crm/components/StageNamePopup.vue"));
    },
    PipelineDealSidebar: function PipelineDealSidebar() {
      return __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./components/PipelineDealSidebar.vue */ "./resources/js/src/views/pages/marketing/crm/components/PipelineDealSidebar.vue"));
    },
    CreateEditNewPipelinePopup: function CreateEditNewPipelinePopup() {
      return __webpack_require__.e(/*! import() */ 212).then(__webpack_require__.bind(null, /*! ./components/CreateEditNewPipelinePopup.vue */ "./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue"));
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])('marketing', ['pipelines', 'selectedPipeline', 'getSelectedUsersForDealsFilter']), Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])('companyUserV2', ['getUsersList']), {
    localSelectedPipeline: {
      get: function get() {
        return this.selectedPipeline;
      },
      set: function set(val) {
        this.$store.commit('marketing/setSelectedPipeline', val);
      }
    },
    modifiedUserList: function modifiedUserList() {
      var usersPayload = {
        roles: ['admin', 'dispatcher'],
        fields: ['firstName', 'lastName']
      };
      return (this.getUsersList[_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(usersPayload)] || []).map(function (user) {
        return {
          id: user.id,
          fullName: "".concat(user.firstName || '', " ").concat(user.lastName || '').trim()
        };
      });
    }
  }),
  data: function data() {
    return {
      deals: [],
      pipelineNamePopup: {
        isActive: false,
        data: {}
      },
      createEditNewPipelinePopup: {
        isActive: false,
        data: {}
      },
      dealSidebar: {
        data: {},
        isActive: false
      },
      selectedUsers: []
    };
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.init();

            case 2:
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
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.pipelines.length) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this.getPipelines();

              case 3:
                if (!this.selectedPipeline) {
                  this.$store.commit('marketing/setSelectedPipeline', this.pipelines[0]);
                } else {
                  this.getDealsForPipeline(this.getSelectedUsersForDealsFilter);
                }

                if (this.getSelectedUsersForDealsFilter.length) {
                  this.selectedUsers = this.getSelectedUsersForDealsFilter;
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    getPipelines: function () {
      var _getPipelines = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.$vs.loading();
                _context3.next = 4;
                return this.$store.dispatch('marketing/setMarketingPipelines');

              case 4:
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 9:
                _context3.prev = 9;
                this.$vs.loading.close();
                return _context3.finish(9);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6, 9, 12]]);
      }));

      return function getPipelines() {
        return _getPipelines.apply(this, arguments);
      };
    }(),
    toggleNamePopup: function toggleNamePopup(col) {
      this.pipelineNamePopup.isActive = !this.pipelineNamePopup.isActive;
      this.pipelineNamePopup.data = col || {};
    },
    togglePiplinePopup: function togglePiplinePopup(col) {
      this.createEditNewPipelinePopup.isActive = !this.createEditNewPipelinePopup.isActive;
      this.createEditNewPipelinePopup.data = col && col.stages ? col : {};
    },
    toggleDealSidebar: function toggleDealSidebar() {
      var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var data = arguments.length > 1 ? arguments[1] : undefined;
      this.dealSidebar.isActive = isActive;
      this.dealSidebar.data = data || {};
    },
    getDealsForPipeline: function () {
      var _getDealsForPipeline = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4() {
        var assigneeIds,
            payload,
            _ref,
            data,
            _args4 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assigneeIds = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : [];

                if (this.selectedPipeline) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                _context4.prev = 3;
                payload = _objectSpread({
                  pipelineIds: [this.selectedPipeline.id],
                  fields: ['stage', 'assignees', 'customer']
                }, assigneeIds.length && {
                  assigneeIds: assigneeIds
                });
                _context4.next = 7;
                return this.$store.dispatch('marketing/getDeals', payload);

              case 7:
                _ref = _context4.sent;
                data = _ref.data;
                this.deals = data.payload.deals;
                this.$store.commit('marketing/setAllDeals', this.deals);
                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](3);
                console.log(_context4.t0, 'error');

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 13]]);
      }));

      return function getDealsForPipeline() {
        return _getDealsForPipeline.apply(this, arguments);
      };
    }(),
    handleUsersSelection: function handleUsersSelection() {
      this.getDealsForPipeline(this.selectedUsers);
      this.$store.commit('marketing/setSelectedUsersForDealsFilter', this.selectedUsers);
    }
  },
  watch: {
    localSelectedPipeline: function localSelectedPipeline() {
      this.getDealsForPipeline(this.selectedUsers);
    },
    selectedUsers: function selectedUsers(newVal, oldVal) {
      if (newVal.length > oldVal.length) {
        // Scrolling down to the last element of the list, so that user can get to know about the scroll
        jquery__WEBPACK_IMPORTED_MODULE_9___default()('#usersDropdown .vs__selected-options').scrollTop(jquery__WEBPACK_IMPORTED_MODULE_9___default()('#usersDropdown .vs__selected-options').scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_9___default()('#usersDropdown .vs__selected-options').height());
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _pipelinedraggablecard_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipelinedraggablecard.vue */ "./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DraggableCard: _pipelinedraggablecard_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    deals: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      allSelectedColsDictionary: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])('marketing', ['selectedPipeline']), {
    pipelineCols: function pipelineCols() {
      if (this.selectedPipeline) {
        return this.selectedPipeline.stages;
      } else {
        return [];
      }
    },
    getColumnWidth: function getColumnWidth() {
      var columnWidth = 100 / this.pipelineCols.length;
      return "width: calc(".concat(columnWidth, "% - 1rem)");
    },
    randomColor: function randomColor() {
      return function (colId) {
        return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getRandomColorById"])(colId);
      };
    }
  }),
  methods: {
    changeStatus: function () {
      var _changeStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(status, event) {
        var stageId, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!event.added) {
                  _context.next = 16;
                  break;
                }

                stageId = null;
                this.pipelineCols.forEach(function (item) {
                  if (item.id === status) {
                    stageId = item.id;
                  }
                });
                payload = {
                  id: event.added.element.id,
                  stageId: stageId
                };
                _context.prev = 4;
                _context.next = 7;
                return this.$store.dispatch('marketing/editDeal', payload);

              case 7:
                this.showNotification('Deal Updated Successfully', 'primary');
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                this.showNotification(_context.t0);

              case 13:
                _context.prev = 13;
                this.$emit('dealUpdated');
                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 10, 13, 16]]);
      }));

      return function changeStatus(_x, _x2) {
        return _changeStatus.apply(this, arguments);
      };
    }(),
    toggleNamePopup: function toggleNamePopup(stage) {
      this.$emit('toggleNamePopup', stage);
    },
    showNotification: function showNotification(message, type) {
      this.$vs.notify({
        color: type,
        title: type == 'danger' ? 'Error' : 'Success',
        text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(message)
      });
    },
    handleDeleteStage: function handleDeleteStage(col) {
      var _this = this;

      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Stage',
        text: 'Would you like to delete this Stage?',
        accept: function accept() {
          return _this.deleteStage(col);
        }
      });
    },
    deleteStage: function () {
      var _deleteStage = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(col) {
        var clonnedPipeline, index, _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                clonnedPipeline = structuredClone(this.selectedPipeline);
                index = clonnedPipeline.stages.findIndex(function (item) {
                  return item.id === col.id;
                });
                clonnedPipeline.stages.splice(index, 1);
                delete clonnedPipeline.name;
                _context2.prev = 4;
                _context2.next = 7;
                return this.$store.dispatch('marketing/editPipeline', clonnedPipeline);

              case 7:
                _ref = _context2.sent;
                data = _ref.data;
                this.$store.dispatch('marketing/updateMarketingPipelines', data.payload.pipeline);
                this.showNotification('Stage Deleted Successfully', 'primary');
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);
                this.showNotification(_context2.t0, 'danger');

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 13]]);
      }));

      return function deleteStage(_x3) {
        return _deleteStage.apply(this, arguments);
      };
    }(),
    updateDeals: function updateDeals() {
      var allStagesObj = this.selectedPipeline.stages.reduce(function (obj, item) {
        obj[item.id] = [];
        return obj;
      }, {});

      if (this.deals.length) {
        this.deals.forEach(function (deal) {
          allStagesObj[deal.stage.id].push(deal);
        });
      }

      this.allSelectedColsDictionary = allStagesObj;
    }
  },
  watch: {
    deals: {
      handler: function handler(val) {
        this.updateDeals();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PipelineDraggableCard',
  props: ['deal'],
  computed: {
    dealOwners: function dealOwners() {
      return this.deal.assignees.map(function (item) {
        return item.name;
      }).join(', ');
    }
  },
  methods: {
    onDealClick: function onDealClick() {
      this.$router.push("/marketing/crm/deal-information/".concat(this.deal.id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _PipelineView_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PipelineView.vue */ "./resources/js/src/views/pages/marketing/crm/PipelineView.vue");
/* harmony import */ var _components_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/index.scss */ "./resources/js/src/views/pages/marketing/crm/components/index.scss");
/* harmony import */ var _components_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_index_scss__WEBPACK_IMPORTED_MODULE_9__);








function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //pipelineScss

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CRM',
  components: {
    PipelineView: _PipelineView_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Tasks: function Tasks() {
      return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./deal-information/components/Tasks.vue */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Tasks.vue"));
    },
    Contacts: function Contacts() {
      return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./deal-information/components/Contacts.vue */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Contacts.vue"));
    }
  },
  data: function data() {
    return {
      tabs: [{
        id: 1,
        title: 'Pipeline',
        componentName: 'PipelineView',
        isActive: true
      }, {
        id: 2,
        title: 'Tasks',
        componentName: 'Tasks',
        isActive: false
      }, {
        id: 3,
        title: 'Contacts',
        componentName: 'Contacts',
        isActive: false
      }]
    };
  },
  mounted: function mounted() {
    this.setCustomers();
    this.setAllUsers();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])('companyUserV2', ['getUsersList']), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])('customer', ['getCachedCustomers']), {
    currentComponent: function currentComponent() {
      return this.tabs.find(function (tab) {
        return tab.isActive;
      }).componentName;
    }
  }),
  methods: {
    changeComponent: function changeComponent(id) {
      this.tabs.forEach(function (tab) {
        tab.isActive = tab.id === id;
      });
    },
    setCustomers: function () {
      var _setCustomers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  filters: {
                    status: ['active']
                  }
                };

                if (this.getCachedCustomers[_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(payload)]) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return this.$store.dispatch('customer/setCachedCustomers', payload);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function setCustomers() {
        return _setCustomers.apply(this, arguments);
      };
    }(),
    setAllUsers: function () {
      var _setAllUsers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var usersPayload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                usersPayload = {
                  roles: ['admin', 'dispatcher'],
                  fields: ['firstName', 'lastName']
                };

                if (this.getUsersList[_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(usersPayload)]) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return this.$store.dispatch('companyUserV2/fetchUsers', usersPayload);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function setAllUsers() {
        return _setAllUsers.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=template&id=373d5a16&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=template&id=373d5a16&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex items-center mb-4",
    class: _vm.pipelines.length ? "justify-between" : "justify-end"
  }, [_vm.pipelines.length ? [_c("div", {
    staticClass: "flex gap-3 items-center"
  }, [_c("v-select", {
    staticClass: "select-pipeline",
    attrs: {
      options: _vm.pipelines,
      label: "name",
      clearable: false,
      reduce: function reduce(option) {
        return option;
      }
    },
    model: {
      value: _vm.localSelectedPipeline,
      callback: function callback($$v) {
        _vm.localSelectedPipeline = $$v;
      },
      expression: "localSelectedPipeline"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex items-center cursor-pointer gap-2",
    on: {
      click: function click($event) {
        return _vm.togglePiplinePopup(_vm.selectedPipeline);
      }
    }
  }, [_c("div", [_c("svg", {
    staticClass: "pt-1",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "15",
      height: "14",
      viewBox: "0 0 15 14",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M3.24829 3.62769H2.49886C2.10134 3.62769 1.7201 3.7856 1.439 4.06669C1.15791 4.34778 1 4.72902 1 5.12654V11.8714C1 12.2689 1.15791 12.6502 1.439 12.9312C1.7201 13.2123 2.10134 13.3703 2.49886 13.3703H9.24371C9.64123 13.3703 10.0225 13.2123 10.3036 12.9312C10.5847 12.6502 10.7426 12.2689 10.7426 11.8714V11.122",
      stroke: "#45454A",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M13.2793 3.31666C13.5745 3.0215 13.7403 2.62118 13.7403 2.20376C13.7403 1.78634 13.5745 1.38602 13.2793 1.09086C12.9842 0.795702 12.5838 0.629883 12.1664 0.629883C11.749 0.629883 11.3487 0.795702 11.0535 1.09086L4.74707 7.37482V9.6231H6.99536L13.2793 3.31666Z",
      stroke: "#45454A",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M9.99316 2.12891L12.2414 4.37719",
      stroke: "#45454A",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "rename-pipeline"
  }, [_vm._v("Rename Pipeline")])])], 1), _vm._v(" "), _c("v-select", {
    staticClass: "users-dropdown ml-auto mr-4",
    attrs: {
      options: _vm.modifiedUserList,
      reduce: function reduce(option) {
        return option.id;
      },
      id: "usersDropdown",
      label: "fullName",
      multiple: "",
      placeholder: "Select Deal Owners"
    },
    on: {
      input: _vm.handleUsersSelection
    },
    model: {
      value: _vm.selectedUsers,
      callback: function callback($$v) {
        _vm.selectedUsers = $$v;
      },
      expression: "selectedUsers"
    }
  })] : _vm._e(), _vm._v(" "), _c("vs-dropdown", {
    attrs: {
      "vs-trigger-click": "",
      "vs-custom-content": ""
    }
  }, [_c("vs-button", {
    attrs: {
      "icon-pack": "feather",
      icon: "icon-plus"
    }
  }, [_vm._v(" New ")]), _vm._v(" "), _c("vs-dropdown-menu", {
    staticClass: "spreadsheet-list-dropdown-items w-48"
  }, [_c("vs-dropdown-item", [_c("p", {
    staticClass: "mb-0 text-base",
    on: {
      click: _vm.togglePiplinePopup
    }
  }, [_vm._v("\n            New Pipeline\n          ")])]), _vm._v(" "), _vm.pipelines.length ? _c("vs-dropdown-item", [_c("p", {
    staticClass: "mb-3 text-base",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.toggleDealSidebar(true);
      }
    }
  }, [_vm._v("\n            New Deal\n          ")])]) : _vm._e()], 1)], 1)], 2), _vm._v(" "), _vm.pipelines.length ? [_c("div", {
    staticClass: "flex"
  }, [_c("PipelineCols", {
    attrs: {
      deals: _vm.deals
    },
    on: {
      toggleNamePopup: _vm.toggleNamePopup,
      dealUpdated: function dealUpdated($event) {
        return _vm.getDealsForPipeline(_vm.selectedUsers);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "add-stage-btn"
  }, [_c("button", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.toggleNamePopup(null);
      }
    }
  }, [_vm._v("\n          + Add Stage\n        ")])])], 1)] : [_vm._m(0)], _vm._v(" "), _c("stage-name-popup", {
    attrs: {
      isActive: _vm.pipelineNamePopup.isActive,
      data: _vm.pipelineNamePopup.data
    },
    on: {
      closePopup: function closePopup($event) {
        return _vm.toggleNamePopup(null);
      }
    }
  }), _vm._v(" "), _c("pipeline-deal-sidebar", {
    attrs: {
      dealSidebar: _vm.dealSidebar,
      isActive: _vm.dealSidebar.isActive
    },
    on: {
      dealAdded: function dealAdded($event) {
        return _vm.getDealsForPipeline(_vm.selectedUsers);
      },
      closeSidebar: function closeSidebar($event) {
        return _vm.toggleDealSidebar(false);
      }
    }
  }), _vm._v(" "), _c("CreateEditNewPipelinePopup", {
    attrs: {
      isActive: _vm.createEditNewPipelinePopup.isActive,
      data: _vm.createEditNewPipelinePopup.data
    },
    on: {
      closePopup: _vm.togglePiplinePopup
    }
  })], 2);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "no-stages"
  }, [_c("p", [_vm._v("No Pipelines yet. Click + New button to create one.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=template&id=39a3b7ef&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=template&id=39a3b7ef& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "gap-4 draggable-row"
  }, _vm._l(_vm.pipelineCols, function (col) {
    return _c("div", {
      key: col.id,
      staticClass: "vx-col draggable-col",
      style: _vm.getColumnWidth
    }, [_c("div", {
      staticClass: "getRandomColor",
      style: _vm.randomColor(col.id)
    }), _vm._v(" "), _c("div", {
      staticClass: "px-2"
    }, [_c("div", {
      staticClass: "flex items-center justify-between"
    }, [_c("h3", [_vm._v(_vm._s(col.name))]), _vm._v(" "), _c("vs-dropdown", {
      staticClass: "cursor-pointer",
      attrs: {
        "vs-custom-content": "",
        "vs-trigger-click": ""
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: "more_horiz"
      }
    }), _vm._v(" "), _c("vs-dropdown-menu", {
      staticClass: "w-48"
    }, [_c("vs-dropdown-item", {
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.toggleNamePopup(col);
        }
      }
    }, [_c("div", {
      staticClass: "cursor-pointer hover:text-primary"
    }, [_c("label", {
      staticClass: "cursor-pointer text-base",
      domProps: {
        textContent: _vm._s("Rename")
      }
    })])]), _vm._v(" "), _c("vs-dropdown-item", {
      attrs: {
        disabled: _vm.allSelectedColsDictionary[col.id] && _vm.allSelectedColsDictionary[col.id].length || _vm.selectedPipeline.stages.length <= 1 ? true : false
      },
      on: {
        click: function click($event) {
          return _vm.handleDeleteStage(col);
        }
      }
    }, [_c("div", {
      staticClass: "mt-1 cursor-pointer hover:text-primary"
    }, [_c("label", {
      staticClass: "cursor-pointer text-base",
      domProps: {
        textContent: _vm._s("Delete")
      }
    })])])], 1)], 1)], 1)]), _vm._v(" "), _c("div", {
      staticClass: "draggable-list"
    }, [_c("draggable", {
      staticClass: "p-2 space-y-4 overflow-y-auto draggable-item",
      attrs: {
        list: _vm.allSelectedColsDictionary[col.id],
        group: "items",
        "data-status": col.id
      },
      on: {
        change: function change($event) {
          return _vm.changeStatus(col.id, $event);
        }
      }
    }, _vm._l(_vm.allSelectedColsDictionary[col.id], function (item) {
      return _c("draggable-card", {
        key: item.id,
        attrs: {
          deal: item
        }
      });
    }), 1)], 1)]);
  }), 0);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=template&id=35103f11&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=template&id=35103f11&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "draggable-card cursor-pointer",
    on: {
      click: _vm.onDealClick
    }
  }, [[_c("div", {
    staticClass: "flex justify-between items-center"
  }, [_c("h6", {
    staticClass: "break-all"
  }, [_vm._v(_vm._s(_vm.deal.name))])]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col mt-2"
  }, [_vm.deal.customer ? _c("span", {
    staticClass: "font-bold text-xs"
  }, [_vm._v(_vm._s(_vm.deal.customer.name))]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "mt-3 text-xs"
  }, [_vm._v(_vm._s(_vm.dealOwners))])])]], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=template&id=fcfc985a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=template&id=fcfc985a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("h3", {
    staticClass: "crm-text",
    domProps: {
      textContent: _vm._s("CRM")
    }
  }), _vm._v(" "), _c("ul", {
    staticClass: "flex items-center gap-3 mt-4 crm-tab-list"
  }, _vm._l(_vm.tabs, function (_ref) {
    var id = _ref.id,
        title = _ref.title,
        isActive = _ref.isActive;
    return _c("li", {
      key: id,
      class: ["font-medium text-md cursor-pointer", isActive ? "active" : "invisible-border-bottom"],
      on: {
        click: function click($event) {
          return _vm.changeComponent(id);
        }
      }
    }, [_vm._v("\n      " + _vm._s(title) + "\n    ")]);
  }), 0), _vm._v(" "), _vm.currentComponent ? _c("div", {
    staticClass: "mt-5"
  }, [_c(_vm.currentComponent, {
    tag: "component"
  })], 1) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".users-dropdown[data-v-373d5a16] {\n  width: 250px;\n}\n[data-v-373d5a16] .users-dropdown .vs__selected-options {\n  max-height: 60px;\n  overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".draggable-card .vx-card__header {\n  flex-wrap: nowrap;\n  align-items: start;\n}\n[dir] .draggable-card .vx-card__collapsible-content .vx-card__body {\n  padding: 0.8rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active[data-v-fcfc985a] {\n  color: rgba(var(--vs-primary), 1) !important;\n}[dir] .active[data-v-fcfc985a] {\n  border-bottom: 2px solid rgba(var(--vs-primary), 1);\n}\n[dir] .invisible-border-bottom[data-v-fcfc985a] {\n  border-bottom: 2px solid transparent;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/PipelineView.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/PipelineView.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PipelineView_vue_vue_type_template_id_373d5a16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PipelineView.vue?vue&type=template&id=373d5a16&scoped=true& */ "./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=template&id=373d5a16&scoped=true&");
/* harmony import */ var _PipelineView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PipelineView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PipelineView_vue_vue_type_style_index_0_id_373d5a16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true& */ "./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PipelineView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PipelineView_vue_vue_type_template_id_373d5a16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PipelineView_vue_vue_type_template_id_373d5a16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "373d5a16",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/PipelineView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_style_index_0_id_373d5a16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=style&index=0&id=373d5a16&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_style_index_0_id_373d5a16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_style_index_0_id_373d5a16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_style_index_0_id_373d5a16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_style_index_0_id_373d5a16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=template&id=373d5a16&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=template&id=373d5a16&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_template_id_373d5a16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineView.vue?vue&type=template&id=373d5a16&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/PipelineView.vue?vue&type=template&id=373d5a16&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_template_id_373d5a16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineView_vue_vue_type_template_id_373d5a16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PipelineCols_vue_vue_type_template_id_39a3b7ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PipelineCols.vue?vue&type=template&id=39a3b7ef& */ "./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=template&id=39a3b7ef&");
/* harmony import */ var _PipelineCols_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PipelineCols.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PipelineCols_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PipelineCols_vue_vue_type_template_id_39a3b7ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PipelineCols_vue_vue_type_template_id_39a3b7ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineCols_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineCols.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineCols_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=template&id=39a3b7ef&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=template&id=39a3b7ef& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineCols_vue_vue_type_template_id_39a3b7ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineCols.vue?vue&type=template&id=39a3b7ef& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/PipelineCols.vue?vue&type=template&id=39a3b7ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineCols_vue_vue_type_template_id_39a3b7ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineCols_vue_vue_type_template_id_39a3b7ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pipelinedraggablecard_vue_vue_type_template_id_35103f11_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipelinedraggablecard.vue?vue&type=template&id=35103f11&scoped=true& */ "./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=template&id=35103f11&scoped=true&");
/* harmony import */ var _pipelinedraggablecard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipelinedraggablecard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pipelinedraggablecard_vue_vue_type_style_index_1_id_35103f11_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss& */ "./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pipelinedraggablecard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pipelinedraggablecard_vue_vue_type_template_id_35103f11_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pipelinedraggablecard_vue_vue_type_template_id_35103f11_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35103f11",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./pipelinedraggablecard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_style_index_1_id_35103f11_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=style&index=1&id=35103f11&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_style_index_1_id_35103f11_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_style_index_1_id_35103f11_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_style_index_1_id_35103f11_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_style_index_1_id_35103f11_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=template&id=35103f11&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=template&id=35103f11&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_template_id_35103f11_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./pipelinedraggablecard.vue?vue&type=template&id=35103f11&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/pipelinedraggablecard.vue?vue&type=template&id=35103f11&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_template_id_35103f11_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_pipelinedraggablecard_vue_vue_type_template_id_35103f11_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_fcfc985a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=fcfc985a&scoped=true& */ "./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=template&id=fcfc985a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_fcfc985a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true& */ "./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_fcfc985a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_fcfc985a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fcfc985a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fcfc985a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=style&index=0&id=fcfc985a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fcfc985a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fcfc985a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fcfc985a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fcfc985a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=template&id=fcfc985a&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=template&id=fcfc985a&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fcfc985a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=fcfc985a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/index.vue?vue&type=template&id=fcfc985a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fcfc985a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_fcfc985a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=77.js.map