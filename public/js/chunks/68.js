(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_pages_tripV2_planning_TimelineTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/pages/tripV2/planning/TimelineTab */ "./resources/js/src/views/pages/tripV2/planning/TimelineTab/index.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DispatchCalender',
  components: {
    TimelineTab: _views_pages_tripV2_planning_TimelineTab__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    editLoadSidebar: function editLoadSidebar(data) {
      this.$emit('editLoadSidebar', {
        loadId: data
      });
    },
    refreshPageContent: function refreshPageContent() {
      var _ref = this.$refs.timelineTab || {},
          refreshPageContent = _ref.refreshPageContent;

      if (refreshPageContent) {
        this.$refs.timelineTab.refreshPageContent();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/object/values */ "./node_modules/@babel/runtime/core-js/object/values.js");
/* harmony import */ var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/core-js/number/is-integer */ "./node_modules/@babel/runtime/core-js/number/is-integer.js");
/* harmony import */ var _babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _load_LoadSidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./load/LoadSidebar */ "./resources/js/src/views/pages/dispatch/load/LoadSidebar.vue");
/* harmony import */ var _components_PipelineFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/PipelineFilter */ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue");
/* harmony import */ var _Pipline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Pipline */ "./resources/js/src/views/pages/dispatch/Pipline.vue");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./List */ "./resources/js/src/views/pages/dispatch/List.vue");
/* harmony import */ var _Spreadsheet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Spreadsheet */ "./resources/js/src/views/pages/dispatch/Spreadsheet.vue");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Calendar */ "./resources/js/src/views/pages/dispatch/Calendar.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vue_popperjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vue-popperjs */ "./node_modules/vue-popperjs/dist/vue-popper.min.js");
/* harmony import */ var vue_popperjs__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(vue_popperjs__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var vue_popperjs_dist_vue_popper_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vue-popperjs/dist/vue-popper.css */ "./node_modules/vue-popperjs/dist/vue-popper.css");
/* harmony import */ var vue_popperjs_dist_vue_popper_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(vue_popperjs_dist_vue_popper_css__WEBPACK_IMPORTED_MODULE_22__);












function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var sourceSymbolKeys = _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dispatch',
  components: {
    Pipline: _Pipline__WEBPACK_IMPORTED_MODULE_16__["default"],
    List: _List__WEBPACK_IMPORTED_MODULE_17__["default"],
    LoadSidebar: _load_LoadSidebar__WEBPACK_IMPORTED_MODULE_14__["default"],
    FilterIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_20__["FilterIcon"],
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_20__["ChevronDownIcon"],
    Popper: vue_popperjs__WEBPACK_IMPORTED_MODULE_21___default.a,
    Spreadsheet: _Spreadsheet__WEBPACK_IMPORTED_MODULE_18__["default"],
    PipelineFilter: _components_PipelineFilter__WEBPACK_IMPORTED_MODULE_15__["default"],
    Calendar: _Calendar__WEBPACK_IMPORTED_MODULE_19__["default"],
    Calendar2: function Calendar2() {
      return __webpack_require__.e(/*! import() */ 80).then(__webpack_require__.bind(null, /*! ./Calendar2 */ "./resources/js/src/views/pages/dispatch/Calendar2.vue"));
    },
    PipelineSidebar: function PipelineSidebar() {
      return __webpack_require__.e(/*! import() */ 158).then(__webpack_require__.bind(null, /*! ./components/PipelineSidebar.vue */ "./resources/js/src/views/pages/dispatch/components/PipelineSidebar.vue"));
    }
  },
  data: function data() {
    var roles = _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].roles;
    return {
      massInvoiceNumber: null,
      massInvoicePopup: false,
      massInvoiceQbdPopup: false,
      selectedLoadsList: [],
      date: '',
      selected_tag: {
        business_name: 'All companies'
      },
      tagOptions: [],
      load_status: '',
      direction: '',
      filters: [],
      showsFilters: [],
      roleModify: [roles.admin, roles.dispatcher],
      roleDefaultListView: [roles.warehouse_operator],
      selectedColumnList: [],
      search: '',
      filtersOptions: ['Columns', 'Companies', 'Directions', 'Status'],
      selectedFiltersOptions: ['Columns', 'Companies', 'Directions', 'Status'],
      loadStatusOptions: [{
        label: 'All status',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].all
      }, {
        label: 'Open',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.open
      }, {
        label: 'Dispatched',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.assign
      }, {
        label: 'In transit',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.in_transit
      }, {
        label: 'Delivered',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.delivered
      }, {
        label: 'Invoice generated',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.invoice_created
      }, {
        label: 'Payment requested',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.invoice_sent
      }, {
        label: 'Paid',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.invoice_paid
      }, {
        label: 'Canceled',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.canceled
      }, {
        label: 'Deleted',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.deleted
      }],
      listColumnOptions: [],
      direction_options: [{
        label: 'All directions',
        value: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].all
      }, {
        label: 'Inbound',
        value: 'inbound'
      }, {
        label: 'Outbound',
        value: 'outbound'
      }],
      activeComponent: 'pipline',
      items: [{
        title: 'Pipeline',
        componentName: 'pipline',
        roles: [roles.admin, roles.dispatcher, roles.tag_operator]
      }, {
        title: 'List',
        componentName: 'list',
        roles: [roles.admin, roles.dispatcher, roles.tag_operator, roles.warehouse_operator]
      }, {
        title: 'Calendar',
        componentName: 'calendar',
        roles: [roles.admin, roles.dispatcher, roles.tag_operator, roles.warehouse_operator]
      }],
      // Flat Pikr Config
      flat_pikr_config: {
        mode: 'range',
        // Added 2 days to endDate because we change date query from pickup & delivery to delivery only to speed up.
        defaultDate: [new Date().fp_incr(-7), new Date().fp_incr(9)]
      },
      // Load Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      allDispatchers: null,
      allTags: null,
      pipelineFilter: null,
      isPipelineSidebarActive: false,
      defaultColumnOptions: ['Load', 'Load Reference', 'Internal Reference', 'Ship Date', 'Del. Date', 'Customer', 'Pick up', 'Delivery', 'Drivers', 'Notes', 'Load Status', 'Pickup No.', 'Delivery No.', 'Action']
    };
  },
  provide: function provide() {
    var _this = this;

    return {
      allDispatchers: function allDispatchers() {
        return _this.allDispatchers || [];
      },
      allTags: function allTags() {
        return _this.allTags || [];
      },
      allDrivers: function allDrivers() {
        return _this.allDrivers || [];
      },
      loadStatuses: function loadStatuses() {
        return _this.loadStatuses || [];
      },
      allTrucks: function allTrucks() {
        return _this.allTrucks || [];
      },
      allTrailers: function allTrailers() {
        return _this.allTrailers || [];
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapState"])('load', {
    allDriverTruckTrailerForLoadDriver: 'allDriverTruckTrailerForLoadDriver'
  }), Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapGetters"])('auth', ['userRole', 'userCustomization', 'companyFeatureAccess']), {
    filteredOptions: function filteredOptions() {
      var self = this;
      return this.filtersOptions.filter(function (data) {
        return data.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapGetters"])('customization', ['customization']), {
    isLoadDeleted: function isLoadDeleted() {
      var value = this.load_status.value;
      return value && value === 'deleted';
    },
    isNonSpreadsheetUi: function isNonSpreadsheetUi() {
      return ['list', 'pipline', 'calendar', 'calendar2'].includes(this.activeComponent);
    },
    currentUserCustomizations: function currentUserCustomizations() {
      if (!this.userCustomization || !this.userCustomization.loadPipeline) {
        return {
          filters: {}
        };
      }

      var _ref = this.userCustomization || {},
          _ref$loadPipeline = _ref.loadPipeline,
          show = _ref$loadPipeline.show,
          filters = _ref$loadPipeline.filters;

      return _objectSpread({}, show || {}, {
        filters: filters || {}
      });
    },
    loadStatuses: function loadStatuses() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.loadWithLabels;
    },
    allDrivers: function allDrivers() {
      var _ref2 = this.allDriverTruckTrailerForLoadDriver || {},
          _ref2$drivers = _ref2.drivers,
          drivers = _ref2$drivers === void 0 ? [] : _ref2$drivers;

      return drivers.map(function (_ref3) {
        var name = _ref3.name,
            id = _ref3.id,
            driver = _objectWithoutProperties(_ref3, ["name", "id"]);

        return _objectSpread({}, driver, {
          fullName: name,
          id: id
        });
      });
    },
    allTrucks: function allTrucks() {
      var _ref4 = this.allDriverTruckTrailerForLoadDriver || {},
          _ref4$trucks = _ref4.trucks,
          trucks = _ref4$trucks === void 0 ? [] : _ref4$trucks;

      return trucks;
    },
    allTrailers: function allTrailers() {
      var _ref5 = this.allDriverTruckTrailerForLoadDriver || {},
          _ref5$trailers = _ref5.trailers,
          trailers = _ref5$trailers === void 0 ? [] : _ref5$trailers;

      return trailers;
    },
    showCompanyInternalReferenceForCompanies: function showCompanyInternalReferenceForCompanies() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].showCompanyInternalReferenceForCompanies.includes(this.user.admin_company_detail_id);
    },
    dispatchListShowCompanyPickAndDeliveryNumbers: function dispatchListShowCompanyPickAndDeliveryNumbers() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].dispatchListShowCompanyPickAndDeliveryNumbers.includes(this.user.admin_company_detail_id);
    },
    filteredDispatchOptions: function filteredDispatchOptions() {
      if (this.companyFeatureAccess.includes('basic')) {
        return this.items.filter(function (i) {
          return i.title === 'Pipeline';
        });
      } else if ([36, 23, 307].includes(this.user.admin_company_detail_id)) {
        return this.items.map(function (i) {
          if (i.componentName == 'calendar') {
            i.componentName = 'calendar2';
          }

          return i;
        });
      } else {
        return this.items;
      }
    }
  }),
  created: function created() {
    this.setDefaultTabConfig();
    this.getTags(); // Needed for component as well as to pass to filters

    this.getAllDispatchers(); // Needed to be passed to filters

    this.initSavedPipelineFilters();
    this.configDateFlatPickr();

    if (!this.customization || this.customization.length == 0) {
      this.getCustomizations();
    }

    this.getAllDriverTruckTrailerForLoadDriver();
    this.selectedColumnList = _toConsumableArray(this.defaultColumnOptions);
    this.listColumnOptions = _toConsumableArray(this.defaultColumnOptions);

    if (!this.showCompanyInternalReferenceForCompanies) {
      this.selectedColumnList = this.selectedColumnList.filter(function (item) {
        return item !== 'Internal Reference';
      }); // Shall not let users see the column if they cannot use it.

      this.listColumnOptions = _toConsumableArray(this.selectedColumnList);
    }

    if (!this.dispatchListShowCompanyPickAndDeliveryNumbers) {
      this.selectedColumnList = this.selectedColumnList.filter(function (item) {
        return item !== 'Pickup No.' && item !== 'Delivery No.';
      });
    }
  },
  methods: {
    /**
     * Sets the default tab configuration based on the user's role and company details.
     */
    setDefaultTabConfig: function setDefaultTabConfig() {
      for (var key in this.roleDefaultListView) {
        var value = this.roleDefaultListView[key];

        if (value === this.userRole) {
          this.activeComponent = 'list';
          return;
        }
      }

      _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].listDefaultTabCompanies.includes(this.user.admin_company_detail_id) ? this.activeComponent = 'list' : this.activeComponent = 'pipline';
    },
    getAllDriverTruckTrailerForLoadDriver: function getAllDriverTruckTrailerForLoadDriver() {
      //Api called here to get all the driver truck trailer
      this.$store.dispatch('load/getAllDriverTruckTrailerForLoadDriver');
    },
    getCustomizations: function getCustomizations() {
      var _this2 = this;

      this.$store.dispatch('customization/getCustomizations').catch(function (error) {
        _this2.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      });
    },
    updateSelectedLoadsList: function updateSelectedLoadsList(selectedLoadsList) {
      this.selectedLoadsList = selectedLoadsList;
    },
    // Confirm Dialog
    onConfirm: function onConfirm(options) {
      this.$vs.dialog(_objectSpread({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes'
      }, options));
    },
    submitMassInvoice: function submitMassInvoice() {
      var _this3 = this;

      var loadArray = [];

      for (var i = 0; i < this.selectedLoadsList.length; ++i) {
        if (this.selectedLoadsList[i].status != _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.delivered && this.selectedLoadsList[i].status != _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.invoice_created) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Load ' + this.selectedLoadsList[i].load_unique_id + ' has to be in delivered or or invoice generated status.'
          });
          return;
        }

        loadArray.push(this.selectedLoadsList[i].load_id);
      }

      if (!this.submitMassInvoiceChecker(loadArray)) {
        return;
      }

      this.$vs.loading();
      var payload = {
        invoiceNumber: parseInt(this.massInvoiceNumber),
        loadIds: loadArray
      };
      this.$store.dispatch('load/generateMassInvoice', payload).then(function (response) {
        if (response.result) {
          _this3.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Mass invoice generated successfully'
          });
        }
      }).catch(function (error) {
        _this3.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 10000,
          text: error.response.data.message
        });
      }).finally(function () {
        _this3.$refs.components.refreshLoadList();

        _this3.massInvoicePopup = false;

        _this3.$vs.loading.close();
      });
    },
    submitMassInvoiceQbd: function submitMassInvoiceQbd() {
      var _this4 = this;

      var loadArray = this.selectedLoadsList.map(function (load) {
        return load.load_id;
      });

      if (!this.submitMassInvoiceChecker(loadArray)) {
        return;
      }

      for (var i = 0; i < this.selectedLoadsList.length; ++i) {
        var truckNumber = '';

        if (this.selectedLoadsList[i].drivers && this.selectedLoadsList[i].drivers.length) {
          this.selectedLoadsList[i].drivers.forEach(function (driver) {
            truckNumber += driver.truck.truck_number;
          });
        }

        if (!truckNumber) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Load ' + this.selectedLoadsList[i].load_unique_id + ' has no truck assigned.'
          });
          return;
        }
      }

      var payload = {
        invoiceNumber: parseInt(this.massInvoiceNumber),
        loadIds: loadArray
      };
      this.$store.dispatch('load/syncMassInvoiceToQbd', payload).then(function (response) {
        _this4.$vs.notify({
          color: 'success',
          title: 'Added to queue',
          text: 'Invoice sync request added to queue.'
        });
      }).catch(function (error) {
        _this4.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
          time: 10000
        });
      }).finally(function () {
        _this4.$refs.components.refreshLoadList();

        _this4.massInvoiceQbdPopup = false;
      });
    },
    onConfirmRequestMassInvoicePayment: function onConfirmRequestMassInvoicePayment() {
      var _this5 = this;

      var options = {
        title: 'Mass Invoice Payment Request',
        text: 'Are you sure you want to request mass invoice payment?',
        accept: function accept() {
          return _this5.requestMassInvoicePayment();
        }
      };
      this.onConfirm(options);
    },
    requestMassInvoicePayment: function requestMassInvoicePayment() {
      var _this6 = this;

      var loadArray = [];

      for (var i = 0; i < this.selectedLoadsList.length; ++i) {
        if (this.selectedLoadsList[i].status !== _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.invoice_sent && this.selectedLoadsList[i].status !== _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.invoice_created) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Load ' + this.selectedLoadsList[i].load_unique_id + ' has to be in payment requested or invoice generated status.'
          });
          return;
        }

        loadArray.push(this.selectedLoadsList[i].load_id);
      }

      if (!this.submitMassInvoiceChecker(loadArray, false)) {
        return;
      }
      /*
      // TODO: Should let backend return the separate invoice for mass invoice value, then turn this back on.
      const checkSameMassInvoice =
        this.selectedLoadsList.every(
          (item) =>
            item.invoice_file_name ===
            this.selectedLoadsList[0].invoice_file_name
        ) &&
        this.selectedLoadsList[0].invoice_file_name.startsWith("mass-invoice");
      if (!checkSameMassInvoice) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: "Selected loads do not have the same mass invoice pdf.",
        });
        return false;
      }
      */


      var payload = {
        loadIds: loadArray
      };
      this.$store.dispatch('load/requestMassInvoicePayment', payload).then(function (response) {
        if (response.result) {
          _this6.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Mass invoice payment requested.'
          });
        }
      }).catch(function (error) {
        _this6.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this6.$refs.components.refreshLoadList();
      });
    },
    onConfirmMultipleLoadsPaymentReceived: function onConfirmMultipleLoadsPaymentReceived() {
      var _this7 = this;

      var options = {
        title: 'Payment Received',
        text: 'Are you sure you want to mark selected loads as paid?',
        accept: function accept() {
          return _this7.multipleLoadsPaymentReceived();
        }
      };
      this.onConfirm(options);
    },
    multipleLoadsPaymentReceived: function multipleLoadsPaymentReceived() {
      var _this8 = this;

      var loadArray = [];

      for (var i = 0; i < this.selectedLoadsList.length; ++i) {
        if (this.selectedLoadsList[i].status !== _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].status.load.invoice_sent) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Load ' + this.selectedLoadsList[i].load_unique_id + ' has to be in payment requested status.'
          });
          return;
        }

        loadArray.push(this.selectedLoadsList[i].load_id);
      }

      var payload = {
        loadIds: loadArray
      };
      this.$store.dispatch('load/multipleLoadsPaymentReceived', payload).then(function (response) {
        if (response.result) {
          _this8.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Payment status updated.'
          });
        }
      }).catch(function (error) {
        _this8.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this8.$refs.components.refreshLoadList();
      });
    },
    onConfirmDeleteMultipleLoads: function onConfirmDeleteMultipleLoads() {
      var _this9 = this;

      var options = {
        title: 'Confirm Delete',
        color: 'danger',
        text: 'Are you sure you want to delete selected loads?',
        accept: function accept() {
          return _this9.deleteSelectedLoads();
        }
      };
      this.onConfirm(options);
    },
    submitMassInvoiceChecker: function submitMassInvoiceChecker(loadArray) {
      var _this10 = this;

      var checkInvoiceNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (loadArray.length < 2) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select at least two loads.'
        });
        return false;
      }

      if (checkInvoiceNumber) {
        if (!_babel_runtime_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_10___default()(parseFloat(this.massInvoiceNumber)) || this.massInvoiceNumber <= 0) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Please input a positive integer for invoice number.'
          });
          return false;
        }
      }

      var checkSameCustomer = this.selectedLoadsList.every(function (item) {
        return item.customer.customer_id === _this10.selectedLoadsList[0].customer.customer_id;
      });

      if (!checkSameCustomer) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Load customers not the same.'
        });
        return false;
      }

      var checkSameTag = this.selectedLoadsList.every(function (item) {
        return item.tag_id === _this10.selectedLoadsList[0].tag_id;
      });

      if (!checkSameTag) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Load tags not the same.'
        });
        return false;
      }

      return true;
    },
    checkColumnVisibility: function checkColumnVisibility(title) {
      if (title === 'Columns' && this.userRole === 'warehouse_operator') {
        return false;
      }

      return true;
    },
    // Remove Filters method with close btn
    removeFilter: function removeFilter(val) {
      var index = this.showsFilters.indexOf(val);

      if (index > -1) {
        this.showsFilters.splice(index, 1);

        if (val === this.selectedFiltersOptions[0]) {
          this.selectedColumnList = ['Load', 'Load Reference', 'Ship Date', 'Del. Date', 'Customer', 'Pick up', 'Delivery', 'Drivers', 'Notes', 'Load Status', 'Action'];
        } else if (val === this.selectedFiltersOptions[1]) {
          this.selected_tag = '';
        } else if (val === this.selectedFiltersOptions[2]) {
          this.direction = '';
        } else if (val === this.selectedFiltersOptions[3]) {
          this.load_status = '';
        } else {
          this.showsFilters = [];
        }
      }
    },
    // Toggle filters method
    handleFilterOption: function handleFilterOption(item) {
      if (!this.showsFilters.includes(item)) {
        this.showsFilters.push(item);
      }
    },
    changeComponent: function changeComponent(newComponent) {
      if (newComponent === this.activeComponent) return;
      this.load_status = this.loadStatusOptions[0];
      this.activeComponent = newComponent;
      this.isPipelineSidebarActive = false; // this.configDateFlatPickr()
    },
    getTags: function () {
      var _getTags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee() {
        var _ref6, payload, _ref7, allTags, currentUserTagIds, currentUserTags;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('tag/getAllTags');

              case 2:
                _ref6 = _context.sent;
                payload = _ref6.payload;
                _ref7 = payload || {}, allTags = _ref7.data;

                if (allTags) {
                  this.allTags = allTags;
                }

                this.tagOptions = [{
                  business_name: 'All companies'
                }];

                if (this.userRole != 'tag_operator') {
                  this.tagOptions.push({
                    tag_id: _config_constants__WEBPACK_IMPORTED_MODULE_11__["default"].parent,
                    business_name: 'Parent company'
                  });
                }

                _context.next = 10;
                return this.$store.dispatch('company-user/getCurrentUserTagIds');

              case 10:
                currentUserTagIds = _context.sent;

                if (currentUserTagIds.length > 0) {
                  currentUserTags = payload.data.filter(function (tag) {
                    return currentUserTagIds.includes(tag.tag_id);
                  });
                  this.tagOptions = _toConsumableArray(this.tagOptions).concat(_toConsumableArray(currentUserTags));
                } else {
                  this.tagOptions = _toConsumableArray(this.tagOptions).concat(_toConsumableArray(payload.data));
                }
                /*if (this.userRole == "tag_operator") {
                  const currentUserTagIds = await this.$store.dispatch(
                    "company-user/getCurrentUserTagIds"
                  );
                  const currentUserTags = payload.data.filter((tag) =>
                    currentUserTagIds.includes(tag.tag_id)
                  );
                  this.tagOptions = [
                    { business_name: "All companies" },
                    ...currentUserTags,
                  ];
                } else {
                  this.tagOptions = [
                    { business_name: "All companies" },
                    { tag_id: config.parent, business_name: "Parent company" },
                    ...payload.data,
                  ];
                }*/


              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getTags() {
        return _getTags.apply(this, arguments);
      };
    }(),
    getAllDispatchers: function () {
      var _getAllDispatchers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee2() {
        var _ref8, allDispatchers;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.$store.dispatch('company-user/getAllDispatchers');

              case 3:
                _ref8 = _context2.sent;
                allDispatchers = _ref8.payload.data;

                if (allDispatchers) {
                  this.allDispatchers = allDispatchers;
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      return function getAllDispatchers() {
        return _getAllDispatchers.apply(this, arguments);
      };
    }(),
    handleFlatPickerInput: function handleFlatPickerInput(selectedDates, dateStr, instance) {
      // if (selectedDates.length <= 1) return
      // this.configDateFlatPickr()
      this.handleFlatPicker(selectedDates, dateStr, instance);
      /*if (this.activeComponent == 'pipline') {
        this.handleFlatPickerForPiplin(selectedDates, dateStr, instance)
      } else {
        this.handleFlatPickerForList(selectedDates, dateStr, instance)
      }*/
    },
    handleFlatPicker: function handleFlatPicker(selectedDates, dateStr, instance) {
      this.date = dateStr;
      var selectedDateFormat = dateStr.split(' to ');
      var startDate = new Date(selectedDateFormat[0]);
      var skipDay = 396; // 13 months

      startDate.setDate(startDate.getDate() - skipDay);
      this.$set(this.flat_pikr_config, 'minDate', Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(startDate)));
      startDate.setDate(startDate.getDate() + skipDay * 2);
      this.$set(this.flat_pikr_config, 'maxDate', Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(startDate)));

      if (selectedDates.length >= 2) {
        this.$set(this.flat_pikr_config, 'minDate', '');
        this.$set(this.flat_pikr_config, 'maxDate', '');
      }
    },

    /*handleFlatPickerForPiplin (selectedDates, dateStr, instance) {
      this.date = dateStr
        const selectedDateFormat = dateStr.split(' to ')
      const startDate = new Date(selectedDateFormat[0])
      const skipDay = 30
        startDate.setDate(startDate.getDate() - skipDay)
      this.$set(this.flat_pikr_config, 'minDate', formatDate(new Date(startDate)))
        startDate.setDate(startDate.getDate() + (skipDay * 2))
      this.$set(this.flat_pikr_config, 'maxDate', formatDate(new Date(startDate)))
        if (selectedDates.length >= 2) {
        this.$set(this.flat_pikr_config, 'minDate', '')
        this.$set(this.flat_pikr_config, 'maxDate', '')
      }
    },
      handleFlatPickerForList (selectedDates, dateStr, instance) {
      this.date = dateStr
    },*/
    // Now this is only called when page is created.
    configDateFlatPickr: function configDateFlatPickr() {
      /*this.flat_pikr_config = this.flat_pikr_config_options[this.activeComponent]
        if (!this.flat_pikr_config) return*/
      var defaultDate = this.flat_pikr_config.defaultDate;
      this.date = "".concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(defaultDate[0]), " to ").concat(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(defaultDate[1]));
    },
    // Sidebar
    addNewData: function addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    editData: function editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    viewData: function viewData(data) {
      this.sidebarData = data;
      this.sidebarData.viewOnly = true;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    },
    closeSidebar: function closeSidebar() {
      this.addNewDataSidebar = false;
    },
    exportExcel: function () {
      var _exportExcel = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee3() {
        var selectedDates, payload, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                selectedDates = this.date.split(' to ');

                if (!(selectedDates.length <= 1)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return");

              case 4:
                payload = {
                  filter: {
                    startDate: selectedDates[0],
                    endDate: selectedDates[1],
                    toDownload: 1
                  }
                };

                if (payload.filter.hasOwnProperty('toDownload')) {
                  this.$vs.loading({
                    container: '#button-export-loading',
                    scale: 0.45
                  });
                }

                _context3.next = 8;
                return this.$store.dispatch('load/getLoadDatatable', payload);

              case 8:
                data = _context3.sent;

                if (!payload.filter.hasOwnProperty('toDownload')) {
                  _context3.next = 12;
                  break;
                }

                window.location = data.payload.download_url;
                return _context3.abrupt("return", 0);

              case 12:
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context3.t0.response.data.message
                });

              case 17:
                _context3.prev = 17;

                if (payload.filter.hasOwnProperty('toDownload')) {
                  this.$vs.loading.close('#button-export-loading > .con-vs-loading');
                }

                return _context3.finish(17);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 14, 17, 20]]);
      }));

      return function exportExcel() {
        return _exportExcel.apply(this, arguments);
      };
    }(),
    updateActiveTab: function updateActiveTab(currentTab) {
      this.activeComponent = currentTab;
    },
    updateDateRange: function updateDateRange(dataRange) {
      this.date = dataRange;
    },
    refreshPageContent: function refreshPageContent() {
      var _ref9 = this.$refs.components || {},
          refreshPageContent = _ref9.refreshPageContent;

      if (refreshPageContent) {
        this.$refs.components.refreshPageContent();
      }
    },
    togglePipelineSidebar: function togglePipelineSidebar() {
      this.isPipelineSidebarActive = !this.isPipelineSidebarActive;
    },
    updatePipelineHideColumns: function () {
      var _updatePipelineHideColumns = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee4(column) {
        var _ref10, status, currentHideColumns, _ref11, filters, rest;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (column) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                _context4.next = 5;
                return this.$store.dispatch('pipelineV2/setUserCustomization', {
                  hideColumns: _objectSpread({}, column)
                });

              case 5:
                _ref10 = _context4.sent;
                status = _ref10.status;

                if (status === 200) {
                  currentHideColumns = this.currentUserCustomizations && this.currentUserCustomizations.hideColumns || {};
                  _ref11 = this.currentUserCustomizations || {}, filters = _ref11.filters, rest = _objectWithoutProperties(_ref11, ["filters"]);
                  this.$store.commit('auth/setUserCustomization', {
                    loadPipeline: {
                      show: _objectSpread({}, rest, {
                        hideColumns: _objectSpread({}, currentHideColumns, column)
                      }),
                      filters: filters || {}
                    }
                  });
                }

                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context4.t0.response.data.message
                });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10]]);
      }));

      return function updatePipelineHideColumns(_x) {
        return _updatePipelineHideColumns.apply(this, arguments);
      };
    }(),
    updatePipelineShowLabels: function () {
      var _updatePipelineShowLabels = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee5(label) {
        var _ref12, status, currentShowLabels, _ref13, filters, rest;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (label) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return");

              case 3:
                _context5.next = 5;
                return this.$store.dispatch('pipelineV2/setUserCustomization', {
                  showLabels: _objectSpread({}, label)
                });

              case 5:
                _ref12 = _context5.sent;
                status = _ref12.status;

                if (status === 200) {
                  currentShowLabels = this.currentUserCustomizations && this.currentUserCustomizations.showLabels || {};
                  _ref13 = this.currentUserCustomizations || {}, filters = _ref13.filters, rest = _objectWithoutProperties(_ref13, ["filters"]);
                  this.$store.commit('auth/setUserCustomization', {
                    loadPipeline: {
                      show: _objectSpread({}, rest, {
                        showLabels: _objectSpread({}, currentShowLabels, label)
                      }),
                      filters: filters || {}
                    }
                  });
                }

                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context5.t0.response.data.message
                });

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));

      return function updatePipelineShowLabels(_x2) {
        return _updatePipelineShowLabels.apply(this, arguments);
      };
    }(),
    refreshCustomerList: function refreshCustomerList() {
      if (this.$refs.loadSidebar) {
        this.$refs.loadSidebar.refreshCustomerList();
      }
    },
    initSavedPipelineFilters: function initSavedPipelineFilters() {
      var _ref14 = this.currentUserCustomizations || {},
          filters = _ref14.filters;

      if (!filters) return;
      var filter = {};
      (filters.conditions || []).forEach(function (condition) {
        if (condition.column) {
          filter[condition.column] = condition.value;
        }
      });
      var res = {};
      if (filter.loadDispatcher) res.dispatcherIds = filter.loadDispatcher;
      if (filter.loadTag) res.tagIds = filter.loadTag;
      if (filter.loadDriver) res.driverIds = filter.loadDriver;
      this.pipelineFilter = res;
    },
    updatePipelineFilters: function () {
      var _updatePipelineFilters = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee6(filters) {
        var isNotEmpty, _ref15, status, _ref16, _, rest;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;

                if (filters) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return");

              case 3:
                isNotEmpty = _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_8___default()(filters).some(function (value) {
                  return value;
                });
                _context6.next = 6;
                return this.$store.dispatch('pipelineV2/setUserCustomization', {
                  filters: isNotEmpty ? _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(filters) : null
                });

              case 6:
                _ref15 = _context6.sent;
                status = _ref15.status;

                if (status === 200) {
                  _ref16 = this.currentUserCustomizations || {}, _ = _ref16.filters, rest = _objectWithoutProperties(_ref16, ["filters"]);
                  this.$store.commit('auth/setUserCustomization', {
                    loadPipeline: {
                      show: _objectSpread({}, rest) || {},
                      filters: _objectSpread({}, filters) || {}
                    }
                  });
                }

                _context6.next = 14;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_13__["getApiErrorMsg"])(_context6.t0)
                });

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 11]]);
      }));

      return function updatePipelineFilters(_x3) {
        return _updatePipelineFilters.apply(this, arguments);
      };
    }(),
    deleteSelectedLoads: function deleteSelectedLoads() {
      var _this11 = this;

      var loadArray = this.selectedLoadsList.map(function (load) {
        return load.load_id;
      });
      var payload = {
        loadIds: loadArray
      };
      this.$store.dispatch('load/batchDeleteLoads', payload).then(function (response) {
        if (response.result) {
          _this11.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Selected loads deleted successfully.'
          }); // Assuming you have a method to refresh your table data


          _this11.$refs.components.refreshLoadList();
        }
      }).catch(function (error) {
        _this11.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/map */ "./node_modules/@babel/runtime/core-js/map.js");
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/mixins/datatableMixin */ "./resources/js/src/mixins/datatableMixin.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");










