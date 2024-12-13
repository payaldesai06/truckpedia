(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/charts/PieChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/charts/PieChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PieChart",
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  components: {
    Pie: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"]
  },
  props: {
    chartOptions: {
      type: Array | Object,
      default: function _default() {}
    },
    chartData: {
      type: Array | Object,
      default: function _default() {}
    }
  },
  mounted: function mounted() {
    document.addEventListener('visibilitychange', this.updateChart);
    this.renderPieChart();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('visibilitychange', this.updateChart);
  },
  data: function data() {
    return {};
  },
  methods: {
    renderPieChart: function renderPieChart() {
      if (this.chartData.datasets[0].data.length > 0) {
        this.renderChart(this.chartData, this.chartOptions);
      } else {
        this.renderChart({
          labels: ["No data"],
          datasets: [{
            data: [1],
            backgroundColor: ["#f2f2f2"]
          }]
        }, this.chartOptions);
      }
    },
    updateChart: function updateChart() {
      this.$data._chart.destroy();

      this.renderPieChart();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_tab_Index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home-tab/Index.vue */ "./resources/js/src/views/pages/home-tab/Index.vue");
// import Statistics from './Statistics'
// import TripRevenue from './TripRevenue'
// import LoadDatatable from './LoadDatatable'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AdminDashboard',
  components: {
    // Statistics,
    // TripRevenue,
    // LoadDatatable,
    HomeV2: _home_tab_Index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _SuperAdmin_SuperAdminDashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SuperAdmin/SuperAdminDashboard */ "./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue");
/* harmony import */ var _Admin_AdminDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Admin/AdminDashboard */ "./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue");
/* harmony import */ var _EmptyDashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmptyDashboard */ "./resources/js/src/views/pages/dashboard/EmptyDashboard.vue");
/* harmony import */ var _WarehouseOperator_WarehouseOperator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WarehouseOperator/WarehouseOperator */ "./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue");
/* harmony import */ var _Maintenance_Maintenance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Maintenance/Maintenance */ "./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  data: function data() {
    return {
      defaultDashboard: _EmptyDashboard__WEBPACK_IMPORTED_MODULE_7__["default"],
      componentList: {
        admin: _Admin_AdminDashboard__WEBPACK_IMPORTED_MODULE_6__["default"],
        super_admin: _SuperAdmin_SuperAdminDashboard__WEBPACK_IMPORTED_MODULE_5__["default"],
        warehouse_operator: _WarehouseOperator_WarehouseOperator__WEBPACK_IMPORTED_MODULE_8__["default"],
        maintenance: _Maintenance_Maintenance__WEBPACK_IMPORTED_MODULE_9__["default"]
      }
    };
  },
  created: function created() {
    if (this.isUserBrokerOrShipper) {
      this.$router.push('/dispatch');
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('auth', ['userRole', 'isUserBrokerOrShipper']), {
    dashboard: function dashboard() {
      try {
        if (!this.componentList.hasOwnProperty(this.userRole)) {
          return this.defaultDashboard;
        }

        return this.componentList[this.userRole];
      } catch (error) {
        return this.defaultDashboard;
      }
    }
  }),
  render: function render(createElement) {
    return createElement(this.dashboard);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EmptyDashboard"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.$router.push({
      name: 'maintenance-v2'
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SuperAdminDashboard'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.$router.push({
      name: "dispatch"
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _components_TruckOverviewTab_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/TruckOverviewTab.vue */ "./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue");
/* harmony import */ var _components_MarketOverviewTab_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/MarketOverviewTab.vue */ "./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue");
/* harmony import */ var _components_CompanyOverviewTab_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/CompanyOverviewTab.vue */ "./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue");
/* harmony import */ var _components_CustomerOverviewTab_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/CustomerOverviewTab.vue */ "./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue");
/* harmony import */ var _components_DispatcherOverviewTab_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/DispatcherOverviewTab.vue */ "./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue");
/* harmony import */ var _components_DriverOverviewTab_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/DriverOverviewTab.vue */ "./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue");
/* harmony import */ var _mixins_setPlaceMixin_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/mixins/setPlaceMixin.js */ "./resources/js/src/mixins/setPlaceMixin.js");
/* harmony import */ var _components_charts_LineChart_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/charts/LineChart.vue */ "./resources/js/src/components/charts/LineChart.vue");
/* harmony import */ var _components_RateEstimatesResult_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/RateEstimatesResult.vue */ "./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // import DriverProfitAndLoss from "./components/DriverProfitAndLossTab.vue";

 // import FuelUtilizationByTruck from "./components/FuelUtilizationByTruckTab.vue";





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomeTab',
  mixins: [_mixins_setPlaceMixin_js__WEBPACK_IMPORTED_MODULE_19__["default"]],
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_8___default.a,
    TruckOverview: _components_TruckOverviewTab_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    MarketOverview: _components_MarketOverviewTab_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    CompanyOverview: _components_CompanyOverviewTab_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    CustomerOverview: _components_CustomerOverviewTab_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    DispatcherOverview: _components_DispatcherOverviewTab_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    // DriverProfitAndLoss,
    DriverOverview: _components_DriverOverviewTab_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    // FuelUtilizationByTruck,
    RateEstimatesResult: _components_RateEstimatesResult_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
    LineChart: _components_charts_LineChart_vue__WEBPACK_IMPORTED_MODULE_20__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('auth', ['userRole', 'user', 'isUserBrokerOrShipper']), {
    tabList: function tabList() {
      if (this.isUserBrokerOrShipper) {
        return this.tabs.filter(function (tab) {
          return tab.value === 'CompanyOverview';
        });
      } else return this.tabs;
    },
    isGetRateDisabled: function isGetRateDisabled() {
      return !this.selectedEquipmentType || !this.originAddress || !this.destinationAddress;
    }
  }),
  filters: {
    formatTotalValueLabels: function formatTotalValueLabels(value) {
      var labels = {
        revenue: 'Total Revenue',
        expense: 'Total Expenses',
        profit: 'Total Profit',
        numberOfLoads: 'Number Of Loads',
        milesPerTruck: 'Miles Per Truck',
        miles: 'Total Miles',
        ratePerMile: 'Rate Per Mile',
        expensePerMile: 'Expense Per Mile',
        profitPerMile: 'Profit Per Mile',
        revenuePerDriver: 'Revenue Per Driver',
        expensePerDriver: 'Expense Per Driver',
        profitPerDriver: 'Profit Per Driver'
      };
      if (!value) return value;
      return labels[value] || value;
    },
    formatNumberWithCommas: function formatNumberWithCommas(value) {
      if (!value) return value;
      var formattedValue = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_12__["parseFloatWithTrim"])(value);
      return formattedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  },
  data: function data() {
    return {
      selectedDateRange: '',
      flat_pikr_config: {
        mode: 'range',
        dateFormat: 'Y-m-d',
        defaultDate: [// set default date to last one month
        this.$dayjs().subtract(1, 'month').toDate(), this.$dayjs().toDate()]
      },
      selectedTag: {
        business_name: 'All companies'
      },
      tagOptions: [],
      infoCard: {
        revenue: 0,
        miles: 0,
        ratePerMile: 0,
        numberOfLoads: 0,
        milesPerTruck: 0,
        expense: 0,
        profit: 0,
        expensePerMile: 0,
        profitPerMile: 0
      },
      tabs: [{
        id: 1,
        label: 'Company Overview',
        value: 'CompanyOverview'
      }, {
        id: 2,
        label: 'Customer Overview',
        value: 'CustomerOverview'
      }, {
        id: 3,
        label: 'Driver Overview',
        value: 'DriverOverview'
      }, {
        id: 4,
        label: 'Truck Overview',
        value: 'TruckOverview'
      }, {
        id: 5,
        label: 'Market Overview',
        value: 'MarketOverview'
      }, {
        id: 6,
        label: 'Dispatcher Overview',
        value: 'DispatcherOverview'
      }],
      activeComponent: 'CompanyOverview',
      tags: [],
      equipmentTypeOptions: [{
        title: 'Van',
        value: 'van'
      }, {
        title: 'Reefer',
        value: 'reefer'
      }, {
        title: 'Flatbed',
        value: 'flatbed'
      }],
      googleMapAutoCompleteOptions: _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].googleMapAutoCompleteOptions,
      selectedEquipmentType: 'van',
      ratesOriginLocation: '',
      ratesDestinationLocation: '',
      originAddress: null,
      destinationAddress: null,
      ratePredictions: [],
      stateOption: _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].state_list
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    getDataColorStyle: function getDataColorStyle(key) {
      var _colorMap;

      var colorMap = (_colorMap = {
        revenue: '#C900DA',
        expense: '#0B5AC1',
        profit: '#930E0A',
        numberOfLoads: '#DB3918',
        milesPerTruck: '#1877F2',
        ratePerMile: '#2FA52D',
        miles: '#2FA52D'
      }, _defineProperty(_colorMap, "ratePerMile", '#AF1631'), _defineProperty(_colorMap, "expensePerMile", '#084F1F'), _defineProperty(_colorMap, "profitPerMile", '#18181A'), _defineProperty(_colorMap, "expensePerDriver", '#0B5AC1'), _defineProperty(_colorMap, "revenuePerDriver", '#084F1F'), _defineProperty(_colorMap, "profitPerDriver", '#930E0A'), _colorMap);
      var defaultColor = '#000';
      return colorMap[key] ? "color: ".concat(colorMap[key], ";") : "color: ".concat(defaultColor, ";");
    },
    getColorStyle: function getColorStyle(key) {
      var _colorMap2;

      var colorMap = (_colorMap2 = {
        revenue: '#F8E7F6',
        expense: '#E7F1FE',
        profit: '#FFEAD2',
        numberOfLoads: '#FFF5E7',
        milesPerTruck: '#E8F1FE',
        ratePerMile: '#F1FCF0',
        miles: '#E7F5EF'
      }, _defineProperty(_colorMap2, "ratePerMile", '#FCE9E9'), _defineProperty(_colorMap2, "expensePerMile", '#E3FAD6'), _defineProperty(_colorMap2, "profitPerMile", '#FCE9E9'), _defineProperty(_colorMap2, "revenuePerDriver", '#E3FAD6'), _defineProperty(_colorMap2, "expensePerDriver", '#E7F1FE'), _defineProperty(_colorMap2, "profitPerDriver", '#FFEAD2'), _colorMap2);
      var defaultColor = '#fff';
      return colorMap[key] ? "background-color: ".concat(colorMap[key], ";") : "background-color: ".concat(defaultColor, ";");
    },
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.selectedDateRange = this.flat_pikr_config.defaultDate.map(function (date) {
                  return date.toISOString().split('T')[0];
                }).join(' to ');
                _context.next = 3;
                return this.getTags();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    getTags: function () {
      var _getTags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
        var _ref, payload, tags, currentUserTagIds, currentUserTags;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.$store.dispatch('tag/getAllTags');

              case 3:
                _ref = _context2.sent;
                payload = _ref.payload;
                tags = payload.data;
                this.tags = _toConsumableArray(tags);
                this.tagOptions = [{
                  business_name: 'All companies'
                }];

                if (this.userRole !== 'tag_operator') {
                  this.tagOptions.push({
                    tag_id: _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].parent,
                    business_name: 'Parent company'
                  });
                }

                _context2.next = 11;
                return this.$store.dispatch('company-user/getCurrentUserTagIds');

              case 11:
                currentUserTagIds = _context2.sent;

                if (currentUserTagIds.length > 0) {
                  currentUserTags = tags.filter(function (tag) {
                    return currentUserTagIds.includes(tag.tag_id);
                  });
                  this.tagOptions = _toConsumableArray(this.tagOptions).concat(_toConsumableArray(currentUserTags));
                } else {
                  this.tagOptions = _toConsumableArray(this.tagOptions).concat(_toConsumableArray(tags));
                }

                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context2.t0.response.data.message
                });

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 15]]);
      }));

      return function getTags() {
        return _getTags.apply(this, arguments);
      };
    }(),
    onAutocompleteInput: function onAutocompleteInput($event, type) {
      if (!$event.target.value) {
        if (type === 'origin') {
          this.originAddress = null;
          this.ratesOriginLocation = '';
        } else {
          this.destinationAddress = null;
          this.ratesDestinationLocation = '';
        }
      }
    },
    updateGoogleCityState: function updateGoogleCityState(city, state, type) {
      if (type === 'origin') {
        this.ratesOriginLocation = city + ', ' + state;
      } else {
        this.ratesDestinationLocation = city + ', ' + state;
      }
    },

    /*
     * Google Map Autocomplete
     */
    getChangedPlace: function getChangedPlace(place, type) {
      if (!place) return;

      var _this$setPlace = this.setPlace(place),
          address = _this$setPlace.address,
          city = _this$setPlace.city,
          state = _this$setPlace.state,
          zipCode = _this$setPlace.zipCode;

      var detailedAddress = {
        address: address,
        city: city,
        state: state,
        zipCode: zipCode
      };
      type === 'origin' ? this.originAddress = detailedAddress : this.destinationAddress = detailedAddress;

      if (city && state) {
        this.updateGoogleCityState(city, state, type);
      } else {
        this.updateGoogleCityState(address, state, type);
      }
    },
    onDateChange: function onDateChange(dateArray) {
      var _this = this;

      if (dateArray.length === 2) {
        this.selectedDateRange = dateArray.map(function (date) {
          return _this.$dayjs(date).format('YYYY-MM-DD');
        }).join(' to ');
      }
    },
    updateTotalValues: function updateTotalValues(data) {
      this.infoCard = _objectSpread({}, data);
    },
    resetTotalValues: function resetTotalValues(component) {
      this.infoCard = {
        revenue: 0,
        miles: 0,
        ratePerMile: 0,
        numberOfLoads: 0
      };

      if (component == 'CompanyOverview') {
        this.infoCard.milesPerTruck = 0;
        this.infoCard.expense = 0;
        this.infoCard.profit = 0;
        this.infoCard.expensePerMile = 0;
        this.infoCard.profitPerMile = 0;
      } else if (component == 'DriverOverview') {
        this.infoCard.expense = 0;
        this.infoCard.profit = 0;
        this.infoCard.expensePerMile = 0;
        this.infoCard.profitPerMile = 0;
        this.infoCard.expensePerDriver = 0;
        this.infoCard.revenuePerDriver = 0;
        this.infoCard.profitPerDriver = 0;
      }
    },
    changeActiveComponent: function changeActiveComponent(component) {
      if (!component || component === this.activeComponent) return;
      this.activeComponent = component;
      this.resetTotalValues(component);
    },
    onSelectedEquipmentTypeChange: function onSelectedEquipmentTypeChange(val) {
      this.selectedEquipmentType = val;
    },
    getRates: function () {
      var _getRates = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {
        var filteredState, stops, index, payload, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filteredState = this.stateOption.map(function (item) {
                  return item.text;
                });

                if (!(!filteredState.includes(this.originAddress.state) || !filteredState.includes(this.destinationAddress.state))) {
                  _context3.next = 5;
                  break;
                }

                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: 'Only US origin/destination is supported for now'
                });
                this.ratePredictions = [];
                return _context3.abrupt("return");

              case 5:
                if (!(!this.originAddress.city || !this.destinationAddress.city)) {
                  _context3.next = 9;
                  break;
                }

                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: 'Please Add City For Rate Predictions'
                });
                this.ratePredictions = [];
                return _context3.abrupt("return");

              case 9:
                this.$vs.loading();
                _context3.prev = 10;
                stops = [_objectSpread({
                  city: this.originAddress.city,
                  state: this.originAddress.state
                }, this.originAddress.zipCode && {
                  postalCode: this.originAddress.zipCode
                }), _objectSpread({
                  city: this.destinationAddress.city,
                  state: this.destinationAddress.state
                }, this.destinationAddress.zipCode && {
                  postalCode: this.destinationAddress.zipCode
                })];
                index = 30;
                payload = {
                  requests: []
                };

                while (index >= 0) {
                  payload.requests.push({
                    pickupDate: this.$dayjs().subtract(index, 'day').format('YYYY-MM-DD'),
                    transportType: this.selectedEquipmentType,
                    stops: stops
                  });
                  index--;
                }

                _context3.next = 17;
                return this.$store.dispatch('greenScreens/getRatePredictions', payload);

              case 17:
                data = _context3.sent;
                this.ratePredictions = data.payload.responses;

                if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(data.payload.responses[0]).length) {} else {
                  this.$vs.notify({
                    time: 8000,
                    color: 'primary',
                    title: 'Rates Not Found',
                    text: 'Rates not found for this route.'
                  });
                }

                _context3.next = 25;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](10);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_12__["getApiErrorMsg"])(_context3.t0)
                });

              case 25:
                _context3.prev = 25;
                this.$vs.loading.close();
                return _context3.finish(25);

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[10, 22, 25, 28]]);
      }));

      return function getRates() {
        return _getRates.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/values */ "./node_modules/@babel/runtime/core-js/object/values.js");
/* harmony import */ var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_charts_BarChart_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/charts/BarChart.vue */ "./resources/js/src/components/charts/BarChart.vue");
/* harmony import */ var _components_charts_PieChart_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/charts/PieChart.vue */ "./resources/js/src/components/charts/PieChart.vue");
/* harmony import */ var _components_charts_LineChart_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/charts/LineChart.vue */ "./resources/js/src/components/charts/LineChart.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../mixins/commonFunctions */ "./resources/js/src/views/pages/home-tab/mixins/commonFunctions.js");










