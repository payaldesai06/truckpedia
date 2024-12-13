(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[218],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primevue_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primevue/config */ "./node_modules/primevue/config/index.js");
/* harmony import */ var primevue_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primevue_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primevue_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primevue/calendar */ "./node_modules/primevue/calendar/index.js");
/* harmony import */ var primevue_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primevue_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // For custom error message



var dict = {
  custom: {
    status: {
      required: "The status field is required."
    },
    trailerNumber: {
      required: "The trailer number field is required."
    },
    insuranceValue: {
      decimal: "The field must be numeric and may contain 2 decimal points"
    },
    monthlyInsuranceCost: {
      decimal: "The field must be numeric and may contain 2 decimal points"
    },
    totalInsuranceCost: {
      decimal: "The field must be numeric and may contain 2 decimal points"
    }
  }
}; // Register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_10__["Validator"].localize("en", dict);
vue__WEBPACK_IMPORTED_MODULE_6___default.a.use(primevue_config__WEBPACK_IMPORTED_MODULE_7___default.a, {
  locale: {}
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TrailerInfoForm",
  components: {
    Calendar: primevue_calendar__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  props: {
    trailerData: {
      type: Object,
      default: null
    },
    value: {
      type: Object,
      default: null
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])("tag", ["allTags"]), {
    emitDate: function emitDate() {
      var _ref = this || {},
          status = _ref.status,
          trailerNumber = _ref.trailerNumber,
          trailerType = _ref.trailerType,
          year = _ref.year,
          make = _ref.make,
          model = _ref.model,
          vin = _ref.vin,
          ride = _ref.ride,
          width = _ref.width,
          licensePlate = _ref.licensePlate,
          licenseState = _ref.licenseState,
          insuranceValue = _ref.insuranceValue,
          monthlyInsuranceCost = _ref.monthlyInsuranceCost,
          totalInsuranceCost = _ref.totalInsuranceCost,
          brakeType = _ref.brakeType,
          tireSize = _ref.tireSize,
          roof = _ref.roof,
          platedWalls = _ref.platedWalls,
          vented = _ref.vented,
          skirts = _ref.skirts,
          rentedOut = _ref.rentedOut,
          tags = _ref.tags;

      return {
        status: status,
        trailerNumber: trailerNumber,
        trailerType: trailerType,
        year: year ? typeof year == "string" ? year : String(new Date(year).getFullYear()) : year,
        make: make,
        model: model,
        vin: vin,
        ride: ride,
        width: width,
        licensePlate: licensePlate,
        licenseState: licenseState,
        insuranceValue: insuranceValue,
        monthlyInsuranceCost: monthlyInsuranceCost,
        totalInsuranceCost: totalInsuranceCost,
        brakeType: brakeType,
        tireSize: tireSize,
        roof: roof,
        platedWalls: platedWalls,
        vented: vented,
        skirts: skirts,
        rentedOut: rentedOut,
        tags: tags
      };
    }
  }),
  watch: {
    emitDate: function emitDate(newVal) {
      this.$emit("input", newVal);
    },
    value: {
      handler: function handler(newVal) {
        var _ref2 = newVal || {},
            status = _ref2.status,
            trailerNumber = _ref2.trailerNumber,
            trailerType = _ref2.trailerType,
            year = _ref2.year,
            make = _ref2.make,
            model = _ref2.model,
            vin = _ref2.vin,
            ride = _ref2.ride,
            width = _ref2.width,
            licensePlate = _ref2.licensePlate,
            licenseState = _ref2.licenseState,
            insuranceValue = _ref2.insuranceValue,
            monthlyInsuranceCost = _ref2.monthlyInsuranceCost,
            totalInsuranceCost = _ref2.totalInsuranceCost,
            brakeType = _ref2.brakeType,
            tireSize = _ref2.tireSize,
            roof = _ref2.roof,
            platedWalls = _ref2.platedWalls,
            vented = _ref2.vented,
            skirts = _ref2.skirts,
            rentedOut = _ref2.rentedOut,
            tags = _ref2.tags;

        if (status) {
          this.status = status;
        }

        this.trailerNumber = trailerNumber;
        this.trailerType = trailerType;
        this.year = year || null;
        this.make = make;
        this.model = model;
        this.vin = vin;
        this.ride = ride;
        this.width = width;
        this.licensePlate = licensePlate;
        this.licenseState = licenseState;
        this.insuranceValue = insuranceValue;
        this.monthlyInsuranceCost = monthlyInsuranceCost;
        this.totalInsuranceCost = totalInsuranceCost;
        this.brakeType = brakeType;
        this.tireSize = tireSize;
        this.roof = roof;
        this.platedWalls = platedWalls;
        this.vented = vented;
        this.skirts = skirts;
        this.rentedOut = rentedOut;
        this.tags = tags;
      },
      deep: true,
      immediate: true
    }
  },
  data: function data() {
    return {
      status: "active",
      statusOptions: [{
        label: "Active",
        value: "active"
      }, {
        label: "Inactive",
        value: "inactive"
      }],
      trailerNumber: "",
      year: null,
      make: "",
      model: "",
      vin: "",
      licensePlate: "",
      licenseState: "",
      // 2 UPPER case letters, like “CA”
      stateOption: _config_constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].state_list,
      insuranceValue: "",
      // decimal
      monthlyInsuranceCost: "",
      // decimal
      totalInsuranceCost: "",
      // decimal
      ride: "",
      // String,
      width: "",
      // String,
      breakTypeOptions: [{
        label: "Drum",
        value: "drum"
      }, {
        label: "Disc",
        value: "disc"
      }],
      trailer_type_options: _config_constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].equipmentTypeOptions,
      trailerType: null,
      brakeType: "",
      // String
      tireSize: "",
      // String
      roof: "",
      // String
      platedWalls: null,
      //boolean
      vented: null,
      //boolean
      skirts: null,
      //boolean
      rentedOut: null,
      //boolean
      tags: [] // array of tag ids : [{id: 1}, {id:2}]

    };
  },
  methods: {
    getOptionLabel: function getOptionLabel(option) {
      if (option && option.hasOwnProperty("tagBusinessName")) {
        return option["tagBusinessName"];
      } else {
        return option["business_name"];
      }
    },
    validate: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$validator.validateAll();

              case 2:
                if (!this.errors.items.length) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                return _context.abrupt("return", true);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function validate() {
        return _validate.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=template&id=717ee994&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=template&id=717ee994& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "info-form"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Trailer Info")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Tags")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      "data-vv-name": "tags",
      name: "tags",
      options: _vm.allTags,
      clearable: false,
      "get-option-label": _vm.getOptionLabel,
      multiple: ""
    },
    model: {
      value: _vm.tags,
      callback: function callback($$v) {
        _vm.tags = $$v;
      },
      expression: "tags"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Status"), _c("field-required-sign")], 1), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "included:active,inactive",
      expression: "'included:active,inactive'"
    }],
    staticClass: "mb-4 md:mb-0",
    attrs: {
      "data-vv-as": "selected",
      name: "status",
      label: "label",
      options: _vm.statusOptions,
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: false
    },
    model: {
      value: _vm.status,
      callback: function callback($$v) {
        _vm.status = $$v;
      },
      expression: "status"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("status")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Trailer Number "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "trailerNumber"
    },
    model: {
      value: _vm.trailerNumber,
      callback: function callback($$v) {
        _vm.trailerNumber = $$v;
      },
      expression: "trailerNumber"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("trailerNumber")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Trailer Type")]), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.trailer_type_options,
      label: "title",
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: true
    },
    model: {
      value: _vm.trailerType,
      callback: function callback($$v) {
        _vm.trailerType = $$v;
      },
      expression: "trailerType"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Make")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "make"
    },
    model: {
      value: _vm.make,
      callback: function callback($$v) {
        _vm.make = $$v;
      },
      expression: "make"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Year")]), _vm._v(" "), _c("Calendar", {
    staticClass: "w-full",
    attrs: {
      view: "year",
      manualInput: false,
      name: "year",
      dateFormat: "yy"
    },
    model: {
      value: _vm.year,
      callback: function callback($$v) {
        _vm.year = $$v;
      },
      expression: "year"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Model")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "model"
    },
    model: {
      value: _vm.model,
      callback: function callback($$v) {
        _vm.model = $$v;
      },
      expression: "model"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Ride")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "ride"
    },
    model: {
      value: _vm.ride,
      callback: function callback($$v) {
        _vm.ride = $$v;
      },
      expression: "ride"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Vin")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "vin"
    },
    model: {
      value: _vm.vin,
      callback: function callback($$v) {
        _vm.vin = $$v;
      },
      expression: "vin"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Width")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "width"
    },
    model: {
      value: _vm.width,
      callback: function callback($$v) {
        _vm.width = $$v;
      },
      expression: "width"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Brake Type")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      "data-vv-as": "selected",
      name: "value",
      label: "label",
      options: _vm.breakTypeOptions,
      reduce: function reduce(option) {
        return option.value;
      },
      clearable: true
    },
    model: {
      value: _vm.brakeType,
      callback: function callback($$v) {
        _vm.brakeType = $$v;
      },
      expression: "brakeType"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Tire size")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "tireSize"
    },
    model: {
      value: _vm.tireSize,
      callback: function callback($$v) {
        _vm.tireSize = $$v;
      },
      expression: "tireSize"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Roof")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "roof"
    },
    model: {
      value: _vm.roof,
      callback: function callback($$v) {
        _vm.roof = $$v;
      },
      expression: "roof"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("License Plate")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      name: "licensePlate"
    },
    model: {
      value: _vm.licensePlate,
      callback: function callback($$v) {
        _vm.licensePlate = $$v;
      },
      expression: "licensePlate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("State")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      name: "licenseState",
      label: "text",
      options: _vm.stateOption,
      reduce: function reduce(option) {
        return option.text;
      },
      clearable: true
    },
    model: {
      value: _vm.licenseState,
      callback: function callback($$v) {
        _vm.licenseState = $$v;
      },
      expression: "licenseState"
    }
  })], 1)]), _vm._v(" "), _c("section", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-checkbox", {
    staticClass: "text-xs mt-3",
    attrs: {
      name: "platedWalls"
    },
    model: {
      value: _vm.platedWalls,
      callback: function callback($$v) {
        _vm.platedWalls = $$v;
      },
      expression: "platedWalls"
    }
  }, [_vm._v("Plated Walls")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-checkbox", {
    staticClass: "text-xs mt-3",
    attrs: {
      name: "vented"
    },
    model: {
      value: _vm.vented,
      callback: function callback($$v) {
        _vm.vented = $$v;
      },
      expression: "vented"
    }
  }, [_vm._v("Vented")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-checkbox", {
    staticClass: "text-xs mt-3",
    attrs: {
      name: "skirts"
    },
    model: {
      value: _vm.skirts,
      callback: function callback($$v) {
        _vm.skirts = $$v;
      },
      expression: "skirts"
    }
  }, [_vm._v("Skirts")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-checkbox", {
    staticClass: "text-xs mt-3",
    attrs: {
      name: "rentedOut"
    },
    model: {
      value: _vm.rentedOut,
      callback: function callback($$v) {
        _vm.rentedOut = $$v;
      },
      expression: "rentedOut"
    }
  }, [_vm._v("Rented Out")])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Insurance Value")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      step: "any",
      name: "insuranceValue"
    },
    model: {
      value: _vm.insuranceValue,
      callback: function callback($$v) {
        _vm.insuranceValue = _vm._n($$v);
      },
      expression: "insuranceValue"
    }
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("insuranceValue")) + "\n      ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Monthly Insurance Cost")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      step: "any",
      name: "monthlyInsuranceCost"
    },
    model: {
      value: _vm.monthlyInsuranceCost,
      callback: function callback($$v) {
        _vm.monthlyInsuranceCost = _vm._n($$v);
      },
      expression: "monthlyInsuranceCost"
    }
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("monthlyInsuranceCost")) + "\n      ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-1/2"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Total Insurance Cost")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      step: "any",
      name: "totalInsuranceCost"
    },
    model: {
      value: _vm.totalInsuranceCost,
      callback: function callback($$v) {
        _vm.totalInsuranceCost = _vm._n($$v);
      },
      expression: "totalInsuranceCost"
    }
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errors.first("totalInsuranceCost")) + "\n      ")])], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoForm_vue_vue_type_template_id_717ee994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoForm.vue?vue&type=template&id=717ee994& */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=template&id=717ee994&");
/* harmony import */ var _InfoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoForm_vue_vue_type_template_id_717ee994___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoForm_vue_vue_type_template_id_717ee994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=template&id=717ee994&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=template&id=717ee994& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoForm_vue_vue_type_template_id_717ee994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoForm.vue?vue&type=template&id=717ee994& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue?vue&type=template&id=717ee994&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoForm_vue_vue_type_template_id_717ee994___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoForm_vue_vue_type_template_id_717ee994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=218.js.map