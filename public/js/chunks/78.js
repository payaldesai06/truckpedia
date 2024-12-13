(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FuelSurcharges: function FuelSurcharges() {
      return __webpack_require__.e(/*! import() */ 103).then(__webpack_require__.bind(null, /*! ./components/FuelSurcharges.vue */ "./resources/js/src/views/pages/report/components/FuelSurcharges.vue"));
    },
    AccessorialServiceReport: function AccessorialServiceReport() {
      return Promise.all(/*! import() */[__webpack_require__.e(235), __webpack_require__.e(133)]).then(__webpack_require__.bind(null, /*! ./components/AccessorialServiceReport.vue */ "./resources/js/src/views/pages/report/components/AccessorialServiceReport.vue"));
    },
    LoadBillingReport: function LoadBillingReport() {
      return __webpack_require__.e(/*! import() */ 200).then(__webpack_require__.bind(null, /*! ./components/LoadBillingReport.vue */ "./resources/js/src/views/pages/report/components/LoadBillingReport.vue"));
    }
  },
  name: 'CustomReports',
  data: function data() {
    return {
      tabs: [{
        id: 1,
        title: 'Fuel Surcharges',
        name: 'FuelSurchargesReport',
        isActive: true
      }, {
        id: 2,
        title: 'Load Billing',
        name: 'LoadBillingReport',
        isActive: false
      }, {
        id: 3,
        title: 'Accessorial Services Billing',
        name: 'AccessorialServiceReport',
        isActive: false
      }],
      componentList: {
        FuelSurchargesReport: 'FuelSurcharges',
        AccessorialServiceReport: 'AccessorialServiceReport',
        LoadBillingReport: 'LoadBillingReport'
      }
    };
  },
  methods: {
    toggleReportsTab: function toggleReportsTab(value) {
      this.$emit('toggleReports');
    },
    changeTab: function changeTab(id) {
      this.tabs.forEach(function (tab) {
        if (tab.id === id) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
      });
    }
  },
  computed: {
    currentComponent: function currentComponent() {
      var activeItem = this.tabs.find(function (item) {
        return item.isActive;
      });
      if (!activeItem || !activeItem.name) return '';
      return this.componentList[activeItem.name];
    }
  },
  watch: {
    failedLoadsPopup: function failedLoadsPopup(val) {
      if (!val) {
        this.notFoundLoads = [];
        this.failedToUploadLoads = [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _components_ReportCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ReportCard */ "./resources/js/src/views/pages/report/components/ReportCard.vue");
/* harmony import */ var _assets_images_reports_money_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/images/reports/money.png */ "./resources/assets/images/reports/money.png");
/* harmony import */ var _assets_images_reports_money_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_money_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_reports_total_sales_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @assets/images/reports/total-sales.png */ "./resources/assets/images/reports/total-sales.png");
/* harmony import */ var _assets_images_reports_total_sales_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_total_sales_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_reports_add_list_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @assets/images/reports/add-list.png */ "./resources/assets/images/reports/add-list.png");
/* harmony import */ var _assets_images_reports_add_list_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_add_list_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_reports_attendance_mark_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @assets/images/reports/attendance-mark.png */ "./resources/assets/images/reports/attendance-mark.png");
/* harmony import */ var _assets_images_reports_attendance_mark_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_attendance_mark_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_reports_car_service_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @assets/images/reports/car-service.png */ "./resources/assets/images/reports/car-service.png");
/* harmony import */ var _assets_images_reports_car_service_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_car_service_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_images_reports_driver_license_card_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @assets/images/reports/driver-license-card.png */ "./resources/assets/images/reports/driver-license-card.png");
/* harmony import */ var _assets_images_reports_driver_license_card_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_driver_license_card_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_images_reports_personal_growth_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @assets/images/reports/personal-growth.png */ "./resources/assets/images/reports/personal-growth.png");
/* harmony import */ var _assets_images_reports_personal_growth_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_personal_growth_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_images_reports_trailer_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @assets/images/reports/trailer.png */ "./resources/assets/images/reports/trailer.png");
/* harmony import */ var _assets_images_reports_trailer_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_trailer_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_images_reports_truck_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @assets/images/reports/truck.png */ "./resources/assets/images/reports/truck.png");
/* harmony import */ var _assets_images_reports_truck_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_truck_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_images_reports_dispatcher_commission_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @assets/images/reports/dispatcher-commission.png */ "./resources/assets/images/reports/dispatcher-commission.png");
/* harmony import */ var _assets_images_reports_dispatcher_commission_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_dispatcher_commission_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_images_reports_worldwide_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @assets/images/reports/worldwide.png */ "./resources/assets/images/reports/worldwide.png");
/* harmony import */ var _assets_images_reports_worldwide_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reports_worldwide_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _CustomReports_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./CustomReports.vue */ "./resources/js/src/views/pages/report/CustomReports.vue");





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // import imageGasStation from '@assets/images/reports/gas-station.png'







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Report",
  components: {
    ReportCard: _components_ReportCard__WEBPACK_IMPORTED_MODULE_7__["default"],
    CustomReports: _CustomReports_vue__WEBPACK_IMPORTED_MODULE_19__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])("auth", ["userRole"]), {
    showCustomReports: function showCustomReports() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_5__["default"].customReportsEnabled.includes(this.user.admin_company_detail_id);
    }
  }),
  data: function data() {
    return {
      reports: [],
      isActive: false
    };
  },
  created: function created() {
    this.reports = this.userRole == _config_constants__WEBPACK_IMPORTED_MODULE_5__["default"].roles.admin ? this.getAdminReports() : this.getDispatcherReports();
  },
  methods: {
    getAdminReports: function getAdminReports() {
      return [{
        title: "Account Reports",
        services: [{
          uuid: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getUniqueIdV4"])(),
          image: {
            src: _assets_images_reports_total_sales_png__WEBPACK_IMPORTED_MODULE_9___default.a
          },
          route: {
            name: "report-dispatcher-sales-revenue"
          },
          name: "Revenue by Dispatcher Sales Report"
        }, {
          uuid: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getUniqueIdV4"])(),
          image: {
            src: _assets_images_reports_dispatcher_commission_png__WEBPACK_IMPORTED_MODULE_17___default.a
          },
          route: {
            name: "report-dispatcher-commission-revenue"
          },
          name: "Revenue by Dispatcher Commission Report"
        }, {
          uuid: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getUniqueIdV4"])(),
          image: {
            src: _assets_images_reports_worldwide_png__WEBPACK_IMPORTED_MODULE_18___default.a
          },
          route: {
            name: "ifta-report"
          },
          name: "IFTA Report"
        }]
      }, {
        title: "Customer Reports",
        services: [{
          uuid: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getUniqueIdV4"])(),
          image: {
            src: _assets_images_reports_personal_growth_png__WEBPACK_IMPORTED_MODULE_14___default.a
          },
          route: {
            name: "report-customer-revenue"
          },
          name: "Revenue by Customer Report"
        }]
      }, {
        title: "Driver Reports",
        services: [
        /*{
          uuid: getUniqueIdV4(),
          image: {
            src: imageDriverLicenseCard,
          },
          route: { name: "report-driver-payment-report" },
          name: "Driver Payment Report",
        },*/
        {
          uuid: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getUniqueIdV4"])(),
          image: {
            src: _assets_images_reports_money_png__WEBPACK_IMPORTED_MODULE_8___default.a
          },
          route: {
            name: "load-driver-report"
          },
          name: "Driver Report"
          /*,
          {
          uuid: getUniqueIdV4(),
          image: {
            src: imageMoney
          },
          route: {name: 'report-trip-revenue-report'},
          name: 'Trip Revenue Report'
          }*/

        }]
      }, {
        title: "Equipment Reports",
        services: [
        /*{
          uuid: getUniqueIdV4(),
          image: {
            src: imageTruck,
          },
          route: { name: "report-truck-report" },
          name: "Truck Report",
        },
        {
          uuid: getUniqueIdV4(),
          image: {
            src: imageTrailer,
          },
          route: { name: "report-trailer-report" },
          name: "Trailer Report",
        },
        {
          uuid: getUniqueIdV4(),
          image: {
            src: imageAddList,
          },
          route: { name: "report-equipment-list-report" },
          name: "Equipment List Report",
        },*/
        {
          uuid: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getUniqueIdV4"])(),
          image: {
            src: _assets_images_reports_attendance_mark_png__WEBPACK_IMPORTED_MODULE_11___default.a
          },
          route: {
            name: "report-drop-trailers-report"
          },
          name: "Drop Trailer Report"
        }]
      }];
    },
    getDispatcherReports: function getDispatcherReports() {
      return [{
        title: "Equipment Reports",
        services: [{
          uuid: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_6__["getUniqueIdV4"])(),
          image: {
            src: _assets_images_reports_attendance_mark_png__WEBPACK_IMPORTED_MODULE_11___default.a
          },
          route: {
            name: "report-drop-trailers-report"
          },
          name: "Drop Trailer Report"
        }]
      }];
    },
    toggleCustomReports: function toggleCustomReports() {
      this.isActive = !this.isActive;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReportCard',
  props: {
    report: {
      required: true,
      type: Object
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=template&id=5661cf70&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=template&id=5661cf70&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vx-row space-y-6"
  }, [_c("div", {
    staticClass: "vx-col w-1/6"
  }, [_c("vs-button", {
    attrs: {
      color: "dark",
      type: "border",
      "icon-pack": "feather",
      icon: "icon-arrow-left"
    },
    on: {
      click: _vm.toggleReportsTab
    }
  }, [_vm._v("Back\n    ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("div", {
    staticClass: "flex items-center overflow-x-auto"
  }, _vm._l(_vm.tabs, function (_ref) {
    var id = _ref.id,
        title = _ref.title,
        isActive = _ref.isActive;
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
    }, [_vm._v("\n          " + _vm._s(title) + "\n        ")]);
  }), 1)]), _vm._v(" "), _c("div", [_vm.currentComponent ? _c("div", {
    staticClass: "mt-60"
  }, [_c(_vm.currentComponent, {
    tag: "component"
  })], 1) : _vm._e()])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true& ***!
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

  return _c("vx-card", {
    staticClass: "space-y-6"
  }, [_c("div", {
    staticClass: "flex items-baseline gap-10 mb-10"
  }, [_c("h4", [_vm._v("Reports")]), _vm._v(" "), _vm.showCustomReports ? _c("vs-chip", {
    staticClass: "cursor-pointer mx-2 text-sm min-w-75",
    attrs: {
      color: _vm.isActive ? "primary" : ""
    },
    nativeOn: {
      click: function click($event) {
        return _vm.toggleCustomReports.apply(null, arguments);
      }
    }
  }, [_vm._v("\n      Custom Reports\n    ")]) : _vm._e()], 1), _vm._v(" "), _vm.isActive ? [_c("custom-reports", {
    on: {
      toggleReports: function toggleReports($event) {
        _vm.isActive = false;
      }
    }
  })] : _vm._l(_vm.reports, function (report, index) {
    return _c("div", {
      key: index,
      staticClass: "vx-row"
    }, [_c("div", {
      staticClass: "vx-col w-full"
    }, [_c("div", {
      staticClass: "pb-6"
    }, [_c("h2", {
      staticClass: "text-2xl opacity-75"
    }, [_vm._v(_vm._s(report.title))])])]), _vm._v(" "), _c("div", {
      staticClass: "vx-col w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
    }, _vm._l(report.services, function (reportService) {
      return _c("ReportCard", {
        key: reportService.uuid,
        attrs: {
          report: reportService
        }
      });
    }), 1), _vm._v(" "), _vm.reports.length - 1 > index ? _c("div", {
      staticClass: "vx-col w-full"
    }, [_c("vs-divider")], 1) : _vm._e()]);
  })], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=template&id=ef02d612&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=template&id=ef02d612&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "flex items-center space-x-4"
  }, [_c("div", [_c("img", {
    staticClass: "w-24",
    attrs: {
      src: _vm.report.image.src,
      alt: _vm.report.name
    }
  })]), _vm._v(" "), _c("div", [_c("h3", {
    staticClass: "text-lg"
  }, [_c("router-link", {
    staticClass: "text-dark hover:text-primary hover:opacity-75",
    attrs: {
      to: _vm.report.route
    }
  }, [_vm._v("\n          " + _vm._s(_vm.report.name) + "\n        ")])], 1), _vm._v(" "), _vm.report.description ? _c("p", {
    staticClass: "mt-2 max-w-md text-base"
  }, [_vm._v("\n        " + _vm._s(_vm.report.description) + "\n      ")]) : _vm._e()])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .failed-loads-popup .vs-popup--header[data-v-5661cf70] {\n  background-color: var(--danger);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true&");

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

/***/ "./resources/assets/images/reports/add-list.png":
/*!******************************************************!*\
  !*** ./resources/assets/images/reports/add-list.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/add-list.png?8a03e820c1785d6c071438ceeca13205";

/***/ }),

/***/ "./resources/assets/images/reports/attendance-mark.png":
/*!*************************************************************!*\
  !*** ./resources/assets/images/reports/attendance-mark.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/attendance-mark.png?a680a21354c8e28483bff26550e5e4f0";

/***/ }),

