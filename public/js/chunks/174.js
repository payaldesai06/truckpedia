(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[174],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");








function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IncidentOverviewTab',
  props: {
    value: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])('vehicleV2', ['getAllVehiclesList']), Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])('companyUserV2', ['getUsersList']), Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])('auth', ['user']), Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])('tag', ['allTags']), {
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
    },
    allUsers: function allUsers() {
      var _this = this;

      if (_config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].onlyUseSafetyTab.some(function (item) {
        return item === _this.user.admin_company_details.admin_company_detail_id;
      })) {
        return (this.getUsersList[_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(this.defaultPayloadForUsers)] || []).filter(function (user) {
          return user.role === 'admin';
        }).map(function (user, index) {
          return _objectSpread({}, user, {
            fullName: "".concat(user.firstName || '', " ").concat(user.lastName || '').trim(),
            uniqueId: "user-".concat(index)
          });
        });
      }

      return (this.getUsersList[_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(this.defaultPayloadForUsers)] || []).map(function (user, index) {
        return _objectSpread({}, user, {
          fullName: "".concat(user.firstName || '', " ").concat(user.lastName || '').trim(),
          uniqueId: "user-".concat(index)
        });
      });
    },
    showCustomFieldLabels: function showCustomFieldLabels() {
      var _this2 = this;

      if (this.user && this.user.admin_company_details) {
        return _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyCustomFieldLabels.some(function (item) {
          return item === _this2.user.admin_company_details.admin_company_detail_id;
        });
      }
    },
    insuranceCompanies: function insuranceCompanies() {
      return this.customersList.filter(function (customer) {
        return customer.type === 'insuranceCompany';
      });
    },
    formLabels: function formLabels() {
      if (this.showCustomFieldLabels) {
        return _objectSpread({}, _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.formLabels, _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.customFormLabels);
      }

      return _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.formLabels;
    }
  }),
  data: function data() {
    return {
      customersList: [],
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true
      },
      status: _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.status,
      yesOrNo: _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.yesOrNo,
      involvedTypes: _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.involvedTypes,
      involvedPersonTypes: _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.involvedPersonTypes,
      locationTypes: _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.locationTypes,
      incidentTypes: _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.incidentTypes,
      addressSuggestions: null,
      yesOrNoOrUnknown: _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].safetyModule.yesOrNoOrUnknown,
      truckNumberSuggestions: null,
      trailerNumberSuggestions: null,
      involvedPersonNameSuggestions: null,
      insuranceCompanySuggestions: null,
      involvedThirdPartySuggestions: null,
      defaultPayloadForUsers: {
        fields: ['firstName', 'lastName', 'role']
      }
    };
  },
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
                this.getAllTags();
                this.getAllCustomers();
                this.getAllVehicles();

                if (!((this.getUsersList[_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(this.defaultPayloadForUsers)] || []).length === 0)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 7;
                return this.$store.dispatch('companyUserV2/fetchUsers', _objectSpread({}, this.defaultPayloadForUsers));

              case 7:
                if (!this.isEdit) {
                  this.addWatchOnIncidentDate();
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    getAllTags: function () {
      var _getAllTags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!((this.allTags || []).length == 0)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 4;
                return this.$store.dispatch('tag/getAllTags');

              case 4:
                response = _context2.sent;

              case 5:
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      return function getAllTags() {
        return _getAllTags.apply(this, arguments);
      };
    }(),
    getAllCustomers: function () {
      var _getAllCustomers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        var _ref, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.$store.dispatch('customer/list');

              case 3:
                _ref = _context3.sent;
                payload = _ref.payload;
                this.customersList = payload.customers || [];
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      return function getAllCustomers() {
        return _getAllCustomers.apply(this, arguments);
      };
    }(),
    getAllVehicles: function () {
      var _getAllVehicles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(this.getAllVehiclesList)) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 4;
                return this.$store.dispatch('vehicleV2/fetchAllVehicles');

              case 4:
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
      }));

      return function getAllVehicles() {
        return _getAllVehicles.apply(this, arguments);
      };
    }(),
    cancel: function cancel() {
      this.$emit('cancel');
    },
    saveIncident: function saveIncident() {
      this.$emit('saveIncident');
    },
    deleteIncident: function deleteIncident() {
      this.$emit('delete');
    },
    handleAutoCompleteData: function handleAutoCompleteData(_ref2, type) {
      var value = _ref2.value;

      switch (type) {
        case 'involvedPersonName':
          this.value.involvedUserId = value.id;
          this.value.involvedPersonName = value.fullName;
          break;

        case 'truckNumber':
          this.value.truckId = value.id;
          this.value.truckNumber = value.number;
          break;

        case 'trailerNumber':
          this.value.trailerId = value.id;
          this.value.trailerNumber = value.number;
          break;

        case 'address':
          this.value.savedAddressId = value.id;
          this.value.address = value.name;
          break;

        case 'dealWithInsuranceCompanyName':
          this.value.dealWithInsuranceCompanyId = value.id;
          this.value.dealWithInsuranceCompanyName = value.companyName;
          break;

        case 'involvedThirdPartyName':
          this.value.involvedThirdPartyId = value.id;
          this.value.involvedThirdPartyName = value.companyName;
          break;

        default:
          break;
      }
    },
    autoComplete: function () {
      var _autoComplete = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5(event, type) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                try {
                  if (type === 'involvedPersonName') {
                    this.value.involvedUserId = null;
                    this.involvedPersonNameSuggestions = this.allUsers.filter(function (data) {
                      return data.fullName.toLowerCase().includes(event.query.toLowerCase());
                    });
                  } else if (type === 'truckNumber') {
                    this.value.truckId = null;
                    this.truckNumberSuggestions = this.truckList.filter(function (data) {
                      return data.number.toLowerCase().includes(event.query.toLowerCase());
                    });
                  } else if (type === 'trailerNumber') {
                    this.value.trailerId = null;
                    this.trailerNumberSuggestions = this.trailerList.filter(function (data) {
                      return data.number.toLowerCase().includes(event.query.toLowerCase());
                    });
                  } else if (type === 'dealWithInsuranceCompanyName') {
                    this.value.dealWithInsuranceCompanyId = null;
                    this.insuranceCompanySuggestions = this.insuranceCompanies.filter(function (data) {
                      return data.companyName.toLowerCase().includes(event.query.toLowerCase());
                    });
                  } else if (type === 'involvedThirdPartyName') {
                    this.value.involvedThirdPartyId = null;
                    this.involvedThirdPartySuggestions = this.customersList.filter(function (data) {
                      return data.companyName.toLowerCase().includes(event.query.toLowerCase());
                    });
                  } else if (type === 'address') {
                    this.$store.dispatch('saved-addresses/searchAddresses', event.query.trim()).then(function (data) {
                      _this3.value.address = event.query.trim();
                      _this3.value.savedAddressId = null;
                      _this3.addressSuggestions = data.payload.filter(function (data) {
                        return data.name.toLowerCase().includes(event.query.toLowerCase());
                      }).map(function (data) {
                        data.address = data.name;
                        return data;
                      });
                    });
                  }
                } catch (error) {
                  this.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: error.response.data.message
                  });
                }

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function autoComplete(_x, _x2) {
        return _autoComplete.apply(this, arguments);
      };
    }(),
    updateObjectName: function updateObjectName(type) {
      if (type === 'involvedPersonName') {
        this.value.involvedUserId = null;
        this.value.involvedPersonName = null;
      } else if (type === 'truckNumber') {
        this.value.truckNumber = null;
        this.value.truckId = null;
      } else if (type === 'trailerNumber') {
        this.value.trailerId = null;
        this.value.trailerNumber = null;
      } else if (type === 'address') {
        this.value.savedAddressId = null;
        this.value.address = null;
      }
    },
    onTagChange: function onTagChange(tagId) {
      var _this4 = this;

      if ( // I put this back as edit can cause problems, we need to cache old value
      // like load UI if customer needs us to change it.
      !this.isEdit && tagId && this.user.admin_company_detail_id && _config_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].showTagNumberPrefix.includes(this.user.admin_company_detail_id)) {
        var payload = {
          tagId: tagId
        };

        if (this.value.incidentDate) {
          payload.year = this.$dayjs(this.value.incidentDate).format('YYYY');
        }

        this.$store.dispatch('incidents/getCount', payload).then(function (_ref3) {
          var count = _ref3.data.payload.count;

          var _this4$allTags$find = _this4.allTags.find(function (_ref4) {
            var tag_id = _ref4.tag_id;
            return tag_id === tagId;
          }),
              numberPrefix = _this4$allTags$find.numberPrefix;

          _this4.value.incidentClaimNumber = '';

          if (typeof numberPrefix === 'string' && numberPrefix.length > 0) {
            _this4.value.incidentClaimNumber = numberPrefix + '-';
          }

          if (payload.year) {
            _this4.value.incidentClaimNumber += "".concat(payload.year, "-");
          }

          var formattedCount = String(count + 1).padStart(3, '0');
          _this4.value.incidentClaimNumber += formattedCount;
        }).catch(function (error) {
          _this4.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message
          });
        });
      }
    },
    // Call this method from parent component in case of edit
    addWatchOnIncidentDate: function addWatchOnIncidentDate() {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$watch('value.incidentDate', function () {
          var _ref5 = this.value || {},
              tagId = _ref5.tagId;

          this.onTagChange(tagId || null);
        }, {
          deep: true
        });
      });
    },
    onStatusChange: function onStatusChange(status) {
      if (status === 'closed' && !this.value.closedDate) {
        this.value.closedDate = this.$dayjs().format('YYYY-MM-DD');
      }
    },
    clearClosedDate: function clearClosedDate() {
      this.value.closedDate = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=template&id=77d7d26e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=template&id=77d7d26e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Incident Details")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              " + _vm._s(_vm.formLabels.tag) + "\n            ")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.allTags,
      clearable: true,
      label: "business_name",
      reduce: function reduce(option) {
        return option.tag_id;
      }
    },
    on: {
      input: _vm.onTagChange
    },
    model: {
      value: _vm.value.tagId,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "tagId", $$v);
      },
      expression: "value.tagId"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.incidentDate))]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.value.incidentDate,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "incidentDate", $$v);
      },
      expression: "value.incidentDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.incidentTime))]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      config: _vm.configTimeFlatPickr
    },
    model: {
      value: _vm.value.incidentTime,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "incidentTime", $$v);
      },
      expression: "value.incidentTime"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.status))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.status,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    on: {
      input: _vm.onStatusChange
    },
    model: {
      value: _vm.value.status,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "status", $$v);
      },
      expression: "value.status"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.closedDate) + "\n              "), _c("vs-button", {
    staticStyle: {
      padding: "0",
      "margin-left": "1rem"
    },
    attrs: {
      color: "warning",
      type: "flat",
      size: "small",
      disabled: !_vm.value.closedDate
    },
    on: {
      click: _vm.clearClosedDate
    }
  }, [_vm._v("\n                Clear\n              ")])], 1), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.value.closedDate,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "closedDate", $$v);
      },
      expression: "value.closedDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              " + _vm._s(_vm.formLabels.assigneeUserId) + "\n            ")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0 custom-height",
    attrs: {
      options: _vm.allUsers,
      clearable: true,
      reduce: function reduce(option) {
        return option.id;
      },
      label: "fullName"
    },
    model: {
      value: _vm.value.assigneeUserId,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "assigneeUserId", $$v);
      },
      expression: "value.assigneeUserId"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.followUpDate))]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    model: {
      value: _vm.value.followUpDate,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "followUpDate", $$v);
      },
      expression: "value.followUpDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.notes))]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    attrs: {
      height: "138px"
    },
    model: {
      value: _vm.value.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "notes", $$v);
      },
      expression: "value.notes"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              " + _vm._s(_vm.formLabels.incidentClaimNumber) + "\n            ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.value.incidentClaimNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "incidentClaimNumber", $$v);
      },
      expression: "value.incidentClaimNumber"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              " + _vm._s(_vm.formLabels.thirdPartyIncidentClaimNumber) + "\n            ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.value.thirdPartyIncidentClaimNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "thirdPartyIncidentClaimNumber", $$v);
      },
      expression: "value.thirdPartyIncidentClaimNumber"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.ncicNumber))]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.value.ncicNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "ncicNumber", $$v);
      },
      expression: "value.ncicNumber"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              " + _vm._s(_vm.formLabels.savedAddressAffected) + "\n            ")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.yesOrNo,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.savedAddressAffected,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "savedAddressAffected", $$v);
      },
      expression: "value.savedAddressAffected"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full pl-0 md:pl-4 md:w-1/3 mb-8 md:mb-0"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Incident Details")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.chargeBack))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.yesOrNo,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.chargeBack,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "chargeBack", $$v);
      },
      expression: "value.chargeBack"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.chargeBackAmount))]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number",
      icon: "attach_money"
    },
    model: {
      value: _vm.value.chargeBackAmount,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "chargeBackAmount", _vm._n($$v));
      },
      expression: "value.chargeBackAmount"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.estimates))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.yesOrNo,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.estimates,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "estimates", $$v);
      },
      expression: "value.estimates"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.estimatesReceived))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.yesOrNo,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.estimatesReceived,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "estimatesReceived", $$v);
      },
      expression: "value.estimatesReceived"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.costIncurred))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.yesOrNo,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.costIncurred,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "costIncurred", $$v);
      },
      expression: "value.costIncurred"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.costAmount))]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number",
      icon: "attach_money"
    },
    model: {
      value: _vm.value.costAmount,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "costAmount", _vm._n($$v));
      },
      expression: "value.costAmount"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              " + _vm._s(_vm.formLabels.dealWithInsuranceCompanyName) + "\n            ")]), _vm._v(" "), _c("span", {
    staticClass: "p-fluid"
  }, [_c("AutoComplete", {
    attrs: {
      suggestions: _vm.insuranceCompanySuggestions,
      autoHighlight: true,
      field: "dealWithInsuranceCompanyName"
    },
    on: {
      "item-select": function itemSelect($event) {
        return _vm.handleAutoCompleteData($event, "dealWithInsuranceCompanyName");
      },
      complete: function complete($event) {
        return _vm.autoComplete($event, "dealWithInsuranceCompanyName");
      },
      clear: function clear($event) {
        return _vm.updateObjectName("dealWithInsuranceCompanyName");
      }
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(slotProps) {
        return [_c("div", [_vm._v(_vm._s(slotProps.item.companyName))])];
      }
    }]),
    model: {
      value: _vm.value.dealWithInsuranceCompanyName,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "dealWithInsuranceCompanyName", $$v);
      },
      expression: "value.dealWithInsuranceCompanyName"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.involvedType))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.involvedTypes,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.involvedType,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "involvedType", $$v);
      },
      expression: "value.involvedType"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.involvedPersonName))]), _vm._v(" "), _c("span", {
    staticClass: "p-fluid"
  }, [_c("AutoComplete", {
    attrs: {
      suggestions: _vm.involvedPersonNameSuggestions,
      autoHighlight: true,
      field: "involvedPersonName"
    },
    on: {
      "item-select": function itemSelect($event) {
        return _vm.handleAutoCompleteData($event, "involvedPersonName");
      },
      complete: function complete($event) {
        return _vm.autoComplete($event, "involvedPersonName");
      },
      clear: function clear($event) {
        return _vm.updateObjectName("involvedPersonName");
      }
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(slotProps) {
        return [_c("div", [_vm._v(_vm._s(slotProps.item.fullName))])];
      }
    }]),
    model: {
      value: _vm.value.involvedPersonName,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "involvedPersonName", $$v);
      },
      expression: "value.involvedPersonName"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              " + _vm._s(_vm.formLabels.involvedThirdPartyName) + "\n            ")]), _vm._v(" "), _c("span", {
    staticClass: "p-fluid"
  }, [_c("AutoComplete", {
    attrs: {
      suggestions: _vm.involvedThirdPartySuggestions,
      autoHighlight: true,
      field: "involvedThirdPartyName"
    },
    on: {
      "item-select": function itemSelect($event) {
        return _vm.handleAutoCompleteData($event, "involvedThirdPartyName");
      },
      complete: function complete($event) {
        return _vm.autoComplete($event, "involvedThirdPartyName");
      },
      clear: function clear($event) {
        return _vm.updateObjectName("involvedThirdPartyName");
      }
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(slotProps) {
        return [_c("div", [_vm._v(_vm._s(slotProps.item.companyName))])];
      }
    }]),
    model: {
      value: _vm.value.involvedThirdPartyName,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "involvedThirdPartyName", $$v);
      },
      expression: "value.involvedThirdPartyName"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              " + _vm._s(_vm.formLabels.involvedPersonType) + "\n            ")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.involvedPersonTypes,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.involvedPersonType,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "involvedPersonType", $$v);
      },
      expression: "value.involvedPersonType"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full pl-0 md:pl-4 md:w-1/3 mb-8 md:mb-0 pr-4 md:pr-0"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Incident Details")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              " + _vm._s(_vm.formLabels.correctiveActionApplied) + "\n            ")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.yesOrNo,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.correctiveActionApplied,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "correctiveActionApplied", $$v);
      },
      expression: "value.correctiveActionApplied"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.dotRecordable))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.yesOrNo,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.dotRecordable,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "dotRecordable", $$v);
      },
      expression: "value.dotRecordable"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.preventable))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.yesOrNoOrUnknown,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.preventable,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "preventable", $$v);
      },
      expression: "value.preventable"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.atFault))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.yesOrNoOrUnknown,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.atFault,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "atFault", $$v);
      },
      expression: "value.atFault"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.truckNumber))]), _vm._v(" "), _c("span", {
    staticClass: "p-fluid"
  }, [_c("AutoComplete", {
    attrs: {
      suggestions: _vm.truckNumberSuggestions,
      autoHighlight: true,
      field: "truckNumber"
    },
    on: {
      "item-select": function itemSelect($event) {
        return _vm.handleAutoCompleteData($event, "truckNumber");
      },
      complete: function complete($event) {
        return _vm.autoComplete($event, "truckNumber");
      },
      clear: function clear($event) {
        return _vm.updateObjectName("truckNumber");
      }
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(slotProps) {
        return [_c("div", [_vm._v(_vm._s(slotProps.item.number))])];
      }
    }]),
    model: {
      value: _vm.value.truckNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "truckNumber", $$v);
      },
      expression: "value.truckNumber"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.trailerNumber))]), _vm._v(" "), _c("span", {
    staticClass: "p-fluid"
  }, [_c("AutoComplete", {
    attrs: {
      suggestions: _vm.trailerNumberSuggestions,
      autoHighlight: true,
      field: "trailerNumber"
    },
    on: {
      "item-select": function itemSelect($event) {
        return _vm.handleAutoCompleteData($event, "trailerNumber");
      },
      complete: function complete($event) {
        return _vm.autoComplete($event, "trailerNumber");
      },
      clear: function clear($event) {
        return _vm.updateObjectName("trailerNumber");
      }
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(slotProps) {
        return [_c("div", [_vm._v(_vm._s(slotProps.item.number))])];
      }
    }]),
    model: {
      value: _vm.value.trailerNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "trailerNumber", $$v);
      },
      expression: "value.trailerNumber"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.locationType))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0",
    attrs: {
      options: _vm.locationTypes,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.locationType,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "locationType", $$v);
      },
      expression: "value.locationType"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.address))]), _vm._v(" "), _c("AutoComplete", {
    staticClass: "custom-input w-full",
    attrs: {
      suggestions: _vm.addressSuggestions,
      autoHighlight: true,
      field: "address"
    },
    on: {
      "item-select": function itemSelect($event) {
        return _vm.handleAutoCompleteData($event, "address");
      },
      complete: function complete($event) {
        return _vm.autoComplete($event, "address");
      },
      clear: function clear($event) {
        return _vm.updateObjectName("address");
      }
    },
    model: {
      value: _vm.value.address,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "address", $$v);
      },
      expression: "value.address"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.reported))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0 custom-height",
    attrs: {
      options: _vm.yesOrNo,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.reported,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "reported", $$v);
      },
      expression: "value.reported"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.incidentType))]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-4 md:mb-0 custom-height",
    attrs: {
      options: _vm.incidentTypes,
      clearable: true,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.value.incidentType,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "incidentType", $$v);
      },
      expression: "value.incidentType"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(_vm._s(_vm.formLabels.description))]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.value.description,
      callback: function callback($$v) {
        _vm.$set(_vm.value, "description", $$v);
      },
      expression: "value.description"
    }
  })], 1)])], 1)], 1)]), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_vm.isEdit ? _c("vs-button", {
    attrs: {
      "ml-4": "",
      color: "danger",
      type: "border"
    },
    on: {
      click: _vm.deleteIncident
    }
  }, [_vm._v("\n        Delete\n      ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col ml-auto"
  }, [_c("vs-button", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.saveIncident.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.isEdit ? "UPDATE" : "SAVE") + "\n        ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.cancel.apply(null, arguments);
      }
    }
  }, [_vm._v(" CANCEL ")])], 1)], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-height[data-v-77d7d26e] .vs__dropdown-menu {\n  max-height: 180px !important;\n}\n.custom-input[data-v-77d7d26e] input[type=text] {\n  color: inherit;\n  position: relative;\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n[dir] .custom-input[data-v-77d7d26e] input[type=text] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0.7rem !important;\n  padding: 0.6rem !important;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n}\n[data-v-77d7d26e] .vs-input--icon {\n  font-size: 1.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IncidentOverviewTab_vue_vue_type_template_id_77d7d26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IncidentOverviewTab.vue?vue&type=template&id=77d7d26e&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=template&id=77d7d26e&scoped=true&");
/* harmony import */ var _IncidentOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IncidentOverviewTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IncidentOverviewTab_vue_vue_type_style_index_0_id_77d7d26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IncidentOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IncidentOverviewTab_vue_vue_type_template_id_77d7d26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IncidentOverviewTab_vue_vue_type_template_id_77d7d26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "77d7d26e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentOverviewTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_style_index_0_id_77d7d26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=style&index=0&id=77d7d26e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_style_index_0_id_77d7d26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_style_index_0_id_77d7d26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_style_index_0_id_77d7d26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_style_index_0_id_77d7d26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=template&id=77d7d26e&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=template&id=77d7d26e&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_template_id_77d7d26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentOverviewTab.vue?vue&type=template&id=77d7d26e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue?vue&type=template&id=77d7d26e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_template_id_77d7d26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentOverviewTab_vue_vue_type_template_id_77d7d26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=174.js.map