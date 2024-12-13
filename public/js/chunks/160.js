(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[160],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "OverviewTab",
  components: {
    OverviewCard: function OverviewCard() {
      return __webpack_require__.e(/*! import() */ 52).then(__webpack_require__.bind(null, /*! ./OverviewCard.vue */ "./resources/js/src/views/pages/drivers/components/OverviewCard.vue"));
    }
  },
  props: {
    dataObj: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])("vehicleV2", ["getAllVehiclesList"]), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])("tag", ["allTags"]), {
    isEditForm: function isEditForm() {
      return this.$route.name === "drivers-edit";
    },
    truckList: function truckList() {
      if (!this.getAllVehiclesList.trucks) return [];
      return this.getAllVehiclesList.trucks.map(function (truck, index) {
        return _objectSpread({}, truck, {
          uniqueId: "truck-".concat(index)
        });
      });
    },
    trailerList: function trailerList() {
      if (!this.getAllVehiclesList.trailers) return [];
      return this.getAllVehiclesList.trailers.map(function (trailer, index) {
        return _objectSpread({}, trailer, {
          uniqueId: "trailer-".concat(index)
        });
      });
    }
  }),
  data: function data() {
    return {
      isOffDuty: false,
      isReturningDriver: false,
      genderList: [{
        id: 1,
        label: "Male",
        value: "male"
      }, {
        id: 2,
        label: "Female",
        value: "female"
      }, {
        id: 3,
        label: "Other",
        value: "other"
      }],
      cdlExperience: "",
      tenureAtCompany: "",
      addNewNote: false,
      note: "",
      drugPoolList: [{
        id: 1,
        label: "Yes",
        value: "yes"
      }, {
        id: 2,
        label: "No",
        value: "no"
      }],
      cdlClassList: [{
        id: 1,
        label: "Class A",
        value: "A"
      }, {
        id: 2,
        label: "Class B",
        value: "B"
      }, {
        id: 3,
        label: "Class C",
        value: "C"
      }, {
        id: 4,
        label: "Class E",
        value: "E"
      }, {
        id: 5,
        label: "Class F",
        value: "F"
      }],
      exceptedInterIntrastateTypeList: [{
        id: 1,
        label: "Interstate Non-Excepted",
        value: "nonExceptedInterstate"
      }, {
        id: 3,
        label: "Interstate Excepted",
        value: "exceptedInterstate"
      }, {
        id: 2,
        label: "Intrastate Non-Excepted",
        value: "nonExceptedIntrastate"
      }, {
        id: 4,
        label: "Intrastate Excepted",
        value: "exceptedIntrastate"
      }],
      formData: {
        firstName: "",
        lastName: "",
        status: "active",
        phone: "",
        driverType: "employee",
        isTeamDriver: false,
        isLocalDriver: false,
        isRegionalDriver: false,
        email: "",
        password: "",
        address: "",
        ssn: "",
        birthDate: "",
        gender: "",
        maritalStatus: "",
        race: "",
        originCountry: "",
        shirtSize: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
        emergencyContactRelationship: "",
        emergencyContactEmail: "",
        emergencyContactAddress: "",
        cdlNumber: "",
        cdlState: "",
        originalCdlDate: "",
        cdlClass: null,
        endorsements: [],
        cdlExpirationDate: "",
        medicalCardExpirationDate: "",
        occupationExpirationDate: "",
        clearinghouseExpirationDate: "",
        // occupationalInsuranceStartDate: "",
        // occupationalInsuranceEndDate: "",
        exceptedInterIntrastateType: null,
        workersCompensationInsuranceStartDate: "",
        workersCompensationInsuranceEndDate: "",
        iftaAddDate: "",
        iftaRemoveDate: "",
        offDutyUntil: "",
        offDutyComment: "",
        estimatedReturnDate: "",
        dateAdded: "",
        dateRemoved: "",
        terminationReason: "",
        salaryTarget: "",
        recruiter: "",
        source: "",
        referredBy: "",
        notes: [],
        truckAssignments: [],
        trailerAssignments: [],
        fuelCardNumber: "",
        tags: [],
        companyEmployeeId: ""
      }
    };
  },
  mounted: function mounted() {
    if (this.dataObj) this.formData = _objectSpread({}, this.formData, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.dataObj));
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.$emit("update:Overview", this.formData);
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

                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(this.getAllVehiclesList)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return this.$store.dispatch("vehicleV2/fetchAllVehicles");

              case 4:
                if (this.isEditForm) {
                  this.isOffDuty = this.formData.offDutyUntil !== "";
                  this.isReturningDriver = this.formData.estimatedReturnDate !== "";
                }

                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    resetValue: function resetValue(val, field) {
      var _this = this;

      if (!val) field.forEach(function (f) {
        _this.formData[f] = "";
      });
    },
    addNote: function addNote() {
      this.formData.notes.push({
        id: null,
        note: this.note
      });
      this.note = "";
    },
    calculateExperience: function calculateExperience(field, fromDate) {
      var toDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
      var from = new Date(fromDate);
      var to = new Date(toDate);
      var diff = to.getTime() - from.getTime();

      if (diff < 0 || isNaN(diff)) {
        if (field === "cdl") this.cdlExperience = "";else if (field === "compTenure") this.tenureAtCompany = "";
        return;
      }

      var diffInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      var diffInMonths = Math.floor((diff - diffInYears * (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      var exp = diffInYears > 0 ? "".concat(diffInYears, " Years ").concat(diffInMonths, " Months") : "".concat(diffInMonths, " Months");
      if (field === "cdl") this.cdlExperience = exp;else if (field === "compTenure") this.tenureAtCompany = exp;
    },
    addNewTruckAssignment: function addNewTruckAssignment() {
      this.formData.truckAssignments.push({
        truckId: "",
        startDate: "",
        endDate: "",
        isCurrent: false
      });
    },
    addNewTrailerAssignment: function addNewTrailerAssignment() {
      this.formData.trailerAssignments.push({
        trailerId: "",
        startDate: "",
        endDate: "",
        isCurrent: false
      });
    },
    changeTruckAssignmentToggle: function changeTruckAssignmentToggle(index) {
      this.formData.truckAssignments.forEach(function (truck, i) {
        if (i === index) {
          truck.isCurrent = !truck.isCurrent;
        } else {
          truck.isCurrent = false;
        }
      });
    },
    changeTrailerAssignmentToggle: function changeTrailerAssignmentToggle(index) {
      this.formData.trailerAssignments.forEach(function (trailer, i) {
        if (i === index) {
          trailer.isCurrent = !trailer.isCurrent;
        } else {
          trailer.isCurrent = false;
        }
      });
    },
    submitForm: function submitForm() {
      if (this.isOffDuty && !this.formData.offDutyUntil) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: "Off duty until date is required"
        });
        return;
      }

      if (this.isReturningDriver && !this.formData.estimatedReturnDate) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: "Estimated return date is required"
        });
        return;
      }

      this.$emit("submit:Overview", this.formData);
    },
    redirectToDriverList: function redirectToDriverList() {
      this.$router.push({
        name: "drivers"
      }).catch(function () {
        return true;
      });
    },
    removeTruckAssignment: function removeTruckAssignment(index) {
      this.formData.truckAssignments.splice(index, 1);
    },
    removeTrailerAssignment: function removeTrailerAssignment(index) {
      this.formData.trailerAssignments.splice(index, 1);
    }
  },
  watch: {
    dataObj: {
      handler: function handler(newVal) {
        if (newVal) {
          this.formData = _objectSpread({}, this.formData, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(newVal));

          if (this.isEditForm) {
            this.isOffDuty = this.formData.offDutyUntil !== "";
            this.isReturningDriver = this.formData.estimatedReturnDate !== "";
          }
        }
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=template&id=1b8b7488&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=template&id=1b8b7488&scoped=true& ***!
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

  return _c("div", [_c("div", {
    staticClass: "vx-row w-full m-0 mt-4"
  }, [_c("div", {
    staticClass: "vx-col w-full pl-0 md:w-1/3 mb-8 md:mb-0"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Personal Information")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              Email\n              "), !_vm.isEditForm ? _c("field-required-sign") : _vm._e()], 1), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      autocomplete: "username"
    },
    model: {
      value: _vm.formData.email,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "email", $$v);
      },
      expression: "formData.email"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              Truckpedia Driver App Password\n              "), !_vm.isEditForm ? _c("field-required-sign") : _vm._e()], 1), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "password",
      autocomplete: "new-password"
    },
    model: {
      value: _vm.formData.password,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "password", $$v);
      },
      expression: "formData.password"
    }
  }), _vm._v(" "), _vm.isEditForm ? _c("p", {
    staticClass: "mt-1 text-sm font-semibold opacity-75"
  }, [_vm._v("\n              if you don't want to change password keep it blank.\n            ")]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Tags ")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    staticStyle: {
      background: "#fff"
    },
    attrs: {
      options: _vm.allTags,
      clearable: true,
      label: "business_name",
      multiple: ""
    },
    model: {
      value: _vm.formData.tags,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "tags", $$v);
      },
      expression: "formData.tags"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Employee ID")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.companyEmployeeId,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "companyEmployeeId", $$v);
      },
      expression: "formData.companyEmployeeId"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Address")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.address,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "address", $$v);
      },
      expression: "formData.address"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Social Security")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.ssn,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "ssn", $$v);
      },
      expression: "formData.ssn"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Date of Birth")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.birthDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "birthDate", $$v);
      },
      expression: "formData.birthDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Gender")]), _vm._v(" "), _c("Dropdown", {
    staticClass: "w-full",
    attrs: {
      options: _vm.genderList,
      optionLabel: "label",
      optionValue: "value"
    },
    model: {
      value: _vm.formData.gender,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "gender", $$v);
      },
      expression: "formData.gender"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Marital Status")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.maritalStatus,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "maritalStatus", $$v);
      },
      expression: "formData.maritalStatus"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Race")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.race,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "race", $$v);
      },
      expression: "formData.race"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Country of Origin")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.originCountry,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "originCountry", $$v);
      },
      expression: "formData.originCountry"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("T-Shirt Size")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.shirtSize,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "shirtSize", $$v);
      },
      expression: "formData.shirtSize"
    }
  })], 1)])], 1), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Emergency Contact")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Contact's Name")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.emergencyContactName,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "emergencyContactName", $$v);
      },
      expression: "formData.emergencyContactName"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Contact's Phone Number")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.emergencyContactPhone,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "emergencyContactPhone", $$v);
      },
      expression: "formData.emergencyContactPhone"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Relationship to the Driver")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.emergencyContactRelationship,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "emergencyContactRelationship", $$v);
      },
      expression: "formData.emergencyContactRelationship"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Contact's Email Address")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.emergencyContactEmail,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "emergencyContactEmail", $$v);
      },
      expression: "formData.emergencyContactEmail"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Contact's Address")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.emergencyContactAddress,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "emergencyContactAddress", $$v);
      },
      expression: "formData.emergencyContactAddress"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/3 mb-8 md:mb-0"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Compliance")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("CDL Number")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.cdlNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "cdlNumber", $$v);
      },
      expression: "formData.cdlNumber"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("CDL State")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.cdlState,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "cdlState", $$v);
      },
      expression: "formData.cdlState"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Original CDL Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    on: {
      "on-change": function onChange($event) {
        return _vm.calculateExperience("cdl", _vm.formData.originalCdlDate);
      }
    },
    model: {
      value: _vm.formData.originalCdlDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "originalCdlDate", $$v);
      },
      expression: "formData.originalCdlDate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Year CDL Experience")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      value: _vm.cdlExperience,
      disabled: ""
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("CDL Class")]), _vm._v(" "), _c("Dropdown", {
    staticClass: "w-full",
    attrs: {
      options: _vm.cdlClassList,
      optionLabel: "label",
      optionValue: "value",
      showClear: true
    },
    model: {
      value: _vm.formData.cdlClass,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "cdlClass", $$v);
      },
      expression: "formData.cdlClass"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Endorsements")]), _vm._v(" "), _c("div", {
    staticClass: "w-full flex flex-wrap justify-between"
  }, [_c("span", {
    staticClass: "my-1"
  }, [_c("Checkbox", {
    attrs: {
      inputId: "n",
      value: "N"
    },
    model: {
      value: _vm.formData.endorsements,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "endorsements", $$v);
      },
      expression: "formData.endorsements"
    }
  }), _vm._v(" "), _c("label", [_vm._v("Tank(N)")])], 1), _vm._v(" "), _c("span", {
    staticClass: "my-1"
  }, [_c("Checkbox", {
    attrs: {
      inputId: "h",
      value: "H"
    },
    model: {
      value: _vm.formData.endorsements,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "endorsements", $$v);
      },
      expression: "formData.endorsements"
    }
  }), _vm._v(" "), _c("label", [_vm._v("HazMat(H)")])], 1), _vm._v(" "), _c("span", {
    staticClass: "my-1"
  }, [_c("Checkbox", {
    attrs: {
      inputId: "x",
      value: "X"
    },
    model: {
      value: _vm.formData.endorsements,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "endorsements", $$v);
      },
      expression: "formData.endorsements"
    }
  }), _vm._v(" "), _c("label", [_vm._v("Tank/HazMat(X)")])], 1), _vm._v(" "), _c("span", {
    staticClass: "my-1"
  }, [_c("Checkbox", {
    attrs: {
      inputId: "t",
      value: "T"
    },
    model: {
      value: _vm.formData.endorsements,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "endorsements", $$v);
      },
      expression: "formData.endorsements"
    }
  }), _vm._v(" "), _c("label", [_vm._v("Doubles(T)")])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("CDL Expiration Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.cdlExpirationDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "cdlExpirationDate", $$v);
      },
      expression: "formData.cdlExpirationDate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Medical Card Expiration Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.medicalCardExpirationDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "medicalCardExpirationDate", $$v);
      },
      expression: "formData.medicalCardExpirationDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Occupation Expiration Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.occupationExpirationDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "occupationExpirationDate", $$v);
      },
      expression: "formData.occupationExpirationDate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Clearinghouse Expiration Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.clearinghouseExpirationDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "clearinghouseExpirationDate", $$v);
      },
      expression: "formData.clearinghouseExpirationDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Drug Pool")]), _vm._v(" "), _c("Dropdown", {
    staticClass: "w-full",
    attrs: {
      options: _vm.drugPoolList,
      optionLabel: "label",
      optionValue: "value",
      showClear: true
    },
    model: {
      value: _vm.formData.drugPool,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "drugPool", $$v);
      },
      expression: "formData.drugPool"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Commercial Operation Type")]), _vm._v(" "), _c("Dropdown", {
    staticClass: "w-full",
    attrs: {
      options: _vm.exceptedInterIntrastateTypeList,
      optionLabel: "label",
      optionValue: "value",
      showClear: true
    },
    model: {
      value: _vm.formData.exceptedInterIntrastateType,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "exceptedInterIntrastateType", $$v);
      },
      expression: "formData.exceptedInterIntrastateType"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2 mb-1"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs font-bold"
  }, [_vm._v("\n              Workers Compensation Insurance\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Insurance Start Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.workersCompensationInsuranceStartDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "workersCompensationInsuranceStartDate", $$v);
      },
      expression: "formData.workersCompensationInsuranceStartDate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Insurance End Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.workersCompensationInsuranceEndDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "workersCompensationInsuranceEndDate", $$v);
      },
      expression: "formData.workersCompensationInsuranceEndDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2 mb-1"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs font-bold"
  }, [_vm._v("Road Test")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Completed Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.roadTestCompletedDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "roadTestCompletedDate", $$v);
      },
      expression: "formData.roadTestCompletedDate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Examiner")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.roadTestCompletedExaminer,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "roadTestCompletedExaminer", $$v);
      },
      expression: "formData.roadTestCompletedExaminer"
    }
  })], 1)])], 1), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Job Info")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row flex items-center"
  }, [_c("div", {
    staticClass: "vx-col w-1/2 flex justify-between items-end"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Off Duty")]), _vm._v(" "), _c("span", [_c("vs-switch", {
    on: {
      input: function input(val) {
        return _vm.resetValue(val, ["offDutyUntil", "offDutyComment"]);
      }
    },
    model: {
      value: _vm.isOffDuty,
      callback: function callback($$v) {
        _vm.isOffDuty = $$v;
      },
      expression: "isOffDuty"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Off Duty Until")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      disabled: !_vm.isOffDuty
    },
    model: {
      value: _vm.formData.offDutyUntil,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "offDutyUntil", $$v);
      },
      expression: "formData.offDutyUntil"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Off Duty Comment")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      disabled: !_vm.isOffDuty
    },
    model: {
      value: _vm.formData.offDutyComment,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "offDutyComment", $$v);
      },
      expression: "formData.offDutyComment"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2 flex items-center"
  }, [_c("div", {
    staticClass: "vx-col w-1/2 flex justify-between items-end"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Returning Driver")]), _vm._v(" "), _c("span", [_c("vs-switch", {
    on: {
      input: function input(val) {
        return _vm.resetValue(val, ["estimatedReturnDate"]);
      }
    },
    model: {
      value: _vm.isReturningDriver,
      callback: function callback($$v) {
        _vm.isReturningDriver = $$v;
      },
      expression: "isReturningDriver"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Estimated Return Date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      disabled: !_vm.isReturningDriver
    },
    model: {
      value: _vm.formData.estimatedReturnDate,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "estimatedReturnDate", $$v);
      },
      expression: "formData.estimatedReturnDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2"
  }, [_c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Date Added")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    on: {
      "on-change": function onChange($event) {
        _vm.calculateExperience("compTenure", _vm.formData.dateAdded, _vm.formData.dateRemoved || new Date());
      }
    },
    model: {
      value: _vm.formData.dateAdded,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "dateAdded", $$v);
      },
      expression: "formData.dateAdded"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Date Removed")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    on: {
      "on-change": function onChange($event) {
        return _vm.calculateExperience("compTenure", _vm.formData.dateAdded, _vm.formData.dateRemoved);
      }
    },
    model: {
      value: _vm.formData.dateRemoved,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "dateRemoved", $$v);
      },
      expression: "formData.dateRemoved"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Tenure at Company")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      value: _vm.tenureAtCompany,
      disabled: ""
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Reason For Termination")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.terminationReason,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "terminationReason", $$v);
      },
      expression: "formData.terminationReason"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Salary Target")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.salaryTarget,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "salaryTarget", $$v);
      },
      expression: "formData.salaryTarget"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Recruiter")]), _vm._v(" "), _c("span", [_c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.recruiter,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "recruiter", $$v);
      },
      expression: "formData.recruiter"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Source")]), _vm._v(" "), _c("span", [_c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.source,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "source", $$v);
      },
      expression: "formData.source"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Referred by")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.referredBy,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "referredBy", $$v);
      },
      expression: "formData.referredBy"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full pr-0 md:w-1/3 mb-8 md:mb-0"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row flex justify-between items-end"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Notes")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col flex"
  }, [_c("vs-button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.addNewNote,
      expression: "!addNewNote"
    }],
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.addNewNote = true;
      }
    }
  }, [_vm._v("\n              ADD NOTE\n            ")]), _vm._v(" "), _c("vs-button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.addNewNote,
      expression: "addNewNote"
    }],
    attrs: {
      color: "primary",
      size: "small",
      type: "border",
      icon: "done"
    },
    on: {
      click: _vm.addNote
    }
  }), _vm._v(" "), _c("vs-button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.addNewNote,
      expression: "addNewNote"
    }],
    staticClass: "ml-1",
    attrs: {
      color: "danger",
      size: "small",
      type: "border",
      icon: "close"
    },
    on: {
      click: function click($event) {
        _vm.addNewNote = false;
      }
    }
  })], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.addNewNote,
      expression: "addNewNote"
    }],
    staticClass: "vx-col w-full"
  }, [_c("vs-textarea", {
    staticClass: "w-full",
    model: {
      value: _vm.note,
      callback: function callback($$v) {
        _vm.note = $$v;
      },
      expression: "note"
    }
  })], 1)]), _vm._v(" "), _vm.formData.notes.length > 0 ? _c("div", {
    staticClass: "vx-row max-height-120 overflow-auto"
  }, _vm._l(_vm.formData.notes, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "vx-col w-full"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(_vm._s(item.note))])]);
  }), 0) : _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs break-words"
  }, [_vm._v("There are no notes yet")])])])], 1), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Driver Assignments")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "vx-row mx-0 driver-assignment-row"
  }, [_c("div", {
    staticClass: "vx-col pl-0 w-1/4 dar-col-1"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Truck #")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/4 dar-col-2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Start Date")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/4 dar-col-3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("End Date")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mx-0 dar-col-4"
  }, [_c("div", {
    staticClass: "vx-col pr-0 w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Current")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col pl-0 w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  })])])]), _vm._v(" "), _c("div", _vm._l(_vm.formData.truckAssignments, function (truck, index) {
    return _c("div", {
      key: "truck-".concat(index),
      class: ["vx-row mx-0 mb-2 driver-assignment-row", {
        "mt-1": index > 0
      }]
    }, [_c("div", {
      staticClass: "vx-col pl-0 w-1/4 dar-col-1"
    }, [_c("v-select", {
      staticClass: "mb-4 md:mb-0",
      attrs: {
        options: _vm.truckList,
        label: "number",
        reduce: function reduce(truck) {
          return truck.id;
        },
        placeholder: "Select Truck"
      },
      model: {
        value: truck.truckId,
        callback: function callback($$v) {
          _vm.$set(truck, "truckId", $$v);
        },
        expression: "truck.truckId"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col w-1/4 dar-col-2"
    }, [_c("flat-pickr", {
      staticClass: "w-full",
      model: {
        value: truck.startDate,
        callback: function callback($$v) {
          _vm.$set(truck, "startDate", $$v);
        },
        expression: "truck.startDate"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col w-1/4 dar-col-3"
    }, [_c("flat-pickr", {
      staticClass: "w-full",
      model: {
        value: truck.endDate,
        callback: function callback($$v) {
          _vm.$set(truck, "endDate", $$v);
        },
        expression: "truck.endDate"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col pr-0 w-1/4 self-center flex dar-col-4"
    }, [_c("div", {
      staticClass: "vx-row mx-0 w-full"
    }, [_c("div", {
      staticClass: "vx-col p-0 pl-1 w-3/4 self-center flex"
    }, [_c("vs-switch", {
      attrs: {
        value: truck.isCurrent
      },
      on: {
        input: function input($event) {
          return _vm.changeTruckAssignmentToggle(index);
        }
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col p-0 pl-1 w-1/4 self-center flex"
    }, [_c("vs-icon", {
      staticClass: "cursor-pointer text-danger",
      attrs: {
        size: "small",
        icon: "delete"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeTruckAssignment(index);
        }
      }
    })], 1)])]), _vm._v(" "), !_vm.formData.truckAssignments[index].truckId ? _c("span", {
      staticClass: "text-danger text-sm"
    }, [_vm._v("\n                Truck is required. Select a truck or remove row\n              ")]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: _vm.addNewTruckAssignment
    }
  }, [_vm._v("\n              New Assignment\n            ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("div", {
    staticClass: "vx-row mx-0 driver-assignment-row"
  }, [_c("div", {
    staticClass: "vx-col pl-0 w-1/4 dar-col-1"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Trailer #")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/4 dar-col-2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Start Date")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/4 dar-col-3"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("End Date")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mx-0 dar-col-4"
  }, [_c("div", {
    staticClass: "vx-col pr-0 w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Current")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col pl-0 w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  })])])]), _vm._v(" "), _c("div", _vm._l(_vm.formData.trailerAssignments, function (trailer, index) {
    return _c("div", {
      key: "trailer-".concat(index),
      class: ["vx-row mx-0 mb-2 driver-assignment-row", {
        "mt-1": index > 0
      }]
    }, [_c("div", {
      staticClass: "vx-col pl-0 w-1/4 dar-col-1"
    }, [_c("v-select", {
      staticClass: "mb-4 md:mb-0",
      attrs: {
        options: _vm.trailerList,
        label: "number",
        reduce: function reduce(trailer) {
          return trailer.id;
        },
        placeholder: "Select Trailer"
      },
      model: {
        value: trailer.trailerId,
        callback: function callback($$v) {
          _vm.$set(trailer, "trailerId", $$v);
        },
        expression: "trailer.trailerId"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col w-1/4 dar-col-2"
    }, [_c("flat-pickr", {
      staticClass: "w-full",
      model: {
        value: trailer.startDate,
        callback: function callback($$v) {
          _vm.$set(trailer, "startDate", $$v);
        },
        expression: "trailer.startDate"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col w-1/4 dar-col-3"
    }, [_c("flat-pickr", {
      staticClass: "w-full",
      model: {
        value: trailer.endDate,
        callback: function callback($$v) {
          _vm.$set(trailer, "endDate", $$v);
        },
        expression: "trailer.endDate"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col pr-0 w-1/4 self-center flex dar-col-4"
    }, [_c("div", {
      staticClass: "vx-row mx-0 w-full"
    }, [_c("div", {
      staticClass: "vx-col p-0 pl-1 w-3/4 self-center flex"
    }, [_c("vs-switch", {
      attrs: {
        value: trailer.isCurrent
      },
      on: {
        input: function input($event) {
          return _vm.changeTrailerAssignmentToggle(index);
        }
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "vx-col p-0 pl-1 w-1/4 self-center flex"
    }, [_c("vs-icon", {
      staticClass: "cursor-pointer text-danger",
      attrs: {
        size: "small",
        icon: "delete"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeTrailerAssignment(index);
        }
      }
    })], 1)])]), _vm._v(" "), !_vm.formData.trailerAssignments[index].trailerId ? _c("span", {
      staticClass: "text-danger text-sm"
    }, [_vm._v("\n                Trailer is required. Select a trailer or remove row\n              ")]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-2"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: _vm.addNewTrailerAssignment
    }
  }, [_vm._v("\n              New Assignment\n            ")])], 1)])], 1), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Fuel Card")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Fuel Card")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.fuelCardNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "fuelCardNumber", $$v);
      },
      expression: "formData.fuelCardNumber"
    }
  })], 1)])], 1)], 1)]), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col ml-auto"
  }, [_c("vs-button", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_vm._v("SAVE")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.redirectToDriverList.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          CANCEL\n        ")])], 1)])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".driver-assignment-row .dar-col-1[data-v-1b8b7488] {\n  width: 35% !important;\n}[dir] .driver-assignment-row .dar-col-1[data-v-1b8b7488] {\n  padding: 0;\n}\n.driver-assignment-row .dar-col-2[data-v-1b8b7488],\n.driver-assignment-row .dar-col-3[data-v-1b8b7488] {\n  width: 25% !important;\n}\n[dir] .driver-assignment-row .dar-col-2[data-v-1b8b7488], [dir] .driver-assignment-row .dar-col-3[data-v-1b8b7488] {\n  padding: 0 0.25rem;\n}\n.driver-assignment-row .dar-col-4[data-v-1b8b7488] {\n  width: 15% !important;\n}\n[dir] .driver-assignment-row .dar-col-4[data-v-1b8b7488] {\n  padding: 0;\n}\n.text-red[data-v-1b8b7488] {\n  color: #ea5758;\n}\n.max-height-120[data-v-1b8b7488] {\n  max-height: 120px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/drivers/components/OverviewTab.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/OverviewTab.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OverviewTab_vue_vue_type_template_id_1b8b7488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverviewTab.vue?vue&type=template&id=1b8b7488&scoped=true& */ "./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=template&id=1b8b7488&scoped=true&");
/* harmony import */ var _OverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverviewTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OverviewTab_vue_vue_type_style_index_0_id_1b8b7488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true& */ "./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OverviewTab_vue_vue_type_template_id_1b8b7488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OverviewTab_vue_vue_type_template_id_1b8b7488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b8b7488",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/drivers/components/OverviewTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_style_index_0_id_1b8b7488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=style&index=0&id=1b8b7488&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_style_index_0_id_1b8b7488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_style_index_0_id_1b8b7488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_style_index_0_id_1b8b7488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_style_index_0_id_1b8b7488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=template&id=1b8b7488&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=template&id=1b8b7488&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_template_id_1b8b7488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewTab.vue?vue&type=template&id=1b8b7488&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/drivers/components/OverviewTab.vue?vue&type=template&id=1b8b7488&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_template_id_1b8b7488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewTab_vue_vue_type_template_id_1b8b7488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=160.js.map