/***/ "./resources/assets/images/reports/car-service.png":
/*!*********************************************************!*\
  !*** ./resources/assets/images/reports/car-service.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/car-service.png?02927aef72197800b510d0c648d96f01";

/***/ }),

/***/ "./resources/assets/images/reports/dispatcher-commission.png":
/*!*******************************************************************!*\
  !*** ./resources/assets/images/reports/dispatcher-commission.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/dispatcher-commission.png?ac808d454d9cac5d5dc6c6e5c718c5b2";

/***/ }),

/***/ "./resources/assets/images/reports/driver-license-card.png":
/*!*****************************************************************!*\
  !*** ./resources/assets/images/reports/driver-license-card.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/driver-license-card.png?686f1a7b50bdc378b66cb29675ca0751";

/***/ }),

/***/ "./resources/assets/images/reports/money.png":
/*!***************************************************!*\
  !*** ./resources/assets/images/reports/money.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/money.png?43631e836a60c518645f3ef56a714a1d";

/***/ }),

/***/ "./resources/assets/images/reports/personal-growth.png":
/*!*************************************************************!*\
  !*** ./resources/assets/images/reports/personal-growth.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/personal-growth.png?9d749cb66fc79471feeab2d44612b032";

/***/ }),

/***/ "./resources/assets/images/reports/total-sales.png":
/*!*********************************************************!*\
  !*** ./resources/assets/images/reports/total-sales.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/total-sales.png?c406e7427e7c6386dee784436fa7f5d9";

/***/ }),

