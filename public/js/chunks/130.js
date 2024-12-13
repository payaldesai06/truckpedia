(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_helpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/config/helpers.js */ "./resources/js/src/config/helpers.js");








function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DetailsView",
  components: {
    CustomDateTimeSelector: function CustomDateTimeSelector() {
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/components/custom/CustomDateTimeSelector */ "./resources/js/src/components/custom/CustomDateTimeSelector.vue"));
    },
    DeletePrompt: function DeletePrompt() {
      return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! @/components/prompts/DeletePrompt */ "./resources/js/src/components/prompts/DeletePrompt.vue"));
    },
    RecordLinkDialog: function RecordLinkDialog() {
      return __webpack_require__.e(/*! import() */ 100).then(__webpack_require__.bind(null, /*! ./RecordLinkDialog */ "./resources/js/src/views/pages/menu/components/RecordLinkDialog.vue"));
    },
    Files: function Files() {
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @/components/files/Files */ "./resources/js/src/components/files/Files.vue"));
    }
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    },
    statusList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    userList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selectedItem: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    nextIconVisible: {
      type: Boolean,
      default: true
    },
    previousIconVisible: {
      type: Boolean,
      default: true
    },
    customFields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    addNewField: {
      type: Boolean,
      default: true
    },
    editColumnName: {
      type: Boolean,
      default: true
    },
    deleteDetailsDropdown: {
      type: Boolean,
      default: true
    },
    recordLinkData: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])("companyUserV2", ["getAllUsersList"]), {
    showNavigation: function showNavigation() {
      return this.selectedItem.length > 0;
    },
    allUsers: function allUsers() {
      return this.getAllUsersList;
    },
    allUsersMap: function allUsersMap() {
      return this.allUsers.reduce(function (acc, user) {
        acc[user.id] = user;
        return acc;
      }, {});
    },
    isAddView: function isAddView() {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(this.selectedItem);
    },
    recordList: function recordList() {
      return this.recordLinkDialog.selectedFieldId ? this.recordLinkData[this.recordLinkDialog.selectedFieldId] : {};
    }
  }),
  data: function data() {
    return {
      form: {},
      isMenuVisible: false,
      valueType: {
        text: "textValue",
        singleSelect: "singleSelectValue",
        date: "dateValue",
        user: "userValue",
        dateNoTz: "dateNoTzValue",
        files: "filesValue",
        number: "numberValue",
        currency: "currencyValue",
        multiSelect: "multiSelectValues",
        recordLink: "recordLinkValues",
        rollup: "rollupValue",
        formula: "formulaValue"
      },
      deletePrompt: {
        isActive: false,
        selectedItemID: null
      },
      recordLinkDialog: {
        isActive: false,
        selectedFieldId: null
      }
    };
  },
  methods: {
    searchLinkedRecords: function searchLinkedRecords(payload) {
      this.$emit("searchLinkedRecords", payload);
    },
    getStatusLabel: function getStatusLabel(value) {
      var status = this.statusList.find(function (item) {
        return item.label === value;
      });
      return status ? status.label : "";
    },
    getStatusColor: function getStatusColor(value) {
      var status = this.statusList.find(function (item) {
        return item.value === value;
      });
      return status ? status.color : "";
    },
    saveDetails: function saveDetails() {
      var _this = this;

      var payload = this.customFields.map(function (field) {
        var value = _this.valueType[field.type];
        var basicFields = ["text", "singleSelect", "number", "currency"];

        if (basicFields.includes(field.type)) {
          if (field.type === "number" || field.type === "currency") {
            return _defineProperty({
              fieldId: field.id
            }, value, !isNaN(_this.form[field.id]) ? _this.form[field.id] : null);
          }

          return _defineProperty({
            fieldId: field.id
          }, value, _this.form[field.id] || "");
        }

        if (field.type === "user") {
          return _defineProperty({
            fieldId: field.id
          }, value, (_this.form[field.id] || []).map(function (x) {
            return {
              userId: x.id
            };
          }));
        }

        if (field.type === "date" && _this.form[field.id]) {
          return _defineProperty({
            fieldId: field.id
          }, value, _objectSpread({}, _this.form[field.id]));
        }

        if (field.type === "dateNoTz" && _this.form[field.id]) {
          return _defineProperty({
            fieldId: field.id
          }, value, _objectSpread({}, _this.form[field.id]));
        }

        if (field.type === "multiSelect" && _this.form[field.id]) {
          return _defineProperty({
            fieldId: field.id
          }, value, (_this.form[field.id] || []).map(function (x) {
            return {
              optionId: x
            };
          }));
        }

        if (field.type === "recordLink" && _this.form[field.id]) {
          return _defineProperty({
            fieldId: field.id
          }, value, _this.form[field.id]);
        }

        if (field.type === "files" && _this.form[field.id]) {
          var filesPayload = _this.form[field.id].map(function (file) {
            var isTempID = isNaN(file.id) && file.id.includes("temp");
            var payload = isTempID ? {
              originalFileName: file.originalFileName,
              storageFileName: file.storageFileName
            } : {
              id: file.id
            };
            return payload;
          });

          return {
            fieldId: field.id,
            files: filesPayload
          };
        }
      }).filter(Boolean);
      this.isAddView ? this.$emit("submit:Details", payload) : this.$emit("update:Details", payload);
    },
    deleteDetails: function deleteDetails() {
      this.$emit("delete:Details", this.selectedItem[0].id);
    },
    updateDate: function updateDate(date, fieldId) {
      var _this$form$fieldId;

      var isDateNoTz = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var dateKeyValue = isDateNoTz ? "localDateOnly" : "utcDateOnly";
      var timeKeyValue = isDateNoTz ? "localTimeOnly" : "utcTimeOnly";
      this.form[fieldId] = (_this$form$fieldId = {}, _defineProperty(_this$form$fieldId, dateKeyValue, date), _defineProperty(_this$form$fieldId, timeKeyValue, this.form[fieldId][timeKeyValue] || null), _this$form$fieldId);
    },
    updateTime: function updateTime(time, fieldId) {
      var _this$form$fieldId2;

      var isDateNoTz = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var dateKeyValue = isDateNoTz ? "localDateOnly" : "utcDateOnly";
      var timeKeyValue = isDateNoTz ? "localTimeOnly" : "utcTimeOnly";
      this.form[fieldId] = (_this$form$fieldId2 = {}, _defineProperty(_this$form$fieldId2, timeKeyValue, time), _defineProperty(_this$form$fieldId2, dateKeyValue, this.form[fieldId][dateKeyValue] || null), _this$form$fieldId2);
    },
    fileSelected: function fileSelected(event, fieldId) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(event.target.files)) {
        var payload = {
          files: _toConsumableArray(event.target.files),
          recordId: this.selectedItem && this.selectedItem[0] && this.selectedItem[0].id ? this.selectedItem[0].id : null,
          fieldId: fieldId
        };
        this.$emit("uploadFiles", payload);
      }

      this.$refs["fileUpload-".concat(fieldId)][0].value = "";
    },
    deleteFile: function deleteFile(_ref8, fieldId) {
      var file = _ref8.file;

      if (fieldId) {
        this.form[fieldId] = (this.form[fieldId] || []).filter(function (item) {
          return item.id !== file.id;
        });
      }
    },
    initCustomFields: function initCustomFields(val) {
      var _this2 = this;

      var result = val.reduce(function (acc, field) {
        if (!_this2.isAddView) {
          var value = _this2.valueType[field.type];

          var item = _this2.selectedItem.find(function (item) {
            return item.fieldId === field.id;
          });

          if (item && value === "userValue") {
            acc[field.id] = (item[value] || []).map(function (x) {
              return _this2.allUsersMap[x.userId];
            });
          } else if (item && value === "dateValue") {
            acc[field.id] = item ? item[value] : {
              utcDateOnly: null,
              utcTimeOnly: null
            };
          } else if (item && value === "currencyValue") {
            acc[field.id] = item && item[value] ? Number(item[value]).toFixed(2) : null;
          } else if (item && value === "dateNoTz") {
            acc[field.id] = item ? item[value] : {
              localDateOnly: null,
              localTimeOnly: null
            };
          } else if (item && value === "multiSelectValues") {
            acc[field.id] = item ? item[value].map(function (x) {
              return x.optionId || x;
            }) : [];
          } else if (item && value === "recordLinkValues") {
            acc[field.id] = item ? item[value].map(function (x) {
              return _objectSpread({}, x, {
                recordData: _this2.getLinkedRecords(item.fieldId, x.recordId)
              });
            }) : [];
          } else if (item && value === "rollupValue") {
            acc[field.id] = item.numberValue;
          } else if (item && value === "formulaValue") {
            acc[field.id] = !isNaN(item.numberValue) ? item.numberValue : "";
          } else {
            acc[field.id] = item ? item[value] : "";
          }
        } else {
          acc[field.id] = "";
        }

        return acc;
      }, {});

      _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.form).forEach(function (key) {
        var hasKey = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(result).includes(key);

        if (!hasKey) delete _this2.form[key];
      });

      var fileFields = val.filter(function (field) {
        return field.type === "files";
      }).map(function (field) {
        return field.id;
      });

      if (fileFields.length) {
        fileFields.forEach(function (field) {
          _this2.form[field] = result[field];
        });
      }

      var singleSelect = val.filter(function (field) {
        return field.type === "singleSelect";
      });

      if (singleSelect.length) {
        singleSelect.forEach(function (field) {
          var optionIDs = (field.singleSelectOptions || []).map(function (x) {
            return x.optionId;
          });
          _this2.form[field.id] = optionIDs.includes(result[field.id]) ? result[field.id] : null;
        });
      }

      var multiSelect = val.filter(function (field) {
        return field.type === "multiSelect";
      });

      if (multiSelect.length) {
        multiSelect.forEach(function (field) {
          var optionIDs = (field.multiSelectOptions || []).map(function (x) {
            return x.optionId;
          });
          if (result[field.id]) _this2.form[field.id] = result[field.id].filter(function (x) {
            return optionIDs.includes(x);
          });
        });
      }

      this.form = _objectSpread({}, result, this.form);
    },
    getOptionColor: function getOptionColor(id, optionsArray) {
      var option = (optionsArray || []).find(function (option) {
        return option.optionId === id;
      });
      return option && option.color ? option.color : "";
    },
    getOptionName: function getOptionName(id, optionsArray) {
      var option = (optionsArray || []).find(function (option) {
        return option.optionId === id;
      });
      return option && option.optionName ? option.optionName : "";
    },
    initDeletePrompt: function initDeletePrompt(id) {
      this.deletePrompt.isActive = true;
      this.deletePrompt.selectedItemID = id;
    },
    deleteField: function deleteField() {
      this.$emit("deleteField", this.deletePrompt.selectedItemID);
      this.closeDeletePrompt();
    },
    closeDeletePrompt: function closeDeletePrompt() {
      this.deletePrompt.isActive = false;
      this.deletePrompt.selectedItemID = null;
    },
    toggleRecordLinkDialog: function toggleRecordLinkDialog(fieldId) {
      this.recordLinkDialog.isActive = true;
      this.recordLinkDialog.selectedFieldId = fieldId;
    },
    closeRecordLinkDialog: function closeRecordLinkDialog() {
      this.recordLinkDialog.isActive = false;
      this.recordLinkDialog.selectedFieldId = null;
    },
    linkRecord: function linkRecord(recordId) {
      var fieldId = this.recordLinkDialog.selectedFieldId;
      this.form[fieldId] = _toConsumableArray(this.form[fieldId] || []).concat([{
        recordId: recordId,
        recordData: this.getLinkedRecords(this.recordLinkDialog.selectedFieldId, recordId)
      }]);
      this.closeRecordLinkDialog();
    },
    getLinkedRecords: function getLinkedRecords(fieldId, recordId) {
      var result = [];

      if (fieldId && recordId) {
        var res = this.recordLinkData[fieldId].find(function (record) {
          return record.recordId === recordId;
        });
        result = res && res.data ? res.data : result;
      }

      return result;
    },
    deleteLinkedRecord: function deleteLinkedRecord(fieldId, recordId) {
      this.form[fieldId] = this.form[fieldId].filter(function (record) {
        return record.recordId !== recordId;
      });
    },
    generateTextColor: function generateTextColor(color) {
      return Object(_config_helpers_js__WEBPACK_IMPORTED_MODULE_9__["generateTextColor"])(color);
    },
    generatePlaceholder: function generatePlaceholder(customFieldData) {
      var _ref9 = customFieldData || {},
          type = _ref9.type,
          rollUpMetaData = _ref9.rollUpMetaData,
          formulaMetaData = _ref9.formulaMetaData;

      var _ref10 = rollUpMetaData || {},
          targetCustomFieldName = _ref10.targetCustomFieldName,
          targetSubmenuName = _ref10.targetSubmenuName;

      var _ref11 = formulaMetaData || {},
          formula = _ref11.formula;

      var _ref12 = formula || {},
          op = _ref12.op,
          params = _ref12.params;

      var _ref13 = params || [],
          _ref14 = _slicedToArray(_ref13, 2),
          prm1 = _ref14[0],
          prm2 = _ref14[1];

      var customFieldMap = this.customFields.reduce(function (acc, field) {
        acc[field.id] = field.name;
        return acc;
      }, {});
      var prm1Name = prm1 && prm1.customField ? customFieldMap[prm1.customField] : "";
      var prm2Name = prm2 && prm2.customField ? customFieldMap[prm2.customField] : "";

      if (type === "rollup") {
        if (targetSubmenuName && targetSubmenuName) {
          return "".concat(targetCustomFieldName, " RollUp (from ").concat(targetSubmenuName, ")");
        }
      } else if (type === "formula") {
        if (op && prm1Name && prm2Name) {
          return "".concat(prm1Name, " ").concat(op, " ").concat(prm2Name);
        }
      }

      return "";
    }
  },
  watch: {
    customFields: {
      handler: function handler(val) {
        this.initCustomFields(val);
      },
      deep: true,
      immediate: true
    },
    selectedItem: {
      handler: function handler() {
        this.initCustomFields(this.customFields);
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=template&id=6f83ee39&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=template&id=6f83ee39&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("Dialog", {
    staticClass: "dialog",
    style: {
      width: "40vw"
    },
    attrs: {
      visible: _vm.isPromptActive,
      closable: false,
      modal: true,
      breakpoints: {
        "960px": "75vw",
        "640px": "100vw"
      },
      contentStyle: {
        overflow: "auto",
        padding: "2px 70px 30px"
      }
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-full flex items-center justify-between"
        }, [_c("div", {
          staticClass: "w-full flex justify-between border-right"
        }, [false ? undefined : _c("div", {
          staticClass: "flex self-center"
        }), _vm._v(" "), _c("div", [_vm.showNavigation ? _c("vs-dropdown", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.deleteDetailsDropdown,
            expression: "deleteDetailsDropdown"
          }],
          staticClass: "cursor-pointer mr-2",
          attrs: {
            "vs-custom-content": "",
            "vs-trigger-click": ""
          }
        }, [_c("vs-icon", {
          attrs: {
            icon: "more_horiz"
          }
        }), _vm._v(" "), _c("vs-dropdown-menu", [_c("div", {
          staticClass: "m-2 flex items-center cursor-pointer hover:text-primary",
          on: {
            click: _vm.deleteDetails
          }
        }, [_c("vs-icon", {
          attrs: {
            icon: "delete",
            size: "small"
          }
        }), _vm._v(" "), _c("label", {
          staticClass: "cursor-pointer ml-2",
          domProps: {
            textContent: _vm._s("Delete")
          }
        })], 1)])], 1) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
          staticClass: "ml-4 self-end"
        }, [_c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: function click($event) {
              return _vm.$emit("toggleDialog");
            }
          }
        })], 1)])];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-full mt-4"
        }, [_c("div", {
          staticClass: "w-1/3 flex ml-auto"
        }, [_c("vs-button", {
          staticClass: "w-full",
          attrs: {
            color: "primary"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.saveDetails.apply(null, arguments);
            }
          }
        }, [_vm._v("\n          Save\n        ")]), _vm._v(" "), _c("vs-button", {
          staticClass: "w-full mr-0",
          attrs: {
            color: "primary",
            type: "border"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.$emit("toggleDialog");
            }
          }
        }, [_vm._v("\n          Cancel\n        ")])], 1)])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "w-full mt-4"
  }, [_vm._l(_vm.customFields, function (customField, index) {
    return _c("div", {
      key: index
    }, [[_c("div", {
      staticClass: "details-view"
    }, [_c("div", {
      staticClass: "label"
    }, [_c("label", {
      domProps: {
        textContent: _vm._s(customField.name)
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "detail-input"
    }, [customField.type === "singleSelect" ? _c("div", {
      staticClass: "w-full flex items-center"
    }, [_c("div", {
      staticClass: "w-full"
    }, [_c("Dropdown", {
      staticClass: "w-full",
      attrs: {
        options: customField.singleSelectOptions,
        optionLabel: "optionName",
        optionValue: "optionId",
        showClear: "",
        placeholder: "Select a ".concat(customField.name)
      },
      scopedSlots: _vm._u([{
        key: "value",
        fn: function fn(slotProps) {
          return [slotProps.value ? _c("div", {
            staticClass: "flex"
          }, [_c("vs-chip", {
            style: _vm.getOptionColor(slotProps.value, customField.singleSelectOptions) ? _vm.generateTextColor(_vm.getOptionColor(slotProps.value, customField.singleSelectOptions)) : "",
            attrs: {
              color: _vm.getOptionColor(slotProps.value, customField.singleSelectOptions)
            }
          }, [_vm._v("\n                        " + _vm._s(_vm.getOptionName(slotProps.value, customField.singleSelectOptions)) + "\n                      ")])], 1) : _c("label", {
            staticClass: "text-gray-400"
          }, [_vm._v("\n                      " + _vm._s(slotProps.placeholder) + "\n                    ")])];
        }
      }, {
        key: "option",
        fn: function fn(_ref) {
          var _ref$option = _ref.option,
              optionName = _ref$option.optionName,
              color = _ref$option.color;
          return [_c("div", {
            staticClass: "flex"
          }, [_c("vs-chip", {
            style: color ? _vm.generateTextColor(color) : "",
            attrs: {
              color: color || ""
            }
          }, [_vm._v("\n                        " + _vm._s(optionName) + "\n                      ")])], 1)];
        }
      }], null, true),
      model: {
        value: _vm.form[customField.id],
        callback: function callback($$v) {
          _vm.$set(_vm.form, customField.id, $$v);
        },
        expression: "form[customField.id]"
      }
    })], 1)]) : customField.type === "user" ? _c("div", {
      staticClass: "w-full flex items-center"
    }, [_c("div", {
      staticClass: "w-full"
    }, [_c("Multiselect", {
      staticClass: "w-full",
      attrs: {
        placeholder: "Select ".concat(customField.name),
        "show-labels": false,
        "track-by": "id",
        label: "fullName",
        multiple: true,
        options: _vm.allUsers,
        "allow-empty": true,
        closeOnSelect: false
      },
      model: {
        value: _vm.form[customField.id],
        callback: function callback($$v) {
          _vm.$set(_vm.form, customField.id, $$v);
        },
        expression: "form[customField.id]"
      }
    })], 1)]) : customField.type === "date" ? _c("div", {
      staticClass: "w-full flex items-center"
    }, [_c("div", {
      staticClass: "w-full"
    }, [_c("CustomDateTimeSelector", {
      staticClass: "menu-detailsview-date-input",
      attrs: {
        dateValue: _vm.form[customField.id].utcDateOnly,
        timeValue: _vm.form[customField.id].utcTimeOnly
      },
      on: {
        "input:Date": function inputDate($event) {
          return _vm.updateDate($event, customField.id);
        },
        "input:Time": function inputTime($event) {
          return _vm.updateTime($event, customField.id);
        }
      }
    })], 1)]) : customField.type === "dateNoTz" ? _c("div", {
      staticClass: "w-full flex items-center"
    }, [_c("div", {
      staticClass: "w-full"
    }, [_c("CustomDateTimeSelector", {
      staticClass: "menu-detailsview-date-input",
      attrs: {
        dateValue: _vm.form[customField.id].localDateOnly,
        timeValue: _vm.form[customField.id].localTimeOnly,
        convertToUTC: false
      },
      on: {
        "input:Date": function inputDate($event) {
          return _vm.updateDate($event, customField.id, true);
        },
        "input:Time": function inputTime($event) {
          return _vm.updateTime($event, customField.id, true);
        }
      }
    })], 1)]) : customField.type === "files" ? _c("div", {
      staticClass: "w-full flex items-center"
    }, [_c("div", {
      staticClass: "vx-col w-full",
      attrs: {
        id: "file-input"
      }
    }, [_c("vx-input-group", [_c("div", {
      staticClass: "vs-component vs-con-input-label vs-input w-full vs-input-primary"
    }, [_c("div", {
      staticClass: "vs-con-input"
    }, [_c("input", {
      ref: "fileUpload-".concat(customField.id),
      refInFor: true,
      staticClass: "vs-inputx vs-input--input normal hasValue",
      attrs: {
        type: "file",
        multiple: ""
      },
      on: {
        change: function change($event) {
          return _vm.fileSelected($event, customField.id);
        }
      }
    })])])])], 1)]) : customField.type === "number" ? _c("div", {
      staticClass: "w-full"
    }, [_c("vs-input", {
      staticClass: "w-full number-field",
      class: {
        hasInput: typeof _vm.form[customField.id] === "number"
      },
      attrs: {
        placeholder: "Enter ".concat(customField.name),
        type: "number",
        color: "primary"
      },
      on: {
        wheel: function wheel($event) {
          return $event.target.blur();
        }
      },
      model: {
        value: _vm.form[customField.id],
        callback: function callback($$v) {
          _vm.$set(_vm.form, customField.id, _vm._n($$v));
        },
        expression: "form[customField.id]"
      }
    })], 1) : customField.type === "currency" ? _c("div", {
      staticClass: "w-full"
    }, [_c("vs-input", {
      staticClass: "w-full number-field number-field-icon",
      class: {
        hasInput: typeof _vm.form[customField.id] === "number"
      },
      attrs: {
        placeholder: "Enter ".concat(customField.name),
        "icon-no-border": "",
        icon: "attach_money",
        type: "number",
        color: "primary"
      },
      on: {
        wheel: function wheel($event) {
          return $event.target.blur();
        }
      },
      model: {
        value: _vm.form[customField.id],
        callback: function callback($$v) {
          _vm.$set(_vm.form, customField.id, _vm._n($$v));
        },
        expression: "form[customField.id]"
      }
    })], 1) : customField.type === "multiSelect" ? _c("div", {
      staticClass: "flex items-center",
      staticStyle: {
        width: "calc(100% - 21px)"
      }
    }, [_c("div", {
      staticClass: "w-full"
    }, [_c("MultiSelect", {
      staticClass: "w-full custom-multiselect",
      attrs: {
        options: customField.multiSelectOptions,
        filter: true,
        scrollHeight: "150px",
        optionLabel: "optionName",
        optionValue: "optionId",
        placeholder: "Select options"
      },
      scopedSlots: _vm._u([{
        key: "value",
        fn: function fn(slotProps) {
          return [slotProps.value && slotProps.value.length ? _c("div", {
            staticClass: "flex"
          }, _vm._l(slotProps.value, function (option, index) {
            return _c("div", {
              key: index
            }, [_c("vs-chip", {
              style: _vm.getOptionColor(option, customField.multiSelectOptions) ? _vm.generateTextColor(_vm.getOptionColor(option, customField.multiSelectOptions)) : "",
              attrs: {
                color: _vm.getOptionColor(option, customField.multiSelectOptions)
              }
            }, [_vm._v("\n                          " + _vm._s(_vm.getOptionName(option, customField.multiSelectOptions)) + "\n                        ")])], 1);
          }), 0) : _c("label", {
            staticClass: "text-gray-400"
          }, [_vm._v("\n                      " + _vm._s(slotProps.placeholder) + "\n                    ")])];
        }
      }, {
        key: "option",
        fn: function fn(_ref2) {
          var _ref2$option = _ref2.option,
              optionName = _ref2$option.optionName,
              color = _ref2$option.color;
          return [_c("div", {
            staticClass: "flex"
          }, [_c("vs-chip", {
            style: color ? _vm.generateTextColor(color) : "",
            attrs: {
              color: color || ""
            }
          }, [_vm._v("\n                        " + _vm._s(optionName) + "\n                      ")])], 1)];
        }
      }], null, true),
      model: {
        value: _vm.form[customField.id],
        callback: function callback($$v) {
          _vm.$set(_vm.form, customField.id, $$v);
        },
        expression: "form[customField.id]"
      }
    })], 1)]) : customField.type === "recordLink" ? _c("div", {
      staticClass: "flex items-center",
      staticStyle: {
        width: "calc(100% - 21px)"
      }
    }, [_vm.form[customField.id] && _vm.form[customField.id].length ? _c("div", {
      staticClass: "w-full"
    }, _vm._l(_vm.form[customField.id], function (record) {
      return _c("div", {
        key: record.recordId,
        staticClass: "p-2 border-2 rounded mb-2 flex w-full justify-between flex-wrap"
      }, _vm._l(record.recordData, function (rec, index) {
        return _c("div", {
          key: index,
          class: [index === 0 || !(record.recordData.length > 2) ? "w-full" : "w-1/".concat(record.recordData.length - 1)]
        }, [index === 0 ? _c("div", {
          staticClass: "w-full flex items-center justify-between"
        }, [rec.type === "singleSelect" ? _c("vs-chip", {
          staticClass: "w-max text-ellipsis",
          style: rec.color ? _vm.generateTextColor(rec.color) : "",
          attrs: {
            color: rec.color ? rec.color : ""
          }
        }, [_vm._v("\n                        " + _vm._s(rec.value || "") + "\n                      ")]) : _c("label", {
          staticClass: "font-semibold text-ellipsis"
        }, [_vm._v("\n                        " + _vm._s(rec.value || "") + "\n                      ")]), _vm._v(" "), _c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "close"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.deleteLinkedRecord(customField.id, record.recordId);
            }
          }
        })], 1) : index > 0 ? _c("div", {
          staticClass: "flex flex-col w-full mt-2"
        }, [_c("label", {
          staticClass: "text-xs"
        }, [_vm._v(_vm._s(rec.name))]), _vm._v(" "), rec.type === "singleSelect" ? _c("vs-chip", {
          staticClass: "w-max text-ellipsis",
          style: rec.color ? _vm.generateTextColor(rec.color) : "",
          attrs: {
            color: rec.color ? rec.color : ""
          }
        }, [_vm._v("\n                        " + _vm._s(rec.value || "") + "\n                      ")]) : _c("label", {
          staticClass: "text-ellipsis"
        }, [_vm._v("\n                        " + _vm._s(rec.value || "") + "\n                      ")])], 1) : _vm._e()]);
      }), 0);
    }), 0) : _vm._e(), _vm._v(" "), !_vm.form[customField.id].length ? _c("vs-button", {
      staticClass: "p-1 text-sm",
      attrs: {
        color: "primary",
        type: "border",
        icon: "add"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.toggleRecordLinkDialog(customField.id);
        }
      }
    }, [_vm._v("\n                Add Record\n              ")]) : _vm._e()], 1) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form[customField.id],
        expression: "form[customField.id]"
      }],
      staticClass: "w-full custom-input",
      attrs: {
        disabled: customField.type === "rollup" || customField.type === "formula",
        placeholder: _vm.generatePlaceholder(customField),
        type: "filled",
        color: "primary"
      },
      domProps: {
        value: _vm.form[customField.id]
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.form, customField.id, $event.target.value);
        }
      }
    }), _vm._v(" "), _vm.editColumnName ? _c("vs-dropdown", {
      staticClass: "cursor-pointer ml-2",
      attrs: {
        "vs-custom-content": "",
        "vs-trigger-click": ""
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: "more_horiz"
      }
    }), _vm._v(" "), _c("vs-dropdown-menu", [_c("vs-dropdown-item", [_c("div", {
      staticClass: "m-2 flex items-center cursor-pointer hover:text-primary",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.$emit("editField", customField.id);
        }
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: "edit",
        size: "small"
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "cursor-pointer ml-2",
      domProps: {
        textContent: _vm._s("Edit")
      }
    })], 1)]), _vm._v(" "), !customField.level ? _c("vs-dropdown-item", [_c("div", {
      staticClass: "m-2 flex items-center cursor-pointer hover:text-primary",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.initDeletePrompt(customField.id);
        }
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: "delete",
        size: "small"
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "cursor-pointer ml-2",
      domProps: {
        textContent: _vm._s("Delete")
      }
    })], 1)]) : _vm._e()], 1)], 1) : _vm._e()], 1)])], _vm._v(" "), customField.type === "files" && _vm.form[customField.id].length > 0 ? [_c("div", {
      staticClass: "files-list-container"
    }, [_c("div", {
      staticClass: "w-full"
    }), _vm._v(" "), _c("Files", {
      staticClass: "height-170 overflow-x-auto border-gray rounded p-2 mt-2 files-list",
      attrs: {
        fileList: _vm.form[customField.id]
      },
      on: {
        deleteFile: function deleteFile($event) {
          return _vm.deleteFile($event, customField.id);
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "width-28"
    })], 1)] : _vm._e()], 2);
  }), _vm._v(" "), _vm.addNewField ? _c("div", {
    staticClass: "w-full flex items-center mt-5"
  }, [_c("div", {
    staticClass: "w-1/4"
  }, [_c("label", {
    staticClass: "cursor-pointer hover:text-primary text-sm",
    domProps: {
      textContent: _vm._s("+ Add new field")
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("toggleFieldDialog");
      }
    }
  })])]) : _vm._e()], 2), _vm._v(" "), _vm._v(" "), _vm.deletePrompt.isActive ? _c("DeletePrompt", {
    attrs: {
      isPromptActive: _vm.deletePrompt.isActive,
      label: "Do you want to delete this field?"
    },
    on: {
      onAccept: _vm.deleteField,
      onClose: _vm.closeDeletePrompt
    }
  }) : _vm._e(), _vm._v(" "), _vm.recordLinkDialog.isActive ? _c("RecordLinkDialog", {
    attrs: {
      isDialogActive: _vm.recordLinkDialog.isActive,
      recordList: _vm.recordList,
      selectedFieldId: _vm.recordLinkDialog.selectedFieldId
    },
    on: {
      onClose: _vm.closeRecordLinkDialog,
      onSelect: _vm.linkRecord,
      searchLinkedRecords: _vm.searchLinkedRecords
    }
  }) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#file-input input[type=file][data-v-6f83ee39]::-webkit-file-upload-button {\n  display: none;\n}\n.dialog[data-v-6f83ee39] {\n  z-index: 999 !important;\n}\n[dir] .dialog[data-v-6f83ee39] .p-dialog-header {\n  padding: 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1333333333);\n}\n.dialog[data-v-6f83ee39] .p-dialog-content {\n  overflow-y: visible;\n}\n[dir] .dialog[data-v-6f83ee39] .p-dialog-content {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1333333333);\n}\n.dialog .files-list-container[data-v-6f83ee39] {\n  display: grid;\n  grid-template-columns: 25% 75%;\n}\n.dialog .files-list-container .files-list[data-v-6f83ee39] {\n  width: calc(100% - 21px);\n}\n.dialog .files-list-container .files-list[data-v-6f83ee39] label {\n  white-space: nowrap;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dialog .files-list-container .files-list[data-v-6f83ee39] .vs-button--icon {\n  z-index: 49;\n}\n.dialog .details-view[data-v-6f83ee39] {\n  /* &:first-child{\n    border-bottom: 1px solid rgba(0,0,0,0.1);\n    margin-bottom: 20px;\n    padding-bottom: 20px;\n  } */\n  width: 100%;\n  align-items: center;\n  display: grid;\n  grid-template-columns: 25% 75%;\n  /* &:not(:first-child){\n    margin-top: 1.5rem; \n    width: 100%;\n    display: flex;\n    align-items: center;\n  } */\n}\n[dir] .dialog .details-view[data-v-6f83ee39] {\n  margin-top: 1.5rem;\n}\n.dialog .details-view .label[data-v-6f83ee39] {\n  width: 100%;\n}\n.dialog .details-view .label label[data-v-6f83ee39] {\n  color: hsl(0deg, 0%, 20%);\n  opacity: 0.75;\n  font-size: 13px;\n}\n.dialog .details-view .detail-input[data-v-6f83ee39] {\n  width: 100%;\n  display: flex;\n}\n.dialog .number-field.hasInput[data-v-6f83ee39] .input-span-placeholder {\n  visibility: hidden !important;\n}\n.dialog .number-field[data-v-6f83ee39] {\n  /* Chrome, Safari, Edge, Opera */\n  /* Firefox */\n}\n.dialog .number-field[data-v-6f83ee39] input::-webkit-outer-spin-button,\n.dialog .number-field[data-v-6f83ee39] input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n[dir] .dialog .number-field[data-v-6f83ee39] input::-webkit-outer-spin-button, [dir] .dialog .number-field[data-v-6f83ee39] input::-webkit-inner-spin-button {\n  margin: 0;\n}\n.dialog .number-field[data-v-6f83ee39] input[type=number] {\n  -moz-appearance: textfield;\n}\n.dialog .number-field-icon[data-v-6f83ee39] .vs-con-input .vs-icon {\n  z-index: 1;\n}\n[dir] .dialog .number-field-icon[data-v-6f83ee39] .vs-con-input .vs-icon {\n  margin-top: 2px;\n}\n[dir=ltr] .dialog .number-field-icon[data-v-6f83ee39] .vs-input--input.hasIcon, [dir=ltr] .dialog .number-field-icon[data-v-6f83ee39] .vs-input--input.hasIcon:not(.icon-after-input) + .vs-input--placeholder {\n  padding-left: 1.5rem !important;\n}\n[dir=rtl] .dialog .number-field-icon[data-v-6f83ee39] .vs-input--input.hasIcon, [dir=rtl] .dialog .number-field-icon[data-v-6f83ee39] .vs-input--input.hasIcon:not(.icon-after-input) + .vs-input--placeholder {\n  padding-right: 1.5rem !important;\n}\n.dialog .custom-multiselect[data-v-6f83ee39] .p-multiselect-label {\n  max-height: 36px;\n}\n[dir] .menu-detailsview-date-input[data-v-6f83ee39] .vs-con-input input {\n  background-color: #fff;\n}\n[dir] .text-end[data-v-6f83ee39] {\n  text-align: end;\n}\n[dir=ltr] .border-right[data-v-6f83ee39] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1333333333);\n}\n[dir=rtl] .border-right[data-v-6f83ee39] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1333333333);\n}\n.color-gray[data-v-6f83ee39] {\n  color: gray;\n}\n.color-lightgray[data-v-6f83ee39] {\n  color: lightgray;\n}\n.height-170[data-v-6f83ee39] {\n  height: 170px;\n}\n[dir] .border-gray[data-v-6f83ee39] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.width-28[data-v-6f83ee39] {\n  width: 28px;\n}\n.details-view[data-v-6f83ee39] {\n  /* &:first-child{\n    border-bottom: 1px solid rgba(0,0,0,0.1);\n    margin-bottom: 20px;\n    padding-bottom: 20px;\n  } */\n  width: 100%;\n  display: flex;\n  align-items: center;\n  /* &:not(:first-child){\n    margin-top: 1.5rem; \n    width: 100%;\n    display: flex;\n    align-items: center;\n  } */\n}\n[dir] .details-view[data-v-6f83ee39] {\n  margin-top: 1.5rem;\n}\n.details-view .label[data-v-6f83ee39] {\n  width: 25%;\n}\n.details-view .label label[data-v-6f83ee39] {\n  color: hsl(0deg, 0%, 20%);\n  opacity: 0.75;\n  font-size: 13px;\n  word-break: break-word;\n}\n.details-view .detail-input[data-v-6f83ee39] {\n  width: 100%;\n  display: flex;\n}\n[dir] .border-2[data-v-6f83ee39] {\n  border: 2px solid rgba(0, 0, 0, 0.1);\n}\n[dir] .border-2[data-v-6f83ee39]:hover {\n  border: 2px solid rgba(0, 0, 0, 0.2);\n}\n.text-ellipsis[data-v-6f83ee39] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.w-max[data-v-6f83ee39] {\n  width: -moz-max-content;\n  width: max-content;\n}\n.custom-input[data-v-6f83ee39] {\n  color: inherit;\n  position: relative;\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n[dir] .custom-input[data-v-6f83ee39] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0.7rem !important;\n  padding: 0.4rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/config/helpers.js":