function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'List',
  mixins: [_mixins_datatableMixin__WEBPACK_IMPORTED_MODULE_9__["default"]],
  props: ['loadStatus', 'selectedDateRange', 'selectedColumn', 'direction', 'selectedTag'],
  data: function data() {
    var _formattedLoadStatus;

    return {
      showQboButton: true,
      showQbdButton: true,
      selectedLoadsList: [],
      noteValue: null,
      debounceTimeout: null,
      debounceMap: new _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_8___default.a(),
      loadStatuses: _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load,
      loadStatusesDropdownValues: _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.loadWithLabels,
      selectedColumnData: this.selectedColumn,
      rowsPerPageOptions: [10, 25, 50],
      loadPaymentStatus: [_config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.delivered, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.invoice_created, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.invoice_sent],
      formattedLoadStatus: (_formattedLoadStatus = {}, _defineProperty(_formattedLoadStatus, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.open, 'Open'), _defineProperty(_formattedLoadStatus, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.assign, 'Assigned'), _defineProperty(_formattedLoadStatus, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.in_transit, 'In Transit'), _defineProperty(_formattedLoadStatus, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.delivered, 'Delivered'), _defineProperty(_formattedLoadStatus, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.invoice_created, 'Invoice Generated'), _defineProperty(_formattedLoadStatus, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.invoice_sent, 'Payment Requested'), _defineProperty(_formattedLoadStatus, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.invoice_paid, 'Paid'), _defineProperty(_formattedLoadStatus, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.deleted, 'Deleted'), _defineProperty(_formattedLoadStatus, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.canceled, 'Canceled'), _formattedLoadStatus),
      roleModify: [_config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].roles.admin, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].roles.dispatcher],
      filters: {
        load_unique_id: '',
        refrence_id: '',
        companyInternalReference: '',
        shipping_date: '',
        delivery_date: '',
        customer: '',
        pick_up: '',
        delivery: '',
        status: null,
        loadStatusWith: '',
        startDate: '',
        endDate: '',
        driver_name: '',
        direction: '',
        pickupNumber: '',
        deliveryNumber: ''
      },
      promptMessage: '',
      promptColor: '',
      emailSubject: '',
      receivedAmount: '',
      paymentRequestPrompt: {
        isActive: false,
        selectedLoad: null
      },
      invoicePrompt: {
        isActive: false,
        selectedLoad: null,
        skipFactoring: false
      },
      paymentReceivedPrompt: {
        isActive: false,
        selectedLoad: null
      },
      flat_pikr_config: {
        altFormat: 'm/d/y',
        dateFormat: 'Y-m-d',
        altInput: true
      }
    };
  },
  watch: {
    selectedTag: function selectedTag(newSelectedTag) {
      if (newSelectedTag.tag_id !== undefined) {
        this.filters.tag_id = newSelectedTag.tag_id;
      } else {
        delete this.filters.tag_id;
      }

      this.commonApiCall(this.filters);
    },
    direction: function direction(newSelectedDirection) {
      var newValue = newSelectedDirection.value ? newSelectedDirection.value == _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].all ? '' : newSelectedDirection.value : '';

      if (this.filters.direction != newValue) {
        this.filters.direction = newValue;
        this.commonApiCall(this.filters);
      }
    },
    loadStatus: function loadStatus(newSelectedLoadStatus) {
      var newValue = newSelectedLoadStatus.value ? newSelectedLoadStatus.value == _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].all ? '' : newSelectedLoadStatus.value : '';

      if (this.filters.loadStatusWith != newValue) {
        this.filters.loadStatusWith = newValue;
        this.commonApiCall(this.filters);
      }
    },
    selectedColumn: function selectedColumn(_selectedColumn) {
      this.selectedColumnData = _selectedColumn;
    },
    selectedDateRange: {
      immediate: true,
      handler: function handler(newSelectedDateRange) {
        var dates = newSelectedDateRange.split(' to ');
        if (dates.length <= 1) return;
        this.filters.startDate = dates[0];
        this.filters.endDate = dates[1]; // ? dates[1] : dates[0];
        // Default entry to load table when open this page.
        // Be careful, the above watchers could cause the commonApiCall()
        // to be called multiple times!

        this.commonApiCall(this.filters);
      }
    },
    isLoading: function isLoading(newIsLoading) {
      // console.log(`Watching: ${newIsLoading}`)
      if (newIsLoading) {
        this.commonApiCall(this.filters);
      }
    },
    selectedLoadsList: function selectedLoadsList() {
      this.$emit('updateSelectedLoadsList', this.selectedLoadsList);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapState"])('load', {
    items: 'loads',
    isLoading: 'loading'
  }), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('auth', ['userRole']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('quickbooks', ['qboConnectionStatusAll']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('qbd', ['qbdConnectionStatusAll']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('customization', ['customization']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('factoring-company', ['allFactoringCompanies']), {
    showCompanyInternalReferenceForCompanies: function showCompanyInternalReferenceForCompanies() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].showCompanyInternalReferenceForCompanies.includes(this.user.admin_company_detail_id);
    }
  }),
  created: function created() {
    if (!this.qboConnectionStatusAll) {
      this.getQboConnectionStatusAll();
    } else {
      this.showQboButton = this.computeShowQbButton(this.qboConnectionStatusAll);
    }

    if (!this.qbdConnectionStatusAll) {
      this.getQbdConnectionStatusAll();
    } else {
      this.showQbdButton = this.computeShowQbButton(this.qbdConnectionStatusAll);
    }
  },
  methods: {
    computeQbdSyncStatus: function computeQbdSyncStatus(qbdSingleInvoices, qbdMassInvoices) {
      var resultArray = [];

      if (qbdSingleInvoices && qbdSingleInvoices.length > 0) {
        qbdSingleInvoices.forEach(function (oneInvoice) {
          if (oneInvoice.quickbooks_txnid) {
            resultArray.push('Invoice synced');
          } else {
            resultArray.push('Waiting for QBD to receive invoice');
          }
        });
      }

      if (qbdMassInvoices && qbdMassInvoices.length > 0) {
        qbdMassInvoices.forEach(function (oneMassInvoice) {
          if (oneMassInvoice.qbd_invoice) {
            if (oneMassInvoice.qbd_invoice.quickbooks_txnid) {
              resultArray.push('Synced as mass invoice ' + oneMassInvoice.qbd_invoice.mass_invoice_number);
            } else {
              resultArray.push('Waiting for QBD to receive mass invoice ' + oneMassInvoice.qbd_invoice.mass_invoice_number);
            }
          }
        });
      }

      if (resultArray.length == 0) {
        return '';
      } else if (resultArray.length == 1) {
        return resultArray[0];
      } else {
        var result = 'Synced ' + resultArray.length + ' times:';

        for (var i = 0; i < resultArray.length; ++i) {
          result += ' ' + (i + 1) + ') ' + resultArray[i];
        }

        return result;
      }
    },
    debounce: function debounce(func, delay) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(func, delay);
    },
    debouncedOnInputFilter: function debouncedOnInputFilter(event) {
      var _this = this;

      var inputType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';

      if (inputType === 'text') {
        this.debounce(function () {
          _this.onInputFilter(event);
        }, 1500);
      } else {
        this.onInputFilter(event);
      }
    },
    getQboConnectionStatusAll: function getQboConnectionStatusAll() {
      var _this2 = this;

      this.$store.dispatch('quickbooks/getConnectionStatusAll').then(function () {
        _this2.showQboButton = _this2.computeShowQbButton(_this2.qboConnectionStatusAll);
      }).catch(function (error) {
        _this2.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      });
    },
    getQbdConnectionStatusAll: function getQbdConnectionStatusAll() {
      var _this3 = this;

      this.$store.dispatch('qbd/getConnectionStatusAll').then(function () {
        _this3.showQbdButton = _this3.computeShowQbButton(_this3.qbdConnectionStatusAll);
      }).catch(function (error) {
        _this3.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      });
    },
    computeShowQbButton: function computeShowQbButton(connectionStatusAll) {
      if (connectionStatusAll) {
        if (connectionStatusAll.parentStatus != 'Not connected') {
          return true;
        }

        for (var i = 0; i < connectionStatusAll.tags.length; ++i) {
          if (connectionStatusAll.tags[i].status != 'Not connected') {
            return true;
          }
        }

        return false;
      }

      return true;
    },
    refreshLoadList: function refreshLoadList() {
      this.commonApiCall(this.filters);
    },
    handleSortParam: function handleSortParam(event) {
      if (event.sortField.length) {
        var sortFields = event.sortField.split(',');
        event.sortField = sortFields[0].replace(' ', '');
        return event;
      }
    },
    checkColumnVisibility: function checkColumnVisibility(value) {
      if (!this.selectedColumnData.includes(value) || this.userRole == 'warehouse_operator') {
        return true;
      }

      return false;
    },
    formatShipDeliveryDate: function formatShipDeliveryDate(date) {
      return date.slice(5);
    },
    formatShipDeliveryTime: function formatShipDeliveryTime(startTime, endTime) {
      if (endTime) {
        return startTime + '-' + endTime;
      } else {
        return startTime;
      }
    },
    formatDriverNames: function formatDriverNames(drivers) {
      var nameArray = [];
      drivers.filter(function (oneRow) {
        return oneRow.driver_details.length > 0;
      }).map(function (oneRow) {
        nameArray.push.apply(nameArray, _toConsumableArray(oneRow.driver_details.map(function (oneDriver) {
          return oneDriver.name;
        })));
      });
      return nameArray.join(', ');
    },
    onChangeNote: function onChangeNote(event, data) {
      var _this4 = this;

      try {
        if (this.debounceMap.has(data.load_id)) {
          clearTimeout(this.debounceMap.get(data.load_id));
        }

        this.debounceMap.set(data.load_id, setTimeout(function () {
          var payload = {
            dispatcher_notes: event
          };
          var loadPayload = {
            id: data.load_id,
            payload: payload
          };

          _this4.$vs.loading();

          _this4.$store.dispatch('load/updateLoadDispatcherNotes', loadPayload).then(function () {
            _this4.$vs.loading.close();

            _this4.$vs.notify({
              color: 'primary',
              title: 'Load notes updated',
              text: 'Load notes updated successfully.'
            });
          }).catch(function (error) {
            _this4.$vs.loading.close();

            _this4.$vs.notify({
              title: 'Error',
              text: error.response.data.message,
              color: 'danger'
            });
          });
        }, 2000));
      } catch (error) {
        console.log(error);
      }
    },
    commonApiCall: function () {
      var _commonApiCall = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        var filter,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filter = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                // 2022-06-23: I found the API is called 3 times!
                this.loading = true;
                _context.prev = 2;
                _context.next = 5;
                return this.$store.dispatch('load/getLoadDatatable', {
                  eventForServer: this.eventForServer,
                  filter: filter
                });

              case 5:
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context.t0.response.data.message
                });

              case 10:
                _context.prev = 10;
                _context.next = 13;
                return this.$store.dispatch('load/stopLoading');

              case 13:
                this.selectedLoadsList = [];
                this.loading = false;
                this.debounceMap.clear();
                return _context.finish(10);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 7, 10, 17]]);
      }));

      return function commonApiCall() {
        return _commonApiCall.apply(this, arguments);
      };
    }(),
    editData: function editData(load) {
      this.$emit('editLoadSidebar', {
        loadId: load.load_id
      });
    },
    // Confirm Dialog
    onConfirm: function onConfirm(options) {
      this.$vs.dialog(_objectSpread({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes'
      }, options));
    },
    resetInvoicePrompt: function resetInvoicePrompt() {
      this.invoicePrompt = {
        isActive: false,
        selectedLoad: null,
        noFactoring: null,
        skipFactoring: false
      };
    },
    // Sync to QuickBooks Online
    onSyncToQuickbooks: function onSyncToQuickbooks(load) {
      var _this5 = this;

      var options = {
        title: 'Sync to QuickBooks Online',
        text: 'Invoice is automatically synced to QuickBooks Online when generated. Are you sure you want to manually sync this load to QuickBooks Online?',
        accept: function accept() {
          return _this5.syncToQuickbooks(load);
        }
      };
      this.onConfirm(options);
    },
    syncToQuickbooks: function () {
      var _syncToQuickbooks = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(load) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: load.load_id
                };
                _context2.prev = 2;
                _context2.next = 5;
                return this.$store.dispatch('load/syncToQuickbooks', payload);

              case 5:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Invoice Synced',
                  text: 'Invoice synced successfully.'
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  time: 10000,
                  text: _context2.t0.response.data.message
                });

              case 11:
                _context2.prev = 11;
                this.$vs.loading.close();
                _context2.next = 15;
                return this.commonApiCall(this.filters);

              case 15:
                return _context2.finish(11);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8, 11, 16]]);
      }));

      return function syncToQuickbooks(_x) {
        return _syncToQuickbooks.apply(this, arguments);
      };
    }(),
    // Sync to QuickBooks Desktop
    onSyncToQbd: function onSyncToQbd(load) {
      var _this6 = this;

      var options = {
        title: 'Sync to QuickBooks Desktop',
        text: 'Invoice is automatically synced to QuickBooks Desktop when generated. Are you sure you want to manually sync this load to QuickBooks Desktop?',
        accept: function accept() {
          return _this6.syncToQbd(load);
        }
      };
      this.onConfirm(options);
    },
    syncToQbd: function () {
      var _syncToQbd = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3(load) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(load.refrence_id.length > 25)) {
                  _context3.next = 3;
                  break;
                }

                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: 'Ref # (PO #) cannot exceed 25 characters for QuickBooks Desktop',
                  time: 10000
                });
                return _context3.abrupt("return");

              case 3:
                this.$vs.loading();
                payload = {
                  id: load.load_id
                };
                _context3.prev = 5;
                _context3.next = 8;
                return this.$store.dispatch('load/syncToQbd', payload);

              case 8:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Added to queue',
                  text: 'Invoice sync request added to queue.'
                });
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](5);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context3.t0.response.data.message,
                  time: 10000
                });

              case 14:
                _context3.prev = 14;
                this.$vs.loading.close();
                _context3.next = 18;
                return this.commonApiCall(this.filters);

              case 18:
                return _context3.finish(14);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 11, 14, 19]]);
      }));

      return function syncToQbd(_x2) {
        return _syncToQbd.apply(this, arguments);
      };
    }(),
    generateInvoice: function () {
      var _generateInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4(load) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: load.load_id
                };

                if (this.invoicePrompt.skipFactoring) {
                  payload.skipFactoring = this.invoicePrompt.skipFactoring;
                } else {
                  payload.skipFactoring = false;
                }

                _context4.prev = 3;
                _context4.next = 6;
                return this.$store.dispatch('load/generateInvoice', payload);

              case 6:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Invoice Generated',
                  text: 'Invoice Generated successfully.'
                });
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](3);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  time: 10000,
                  text: _context4.t0.response.data.message
                });

              case 12:
                _context4.prev = 12;
                this.$vs.loading.close();
                _context4.next = 16;
                return this.commonApiCall(this.filters);

              case 16:
                return _context4.finish(12);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 9, 12, 17]]);
      }));

      return function generateInvoice(_x3) {
        return _generateInvoice.apply(this, arguments);
      };
    }(),
    // Request for Payment
    onConfirmRequestForPayment: function onConfirmRequestForPayment(load) {
      var text = "Are you sure you want to send request for payment with amount ".concat(load.total_amount, " USD");
      this.promptColor = 'warning';
      var noFactoring = load && load.customer && load.customer.noFactoring;

      if (!noFactoring && load.paymentOption != 'skipFactoring' && this.allFactoringCompanies && this.allFactoringCompanies.length > 0) {
        this.promptMessage = text + " to ".concat(this.allFactoringCompanies[0].billing_email, "?");
      } else {
        if (load && load.customer && load.customer.billing_email) {
          this.promptMessage = text + " to ".concat(load.customer.billing_email, "?");
        } else {
          this.promptMessage = text + "? (Missing customer billing email)";
          this.promptColor = 'danger';
        }
      }

      this.emailSubject = "Invoice for Load ".concat(load.refrence_id ? load.refrence_id : '');
      this.showPaymentRequestPrompt(load);
    },
    requestForPayment: function () {
      var _requestForPayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee5() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: this.paymentRequestPrompt.selectedLoad.load_id,
                  subject: this.emailSubject
                };
                _context5.prev = 2;
                _context5.next = 5;
                return this.$store.dispatch('load/requestForPayment', payload);

              case 5:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Payment Request',
                  text: 'Request for Payment sent successfully.'
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context5.t0.response.data.message,
                  time: 8000
                });

              case 11:
                _context5.prev = 11;
                this.$vs.loading.close();
                _context5.next = 15;
                return this.commonApiCall(this.filters);

              case 15:
                return _context5.finish(11);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 8, 11, 16]]);
      }));

      return function requestForPayment() {
        return _requestForPayment.apply(this, arguments);
      };
    }(),
    paymentReceived: function () {
      var _paymentReceived = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee6() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: this.paymentReceivedPrompt.selectedLoad.load_id,
                  paidAmount: this.receivedAmount ? Number(this.receivedAmount) : null
                };
                _context6.prev = 2;
                _context6.next = 5;
                return this.$store.dispatch('load/paymentReceived', payload);

              case 5:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Payment Received',
                  text: 'Payment received successfully.'
                });
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context6.t0.response.data.message
                });

              case 11:
                _context6.prev = 11;
                this.$vs.loading.close();
                _context6.next = 15;
                return this.commonApiCall(this.filters);

              case 15:
                return _context6.finish(11);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 8, 11, 16]]);
      }));

      return function paymentReceived() {
        return _paymentReceived.apply(this, arguments);
      };
    }(),
    viewData: function viewData(load) {
      this.$emit('viewLoadSidebar', {
        loadId: load.load_id
      });
    },
    getStatusLabel: function getStatusLabel(_ref) {
      var status = _ref.status,
          invoice_file_name = _ref.invoice_file_name;
      if (this.loadStatus.value === 'deleted') return 'Deleted';
      return (status == this.loadStatuses.invoice_created && invoice_file_name && invoice_file_name.startsWith('mass-invoice') ? 'Mass ' : '') + this.formattedLoadStatus[status];
    },

    /** Open POD attachment */
    openLoadPOD: function openLoadPOD(loadImage) {
      var _this7 = this;

      /** loadImage = { loadId, loadImageId } */
      this.$vs.loading();
      this.$store.dispatch('spreadsheet/getPodUrl', loadImage).then(function (_ref2) {
        var data = _ref2.data;
        window.open(data.payload.url, '_blank');
      }).catch(function (error) {
        _this7.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this7.$vs.loading.close();
      });
    },
    showPaymentRequestPrompt: function showPaymentRequestPrompt() {
      var load = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.paymentRequestPrompt = {
        isActive: true,
        selectedLoad: load
      };
    },
    showInvoicePrompt: function showInvoicePrompt(load) {
      this.invoicePrompt = {
        isActive: true,
        selectedLoad: load,
        noFactoring: load && load.customer && load.noFactoring
      };
    },
    resetPaymentRequestPrompt: function resetPaymentRequestPrompt() {
      this.paymentRequestPrompt = {
        isActive: false,
        selectedLoad: null
      };
    },
    showPaymentReceivedPrompt: function showPaymentReceivedPrompt() {
      var load = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.paymentReceivedPrompt = {
        isActive: true,
        selectedLoad: load
      };
      this.receivedAmount = load.total_amount.toString(); // convering number into string because input type number accepts string and if value is 0 then it doesn't accept 0 as a default value
    },
    resetPaymentReceivedPrompt: function resetPaymentReceivedPrompt() {
      this.paymentReceivedPrompt = {
        isActive: false,
        selectedLoad: null
      };
      this.receivedAmount = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_DraggableCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/DraggableCard */ "./resources/js/src/views/pages/dispatch/components/DraggableCard.vue");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/src/helpers/helper.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Pipeline',
  props: {
    selectedDateRange: {
      type: String,
      required: true
    },
    pipelineFilter: {
      type: Object,
      default: null,
      required: false
    },
    userCustomization: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  components: {
    DraggableCard: _components_DraggableCard__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      loadStatus: _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].status.load,
      filters: {
        startDate: '',
        endDate: ''
      },
      roleModify: [_config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].roles.admin, _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].roles.dispatcher],
      openLoadItems: [],
      dispatchedItems: [],
      transitItems: [],
      deliveredItems: [],
      paymentStatusItems: [],
      columns: [{
        id: 1,
        label: 'Open',
        value: 'open',
        data: 'openLoadItems',
        key: 'open'
      }, {
        id: 2,
        label: 'Dispatched',
        value: 'assign',
        data: 'dispatchedItems',
        key: 'dispatched'
      }, {
        id: 3,
        label: 'In Transit',
        value: 'in_transit',
        data: 'transitItems',
        key: 'inTransit'
      }, {
        id: 4,
        label: 'Delivered',
        value: 'delivered',
        data: 'deliveredItems',
        key: 'delivered'
      }, {
        id: 5,
        label: 'Payment Status',
        value: 'invoice_created',
        data: 'paymentStatusItems',
        key: 'paymentStatus'
      }],
      dataFilters: {
        tagIds: [],
        dispatcherIds: [],
        driverIds: []
      },
      invoicePrompt: {
        isActive: false,
        selectedLoad: null,
        skipFactoring: false
      },
      loads: []
    };
  },
  watch: {
    selectedDateRange: {
      immediate: true,
      handler: function handler(newSelectedDateRange) {
        var dates = newSelectedDateRange.split(' to ');
        if (dates.length <= 1) return;
        this.filters.startDate = dates[0];
        this.filters.endDate = dates[1]; // Get Pipeline

        this.getPipeline();
      }
    },
    isLoading: function () {
      var _isLoading = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(newIsLoading) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!newIsLoading) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.getPipeline();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function isLoading(_x) {
        return _isLoading.apply(this, arguments);
      };
    }(),
    pipelineFilter: {
      handler: function handler(val) {
        if (val) {
          // Get Pipeline
          this.getPipeline();
        }
      },
      deep: true // immediate: true,

    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapState"])('load', {
    isLoading: 'loading'
  }), Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('factoring-company', ['allFactoringCompanies']), {
    visibleColumns: function visibleColumns() {
      var _this = this;

      if (this.userCustomization && this.userCustomization.hideColumns) {
        return this.columns.filter(function (column) {
          return _this.userCustomization.hideColumns[column.key] !== false;
        });
      } else {
        return this.columns;
      }
    },
    showLabels: function showLabels() {
      if (this.userCustomization && this.userCustomization.showLabels) {
        return this.userCustomization.showLabels;
      } else {
        return {};
      }
    },
    getColumnWidth: function getColumnWidth() {
      var columnWidth = 100 / this.visibleColumns.length;
      return "width: calc(".concat(columnWidth, "% - 1rem)");
    }
  }),
  methods: {
    getPipeline: function () {
      var _getPipeline = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var filterPayload, _ref, loads;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$vs.loading();
                filterPayload = _objectSpread({}, this.filters);

                if (this.pipelineFilter && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.pipelineFilter).length) {
                  filterPayload.filters = this.pipelineFilter;
                }

                _context2.prev = 3;
                _context2.next = 6;
                return this.$store.dispatch('pipelineV2/getPipeline', filterPayload);

              case 6:
                _ref = _context2.sent;
                loads = _ref.data.payload.loads;
                this.loads = structuredClone(loads);
                this.updatePipelineColumns(loads);
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](3);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context2.t0.response.data.message
                });

              case 15:
                _context2.prev = 15;
                _context2.next = 18;
                return this.$store.dispatch('load/stopLoading');

              case 18:
                this.$vs.loading.close();
                return _context2.finish(15);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 12, 15, 20]]);
      }));

      return function getPipeline() {
        return _getPipeline.apply(this, arguments);
      };
    }(),
    updatePipelineColumns: function updatePipelineColumns(loads) {
      var _this2 = this;

      this.openLoadItems = (loads || []).filter(function (load) {
        return load.status == _this2.loadStatus.open;
      }).map(function (load) {
        return _objectSpread({}, load, {
          uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])()
        });
      });
      this.dispatchedItems = (loads || []).filter(function (load) {
        return load.status == _this2.loadStatus.assign;
      }).map(function (load) {
        return _objectSpread({}, load, {
          uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])()
        });
      });
      this.transitItems = (loads || []).filter(function (load) {
        return load.status == _this2.loadStatus.in_transit;
      }).map(function (load) {
        return _objectSpread({}, load, {
          uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])()
        });
      });
      this.deliveredItems = (loads || []).filter(function (load) {
        return load.status == _this2.loadStatus.delivered;
      }).map(function (load) {
        return _objectSpread({}, load, {
          uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])()
        });
      });
      this.paymentStatusItems = (loads || []).filter(function (load) {
        return [_this2.loadStatus.invoice_created, _this2.loadStatus.invoice_sent, _this2.loadStatus.invoice_paid].includes(load.status);
      }).map(function (load) {
        return _objectSpread({}, load, {
          uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])()
        });
      });
    },

    /**
     * Open Sidebar: Load Edit
     */
    editedLoadSidebar: function editedLoadSidebar(data) {
      this.$emit('editLoadSidebar', data);
    },
    viewLoadSidebar: function viewLoadSidebar(data) {
      this.$emit('viewLoadSidebar', data);
    },

    /* change status of loads*/
    changeStatus: function () {
      var _changeStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(status, event) {
        var loadId, param, newColumnForThisLoad, load;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!event.added) {
                  _context3.next = 30;
                  break;
                }

                // TODO: The code is not complete. If users cancel generate invoice, we need to
                // move card to its original column.
                //if (status === 'invoice_created') {
                //  this.showInvoicePrompt(event.added.element);
                //} else {
                loadId = event.added.element.load_id;
                param = {
                  load_id: loadId,
                  status: status
                }; // console.log(param);
                //}

                _context3.prev = 3;
                _context3.next = 6;
                return this.updateLoadStatus(param);

              case 6:
                this.$vs.notify({
                  time: 3000,
                  color: 'success',
                  title: 'Status Updated',
                  text: 'Load Status Updated successfully.'
                });
                this.loads = this.loads.map(function (load) {
                  if (load.load_id === param.load_id) {
                    return event.added.element;
                  } else {
                    return load;
                  }
                });
                newColumnForThisLoad = null;
                _context3.t0 = param.status;
                _context3.next = _context3.t0 === this.loadStatus.open ? 12 : _context3.t0 === this.loadStatus.assign ? 14 : _context3.t0 === this.loadStatus.in_transit ? 16 : _context3.t0 === this.loadStatus.delivered ? 18 : _context3.t0 === this.loadStatus.invoice_created ? 20 : _context3.t0 === this.loadStatus.invoice_sent ? 20 : _context3.t0 === this.loadStatus.invoice_paid ? 20 : 22;
                break;

              case 12:
                newColumnForThisLoad = this.openLoadItems;
                return _context3.abrupt("break", 22);

              case 14:
                newColumnForThisLoad = this.dispatchedItems;
                return _context3.abrupt("break", 22);

              case 16:
                newColumnForThisLoad = this.transitItems;
                return _context3.abrupt("break", 22);

              case 18:
                newColumnForThisLoad = this.deliveredItems;
                return _context3.abrupt("break", 22);

              case 20:
                newColumnForThisLoad = this.paymentStatusItems;
                return _context3.abrupt("break", 22);

              case 22:
                if (newColumnForThisLoad) {
                  load = newColumnForThisLoad.find(function (load) {
                    return load.load_id == param.load_id;
                  });

                  if (load) {
                    load.status = param.status;
                  }
                }

                _context3.next = 30;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t1 = _context3["catch"](3);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_10__["getApiErrorMsg"])(_context3.t1)
                });
                this.updatePipelineColumns(this.loads);
                return _context3.abrupt("return");

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 25]]);
      }));

      return function changeStatus(_x2, _x3) {
        return _changeStatus.apply(this, arguments);
      };
    }(),
    generateInvoice: function () {
      var _generateInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4(load) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: load.load_id
                };

                if (this.invoicePrompt.skipFactoring) {
                  payload.skipFactoring = this.invoicePrompt.skipFactoring;
                } else {
                  payload.skipFactoring = false;
                }

                _context4.prev = 3;
                _context4.next = 6;
                return this.$store.dispatch('load/generateInvoice', payload);

              case 6:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Invoice Generated',
                  text: 'Invoice Generated successfully.'
                });
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](3);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  time: 10000,
                  text: _context4.t0.response.data.message
                });

              case 12:
                _context4.prev = 12;
                this.$vs.loading.close();
                return _context4.finish(12);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 9, 12, 15]]);
      }));

      return function generateInvoice(_x4) {
        return _generateInvoice.apply(this, arguments);
      };
    }(),

    /* update load status */
    updateLoadStatus: function () {
      var _updateLoadStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5(param) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.$store.dispatch('pipeline/updateStatus', param);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function updateLoadStatus(_x5) {
        return _updateLoadStatus.apply(this, arguments);
      };
    }(),
    showInvoicePrompt: function showInvoicePrompt(load) {
      this.invoicePrompt = {
        isActive: true,
        selectedLoad: load,
        noFactoring: load && load.customer && load.noFactoring
      };
    },
    resetInvoicePrompt: function resetInvoicePrompt() {
      this.invoicePrompt = {
        isActive: false,
        selectedLoad: null,
        noFactoring: null,
        skipFactoring: false
      };
    },
    hideColumn: function hideColumn(columnValue) {
      if (!columnValue) return;
      this.$emit('update:hideColumns', _defineProperty({}, columnValue, false));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _views_pages_calender_components_SpreadsheetList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/calender/components/SpreadsheetList */ "./resources/js/src/views/pages/calender/components/SpreadsheetList.vue");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

