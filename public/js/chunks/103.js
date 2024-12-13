(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _mixins_globalMixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/globalMixins */ "./resources/js/src/mixins/globalMixins.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    popupActive: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  components: {
    CsvUpload: function CsvUpload() {
      return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! @/components/custom/CsvUpload.vue */ "./resources/js/src/components/custom/CsvUpload.vue"));
    }
  },
  data: function data() {
    return {
      currentStep: 1,
      csvColTypes: [{
        label: 'Reference Number',
        value: 'reference'
      }, {
        label: 'Fuel Surcharge',
        value: 'fuelSurcharge'
      }],
      uploadedFuelSurcharges: []
    };
  },
  mixins: [_mixins_globalMixins__WEBPACK_IMPORTED_MODULE_3__["default"]],
  computed: {
    togglePopup: {
      get: function get() {
        return this.popupActive;
      },
      set: function set(val) {
        if (!val) {
          this.closePopup();
        }
      }
    },
    isImportFcBtnDisabled: function isImportFcBtnDisabled() {
      return !this.uploadedFuelSurcharges.length;
    }
  },
  methods: {
    setCurrentStep: function setCurrentStep(step) {
      this.currentStep = step;
    },
    closePopup: function closePopup() {
      this.$emit('onClose');
      this.setCurrentStep(1);
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.uploadedFuelSurcharges = [];
    },
    updateSelectedFuelSurcharges: function updateSelectedFuelSurcharges(fuelSurcharges) {
      if (fuelSurcharges) {
        var clonnedFuelSurcharges = structuredClone(fuelSurcharges); // checking if fuel surcharge and load reference has multiple values

        var allowedColTypes = this.csvColTypes.map(function (_ref) {
          var value = _ref.value;
          return value;
        });
        this.uploadedFuelSurcharges = this.uploadedFuelSurcharges.filter(function (_ref2) {
          var id = _ref2.id;
          return id !== clonnedFuelSurcharges.id;
        });

        if (allowedColTypes.includes(fuelSurcharges.colType)) {
          this.uploadedFuelSurcharges.push(clonnedFuelSurcharges);
        }
      } else {
        this.uploadedFuelSurcharges = [];
      }
    },
    handleSubmit: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var references, fuelSurcharges, hasErrorInReference, hasErrorInFc, hasInvalidValue, loads, payload, response, notFoundLoads, failedUploadedLoads;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                references = this.uploadedFuelSurcharges.find(function (item) {
                  return item.colType === 'reference';
                });
                fuelSurcharges = this.uploadedFuelSurcharges.find(function (item) {
                  return item.colType === 'fuelSurcharge';
                });

                if (!(!references || !fuelSurcharges)) {
                  _context.next = 6;
                  break;
                }

                this.showErrorMessage("Please select column for ".concat(!references ? 'Reference Number' : 'Fuel Surcharges', "."));
                return _context.abrupt("return");

              case 6:
                // convert amount in to number
                fuelSurcharges.colData = fuelSurcharges.colData.map(function (value) {
                  return value;
                });
                hasErrorInReference = references.colData.some(function (item) {
                  return !item && item != 0 || item && item.includes(',');
                });
                hasErrorInFc = fuelSurcharges.colData.some(function (item) {
                  return !item && item != 0 || typeof item === 'string' && item.includes(',') || isNaN(item);
                });

                if (!(hasErrorInReference || hasErrorInFc)) {
                  _context.next = 12;
                  break;
                }

                this.showErrorMessage("Invalid values found in ".concat(hasErrorInReference ? 'Reference Number' : 'Fuel Surcharges', ". Make sure all values are valid in ").concat(hasErrorInReference ? 'Reference Number' : 'Fuel Surcharges'));
                return _context.abrupt("return");

              case 12:
                // checking if fuelSurcharge has greater value than 9999.99 or less than -9999.99;
                hasInvalidValue = fuelSurcharges.colData.some(function (item) {
                  return Number(item) < -9999.99 || item > 9999.99;
                });

                if (!hasInvalidValue) {
                  _context.next = 16;
                  break;
                }

                this.showErrorMessage('Fuel surcharge should be less than 9999.99 and greater than -9999.99.');
                return _context.abrupt("return");

              case 16:
                loads = references.colData.map(function (reference, index) {
                  return {
                    reference: reference,
                    fuelSurcharge: fuelSurcharges.colData[index]
                  };
                });
                payload = {
                  customerId: this.user.admin_company_detail_id == 286 ? 35151 : 2167,
                  loads: loads
                };
                this.$vs.loading();
                _context.next = 21;
                return this.$store.dispatch('report/importFuelSurcharge', payload);

              case 21:
                response = _context.sent;
                notFoundLoads = [];
                failedUploadedLoads = [];
                response.loads.filter(function (load, index) {
                  if (!load.id) {
                    notFoundLoads.push(loads[index].reference);
                  } else if (!load.result) {
                    failedUploadedLoads.push(loads[index].reference);
                  }
                });

                if (failedUploadedLoads.length || notFoundLoads.length) {
                  this.$emit('showFailedLoadsPopup', notFoundLoads, failedUploadedLoads);
                } else {
                  this.showSuccessMessage('Fuel surcharges imported successfully');
                }

                this.closePopup();
                _context.next = 32;
                break;

              case 29:
                _context.prev = 29;
                _context.t0 = _context["catch"](0);
                this.showErrorMessage(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_2__["getApiErrorMsg"])(_context.t0));

              case 32:
                _context.prev = 32;
                this.$vs.loading.close();
                return _context.finish(32);

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 29, 32, 35]]);
      }));

      return function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCustomReport_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AddCustomReport.vue */ "./resources/js/src/views/pages/report/AddCustomReport.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AddCustomReport: _AddCustomReport_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: 'FuelSurcharges',
  data: function data() {
    return {
      popupActive: false,
      failedLoadsPopup: false,
      notFoundLoads: [],
      failedToUploadLoads: []
    };
  },
  methods: {
    toggleFuelPopup: function toggleFuelPopup(value) {
      this.popupActive = value;
    },
    showFailedLoadsPopup: function showFailedLoadsPopup(notFoundLoads, failedToUploadLoads) {
      this.failedLoadsPopup = true;
      this.notFoundLoads = notFoundLoads;
      this.failedToUploadLoads = failedToUploadLoads;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=template&id=872ab400&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=template&id=872ab400&scoped=true& ***!
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

  return _c("vs-popup", {
    attrs: {
      active: _vm.togglePopup,
      title: ""
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.togglePopup = $event;
      }
    }
  }, [[_c("div", [_c("div", {
    staticClass: "w-full"
  }, [_vm.currentStep === 1 ? [_c("div", {
    staticClass: "vs-row w-full",
    on: {
      click: function click($event) {
        return _vm.setCurrentStep(2);
      }
    }
  }, [_c("div", {
    staticClass: "option-wrap"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("div", {
    staticClass: "iconType pr-4"
  }, [_c("svg", {
    staticStyle: {
      color: "rgb(101, 217, 165)"
    },
    attrs: {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 384 512",
      color: "#65d9a5",
      height: "40px",
      width: "40px",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-96 144c0 4.42-3.58 8-8 8h-8c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h8c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-8c-26.51 0-48-21.49-48-48v-32c0-26.51 21.49-48 48-48h8c4.42 0 8 3.58 8 8v16zm44.27 104H160c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h12.27c5.95 0 10.41-3.5 10.41-6.62 0-1.3-.75-2.66-2.12-3.84l-21.89-18.77c-8.47-7.22-13.33-17.48-13.33-28.14 0-21.3 19.02-38.62 42.41-38.62H200c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-12.27c-5.95 0-10.41 3.5-10.41 6.62 0 1.3.75 2.66 2.12 3.84l21.89 18.77c8.47 7.22 13.33 17.48 13.33 28.14.01 21.29-19 38.62-42.39 38.62zM256 264v20.8c0 20.27 5.7 40.17 16 56.88 10.3-16.7 16-36.61 16-56.88V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v20.8c0 35.48-12.88 68.89-36.28 94.09-3.02 3.25-7.27 5.11-11.72 5.11s-8.7-1.86-11.72-5.11c-23.4-25.2-36.28-58.61-36.28-94.09V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zm121-159L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "txtType"
  }, [_c("p", [_vm._v("UPLOAD")]), _vm._v(" "), _c("h3", [_vm._v("Excel/CSV")])])])])])] : _vm._e(), _vm._v(" "), _vm.currentStep === 2 ? [_c("div", {
    staticClass: "flex items-center mt-2 mb-4 header",
    on: {
      click: function click($event) {
        return _vm.setCurrentStep(1);
      }
    }
  }, [_c("svg", {
    staticClass: "feather feather-chevron-left fea text-dark icon-xs cursor-pointer",
    staticStyle: {
      "stroke-width": "3px",
      "margin-top": "-2px"
    },
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("g", [_c("polyline", {
    attrs: {
      points: "15 18 9 12 15 6"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "text-muted pb-1 cursor-pointer"
  }, [_vm._v(" Back ")])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("CsvUpload", {
    attrs: {
      colTypes: _vm.csvColTypes,
      maxRows: 500,
      checkDuplicates: ""
    },
    on: {
      updateCsvData: _vm.updateSelectedFuelSurcharges
    }
  })] : _vm._e()], 2)])], _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-between mt-5 footer"
  }, [_c("vs-button", {
    attrs: {
      type: "border"
    },
    on: {
      click: function click($event) {
        return _vm.closePopup();
      }
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _vm.currentStep === 2 ? _c("vs-button", {
    attrs: {
      disabled: _vm.isImportFcBtnDisabled
    },
    on: {
      click: _vm.handleSubmit
    }
  }, [_vm._v("\n      Import Fuel Surcharges\n    ")]) : _vm._e()], 1)], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=template&id=b43d6a50&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=template&id=b43d6a50& ***!
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

  return _c("div", [_c("div", {
    staticClass: "text-right my-4"
  }, [_c("vs-button", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.toggleFuelPopup(true);
      }
    }
  }, [_vm._v("\n      Import Fuel Surcharges\n    ")])], 1), _vm._v(" "), _c("add-custom-report", {
    attrs: {
      "popup-active": _vm.popupActive
    },
    on: {
      onClose: function onClose($event) {
        return _vm.toggleFuelPopup(false);
      },
      showFailedLoadsPopup: _vm.showFailedLoadsPopup
    }
  }), _vm._v(" "), _c("vs-popup", {
    staticClass: "failed-loads-popup",
    attrs: {
      active: _vm.failedLoadsPopup,
      title: "Bulk Upload Error"
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.failedLoadsPopup = $event;
      }
    }
  }, [_c("ul", {
    staticClass: "pt-4 pb-10"
  }, [_vm.notFoundLoads.length ? _c("li", {
    staticClass: "mb-5"
  }, [_vm._v("\n        Following loads were not found: " + _vm._s(_vm.notFoundLoads.join(", ")) + "\n      ")]) : _vm._e(), _vm._v(" "), _vm.failedToUploadLoads.length ? _c("li", [_vm._v("\n        Following loads failed to update: " + _vm._s(_vm.failedToUploadLoads.join(", ")) + "\n      ")]) : _vm._e()])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-872ab400] .vs-popup--header {\n  display: none;\n}\n.option-wrap[data-v-872ab400] {\n  transition: box-shadow 0.5s ease 0s;\n}\n[dir] .option-wrap[data-v-872ab400] {\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.06) 0px 2px 12px;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 25px;\n}\n[dir=ltr] .option-wrap .txtType[data-v-872ab400] {\n  border-left: 1px solid rgb(189, 189, 189);\n  padding-left: 15px;\n}\n[dir=rtl] .option-wrap .txtType[data-v-872ab400] {\n  border-right: 1px solid rgb(189, 189, 189);\n  padding-right: 15px;\n}\n.option-wrap .txtType p[data-v-872ab400] {\n  text-transform: uppercase;\n  font-size: 14px;\n}\n[dir] .option-wrap .txtType p[data-v-872ab400] {\n  margin-bottom: 7px;\n}\n.option-wrap .txtType h3[data-v-872ab400] {\n  color: rgb(60, 60, 60);\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n[dir] .option-wrap .txtType h3[data-v-872ab400] {\n  margin: 0px;\n}\n[dir] .option-wrap[data-v-872ab400]:hover {\n  box-shadow: rgba(0, 0, 0, 0.176) 0px 1rem 3rem;\n  border: 2px solid rgb(60, 60, 60);\n}\n.footer[data-v-872ab400] {\n  position: sticky;\n  bottom: 0;\n  z-index: 1;\n}\n[dir] .footer[data-v-872ab400] {\n  background-color: #fff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss&");

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

/***/ "./resources/js/src/mixins/globalMixins.js":
/*!*************************************************!*\
  !*** ./resources/js/src/mixins/globalMixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    showErrorMessage: function showErrorMessage(message) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8000;
      this.$vs.notify({
        time: time,
        color: 'danger',
        title: 'Error',
        text: message
      });
    },
    showSuccessMessage: function showSuccessMessage(message) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
      this.$vs.notify({
        time: time,
        color: 'primary',
        title: 'Success',
        text: message
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/report/AddCustomReport.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/pages/report/AddCustomReport.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCustomReport_vue_vue_type_template_id_872ab400_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCustomReport.vue?vue&type=template&id=872ab400&scoped=true& */ "./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=template&id=872ab400&scoped=true&");
/* harmony import */ var _AddCustomReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCustomReport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddCustomReport_vue_vue_type_style_index_0_id_872ab400_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss& */ "./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddCustomReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCustomReport_vue_vue_type_template_id_872ab400_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCustomReport_vue_vue_type_template_id_872ab400_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "872ab400",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/AddCustomReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_style_index_0_id_872ab400_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=style&index=0&id=872ab400&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_style_index_0_id_872ab400_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_style_index_0_id_872ab400_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_style_index_0_id_872ab400_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_style_index_0_id_872ab400_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=template&id=872ab400&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=template&id=872ab400&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_template_id_872ab400_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomReport.vue?vue&type=template&id=872ab400&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/AddCustomReport.vue?vue&type=template&id=872ab400&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_template_id_872ab400_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomReport_vue_vue_type_template_id_872ab400_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/components/FuelSurcharges.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/FuelSurcharges.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FuelSurcharges_vue_vue_type_template_id_b43d6a50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FuelSurcharges.vue?vue&type=template&id=b43d6a50& */ "./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=template&id=b43d6a50&");
/* harmony import */ var _FuelSurcharges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FuelSurcharges.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FuelSurcharges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FuelSurcharges_vue_vue_type_template_id_b43d6a50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FuelSurcharges_vue_vue_type_template_id_b43d6a50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/components/FuelSurcharges.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelSurcharges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FuelSurcharges.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelSurcharges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=template&id=b43d6a50&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=template&id=b43d6a50& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelSurcharges_vue_vue_type_template_id_b43d6a50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FuelSurcharges.vue?vue&type=template&id=b43d6a50& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/FuelSurcharges.vue?vue&type=template&id=b43d6a50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelSurcharges_vue_vue_type_template_id_b43d6a50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FuelSurcharges_vue_vue_type_template_id_b43d6a50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=103.js.map