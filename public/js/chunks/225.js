(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[225],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PlanningPage",
  components: {
    Header: function Header() {
      return __webpack_require__.e(/*! import() */ 190).then(__webpack_require__.bind(null, /*! ./components/Header */ "./resources/js/src/views/pages/tripV2/planning/components/Header.vue"));
    },
    PlanningTab: function PlanningTab() {
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(9), __webpack_require__.e(21), __webpack_require__.e(72)]).then(__webpack_require__.bind(null, /*! ./PlanningTab */ "./resources/js/src/views/pages/tripV2/planning/PlanningTab/index.vue"));
    },
    TimelineTab: function TimelineTab() {
      return Promise.all(/*! import() */[__webpack_require__.e(21), __webpack_require__.e(37), __webpack_require__.e(135)]).then(__webpack_require__.bind(null, /*! ./TimelineTab */ "./resources/js/src/views/pages/tripV2/planning/TimelineTab/index.vue"));
    },
    ScheduleForm: function ScheduleForm() {
      return __webpack_require__.e(/*! import() */ 124).then(__webpack_require__.bind(null, /*! ./components/ScheduleFormDialog */ "./resources/js/src/views/pages/tripV2/planning/components/ScheduleFormDialog/index.vue"));
    },
    LoadSidebar: function LoadSidebar() {
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(9), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! @/views/pages/dispatch/load/LoadSidebar.vue */ "./resources/js/src/views/pages/dispatch/load/LoadSidebar.vue"));
    }
  },
  provide: function provide() {
    return {
      openLoadSidebar: this.openLoadSidebar
    };
  },
  data: function data() {
    return {
      selectedComponentId: null,
      showScheduleForm: false,
      scheduleFormData: null,
      truckOptions: [],
      isSidebarActive: false,
      sidebarData: {}
    };
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.selectedComponentId = this.viewOptions[0].id;
              _context.next = 3;
              return this.getAllTrucks();

            case 3:
              _context.next = 5;
              return this.fecthAccessorialFee();

            case 5:
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
  computed: {
    viewOptions: function viewOptions() {
      return [{
        id: 1,
        title: "Planning",
        name: "PlanningTab",
        isActive: true
      }, {
        id: 2,
        title: "Timeline",
        name: "TimelineTab",
        isActive: false
      }];
    },
    currentComponent: function currentComponent() {
      var _this = this;

      var _ref = this.viewOptions.find(function (item) {
        return item.id === _this.selectedComponentId;
      }) || {},
          name = _ref.name;

      return name || null;
    }
  },
  methods: {
    changeTab: function changeTab(tabId) {
      this.selectedComponentId = tabId;
    },
    openScheduleForm: function openScheduleForm() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.showScheduleForm = true;
      this.scheduleFormData = data || null;
    },
    refreshPageContent: function refreshPageContent() {
      if (this.currentComponent === 'TimelineTab') {
        this.refreshTimeline();
      } else if (this.currentComponent === 'PlanningTab') {
        this.refreshPlanningTab();
      }
    },
    refreshTimeline: function refreshTimeline() {
      if (this.currentComponent === 'TimelineTab' && this.$refs.componentData) {
        var _ref2 = this.$refs.componentData || {},
            refreshPageContent = _ref2.refreshPageContent;

        if (refreshPageContent) {
          this.$refs.componentData.refreshPageContent();
        }
      }
    },
    refreshPlanningTab: function refreshPlanningTab() {
      if (this.currentComponent === 'PlanningTab' && this.$refs.componentData) {
        var _ref3 = this.$refs.componentData || {},
            getLoadsForPlanning = _ref3.getLoadsForPlanning;

        if (getLoadsForPlanning) {
          this.$refs.componentData.getLoadsForPlanning();
        }
      }
    },
    closeScheduleForm: function closeScheduleForm() {
      this.showScheduleForm = false;
      this.scheduleFormData = null;
    },
    getAllTrucks: function () {
      var _getAllTrucks = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _ref4, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$store.dispatch("truck/getAllTrucks");

              case 2:
                _ref4 = _context2.sent;
                payload = _ref4.payload;
                this.truckOptions = payload.data;
                return _context2.abrupt("return", payload.data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getAllTrucks() {
        return _getAllTrucks.apply(this, arguments);
      };
    }(),
    openLoadSidebar: function openLoadSidebar(loadId) {
      this.sidebarData = {
        loadId: loadId
      };
      this.isSidebarActive = true;
    },
    closeLoadSidebar: function closeLoadSidebar() {
      this.isSidebarActive = false;
      this.sidebarData = {};
    },
    fecthAccessorialFee: function () {
      var _fecthAccessorialFee = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.$store.dispatch('planningV2/getAccessorialFee');

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 5]]);
      }));

      return function fecthAccessorialFee() {
        return _fecthAccessorialFee.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=template&id=b88fa56e&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=template&id=b88fa56e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "planning-page"
  }, [_vm.selectedComponentId ? _c("Header", {
    attrs: {
      viewOptions: _vm.viewOptions,
      activeId: _vm.selectedComponentId
    },
    on: {
      changeTab: _vm.changeTab,
      addSchedule: _vm.openScheduleForm
    }
  }) : _vm._e(), _vm._v(" "), _vm.currentComponent ? _c("div", {
    staticClass: "content-container"
  }, [_c(_vm.currentComponent, {
    ref: "componentData",
    tag: "component",
    on: {
      updateSchedule: _vm.openScheduleForm,
      updateLoad: _vm.openLoadSidebar
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.showScheduleForm ? _c("ScheduleForm", {
    attrs: {
      isDialogActive: _vm.showScheduleForm,
      schedulesArray: _vm.scheduleFormData,
      truckOptions: _vm.truckOptions
    },
    on: {
      close: _vm.closeScheduleForm,
      refresh: _vm.refreshTimeline
    }
  }) : _vm._e(), _vm._v(" "), _c("load-sidebar", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isSidebarActive,
      expression: "isSidebarActive"
    }],
    attrs: {
      isSidebarActive: _vm.isSidebarActive,
      data: _vm.sidebarData
    },
    on: {
      closeSidebar: _vm.closeLoadSidebar,
      refreshCallingUi: _vm.refreshPageContent
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/index.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b88fa56e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b88fa56e& */ "./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=template&id=b88fa56e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b88fa56e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b88fa56e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tripV2/planning/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=template&id=b88fa56e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=template&id=b88fa56e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b88fa56e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b88fa56e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tripV2/planning/index.vue?vue&type=template&id=b88fa56e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b88fa56e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b88fa56e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=225.js.map