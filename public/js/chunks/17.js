(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");









function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries

 // Constants


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MaintenanceForm',
  components: {
    AddServiceType: function AddServiceType() {
      return __webpack_require__.e(/*! import() */ 211).then(__webpack_require__.bind(null, /*! ./components/AddServiceType.vue */ "./resources/js/src/views/pages/maintenance-v2/components/AddServiceType.vue"));
    },
    Files: function Files() {
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @/components/files/Files */ "./resources/js/src/components/files/Files.vue"));
    }
  },
  props: {
    truckData: {
      type: Object,
      default: function _default() {}
    },
    trailerData: {
      type: Object,
      default: function _default() {}
    },
    issueId: {
      type: Number,
      default: null
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('vehicleV2', ['getVehiclesList']), Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('companyUserV2', ['getAllUsersList']), Object(vuex__WEBPACK_IMPORTED_MODULE_9__["mapGetters"])('maintenanceV2', ['getSelectedIssue', 'getServiceTypes']), {
    allUsers: function allUsers() {
      return this.getAllUsersList.map(function (user, index) {
        return _objectSpread({}, user, {
          uniqueId: "user-".concat(index)
        });
      });
    },
    allVehicles: function allVehicles() {
      var vehicles = [];
      var _this$getVehiclesList = this.getVehiclesList,
          trucks = _this$getVehiclesList.trucks,
          trailers = _this$getVehiclesList.trailers;
      if (trucks) trucks.forEach(function (truck, index) {
        vehicles.push(_objectSpread({}, truck, {
          id: "truck-".concat(truck.id),
          type: 'truck',
          uniqueId: "truck-".concat(index)
        }));
      });
      if (trailers) trailers.forEach(function (trailer, index) {
        vehicles.push(_objectSpread({}, trailer, {
          id: "trailer-".concat(trailer.id),
          type: 'trailer',
          uniqueId: "trailer-".concat(index)
        }));
      });
      return vehicles;
    },
    selectedVehicleDetails: function selectedVehicleDetails() {
      var vehicleId = this.formData.vehicleId;
      if (!vehicleId) return null;
      var vehicle = this.allVehicles.find(function (vehicle) {
        return vehicle.id === vehicleId;
      });
      return vehicle;
    },
    isEditForm: function isEditForm() {
      return this.$route.name === 'maintenance-edit';
    },
    selectedIssue: function selectedIssue() {
      return this.getSelectedIssue;
    },
    allAttachments: function allAttachments() {
      return _toConsumableArray(this.formData.attachments).concat(_toConsumableArray(this.tempFileHolder));
    },
    isMaintenanceModule: function isMaintenanceModule() {
      return this.$route.name === 'maintenance-add' || this.$route.name === 'maintenance-edit';
    }
  }),
  data: function data() {
    return {
      flatPickrConfig: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        time_24hr: true
      },
      prioritiesList: _config_constants__WEBPACK_IMPORTED_MODULE_10__["default"].PRIORITIES_LIST,
      formData: {
        status: 'reported',
        reportedByUserId: null,
        vehicleId: null,
        make: null,
        year: null,
        vin: null,
        vehicleType: null,
        serviceType: null,
        serviceTypeId: null,
        priority: null,
        notes: null,
        serviceLocation: null,
        scheduledStartTime: null,
        estimatedCompletionTime: null,
        estimatedCost: null,
        arrivedForService: null,
        serviceStartTime: null,
        updatedEstimatedCompletionTime: null,
        serviceCompletedTime: null,
        timeInService: null,
        finalCost: null,
        odometer: null,
        attachments: []
      },
      tempFileHolder: [],
      showServiceTypeModal: false,
      serviceTypeSuggestions: []
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        var _this = this;

        var id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (this.allUsers.length === 0 || this.allVehicles.length === 0 || this.isEditForm) this.$vs.loading();

                if (!(this.allUsers.length === 0)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return this.$store.dispatch('companyUserV2/fetchAllUsers');

              case 5:
                if (!(this.allVehicles.length === 0)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return this.$store.dispatch('vehicleV2/fetchVehicles');

              case 8:
                if (!(this.isMaintenanceModule && this.isEditForm)) {
                  _context.next = 16;
                  break;
                }

                id = this.$route.params.id;
                _context.next = 12;
                return this.$store.dispatch('maintenanceV2/fetchIssue', id);

              case 12:
                this.formData = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"])(this.selectedIssue);

                if (!this.selectedIssue.vehicleId) {
                  this.formData.vehicleId = null;
                } else {
                  this.formData.vehicleId = "".concat(this.selectedIssue.vehicleType, "-").concat(this.selectedIssue.vehicleId);
                }

                _context.next = 21;
                break;

              case 16:
                if (!(!this.isMaintenanceModule && this.issueId)) {
                  _context.next = 21;
                  break;
                }

                _context.next = 19;
                return this.$store.dispatch('maintenanceV2/fetchIssue', this.issueId);

              case 19:
                this.formData = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"])(this.selectedIssue);

                if (!this.selectedIssue.vehicleId) {
                  this.formData.vehicleId = null;
                } else {
                  this.formData.vehicleId = "".concat(this.selectedIssue.vehicleType, "-").concat(this.selectedIssue.vehicleId);
                }

              case 21:
                this.fetchServiceTypes();
                this.$nextTick(function () {
                  if (!_this.isMaintenanceModule && !_this.issueId && (_this.truckData || _this.trailerData)) {
                    var vehicleType = _this.truckData ? _this.truckData.type : _this.trailerData.type || null;
                    if (!vehicleType) return;
                    var vehicleId = vehicleType === 'truck' ? _this.truckData.id : _this.trailerData.id || null;
                    _this.formData.vehicleId = "".concat(vehicleType, "-").concat(vehicleId);
                    _this.formData.make = vehicleType === 'truck' ? _this.truckData.make : _this.trailerData.make || null;
                    _this.formData.year = vehicleType === 'truck' ? _this.truckData.year : _this.trailerData.year || null;
                    _this.formData.vin = vehicleType === 'truck' ? _this.truckData.vin : _this.trailerData.vin || null;
                  }
                });
                _context.next = 27;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](0);

              case 27:
                _context.prev = 27;
                this.$vs.loading.close();
                return _context.finish(27);

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 25, 27, 30]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    redirectBackToIssuesList: function redirectBackToIssuesList() {
      var updateList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isMaintenanceModule) {
        this.$router.push({
          name: 'maintenance-v2'
        });
      } else {
        this.$emit('closeMaintenanceForm', {
          updateList: updateList
        });
      }
    },
    changeStatus: function changeStatus(status) {
      this.formData.status = status;
    },
    onVehicleChange: function onVehicleChange(_ref) {
      var value = _ref.value;

      if (value) {
        var _this$selectedVehicle = this.selectedVehicleDetails,
            make = _this$selectedVehicle.make,
            year = _this$selectedVehicle.year,
            vin = _this$selectedVehicle.vin,
            type = _this$selectedVehicle.type;
        this.formData.make = make;
        this.formData.year = year;
        this.formData.vin = vin;
        this.formData.vehicleType = type;
      }
    },
    calculateDifferenceBetweenDateAndTime: function calculateDifferenceBetweenDateAndTime() {
      if (this.formData.arrivedForService && this.formData.serviceCompletedTime) {
        var differenceInTime = new Date(this.formData.serviceCompletedTime) - new Date(this.formData.arrivedForService);
        var differenceInHours = Math.floor(differenceInTime / (1000 * 60 * 60));
        var differenceInMinutes = Math.floor(differenceInTime % (1000 * 60 * 60) / (1000 * 60));
        this.formData.timeInService = "".concat(differenceInHours, "h:").concat(differenceInMinutes, "m");
      }
    },
    fileSelected: function fileSelected(event) {
      var files = event.target.files;

      for (var i = 0; i < files.length; i++) {
        this.tempFileHolder.push(files[i]);
      }

      this.$refs.fileUpload.value = '';
    },
    removeFile: function removeFile(_ref2) {
      var file = _ref2.file,
          index = _ref2.index;
      if (file.id && file.url) this.formData.attachments.splice(index, 1);else this.tempFileHolder.splice(index - this.formData.attachments.length, 1);
    },
    assignSecondsToDate: function assignSecondsToDate(date) {
      if (!date) return null;
      return "".concat(date, ":00");
    },
    getFileExtension: function getFileExtension(files) {
      var fileExtension = files.map(function (file) {
        var extension = file.name.split('.').pop();
        return {
          extension: extension
        };
      });
      return fileExtension;
    },
    generateS3NameAndURL: function () {
      var _generateS3NameAndURL = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(files) {
        var issueAttachments, _ref3, _ref3$data, result, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(files.length === 0)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                _context2.next = 5;
                return this.getFileExtension(files);

              case 5:
                issueAttachments = _context2.sent;
                _context2.next = 8;
                return this.$store.dispatch('maintenanceV2/uploadAttachment', {
                  issueAttachments: issueAttachments
                });

              case 8:
                _ref3 = _context2.sent;
                _ref3$data = _ref3.data;
                result = _ref3$data.result;
                payload = _ref3$data.payload;
                return _context2.abrupt("return", result && payload ? payload : []);

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 15]]);
      }));

      return function generateS3NameAndURL(_x) {
        return _generateS3NameAndURL.apply(this, arguments);
      };
    }(),
    uploadAttachmentsToS3: function () {
      var _uploadAttachmentsToS = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3(s3FileNameAndURL) {
        var attachments, i, _s3FileNameAndURL$i, fileName, url, file, _ref4, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!s3FileNameAndURL) {
                  _context3.next = 16;
                  break;
                }

                attachments = [];
                i = 0;

              case 4:
                if (!(i < s3FileNameAndURL.length)) {
                  _context3.next = 15;
                  break;
                }

                _s3FileNameAndURL$i = s3FileNameAndURL[i], fileName = _s3FileNameAndURL$i.fileName, url = _s3FileNameAndURL$i.url;
                file = this.tempFileHolder[i];
                _context3.next = 9;
                return this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
                  url: url,
                  file: file,
                  extension: fileName.split('.').pop()
                });

              case 9:
                _ref4 = _context3.sent;
                status = _ref4.status;
                if (status === 200) attachments.push({
                  id: null,
                  fileName: fileName,
                  originalFileName: file.name
                });

              case 12:
                i++;
                _context3.next = 4;
                break;

              case 15:
                return _context3.abrupt("return", attachments);

              case 16:
                _context3.next = 20;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](0);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 18]]);
      }));

      return function uploadAttachmentsToS3(_x2) {
        return _uploadAttachmentsToS.apply(this, arguments);
      };
    }(),
    submitForm: function () {
      var _submitForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4() {
        var s3FileNameAndURL, attachments, payload, _ref5, status, _ref6, _status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.$vs.loading(); // Process attachments

                _context4.next = 4;
                return this.generateS3NameAndURL(this.tempFileHolder);

              case 4:
                s3FileNameAndURL = _context4.sent;
                _context4.next = 7;
                return this.uploadAttachmentsToS3(s3FileNameAndURL);

              case 7:
                _context4.t0 = _context4.sent;

                if (_context4.t0) {
                  _context4.next = 10;
                  break;
                }

                _context4.t0 = [];

              case 10:
                attachments = _context4.t0;
                payload = _objectSpread({}, this.formData, {
                  scheduledStartTime: this.assignSecondsToDate(this.formData.scheduledStartTime),
                  estimatedCompletionTime: this.assignSecondsToDate(this.formData.estimatedCompletionTime),
                  arrivedForService: this.assignSecondsToDate(this.formData.arrivedForService),
                  serviceStartTime: this.assignSecondsToDate(this.formData.serviceStartTime),
                  updatedEstimatedCompletionTime: this.assignSecondsToDate(this.formData.updatedEstimatedCompletionTime),
                  serviceCompletedTime: this.assignSecondsToDate(this.formData.serviceCompletedTime),
                  attachments: _toConsumableArray(this.formData.attachments).concat(_toConsumableArray(attachments)),
                  vehicleId: this.formData.vehicleId ? this.formData.vehicleId.split('-')[1] : null
                });

                if (!payload.vehicleType && this.selectedVehicleDetails) {
                  payload.vehicleType = this.selectedVehicleDetails.type;
                }

                if (!this.isMaintenanceModule) {
                  _context4.next = 31;
                  break;
                }

                if (!this.isEditForm) {
                  _context4.next = 20;
                  break;
                }

                _context4.next = 17;
                return this.$store.dispatch('maintenanceV2/updateIssue', _objectSpread({}, this.selectedIssue.id, {
                  payload: payload
                }));

              case 17:
                _context4.t1 = _context4.sent;
                _context4.next = 23;
                break;

              case 20:
                _context4.next = 22;
                return this.$store.dispatch('maintenanceV2/createIssue', payload);

              case 22:
                _context4.t1 = _context4.sent;

              case 23:
                _ref5 = _context4.t1;
                status = _ref5.status;

                if (!(status === 200)) {
                  _context4.next = 29;
                  break;
                }

                _context4.next = 28;
                return this.$store.dispatch('maintenanceV2/fetchIssueList');

              case 28:
                this.redirectBackToIssuesList();

              case 29:
                _context4.next = 44;
                break;

              case 31:
                if (this.isMaintenanceModule) {
                  _context4.next = 44;
                  break;
                }

                if (!this.issueId) {
                  _context4.next = 38;
                  break;
                }

                _context4.next = 35;
                return this.$store.dispatch('maintenanceV2/updateIssue', _objectSpread({}, this.issueId, {
                  payload: payload
                }));

              case 35:
                _context4.t2 = _context4.sent;
                _context4.next = 41;
                break;

              case 38:
                _context4.next = 40;
                return this.$store.dispatch('maintenanceV2/createIssue', payload);

              case 40:
                _context4.t2 = _context4.sent;

              case 41:
                _ref6 = _context4.t2;
                _status = _ref6.status;

                if (_status === 200) {
                  this.redirectBackToIssuesList(true);
                }

              case 44:
                _context4.next = 51;
                break;

              case 46:
                _context4.prev = 46;
                _context4.t3 = _context4["catch"](0);
                console.log(_context4.t3);
                _context4.next = 51;
                return this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: _context4.t3.response.data.message || 'Something went wrong'
                });

              case 51:
                _context4.prev = 51;
                this.$vs.loading.close();
                return _context4.finish(51);

              case 54:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 46, 51, 54]]);
      }));

      return function submitForm() {
        return _submitForm.apply(this, arguments);
      };
    }(),
    fetchServiceTypes: function () {
      var _fetchServiceTypes = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.$store.dispatch('maintenanceV2/getServiceTypes');

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function fetchServiceTypes() {
        return _fetchServiceTypes.apply(this, arguments);
      };
    }(),
    handleServiceTypeChange: function handleServiceTypeChange(event) {
      this.formData.serviceTypeId = event.value.id;
      this.formData.serviceType = event.value.serviceType;
    },
    onClearServiceType: function onClearServiceType() {
      this.formData.serviceType = null;
      this.formData.serviceTypeId = null;
    },
    handleServiceTypeModal: function handleServiceTypeModal(value) {
      this.showServiceTypeModal = value;
    },
    autoComplete: function autoComplete(event) {
      this.formData.serviceType = event.query;
      this.serviceTypeSuggestions = this.getServiceTypes.filter(function (customer) {
        return customer.serviceType.toLowerCase().includes(event.query.toLowerCase());
      });
    },
    serviceAdded: function () {
      var _serviceAdded = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee6(service) {
        var foundService;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.fetchServiceTypes();

              case 2:
                foundService = this.getServiceTypes.find(function (item) {
                  return item.id === service.id;
                });

                if (foundService) {
                  this.formData.serviceType = foundService.serviceType;
                  this.formData.serviceTypeId = foundService.id;
                }

                this.showServiceTypeModal = false;

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function serviceAdded(_x3) {
        return _serviceAdded.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=template&id=f1135e1a&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=template&id=f1135e1a& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "maintenance-form"
  }, [_c("vx-card", {
    staticClass: "header"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col flex-wrap flex justify-between w-full"
  }, [_c("h3", {
    staticClass: "title"
  }, [_vm._v("Maintenance")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      type: "flat"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.redirectBackToIssuesList();
      }
    }
  }, [_vm._v("\n          X\n        ")])], 1)])]), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-4 status-container"
  }, [_c("div", {
    staticClass: "vx-row flex justify-evenly"
  }, [_c("div", {
    staticClass: "vx-col flex flex-col items-center"
  }, [_c("vs-avatar", {
    attrs: {
      icon: "description",
      color: _vm.formData.status === "reported" ? "primary" : "rgb(195, 195, 195)"
    },
    on: {
      click: function click($event) {
        return _vm.changeStatus("reported");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-md"
  }, [_vm._v("Reported")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col flex flex-col items-center"
  }, [_c("vs-avatar", {
    attrs: {
      icon: "schedule",
      color: _vm.formData.status === "scheduled" ? "primary" : "rgb(195, 195, 195)"
    },
    on: {
      click: function click($event) {
        return _vm.changeStatus("scheduled");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-md"
  }, [_vm._v("Scheduled")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col flex flex-col items-center"
  }, [_c("vs-avatar", {
    attrs: {
      icon: "cached",
      color: _vm.formData.status === "in_service" ? "primary" : "rgb(195, 195, 195)"
    },
    on: {
      click: function click($event) {
        return _vm.changeStatus("in_service");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-md"
  }, [_vm._v("In Service")])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col flex flex-col items-center"
  }, [_c("vs-avatar", {
    attrs: {
      icon: "done",
      color: _vm.formData.status === "completed" ? "primary" : "rgb(195, 195, 195)"
    },
    on: {
      click: function click($event) {
        return _vm.changeStatus("completed");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-md"
  }, [_vm._v("Completed")])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row m-auto mt-4 w-full md:mb-base maintenance-form-container"
  }, [_c("div", {
    staticClass: "vx-col padding-left-0 w-full md:w-1/2 mb-8 md:mb-0"
  }, [_c("vx-card", {
    staticClass: "reporting-form"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h4", [_vm._v("Reporting")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Reported By")]), _vm._v(" "), _c("Dropdown", {
    staticClass: "min-height-37",
    attrs: {
      options: _vm.allUsers,
      dataKey: "uniqueId",
      optionLabel: "fullName",
      optionValue: "id",
      filter: true,
      placeholder: "Select a User",
      showClear: true
    },
    model: {
      value: _vm.formData.reportedByUserId,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "reportedByUserId", $$v);
      },
      expression: "formData.reportedByUserId"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mt-1 flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Vehicle")]), _vm._v(" "), _c("Dropdown", {
    staticClass: "min-height-37",
    attrs: {
      options: _vm.allVehicles,
      disabled: !_vm.isMaintenanceModule,
      dataKey: "uniqueId",
      optionLabel: "number",
      optionValue: "id",
      filter: true,
      placeholder: "Select a Vehicle",
      showClear: true
    },
    on: {
      change: _vm.onVehicleChange
    },
    model: {
      value: _vm.formData.vehicleId,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "vehicleId", $$v);
      },
      expression: "formData.vehicleId"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Make")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      disabled: ""
    },
    model: {
      value: _vm.formData.make,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "make", $$v);
      },
      expression: "formData.make"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Year")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      disabled: ""
    },
    model: {
      value: _vm.formData.year,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "year", $$v);
      },
      expression: "formData.year"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("VIN")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      disabled: ""
    },
    model: {
      value: _vm.formData.vin,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "vin", $$v);
      },
      expression: "formData.vin"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Type of Service")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-3"
  }, [_c("AutoComplete", {
    staticClass: "w-full service-type-autocomplete",
    attrs: {
      suggestions: _vm.serviceTypeSuggestions,
      autoHighlight: true,
      field: "serviceType"
    },
    on: {
      "item-select": function itemSelect($event) {
        return _vm.handleServiceTypeChange($event);
      },
      complete: function complete($event) {
        return _vm.autoComplete($event);
      },
      clear: _vm.onClearServiceType
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(slotProps) {
        return [_c("div", [_vm._v(_vm._s(slotProps.item.serviceType))])];
      }
    }]),
    model: {
      value: _vm.formData.serviceType,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "serviceType", $$v);
      },
      expression: "formData.serviceType"
    }
  }), _vm._v(" "), _c("vs-button", {
    staticClass: "add-type-btn",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.handleServiceTypeModal(true);
      }
    }
  }, [_vm._v("Add Type")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col mt-1 w-full flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Priority")]), _vm._v(" "), _c("Dropdown", {
    attrs: {
      options: _vm.prioritiesList,
      optionLabel: "label",
      optionValue: "value",
      placeholder: "Select a Priority"
    },
    model: {
      value: _vm.formData.priority,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "priority", $$v);
      },
      expression: "formData.priority"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Notes")]), _vm._v(" "), _c("vs-textarea", {
    staticClass: "w-full",
    attrs: {
      maxLength: "4000"
    },
    model: {
      value: _vm.formData.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "notes", $$v);
      },
      expression: "formData.notes"
    }
  })], 1)])], 1), _vm._v(" "), _c("vx-card", {
    staticClass: "files-upload mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h4", [_vm._v("Add Pictures or Files")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full",
    attrs: {
      id: "file-input"
    }
  }, [_c("vx-input-group", {
    staticClass: "mb-base"
  }, [_c("div", {
    staticClass: "vs-component vs-con-input-label vs-input w-full vs-input-primary"
  }, [_c("div", {
    staticClass: "vs-con-input"
  }, [_c("input", {
    ref: "fileUpload",
    staticClass: "vs-inputx vs-input--input normal hasValue",
    attrs: {
      type: "file",
      multiple: ""
    },
    on: {
      change: _vm.fileSelected
    }
  })])])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row overflow-x-auto"
  }, [_c("div", {
    staticClass: "vx-col w-full height-170"
  }, [_c("Files", {
    attrs: {
      fileList: _vm.allAttachments
    },
    on: {
      deleteFile: _vm.removeFile
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col padding-right-0 w-full md:w-1/2 mb-8 md:mb-0"
  }, [_c("vx-card", {
    staticClass: "expiration-form"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h4", [_vm._v("Scheduling")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Service Location")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.serviceLocation,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "serviceLocation", $$v);
      },
      expression: "formData.serviceLocation"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col mt-1 w-full flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Scheduled Start Time")]), _vm._v(" "), _c("flat-pickr", {
    attrs: {
      placeholder: "Select Date and Time",
      config: _vm.flatPickrConfig
    },
    model: {
      value: _vm.formData.scheduledStartTime,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "scheduledStartTime", $$v);
      },
      expression: "formData.scheduledStartTime"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col mt-1 w-full flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Estimated Completion Time")]), _vm._v(" "), _c("flat-pickr", {
    attrs: {
      placeholder: "Select Date and Time",
      config: _vm.flatPickrConfig
    },
    model: {
      value: _vm.formData.estimatedCompletionTime,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "estimatedCompletionTime", $$v);
      },
      expression: "formData.estimatedCompletionTime"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Estimated Cost")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.estimatedCost,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "estimatedCost", $$v);
      },
      expression: "formData.estimatedCost"
    }
  })], 1)])], 1), _vm._v(" "), _c("vx-card", {
    staticClass: "in-service-form mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h4", [_vm._v("In Service")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col mt-1 w-full flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Arrived For Service")]), _vm._v(" "), _c("flat-pickr", {
    attrs: {
      placeholder: "Select Date and Time",
      config: _vm.flatPickrConfig
    },
    on: {
      "on-close": _vm.calculateDifferenceBetweenDateAndTime
    },
    model: {
      value: _vm.formData.arrivedForService,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "arrivedForService", $$v);
      },
      expression: "formData.arrivedForService"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col mt-1 w-full flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Service Start Time")]), _vm._v(" "), _c("flat-pickr", {
    attrs: {
      placeholder: "Select Date and Time",
      config: _vm.flatPickrConfig
    },
    model: {
      value: _vm.formData.serviceStartTime,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "serviceStartTime", $$v);
      },
      expression: "formData.serviceStartTime"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col mt-1 w-full flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Updated Estimated Completion Time")]), _vm._v(" "), _c("flat-pickr", {
    attrs: {
      placeholder: "Select Date and Time",
      config: _vm.flatPickrConfig
    },
    model: {
      value: _vm.formData.updatedEstimatedCompletionTime,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "updatedEstimatedCompletionTime", $$v);
      },
      expression: "formData.updatedEstimatedCompletionTime"
    }
  })], 1)])], 1), _vm._v(" "), _c("vx-card", {
    staticClass: "completed-form mt-4"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h4", [_vm._v("Completed")])])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full flex flex-col"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Service Completed Time")]), _vm._v(" "), _c("flat-pickr", {
    attrs: {
      placeholder: "Select Date and Time",
      config: _vm.flatPickrConfig
    },
    on: {
      "on-close": _vm.calculateDifferenceBetweenDateAndTime
    },
    model: {
      value: _vm.formData.serviceCompletedTime,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "serviceCompletedTime", $$v);
      },
      expression: "formData.serviceCompletedTime"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Time In Service")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.timeInService,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "timeInService", $$v);
      },
      expression: "formData.timeInService"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Final Cost")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.finalCost,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "finalCost", $$v);
      },
      expression: "formData.finalCost"
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.selectedVehicleDetails && _vm.selectedVehicleDetails.type === "truck",
      expression: "\n              selectedVehicleDetails &&\n              selectedVehicleDetails.type === 'truck'\n            "
    }],
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Odometer")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    attrs: {
      type: "number"
    },
    model: {
      value: _vm.formData.odometer,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "odometer", $$v);
      },
      expression: "formData.odometer"
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
        return _vm.redirectBackToIssuesList();
      }
    }
  }, [_vm._v("\n          CANCEL\n        ")])], 1)])]), _vm._v(" "), _c("AddServiceType", {
    attrs: {
      active: _vm.showServiceTypeModal
    },
    on: {
      close: function close($event) {
        return _vm.handleServiceTypeModal(false);
      },
      serviceAdded: _vm.serviceAdded
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#file-input input[type=file]::-webkit-file-upload-button {\n  display: none;\n}\n[dir] .maintenance-form .vx-card {\n  border-radius: 25px;\n}\n[dir] .maintenance-form-container {\n  margin-top: 15px;\n}\n.maintenance-form-container .files-upload ::v-deep .con-input-upload {\n  width: 95%;\n  height: 100px;\n}\n.maintenance-form-container .files-upload ::v-deep .con-img-upload {\n  max-height: 250px;\n  overflow-y: auto;\n}\n.maintenance-form-container .files-upload ::v-deep .vs-button--icon {\n  font-size: 24px;\n}\n.maintenance-form-container ::v-deep .p-dropdown-item {\n  min-height: 35px;\n}\n.maintenance-form .header .title {\n  align-self: center;\n}\n.maintenance-form .status-container ::v-deep .vs-button--icon {\n  font-size: 1.7rem;\n}\n[dir=ltr] .maintenance-form .padding-right-0 {\n  padding-right: 0;\n}\n[dir=rtl] .maintenance-form .padding-right-0 {\n  padding-left: 0;\n}\n[dir=ltr] .maintenance-form .padding-left-0 {\n  padding-left: 0;\n}\n[dir=rtl] .maintenance-form .padding-left-0 {\n  padding-right: 0;\n}\n.maintenance-form .height-170 {\n  height: 170px;\n}\n.maintenance-form .min-height-37 {\n  min-height: 37px;\n}\n.service-type-autocomplete {\n  display: block;\n}\n.service-type-autocomplete input {\n  width: 100%;\n}\n[dir] .service-type-autocomplete input {\n  border-radius: 5px;\n  padding: 0.7rem;\n}\n[dir] .service-type-autocomplete input:focus {\n  box-shadow: none;\n  border: 1px solid #ced4da;\n}\n.add-type-btn {\n  white-space: nowrap;\n  font-size: 0.9rem;\n  width: 100px;\n}\n[dir] .add-type-btn {\n  padding: 0.5rem 0.6rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss&");

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

/***/ "./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MaintenanceForm_vue_vue_type_template_id_f1135e1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaintenanceForm.vue?vue&type=template&id=f1135e1a& */ "./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=template&id=f1135e1a&");
/* harmony import */ var _MaintenanceForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaintenanceForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MaintenanceForm_vue_vue_type_style_index_0_id_f1135e1a_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss& */ "./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MaintenanceForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MaintenanceForm_vue_vue_type_template_id_f1135e1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MaintenanceForm_vue_vue_type_template_id_f1135e1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_style_index_0_id_f1135e1a_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=style&index=0&id=f1135e1a&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_style_index_0_id_f1135e1a_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_style_index_0_id_f1135e1a_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_style_index_0_id_f1135e1a_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_style_index_0_id_f1135e1a_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=template&id=f1135e1a&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=template&id=f1135e1a& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_template_id_f1135e1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceForm.vue?vue&type=template&id=f1135e1a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/maintenance-v2/MaintenanceForm.vue?vue&type=template&id=f1135e1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_template_id_f1135e1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceForm_vue_vue_type_template_id_f1135e1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=17.js.map