__webpack_require__(/*! vue-simple-calendar/static/css/default.css */ "./node_modules/vue-simple-calendar/static/css/default.css");




var Spreadsheet = function Spreadsheet() {
  return Promise.all(/*! import() */[__webpack_require__.e(61), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! @/views/pages/excel/Spreadsheet */ "./resources/js/src/views/pages/excel/Spreadsheet.vue"));
};

var ShareSpreadsheetPopup = function ShareSpreadsheetPopup() {
  return __webpack_require__.e(/*! import() */ 45).then(__webpack_require__.bind(null, /*! @/views/pages/calender/components/ShareSpreadsheetPopup */ "./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SpreadSheetInDispatch',
  components: {
    Spreadsheet: Spreadsheet,
    SpreadsheetList: _views_pages_calender_components_SpreadsheetList__WEBPACK_IMPORTED_MODULE_7__["default"],
    ShareSpreadsheetPopup: ShareSpreadsheetPopup
  },
  props: {
    activeComponent: {
      type: Number,
      default: 0
    },
    dispatchTabDateRange: {
      type: String || Date
    }
  },
  data: function data() {
    return {
      selectedDateRange: this.dispatchTabDateRange || '',
      skip_days: 32,
      flat_pikr_config: {
        mode: 'range',
        minDate: '',
        maxDate: '',
        inline: true,
        defaultDate: [new Date(), new Date().setDate(new Date().getDate() + this.skip_days)]
      },
      selectedTab: null,
      spreadsheetDateRange: '',
      sharePopup: false,
      selectedSpreadsheetName: '',
      accessLevel: null,
      spreadsheetList: [],
      filterJson: null // a holder variable to preserve spreadsheet filter data across tabs in dispatch

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
              this.setDefaultDateRange();

            case 1:
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
  watch: {
    selectedDateRange: function selectedDateRange() {
      var dates = this.selectedDateRange.split(' to ');
      this.dateRange(dates[0], dates[1] ? dates[1] : dates[0]);
      this.$emit('updateDateRange', this.selectedDateRange);
    },
    selectedTab: {
      handler: function handler(val) {
        if (val) {
          // If 0 -> Dispatch is in Pipeline or List Ui
          this.$emit('updateActiveTab', val); // To set in Dispatch page that current selection is a spreadsheet

          if (val !== 'Home') {
            this.skip_days = 396; // 1 year and 1 month
          } else {
            this.skip_days = 32;
          }
        }
      }
    },
    activeComponent: function activeComponent() {
      this.selectedTab = this.activeComponent;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])('auth', ['userRole', 'user']), {
    spreadsheetForSpecificUser: function spreadsheetForSpecificUser() {
      return true;
    },
    getSelectedDateRange: function getSelectedDateRange() {
      var regex = /\d{4}-/g;
      var dateRangeWithoutYear = this.selectedDateRange.replaceAll(regex, '');
      var date = dateRangeWithoutYear.replaceAll('-', '/').split('to');

      if (date[0] && date[1]) {
        return "".concat(date[0], "-").concat(date[1]);
      }

      return "".concat(date[0]);
    },
    hasSpreadsheetList: function hasSpreadsheetList() {
      return this.spreadsheetList.length > 0;
    }
  }),
  methods: {
    handleSpreadsheetShare: function handleSpreadsheetShare() {
      this.sharePopup = true;
      this.$refs.accessLevelRef.getUsersAccessLevel();
    },
    setAccessLevel: function setAccessLevel(accessLevelProperty) {
      this.accessLevel = accessLevelProperty;
    },
    refreshSpreadsheet: function refreshSpreadsheet() {
      this.$refs.spreadsheet.refreshSpreadsheet();
    },
    // call from spreadsheet header
    spreadsheetHeaderProperties: function spreadsheetHeaderProperties(property) {
      this.selectedTab = property.selectedTab;
      this.selectedSpreadsheetName = property.selectedSpreadsheetName; // this.$refs.spreadsheetRef.getSpreadsheetData();
    },
    setDefaultDateRange: function setDefaultDateRange() {
      if (this.dispatchTabDateRange) {
        this.selectedDateRange = this.dispatchTabDateRange;
        this.spreadsheetDateRange = this.selectedDateRange;
      } else {
        var today = new Date();
        today.setHours(0);
        var todayStr = today.toISOString().split('T', 1)[0];
        today.setDate(today.getDate() + this.skip_days);
        var after7DaysStr = today.toISOString().split('T', 1)[0];
        this.selectedDateRange = "".concat(todayStr, " to ").concat(after7DaysStr);
        this.spreadsheetDateRange = this.selectedDateRange;
      }
    },
    // Calendar methods
    dateRange: function dateRange(startDate, endDate) {
      var dateArray = [];
      var currentDate = new Date(startDate);
      var endDateObj = new Date(endDate);

      while (currentDate <= endDateObj) {
        currentDate.setUTCDate(currentDate.getUTCDate() + 1);
        dateArray.push({
          weekday: new Date(currentDate).toLocaleString('en-us', {
            weekday: 'short'
          }),
          day: new Date(currentDate).toLocaleString('en-us', {
            day: 'numeric'
          }),
          month: new Date(currentDate).toLocaleString('en-us', {
            month: 'long'
          }),
          date: new Date(currentDate)
        });
      }

      if (dateArray.length < 7) {
        var lastSelectedDate = dateArray.at(-1).date;
        var daysLeft = 7 - dateArray.length;

        for (var i = 0; i < daysLeft; i++) {
          lastSelectedDate.setUTCDate(lastSelectedDate.getUTCDate() + 1);
          var newDate = new Date(lastSelectedDate.setDate(lastSelectedDate.getDate()));
          dateArray.push({
            weekday: new Date(newDate).toLocaleString('en-us', {
              weekday: 'short'
            }),
            day: new Date(newDate).toLocaleString('en-us', {
              day: 'numeric'
            }),
            month: new Date(newDate).toLocaleString('en-us', {
              month: 'long'
            }),
            date: newDate
          });
        }
      }
    },
    closePopup: function closePopup() {
      this.$refs.anytime.click();
    },
    handleChangeDate: function handleChangeDate(selectedDates, dateStr, instance) {
      // console.log("handleChangeDate()", this.selectedDateRange);
      var selectedDateFormat = dateStr.split(' to ');

      if (selectedDates.length >= 2) {
        if (new Date(selectedDates[0]).getTime() === new Date(selectedDates[1]).getTime()) {
          var selectDate = new Date(selectedDates[0]);
          this.$set(this.flat_pikr_config, 'minDate', selectDate.setDate(selectDate.getDate() - this.skip_days));
          this.$set(this.flat_pikr_config, 'maxDate', selectDate.setDate(selectDate.getDate() + this.skip_days * 2));
        } else {
          this.$set(this.flat_pikr_config, 'minDate', '');
          this.$set(this.flat_pikr_config, 'maxDate', '');
        }

        this.spreadsheetDateRange = this.selectedDateRange;
      } else {
        var _selectDate = new Date(selectedDateFormat[0]);

        _selectDate.setHours(_selectDate.getHours() + 12);

        _selectDate.setDate(_selectDate.getDate() - this.skip_days);

        this.$set(this.flat_pikr_config, 'minDate', _selectDate.toISOString().slice(0, 10));

        _selectDate.setDate(_selectDate.getDate() + this.skip_days * 2);

        this.$set(this.flat_pikr_config, 'maxDate', _selectDate.toISOString().slice(0, 10));
      }
    },
    updateSpreadSheetList: function updateSpreadSheetList(newList) {
      this.spreadsheetList = newList;
    },
    saveFilterJson: function saveFilterJson(data) {
      this.filterJson = data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/entries */ "./node_modules/@babel/runtime/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");










function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DraggableCard',
  props: {
    data: {
      type: Object,
      required: true
    },
    showLabels: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  filters: {
    formatDate: function formatDate(value) {
      if (!value) return '';
      return value.replace(/-/g, '/');
    }
  },
  data: function data() {
    return {
      loadStatuses: _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load,
      loadPaymentStatus: [_config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.delivered, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.invoice_created, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].status.load.invoice_sent],
      roleModify: [_config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].roles.admin, _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].roles.dispatcher],
      load: this.data,
      loadDrivers: [],
      driverNames: [],
      truckNumbers: [],
      trailerNumbers: [],
      labels: {
        customerName: true,
        loadNumber: true,
        loadReference: false,
        billToCode: false,
        miles: false,
        totalAmount: false,
        shipperName: true,
        shipperCityState: true,
        shipperDateTime: true,
        receiverName: true,
        receiverCityState: true,
        receiverDateTime: true,
        equipmentType: false,
        driver: false,
        truck: false,
        trailer: false,
        shipperFreightDescription: false,
        shipperFreightEquipmentNumber: false
      },
      equipmentTypeOptions: _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].equipmentTypeOptions,
      activePrompt: false,
      promptMessage: '',
      promptColor: '',
      selectedPromptLoad: null,
      emailSubject: '',
      paymentReceivedPrompt: {
        isActive: false,
        selectedLoad: null
      },
      receivedAmount: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('customization', ['customization']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('factoring-company', ['allFactoringCompanies']), {
    shipperReceiverOrderedList: function shipperReceiverOrderedList() {
      /** Data variable seems to be directly passes from a vuex variable
       * This Copy and parsing logic is need to avoid vuex cross mutation */
      var dataCopy = _objectSpread({}, this.data || {});

      var _JSON$parse = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(dataCopy)),
          shippers = _JSON$parse.shippers,
          receivers = _JSON$parse.receivers;
      /** While the commented out code would have been enough
       * to create a ordered list of shipper and receiver
       * in order to get the proper oder of render labels like P1 and D1
       * separate calculation we needed
       * Just use the commented out code if the "indexLabel" variable is not needed */
      // const combinedList = [
      //   ...shippers.map((shipper) => ({ ...shipper, type: "shipper", uuid: uuidv4() })),
      //   ...receivers.map((receiver) => ({ ...receiver, type: "receiver", uuid: uuidv4() })),
      // ];
      // return combinedList.sort((a, b) => {
      //   return a.order - b.order;
      // });


      var combinedList = [];
      shippers.sort(function (a, b) {
        return a.order - b.order;
      }).forEach(function (shipper, index) {
        combinedList.push(_objectSpread({}, shipper, {
          type: 'shipper',
          uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])(),
          indexLabel: "P".concat(index + 1)
        }));
      });
      receivers.sort(function (a, b) {
        return a.order - b.order;
      }).forEach(function (receiver, index) {
        combinedList.push(_objectSpread({}, receiver, {
          type: 'receiver',
          uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])(),
          indexLabel: "D".concat(index + 1)
        }));
      });
      return combinedList.sort(function (a, b) {
        return a.order - b.order;
      });
    },
    isShipperNameCityStateDateTimeVisible: function isShipperNameCityStateDateTimeVisible() {
      return this.labels.shipperName || this.labels.shipperCityState || this.labels.shipperDateTime;
    },
    isReceiverNameCityStateDateTimeVisible: function isReceiverNameCityStateDateTimeVisible() {
      return this.labels.receiverName || this.labels.receiverCityState || this.labels.receiverDateTime;
    },
    isDriverTruckTrailerVisible: function isDriverTruckTrailerVisible() {
      return this.labels.driver || this.labels.truck || this.labels.trailer;
    },
    isDriverTruckTrailerAvailable: function isDriverTruckTrailerAvailable() {
      return this.driverNames.length || this.truckNumbers.length || this.trailerNumbers.length;
    },
    isCardHeaderVisible: function isCardHeaderVisible() {
      return this.labels.loadNumber || this.labels.loadReference || this.labels.customerName || this.labels.billToCode;
    }
  }),
  created: function created() {
    var _this = this;

    this.loadDrivers = this.data.drivers.map(function (driver) {
      return _objectSpread({}, driver, {
        uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])()
      });
    });
    this.loadDrivers.forEach(function (loadDriver) {
      if (loadDriver.driver_details && loadDriver.driver_details.length) {
        loadDriver.driver_details.forEach(function (driver) {
          _this.driverNames.push({
            name: driver.name,
            uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])()
          });
        });
      }

      if (loadDriver.truck && loadDriver.truck.truck_number) {
        _this.truckNumbers.push({
          number: loadDriver.truck.truck_number,
          uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])()
        });
      }

      if (loadDriver.trailer && loadDriver.trailer.trailer_number) {
        _this.trailerNumbers.push({
          number: loadDriver.trailer.trailer_number,
          uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])()
        });
      }
    });
  },
  methods: {
    editLoad: function editLoad() {
      this.$emit('editLoadSidebar', {
        loadId: this.load.load_id
      });
    },
    viewLoad: function viewLoad() {
      this.$emit('viewLoadSidebar', {
        loadId: this.load.load_id
      });
    },
    // Confirm Dialog
    onConfirm: function onConfirm(options) {
      this.$vs.dialog(_objectSpread({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes'
      }, options));
    },
    // Generate Invoice
    onConfirmGenerateInvoice: function onConfirmGenerateInvoice(load) {
      var _this2 = this;

      var options = {
        title: 'Generate Invoice',
        text: 'Are you sure you want to generate invoice?',
        accept: function accept() {
          return _this2.generateInvoice(load);
        }
      };
      this.onConfirm(options);
    },
    generateInvoice: function () {
      var _generateInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(load) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: load.load_id
                };
                _context.prev = 2;
                _context.next = 5;
                return this.$store.dispatch('load/generateInvoice', payload);

              case 5:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Invoice Generated',
                  text: 'Invoice Generated successfully.'
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context.t0.response.data.message
                });

              case 11:
                _context.prev = 11;
                this.$vs.loading.close(); // Start Loading For Load Datatable/Pipeline

                _context.next = 15;
                return this.$store.dispatch('load/startLoading');

              case 15:
                return _context.finish(11);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8, 11, 16]]);
      }));

      return function generateInvoice(_x) {
        return _generateInvoice.apply(this, arguments);
      };
    }(),
    // Request for Payment
    onConfirmRequestForPayment: function onConfirmRequestForPayment(load) {
      this.selectedPromptLoad = load;
      var text = "Are you sure you want to send request for payment with amount ".concat(load.total_amount, " USD");
      this.promptColor = 'warning';
      var noFactoring = load && load.customer && load.customer.noFactoring;

      if (!noFactoring && load.paymentOption != 'skipFactoring' && this.allFactoringCompanies && this.allFactoringCompanies.length > 0) {
        this.promptMessage = text + " to ".concat(this.allFactoringCompanies[0].billing_email, "?");
      } else {
        if (load && load.customer && load.customer.billing_email) {
          this.promptMessage = text + " to ".concat(load.customer.billing_email, "?");
        } else {
          this.promptMessage = text + "? (Missing customer billing email)";
          this.promptColor = 'danger';
        }
      }

      this.emailSubject = "Invoice for Load ".concat(load.refrence_id ? load.refrence_id : '');
      this.activePrompt = true;
    },
    requestForPayment: function () {
      var _requestForPayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(load) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: load.load_id,
                  subject: this.emailSubject
                };
                _context2.prev = 2;
                _context2.next = 5;
                return this.$store.dispatch('load/requestForPayment', payload);

              case 5:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Payment Request',
                  text: 'Request for Payment sent successfully.'
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context2.t0.response.data.message,
                  time: 8000
                });

              case 11:
                _context2.prev = 11;
                this.$vs.loading.close(); // Start Loading For Load Datatable/Pipeline

                _context2.next = 15;
                return this.$store.dispatch('load/startLoading');

              case 15:
                return _context2.finish(11);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8, 11, 16]]);
      }));

      return function requestForPayment(_x2) {
        return _requestForPayment.apply(this, arguments);
      };
    }(),
    // Payment Received
    onConfirmPaymentReceived: function onConfirmPaymentReceived(load) {
      this.paymentReceivedPrompt = {
        isActive: true,
        selectedLoad: load
      };
      this.receivedAmount = load.total_amount.toString(); // convering number into string because input type number accepts string and if value is 0 then it doesn't accept 0 as a default value;
    },
    paymentReceived: function () {
      var _paymentReceived = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: this.paymentReceivedPrompt.selectedLoad.load_id,
                  paidAmount: this.receivedAmount ? Number(this.receivedAmount) : null
                };
                _context3.prev = 2;
                _context3.next = 5;
                return this.$store.dispatch('load/paymentReceived', payload);

              case 5:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Payment Received',
                  text: 'Payment received successfully.'
                });
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context3.t0.response.data.message
                });

              case 11:
                _context3.prev = 11;
                this.$vs.loading.close(); // Start Loading For Load Datatable/Pipeline

                _context3.next = 15;
                return this.$store.dispatch('load/startLoading');

              case 15:
                return _context3.finish(11);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 8, 11, 16]]);
      }));

      return function paymentReceived() {
        return _paymentReceived.apply(this, arguments);
      };
    }(),
    onCardClick: function onCardClick() {
      this.canAccess(this.roleModify) ? this.editLoad() : this.viewLoad();
    },
    formatAmountValue: function formatAmountValue(amount) {
      return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_12__["formatAmount"])(amount);
    },
    initLabels: function initLabels(showLabels) {
      if (showLabels) {
        var _arr = _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_6___default()(this.labels);

        for (var _i = 0; _i < _arr.length; _i++) {
          var _arr$_i = _slicedToArray(_arr[_i], 1),
              key = _arr$_i[0];

          if (key === 'driver' || key === 'truck') {
            this.labels[key] = this.customization.show_driver_truck_on_pipeline;
          }

          if (showLabels[key] !== undefined) {
            this.labels[key] = showLabels[key] !== false;
          }
        }
      }
    },
    getEquipmentTypeName: function getEquipmentTypeName(equipmentType) {
      if (!equipmentType) return '';
      var type = this.equipmentTypeOptions.find(function (type) {
        return type.value === equipmentType;
      });
      return type ? type.title : '';
    },
    getShipperNameAddressFreightDetails: function getShipperNameAddressFreightDetails(load) {
      var _this3 = this;

      if (!load) return '';
      var shipperName = load.shipperName,
          city = load.city,
          state = load.state,
          shipperFreightDescription = load.shipperFreightDescription,
          shipperFreightEquipmentNumber = load.shipperFreightEquipmentNumber;
      var labelKeyValue = {
        shipperName: shipperName || '',
        shipperFreightEquipmentNumber: shipperFreightEquipmentNumber || '',
        shipperFreightDescription: shipperFreightDescription || '',
        shipperCityState: "".concat(city || '', ", ").concat(state || '')
      };
      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(labelKeyValue).filter(function (key) {
        return _this3.labels[key] && labelKeyValue[key];
      }).map(function (key) {
        return labelKeyValue[key];
      }).join(', ');
    },
    getReceiverNameAddress: function getReceiverNameAddress(load) {
      if (!load) return '';
      var _this$labels = this.labels,
          receiverName = _this$labels.receiverName,
          receiverCityState = _this$labels.receiverCityState;
      return "".concat(receiverName ? load.receiverName : '').concat(receiverName && load.receiverName && receiverCityState ? ', ' : '', " ").concat(receiverCityState ? "".concat(load.city, ", ").concat(load.state) : '');
    },
    getCardHeader: function getCardHeader(load) {
      if (!load) return '';
      var ret = '';
      var _this$labels2 = this.labels,
          loadNumber = _this$labels2.loadNumber,
          loadReference = _this$labels2.loadReference,
          customerName = _this$labels2.customerName,
          billToCode = _this$labels2.billToCode;

      if (loadNumber && load.load_unique_id) {
        ret += load.load_unique_id.toString();
      }

      if (loadReference && load.refrence_id) {
        if (ret) {
          ret += ' - ';
        }

        ret += load.refrence_id;
      }

      if (customerName && load.customer.company_name) {
        if (ret) {
          ret += ' - ';
        }

        ret += load.customer.company_name;
      }

      if (billToCode && load.billToCode) {
        if (ret) {
          ret += ' - ';
        }

        ret += load.billToCode;
      }

      return ret;
    },
    resetPaymentReceivedPrompt: function resetPaymentReceivedPrompt() {
      this.paymentReceivedPrompt = {
        isActive: false,
        selectedLoad: null
      };
      this.receivedAmount = '';
    }
  },
  watch: {
    showLabels: {
      handler: function handler(val) {
        this.initLabels(val);
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");






function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PipelineFilter",
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_5___default.a,
    FilterIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__["FilterIcon"],
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__["ChevronDownIcon"]
  },
  props: {
    value: {
      type: Object,
      default: function _default() {}
    }
  },
  inject: ["allTags", "allDispatchers", "allDrivers"]
  /** All are reactive variables , so call them as functions in code */
  ,
  data: function data() {
    return {
      openFilterDropdown: false,
      filterJson: {},
      columnsList: [{
        text: "Tag",
        value: "loadTag"
      }, {
        text: "Dispatcher",
        value: "loadDispatcher"
      }, {
        text: "Driver",
        value: "loadDriver"
      }],
      operators: {
        loadDispatcher: ["isAnyOf"],
        loadTag: ["isAnyOf"],
        loadDriver: ["isAnyOf"]
      },
      filterCondition: ["and"]
    };
  },
  computed: {
    filtersData: function filtersData() {
      return this.filterJson;
    },
    isFilterNotEmpty: function isFilterNotEmpty() {
      if (this.filterJson && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.filterJson).length != 0 && (this.filterJson.conditions || []).length) {
        return true;
      }

      return false;
    },
    tagOptions: function tagOptions() {
      return (this.allTags() || []).map(function (tag) {
        return _objectSpread({}, tag, {
          id: tag.tag_id,
          fullName: tag.business_name
        });
      });
    },
    dispatcherOptions: function dispatcherOptions() {
      return (this.allDispatchers() || []).map(function (dispatcher) {
        return _objectSpread({}, dispatcher, {
          fullName: "".concat(dispatcher.user_details.first_name, " ").concat(dispatcher.user_details.last_name),
          id: dispatcher.user_id
        });
      });
    },
    driverOptions: function driverOptions() {
      return this.allDrivers() || [];
    },
    columListToRender: function columListToRender() {
      var _this = this;

      return this.columnsList.map(function (column) {
        return _objectSpread({}, column, {
          hide: !!_this.selectedFilterColumns.includes(column.value)
        });
      });
    },
    selectedFilterColumns: function selectedFilterColumns() {
      return ((this.filterJson || {}).conditions || []).map(function (condition) {
        return condition.column;
      }).filter(Boolean);
    },
    hasFiltersToAdd: function hasFiltersToAdd() {
      return this.columListToRender.filter(function (x) {
        return !x.hide;
      }).length > 0;
    }
  },
  methods: {
    handleAddCondition: function handleAddCondition() {
      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.filterJson).length === 0) {
        this.filterJson = {
          conditions: [{
            column: "",
            cmp: "is",
            value: ""
          }],
          op: "and"
        };
      } else {
        this.filterJson.conditions.push({
          column: "",
          cmp: "is",
          value: ""
        });
      }
    },
    deleteCondition: function deleteCondition(index) {
      this.filterJson.conditions.splice(index, 1);

      if (!this.filterJson.conditions.length) {
        this.filterJson = {};
      }
    },
    handleFun: function handleFun(column, index) {
      var nullFiledColumns = ["loadDispatcher", "loadTag", "loadDriver"];

      if (nullFiledColumns.includes(column)) {
        this.filterJson.conditions[index].value = "";
        this.filterJson.conditions[index].cmp = (this.operators[column] || [])[0] || "";
      }
    },
    submitFilter: function submitFilter() {
      /* Validation Block : START */
      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.filterJson).length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(this.filterJson.conditions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.value == null || item.value == "" || item.column == null || item.column == "") {
              this.$vs.notify({
                color: "danger",
                title: "Error",
                text: "Filter condition is incomplete."
              });
              return;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      /* Validation Block : End */


      var filter = {};
      (this.filterJson.conditions || []).forEach(function (condition) {
        if (condition.column) {
          filter[condition.column] = condition.value;
        }
      });
      var res = {};
      if (filter.loadDispatcher) res.dispatcherIds = filter.loadDispatcher;
      if (filter.loadTag) res.tagIds = filter.loadTag;
      if (filter.loadDriver) res.driverIds = filter.loadDriver;
      this.$emit("input", res); // Update parent component via v-model

      this.$emit('update:Filters', this.filterJson);
      this.closeFilterPopup();
    },
    // open filter popup method
    openFilterPopup: function openFilterPopup() {
      this.mountInitFilterData();
      this.openFilterDropdown = true;
    },
    // close filter popup method
    closeFilterPopup: function closeFilterPopup() {
      this.openFilterDropdown = false;
      this.filterJson = {};
    },
    mountInitFilterData: function mountInitFilterData() {
      var _ref = this.value || {},
          dispatcherIds = _ref.dispatcherIds,
          tagIds = _ref.tagIds,
          driverIds = _ref.driverIds;

      var filterJson = {
        conditions: [],
        op: "and"
      };
      if ((dispatcherIds || []).length) filterJson.conditions.push({
        cmp: "isAnyOf",
        column: "loadDispatcher",
        value: dispatcherIds
      });
      if ((tagIds || []).length) filterJson.conditions.push({
        cmp: "isAnyOf",
        column: "loadTag",
        value: tagIds
      });
      if ((driverIds || []).length) filterJson.conditions.push({
        cmp: "isAnyOf",
        column: "loadDriver",
        value: driverIds
      });

      if (filterJson.conditions.length) {
        this.filterJson = filterJson;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=template&id=6a4d6fae&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=template&id=6a4d6fae& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "dispatch-calender"
  }, [_c("TimelineTab", {
    ref: "timelineTab",
    attrs: {
      returnData: {
        loads: true,
        timeOffCalendars: false
      },
      parentKey: "dispatchTimeline",
      showBarsInSingleRow: true
    },
    on: {
      updateLoad: _vm.editLoadSidebar
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=template&id=30e8baea&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=template&id=30e8baea&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "data-list-container w-full",
    attrs: {
      id: "data-list-list-view"
    }
  }, [_c("load-sidebar", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: true,
      expression: "true"
    }],
    ref: "loadSidebar",
    attrs: {
      isSidebarActive: _vm.addNewDataSidebar,
      data: _vm.sidebarData,
      isLoadDeleted: _vm.isLoadDeleted
    },
    on: {
      closeSidebar: _vm.closeSidebar,
      refreshCallingUi: _vm.refreshPageContent
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "pt-5"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col flex justify-between w-full"
  }, [_c("div", {
    staticClass: "flex items-center",
    staticStyle: {
      "max-width": "70%"
    }
  }, [_vm.canAccess(this.roleModify) ? _c("vs-button", {
    staticStyle: {
      "min-width": "130px"
    },
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.addNewData.apply(null, arguments);
      }
    }
  }, [_vm._v("\n            New Load\n          ")]) : _vm._e(), _vm._v(" "), _c("ul", {
    staticClass: "flex space-x-4 ml-2 mr-4",
    staticStyle: {
      "margin-bottom": "7px"
    }
  }, _vm._l(_vm.filteredDispatchOptions, function (item) {
    return _vm.canAccess(item.roles) ? _c("li", {
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
    }, [_vm._v("\n              " + _vm._s(item.title) + "\n            ")]) : _vm._e();
  }), 0), _vm._v(" "), !this.companyFeatureAccess.includes("basic") ? _c("portal-target", {
    staticClass: "spreadsheet-list-in-dispatch-header",
    attrs: {
      name: "spreadsheet-list-in-dispatch"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "flex space-x-4 items-center"
  }, [_vm.activeComponent == "list" && _vm.canAccess(this.roleModify) ? _c("div", {
    staticClass: "flex items-center justify-end"
  }, [_c("vs-dropdown", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isLoadDeleted && _vm.selectedLoadsList.length > 1,
      expression: "!isLoadDeleted && selectedLoadsList.length > 1"
    }]
  }, [_c("div", {
    staticClass: "filter-btn a-icon cursor-pointer py-2",
    staticStyle: {
      "z-index": "100"
    }
  }, [_c("span", {
    staticClass: "ml-1"
  }, [_vm._v("Batch Actions")]), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "ml-2",
    attrs: {
      size: "1x"
    }
  })], 1), _vm._v(" "), _c("vs-dropdown-menu", [_c("vs-dropdown-item", {
    attrs: {
      divider: ""
    }
  }, [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.massInvoicePopup = true;
      }
    }
  }, [_vm._v("Generate Mass Invoice")])], 1), _vm._v(" "), _c("vs-dropdown-item", {
    attrs: {
      divider: ""
    }
  }, [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.massInvoiceQbdPopup = true;
      }
    }
  }, [_vm._v("Sync to QuickBooks Desktop")])], 1), _vm._v(" "), _c("vs-dropdown-item", {
    attrs: {
      divider: ""
    }
  }, [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.onConfirmRequestMassInvoicePayment
    }
  }, [_vm._v("Request Mass Invoice Payment")])], 1), _vm._v(" "), _c("vs-dropdown-item", {
    attrs: {
      divider: ""
    }
  }, [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.onConfirmMultipleLoadsPaymentReceived
    }
  }, [_vm._v("Payment Received")])], 1), _vm._v(" "), _c("vs-dropdown-item", {
    attrs: {
      divider: ""
    }
  }, [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "danger",
      type: "border"
    },
    on: {
      click: _vm.onConfirmDeleteMultipleLoads
    }
  }, [_vm._v("Delete")])], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.activeComponent == "list" ? _c("div", [_c("popper", {
    attrs: {
      trigger: "clickToToggle",
      options: {
        placement: "bottom",
        modifiers: {
          offset: {
            offset: "0,10px"
          }
        }
      }
    }
  }, [_c("div", {
    staticClass: "popper"
  }, [_c("div", [_c("div", {
    staticClass: "p-2"
  }, [_c("p", {
    staticClass: "active-filter"
  }, [_vm._v("Active filters")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "filter-input"
  }, [_c("multiselect", {
    attrs: {
      placeholder: "Select columns",
      options: _vm.listColumnOptions,
      limit: 1,
      limitText: function limitText(count) {
        return "and ".concat(count, " more");
      },
      multiple: true,
      "allow-empty": false,
      "show-labels": false
    },
    model: {
      value: _vm.selectedColumnList,
      callback: function callback($$v) {
        _vm.selectedColumnList = $$v;
      },
      expression: "selectedColumnList"
    }
  })], 1), _vm._v(" "), _c("div", {
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
      value: _vm.selected_tag,
      callback: function callback($$v) {
        _vm.selected_tag = $$v;
      },
      expression: "selected_tag"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "filter-input"
  }, [_c("multiselect", {
    attrs: {
      "allow-empty": false,
      placeholder: "Select direction",
      "preselect-first": true,
      options: _vm.direction_options,
      label: "label",
      searchable: false,
      "show-labels": false
    },
    model: {
      value: _vm.direction,
      callback: function callback($$v) {
        _vm.direction = $$v;
      },
      expression: "direction"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "filter-input"
  }, [_c("multiselect", {
    attrs: {
      "allow-empty": false,
      placeholder: "Select load status",
      "preselect-first": true,
      options: _vm.loadStatusOptions,
      label: "label",
      searchable: false,
      "show-labels": false
    },
    model: {
      value: _vm.load_status,
      callback: function callback($$v) {
        _vm.load_status = $$v;
      },
      expression: "load_status"
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    attrs: {
      slot: "reference"
    },
    slot: "reference"
  }, [_c("div", {
    staticClass: "filter-btn a-icon cursor-pointer",
    staticStyle: {
      "z-index": "100"
    }
  }, [_c("filter-icon", {
    attrs: {
      size: "1x"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-1"
  }, [_vm._v("Filters")]), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "ml-2",
    attrs: {
      size: "1x"
    }
  })], 1)])])], 1) : _vm._e(), _vm._v(" "), _vm.activeComponent === "pipline" ? _c("div", [_c("PipelineFilter", {
    on: {
      "update:Filters": _vm.updatePipelineFilters
    },
    model: {
      value: _vm.pipelineFilter,
      callback: function callback($$v) {
        _vm.pipelineFilter = $$v;
      },
      expression: "pipelineFilter"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.activeComponent === "list" || _vm.activeComponent === "pipline" ? "min-width: 13.5rem" : ""
  }, [_vm.activeComponent === "list" || _vm.activeComponent === "pipline" ? _c("flat-pickr", {
    ref: "flat-pickr",
    staticClass: "w-full",
    attrs: {
      config: _vm.flat_pikr_config,
      placeholder: "Select Date Range"
    },
    on: {
      "on-change": _vm.handleFlatPickerInput
    },
    model: {
      value: _vm.date,
      callback: function callback($$v) {
        _vm.date = $$v;
      },
      expression: "date"
    }
  }) : _vm._e(), _vm._v(" "), _c("portal-target", {
    attrs: {
      name: "dispatchTimeline"
    }
  })], 1), _vm._v(" "), _vm.activeComponent == "list" ? _c("div", {
    staticClass: "flex items-center justify-end"
  }, [_vm.canAccess(this.roleModify) ? _c("vs-button", {
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
  }, [_vm._v("Export\n            ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.activeComponent === "pipline" ? _c("div", {
    staticClass: "flex items-center justify-end pr-1"
  }, [_c("vs-icon", {
    staticClass: "text-2xl cursor-pointer",
    attrs: {
      icon: "more_horiz"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.togglePipelineSidebar.apply(null, arguments);
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("portal-target", {
    attrs: {
      name: "spreadsheet-controls-in-dispatch"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row flex"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_vm.isNonSpreadsheetUi ? _c(_vm.activeComponent, {
    ref: "components",
    tag: "component",
    attrs: {
      loadStatus: _vm.load_status,
      selectedDateRange: _vm.date,
      selectedColumn: _vm.selectedColumnList,
      direction: _vm.direction,
      selectedTag: _vm.selected_tag,
      pipelineFilter: _vm.pipelineFilter,
      userCustomization: _vm.currentUserCustomizations
    },
    on: {
      "update:hideColumns": _vm.updatePipelineHideColumns,
      editLoadSidebar: _vm.editData,
      viewLoadSidebar: _vm.viewData,
      updateSelectedLoadsList: _vm.updateSelectedLoadsList
    }
  }) : _vm._e(), _vm._v(" "), _c("Spreadsheet", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isNonSpreadsheetUi,
      expression: "!isNonSpreadsheetUi"
    }],
    attrs: {
      activeComponent: _vm.isNonSpreadsheetUi ? 0 : _vm.activeComponent,
      dispatchTabDateRange: _vm.date
    },
    on: {
      updateActiveTab: _vm.updateActiveTab,
      updateDateRange: _vm.updateDateRange
    }
  })], 1), _vm._v(" "), _vm.isPipelineSidebarActive ? _c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.togglePipelineSidebar,
      expression: "togglePipelineSidebar"
    }],
    staticClass: "w-1/5 absolute right-0 bg-white"
  }, [_c("PipelineSidebar", {
    attrs: {
      userCustomization: _vm.currentUserCustomizations
    },
    on: {
      "update:hideColumns": _vm.updatePipelineHideColumns,
      "update:showLabels": _vm.updatePipelineShowLabels
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c("vs-popup", {
    staticClass: "holamundo",
    attrs: {
      title: "Mass Invoice",
      active: _vm.massInvoicePopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.massInvoicePopup = $event;
      }
    }
  }, [_c("vs-input", {
    attrs: {
      type: "number",
      label: "Invoice number"
    },
    model: {
      value: _vm.massInvoiceNumber,
      callback: function callback($$v) {
        _vm.massInvoiceNumber = $$v;
      },
      expression: "massInvoiceNumber"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.submitMassInvoice
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "danger",
      type: "filled"
    },
    on: {
      click: function click($event) {
        _vm.massInvoicePopup = false;
      }
    }
  }, [_vm._v("Cancel")])], 1)], 1), _vm._v(" "), _c("vs-popup", {
    staticClass: "holamundo",
    attrs: {
      title: "Sync Mass Invoice to QuickBooks Desktop",
      active: _vm.massInvoiceQbdPopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.massInvoiceQbdPopup = $event;
      }
    }
  }, [_vm._v("\n    Invoice is automatically synced to QuickBooks Desktop when generated. Are\n    you sure you want to manually sync these loads to QuickBooks Desktop?\n    "), _c("vs-input", {
    attrs: {
      type: "number",
      label: "Invoice number"
    },
    model: {
      value: _vm.massInvoiceNumber,
      callback: function callback($$v) {
        _vm.massInvoiceNumber = $$v;
      },
      expression: "massInvoiceNumber"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.submitMassInvoiceQbd
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "danger",
      type: "filled"
    },
    on: {
      click: function click($event) {
        _vm.massInvoiceQbdPopup = false;
      }
    }
  }, [_vm._v("Cancel")])], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/List.vue?vue&type=template&id=10e1a10e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/List.vue?vue&type=template&id=10e1a10e&scoped=true& ***!
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
    staticClass: "vx-col w-full pt-8"
  }, [_c("DataTable", {
    staticClass: "p-datatable-sm",
    attrs: {
      value: _vm.items.data,
      selection: _vm.selectedLoadsList,
      lazy: true,
      paginator: true,
      rows: _vm.rows,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      filterDisplay: "row",
      loading: _vm.loading,
      responsiveLayout: "scroll",
      columnResizeMode: "expand",
      resizableColumns: true,
      rowsPerPageOptions: _vm.rowsPerPageOptions
    },
    on: {
      "update:selection": function updateSelection($event) {
        _vm.selectedLoadsList = $event;
      },
      sort: function sort($event) {
        _vm.onSort(_vm.handleSortParam($event));
      },
      page: function page($event) {
        return _vm.onPage($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_vm._v(" No records found ")];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_vm._v("\n      In total there are " + _vm._s(_vm.totalRecords) + " items.\n    ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("Column", {
    attrs: {
      hidden: !_vm.canAccess(_vm.roleModify) || _vm.items.data.length ? false : true,
      selectionMode: "multiple",
      headerStyle: {
        width: "3em"
      }
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: !_vm.selectedColumnData.includes("Load"),
      showFilterMenu: false,
      field: "load_unique_id",
      header: "Load",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n        " + _vm._s(slotProps.data.load_unique_id) + "\n      ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          staticStyle: {
            width: "60px"
          },
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.debouncedOnInputFilter
          },
          model: {
            value: _vm.filters["load_unique_id"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "load_unique_id", $$v);
            },
            expression: "filters['load_unique_id']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Load Reference"),
      showFilterMenu: false,
      field: "refrence_id",
      header: "Load Reference",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "dispatch-list-limit-column-width"
        }, [_vm._v("\n          " + _vm._s(slotProps.data.refrence_id) + "\n        ")])];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.debouncedOnInputFilter
          },
          model: {
            value: _vm.filters["refrence_id"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "refrence_id", $$v);
            },
            expression: "filters['refrence_id']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: !_vm.showCompanyInternalReferenceForCompanies || _vm.checkColumnVisibility("Internal Reference"),
      showFilterMenu: false,
      field: "companyInternalReference",
      header: "Internal Reference",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "dispatch-list-limit-column-width"
        }, [_vm._v("\n          " + _vm._s(slotProps.data.companyInternalReference) + "\n        ")])];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.debouncedOnInputFilter
          },
          model: {
            value: _vm.filters["companyInternalReference"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "companyInternalReference", $$v);
            },
            expression: "filters['companyInternalReference']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Ship Date"),
      showFilterMenu: false,
      field: "shipping_date",
      header: "Ship Date",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n        " + _vm._s(slotProps.data.ship_date) + " "), _c("br"), _vm._v("\n        " + _vm._s(_vm.formatShipDeliveryTime(slotProps.data.ship_time, slotProps.data.ship_end_time)) + "\n      ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker input-filter",
          attrs: {
            config: _vm.flat_pikr_config
          },
          on: {
            "on-change": function onChange($event) {
              return _vm.debouncedOnInputFilter($event, "datePicker");
            }
          },
          model: {
            value: _vm.filters["shipping_date"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "shipping_date", $$v);
            },
            expression: "filters['shipping_date']"
          }
        }), _vm._v(" "), _vm.filters["shipping_date"] ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              _vm.filters["shipping_date"] = "";
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Del. Date"),
      showFilterMenu: false,
      field: "delivery_date",
      header: "Del. Date",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n        " + _vm._s(slotProps.data.delivery_date) + " "), _c("br"), _vm._v("\n        " + _vm._s(_vm.formatShipDeliveryTime(slotProps.data.delivery_time, slotProps.data.delivery_end_time)) + "\n      ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker input-filter",
          attrs: {
            config: _vm.flat_pikr_config
          },
          on: {
            "on-change": function onChange($event) {
              return _vm.debouncedOnInputFilter($event, "datePicker");
            }
          },
          model: {
            value: _vm.filters["delivery_date"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "delivery_date", $$v);
            },
            expression: "filters['delivery_date']"
          }
        }), _vm._v(" "), _vm.filters["delivery_date"] ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              _vm.filters["delivery_date"] = "";
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Customer"),
      showFilterMenu: false,
      field: "customer",
      header: "Customer",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "dispatch-list-limit-column-width"
        }, [_vm._v("\n          " + _vm._s(slotProps.data.customer.company_name) + "\n        ")])];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.debouncedOnInputFilter
          },
          model: {
            value: _vm.filters["customer"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "customer", $$v);
            },
            expression: "filters['customer']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Pick up"),
      showFilterMenu: false,
      field: "pick_up",
      header: "Pick up",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n        " + _vm._s(slotProps.data.pick_up) + "\n      ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.debouncedOnInputFilter
          },
          model: {
            value: _vm.filters["pick_up"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "pick_up", $$v);
            },
            expression: "filters['pick_up']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Delivery"),
      showFilterMenu: false,
      field: "delivery",
      header: "Delivery",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n        " + _vm._s(slotProps.data.delivery) + "\n      ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.debouncedOnInputFilter
          },
          model: {
            value: _vm.filters["delivery"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "delivery", $$v);
            },
            expression: "filters['delivery']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Pickup No."),
      showFilterMenu: false,
      field: "pickupNumber",
      header: "Pickup No.",
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n        " + _vm._s(slotProps.data.pickupNumber) + "\n      ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.debouncedOnInputFilter
          },
          model: {
            value: _vm.filters["pickupNumber"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "pickupNumber", $$v);
            },
            expression: "filters['pickupNumber']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Delivery No."),
      showFilterMenu: false,
      field: "deliveryNumber",
      header: "Delivery No.",
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n        " + _vm._s(slotProps.data.deliveryNumber) + "\n      ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.debouncedOnInputFilter
          },
          model: {
            value: _vm.filters["deliveryNumber"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "deliveryNumber", $$v);
            },
            expression: "filters['deliveryNumber']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.userRole != "warehouse_operator",
      showFilterMenu: false,
      field: "shipping_date",
      header: "Pick up & Appt",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n        " + _vm._s(slotProps.data.pick_up) + " "), _c("br"), _vm._v("\n        " + _vm._s(_vm.formatShipDeliveryDate(slotProps.data.ship_date)) + "\n\n        " + _vm._s(slotProps.data.ship_time ? "@" : "") + "\n        " + _vm._s(_vm.formatShipDeliveryTime(slotProps.data.ship_time, slotProps.data.ship_end_time)) + "\n      ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker input-filter",
          attrs: {
            config: _vm.flat_pikr_config
          },
          on: {
            "on-change": function onChange($event) {
              return _vm.debouncedOnInputFilter($event, "datePicker");
            }
          },
          model: {
            value: _vm.filters["shipping_date"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "shipping_date", $$v);
            },
            expression: "filters['shipping_date']"
          }
        }), _vm._v(" "), _vm.filters["shipping_date"] ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              _vm.filters["shipping_date"] = "";
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.userRole != "warehouse_operator",
      showFilterMenu: false,
      field: "delivery_date",
      header: "Delivery & Appt",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n        " + _vm._s(slotProps.data.delivery) + " "), _c("br"), _vm._v("\n        " + _vm._s(_vm.formatShipDeliveryDate(slotProps.data.delivery_date)) + "\n        " + _vm._s(slotProps.data.delivery_time ? "@" : "") + "\n        " + _vm._s(_vm.formatShipDeliveryTime(slotProps.data.delivery_time, slotProps.data.delivery_end_time)) + "\n      ")];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("div", {
          staticClass: "clearable-date-picker p-column-filter w-full"
        }, [_c("flat-pickr", {
          staticClass: "date-picker input-filter",
          attrs: {
            config: _vm.flat_pikr_config
          },
          on: {
            "on-change": function onChange($event) {
              return _vm.debouncedOnInputFilter($event, "datePicker");
            }
          },
          model: {
            value: _vm.filters["delivery_date"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "delivery_date", $$v);
            },
            expression: "filters['delivery_date']"
          }
        }), _vm._v(" "), _vm.filters["delivery_date"] ? _c("vs-icon", {
          staticClass: "close-icon",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              _vm.filters["delivery_date"] = "";
            }
          }
        }) : _vm._e()], 1)];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: !_vm.selectedColumnData.includes("Drivers"),
      showFilterMenu: false,
      field: "driver_name",
      header: "Drivers",
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "dispatch-list-limit-column-width"
        }, [_vm._v("\n          " + _vm._s(_vm.formatDriverNames(slotProps.data.drivers)) + "\n        ")])];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("InputText", {
          staticClass: "p-column-filter",
          attrs: {
            type: "text"
          },
          on: {
            input: _vm.debouncedOnInputFilter
          },
          model: {
            value: _vm.filters["driver_name"],
            callback: function callback($$v) {
              _vm.$set(_vm.filters, "driver_name", $$v);
            },
            expression: "filters['driver_name']"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Notes"),
      showFilterMenu: false,
      field: "dispatcher_notes",
      header: "Notes",
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("textarea", {
          staticClass: "p-column-filter dispatch-list-cs-textarea",
          staticStyle: {
            width: "120px"
          },
          attrs: {
            disabled: !_vm.canAccess(_vm.roleModify)
          },
          domProps: {
            value: slotProps.data.dispatcher_notes
          },
          on: {
            input: function input($event) {
              return _vm.onChangeNote($event.target.value, slotProps.data);
            }
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      hidden: _vm.checkColumnVisibility("Load Status"),
      showFilterMenu: false,
      field: "status",
      header: "Load Status",
      sortable: true
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "dispatch-list-limit-column-width"
        }, [_vm._v("\n          " + _vm._s(_vm.getStatusLabel(slotProps.data)) + "\n        ")])];
      }
    }, {
      key: "filter",
      fn: function fn() {
        return [_c("Dropdown", {
          staticClass: "p-column-filter filter-dropdown",
          attrs: {
            options: _vm.loadStatusesDropdownValues,
            optionLabel: "label",
            optionValue: "value",
            showClear: true,
            appendTo: "body"
          },
          on: {
            change: function change($event) {
              return _vm.debouncedOnInputFilter($event, "dropdown");
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
      },
      proxy: true
    }])
  }), _vm._v(" "), _vm.canAccess(_vm.roleModify) && _vm.customization.show_qbd_invoice_sync_status_on_list ? _c("Column", {
    attrs: {
      showFilterMenu: false,
      field: "qbdSyncStatus",
      header: "QBD Sync Status",
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "dispatch-list-limit-column-width"
        }, [_vm._v("\n          " + _vm._s(_vm.computeQbdSyncStatus(slotProps.data.qbdSingleInvoices, slotProps.data.qbdMassInvoices)) + "\n        ")])];
      }
    }], null, false, 1240834459)
  }) : _vm._e(), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Action",
      hidden: !_vm.selectedColumnData.includes("Action")
    },
    scopedSlots: _vm._u([_vm.canAccess(_vm.roleModify) ? {
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "flex items-center space-x-2"
        }, [slotProps.data.loadPods ? _vm._l(slotProps.data.loadPods, function (loadImage, ix) {
          return _c("vx-tooltip", {
            key: ix,
            staticClass: "mt-1",
            staticStyle: {
              display: "flex",
              "align-items": "end"
            },
            attrs: {
              text: "View POD"
            }
          }, [_c("vs-icon", {
            staticClass: "papper-clip-vertical",
            attrs: {
              size: "small",
              icon: "attachment"
            },
            on: {
              click: function click($event) {
                return _vm.openLoadPOD(loadImage);
              }
            }
          })], 1);
        }) : slotProps.data.podAvailable ? _c("vx-tooltip", {
          staticClass: "mt-2",
          attrs: {
            text: "POD available"
          }
        }, [_c("vs-icon", {
          staticClass: "papper-clip-vertical",
          attrs: {
            size: "small",
            icon: "attachment"
          }
        })], 1) : _vm._e(), _vm._v(" "), _c("vx-tooltip", {
          attrs: {
            text: "Edit"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "primary",
            type: "filled",
            "icon-pack": "feather",
            icon: "icon-edit",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.editData(slotProps.data);
            }
          }
        })], 1), _vm._v(" "), _vm.loadStatus.value != "deleted" ? [_vm.showQboButton ? _c("vx-tooltip", {
          attrs: {
            text: "Sync to QuickBooks Online"
          }
        }, [!slotProps.data.invoice_file_name || !slotProps.data.invoice_file_name.startsWith("mass-invoice") ? _c("vs-button", {
          attrs: {
            color: "success",
            type: "filled",
            icon: "cloud",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.onSyncToQuickbooks(slotProps.data);
            }
          }
        }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.showQbdButton ? _c("vx-tooltip", {
          attrs: {
            text: "Sync to QuickBooks Desktop"
          }
        }, [!slotProps.data.invoice_file_name || !slotProps.data.invoice_file_name.startsWith("mass-invoice") ? _c("vs-button", {
          attrs: {
            color: "success",
            type: "filled",
            icon: "desktop_windows",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.onSyncToQbd(slotProps.data);
            }
          }
        }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.loadPaymentStatus.includes(slotProps.data.status) ? [(!slotProps.data.invoice_file_name || !slotProps.data.invoice_file_name.startsWith("mass-invoice")) && (slotProps.data.status == _vm.loadStatuses.delivered || slotProps.data.status == _vm.loadStatuses.invoice_created) ? [_c("vx-tooltip", {
          attrs: {
            text: "Generate Invoice"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "#7474be",
            type: "filled",
            icon: "receipt",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.showInvoicePrompt(slotProps.data);
            }
          }
        })], 1)] : _vm._e(), _vm._v(" "), (!slotProps.data.invoice_file_name || !slotProps.data.invoice_file_name.startsWith("mass-invoice")) && (slotProps.data.status == _vm.loadStatuses.invoice_created || slotProps.data.status == _vm.loadStatuses.invoice_sent) ? [_c("vx-tooltip", {
          attrs: {
            text: "Request for Payment"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "warning",
            type: "filled",
            icon: "payment",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.onConfirmRequestForPayment(slotProps.data);
            }
          }
        })], 1)] : _vm._e(), _vm._v(" "), slotProps.data.status == _vm.loadStatuses.invoice_sent ? [_c("vx-tooltip", {
          attrs: {
            text: "Payment Received"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "success",
            type: "filled",
            "icon-pack": "feather",
            icon: "icon-check-circle",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.showPaymentReceivedPrompt(slotProps.data);
            }
          }
        })], 1)] : _vm._e()] : _vm._e()] : _vm._e()], 2)];
      }
    } : !_vm.canAccess(_vm.roleModify) ? {
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", {
          staticClass: "flex items-center space-x-2"
        }, [_c("vx-tooltip", {
          attrs: {
            text: "View"
          }
        }, [_c("vs-button", {
          attrs: {
            color: "success",
            type: "filled",
            "icon-pack": "feather",
            icon: "icon-eye",
            size: "small",
            radius: ""
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.viewData(slotProps.data);
            }
          }
        })], 1)], 1)];
      }
    } : null], null, true)
  })], 1), _vm._v(" "), _c("vs-prompt", {
    staticClass: "custom-prompt",
    attrs: {
      "accept-text": "Yes",
      color: _vm.promptColor,
      title: "Payment Requested",
      active: _vm.paymentRequestPrompt.isActive
    },
    on: {
      cancel: _vm.resetPaymentRequestPrompt,
      accept: _vm.requestForPayment,
      close: _vm.resetPaymentRequestPrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.paymentRequestPrompt, "isActive", $event);
      }
    }
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.promptMessage))]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("p", {
    staticClass: "mb-0 mr-3"
  }, [_vm._v("Email Subject :")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-4/5",
    attrs: {
      placeholder: "Email"
    },
    model: {
      value: _vm.emailSubject,
      callback: function callback($$v) {
        _vm.emailSubject = $$v;
      },
      expression: "emailSubject"
    }
  })], 1)]), _vm._v(" "), _c("vs-prompt", {
    staticClass: "invoice-generated-popup",
    attrs: {
      "accept-text": "Yes",
      title: "Generate Invoice",
      active: _vm.invoicePrompt.isActive
    },
    on: {
      cancel: _vm.resetInvoicePrompt,
      accept: function accept() {
        return _vm.generateInvoice(_vm.invoicePrompt.selectedLoad);
      },
      close: _vm.resetInvoicePrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.invoicePrompt, "isActive", $event);
      }
    }
  }, [_c("div", {
    staticClass: "flex column items-center"
  }, [_c("p", {
    staticClass: "mb-0 mr-3"
  }, [_vm._v("Are you sure you want to generate invoice?")])]), _vm._v(" "), !_vm.invoicePrompt.noFactoring && this.allFactoringCompanies && this.allFactoringCompanies.length > 0 ? _c("div", {
    staticClass: "w-full mt-3"
  }, [_c("div", {
    staticClass: "flex flex-row items-center justify-between"
  }, [_c("div", {
    staticClass: "w-full relative"
  }, [_c("vs-checkbox", {
    staticClass: "factoring-checkbox",
    model: {
      value: _vm.invoicePrompt.skipFactoring,
      callback: function callback($$v) {
        _vm.$set(_vm.invoicePrompt, "skipFactoring", $$v);
      },
      expression: "invoicePrompt.skipFactoring"
    }
  }, [_vm._v("\n            Skip Factoring\n          ")])], 1)])]) : _vm._e()]), _vm._v(" "), _c("vs-prompt", {
    staticClass: "payment-received-prompt",
    attrs: {
      "accept-text": "Yes",
      color: "primary",
      title: "Payment Received",
      active: _vm.paymentReceivedPrompt.isActive
    },
    on: {
      cancel: _vm.resetPaymentReceivedPrompt,
      accept: _vm.paymentReceived,
      close: _vm.resetPaymentReceivedPrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.paymentReceivedPrompt, "isActive", $event);
      }
    }
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v("\n      Are you sure you want to mark as paid with the following amount?\n    ")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    attrs: {
      type: "number",
      placeholder: "Amount"
    },
    model: {
      value: _vm.receivedAmount,
      callback: function callback($$v) {
        _vm.receivedAmount = $$v;
      },
      expression: "receivedAmount"
    }
  })], 2)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=template&id=0a3d316a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=template&id=0a3d316a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-4 gap-4 draggable-row"
  }, [_vm._l(_vm.visibleColumns, function (column) {
    return _c("div", {
      key: column.id,
      staticClass: "vx-col draggable-col",
      style: _vm.getColumnWidth
    }, [_c("div", {
      staticClass: "px-2"
    }, [_c("div", {
      staticClass: "flex items-center justify-between"
    }, [_c("h3", {
      staticClass: "text-base opacity-75"
    }, [_vm._v(_vm._s(column.label))]), _vm._v(" "), _c("vs-dropdown", {
      staticClass: "cursor-pointer ml-2",
      attrs: {
        "vs-custom-content": "",
        "vs-trigger-click": ""
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: "more_horiz"
      }
    }), _vm._v(" "), _c("vs-dropdown-menu", [_c("vs-dropdown-item", [_c("div", {
      staticClass: "m-2 cursor-pointer hover:text-primary",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.hideColumn(column.key);
        }
      }
    }, [_c("label", {
      staticClass: "cursor-pointer ml-2",
      domProps: {
        textContent: _vm._s("Hide Column (for me)")
      }
    })])])], 1)], 1)], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
      staticClass: "draggable-list"
    }, [_c("draggable", {
      staticClass: "p-2 space-y-4 overflow-y-auto draggable-item",
      attrs: {
        list: _vm.$data[column.data],
        group: "items",
        disabled: !_vm.canAccess(_vm.roleModify),
        "data-status": column.value
      },
      on: {
        change: function change($event) {
          return _vm.changeStatus(column.value, $event);
        }
      }
    }, _vm._l(_vm.$data[column.data], function (item) {
      return _c("draggable-card", {
        key: item.uuid,
        attrs: {
          data: item,
          showLabels: _vm.showLabels
        },
        on: {
          editLoadSidebar: _vm.editedLoadSidebar,
          viewLoadSidebar: _vm.viewLoadSidebar
        }
      });
    }), 1)], 1)], 1);
  }), _vm._v(" "), _c("vs-prompt", {
    staticClass: "invoice-generated-popup",
    attrs: {
      "accept-text": "Yes",
      title: "Generate Invoice",
      active: _vm.invoicePrompt.isActive
    },
    on: {
      cancel: _vm.resetInvoicePrompt,
      accept: function accept() {
        return _vm.generateInvoice(_vm.invoicePrompt.selectedLoad);
      },
      close: _vm.resetInvoicePrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.invoicePrompt, "isActive", $event);
      }
    }
  }, [_c("div", {
    staticClass: "flex column items-center"
  }, [_c("p", {
    staticClass: "mb-0 mr-3"
  }, [_vm._v("Are you sure you want to generate invoice?")])]), _vm._v(" "), !_vm.invoicePrompt.noFactoring && this.allFactoringCompanies && this.allFactoringCompanies.length > 0 ? _c("div", {
    staticClass: "w-full mt-3"
  }, [_c("div", {
    staticClass: "flex flex-row items-center justify-between"
  }, [_c("div", {
    staticClass: "w-full relative"
  }, [_c("vs-checkbox", {
    staticClass: "factoring-checkbox",
    model: {
      value: _vm.invoicePrompt.skipFactoring,
      callback: function callback($$v) {
        _vm.$set(_vm.invoicePrompt, "skipFactoring", $$v);
      },
      expression: "invoicePrompt.skipFactoring"
    }
  }, [_vm._v("\n            Skip Factoring\n          ")])], 1)])]) : _vm._e()])], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=template&id=08d4e88c&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=template&id=08d4e88c& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    ref: "spreadsheet-tab",
    staticClass: "spreadsheet-tab-in-dispatch"
  }, [_c("portal", {
    attrs: {
      to: "spreadsheet-list-in-dispatch"
    }
  }, [_c("div", {
    staticClass: "flex sm:flex-row flex-col md:items-center flex-wrap",
    class: [_vm.spreadsheetForSpecificUser ? "justify-between" : "justify-end"]
  }, [_vm.spreadsheetForSpecificUser ? _c("div", {
    staticClass: "spreadsheet-list-width-home-tab"
  }, [_c("spreadsheet-list", {
    ref: "spreadSheetList",
    attrs: {
      accessLevel: _vm.accessLevel,
      hideHomeTab: true,
      activeTab: _vm.selectedTab
    },
    on: {
      spreadsheetHeaderProperties: _vm.spreadsheetHeaderProperties,
      updateSpreadSheetList: _vm.updateSpreadSheetList
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _vm.selectedTab ? _c("portal", {
    attrs: {
      to: "spreadsheet-controls-in-dispatch"
    }
  }, [_c("div", [_c("div", {
    staticClass: "flex items-center"
  }, [_vm.hasSpreadsheetList ? [_c("vs-dropdown", {
    staticStyle: {
      "min-width": "116px"
    },
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
    }
  }, [_c("div", {
    ref: "anytime",
    staticClass: "flex items-center"
  }, [_c("vs-icon", {
    attrs: {
      icon: "event_note",
      color: "#00ADC2"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "mr-2 ml-1",
    staticStyle: {
      color: "#00adc2"
    }
  }, [_vm._v(_vm._s(_vm.getSelectedDateRange))])], 1), _vm._v(" "), _c("vs-dropdown-menu", [_c("div", {
    staticClass: "p-3"
  }, [_c("div", {
    staticClass: "flex flex-col-reverse sm:flex-row"
  }, [_c("div", [_c("div", {
    staticClass: "relative"
  }, [_c("vs-icon", {
    staticClass: "calendar-icon",
    attrs: {
      icon: "event_note",
      color: "#7367F0"
    }
  }), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.flat_pikr_config
    },
    on: {
      "on-change": _vm.handleChangeDate
    },
    model: {
      value: _vm.selectedDateRange,
      callback: function callback($$v) {
        _vm.selectedDateRange = $$v;
      },
      expression: "selectedDateRange"
    }
  })], 1)])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_vm.accessLevel == 1 || _vm.accessLevel == 2 ? _c("div", {
    staticClass: "px-2 cursor-pointer flex items-center",
    on: {
      click: _vm.handleSpreadsheetShare
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "share",
      color: "primary"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-primary ml-1"
  }, [_vm._v("Share")])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "px-2 cursor-pointer flex items-center",
    on: {
      click: _vm.refreshSpreadsheet
    }
  }, [_c("vs-icon", {
    attrs: {
      size: "small",
      icon: "autorenew"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Refresh")])], 1)])] : _vm._e()], 2)])]) : _vm._e(), _vm._v(" "), _c("div", [_vm.spreadsheetForSpecificUser && _vm.selectedTab ? _c("spreadsheet", {
    ref: "spreadsheet",
    attrs: {
      selectedSheetId: _vm.selectedTab,
      selectedDateRange: _vm.spreadsheetDateRange,
      filterJsonCache: _vm.filterJson
    },
    on: {
      updateFilterJson: _vm.saveFilterJson
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("vs-popup", {
    attrs: {
      title: "Share ".concat(_vm.selectedSpreadsheetName),
      active: _vm.sharePopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.sharePopup = $event;
      }
    }
  }, [_c("share-spreadsheet-popup", {
    ref: "accessLevelRef",
    attrs: {
      spreadsheetId: _vm.selectedTab
    }
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=template&id=0c673798&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=template&id=0c673798& ***!
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

  return _c("vx-card", {
    staticClass: "hover:shadow",
    attrs: {
      "no-shadow": "",
      "card-border": ""
    },
    on: {
      click: _vm.onCardClick
    }
  }, [[_c("div", {
    staticClass: "flex justify-between items-center"
  }, [_c("span", {
    staticClass: "flex"
  }, [_vm.isCardHeaderVisible ? _c("h6", {
    staticClass: "break-all",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.getCardHeader(_vm.load)) + "\n        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "dropdown"
  }, [_c("a", {
    staticClass: "inline-block w-5 h-5 flex items-center",
    attrs: {
      "href.prevent": ""
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        {}
      }
    }
  }, [_c("feather-icon", {
    attrs: {
      icon: "EditIcon",
      svgClasses: "w-full h-full text-grey stroke-current cursor-pointer"
    }
  })], 1), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu"
  }, [_vm.canAccess(this.roleModify) ? _c("li", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.editLoad.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("feather-icon", {
    staticClass: "mr-2",
    attrs: {
      icon: "EditIcon",
      svgClasses: "w-4 h-4 stroke-current cursor-pointer"
    }
  }), _vm._v("\n              Edit\n            ")], 1)]) : _c("li", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.viewLoad.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("feather-icon", {
    staticClass: "mr-2",
    attrs: {
      icon: "EditIcon",
      svgClasses: "w-4 h-4 stroke-current cursor-pointer"
    }
  }), _vm._v("\n              View\n            ")], 1)]), _vm._v(" "), _vm.loadPaymentStatus.includes(_vm.load.status) && _vm.canAccess(this.roleModify) ? [(!_vm.load.invoice_file_name || !_vm.load.invoice_file_name.startsWith("mass-invoice")) && _vm.load.status == _vm.loadStatuses.delivered ? [_c("li", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.onConfirmGenerateInvoice(_vm.load);
      }
    }
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("feather-icon", {
    staticClass: "mr-2",
    attrs: {
      icon: "FileTextIcon",
      svgClasses: "w-4 h-4 stroke-current cursor-pointer"
    }
  }), _vm._v("\n                  Generate Invoice\n                ")], 1)])] : !_vm.load.invoice_file_name.startsWith("mass-invoice") && (_vm.load.status == _vm.loadStatuses.invoice_created || _vm.load.status == _vm.loadStatuses.invoice_sent) ? [_c("vs-dropdown-item", {
    attrs: {
      divider: ""
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.onConfirmRequestForPayment(_vm.load);
      }
    }
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("feather-icon", {
    staticClass: "mr-2",
    attrs: {
      icon: "CreditCardIcon",
      svgClasses: "w-4 h-4 stroke-current cursor-pointer"
    }
  }), _vm._v("\n                  Request for Payment\n                ")], 1)]), _vm._v(" "), _c("vs-prompt", {
    staticClass: "custom-prompt",
    attrs: {
      "accept-text": "Yes",
      color: _vm.promptColor,
      title: "Payment Requested",
      active: _vm.activePrompt
    },
    on: {
      cancel: function cancel($event) {
        _vm.activePrompt = false;
      },
      accept: function accept($event) {
        return _vm.requestForPayment(_vm.load);
      },
      close: function close($event) {
        _vm.activePrompt = false;
      },
      "update:active": function updateActive($event) {
        _vm.activePrompt = $event;
      }
    }
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.promptMessage))]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("p", {
    staticClass: "mb-0 mr-3"
  }, [_vm._v("Email Subject :")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-4/5",
    attrs: {
      placeholder: "Email"
    },
    model: {
      value: _vm.emailSubject,
      callback: function callback($$v) {
        _vm.emailSubject = $$v;
      },
      expression: "emailSubject"
    }
  })], 1)])] : _vm._e(), _vm._v(" "), _vm.load.status == _vm.loadStatuses.invoice_sent ? [_c("vs-dropdown-item", {
    attrs: {
      divider: ""
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.onConfirmPaymentReceived(_vm.load);
      }
    }
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("feather-icon", {
    staticClass: "mr-2",
    attrs: {
      icon: "CheckCircleIcon",
      svgClasses: "w-4 h-4 stroke-current cursor-pointer"
    }
  }), _vm._v("\n                  Payment Received\n                ")], 1)])] : _vm._e()] : _vm._e()], 2)])])], _vm._v(" "), [_c("div", {
    staticClass: "w-full py-2 space-y-1"
  }, [_c("ul", _vm._l(_vm.shipperReceiverOrderedList, function (address) {
    return _c("li", {
      key: address.uuid,
      staticClass: "flex space-x-2",
      staticStyle: {
        "font-size": "12px"
      }
    }, [address.type === "shipper" && _vm.isShipperNameCityStateDateTimeVisible || address.type === "receiver" && _vm.isReceiverNameCityStateDateTimeVisible ? _c("p", [_vm._v("\n            " + _vm._s(address.indexLabel) + ":\n          ")]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "flex"
    }, [address.type === "shipper" ? [_vm._v("\n              " + _vm._s(_vm.getShipperNameAddressFreightDetails(address)) + "\n            ")] : address.type === "receiver" ? [_vm._v("\n              " + _vm._s(_vm.getReceiverNameAddress(address)) + "\n            ")] : _vm._e(), _vm._v(" "), address.type === "shipper" && _vm.labels.shipperDateTime ? [_vm._v("\n              " + _vm._s(_vm._f("formatDate")(address.shipping_date.slice(5))) + "\n              " + _vm._s(address.shipping_time) + "\n            ")] : address.type === "receiver" && _vm.labels.receiverDateTime ? [_vm._v("\n              " + _vm._s(_vm._f("formatDate")(address.delivery_date.slice(5))) + "\n              " + _vm._s(address.delivery_time) + "\n            ")] : _vm._e()], 2)]);
  }), 0)]), _vm._v(" "), _vm.labels.equipmentType && _vm.load.equipmentType ? [_c("span", {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.getEquipmentTypeName(_vm.load.equipmentType)) + "\n      ")])] : _vm._e(), _vm._v(" "), _vm.isDriverTruckTrailerVisible && _vm.isDriverTruckTrailerAvailable ? _c("div", {
    staticClass: "items-center flex flex-wrap"
  }, [_vm.labels.driver ? _vm._l(this.driverNames, function (driverName) {
    return _c("vs-chip", {
      key: driverName.uuid,
      attrs: {
        color: "primary",
        transparent: ""
      }
    }, [_vm._v("\n          " + _vm._s(driverName.name) + "\n        ")]);
  }) : _vm._e(), _vm._v(" "), _vm.labels.truck ? _vm._l(this.truckNumbers, function (truckNumber) {
    return _c("vs-chip", {
      key: truckNumber.uuid,
      attrs: {
        color: "primary",
        transparent: ""
      }
    }, [_vm._v("\n          " + _vm._s(truckNumber.number) + "\n        ")]);
  }) : _vm._e(), _vm._v(" "), _vm.labels.trailer ? _vm._l(this.trailerNumbers, function (trailerNumber) {
    return _c("vs-chip", {
      key: trailerNumber.uuid,
      attrs: {
        color: "primary",
        transparent: ""
      }
    }, [_vm._v("\n          " + _vm._s(trailerNumber.number) + "\n        ")]);
  }) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.labels.miles || _vm.labels.totalAmount ? _c("div", {
    staticClass: "flex mt-2"
  }, [_vm.labels.miles && _vm.load.miles ? _c("label", {
    staticClass: "font-semibold",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.load.miles ? Math.round(_vm.load.miles) : "") + "mi\n      ")]) : _vm._e(), _vm._v(" "), _vm.labels.totalAmount && _vm.load.total_amount ? _c("label", {
    staticClass: "font-semibold ml-auto",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.load.total_amount ? _vm.formatAmountValue(_vm.load.total_amount) : "") + "\n      ")]) : _vm._e()]) : _vm._e()], _vm._v(" "), _c("vs-prompt", {
    staticClass: "payment-received-prompt",
    attrs: {
      "accept-text": "Yes",
      color: "primary",
      title: "Payment Received",
      active: _vm.paymentReceivedPrompt.isActive
    },
    on: {
      cancel: _vm.resetPaymentReceivedPrompt,
      accept: _vm.paymentReceived,
      close: _vm.resetPaymentReceivedPrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.paymentReceivedPrompt, "isActive", $event);
      }
    }
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v("\n      Are you sure you want to mark as paid with the following amount?\n    ")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    attrs: {
      type: "number",
      placeholder: "Amount"
    },
    model: {
      value: _vm.receivedAmount,
      callback: function callback($$v) {
        _vm.receivedAmount = $$v;
      },
      expression: "receivedAmount"
    }
  })], 2)], 1)], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=template&id=c1faaf5a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=template&id=c1faaf5a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "pipeline-filter"
  }, [_c("div", {
    staticClass: "filter-dropdown"
  }, [_c("div", {
    staticClass: "filter-btn a-icon cursor-pointer",
    staticStyle: {
      "z-index": "100"
    },
    on: {
      click: _vm.openFilterPopup
    }
  }, [_c("filter-icon", {
    attrs: {
      size: "1x"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-1"
  }, [_vm._v("Filters")]), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "ml-2",
    attrs: {
      size: "1x"
    }
  })], 1), _vm._v(" "), _vm.openFilterDropdown ? _c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.closeFilterPopup,
      expression: "closeFilterPopup"
    }],
    staticClass: "filter-dropdown-menu"
  }, [_c("div", {
    staticClass: "p-4 filters"
  }, [_vm.isFilterNotEmpty ? _c("div", {
    staticClass: "overflow-auto",
    staticStyle: {
      "max-height": "300px"
    }
  }, [_c("p", {
    staticClass: "p-2"
  }, [_vm._v("Showing loads")]), _vm._v(" "), _vm._l(_vm.filtersData.conditions, function (condition, index) {
    return _c("span", {
      key: index
    }, [_c("div", {
      staticClass: "flex items-center p-3"
    }, [!index ? _c("span", {
      staticStyle: {
        "min-width": "82px"
      }
    }, [_c("p", {
      staticClass: "text-center"
    }, [_vm._v("Where")])]) : index == 1 ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.filtersData.op,
        expression: "filtersData.op"
      }],
      staticClass: "custom-select operator-select",
      staticStyle: {
        "min-width": "60px"
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(_vm.filtersData, "op", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(_vm.filterCondition, function (item) {
      return _c("option", {
        key: item,
        domProps: {
          value: item
        }
      }, [_vm._v("\n                  " + _vm._s(item) + "\n                ")]);
    }), 0) : _c("span", {
      staticStyle: {
        "min-width": "82px"
      }
    }, [_c("p", {
      staticClass: "text-center font-bold"
    }, [_vm._v(_vm._s(_vm.filtersData.op))])]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.column,
        expression: "condition.column"
      }],
      staticClass: "custom-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(condition, "column", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleFun(condition.column, index);
        }]
      }
    }, [_vm._l(_vm.columListToRender, function (item) {
      return [_c("option", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !item.hide,
          expression: "!item.hide"
        }],
        key: item.value,
        domProps: {
          value: item.value
        }
      }, [_vm._v("\n                      " + _vm._s(item.text) + "\n                    ")])];
    })], 2), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.cmp,
        expression: "condition.cmp"
      }],
      staticClass: "custom-select",
      attrs: {
        placeholder: "operator"
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(condition, "cmp", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(_vm.operators[condition.column], function (item, index) {
      return _c("option", {
        key: item,
        domProps: {
          value: item,
          selected: index == 0
        }
      }, [_vm._v("\n                    " + _vm._s((item || "").replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()) + "\n                  ")]);
    }), 0)]), _vm._v(" "), ["loadDispatcher", "loadTag", "loadDriver"].includes(condition.column) ? _c("div", {
      staticClass: "w-full"
    }, [condition.column == "loadDriver" ? _c("v-select", {
      attrs: {
        options: _vm.driverOptions,
        label: "fullName",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select driver(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e(), _vm._v(" "), condition.column == "loadDispatcher" ? _c("v-select", {
      attrs: {
        options: _vm.dispatcherOptions,
        label: "fullName",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select dispatcher(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e(), _vm._v(" "), condition.column == "loadTag" ? _c("v-select", {
      attrs: {
        options: _vm.tagOptions,
        label: "fullName",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select tag(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "delete-icon",
      on: {
        click: function click($event) {
          return _vm.deleteCondition(index);
        }
      }
    }, [_c("vs-icon", {
      staticClass: "m-0",
      attrs: {
        icon: "delete"
      }
    })], 1)])]);
  })], 2) : _c("span", [_vm._v("No filter conditions applied")]), _vm._v(" "), _vm.hasFiltersToAdd ? _c("div", {
    staticClass: "add-condition mt-4"
  }, [_c("span", {
    on: {
      click: _vm.handleAddCondition
    }
  }, [_vm._v("+ Add condition")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "flex items-center mt-5 justify-between"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.submitFilter
    }
  }, [_vm._v("\n            Save\n          ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "danger",
      type: "border"
    },
    on: {
      click: _vm.closeFilterPopup
    }
  }, [_vm._v("\n            Cancel\n          ")])], 1)])]) : _vm._e()])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .invisible-border[data-v-30e8baea] {\n  border: 1px solid transparent;\n}\n.active[data-v-30e8baea] {\n  color: rgba(var(--vs-primary), 1) !important;\n}\n[dir] .active[data-v-30e8baea] {\n  border-bottom: 2px solid rgba(var(--vs-primary), 1);\n}\n.active-filter[data-v-30e8baea] {\n  font-size: 11px;\n  text-transform: uppercase;\n}\n.add-filter-link[data-v-30e8baea] {\n  color: #1c80cf;\n  font-size: 12px;\n  font-weight: 600;\n}\n[dir] .add-filter-link[data-v-30e8baea] {\n  cursor: pointer;\n}\n.form-group input[type=search][data-v-30e8baea] {\n  font-size: 14px;\n  color: inherit;\n}\n[dir] .form-group input[type=search][data-v-30e8baea] {\n  border: none;\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  border: 1px solid transparent;\n  border-radius: inherit;\n}\n.form-group input[type=search][data-v-30e8baea]::-moz-placeholder {\n  color: #bbb;\n}\n.form-group input[type=search][data-v-30e8baea]::placeholder {\n  color: #bbb;\n}\n.form-group[data-v-30e8baea] {\n  color: #555;\n  display: flex;\n}\n[dir] .form-group[data-v-30e8baea] {\n  padding: 2px;\n  border: 1px solid #e4e4e4;\n  border-radius: 50px;\n  margin-top: 12px;\n}\n.form-group .search-icon[data-v-30e8baea] {\n  text-indent: -999px;\n  overflow: hidden;\n  width: 40px;\n  opacity: 0.7;\n}\n[dir] .form-group .search-icon[data-v-30e8baea] {\n  padding: 0;\n  margin: 0;\n  background-size: 12px !important;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  background: transparent url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center;\n  cursor: pointer;\n}\n.form-group .search-icon[data-v-30e8baea]:hover {\n  opacity: 1;\n}\n.add-filter-heading[data-v-30e8baea] {\n  font-size: 11px;\n  color: rgba(34, 34, 34, 0.3);\n  font-weight: 500;\n}\n.list[data-v-30e8baea] {\n  /* height: 185px; */\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n[dir] .list[data-v-30e8baea] {\n  margin-top: 12px;\n  margin-top: 12px;\n}\n.list > a[data-v-30e8baea] {\n  color: #343434;\n}\n[dir] .list > a[data-v-30e8baea] {\n  padding: 8px 15px;\n  cursor: pointer;\n}\n[dir] .list > a[data-v-30e8baea]:hover {\n  background-color: #f0f1f3;\n}\n.list a[data-v-30e8baea]:first-child {\n  color: #fff;\n}\n[dir] .list a[data-v-30e8baea]:first-child {\n  background-color: rgba(var(--vs-primary), 1);\n}\n.filter-input[data-v-30e8baea] {\n  min-width: 13.5rem;\n  display: flex;\n  align-items: center;\n  max-width: 300px;\n}\n[dir] .filter-input[data-v-30e8baea] {\n  margin: 10px 0;\n}\n.filter-dropdown[data-v-30e8baea] {\n  top: 43px;\n  position: absolute;\n}\n[dir] .filter-dropdown[data-v-30e8baea] {\n  border-radius: 5px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.v-select[data-v-30e8baea],\n.con-select[data-v-30e8baea] {\n  width: 100%;\n}\n[dir] .filter-dropdown.vs-dropdown-menu[data-v-30e8baea]:after {\n  border: 0 !important;\n}\n.filter-btn[data-v-30e8baea] {\n  align-items: center;\n  justify-content: space-around;\n  display: flex;\n}\n[dir] .filter-btn[data-v-30e8baea] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 5px 12px;\n}\n.a-icon[data-v-30e8baea] {\n  color: #626262;\n}\n.popper[data-v-30e8baea] {\n  min-width: 150px;\n}\n[dir] .popper[data-v-30e8baea] {\n  background: #fff;\n  box-shadow: 0px 4px 24px lightgrey;\n}\n[dir=ltr] .popper[data-v-30e8baea] {\n  text-align: left;\n}\n[dir=rtl] .popper[data-v-30e8baea] {\n  text-align: right;\n}\n.arrow[data-hide][data-v-30e8baea] {\n  visibility: hidden;\n}\n.spreadsheet-list-in-dispatch-header[data-v-30e8baea] {\n  /* Medium devices (phones, 1080px and down) */\n  /* Large devices (laptops/desktops, 1080px and up till 1600px) */\n  /* Extra large devices (large laptops and desktops, 1600px and up) */\n}\n@media only screen and (max-width: 1080px) {\n.spreadsheet-list-in-dispatch-header[data-v-30e8baea] {\n    max-width: 40%;\n}\n}\n@media only screen and (min-width: 1080px) and (max-width: 1600px) {\n.spreadsheet-list-in-dispatch-header[data-v-30e8baea] {\n    max-width: 50%;\n}\n}\n@media only screen and (min-width: 1600px) {\n.spreadsheet-list-in-dispatch-header[data-v-30e8baea] {\n    max-width: 70%;\n}\n}\n.vue-portal-target[data-v-30e8baea] .view-bar-container {\n  overflow-x: hidden;\n  scrollbar-width: thin;\n  scrollbar-color: #dadce0 #dadce0;\n}\n[dir] .vue-portal-target[data-v-30e8baea] .view-bar-container {\n  box-shadow: none;\n  margin-bottom: 8px;\n}\n.vue-portal-target[data-v-30e8baea] .view-bar-container:hover {\n  overflow-x: scroll;\n}\n[dir] .vue-portal-target[data-v-30e8baea] .view-bar-container:hover {\n  margin-bottom: 0px;\n}\n.vue-portal-target[data-v-30e8baea] .view-bar-container::-webkit-scrollbar {\n  height: 8px;\n  overflow: visible;\n}\n[dir] .vue-portal-target[data-v-30e8baea] .view-bar-container::-webkit-scrollbar-thumb {\n  border-style: solid;\n  border-color: transparent;\n  border-width: 4px;\n  background-color: #dadce0;\n  border-radius: 8px;\n  box-shadow: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dispatch-customer-sidebar .vs-sidebar {\n  z-index: 52020 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-dropdown--item-link[data-v-10e1a10e] {\n  display: flex;\n  align-items: center;\n  font-size: .875rem;\n}\n.dispatch-list-limit-column-width[data-v-10e1a10e] {\n  white-space: normal;\n}\n.dispatch-list-cs-textarea[data-v-10e1a10e] {\n  line-height: 1;\n  font-size: 1rem;\n  color: inherit;\n}\n[dir] .dispatch-list-cs-textarea[data-v-10e1a10e] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 4px;\n  border-radius: 6px;\n  background: transparent;\n}\n.papper-clip-vertical[data-v-10e1a10e] {\n  color: rgb(132, 132, 132);\n}\n[dir] .papper-clip-vertical[data-v-10e1a10e] {\n  cursor: pointer;\n}\n[dir=ltr] .papper-clip-vertical[data-v-10e1a10e] {\n  margin-right: -5px;\n  transform: rotate(270deg);\n}\n[dir=rtl] .papper-clip-vertical[data-v-10e1a10e] {\n  margin-left: -5px;\n  transform: rotate(-270deg);\n}\n.custom-prompt .vs-dialog[data-v-10e1a10e] {\n  max-width: 700px;\n}\n.invoice-generated-popup .vs-dialog[data-v-10e1a10e] {\n  transition: all 0.2s;\n  z-index: 100;\n  width: calc(100% - 20px);\n  max-width: 400px;\n}\n[dir] .invoice-generated-popup .vs-dialog[data-v-10e1a10e] {\n  margin: 10px;\n  border-radius: 6px;\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n[dir=ltr] .invoice-generated-popup .vs-dialog[data-v-10e1a10e] {\n  animation: rebound 0.3s;\n}\n[dir=rtl] .invoice-generated-popup .vs-dialog[data-v-10e1a10e] {\n  animation: rebound 0.3s;\n}\n.payment-received-prompt .vs-dialog[data-v-10e1a10e] {\n  max-width: 400px;\n}\n.clearable-date-picker[data-v-10e1a10e] {\n  position: relative;\n}\n.clearable-date-picker .close-icon[data-v-10e1a10e] {\n  position: absolute;\n  top: 25%;\n}\n[dir] .clearable-date-picker .close-icon[data-v-10e1a10e] {\n  cursor: pointer;\n}\n[dir=ltr] .clearable-date-picker .close-icon[data-v-10e1a10e] {\n  right: 0%;\n}\n[dir=rtl] .clearable-date-picker .close-icon[data-v-10e1a10e] {\n  left: 0%;\n}\n[data-v-10e1a10e] .clearable-date-picker .date-picker {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*#data-list-list-view > .vx-card {*/\n\n/*  height: 75vh;*/\n\n/*  overflow: hidden;*/\n\n/*}*/\n.invoice-generated-popup .vs-dialog[data-v-0a3d316a] {\n  transition: all 0.2s;\n  z-index: 100;\n  width: calc(100% - 20px);\n  max-width: 400px;\n}\n[dir] .invoice-generated-popup .vs-dialog[data-v-0a3d316a] {\n  margin: 10px;\n  border-radius: 6px;\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n[dir=ltr] .invoice-generated-popup .vs-dialog[data-v-0a3d316a] {\n  animation: rebound 0.3s;\n}\n[dir=rtl] .invoice-generated-popup .vs-dialog[data-v-0a3d316a] {\n  animation: rebound 0.3s;\n}\n.draggable-row[data-v-0a3d316a] {\n  display: flex;\n  width: 100%;\n}\n@media (max-width: 1199px) {\n.draggable-row[data-v-0a3d316a] {\n    overflow-y: hidden;\n    overflow-x: visible;\n}\n}\n.draggable-col[data-v-0a3d316a] {\n  flex: 1;\n  height: 89vh;\n}\n[dir] .draggable-col[data-v-0a3d316a] {\n  background: var(--surface-b);\n  border-radius: 1rem;\n  padding-top: 1rem;\n}\n@media (max-width: 768px) {\n.draggable-col[data-v-0a3d316a] {\n    min-width: 280px;\n}\n}\n\n/* .draggable-list {\n  height: 100%;\n} */\n.draggable-item[data-v-0a3d316a] {\n  /*height: 58vh;*/\n  height: calc(100vh - 165px);\n}\n\n/* width */\n.draggable-list[data-v-0a3d316a] > ::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n[dir] .draggable-list[data-v-0a3d316a] > ::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #b3b3b3;\n  border-radius: 10px;\n  background: #f1f1f1;\n}\n\n/* Handle */\n[dir] .draggable-list[data-v-0a3d316a] > ::-webkit-scrollbar-thumb {\n  background: #b7b7b7;\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n[dir] .draggable-list[data-v-0a3d316a] > ::-webkit-scrollbar-thumb:hover {\n  background: #7a7a7a;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=ltr] .px-base {\n  padding-left: 0 !important;\n}[dir=rtl] .px-base {\n  padding-right: 0 !important;\n}\n.spreadsheet-list-width-home-tab {\n  width: 100%;\n  transition: 200ms width;\n}\n@media (max-width: 1099px) {\n.spreadsheet-list-width-home-tab {\n    width: 100%;\n}\n.spreadsheet-list-width-tab {\n    width: 100% !important;\n}\n[dir] .spreadsheet-list-width-tab {\n    margin-bottom: 15px;\n}\n}\n.spreadsheet-list-width-tab {\n  width: 85%;\n  transition: 200ms width;\n}\n.calendar-icon {\n  position: absolute;\n  top: 10px;\n  font-size: 20px;\n}\n[dir=ltr] .calendar-icon {\n  right: 20px;\n}\n[dir=rtl] .calendar-icon {\n  left: 20px;\n}\n[dir] .flatpickr-calendar.inline {\n  box-shadow: none !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vx-card .vx-card__header {\n  flex-wrap: nowrap;\n  align-items: start;\n}\n[dir] .vx-card .vx-card__collapsible-content .vx-card__body {\n  padding: 0.8rem;\n}\n.dropdown {\n  position: relative;\n}\n.dropdown .dropdown-menu {\n  display: none;\n  position: absolute;\n  min-width: 100px;\n  z-index: 2;\n}\n[dir] .dropdown .dropdown-menu {\n  background: #fff;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n}\n[dir=ltr] .dropdown .dropdown-menu {\n  right: 0;\n}\n[dir=rtl] .dropdown .dropdown-menu {\n  left: 0;\n}\n.dropdown .dropdown-menu li {\n  font-size: 12px;\n  width: 150px;\n}\n[dir] .dropdown .dropdown-menu li {\n  padding: 0.5rem 12px;\n  cursor: pointer;\n  border-bottom: 1px solid lightgray;\n}\n.dropdown:hover .dropdown-menu {\n  display: block !important;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n.custom-prompt .vs-dialog {\n  max-width: 700px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-dropdown[data-v-c1faaf5a] {\n  position: relative;\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n}[dir] .filter-dropdown[data-v-c1faaf5a] {\n  box-shadow: none;\n}\n.filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a] {\n  z-index: 1000;\n  position: absolute;\n  top: 40px;\n  white-space: nowrap;\n}\n[dir] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a] {\n  border-radius: 3px;\n  border-radius: 5px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=ltr] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a] {\n  right: 0;\n}\n[dir=rtl] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a] {\n  left: 0;\n}\n.filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:before, .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n}\n[dir] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:before, [dir] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:after {\n  border: 7px solid transparent;\n  border-bottom-color: #dddddd;\n}\n[dir=ltr] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:before, [dir=ltr] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:after {\n  right: 0px;\n}\n[dir=rtl] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:before, [dir=rtl] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:after {\n  left: 0px;\n}\n[dir] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:after {\n  border: 8px solid transparent;\n  border-bottom-color: #ffffff;\n}\n[dir=ltr] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:after {\n  right: 1px;\n}\n[dir=rtl] .filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a]:after {\n  left: 1px;\n}\n@media (max-width: 991px) {\n.filter-dropdown .filter-dropdown-menu[data-v-c1faaf5a] {\n    width: 90%;\n}\n}\n.filters[data-v-c1faaf5a] {\n  position: relative;\n  min-width: 500px;\n  max-width: 60vw;\n}\n[dir] .filters[data-v-c1faaf5a] {\n  background: #fff;\n}\n[dir] .filters input[data-v-c1faaf5a] {\n  border: 1px solid rgba(0, 0, 0, 0.1) !important;\n}\n.filters .filter-select[data-v-c1faaf5a] {\n  width: 100%;\n}\n[dir] .filters .filter-select[data-v-c1faaf5a] {\n  border-radius: 0;\n}\n[dir=ltr] .filters .filter-select input[data-v-c1faaf5a] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-right: 0px;\n}\n[dir=rtl] .filters .filter-select input[data-v-c1faaf5a] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-left: 0px;\n}\n.filters .delete-icon[data-v-c1faaf5a] {\n  height: 35px;\n  width: 50px;\n  min-width: 50px;\n  max-width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir] .filters .delete-icon[data-v-c1faaf5a] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n[dir=ltr] .filters .delete-icon[data-v-c1faaf5a] {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n[dir=rtl] .filters .delete-icon[data-v-c1faaf5a] {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.filters .add-condition[data-v-c1faaf5a] {\n  color: hsl(0deg, 0%, 40%);\n  font-weight: 500;\n  font-size: 13px;\n}\n[dir] .filters .add-condition span[data-v-c1faaf5a] {\n  cursor: pointer;\n}\n.filters .custom-select[data-v-c1faaf5a],\n.filters .custom-input[data-v-c1faaf5a] {\n  height: 35px;\n  width: 100%;\n  min-width: 120px;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n[dir] .filters .custom-select[data-v-c1faaf5a], [dir] .filters .custom-input[data-v-c1faaf5a] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0px;\n  padding: 6px;\n  margin: 0;\n}\n[dir=ltr] .filters .custom-select[data-v-c1faaf5a], [dir=ltr] .filters .custom-input[data-v-c1faaf5a] {\n  border-right: 0px;\n}\n[dir=rtl] .filters .custom-select[data-v-c1faaf5a], [dir=rtl] .filters .custom-input[data-v-c1faaf5a] {\n  border-left: 0px;\n}\n[dir=ltr] .filters .custom-select[data-v-c1faaf5a]:first-child, [dir=ltr] .filters .custom-input[data-v-c1faaf5a]:first-child {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n[dir=rtl] .filters .custom-select[data-v-c1faaf5a]:first-child, [dir=rtl] .filters .custom-input[data-v-c1faaf5a]:first-child {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n[dir] .filters .custom-select[data-v-c1faaf5a] {\n  background-size: 4px 4px, 5px 5px, 0.5em 0.5em;\n  background-repeat: no-repeat;\n}\n[dir=ltr] .filters .custom-select[data-v-c1faaf5a] {\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;\n}\n[dir=rtl] .filters .custom-select[data-v-c1faaf5a] {\n  background-image: linear-gradient(-45deg, transparent 50%, gray 50%), linear-gradient(-135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - (100% - 20px)) calc(1em + 2px), calc(100% - (100% - 15px)) calc(1em + 2px), calc(100% - (100% - 0.5em)) 0.5em;\n}\n.filters .operator-select[data-v-c1faaf5a] {\n  min-width: 12px;\n  max-width: 66px;\n}\n[dir] .filters .operator-select[data-v-c1faaf5a] {\n  border-radius: 3px;\n}\n[dir=ltr] .filters .operator-select[data-v-c1faaf5a] {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=rtl] .filters .operator-select[data-v-c1faaf5a] {\n  margin-right: 10px;\n  margin-left: 10px;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[data-v-c1faaf5a] .v-select .vs__selected-options {\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 35vw;\n  min-width: 150px;\n}\n[data-v-c1faaf5a] .v-select .vs__search {\n  width: 100px;\n}\n[dir][data-v-c1faaf5a] .vs__dropdown-toggle {\n  padding: 0.8px 0 !important;\n}\n.filter-btn[data-v-c1faaf5a] {\n  align-items: center;\n  justify-content: space-around;\n  display: flex;\n}\n[dir] .filter-btn[data-v-c1faaf5a] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 5px 12px;\n}\n.a-icon[data-v-c1faaf5a] {\n  color: #626262;\n}\n.popper[data-v-c1faaf5a] {\n  min-width: 150px;\n}\n[dir] .popper[data-v-c1faaf5a] {\n  background: #fff;\n  box-shadow: 0px 4px 24px lightgrey;\n}\n[dir=ltr] .popper[data-v-c1faaf5a] {\n  text-align: left;\n}\n[dir=rtl] .popper[data-v-c1faaf5a] {\n  text-align: right;\n}\n.arrow[data-hide][data-v-c1faaf5a] {\n  visibility: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs__dropdown-menu .vs__dropdown-option {\n  width: -moz-max-content;\n  width: max-content;\n  min-width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss&");

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

/***/ "./resources/js/src/mixins/datatableMixin.js":
/*!***************************************************!*\
  !*** ./resources/js/src/mixins/datatableMixin.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rows: 10,
      rowsPerPageOptions: [5, 10, 15],
      eventForServer: null,
      loading: false,
      dynamicSortField: 'name',
      dynamicSortOrder: 1,
      filters: {}
    };
  },
  computed: {
    totalRecords: function totalRecords() {
      return this.items.meta ? this.items.meta.total : 0;
    }
  },
  methods: {
    onPage: function onPage(event) {
      this.eventForServer = event;
      this.commonApiCall(this.filters);
    },
    onSort: function onSort(event) {
      this.eventForServer = event;
      this.commonApiCall(this.filters);
    },
    onInputFilter: function onInputFilter() {
      this.commonApiCall(this.filters);
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Calendar.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Calendar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_6a4d6fae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=6a4d6fae& */ "./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=template&id=6a4d6fae&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_6a4d6fae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_6a4d6fae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=template&id=6a4d6fae&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=template&id=6a4d6fae& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_6a4d6fae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=template&id=6a4d6fae& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Calendar.vue?vue&type=template&id=6a4d6fae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_6a4d6fae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_6a4d6fae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Dispatch.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Dispatch.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dispatch_vue_vue_type_template_id_30e8baea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dispatch.vue?vue&type=template&id=30e8baea&scoped=true& */ "./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=template&id=30e8baea&scoped=true&");
/* harmony import */ var _Dispatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dispatch.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dispatch_vue_vue_type_style_index_0_id_30e8baea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss& */ "./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss&");
/* harmony import */ var _Dispatch_vue_vue_type_style_index_1_id_30e8baea_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss& */ "./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Dispatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dispatch_vue_vue_type_template_id_30e8baea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dispatch_vue_vue_type_template_id_30e8baea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "30e8baea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/Dispatch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dispatch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_0_id_30e8baea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=0&id=30e8baea&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_0_id_30e8baea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_0_id_30e8baea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_0_id_30e8baea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_0_id_30e8baea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_1_id_30e8baea_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=style&index=1&id=30e8baea&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_1_id_30e8baea_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_1_id_30e8baea_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_1_id_30e8baea_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_style_index_1_id_30e8baea_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=template&id=30e8baea&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=template&id=30e8baea&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_template_id_30e8baea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dispatch.vue?vue&type=template&id=30e8baea&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Dispatch.vue?vue&type=template&id=30e8baea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_template_id_30e8baea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatch_vue_vue_type_template_id_30e8baea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/List.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/List.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_10e1a10e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=10e1a10e&scoped=true& */ "./resources/js/src/views/pages/dispatch/List.vue?vue&type=template&id=10e1a10e&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _List_vue_vue_type_style_index_0_id_10e1a10e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true& */ "./resources/js/src/views/pages/dispatch/List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_10e1a10e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_10e1a10e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10e1a10e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/List.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/List.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_10e1a10e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/List.vue?vue&type=style&index=0&id=10e1a10e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_10e1a10e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_10e1a10e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_10e1a10e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_10e1a10e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/List.vue?vue&type=template&id=10e1a10e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/List.vue?vue&type=template&id=10e1a10e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_10e1a10e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=10e1a10e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/List.vue?vue&type=template&id=10e1a10e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_10e1a10e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_10e1a10e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Pipline.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Pipline.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pipline_vue_vue_type_template_id_0a3d316a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pipline.vue?vue&type=template&id=0a3d316a&scoped=true& */ "./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=template&id=0a3d316a&scoped=true&");
/* harmony import */ var _Pipline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pipline.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Pipline_vue_vue_type_style_index_0_id_0a3d316a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true& */ "./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pipline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pipline_vue_vue_type_template_id_0a3d316a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pipline_vue_vue_type_template_id_0a3d316a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a3d316a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/Pipline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pipline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_style_index_0_id_0a3d316a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=style&index=0&id=0a3d316a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_style_index_0_id_0a3d316a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_style_index_0_id_0a3d316a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_style_index_0_id_0a3d316a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_style_index_0_id_0a3d316a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=template&id=0a3d316a&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=template&id=0a3d316a&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_template_id_0a3d316a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pipline.vue?vue&type=template&id=0a3d316a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Pipline.vue?vue&type=template&id=0a3d316a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_template_id_0a3d316a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pipline_vue_vue_type_template_id_0a3d316a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Spreadsheet.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Spreadsheet.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spreadsheet_vue_vue_type_template_id_08d4e88c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spreadsheet.vue?vue&type=template&id=08d4e88c& */ "./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=template&id=08d4e88c&");
/* harmony import */ var _Spreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spreadsheet.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Spreadsheet_vue_vue_type_style_index_0_id_08d4e88c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss& */ "./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Spreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spreadsheet_vue_vue_type_template_id_08d4e88c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spreadsheet_vue_vue_type_template_id_08d4e88c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/Spreadsheet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spreadsheet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_08d4e88c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=style&index=0&id=08d4e88c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_08d4e88c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_08d4e88c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_08d4e88c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_08d4e88c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=template&id=08d4e88c&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=template&id=08d4e88c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_template_id_08d4e88c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spreadsheet.vue?vue&type=template&id=08d4e88c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/Spreadsheet.vue?vue&type=template&id=08d4e88c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_template_id_08d4e88c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_template_id_08d4e88c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/components/DraggableCard.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/components/DraggableCard.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DraggableCard_vue_vue_type_template_id_0c673798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraggableCard.vue?vue&type=template&id=0c673798& */ "./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=template&id=0c673798&");
/* harmony import */ var _DraggableCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraggableCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DraggableCard_vue_vue_type_style_index_0_id_0c673798_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss& */ "./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DraggableCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DraggableCard_vue_vue_type_template_id_0c673798___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DraggableCard_vue_vue_type_template_id_0c673798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/components/DraggableCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DraggableCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_style_index_0_id_0c673798_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=style&index=0&id=0c673798&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_style_index_0_id_0c673798_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_style_index_0_id_0c673798_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_style_index_0_id_0c673798_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_style_index_0_id_0c673798_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=template&id=0c673798&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=template&id=0c673798& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_template_id_0c673798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DraggableCard.vue?vue&type=template&id=0c673798& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/DraggableCard.vue?vue&type=template&id=0c673798&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_template_id_0c673798___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableCard_vue_vue_type_template_id_0c673798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PipelineFilter_vue_vue_type_template_id_c1faaf5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PipelineFilter.vue?vue&type=template&id=c1faaf5a&scoped=true& */ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=template&id=c1faaf5a&scoped=true&");
/* harmony import */ var _PipelineFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PipelineFilter.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PipelineFilter_vue_vue_type_style_index_0_id_c1faaf5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true& */ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true&");
/* harmony import */ var _PipelineFilter_vue_vue_type_style_index_1_id_c1faaf5a_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss& */ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _PipelineFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PipelineFilter_vue_vue_type_template_id_c1faaf5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PipelineFilter_vue_vue_type_template_id_c1faaf5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c1faaf5a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/dispatch/components/PipelineFilter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineFilter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_0_id_c1faaf5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=0&id=c1faaf5a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_0_id_c1faaf5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_0_id_c1faaf5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_0_id_c1faaf5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_0_id_c1faaf5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_1_id_c1faaf5a_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=style&index=1&id=c1faaf5a&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_1_id_c1faaf5a_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_1_id_c1faaf5a_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_1_id_c1faaf5a_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_style_index_1_id_c1faaf5a_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=template&id=c1faaf5a&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=template&id=c1faaf5a&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_template_id_c1faaf5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PipelineFilter.vue?vue&type=template&id=c1faaf5a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/dispatch/components/PipelineFilter.vue?vue&type=template&id=c1faaf5a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_template_id_c1faaf5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PipelineFilter_vue_vue_type_template_id_c1faaf5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=68.js.map