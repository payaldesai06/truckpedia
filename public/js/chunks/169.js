(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[169],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/set */ "./node_modules/@babel/runtime/core-js/set.js");
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mixins_GroupBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/GroupBy */ "./resources/js/src/views/pages/menu/mixins/GroupBy.js");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "GanttView",
  mixins: [_mixins_GroupBy__WEBPACK_IMPORTED_MODULE_9__["default"]],
  components: {
    GanttChart: function GanttChart() {
      return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! @/components/ganttChart */ "./resources/js/src/components/ganttChart/index.vue"));
    },
    ControlBar: function ControlBar() {
      return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./ControlBar */ "./resources/js/src/views/pages/menu/components/ControlBar/index.vue"));
    }
  },
  props: {
    customFields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    recordData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    viewMetaData: {
      type: Object,
      default: function _default() {}
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var contentArea = (document || {}).getElementById("content-area").clientHeight;
      _this.ChartHeight = contentArea ? contentArea - 150 : _this.clientHeight;
    });
    this.verifyInitialDataForRendering();
  },
  data: function data() {
    return {
      ChartHeight: 550
    };
  },
  computed: {
    currentTime: function currentTime() {
      return new Date().getTime();
    },
    groupByOptions: function groupByOptions() {
      return (this.customFields || []).filter(function (f) {
        return f.type === "date" || f.type === "dateNoTz";
      });
    },
    customFieldsMap: function customFieldsMap() {
      return (this.customFields || []).reduce(function (acc, f) {
        acc[f.id] = f;
        return acc;
      }, {});
    },
    recordDataMap: function recordDataMap() {
      var _this2 = this;

      var recordData = ((this.viewData || [])[0] || {}).records || [];
      return recordData.reduce(function (acc, r) {
        var customFieldsData = ((r || {}).customFieldsData || []).reduce(function (acc, f) {
          acc[f.fieldId] = _objectSpread({}, f, _this2.customFieldsMap[f.fieldId]);
          return acc;
        }, {});
        acc[r.id] = _objectSpread({}, customFieldsData, r);
        return acc;
      }, {});
    },
    fieldFilteredRecords: function fieldFilteredRecords() {
      var _ref = this.dateCriteria || {},
          filterFieldId = _ref.id;

      var restObject = {};
      var datesArray = [];
      var recordDataMap = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(this.recordDataMap || {}));

      _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(recordDataMap || {}).forEach(function (key, index) {
        var fieldCheck = recordDataMap[key][filterFieldId];

        if (fieldCheck) {
          if (fieldCheck.type === "date") {
            var _ref2 = fieldCheck.dateValue || {},
                utcTimeOnly = _ref2.utcTimeOnly,
                utcDateOnly = _ref2.utcDateOnly;

            if (utcDateOnly) {
              var date = utcDateOnly && utcTimeOnly ? dayjs__WEBPACK_IMPORTED_MODULE_8___default()(new Date("".concat(utcDateOnly, "T").concat(utcTimeOnly, ":00.000Z"))).format('YYYY-MM-DD') : utcDateOnly;
              datesArray.push(date);
              restObject[key] = _objectSpread({}, recordDataMap[key][filterFieldId], {
                start: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(date).valueOf(),
                end: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(date).valueOf()
              });
            }
          } else if (fieldCheck.type === "dateNoTz") {
            var _ref3 = fieldCheck.dateNoTzValue || {},
                localTimeOnly = _ref3.localTimeOnly,
                localDateOnly = _ref3.localDateOnly;

            if (localDateOnly) {
              var _date = localDateOnly && localTimeOnly ? dayjs__WEBPACK_IMPORTED_MODULE_8___default()(new Date(localDateOnly + ' ' + localTimeOnly)).format('YYYY-MM-DD') : localDateOnly;

              datesArray.push(_date);
              restObject[key] = _objectSpread({}, recordDataMap[key][filterFieldId], {
                start: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(_date).valueOf(),
                end: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(_date).valueOf()
              });
            }
          }
        }
      });

      var uniqueDates = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_5___default.a(datesArray));

      var startDate = uniqueDates.sort()[0];
      var endDate = uniqueDates.sort().reverse()[0];
      var dateRange = [startDate, endDate];
      return {
        dateRange: dateRange,
        filteredRecords: restObject
      };
    },
    dateRange: function dateRange() {
      return this.fieldFilteredRecords.dateRange;
    },
    chartData: function chartData() {
      var _this3 = this;

      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.fieldFilteredRecords.filteredRecords).map(function (key) {
        return _objectSpread({}, _this3.fieldFilteredRecords.filteredRecords[key], {
          recordId: key
        });
      });
    },
    hasChartData: function hasChartData() {
      return (this.chartData || []).length > 0;
    },
    infoFieldToRender: function infoFieldToRender() {
      var _ref4 = (this.viewMetaData || {}).show || {},
          columns = _ref4.columns;

      var _ref5 = (columns || []).find(function (c) {
        return c.order === 1;
      }) || {},
          customFieldId = _ref5.customFieldId;

      if (customFieldId) return this.customFields.find(function (f) {
        return f.id === customFieldId;
      });
      return null;
    },
    dateCriteria: function dateCriteria() {
      var _ref6 = this.viewMetaData || {},
          recordDatesForUi = _ref6.recordDatesForUi;

      if (!recordDatesForUi) return null; // This line is needed 

      /**
       * To ensure that the chart Ui is not rendered with the fallback date criteria,
       * before the recordMetaData is received from BE, above line is needed
       */

      var _ref7 = recordDatesForUi || {},
          endDate = _ref7.endDate,
          startDate = _ref7.startDate;

      var _ref8 = startDate || {},
          startDateFieldID = _ref8.customFieldId;

      var _ref9 = endDate || {},
          endDateFieldID = _ref9.customFieldId;

      if (startDateFieldID) {
        var fieldSelected = this.groupByOptions.find(function (f) {
          return f.id === startDateFieldID;
        }) || {};
        return fieldSelected ? fieldSelected : this.groupByOptions[0] || null;
      } else {
        return this.groupByOptions[0] || null;
      }
    }
  },
  watch: {
    viewMetaData: {
      handler: function handler() {
        this.verifyInitialDataForRendering();
      },
      deep: true
    }
  },
  methods: {
    toggleDetailsView: function toggleDetailsView(recordId) {
      this.$emit("toggleDetailsView", recordId);
    },
    updateView: function updateView(data) {
      var payload = {
        ganttMetaData: _objectSpread({}, data)
      };
      this.$emit("updateView", payload);
    },
    updateDateCriteria: function updateDateCriteria(selectedDateField) {
      var showColumData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Date criteria determines what date is the base of rendering in the chart 
      var _ref10 = selectedDateField || {},
          selectedDateCriteria = _ref10.id;

      var _ref11 = this.viewMetaData || {},
          recordDatesForUi = _ref11.recordDatesForUi;

      var _ref12 = recordDatesForUi || {},
          endDate = _ref12.endDate,
          startDate = _ref12.startDate;

      var _ref13 = startDate || {},
          startDateFieldID = _ref13.customFieldId;

      var _ref14 = endDate || {},
          endDateFieldID = _ref14.customFieldId;

      if (selectedDateCriteria !== startDateFieldID) {
        //  || selectedDateCriteria !== endDateFieldID
        var payload = {
          ganttMetaData: _objectSpread({}, this.viewMetaData, {
            recordDatesForUi: _objectSpread({}, this.viewMetaData.recordDatesForUi || {}, {
              startDate: {
                customFieldId: selectedDateCriteria
              },
              endDate: {
                customFieldId: selectedDateCriteria
              }
            })
          })
        };

        if (showColumData) {
          payload.ganttMetaData.show = showColumData;
        }

        this.$emit("updateView", payload);
      }
    },
    verifyInitialDataForRendering: function verifyInitialDataForRendering() {
      var _ref15 = this.viewMetaData || {},
          recordDatesForUi = _ref15.recordDatesForUi,
          show = _ref15.show;

      var _ref16 = recordDatesForUi || {},
          endDate = _ref16.endDate,
          startDate = _ref16.startDate;

      var _ref17 = startDate || {},
          startDateFieldID = _ref17.customFieldId;

      var _ref18 = endDate || {},
          endDateFieldID = _ref18.customFieldId;

      var appendShowColumData = false;

      var _ref19 = show || {},
          columnDataToRender = _ref19.columns;

      if ((columnDataToRender || []).length == 0) {
        show = {
          columns: [{
            order: 1,
            customFieldId: this.customFields[0].id
          }]
        };
        appendShowColumData = true;
      }
      /**
       * startDateFieldID and endDateFieldID determines what date field to user for chart rendering
       * If they are not returned from API, we will try to update it with the first date field available
       * Incase not date fields are available, we will skip this step
       */


      if (!startDateFieldID) {
        if (this.dateCriteria) {
          if (appendShowColumData) {
            // This special case is to ensure show colum data is a;ways present

            /** API was throwing error if we try to update date field with out show field */
            this.updateDateCriteria(this.dateCriteria, show);
          } else {
            this.updateDateCriteria(this.dateCriteria);
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=template&id=ca5dfe6a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=template&id=ca5dfe6a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var _babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/symbol/iterator */ "./node_modules/@babel/runtime/core-js/symbol/iterator.js");
/* harmony import */ var _babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/symbol */ "./node_modules/@babel/runtime/core-js/symbol.js");
/* harmony import */ var _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof(obj) { if (typeof _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "menu-gantt-view"
  }, [_c("ControlBar", {
    attrs: {
      viewName: "gantt",
      selectedGroupBy: _vm.selectedGroupBy,
      groupByOptions: _vm.groupByOptions,
      viewMetaData: _vm.viewMetaData,
      customFields: _vm.customFields
    },
    on: {
      updateView: _vm.updateView,
      toggleDetailsView: _vm.toggleDetailsView
    }
  }, [(_vm.groupByOptions || []).length ? _c("div", {
    staticClass: "group-by ml-2"
  }, [_c("vs-dropdown", {
    attrs: {
      "vs-trigger-click": ""
    }
  }, [_c("vs-button", {
    staticClass: "btn-drop cursor-pointer",
    attrs: {
      color: "primary",
      icon: "expand_more",
      size: "small",
      "icon-after": ""
    }
  }, [_c("span", [_vm._v(" Dates Criteria ")]), _vm._v(" "), (_vm.dateCriteria || {}).name ? _c("span", [_vm._v("\n            : " + _vm._s(_vm.dateCriteria.name) + "\n          ")]) : _vm._e()]), _vm._v(" "), _c("vs-dropdown-menu", _vm._l(_vm.groupByOptions, function (item) {
    return _c("vs-dropdown-item", {
      key: item.id,
      attrs: {
        disabled: item.isDisabled
      },
      on: {
        click: function click($event) {
          return _vm.updateDateCriteria(item);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n          ")]);
  }), 1)], 1)], 1) : _vm._e()]), _vm._v(" "), _c("GanttChart", {
    key: _vm.dateRange.join("-"),
    staticClass: "mt-4",
    attrs: {
      "gantt-data": _vm.chartData,
      "time-section": _vm.dateRange,
      "chart-max-height": _vm.ChartHeight,
      showSideBar: false,
      dateHourModeDayCount: 0
    },
    on: {
      onClickBar: function onClickBar($event) {
        return _vm.toggleDetailsView($event.recordId);
      }
    },
    scopedSlots: _vm._u([{
      key: "container-box",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_typeof(item) === "object" && _vm.infoFieldToRender ? _c("div", {
          staticClass: "gantt_side_content text-primary"
        }, [_vm._v("\n        " + _vm._s(_vm.recordDataMap[item.recordId][_vm.infoFieldToRender.id].textValue) + "\n      ")]) : _vm._e()];
      }
    }])
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-gantt-view .gantt_side_content[data-v-ca5dfe6a] {\n  width: -moz-max-content;\n  width: max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  position: absolute;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n}[dir] .menu-gantt-view .gantt_side_content[data-v-ca5dfe6a] {\n  padding: 2px 10px;\n}[dir=ltr] .menu-gantt-view .gantt_side_content[data-v-ca5dfe6a] {\n  left: 100%;\n}[dir=rtl] .menu-gantt-view .gantt_side_content[data-v-ca5dfe6a] {\n  right: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/menu/components/GanttView.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/GanttView.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GanttView_vue_vue_type_template_id_ca5dfe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GanttView.vue?vue&type=template&id=ca5dfe6a&scoped=true& */ "./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=template&id=ca5dfe6a&scoped=true&");
/* harmony import */ var _GanttView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GanttView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GanttView_vue_vue_type_style_index_0_id_ca5dfe6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true& */ "./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GanttView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GanttView_vue_vue_type_template_id_ca5dfe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GanttView_vue_vue_type_template_id_ca5dfe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ca5dfe6a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/menu/components/GanttView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GanttView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_style_index_0_id_ca5dfe6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=style&index=0&id=ca5dfe6a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_style_index_0_id_ca5dfe6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_style_index_0_id_ca5dfe6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_style_index_0_id_ca5dfe6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_style_index_0_id_ca5dfe6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=template&id=ca5dfe6a&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=template&id=ca5dfe6a&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_template_id_ca5dfe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GanttView.vue?vue&type=template&id=ca5dfe6a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/GanttView.vue?vue&type=template&id=ca5dfe6a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_template_id_ca5dfe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttView_vue_vue_type_template_id_ca5dfe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=169.js.map