function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var barChartDefaultProps = {
  chartData: {
    labels: [],
    datasets: [{
      // label: 'Data One',
      // backgroundColor: '#f87979',
      backgroundColor: _config_constants__WEBPACK_IMPORTED_MODULE_16__["default"].chartColors,
      data: []
    }]
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function callback(value) {
            if (value) return "$".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["commaSeparatedValue"])(value));else return "$".concat(value);
          }
        }
      }]
    },
    title: {
      display: true,
      text: 'Driver',
      position: 'bottom'
    },
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function label(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
          var value = tooltipItem.yLabel;
          return "".concat(label, " $").concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["commaSeparatedValue"])(value));
        }
      }
    },
    layout: {
      padding: {
        top: 10
      }
    }
  }
};
var pieChartDefaultProps = {
  chartData: {
    labels: [],
    datasets: [{
      backgroundColor: _config_constants__WEBPACK_IMPORTED_MODULE_16__["default"].chartColors,
      data: []
    }]
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right'
    },
    tooltips: {
      callbacks: {
        label: function label(tooltipItem, data) {
          var label = data.labels[tooltipItem.index] || '';
          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return "".concat(label, ": $").concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["commaSeparatedValue"])(value));
        }
      }
    }
  }
}; // TODO: I don't want to duplicate entire large object. It should be a few lines to change from $ to %.

var pieChartPercentDefaultProps = {
  chartData: {
    labels: [],
    datasets: [{
      backgroundColor: _config_constants__WEBPACK_IMPORTED_MODULE_16__["default"].chartColors,
      data: []
    }]
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right'
    },
    tooltips: {
      callbacks: {
        label: function label(tooltipItem, data) {
          var label = data.labels[tooltipItem.index] || '';
          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return "".concat(label, ": ").concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["commaSeparatedValue"])(value), "%");
        }
      }
    }
  }
};
var lineChartDefaultProps = {
  chartData: {
    labels: [],
    datasets: [{
      // label: 'Data One',
      borderColor: '#165BAA',
      backgroundColor: 'transparent',
      data: []
    }]
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    layout: {
      padding: {
        top: 15
      }
    },
    scales: {
      xAxes: [{
        offset: true
      }],
      yAxes: [{
        ticks: {
          callback: function callback(value) {
            if (value) return "$".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["commaSeparatedValue"])(value));else return "$".concat(value);
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function label(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
          var value = tooltipItem.yLabel;
          return "".concat(label, " $").concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["commaSeparatedValue"])(value));
        }
      }
    }
  }
};

var chartPlugins = function chartPlugins() {
  var addCurrencyPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    datalabels: {
      display: 'auto',
      color: '#000',
      anchor: 'end',
      align: 'end',
      offset: -5,
      font: {
        size: 12,
        family: 'Montserrat'
      },
      formatter: function formatter(value) {
        if (addCurrencyPrefix === false) {
          return "".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["commaSeparatedValue"])(value));
        } else {
          return "$".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["commaSeparatedValue"])(value));
        }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CompanyOverviewTab',
  mixins: [_mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_18__["default"]],
  components: {
    BarChart: _components_charts_BarChart_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    PieChart: _components_charts_PieChart_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    LineChart: _components_charts_LineChart_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_13___default.a,
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_9___default.a
  },
  props: {
    selectedDateRange: {
      type: String,
      default: null
    },
    selectedTag: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      chartFilterOptions: [{
        label: 'Week',
        value: 'week'
      }, {
        label: 'Month',
        value: 'month'
      }],
      driverRevenueFilterOptions: [{
        label: 'All',
        value: 'all'
      }, {
        label: 'Solo',
        value: 'solo'
      }, {
        label: 'Local',
        value: 'local'
      }, {
        label: 'Team',
        value: 'team'
      }],
      donutChartOption: {
        chart: {
          type: 'donut',
          width: 350
        },
        labels: ['Fixed Costs', 'Equipment', 'Overhead Expenses', 'Fuel', 'Tires', 'Drivers'],
        legend: {
          position: 'right',
          horizontalAlign: 'bottom',
          formatter: function formatter(val) {
            return val;
          }
        },
        responsive: [{
          breakpoint: 1560,
          options: {
            chart: {
              width: '100%'
            },
            legend: {
              position: 'bottom'
            }
          }
        }, {
          breakpoint: 1200,
          options: {
            legend: {
              position: 'right'
            }
          }
        }]
      },
      driverRevenueBy: 'all',
      totalRevenueBy: 'week',
      totalMilesBy: 'week',
      revenueChart: Object(lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"])(lineChartDefaultProps),
      truckChart: Object(lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"])(pieChartDefaultProps),
      expenseChart: Object(lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"])(pieChartDefaultProps),
      driverChart: Object(lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"])(barChartDefaultProps),
      milesChart: _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"])(barChartDefaultProps), {
        chartOptions: _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"])(barChartDefaultProps.chartOptions), {
          title: {
            display: false
          },
          tooltips: {
            callbacks: {
              label: function label(tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                var value = tooltipItem.yLabel;
                return "".concat(label, ": ").concat(value.toLocaleString());
              }
            }
          },
          scales: {
            xAxes: [{
              offset: true
            }],
            yAxes: [{
              ticks: {
                callback: function callback(value) {
                  if (value) return "".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["commaSeparatedValue"])(value));else return "".concat(value);
                }
              }
            }]
          }
        })
      }),
      rawResponse: {},
      lineChartPlugins: _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"])(chartPlugins()), {
        title: {
          display: true,
          text: function text(ctx) {
            return 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle;
          }
        }
      }),
      chartPlugins: chartPlugins,
      startDate: null,
      endDate: null,
      expensesRangeValue: null,
      expenseChartValues: []
    };
  },
  created: function created() {
    var isoWeek = __webpack_require__(/*! dayjs/plugin/weekOfYear */ "./node_modules/dayjs/plugin/weekOfYear.js");

    var isoDay = __webpack_require__(/*! dayjs/plugin/weekday */ "./node_modules/dayjs/plugin/weekday.js");

    dayjs__WEBPACK_IMPORTED_MODULE_15___default.a.extend(isoWeek);
    dayjs__WEBPACK_IMPORTED_MODULE_15___default.a.extend(isoDay);
    this.getOverView();
  },
  methods: {
    getOverView: function () {
      var _getOverView = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee() {
        var selectedDates, payload, data, top10Drivers, top10Trucks, _this$formatDataByWee, chartData, chartLabels, _this$groupDataByMont, _chartData, _chartLabels, _this$formatDataByWee2, _chartData2, _chartLabels2, _this$groupDataByMont2, _chartData3, _chartLabels3;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                selectedDates = this.selectedDateRange.split(' to ');
                payload = {
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                };

                if (this.selectedTag.tag_id != 'parent') {
                  payload.tagId = this.selectedTag.tag_id;
                } else {
                  payload.parentCompanyOnly = true;
                }

                if (payload.startDate) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                this.startDate = payload.startDate;
                this.endDate = payload.endDate;
                _context.next = 10;
                return this.$store.dispatch('homeTab/getOverview', payload);

              case 10:
                data = _context.sent;

                if (data.payload) {
                  this.rawResponse = _objectSpread({}, data.payload);
                  this.expenseChart.chartData.labels = _toConsumableArray(this.getAllExpenseLabels(this.rawResponse.expenseValues));
                  this.expenseChart.chartData.datasets[0].data = this.getAllFormattedExpenseValues();

                  if (this.$refs.expenseChart) {
                    this.$refs.expenseChart.updateChart();
                  }

                  this.$emit('update:totalValues', data.payload.totalValues); // Set chart data
                  // 1. Driver chart

                  top10Drivers = (data.payload.topValues.driversByRevenue || []).sort(function (a, b) {
                    return b.revenue - a.revenue;
                  }).slice(0, 10);
                  this.driverChart.chartData.labels = (top10Drivers || []).map(function (driver) {
                    return driver.driverName;
                  });
                  this.driverChart.chartData.datasets[0].data = (top10Drivers || []).map(function (driver) {
                    return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["parseFloatWithTrim"])(driver.revenue || 0);
                  });

                  if (this.$refs.driverChart) {
                    this.$refs.driverChart.updateChart();
                  } // 2. Truck chart


                  top10Trucks = (data.payload.topValues.trucksByRevenue || []).sort(function (a, b) {
                    return b.revenue - a.revenue;
                  }).slice(0, 10);
                  this.truckChart.chartData.labels = (top10Trucks || []).map(function (truck) {
                    return truck.truckNumber;
                  });
                  this.truckChart.chartData.datasets[0].data = (top10Trucks || []).map(function (truck) {
                    return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["parseFloatWithTrim"])(truck.revenue || 0);
                  });

                  if (this.$refs.truckChart) {
                    this.$refs.truckChart.updateChart();
                  } // 3. Total revenue chart


                  if (this.totalRevenueBy === 'week') {
                    _this$formatDataByWee = this.formatDataByWeek(data.payload.dayValues, 'revenue'), chartData = _this$formatDataByWee.chartData, chartLabels = _this$formatDataByWee.chartLabels;
                    this.revenueChart.chartData.labels = chartLabels;
                    this.revenueChart.chartData.datasets[0].data = chartData;
                  } else {
                    _this$groupDataByMont = this.groupDataByMonth(data.payload.dayValues, 'revenue'), _chartData = _this$groupDataByMont.chartData, _chartLabels = _this$groupDataByMont.chartLabels;
                    this.revenueChart.chartData.labels = _chartLabels;
                    this.revenueChart.chartData.datasets[0].data = _chartData;
                  }

                  if (this.$refs.totalRevenueChart) {
                    this.$refs.totalRevenueChart.updateChart();
                  } // 4. Total miles chart


                  if (this.totalMilesBy === 'week') {
                    _this$formatDataByWee2 = this.formatDataByWeek(data.payload.dayValues, 'miles'), _chartData2 = _this$formatDataByWee2.chartData, _chartLabels2 = _this$formatDataByWee2.chartLabels;
                    this.milesChart.chartData.labels = _chartLabels2;
                    this.milesChart.chartData.datasets[0].data = _chartData2;
                  } else {
                    _this$groupDataByMont2 = this.groupDataByMonth(data.payload.dayValues, 'miles'), _chartData3 = _this$groupDataByMont2.chartData, _chartLabels3 = _this$groupDataByMont2.chartLabels;
                    this.milesChart.chartData.labels = _chartLabels3;
                    this.milesChart.chartData.datasets[0].data = _chartData3;
                  }

                  if (this.$refs.milesChart) {
                    this.$refs.milesChart.updateChart();
                  }
                }

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context.t0.response.data.message
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      return function getOverView() {
        return _getOverView.apply(this, arguments);
      };
    }(),
    initTab: function initTab() {
      this.getOverView();
    },
    getMonthsBetweenDates: function getMonthsBetweenDates(startDate, endDate) {
      // Check if start date is greater than end date
      if (startDate > endDate) {
        return [];
      } // Set start date to start of month and end date to end of month


      startDate = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(startDate).startOf('month').toDate();
      endDate = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(endDate).endOf('month').toDate(); // Get month names from start date to end date

      var months = [];

      while (startDate <= endDate) {
        months.push(dayjs__WEBPACK_IMPORTED_MODULE_15___default()(startDate).format('MMM-YYYY'));
        startDate = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(startDate).add(1, 'month').toDate();
      }

      return months;
    },
    groupDataByMonth: function groupDataByMonth(data) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'miles';

      if (!key || !data) {
        return {
          chartData: [],
          chartLabels: []
        };
      } // Get months from selected date range


      var selectedDates = this.selectedDateRange.split(' to ');
      var startDate = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(selectedDates[0]).toDate();
      var endDate = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(selectedDates[1]).toDate(); // Get months from start date to end date

      var months = this.getMonthsBetweenDates(startDate, endDate);
      var res = (data || []).reduce(function (acc, curr) {
        var monthYear = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(curr.date).format('MMM-YYYY');

        if (acc[monthYear]) {
          acc[monthYear] += curr[key];
        } else {
          acc[monthYear] = curr[key];
        }

        return acc;
      }, {});
      return {
        chartData: months.map(function (month) {
          return parseInt(res[month] || 0);
        }),
        chartLabels: months.map(function (month) {
          return month.split('-')[0];
        })
      };
    },
    onTotalMilesByChange: function onTotalMilesByChange() {
      if (this.totalMilesBy === 'week') {
        var _this$formatDataByWee3 = this.formatDataByWeek(this.rawResponse.dayValues, 'miles'),
            chartData = _this$formatDataByWee3.chartData,
            chartLabels = _this$formatDataByWee3.chartLabels;

        this.milesChart.chartData.labels = chartLabels;
        this.milesChart.chartData.datasets[0].data = chartData;
      } else {
        var _this$groupDataByMont3 = this.groupDataByMonth(this.rawResponse.dayValues, 'miles'),
            _chartData4 = _this$groupDataByMont3.chartData,
            _chartLabels4 = _this$groupDataByMont3.chartLabels;

        this.milesChart.chartData.labels = _chartLabels4;
        this.milesChart.chartData.datasets[0].data = _chartData4;
      }

      if (this.$refs.milesChart) {
        this.$refs.milesChart.updateChart();
      }
    },
    onTotalRevenueByChange: function onTotalRevenueByChange() {
      if (this.totalRevenueBy === 'week') {
        var _this$formatDataByWee4 = this.formatDataByWeek(this.rawResponse.dayValues, 'revenue'),
            chartData = _this$formatDataByWee4.chartData,
            chartLabels = _this$formatDataByWee4.chartLabels;

        this.revenueChart.chartData.labels = chartLabels;
        this.revenueChart.chartData.datasets[0].data = chartData;
      } else {
        var _this$groupDataByMont4 = this.groupDataByMonth(this.rawResponse.dayValues, 'revenue'),
            _chartData5 = _this$groupDataByMont4.chartData,
            _chartLabels5 = _this$groupDataByMont4.chartLabels;

        this.revenueChart.chartData.labels = _chartLabels5;
        this.revenueChart.chartData.datasets[0].data = _chartData5;
      }

      if (this.$refs.totalRevenueChart) {
        this.$refs.totalRevenueChart.updateChart();
      }
    },
    formatDataByWeek: function formatDataByWeek(data) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!key || !data) {
        return {
          chartData: [],
          chartLabels: []
        };
      }

      var selectedDateRange = this.selectedDateRange.split(' to '); // Get total number of weeks between the selected date range with year and return as labels for the chart in the format of "01/01 - 01/07"

      var labels = {};
      var startDate = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(selectedDateRange[0]).toDate();
      var endDate = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(selectedDateRange[1]).toDate();

      while (startDate <= endDate) {
        var weekNumberAndYear = "".concat(dayjs__WEBPACK_IMPORTED_MODULE_15___default()(startDate).week(), "-").concat(dayjs__WEBPACK_IMPORTED_MODULE_15___default()(startDate).year());
        var diff = 7 - dayjs__WEBPACK_IMPORTED_MODULE_15___default()(startDate).day();
        var weekStart = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(startDate).format('MM/DD');
        var weekEnd = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(startDate).endOf('week').format('MM/DD');
        labels[weekNumberAndYear] = "".concat(weekStart, " - ").concat(weekEnd);
        startDate.setDate(startDate.getDate() + diff); // If endDate week is not complete, add it to the labels

        if (startDate > endDate) {
          var _weekNumberAndYear = "".concat(dayjs__WEBPACK_IMPORTED_MODULE_15___default()(endDate).week(), "-").concat(dayjs__WEBPACK_IMPORTED_MODULE_15___default()(endDate).year());

          var _weekStart = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(endDate).startOf('week').format('MM/DD');

          var _weekEnd = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(endDate).format('MM/DD');

          labels[_weekNumberAndYear] = "".concat(_weekStart, " - ").concat(_weekEnd);
        }
      }

      var formattedData = (data || []).reduce(function (acc, curr) {
        var weekNumberAndYear = "".concat(dayjs__WEBPACK_IMPORTED_MODULE_15___default()(curr.date).week(), "-").concat(dayjs__WEBPACK_IMPORTED_MODULE_15___default()(curr.date).year());

        if (acc[weekNumberAndYear]) {
          acc[weekNumberAndYear] += curr[key];
        } else {
          acc[weekNumberAndYear] = curr[key];
        }

        return acc;
      }, {});
      return {
        chartData: _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(labels).map(function (weekNumber) {
          return parseInt(formattedData[weekNumber] || 0);
        }),
        chartLabels: _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(labels)
      };
    },
    onDriverRevenueByChange: function onDriverRevenueByChange() {
      var _this = this;

      if (this.rawResponse && this.rawResponse.topValues && this.rawResponse.topValues.driversByRevenue) {
        var top10Drivers = this.rawResponse.topValues.driversByRevenue.sort(function (a, b) {
          return b.revenue - a.revenue;
        }).slice(0, 10);
        var res = top10Drivers.filter(function (driver) {
          if (_this.driverRevenueBy === 'all') {
            return true;
          } else if (_this.driverRevenueBy === 'solo' && driver.isTeam !== undefined && driver.isLocal !== undefined) {
            return !driver.isTeam && !driver.isLocal;
          } else if (_this.driverRevenueBy === 'local' && driver.isLocal !== undefined) {
            return driver.isLocal;
          } else if (_this.driverRevenueBy === 'team' && driver.isTeam !== undefined) {
            return driver.isTeam;
          }
        }).map(function (driver) {
          return _objectSpread({}, driver, {
            revenue: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_17__["parseFloatWithTrim"])(driver.revenue)
          });
        });
        this.driverChart.chartData.labels = res.map(function (driver) {
          return driver.driverName;
        });
        this.driverChart.chartData.datasets[0].data = res.map(function (driver) {
          return driver.revenue;
        });

        if (this.$refs.driverChart) {
          this.$refs.driverChart.updateChart();
        }
      }
    },
    getTotalDaysBetweenDates: function getTotalDaysBetweenDates(startDate, endDate) {
      // Check if start date is greater than end date
      if (this.$dayjs(startDate).isAfter(endDate)) {
        return [];
      } // Get total days between start date and end date


      return this.$dayjs(endDate).diff(startDate, 'days') + 1;
    },
    getPerDayValue: function getPerDayValue(value) {
      return value / this.getTotalDaysBetweenDates(this.startDate, this.endDate);
    },
    getAnnualValue: function getAnnualValue(value) {
      return this.getPerDayValue(value) ? this.getPerDayValue(value) * 365 : 0;
    },
    getWeeklyValue: function getWeeklyValue(value) {
      return this.getPerDayValue(value) ? this.getPerDayValue(value) * 7 : 0;
    },
    getMonthlyValue: function getMonthlyValue(value) {
      return this.getPerDayValue(value) ? this.getPerDayValue(value) * 30.417 : 0;
    },
    getAllExpenseLabels: function getAllExpenseLabels(expenses) {
      return expenses.map(function (expense) {
        return expense.category;
      });
    },
    getAllFormattedExpenseValues: function getAllFormattedExpenseValues() {
      if (!this.rawResponse || !this.rawResponse.expenseValues) return [];
      /*return this.rawResponse.expenseValues.map((expense) =>
        round((expense.value / this.rawResponse.totalValues.expense) * 100, 2)
      );*/

      return this.rawResponse.expenseValues.map(function (expense) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_14__["round"])(expense.value, 2);
      });
    },
    onInput: function onInput() {
      this.updateChart();
    },
    updateChart: function updateChart() {
      var _this2 = this;

      switch (this.expensesRangeValue) {
        case 'weekly':
          /*const weeklyExpense = this.getWeeklyValue(
            this.rawResponse.totalValues.expense
          );
          this.expenseChartValues = this.rawResponse.expenseValues.map(
            (expense) =>
              (this.getWeeklyValue(expense.value) / weeklyExpense) * 100
          );*/
          this.expenseChartValues = this.rawResponse.expenseValues.map(function (expense) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_14__["round"])(_this2.getWeeklyValue(expense.value), 2);
          });
          break;

        case 'annual':
          /*const annualExpense = this.getAnnualValue(
            this.rawResponse.totalValues.expense
          );
          this.expenseChartValues = this.rawResponse.expenseValues.map(
            (expense) =>
              (this.getAnnualValue(expense.value) / annualExpense) * 100
          );*/
          this.expenseChartValues = this.rawResponse.expenseValues.map(function (expense) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_14__["round"])(_this2.getAnnualValue(expense.value), 2);
          });
          break;

        case 'monthly':
          /*const monthlyExpense = this.getMonthlyValue(
            this.rawResponse.totalValues.expense
          );
          this.expenseChartValues = this.rawResponse.expenseValues.map(
            (expense) =>
              (this.getMonthlyValue(expense.value) / monthlyExpense) * 100
          );*/
          this.expenseChartValues = this.rawResponse.expenseValues.map(function (expense) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_14__["round"])(_this2.getMonthlyValue(expense.value), 2);
          });
          break;

        default:
          break;
      }

      this.expenseChart.chartData.datasets[0].data = this.expenseChartValues;
      this.$refs.expenseChart.updateChart();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mixins/commonFunctions */ "./resources/js/src/views/pages/home-tab/mixins/commonFunctions.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CustomerOverviewTab',
  mixins: [_mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    selectedDateRange: {
      type: String,
      default: null
    },
    selectedTag: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      rawResponse: {},
      customerValues: [],
      loading: false,
      defaultPageSize: 25,
      totalRecords: 0,
      filter: {
        name: ''
      }
    };
  },
  created: function created() {
    this.initTab();
  },
  watch: {
    filter: {
      handler: function handler(val) {
        this.filterCustomerValues(val.name.toLowerCase());
        this.defaultSort();
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    filterCustomerValues: function filterCustomerValues(filterText) {
      var clone = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.rawResponse.customerValues);

      if (filterText) {
        this.customerValues = clone.filter(function (item) {
          return item.customerName.toLowerCase().includes(filterText);
        });
      } else {
        this.customerValues = clone;
      }
    },
    initTab: function () {
      var _initTab = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var selectedDates, payload, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.loading = true;
                selectedDates = this.selectedDateRange.split(' to ');
                payload = {
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                };

                if (this.selectedTag.tag_id != 'parent') {
                  payload.tagId = this.selectedTag.tag_id;
                } else {
                  payload.parentCompanyOnly = true;
                }

                if (payload.startDate) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                _context.next = 9;
                return this.$store.dispatch('homeTab/getCustomerOverview', payload);

              case 9:
                data = _context.sent;

                if (data.payload) {
                  this.rawResponse = _objectSpread({}, data.payload);
                  this.$emit('update:totalValues', data.payload.totalValues);
                  this.customerValues = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(data.payload.customerValues);
                  this.defaultSort();
                }

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context.t0.response.data.message
                });

              case 16:
                _context.prev = 16;
                this.loading = false;
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13, 16, 19]]);
      }));

      return function initTab() {
        return _initTab.apply(this, arguments);
      };
    }(),
    defaultSort: function defaultSort() {
      this.onSort({
        sortField: 'revenue',
        sortOrder: -1
      }, 'customerValues');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_charts_LineChart_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/charts/LineChart.vue */ "./resources/js/src/components/charts/LineChart.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/commonFunctions */ "./resources/js/src/views/pages/home-tab/mixins/commonFunctions.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var lineChartDefaultProps = {
  chartData: {
    labels: [],
    datasets: [{
      label: 'Total Revenue',
      borderColor: '#165BAA',
      backgroundColor: 'transparent',
      data: [],
      stack: 'combined',
      type: 'line'
    }, {
      label: 'Total Distance',
      backgroundColor: _config_constants__WEBPACK_IMPORTED_MODULE_12__["default"].chartColors,
      data: [],
      stack: 'combined',
      type: 'bar'
    }]
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true
      },
      yAxes: [{
        ticks: {
          callback: function callback(value) {
            if (value) return "".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_11__["commaSeparatedValue"])(value));else return "".concat(value);
          }
        }
      }],
      xAxes: [{
        offset: true
      }]
    },
    legend: {// display: false,
    },
    layout: {
      padding: {
        top: 15
      }
    },
    tooltips: {
      callbacks: {
        label: function label(tooltipItem, data) {
          var datasetIndex = tooltipItem.datasetIndex;
          var datasets = data.datasets;
          var _datasets$datasetInde = datasets[datasetIndex],
              label = _datasets$datasetInde.label,
              type = _datasets$datasetInde.type;
          var value = tooltipItem.value;
          var formattedVal = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_11__["commaSeparatedValue"])(value);
          return "".concat(label, ": ").concat(type === 'line' ? "$".concat(formattedVal) : formattedVal);
        }
      }
    }
  }
};
var chartPlugins = {
  datalabels: {
    display: 'auto',
    color: '#000',
    anchor: 'end',
    align: 'end',
    offset: -5,
    font: {
      size: 12,
      family: 'Montserrat'
    },
    formatter: function formatter(value, _ref) {
      var type = _ref.dataset.type;
      var formattedVal = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_11__["commaSeparatedValue"])(value);
      return type === 'line' ? "$".concat(formattedVal) : formattedVal;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DispatcherOverviewTab',
  components: {
    LineChart: _components_charts_LineChart_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [_mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_10__["default"]],
  props: {
    selectedDateRange: {
      type: String,
      default: null
    },
    selectedTag: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      rawResponse: {},
      dispatcherValues: [],
      loading: false,
      defaultPageSize: 25,
      totalRecords: 0,
      dispatcherOverviewChart: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"])(lineChartDefaultProps),
      lineChartPlugins: _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"])(chartPlugins), {
        title: {
          display: true,
          text: function text(ctx) {
            return 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle;
          }
        }
      }),
      filter: {
        name: ''
      }
    };
  },
  created: function created() {
    this.initTab();
  },
  watch: {
    filter: {
      handler: function handler(val) {
        this.filterDispatcherValues(val.name);
        this.defaultSort();
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    filterDispatcherValues: function filterDispatcherValues(filterText) {
      var clone = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"])(this.rawResponse.dispatcherValues);

      if (filterText) {
        this.dispatcherValues = clone.filter(function (item) {
          return item.dispatcherName.toLowerCase().includes(filterText);
        });
      } else {
        this.dispatcherValues = clone;
      }
    },
    initTab: function () {
      var _initTab = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        var selectedDates, payload, data, dispatchers, _dispatchers$reduce, dispatcherNames, dispatcherRevenue, dispatcherMiles;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.loading = true;
                selectedDates = this.selectedDateRange.split(' to ');
                payload = {
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                };

                if (this.selectedTag.tag_id != 'parent') {
                  payload.tagId = this.selectedTag.tag_id;
                } else {
                  payload.parentCompanyOnly = true;
                }

                if (payload.startDate) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                _context.next = 9;
                return this.$store.dispatch('homeTab/getDispatcherOverview', payload);

              case 9:
                data = _context.sent;

                if (data.payload) {
                  this.rawResponse = _objectSpread({}, data.payload);
                  this.$emit('update:totalValues', data.payload.totalValues);
                  this.dispatcherValues = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"])(data.payload.dispatcherValues);
                  this.defaultSort(); // Sort dispatchers

                  dispatchers = _toConsumableArray(this.dispatcherValues).sort(function (a, b) {
                    return b.revenue - a.revenue;
                  }); // Get dispatcher names, revenue and miles

                  _dispatchers$reduce = dispatchers.reduce(function (acc, item) {
                    acc.dispatcherNames.push(item.dispatcherName);
                    acc.dispatcherRevenue.push(item.revenue.toFixed(2));
                    acc.dispatcherMiles.push(item.miles.toFixed(2));
                    return acc;
                  }, {
                    dispatcherNames: [],
                    dispatcherRevenue: [],
                    dispatcherMiles: []
                  }), dispatcherNames = _dispatchers$reduce.dispatcherNames, dispatcherRevenue = _dispatchers$reduce.dispatcherRevenue, dispatcherMiles = _dispatchers$reduce.dispatcherMiles;
                  this.dispatcherOverviewChart.chartData.labels = dispatcherNames;
                  this.dispatcherOverviewChart.chartData.datasets[0].data = dispatcherRevenue;
                  this.dispatcherOverviewChart.chartData.datasets[1].data = dispatcherMiles;

                  if (this.$refs.dispatcherOverviewChart) {
                    this.$refs.dispatcherOverviewChart.updateChart();
                  }
                }

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context.t0.response.data.message
                });

              case 16:
                _context.prev = 16;
                this.loading = false;
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13, 16, 19]]);
      }));

      return function initTab() {
        return _initTab.apply(this, arguments);
      };
    }(),
    defaultSort: function defaultSort() {
      this.onSort({
        sortField: 'revenue',
        sortOrder: -1
      }, 'dispatcherValues');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mixins/commonFunctions */ "./resources/js/src/views/pages/home-tab/mixins/commonFunctions.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");