/***/ "./resources/assets/images/reports/trailer.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/reports/trailer.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/trailer.png?28b58f82cada1fde43c3d44e16aea7b9";

/***/ }),

/***/ "./resources/assets/images/reports/truck.png":
/*!***************************************************!*\
  !*** ./resources/assets/images/reports/truck.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/truck.png?de69c1b0c9a6d9d488f7c55e5d92fc92";

/***/ }),

/***/ "./resources/assets/images/reports/worldwide.png":
/*!*******************************************************!*\
  !*** ./resources/assets/images/reports/worldwide.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/worldwide.png?4ace9038b5ddcef8af01c6c88a925bc3";

/***/ }),

/***/ "./resources/js/src/views/pages/report/CustomReports.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/report/CustomReports.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomReports_vue_vue_type_template_id_5661cf70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomReports.vue?vue&type=template&id=5661cf70&scoped=true& */ "./resources/js/src/views/pages/report/CustomReports.vue?vue&type=template&id=5661cf70&scoped=true&");
/* harmony import */ var _CustomReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomReports.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/CustomReports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomReports_vue_vue_type_style_index_0_id_5661cf70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true& */ "./resources/js/src/views/pages/report/CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomReports_vue_vue_type_template_id_5661cf70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomReports_vue_vue_type_template_id_5661cf70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5661cf70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/CustomReports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/CustomReports.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/CustomReports.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomReports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_style_index_0_id_5661cf70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=style&index=0&id=5661cf70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_style_index_0_id_5661cf70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_style_index_0_id_5661cf70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_style_index_0_id_5661cf70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_style_index_0_id_5661cf70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/report/CustomReports.vue?vue&type=template&id=5661cf70&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/CustomReports.vue?vue&type=template&id=5661cf70&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_template_id_5661cf70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomReports.vue?vue&type=template&id=5661cf70&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/CustomReports.vue?vue&type=template&id=5661cf70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_template_id_5661cf70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomReports_vue_vue_type_template_id_5661cf70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=87a41f2c&scoped=true& */ "./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "87a41f2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/Report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=87a41f2c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportCard.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportCard.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportCard_vue_vue_type_template_id_ef02d612_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportCard.vue?vue&type=template&id=ef02d612&scoped=true& */ "./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=template&id=ef02d612&scoped=true&");
/* harmony import */ var _ReportCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportCard_vue_vue_type_template_id_ef02d612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportCard_vue_vue_type_template_id_ef02d612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ef02d612",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/components/ReportCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=template&id=ef02d612&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=template&id=ef02d612&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCard_vue_vue_type_template_id_ef02d612_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportCard.vue?vue&type=template&id=ef02d612&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportCard.vue?vue&type=template&id=ef02d612&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCard_vue_vue_type_template_id_ef02d612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCard_vue_vue_type_template_id_ef02d612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=78.js.map