/*!********************************************!*\
  !*** ./resources/js/src/config/helpers.js ***!
  \********************************************/
/*! exports provided: generateTextColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTextColor", function() { return generateTextColor; });
var generateTextColor = function generateTextColor(bgColor) {
  if (!bgColor) return "color: #000000;";

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  var rgb = hexToRgb(bgColor) || {};
  var r = rgb.r;
  var g = rgb.g;
  var b = rgb.b; // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html

  var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)); // Using the HSP value, determine whether the bgColor is light or dark

  if (hsp > 127.5) {
    // light - Need dark Text
    return "color: #000000;";
  } else {
    // dark - Need light Text
    return "color: #FFFFFF;";
  }
};

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/DetailsView.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/DetailsView.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailsView_vue_vue_type_template_id_6f83ee39_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsView.vue?vue&type=template&id=6f83ee39&scoped=true& */ "./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=template&id=6f83ee39&scoped=true&");
/* harmony import */ var _DetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DetailsView_vue_vue_type_style_index_0_id_6f83ee39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true& */ "./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailsView_vue_vue_type_template_id_6f83ee39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailsView_vue_vue_type_template_id_6f83ee39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f83ee39",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/menu/components/DetailsView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_style_index_0_id_6f83ee39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=style&index=0&id=6f83ee39&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_style_index_0_id_6f83ee39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_style_index_0_id_6f83ee39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_style_index_0_id_6f83ee39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_style_index_0_id_6f83ee39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=template&id=6f83ee39&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=template&id=6f83ee39&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_template_id_6f83ee39_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsView.vue?vue&type=template&id=6f83ee39&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/menu/components/DetailsView.vue?vue&type=template&id=6f83ee39&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_template_id_6f83ee39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsView_vue_vue_type_template_id_6f83ee39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=130.js.map