function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DriverOverviewReport',
  mixins: [_mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_8__["default"]],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])('samsara', ['connectionStatus']), {
    isDriverFuelEnergyReportFieldHidden: function isDriverFuelEnergyReportFieldHidden() {
      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.driversFuelEnergyReports).length === 0;
    },
    getTableCols: function getTableCols() {
      var driverFuelEnergyReportFields = ['miles', 'gallons', 'mpg', 'estimatedFuelCost', 'totalEngineHours', 'runTimeEngineHours', 'idlePercent'];

      if (this.isDriverFuelEnergyReportFieldHidden) {
        this.defaultKey = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getUniqueIdV4"])();
        return this.tableCols.filter(function (col) {
          return !driverFuelEnergyReportFields.includes(col.field);
        }).map(function (col) {
          if (col.field === 'loadedMiles') {
            col.header = 'Miles';
          }

          return col;
        });
      }

      this.defaultKey = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getUniqueIdV4"])();
      return this.tableCols.map(function (col) {
        if (col.field === 'loadedMiles') {
          col.header = 'Truckpedia Miles';
        }

        return col;
      });
    }
  }),
  props: {
    selectedDateRange: {
      type: String,
      default: null
    },
    selectedTag: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tagOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultTags: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      rawResponse: {},
      driverValues: [],
      loading: true,
      defaultPageSize: 25,
      totalRecords: 0,
      filter: {
        name: {
          value: null
        },
        tagId: {
          value: null
        }
      },
      driversFuelEnergyReports: {},
      sortBy: {
        sortField: 'revenue',
        sortOrder: -1
      },
      defaultKey: 0,
      tableCols: [{
        field: 'driverName',
        header: 'Driver Name',
        isSortable: true,
        isHidden: false
      }, {
        field: 'tags',
        header: 'Tags',
        isSortable: false,
        isHidden: false
      }, {
        field: 'miles',
        header: 'Samsara Miles',
        isSortable: true,
        isHidden: false
      }, {
        field: 'gallons',
        header: 'Gallons',
        isSortable: true,
        isHidden: false
      }, {
        field: 'mpg',
        header: 'MPG',
        isSortable: true,
        isHidden: false
      }, {
        field: 'estimatedFuelCost',
        header: 'Est. Fuel Cost',
        isSortable: true,
        isHidden: false
      }, {
        field: 'totalEngineHours',
        header: 'Total Engine Hours',
        isSortable: true,
        isHidden: false
      }, {
        field: 'runTimeEngineHours',
        header: 'Runtime Engine Hours',
        isSortable: true,
        isHidden: false
      }, {
        field: 'idlePercent',
        header: 'Idle %',
        isSortable: true,
        isHidden: false
      }, {
        field: 'revenue',
        header: 'Revenue',
        isSortable: true,
        isHidden: false
      }, {
        field: 'expense',
        header: 'Expense',
        isSortable: true,
        isHidden: false
      }, {
        field: 'profit',
        header: 'Profit',
        isSortable: true,
        isHidden: false
      }, {
        field: 'loadedMiles',
        header: 'Loaded Miles',
        isSortable: true,
        isHidden: false
      }, {
        field: 'numberOfLoads',
        header: 'No of Loads',
        isSortable: true,
        isHidden: false
      }, {
        field: 'driverPay',
        header: 'Driver Pay',
        isSortable: true,
        isHidden: false
      }, {
        field: 'fuelExpense',
        header: 'Fuel Expense',
        isSortable: true,
        isHidden: false
      }]
    };
  },
  created: function created() {
    this.initTab();
  },
  watch: {
    filter: {
      handler: function handler() {
        this.filterDriverValues();
        this.defaultSort();
      },
      immediate: true,
      deep: true
    },
    getTableCols: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          _this.filterDriverValues();

          _this.defaultSort();
        });
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    initTab: function () {
      var _initTab = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
        var _this2 = this;

        var selectedDates, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selectedDates = this.selectedDateRange.split(' to ');
                payload = {
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                };

                if (this.selectedTag.tag_id != 'parent') {
                  payload.tagId = this.selectedTag.tag_id;
                } else {
                  payload.parentCompanyOnly = true;
                }

                if (payload.startDate) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                if (!(this.connectionStatus == null)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return this.$store.dispatch('samsara/getConnectionStatus');

              case 8:
                _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.all([this.getDriversFuelEnergyReports().catch(function () {}), this.$store.dispatch('homeTab/getDriverOverview', payload)]).then(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                      _ = _ref2[0],
                      data = _ref2[1];

                  if (data.payload) {
                    _this2.rawResponse = _objectSpread({}, data.payload);
                    _this2.driverValues = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(data.payload.driverValues);
                    var payloadTotalValues = data.payload.totalValues;

                    if (_this2.driverValues) {
                      var driverTotalValues = {
                        revenuePerDriver: _this2.rawResponse.totalValues.revenue / _this2.driverValues.length,
                        expensePerDriver: _this2.rawResponse.totalValues.expense / _this2.driverValues.length,
                        profitPerDriver: _this2.rawResponse.totalValues.profit / _this2.driverValues.length
                      };
                      payloadTotalValues = _objectSpread({}, data.payload.totalValues, driverTotalValues);
                    }

                    _this2.$emit('update:totalValues', payloadTotalValues);

                    if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(_this2.driversFuelEnergyReports).length) {
                      _this2.initFuelEnergyReportFields();
                    }

                    _this2.defaultSort();
                  }
                }).catch(function (error) {
                  _this2.$vs.notify({
                    time: 8000,
                    color: 'danger',
                    title: 'Error',
                    text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(error)
                  });
                }).finally(function () {
                  _this2.loading = false;
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initTab() {
        return _initTab.apply(this, arguments);
      };
    }(),
    getDriversFuelEnergyReports: function () {
      var _getDriversFuelEnergyReports = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
        var selectedDates, payload, _ref3, status, reports;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.connectionStatus !== 'Connected')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                selectedDates = this.selectedDateRange.split(' to ');
                payload = {
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                };
                _context2.next = 6;
                return this.$store.dispatch('samsara/getDriversFuelEnergyReports', payload);

              case 6:
                _ref3 = _context2.sent;
                status = _ref3.status;
                reports = _ref3.data.payload.reports;

                if (status === 200 && reports) {
                  this.driversFuelEnergyReports = (reports || []).reduce(function (acc, report) {
                    if (report && report.driver && report.driver.name) {
                      acc[report.driver.name.toLowerCase().trim()] = report;
                    }

                    return acc;
                  }, {});
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getDriversFuelEnergyReports() {
        return _getDriversFuelEnergyReports.apply(this, arguments);
      };
    }(),
    defaultSort: function defaultSort() {
      this.onSort(_objectSpread({}, this.sortBy), 'driverValues');
    },
    filterDriverValues: function filterDriverValues() {
      var _this3 = this;

      if (this.rawResponse.driverValues && this.rawResponse.driverValues.length) {
        var driverValues = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(this.rawResponse.driverValues);

        if (this.filter.name.value || this.filter.tagId.value) {
          this.driverValues = driverValues.filter(function (driver) {
            var isNameMatched = !_this3.filter.name.value || driver.driverName.toLowerCase().includes(_this3.filter.name.value.toLowerCase());
            var isTagMatched = !_this3.filter.tagId.value || driver.tags.some(function (tag) {
              return tag.tagId === _this3.filter.tagId.value;
            });
            return isNameMatched && isTagMatched;
          });
        } else {
          this.driverValues = driverValues;
        }
      }

      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.driversFuelEnergyReports).length) {
        this.initFuelEnergyReportFields();
      }
    },
    initFuelEnergyReportFields: function initFuelEnergyReportFields() {
      var _this4 = this;

      this.driverValues.forEach(function (driver) {
        var driverReport = _this4.driversFuelEnergyReports[driver.driverName.toLowerCase().trim()] || {};
        driver.miles = driverReport.miles || 0;
        driver.gallons = driverReport.gallons || 0;
        driver.mpg = driverReport.mpg || 0;
        driver.estimatedFuelCost = driverReport.estimatedFuelCost || 0;
        driver.totalEngineHours = (driverReport.engineHours || {}).totalTime || 0;
        driver.runTimeEngineHours = (driverReport.engineHours || {}).runTime || 0;
        driver.idlePercent = (driverReport.engineHours || {}).idlePercent || 0;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mixins/commonFunctions */ "./resources/js/src/views/pages/home-tab/mixins/commonFunctions.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MarketOverviewTab',
  mixins: [_mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    selectedDateRange: {
      type: String,
      default: null
    },
    selectedTag: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      rawResponse: {},
      marketWiseLoads: [],
      mostRunLanes: [],
      loading: false,
      defaultPageSize: 25,
      totalRecords: 0
    };
  },
  created: function created() {
    this.initTab();
  },
  methods: {
    initTab: function () {
      var _initTab = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var selectedDates, payload, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.loading = true;
                selectedDates = this.selectedDateRange.split(' to ');
                payload = {
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                };

                if (this.selectedTag.tag_id != 'parent') {
                  payload.tagId = this.selectedTag.tag_id;
                } else {
                  payload.parentCompanyOnly = true;
                }

                if (payload.startDate) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                _context.next = 9;
                return this.$store.dispatch('homeTab/getMarketOverview', payload);

              case 9:
                data = _context.sent;

                if (data.payload) {
                  this.rawResponse = _objectSpread({}, data.payload);
                  this.$emit('update:totalValues', data.payload.totalValues);
                  this.marketWiseLoads = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(data.payload.marketWiseLoads);
                  this.mostRunLanes = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(data.payload.mostRunLanes);
                  this.defaultSort();
                }

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context.t0.response.data.message
                });

              case 16:
                _context.prev = 16;
                this.loading = false;
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13, 16, 19]]);
      }));

      return function initTab() {
        return _initTab.apply(this, arguments);
      };
    }(),
    defaultSort: function defaultSort() {
      this.onSort({
        sortField: 'revenue',
        sortOrder: -1
      }, 'marketWiseLoads');
      this.onSort({
        sortField: 'revenue',
        sortOrder: -1
      }, 'mostRunLanes');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _components_charts_LineChart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/charts/LineChart.vue */ "./resources/js/src/components/charts/LineChart.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var lineChartDefaultProps = {
  chartData: {
    datasets: [{
      backgroundColor: 'transparent',
      type: 'line',
      borderColor: '#1877F2',
      pointBackgroundColor: '#1877F2',
      pointRadius: '6'
    }]
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2.5,
    scales: {
      y: {
        stacked: true
      },
      yAxes: [{
        gridLines: {
          display: true,
          color: '#BDBDBD',
          borderDash: [5, 5],
          drawBorder: true
        }
      }],
      xAxes: [{
        offset: true,
        gridLines: {
          display: true,
          color: '#BDBDBD',
          borderDash: [5, 5],
          drawBorder: true
        }
      }]
    },
    legend: {
      display: false
    },
    layout: {
      padding: {
        top: 15
      }
    },
    tooltips: {
      callbacks: {
        title: function title(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
        label: function label(tooltipItem, data) {
          return "Network Rate: ".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_4__["formatAmount"])(data.datasets[0].data[tooltipItem.index]));
        }
      }
    }
  }
};
var chartPlugins = {
  datalabels: {
    display: false,
    color: '#000',
    anchor: 'end',
    align: 'end',
    offset: -5,
    font: {
      size: 12,
      family: 'M ontserrat'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RateEstimatesResult',
  data: function data() {
    return {
      rateHistoryChart: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(lineChartDefaultProps),
      lineChartPlugins: _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(chartPlugins))
    };
  },
  components: {
    LineChart: _components_charts_LineChart_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    ratePredictions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    updatedPredictions: function updatedPredictions() {
      return this.ratePredictions.length && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.ratePredictions[1]).length ? [this.getRateObject(this.ratePredictions.slice(-3)), this.getRateObject(this.ratePredictions.slice(-7)), this.getRateObject(this.ratePredictions.slice(-15)), this.getRateObject(this.ratePredictions.slice(-30))] : [];
    },
    confidenceLevel: function confidenceLevel() {
      return this.ratePredictions[this.ratePredictions.length - 1].confidenceLevel < 80 ? 80 : this.ratePredictions[this.ratePredictions.length - 1].confidenceLevel;
    }
  },
  methods: {
    formatAmount: function formatAmount(amount) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_4__["formatAmount"])(amount);
    },
    generateDateLabels: function generateDateLabels() {
      var labels = [];
      var startDate = this.$dayjs().subtract(1, 'month');

      for (var i = 0; i <= 30; i++) {
        labels.push("".concat(startDate.format('MM/DD')));
        startDate = startDate.add(1, 'day');
      }

      return labels;
    },
    getRateObject: function getRateObject(subset) {
      return {
        targetBuyRate: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["meanBy"])(subset, 'targetBuyRate'),
        lowBuyRate: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["meanBy"])(subset, 'lowBuyRate'),
        highBuyRate: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["meanBy"])(subset, 'highBuyRate'),
        days: subset.length,
        distance: subset[0].distance
      };
    }
  },
  watch: {
    ratePredictions: function ratePredictions() {
      if (this.ratePredictions.length && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(this.ratePredictions[1]).length) {
        this.rateHistoryChart.chartData.labels = this.generateDateLabels();
        this.rateHistoryChart.chartData.datasets[0].data = this.ratePredictions.map(function (data) {
          return data.targetBuyRate * data.distance;
        });

        if (this.$refs.rateHistoryChart) {
          this.$refs.rateHistoryChart.updateChart();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mixins/commonFunctions */ "./resources/js/src/views/pages/home-tab/mixins/commonFunctions.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");








function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TruckOverviewTab',
  mixins: [_mixins_commonFunctions__WEBPACK_IMPORTED_MODULE_8__["default"]],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])('samsara', ['connectionStatus']), {
    isTruckFuelEnergyReportFieldHidden: function isTruckFuelEnergyReportFieldHidden() {
      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.trucksFuelEnergyReports).length === 0;
    },
    getTableCols: function getTableCols() {
      var truckFuelEnergyReportFields = ['miles', 'gallons', 'mpg', 'estimatedFuelCost', 'totalEngineHours', 'runTimeEngineHours', 'idlePercent'];

      if (this.isTruckFuelEnergyReportFieldHidden) {
        this.defaultKey = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getUniqueIdV4"])();
        return this.tableCols.filter(function (col) {
          return !truckFuelEnergyReportFields.includes(col.field);
        }).map(function (col) {
          if (col.field === 'loadedMiles') {
            col.header = 'Loaded Miles';
          }

          return col;
        });
      }

      this.defaultKey = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getUniqueIdV4"])();
      return this.tableCols.map(function (col) {
        if (col.field === 'loadedMiles') {
          col.header = 'Truckpedia Miles';
        }

        return col;
      });
    }
  }),
  props: {
    selectedDateRange: {
      type: String,
      default: null
    },
    selectedTag: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tagOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultTags: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      rawResponse: {},
      truckValues: [],
      loading: true,
      defaultPageSize: 25,
      totalRecords: 0,
      filter: {
        number: {
          value: null
        },
        tagId: {
          value: null
        }
      },
      trucksFuelEnergyReports: {},
      sortBy: {
        sortField: 'revenue',
        sortOrder: -1
      },
      defaultKey: 0,
      tableCols: [{
        field: 'truckNumber',
        header: 'Truck Number',
        isSortable: true,
        isHidden: false
      }, {
        field: 'tags',
        header: 'Tags',
        isSortable: false,
        isHidden: false
      }, {
        field: 'miles',
        header: 'Samsara Miles',
        isSortable: true,
        isHidden: false
      }, {
        field: 'gallons',
        header: 'Gallons',
        isSortable: true,
        isHidden: false
      }, {
        field: 'mpg',
        header: 'MPG',
        isSortable: true,
        isHidden: false
      }, {
        field: 'estimatedFuelCost',
        header: 'Est. Fuel Cost',
        isSortable: true,
        isHidden: false
      }, {
        field: 'totalEngineHours',
        header: 'Total Engine Hours',
        isSortable: true,
        isHidden: false
      }, {
        field: 'runTimeEngineHours',
        header: 'Runtime Engine Hours',
        isSortable: true,
        isHidden: false
      }, {
        field: 'idlePercent',
        header: 'Idle %',
        isSortable: true,
        isHidden: false
      }, {
        field: 'revenue',
        header: 'Revenue',
        isSortable: true,
        isHidden: false
      }, {
        field: 'loadedMiles',
        header: 'Loaded Miles',
        isSortable: true,
        isHidden: false
      }, {
        field: 'numberOfLoads',
        header: 'No of Loads',
        isSortable: true,
        isHidden: false
      }, {
        field: 'ratePerMile',
        header: 'Rate Per Mile',
        isSortable: true,
        isHidden: false
      }]
    };
  },
  created: function created() {
    this.initTab();
  },
  watch: {
    filter: {
      handler: function handler() {
        this.filterTruckValues();
        this.defaultSort();
      },
      immediate: true,
      deep: true
    },
    getTableCols: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          _this.filterTruckValues();

          _this.defaultSort();
        });
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    filterTruckValues: function filterTruckValues() {
      var _this2 = this;

      if (this.rawResponse.truckValues && this.rawResponse.truckValues.length) {
        var truckValues = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(this.rawResponse.truckValues);

        if (this.filter.number.value || this.filter.tagId.value) {
          this.truckValues = truckValues.filter(function (truck) {
            var isNumberMatched = !_this2.filter.number.value || truck.truckNumber.toLowerCase().includes(_this2.filter.number.value.toLowerCase());
            var isTagMatched = !_this2.filter.tagId.value || truck.tags.find(function (tag) {
              return tag.tagId === _this2.filter.tagId.value;
            });
            return isNumberMatched && isTagMatched;
          });
        } else {
          this.truckValues = truckValues;
        }
      }

      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.trucksFuelEnergyReports).length) {
        this.initFuelEnergyReportFields();
      }
    },
    initTab: function () {
      var _initTab = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
        var _this3 = this;

        var selectedDates, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selectedDates = this.selectedDateRange.split(' to ');
                payload = {
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                };

                if (this.selectedTag.tag_id != 'parent') {
                  payload.tagId = this.selectedTag.tag_id;
                } else {
                  payload.parentCompanyOnly = true;
                }

                if (payload.startDate) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                if (!(this.connectionStatus == null)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return this.$store.dispatch('samsara/getConnectionStatus');

              case 8:
                _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.all([this.getTrucksFuelEnergyReports().catch(function () {}), this.$store.dispatch('homeTab/getTruckOverview', payload)]).then(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                      _ = _ref2[0],
                      data = _ref2[1];

                  if (data.payload) {
                    _this3.rawResponse = _objectSpread({}, data.payload);

                    _this3.$emit('update:totalValues', data.payload.totalValues);

                    _this3.truckValues = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(data.payload.truckValues);

                    if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(_this3.trucksFuelEnergyReports).length) {
                      _this3.initFuelEnergyReportFields();
                    }

                    _this3.defaultSort();
                  }
                }).catch(function (error) {
                  _this3.$vs.notify({
                    time: 8000,
                    color: 'danger',
                    title: 'Error',
                    text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(error)
                  });
                }).finally(function () {
                  _this3.loading = false;
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initTab() {
        return _initTab.apply(this, arguments);
      };
    }(),
    getTrucksFuelEnergyReports: function () {
      var _getTrucksFuelEnergyReports = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
        var selectedDates, payload, _ref3, status, reports;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.connectionStatus !== 'Connected')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                selectedDates = this.selectedDateRange.split(' to ');
                payload = {
                  startDate: selectedDates[0],
                  endDate: selectedDates[1]
                };
                _context2.next = 6;
                return this.$store.dispatch('samsara/getTrucksFuelEnergyReports', payload);

              case 6:
                _ref3 = _context2.sent;
                status = _ref3.status;
                reports = _ref3.data.payload.reports;

                if (status === 200 && reports) {
                  this.trucksFuelEnergyReports = (reports || []).reduce(function (acc, report) {
                    if (report && report.truck && report.truck.number) {
                      acc[report.truck.number.toLowerCase().trim()] = report;
                    }

                    return acc;
                  }, {});
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getTrucksFuelEnergyReports() {
        return _getTrucksFuelEnergyReports.apply(this, arguments);
      };
    }(),
    defaultSort: function defaultSort() {
      this.onSort(_objectSpread({}, this.sortBy), 'truckValues');
    },
    initFuelEnergyReportFields: function initFuelEnergyReportFields() {
      var _this4 = this;

      this.truckValues.forEach(function (truck) {
        var truckReport = _this4.trucksFuelEnergyReports[truck.truckNumber.toLowerCase().trim()] || {};
        truck.miles = truckReport.miles || 0;
        truck.gallons = truckReport.gallons || 0;
        truck.mpg = truckReport.mpg || 0;
        truck.estimatedFuelCost = truckReport.estimatedFuelCost || 0;
        truck.totalEngineHours = (truckReport.engineHours || {}).totalTime || 0;
        truck.runTimeEngineHours = (truckReport.engineHours || {}).runTime || 0;
        truck.idlePercent = (truckReport.engineHours || {}).idlePercent || 0;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=template&id=6a81c1d5&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=template&id=6a81c1d5&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "w-full"
  }, [_c("home-v-2")], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=template&id=4712fbb7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=template&id=4712fbb7&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      title: "Dashboard"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("h4", {
    staticClass: "opacity-75"
  }, [_vm._v("You are in home.")])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=template&id=054a4192&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=template&id=054a4192& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div");
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=template&id=90859996&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=template&id=90859996&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      title: "Dashboard"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("h4", {
    staticClass: "opacity-75"
  }, [_vm._v("You are in home.")])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=template&id=96e57bc2&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=template&id=96e57bc2& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div");
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=template&id=ed36ed02&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=template&id=ed36ed02&scoped=true& ***!
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

  return _c("div", [_c("vx-card", [_c("div", [_c("div", {
    staticClass: "tab-container"
  }, _vm._l(_vm.tabList, function (tab) {
    return _c("span", {
      key: tab.id,
      class: ["tab", {
        active: tab.value === _vm.activeComponent
      }],
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.changeActiveComponent(tab.value);
        }
      }
    }, [_vm._v("\n          " + _vm._s(tab.label) + "\n        ")]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "rates-estimates-card"
  }, [_c("div", {
    staticClass: "rates-estimates-search"
  }, [_c("span", {
    staticClass: "rates-card-title"
  }, [_vm._v("Rates Estimates")]), _vm._v(" "), _c("div", {
    staticClass: "rates-estimates-form"
  }, [_c("v-select", {
    staticClass: "equipment-type",
    attrs: {
      options: _vm.equipmentTypeOptions,
      reduce: function reduce(option) {
        return option.value;
      },
      closeOnSelect: true,
      label: "title",
      clearable: true,
      placeholder: "Equipment Type"
    },
    model: {
      value: _vm.selectedEquipmentType,
      callback: function callback($$v) {
        _vm.selectedEquipmentType = $$v;
      },
      expression: "selectedEquipmentType"
    }
  }), _vm._v(" "), _c("gmap-autocomplete", {
    staticClass: "vs-inputx vs-input--input normal hasValue origin-location",
    attrs: {
      value: _vm.ratesOriginLocation,
      placeholder: "Origin Location",
      options: _vm.googleMapAutoCompleteOptions,
      "select-first-on-enter": true
    },
    on: {
      place_changed: function place_changed($event) {
        return _vm.getChangedPlace($event, "origin");
      },
      input: function input($event) {
        return _vm.onAutocompleteInput($event, "origin");
      }
    }
  }), _vm._v(" "), _c("gmap-autocomplete", {
    staticClass: "vs-inputx vs-input--input normal hasValue destination-location",
    attrs: {
      value: _vm.ratesDestinationLocation,
      placeholder: "Destination Location",
      options: _vm.googleMapAutoCompleteOptions,
      "select-first-on-enter": true
    },
    on: {
      place_changed: function place_changed($event) {
        return _vm.getChangedPlace($event, "destination");
      },
      input: function input($event) {
        return _vm.onAutocompleteInput($event, "destination");
      }
    }
  }), _vm._v(" "), _c("vs-button", {
    staticClass: "get-rates-btn",
    attrs: {
      disabled: _vm.isGetRateDisabled
    },
    on: {
      click: _vm.getRates
    }
  }, [_vm._v("\n            Get Rate\n          ")])], 1)]), _vm._v(" "), _c("RateEstimatesResult", {
    attrs: {
      ratePredictions: _vm.ratePredictions
    }
  })], 1), _vm._v(" "), !_vm.isUserBrokerOrShipper ? [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("h3", {
    domProps: {
      textContent: _vm._s("Overview")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex items-center gap-2"
  }, [_c("flat-pickr", {
    ref: "flatPicker",
    staticClass: "w-full",
    staticStyle: {
      "min-width": "190px"
    },
    attrs: {
      value: _vm.selectedDateRange,
      config: _vm.flat_pikr_config
    },
    on: {
      "on-change": _vm.onDateChange
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "filter-input"
  }, [_c("multiselect", {
    attrs: {
      "allow-empty": false,
      placeholder: "Select tag",
      "preselect-first": true,
      options: _vm.tagOptions,
      label: "business_name",
      searchable: false,
      "show-labels": false
    },
    model: {
      value: _vm.selectedTag,
      callback: function callback($$v) {
        _vm.selectedTag = $$v;
      },
      expression: "selectedTag"
    }
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    class: ["grid", "gap-8", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", _vm.activeComponent === "DriverOverview" ? "xl:grid-cols-6" : "xl:grid-cols-5"]
  }, _vm._l(_vm.infoCard, function (item, key) {
    return _c("vx-card", {
      key: key,
      staticClass: "info-card",
      style: _vm.getColorStyle(key)
    }, [_c("p", {
      staticClass: "title"
    }, [_vm._v(_vm._s(_vm._f("formatTotalValueLabels")(key)))]), _vm._v(" "), key === "revenue" || key === "expense" || key === "profit" || key === "expensePerMile" || key === "revenuePerMile" || key === "expensePerMile" || key === "profitPerMile" || key === "expensePerDriver" || key === "revenuePerDriver" || key === "profitPerDriver" ? _c("p", {
      staticClass: "dataset",
      style: _vm.getDataColorStyle(key)
    }, [_vm._v("\n            $" + _vm._s(_vm._f("formatNumberWithCommas")(item)) + "\n          ")]) : _c("p", {
      staticClass: "dataset",
      style: _vm.getDataColorStyle(key)
    }, [_vm._v("\n            " + _vm._s(_vm._f("formatNumberWithCommas")(item)) + "\n          ")])]);
  }), 1)] : _vm._e()], 2), _vm._v(" "), !_vm.isUserBrokerOrShipper ? _c(_vm.activeComponent, {
    tag: "component",
    staticClass: "my-8",
    attrs: {
      selectedDateRange: _vm.selectedDateRange,
      selectedTag: _vm.selectedTag,
      tagOptions: _vm.tagOptions,
      defaultTags: _vm.tags
    },
    on: {
      "update:totalValues": _vm.updateTotalValues
    }
  }) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=template&id=c2fcc5b6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=template&id=c2fcc5b6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-row xl:flex-row flex-col-reverse"
  }, [_c("div", {
    staticClass: "vx-col flex-1 sm:w-full mt-8 xl:mt-0 xl:w-1/3 xl:flex-none"
  }, [_c("vx-card", {
    staticClass: "h-full"
  }, [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("Cost Breakdown")]), _vm._v(" "), _c("v-select", {
    staticClass: "w-48",
    attrs: {
      options: [{
        label: "Weekly",
        value: "weekly"
      }, {
        label: "Monthly",
        value: "monthly"
      }, {
        label: "Annual",
        value: "annual"
      }],
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: false,
      placeholder: "Seleted dates"
    },
    on: {
      input: _vm.onInput
    },
    model: {
      value: _vm.expensesRangeValue,
      callback: function callback($$v) {
        _vm.expensesRangeValue = $$v;
      },
      expression: "expensesRangeValue"
    }
  })], 1), _vm._v(" "), _c("PieChart", {
    ref: "expenseChart",
    attrs: {
      chartOptions: _vm.expenseChart.chartOptions,
      chartData: _vm.expenseChart.chartData
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col flex-1 xl:mt-0 lg:mt-8"
  }, [_c("div", {
    staticClass: "vx-row h-full"
  }, [_c("div", {
    staticClass: "cost-operation-card vx-col w-full h-1/2 md:w-1/2"
  }, [_vm.rawResponse && _vm.rawResponse.totalValues && _vm.rawResponse.totalValues.expense !== undefined ? _c("vx-card", {
    staticClass: "info-group-card h-full"
  }, [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("Cost of Operation")]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between items-stretch gap-6 overflow-y-auto"
  }, [_c("vx-card", {
    staticClass: "info-card",
    staticStyle: {
      "background-color": "#e7f1fe"
    }
  }, [_c("div", {
    staticClass: "flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full",
    staticStyle: {
      "background-color": "#cfe2fc"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/dashboard/Group_2075.svg */ "./resources/assets/images/dashboard/Group_2075.svg"),
      alt: "annual"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "title"
  }, [_vm._v("Annual")]), _vm._v(" "), _vm.rawResponse && _vm.rawResponse.totalValues ? _c("p", {
    staticClass: "dataset",
    staticStyle: {
      color: "#1877f2"
    }
  }, [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(_vm.getAnnualValue(_vm.rawResponse.totalValues.expense))) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c("vx-card", {
    staticClass: "info-card",
    staticStyle: {
      "background-color": "#ccfdf3"
    }
  }, [_c("div", {
    staticClass: "flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full",
    staticStyle: {
      "background-color": "#67f5ef"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/dashboard/calendar.svg */ "./resources/assets/images/dashboard/calendar.svg"),
      alt: "monthly"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "title"
  }, [_vm._v("Monthly")]), _vm._v(" "), _vm.rawResponse && _vm.rawResponse.totalValues ? _c("p", {
    staticClass: "dataset",
    staticStyle: {
      color: "#025481"
    }
  }, [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(_vm.getMonthlyValue(_vm.rawResponse.totalValues.expense))) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c("vx-card", {
    staticClass: "info-card",
    staticStyle: {
      "background-color": "#e3fad6"
    }
  }, [_c("div", {
    staticClass: "flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full",
    staticStyle: {
      "background-color": "#c2f6ae"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/dashboard/credit.svg */ "./resources/assets/images/dashboard/credit.svg"),
      alt: "weekly"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "title"
  }, [_vm._v("Weekly")]), _vm._v(" "), _vm.rawResponse && _vm.rawResponse.totalValues ? _c("p", {
    staticClass: "dataset",
    staticStyle: {
      color: "#074119"
    }
  }, [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(_vm.getWeeklyValue(_vm.rawResponse.totalValues.expense))) + "\n                ")]) : _vm._e()])], 1)]) : _vm._e()], 1), _vm._v(" "), _vm.rawResponse && _vm.rawResponse.totalValues && _vm.rawResponse.totalValues.revenue !== undefined ? _c("div", {
    staticClass: "total-revenue-card vx-col w-full mt-8 h-1/2 md:mt-0 md:w-1/2"
  }, [_c("vx-card", {
    staticClass: "info-group-card h-full"
  }, [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("Total Revenue")]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between items-stretch gap-6 overflow-y-auto"
  }, [_c("vx-card", {
    staticClass: "info-card",
    staticStyle: {
      "background-color": "#e7f1fe"
    }
  }, [_c("div", {
    staticClass: "flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full",
    staticStyle: {
      "background-color": "#cfe2fc"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/dashboard/Group_2075.svg */ "./resources/assets/images/dashboard/Group_2075.svg"),
      alt: "annual"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "title"
  }, [_vm._v("Annual")]), _vm._v(" "), _c("p", {
    staticClass: "dataset",
    staticStyle: {
      color: "#1877f2"
    }
  }, [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(_vm.getAnnualValue(_vm.rawResponse.totalValues.revenue))) + "\n                ")])]), _vm._v(" "), _c("vx-card", {
    staticClass: "info-card",
    staticStyle: {
      "background-color": "#ccfdf3"
    }
  }, [_c("div", {
    staticClass: "flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full",
    staticStyle: {
      "background-color": "#67f5ef"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/dashboard/calendar.svg */ "./resources/assets/images/dashboard/calendar.svg"),
      alt: "monthly"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "title"
  }, [_vm._v("Monthly")]), _vm._v(" "), _c("p", {
    staticClass: "dataset",
    staticStyle: {
      color: "#025481"
    }
  }, [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(_vm.getMonthlyValue(_vm.rawResponse.totalValues.revenue))) + "\n                ")])]), _vm._v(" "), _c("vx-card", {
    staticClass: "info-card",
    staticStyle: {
      "background-color": "#e3fad6"
    }
  }, [_c("div", {
    staticClass: "flex justify-center items-center w-16 h-16 p-4 mx-auto rounded-full",
    staticStyle: {
      "background-color": "#c2f6ae"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/dashboard/credit.svg */ "./resources/assets/images/dashboard/credit.svg"),
      alt: "weekly"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "title"
  }, [_vm._v("Weekly")]), _vm._v(" "), _c("p", {
    staticClass: "dataset",
    staticStyle: {
      color: "#074119"
    }
  }, [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(_vm.getWeeklyValue(_vm.rawResponse.totalValues.revenue))) + "\n                ")])])], 1)])], 1) : _vm._e(), _vm._v(" "), _vm.rawResponse && _vm.rawResponse.totalValues && _vm.rawResponse.totalValues.profit !== undefined ? _c("div", {
    staticClass: "total-profit-card vx-col w-full mt-8 h-{50%}"
  }, [_c("vx-card", {
    staticClass: "info-group-card h-full"
  }, [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("Total Profit")]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-start items-stretch gap-6 overflow-y-auto"
  }, [_c("vx-card", {
    staticClass: "info-card items-start lg:w-1/3 xl:w-1/3",
    staticStyle: {
      "background-color": "#e7f1fe"
    }
  }, [_c("div", {
    staticClass: "flex justify-center items-center w-16 h-16 p-4 rounded-full",
    staticStyle: {
      "background-color": "#cfe2fc"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/dashboard/flag.svg */ "./resources/assets/images/dashboard/flag.svg"),
      alt: "annual"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "title text-left"
  }, [_vm._v("Annual")]), _vm._v(" "), _c("p", {
    staticClass: "dataset",
    staticStyle: {
      color: "#0b5ac1"
    }
  }, [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(_vm.getAnnualValue(_vm.rawResponse.totalValues.profit))) + "\n                ")])]), _vm._v(" "), _c("vx-card", {
    staticClass: "info-card items-start lg:w-1/3 xl:w-1/3",
    staticStyle: {
      "background-color": "#e7f1fe"
    }
  }, [_c("div", {
    staticClass: "flex justify-center items-center w-16 h-16 p-4 rounded-full",
    staticStyle: {
      "background-color": "#cfe2fc"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/dashboard/chart.png */ "./resources/assets/images/dashboard/chart.png"),
      alt: "monthly"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "title text-left"
  }, [_vm._v("Monthly")]), _vm._v(" "), _c("p", {
    staticClass: "dataset",
    staticStyle: {
      color: "#0b5ac1"
    }
  }, [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(_vm.getMonthlyValue(_vm.rawResponse.totalValues.profit))) + "\n                ")])]), _vm._v(" "), _c("vx-card", {
    staticClass: "info-card items-start lg:w-1/3 xl:w-1/3",
    staticStyle: {
      "background-color": "#e7f1fe"
    }
  }, [_c("div", {
    staticClass: "flex justify-center items-center w-16 h-16 p-4 rounded-full",
    staticStyle: {
      "background-color": "#cfe2fc"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/dashboard/credit_blue.svg */ "./resources/assets/images/dashboard/credit_blue.svg"),
      alt: "weekly"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "title text-left"
  }, [_vm._v("Weekly")]), _vm._v(" "), _c("p", {
    staticClass: "dataset",
    staticStyle: {
      color: "#0b5ac1"
    }
  }, [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(_vm.getWeeklyValue(_vm.rawResponse.totalValues.profit))) + "\n                ")])])], 1)])], 1) : _vm._e()]), _vm._v(" "), _c("vx-card")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-8"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("vx-card", [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("TOP 10 DRIVER BY REVENUE")]), _vm._v(" "), _c("v-select", {
    staticStyle: {
      width: "160px"
    },
    attrs: {
      options: _vm.driverRevenueFilterOptions,
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: false,
      dir: _vm.$vs.rtl ? "rtl" : "ltr"
    },
    on: {
      input: _vm.onDriverRevenueByChange
    },
    model: {
      value: _vm.driverRevenueBy,
      callback: function callback($$v) {
        _vm.driverRevenueBy = $$v;
      },
      expression: "driverRevenueBy"
    }
  })], 1), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("BarChart", {
    ref: "driverChart",
    attrs: {
      chartOptions: _vm.driverChart.chartOptions,
      chartData: _vm.driverChart.chartData,
      chartPlugins: _vm.chartPlugins()
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("vx-card", [_c("h4", {
    staticClass: "card-heading py-2"
  }, [_vm._v("TOP 10 TRUCKS BY REVENUE")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("PieChart", {
    ref: "truckChart",
    attrs: {
      chartOptions: _vm.truckChart.chartOptions,
      chartData: _vm.truckChart.chartData
    }
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-8"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("vx-card", [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("TOTAL REVENUE")]), _vm._v(" "), _c("v-select", {
    staticStyle: {
      width: "160px"
    },
    attrs: {
      options: _vm.chartFilterOptions,
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: false,
      dir: _vm.$vs.rtl ? "rtl" : "ltr"
    },
    on: {
      input: _vm.onTotalRevenueByChange
    },
    model: {
      value: _vm.totalRevenueBy,
      callback: function callback($$v) {
        _vm.totalRevenueBy = $$v;
      },
      expression: "totalRevenueBy"
    }
  })], 1), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("LineChart", {
    ref: "totalRevenueChart",
    attrs: {
      chartOptions: _vm.revenueChart.chartOptions,
      chartData: _vm.revenueChart.chartData,
      chartPlugins: _vm.lineChartPlugins
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("vx-card", [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("TOTAL MILES")]), _vm._v(" "), _c("v-select", {
    staticStyle: {
      width: "160px"
    },
    attrs: {
      options: _vm.chartFilterOptions,
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: false,
      dir: _vm.$vs.rtl ? "rtl" : "ltr"
    },
    on: {
      input: _vm.onTotalMilesByChange
    },
    model: {
      value: _vm.totalMilesBy,
      callback: function callback($$v) {
        _vm.totalMilesBy = $$v;
      },
      expression: "totalMilesBy"
    }
  })], 1), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("BarChart", {
    ref: "milesChart",
    attrs: {
      chartOptions: _vm.milesChart.chartOptions,
      chartData: _vm.milesChart.chartData,
      chartPlugins: _vm.chartPlugins(false)
    }
  })], 1)], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=template&id=5762baf0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=template&id=5762baf0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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

  return _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vx-card", [_c("h4", {
    staticClass: "card-heading py-2"
  }, [_vm._v("CUSTOMER")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.customerValues,
      filterDisplay: "row",
      filters: _vm.filter,
      loading: _vm.loading,
      responsiveLayout: "scroll",
      lazy: true,
      paginator: false,
      rows: _vm.defaultPageSize,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      rowsPerPageOptions: [10, 25, 50],
      currentPageReportTemplate: "Displaying {first} to {last} of {totalRecords} records",
      removableSort: "",
      sortField: "revenue",
      sortOrder: -1,
      globalFilterFields: ["customerName"]
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event, "customerValues");
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }])
  }, [_c("Column", {
    attrs: {
      field: "customerName",
      header: "Customer Name",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var customerName = _ref.data.customerName;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(customerName)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref2) {
        _objectDestructuringEmpty(_ref2);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "text"
          },
          model: {
            value: _vm.filter.name,
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "name", $$v);
            },
            expression: "filter.name"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "revenue",
      header: "Revenue",
      showFilterMenu: true,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var revenue = _ref3.data.revenue;
        return [_c("div", [_c("span", [_vm._v("$" + _vm._s(_vm._f("formatNumberWithCommas")(revenue)))])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "revenuePercentage",
      header: "Revenue Percentage",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var revenuePercentage = _ref4.data.revenuePercentage;
        return [_c("div", [_c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(revenuePercentage)) + "% ")])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "numberOfLoads",
      header: "No of Loads",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref5) {
        var numberOfLoads = _ref5.data.numberOfLoads;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(numberOfLoads)
          }
        })])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "ratePerMile",
      header: "Rate Per Mile",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref6) {
        var ratePerMile = _ref6.data.ratePerMile;
        return [_c("div", [_c("span", [_vm._v("$" + _vm._s(_vm._f("formatNumberWithCommas")(ratePerMile)))])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "miles",
      header: "Miles",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref7) {
        var miles = _ref7.data.miles;
        return [_c("div", [_c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumberWithCommas")(miles)) + " ")])])];
      }
    }])
  })], 1)], 1)], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=template&id=54feb01f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=template&id=54feb01f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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

  return _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("vx-card", [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("DISPATCHER")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.dispatcherValues,
      filterDisplay: "row",
      filters: _vm.filter,
      loading: _vm.loading,
      responsiveLayout: "scroll",
      lazy: true,
      paginator: false,
      rows: _vm.defaultPageSize,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      rowsPerPageOptions: [10, 25, 50],
      currentPageReportTemplate: "Displaying {first} to {last} of {totalRecords} records",
      sortField: "revenue",
      sortOrder: -1,
      removableSort: "",
      globalFilterFields: ["dispatcherName"]
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event, "dispatcherValues");
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }])
  }, [_c("Column", {
    attrs: {
      field: "dispatcherName",
      header: "Dispatcher Name",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var dispatcherName = _ref.data.dispatcherName;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(dispatcherName)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref2) {
        _objectDestructuringEmpty(_ref2);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "text"
          },
          model: {
            value: _vm.filter.name,
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "name", $$v);
            },
            expression: "filter.name"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "revenue",
      header: "Revenue",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var revenue = _ref3.data.revenue;
        return [_c("div", [_c("span", [_vm._v("$" + _vm._s(_vm._f("formatNumberWithCommas")(revenue)))])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "revenuePercentage",
      header: "Revenue Percentage",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var revenuePercentage = _ref4.data.revenuePercentage;
        return [_c("div", [_c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(revenuePercentage)) + "% ")])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "numberOfLoads",
      header: "No of Loads",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref5) {
        var numberOfLoads = _ref5.data.numberOfLoads;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(numberOfLoads)
          }
        })])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "ratePerMile",
      header: "Rate Per Mile",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref6) {
        var ratePerMile = _ref6.data.ratePerMile;
        return [_c("div", [_c("span", [_vm._v("$" + _vm._s(_vm._f("formatNumberWithCommas")(ratePerMile)))])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "miles",
      header: "Miles",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref7) {
        var miles = _ref7.data.miles;
        return [_c("div", [_c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumberWithCommas")(miles)) + " ")])])];
      }
    }])
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-8 md:w-1/2 md:mt-0"
  }, [_c("vx-card", [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("CHART")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("LineChart", {
    ref: "dispatcherOverviewChart",
    attrs: {
      chartOptions: _vm.dispatcherOverviewChart.chartOptions,
      chartData: _vm.dispatcherOverviewChart.chartData,
      chartPlugins: _vm.lineChartPlugins
    }
  })], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=template&id=5d0b197e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=template&id=5d0b197e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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

  return _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vx-card", [_c("h4", {
    staticClass: "card-heading py-2"
  }, [_vm._v("DRIVER")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("DataTable", {
    key: _vm.defaultKey,
    attrs: {
      value: _vm.driverValues,
      filterDisplay: "row",
      filters: _vm.filter,
      loading: _vm.loading,
      responsiveLayout: "scroll",
      lazy: true,
      paginator: false,
      rows: _vm.defaultPageSize,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      rowsPerPageOptions: [10, 25, 50],
      currentPageReportTemplate: "Displaying {first} to {last} of {totalRecords} records",
      sortField: _vm.sortBy.sortField,
      sortOrder: _vm.sortBy.sortOrder,
      removableSort: "",
      globalFilterFields: ["driverName"]
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event, "driverValues");
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }])
  }, _vm._l(_vm.getTableCols, function (col) {
    return _c("Column", {
      key: col.field,
      attrs: {
        field: col.field,
        header: col.header,
        showFilterMenu: false,
        sortable: col.isSortable
      },
      scopedSlots: _vm._u([{
        key: "body",
        fn: function fn(_ref) {
          var value = _ref.data[col.field];
          return [value != null ? _c("div", [col.field === "tags" ? _c("span", [_vm._v(_vm._s(_vm.tagNames(value)))]) : ["miles", "gallons", "mpg", "totalEngineHours", "runTimeEngineHours", "loadedMiles"].includes(col.field) ? _c("span", [_vm._v("\n                  " + _vm._s(_vm._f("formatNumberWithCommas")(value)) + "\n                ")]) : ["estimatedFuelCost", "revenue", "driverPay", "fuelExpense", "expense", "profit"].includes(col.field) ? _c("span", [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(value)) + "\n                ")]) : col.field === "idlePercent" ? _c("span", [_vm._v(_vm._s(value) + "%")]) : _c("span", [_vm._v(_vm._s(value))])]) : _vm._e()];
        }
      }, col.field === "driverName" || col.field === "tags" ? {
        key: "filter",
        fn: function fn(_ref2) {
          _objectDestructuringEmpty(_ref2);

          return [col.field === "driverName" ? _c("InputText", {
            staticClass: "p-column-filter",
            staticStyle: {
              width: "100px"
            },
            attrs: {
              type: "text"
            },
            model: {
              value: _vm.filter.name.value,
              callback: function callback($$v) {
                _vm.$set(_vm.filter.name, "value", $$v);
              },
              expression: "filter.name.value"
            }
          }) : col.field === "tags" ? _c("Dropdown", {
            staticClass: "p-column-filter",
            attrs: {
              options: _vm.defaultTags,
              dataKey: "uniqueId",
              placeholder: "Tag",
              optionLabel: "business_name",
              optionValue: "tag_id",
              showClear: true,
              appendTo: "body"
            },
            model: {
              value: _vm.filter.tagId.value,
              callback: function callback($$v) {
                _vm.$set(_vm.filter.tagId, "value", $$v);
              },
              expression: "filter.tagId.value"
            }
          }) : _vm._e()];
        }
      } : null], null, true)
    });
  }), 1)], 1)], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=template&id=0eee1a2c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=template&id=0eee1a2c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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

  return _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/2"
  }, [_c("vx-card", [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("MARKET WISE LOADS")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.marketWiseLoads,
      loading: _vm.loading,
      responsiveLayout: "scroll",
      lazy: true,
      paginator: false,
      rows: _vm.defaultPageSize,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      rowsPerPageOptions: [10, 25, 50],
      currentPageReportTemplate: "Displaying {first} to {last} of {totalRecords} records",
      sortField: "revenue",
      sortOrder: -1,
      removableSort: "",
      globalFilterFields: ["marketCity"]
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event, "marketWiseLoads");
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }])
  }, [_c("Column", {
    attrs: {
      field: "marketCity",
      header: "Market City",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var marketCity = _ref.data.marketCity;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(marketCity)
          }
        })])];
      }
    }, {
      key: "filter",
      fn: function fn(_ref2) {
        _objectDestructuringEmpty(_ref2);

        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "text"
          },
          model: {
            value: _vm.filter.name,
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "name", $$v);
            },
            expression: "filter.name"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "marketState",
      header: "Market State",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var marketState = _ref3.data.marketState;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(marketState)
          }
        })])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "revenue",
      header: "Revenue",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var revenue = _ref4.data.revenue;
        return [_c("div", [_c("span", [_vm._v("$" + _vm._s(_vm._f("formatNumberWithCommas")(revenue)))])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "miles",
      header: "Miles",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref5) {
        var miles = _ref5.data.miles;
        return [_c("div", [_c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumberWithCommas")(miles)) + " ")])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "ratePerMile",
      header: "Rate Per Mile",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref6) {
        var ratePerMile = _ref6.data.ratePerMile;
        return [_c("div", [_c("span", [_vm._v("$" + _vm._s(_vm._f("formatNumberWithCommas")(ratePerMile)))])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "numberOfLoads",
      header: "No of Loads",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref7) {
        var numberOfLoads = _ref7.data.numberOfLoads;
        return [_c("div", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumberWithCommas")(numberOfLoads)))])])];
      }
    }])
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-8 md:w-1/2 md:mt-0"
  }, [_c("vx-card", [_c("h4", {
    staticClass: "card-heading"
  }, [_vm._v("MOST RUN LANES")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.mostRunLanes,
      loading: _vm.loading,
      responsiveLayout: "scroll",
      lazy: true,
      paginator: false,
      rows: _vm.defaultPageSize,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      rowsPerPageOptions: [10, 25, 50],
      currentPageReportTemplate: "Displaying {first} to {last} of {totalRecords} records",
      sortField: "revenue",
      sortOrder: -1,
      removableSort: ""
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event, "mostRunLanes");
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }])
  }, [_c("Column", {
    attrs: {
      field: "originCity",
      header: "Origin City",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref8) {
        var originCity = _ref8.data.originCity;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(originCity)
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
          model: {
            value: _vm.filter.originName,
            callback: function callback($$v) {
              _vm.$set(_vm.filter, "originName", $$v);
            },
            expression: "filter.originName"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "originState",
      header: "Origin State",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref10) {
        var originState = _ref10.data.originState;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(originState)
          }
        })])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "destinationCity",
      header: "Destination City",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref11) {
        var destinationCity = _ref11.data.destinationCity;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(destinationCity)
          }
        })])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "destinationState",
      header: "Destination State",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref12) {
        var destinationState = _ref12.data.destinationState;
        return [_c("div", [_c("span", {
          domProps: {
            textContent: _vm._s(destinationState)
          }
        })])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "revenue",
      header: "Revenue",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref13) {
        var revenue = _ref13.data.revenue;
        return [_c("div", [_c("span", [_vm._v("$" + _vm._s(_vm._f("formatNumberWithCommas")(revenue)))])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "miles",
      header: "Miles",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref14) {
        var miles = _ref14.data.miles;
        return [_c("div", [_c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumberWithCommas")(miles)) + " ")])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "ratePerMile",
      header: "Rate Per Mile",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref15) {
        var ratePerMile = _ref15.data.ratePerMile;
        return [_c("div", [_c("span", [_vm._v("$" + _vm._s(_vm._f("formatNumberWithCommas")(ratePerMile)))])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "numberOfLoads",
      header: "No of Loads",
      showFilterMenu: false,
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref16) {
        var numberOfLoads = _ref16.data.numberOfLoads;
        return [_c("div", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumberWithCommas")(numberOfLoads)))])])];
      }
    }])
  })], 1)], 1)], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=template&id=0e051f9c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=template&id=0e051f9c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);


var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.updatedPredictions.length && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_vm.ratePredictions[0]).length ? _c("div", {
    staticClass: "rates-estimates-result"
  }, [_c("div", {
    staticClass: "rates-history-chart"
  }, [_c("div", {
    staticClass: "mb-5 rate-history-title"
  }, [_vm._v("Rate History")]), _vm._v(" "), _c("LineChart", {
    ref: "rateHistoryChart",
    staticStyle: {
      height: "250px"
    },
    attrs: {
      chartOptions: _vm.rateHistoryChart.chartOptions,
      chartData: _vm.rateHistoryChart.chartData,
      chartPlugins: _vm.lineChartPlugins
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "rates-history"
  }, [_c("div", {
    staticClass: "last-rates"
  }, [_vm._l(_vm.updatedPredictions, function (prediction) {
    return [_c("div", {
      class: "last-".concat(prediction.days, "days rates-history-card")
    }, [_c("p", {
      staticClass: "history-card-title"
    }, [_vm._v("Last " + _vm._s(prediction.days) + " days")]), _vm._v(" "), _c("p", {
      staticClass: "history-value"
    }, [_vm._v("\n            " + _vm._s(_vm.formatAmount(prediction.targetBuyRate * prediction.distance)) + "\n          ")]), _vm._v(" "), _c("div", {
      staticClass: "history-bound"
    }, [_c("div", [_c("span", {
      staticClass: "bound-label"
    }, [_vm._v("LB")]), _vm._v(" "), _c("span", {
      staticClass: "bound-value"
    }, [_vm._v(_vm._s(_vm.formatAmount(prediction.lowBuyRate * prediction.distance)))])]), _vm._v(" "), _c("div", [_c("span", {
      staticClass: "bound-label"
    }, [_vm._v("UB")]), _vm._v(" "), _c("span", {
      staticClass: "bound-value"
    }, [_vm._v(_vm._s(_vm.formatAmount(prediction.highBuyRate * prediction.distance)))])])])])];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "target-rate"
  }, [_c("div", {
    staticClass: "rates-history-card target-rate-card"
  }, [_vm._m(0), _vm._v(" "), _c("p", {
    staticClass: "target-rate-value"
  }, [_vm._v("\n          " + _vm._s(_vm.formatAmount(_vm.ratePredictions[_vm.ratePredictions.length - 1].targetBuyRate * _vm.ratePredictions[_vm.ratePredictions.length - 1].distance)) + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "target-rate-level"
  }, [_c("div", {
    staticClass: "target-rate-confidence-label"
  }, [_c("p", {
    staticClass: "confidence-title"
  }, [_vm._v("\n              Confidence Level\n              "), _c("feather-icon", {
    staticClass: "chart-icon ml-2",
    attrs: {
      icon: "BarChart2Icon",
      svgClasses: "h-5 w-5"
    }
  })], 1), _vm._v(" "), _c("p", {
    staticClass: "confidence-value"
  }, [_vm._v(_vm._s(_vm.confidenceLevel))])]), _vm._v(" "), _c("vs-progress", {
    staticClass: "target-rate-confidence-progress",
    attrs: {
      percent: _vm.confidenceLevel,
      color: "#167625"
    }
  }, [_vm._v("\n            success\n          ")])], 1), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "bound-label"
  }, [_vm._v("Lower Bound")]), _vm._v(" "), _c("span", {
    staticClass: "bound-value"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.ratePredictions[_vm.ratePredictions.length - 1].lowBuyRate * _vm.ratePredictions[_vm.ratePredictions.length - 1].distance)))])]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "bound-label"
  }, [_vm._v("Upper Bound")]), _vm._v(" "), _c("span", {
    staticClass: "bound-value"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.ratePredictions[_vm.ratePredictions.length - 1].highBuyRate * _vm.ratePredictions[_vm.ratePredictions.length - 1].distance)))])]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "bound-label"
  }, [_vm._v("Fuel")]), _vm._v(" "), _c("span", {
    staticClass: "bound-value"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.ratePredictions[_vm.ratePredictions.length - 1].fuelRate * _vm.ratePredictions[_vm.ratePredictions.length - 1].distance)))])]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "bound-label"
  }, [_vm._v("Mileage")]), _vm._v(" "), _c("span", {
    staticClass: "bound-value"
  }, [_vm._v(_vm._s(_vm.ratePredictions[_vm.ratePredictions.length - 1].distance) + "\n            miles")])])])])])]) : _vm._e();
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "flex justify-between w-full"
  }, [_c("p", {
    staticClass: "target-rate-title"
  }, [_vm._v("Network Rate")]), _vm._v(" "), _c("a", {
    attrs: {
      href: "https://www.greenscreens.ai/",
      target: "_blank"
    }
  }, [_c("img", {
    staticClass: "object-contain w-32",
    attrs: {
      src: __webpack_require__(/*! ../../../../../../assets/images/logo/greenscreensaiLogo.png */ "./resources/assets/images/logo/greenscreensaiLogo.png")
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=template&id=998ebefa&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=template&id=998ebefa&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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

  return _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vx-card", [_c("h4", {
    staticClass: "card-heading py-2"
  }, [_vm._v("TRUCK")]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("DataTable", {
    key: _vm.defaultKey,
    attrs: {
      value: _vm.truckValues,
      filterDisplay: "row",
      filters: _vm.filter,
      loading: _vm.loading,
      responsiveLayout: "scroll",
      lazy: true,
      paginator: false,
      rows: _vm.defaultPageSize,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      rowsPerPageOptions: [10, 25, 50],
      currentPageReportTemplate: "Displaying {first} to {last} of {totalRecords} records",
      sortField: _vm.sortBy.sortField,
      sortOrder: _vm.sortBy.sortOrder,
      removableSort: "",
      globalFilterFields: ["truckNumber"]
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event, "truckValues");
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }])
  }, _vm._l(_vm.getTableCols, function (col) {
    return _c("Column", {
      key: col.field,
      attrs: {
        field: col.field,
        header: col.header,
        showFilterMenu: false,
        sortable: col.isSortable
      },
      scopedSlots: _vm._u([{
        key: "body",
        fn: function fn(_ref) {
          var value = _ref.data[col.field];
          return [value != null ? _c("div", [col.field === "tags" ? _c("span", [_vm._v(_vm._s(_vm.tagNames(value)))]) : ["miles", "gallons", "mpg", "totalEngineHours", "runTimeEngineHours", "loadedMiles"].includes(col.field) ? _c("span", [_vm._v("\n                  " + _vm._s(_vm._f("formatNumberWithCommas")(value)) + "\n                ")]) : ["estimatedFuelCost", "revenue", "ratePerMile"].includes(col.field) ? _c("span", [_vm._v("\n                  $" + _vm._s(_vm._f("formatNumberWithCommas")(value)) + "\n                ")]) : col.field === "idlePercent" ? _c("span", [_vm._v("\n                  " + _vm._s(value) + "%\n                ")]) : _c("span", [_vm._v(_vm._s(value))])]) : _vm._e()];
        }
      }, col.field === "truckNumber" || col.field === "tags" ? {
        key: "filter",
        fn: function fn(_ref2) {
          _objectDestructuringEmpty(_ref2);

          return [col.field === "truckNumber" ? _c("InputText", {
            staticClass: "p-column-filter",
            staticStyle: {
              width: "100px"
            },
            attrs: {
              type: "text"
            },
            model: {
              value: _vm.filter.number.value,
              callback: function callback($$v) {
                _vm.$set(_vm.filter.number, "value", $$v);
              },
              expression: "filter.number.value"
            }
          }) : col.field === "tags" ? _c("Dropdown", {
            staticClass: "p-column-filter",
            attrs: {
              options: _vm.defaultTags,
              dataKey: "uniqueId",
              placeholder: "Tag",
              optionLabel: "business_name",
              optionValue: "tag_id",
              showClear: true,
              appendTo: "body"
            },
            model: {
              value: _vm.filter.tagId.value,
              callback: function callback($$v) {
                _vm.$set(_vm.filter.tagId, "value", $$v);
              },
              expression: "filter.tagId.value"
            }
          }) : _vm._e()];
        }
      } : null], null, true)
    });
  }), 1)], 1)], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-6a81c1d5] .flatpickr-input {\n  min-width: 14rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "blue .filter-input[data-v-ed36ed02] {\n  min-width: 13.5rem;\n  display: flex;\n  align-items: center;\n  max-width: 300px;\n}[dir] blue .filter-input[data-v-ed36ed02] {\n  margin: 10px 0;\n}\n[data-v-ed36ed02] .info-card .vx-card__collapsible-content {\n  height: 100%;\n}\n[data-v-ed36ed02] .info-card .vx-card__collapsible-content .vx-card__body {\n  height: 100%;\n  display: grid;\n}\n[data-v-ed36ed02] .info-card .vx-card__collapsible-content .vx-card__body .title {\n  align-self: center;\n}\n[data-v-ed36ed02] .info-card .vx-card__collapsible-content .vx-card__body .dataset {\n  align-self: flex-end;\n  word-break: break-word;\n}\n.info-card[data-v-ed36ed02] {\n  flex: 1;\n}\n[dir] .info-card[data-v-ed36ed02] {\n  border-radius: 8px;\n  margin-top: 10px;\n  text-align: center;\n  box-shadow: none !important;\n}\n.info-card .title[data-v-ed36ed02] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #1f1f1f;\n}\n.info-card .dataset[data-v-ed36ed02] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #000000;\n}\n.tab-container[data-v-ed36ed02] {\n  display: flex;\n  overflow-x: hidden;\n}\n[dir] .tab-container[data-v-ed36ed02] {\n  margin-bottom: 20px;\n  padding-bottom: 8px;\n}\n.tab-container[data-v-ed36ed02]:hover {\n  overflow-x: scroll;\n}\n[dir] .tab-container[data-v-ed36ed02]:hover {\n  padding-bottom: 0px;\n}\n.tab-container[data-v-ed36ed02]::-webkit-scrollbar {\n  height: 8px;\n  overflow: visible;\n}\n[dir] .tab-container[data-v-ed36ed02]::-webkit-scrollbar-thumb {\n  border-style: solid;\n  border-color: transparent;\n  border-width: 4px;\n  background-color: #dadce0;\n  border-radius: 8px;\n  box-shadow: none;\n}\n.tab-container .tab[data-v-ed36ed02] {\n  font-size: 14px;\n  white-space: nowrap;\n}\n[dir] .tab-container .tab[data-v-ed36ed02] {\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.tab-container .tab.active[data-v-ed36ed02] {\n  font-weight: 600;\n  color: rgba(var(--vs-primary), 1);\n}\n[dir] .tab-container .tab.active[data-v-ed36ed02] {\n  border-bottom: 2px solid rgba(var(--vs-primary), 1);\n}\n.rates-estimates-card[data-v-ed36ed02] {\n  width: 100%;\n  -o-border-image: linear-gradient(180deg, #1877f2 0%, #27b3ed 65%, #2fd3eb 100%);\n     border-image: linear-gradient(180deg, #1877f2 0%, #27b3ed 65%, #2fd3eb 100%);\n  border-image-slice: 1;\n}\n[dir] .rates-estimates-card[data-v-ed36ed02] {\n  padding: 20px;\n  margin-bottom: 20px;\n  background: #e7f1fe;\n  border-width: 1.5px;\n  border-style: solid;\n}\n.rates-estimates-card .rates-card-title[data-v-ed36ed02] {\n  color: #1877f2;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 22px;\n}\n[dir] .rates-estimates-card .rates-card-title[data-v-ed36ed02] {\n  text-align: center;\n}\n.rates-estimates-card .rates-estimates-form[data-v-ed36ed02] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n}\n[dir] .rates-estimates-card .rates-estimates-form[data-v-ed36ed02] {\n  margin-top: 20px;\n}\n.rates-estimates-card .rates-estimates-form .quipment-type[data-v-ed36ed02] {\n  flex: 1;\n}\n.rates-estimates-card .rates-estimates-form .origin-location[data-v-ed36ed02],\n.rates-estimates-card .rates-estimates-form .destination-location[data-v-ed36ed02] {\n  width: 40%;\n}\n[dir] .rates-estimates-card .rates-estimates-form .origin-location[data-v-ed36ed02], [dir] .rates-estimates-card .rates-estimates-form .destination-location[data-v-ed36ed02] {\n  border-radius: 4px;\n}\n.rates-estimates-card .rates-estimates-form .get-rates-btn[data-v-ed36ed02] {\n  white-space: nowrap;\n  width: 15%;\n}\n[dir] .rates-estimates-card .rates-estimates-form .get-rates-btn[data-v-ed36ed02] {\n  padding: 0.75rem !important;\n  background: #1877f2 !important;\n  border-radius: 4px !important;\n}\n.equipment-type[data-v-ed36ed02] {\n  width: 200px;\n}\n[dir] .equipment-type[data-v-ed36ed02] {\n  background: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-heading[data-v-c2fcc5b6] {\n  font-weight: 500;\n  color: #000000;\n}\n@media (max-width: 1560px) {\n.cost-operation-card[data-v-c2fcc5b6] {\n    width: 100% !important;\n}\n.total-revenue-card[data-v-c2fcc5b6] {\n    width: 100% !important;\n}\n[dir] .total-revenue-card[data-v-c2fcc5b6] {\n    margin-top: 2rem !important;\n}\n}\n[data-v-c2fcc5b6] .vx-card__collapsible-content {\n  height: 100%;\n}\n[data-v-c2fcc5b6] .vx-card__collapsible-content .vx-card__body {\n  height: 100%;\n}\n[data-v-c2fcc5b6] .info-group-card .vx-card__body {\n  display: grid;\n}\n[data-v-c2fcc5b6] .total-profit-card .info-card .vx-card__body {\n  align-items: flex-start !important;\n}\n[data-v-c2fcc5b6] .total-profit-card .info-card .vx-card__body .title {\n  color: #0f0f10 !important;\n}\n[dir=ltr][data-v-c2fcc5b6] .total-profit-card .info-card .vx-card__body .title {\n  text-align: left;\n}\n[dir=rtl][data-v-c2fcc5b6] .total-profit-card .info-card .vx-card__body .title {\n  text-align: right;\n}\n[data-v-c2fcc5b6] .info-card .vx-card__body {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.info-card[data-v-c2fcc5b6] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n[dir] .info-card[data-v-c2fcc5b6] {\n  border-radius: 8px;\n  margin-top: 10px;\n  text-align: center;\n  box-shadow: none !important;\n}\n.info-card .vx-card__body[data-v-c2fcc5b6] {\n  display: flex;\n  flex-direction: column;\n}\n.info-card .title[data-v-c2fcc5b6] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #1f1f1f;\n}\n.info-card .dataset[data-v-c2fcc5b6] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #000000;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-heading[data-v-5762baf0] {\n  color: #828282;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-heading[data-v-54feb01f] {\n  color: #828282;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-heading[data-v-5d0b197e] {\n  color: #828282;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-heading[data-v-0eee1a2c] {\n  color: #828282;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rates-estimates-result[data-v-0e051f9c] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: 8px;\n}[dir] .rates-estimates-result[data-v-0e051f9c] {\n  margin-top: 20px;\n}\n@media (max-width: 1073px) {\n.rates-estimates-result[data-v-0e051f9c] {\n    flex-direction: column;\n}\n.rates-estimates-result .rates-history-chart[data-v-0e051f9c] {\n    width: 100%;\n    max-width: 100% !important;\n}\n.rates-estimates-result .rates-history[data-v-0e051f9c] {\n    width: 100%;\n}\n}\n.rates-estimates-result .rates-history-chart[data-v-0e051f9c] {\n  flex: 1;\n  max-width: 50%;\n  height: 300px;\n}\n[dir] .rates-estimates-result .rates-history-chart[data-v-0e051f9c] {\n  background-color: white;\n  padding: 7.86px 12.6px;\n}\n.rates-estimates-result .rates-history-chart .rate-history-title[data-v-0e051f9c] {\n  color: var(--Black, #000);\n  font-size: 19.755px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.rates-estimates-result .rates-history[data-v-0e051f9c] {\n  flex: 1;\n  display: flex;\n  align-items: stretch;\n  gap: 8px;\n}\n.rates-estimates-result .rates-history .last-rates[data-v-0e051f9c] {\n  flex: 3;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.rates-estimates-result .rates-history .target-rate[data-v-0e051f9c] {\n  flex: 2;\n}\n.rates-estimates-result .rates-history .rates-history-card[data-v-0e051f9c] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n}\n[dir] .rates-estimates-result .rates-history .rates-history-card[data-v-0e051f9c] {\n  padding: 15px 10px;\n  border-radius: 3.95px;\n  box-shadow: 0px 1.98px 9.88px 0px rgba(0, 0, 0, 0.1019607843);\n  background-color: #ffffff !important;\n}\n.rates-estimates-result .rates-history .rates-history-card .history-card-title[data-v-0e051f9c] {\n  font-size: 13.83px;\n  line-height: 21.73px;\n  align-self: flex-start;\n  font-weight: 400;\n  color: #71717a;\n}\n.rates-estimates-result .rates-history .rates-history-card .history-bound[data-v-0e051f9c] {\n  display: flex;\n  gap: 14.82px;\n  align-items: center;\n}\n.rates-estimates-result .rates-history .rates-history-card .history-bound .bound-label[data-v-0e051f9c] {\n  font-size: 9.88px;\n  font-weight: 400;\n  line-height: 21.73px;\n  color: #71717a;\n}\n.rates-estimates-result .rates-history .rates-history-card .history-bound .bound-value[data-v-0e051f9c] {\n  font-size: 9.88px;\n  font-weight: 600;\n  line-height: 21.73px;\n  color: #18181a;\n}\n.rates-estimates-result .rates-history .rates-history-card .history-value[data-v-0e051f9c] {\n  font-size: 19.75px;\n  line-height: 21.73px;\n  font-weight: 700;\n  color: #18181a;\n}\n[dir] .rates-estimates-result .rates-history .rates-history-card.last-3days[data-v-0e051f9c] {\n  border: 1px solid #500079;\n}\n[dir] .rates-estimates-result .rates-history .rates-history-card.last-7days[data-v-0e051f9c] {\n  border: 1px solid #6e0093;\n}\n[dir] .rates-estimates-result .rates-history .rates-history-card.last-15days[data-v-0e051f9c] {\n  border: 1px solid #b72111;\n}\n.rates-estimates-result .rates-history .rates-history-card.last-30days[data-v-0e051f9c] {\n  border-image-slice: 1;\n  border-image-source: linear-gradient(180deg, #1877f2 0%, #27b3ed 65%, #2fd3eb 100%);\n}\n[dir] .rates-estimates-result .rates-history .rates-history-card.last-30days[data-v-0e051f9c] {\n  border: 0.99px solid;\n}\n.rates-estimates-result .rates-history .rates-history-card.target-rate-card[data-v-0e051f9c] {\n  align-items: flex-start;\n}\n[dir] .rates-estimates-result .rates-history .rates-history-card.target-rate-card[data-v-0e051f9c] {\n  border: 1px solid #208d28;\n  background-color: #f5fff0 !important;\n  box-shadow: 0px 7.9px 31.61px 0px rgba(0, 0, 0, 0.0784313725);\n  box-shadow: 0px 1.98px 19.75px 0px rgba(0, 0, 0, 0.0392156863);\n}\n.rates-estimates-result .rates-history .rates-history-card.target-rate-card .target-rate-title[data-v-0e051f9c] {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 21.73px;\n  color: #050505;\n}\n.rates-estimates-result .rates-history .rates-history-card.target-rate-card .target-rate-value[data-v-0e051f9c] {\n  font-size: 19.75px;\n  font-weight: 700;\n  line-height: 21.73px;\n  color: #050505;\n}\n.rates-estimates-result .rates-history .rates-history-card.target-rate-card .target-rate-level[data-v-0e051f9c] {\n  width: 100%;\n}\n.rates-estimates-result .rates-history .rates-history-card.target-rate-card .target-rate-level .target-rate-confidence-label[data-v-0e051f9c] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.rates-estimates-result .rates-history .rates-history-card.target-rate-card .target-rate-level .target-rate-confidence-label .confidence-title[data-v-0e051f9c] {\n  display: flex;\n  align-items: flex-end;\n  font-size: 11.85px;\n  line-height: 21.73px;\n  color: #141415;\n}\n.rates-estimates-result .rates-history .rates-history-card.target-rate-card .target-rate-level .target-rate-confidence-label .confidence-title .chart-icon[data-v-0e051f9c] {\n  color: #208d28;\n}\n[dir] .rates-estimates-result .rates-history .rates-history-card.target-rate-card .target-rate-level .target-rate-confidence-label .confidence-title .chart-icon[data-v-0e051f9c] {\n  padding: 5.65px;\n  background-color: #e3fad6;\n  border-radius: 3.3px;\n}\n.rates-estimates-result .rates-history .rates-history-card.target-rate-card .target-rate-level .target-rate-confidence-label .confidence-value[data-v-0e051f9c] {\n  font-size: 15.8px;\n  font-weight: 600;\n  line-height: 21.73px;\n  color: #18181a;\n}\n.rates-estimates-result .rates-history .rates-history-card .bound-label[data-v-0e051f9c] {\n  font-size: 11.85px;\n  line-height: 21.73px;\n  color: #71717a;\n}\n.rates-estimates-result .rates-history .rates-history-card .bound-value[data-v-0e051f9c] {\n  font-size: 11.85px;\n  font-weight: 600 !important;\n  line-height: 21.73px;\n  color: #18181a;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-heading[data-v-998ebefa] {\n  color: #828282;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true&");

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

