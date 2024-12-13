(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _CustomFields_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomFields.vue */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/CustomFields.vue");








function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DriverPayTemplateBlock",
  props: {
    data: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    hideName: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: function _default() {
        return null;
      }
    }
  },
  components: {
    CustomFields: _CustomFields_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      driverPayRate: null,
      toggleAddCustomFieldPopup: false,
      driverPayLoadOptions: [{
        text: "By Loaded Miles",
        value: "byLoadedMiles"
      }, {
        text: "By Empty Miles",
        value: "byEmptyMiles"
      }, {
        text: "Flat Pay",
        value: "flatPay"
      }, {
        text: "Stop Pay",
        value: "stopPay"
      }, {
        text: "By Hour",
        value: "byHour"
      }, {
        text: "By Percentage Of Hauling Fee",
        value: "byPercentageOfHaulingFee"
      }, {
        text: "By Percentage Of Fuel Surcharge",
        value: "byPercentageOfFuelSurcharge"
      }, {
        text: "By Percentage Of Total Income",
        value: "byPercentageOfTotalIncome"
      }, {
        text: "Formula Loaded Miles",
        value: "formulaLoadedMiles"
      }, {
        text: "Formula Empty Miles",
        value: "formulaEmptyMiles"
      }],
      driverPayTripOption: [{
        text: "Flat Pay",
        value: "flatPay"
      }],
      target: "",
      templates: {
        name: "",
        loadDetails: [],
        tripDetails: []
      },
      userCreatedCustomFields: {
        loads: [],
        trips: []
      },
      editCustomFieldData: {}
    };
  },
  watch: {
    value: {
      handler: function handler(val, oldVal) {
        if (val) {
          var oldValParsed = oldVal ? _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(oldVal) : null;
          var valParsed = val ? _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(val) : null;

          if (oldValParsed !== valParsed) {
            this.templates = _objectSpread({}, val);
            this.setTemplateData();
          }

          var loadDetails = val.loadDetails,
              tripDetails = val.tripDetails;
          if (!loadDetails) this.templates.loadDetails = [];
          if (!tripDetails) this.templates.tripDetails = [];
        } else if (!this.data) {
          this.initValues();
        }
      },
      immediate: true,
      deep: true
    },
    templates: {
      handler: function handler(val) {
        this.$emit("input", val);
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    userCreatedCustomFieldsMap: function userCreatedCustomFieldsMap() {
      var _ref = this.userCreatedCustomFields || {},
          loads = _ref.loads,
          trips = _ref.trips;

      var loadDetailsMap = (loads || []).reduce(function (acc, load) {
        acc[load.id] = load;
        return acc;
      }, {});
      var tripDetailsMap = (trips || []).reduce(function (acc, trip) {
        acc[trip.id] = trip;
        return acc;
      }, {});
      return {
        loads: loadDetailsMap,
        trips: tripDetailsMap
      };
    },
    templateId: function templateId() {
      return this.data ? this.data.id : null;
    }
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getCustomFields();

            case 2:
              this.setTemplateData();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function mounted() {
      return _mounted.apply(this, arguments);
    };
  }(),
  methods: {
    setTemplateData: function setTemplateData() {
      var _ref2 = this.value || {},
          loadDetails = _ref2.loadDetails,
          tripDetails = _ref2.tripDetails;

      var _ref3 = this.userCreatedCustomFieldsMap || {},
          loads = _ref3.loads,
          trips = _ref3.trips;

      this.templates.loadDetails = (loadDetails || []).map(function (load) {
        return _objectSpread({}, load, (loads || {})[load.fieldId] || {});
      });
      this.templates.tripDetails = (tripDetails || []).map(function (trip) {
        return _objectSpread({}, trip, (trips || {})[trip.fieldId] || {});
      });
    },
    showOnStopPay: function showOnStopPay(item) {
      if (item.type === "stopPay" || item.fieldType === "stopPay") {
        return true;
      }

      return false;
    },
    checkDriverPayTemplateType: function checkDriverPayTemplateType(item) {
      if (item && item.type && item.type.includes("byPercentage")) return false;
      if (item && item.fieldType && item.fieldType.includes("byPercentage")) return false;
      if (item && (item.type === "formulaLoadedMiles" || item.type === "formulaEmptyMiles")) return false;
      return true;
    },
    handleDefaultValues: function handleDefaultValues(item, i, type) {
      if (!item) return;

      if (type === "trip") {
        this.$set(this.templates.tripDetails, i, _objectSpread({}, item));
        this.$set(this.templates.tripDetails[i], "rate", parseFloat(item.defaultRate).toFixed(2));
      } else {
        this.$set(this.templates.loadDetails, i, _objectSpread({}, item));

        if (item.type.includes("byPercentage")) {
          this.$set(this.templates.loadDetails[i], "percentage", parseFloat(item.defaultPercentage).toFixed(2));
          this.$set(this.templates.loadDetails[i], "rate", null);
        } else if (item.type === "formulaEmptyMiles" || item.type === "formulaLoadedMiles") {
          this.$set(this.templates.loadDetails[i], "v2", item.defaultV2);
          this.$set(this.templates.loadDetails[i], "v3", item.defaultV3);
        } else {
          if (item.type === "stopPay") {
            this.$set(this.templates.loadDetails[i], "payStartAfter", item.defaultPayStartAfter);
          }

          this.$set(this.templates.loadDetails[i], "percentage", null);
          this.$set(this.templates.loadDetails[i], "rate", parseFloat(item.defaultRate).toFixed(2));
        }
      }
    },
    submitDriverPayTemplateForm: function submitDriverPayTemplateForm() {
      if (this.templateId) {
        this.editTemplateData();
      } else {
        this.createTemplateData();
      }
    },
    initValues: function initValues() {
      this.templates = {
        name: "",
        loadDetails: [],
        tripDetails: []
      };
      this.loadRate = [];
      this.tripRate = [];
    },
    modifyPayload: function modifyPayload(item, i) {
      var payload = {
        fieldId: item.id ? String(item.id) : String(item.fieldId)
      };

      if (item.type && item.type.includes("byPercentage") || item.fieldType && item.fieldType.includes("byPercentage")) {
        payload.percentage = item.percentage;
      } else if (item.type && (item.type === "formulaEmptyMiles" || item.type === "formulaLoadedMiles")) {
        // TODO: why we are setting defaultV2 and defaultV3 here?
        // Other code do not set defaultPercentage or defaultPayStartAfter.
        // Is this code really being used?
        payload.defaultV2 = Number(item.defaultV2);
        payload.defaultV3 = Number(item.defaultV3);
        payload.v2 = Number(item.v2);
        payload.v3 = Number(item.v3);
      } else {
        if (item.type && item.type === "stopPay" || item.fieldType && item.fieldType === "stopPay") {
          payload.payStartAfter = Number(item.payStartAfter);
        }

        payload.rate = item.rate;
      }

      if (payload.id) payload.fieldId = payload.id;
      return payload;
    },
    generatedTemplatePayload: function generatedTemplatePayload() {
      var _this = this;

      var loadDetailsPayload = this.templates.loadDetails.map(function (item, i) {
        return _this.modifyPayload(item, i);
      });
      var tripDetailsPayload = this.templates.tripDetails.map(function (item, i) {
        return _this.modifyPayload(item, i);
      });
      var payload = {
        id: this.templateId,
        name: this.templates.name,
        loadDetails: loadDetailsPayload,
        tripDetails: tripDetailsPayload
      };
      return payload;
    },
    createTemplateData: function () {
      var _createTemplateData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var res, _ref4, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$vs.loading();
                _context2.prev = 1;
                _context2.next = 4;
                return this.$store.dispatch("driverPayTemplates/createTemplateData", this.generatedTemplatePayload());

              case 4:
                res = _context2.sent;
                this.$vs.notify({
                  color: "primary",
                  title: "Create Template",
                  text: "Create template successfully."
                });
                return _context2.abrupt("return", res);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                _ref4 = ((_context2.t0 || {}).response || {}).data || {}, message = _ref4.message;
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: message || "Something went wrong"
                });
                throw _context2.t0;

              case 14:
                _context2.prev = 14;
                this.$vs.loading.close();
                return _context2.finish(14);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9, 14, 17]]);
      }));

      return function createTemplateData() {
        return _createTemplateData.apply(this, arguments);
      };
    }(),
    editTemplateData: function () {
      var _editTemplateData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        var res, _ref5, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.$vs.loading();
                _context3.prev = 1;
                _context3.next = 4;
                return this.$store.dispatch("driverPayTemplates/editTemplateData", this.generatedTemplatePayload());

              case 4:
                res = _context3.sent;
                this.$vs.notify({
                  color: "primary",
                  title: "Edit Template",
                  text: "Edit template successfully."
                });
                return _context3.abrupt("return", res);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                _ref5 = ((_context3.t0 || {}).response || {}).data || {}, message = _ref5.message;
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: message || "Something went wrong"
                });
                throw _context3.t0;

              case 14:
                _context3.prev = 14;
                this.$vs.loading.close();
                return _context3.finish(14);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 9, 14, 17]]);
      }));

      return function editTemplateData() {
        return _editTemplateData.apply(this, arguments);
      };
    }(),
    editCustomField: function editCustomField(item) {
      this.target = item.fieldTarget;

      if (!item.hasOwnProperty("id")) {
        var getDefaultFields = [];

        if (item.fieldTarget === "load") {
          getDefaultFields = this.userCreatedCustomFields.loads.filter(function (x) {
            return x.id === item.fieldId;
          });
        } else {
          getDefaultFields = this.userCreatedCustomFields.trips.filter(function (x) {
            return x.id === item.fieldId;
          });
        }

        this.editCustomFieldData = getDefaultFields.length > 0 ? getDefaultFields[0] : {};
      } else {
        this.editCustomFieldData = item;
      }

      this.toggleAddCustomFieldPopup = true;
    },
    getTemplateData: function getTemplateData() {
      var _this2 = this;

      if (this.templateId) {
        this.$vs.loading();
        this.$store.dispatch("driverPayTemplates/getTemplateDataById", this.templateId).then(function (data) {
          _this2.templates = data; // data.loadDetails.forEach((item) => {
          //   if (item.fieldType.includes("byPercentage")) {
          //     this.loadPercentage.push(item.percentage);
          //   } else {
          //     this.loadRate.push(item.rate);
          //   }
          // });
          // data.tripDetails.forEach((item) => {
          //   this.tripRate.push(item.rate);
          // });
        }).finally(function () {
          _this2.$vs.loading.close();
        });
      }
    },
    getCustomFields: function () {
      var _getCustomFields = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.$store.dispatch("driverPayTemplates/getCustomFields");

              case 3:
                data = _context4.sent;
                this.userCreatedCustomFields = {
                  loads: [],
                  trips: []
                };
                this.userCreatedCustomFields.loads = data.loadFields.map(function (item) {
                  return _objectSpread({
                    fieldName: item.name
                  }, item);
                });
                this.userCreatedCustomFields.trips = data.tripFields.map(function (item) {
                  return _objectSpread({
                    fieldName: item.name
                  }, item);
                });
                this.getTemplateData();
                return _context4.abrupt("return");

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11]]);
      }));

      return function getCustomFields() {
        return _getCustomFields.apply(this, arguments);
      };
    }(),
    addNewLoad: function addNewLoad() {
      this.templates.loadDetails.push({});
    },
    addNewTrip: function addNewTrip() {
      this.templates.tripDetails.push({});
    },
    removeLoadSelection: function removeLoadSelection(index) {
      this.templates.loadDetails.splice(index, 1);
    },
    removeTripSelection: function removeTripSelection(index) {
      this.templates.tripDetails.splice(index, 1);
    },
    closePopup: function closePopup() {
      this.toggleAddCustomFieldPopup = false;
      this.editCustomFieldData = {};
      this.target = "";
    },
    addNewCustomFieldOption: function addNewCustomFieldOption(target) {
      this.target = target;
      this.toggleAddCustomFieldPopup = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=template&id=7c4caaf6&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=template&id=7c4caaf6&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    attrs: {
      id: "driver-pay-template-block"
    }
  }, [!_vm.hideHeader ? _c("div", {
    staticClass: "mt-6 flex items-center justify-between px-6"
  }, [_c("h4", [_vm._v("Driver Pay Templates")])]) : _vm._e(), _vm._v(" "), _c("vs-divider", {
    staticClass: "mb-0"
  }), _vm._v(" "), _c("div", {
    staticClass: "p-2"
  }, [_c("div", [!_vm.hideName ? _c("div", [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "text",
      placeholder: "Name"
    },
    model: {
      value: _vm.templates.name,
      callback: function callback($$v) {
        _vm.$set(_vm.templates, "name", $$v);
      },
      expression: "templates.name"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-between mt-3"
  }, [_c("h4", [_vm._v("Per Load")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled",
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.addNewCustomFieldOption("load");
      }
    }
  }, [_vm._v("New Per Load Custom Payment Field")])], 1), _vm._v(" "), _vm._l(_vm.templates.loadDetails, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "flex items-center gap-5 mt-3"
    }, [_c("v-select", {
      staticStyle: {
        width: "250px"
      },
      attrs: {
        options: _vm.userCreatedCustomFields.loads,
        getOptionLabel: function getOptionLabel(loads) {
          return loads.fieldName;
        },
        value: _vm.templates.loadDetails[index],
        placeholder: "Select an option",
        clearable: false
      },
      on: {
        input: function input($event) {
          return _vm.handleDefaultValues($event, index, "load");
        }
      }
    }), _vm._v(" "), item && (item.type === "formulaEmptyMiles" || item.type === "formulaLoadedMiles") ? _c("div", [_c("div", {
      staticClass: "flex items-center gap-2"
    }, [_c("span", {
      staticClass: "whitespace-no-wrap"
    }, [_vm._v("( Fuel Price - ")]), _vm._v(" "), _c("vs-input", {
      staticClass: "w-1/4",
      attrs: {
        type: "number",
        step: "any",
        placeholder: "Base Price"
      },
      model: {
        value: item.v2,
        callback: function callback($$v) {
          _vm.$set(item, "v2", _vm._n($$v));
        },
        expression: "item.v2"
      }
    }), _vm._v("\n            ) "), _c("span", [_vm._v(" / ")]), _vm._v(" "), _c("vs-input", {
      staticClass: "w-1/4",
      attrs: {
        type: "number",
        step: "any",
        placeholder: "MPG"
      },
      model: {
        value: item.v3,
        callback: function callback($$v) {
          _vm.$set(item, "v3", _vm._n($$v));
        },
        expression: "item.v3"
      }
    })], 1)]) : _c("div", {
      staticClass: "flex items-center gap-5"
    }, [_c("vx-input-group", [_c("template", {
      slot: "prepend"
    }, [_c("div", {
      staticClass: "prepend-text bg-primary"
    }, [_vm.checkDriverPayTemplateType(item) ? _c("span", [_vm._v("$")]) : _c("span", [_vm._v("%")])])]), _vm._v(" "), _vm.checkDriverPayTemplateType(item) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.rate,
        expression: "item.rate"
      }],
      staticClass: "custom-input",
      attrs: {
        type: "number",
        step: "any",
        placeholder: "Rate"
      },
      domProps: {
        value: item.rate
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(item, "rate", $event.target.value);
        }
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.percentage,
        expression: "item.percentage"
      }],
      staticClass: "custom-input",
      attrs: {
        type: "number",
        step: "any",
        placeholder: "Percentage"
      },
      domProps: {
        value: item.percentage
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(item, "percentage", $event.target.value);
        }
      }
    })], 2), _vm._v(" "), _vm.showOnStopPay(item) ? _c("div", [_vm._v("after")]) : _vm._e(), _vm._v(" "), _vm.showOnStopPay(item) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.payStartAfter,
        expression: "item.payStartAfter"
      }],
      staticClass: "custom-input",
      staticStyle: {
        "border-radius": "5px",
        width: "50px"
      },
      attrs: {
        type: "number",
        step: "any",
        placeholder: "Pay Start After"
      },
      domProps: {
        value: item.payStartAfter
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(item, "payStartAfter", $event.target.value);
        }
      }
    }) : _vm._e(), _vm._v(" "), _vm.showOnStopPay(item) ? _c("div", [_vm._v("stops")]) : _vm._e()], 1), _vm._v(" "), _c("vx-tooltip", {
      attrs: {
        text: "Edit Custom Payment Field"
      }
    }, [_c("vs-button", {
      attrs: {
        color: "primary",
        type: "border",
        size: "small",
        icon: "edit",
        radius: "",
        disabled: !_vm.userCreatedCustomFields.loads.length
      },
      on: {
        click: function click($event) {
          return _vm.editCustomField(item);
        }
      }
    })], 1), _vm._v(" "), _c("vs-button", {
      attrs: {
        color: "danger",
        type: "border",
        size: "small",
        "icon-pack": "feather",
        icon: "icon-trash",
        radius: ""
      },
      on: {
        click: function click($event) {
          return _vm.removeLoadSelection(index);
        }
      }
    })], 1);
  }), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-4",
    attrs: {
      color: "primary",
      type: "border",
      size: "small"
    },
    on: {
      click: _vm.addNewLoad
    }
  }, [_vm._v("Add New Per Load Payment")])], 2), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("h4", [_vm._v("Recurring")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled",
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.addNewCustomFieldOption("trip");
      }
    }
  }, [_vm._v("New Recurring Custom Payment Field")])], 1), _vm._v(" "), _vm._l(_vm.templates.tripDetails, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "flex items-center gap-5 mt-3"
    }, [_c("v-select", {
      staticStyle: {
        width: "250px"
      },
      attrs: {
        options: _vm.userCreatedCustomFields.trips,
        getOptionLabel: function getOptionLabel(loads) {
          return loads.fieldName;
        },
        value: _vm.templates.tripDetails[index],
        placeholder: "Select an option",
        clearable: false
      },
      on: {
        input: function input($event) {
          return _vm.handleDefaultValues($event, index, "trip");
        }
      }
    }), _vm._v(" "), _c("vx-input-group", [_c("template", {
      slot: "prepend"
    }, [_c("div", {
      staticClass: "prepend-text bg-primary"
    }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.rate,
        expression: "item.rate"
      }],
      staticClass: "custom-input",
      attrs: {
        type: "number",
        step: "any",
        placeholder: "Rate"
      },
      domProps: {
        value: item.rate
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(item, "rate", $event.target.value);
        }
      }
    })], 2), _vm._v(" "), _c("vx-tooltip", {
      attrs: {
        text: "Edit Custom Payment Field"
      }
    }, [_c("vs-button", {
      attrs: {
        color: "primary",
        type: "border",
        size: "small",
        icon: "edit",
        radius: "",
        disabled: !_vm.userCreatedCustomFields.trips.length
      },
      on: {
        click: function click($event) {
          return _vm.editCustomField(item);
        }
      }
    })], 1), _vm._v(" "), _c("vs-button", {
      attrs: {
        color: "danger",
        type: "border",
        size: "small",
        "icon-pack": "feather",
        icon: "icon-trash",
        radius: ""
      },
      on: {
        click: function click($event) {
          return _vm.removeTripSelection(index);
        }
      }
    })], 1);
  }), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-4",
    attrs: {
      color: "primary",
      type: "border",
      size: "small"
    },
    on: {
      click: _vm.addNewTrip
    }
  }, [_vm._v("Add New Recurring Payment")])], 2)]), _vm._v(" "), _c("CustomFields", {
    attrs: {
      togglePopup: _vm.toggleAddCustomFieldPopup,
      tripOptions: _vm.driverPayTripOption,
      loadOptions: _vm.driverPayLoadOptions,
      selectedTarget: _vm.target,
      editCustomFieldData: _vm.editCustomFieldData
    },
    on: {
      closePopup: _vm.closePopup,
      getCustomFields: _vm.getCustomFields
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-7c4caaf6] .bill-chips {\n  width: 100%;\n}\n[dir][data-v-7c4caaf6] .con-chips {\n  border: 1px solid rgba(0, 0, 0, 0.2) !important;\n  box-shadow: none !important;\n}\n.custom-input[data-v-7c4caaf6] {\n  color: inherit;\n  position: relative;\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n[dir] .custom-input[data-v-7c4caaf6] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0.7rem !important;\n  padding: 0.4rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n}\n[dir=ltr] .custom-input[data-v-7c4caaf6] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .custom-input[data-v-7c4caaf6] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[data-v-7c4caaf6] .vs__dropdown-menu {\n  max-height: 180px !important;\n}\n.w-100px[data-v-7c4caaf6] {\n  width: 100px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DriverPayTemplateBlock_vue_vue_type_template_id_7c4caaf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DriverPayTemplateBlock.vue?vue&type=template&id=7c4caaf6&scoped=true& */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=template&id=7c4caaf6&scoped=true&");
/* harmony import */ var _DriverPayTemplateBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DriverPayTemplateBlock.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DriverPayTemplateBlock_vue_vue_type_style_index_0_id_7c4caaf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true& */ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DriverPayTemplateBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DriverPayTemplateBlock_vue_vue_type_template_id_7c4caaf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DriverPayTemplateBlock_vue_vue_type_template_id_7c4caaf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c4caaf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverPayTemplateBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_style_index_0_id_7c4caaf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=style&index=0&id=7c4caaf6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_style_index_0_id_7c4caaf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_style_index_0_id_7c4caaf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_style_index_0_id_7c4caaf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_style_index_0_id_7c4caaf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=template&id=7c4caaf6&scoped=true&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=template&id=7c4caaf6&scoped=true& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_template_id_7c4caaf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DriverPayTemplateBlock.vue?vue&type=template&id=7c4caaf6&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/driver-pay-templates/components/DriverPayTemplateBlock.vue?vue&type=template&id=7c4caaf6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_template_id_7c4caaf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DriverPayTemplateBlock_vue_vue_type_template_id_7c4caaf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=43.js.map