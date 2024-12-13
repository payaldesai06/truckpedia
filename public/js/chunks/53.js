(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IncidentsInfo',
  components: {
    IncidentOverviewTab: function IncidentOverviewTab() {
      return __webpack_require__.e(/*! import() */ 174).then(__webpack_require__.bind(null, /*! ./components/IncidentOverviewTab */ "./resources/js/src/views/pages/safety/components/IncidentOverviewTab.vue"));
    },
    IncidentSummaryCard: function IncidentSummaryCard() {
      return __webpack_require__.e(/*! import() */ 134).then(__webpack_require__.bind(null, /*! ./components/IncidentSummaryCard */ "./resources/js/src/views/pages/safety/components/IncidentSummaryCard.vue"));
    },
    IncidentEmailsTab: function IncidentEmailsTab() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(83)]).then(__webpack_require__.bind(null, /*! ./components/IncidentEmailsTab */ "./resources/js/src/views/pages/safety/components/IncidentEmailsTab.vue"));
    },
    IncidentFilesTab: function IncidentFilesTab() {
      return Promise.all(/*! import() */[__webpack_require__.e(25), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, /*! ./components/IncidentFilesTab */ "./resources/js/src/views/pages/safety/components/IncidentFilesTab.vue"));
    },
    IncidentNoteTab: function IncidentNoteTab() {
      return __webpack_require__.e(/*! import() */ 215).then(__webpack_require__.bind(null, /*! ./components/IncidentNoteTab */ "./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue"));
    }
  },
  computed: {
    chips: function chips() {
      var _this = this;

      var tabs = [{
        id: 1,
        label: 'Overview',
        component: 'IncidentOverviewTab'
      }, {
        id: 2,
        label: 'Emails',
        component: 'IncidentEmailsTab'
      }, {
        id: 3,
        label: 'Files',
        component: 'IncidentFilesTab'
      }, {
        id: 4,
        label: 'Notes',
        component: 'IncidentNoteTab'
      }];
      return tabs.filter(function (tab) {
        if (!_this.isEditMode) {
          return tab.id !== 2;
        }

        return tab;
      });
    },
    incidentInfoHeaderLabel: function incidentInfoHeaderLabel() {
      return this.isEditMode ? 'Update Incident' : 'Create Incident';
    },
    isEditMode: function isEditMode() {
      return this.$route.name === 'UpdateSafety';
    }
  },
  data: function data() {
    return {
      selectedTab: 1,
      incidentDetails: {
        tagId: null,
        incidentDate: null,
        incidentTime: null,
        status: null,
        closedDate: null,
        notes: null,
        incidentClaimNumber: null,
        thirdPartyIncidentClaimNumber: null,
        ncicNumber: null,
        savedAddressAffected: null,
        chargeBack: null,
        chargeBackAmount: null,
        estimates: null,
        costIncurred: null,
        costAmount: null,
        dealWithInsuranceCompanyId: null,
        involvedType: null,
        involvedPersonType: null,
        involvedPersonName: null,
        involvedThirdPartyId: null,
        correctiveActionApplied: null,
        dotRecordable: null,
        preventable: null,
        atFault: null,
        truckId: null,
        trailerId: null,
        locationType: null,
        savedAddressId: null,
        incidentType: null,
        description: null,
        files: [],
        notesArray: []
      },
      truckData: null,
      driversList: [],
      selectedTruckTypes: []
    };
  },
  created: function created() {
    if (this.isEditMode) {
      this.getIncidentDetails();
    }
  },
  methods: {
    shareClick: function shareClick() {
      var _this2 = this;

      var payload = {
        incidentId: this.incidentDetails.incidentId,
        type: 'publicFiles'
      };
      this.$store.dispatch('incidents/shareLink', payload).then(function (_ref) {
        var data = _ref.data;
        var url = data.payload.link;
        var that = _this2;

        _this2.$copyText(url).then(function (e) {
          that.$vs.notify({
            title: 'Success',
            text: 'Copied',
            color: 'success'
          });
        }, function (e) {
          that.$vs.notify({
            title: 'Danger',
            text: 'Can not copy',
            color: 'danger'
          });
        });
      });
    },
    changeTab: function changeTab(id) {
      if (!id) return;
      this.selectedTab = id;
    },
    redirectToIncidentList: function redirectToIncidentList() {
      var query = {};

      if (this.$route.query && this.$route.query.tab) {
        query = {
          tab: this.$route.query.tab
        };
      }

      this.$router.push({
        name: 'Safety',
        query: query
      });
    },
    onConfirmDelete: function onConfirmDelete() {
      var _this3 = this;

      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Accept',
        title: 'Delete Incident',
        text: 'Are you sure you want to delete this incident?',
        accept: function accept() {
          return _this3.deleteIncident();
        }
      });
    },
    deleteIncident: function () {
      var _deleteIncident = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var incidentId, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                incidentId = this.$route.params.id;
                _context.next = 4;
                return this.$store.dispatch('incidents/deleteIncident', incidentId);

              case 4:
                _ref2 = _context.sent;
                data = _ref2.data;

                if (data && data.message === 'Ok') {
                  this.$vs.notify({
                    color: 'success',
                    title: 'Delete Incident',
                    text: 'Incident deleted successfully'
                  });
                  this.redirectToIncidentList();
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  time: 8000,
                  text: _context.t0.response.data.message || _context.t0.message
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function deleteIncident() {
        return _deleteIncident.apply(this, arguments);
      };
    }(),
    getIncidentDetails: function () {
      var _getIncidentDetails = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var incidentId, _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.$vs.loading();
                incidentId = this.$route.params.id;
                _context2.next = 5;
                return this.$store.dispatch('incidents/getIncidentDetails', incidentId);

              case 5:
                _ref3 = _context2.sent;
                data = _ref3.data;

                if (data && data.payload) {
                  this.incidentDetails = _objectSpread({}, this.incidentDetails, data.payload.incident || {});
                } // Add watch on child component: Overview


                if (this.$refs && this.$refs.Overview && this.$refs.Overview[0]) {
                  this.$refs.Overview[0].addWatchOnIncidentDate();
                }

                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: _context2.t0.response.data.message || _context2.t0.message
                });

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

      return function getIncidentDetails() {
        return _getIncidentDetails.apply(this, arguments);
      };
    }(),
    submitForm: function () {
      var _submitForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                delete this.incidentDetails.emails;

                if (!this.isEditMode) {
                  _context3.next = 10;
                  break;
                }

                delete this.incidentDetails.files;
                delete this.incidentDetails.notesArray;
                _context3.next = 7;
                return this.$store.dispatch('incidents/updateIncident', this.incidentDetails);

              case 7:
                this.$vs.notify({
                  time: 8000,
                  color: 'success',
                  title: 'Success',
                  text: 'Incident updated successfully'
                });
                _context3.next = 15;
                break;

              case 10:
                if (this.incidentDetails.files && this.incidentDetails.files.length > 0) {
                  this.incidentDetails.files = this.incidentDetails.files.map(function (file) {
                    if (file.isPrivate !== 'private') {
                      file.isPrivate = null;
                    } // Remove file object from the payload


                    delete file.file;
                    return file;
                  });
                }

                if (this.incidentDetails.notesArray && this.incidentDetails.notesArray.length > 0) {
                  this.incidentDetails.notesArray = this.incidentDetails.notesArray.map(function (note) {
                    return {
                      localDate: note.localDate,
                      localTime: note.localTime,
                      note: note.note
                    };
                  });
                }

                _context3.next = 14;
                return this.$store.dispatch('incidents/createIncident', this.incidentDetails);

              case 14:
                this.$vs.notify({
                  time: 8000,
                  color: 'success',
                  title: 'Success',
                  text: 'Incident created successfully'
                });

              case 15:
                this.redirectToIncidentList();
                _context3.next = 21;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: _context3.t0.response.data.message || _context3.t0.message
                });

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 18]]);
      }));

      return function submitForm() {
        return _submitForm.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=template&id=b605f1f2&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=template&id=b605f1f2& ***!
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
    staticClass: "dashboard incident-dashboard"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col flex-wrap flex justify-between w-full"
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("h3", {
    staticClass: "self-center"
  }, [_vm._v("Incidents")])])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
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
  }), 1), _vm._v(" "), _c("span", {
    staticClass: "flex align-items-center gap-3"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      icon: "format_list_bulleted"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.redirectToIncidentList.apply(null, arguments);
      }
    }
  }, [_vm._v("\n            Incidents\n          ")]), _vm._v(" "), _vm.selectedTab === 2 && _vm.isEditMode ? _c("vs-button", {
    attrs: {
      type: "border",
      color: "primary"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.shareClick.apply(null, arguments);
      }
    }
  }, [_vm._v("\n            Share\n          ")]) : _vm._e()], 1)])])], 1), _vm._v(" "), _c("div", [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.selectedTab === 1,
      expression: "selectedTab === 1"
    }]
  }, [_c("incident-summary-card", {
    attrs: {
      header: _vm.incidentInfoHeaderLabel,
      incidentDetails: _vm.incidentDetails,
      enableSubmit: true,
      isEdit: _vm.isEditMode
    },
    on: {
      submit: _vm.submitForm
    }
  })], 1), _vm._v(" "), _vm._l(_vm.chips, function (tab) {
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
      ref: tab.label,
      refInFor: true,
      tag: "component",
      attrs: {
        isEdit: _vm.isEditMode
      },
      on: {
        saveIncident: _vm.submitForm,
        cancel: _vm.redirectToIncidentList,
        delete: _vm.onConfirmDelete
      },
      model: {
        value: _vm.incidentDetails,
        callback: function callback($$v) {
          _vm.incidentDetails = $$v;
        },
        expression: "incidentDetails"
      }
    })], 1);
  })], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".incident-dashboard {\n  /* Chrome, Safari, Edge, Opera */\n  /*!* Firefox *!*/\n}\n.incident-dashboard input::-webkit-outer-spin-button,\n.incident-dashboard input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n[dir] .incident-dashboard input::-webkit-outer-spin-button, [dir] .incident-dashboard input::-webkit-inner-spin-button {\n  margin: 0;\n}\n.incident-dashboard input[type=number] {\n  -moz-appearance: textfield;\n}\n.incident-dashboard input[type=number]::-webkit-inner-spin-button,\n.incident-dashboard input[type=number]::-webkit-outer-spin-button {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss&");

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

/***/ "./resources/js/src/views/pages/safety/IncidentsInfo.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/IncidentsInfo.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IncidentsInfo_vue_vue_type_template_id_b605f1f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IncidentsInfo.vue?vue&type=template&id=b605f1f2& */ "./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=template&id=b605f1f2&");
/* harmony import */ var _IncidentsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IncidentsInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IncidentsInfo_vue_vue_type_style_index_0_id_b605f1f2_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss& */ "./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IncidentsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IncidentsInfo_vue_vue_type_template_id_b605f1f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IncidentsInfo_vue_vue_type_template_id_b605f1f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/safety/IncidentsInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentsInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_style_index_0_id_b605f1f2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=style&index=0&id=b605f1f2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_style_index_0_id_b605f1f2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_style_index_0_id_b605f1f2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_style_index_0_id_b605f1f2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_style_index_0_id_b605f1f2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=template&id=b605f1f2&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=template&id=b605f1f2& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_template_id_b605f1f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentsInfo.vue?vue&type=template&id=b605f1f2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/IncidentsInfo.vue?vue&type=template&id=b605f1f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_template_id_b605f1f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentsInfo_vue_vue_type_template_id_b605f1f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=53.js.map