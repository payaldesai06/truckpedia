(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/@babel/runtime/core-js/map.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/map.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "./node_modules/core-js/library/fn/map.js");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_TruckLoadsList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TruckLoadsList.vue */ "./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue");
/* harmony import */ var vue2_google_maps_dist_components_cluster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-google-maps/dist/components/cluster */ "./node_modules/vue2-google-maps/dist/components/cluster.js");
/* harmony import */ var vue2_google_maps_dist_components_cluster__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps_dist_components_cluster__WEBPACK_IMPORTED_MODULE_5__);




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TruckLoadsList: _components_TruckLoadsList_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    GmapCluster: vue2_google_maps_dist_components_cluster__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  data: function data() {
    return {
      datConnectionStatus: "",
      truckstopConnectionStatus: "",
      locateTrucks: [],
      drivers: [],
      popup: false,
      trucks: [],
      viewOption: [{
        name: "View all",
        icon: "view_week",
        active: true
      }, {
        name: "Map",
        icon: "location_on",
        active: false
      }, {
        name: "List",
        icon: "clear_all",
        active: false
      }],
      shareAuthId: "",
      center: {
        lat: 34.052235,
        lng: -118.243683
      },
      selected_driver: null,
      infoWindowDetails: {
        latitude: 34.052235,
        longitude: -118.243683
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        maxWidth: 200,
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  computed: {
    google: vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__["gmapApi"]
  },
  created: function created() {
    if (this.$route.name === "share-loads-matching") {
      this.shareAuthId = this.$route.params.id; // this.getShareLocateTrucks();
    } else {
      // Connection status should only be called when user is loged in.
      this.getDatConnectionStatus();
      this.getTruckStopConnectionStatus();
      this.getLocateTrucks();
    }
  },
  mounted: function mounted() {
    // use for remove GmapCluster add event warning
    var _originalConsoleWarn = console.warn;

    console.warn = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var filteredArgs = args.filter(function (m) {
        return !_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(m).includes("google.maps.event.addDomListener() is deprecated");
      });

      if (filteredArgs.length > 0) {
        _originalConsoleWarn(filteredArgs);
      }
    };
  },
  methods: {
    getDatConnectionStatus: function () {
      var _getDatConnectionStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$store.dispatch("dat/connectionStatus").then(function (data) {
                  _this.datConnectionStatus = data.message;
                  localStorage.setItem("datConnectionStatus", data.message);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getDatConnectionStatus() {
        return _getDatConnectionStatus.apply(this, arguments);
      };
    }(),
    getTruckStopConnectionStatus: function () {
      var _getTruckStopConnectionStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$store.dispatch("truckstop/connectionStatus").then(function (data) {
                  _this2.truckstopConnectionStatus = data.message;
                  localStorage.setItem("truckstopConnectionStatus", data.message);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getTruckStopConnectionStatus() {
        return _getTruckStopConnectionStatus.apply(this, arguments);
      };
    }(),
    changeView: function changeView(name) {
      var _this3 = this;

      var getIndex = this.viewOption.findIndex(function (ele) {
        return ele.name === name;
      });
      this.viewOption[getIndex].active = true;
      this.viewOption.map(function (ele, index) {
        if (getIndex != index) {
          _this3.viewOption[index].active = false;
        }
      });
    },
    shareClick: function () {
      var _shareClick = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var data, url, that;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.$store.dispatch("loads-matching/getShareLink");

              case 3:
                data = _context3.sent;
                url = document.location.origin + "/share/loads-matching/" + data.payload.url.split("=")[1];
                that = this;
                this.$copyText(url).then(function (e) {
                  that.$vs.notify({
                    title: "Success",
                    text: "Copied",
                    color: "success"
                  });
                }, function (e) {
                  that.$vs.notify({
                    title: "Danger",
                    text: "Can not copy",
                    color: "danger"
                  });
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                this.$vs.notify({
                  title: "Danger",
                  text: "Can not copy",
                  color: "danger"
                });

              case 12:
                _context3.prev = 12;
                this.$vs.loading.close();
                return _context3.finish(12);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9, 12, 15]]);
      }));

      return function shareClick() {
        return _shareClick.apply(this, arguments);
      };
    }(),
    getLocateTrucks: function () {
      var _getLocateTrucks = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var _ref, payload, i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$vs.loading();
                _context4.prev = 1;
                _context4.next = 4;
                return this.$store.dispatch("loads-matching/getAllLocateTruck");

              case 4:
                _ref = _context4.sent;
                payload = _ref.payload;

                for (i = 0; i < payload.trucks.length; i++) {
                  if (payload.trucks[i].latitude && payload.trucks[i].longitude) {
                    this.trucks.push(payload.trucks[i]);
                  }
                }

                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);
                console.log(_context4.t0);

              case 12:
                _context4.prev = 12;
                this.$vs.loading.close();
                return _context4.finish(12);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 9, 12, 15]]);
      }));

      return function getLocateTrucks() {
        return _getLocateTrucks.apply(this, arguments);
      };
    }(),
    getShareLocateTrucks: function () {
      var _getShareLocateTrucks = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        var params, _ref2, payload, i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$vs.loading();
                _context5.prev = 1;
                params = {
                  company_id: this.shareAuthId
                };
                _context5.next = 5;
                return this.$store.dispatch("loads-matching/getShareAllLocateTruck", params);

              case 5:
                _ref2 = _context5.sent;
                payload = _ref2.payload;

                for (i = 0; i < payload.trucks.length; ++i) {
                  if (payload.trucks[i].latitude) {
                    this.trucks.push(payload.trucks[i]);
                  }
                }

                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](1);
                console.log(_context5.t0);

              case 13:
                _context5.prev = 13;
                this.$vs.loading.close();
                return _context5.finish(13);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 10, 13, 16]]);
      }));

      return function getShareLocateTrucks() {
        return _getShareLocateTrucks.apply(this, arguments);
      };
    }(),
    toggleInfoWindow: function toggleInfoWindow(truck) {
      this.infoWindowDetails = truck;
      this.infoWinOpen = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/set */ "./node_modules/@babel/runtime/core-js/set.js");
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReloadInfo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReloadInfo.vue */ "./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["multiTabSearchResults"],
  components: {
    ReloadInfo: _ReloadInfo_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      empty: true,
      quickBid: "",
      showReload: false,
      forceUpdateTimer: setInterval(function () {
        _this.$forceUpdate();
      }, 60000),
      currentTab: 0,
      searchData: [],
      tabSet: new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(this.multiTabSearchResults.map(function (tab) {
        return tab.searchId;
      }))
    };
  },
  watch: {
    multiTabSearchResults: {
      handler: function handler(newVal, oldVal) {
        // here having access to the new and old value
        // do stuff
        this.updatetabSet();
      },
      deep: true
    }
  },
  created: function created() {},
  methods: {
    updatetabSet: function updatetabSet() {
      var _this2 = this;

      this.multiTabSearchResults.forEach(function (tab, index) {
        if (!_this2.tabSet.has(tab.searchId)) {
          _this2.tabSet.add(tab.searchId);

          _this2.currentTab = index;
        }
      }); // To handle close tab case.

      var maxIndex = Math.max(0, this.multiTabSearchResults.length - 1); // To handle Tab scroll to left

      if (maxIndex > 0) {
        var width = this.$refs.tabList.clientWidth;
        this.$refs.tabList.scroll({
          left: width,
          behavior: "smooth"
        });
      }

      if (this.currentTab > maxIndex) {
        this.currentTab = maxIndex;
      }
    },
    closeTab: function closeTab(index, searchId) {
      this.$emit("closeOneTab", searchId);
      this.tabSet.delete(searchId);
    },
    formatPhoneNumber: function formatPhoneNumber(phoneNumberString) {
      var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

      if (match) {
        return match[1] + "-" + match[2] + "-" + match[3];
      }

      return phoneNumberString;
    },
    getTimeDiff: function getTimeDiff(item) {
      if (item.hideCreatedWhen) {
        return "";
      }

      var diff = Math.abs(new Date() - new Date(item.createdWhen));
      var diffInMinute = Math.floor(diff / 1000 / 60);

      if (diffInMinute <= 60) {
        return diffInMinute + "m";
      }

      var diffInHours = Math.floor(diffInMinute / 60);

      if (diffInHours <= 24) {
        return diffInHours + "h";
      } else {
        return Math.floor(diffInHours / 24) + "d";
      }
    },
    showDeadhead: function showDeadhead(label) {
      if (label) {
        return "(".concat(label, " mi)");
      }

      return "";
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.forceUpdateTimer);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronLeftIcon"]
  },
  data: function data() {
    return {
      loadTrackingPolicy1: true,
      loadTrackingPolicy2: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");
/* harmony import */ var _mixins_setPlaceMixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/setPlaceMixin.js */ "./resources/js/src/mixins/setPlaceMixin.js");



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      chooseOriginDropdown: false,
      chooseDestinationDropdown: false,
      originAddress: "",
      destinationAddress: "",
      googleMapAutoCompleteOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].googleMapAutoCompleteOptions,
      selectedStartDate: "",
      selectedEndDate: "",
      origin: [],
      destination: [],
      dhOrigin: {
        text: 50,
        value: 50
      },
      dhDestination: {
        text: 50,
        value: 50
      },
      length: null,
      weight: null,
      dhOption: [{
        text: "50",
        value: 50
      }, {
        text: "100",
        value: 100
      }, {
        text: "150",
        value: 150
      }, {
        text: "200",
        value: 200
      }, {
        text: "300",
        value: 300
      }, {
        text: "450",
        value: 450
      }],
      capacity: {
        text: "BOTH",
        value: "BOTH"
      },
      fullPartialOption: [{
        text: "FULL",
        value: "FULL"
      }, {
        text: "PARTIAL",
        value: "PARTIAL"
      }, {
        text: "BOTH",
        value: "BOTH"
      }],
      manualSearchTruckTypes: [],
      manualSearchTruckTypeOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadMatchingManualSearchTypeOptions,
      stateList: _config_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].state_list,
      selectedOriginStateList: [],
      selectedDestinationStateList: []
    };
  },
  mixins: [_mixins_setPlaceMixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  created: function created() {},
  watch: {
    selectedOriginStateList: function selectedOriginStateList() {
      if (this.selectedOriginStateList.length) {
        var selectedOriginStateListArray = this.selectedOriginStateList.map(function (item) {
          return item.text;
        });
        this.originAddress = "";
        this.origin = {
          states: _toConsumableArray(selectedOriginStateListArray)
        };
      }
    },
    selectedDestinationStateList: function selectedDestinationStateList() {
      if (this.selectedDestinationStateList.length) {
        var selectedDestinationStateListArray = this.selectedDestinationStateList.map(function (item) {
          return item.text;
        });
        this.destinationAddress = "";
        this.destination = {
          states: _toConsumableArray(selectedDestinationStateListArray)
        };
      }
    }
  },
  methods: {
    /*
     * Google Map Autocomplete
     */
    setOriginPlace: function setOriginPlace(place) {
      // Extract address components from the provided place
      var _this$setPlace = this.setPlace(place),
          city = _this$setPlace.city,
          state = _this$setPlace.state,
          latitude = _this$setPlace.latitude,
          longitude = _this$setPlace.longitude;

      if (city && state && latitude && longitude) {
        this.selectedOriginStateList = [];
        this.origin = {
          city: city,
          state: state,
          latitude: latitude,
          longitude: longitude
        };
      }

      this.originAddress = city + ", " + state;
    },
    setDestinationPlace: function setDestinationPlace(place) {
      // Extract address components from the provided place
      var _this$setPlace2 = this.setPlace(place),
          city = _this$setPlace2.city,
          state = _this$setPlace2.state,
          latitude = _this$setPlace2.latitude,
          longitude = _this$setPlace2.longitude;

      if (city && state && latitude && latitude) {
        this.selectedDestinationStateList = [];
        this.destination = {
          city: city,
          state: state,
          latitude: latitude,
          longitude: longitude
        };
      }

      this.destinationAddress = city + ", " + state;
    },
    toggleOriginStateDropdown: function toggleOriginStateDropdown() {
      this.chooseOriginDropdown = !this.chooseOriginDropdown;
    },
    toggleDestinationStateDropdown: function toggleDestinationStateDropdown() {
      this.chooseDestinationDropdown = !this.chooseDestinationDropdown;
    },
    loadMatchingSearch: function loadMatchingSearch() {
      if ((!this.origin.city || !this.origin.state || !this.origin.latitude || !this.origin.longitude) && (!this.origin.states || this.origin.states.length == 0)) {
        this.$vs.notify({
          title: "Error",
          text: "Invalid Origin. Please input city or select states again.",
          color: "danger"
        });
        return;
      }

      if ((!this.destination.city || !this.destination.state || !this.destination.latitude || !this.destination.longitude) && (!this.destination.states || this.destination.states.length == 0)) {
        this.$vs.notify({
          title: "Error",
          text: "Invalid Destination. Please input city or select states again.",
          color: "danger"
        });
        return;
      }

      if (this.origin.city) {
        this.origin.deadhead = this.dhOrigin.value;
      }

      if (this.destination.city) {
        this.destination.deadhead = this.dhDestination.value;
      }

      if (!this.selectedStartDate) {
        this.$vs.notify({
          title: "Error",
          text: "Please select Start Date.",
          color: "danger"
        });
        return;
      }

      if (this.selectedEndDate && this.selectedEndDate < this.selectedStartDate) {
        this.$vs.notify({
          title: "Error",
          text: "End Date cannot be ealier than Start Date.",
          color: "danger"
        });
        return;
      }

      var truckType = [];
      this.manualSearchTruckTypes.map(function (val) {
        truckType.push(val.value);
      });
      var payload = {
        origin: this.origin,
        destination: this.destination,
        manualSearchTypes: truckType,
        startDate: this.selectedStartDate,
        endDate: this.selectedEndDate ? this.selectedEndDate : null,
        capacity: this.capacity.value,
        length: this.length ? this.length : null,
        weight: this.weight ? this.weight : null
      };
      var searchId = "searchpopup-" + Math.random().toString(36).slice(2, 7) + "-" + Date.now();
      this.$emit("performLoadSearch", payload, searchId);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");
/* harmony import */ var _mixins_setPlaceMixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/mixins/setPlaceMixin.js */ "./resources/js/src/mixins/setPlaceMixin.js");





function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"],
  data: function data() {
    return {
      address: "",
      DeadheadD: null,
      DeadheadO: null,
      destination: "",
      chooseDropdown: false,
      selectedStateList: [],
      reloadCity: "",
      reloadState: "",
      reloadCityLat: null,
      reloadCityLng: null,
      targetPrice: null,
      maxWeight: null,
      debounce: null,
      shareAuthId: "",
      reloadDate: "",
      // flat_pikr_config: {
      //   defaultDate: this.reloadDate
      // },
      stateList: _config_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].state_list,
      // google map autocomplete options
      googleMapAutoCompleteOptions: _config_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].googleMapAutoCompleteOptions,
      deadheadOptions: [{
        text: "50",
        value: 50
      }, {
        text: "100",
        value: 100
      }, {
        text: "150",
        value: 150
      }, {
        text: "200",
        value: 200
      }, {
        text: "300",
        value: 300
      }, {
        text: "450",
        value: 450
      }],
      dropdown: false
    };
  },
  mixins: [_mixins_setPlaceMixin_js__WEBPACK_IMPORTED_MODULE_5__["default"]],
  created: function created() {
    this.setAllValues();

    if (this.$route.name === "share-loads-matching") {
      this.shareAuthId = this.$route.params.id;
    }
  },
  watch: {
    data: function data() {
      this.setAllValues();
    }
  },
  methods: {
    toggleDropdown: function toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    changeDestination: function changeDestination() {
      this.chooseDropdown = !this.chooseDropdown;
    },
    // Reload Date method
    handleChangeReloadDate: function handleChangeReloadDate() {
      var _this = this;

      if (this.shareAuthId) return;
      var payload = {
        truck_id: this.data.truck_id,
        reload_date: this.reloadDate
      };
      this.$store.dispatch("loads-matching/updateTruckReloadDate", payload).then(function (data) {
        if (data.result) {
          _this.$vs.notify({
            title: "Reload date updated",
            text: "Truck reload date updated sucessfully",
            color: "success"
          });
        } else {
          _this.$vs.notify({
            title: "Invalid date",
            text: "Please select a valid date",
            color: "danger"
          });
        }
      });
    },

    /*
     * Google Map Autocomplete
     */
    getChangedPlace: function getChangedPlace(place) {
      // Extract address components from the provided place
      var _this$setPlace = this.setPlace(place),
          city = _this$setPlace.city,
          state = _this$setPlace.state,
          latitude = _this$setPlace.latitude,
          longitude = _this$setPlace.longitude;

      if (city && state) {
        this.updateDestinationWithStateAndCity(city, state, latitude, longitude);
      }
    },
    // Set all value method
    setAllValues: function setAllValues() {
      var _this2 = this;

      this.DeadheadD = {
        text: this.data.dh_destination,
        value: this.data.dh_destination
      };
      this.DeadheadO = {
        text: this.data.dh_origin,
        value: this.data.dh_origin
      };
      this.targetPrice = this.data.matching_target_price;
      this.maxWeight = this.data.matching_max_weight;
      this.reloadDate = this.data.reload_date;

      if (this.data.reload_states.length > 0) {
        this.chooseDropdown = true;
        this.selectedStateList = [];
        this.data.reload_states.map(function (val) {
          _this2.selectedStateList.push(val.reload_state);
        });
      } else {
        this.chooseDropdown = false;

        if (this.data.reload_city && this.data.reload_state) {
          this.address = this.data.reload_city.concat(", ", this.data.reload_state);
          this.reloadCity = this.data.reload_city;
          this.reloadState = this.data.reload_state;
          this.reloadCityLat = this.data.reload_city_latitude;
          this.reloadCityLng = this.data.reload_city_longitude;
        } else {
          this.address = "";
          this.reloadCity = "";
          this.reloadState = "";
          this.reloadCityLat = null;
          this.reloadCityLng = null;
        }
      }
    },
    updateReloadDestinationStatesList: function updateReloadDestinationStatesList() {
      var payload = {
        truck_id: this.data.truck_id,
        reload_states: this.selectedStateList
      };
      this.address = "";
      this.reloadCity = "";
      this.reloadState = "";
      this.reloadCityLat = null;
      this.reloadCityLng = null;
      this.updateDestinationApi(payload);
    },
    updateDestinationWithStateAndCity: function updateDestinationWithStateAndCity(city, state, lat, lng) {
      var payload = {
        truck_id: this.data.truck_id,
        reload_city: city,
        reload_state: state,
        reload_city_latitude: lat,
        reload_city_longitude: lng
      };
      this.address = city + ", " + state;
      this.reloadCity = city;
      this.reloadState = state;
      this.reloadCityLat = lat;
      this.reloadCityLng = lng;
      this.selectedStateList = [];
      this.updateDestinationApi(payload);
    },
    updateDestinationApi: function () {
      var _updateDestinationApi = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(payload) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clearTimeout(this.debounce);
                this.debounce = setTimeout(function () {
                  _this3.$vs.loading();

                  _this3.$store.dispatch("loads-matching/updateTruckReloadDestination", payload).then(function () {
                    _this3.$vs.notify({
                      color: "primary",
                      title: "Destination updated",
                      text: "Destination updated successfully."
                    });
                  }).catch(function (error) {
                    _this3.$vs.notify({
                      title: "Error",
                      text: error.response.data.message,
                      color: "danger"
                    });
                  }).finally(function () {
                    _this3.$vs.loading.close();
                  });
                }, 1000);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function updateDestinationApi(_x) {
        return _updateDestinationApi.apply(this, arguments);
      };
    }(),
    updateTruckDeadheadOrigin: function () {
      var _updateTruckDeadheadOrigin = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(event) {
        var _this4 = this;

        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                payload = {
                  truck_id: this.data.truck_id,
                  dh_origin: event.value
                };
                this.$vs.loading();
                this.$store.dispatch("loads-matching/updateTruckDeadheadOrigin", payload).then(function () {
                  _this4.$vs.notify({
                    color: "primary",
                    title: "Deadhead origin updated",
                    text: "Truck deadhead origin updated successfully."
                  });
                }).catch(function (error) {
                  _this4.$vs.notify({
                    title: "Error",
                    text: error.response.data.message,
                    color: "danger"
                  });
                }).finally(function () {
                  _this4.$vs.loading.close();
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function updateTruckDeadheadOrigin(_x2) {
        return _updateTruckDeadheadOrigin.apply(this, arguments);
      };
    }(),
    updateTruckDeadheadDestination: function () {
      var _updateTruckDeadheadDestination = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(event) {
        var _this5 = this;

        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                payload = {
                  truck_id: this.data.truck_id,
                  dh_destination: event.value
                };
                this.$vs.loading();
                this.$store.dispatch("loads-matching/updateTruckDeadheadDestination", payload).then(function () {
                  _this5.$vs.notify({
                    color: "primary",
                    title: "Deadhead destination updated",
                    text: "Truck deadhead destination updated successfully."
                  });
                }).catch(function (error) {
                  _this5.$vs.notify({
                    title: "Error",
                    text: error.response.data.message,
                    color: "danger"
                  });
                }).finally(function () {
                  _this5.$vs.loading.close();
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function updateTruckDeadheadDestination(_x3) {
        return _updateTruckDeadheadDestination.apply(this, arguments);
      };
    }(),
    updateTruckTargetPrice: function () {
      var _updateTruckTargetPrice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {
        var _this6 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                clearTimeout(this.debounce);
                this.debounce = setTimeout(function () {
                  var payload = {
                    truck_id: _this6.data.truck_id,
                    matching_target_price: _this6.targetPrice
                  };

                  _this6.$vs.loading();

                  _this6.$store.dispatch("loads-matching/updateTruckTargetPrice", payload).then(function () {
                    _this6.$vs.notify({
                      color: "primary",
                      title: "Rate updated",
                      text: "Expected Rate updated successfully."
                    });
                  }).catch(function (error) {
                    _this6.$vs.notify({
                      title: "Error",
                      text: error.response.data.message,
                      color: "danger"
                    });
                  }).finally(function () {
                    _this6.$vs.loading.close();
                  });
                }, 1000);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function updateTruckTargetPrice() {
        return _updateTruckTargetPrice.apply(this, arguments);
      };
    }(),
    updateTruckMaxWeight: function () {
      var _updateTruckMaxWeight = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5() {
        var _this7 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                clearTimeout(this.debounce);
                this.debounce = setTimeout(function () {
                  var payload = {
                    truck_id: _this7.data.truck_id,
                    matching_max_weight: _this7.maxWeight
                  };

                  _this7.$vs.loading();

                  _this7.$store.dispatch("loads-matching/updateTruckMaxWeight", payload).then(function () {
                    _this7.$vs.notify({
                      color: "primary",
                      title: "Max Weight updated",
                      text: "Truck max weight updated successfully."
                    });
                  }).catch(function (error) {
                    _this7.$vs.notify({
                      title: "Error",
                      text: error.response.data.message,
                      color: "danger"
                    });
                  }).finally(function () {
                    _this7.$vs.loading.close();
                  });
                }, 1000);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function updateTruckMaxWeight() {
        return _updateTruckMaxWeight.apply(this, arguments);
      };
    }(),
    searchLoads: function () {
      var _searchLoads = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6() {
        var origin, destination, payload, searchId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this.shareAuthId) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                if (!(this.data.destination.city && this.data.destination.state && this.data.destination.latitude && this.data.destination.longitude)) {
                  _context6.next = 6;
                  break;
                }

                origin = {
                  city: this.data.destination.city,
                  state: this.data.destination.state,
                  latitude: this.data.destination.latitude,
                  longitude: this.data.destination.longitude,
                  deadhead: this.DeadheadO.value
                };
                _context6.next = 8;
                break;

              case 6:
                this.$vs.notify({
                  title: "Error",
                  text: "Invalid or empty truck load receiver location.",
                  color: "danger"
                });
                return _context6.abrupt("return");

              case 8:
                if (!(this.selectedStateList.length > 0)) {
                  _context6.next = 12;
                  break;
                }

                destination = {
                  states: _toConsumableArray(this.selectedStateList)
                };
                _context6.next = 16;
                break;

              case 12:
                destination = {
                  city: this.reloadCity,
                  state: this.reloadState,
                  latitude: this.reloadCityLat,
                  longitude: this.reloadCityLng,
                  deadhead: this.DeadheadD.value
                };

                if (!(!destination.city || !destination.state || !destination.latitude || !destination.longitude)) {
                  _context6.next = 16;
                  break;
                }

                this.$vs.notify({
                  title: "Error",
                  text: "Invalid reload destination. Please input city or select states again.",
                  color: "danger"
                });
                return _context6.abrupt("return");

              case 16:
                payload = {
                  origin: origin,
                  destination: destination,
                  startDate: this.reloadDate,
                  endDate: this.reloadDate,
                  ezpapelEquipmentType: this.data.truck_type,
                  weight: this.maxWeight > 0 ? this.maxWeight : null
                };
                searchId = "truckcard-" + Math.random().toString(36).slice(2, 7) + "-" + Date.now();
                this.$emit("performLoadSearch", payload, searchId);

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function searchLoads() {
        return _searchLoads.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/set */ "./node_modules/@babel/runtime/core-js/set.js");
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/map */ "./node_modules/@babel/runtime/core-js/map.js");
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _LoadCard_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoadCard.vue */ "./resources/js/src/views/pages/loads-matching/components/LoadCard.vue");
/* harmony import */ var _SearchPopup_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchPopup.vue */ "./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue");
/* harmony import */ var _TruckCard_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TruckCard.vue */ "./resources/js/src/views/pages/loads-matching/components/TruckCard.vue");








function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__["ChevronLeftIcon"],
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__["ChevronRightIcon"],
    RefreshCcwIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__["RefreshCcwIcon"],
    LoadCard: _LoadCard_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    SearchPopup: _SearchPopup_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    TruckCard: _TruckCard_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      autoRefreshInSeconds: 300000,
      windowWidth: window.innerWidth,
      multiTabSearchResults: [],
      tabTimers: new _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a(),
      // Flat Pikr Config
      selectedDateRange: "",
      skip_days: 6,
      shareAuthId: "",
      searchPopup: false,
      flat_pikr_config: {
        mode: "range",
        minDate: "",
        maxDate: "",
        defaultDate: [new Date(), new Date().setDate(new Date().getDate() + this.skip_days)]
      },
      schedule: []
    };
  },
  created: function created() {
    var today = new Date().toISOString().split("T", 1)[0];
    var after7Days = new Date(new Date(today).setDate(new Date(today).getDate() + this.skip_days)).toISOString().split("T", 1)[0];
    this.selectedDateRange = "".concat(today, " to ").concat(after7Days);

    if (this.$route.name === "share-loads-matching") {
      this.shareAuthId = this.$route.params.id;
      this.getShareAllSchedule();
    } else {
      this.getAllSchedule();
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("resize", function () {
      _this.windowWidth = window.innerWidth;
    });
  },
  watch: {},
  methods: {
    openSearchPopup: function openSearchPopup() {
      this.searchPopup = true;
    },
    closeOneTab: function closeOneTab(searchId) {
      var index = this.multiTabSearchResults.findIndex(function (e) {
        return e.searchId == searchId;
      });

      if (index >= 0) {
        clearInterval(this.tabTimers.get(searchId));
        this.tabTimers.delete(searchId);
        this.multiTabSearchResults.splice(index, 1);
      }
    },
    // From SearchPopup.vue/TruckCard.vue.
    performLoadSearch: function performLoadSearch(searchPayload, searchId) {
      var _this2 = this;

      this.searchPopup = false;

      if (!this.multiTabSearchResults.some(function (tab) {
        return tab.searchId == searchId;
      })) {
        this.multiTabSearchResults.push({
          searchId: searchId,
          searchPayload: searchPayload,
          searchResult: [],
          tabOrigin: this.computeOriginDest(searchPayload.origin),
          tabDestination: this.computeOriginDest(searchPayload.destination)
        });
      } else {
        console.error("some() check failed.");
      }

      this.performLoadSearchHelper(searchPayload, searchId);
      this.tabTimers.set(searchId, setInterval(function () {
        _this2.performLoadSearchHelper(searchPayload, searchId, true);
      }, this.autoRefreshInSeconds) // 5 min
      );
    },
    performLoadSearchHelper: function performLoadSearchHelper(searchPayload, searchId) {
      var isRefresh = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (localStorage.getItem("datConnectionStatus") == "Connected") {
        if (searchPayload.ezpapelEquipmentType == "Load-Out") {
          // No warning when search refreshes.
          if (!isRefresh) {
            this.$vs.notify({
              title: "Warning",
              text: "Load-Out is not supported by DAT.",
              color: "warning"
            });
          }
        } else {
          this.callLoadBoardApi("DAT", searchPayload, searchId, isRefresh);
        }
      }

      if (localStorage.getItem("truckstopConnectionStatus") == "Connected") {
        this.callLoadBoardApi("Truckstop", searchPayload, searchId, isRefresh);
      }

      if (searchPayload.ezpapelEquipmentType == "Load-Out" || searchPayload.ezpapelEquipmentType == "Cargo Van") {
        if (!isRefresh) {
          this.$vs.notify({
            title: "Warning",
            text: searchPayload.ezpapelEquipmentType + " is not supported by C.H. Robinson.",
            color: "warning"
          });
        }
      } else {
        this.callLoadBoardApi("C.H. Robinson", searchPayload, searchId, isRefresh);
      }

      if (searchPayload.ezpapelEquipmentType == "Load-Out" || searchPayload.ezpapelEquipmentType == "Step Deck" || searchPayload.ezpapelEquipmentType == "Tanker" || searchPayload.manualSearchTypes && searchPayload.manualSearchTypes.length > 1 || !searchPayload.origin.city || !searchPayload.destination.city) {} else {
        this.callLoadBoardApi("J.B. Hunt", searchPayload, searchId, isRefresh);
      }
    },
    computeOriginDest: function computeOriginDest(originDest) {
      if (Object.hasOwn(originDest, "states")) {
        return originDest.states.toString();
      } else {
        return originDest.city + ", " + originDest.state;
      }
    },
    notifyNewLoads: function notifyNewLoads(loadBoard, searchPayload, newLoadsCount) {
      this.$vs.notify({
        time: 8000,
        title: "New " + loadBoard + " loads found",
        text: newLoadsCount + " new " + loadBoard + " loads for " + this.computeOriginDest(searchPayload.origin) + " to " + this.computeOriginDest(searchPayload.destination) + " route.",
        color: "primary",
        position: "top-right"
      });
    },
    notifyNoLoad: function notifyNoLoad(loadBoard, searchPayload) {
      this.$vs.notify({
        time: 5000,
        title: "No load",
        text: "No load found on " + loadBoard + " for " + this.computeOriginDest(searchPayload.origin) + " to " + this.computeOriginDest(searchPayload.destination) + " route.",
        color: "warning",
        position: "top-right"
      });
    },
    callLoadBoardApi: function callLoadBoardApi(loadBoard, searchPayload, searchId, isRefresh) {
      var _this3 = this;

      var apiPrefix = "dat";

      if (loadBoard == "Truckstop") {
        apiPrefix = "truckstop";
      } else if (loadBoard == "C.H. Robinson") {
        apiPrefix = "chrobinson";
      } else if (loadBoard == "J.B. Hunt") {
        apiPrefix = "loadboard-crawler"; // shallow copy is enough

        var searchPayloadCopy = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, searchPayload);

        searchPayloadCopy.whichLoadboardCralwer = "jbhunt";
        searchPayload = searchPayloadCopy;
      }

      this.$store.dispatch(apiPrefix + "/searchLoads", searchPayload).then(function (data) {
        // be careful about refresh search.
        var found = _this3.multiTabSearchResults.find(function (e) {
          return e.searchId == searchId;
        });

        if (found) {
          if ( // apiPrefix != "loadboard-crawler" &&
          !isRefresh && data.payload.length == 0) {
            _this3.notifyNoLoad(loadBoard, searchPayload);
          }

          var oldLoadIds = new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_4___default.a(found.searchResult.filter(function (load) {
            return load.loadBoard == loadBoard;
          }).map(function (load) {
            return load.id;
          }));
          var newLoadsCount = 0;
          data.payload.forEach(function (load) {
            if (!oldLoadIds.has(load.id)) {
              newLoadsCount++;

              if (loadBoard == "J.B. Hunt") {
                var fakeCreatedWhen = new Date();

                if (isRefresh) {
                  fakeCreatedWhen.setUTCSeconds(fakeCreatedWhen.getUTCSeconds() - _this3.autoRefreshInSeconds + 30);
                } else {
                  fakeCreatedWhen.setUTCHours(fakeCreatedWhen.getUTCHours() - 2);
                  load.hideCreatedWhen = true;
                }

                load.createdWhen = fakeCreatedWhen.toISOString();
              }
            }
          });
          var newSearchResultArray = found.searchResult.filter(function (load) {
            return load.loadBoard != loadBoard;
          });
          newSearchResultArray.push.apply(newSearchResultArray, _toConsumableArray(data.payload));
          newSearchResultArray.sort(function (a, b) {
            return a.createdWhen < b.createdWhen ? 1 : -1;
          }); // 1 means be will be ranked before a.;

          found.searchResult = newSearchResultArray;

          if (newLoadsCount > 0) {
            _this3.notifyNewLoads(loadBoard, searchPayload, newLoadsCount);
          }
        } else {
          console.error("searchId not found");
        }
      }).catch(function (error) {
        console.error(error);

        if (apiPrefix != "loadboard-crawler") {
          _this3.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            color: "danger"
          });
        }
      });
    },
    handleChangeDate: function handleChangeDate(selectedDates, dateStr) {
      var selectedDateFormat = dateStr.split(" to ");
      var startDate = new Date(selectedDateFormat[0]);
      var skipDay = 60;
      startDate.setDate(startDate.getDate() - skipDay);
      this.$set(this.flat_pikr_config, "minDate", Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(startDate)));
      startDate.setDate(startDate.getDate() + skipDay * 2);
      this.$set(this.flat_pikr_config, "maxDate", Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(startDate)));

      if (selectedDates.length >= 2) {
        this.$set(this.flat_pikr_config, "minDate", "");
        this.$set(this.flat_pikr_config, "maxDate", "");
        this.schedule = [];
        this.refreshList();
      }
    },
    getShareAllSchedule: function () {
      var _getShareAllSchedule = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var selectedDate, filter, _ref, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selectedDate = this.selectedDateRange.split(" to ");

                if (selectedDate.length <= 1) {
                  selectedDate.push(selectedDate[0]);
                } else {
                  selectedDate = this.selectedDateRange.split(" to ");
                }

                filter = {
                  company_id: this.shareAuthId,
                  startDate: selectedDate[0],
                  endDate: selectedDate[1]
                };
                this.$vs.loading();
                _context.prev = 4;
                _context.next = 7;
                return this.$store.dispatch("loads-matching/getShareAllSchedule", filter);

              case 7:
                _ref = _context.sent;
                payload = _ref.payload;
                this.schedule = payload;
                _context.next = 14;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);

              case 14:
                _context.prev = 14;
                this.$vs.loading.close();
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 12, 14, 17]]);
      }));

      return function getShareAllSchedule() {
        return _getShareAllSchedule.apply(this, arguments);
      };
    }(),
    getAllSchedule: function () {
      var _getAllSchedule = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
        var selectedDate, filter, _ref2, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                selectedDate = this.selectedDateRange.split(" to ");

                if (selectedDate.length <= 1) {
                  selectedDate.push(selectedDate[0]);
                } else {
                  selectedDate = this.selectedDateRange.split(" to ");
                }

                filter = {
                  startDate: selectedDate[0],
                  endDate: selectedDate[1]
                };
                this.$vs.loading();
                _context2.prev = 4;
                _context2.next = 7;
                return this.$store.dispatch("loads-matching/getAllTruckSchedules", filter);

              case 7:
                _ref2 = _context2.sent;
                payload = _ref2.payload;
                this.schedule = payload;
                _context2.next = 14;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](4);

              case 14:
                _context2.prev = 14;
                this.$vs.loading.close();
                return _context2.finish(14);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 12, 14, 17]]);
      }));

      return function getAllSchedule() {
        return _getAllSchedule.apply(this, arguments);
      };
    }(),
    refreshList: function refreshList() {
      if (this.$route.name === "share-loads-matching") {
        this.getShareAllSchedule();
      } else {
        this.getAllSchedule();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.tabTimers.forEach(function (value) {
      clearInterval(value);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=template&id=6a5cc3ad&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=template&id=6a5cc3ad& ***!
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
    class: {
      "p-10": _vm.shareAuthId
    }
  }, [_c("div", {
    staticClass: "flex sm:items-center justify-between sm:flex-row flex-col mb-3 sm:mb-0"
  }, [_c("h4", {
    staticClass: "my-5"
  }, [_vm._v("Available Trucks")]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_vm._l(_vm.viewOption, function (items) {
    return _c("div", {
      key: items.name,
      staticClass: "px-2 cursor-pointer flex items-center gap-1",
      on: {
        click: function click($event) {
          return _vm.changeView(items.name);
        }
      }
    }, [!_vm.shareAuthId ? [_c("vs-icon", {
      attrs: {
        icon: items.icon,
        color: items.active ? "primary" : ""
      }
    }), _vm._v(" "), _c("span", {
      class: items.active ? "text-primary" : ""
    }, [_vm._v(_vm._s(items.name))])] : _vm._e()], 2);
  }), _vm._v(" "), _c("vs-button", {
    staticClass: "mr-4 ml-3",
    class: {
      hidden: _vm.shareAuthId
    },
    attrs: {
      radius: "",
      color: "primary",
      type: "border",
      "icon-pack": "feather",
      icon: "icon-share-2",
      "aria-label": "Share",
      title: "Share",
      size: "small"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.shareClick.apply(null, arguments);
      }
    }
  })], 2)]), _vm._v(" "), !_vm.shareAuthId ? _c("div", [!_vm.viewOption[2].active ? _c("GmapMap", {
    ref: "mapRef",
    staticClass: "gmap",
    style: !_vm.viewOption[0].active ? "height: 80vh;" : "height: 60vh",
    attrs: {
      center: _vm.center,
      zoom: 5,
      "map-type-id": "roadmap"
    }
  }, [_c("GmapCluster", [_c("gmap-info-window", {
    attrs: {
      options: _vm.infoOptions,
      position: {
        lat: _vm.infoWindowDetails.latitude,
        lng: _vm.infoWindowDetails.longitude
      },
      opened: _vm.infoWinOpen
    },
    on: {
      closeclick: function closeclick($event) {
        _vm.infoWinOpen = false;
      }
    }
  }, [_c("div", [_c("div", [_c("b", {
    staticClass: "text-dark"
  }, [_vm._v(_vm._s(_vm.infoWindowDetails.truck_number))])]), _vm._v(" "), _c("div", {
    staticClass: "border-window"
  }), _vm._v(" "), _c("div", [_c("table", [_c("tr", {
    staticClass: "mt-3"
  }, [_c("th", [_c("span", {
    staticClass: "font-light text-dark"
  }, [_vm._v("Current Location")])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "max-width": "150px"
    }
  }, [_c("span", {
    staticClass: "text-dark font-bold"
  }, [_vm._v("\n                      " + _vm._s(_vm.infoWindowDetails.formatted_location))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "border-window"
  })])]), _vm._v(" "), _vm._l(_vm.trucks, function (truck) {
    return _c("gmap-marker", {
      key: truck.truck_id,
      attrs: {
        position: {
          lat: truck.latitude,
          lng: truck.longitude
        },
        clickable: true,
        icon: __webpack_require__(/*! @assets/images/custom/marker_truck_circle.svg */ "./resources/assets/images/custom/marker_truck_circle.svg"),
        label: {
          text: String(truck.truck_number),
          color: "#fff",
          fontSize: "12px",
          className: "marker-label"
        },
        title: truck.truck_number
      },
      on: {
        click: function click($event) {
          return _vm.toggleInfoWindow(truck);
        }
      }
    });
  })], 2)], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.viewOption[1].active,
      expression: "!viewOption[1].active"
    }]
  }, [_c("TruckLoadsList")], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=template&id=91fbf49c&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=template&id=91fbf49c& ***!
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

  return _c("div", [!_vm.showReload ? _c("div", [_vm.multiTabSearchResults.length == 0 ? _c("span", {
    staticClass: "lg:hidden top-close",
    on: {
      click: function click($event) {
        return _vm.$emit("hide");
      }
    }
  }, [_c("vs-icon", {
    staticClass: "text-4xl",
    attrs: {
      icon: "close",
      color: "primary"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.multiTabSearchResults.length == 0 ? _c("div", {
    staticClass: "card-details card-container"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _vm.multiTabSearchResults.length > 0 ? _c("div", [_c("div", {
    staticClass: "card-details p-5"
  }, [_c("div", [_c("div", [_c("div", {
    ref: "tabList",
    staticClass: "flex cursor-pointer items-baseline tab-list"
  }, [_vm._l(_vm.multiTabSearchResults, function (tab, index) {
    return _c("div", {
      key: index,
      ref: "multiTabSearchResults",
      refInFor: true,
      staticClass: "flex mr-5 p-3",
      class: {
        activeTab: _vm.currentTab === index
      },
      on: {
        click: function click($event) {
          _vm.currentTab = index;
        }
      }
    }, [_c("div", [_c("div", {
      staticClass: "text-xs",
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v("\n                    " + _vm._s(tab.tabOrigin) + "\n                  ")]), _vm._v(" "), _c("div", {
      staticClass: "flex justify-center items-center"
    }, [_c("vs-icon", {
      attrs: {
        icon: "subdirectory_arrow_right"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "text-xs",
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v("\n                      " + _vm._s(tab.tabDestination) + "\n                    ")])], 1)]), _vm._v(" "), _c("div", [_c("vs-icon", {
      staticStyle: {
        "margin-top": "-12px"
      },
      attrs: {
        icon: "cancel",
        color: "primary"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.closeTab(index, tab.searchId);
        }
      }
    })], 1)]);
  }), _vm._v(" "), _c("div", {
    on: {
      click: function click($event) {
        return _vm.$emit("openSearchPopup");
      }
    }
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      fill: "#000000"
    }
  }, [_c("path", {
    attrs: {
      d: "M0 0h24v24H0z",
      fill: "none"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    }
  })])])], 2), _vm._v(" "), _vm._l(_vm.multiTabSearchResults, function (tab, index) {
    return _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentTab === index,
        expression: "currentTab === index"
      }],
      key: index,
      staticClass: "reload-card"
    }, _vm._l(tab.searchResult, function (item, index) {
      return _c("div", {
        key: index,
        staticClass: "card-load-details"
      }, [_c("div", {
        staticClass: "card-left lg:flex"
      }, [_c("div", {
        staticClass: "lg:flex lg:pl-2 lg:w-1/3 lg:mt-0 mt-5 m-padding"
      }, [_c("div", {
        staticClass: "timer-with-logo"
      }, [item.loadBoard == "DAT" ? _c("img", {
        staticClass: "lg:mt-5 load-board-logo",
        attrs: {
          src: __webpack_require__(/*! @assets/images/external-load-boards/DAT-logo.svg */ "./resources/assets/images/external-load-boards/DAT-logo.svg")
        }
      }) : item.loadBoard == "Truckstop" ? _c("img", {
        staticClass: "lg:mt-5 load-board-logo truckstop-logo",
        attrs: {
          src: __webpack_require__(/*! @assets/images/external-load-boards/truckstop-logo.svg */ "./resources/assets/images/external-load-boards/truckstop-logo.svg")
        }
      }) : item.loadBoard == "C.H. Robinson" ? _c("img", {
        staticClass: "lg:mt-5 load-board-logo",
        staticStyle: {
          width: "80px"
        },
        attrs: {
          src: __webpack_require__(/*! @assets/images/external-load-boards/chrobinson-logo.svg */ "./resources/assets/images/external-load-boards/chrobinson-logo.svg")
        }
      }) : item.loadBoard == "J.B. Hunt" ? _c("img", {
        staticClass: "lg:mt-5 load-board-logo jbhunt-logo",
        staticStyle: {
          width: "80px"
        },
        attrs: {
          src: __webpack_require__(/*! @assets/images/external-load-boards/jbhunt-logo.svg */ "./resources/assets/images/external-load-boards/jbhunt-logo.svg")
        }
      }) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "flex items-center"
      }, [_c("svg", {
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          height: "20px",
          viewBox: "0 0 24 24",
          width: "20px",
          fill: "#6666f0"
        }
      }, [_c("path", {
        attrs: {
          d: "M0 0h24v24H0z",
          fill: "none"
        }
      }), _vm._v(" "), _c("path", {
        attrs: {
          d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }
      }), _vm._v(" "), _c("path", {
        attrs: {
          d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
        }
      })]), _vm._v(" "), item.createdWhen ? _c("span", {
        staticClass: "ml-1"
      }, [_vm._v(_vm._s(_vm.getTimeDiff(item)))]) : item.age ? _c("span", {
        staticClass: "ml-1"
      }, [_vm._v(_vm._s(item.age))]) : _vm._e()])]), _vm._v(" "), _c("div", {
        staticClass: "address"
      }, [_vm._m(1, true), _vm._v(" "), _c("div", {
        staticClass: "flex flex-col justify-between"
      }, [_c("div", [_c("h4", [_vm._v("\n                            " + _vm._s(item.origin.city) + ", " + _vm._s(item.origin.state) + "\n                            "), item.origin.deadhead ? _c("span", [_vm._v("\n                              " + _vm._s(_vm.showDeadhead(item.origin.deadhead)) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("span", [_vm._v(_vm._s(item.pickupDate))]), _vm._v(" "), item.pickupTime ? _c("span", [_vm._v(_vm._s(item.pickupTime))]) : _vm._e()]), _vm._v(" "), _c("div", [_c("h4", [_vm._v("\n                            " + _vm._s(item.destination.city) + ",\n                            " + _vm._s(item.destination.state) + "\n                            "), item.destination.deadhead ? _c("span", [_vm._v(_vm._s(_vm.showDeadhead(item.destination.deadhead)))]) : _vm._e()]), _vm._v(" "), item.deliveryDate ? _c("span", [_vm._v(_vm._s(item.deliveryDate))]) : _vm._e(), _vm._v(" "), item.deliveryTime ? _c("span", [_vm._v(_vm._s(item.deliveryTime))]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
        staticClass: "lg:w-1/3 flex border m-padding"
      }, [_c("div", {
        staticClass: "w-1/2 flex flex-col justify-between"
      }, [_c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: item.weightInPounds,
          expression: "item.weightInPounds"
        }]
      }, [_c("span", [_vm._v("Weight")]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(item.weightInPounds) + " lbs")])]), _vm._v(" "), _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: item.distance,
          expression: "item.distance"
        }],
        staticClass: "mt-4"
      }, [_c("span", [_vm._v("Distance")]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(item.distance) + " mi")])])]), _vm._v(" "), _c("div", {
        staticClass: "flex flex-col justify-between",
        staticStyle: {
          width: "200px"
        }
      }, [_c("div", [_c("span", [_vm._v("Equipment Type")]), _vm._v(" "), _c("h3", [_vm._v("\n                          " + _vm._s(item.equipmentType) + "\n                          " + _vm._s(item.capacity ? " - (" + item.capacity + ")" : "") + "\n                          " + _vm._s(item.lengthInFeet ? item.lengthInFeet + " ft" : "") + "\n                        ")])]), _vm._v(" "), _c("div", {
        staticClass: "mt-4"
      }, [item.bookUrl != "" ? _c("a", {
        staticClass: "text-xs",
        attrs: {
          target: "_blank",
          rel: "noopener noreferrer",
          href: item.bookUrl
        }
      }, [_vm._v("Book Now")]) : _vm._e(), _vm._v(" "), item.bookUrl == "" && item.rate ? _c("span", [_vm._v("Rate")]) : _vm._e(), _vm._v(" "), item.rate ? _c("h3", [_vm._v("$" + _vm._s(item.rate))]) : _vm._e()])])]), _vm._v(" "), _c("vs-divider", {
        staticClass: "lg:hidden block",
        attrs: {
          color: "#C5BFFF"
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "lg:py-4 lg:w-1/3 lg:ml-5 lg:mt-0 m-padding lg:mb-0 mb-5"
      }, [_c("div", {
        staticClass: "flex justify-between"
      }, [_c("div", {
        staticClass: "flex items-center"
      }, [_c("div", {
        staticClass: "text-xs"
      }, [_vm._v("\n                          " + _vm._s(item.poster.company) + "\n                        ")])]), _vm._v(" "), _c("h6", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: item.creditScore,
          expression: "item.creditScore"
        }],
        staticClass: "whitespace-no-wrap"
      }, [_vm._v("\n                        Credit: " + _vm._s(item.creditScore) + "\n                      ")])]), _vm._v(" "), _c("div", {
        staticClass: "mt-3"
      }, [_c("p", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: item.daysToPay || item.factoring,
          expression: "item.daysToPay || item.factoring"
        }],
        staticClass: "text-xs"
      }, [_vm._v("\n                        Days to pay: " + _vm._s(item.daysToPay) + " " + _vm._s(item.factoring) + "\n                      ")]), _vm._v(" "), item.poster.phone != "" ? _c("p", {
        staticClass: "text-xs my-2"
      }, [_vm._v("\n                        Contact:\n                        " + _vm._s(_vm.formatPhoneNumber(item.poster.phone)) + "\n                        " + _vm._s(item.poster.extension && "ext. " + item.poster.extension) + "\n                      ")]) : _c("p", {
        staticClass: "text-xs mt-2"
      }, [_vm._v("\n                        Contact: " + _vm._s(item.poster.email) + "\n                      ")]), _vm._v(" "), item.comments.length ? _c("p", {
        staticClass: "text-xs"
      }, [_vm._v("\n                        Note:\n                        "), _vm._l(item.comments, function (comment, index) {
        return _c("span", {
          key: index
        }, [_vm._v(_vm._s(comment + " "))]);
      })], 2) : _vm._e()])])], 1)]);
    }), 0);
  })], 2)])])]) : _vm._e()]) : _vm._e()]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card-empty"
  }, [_c("h4", {
    staticClass: "mb-4"
  }, [_vm._v("Welcome to Truckpedia")]), _vm._v(" "), _c("div", {
    staticClass: "img-box"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/ic_bot.png */ "./resources/assets/images/custom/ic_bot.png"),
      alt: "ic_bot"
    }
  })])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "path-border-container"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/sender_icon.svg */ "./resources/assets/images/custom/sender_icon.svg"),
      alt: "sender icon"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "path-border"
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/receiver_icon.svg */ "./resources/assets/images/custom/receiver_icon.svg"),
      alt: "receiver icon"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=template&id=44f5cdfa&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=template&id=44f5cdfa& ***!
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

  return _c("div", {
    staticClass: "reload-info"
  }, [_c("div", {
    staticClass: "pb-0"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("button", {
    staticClass: "icon-btn",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("hideReloadInfo");
      }
    }
  }, [_c("chevron-left-icon", {
    staticClass: "mr-2",
    attrs: {
      size: "2x"
    }
  })], 1), _vm._v(" "), _c("h5", {
    staticClass: "ml-2 heading"
  }, [_vm._v("Truck 100 Reload info")])])]), _vm._v(" "), _c("div", {
    staticClass: "fixed-height"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "bottom-border"
  }, [_c("GmapMap", {
    staticClass: "mt-6 mx-auto gmap",
    attrs: {
      center: {
        lat: 10,
        lng: 10
      },
      zoom: 7,
      "map-type-id": "terrain"
    }
  })], 1), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "mt-5 confim-requirements"
  }, [_c("p", {
    staticClass: "mb-1 font-medium"
  }, [_vm._v("Confim Requirements*")]), _vm._v(" "), _c("vs-checkbox", {
    model: {
      value: _vm.loadTrackingPolicy1,
      callback: function callback($$v) {
        _vm.loadTrackingPolicy1 = $$v;
      },
      expression: "loadTrackingPolicy1"
    }
  }, [_c("span", [_c("b", [_vm._v("I agree")]), _vm._v(" to Truckpedia's load tracking requirements and I confirm\n          that I understand and will meet the carrier requirements for this\n          load.\n        ")])])], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3 call-appointment"
  }, [_c("p", {
    staticClass: "mb-1 font-medium"
  }, [_vm._v("Call for Appointment Time*")]), _vm._v(" "), _c("vs-checkbox", {
    model: {
      value: _vm.loadTrackingPolicy2,
      callback: function callback($$v) {
        _vm.loadTrackingPolicy2 = $$v;
      },
      expression: "loadTrackingPolicy2"
    }
  }, [_c("span", [_c("b", [_vm._v("I agree")]), _vm._v(" to call Truckpedia for the appointment time after\n          booking.\n        ")])])], 1), _vm._v(" "), _c("div", {
    staticClass: "text-center my-4"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    }
  }, [_vm._v("BOOK NOW")])], 1)])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "bottom-border"
  }, [_c("div", {
    staticClass: "pt-3 pb-2"
  }, [_c("span", {
    staticClass: "fs-12"
  }, [_vm._v("Live")])]), _vm._v(" "), _c("div", [_c("ul", {
    staticClass: "ul-list"
  }, [_c("li", {
    staticClass: "list-circle"
  }, [_vm._v("Van - 53 Feet")]), _vm._v(" "), _c("li", {
    staticClass: "list-circle"
  }, [_vm._v("10250 LB")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "bottom-border"
  }, [_c("div", {
    staticClass: "pt-3 pb-2"
  }, [_c("span", {
    staticClass: "fs-12"
  }, [_vm._v("Service Type")])]), _vm._v(" "), _c("div", [_c("ul", {
    staticClass: "ul-list"
  }, [_c("li", {
    staticClass: "list-circle"
  }, [_vm._v("Truckload Contract")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "bottom-border"
  }, [_c("div", {
    staticClass: "pt-3 pb-2"
  }, [_c("span", {
    staticClass: "fs-12"
  }, [_vm._v("Notes")])]), _vm._v(" "), _c("div", [_c("ul", {
    staticClass: "ul-list"
  }, [_c("span", {
    staticClass: "font-12"
  }, [_vm._v("Documentation")]), _vm._v(" "), _c("li", {
    staticClass: "list-circle"
  }, [_vm._v("BOL required")]), _vm._v(" "), _c("li", {
    staticClass: "list-circle pb-2"
  }, [_vm._v("\n            Receipts required for any accessorial reimbursement\n          ")]), _vm._v(" "), _c("span", [_vm._v("Loading/Unloading")]), _vm._v(" "), _c("li", {
    staticClass: "list-circle"
  }, [_vm._v("Delivery appointment required")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "bottom-border"
  }, [_c("div", {
    staticClass: "pt-3 pb-2"
  }, [_c("span", {
    staticClass: "fs-12"
  }, [_vm._v("Truckpedia Representative")])]), _vm._v(" "), _c("div", [_c("ul", {
    staticClass: "ul-list"
  }, [_c("li", {
    staticClass: "list-circle"
  }, [_vm._v("Ryder Liu")]), _vm._v(" "), _c("li", {
    staticClass: "list-circle"
  }, [_vm._v("720-231-4123")]), _vm._v(" "), _c("li", {
    staticClass: "list-circle"
  }, [_vm._v("ryder.liu@ezpapelcom")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "bottom-border"
  }, [_c("div", {
    staticClass: "pt-3 pb-2"
  }, [_c("span", {
    staticClass: "fs-12"
  }, [_vm._v("Commodity")])]), _vm._v(" "), _c("div", [_c("ul", {
    staticClass: "ul-list"
  }, [_c("span", [_vm._v("Consumer Goods")]), _vm._v(" "), _c("li", {
    staticClass: "list-circle"
  }, [_vm._v("Weight: 10230 lb")]), _vm._v(" "), _c("li", {
    staticClass: "list-circle"
  }, [_vm._v("Quantity: 1000 units")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "address"
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("img", {
    staticClass: "before-img",
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/sender_icon.svg */ "./resources/assets/images/custom/sender_icon.svg"),
      alt: "Sender icon"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "pl-4"
  }, [_c("h4", {
    staticClass: "fs-14"
  }, [_vm._v("Memphis, TN")]), _vm._v(" "), _c("span", {
    staticClass: "fs-12"
  }, [_vm._v("Feb 21, 2022 | 8:00am")])])]), _vm._v(" "), _c("div", {
    staticClass: "flex"
  }, [_c("div", {
    staticClass: "path-border-container before-img"
  }, [_c("div", {
    staticClass: "path-border"
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/receiver_icon.svg */ "./resources/assets/images/custom/receiver_icon.svg"),
      alt: "Receiver icon"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("h4", {
    staticClass: "fs-14"
  }, [_vm._v("Nashville, TN")]), _vm._v(" "), _c("span", {
    staticClass: "fs-12"
  }, [_vm._v("Feb 21, 2022 | 10:00am")])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "flex justify-between mt-3 items-center"
  }, [_c("div", [_c("span", {
    staticClass: "fs-12"
  }, [_vm._v("Load Price")]), _vm._v(" "), _c("div", {
    staticClass: "flex items-baseline"
  }, [_c("h5", {
    staticClass: "font-medium"
  }, [_vm._v("$5,315")]), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "10px"
    }
  }, [_vm._v(" / RPM $2.60")])])]), _vm._v(" "), _c("div", {
    staticClass: "limited-deal"
  }, [_c("span", [_vm._v("Limited Deal")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=template&id=d84d8e10&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=template&id=d84d8e10& ***!
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
    staticClass: "flex items-center space-x-4 mt-3"
  }, [_c("div", {
    staticClass: "w-10/12"
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("span", {
    staticClass: "vs-input--label"
  }, [_vm._v("Origin")]), _vm._v(" "), _c("field-required-sign"), _vm._v(" "), _c("div", {
    staticClass: "place-tooltip-dropdown ml-2"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "error_outline",
      color: "primary"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "place-tooltip-dropdown-menu"
  }, [_c("p", [_vm._v("\n              Manually input City and State or add States from the dropdown\n            ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "line",
      size: "small"
    },
    on: {
      click: _vm.toggleOriginStateDropdown
    }
  }, [_vm._v("click to change")])], 1)])], 1), _vm._v(" "), _vm.chooseOriginDropdown ? _c("multiselect", {
    attrs: {
      multiple: true,
      "show-labels": false,
      "track-by": "text",
      label: "text",
      placeholder: "Select one or more states",
      options: _vm.stateList
    },
    model: {
      value: _vm.selectedOriginStateList,
      callback: function callback($$v) {
        _vm.selectedOriginStateList = $$v;
      },
      expression: "selectedOriginStateList"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.chooseOriginDropdown ? _c("div", {
    staticClass: "flex"
  }, [_c("gmap-autocomplete", {
    staticClass: "vs-inputx vs-input--input normal hasValue",
    attrs: {
      name: "originAddress",
      placeholder: "City, State",
      value: _vm.originAddress,
      options: _vm.googleMapAutoCompleteOptions,
      "select-first-on-enter": true
    },
    on: {
      place_changed: function place_changed($event) {
        return _vm.setOriginPlace($event);
      }
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "w-1/4"
  }, [_c("span", {
    staticClass: "vs-input--label"
  }, [_vm._v("DH-O")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      "show-labels": false,
      preselectFirst: true,
      "track-by": "value",
      label: "text",
      placeholder: "",
      options: _vm.dhOption,
      "allow-empty": false
    },
    model: {
      value: _vm.dhOrigin,
      callback: function callback($$v) {
        _vm.dhOrigin = $$v;
      },
      expression: "dhOrigin"
    }
  })], 1)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "flex items-center space-x-4 mt-3"
  }, [_c("div", {
    staticClass: "w-10/12"
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("span", {
    staticClass: "vs-input--label"
  }, [_vm._v("Destination")]), _vm._v(" "), _c("field-required-sign"), _vm._v(" "), _c("div", {
    staticClass: "place-tooltip-dropdown ml-2"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "error_outline",
      color: "primary"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "place-tooltip-dropdown-menu"
  }, [_c("p", [_vm._v("\n                Manually input City and State or add States from the dropdown\n              ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "line",
      size: "small"
    },
    on: {
      click: _vm.toggleDestinationStateDropdown
    }
  }, [_vm._v("click to change")])], 1)])], 1), _vm._v(" "), _vm.chooseDestinationDropdown ? _c("multiselect", {
    attrs: {
      multiple: true,
      "show-labels": false,
      "track-by": "text",
      label: "text",
      placeholder: "Select one or more states",
      options: _vm.stateList
    },
    model: {
      value: _vm.selectedDestinationStateList,
      callback: function callback($$v) {
        _vm.selectedDestinationStateList = $$v;
      },
      expression: "selectedDestinationStateList"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.chooseDestinationDropdown ? _c("div", {
    staticClass: "flex"
  }, [_c("gmap-autocomplete", {
    staticClass: "vs-inputx vs-input--input normal hasValue",
    attrs: {
      name: "destinationAddress",
      placeholder: "City, State",
      value: _vm.destinationAddress,
      options: _vm.googleMapAutoCompleteOptions,
      "select-first-on-enter": true
    },
    on: {
      place_changed: function place_changed($event) {
        return _vm.setDestinationPlace($event);
      }
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "w-1/4"
  }, [_c("span", {
    staticClass: "vs-input--label"
  }, [_vm._v("DH-D")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      "show-labels": false,
      preselectFirst: true,
      "track-by": "value",
      label: "text",
      placeholder: "",
      options: _vm.dhOption,
      "allow-empty": false
    },
    model: {
      value: _vm.dhDestination,
      callback: function callback($$v) {
        _vm.dhDestination = $$v;
      },
      expression: "dhDestination"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("label", {
    staticClass: "vs-input--label"
  }, [_vm._v("Truck type")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      multiple: true,
      label: "text",
      "track-by": "value",
      options: _vm.manualSearchTruckTypeOptions,
      "show-labels": false
    },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function fn(props) {
        return [_c("span", [_vm._v(_vm._s(props.option.text) + " ")])];
      }
    }, {
      key: "option",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "flex justify-between w-full"
        }, [_c("div", [_vm._v("\n            " + _vm._s(props.option.text) + "\n          ")])])];
      }
    }]),
    model: {
      value: _vm.manualSearchTruckTypes,
      callback: function callback($$v) {
        _vm.manualSearchTruckTypes = $$v;
      },
      expression: "manualSearchTruckTypes"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "flex items-center space-x-4 mt-3"
  }, [_c("vs-input", {
    attrs: {
      type: "number",
      label: "Length",
      placeholder: "Fleet"
    },
    model: {
      value: _vm.length,
      callback: function callback($$v) {
        _vm.length = $$v;
      },
      expression: "length"
    }
  }), _vm._v(" "), _c("vs-input", {
    attrs: {
      type: "number",
      label: "Weight",
      placeholder: "Weight"
    },
    model: {
      value: _vm.weight,
      callback: function callback($$v) {
        _vm.weight = $$v;
      },
      expression: "weight"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "w-1/4"
  }, [_c("span", {
    staticClass: "vs-input--label"
  }, [_vm._v("Capacity")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      "show-labels": false,
      preselectFirst: true,
      "track-by": "value",
      label: "text",
      placeholder: "",
      options: _vm.fullPartialOption,
      searchable: false,
      "allow-empty": false
    },
    model: {
      value: _vm.capacity,
      callback: function callback($$v) {
        _vm.capacity = $$v;
      },
      expression: "capacity"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "flex items-center space-x-4 mt-3"
  }, [_c("div", {
    staticClass: "w-1/2"
  }, [_c("label", {
    staticClass: "vs-input--label block"
  }, [_vm._v("Start date"), _c("field-required-sign")], 1), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Select start date"
    },
    model: {
      value: _vm.selectedStartDate,
      callback: function callback($$v) {
        _vm.selectedStartDate = $$v;
      },
      expression: "selectedStartDate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-1/2"
  }, [_c("label", {
    staticClass: "vs-input--label block"
  }, [_vm._v("End date")]), _vm._v(" "), _c("flat-pickr", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Select end date"
    },
    model: {
      value: _vm.selectedEndDate,
      callback: function callback($$v) {
        _vm.selectedEndDate = $$v;
      },
      expression: "selectedEndDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 text-center"
  }, [_c("vs-button", {
    staticClass: "w-1/3",
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.loadMatchingSearch
    }
  }, [_vm._v("Search")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=template&id=107ecaba&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=template&id=107ecaba& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card mt-5 shadow",
    on: {
      dblclick: _vm.searchLoads
    }
  }, [_c("div", {
    staticClass: "card-left"
  }, [_c("div", {
    staticClass: "flex pt-3"
  }, [_c("h3", [_vm._v(_vm._s(_vm.data.truck_number))]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.data.driver_name))])]), _vm._v(" "), _c("div", {
    staticClass: "address"
  }, [_vm._m(0), _vm._v(" "), _c("div", [_c("div", [_c("h4", [_vm._v("\n            " + _vm._s(_vm.data.destination.city ? _vm.data.destination.city + ", " : "") + "\n            "), _vm._v("\n            " + _vm._s(_vm.data.destination.state ? _vm.data.destination.state : "") + "\n          ")]), _vm._v(" "), _c("span", [_c("flat-pickr", {
    ref: "flat-pickr",
    staticClass: "w-full",
    attrs: {
      disabled: _vm.shareAuthId ? true : false,
      placeholder: "Select reload date"
    },
    on: {
      "on-change": function onChange($event) {
        return _vm.handleChangeReloadDate();
      }
    },
    model: {
      value: _vm.reloadDate,
      callback: function callback($$v) {
        _vm.reloadDate = $$v;
      },
      expression: "reloadDate"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("div", [_c("div", {
    staticClass: "flex justify-between"
  }, [_c("span", [_vm._v("Destination")]), _vm._v(" "), !_vm.shareAuthId ? _c("div", {
    staticClass: "tooltip-dropdown",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.toggleDropdown.apply(null, arguments);
      }
    }
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "error_outline",
      color: "primary"
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.dropdown,
      expression: "dropdown"
    }],
    staticClass: "tooltip-dropdown-menu"
  }, [_c("p", [_vm._v("\n                    Manually input City and State or add States from the\n                    dropdown\n                  ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "line"
    },
    on: {
      click: _vm.changeDestination
    }
  }, [_vm._v("click to change")])], 1)]) : _vm._e()]), _vm._v(" "), _vm.chooseDropdown ? _c("vs-select", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Select destinations",
      multiple: "",
      autocomplete: "",
      disabled: _vm.shareAuthId ? true : false
    },
    on: {
      input: _vm.updateReloadDestinationStatesList
    },
    model: {
      value: _vm.selectedStateList,
      callback: function callback($$v) {
        _vm.selectedStateList = $$v;
      },
      expression: "selectedStateList"
    }
  }, _vm._l(_vm.stateList, function (item, index) {
    return _c("vs-select-item", {
      key: index,
      attrs: {
        value: item.text,
        text: item.text
      }
    });
  }), 1) : _vm._e(), _vm._v(" "), !_vm.chooseDropdown ? _c("div", {
    staticClass: "flex"
  }, [_c("gmap-autocomplete", {
    staticClass: "vs-inputx vs-input--input normal hasValue",
    attrs: {
      name: "address",
      placeholder: "City, State",
      value: _vm.address,
      disabled: _vm.shareAuthId ? true : false,
      options: _vm.googleMapAutoCompleteOptions,
      "select-first-on-enter": true
    },
    on: {
      place_changed: function place_changed($event) {
        return _vm.getChangedPlace($event);
      }
    }
  })], 1) : _vm._e()], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-right"
  }, [_c("p", {
    staticClass: "text-right load-matching-truck-type"
  }, [_vm._v(_vm._s(_vm.data.truck_type))]), _vm._v(" "), _c("div", {
    staticClass: "flex mt-6 justify-between"
  }, [_c("div", {
    staticClass: "w-1/2 dh-od"
  }, [_c("span", [_vm._v("DH-(O)")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      placeholder: "",
      label: "text",
      "track-by": "value",
      "tag-position": "bottom",
      "allow-empty": false,
      disabled: _vm.shareAuthId ? true : false,
      options: _vm.deadheadOptions,
      "show-labels": false
    },
    on: {
      select: _vm.updateTruckDeadheadOrigin
    },
    model: {
      value: _vm.DeadheadO,
      callback: function callback($$v) {
        _vm.DeadheadO = $$v;
      },
      expression: "DeadheadO"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-1/2 ml-5"
  }, [_c("span", [_vm._v("Expected Rate")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number",
      disabled: _vm.shareAuthId ? true : false
    },
    on: {
      input: _vm.updateTruckTargetPrice
    },
    model: {
      value: _vm.targetPrice,
      callback: function callback($$v) {
        _vm.targetPrice = $$v;
      },
      expression: "targetPrice"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "flex mt-6 justify-between"
  }, [_c("div", {
    staticClass: "w-1/2 dh-od"
  }, [_c("span", [_vm._v("DH-(D)")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      placeholder: "",
      label: "text",
      "track-by": "value",
      "tag-position": "bottom",
      "allow-empty": false,
      disabled: _vm.shareAuthId ? true : false,
      options: _vm.deadheadOptions,
      "show-labels": false
    },
    on: {
      select: _vm.updateTruckDeadheadDestination
    },
    model: {
      value: _vm.DeadheadD,
      callback: function callback($$v) {
        _vm.DeadheadD = $$v;
      },
      expression: "DeadheadD"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-1/2 ml-5"
  }, [_c("span", [_vm._v("Max Weight")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number",
      disabled: _vm.shareAuthId ? true : false
    },
    nativeOn: {
      input: function input($event) {
        return _vm.updateTruckMaxWeight.apply(null, arguments);
      }
    },
    model: {
      value: _vm.maxWeight,
      callback: function callback($$v) {
        _vm.maxWeight = $$v;
      },
      expression: "maxWeight"
    }
  })], 1)])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "path-border-container"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/sender_icon.svg */ "./resources/assets/images/custom/sender_icon.svg")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "path-border"
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: __webpack_require__(/*! @assets/images/custom/receiver_icon.svg */ "./resources/assets/images/custom/receiver_icon.svg")
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=template&id=3aeaf388&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=template&id=3aeaf388& ***!
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

  return _c("div", [_c("div", {
    staticClass: "flex mt-12"
  }, [_c("div", {
    class: [{
      "w-full": _vm.shareAuthId,
      "lg:w-2/5 w-full": !_vm.shareAuthId
    }]
  }, [_c("div", {
    staticClass: "sm:flex justify-between items-center"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("div", {
    staticClass: "input-box"
  }, [_c("label", {
    staticClass: "input-label"
  }, [_vm._v("Date range")]), _vm._v(" "), _c("div", [_c("flat-pickr", {
    ref: "flat-pickr",
    staticClass: "w-full",
    attrs: {
      config: _vm.flat_pikr_config,
      placeholder: "Select Date Range"
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
  })], 1)]), _vm._v(" "), !_vm.shareAuthId ? _c("vs-button", {
    staticClass: "mx-2 mt-5",
    attrs: {
      color: "primary",
      type: "border",
      icon: "search"
    },
    on: {
      click: _vm.openSearchPopup
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "pt-4 flex justify-end items-center"
  }, [_c("button", {
    staticClass: "icon-btn cursor-pointer",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.refreshList
    }
  }, [_c("refresh-ccw-icon", {
    attrs: {
      size: "1.5x"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    class: {
      "load-details-card-shared": _vm.shareAuthId,
      "load-details-card": !_vm.shareAuthId
    }
  }, _vm._l(_vm.schedule, function (items) {
    return _c("TruckCard", {
      key: items.truck_id + "id" + Date.now(),
      attrs: {
        data: items
      },
      on: {
        performLoadSearch: _vm.performLoadSearch
      }
    });
  }), 1), _vm._v(" "), _c("vs-popup", {
    attrs: {
      title: "",
      active: _vm.searchPopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.searchPopup = $event;
      }
    }
  }, [_c("search-popup", {
    on: {
      performLoadSearch: _vm.performLoadSearch
    }
  })], 1)], 1), _vm._v(" "), !_vm.shareAuthId ? [_vm.windowWidth > 991 ? _c("div", {
    staticClass: "w-2/3 hidden lg:block"
  }, [_c("LoadCard", {
    attrs: {
      multiTabSearchResults: _vm.multiTabSearchResults
    },
    on: {
      closeOneTab: _vm.closeOneTab,
      openSearchPopup: _vm.openSearchPopup
    }
  })], 1) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _vm.windowWidth <= 991 && _vm.multiTabSearchResults.length > 0 ? _c("transition", {
    attrs: {
      name: "slide-fade"
    }
  }, [!_vm.shareAuthId ? _c("div", {
    staticClass: "load-details-mobile"
  }, [_c("LoadCard", {
    attrs: {
      multiTabSearchResults: _vm.multiTabSearchResults
    },
    on: {
      closeOneTab: _vm.closeOneTab,
      openSearchPopup: _vm.openSearchPopup
    }
  })], 1) : _vm._e()]) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__(/*! ../modules/es7.map.to-json */ "./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__(/*! ../modules/es7.map.of */ "./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__(/*! ../modules/es7.map.from */ "./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}[dir] .input-container {\n  border-radius: 8px;\n  padding: 10px;\n  border: 1px solid #d8d6de;\n}\n.gmap {\n  width: 100%;\n  height: 300px;\n}\n@media (max-width: 991px) {\n.gmap {\n    height: 449px;\n}\n}\n.border-window {\n  width: 100%;\n}\n[dir] .border-window {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1607843137);\n  margin: 8px 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reload-card {\n  overflow: auto;\n  height: 70vh;\n}\n@media (max-width: 991px) {\n.reload-card {\n    height: 100vh;\n}\n}\n.card-container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 991px) {\n[dir] .m-padding {\n    padding: 0.6rem 1.25rem;\n}\n}\n.card-details {\n  height: 80vh;\n  width: 97%;\n}\n[dir] .card-details {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0px 4px 24px rgba(34, 41, 47, 0.1019607843);\n}\n[dir=ltr] .card-details {\n  margin-left: auto;\n}\n[dir=rtl] .card-details {\n  margin-right: auto;\n}\n@media (max-width: 991px) {\n.card-details {\n    width: 100%;\n}\n[dir] .card-details {\n    box-shadow: none;\n}\n[dir=ltr] .card-details {\n    margin-left: 0;\n}\n[dir=rtl] .card-details {\n    margin-right: 0;\n}\n}\n@media (max-width: 991px) {\n.card-details .heading {\n    font-size: 1.2rem;\n}\n}\n.card-details .card-empty {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.card-details .card-empty .img-box {\n  width: 150px;\n}\n.card-details .card-empty .img-box img {\n  width: 100%;\n  height: 100%;\n}\n.card-details .card-load-details {\n  position: relative;\n}\n[dir] .card-details .card-load-details {\n  border: 1px solid #c5bfff;\n  border-radius: 20px;\n  margin-top: 16px;\n}\n[dir=ltr] .card-details .card-left {\n  padding-right: 30px;\n}\n[dir=rtl] .card-details .card-left {\n  padding-left: 30px;\n}\n@media (max-width: 991px) {\n[dir=ltr] .card-details .card-left {\n    padding-right: 0;\n}\n[dir=rtl] .card-details .card-left {\n    padding-left: 0;\n}\n}\n@media (min-width: 992px) {\n.card-details .card-left {\n    min-height: 150px;\n    align-items: center;\n}\n}\n.card-details .card-left h3 {\n  font-size: 12px;\n  font-weight: 600;\n}\n@media (max-width: 991px) {\n.card-details .card-left h3 {\n    font-size: 14px;\n}\n}\n.card-details .card-left h4 {\n  color: #000;\n  font-size: 13px;\n}\n@media (max-width: 991px) {\n.card-details .card-left h4 {\n    font-size: 14px;\n}\n}\n.card-details .card-left span {\n  color: #6e6b7b;\n  font-size: 11px;\n}\n@media (max-width: 991px) {\n.card-details .card-left span {\n    font-size: 12px;\n}\n}\n.card-details .card-left .address {\n  display: flex;\n}\n[dir] .card-details .card-left .address {\n  margin-top: 0px;\n}\n.card-details .card-left .address .path-border-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[dir=ltr] .card-details .card-left .address .path-border-container {\n  margin-right: 10px;\n}\n[dir=rtl] .card-details .card-left .address .path-border-container {\n  margin-left: 10px;\n}\n.card-details .card-left .address .path-border-container .path-border {\n  height: 42px;\n  width: 1px;\n}\n[dir] .card-details .card-left .address .path-border-container .path-border {\n  border: none !important;\n}\n[dir=ltr] .card-details .card-left .address .path-border-container .path-border {\n  border-left: 1px dashed rgb(105, 76, 254) !important;\n}\n[dir=rtl] .card-details .card-left .address .path-border-container .path-border {\n  border-right: 1px dashed rgb(105, 76, 254) !important;\n}\n.card-details .card-left .address .path-border-container img {\n  width: 18px;\n}\n.card-details .card-left .label {\n  font-size: 11px;\n  font-weight: 300;\n  color: rgb(94, 88, 115);\n}\n@media (max-width: 991px) {\n.card-details .card-left .label {\n    font-size: 14px;\n}\n}\n[dir=ltr] .card-details .card-left .border {\n  border-right: 1px solid #f1f4ff;\n}\n[dir=rtl] .card-details .card-left .border {\n  border-left: 1px solid #f1f4ff;\n}\n@media (max-width: 991px) {\n[dir] .card-details .card-left .border {\n    border: none;\n}\n}\n.vs-checkbox-primary input:checked + .vs-checkbox {\n  width: 25px !important;\n}\n.top-close {\n  position: absolute;\n  top: 20px;\n}\n[dir=ltr] .top-close {\n  right: 15px;\n}\n[dir=rtl] .top-close {\n  left: 15px;\n}\n.load-board-logo {\n  width: 60px;\n}\n@media (min-width: 991px) {\n.load-board-logo {\n    position: absolute;\n    top: -4px;\n    width: 40px;\n}\n[dir=ltr] .load-board-logo {\n    left: 18px;\n}\n[dir=rtl] .load-board-logo {\n    right: 18px;\n}\n}\n.timer-with-logo {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 991px) {\n.timer-with-logo {\n    justify-content: space-between;\n}\n[dir] .timer-with-logo {\n    padding-top: 1.25rem !important;\n    padding-bottom: 1.25rem !important;\n}\n}\n.truckstop-logo {\n  top: -28px;\n  width: 61px;\n}\n.jbhunt-logo {\n  top: -28px;\n}\n[dir=ltr] .jbhunt-logo {\n  left: 12px;\n}\n[dir=rtl] .jbhunt-logo {\n  right: 12px;\n}\n[dir] .p-listbox-item:hover {\n  background: #fff !important;\n}\n[dir] .activeTab {\n  border-bottom: 2px solid #694cfe;\n}\n.tab-list {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  block-size: 74px;\n}\n.tab-list::-webkit-scrollbar {\n  width: 0px;\n}\n[dir] .tab-list::-webkit-scrollbar {\n  background-color: transparent;\n}\n.tab-list:hover::-webkit-scrollbar {\n  width: 8px;\n  height: 4px;\n  position: absoulte;\n}\n[dir] .tab-list:hover::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  background-clip: padding-box;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.address {\n  display: flex;\n}\n[dir] .address {\n  margin-top: 20px;\n}\n.address .path-border-container {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .address .path-border-container {\n  margin-right: 10px;\n}\n[dir=rtl] .address .path-border-container {\n  margin-left: 10px;\n}\n.address .path-border-container .path-border {\n  height: 1px;\n  width: 30px;\n}\n[dir] .address .path-border-container .path-border {\n  border: 1px solid rgb(105, 76, 254);\n  border-style: dashed;\n}\n.address .path-border-container img {\n  width: 18px;\n}\n.fixed-height {\n  overflow: auto;\n  height: 70vh;\n}\n@media (max-width: 991px) {\n.fixed-height {\n    height: 100vh;\n}\n}\n.heading {\n  color: #000;\n}\n.ul-list span {\n  font-size: 12px;\n}\n[dir] .bottom-border {\n  border-bottom: 1px solid #f1f4ff;\n  padding-bottom: 0.75rem;\n}\n.card h3 {\n  font-size: 18px;\n  font-weight: 6 0;\n}\n.ul-list {\n  list-style: none;\n}\n[dir] .ul-list {\n  padding: 0px;\n}\n.list-circle {\n  font-size: 13px;\n  font-weight: 600;\n  color: #000;\n  display: flex;\n  align-items: center;\n}\n.ul-list .list-circle::before {\n  content: \"\\2022\";\n  color: #7367f0;\n  font-weight: bold;\n  display: inline-block;\n  line-height: 18px;\n  font-size: 30px;\n}\n[dir] .ul-list .list-circle::before {\n  margin-bottom: 5px;\n}\n[dir=ltr] .ul-list .list-circle::before {\n  margin-right: 8px;\n}\n[dir=rtl] .ul-list .list-circle::before {\n  margin-left: 8px;\n}\n[dir] .icon-btn {\n  background: transparent;\n  border: none;\n}\n.fs-12 {\n  font-size: 12px;\n}\n.fs-14 {\n  font-size: 14px;\n}\n.before-img {\n  position: relative;\n  bottom: 10px;\n}\n[dir] .limited-deal {\n  background: #f1f4ff;\n  border-radius: 20px;\n}\n.limited-deal span {\n  color: rgb(115, 103, 240);\n  font-size: 10px;\n  font-weight: 600;\n}\n[dir] .limited-deal span {\n  padding: 5px 12px;\n}\n.call-appointment span,\n.confim-requirements span {\n  line-height: 10px;\n  font-size: 10px;\n}\n@media (max-width: 991px) {\n.call-appointment span,\n.confim-requirements span {\n    line-height: 15px;\n    font-size: 12px;\n}\n}\n.gmap {\n  width: 50%;\n  height: 150px;\n}\n@media (max-width: 991px) {\n.gmap {\n    width: 100%;\n    height: 90px;\n}\n}\n.checkbox_x .vs-checkbox {\n  width: 43px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .multiselect__tags {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.place-tooltip-dropdown {\n  position: relative;\n}\n.place-tooltip-dropdown-menu {\n  display: none;\n  position: absolute;\n  z-index: 1000;\n  width: 170px;\n}\n[dir] .place-tooltip-dropdown-menu {\n  background: #fff;\n  padding: 10px;\n  box-shadow: 0px 4px 24px rgba(34, 41, 47, 0.1019607843);\n}\n.place-tooltip-dropdown-menu p {\n  font-size: 10px;\n  color: #6e6b7b;\n}\n.place-tooltip-dropdown:hover .place-tooltip-dropdown-menu {\n  display: block;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  display: flex;\n}[dir] .card {\n  border-radius: 20px;\n  background: #fff;\n}\n@media (max-width: 991px) {\n.card {\n    flex-direction: column;\n}\n}\n.card .card-left {\n  min-width: 170px;\n}\n[dir] .card .card-left {\n  padding: 14px;\n}\n[dir=ltr] .card .card-left {\n  border-right: 1px solid #f1f4ff;\n}\n[dir=rtl] .card .card-left {\n  border-left: 1px solid #f1f4ff;\n}\n@media (max-width: 991px) {\n.card .card-left {\n    min-width: 250px;\n}\n[dir] .card .card-left {\n    border: none;\n}\n}\n.card .card-left h3 {\n  font-size: 13px;\n  font-weight: 600;\n}\n.card .card-left h4 {\n  color: #000;\n  font-size: 13px;\n}\n.card .card-left span {\n  color: #6e6b7b;\n  font-size: 11px;\n}\n.card .card-left .address {\n  display: flex;\n}\n[dir] .card .card-left .address {\n  margin-top: 20px;\n}\n.card .card-left .address .path-border-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[dir=ltr] .card .card-left .address .path-border-container {\n  margin-right: 10px;\n}\n[dir=rtl] .card .card-left .address .path-border-container {\n  margin-left: 10px;\n}\n.card .card-left .address .path-border-container .path-border {\n  height: 42px;\n  width: 1px;\n}\n[dir] .card .card-left .address .path-border-container .path-border {\n  border: none !important;\n}\n[dir=ltr] .card .card-left .address .path-border-container .path-border {\n  border-left: 1px dashed rgb(105, 76, 254) !important;\n}\n[dir=rtl] .card .card-left .address .path-border-container .path-border {\n  border-right: 1px dashed rgb(105, 76, 254) !important;\n}\n.card .card-left .address .path-border-container img {\n  width: 18px;\n}\n.card .card-right {\n  position: relative;\n}\n[dir] .card .card-right {\n  padding: 22px;\n}\n@media (max-width: 991px) {\n[dir=ltr] .card .card-right {\n    margin-left: 0;\n}\n[dir=rtl] .card .card-right {\n    margin-right: 0;\n}\n}\n.card .card-right h3 {\n  font-size: 14px;\n}\n.card .card-right span {\n  font-size: 12px;\n}\n.tooltip-dropdown {\n  position: relative;\n}\n.tooltip-dropdown-menu {\n  position: absolute;\n  z-index: 1000;\n  width: 170px;\n}\n[dir] .tooltip-dropdown-menu {\n  background: #fff;\n  padding: 10px;\n  box-shadow: 0px 4px 24px rgba(34, 41, 47, 0.1019607843);\n}\n.tooltip-dropdown-menu p {\n  font-size: 10px;\n  color: #6e6b7b;\n}\n.load-matching-truck-type {\n  position: absolute;\n}\n[dir=ltr] .load-matching-truck-type {\n  right: 24px;\n}\n[dir=rtl] .load-matching-truck-type {\n  left: 24px;\n}\n@media (max-width: 576px) {\n.load-matching-truck-type {\n    top: 0;\n}\n}\n@media (min-width: 1199px) {\n.dh-od .multiselect {\n    width: 120px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}[dir] .input-container {\n  border-radius: 8px;\n  padding: 10px;\n  border: 1px solid #d8d6de;\n}\n.input-box {\n  width: 200px;\n}\n@media (max-width: 568px) {\n.input-box {\n    width: 100%;\n}\n}\n[dir] .icon-btn {\n  background: transparent;\n  border: none;\n  margin-top: 5px;\n}\n.load-details-card {\n  overflow: auto;\n  height: 65vh;\n}\n.load-details-mobile {\n  z-index: 50000;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  overflow: auto;\n}\n[dir] .load-details-mobile {\n  background: #fff;\n}\n[dir=ltr] .load-details-mobile {\n  left: 0;\n}\n[dir=rtl] .load-details-mobile {\n  right: 0;\n}\n.slide-fade-enter-active {\n  transition: all 0.1s linear;\n}\n.slide-fade-leave-active {\n  transition: all 0.1s linear;\n}\n.slide-fade-enter-from,\n.slide-fade-leave-to {\n  opacity: 0;\n}\n[dir=ltr] .slide-fade-enter-from, [dir=ltr] .slide-fade-leave-to {\n  transform: translateX(20px);\n}\n[dir=rtl] .slide-fade-enter-from, [dir=rtl] .slide-fade-leave-to {\n  transform: translateX(-20px);\n}\n@media (min-width: 992px) {\n.load-details-card-shared {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 10px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss&");

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

/***/ "./resources/assets/images/custom/ic_bot.png":
/*!***************************************************!*\
  !*** ./resources/assets/images/custom/ic_bot.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/ic_bot.png?1fa6d2abdccbf6acdf6997340e4ce0ed";

/***/ }),

/***/ "./resources/assets/images/custom/marker_truck_circle.svg":
/*!****************************************************************!*\
  !*** ./resources/assets/images/custom/marker_truck_circle.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/marker_truck_circle.svg?68e10b566b5a4d0f5c81e64eaf1b84db";

/***/ }),

/***/ "./resources/assets/images/custom/receiver_icon.svg":
/*!**********************************************************!*\
  !*** ./resources/assets/images/custom/receiver_icon.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/receiver_icon.svg?0f7292d425530d8dd026e539b7bf7343";

/***/ }),

/***/ "./resources/assets/images/custom/sender_icon.svg":
/*!********************************************************!*\
  !*** ./resources/assets/images/custom/sender_icon.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sender_icon.svg?80e19a467903c6fad4500014a1dc391d";

/***/ }),

/***/ "./resources/assets/images/external-load-boards/DAT-logo.svg":
/*!*******************************************************************!*\
  !*** ./resources/assets/images/external-load-boards/DAT-logo.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/DAT-logo.svg?bf6367f4b2dc069b55a6f2a04b5c4e7f";

/***/ }),

/***/ "./resources/assets/images/external-load-boards/chrobinson-logo.svg":
/*!**************************************************************************!*\
  !*** ./resources/assets/images/external-load-boards/chrobinson-logo.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/chrobinson-logo.svg?7bbb65c70aeb00aacae0614f14c1bab1";

/***/ }),

/***/ "./resources/assets/images/external-load-boards/jbhunt-logo.svg":
/*!**********************************************************************!*\
  !*** ./resources/assets/images/external-load-boards/jbhunt-logo.svg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/jbhunt-logo.svg?ac7a051f775727d3578820f9ea644396";

/***/ }),

/***/ "./resources/assets/images/external-load-boards/truckstop-logo.svg":
/*!*************************************************************************!*\
  !*** ./resources/assets/images/external-load-boards/truckstop-logo.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/truckstop-logo.svg?0f0c3ddf010aca617886353339ba36d3";

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

/***/ "./resources/js/src/views/pages/loads-matching/LoadsMatching.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/LoadsMatching.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadsMatching_vue_vue_type_template_id_6a5cc3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadsMatching.vue?vue&type=template&id=6a5cc3ad& */ "./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=template&id=6a5cc3ad&");
/* harmony import */ var _LoadsMatching_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadsMatching.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadsMatching_vue_vue_type_style_index_0_id_6a5cc3ad_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss& */ "./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadsMatching_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadsMatching_vue_vue_type_template_id_6a5cc3ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadsMatching_vue_vue_type_template_id_6a5cc3ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/loads-matching/LoadsMatching.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadsMatching.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_style_index_0_id_6a5cc3ad_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=style&index=0&id=6a5cc3ad&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_style_index_0_id_6a5cc3ad_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_style_index_0_id_6a5cc3ad_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_style_index_0_id_6a5cc3ad_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_style_index_0_id_6a5cc3ad_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=template&id=6a5cc3ad&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=template&id=6a5cc3ad& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_template_id_6a5cc3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadsMatching.vue?vue&type=template&id=6a5cc3ad& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/LoadsMatching.vue?vue&type=template&id=6a5cc3ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_template_id_6a5cc3ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadsMatching_vue_vue_type_template_id_6a5cc3ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/LoadCard.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/LoadCard.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadCard_vue_vue_type_template_id_91fbf49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadCard.vue?vue&type=template&id=91fbf49c& */ "./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=template&id=91fbf49c&");
/* harmony import */ var _LoadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadCard_vue_vue_type_style_index_0_id_91fbf49c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss& */ "./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadCard_vue_vue_type_template_id_91fbf49c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadCard_vue_vue_type_template_id_91fbf49c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/loads-matching/components/LoadCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_91fbf49c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=style&index=0&id=91fbf49c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_91fbf49c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_91fbf49c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_91fbf49c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_style_index_0_id_91fbf49c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=template&id=91fbf49c&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=template&id=91fbf49c& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_template_id_91fbf49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadCard.vue?vue&type=template&id=91fbf49c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/LoadCard.vue?vue&type=template&id=91fbf49c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_template_id_91fbf49c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadCard_vue_vue_type_template_id_91fbf49c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReloadInfo_vue_vue_type_template_id_44f5cdfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReloadInfo.vue?vue&type=template&id=44f5cdfa& */ "./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=template&id=44f5cdfa&");
/* harmony import */ var _ReloadInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReloadInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReloadInfo_vue_vue_type_style_index_0_id_44f5cdfa_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss& */ "./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReloadInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReloadInfo_vue_vue_type_template_id_44f5cdfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReloadInfo_vue_vue_type_template_id_44f5cdfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReloadInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_style_index_0_id_44f5cdfa_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=style&index=0&id=44f5cdfa&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_style_index_0_id_44f5cdfa_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_style_index_0_id_44f5cdfa_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_style_index_0_id_44f5cdfa_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_style_index_0_id_44f5cdfa_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=template&id=44f5cdfa&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=template&id=44f5cdfa& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_template_id_44f5cdfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReloadInfo.vue?vue&type=template&id=44f5cdfa& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/ReloadInfo.vue?vue&type=template&id=44f5cdfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_template_id_44f5cdfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadInfo_vue_vue_type_template_id_44f5cdfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchPopup_vue_vue_type_template_id_d84d8e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPopup.vue?vue&type=template&id=d84d8e10& */ "./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=template&id=d84d8e10&");
/* harmony import */ var _SearchPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchPopup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchPopup_vue_vue_type_style_index_0_id_d84d8e10_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss& */ "./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchPopup_vue_vue_type_template_id_d84d8e10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchPopup_vue_vue_type_template_id_d84d8e10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/loads-matching/components/SearchPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_style_index_0_id_d84d8e10_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=style&index=0&id=d84d8e10&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_style_index_0_id_d84d8e10_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_style_index_0_id_d84d8e10_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_style_index_0_id_d84d8e10_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_style_index_0_id_d84d8e10_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=template&id=d84d8e10&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=template&id=d84d8e10& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_template_id_d84d8e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPopup.vue?vue&type=template&id=d84d8e10& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/SearchPopup.vue?vue&type=template&id=d84d8e10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_template_id_d84d8e10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPopup_vue_vue_type_template_id_d84d8e10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/TruckCard.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/TruckCard.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TruckCard_vue_vue_type_template_id_107ecaba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckCard.vue?vue&type=template&id=107ecaba& */ "./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=template&id=107ecaba&");
/* harmony import */ var _TruckCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TruckCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TruckCard_vue_vue_type_style_index_0_id_107ecaba_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss& */ "./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TruckCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TruckCard_vue_vue_type_template_id_107ecaba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TruckCard_vue_vue_type_template_id_107ecaba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/loads-matching/components/TruckCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_style_index_0_id_107ecaba_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=style&index=0&id=107ecaba&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_style_index_0_id_107ecaba_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_style_index_0_id_107ecaba_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_style_index_0_id_107ecaba_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_style_index_0_id_107ecaba_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=template&id=107ecaba&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=template&id=107ecaba& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_template_id_107ecaba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckCard.vue?vue&type=template&id=107ecaba& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckCard.vue?vue&type=template&id=107ecaba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_template_id_107ecaba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckCard_vue_vue_type_template_id_107ecaba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TruckLoadsList_vue_vue_type_template_id_3aeaf388___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckLoadsList.vue?vue&type=template&id=3aeaf388& */ "./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=template&id=3aeaf388&");
/* harmony import */ var _TruckLoadsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TruckLoadsList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TruckLoadsList_vue_vue_type_style_index_0_id_3aeaf388_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss& */ "./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TruckLoadsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TruckLoadsList_vue_vue_type_template_id_3aeaf388___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TruckLoadsList_vue_vue_type_template_id_3aeaf388___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckLoadsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_style_index_0_id_3aeaf388_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=style&index=0&id=3aeaf388&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_style_index_0_id_3aeaf388_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_style_index_0_id_3aeaf388_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_style_index_0_id_3aeaf388_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_style_index_0_id_3aeaf388_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=template&id=3aeaf388&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=template&id=3aeaf388& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_template_id_3aeaf388___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TruckLoadsList.vue?vue&type=template&id=3aeaf388& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/loads-matching/components/TruckLoadsList.vue?vue&type=template&id=3aeaf388&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_template_id_3aeaf388___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TruckLoadsList_vue_vue_type_template_id_3aeaf388___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=27.js.map