/***/ "./resources/assets/images/dashboard/Group_2075.svg":
/*!**********************************************************!*\
  !*** ./resources/assets/images/dashboard/Group_2075.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Group_2075.svg?4c7edf533fc6d7b4bd0f575e2d669526";

/***/ }),

/***/ "./resources/assets/images/dashboard/calendar.svg":
/*!********************************************************!*\
  !*** ./resources/assets/images/dashboard/calendar.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/calendar.svg?5dfb0310b7a73b806df5d490bc01bf10";

/***/ }),

/***/ "./resources/assets/images/dashboard/chart.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/dashboard/chart.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/chart.png?713b7b87ea8c896f3695d95f65ecf7a0";

/***/ }),

/***/ "./resources/assets/images/dashboard/credit.svg":
/*!******************************************************!*\
  !*** ./resources/assets/images/dashboard/credit.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/credit.svg?df3a7b66a77da7c9357b5a45837fb7c0";

/***/ }),

/***/ "./resources/assets/images/dashboard/credit_blue.svg":
/*!***********************************************************!*\
  !*** ./resources/assets/images/dashboard/credit_blue.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/credit_blue.svg?652d6ab46e2158df245f34eb7097b8bf";

/***/ }),

/***/ "./resources/assets/images/dashboard/flag.svg":
/*!****************************************************!*\
  !*** ./resources/assets/images/dashboard/flag.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/flag.svg?fa972a260ff670f05334f728937b8cf1";

/***/ }),

