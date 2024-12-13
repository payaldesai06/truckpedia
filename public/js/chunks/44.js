(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DirectionsRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DirectionsRenderer */ "./resources/js/src/views/pages/calender/components/DirectionsRenderer.js");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LoadInfo",
  props: ["data"],
  components: {
    DirectionsRenderer: _DirectionsRenderer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.$route.name === "share") {
                this.payload[0].load_id = this.$route.params.id;
                this.getShareData();
              }

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
  data: function data() {
    return {
      active: true,
      make_private_show: true,
      fullscreen: false,
      url: null,
      toggleDropdown: false,
      chips: [],
      currentInput: "",
      origin: null,
      destination: null,
      waypnt: [],
      payload: [{
        load_id: null,
        load_unique_id: "",
        //"n/a",
        load_reference: "",
        //"n/a",
        load_status: "",
        //"invoice_paid",
        shippers: [{
          shipper_id: 1,
          shipper_name: "",
          //"Schoen Group",
          shipping_date: "",
          //"2021-05-03",
          shipping_time: "",
          latitude: "",
          //33.9628906,
          longitude: "" //-118.0825548, //"10:00:00"

        }],
        receivers: [{
          receiver_id: 1,
          receiver_name: "",
          //"Schoen Group",
          delivery_date: "",
          //"2021-05-14",
          delivery_time: "",
          //"15:30:00",
          latitude: "",
          //33.9628906,
          longitude: "" //-118.0825548,

        }],
        drivers: [{
          driver_id: 1,
          name: "",
          //"Parth",
          phone_number: "" //"8414915994"

        }],
        vehicles: [{
          truck_id: 1,
          truck_number: "",
          //"Truck 601",
          trailer_id: 1,
          trailer_number: "",
          //"Trailer 101",
          location: {
            latitude: "",
            //33.9628906,
            longitude: "",
            //-118.0825548,
            heading_degrees: 0,
            formatted_location: "" //"11035 Enterprise Avenue, Santa Fe Springs, CA, 90670"

          }
        }]
      }],
      drivers: [],
      truck: [],
      center: {
        lat: 34.052235,
        lng: -118.243683
      },
      selected_truck: null,
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        content: "",
        maxWidth: 200,
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  methods: {
    getData: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        var filter, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.$vs.loading();
                filter = {
                  load_id: this.data.loadId
                };
                _context2.next = 5;
                return this.$store.dispatch("calendar/getAllTrackingsLoadDetail", filter);

              case 5:
                data = _context2.sent;
                this.payload = data;
                this.$emit("setPayloadData", this.payload);
                this.setOnMap();
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 14:
                _context2.prev = 14;
                this.$vs.loading.close();
                return _context2.finish(14);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11, 14, 17]]);
      }));

      return function getData() {
        return _getData.apply(this, arguments);
      };
    }(),
    translateStatusToOutSiders: function translateStatusToOutSiders(status) {
      switch (status) {
        case "open":
          return "Open";

        case "assign":
          return "Dispatched";

        case "in_transit":
          return "In Transit";

        case "delivered":
          return "Delivered";

        default:
          return "Completed";
      }
    },
    setOnMap: function setOnMap() {
      var _this = this;

      this.truck = [];

      if (this.payload[0].vehicles && this.payload[0].vehicles.length > 0 //&&
      //this.payload[0].vehicles[0].location.latitude
      ) {
          for (var i = 0; i < this.payload[0].vehicles.length; ++i) {
            if (this.payload[0].vehicles[i].location.latitude) {
              this.center = {
                lat: this.payload[0].vehicles[0].location.latitude,
                lng: this.payload[0].vehicles[0].location.longitude
              };
              break;
            }
          }

          this.payload[0].vehicles.map(function (vehicles) {
            var position = {
              lat: vehicles.location.latitude,
              lng: vehicles.location.longitude
            };

            if (position.lat && position.lng) {
              var infoContent = "<div><div class=\"mt-2 space-y-1\">\n                  <div>\n                  <b>truck number: </b>\n                    ".concat(vehicles.truck_number, "\n                  </div>\n                  <div>\n                   <b>trailer number: </b>\n                    ").concat(vehicles.trailer_number, "\n                  </div>\n                   <div>\n                   <b>location: </b>\n                    ").concat(vehicles.location.formatted_location, "\n                  </div>\n                </div>");

              _this.truck.push({
                position: position,
                infoContent: infoContent,
                truck_id: vehicles ? vehicles.truck_id : ""
              });
            }
          });
        } // In case they don't have Samsara or Motive, we use driver location from mobile app.


      if (this.truck.length == 0 && this.payload[0].drivers && this.payload[0].drivers.length > 0) {
        for (var _i = 0; _i < this.payload[0].drivers.length; ++_i) {
          if (this.payload[0].drivers[_i].latitude) {
            this.center = {
              lat: this.payload[0].drivers[_i].latitude,
              lng: this.payload[0].drivers[_i].longitude
            };
            break;
          }
        }

        this.payload[0].drivers.map(function (driver) {
          var position = {
            lat: driver.latitude,
            lng: driver.longitude
          };

          if (position.lat && position.lng) {
            var infoContent = "<div><div class=\"mt-2 space-y-1\">\n                  <div>\n                  <b>driver name: </b>\n                    ".concat(driver.name, "\n                  </div>\n                </div>");

            _this.truck.push({
              position: position,
              infoContent: infoContent,
              truck_id: ""
            });
          }
        });
      }

      this.waypnt = [];
      this.origin = {
        lat: this.payload[0].shippers[0].latitude,
        lng: this.payload[0].shippers[0].longitude
      };
      this.destination = {
        lat: this.payload[0].receivers[this.payload[0].receivers.length - 1].latitude,
        lng: this.payload[0].receivers[this.payload[0].receivers.length - 1].longitude
      };

      if (this.payload[0].shippers.length > 1) {
        this.payload[0].shippers.slice(1).map(function (val) {
          _this.waypnt.push({
            location: {
              lat: val.latitude,
              lng: val.longitude
            },
            stopover: true
          });
        });
      }

      if (this.payload[0].receivers.length > 1) {
        this.payload[0].receivers.slice(0, -1).map(function (val) {
          _this.waypnt.push({
            location: {
              lat: val.latitude,
              lng: val.longitude
            },
            stopover: true
          });
        });
      }
    },
    getShareData: function () {
      var _getShareData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
        var filter, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.$vs.loading();
                filter = {
                  load_id: this.payload[0].load_id
                };
                _context3.next = 5;
                return this.$store.dispatch("calendar/getshareLinkDetails", filter);

              case 5:
                data = _context3.sent;

                if (!data.data.result) {
                  this.active = false;
                } else {
                  this.active = true;
                  this.payload = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data.data.payload));
                  this.setOnMap();
                }

                _context3.next = 11;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);

              case 11:
                _context3.prev = 11;
                this.$vs.loading.close();
                return _context3.finish(11);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9, 11, 14]]);
      }));

      return function getShareData() {
        return _getShareData.apply(this, arguments);
      };
    }(),
    toggleInfoWindow: function toggleInfoWindow(truck, truck_id) {
      this.infoWindowPos = truck.position;
      this.infoOptions.content = truck.infoContent; //check if its the same marker that was selected if yes toggle

      if (this.selected_truck && this.selected_truck.truck_id == truck_id) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        // if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true;
        this.selected_truck = truck;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=template&id=13ad414d&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=template&id=13ad414d& ***!
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

  return _c("vs-row", {
    staticClass: "p-6",
    attrs: {
      "vs-w": "12"
    }
  }, [_vm._l(_vm.payload[0].vehicles, function (truck) {
    return _c("vs-row", {
      key: truck.truck_number,
      attrs: {
        "vs-w": "12"
      }
    }, [_c("vs-col", {
      staticClass: "fristList padding-margin",
      attrs: {
        "vs-w": "6"
      }
    }, [_c("span", {
      staticClass: "listSpan"
    }, [_vm._v("Truck:")]), _vm._v("\n      " + _vm._s(truck ? truck.truck_number : "n/a") + "\n    ")]), _vm._v(" "), _c("vs-col", {
      staticClass: "fristList margin-x",
      attrs: {
        "vs-w": "5"
      }
    }, [_c("span", {
      staticClass: "listSpan"
    }, [_vm._v("Trailer:")]), _vm._v("\n      " + _vm._s(truck ? truck.trailer_number : "n/a") + "\n    ")])], 1);
  }), _vm._v(" "), _c("vs-row", {
    staticClass: "mt-5",
    attrs: {
      "vs-w": "12"
    }
  }, [_c("vs-col", {
    staticClass: "list padding-margin flex",
    attrs: {
      "vs-w": "12"
    }
  }, [_c("div", {
    staticClass: "fixed-width"
  }, [_c("span", {
    staticClass: "listSpan"
  }, [_vm._v("Driver: ")])]), _vm._v(" "), _vm._l(_vm.payload[0].drivers, function (driver, index) {
    return _c("span", {
      key: driver.driver_id,
      staticClass: "font-bold"
    }, [_vm._v("\n        " + _vm._s(driver ? driver.name : "n/a") + _vm._s(index < _vm.payload[0].drivers.length - 1 ? ", " : "") + "\n      ")]);
  })], 2)], 1), _vm._v(" "), _c("vs-row", {
    attrs: {
      "vs-w": "12"
    }
  }, [_c("vs-col", {
    staticClass: "list padding-margin flex",
    attrs: {
      "vs-w": "6"
    }
  }, [_c("div", {
    staticClass: "fixed-width"
  }, [_c("span", {
    staticClass: "listSpan"
  }, [_vm._v("Load #: ")])]), _vm._v(" "), _c("b", [_vm._v(_vm._s(_vm.payload[0].load_unique_id ? _vm.payload[0].load_unique_id : "n/a"))])]), _vm._v(" "), _c("vs-col", {
    staticClass: "otherList margin-x flex",
    attrs: {
      "vs-w": "5"
    }
  }, [_c("div", {
    staticClass: "fixed-width"
  }, [_c("span", {
    staticClass: "listSpan"
  }, [_vm._v("Reference #: ")])]), _vm._v(" "), _c("b", [_vm._v(_vm._s(_vm.payload[0].load_reference ? _vm.payload[0].load_reference : "n/a"))])])], 1), _vm._v(" "), _c("vs-row", {
    attrs: {
      "vs-w": "12"
    }
  }, [_c("vs-col", {
    staticClass: "list padding-margin flex",
    attrs: {
      "vs-w": "6"
    }
  }, [_c("div", {
    staticClass: "fixed-width"
  }, [_c("span", {
    staticClass: "listSpan"
  }, [_vm._v("Current location: ")])]), _vm._v(" "), _c("b", {
    staticStyle: {
      width: "300px"
    }
  }, [_vm._v(_vm._s(!_vm.payload[0].vehicles[0] ? "n/a" : _vm.payload[0].vehicles[0].location.formatted_location))])]), _vm._v(" "), this.$route.name == "share" ? _c("vs-col", {
    staticClass: "otherList margin-x flex",
    attrs: {
      "vs-w": "5"
    }
  }, [_c("div", {
    staticClass: "fixed-width"
  }, [_c("span", {
    staticClass: "listSpan"
  }, [_vm._v("Status: ")])]), _vm._v(" "), _c("b", [_vm._v(_vm._s(_vm.payload[0].load_status ? _vm.translateStatusToOutSiders(_vm.payload[0].load_status) : "n/a"))])]) : _vm._e()], 1), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _vm._l(_vm.payload[0].shippers, function (items, index) {
    return _c("vs-row", {
      key: items.shipper_id,
      attrs: {
        "vs-w": "12"
      }
    }, [_c("vs-col", {
      staticClass: "list padding-margin flex",
      attrs: {
        "vs-w": "6"
      }
    }, [_c("div", {
      staticClass: "fixed-width"
    }, [_c("span", {
      staticClass: "listSpan"
    }, [_vm._v("Origin " + _vm._s(++index) + ":")])]), _vm._v(" "), _c("b", [_vm._v("\n        " + _vm._s(!items.shipper_name ? "n/a" : items.shipper_name) + "\n        -\n        " + _vm._s(!items.city ? "n/a" : items.city) + ",\n        " + _vm._s(!items.state ? "n/a" : items.state) + "\n      ")])]), _vm._v(" "), _c("vs-col", {
      staticClass: "otherList margin-x flex",
      attrs: {
        "vs-w": "6"
      }
    }, [_c("div", {
      staticClass: "fixed-width"
    }, [_c("span", {
      staticClass: "listSpan"
    }, [_vm._v("Appt time " + _vm._s(index) + ": ")])]), _vm._v(" "), _c("b", [_vm._v("\n        " + _vm._s(items.shipping_date ? items.shipping_date.replace(/-/g, "/") : "n/a") + "\n         " + _vm._s(items.shipping_time ? items.shipping_time.replace(/:/g, ":") : " ") + "\n      ")])])], 1);
  }), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _vm._l(_vm.payload[0].receivers, function (items, index) {
    return _c("vs-row", {
      key: "a" + items.receiver_id,
      attrs: {
        "vs-w": "12"
      }
    }, [_c("vs-col", {
      staticClass: "list padding-margin flex",
      attrs: {
        "vs-w": "6"
      }
    }, [_c("div", {
      staticClass: "fixed-width"
    }, [_c("span", {
      staticClass: "listSpan"
    }, [_vm._v("Destination " + _vm._s(++index) + ": ")])]), _vm._v(" "), _c("b", [_vm._v("\n        " + _vm._s(!items.receiver_name ? "n/a" : items.receiver_name) + "\n        -\n        " + _vm._s(!items.city ? "n/a" : items.city) + ",\n        " + _vm._s(!items.state ? "n/a" : items.state) + "\n      ")])]), _vm._v(" "), _c("vs-col", {
      staticClass: "otherList margin-x flex",
      attrs: {
        "vs-w": "6"
      }
    }, [_c("div", {
      staticClass: "fixed-width"
    }, [_c("span", {
      staticClass: "listSpan"
    }, [_vm._v("Appt time " + _vm._s(index) + ": ")])]), _vm._v(" "), _c("b", [_vm._v("\n        " + _vm._s(!items.delivery_date ? "n/a" : items.delivery_date.replace(/-/g, "/")) + "\n         " + _vm._s(items.delivery_time ? items.delivery_time.replace(/:/g, ":") : "") + "\n      ")])])], 1);
  }), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    attrs: {
      id: "popup-map"
    }
  }, [_c("GmapMap", {
    ref: "mapRef",
    staticClass: "h-full w-full",
    attrs: {
      center: _vm.center,
      zoom: 10
    }
  }, [_c("DirectionsRenderer", {
    attrs: {
      travelMode: "DRIVING",
      origin: _vm.origin,
      waypoints: _vm.waypnt,
      destination: _vm.destination,
      optimizeWaypoints: false
    }
  }), _vm._v(" "), _c("gmap-info-window", {
    attrs: {
      options: _vm.infoOptions,
      position: _vm.infoWindowPos,
      opened: _vm.infoWinOpen
    },
    on: {
      closeclick: function closeclick($event) {
        _vm.infoWinOpen = false;
      }
    }
  }), _vm._v(" "), _vm._l(_vm.truck, function (truck, index) {
    return _c("gmap-marker", {
      key: index,
      attrs: {
        position: truck.position,
        clickable: true
      },
      on: {
        click: function click($event) {
          return _vm.toggleInfoWindow(truck, truck.truck_id);
        }
      }
    });
  })], 2)], 1)], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebarx {\n  overflow: auto !important;\n}\n.vs-sidebar .vs-sidebar--items {\n  overflow: auto !important;\n}\n#popup-map {\n  height: 32rem;\n  width: 100%;\n}\n.listSpan {\n  font-weight: 300;\n  min-width: 95px;\n  max-width: 200px;\n  color: #000;\n}\n.fristList {\n  font-weight: 900;\n  line-height: 1.8rem;\n  font-size: 15px;\n}\n[dir=ltr] .fristList {\n  margin-left: 1rem;\n}\n[dir=rtl] .fristList {\n  margin-right: 1rem;\n}\n.list {\n  font-size: 1rem;\n  table-layout: fixed;\n}\n[dir=ltr] .list {\n  margin-left: 1rem;\n}\n[dir=rtl] .list {\n  margin-right: 1rem;\n}\nword-wrap break-all {\n  word-break: normal;\n  overflow: hidden;\n}\n.otherList {\n  font-size: 1rem;\n}\n[dir=ltr] .otherList {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .otherList {\n  margin-right: 0.5rem;\n}\n.vs-icon {\n  vertical-align: middle;\n}\n[dir=ltr] .vs-icon {\n  margin-right: 0.5rem;\n}\n[dir=rtl] .vs-icon {\n  margin-left: 0.5rem;\n}\n.vs-dropdown-item-col {\n  line-height: 2rem;\n}\n.vs-sidebar-all {\n  max-width: 100%;\n  z-index: 52010;\n}\n.vs-sidebar {\n  max-width: 1100px;\n  z-index: 52010;\n}\n.con-vs-dropdown--menu {\n  z-index: 52010;\n}\n.vs-sidebar--background {\n  z-index: 52010;\n}\n.header-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n.header-sidebar h4 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n[dir=ltr] .header-sidebar h4 > button {\n  margin-left: 10px;\n}\n[dir=rtl] .header-sidebar h4 > button {\n  margin-right: 10px;\n}\n.footer-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n[dir] .footer-sidebar > button {\n  border: 0px solid rgba(0,0,0,0) !important;\n  border-radius: 0px !important;\n}\n[dir=ltr] .footer-sidebar > button {\n  border-left: 1px solid rgba(0,0,0,0.07) !important;\n}\n[dir=rtl] .footer-sidebar > button {\n  border-right: 1px solid rgba(0,0,0,0.07) !important;\n}\n.chip-container {\n  min-height: 34px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  max-height: 300px;\n  overflow: auto;\n}\n[dir] .chip-container {\n  padding: 7px;\n}\n.chip-container .chip {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n}\n[dir] .chip-container .chip {\n  margin: 2px;\n  background: #f0f0f0;\n  padding: 1px 15px;\n  border: 1px solid #ccc;\n  border-radius: 15px;\n}\n.chip-container .chip i {\n  opacity: 0.56;\n}\n[dir] .chip-container .chip i {\n  cursor: pointer;\n}\n[dir=ltr] .chip-container .chip i {\n  margin-left: 8px;\n}\n[dir=rtl] .chip-container .chip i {\n  margin-right: 8px;\n}\n.chip-container input {\n  flex: 1 1 auto;\n  width: 30px;\n  outline: none;\n}\n[dir] .chip-container input {\n  border: none;\n  padding: 8px;\n}\n.chip-container .material-icons {\n  font-size: 16px;\n}\n.collaborator-icon {\n  width: 43px;\n  height: 38px;\n}\n[dir] .collaborator-icon {\n  cursor: pointer;\n}\n.email-collaborator {\n  position: relative;\n  top: 3px;\n}\n[dir=ltr] .email-collaborator {\n  right: 3px;\n}\n[dir=rtl] .email-collaborator {\n  left: 3px;\n}\n.user-list-dropdown .con-chips {\n  justify-content: start !important;\n}\n[dir=ltr] .user-list-dropdown .vs-icon {\n  margin-right: 0;\n}\n[dir=rtl] .user-list-dropdown .vs-icon {\n  margin-left: 0;\n}\n[dir] .user-list-dropdown .con-chips .con-vs-chip {\n  margin: 0;\n}\n.user-list-dropdown {\n  position: absolute;\n  max-height: 400px;\n  min-width: 235px;\n  z-index: 1000;\n}\n[dir] .user-list-dropdown {\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.333);\n  background-color: #fff;\n}\n[dir=ltr] .user-list-dropdown {\n  right: 2px;\n}\n[dir=rtl] .user-list-dropdown {\n  left: 2px;\n}\n[dir] .padding-margin {\n  margin-top: 0.2rem;\n  margin-bottom: 0.2rem;\n}\n[dir=ltr] .padding-margin {\n  padding-left: 0.2rem;\n}\n[dir=rtl] .padding-margin {\n  padding-right: 0.2rem;\n}\n[dir] .margin-x {\n  margin-top: 0.2rem;\n  margin-bottom: 0.2rem;\n}\n.fixed-width {\n  width: 250px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../../node_modules/stylus-loader!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus&");

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

/***/ "./resources/js/src/views/pages/calender/components/LoadInfo.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/LoadInfo.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadInfo_vue_vue_type_template_id_13ad414d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadInfo.vue?vue&type=template&id=13ad414d& */ "./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=template&id=13ad414d&");
/* harmony import */ var _LoadInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadInfo_vue_vue_type_style_index_0_id_13ad414d_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus& */ "./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadInfo_vue_vue_type_template_id_13ad414d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadInfo_vue_vue_type_template_id_13ad414d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/calender/components/LoadInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_style_index_0_id_13ad414d_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--11-2!../../../../../../../node_modules/stylus-loader!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=style&index=0&id=13ad414d&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_style_index_0_id_13ad414d_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_style_index_0_id_13ad414d_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_style_index_0_id_13ad414d_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_style_index_0_id_13ad414d_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=template&id=13ad414d&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=template&id=13ad414d& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_template_id_13ad414d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadInfo.vue?vue&type=template&id=13ad414d& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/LoadInfo.vue?vue&type=template&id=13ad414d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_template_id_13ad414d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadInfo_vue_vue_type_template_id_13ad414d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=44.js.map