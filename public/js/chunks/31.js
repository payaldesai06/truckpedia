(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_TrailerSummaryCard_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TrailerSummaryCard.vue */ "./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue");
/* harmony import */ var _components_TrailerOverview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TrailerOverview */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue");
/* harmony import */ var _components_FilesTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/FilesTab */ "./resources/js/src/views/pages/trailers/components/FilesTab.vue");
/* harmony import */ var _components_LogsTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/LogsTab */ "./resources/js/src/views/pages/trailers/components/LogsTab.vue");
/* harmony import */ var _components_TrailerMaintenance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/TrailerMaintenance */ "./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Components






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TrailerDashboard",
  components: {
    TrailerSummaryCard: _components_TrailerSummaryCard_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TrailerOverview: _components_TrailerOverview__WEBPACK_IMPORTED_MODULE_7__["default"],
    FilesTab: _components_FilesTab__WEBPACK_IMPORTED_MODULE_8__["default"],
    TrailerLogs: _components_LogsTab__WEBPACK_IMPORTED_MODULE_9__["default"],
    TrailerMaintenance: _components_TrailerMaintenance__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: ['trailerDetails'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('auth', ['companyFeatureAccess']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])("tag", ["allTags"]), {
    trailerId: function trailerId() {
      return this.$route.params.id || null;
    },
    trailerInfoHeaderLabel: function trailerInfoHeaderLabel() {
      if (this.isUpdateMode) {
        var _ref = this.trailerData || {},
            trailerNumber = _ref.trailerNumber,
            year = _ref.year,
            make = _ref.make,
            vin = _ref.vin;

        return "#".concat(trailerNumber || "", " ").concat(year || "", " ").concat(make || "", " ").concat(vin || "");
      }

      return "Create a trailer";
    },
    isUpdateMode: function isUpdateMode() {
      return this.$route.name === "UpdateTrailer";
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
        component: "TrailerOverview"
      };
      var filesTab = {
        id: 2,
        label: "Files",
        component: "FilesTab"
      };
      var maintenanceTab = {
        id: 3,
        label: 'Maintenance',
        component: 'TrailerMaintenance'
      };
      var logsTab = {
        id: 4,
        label: 'Logs',
        component: 'TrailerLogs'
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

              if (this.trailerDetails) {
                this.trailerData = _objectSpread({}, this.trailerDetails);
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
              return this.getTrailerDetails();

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](8);
              this.redirectToTrailersList();

            case 16:
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t1 = _context["catch"](0);
              this.redirectToTrailersList();

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
      //   label: 'Overview',
      //   component: 'TrailerOverview'
      // },
      // {
      //   id: 2,
      //   label: 'Files',
      //   component: 'FilesTab'
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
      //   component: 'TrailerMaintenance'
      // },
      // {
      //   id: 6,
      //   label: 'Logs',
      //   component: 'TrailerLogs'
      // },
      // {
      //   id: 7,
      //   label: 'Accidents',
      //   component: ''
      // }
      // ],
      trailerData: null,
      driversList: [],
      dragStartFile: null
    };
  },
  methods: {
    changeTab: function changeTab(id) {
      if (!id) return;
      this.selectedTab = id;
    },
    getTrailerDetails: function () {
      var _getTrailerDetails = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var _this = this;

        var data, _ref3, tagsData, interestRate, selectedTags;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (this.trailerId) {
                  _context2.next = 3;
                  break;
                }

                throw new Error({
                  message: "Required id missing"
                });

              case 3:
                _context2.next = 5;
                return this.$store.dispatch("trailersV2/fetchTrailerInfo", this.trailerId);

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
                this.trailerData = _objectSpread({}, data, {
                  tags: selectedTags,
                  interestRate: interestRate || interestRate === 0 ? parseFloat(interestRate * 100).toFixed(4) : interestRate
                });
                return _context2.abrupt("return", data);

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13]]);
      }));

      return function getTrailerDetails() {
        return _getTrailerDetails.apply(this, arguments);
      };
    }(),
    submitForm: function () {
      var _submitForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        var validationState, overviewTabIndex, _ref4, trailerPayload, filesTabIndex, _ref5, filesPayload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.validateForms();

              case 2:
                validationState = _context3.sent;
                overviewTabIndex = this.tabIndex["Overview"];
                _ref4 = (this.$refs || {}).tabComponents[overviewTabIndex] || {}, trailerPayload = _ref4.trailerPayload;

                if (!(!validationState || !trailerPayload)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return");

              case 7:
                if (this.trailerId) {
                  // Update flow
                  this.updateTrailer(_objectSpread({}, trailerPayload, {
                    id: this.trailerId
                  }));
                } else {
                  // Create flow
                  filesTabIndex = this.tabIndex["Files"];
                  _ref5 = (this.$refs || {}).tabComponents[filesTabIndex] || {}, filesPayload = _ref5.filesPayload;

                  if (filesPayload && filesPayload.length) {
                    trailerPayload.files = filesPayload;
                  }

                  this.createTrailer(trailerPayload);
                } // Reset cache


                this.$store.commit('vehicleV2/setAllVehicles', []);

              case 9:
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
    createTrailer: function () {
      var _createTrailer = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5(trailerPayload) {
        var _ref7, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.$store.dispatch("trailersV2/createTrailer", trailerPayload);

              case 3:
                this.$vs.notify({
                  color: "success",
                  title: "Success",
                  text: "New trailer added"
                });
                this.redirectToTrailersList();
                _context5.next = 11;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                _ref7 = ((_context5.t0 || {}).response || {}).data || {}, message = _ref7.message;
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: message || "Trailer creation failed"
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      return function createTrailer(_x) {
        return _createTrailer.apply(this, arguments);
      };
    }(),
    updateTrailer: function () {
      var _updateTrailer = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee6(trailerPayload) {
        var _ref8, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.$store.dispatch("trailersV2/updateTrailer", trailerPayload);

              case 3:
                this.$vs.notify({
                  color: "success",
                  title: "Updated",
                  text: "Trailer data updated"
                });
                this.redirectToTrailersList();
                _context6.next = 11;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                _ref8 = ((_context6.t0 || {}).response || {}).data || {}, message = _ref8.message;
                this.$vs.notify({
                  color: "danger",
                  title: "Error",
                  text: message || "Trailer update failed"
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      return function updateTrailer(_x2) {
        return _updateTrailer.apply(this, arguments);
      };
    }(),
    redirectToTrailersList: function redirectToTrailersList() {
      this.$router.push("/trailers");
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
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
    trailerData: {
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
      return this.$route.name === "UpdateTrailer";
    },
    trailerId: function trailerId() {
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
        this.$store.dispatch('trailersV2/trailerFileChangeFolder', payload);
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
                return this.$store.dispatch("trailersV2/fetchFolders");

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
                return this.$store.dispatch("trailersV2/fetchFiles", this.trailerId);

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
                return this.$store.dispatch("trailersV2/updateFolder", {
                  folderId: id,
                  folderName: folderName
                });

              case 5:
                _context4.next = 9;
                break;

              case 7:
                _context4.next = 9;
                return this.$store.dispatch("trailersV2/createFolder", {
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
                return this.$store.dispatch("trailersV2/deleteFile", id);

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
                return this.$store.dispatch("trailersV2/uploadAttachment", {
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
                this.$vs.loading();
                _context7.prev = 1;

                if (!s3FileNameAndURL) {
                  _context7.next = 18;
                  break;
                }

                attachments = [];
                i = 0;

              case 5:
                if (!(i < s3FileNameAndURL.length)) {
                  _context7.next = 16;
                  break;
                }

                _s3FileNameAndURL$i = s3FileNameAndURL[i], fileName = _s3FileNameAndURL$i.fileName, url = _s3FileNameAndURL$i.url;
                file = files[i];
                _context7.next = 10;
                return this.$store.dispatch("uploadFileToS3ViaPresignedUrl", {
                  url: url,
                  file: file,
                  extension: fileName.split(".").pop()
                });

              case 10:
                _ref7 = _context7.sent;
                status = _ref7.status;
                if (status === 200) attachments.push({
                  fileName: fileName,
                  originalFileName: file.name
                });

              case 13:
                i++;
                _context7.next = 5;
                break;

              case 16:
                this.$vs.loading.close();
                return _context7.abrupt("return", attachments);

              case 18:
                _context7.next = 22;
                break;

              case 20:
                _context7.prev = 20;
                _context7.t0 = _context7["catch"](1);

              case 22:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 20]]);
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
                _context8.prev = 1;
                _context8.next = 4;
                return this.generateS3NameAndURL(files);

              case 4:
                s3FileNameAndURL = _context8.sent;
                _context8.next = 7;
                return this.uploadAttachmentsToS3(s3FileNameAndURL, files);

              case 7:
                _context8.t0 = _context8.sent;

                if (_context8.t0) {
                  _context8.next = 10;
                  break;
                }

                _context8.t0 = [];

              case 10:
                attachments = _context8.t0;

                if (this.isEditMode) {
                  _context8.next = 15;
                  break;
                }

                _payload = attachments.map(function (file) {
                  return _objectSpread({}, file, {
                    folderId: folderId
                  });
                });
                this.filesPayload = _toConsumableArray(this.filesPayload).concat(_toConsumableArray(_payload));
                return _context8.abrupt("return");

              case 15:
                payload = {
                  folderId: folderId,
                  trailerId: parseInt(this.trailerId),
                  files: attachments
                };
                _context8.next = 18;
                return this.$store.dispatch("trailersV2/uploadFiles", payload);

              case 18:
                _context8.next = 20;
                return this.fetchFiles();

              case 20:
                this.$vs.notify({
                  time: 2000,
                  color: "success",
                  title: "Success",
                  text: "Files uploaded successfully"
                });
                _context8.next = 26;
                break;

              case 23:
                _context8.prev = 23;
                _context8.t1 = _context8["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: "danger",
                  title: "Error",
                  text: this.getErrorMsg(_context8.t1)
                });

              case 26:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 23]]);
      }));

      return function uploadFiles(_x6) {
        return _uploadFiles.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
  name: "TrailerLogsList",
  props: {
    trailerData: {
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
    trailerId: function trailerId() {
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

                if (this.trailerId) {
                  _context.next = 5;
                  break;
                }

                throw new Error({
                  message: "Required id missing"
                });

              case 5:
                this.$vs.loading();
                _context.next = 8;
                return this.$store.dispatch("trailersV2/getLogsList", {
                  id: this.trailerId,
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
        dropEmptyTrailer: "success",
        dropLoadedTrailer: "success",
        hookEmptyTrailer: "success",
        hookLoadedTrailer: "success",
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
  name: "TrailerMaintenanceList",
  components: {
    MaintenanceForm: function MaintenanceForm() {
      return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! @/views/pages/maintenance-v2/MaintenanceForm.vue */ "./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue"));
    }
  },
  props: {
    trailerData: {
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
    trailerId: function trailerId() {
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

      return '';
    },
    trailerDataWithType: function trailerDataWithType() {
      return _objectSpread({}, this.trailerData, {
        type: 'trailer'
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

                if (this.trailerId) {
                  _context.next = 5;
                  break;
                }

                throw new Error({
                  message: "Required id missing"
                });

              case 5:
                this.$vs.loading();
                _context.next = 8;
                return this.$store.dispatch("trailersV2/getMaintenanceIssueList", {
                  id: this.trailerId,
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  name: "TrailerOverview",
  components: {
    TrailerInfoForm: function TrailerInfoForm() {
      return Promise.all(/*! import() */[__webpack_require__.e(20), __webpack_require__.e(218)]).then(__webpack_require__.bind(null, /*! ./InfoForm */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/InfoForm.vue"));
    },
    TrailerExpirationDateForm: function TrailerExpirationDateForm() {
      return __webpack_require__.e(/*! import() */ 216).then(__webpack_require__.bind(null, /*! ./ExpirationDateForm */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/ExpirationDateForm.vue"));
    },
    FinancialForm: function FinancialForm() {
      return __webpack_require__.e(/*! import() */ 217).then(__webpack_require__.bind(null, /*! ./FinancialForm */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/FinancialForm.vue"));
    },
    NotesSection: function NotesSection() {
      return __webpack_require__.e(/*! import() */ 219).then(__webpack_require__.bind(null, /*! ./NotesSection */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/NotesSection.vue"));
    },
    DriverAssignment: function DriverAssignment() {
      return __webpack_require__.e(/*! import() */ 176).then(__webpack_require__.bind(null, /*! ./DriverAssignment */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/DriverAssignment.vue"));
    }
  },
  props: {
    trailerData: {
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
      trailerInfo: null,
      expirationData: null,
      financeData: null,
      notes: null,
      driverAssignments: null
    };
  },
  computed: {
    trailerPayload: function trailerPayload() {
      var _ref = this.financeData || {},
          interestRate = _ref.interestRate;

      if (interestRate || interestRate === 0) {
        interestRate = interestRate / 100;
      } else {
        interestRate = null;
      }

      return _objectSpread({}, this.trailerInfo, this.expirationData, this.financeData, {
        notes: this.notes,
        driverAssignments: this.driverAssignments,
        tags: (this.trailerInfo.tags || []).map(function (tag) {
          return {
            id: tag.tag_id
          };
        }),
        interestRate: interestRate
      });
    },
    isEdit: function isEdit() {
      return !!this.trailerData;
    }
  },
  created: function created() {
    this.bindTrailerData();
  },
  watch: {
    trailerData: {
      handler: function handler(newVal) {
        this.bindTrailerData(newVal);
      },
      immediate: true
    }
  },
  methods: {
    bindTrailerData: function bindTrailerData(trailerData) {
      if (trailerData) {
        var status = trailerData.status,
            trailerNumber = trailerData.trailerNumber,
            trailerType = trailerData.trailerType,
            year = trailerData.year,
            make = trailerData.make,
            model = trailerData.model,
            vin = trailerData.vin,
            ride = trailerData.ride,
            width = trailerData.width,
            licensePlate = trailerData.licensePlate,
            licenseState = trailerData.licenseState,
            insuranceValue = trailerData.insuranceValue,
            monthlyInsuranceCost = trailerData.monthlyInsuranceCost,
            totalInsuranceCost = trailerData.totalInsuranceCost,
            brakeType = trailerData.brakeType,
            tireSize = trailerData.tireSize,
            roof = trailerData.roof,
            platedWalls = trailerData.platedWalls,
            vented = trailerData.vented,
            skirts = trailerData.skirts,
            rentedOut = trailerData.rentedOut,
            tags = trailerData.tags;
        this.trailerInfo = {
          status: status,
          trailerNumber: trailerNumber,
          trailerType: trailerType,
          year: year,
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
        var annualInspExpireDate = trailerData.annualInspExpireDate,
            insuranceExpireDate = trailerData.insuranceExpireDate,
            registrationExpireDate = trailerData.registrationExpireDate,
            annualPermitExpireDate = trailerData.annualPermitExpireDate;
        this.expirationData = {
          annualInspExpireDate: annualInspExpireDate,
          insuranceExpireDate: insuranceExpireDate,
          registrationExpireDate: registrationExpireDate,
          annualPermitExpireDate: annualPermitExpireDate
        };
        var ownershipType = trailerData.ownershipType,
            dateAcquired = trailerData.dateAcquired,
            acquireCost = trailerData.acquireCost,
            paymentStartDate = trailerData.paymentStartDate,
            paymentEndDate = trailerData.paymentEndDate,
            interestRate = trailerData.interestRate,
            lender = trailerData.lender,
            monthlyPayment = trailerData.monthlyPayment,
            contractNumber = trailerData.contractNumber,
            priceSold = trailerData.priceSold,
            dateSold = trailerData.dateSold;
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
        var notes = trailerData.notes;
        this.notes = notes;
        var driverAssignments = trailerData.driverAssignments;
        this.driverAssignments = driverAssignments;
      }
    },
    validate: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var _ref2, infoValidator, infoFormValidation, _ref3, driverAssignmentValidator, driverAssignmentValidation, _ref4, financeValidator, financeFormValidator;

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
                // const { validate : expirationValidator } = (this.$refs || {}).expirationForm || {};
                // let expirationFormValidation = true;
                // if (expirationValidator) {
                //   expirationFormValidation = await this.$refs.expirationForm.validate();
                // }
                // if(!expirationFormValidation) return false;
                _ref3 = (this.$refs || {}).driverAssignment || {}, driverAssignmentValidator = _ref3.validate;
                driverAssignmentValidation = true;

                if (!driverAssignmentValidator) {
                  _context.next = 14;
                  break;
                }

                _context.next = 13;
                return this.$refs.driverAssignment.validate();

              case 13:
                driverAssignmentValidation = _context.sent;

              case 14:
                if (driverAssignmentValidation) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", false);

              case 16:
                _ref4 = (this.$refs || {}).financeForm || {}, financeValidator = _ref4.validate;
                financeFormValidator = true;

                if (!financeValidator) {
                  _context.next = 22;
                  break;
                }

                _context.next = 21;
                return this.$refs.financeForm.validate();

              case 21:
                financeFormValidator = _context.sent;

              case 22:
                if (financeFormValidator) {
                  _context.next = 24;
                  break;
                }

                return _context.abrupt("return", false);

              case 24:
                return _context.abrupt("return", true);

              case 25:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TrailerSummaryCard",
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
    }
  },
  data: function data() {
    return {
      customIcons: {
        trailer: __webpack_require__(/*! @assets/images/custom/custom-trailer.svg */ "./resources/assets/images/custom/custom-trailer.svg")
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=template&id=22a6f032&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=template&id=22a6f032& ***!
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
    staticClass: "dashboard trailer-dashboard"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col flex-wrap flex justify-between w-full"
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("h3", {
    staticClass: "self-center"
  }, [_vm._v("Trailer")]), _vm._v(" "), _c("div", {
    staticClass: "flex ml-4"
  }, [_c("vs-input", {
    staticClass: "w-full mx-2",
    attrs: {
      disabled: "",
      value: _vm.trailerInfoHeaderLabel
    }
  })], 1)])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col flex-wrap flex justify-between w-full"
  }, [_c("div", {
    staticClass: "flex"
  }, _vm._l(_vm.chips, function (_ref) {
    var id = _ref.id,
        label = _ref.label,
        isActive = _ref.isActive;
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
        return _vm.$router.push("/trailers");
      }
    }
  }, [_vm._v("\n            Trailers\n          ")])], 1)])])], 1), _vm._v(" "), _c("div", [_c("TrailerSummaryCard", {
    attrs: {
      header: _vm.trailerInfoHeaderLabel,
      isEdit: _vm.isUpdateMode,
      enableSubmit: _vm.showSubmitButton
    },
    on: {
      submit: _vm.submitForm
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
        trailerData: _vm.trailerData,
        driversList: _vm.driversList
      },
      on: {
        cancel: _vm.redirectToTrailersList,
        submit: _vm.submitForm
      }
    })], 1);
  })], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=template&id=1e49ab1d&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=template&id=1e49ab1d& ***!
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=template&id=a162d792&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=template&id=a162d792& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
      textContent: _vm._s("Trailer Logs")
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
      field: "trailerNumber",
      header: "Trailer #"
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=template&id=2102379f&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=template&id=2102379f& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
      trailerData: _vm.trailerDataWithType,
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
      textContent: _vm._s("Trailer Maintenances")
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=template&id=5b839960&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=template&id=5b839960& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("TrailerInfoForm", {
    ref: "infoForm",
    model: {
      value: _vm.trailerInfo,
      callback: function callback($$v) {
        _vm.trailerInfo = $$v;
      },
      expression: "trailerInfo"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/3 mb-8 md:mb-0"
  }, [_c("TrailerExpirationDateForm", {
    ref: "expirationForm",
    model: {
      value: _vm.expirationData,
      callback: function callback($$v) {
        _vm.expirationData = $$v;
      },
      expression: "expirationData"
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
  }), _vm._v(" "), _c("DriverAssignment", {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=template&id=ea05023c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=template&id=ea05023c&scoped=true& ***!
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

  return _c("div", {
    staticClass: "mt-4 border-solid bg-primary-light border-radius-10 border-color-primary flex flex-row items-center justify-center p-4"
  }, [_c("div", {
    staticClass: "flex flex-row w-full items-center min-height-100 justify-between"
  }, [_c("section", {
    staticClass: "flex flex-end"
  }, [_c("div", {
    staticClass: "flex items-center justify-center bg-primary rounded-full height-70 width-70"
  }, [_c("img", {
    staticClass: "w-auto align-middle",
    attrs: {
      height: "40px",
      src: _vm.customIcons.trailer,
      alt: "trailer-icon"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "ml-4 flex items-center justify-center"
  }, [_c("div", [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v(_vm._s(_vm.header))])])])]), _vm._v(" "), _c("div", {
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trailer-dashboard {\n  /* Chrome, Safari, Edge, Opera */\n  /*!* Firefox *!*/\n}\n.trailer-dashboard input::-webkit-outer-spin-button,\n.trailer-dashboard input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n[dir] .trailer-dashboard input::-webkit-outer-spin-button, [dir] .trailer-dashboard input::-webkit-inner-spin-button {\n  margin: 0;\n}\n.trailer-dashboard input[type=number] {\n  -moz-appearance: textfield;\n}\n.trailer-dashboard input[type=number]::-webkit-inner-spin-button,\n.trailer-dashboard input[type=number]::-webkit-outer-spin-button {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".min-height-100[data-v-ea05023c] {\n  min-height: 100px;\n}\n[dir] .bg-primary-light[data-v-ea05023c] {\n  background-color: #f1f4ff;\n}\n[dir] .border-radius-10[data-v-ea05023c] {\n  border-radius: 10px !important;\n}\n[dir] .border-color-primary[data-v-ea05023c] {\n  border-color: #aca7f7 !important;\n}\n[dir] .bg-primary[data-v-ea05023c] {\n  background-color: #aca7f7;\n}\n.height-70[data-v-ea05023c] {\n  height: 70px;\n}\n.width-70[data-v-ea05023c] {\n  width: 70px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true&");

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

/***/ "./resources/assets/images/custom/custom-trailer.svg":
/*!***********************************************************!*\
  !*** ./resources/assets/images/custom/custom-trailer.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/custom-trailer.svg?b80301cc6a4b85b9404e87a1eec9b26e";

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/TrailerInfo.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/TrailerInfo.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrailerInfo_vue_vue_type_template_id_22a6f032___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrailerInfo.vue?vue&type=template&id=22a6f032& */ "./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=template&id=22a6f032&");
/* harmony import */ var _TrailerInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrailerInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TrailerInfo_vue_vue_type_style_index_0_id_22a6f032_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss& */ "./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TrailerInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrailerInfo_vue_vue_type_template_id_22a6f032___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrailerInfo_vue_vue_type_template_id_22a6f032___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trailers/TrailerInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_style_index_0_id_22a6f032_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=style&index=0&id=22a6f032&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_style_index_0_id_22a6f032_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_style_index_0_id_22a6f032_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_style_index_0_id_22a6f032_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_style_index_0_id_22a6f032_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=template&id=22a6f032&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=template&id=22a6f032& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_template_id_22a6f032___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerInfo.vue?vue&type=template&id=22a6f032& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/TrailerInfo.vue?vue&type=template&id=22a6f032&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_template_id_22a6f032___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerInfo_vue_vue_type_template_id_22a6f032___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/FilesTab.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/FilesTab.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilesTab_vue_vue_type_template_id_1e49ab1d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesTab.vue?vue&type=template&id=1e49ab1d& */ "./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=template&id=1e49ab1d&");
/* harmony import */ var _FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesTab_vue_vue_type_template_id_1e49ab1d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilesTab_vue_vue_type_template_id_1e49ab1d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trailers/components/FilesTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=template&id=1e49ab1d&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=template&id=1e49ab1d& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_template_id_1e49ab1d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesTab.vue?vue&type=template&id=1e49ab1d& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/FilesTab.vue?vue&type=template&id=1e49ab1d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_template_id_1e49ab1d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesTab_vue_vue_type_template_id_1e49ab1d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/LogsTab.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/LogsTab.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogsTab_vue_vue_type_template_id_a162d792___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogsTab.vue?vue&type=template&id=a162d792& */ "./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=template&id=a162d792&");
/* harmony import */ var _LogsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogsTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogsTab_vue_vue_type_template_id_a162d792___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LogsTab_vue_vue_type_template_id_a162d792___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trailers/components/LogsTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LogsTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=template&id=a162d792&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=template&id=a162d792& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_template_id_a162d792___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LogsTab.vue?vue&type=template&id=a162d792& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/LogsTab.vue?vue&type=template&id=a162d792&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_template_id_a162d792___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_template_id_a162d792___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrailerMaintenance_vue_vue_type_template_id_2102379f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrailerMaintenance.vue?vue&type=template&id=2102379f& */ "./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=template&id=2102379f&");
/* harmony import */ var _TrailerMaintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrailerMaintenance.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrailerMaintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrailerMaintenance_vue_vue_type_template_id_2102379f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrailerMaintenance_vue_vue_type_template_id_2102379f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerMaintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerMaintenance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerMaintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=template&id=2102379f&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=template&id=2102379f& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerMaintenance_vue_vue_type_template_id_2102379f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerMaintenance.vue?vue&type=template&id=2102379f& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerMaintenance.vue?vue&type=template&id=2102379f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerMaintenance_vue_vue_type_template_id_2102379f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerMaintenance_vue_vue_type_template_id_2102379f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5b839960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5b839960& */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=template&id=5b839960&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5b839960___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5b839960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=template&id=5b839960&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=template&id=5b839960& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b839960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5b839960& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerOverview/index.vue?vue&type=template&id=5b839960&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b839960___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5b839960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrailerSummaryCard_vue_vue_type_template_id_ea05023c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrailerSummaryCard.vue?vue&type=template&id=ea05023c&scoped=true& */ "./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=template&id=ea05023c&scoped=true&");
/* harmony import */ var _TrailerSummaryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrailerSummaryCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TrailerSummaryCard_vue_vue_type_style_index_0_id_ea05023c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true& */ "./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TrailerSummaryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrailerSummaryCard_vue_vue_type_template_id_ea05023c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrailerSummaryCard_vue_vue_type_template_id_ea05023c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ea05023c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerSummaryCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_style_index_0_id_ea05023c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=style&index=0&id=ea05023c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_style_index_0_id_ea05023c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_style_index_0_id_ea05023c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_style_index_0_id_ea05023c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_style_index_0_id_ea05023c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=template&id=ea05023c&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=template&id=ea05023c&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_template_id_ea05023c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrailerSummaryCard.vue?vue&type=template&id=ea05023c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trailers/components/TrailerSummaryCard.vue?vue&type=template&id=ea05023c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_template_id_ea05023c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrailerSummaryCard_vue_vue_type_template_id_ea05023c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=31.js.map