/***/ "./resources/assets/images/logo/greenscreensaiLogo.png":
/*!*************************************************************!*\
  !*** ./resources/assets/images/logo/greenscreensaiLogo.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/greenscreensaiLogo.png?2dabe4b0f3fc99a391982db344e535ff";

/***/ }),

/***/ "./resources/js/src/components/charts/PieChart.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/charts/PieChart.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieChart.vue?vue&type=script&lang=js& */ "./resources/js/src/components/charts/PieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  "008fe35c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/charts/PieChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/charts/PieChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/components/charts/PieChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PieChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/charts/PieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/mixins/setPlaceMixin.js":
/*!**************************************************!*\
  !*** ./resources/js/src/mixins/setPlaceMixin.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    setPlace: function setPlace(place) {
      var returnNullInsteadOfEmptyString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Initialize variables to store address components
      var address = returnNullInsteadOfEmptyString ? null : '';
      var city = returnNullInsteadOfEmptyString ? null : '';
      var state = returnNullInsteadOfEmptyString ? null : '';
      var zipCode = returnNullInsteadOfEmptyString ? null : '';

      if (!this.verifyPlaceInput(place)) {
        return {
          address: address,
          city: city,
          state: state,
          zipCode: zipCode,
          postalCode: zipCode,
          latitude: null,
          longitude: null
        };
      } // Extract the address from the formatted_address property


      address = place.formatted_address.split(', ').slice(0, -3).join(', '); // If the address is empty, use the first component from formatted_address

      if (!address) {
        address = place.formatted_address.split(', ')[0];
      } // Extract address components from the address_components array


      var addressComponents = place.address_components || [];
      addressComponents.forEach(function (addressComponent) {
        var types = addressComponent.types || [];

        if (types.includes('locality')) {
          city = addressComponent.long_name;
        } else if (!city && types.includes('neighborhood')) {
          city = addressComponent.long_name;
        }

        if (types.includes('administrative_area_level_1')) {
          state = addressComponent.short_name;
        }

        if (types.includes('postal_code')) {
          zipCode = addressComponent.short_name;
        }
      }); // Extract latitude and longitude from the geometry

      var latitude = place.geometry.location.lat();
      var longitude = place.geometry.location.lng(); // Return the extracted address components as an object

      return {
        address: address,
        city: city,
        state: state,
        zipCode: zipCode,
        postalCode: zipCode,
        latitude: latitude,
        longitude: longitude
      };
    },

    /**
     * Verifies if the given place object has a valid formatted address and geometry.
     *
     * @param {Object} place - The place object to be verified.
     * @return {boolean} Returns true if the place object has a valid formatted address and geometry, otherwise false.
     */
    verifyPlaceInput: function verifyPlaceInput(place) {
      return place && place.formatted_address && place.geometry;
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDashboard_vue_vue_type_template_id_6a81c1d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=template&id=6a81c1d5&scoped=true& */ "./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=template&id=6a81c1d5&scoped=true&");
/* harmony import */ var _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdminDashboard_vue_vue_type_style_index_0_id_6a81c1d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true& */ "./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminDashboard_vue_vue_type_template_id_6a81c1d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminDashboard_vue_vue_type_template_id_6a81c1d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6a81c1d5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_id_6a81c1d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=style&index=0&id=6a81c1d5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_id_6a81c1d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_id_6a81c1d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_id_6a81c1d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_id_6a81c1d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=template&id=6a81c1d5&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=template&id=6a81c1d5&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_6a81c1d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=template&id=6a81c1d5&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Admin/AdminDashboard.vue?vue&type=template&id=6a81c1d5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_6a81c1d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_6a81c1d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/Dashboard.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/Dashboard.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/EmptyDashboard.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/EmptyDashboard.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmptyDashboard_vue_vue_type_template_id_4712fbb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyDashboard.vue?vue&type=template&id=4712fbb7&scoped=true& */ "./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=template&id=4712fbb7&scoped=true&");
/* harmony import */ var _EmptyDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyDashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmptyDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmptyDashboard_vue_vue_type_template_id_4712fbb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmptyDashboard_vue_vue_type_template_id_4712fbb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4712fbb7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dashboard/EmptyDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=template&id=4712fbb7&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=template&id=4712fbb7&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyDashboard_vue_vue_type_template_id_4712fbb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyDashboard.vue?vue&type=template&id=4712fbb7&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/EmptyDashboard.vue?vue&type=template&id=4712fbb7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyDashboard_vue_vue_type_template_id_4712fbb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyDashboard_vue_vue_type_template_id_4712fbb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maintenance_vue_vue_type_template_id_054a4192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maintenance.vue?vue&type=template&id=054a4192& */ "./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=template&id=054a4192&");
/* harmony import */ var _Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maintenance.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Maintenance_vue_vue_type_template_id_054a4192___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Maintenance_vue_vue_type_template_id_054a4192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Maintenance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=template&id=054a4192&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=template&id=054a4192& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_template_id_054a4192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Maintenance.vue?vue&type=template&id=054a4192& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/Maintenance/Maintenance.vue?vue&type=template&id=054a4192&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_template_id_054a4192___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_template_id_054a4192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SuperAdminDashboard_vue_vue_type_template_id_90859996_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuperAdminDashboard.vue?vue&type=template&id=90859996&scoped=true& */ "./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=template&id=90859996&scoped=true&");
/* harmony import */ var _SuperAdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuperAdminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SuperAdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SuperAdminDashboard_vue_vue_type_template_id_90859996_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SuperAdminDashboard_vue_vue_type_template_id_90859996_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "90859996",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SuperAdminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=template&id=90859996&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=template&id=90859996&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_template_id_90859996_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SuperAdminDashboard.vue?vue&type=template&id=90859996&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/SuperAdmin/SuperAdminDashboard.vue?vue&type=template&id=90859996&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_template_id_90859996_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_template_id_90859996_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WarehouseOperator_vue_vue_type_template_id_96e57bc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WarehouseOperator.vue?vue&type=template&id=96e57bc2& */ "./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=template&id=96e57bc2&");
/* harmony import */ var _WarehouseOperator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WarehouseOperator.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WarehouseOperator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WarehouseOperator_vue_vue_type_template_id_96e57bc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WarehouseOperator_vue_vue_type_template_id_96e57bc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseOperator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WarehouseOperator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseOperator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=template&id=96e57bc2&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=template&id=96e57bc2& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseOperator_vue_vue_type_template_id_96e57bc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WarehouseOperator.vue?vue&type=template&id=96e57bc2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dashboard/WarehouseOperator/WarehouseOperator.vue?vue&type=template&id=96e57bc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseOperator_vue_vue_type_template_id_96e57bc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WarehouseOperator_vue_vue_type_template_id_96e57bc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/Index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_ed36ed02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=ed36ed02&scoped=true& */ "./resources/js/src/views/pages/home-tab/Index.vue?vue&type=template&id=ed36ed02&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/home-tab/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_ed36ed02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true& */ "./resources/js/src/views/pages/home-tab/Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_ed36ed02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_ed36ed02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ed36ed02",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/home-tab/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_ed36ed02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=style&index=0&id=ed36ed02&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_ed36ed02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_ed36ed02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_ed36ed02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_ed36ed02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/Index.vue?vue&type=template&id=ed36ed02&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/Index.vue?vue&type=template&id=ed36ed02&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_ed36ed02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=ed36ed02&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/Index.vue?vue&type=template&id=ed36ed02&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_ed36ed02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_ed36ed02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyOverviewTab_vue_vue_type_template_id_c2fcc5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyOverviewTab.vue?vue&type=template&id=c2fcc5b6&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=template&id=c2fcc5b6&scoped=true&");
/* harmony import */ var _CompanyOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyOverviewTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyOverviewTab_vue_vue_type_style_index_0_id_c2fcc5b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanyOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyOverviewTab_vue_vue_type_template_id_c2fcc5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyOverviewTab_vue_vue_type_template_id_c2fcc5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c2fcc5b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyOverviewTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_style_index_0_id_c2fcc5b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=style&index=0&id=c2fcc5b6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_style_index_0_id_c2fcc5b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_style_index_0_id_c2fcc5b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_style_index_0_id_c2fcc5b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_style_index_0_id_c2fcc5b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=template&id=c2fcc5b6&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=template&id=c2fcc5b6&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_template_id_c2fcc5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyOverviewTab.vue?vue&type=template&id=c2fcc5b6&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CompanyOverviewTab.vue?vue&type=template&id=c2fcc5b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_template_id_c2fcc5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyOverviewTab_vue_vue_type_template_id_c2fcc5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerOverviewTab_vue_vue_type_template_id_5762baf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerOverviewTab.vue?vue&type=template&id=5762baf0&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=template&id=5762baf0&scoped=true&");
/* harmony import */ var _CustomerOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerOverviewTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomerOverviewTab_vue_vue_type_style_index_0_id_5762baf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomerOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerOverviewTab_vue_vue_type_template_id_5762baf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerOverviewTab_vue_vue_type_template_id_5762baf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5762baf0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerOverviewTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_style_index_0_id_5762baf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=style&index=0&id=5762baf0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_style_index_0_id_5762baf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_style_index_0_id_5762baf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_style_index_0_id_5762baf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_style_index_0_id_5762baf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=template&id=5762baf0&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=template&id=5762baf0&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_template_id_5762baf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerOverviewTab.vue?vue&type=template&id=5762baf0&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/CustomerOverviewTab.vue?vue&type=template&id=5762baf0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_template_id_5762baf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOverviewTab_vue_vue_type_template_id_5762baf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DispatcherOverviewTab_vue_vue_type_template_id_54feb01f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DispatcherOverviewTab.vue?vue&type=template&id=54feb01f&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=template&id=54feb01f&scoped=true&");
/* harmony import */ var _DispatcherOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DispatcherOverviewTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DispatcherOverviewTab_vue_vue_type_style_index_0_id_54feb01f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DispatcherOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DispatcherOverviewTab_vue_vue_type_template_id_54feb01f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DispatcherOverviewTab_vue_vue_type_template_id_54feb01f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "54feb01f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DispatcherOverviewTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_style_index_0_id_54feb01f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=style&index=0&id=54feb01f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_style_index_0_id_54feb01f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_style_index_0_id_54feb01f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_style_index_0_id_54feb01f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_style_index_0_id_54feb01f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=template&id=54feb01f&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=template&id=54feb01f&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_template_id_54feb01f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DispatcherOverviewTab.vue?vue&type=template&id=54feb01f&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DispatcherOverviewTab.vue?vue&type=template&id=54feb01f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_template_id_54feb01f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DispatcherOverviewTab_vue_vue_type_template_id_54feb01f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DriverOverviewTab_vue_vue_type_template_id_5d0b197e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DriverOverviewTab.vue?vue&type=template&id=5d0b197e&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=template&id=5d0b197e&scoped=true&");
/* harmony import */ var _DriverOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DriverOverviewTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DriverOverviewTab_vue_vue_type_style_index_0_id_5d0b197e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DriverOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DriverOverviewTab_vue_vue_type_template_id_5d0b197e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DriverOverviewTab_vue_vue_type_template_id_5d0b197e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5d0b197e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverOverviewTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_style_index_0_id_5d0b197e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=style&index=0&id=5d0b197e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_style_index_0_id_5d0b197e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_style_index_0_id_5d0b197e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_style_index_0_id_5d0b197e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_style_index_0_id_5d0b197e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=template&id=5d0b197e&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=template&id=5d0b197e&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_template_id_5d0b197e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverOverviewTab.vue?vue&type=template&id=5d0b197e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/DriverOverviewTab.vue?vue&type=template&id=5d0b197e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_template_id_5d0b197e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverOverviewTab_vue_vue_type_template_id_5d0b197e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MarketOverviewTab_vue_vue_type_template_id_0eee1a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarketOverviewTab.vue?vue&type=template&id=0eee1a2c&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=template&id=0eee1a2c&scoped=true&");
/* harmony import */ var _MarketOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarketOverviewTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MarketOverviewTab_vue_vue_type_style_index_0_id_0eee1a2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MarketOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MarketOverviewTab_vue_vue_type_template_id_0eee1a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MarketOverviewTab_vue_vue_type_template_id_0eee1a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0eee1a2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MarketOverviewTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_style_index_0_id_0eee1a2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=style&index=0&id=0eee1a2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_style_index_0_id_0eee1a2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_style_index_0_id_0eee1a2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_style_index_0_id_0eee1a2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_style_index_0_id_0eee1a2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=template&id=0eee1a2c&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=template&id=0eee1a2c&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_template_id_0eee1a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MarketOverviewTab.vue?vue&type=template&id=0eee1a2c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/MarketOverviewTab.vue?vue&type=template&id=0eee1a2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_template_id_0eee1a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketOverviewTab_vue_vue_type_template_id_0eee1a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RateEstimatesResult_vue_vue_type_template_id_0e051f9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RateEstimatesResult.vue?vue&type=template&id=0e051f9c&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=template&id=0e051f9c&scoped=true&");
/* harmony import */ var _RateEstimatesResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RateEstimatesResult.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RateEstimatesResult_vue_vue_type_style_index_0_id_0e051f9c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss& */ "./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RateEstimatesResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RateEstimatesResult_vue_vue_type_template_id_0e051f9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RateEstimatesResult_vue_vue_type_template_id_0e051f9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e051f9c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RateEstimatesResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_style_index_0_id_0e051f9c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=style&index=0&id=0e051f9c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_style_index_0_id_0e051f9c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_style_index_0_id_0e051f9c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_style_index_0_id_0e051f9c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_style_index_0_id_0e051f9c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=template&id=0e051f9c&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=template&id=0e051f9c&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_template_id_0e051f9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RateEstimatesResult.vue?vue&type=template&id=0e051f9c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/RateEstimatesResult.vue?vue&type=template&id=0e051f9c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_template_id_0e051f9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RateEstimatesResult_vue_vue_type_template_id_0e051f9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TruckOverviewTab_vue_vue_type_template_id_998ebefa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckOverviewTab.vue?vue&type=template&id=998ebefa&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=template&id=998ebefa&scoped=true&");
/* harmony import */ var _TruckOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TruckOverviewTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TruckOverviewTab_vue_vue_type_style_index_0_id_998ebefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true& */ "./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TruckOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TruckOverviewTab_vue_vue_type_template_id_998ebefa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TruckOverviewTab_vue_vue_type_template_id_998ebefa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "998ebefa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckOverviewTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_style_index_0_id_998ebefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=style&index=0&id=998ebefa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_style_index_0_id_998ebefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_style_index_0_id_998ebefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_style_index_0_id_998ebefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_style_index_0_id_998ebefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=template&id=998ebefa&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=template&id=998ebefa&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_template_id_998ebefa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckOverviewTab.vue?vue&type=template&id=998ebefa&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/home-tab/components/TruckOverviewTab.vue?vue&type=template&id=998ebefa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_template_id_998ebefa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckOverviewTab_vue_vue_type_template_id_998ebefa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/home-tab/mixins/commonFunctions.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/home-tab/mixins/commonFunctions.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  filters: {
    formatNumberWithCommas: function formatNumberWithCommas(value) {
      if (!value) return value;
      var formattedValue = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_1__["parseFloatWithTrim"])(value);
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_1__["commaSeparatedValue"])(formattedValue);
    },
    formatNumber: function formatNumber(value) {
      if (!value) return value;
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_1__["parseFloatWithTrim"])(value);
    }
  },
  methods: {
    onSort: function onSort(_ref, valueKey) {
      var sortField = _ref.sortField,
          sortOrder = _ref.sortOrder;
      if (!this.rawResponse[valueKey]) return [];

      if (this.sortBy !== undefined) {
        this.sortBy = {
          sortField: sortField || null,
          sortOrder: sortOrder || null
        };
      }

      if (sortField && sortOrder) {
        (this[valueKey] || []).sort(function (a, b) {
          var valueA = a[sortField];
          var valueB = b[sortField];
          if (valueA === null || valueB === null) return 0;

          if (sortOrder === 1) {
            return valueA > valueB ? 1 : -1;
          } else {
            return valueA < valueB ? 1 : -1;
          }
        });
      } else {
        this[valueKey] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.rawResponse[valueKey]);

        if (this.driversFuelEnergyReports !== undefined || this.trucksFuelEnergyReports !== undefined) {
          this.initFuelEnergyReportFields();
        }
      }
    },
    tagNames: function tagNames(value) {
      var _this = this;

      if (!value || !value.length) return '';
      return value.map(function (_ref2) {
        var tagId = _ref2.tagId;
        var tag = (_this.tagOptions || []).find(function (tag) {
          return tag.tag_id === tagId;
        });
        return tag ? tag.business_name : '';
      }).join(', ');
    }
  },
  watch: {
    selectedDateRange: {
      handler: function handler(date) {
        if (date.split(' to ').length === 2) {
          this.initTab();
        }
      },
      deep: true
    },
    selectedTag: {
      handler: function handler() {
        this.initTab();
      },
      deep: true
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=65.js.map