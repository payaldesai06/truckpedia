(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_TruckSummaryCard_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TruckSummaryCard.vue */ "./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue");
/* harmony import */ var _components_TruckOverview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TruckOverview */ "./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue");
/* harmony import */ var _components_FilesTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/FilesTab */ "./resources/js/src/views/pages/trucks/components/FilesTab.vue");
/* harmony import */ var _components_TruckMaintenance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TruckMaintenance */ "./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue");
/* harmony import */ var _components_LogsTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/LogsTab */ "./resources/js/src/views/pages/trucks/components/LogsTab.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Components






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TruckDashboard",
  components: {
    TruckSummaryCard: _components_TruckSummaryCard_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TruckOverview: _components_TruckOverview__WEBPACK_IMPORTED_MODULE_7__["default"],
    FilesTab: _components_FilesTab__WEBPACK_IMPORTED_MODULE_8__["default"],
    TruckLogs: _components_LogsTab__WEBPACK_IMPORTED_MODULE_10__["default"],
    TruckMaintenance: _components_TruckMaintenance__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: ['truckDetails'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('auth', ['companyFeatureAccess']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])("tag", ["allTags"]), {
    truckId: function truckId() {
      return this.$route.params.id || null;
    },
    truckInfoHeaderLabel: function truckInfoHeaderLabel() {
      if (this.isUpdateMode) {
        var _ref = this.truckData || {},
            truckNumber = _ref.truckNumber,
            year = _ref.year,
            make = _ref.make,
            vin = _ref.vin;

        return "#".concat(truckNumber || "", " ").concat(year || "", " ").concat(make || "", " ").concat(vin || "");
      }

      return "Create a truck";
    },
    isUpdateMode: function isUpdateMode() {
      return this.$route.name === "UpdateTrucks";
    },
    showSubmitButton: function showSubmitButton() {
      if (this.isUpdateMode) {
        return this.selectedTab === 1; // 1 : OverviewTab,
      }

      return this.selectedTab === 1 || this.selectedTab === 2; // 1 : OverviewTab, 2 : Files Tab
      // Info : Improve the property as need for later cases
    },
    chips: function chips() {
      var overViewTab = {
        id: 1,
        label: "Overview",
        component: "TruckOverview"
      };
      var filesTab = {
        id: 2,
        label: "Files",
        component: "FilesTab"
      };
      var maintenanceTab = {
        id: 3,
        label: 'Maintenance',
        component: 'TruckMaintenance'
      };
      var logsTab = {
        id: 4,
        label: "Logs",
        component: "TruckLogs"
      };
      var chipsToRender = [overViewTab, filesTab];

      if (this.isUpdateMode) {
        chipsToRender.push(maintenanceTab);
        chipsToRender.push(logsTab);
      }

      if (this.companyFeatureAccess.includes('basic')) {
        chipsToRender = [overViewTab];
      }

      return chipsToRender;
    },
    tabIndex: function tabIndex() {
      return this.chips.reduce(function (result, currentValue, currentIndex) {
        result[currentValue.label] = currentIndex;
        return result;
      }, {});
    }
  }),
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
      var _ref2, id;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              this.$vs.loading();

              if (this.truckDetails) {
                this.truckData = _objectSpread({}, this.truckDetails);
              }

              _ref2 = (this.chips || [])[0] || {}, id = _ref2.id;
              this.changeTab(id || null);
              _context.next = 7;
              return this.getAllTags();

            case 7:
              if (!this.isUpdateMode) {
                _context.next = 16;
                break;
              }

              _context.prev = 8;
              _context.next = 11;
              return this.getTruckDetails();

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](8);
              this.redirectToTrucksList();

            case 16:
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t1 = _context["catch"](0);
              this.redirectToTrucksList();

            case 21:
              _context.prev = 21;
              this.$vs.loading.close();
              return _context.finish(21);

            case 24:
              _context.next = 26;
              return this.getAllDrivers();

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 18, 21, 24], [8, 13]]);
    }));

    return function created() {
      return _created.apply(this, arguments);
    };
  }(),
  data: function data() {
    return {
      selectedTab: null,
      // chipsList: [
      // {
      //   id: 1,
      //   label: "Overview",
      //   component: "TruckOverview",
      // },
      // {
      //   id: 2,
      //   label: "Files",
      //   component: "FilesTab",
      // },
      // {
      //   id: 3,
      //   label: 'Tolls',
      //   component: ''
      // },
      // {
      //   id: 4,
      //   label: 'Fuel',
      //   component: ''
      // },
      // {
      //   id: 5,
      //   label: 'Maintenance',
      //   component: 'TruckMaintenance'
      // },
      // {
      //   id: 6,
      //   label: 'Logs',
      //   component: 'TruckLogs'
      // },
      // {
      //   id: 7,
      //   label: 'Accidents',
      //   component: ''
      // }
      // ],
      truckData: null,
      driversList: [],
      selectedTruckTypes: [],
      dragStartFile: null
    };
  },
  methods: {
    changeTab: function changeTab(id) {
      if (!id) return;
      this.selectedTab = id;
    },
    getTruckDetails: function () {
      var _getTruckDetails = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var _this = this;

        var data, _ref3, tagsData, interestRate, selectedTags;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (this.truckId) {
                  _context2.next = 3;
                  break;
                }

                throw new Error({
                  message: 'Required id missing'
                });

              case 3:
                _context2.next = 5;
                return this.$store.dispatch("trucksV2/fetchTruckInfo", this.truckId);

              case 5:
                data = _context2.sent;
                _ref3 = data || {}, tagsData = _ref3.tags, interestRate = _ref3.interestRate;
                selectedTags = [];
                (tagsData || []).forEach(function (tag) {
                  var tagInfo = _this.allTags.find(function (x) {
                    return x.tag_id === tag.id;
                  });

                  if (tagInfo) {
                    selectedTags.push(tagInfo);
                  }
                });
                this.truckData = _objectSpread({}, data, {
                  tags: selectedTags,
                  interestRate: interestRate || interestRate === 0 ? parseFloat(interestRate * 100).toFixed(4) : interestRate
                });
                this.selectedTruckTypes = data.truckTypes || [];
                return _context2.abrupt("return", data);

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 14]]);
      }));

      return function getTruckDetails() {
        return _getTruckDetails.apply(this, arguments);
      };
    }(),
    submitForm: function () {
      var _submitForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        var validationState, overviewTabIndex, _ref4, truckPayload, filesTabIndex, _ref5, filesPayload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.validateForms();

              case 2:
                validationState = _context3.sent;
                overviewTabIndex = this.tabIndex["Overview"];
                _ref4 = (this.$refs || {}).tabComponents[overviewTabIndex] || {}, truckPayload = _ref4.truckPayload;
                truckPayload.truckTypes = this.selectedTruckTypes;

                if (!(!validationState || !truckPayload)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return");

              case 8:
                if (this.truckId) {
                  // Update flow
                  this.updateTruck(_objectSpread({}, truckPayload, {
                    id: this.truckId
                  }));
                } else {
                  // Create flow
                  filesTabIndex = this.tabIndex["Files"];
                  _ref5 = (this.$refs || {}).tabComponents[filesTabIndex] || {}, filesPayload = _ref5.filesPayload;

                  if (filesPayload && filesPayload.length) {
                    truckPayload.files = filesPayload;
                  }

                  this.createTruck(truckPayload);
                } // Reset cache


                this.$store.commit('vehicleV2/setAllVehicles', []);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function submitForm() {
        return _submitForm.apply(this, arguments);
      };
    }(),
    validateForms: function () {
      var _validateForms = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4() {
        var overviewTabIndex, _ref6, validate, validationState, text;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                overviewTabIndex = this.tabIndex["Overview"];
                _ref6 = (this.$refs || {}).tabComponents[overviewTabIndex] || {}, validate = _ref6.validate;
                validationState = true;

                if (!validate) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 6;
                return this.$refs.tabComponents[overviewTabIndex].validate();

              case 6:
                validationState = _context4.sent;

              case 7:
                if (!validationState) {
                  text = "Correct all field errors";
                  if (this.selectedTab !== 1) text += " in overview form";
                  this.$vs.notify({
                    color: "danger",
                    title: "Error",
                    text: text
                  });
                }

                return _context4.abrupt("return", validationState);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function validateForms() {
        return _validateForms.apply(this, arguments);
      };
    }(),
    createTruck: function () {
      var _createTruck = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5(truckPayload) {
        var _ref7, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.$store.dispatch("trucksV2/createTruck", truckPayload);

              case 3:
                this.$vs.notify({
                  color: "success",
                  title: "Success",
                  text: "New truck added"
                });
                this.redirectToTrucksList();
                _context5.next = 11;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                _ref7 = ((_context5.t0 || {}).response || {}).data || {}, message = _ref7.message;
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: message || "Truck creation failed"
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      return function createTruck(_x) {
        return _createTruck.apply(this, arguments);
      };
    }(),
    updateTruck: function () {
      var _updateTruck = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee6(truckPayload) {
        var _ref8, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.$store.dispatch("trucksV2/updateTruck", truckPayload);

              case 3:
                this.$vs.notify({
                  color: "success",
                  title: "Updated",
                  text: "Truck data updated"
                });
                this.redirectToTrucksList();
                _context6.next = 11;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                _ref8 = ((_context6.t0 || {}).response || {}).data || {}, message = _ref8.message;
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: message || "Truck update failed"
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      return function updateTruck(_x2) {
        return _updateTruck.apply(this, arguments);
      };
    }(),
    redirectToTrucksList: function redirectToTrucksList() {
      this.$router.push("/trucks");
    },
    getAllTags: function () {
      var _getAllTags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.$store.dispatch("tag/getAllTags");

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function getAllTags() {
        return _getAllTags.apply(this, arguments);
      };
    }(),
    getAllDrivers: function () {
      var _getAllDrivers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee8() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return this.$store.dispatch("driverV2/getAllDrivers");

              case 3:
                _context8.t0 = _context8.sent;

                if (_context8.t0) {
                  _context8.next = 6;
                  break;
                }

                _context8.t0 = {};

              case 6:
                data = _context8.t0;
                this.driversList = data;
                return _context8.abrupt("return", data);

              case 11:
                _context8.prev = 11;
                _context8.t1 = _context8["catch"](0);
                throw _context8.t1;

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 11]]);
      }));

      return function getAllDrivers() {
        return _getAllDrivers.apply(this, arguments);
      };
    }(),
    setTruckTypes: function setTruckTypes(truckTypes) {
      this.selectedTruckTypes = truckTypes;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FilesTab",
  components: {
    Folders: function Folders() {
      return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! @/components/folders/Folders */ "./resources/js/src/components/folders/Folders.vue"));
    }
  },
  props: {
    truckData: {
      required: false,
      type: Object,
      default: null
    }
  },
  computed: {
    files: function files() {
      var _this = this;

      return this.foldersList.map(function (folder) {
        var files = [];

        if (_this.isEditMode) {
          files = _this.filesList.filter(function (file) {
            return file.folderId === folder.id;
          });
        } else {
          files = _this.filesPayload.filter(function (file) {
            return file.folderId === folder.id;
          });
        }

        return _objectSpread({}, folder, {
          files: files
        });
      });
    },
    isEditMode: function isEditMode() {
      return this.$route.name === "UpdateTrucks";
    },
    truckId: function truckId() {
      return this.$route.params.id;
    }
  },
  data: function data() {
    return {
      foldersList: [],
      filesList: [],
      filesPayload: [],
      dragStartFile: null
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    fileDragStart: function fileDragStart(file) {
      this.dragStartFile = [file];
    },
    fileDropEnd: function fileDropEnd(file) {
      if (this.isEditMode) {
        var getFileId = this.dragStartFile.map(function (item) {
          return {
            fileId: item.id
          };
        });
        var payload = {
          folderId: file.folderId,
          files: getFileId
        };
        this.$store.dispatch('trucksV2/truckFileChangeFolder', payload);
        this.fetchFiles();
      }
    },
    fetchFolders: function () {
      var _fetchFolders = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch("trucksV2/fetchFolders");

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.foldersList = (data || {}).payload || [];
                return _context.abrupt("return", data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchFolders() {
        return _fetchFolders.apply(this, arguments);
      };
    }(),
    fetchFiles: function () {
      var _fetchFiles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$store.dispatch("trucksV2/fetchFiles", this.truckId);

              case 2:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.filesList = (data || {}).payload || [];
                return _context2.abrupt("return", data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function fetchFiles() {
        return _fetchFiles.apply(this, arguments);
      };
    }(),
    getErrorMsg: function getErrorMsg(error) {
      return error && error.response && error.response.data && error.response.data.message ? error.response.data.message : "Something went wrong";
    },
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (this.foldersList.length === 0 || this.isEditMode) {
                  this.$vs.loading();
                }

                if (!(this.foldersList.length === 0)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return this.fetchFolders();

              case 5:
                if (!this.isEditMode) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 8;
                return this.fetchFiles();

              case 8:
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context3.t0)
                });

              case 13:
                _context3.prev = 13;
                this.$vs.loading.close();
                return _context3.finish(13);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 10, 13, 16]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    addFolder: function () {
      var _addFolder = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4(_ref3) {
        var isEdit, id, folderName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                isEdit = _ref3.isEdit, id = _ref3.id, folderName = _ref3.folderName;
                _context4.prev = 1;

                if (!isEdit) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 5;
                return this.$store.dispatch("trucksV2/updateFolder", {
                  folderId: id,
                  folderName: folderName
                });

              case 5:
                _context4.next = 9;
                break;

              case 7:
                _context4.next = 9;
                return this.$store.dispatch("trucksV2/createFolder", {
                  folderName: folderName
                });

              case 9:
                _context4.next = 11;
                return this.fetchFolders();

              case 11:
                _context4.next = 17;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](1);
                _context4.next = 17;
                return this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: _context4.t0.response.data.message || _context4.t0.message
                });

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 13]]);
      }));

      return function addFolder(_x) {
        return _addFolder.apply(this, arguments);
      };
    }(),
    deleteFile: function () {
      var _deleteFile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee5(_ref4) {
        var file, _ref5, id;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                file = _ref4.file;

                if (this.isEditMode) {
                  _context5.next = 4;
                  break;
                }

                this.filesPayload = this.filesPayload.filter(function (item) {
                  return item.fileName !== file.fileName;
                });
                return _context5.abrupt("return");

              case 4:
                _context5.prev = 4;
                _ref5 = file || {}, id = _ref5.id;
                _context5.next = 8;
                return this.$store.dispatch("trucksV2/deleteFile", id);

              case 8:
                _context5.next = 10;
                return this.fetchFiles();

              case 10:
                this.$vs.notify({
                  time: 2000,
                  color: "success",
                  title: "File Deleted",
                  text: "File deleted successfully"
                });
                _context5.next = 16;
                break;

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](4);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context5.t0)
                });

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 13]]);
      }));

      return function deleteFile(_x2) {
        return _deleteFile.apply(this, arguments);
      };
    }(),
    getFileExtension: function getFileExtension(files) {
      var fileExtension = files.map(function (file) {
        var extension = file.name.split(".").pop();
        return {
          extension: extension
        };
      });
      return fileExtension;
    },
    generateS3NameAndURL: function () {
      var _generateS3NameAndURL = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee6(files) {
        var allFiles, _ref6, _ref6$data, result, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;

                if (!(files.length === 0)) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return");

              case 3:
                _context6.next = 5;
                return this.getFileExtension(files);

              case 5:
                allFiles = _context6.sent;
                _context6.next = 8;
                return this.$store.dispatch("trucksV2/uploadAttachment", {
                  files: allFiles
                });

              case 8:
                _ref6 = _context6.sent;
                _ref6$data = _ref6.data;
                result = _ref6$data.result;
                payload = _ref6$data.payload;
                return _context6.abrupt("return", result && payload ? payload : []);

              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6["catch"](0);

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 15]]);
      }));

      return function generateS3NameAndURL(_x3) {
        return _generateS3NameAndURL.apply(this, arguments);
      };
    }(),
    uploadAttachmentsToS3: function () {
      var _uploadAttachmentsToS = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee7(s3FileNameAndURL, files) {
        var attachments, i, _s3FileNameAndURL$i, fileName, url, file, _ref7, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;

                if (!s3FileNameAndURL) {
                  _context7.next = 16;
                  break;
                }

                attachments = [];
                i = 0;

              case 4:
                if (!(i < s3FileNameAndURL.length)) {
                  _context7.next = 15;
                  break;
                }

                _s3FileNameAndURL$i = s3FileNameAndURL[i], fileName = _s3FileNameAndURL$i.fileName, url = _s3FileNameAndURL$i.url;
                file = files[i];
                _context7.next = 9;
                return this.$store.dispatch("uploadFileToS3ViaPresignedUrl", {
                  url: url,
                  file: file,
                  extension: fileName.split(".").pop()
                });

              case 9:
                _ref7 = _context7.sent;
                status = _ref7.status;
                if (status === 200) attachments.push({
                  fileName: fileName,
                  originalFileName: file.name
                });

              case 12:
                i++;
                _context7.next = 4;
                break;

              case 15:
                return _context7.abrupt("return", attachments);

              case 16:
                _context7.next = 20;
                break;

              case 18:
                _context7.prev = 18;
                _context7.t0 = _context7["catch"](0);

              case 20:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 18]]);
      }));

      return function uploadAttachmentsToS3(_x4, _x5) {
        return _uploadAttachmentsToS.apply(this, arguments);
      };
    }(),
    uploadFiles: function () {
      var _uploadFiles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee8(_ref8) {
        var folderId, files, s3FileNameAndURL, attachments, _payload, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                folderId = _ref8.folderId, files = _ref8.files;
                this.$vs.loading();
                _context8.prev = 2;
                _context8.next = 5;
                return this.generateS3NameAndURL(files);

              case 5:
                s3FileNameAndURL = _context8.sent;
                _context8.next = 8;
                return this.uploadAttachmentsToS3(s3FileNameAndURL, files);

              case 8:
                _context8.t0 = _context8.sent;

                if (_context8.t0) {
                  _context8.next = 11;
                  break;
                }

                _context8.t0 = [];

              case 11:
                attachments = _context8.t0;

                if (this.isEditMode) {
                  _context8.next = 16;
                  break;
                }

                _payload = attachments.map(function (file) {
                  return _objectSpread({}, file, {
                    folderId: folderId
                  });
                });
                this.filesPayload = _toConsumableArray(this.filesPayload).concat(_toConsumableArray(_payload));
                return _context8.abrupt("return");

              case 16:
                payload = {
                  folderId: folderId,
                  truckId: parseInt(this.truckId),
                  files: attachments
                };
                _context8.next = 19;
                return this.$store.dispatch("trucksV2/uploadFiles", payload);

              case 19:
                _context8.next = 21;
                return this.fetchFiles();

              case 21:
                this.$vs.notify({
                  time: 2000,
                  color: "success",
                  title: "Success",
                  text: "Files uploaded successfully"
                });
                _context8.next = 27;
                break;

              case 24:
                _context8.prev = 24;
                _context8.t1 = _context8["catch"](2);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context8.t1)
                });

              case 27:
                _context8.prev = 27;
                this.$vs.loading.close();
                return _context8.finish(27);

              case 30:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[2, 24, 27, 30]]);
      }));

      return function uploadFiles(_x6) {
        return _uploadFiles.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TruckLogsList",
  props: {
    truckData: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      logs: [],
      totalPage: 1,
      totalRecords: 0,
      paginationMetaData: null,
      defaultPageSize: 10
    };
  },
  computed: {
    truckId: function truckId() {
      return this.$route.params.id || null;
    },
    footerText: function footerText() {
      var _ref = this.paginationMetaData || {},
          from = _ref.from,
          to = _ref.to,
          total = _ref.total;

      if (from && to && total) {
        return "Displaying ".concat(from, " to ").concat(to, " of ").concat(total, " records");
      }

      return "";
    }
  },
  created: function created() {
    this.init(); // https://day.js.org/docs/en/plugin/utc

    var dayjsUtc = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");

    dayjs__WEBPACK_IMPORTED_MODULE_2___default.a.extend(dayjsUtc);
  },
  methods: {
    utcToLocalTime: function utcToLocalTime(data) {
      if (data.utcDateTime) {
        return dayjs__WEBPACK_IMPORTED_MODULE_2___default.a.utc(data.utcDateTime).local().format('YYYY-MM-DD HH:mm');
      }
    },
    getLogsList: function () {
      var _getLogsList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var pageSize,
            currentPage,
            _ref2,
            meta,
            links,
            logs,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageSize = _args.length > 0 && _args[0] !== undefined ? _args[0] : 10;
                currentPage = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
                _context.prev = 2;

                if (this.truckId) {
                  _context.next = 5;
                  break;
                }

                throw new Error({
                  message: "Required id missing"
                });

              case 5:
                this.$vs.loading();
                _context.next = 8;
                return this.$store.dispatch("trucksV2/getLogsList", {
                  id: this.truckId,
                  pageSize: pageSize,
                  page: currentPage
                });

              case 8:
                _ref2 = _context.sent;
                meta = _ref2.meta;
                links = _ref2.links;
                logs = _ref2.logs;
                this.logs = logs || [];
                this.totalPage = (meta || {}).last_page || 1;
                this.totalRecords = (meta || {}).total || 0;
                this.paginationMetaData = meta; // return data;

                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](2);
                _context.next = 22;
                return this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: (((_context.t0 || {}).response || {}).data || {}).message || 'Something went wrong'
                });

              case 22:
                _context.prev = 22;
                this.$vs.loading.close();
                return _context.finish(22);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 18, 22, 25]]);
      }));

      return function getLogsList() {
        return _getLogsList.apply(this, arguments);
      };
    }(),
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.getLogsList();

              case 3:
                _context2.next = 7;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    toPascal: function toPascal(text) {
      var result = text.replace(/([A-Z])/g, " $1");
      return result.charAt(0).toUpperCase() + result.slice(1);
    },
    accentColor: function accentColor(key) {
      var colorScheme = {
        inOperation: "success",
        serviceCompleted: "success",
        inService: "danger",
        serviceScheduled: "danger",
        serviceReported: "danger"
      };
      return colorScheme[key] || "";
    },
    onSort: function onSort(event) {},
    onPage: function onPage(_ref3) {
      var page = _ref3.page,
          rows = _ref3.rows;
      this.getLogsList(rows, page + 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TruckMaintenanceList",
  components: {
    MaintenanceForm: function MaintenanceForm() {
      return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! @/views/pages/maintenance-v2/MaintenanceForm.vue */ "./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue"));
    }
  },
  props: {
    truckData: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      maintenances: [],
      totalPage: 1,
      totalRecords: 0,
      paginationMetaData: null,
      defaultPageSize: 10,
      isMaintenanceFormVisible: false,
      selectedIssueId: null,
      prioritiesList: _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].PRIORITIES_LIST,
      maintenanceStatus: _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].maintenanceStatus
    };
  },
  computed: {
    truckId: function truckId() {
      return Number(this.$route.params.id) || null;
    },
    footerText: function footerText() {
      var _ref = this.paginationMetaData || {},
          from = _ref.from,
          to = _ref.to,
          total = _ref.total;

      if (from && to && total) {
        return "Displaying ".concat(from, " to ").concat(to, " of ").concat(total, " records");
      }

      return '';
    },
    truckDataWithType: function truckDataWithType() {
      return _objectSpread({}, this.truckData, {
        type: 'truck'
      });
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    getMaintenanceIssueList: function () {
      var _getMaintenanceIssueList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var pageSize,
            currentPage,
            _ref2,
            data,
            meta,
            links,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageSize = _args.length > 0 && _args[0] !== undefined ? _args[0] : 10;
                currentPage = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
                _context.prev = 2;

                if (this.truckId) {
                  _context.next = 5;
                  break;
                }

                throw new Error({
                  message: "Required id missing"
                });

              case 5:
                this.$vs.loading();
                _context.next = 8;
                return this.$store.dispatch("trucksV2/getMaintenanceIssueList", {
                  id: this.truckId,
                  pageSize: pageSize,
                  page: currentPage
                });

              case 8:
                _ref2 = _context.sent;
                data = _ref2.data;
                meta = _ref2.meta;
                links = _ref2.links;
                this.maintenances = data || [];
                this.totalPage = (meta || {}).last_page || 1;
                this.totalRecords = (meta || {}).total || 0;
                this.paginationMetaData = meta;
                return _context.abrupt("return", data);

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](2);
                _context.next = 23;
                return this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: _context.t0.response.data.message || _context.t0.message
                });

              case 23:
                _context.prev = 23;
                this.$vs.loading.close();
                return _context.finish(23);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 19, 23, 26]]);
      }));

      return function getMaintenanceIssueList() {
        return _getMaintenanceIssueList.apply(this, arguments);
      };
    }(),
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.getMaintenanceIssueList();

              case 3:
                _context2.next = 7;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    onSort: function onSort(event) {},
    onPage: function onPage(_ref3) {
      var page = _ref3.page,
          rows = _ref3.rows;
      this.getMaintenanceIssueList(rows, page + 1);
    },
    switchToMaintenanceForm: function switchToMaintenanceForm(event) {
      this.isMaintenanceFormVisible = !this.isMaintenanceFormVisible;

      if (event && event.updateList) {
        this.getMaintenanceIssueList();
      }

      if (!this.isMaintenanceFormVisible) {
        this.selectedIssueId = null;
      }
    },
    editIssue: function editIssue(id) {
      this.selectedIssueId = id;
      this.switchToMaintenanceForm();
    },
    getPriorityLabel: function getPriorityLabel(priority) {
      var priorityItem = this.prioritiesList.find(function (item) {
        return item.value === priority;
      });
      return priorityItem ? priorityItem.label : '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=script&lang=js& ***!
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







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TruckOverview',
  components: {
    TruckInfoForm: function TruckInfoForm() {
      return Promise.all(/*! import() */[__webpack_require__.e(20), __webpack_require__.e(230)]).then(__webpack_require__.bind(null, /*! ./InfoForm */ "./resources/js/src/views/pages/trucks/components/TruckOverview/InfoForm.vue"));
    },
    TruckSpecsForm: function TruckSpecsForm() {
      return __webpack_require__.e(/*! import() */ 232).then(__webpack_require__.bind(null, /*! ./SpecsForm */ "./resources/js/src/views/pages/trucks/components/TruckOverview/SpecsForm.vue"));
    },
    // TruckDashCamForm: () => import('./DashCamForm'),
    TruckExpirationDateForm: function TruckExpirationDateForm() {
      return __webpack_require__.e(/*! import() */ 227).then(__webpack_require__.bind(null, /*! ./ExpirationDateForm */ "./resources/js/src/views/pages/trucks/components/TruckOverview/ExpirationDateForm.vue"));
    },
    CompanyIFTAForm: function CompanyIFTAForm() {
      return __webpack_require__.e(/*! import() */ 226).then(__webpack_require__.bind(null, /*! ./CompanyIFTAForm */ "./resources/js/src/views/pages/trucks/components/TruckOverview/CompanyIFTAForm.vue"));
    },
    // TargetUseFullLifeForm: () => import('./TargetUseFullLifeForm'),
    FinancialForm: function FinancialForm() {
      return __webpack_require__.e(/*! import() */ 228).then(__webpack_require__.bind(null, /*! ./FinancialForm */ "./resources/js/src/views/pages/trucks/components/TruckOverview/FinancialForm.vue"));
    },
    NotesSection: function NotesSection() {
      return __webpack_require__.e(/*! import() */ 231).then(__webpack_require__.bind(null, /*! ./NotesSection */ "./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue"));
    },
    // LogsSection: () => import('./LogsSection'),
    DriverTransponderAssignment: function DriverTransponderAssignment() {
      return __webpack_require__.e(/*! import() */ 194).then(__webpack_require__.bind(null, /*! ./DriverAssignment */ "./resources/js/src/views/pages/trucks/components/TruckOverview/DriverAssignment.vue"));
    },
    FuelCard: function FuelCard() {
      return __webpack_require__.e(/*! import() */ 229).then(__webpack_require__.bind(null, /*! ./FuelCard */ "./resources/js/src/views/pages/trucks/components/TruckOverview/FuelCard.vue"));
    }
  },
  props: {
    truckData: {
      required: false,
      type: Object,
      default: null
    },
    driversList: {
      required: false,
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      truckInfo: null,
      specData: null,
      expirationData: null,
      IFTAData: null,
      financeData: null,
      notes: null,
      driverAssignments: null,
      fuelCardNumber: ''
    };
  },
  computed: {
    truckPayload: function truckPayload() {
      var _ref = this.financeData || {},
          interestRate = _ref.interestRate;

      if (interestRate || interestRate === 0) {
        interestRate = interestRate / 100;
      } else {
        interestRate = null;
      }

      return _objectSpread({}, this.truckInfo, this.specData, this.expirationData, this.IFTAData, this.financeData, {
        notes: this.notes,
        driverAssignments: this.driverAssignments,
        fuelCardNumber: this.fuelCardNumber,
        tags: (this.truckInfo.tags || []).map(function (tag) {
          return {
            id: tag.tag_id
          };
        }),
        interestRate: interestRate
      });
    },
    isEdit: function isEdit() {
      return !!this.truckData;
    }
  },
  created: function created() {
    this.bindTruckData();
  },
  watch: {
    truckData: {
      handler: function handler(newVal) {
        this.bindTruckData(newVal);
      },
      immediate: true
    }
  },
  methods: {
    bindTruckData: function bindTruckData(truckData) {
      if (truckData) {
        var status = truckData.status,
            tags = truckData.tags,
            truckNumber = truckData.truckNumber,
            year = truckData.year,
            make = truckData.make,
            model = truckData.model,
            color = truckData.color,
            vin = truckData.vin,
            licensePlate = truckData.licensePlate,
            licenseState = truckData.licenseState,
            hourlyCost = truckData.hourlyCost,
            insuranceValue = truckData.insuranceValue,
            monthlyInsuranceCost = truckData.monthlyInsuranceCost,
            totalInsuranceCost = truckData.totalInsuranceCost;
        this.truckInfo = {
          status: status,
          tags: tags,
          truckNumber: truckNumber,
          year: year,
          make: make,
          model: model,
          color: color,
          vin: vin,
          licensePlate: licensePlate,
          licenseState: licenseState,
          hourlyCost: hourlyCost,
          insuranceValue: insuranceValue,
          monthlyInsuranceCost: monthlyInsuranceCost,
          totalInsuranceCost: totalInsuranceCost
        };
        var odometerAtPurchase = truckData.odometerAtPurchase,
            brakeTypeFront = truckData.brakeTypeFront,
            brakeTypeRear = truckData.brakeTypeRear,
            speedLimitPedal = truckData.speedLimitPedal,
            speedLimitCruise = truckData.speedLimitCruise,
            fuelTankCapacity = truckData.fuelTankCapacity,
            tireSize = truckData.tireSize,
            idleShutoff = truckData.idleShutoff,
            apuUnit = truckData.apuUnit;
        this.specData = {
          odometerAtPurchase: odometerAtPurchase,
          brakeTypeFront: brakeTypeFront,
          brakeTypeRear: brakeTypeRear,
          speedLimitPedal: speedLimitPedal,
          speedLimitCruise: speedLimitCruise,
          fuelTankCapacity: fuelTankCapacity,
          tireSize: tireSize,
          idleShutoff: idleShutoff,
          apuUnit: apuUnit
        };
        var irpExpirationDate = truckData.irpExpirationDate,
            annualInspExpireDate = truckData.annualInspExpireDate,
            insuranceExpireDate = truckData.insuranceExpireDate,
            registrationExpireDate = truckData.registrationExpireDate,
            annualPermitExpireDate = truckData.annualPermitExpireDate;
        this.expirationData = {
          irpExpirationDate: irpExpirationDate,
          annualInspExpireDate: annualInspExpireDate,
          insuranceExpireDate: insuranceExpireDate,
          registrationExpireDate: registrationExpireDate,
          annualPermitExpireDate: annualPermitExpireDate
        };
        var iftaDecalNumber = truckData.iftaDecalNumber;
        this.IFTAData = {
          iftaDecalNumber: iftaDecalNumber
        };
        var ownershipType = truckData.ownershipType,
            dateAcquired = truckData.dateAcquired,
            acquireCost = truckData.acquireCost,
            paymentStartDate = truckData.paymentStartDate,
            paymentEndDate = truckData.paymentEndDate,
            interestRate = truckData.interestRate,
            lender = truckData.lender,
            monthlyPayment = truckData.monthlyPayment,
            contractNumber = truckData.contractNumber,
            priceSold = truckData.priceSold,
            dateSold = truckData.dateSold;
        this.financeData = {
          ownershipType: ownershipType,
          dateAcquired: dateAcquired,
          acquireCost: acquireCost,
          paymentStartDate: paymentStartDate,
          paymentEndDate: paymentEndDate,
          interestRate: interestRate,
          lender: lender,
          monthlyPayment: monthlyPayment,
          contractNumber: contractNumber,
          priceSold: priceSold,
          dateSold: dateSold
        };
        var notes = truckData.notes;
        this.notes = notes;
        var driverAssignments = truckData.driverAssignments;
        this.driverAssignments = driverAssignments;
        var fuelCardNumber = truckData.fuelCardNumber;
        this.fuelCardNumber = fuelCardNumber;
      }
    },
    validate: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var _ref2, infoValidator, infoFormValidation, _ref3, specsValidator, specsFormValidation, _ref4, driverAssignmentValidator, driverAssignmentValidation, _ref5, financeValidator, financeFormValidator;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref2 = (this.$refs || {}).infoForm || {}, infoValidator = _ref2.validate;
                infoFormValidation = true;

                if (!infoValidator) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return this.$refs.infoForm.validate();

              case 5:
                infoFormValidation = _context.sent;

              case 6:
                if (infoFormValidation) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", false);

              case 8:
                _ref3 = (this.$refs || {}).specsForm || {}, specsValidator = _ref3.validate;
                specsFormValidation = true;

                if (!specsValidator) {
                  _context.next = 14;
                  break;
                }

                _context.next = 13;
                return this.$refs.specsForm.validate();

              case 13:
                specsFormValidation = _context.sent;

              case 14:
                if (specsFormValidation) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", false);

              case 16:
                _ref4 = (this.$refs || {}).driverAssignment || {}, driverAssignmentValidator = _ref4.validate;
                driverAssignmentValidation = true;

                if (!driverAssignmentValidator) {
                  _context.next = 22;
                  break;
                }

                _context.next = 21;
                return this.$refs.driverAssignment.validate();

              case 21:
                driverAssignmentValidation = _context.sent;

              case 22:
                if (driverAssignmentValidation) {
                  _context.next = 24;
                  break;
                }

                return _context.abrupt("return", false);

              case 24:
                // const { validate : expirationValidator } = (this.$refs || {}).expirationForm || {};
                // let expirationFormValidation = true;
                // if (expirationValidator) {
                //   expirationFormValidation = await this.$refs.expirationForm.validate();
                // }
                // if(!expirationFormValidation) return false;
                // const { validate : iftaValidator } = (this.$refs || {}).iftaForm || {};
                // let iftaFormValidator = true;
                // if (iftaValidator) {
                //   iftaFormValidator = await this.$refs.iftaForm.validate();
                // }
                // if(!iftaFormValidator) return false;
                _ref5 = (this.$refs || {}).financeForm || {}, financeValidator = _ref5.validate;
                financeFormValidator = true;

                if (!financeValidator) {
                  _context.next = 30;
                  break;
                }

                _context.next = 29;
                return this.$refs.financeForm.validate();

              case 29:
                financeFormValidator = _context.sent;

              case 30:
                if (financeFormValidator) {
                  _context.next = 32;
                  break;
                }

                return _context.abrupt("return", false);

              case 32:
                return _context.abrupt("return", true);

              case 33:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TruckTypeIcons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TruckTypeIcons.vue */ "./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue");



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TruckSummaryCard",
  components: {
    TruckTypeIcons: _TruckTypeIcons_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    header: {
      type: String,
      default: ""
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    enableSubmit: {
      type: Boolean,
      default: false
    },
    selectedTruckTypes: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    getSelectedTruckTypes: function getSelectedTruckTypes() {
      return this.selectedTruckTypes;
    }
  },
  data: function data() {
    return {
      truckTypeIconsName: [{
        title: 'Van',
        icon: 'van',
        value: 'van'
      }, {
        title: 'Reefer',
        icon: 'reefer',
        value: 'reefer'
      }, {
        title: 'Flatbed',
        icon: 'flatbed',
        value: 'flatbed'
      }, {
        title: 'Step Deck',
        icon: 'step_deck',
        value: 'stepDeck'
      }, {
        title: 'Power Only',
        icon: 'power_only',
        value: 'powerOnly'
      }, {
        title: 'Conestoga',
        icon: 'conestoga',
        value: 'conestoga'
      }, {
        title: 'Box Truck',
        icon: 'box_truck',
        value: 'boxTruck'
      }, {
        title: 'Sprinter',
        icon: 'sprinter',
        value: 'sprinter'
      }],
      activeType: []
    };
  },
  methods: {
    setTruckTypeActive: function setTruckTypeActive(value) {
      if (this.getSelectedTruckTypes.includes(value)) {
        this.$emit('onTruckTypeClick', this.getSelectedTruckTypes.filter(function (item) {
          return item !== value;
        }));
      } else {
        this.$emit('onTruckTypeClick', _toConsumableArray(this.getSelectedTruckTypes).concat([value]));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TruckTypeIcons",
  props: {
    icon: {
      type: String
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=template&id=77b205b2&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=template&id=77b205b2& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "dashboard truck-dashboard"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col flex-wrap flex justify-between w-full"
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("h3", {
    staticClass: "self-center"
  }, [_vm._v("Truck")]), _vm._v(" "), _c("div", {
    staticClass: "flex ml-4"
  }, [_c("vs-input", {
    staticClass: "w-full mx-2",
    attrs: {
      disabled: "",
      value: _vm.truckInfoHeaderLabel
    }
  })], 1)])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col flex-wrap flex justify-between w-full"
  }, [_c("div", {
    staticClass: "flex"
  }, _vm._l(_vm.chips, function (_ref) {
    var id = _ref.id,
        label = _ref.label;
    return _c("vs-chip", {
      key: id,
      staticClass: "cursor-pointer mx-2",
      attrs: {
        color: _vm.selectedTab === id ? "primary" : ""
      },
      nativeOn: {
        click: function click($event) {
          return _vm.changeTab(id);
        }
      }
    }, [_vm._v("\n            " + _vm._s(label) + "\n          ")]);
  }), 1), _vm._v(" "), _c("span", [_c("vs-button", {
    attrs: {
      color: "primary",
      icon: "format_list_bulleted"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.$router.push("/trucks");
      }
    }
  }, [_vm._v("\n            Trucks\n          ")])], 1)])])], 1), _vm._v(" "), _c("div", [_c("TruckSummaryCard", {
    attrs: {
      header: _vm.truckInfoHeaderLabel,
      isEdit: _vm.isUpdateMode,
      enableSubmit: _vm.showSubmitButton,
      selectedTruckTypes: _vm.selectedTruckTypes
    },
    on: {
      submit: _vm.submitForm,
      onTruckTypeClick: _vm.setTruckTypes
    }
  }), _vm._v(" "), _vm._l(_vm.chips, function (tab) {
    return _c("section", {
      key: tab.id
    }, [_c(tab.component, {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.selectedTab === tab.id,
        expression: "selectedTab === tab.id"
      }],
      key: tab.id,
      ref: "tabComponents",
      refInFor: true,
      tag: "component",
      attrs: {
        truckData: _vm.truckData,
        driversList: _vm.driversList
      },
      on: {
        cancel: _vm.redirectToTrucksList,
        submit: _vm.submitForm
      }
    })], 1);
  })], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=template&id=c2bd7e9e&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=template&id=c2bd7e9e& ***!
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

  return _c("div", [_c("Folders", {
    attrs: {
      dataArray: _vm.files,
      showFileUploadIcon: true,
      imagePreview: _vm.isEditMode,
      showDownload: _vm.isEditMode
    },
    on: {
      addFolder: _vm.addFolder,
      deleteFile: _vm.deleteFile,
      uploadFiles: _vm.uploadFiles,
      fileDragStart: _vm.fileDragStart,
      fileDropEnd: _vm.fileDropEnd
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=template&id=79a3fc23&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=template&id=79a3fc23& ***!
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
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row m-0 flex justify-between items-center w-full"
  }, [_c("div", {
    staticClass: "vx-col pl-0"
  }, [_c("h3", {
    staticClass: "title",
    domProps: {
      textContent: _vm._s("Truck Logs")
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col pr-0"
  })]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.logs,
      responsiveLayout: "scroll",
      lazy: true,
      paginator: true,
      rows: _vm.defaultPageSize,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      scrollable: true,
      rowsPerPageOptions: [10, 25, 50],
      currentPageReportTemplate: "Displaying {first} to {last} of {totalRecords} records"
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event);
      },
      page: function page($event) {
        return _vm.onPage($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }, _vm.footerText ? {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "vx-row flex justify-between items-center"
        }, [_c("div", {
          staticClass: "vx-col"
        }, [_vm._v(_vm._s(_vm.footerText))]), _vm._v(" "), _c("div", {
          staticClass: "vx-col"
        })])];
      },
      proxy: true
    } : null], null, true)
  }, [_c("Column", {
    attrs: {
      field: "truckNumber",
      header: "Truck #"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "status",
      header: "Status"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_c("div", [_c("vs-chip", {
          attrs: {
            transparent: "",
            color: _vm.accentColor(slotProps.data.status)
          }
        }, [_vm._v("\n                " + _vm._s(_vm.toPascal(slotProps.data.status)) + "\n              ")])], 1)];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "utcDateTime",
      header: "Datetime"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var data = _ref.data;
        return [_vm._v("\n            " + _vm._s(_vm.utcToLocalTime(data)) + "\n          ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "location",
      header: "Location"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "loadNumber",
      header: "Load #"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "loadReference",
      header: "Reference"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "loadShipper",
      header: "Shipper"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "loadReceiver",
      header: "Receiver"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "loadDriverName",
      header: "Driver"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "modifiedByUserName",
      header: "Modified By"
    }
  })], 1)], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=template&id=8eba9b72&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=template&id=8eba9b72& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm.isMaintenanceFormVisible ? _c("div", {
    staticClass: "mt-4"
  }, [_c("maintenance-form", {
    attrs: {
      truckData: _vm.truckDataWithType,
      issueId: _vm.selectedIssueId
    },
    on: {
      closeMaintenanceForm: function closeMaintenanceForm($event) {
        return _vm.switchToMaintenanceForm($event);
      }
    }
  })], 1) : _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row m-0 flex justify-between items-center w-full"
  }, [_c("div", {
    staticClass: "vx-col pl-0"
  }, [_c("h3", {
    staticClass: "title",
    domProps: {
      textContent: _vm._s("Truck Maintenances")
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col pr-0"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      icon: "add"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.switchToMaintenanceForm();
      }
    }
  }, [_vm._v("\n          NEW\n        ")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mt-4"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.maintenances,
      responsiveLayout: "scroll",
      lazy: true,
      paginator: true,
      rows: _vm.defaultPageSize,
      rowHover: true,
      totalRecords: _vm.totalRecords,
      scrollable: true,
      rowsPerPageOptions: [10, 25, 50],
      currentPageReportTemplate: "Displaying {first} to {last} of {totalRecords} records"
    },
    on: {
      sort: function sort($event) {
        return _vm.onSort($event);
      },
      page: function page($event) {
        return _vm.onPage($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }, _vm.footerText ? {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "vx-row flex justify-between items-center"
        }, [_c("div", {
          staticClass: "vx-col"
        }, [_vm._v(_vm._s(_vm.footerText))]), _vm._v(" "), _c("div", {
          staticClass: "vx-col"
        })])];
      },
      proxy: true
    } : null], null, true)
  }, [_c("Column", {
    attrs: {
      header: "Actions"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var id = _ref.data.id;
        return [_c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            size: "small",
            icon: "edit"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.editIssue(id);
            }
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "issueNumber",
      header: "Issue Number"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "priority",
      header: "Priority"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var priority = _ref2.data.priority;
        return [_c("span", {
          domProps: {
            textContent: _vm._s(_vm.getPriorityLabel(priority))
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "status",
      header: "Status"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var status = _ref3.data.status;
        return [_c("span", {
          domProps: {
            textContent: _vm._s(_vm.maintenanceStatus[status] || "")
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "serviceType",
      header: "Service Type"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "serviceLocation",
      header: "Service Location"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "finalCost",
      header: "Final Cost"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "notes",
      header: "Notes"
    }
  })], 1)], 1)])], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=template&id=57a53db8&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=template&id=57a53db8& ***!
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

  return _c("div", [_c("div", {
    staticClass: "vx-row w-full md:mb-base mt-4"
  }, [_c("div", {
    staticClass: "vx-col w-full md:w-1/3 mb-8 md:mb-0"
  }, [_c("TruckInfoForm", {
    ref: "infoForm",
    model: {
      value: _vm.truckInfo,
      callback: function callback($$v) {
        _vm.truckInfo = $$v;
      },
      expression: "truckInfo"
    }
  }), _vm._v(" "), _c("TruckSpecsForm", {
    ref: "specsForm",
    model: {
      value: _vm.specData,
      callback: function callback($$v) {
        _vm.specData = $$v;
      },
      expression: "specData"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/3 mb-8 md:mb-0"
  }, [_c("TruckExpirationDateForm", {
    ref: "expirationForm",
    model: {
      value: _vm.expirationData,
      callback: function callback($$v) {
        _vm.expirationData = $$v;
      },
      expression: "expirationData"
    }
  }), _vm._v(" "), _c("CompanyIFTAForm", {
    ref: "iftaForm",
    model: {
      value: _vm.IFTAData,
      callback: function callback($$v) {
        _vm.IFTAData = $$v;
      },
      expression: "IFTAData"
    }
  }), _vm._v(" "), _c("FinancialForm", {
    ref: "financeForm",
    model: {
      value: _vm.financeData,
      callback: function callback($$v) {
        _vm.financeData = $$v;
      },
      expression: "financeData"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/3 mb-8 md:mb-0"
  }, [_c("NotesSection", {
    ref: "notesForm",
    model: {
      value: _vm.notes,
      callback: function callback($$v) {
        _vm.notes = $$v;
      },
      expression: "notes"
    }
  }), _vm._v(" "), _c("DriverTransponderAssignment", {
    ref: "driverAssignment",
    attrs: {
      driversList: _vm.driversList
    },
    model: {
      value: _vm.driverAssignments,
      callback: function callback($$v) {
        _vm.driverAssignments = $$v;
      },
      expression: "driverAssignments"
    }
  }), _vm._v(" "), _c("FuelCard", {
    ref: "fuelCardNumber",
    model: {
      value: _vm.fuelCardNumber,
      callback: function callback($$v) {
        _vm.fuelCardNumber = $$v;
      },
      expression: "fuelCardNumber"
    }
  })], 1)]), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col ml-auto"
  }, [_c("vs-button", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("submit");
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.isEdit ? "Update" : "Create") + "\n        ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("cancel");
      }
    }
  }, [_vm._v("\n          Cancel\n        ")])], 1)])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=template&id=229df98a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=template&id=229df98a&scoped=true& ***!
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
    staticClass: "mt-4 border-solid bg-primary-light border-radius-10 border-color-primary flex flex-row items-center justify-center p-4"
  }, [_c("div", {
    staticClass: "flex flex-row w-full items-center min-height-100 justify-between"
  }, [_c("section", {
    staticClass: "flex"
  }, [_c("div", {
    staticClass: "flex items-center justify-center bg-primary rounded-full height-70 width-70"
  }, [_c("vs-icon", {
    attrs: {
      icon: "local_shipping",
      size: "40px"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col"
  }, [_c("div", {
    staticClass: "ml-4"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v(_vm._s(_vm.header))])]), _vm._v(" "), _c("div", {
    staticClass: "ml-4 flex flex-col"
  }, [_c("label", {
    staticClass: "text-sm opacity-75 mt-3",
    attrs: {
      for: "type"
    }
  }, [_vm._v("\n            Truck Type\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2 flex-wrap"
  }, _vm._l(_vm.truckTypeIconsName, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "trucks-truck-summary-card-truck-type",
      class: [_vm.getSelectedTruckTypes.includes(item.value) && "active-type"],
      on: {
        click: function click($event) {
          return _vm.setTruckTypeActive(item.value);
        }
      }
    }, [_c("truck-type-icons", {
      attrs: {
        icon: item.icon
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(item.title))])], 1);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-end"
  }, [_vm.enableSubmit ? _c("vs-button", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.$emit("submit");
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.isEdit ? "Update" : "Create") + "\n      ")]) : _vm._e()], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=template&id=13819fb4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=template&id=13819fb4&scoped=true& ***!
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

  return _c("div", [_vm.icon === "van" ? _c("div", [_c("svg", {
    attrs: {
      width: "20",
      height: "15",
      viewBox: "0 0 20 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M19 7.13462V12H1V1H11.8M19 7.13462L13.825 1H11.8M19 7.13462H11.8V1",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "5.5",
      cy: "12.5",
      r: "2.1",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "14.5",
      cy: "12.5",
      r: "2.1",
      "stroke-width": "0.8"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.icon === "reefer" ? _c("div", [_c("svg", {
    attrs: {
      width: "19",
      height: "15",
      viewBox: "0 0 19 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M4.4 3.77049V11.4426M7.8 3.77049V11.4426M11.2 3.77049V11.4426M14.8125 3.77049V11.4426M1 1V14H18V1H1Z",
      "stroke-width": "0.8"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.icon === "flatbed" ? _c("div", [_c("svg", {
    attrs: {
      width: "26",
      height: "15",
      viewBox: "0 0 26 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M24.75 5.76923L20.4578 1.44231M24.75 5.76923V9.80769M24.75 5.76923H20.4578V1.44231M20.4578 1.44231H17.5964M17.5964 1.44231V0M17.5964 1.44231V8.65385M17.5964 8.65385H1L1.57229 11.25H24.75V9.80769M17.5964 8.65385H19.3133L20.4578 9.80769H24.75",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "4.75",
      cy: "12.5",
      r: "2.1",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "18.5",
      cy: "12.5",
      r: "2.1",
      "stroke-width": "0.8"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.icon === "step_deck" ? _c("div", [_c("svg", {
    attrs: {
      width: "25",
      height: "14",
      viewBox: "0 0 25 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M15.5854 0V2.82609M15.5854 10.7391V2.82609M15.5854 2.82609H19.5122M19.5122 2.82609L24 7.63043M19.5122 2.82609V7.63043H24M24 7.63043V11.8696L23.1585 13H17.5488M1 8.76087V10.7391H12.2195V8.19565H15.5854V5.65217H9.97561V8.19565H1V8.76087Z",
      "stroke-width": "0.8"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.icon === "power_only" ? _c("div", [_c("svg", {
    attrs: {
      width: "25",
      height: "16",
      viewBox: "0 0 25 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M20.1636 12.4L16.5 10.9909L2.12727 11.2727V10.4273L1.28182 10.1455L1 9.01818H16.2182L20.1636 10.1455V12.4ZM20.1636 12.4V13.5273H22.7L24.3909 11.8364V6.2M15.3727 8.73636V1.12727M15.3727 0V1.12727M15.3727 1.12727H19.8818M19.8818 1.12727L24.3909 6.2M19.8818 1.12727V6.2H24.3909",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "4.09996",
      cy: "12.9636",
      r: "2.13636",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "9.73631",
      cy: "12.9636",
      r: "2.13636",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "17.6273",
      cy: "12.9636",
      r: "2.13636",
      "stroke-width": "0.8"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.icon === "conestoga" ? _c("div", [_c("svg", {
    attrs: {
      width: "25",
      height: "14",
      viewBox: "0 0 25 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M19.425 10.5H1V8.28947H1.825M19.425 10.5V9.11842L18.325 8.28947H16.675M19.425 10.5H23.275L24.1 9.11842V5.80263M1.825 8.28947H4.025M1.825 8.28947V1.65789M1.825 0.828947V1.65789M4.025 8.28947V0.828947M4.025 8.28947H6.5M6.5 8.28947V0.828947M6.5 8.28947H8.975M8.975 8.28947V0.828947M8.975 8.28947H11.175M11.175 8.28947V0.828947M11.175 8.28947H13.375M13.375 8.28947V1.65789M13.375 8.28947H16.675M13.375 0.828947V1.65789M1.825 1.65789H13.375M16.675 0V1.65789M16.675 8.28947V1.65789M16.675 1.65789H19.975M19.975 1.65789L24.1 5.80263M19.975 1.65789V5.80263H24.1",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "4.85002",
      cy: "11.55",
      r: "2.05",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "17.45",
      cy: "11.55",
      r: "2.05",
      "stroke-width": "0.8"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.icon === "box_truck" ? _c("div", [_c("svg", {
    attrs: {
      width: "23",
      height: "16",
      viewBox: "0 0 23 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M16.037 4.62963V13.1852H1V1H16.037V4.62963ZM16.037 4.62963H18.8889M18.8889 4.62963L22 8.25926M18.8889 4.62963V8.25926H22M22 8.25926V12.1481L21.2222 13.1852H18.3704",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "16.5556",
      cy: "12.926",
      r: "1.93333",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "4.11117",
      cy: "12.926",
      r: "1.93333",
      "stroke-width": "0.8"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.icon === "sprinter" ? _c("div", [_c("svg", {
    attrs: {
      width: "21",
      height: "14",
      viewBox: "0 0 21 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M17.1296 5.33333H19.7778L20.5 6.2963V8.22222M17.1296 5.33333L14.963 1M17.1296 5.33333H14.963V1M14.963 1H1V8.22222M1 8.22222V10.8704H20.5V8.22222M1 8.22222H20.5",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "16.4074",
      cy: "11.1111",
      r: "1.76667",
      "stroke-width": "0.8"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "4.85185",
      cy: "11.1111",
      r: "1.76667",
      "stroke-width": "0.8"
    }
  })])]) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".truck-dashboard {\n  /* Chrome, Safari, Edge, Opera */\n  /*!* Firefox *!*/\n}\n.truck-dashboard input::-webkit-outer-spin-button,\n.truck-dashboard input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n[dir] .truck-dashboard input::-webkit-outer-spin-button, [dir] .truck-dashboard input::-webkit-inner-spin-button {\n  margin: 0;\n}\n.truck-dashboard input[type=number] {\n  -moz-appearance: textfield;\n}\n.truck-dashboard input[type=number]::-webkit-inner-spin-button,\n.truck-dashboard input[type=number]::-webkit-outer-spin-button {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trucks-truck-summary-card-truck-type[data-v-229df98a] {\n  width: 65px;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  flex-direction: column;\n  color: \"#fff\";\n}[dir] .trucks-truck-summary-card-truck-type[data-v-229df98a] {\n  border-radius: 8px;\n  padding: 6px;\n  margin: 2px;\n  cursor: pointer;\n}\n.trucks-truck-summary-card-truck-type span[data-v-229df98a] {\n  color: \"#626262\";\n  font-size: 10px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n[dir] .trucks-truck-summary-card-truck-type span[data-v-229df98a] {\n  margin-top: 2px;\n}\n.min-height-100[data-v-229df98a] {\n  min-height: 100px;\n}\n[dir] .bg-primary-light[data-v-229df98a] {\n  background-color: #f1f4ff;\n}\n[dir] .border-radius-10[data-v-229df98a] {\n  border-radius: 10px !important;\n}\n[dir] .border-color-primary[data-v-229df98a] {\n  border-color: #aca7f7 !important;\n}\n[dir] .bg-primary[data-v-229df98a] {\n  background-color: #aca7f7;\n}\n.height-70[data-v-229df98a] {\n  height: 70px;\n}\n.width-70[data-v-229df98a] {\n  width: 70px;\n}\n[dir] .active-type[data-v-229df98a] {\n  background: #1877f2;\n}\n.active-type span[data-v-229df98a] {\n  color: #fff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "svg[data-v-13819fb4] {\n  stroke: #626262;\n  /* fill: #626262; */\n}\n.active-type svg[data-v-13819fb4] {\n  stroke: #fff !important;\n  /* fill: #fff!important; */\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/views/pages/trucks/TruckInfo.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/TruckInfo.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TruckInfo_vue_vue_type_template_id_77b205b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckInfo.vue?vue&type=template&id=77b205b2& */ "./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=template&id=77b205b2&");
/* harmony import */ var _TruckInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TruckInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TruckInfo_vue_vue_type_style_index_0_id_77b205b2_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss& */ "./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TruckInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TruckInfo_vue_vue_type_template_id_77b205b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TruckInfo_vue_vue_type_template_id_77b205b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/TruckInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_style_index_0_id_77b205b2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=style&index=0&id=77b205b2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_style_index_0_id_77b205b2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_style_index_0_id_77b205b2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_style_index_0_id_77b205b2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_style_index_0_id_77b205b2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=template&id=77b205b2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=template&id=77b205b2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_template_id_77b205b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckInfo.vue?vue&type=template&id=77b205b2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/TruckInfo.vue?vue&type=template&id=77b205b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_template_id_77b205b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckInfo_vue_vue_type_template_id_77b205b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/FilesTab.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/FilesTab.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilesTab_vue_vue_type_template_id_c2bd7e9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesTab.vue?vue&type=template&id=c2bd7e9e& */ "./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=template&id=c2bd7e9e&");
/* harmony import */ var _FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesTab_vue_vue_type_template_id_c2bd7e9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilesTab_vue_vue_type_template_id_c2bd7e9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/FilesTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=template&id=c2bd7e9e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=template&id=c2bd7e9e& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_template_id_c2bd7e9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesTab.vue?vue&type=template&id=c2bd7e9e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/FilesTab.vue?vue&type=template&id=c2bd7e9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_template_id_c2bd7e9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_template_id_c2bd7e9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/LogsTab.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/LogsTab.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogsTab_vue_vue_type_template_id_79a3fc23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogsTab.vue?vue&type=template&id=79a3fc23& */ "./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=template&id=79a3fc23&");
/* harmony import */ var _LogsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogsTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogsTab_vue_vue_type_template_id_79a3fc23___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LogsTab_vue_vue_type_template_id_79a3fc23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/LogsTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LogsTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=template&id=79a3fc23&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=template&id=79a3fc23& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_template_id_79a3fc23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LogsTab.vue?vue&type=template&id=79a3fc23& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/LogsTab.vue?vue&type=template&id=79a3fc23&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_template_id_79a3fc23___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_template_id_79a3fc23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TruckMaintenance_vue_vue_type_template_id_8eba9b72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckMaintenance.vue?vue&type=template&id=8eba9b72& */ "./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=template&id=8eba9b72&");
/* harmony import */ var _TruckMaintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TruckMaintenance.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TruckMaintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TruckMaintenance_vue_vue_type_template_id_8eba9b72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TruckMaintenance_vue_vue_type_template_id_8eba9b72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/TruckMaintenance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckMaintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckMaintenance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckMaintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=template&id=8eba9b72&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=template&id=8eba9b72& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckMaintenance_vue_vue_type_template_id_8eba9b72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckMaintenance.vue?vue&type=template&id=8eba9b72& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckMaintenance.vue?vue&type=template&id=8eba9b72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckMaintenance_vue_vue_type_template_id_8eba9b72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckMaintenance_vue_vue_type_template_id_8eba9b72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_57a53db8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57a53db8& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=template&id=57a53db8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57a53db8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_57a53db8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/TruckOverview/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=template&id=57a53db8&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=template&id=57a53db8& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57a53db8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=57a53db8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/index.vue?vue&type=template&id=57a53db8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57a53db8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57a53db8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TruckSummaryCard_vue_vue_type_template_id_229df98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckSummaryCard.vue?vue&type=template&id=229df98a&scoped=true& */ "./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=template&id=229df98a&scoped=true&");
/* harmony import */ var _TruckSummaryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TruckSummaryCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TruckSummaryCard_vue_vue_type_style_index_0_id_229df98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true& */ "./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TruckSummaryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TruckSummaryCard_vue_vue_type_template_id_229df98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TruckSummaryCard_vue_vue_type_template_id_229df98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "229df98a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckSummaryCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_style_index_0_id_229df98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=style&index=0&id=229df98a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_style_index_0_id_229df98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_style_index_0_id_229df98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_style_index_0_id_229df98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_style_index_0_id_229df98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=template&id=229df98a&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=template&id=229df98a&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_template_id_229df98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckSummaryCard.vue?vue&type=template&id=229df98a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckSummaryCard.vue?vue&type=template&id=229df98a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_template_id_229df98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckSummaryCard_vue_vue_type_template_id_229df98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TruckTypeIcons_vue_vue_type_template_id_13819fb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckTypeIcons.vue?vue&type=template&id=13819fb4&scoped=true& */ "./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=template&id=13819fb4&scoped=true&");
/* harmony import */ var _TruckTypeIcons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TruckTypeIcons.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TruckTypeIcons_vue_vue_type_style_index_0_id_13819fb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true& */ "./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TruckTypeIcons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TruckTypeIcons_vue_vue_type_template_id_13819fb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TruckTypeIcons_vue_vue_type_template_id_13819fb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "13819fb4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckTypeIcons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_style_index_0_id_13819fb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=style&index=0&id=13819fb4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_style_index_0_id_13819fb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_style_index_0_id_13819fb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_style_index_0_id_13819fb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_style_index_0_id_13819fb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=template&id=13819fb4&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=template&id=13819fb4&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_template_id_13819fb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckTypeIcons.vue?vue&type=template&id=13819fb4&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckTypeIcons.vue?vue&type=template&id=13819fb4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_template_id_13819fb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckTypeIcons_vue_vue_type_template_id_13819fb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=30.js.map